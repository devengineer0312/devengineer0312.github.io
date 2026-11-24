// Generates illustrated cover images for GitHub repositories that have no photos.
// Output: ../projects/GitHub repositories/<repo>/cover.png  (then run `npm run images`)
// Each illustration is a topic / system diagram drawn from what the repository contains.
import sharp from 'sharp'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const outRoot = path.resolve(root, '..', 'projects', 'GitHub repositories')

const W = 1600, H = 1200
const C = {
  bg: '#fbfaf7', ink: '#15201b', muted: '#55645d', faint: '#9aa49f', line: '#d9dcd6',
  copper: '#d4661a', copperL: '#f39a4c', copperBg: '#fff3e8', green: '#16a05f', greenBg: '#e8f6ee',
  blue: '#2a62cc', blueBg: '#eaf0fc', purple: '#7343c9', purpleBg: '#f1ebfb', white: '#ffffff',
}
const SANS = 'Segoe UI, Arial, sans-serif'
const MONO = 'Consolas, Menlo, monospace'
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')

// ---------- primitives ----------
const text = (x, y, s, { size = 24, weight = 400, fill = C.ink, font = SANS, anchor = 'start', ls = 0 } = {}) =>
  `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="${ls}">${esc(s)}</text>`

function block(x, y, w, h, title, sub, { accent = C.copper, bg = C.white, center = false } = {}) {
  const tx = center ? x + w / 2 : x + 30
  const anchor = center ? 'middle' : 'start'
  const ty = sub ? y + h / 2 - 6 : y + h / 2 + 9
  return `
  <g filter="url(#sh)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${bg}" stroke="${C.line}" stroke-width="2"/>
  </g>
  <rect x="${x}" y="${y + 18}" width="7" height="${h - 36}" rx="3.5" fill="${accent}"/>
  ${text(tx, ty, title, { size: 27, weight: 700, anchor })}
  ${sub ? text(tx, ty + 34, sub, { size: 19, font: MONO, fill: C.muted, anchor }) : ''}`
}

