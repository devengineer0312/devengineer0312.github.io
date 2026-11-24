// All personal content lives here so it can be edited without touching components.

export const profile = {
  name: 'Markese Sweet',
  initials: 'MS',
  title: 'Senior Hardware Engineer',
  role: 'PCB Design · Embedded Systems · Mechanical CAD',
  location: 'North Carolina, USA',
  // No email / phone / social links on purpose: Upwork does not allow sharing outside
  // contact details, so every call to action points to the Upwork profile only.
  // TODO: replace with your public Upwork *profile* URL
  // (looks like https://www.upwork.com/freelancers/~0123abcd...).
  // The link below is the Upwork "Find Work" page, which only you can see when logged in.
  upwork: 'https://www.upwork.com/nx/s/find-work/domestic',
  headline: 'Electronics and mechanical design, from schematic and 3D CAD to production.',
  pitch:
    'I design hardware end to end. On the electrical side: system architecture, schematic capture and multilayer PCB layout (2–16 layers, HDI/BGA, RF and mixed-signal). On the mechanical side: SolidWorks enclosures, 3D PCB-to-case integration and cable/harness routing, with SolidWorks Simulation and Ansys for structural, thermal and CFD (Fluent) analysis. 12+ years taking products through prototype bring-up and into manufacturing.',
  // Hero highlight cards: each one says plainly what kind of engineer you are.
  stats: [
    { icon: 'chip', value: '12+ years', label: 'Hardware engineering experience' },
    { icon: 'layers', value: '2–16 layers', label: 'PCB design · HDI · BGA · RF' },
    { icon: 'cube', value: 'SolidWorks · Ansys', label: '3D mechanical CAD & simulation' },
    { icon: 'board', value: '9 projects', label: 'Real boards & assemblies below' },
  ],
  // Save your headshot as portfolio/public/profile.jpg (portrait, ~1000×1250 px works best).
  // Until that file exists, a monogram placeholder is shown.
  photo: 'profile.jpg',
}

// "About me" section.
export const about = {
  paragraphs: [
    'I’m a Senior Hardware Engineer based in North Carolina with more than 12 years of hands-on product development. I cover the full hardware lifecycle: system architecture, schematic capture, multilayer PCB layout, prototype bring-up, validation and the manufacturing release package.',
    'On the electronics side, I work on high-speed digital boards with BGA processors, FPGAs and DDR memory; RF and wireless products where antenna placement and 50 Ω lines matter; low-noise mixed-signal front ends; and power and motor-control hardware for robotics and industrial equipment.',
    'On the mechanical side, I design in SolidWorks: enclosures, equipment frames, mounting structures, sensor fixtures, full 3D PCB-to-enclosure assemblies, and cable, harness and piping routes with SolidWorks Routing. Before anything is built, I check structural stress and deformation with SolidWorks Simulation and Ansys Mechanical, and thermal behaviour and airflow with Ansys Thermal and Ansys Fluent. That means the board, the housing and the production process are designed together, and I hand over everything needed to build them: schematics, Gerbers, BOMs, STEP models and assembly drawings.',
  ],
  facts: [
    ['Role', 'Senior Hardware Engineer'],
    ['Experience', '12+ years · 4 engineering teams'],
    ['Electronics', 'PCB 2–16 layers · HDI · BGA · RF · Mixed-signal · Power'],
    ['Mechanical', 'SolidWorks CAD, Simulation & Routing · GD&T drawings'],
    ['Simulation', 'Ansys Mechanical · Thermal · Fluent (CFD) · HFSS'],
    ['Education', 'B.S. Electrical Engineering, East Carolina University'],
    ['Based in', 'North Carolina, USA · US time zones'],
  ],
  // Short "what I do" cards shown under the About text.
  services: [
    { title: 'PCB Design & Layout', body: 'Multilayer, HDI/BGA, controlled impedance, DDR length matching, RF and mixed-signal partitioning.' },
    { title: 'Embedded Hardware', body: 'STM32, ESP32, nRF53, i.MX8, RK3566 and FPGA-based systems, with bring-up alongside firmware.' },
    { title: 'Mechanical CAD', body: 'SolidWorks enclosures, fixtures, equipment assemblies, cable / harness routing and ECAD-MCAD fit checks.' },
    { title: 'Simulation', body: 'Structural FEA in SolidWorks Simulation and Ansys Mechanical, thermal and CFD in Ansys Fluent, RF in HFSS and ADS.' },
    { title: 'Power & Motor Control', body: 'DC/DC, BMS and charging, isolated I/O, high-current switching, multi-channel BLDC drives.' },
    { title: 'Manufacturing Release', body: 'DFM/DFA reviews, BOM optimisation, Gerber / NC drill / CPL / STEP packages.' },
  ],
}

