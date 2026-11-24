// GitHub repositories shown in the "GitHub" section.
// Descriptions are written from each repository's README / source files.
// Language breakdowns come from src/data/github-languages.json; refresh with `npm run github`.

export const githubUser = 'devengineer0312'
export const githubProfile = `https://github.com/${githubUser}`

export const repoGroups = [
  { id: 'firmware', label: 'Embedded Firmware', blurb: 'MCU firmware for medical, BLE, display and USB devices.' },
  { id: 'fpga', label: 'FPGA & Data Acquisition', blurb: 'HDL for multi-channel ADC / DAC interfacing.' },
  { id: 'iot', label: 'IoT Platforms', blurb: 'Device firmware plus the cloud dashboards that use the data.' },
]

export const repos = [
  {
    name: 'Headband_EEG_Firmware',
    group: 'firmware',
    title: 'Headband EEG Firmware',
    description:
      'Firmware for a 6-channel EEG headband on an ATmega1284: ADC acquisition, electrode impedance checks, Bluetooth data streaming, synthetic test signals and a serial command set for per-channel control.',
    tags: ['ATmega1284', 'EEG', '6 channels', 'Bluetooth', 'Impedance'],
  },
  {
    name: 'PHYS-eLocker-BLE-firmware-master',
    group: 'firmware',
    title: 'eLocker BLE Smart Lock Firmware',
    description:
      'Production firmware for a BLE electronic locker on the TI CC2640R2: RFID reader driver, AES-128 encryption, motor control, battery monitoring, event logs and versioned release builds with programming and test guides.',
    tags: ['TI CC2640R2', 'BLE', 'RFID', 'AES-128', 'Production'],
  },
  {
    name: 'smartring-f723e_disco',
    group: 'firmware',
    title: 'Smart Ring UI on STM32F723E-Discovery',
    description:
      'STM32F7 (Cortex-M7) application for the STM32F723E-Discovery kit with touchscreen calibration and a smart-ring demo interface, built on ST HAL and CMSIS.',
    tags: ['STM32F723', 'Cortex-M7', 'Touchscreen', 'HAL'],
  },
  {
    name: 'USBDemoBoard_Firmware',
    group: 'firmware',
    title: 'USB Demo Board: Firmware + Host App',
    description:
      'Microchip PIC USB device firmware (MPLAB) paired with a C# Windows Forms host application that talks to the board over USB.',
    tags: ['PIC', 'USB device', 'MPLAB', 'C# host app'],
  },
  {
    name: '24GHz-radar',
    group: 'firmware',
    title: '24 GHz Radar (Infineon Sense2GoL)',
    description:
      'Arduino IDE integration for Infineon’s Sense2GoL 24 GHz Doppler radar board (XMC1300), with SEGGER J-Link setup for flashing and debugging.',
    tags: ['24 GHz radar', 'Infineon XMC1300', 'Arduino', 'J-Link'],
  },
  {
    name: 'FPGA_ADC_FIRMWARE',
    group: 'fpga',
    title: 'FPGA ADC / DAC Interface',
    description:
      'VHDL for an Intel (Altera) Quartus FPGA design interfacing an ADS8330 ADC and AD5441 DAC, developed in documented iterations, plus a 48-channel Windows acquisition application.',
    tags: ['VHDL', 'Quartus', 'ADS8330', 'AD5441', '48 channels'],
  },
  {
    name: 'Pet-tracker',
    group: 'iot',
    title: 'Pet Tracker: GPS & Motion IoT',
    description:
      'ESP32-C6 tracker combining GPS and IMU activity detection with secure WebSocket telemetry and an Angular mapping dashboard, deployed as a live application.',
    tags: ['ESP32-C6', 'GPS', 'IMU', 'WebSocket', 'Angular'],
  },
  {
    name: 'Vanguard-Telemetry-Enterprise-IoT-Fleet-Tracking',
    group: 'iot',
    title: 'Vanguard Telemetry: IoT Fleet Tracking',
    description:
      'Full-stack fleet-monitoring platform for real-time GPS telemetry ingestion, geofence evaluation and live asset maps, built with Node.js, React, Redis, Prisma and Socket.io.',
    tags: ['GPS telemetry', 'Geofencing', 'Node.js', 'React', 'Redis'],
  },
]

// GitHub linguist colours for the language bar.
export const languageColors = {
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  VHDL: '#adb2cb',
  Verilog: '#b2b7f8',
  Assembly: '#6E4C13',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  SCSS: '#c6538c',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Java: '#b07219',
  Python: '#3572A5',
  Shell: '#89e051',
}