const arrow = (x1, y1, x2, y2, { color = C.faint, label, dashed = false } = {}) => {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3.5" ${dashed ? 'stroke-dasharray="10 8"' : ''} marker-end="url(#ah)"/>
  ${label ? `<rect x="${mx - label.length * 6.2 - 12}" y="${my - 20}" width="${label.length * 12.4 + 24}" height="34" rx="17" fill="${C.bg}" stroke="${C.line}"/>${text(mx, my + 4, label, { size: 17, font: MONO, fill: C.muted, anchor: 'middle' })}` : ''}`
}

const chip = (x, y, s, { fill = C.greenBg, color = C.green } = {}) => {
  const w = s.length * 11.5 + 30
  return { w, svg: `<rect x="${x}" y="${y}" width="${w}" height="40" rx="20" fill="${fill}"/>${text(x + w / 2, y + 27, s, { size: 18, font: MONO, fill: color, anchor: 'middle' })}` }
}
function chipRow(x, y, items, opts) {
  let cx = x, out = ''
  for (const s of items) { const c = chip(cx, y, s, opts); out += c.svg; cx += c.w + 12 }
  return out
}

// deterministic pseudo-random waveform
function wave(x, y, w, amp, seed, { step = 4, freqs = [0.045, 0.11, 0.23] } = {}) {
  let d = ''
  for (let i = 0; i <= w; i += step) {
    const v = freqs.reduce((s, f, k) => s + Math.sin(i * f + seed * (k + 1.7)) / (k + 1), 0)
    const n = Math.sin(i * 0.9 + seed * 13) * 0.18
    d += `${i === 0 ? 'M' : 'L'}${(x + i).toFixed(1)} ${(y - (v + n) * amp).toFixed(1)} `
  }
  return d
}

function frame({ repo, title, subtitle, body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="#dfe2dc"/></pattern>
    <radialGradient id="glow1" cx="88%" cy="6%" r="55%"><stop offset="0" stop-color="#f39a4c" stop-opacity=".18"/><stop offset="1" stop-color="#f39a4c" stop-opacity="0"/></radialGradient>
    <radialGradient id="glow2" cx="0%" cy="100%" r="55%"><stop offset="0" stop-color="#16a05f" stop-opacity=".12"/><stop offset="1" stop-color="#16a05f" stop-opacity="0"/></radialGradient>
    <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${C.faint}"/></marker>
    <filter id="sh" x="-10%" y="-10%" width="120%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#1c2c25" flood-opacity=".10"/></filter>
  </defs>
  <rect width="${W}" height="${H}" fill="${C.bg}"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>
  ${text(80, 92, `github.com/devengineer0312/${repo}`, { size: 22, font: MONO, fill: C.faint })}
  ${text(80, 158, title, { size: 56, weight: 700 })}
  ${text(80, 204, subtitle, { size: 26, fill: C.muted })}
  <rect x="${W - 250}" y="64" width="170" height="40" rx="20" fill="${C.copperBg}"/>
  ${text(W - 165, 91, 'ILLUSTRATION', { size: 17, font: MONO, fill: C.copper, anchor: 'middle', ls: 2 })}
  ${body}
</svg>`
}

// ---------- covers ----------
const covers = {}

covers['Headband_EEG_Firmware'] = () => {
  // top view of a head with a 6-electrode headband
  const cx = 330, cy = 610, r = 200
  const elec = [-62, -38, -14, 14, 38, 62].map((deg, i) => {
    const a = ((deg - 90) * Math.PI) / 180
    return { x: cx + Math.cos(a) * (r - 4), y: cy + Math.sin(a) * (r - 4), i }
  })
  const lanes = elec.map((e, i) => {
    const y = 330 + i * 92
    const col = i % 2 ? C.copper : C.green
    return `${text(700, y + 8, `CH${i + 1}`, { size: 20, font: MONO, fill: C.muted })}
      <line x1="770" y1="${y}" x2="1520" y2="${y}" stroke="${C.line}" stroke-width="1.5"/>
      <path d="${wave(770, y, 750, 22, i + 1, { step: 3, freqs: [0.06 + i * 0.006, 0.17, 0.41] })}" fill="none" stroke="${col}" stroke-width="3" stroke-linejoin="round"/>`
  }).join('')
  return frame({
    repo: 'Headband_EEG_Firmware',
    title: '6-Channel EEG Headband',
    subtitle: 'ATmega1284 firmware: acquisition, impedance checks and Bluetooth streaming',
    body: `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="${C.white}" stroke="${C.ink}" stroke-width="4" filter="url(#sh)"/>
    <path d="M${cx - 26} ${cy - r + 2} L${cx} ${cy - r - 40} L${cx + 26} ${cy - r + 2}" fill="${C.white}" stroke="${C.ink}" stroke-width="4" stroke-linejoin="round"/>
    <ellipse cx="${cx - r - 8}" cy="${cy}" rx="18" ry="44" fill="${C.white}" stroke="${C.ink}" stroke-width="4"/>
    <ellipse cx="${cx + r + 8}" cy="${cy}" rx="18" ry="44" fill="${C.white}" stroke="${C.ink}" stroke-width="4"/>
    <path d="M${cx - r * 0.93} ${cy - r * 0.37} A ${r} ${r} 0 0 1 ${cx + r * 0.93} ${cy - r * 0.37}" fill="none" stroke="${C.copperL}" stroke-width="26" stroke-linecap="round" opacity=".85"/>
    ${elec.map((e) => `<circle cx="${e.x}" cy="${e.y}" r="17" fill="${C.green}" stroke="#fff" stroke-width="4"/>${text(e.x, e.y + 6, e.i + 1, { size: 16, weight: 700, fill: '#fff', anchor: 'middle' })}`).join('')}
    ${text(cx, cy + 20, 'top view', { size: 20, font: MONO, fill: C.faint, anchor: 'middle' })}
    ${lanes}
    ${block(80, 950, 300, 110, 'Electrodes', '6 channels', { accent: C.green })}
    ${arrow(388, 1005, 448, 1005)}
    ${block(456, 950, 380, 110, 'ATmega1284', 'ADC + impedance', { accent: C.copper })}
    ${arrow(844, 1005, 904, 1005)}
    ${block(912, 950, 290, 110, 'Bluetooth', 'data stream', { accent: C.blue })}
    ${arrow(1210, 1005, 1270, 1005)}
    ${block(1278, 950, 242, 110, 'Host / PC', 'serial cmds', { accent: C.purple })}`,
  })
}

covers['PHYS-eLocker-BLE-firmware-master'] = () => {
  const lock = (x, y) => `
    <rect x="${x}" y="${y + 40}" width="90" height="74" rx="12" fill="${C.copper}"/>
    <path d="M${x + 18} ${y + 42} V${y + 22} a27 27 0 0 1 54 0 V${y + 42}" fill="none" stroke="${C.copper}" stroke-width="12"/>
    <circle cx="${x + 45}" cy="${y + 72}" r="10" fill="#fff"/><rect x="${x + 41}" y="${y + 76}" width="8" height="22" rx="4" fill="#fff"/>`
  const ble = (x, y) => [0, 1, 2].map((i) => `<path d="M${x + 30 + i * 22} ${y - 34 - i * 14} a ${42 + i * 22} ${42 + i * 22} 0 0 1 0 ${68 + i * 28 + 16}" fill="none" stroke="${C.blue}" stroke-width="5" stroke-linecap="round" opacity="${1 - i * 0.25}"/>`).join('')
  return frame({
    repo: 'PHYS-eLocker-BLE-firmware-master',
    title: 'eLocker BLE Smart Lock',
    subtitle: 'TI CC2640R2 firmware: BLE access, RFID, AES-128, motor control and logs',
    body: `
    ${block(560, 520, 480, 190, 'TI CC2640R2', 'BLE MCU · eLocker app', { accent: C.copper, bg: C.copperBg, center: true })}
    ${lock(755, 300)}
    ${block(100, 300, 380, 120, 'RFID reader', 'SPI driver', { accent: C.green })}
    ${block(1120, 300, 380, 120, 'AES-128', 'encrypted access', { accent: C.purple })}
    ${block(100, 800, 380, 120, 'Lock motor', 'drive + test mode', { accent: C.copper })}
    ${block(1120, 800, 380, 120, 'Battery ADC', 'level monitoring', { accent: C.green })}
    ${block(610, 830, 380, 120, 'Event logs', 'non-volatile', { accent: C.blue })}
    ${arrow(488, 380, 552, 560)} ${arrow(1112, 380, 1048, 560)}
    ${arrow(552, 680, 488, 840)} ${arrow(1048, 680, 1112, 840)} ${arrow(800, 718, 800, 822)}
    ${block(1150, 560, 320, 110, 'Phone app', 'Bluetooth LE', { accent: C.blue })}
    ${ble(1048, 615)}
    ${text(80, 1040, 'Release history', { size: 22, weight: 700 })}
    ${chipRow(80, 1062, ['v0.2.2', 'v0.2.3', 'v0.2.4', 'v0.2.5', 'v0.3.1', 'v0.3.3', 'v0.4.0', 'v0.4.5'])}
    ${text(80, 1146, 'production programming & test guides shipped with releases', { size: 19, font: MONO, fill: C.muted })}`,
  })
}

covers['smartring-f723e_disco'] = () => {
  const bx = 90, by = 290, bw = 760, bh = 820
  const sx = bx + 120, sy = by + 150, ss = 520
  const ring = (cx, cy) => `
    <circle cx="${cx}" cy="${cy}" r="170" fill="none" stroke="#2c3a34" stroke-width="26"/>
    <circle cx="${cx}" cy="${cy}" r="170" fill="none" stroke="${C.copperL}" stroke-width="26" stroke-dasharray="720 1100" stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"/>
    <circle cx="${cx}" cy="${cy}" r="118" fill="none" stroke="#2c3a34" stroke-width="18"/>
    <circle cx="${cx}" cy="${cy}" r="118" fill="none" stroke="${C.green}" stroke-width="18" stroke-dasharray="420 800" stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"/>
    ${text(cx, cy - 4, 'SMART', { size: 34, weight: 700, fill: '#fff', anchor: 'middle', ls: 4 })}
    ${text(cx, cy + 36, 'RING', { size: 34, weight: 700, fill: C.copperL, anchor: 'middle', ls: 4 })}`
  const cross = (x, y) => `<circle cx="${x}" cy="${y}" r="16" fill="none" stroke="${C.copperL}" stroke-width="3"/><path d="M${x - 26} ${y}H${x + 26}M${x} ${y - 26}V${y + 26}" stroke="${C.copperL}" stroke-width="3"/>`
  return frame({
    repo: 'smartring-f723e_disco',
    title: 'Smart Ring UI on STM32F7',
    subtitle: 'Cortex-M7 touchscreen application on the STM32F723E-Discovery kit',
    body: `
    <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="34" fill="#13402b" filter="url(#sh)"/>
    <rect x="${bx + 14}" y="${by + 14}" width="${bw - 28}" height="${bh - 28}" rx="24" fill="none" stroke="#2f7a52" stroke-width="2"/>
    ${text(bx + 40, by + 70, 'STM32F723E-DISCO', { size: 24, font: MONO, fill: '#9fd8b8', ls: 2 })}
    <rect x="${sx - 16}" y="${sy - 16}" width="${ss + 32}" height="${ss + 32}" rx="16" fill="#0b1210"/>
    <rect x="${sx}" y="${sy}" width="${ss}" height="${ss}" rx="6" fill="#16211c"/>
    ${ring(sx + ss / 2, sy + ss / 2)}
    ${cross(sx + 44, sy + 44)}${cross(sx + ss - 44, sy + 44)}${cross(sx + 44, sy + ss - 44)}${cross(sx + ss - 44, sy + ss - 44)}
    ${text(sx + ss / 2, sy + ss + 70, 'touch-calibration points shown in corners', { size: 19, font: MONO, fill: '#9fd8b8', anchor: 'middle' })}
    ${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<rect x="${bx + 70 + i * 82}" y="${by + bh - 60}" width="54" height="20" rx="4" fill="${C.copperL}" opacity=".85"/>`).join('')}
    ${block(940, 300, 580, 150, 'STM32F723', 'Arm Cortex-M7 · HAL + CMSIS', { accent: C.blue })}
    ${arrow(1230, 458, 1230, 520)}
    ${block(940, 528, 580, 150, 'Touchscreen driver', 'ts_calib.c · calibration', { accent: C.green })}
    ${arrow(1230, 686, 1230, 748)}
    ${block(940, 756, 580, 150, 'Smart-ring interface', 'smartring.c · UI logic', { accent: C.copper })}
    ${text(940, 990, 'Code built on ST’s Discovery-kit HAL & CMSIS.', { size: 21, fill: C.muted })}`,
  })
}

covers['USBDemoBoard_Firmware'] = () => {
  const pcb = `
    <rect x="90" y="360" width="560" height="430" rx="26" fill="#14532f" filter="url(#sh)"/>
    <rect x="104" y="374" width="532" height="402" rx="18" fill="none" stroke="#2f7a52" stroke-width="2"/>
    <rect x="250" y="470" width="190" height="190" rx="10" fill="#111"/>
    ${[...Array(10)].map((_, i) => `<rect x="${262 + i * 17}" y="452" width="9" height="18" fill="#c9cdd0"/><rect x="${262 + i * 17}" y="660" width="9" height="18" fill="#c9cdd0"/>`).join('')}
    ${text(345, 560, 'PIC', { size: 36, weight: 700, fill: '#e9eeeb', anchor: 'middle' })}
    ${text(345, 596, 'USB MCU', { size: 18, font: MONO, fill: '#9aa49f', anchor: 'middle' })}
    <rect x="56" y="540" width="70" height="56" rx="8" fill="#c9cdd0"/>
    ${[0, 1, 2].map((i) => `<circle cx="${520 + i * 0}" cy="${470 + i * 70}" r="18" fill="${['#ff5a4f', '#ffd24a', '#40d07a'][i]}"/><circle cx="${520}" cy="${470 + i * 70}" r="30" fill="${['#ff5a4f', '#ffd24a', '#40d07a'][i]}" opacity=".18"/>`).join('')}
    ${[0, 1].map((i) => `<rect x="${500 + i * 0}" y="${690}" width="46" height="46" rx="8" fill="#e6e6e6"/><circle cx="523" cy="713" r="12" fill="#888"/>`).join('')}
    ${text(370, 830, 'MPLAB · C firmware', { size: 20, font: MONO, fill: C.muted, anchor: 'middle' })}`
  const app = `
    <rect x="900" y="300" width="620" height="560" rx="20" fill="#fff" stroke="${C.line}" stroke-width="2" filter="url(#sh)"/>
    <rect x="900" y="300" width="620" height="58" rx="20" fill="#eef1ee"/><rect x="900" y="338" width="620" height="20" fill="#eef1ee"/>
    ${[0, 1, 2].map((i) => `<circle cx="${935 + i * 26}" cy="329" r="8" fill="${['#ff5f57', '#febc2e', '#28c840'][i]}"/>`).join('')}
    ${text(1210, 337, 'USB Demo Board · Host', { size: 20, weight: 700, anchor: 'middle' })}
    ${text(940, 420, 'Device', { size: 19, font: MONO, fill: C.muted })}
    <rect x="1040" y="394" width="230" height="38" rx="8" fill="${C.greenBg}"/>${text(1155, 420, '● connected', { size: 18, font: MONO, fill: C.green, anchor: 'middle' })}
    ${['Toggle LED 1', 'Toggle LED 2', 'Read buttons'].map((s, i) => `<rect x="940" y="${470 + i * 70}" width="250" height="50" rx="10" fill="${i === 0 ? C.copper : '#fff'}" stroke="${i === 0 ? C.copper : C.line}" stroke-width="2"/>${text(1065, 503 + i * 70, s, { size: 20, weight: 600, fill: i === 0 ? '#fff' : C.ink, anchor: 'middle' })}`).join('')}
    <rect x="1220" y="470" width="260" height="330" rx="10" fill="#16211c"/>
    ${['> open device', '< ack', '> led1 on', '< ok', '> read', '< btn=0x01'].map((s, i) => text(1240, 510 + i * 46, s, { size: 19, font: MONO, fill: i % 2 ? '#40d07a' : '#e9eeeb' })).join('')}
    ${text(1210, 900, 'C# Windows Forms host app', { size: 20, font: MONO, fill: C.muted, anchor: 'middle' })}`
  return frame({
    repo: 'USBDemoBoard_Firmware',
    title: 'USB Demo Board',
    subtitle: 'PIC USB device firmware paired with a C# Windows host application',
    body: `${pcb}${app}
    <path d="M90 568 C 20 568, 30 980, 300 1000 S 760 990, 860 640 S 880 600, 900 600" fill="none" stroke="#5d6a64" stroke-width="12" stroke-linecap="round"/>
    ${text(560, 1060, 'USB', { size: 24, weight: 700, fill: C.muted, anchor: 'middle' })}`,
  })
}

covers['24GHz-radar'] = () => {
  const bx = 110, by = 400
  const patches = [...Array(2)].map((_, r) => [...Array(4)].map((__, c) => `<rect x="${bx + 70 + c * 70}" y="${by + 80 + r * 90}" width="44" height="44" rx="4" fill="#e3b04b"/>`).join('')).join('')
  const arcs = [0, 1, 2, 3, 4].map((i) => `<path d="M${560 + i * 80} ${480 - i * 40} a ${120 + i * 80} ${120 + i * 80} 0 0 1 0 ${180 + i * 80}" fill="none" stroke="${C.copper}" stroke-width="${6 - i * 0.6}" stroke-linecap="round" opacity="${0.95 - i * 0.16}"/>`).join('')
  return frame({
    repo: '24GHz-radar',
    title: '24 GHz Doppler Radar',
    subtitle: 'Infineon Sense2GoL (XMC1300) radar board in the Arduino IDE',
    body: `
    <rect x="${bx}" y="${by}" width="420" height="330" rx="22" fill="#14532f" filter="url(#sh)"/>
    ${patches}
    <rect x="${bx + 300}" y="${by + 230}" width="80" height="70" rx="6" fill="#111"/>
    ${text(bx + 340, by + 274, 'XMC', { size: 18, weight: 700, fill: '#e9eeeb', anchor: 'middle' })}
    ${text(bx + 30, by + 290, 'Sense2GoL', { size: 24, weight: 700, fill: '#cfe9da' })}
    ${text(bx + 210, by + 380, 'patch antenna array', { size: 19, font: MONO, fill: C.muted, anchor: 'middle' })}
    ${arcs}
    <circle cx="1350" cy="570" r="70" fill="${C.blueBg}" stroke="${C.blue}" stroke-width="4"/>
    ${text(1350, 580, 'target', { size: 22, weight: 600, fill: C.blue, anchor: 'middle' })}
    ${arrow(1430, 570, 1510, 570, { color: C.blue })}
    ${text(1350, 680, 'moving object', { size: 19, font: MONO, fill: C.muted, anchor: 'middle' })}
    <rect x="620" y="830" width="900" height="140" rx="16" fill="#fff" stroke="${C.line}" stroke-width="2"/>
    ${text(645, 862, 'Doppler IF signal', { size: 19, font: MONO, fill: C.muted })}
    <path d="${wave(650, 918, 840, 30, 2, { step: 3, freqs: [0.09, 0.0, 0.0] })}" fill="none" stroke="${C.green}" stroke-width="3.5"/>
    ${block(110, 1000, 420, 110, 'XMC1300 board', 'Infineon Sense2GoL', { accent: C.copper })}
    ${arrow(538, 1055, 598, 1055)}
    ${block(606, 1000, 380, 110, 'SEGGER J-Link', 'flash & debug', { accent: C.blue })}
    ${arrow(994, 1055, 1054, 1055)}
    ${block(1062, 1000, 458, 110, 'Arduino IDE', 'board package', { accent: C.green })}`,
  })
}

covers['FPGA_ADC_FIRMWARE'] = () => {
  const pts = [...Array(26)].map((_, i) => {
    const x = 120 + i * 18
    const y = 470 - Math.sin(i * 0.38) * 70 - Math.sin(i * 1.3) * 12
    return `<line x1="${x}" y1="470" x2="${x}" y2="${y.toFixed(1)}" stroke="${C.line}" stroke-width="2"/><circle cx="${x}" cy="${y.toFixed(1)}" r="5.5" fill="${C.green}"/>`
  }).join('')
  return frame({
    repo: 'FPGA_ADC_FIRMWARE',
    title: 'FPGA ADC / DAC Interface',
    subtitle: 'VHDL on an Intel (Altera) FPGA with a 48-channel acquisition application',
    body: `
    <path d="${wave(110, 470, 480, 72, 0.4, { step: 2, freqs: [0.0165, 0, 0] })}" fill="none" stroke="${C.green}" stroke-width="2" opacity=".35"/>
    ${pts}
    ${text(110, 330, 'sampled analog input', { size: 19, font: MONO, fill: C.muted })}
    ${block(90, 620, 300, 130, '48 channels', 'analog inputs', { accent: C.green })}
    ${arrow(398, 685, 458, 685)}
    ${block(466, 620, 260, 130, 'ADS8330', '16-bit ADC', { accent: C.blue })}
    ${arrow(734, 685, 800, 685)}
    <g filter="url(#sh)"><rect x="808" y="330" width="420" height="600" rx="22" fill="${C.purpleBg}" stroke="${C.purple}" stroke-width="3"/></g>
    ${text(1018, 385, 'FPGA', { size: 34, weight: 700, fill: C.purple, anchor: 'middle' })}
    ${text(1018, 418, 'Quartus · VHDL', { size: 19, font: MONO, fill: C.muted, anchor: 'middle' })}
    ${block(840, 450, 356, 110, 'ADC interface', 'ads8330_interface', { accent: C.blue })}
    ${block(840, 580, 356, 110, 'DAC interface', 'ad5441_interface', { accent: C.copper })}
    ${block(840, 710, 356, 110, 'Power-on reset', 'power_on_reset', { accent: C.green })}
    ${text(1018, 892, 'iterative builds: Itn1 → Itn5', { size: 18, font: MONO, fill: C.muted, anchor: 'middle' })}
    ${arrow(1236, 635, 1296, 635)}
    ${block(1304, 570, 216, 130, 'AD5441', 'DAC', { accent: C.copper })}
    ${arrow(1018, 938, 1018, 998)}
    ${block(760, 1006, 516, 110, 'Windows 48-ch app', 'C++ acquisition UI', { accent: C.purple })}`,
  })
}

covers['Vanguard-Telemetry-Enterprise-IoT-Fleet-Tracking'] = () => {
  const mx = 80, my = 270, mw = 900, mh = 860
  const roads = `
    <path d="M${mx} ${my + 200} C ${mx + 300} ${my + 160}, ${mx + 500} ${my + 300}, ${mx + mw} ${my + 260}" stroke="#fff" stroke-width="34" fill="none"/>
    <path d="M${mx + 260} ${my} C ${mx + 300} ${my + 300}, ${mx + 180} ${my + 600}, ${mx + 300} ${my + mh}" stroke="#fff" stroke-width="28" fill="none"/>
    <path d="M${mx} ${my + 620} L ${mx + mw} ${my + 560}" stroke="#fff" stroke-width="30" fill="none"/>
    <path d="M${mx + 640} ${my} L ${mx + 700} ${my + mh}" stroke="#fff" stroke-width="24" fill="none"/>
    <path d="M${mx + 420} ${my + 380} L ${mx + mw} ${my + 430}" stroke="#fff" stroke-width="16" fill="none"/>`
  const truck = (x, y, rot, col) => `<g transform="translate(${x} ${y}) rotate(${rot})"><circle r="30" fill="${col}" stroke="#fff" stroke-width="5"/><path d="M-11 -12 L14 0 L-11 12 L-5 0 Z" fill="#fff"/></g>`
  return frame({
    repo: 'Vanguard-Telemetry-Enterprise-IoT-Fleet-Tracking',
    title: 'Vanguard Telemetry',
    subtitle: 'Real-time GPS fleet tracking with geofences and a live command center',
    body: `
    <clipPath id="mapclip"><rect x="${mx}" y="${my}" width="${mw}" height="${mh}" rx="28"/></clipPath>
    <g filter="url(#sh)"><rect x="${mx}" y="${my}" width="${mw}" height="${mh}" rx="28" fill="#e9ede6"/></g>
    <g clip-path="url(#mapclip)">
      ${roads}
      <rect x="${mx + 470}" y="${my + 660}" width="190" height="130" rx="10" fill="#cfe6d5"/>
      <rect x="${mx + 40}" y="${my + 300}" width="150" height="190" rx="10" fill="#cfe6d5"/>
      <path d="M${mx + 330} ${my + 330} L${mx + 610} ${my + 300} L${mx + 690} ${my + 520} L${mx + 470} ${my + 640} L${mx + 300} ${my + 530} Z" fill="${C.copper}" fill-opacity=".10" stroke="${C.copper}" stroke-width="4" stroke-dasharray="14 10"/>
      <path d="M${mx + 60} ${my + 205} C ${mx + 200} ${my + 180}, ${mx + 280} ${my + 260}, ${mx + 400} ${my + 250} S ${mx + 520} ${my + 300}, ${mx + 560} ${my + 380}" fill="none" stroke="${C.blue}" stroke-width="6" stroke-dasharray="2 12" stroke-linecap="round"/>
      ${truck(mx + 560, my + 380, 50, C.blue)} ${truck(mx + 300, my + 760, -80, C.green)} ${truck(mx + 760, my + 540, 170, C.copper)} ${truck(mx + 660, my + 120, 95, C.blue)}
    </g>
    <rect x="${mx + 30}" y="${my + 30}" width="250" height="44" rx="22" fill="#fff"/>
    ${text(mx + 155, my + 59, '◆ geofence active', { size: 18, font: MONO, fill: C.copper, anchor: 'middle' })}
    ${block(1040, 270, 480, 120, 'GPS devices', 'live telemetry', { accent: C.blue })}
    ${arrow(1280, 398, 1280, 444)}
    ${block(1040, 452, 480, 120, 'Ingest & validate', 'Node.js · TypeScript', { accent: C.green })}
    ${arrow(1280, 580, 1280, 626)}
    ${block(1040, 634, 480, 120, 'Geofence engine', 'Redis · Prisma', { accent: C.copper })}
    ${arrow(1280, 762, 1280, 808, { label: 'Socket.io' })}
    ${block(1040, 816, 480, 120, 'Command center', 'React dashboard', { accent: C.purple })}`,
  })
}

// ---------- render ----------
for (const [repo, make] of Object.entries(covers)) {
  const dir = path.join(outRoot, repo)
  await fs.mkdir(dir, { recursive: true })
  await sharp(Buffer.from(make())).png().toFile(path.join(dir, 'cover.png'))
  console.log('✓', repo)
}