// Tools section. `icon` is a key in src/data/brandIcons.js (real vector logo),
// `img` is a file in public/icons (real vendor icon), or neither → a lettered badge in `color`.
export const toolGroups = [
  {
    title: 'PCB & Electronics Design',
    note: 'Schematic capture, multilayer layout, 3D board models',
    tools: [
      { name: 'Altium Designer', icon: 'altium', use: 'HDI/BGA, 10-layer stack-ups, impedance profiles, 3D MCAD' },
      { name: 'KiCad', icon: 'kicad', use: 'IoT nodes, wearables, compute-module carrier boards' },
      { name: 'Cadence OrCAD / Allegro', badge: 'OrCAD', color: '#d6002a', use: 'Industrial and isolated high-current control boards' },
      { name: 'Autodesk Eagle', icon: 'autodesk', use: 'Quick-turn 2–4 layer designs' },
      { name: 'EasyEDA', icon: 'easyeda', use: 'Fast prototypes with integrated sourcing' },
    ],
  },
  {
    title: 'Mechanical CAD & Simulation',
    note: 'Enclosures, assemblies, FEA, thermal and RF analysis',
    tools: [
      { name: 'SolidWorks', icon: 'dassault', color: '#e2231a', use: 'Enclosures, frames, fixtures, PCB-to-case assemblies, drawings' },
      { name: 'SolidWorks Simulation', icon: 'dassault', color: '#e2231a', use: 'Structural FEA: stress, deformation and fatigue on parts and assemblies' },
      { name: 'SolidWorks Routing', icon: 'dassault', color: '#e2231a', use: 'Cable, wire-harness and piping routes through 3D assemblies' },
      { name: 'Ansys Mechanical & Thermal', icon: 'ansys', use: 'Structural stress, deformation and thermal simulation' },
      { name: 'Ansys Fluent', icon: 'ansys', use: 'CFD: airflow, cooling and heat transfer in enclosures' },
      { name: 'Ansys HFSS', icon: 'ansys', use: 'Antenna and EM simulation' },
      { name: 'Keysight ADS', img: 'keysight.png', use: 'RF matching networks and transmission lines' },
    ],
  },
  {
    title: 'Firmware & Bring-up',
    note: 'Getting first boards alive on the bench',
    tools: [
      { name: 'Embedded C', icon: 'c', use: 'Bring-up, drivers and control firmware' },
      { name: 'C++', icon: 'cpp', use: 'Embedded application code' },
      { name: 'Python', icon: 'python', use: 'Test scripts, data capture and automation' },
      { name: 'SEGGER J-Link', img: 'segger.png', use: 'SWD programming and debugging' },
    ],
  },
]

// Silicon platforms shown as a logo strip in the Tools section.
export const platforms = [
  { name: 'STM32', icon: 'st' },
  { name: 'ESP32', icon: 'espressif' },
  { name: 'Nordic nRF52 / nRF53', icon: 'nordic' },
  { name: 'NXP i.MX6 / i.MX8', icon: 'nxp' },
  { name: 'Rockchip RK3566', badge: 'RK', color: '#1b6fd8' },
  { name: 'Raspberry Pi RP2040', icon: 'raspberrypi' },
  { name: 'Arm Cortex-M / A', icon: 'arm' },
  { name: 'Xilinx (AMD) FPGA', icon: 'amd' },
  { name: 'Intel FPGA', icon: 'intel' },
  { name: 'Lattice ECP5', badge: 'L', color: '#0f6aa8' },
  { name: 'TI ADS1299 / analog', img: 'ti.png' },
]

export const interfaces = [
  'DDR3 · DDR4 · LPDDR4', 'USB 3.x', 'Gigabit Ethernet · RMII', 'MIPI CSI', 'I²S · SPI · I²C',
  'CAN · RS-485', 'Modbus TCP', 'Wi-Fi · BLE · LTE', 'GNSS', 'RFID / NFC',
]

// Process section: how a project runs from first call to production.
export const workflow = [
  {
    step: '01',
    title: 'Requirements & Architecture',
    body: 'We agree on function, size, power, interfaces, cost and certification targets. I turn that into a block diagram, power tree and key part selection.',
    out: ['Block diagram', 'Power tree', 'Key BOM'],
  },
  {
    step: '02',
    title: 'Schematic Design',
    body: 'Hierarchical schematics with protection, decoupling, test points and design notes, then a review together before layout starts.',
    out: ['Reviewed schematic', 'Netlist'],
  },
  {
    step: '03',
    title: 'PCB Stack-up & Layout',
    body: 'Impedance-controlled stack-up, placement around the enclosure, BGA fan-out, length matching, clean return paths and power planes.',
    out: ['Routed PCB', '3D board model'],
  },
  {
    step: '04',
    title: 'Mechanical CAD & Simulation',
    body: 'Enclosure, mounting and cable routing in SolidWorks, clearance and connector fit checks, plus structural (SolidWorks Simulation / Ansys), thermal and airflow (Ansys Fluent) or RF simulation where it matters.',
    out: ['STEP assembly', 'Simulation results'],
  },
  {
    step: '05',
    title: 'DFM Review & Fabrication',
    body: 'DFM/DFA check against the fab and assembly house, BOM clean-up and sourcing, then a complete manufacturing package.',
    out: ['Gerber / drill / CPL', 'BOM', 'Drawings'],
  },
  {
    step: '06',
    title: 'Bring-up & Hand-off',
    body: 'Power-up, debug and validation on the bench with firmware, design revisions if needed, and full documentation handed over.',
    out: ['Working prototype', 'Release package'],
  },
]

export const experience = [
  {
    role: 'Hardware Engineer',
    company: 'Carolina Electronic Assemblers, Inc',
    place: 'Smithfield, NC',
    period: 'Oct 2024 – Aug 2026',
    points: [
      'Industrial control hardware with MCU-based control loops, isolated I/O, high-current switching and regulated power distribution.',
      'STM32-based robotic control electronics with 4 BLDC motor drives, IMU sensing and wireless links.',
      'SolidWorks design of production equipment, frames, fixtures and enclosures, with Ansys structural and thermal simulation.',
      '3D PCB-to-enclosure integration, DFM/DFA reviews and production documentation (STEP, drawings, BOMs).',
    ],
  },
  {
    role: 'Senior Electrical Engineer',
    company: 'Better Boards, Inc',
    place: 'Cary, NC',
    period: 'Apr 2020 – Aug 2024',
    points: [
      'Led a 10-layer BGA audio & RF platform: NXP i.MX8, Nordic nRF5340 and LPDDR4.',
      'Designed a 64-channel EEG acquisition system: 8× TI ADS1299, Lattice ECP5 FPGA, STM32, Ethernet.',
      'Built a 4-layer RK3566 carrier with 15 servo ports, CSI camera, IMU and 2S battery power; supported ESP32 industrial monitoring hardware.',
    ],
  },
  {
    role: 'RF Designer',
    company: 'Laut Design',
    place: 'Raleigh, NC',
    period: 'Nov 2016 – Mar 2020',
    points: [
      'GNSS tracking hardware for pet-tracking and fleet-monitoring products.',
      'Compact BLE wearables with audio, vibration motors and battery charging.',
      '50 Ω RF lines, antenna matching networks and 13.56 MHz flex-PCB RFID antennas (HFSS, ADS), co-designed with industrial and mechanical designers.',
    ],
  },
  {
    role: 'Electrical Engineer',
    company: 'GRT Electronics',
    place: 'Raleigh, NC',
    period: 'Aug 2014 – Sep 2016',
    points: [
      '4-layer isolated industrial control board with two MCU control loops and high-current switching.',
      'STM32F4 camera & sensor electronics with dual CMOS image sensors and IR distance sensing.',
      'Prototype assembly, bring-up and SMT manufacturing support.',
    ],
  },
]

export const education = {
  degree: 'B.S. Electrical Engineering',
  school: 'East Carolina University',
  place: 'Greenville, NC',
  period: '2010 – 2014',
}
