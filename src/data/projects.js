// Project albums.
// `file` is relative to the ../projects folder. Run `npm run images` after changing images:
// it writes optimised WebP files to public/img/<id>/<index>.webp (+ -thumb.webp).
// `trim: true` crops uniform black letterbox bars from screen captures.

// One category per project, by what the product is for.
export const categories = [
  { id: 'all', label: 'All projects' },
  { id: 'medical', label: 'Medical & Research Instruments', blurb: 'Low-noise biopotential acquisition and research hardware.' },
  { id: 'robotics', label: 'Robotics & Machine Vision', blurb: 'Robot controllers, compute carriers and camera / sensing boards.' },
  { id: 'iot', label: 'IoT & Connected Devices', blurb: 'Networked sensor nodes and wireless processing platforms.' },
  { id: 'wearable', label: 'Wearables & Miniature Devices', blurb: 'Battery-powered, space-constrained products shaped to their enclosures.' },
  { id: 'industrial', label: 'Industrial Control & Power', blurb: 'Isolated control, power management and high-current switching.' },
]

export const projects = [
  {
    id: 'eeg-64ch',
    featured: true,
    title: '64-Channel EEG Acquisition System',
    short: 'Modular biopotential DAQ: 8× ADS1299, ECP5 FPGA, STM32 and Ethernet.',
    category: 'medical',
    layers: 'Multi-board stack',
    tool: 'Altium Designer',
    tags: ['ADS1299', 'Lattice ECP5', 'STM32', 'Ethernet PHY', 'Low-noise AFE', 'Modular stack'],
    summary:
      'A modular 64-channel EEG data-acquisition system built from scratch to capture microvolt-level brain signals and stream clean, synchronised samples to a PC. Each module uses eight TI ADS1299 24-bit analog front ends; an FPGA collects all channels in parallel, keeps them time-aligned, buffers and packetises the data, while an STM32 handles control, board monitoring and FPGA communication.',
    specs: [
      ['Channels', '64 per module (256 target)'],
      ['AFE', '8× TI ADS1299, 24-bit'],
      ['Logic', 'Lattice ECP5-25F on SODIMM'],
      ['Control', 'STM32 + SWD debug'],
      ['Link', 'Ethernet PHY'],
      ['Boards', 'Analog · Digital · Power · UI'],
    ],
    contributions: [
      'Partitioned the system into separate analog, digital, power and interface boards so each can be validated independently and modules can be chained toward 256 channels.',
      'Laid out the octagonal analog board with the eight AFEs placed radially around board-to-board stack connectors, keeping electrode paths short and symmetric.',
      'Brought up the digital and power boards: STM32↔FPGA link verified, Ethernet transmission under test.',
      'Designed the stacked 3D assembly and enclosure fit in the ECAD-MCAD flow.',
    ],
    status: 'Hardware bring-up · tested with safe test signals and shorted inputs only',
    images: [
      {
        file: '64 channel EEG system/1.png',
        caption: 'Exploded 3D stack: octagonal analog board with 8 electrode connectors, digital board, power board and Ethernet/UI board.',
      },
      {
        file: '64 channel EEG system/2.png',
        caption: 'Analog board: eight ADS1299 front ends placed radially, each next to its own electrode connector.',
      },
      {
        file: '64 channel EEG system/3.png',
        caption: 'Digital board: STM32 controller, Ethernet PHY, power and stack connectors, ECP5 FPGA module on a 200-pin SODIMM socket.',
      },
      {
        file: '64 channel EEG system/5.png',
        caption: 'Full assembly exploded into the enclosure: stacked boards and lid.',
      },
      {
        file: '64 channel EEG system/7.png',
        caption: 'First digital board powered up with the FPGA module installed.',
      },
      {
        file: '64 channel EEG system/8.png',
        caption: 'Bench bring-up: dual PSU, oscilloscope and J-Link debugging the STM32↔FPGA link.',
      },
    ],
  },

  {
    id: 'nrf5340-imx8',
    featured: true,
    title: '10-Layer i.MX8 + nRF5340 Audio & RF Platform',
    short: 'Round 10-layer BGA board with LPDDR4, microvias and controlled impedance.',
    category: 'iot',
    layers: '10 layers',
    tool: 'Altium Designer',
    tags: ['NXP i.MX8', 'nRF5340', 'LPDDR4', 'BGA', 'Microvias', '50Ω / 100Ω'],
    summary:
      'A compact, circular IoT audio-processing and RF communication platform combining an NXP i.MX8 application processor, a Nordic nRF5340 wireless MCU and LPDDR4 memory on a 10-layer stack-up with BGA fan-out, microvias and impedance-controlled high-speed peripherals.',
    specs: [
      ['Stack-up', '10 layers · 62.8 mil'],
      ['Impedance', '50 Ω SE (±0.05%) · 100 Ω diff'],
      ['Processor', 'NXP i.MX8'],
      ['Wireless', 'Nordic nRF5340'],
      ['Memory', 'LPDDR4, length-tuned'],
      ['Blocks', 'PMIC · amplifier · IR TX · eMMC'],
    ],
    contributions: [
      'Defined the 10-layer stack (4 signal / 4 ground / 2 power) and impedance profiles for 50 Ω single-ended and 100 Ω differential routing.',
      'Fanned out the i.MX8 BGA and routed the LPDDR4 bus with serpentine length matching on inner signal layers between solid reference planes.',
      'Placed the nRF5340 RF section with a clean ground reference and separated audio amplifier, PMIC and USB power regions on a round outline.',
    ],
    images: [
      {
        file: 'nRF5340 based 10 layer pcb design for IoT audio processing and RF communication/nRF5340 based 10 layer pcb design for IoT audio processing and RF communication3.png',
        caption: 'Top layer overview: i.MX8 at centre, nRF5340 RF section, PMIC, audio amplifier and connectors on a circular outline.',
      },
      {
        file: 'nRF5340 based 10 layer pcb design for IoT audio processing and RF communication/nRF5340 based 10 layer pcb design for IoT audio processing and RF communication2.png',
        trim: true,
        caption: 'Layer Stack Manager: 10 layers with 50 Ω single-ended profile hitting 49.98–50.02 Ω on every signal layer.',
      },
      {
        file: 'nRF5340 based 10 layer pcb design for IoT audio processing and RF communication/nRF5340 based 10 layer pcb design for IoT audio processing and RF communication6.png',
        trim: true,
        caption: 'LPDDR4 byte lanes length-matched with serpentine tuning next to the i.MX8.',
      },
      {
        file: 'nRF5340 based 10 layer pcb design for IoT audio processing and RF communication/nRF5340 based 10 layer pcb design for IoT audio processing and RF communication1.png',
        trim: true,
        caption: 'Close-up of DDR routing on an inner layer: matched groups referenced to solid copper.',
      },
      {
        file: 'nRF5340 based 10 layer pcb design for IoT audio processing and RF communication/nRF5340 based 10 layer pcb design for IoT audio processing and RF communication7.png',
        trim: true,
        caption: 'Inner Signal 2 layer: memory escape routing with the rest of the layer flooded.',
      },
      {
        file: 'nRF5340 based 10 layer pcb design for IoT audio processing and RF communication/nRF5340 based 10 layer pcb design for IoT audio processing and RF communication4.png',
        trim: true,
        caption: 'Power 2 plane with split regions around the processor.',
      },
      {
        file: 'nRF5340 based 10 layer pcb design for IoT audio processing and RF communication/nRF5340 based 10 layer pcb design for IoT audio processing and RF communication5.png',
        trim: true,
        caption: 'Bottom layer: ground pour with a few power and USB routes.',
      },
    ],
  },

  {
    id: 'robocup-mainboard',
    featured: true,
    title: 'Smart Control Mainboard for RoboCup',
    short: 'STM32 robot brain: 4 closed-loop BLDC drives, dual 2.4 GHz radios, IMU and OLED.',
    category: 'robotics',
    layers: 'Multilayer',
    tool: 'Altium Designer',
    tags: ['STM32', 'BLDC ×4', 'IMU fusion', 'nRF 2.4 GHz', 'Power monitoring', 'Firmware'],
    summary:
      'Multi-layer mainboard and firmware for autonomous soccer robots competing in RoboCup Small Size League. An STM32 ARM microcontroller runs closed-loop control of four 50 W BLDC motors using encoder and IMU sensor fusion, with dual 2.4 GHz RF transceivers, IR ball detection and battery power management, all in a compact board built around competition rules.',
    specs: [
      ['MCU', 'STM32 ARM Cortex-M'],
      ['Motors', '4× 50 W BLDC, closed-loop'],
      ['Sensing', 'Encoders · IMU · IR ball detect'],
      ['Radio', 'Dual 2.4 GHz TX / RX + PA'],
      ['UI', 'OLED · nav buttons · buzzer'],
      ['Power', 'Battery input, real-time monitoring'],
    ],
    contributions: [
      'Placed the four motor-driver channels in the board corners with wide power copper, keeping the MCU and radios in the quiet centre.',
      'Integrated separate TX and RX nRF modules so commands and telemetry run in parallel.',
      'Wrote real-time firmware for motor control, wireless communication and navigation.',
      'Verified IMU fusion on hardware: roll / pitch / yaw shown live on the OLED.',
    ],
    images: [
      {
        file: 'Smart Control Mainboard for Robocup/Smart Control Mainboard for RoboCup3.jpg',
        caption: 'Assembled board running: IMU roll / pitch / yaw on the OLED, both radios fitted.',
      },
      {
        file: 'Smart Control Mainboard for Robocup/Smart Control Mainboard for RoboCup2.jpg',
        caption: '3D top view in Altium: MCU at centre, four motor-driver quadrants, OLED and radio headers.',
      },
      {
        file: 'Smart Control Mainboard for Robocup/Smart Control Mainboard for RoboCup1.jpg',
        caption: 'Routed layout (top + bottom): power copper to the drivers, signal routing around the MCU.',
      },
    ],
  },

  {
    id: 'rk3566-carrier',
    featured: true,
    title: 'Rockchip RK3566 Robot Carrier Board',
    short: '4-layer Core3566 carrier: 15 servo ports, CSI camera, BNO055 IMU, ADS1115, 2S power.',
    category: 'robotics',
    layers: '4 layers',
    tool: 'KiCad',
    tags: ['RK3566', 'MIPI CSI', 'BNO055', 'ADS1115', '2S battery', '5 V / 4 A buck'],
    summary:
      'A 4-layer, 130 × 110 mm carrier for the Core3566 compute module that forms the body electronics of a legged robot. It brings out 15 serial-bus servo ports on isolated servo power rails, a CSI camera interface, BNO055 IMU, ADS1115 ADC, USB-C, microSD boot storage and a 2-cell battery input with protection and an onboard 5 V / 4 A buck.',
    specs: [
      ['Board', '130 × 110 mm · 4 layers'],
      ['Compute', 'Core3566 (RK3566) module'],
      ['Servos', '15 serial-bus ports, 3 rails'],
      ['Sensors', 'BNO055 IMU · ADS1115 ADC'],
      ['Camera', 'CSI, 15-contact flex'],
      ['Power', '2S battery · 5 V / 4 A buck'],
    ],
    contributions: [
      'Structured the schematic as a 9-sheet hierarchy: module contacts, USB-C/boot, IMU, storage/camera, servos, head signals, battery protection and buck.',
      'Routed wide VSERVO / VBAT copper with fusing to three servo groups, kept apart from the module logic supply.',
      'Placed the camera flex and microSD next to the module so the CSI and SDMMC traces stay short.',
    ],
    images: [
      {
        file: 'Carrier pcb design for Core 3566 -CSI camera interface, BNO055 IMU and ADS1115/Screenshot 2026-09-09 024924.png',
        caption: '3D render: servo headers on three edges, 2S battery input, power MOSFETs, camera flex and microSD.',
      },
      {
        file: 'Carrier pcb design for Core 3566 -CSI camera interface, BNO055 IMU and ADS1115/Screenshot 2026-09-09 030425.png',
        caption: 'Layout: Core3566 footprint (55 × 40 mm), labelled VSERVO / VBAT power copper.',
      },
      {
        file: 'Carrier pcb design for Core 3566 -CSI camera interface, BNO055 IMU and ADS1115/Screenshot 2026-09-09 025048.png',
        caption: 'Copper pours shown: servo power distribution and camera / storage routing.',
      },
      {
        file: 'Carrier pcb design for Core 3566 -CSI camera interface, BNO055 IMU and ADS1115/Screenshot 2026-09-09 024042.png',
        caption: 'Hierarchical schematic: Core3566 carrier contacts sheet and the 9-sheet structure.',
      },
      {
        file: 'Carrier pcb design for Core 3566 -CSI camera interface, BNO055 IMU and ADS1115/Screenshot 2026-09-09 024114.png',
        caption: 'Schematic sheet: SDMMC boot storage, camera flex and module bypass.',
      },
      {
        file: 'Carrier pcb design for Core 3566 -CSI camera interface, BNO055 IMU and ADS1115/Screenshot 2026-09-09 025002.png',
        caption: '3D bottom view.',
      },
    ],
  },

  {
    id: 'openeew',
    featured: false,
    title: 'OpenEEW Earthquake Sensor',
    short: 'ESP32 seismic node with precision accelerometer, Ethernet RMII, Wi-Fi and enclosure.',
    category: 'iot',
    layers: 'Multilayer',
    tool: 'KiCad',
    tags: ['ESP32', 'Accelerometer', 'Ethernet RMII', 'Wi-Fi', 'USB-C', 'Enclosure'],
    summary:
      'An earthquake early-warning sensor node in the OpenEEW format. An ESP32-WROOM-32D handles Wi-Fi and processing, a precision accelerometer captures ground motion, and an RMII Ethernet PHY with an RJ45 gives a wired backhaul. It also has USB-C, GPS and I²C expansion headers, status LEDs and a buzzer, all fitted into a wall-mount enclosure.',
    specs: [
      ['Board', '75 × 50 mm'],
      ['MCU', 'ESP32-WROOM-32D'],
      ['Wired', 'Ethernet RMII + RJ45'],
      ['Sensing', 'Precision 3-axis accelerometer'],
      ['Layout', '410 pads · 338 vias · 106 nets'],
      ['DRC', '0 unrouted'],
    ],
    contributions: [
      'Kept the ESP32 antenna in a dedicated 5 mm keep-out at the board edge, clear of copper and the enclosure wall.',
      'Placed the accelerometer near a mounting screw for rigid coupling and marked its X/Y/Z axes on the silkscreen.',
      'Designed the board outline around the enclosure bosses and connector cut-outs.',
    ],
    images: [
      {
        file: 'OpenEEW sensor/1.png',
        caption: 'Assembled sensor in its enclosure, powered over USB-C with status LEDs lit.',
      },
      {
        file: 'OpenEEW sensor/animated-box.gif',
        caption: 'Enclosure assembly animation.',
        animated: true,
      },
      {
        file: 'OpenEEW sensor/3.png',
        caption: 'KiCad layout with board dimensions and antenna keep-out zone: 931 track segments, 0 unrouted.',
      },
      {
        file: 'OpenEEW sensor/4.png',
        caption: 'Top copper: ground pour with via stitching.',
      },
      {
        file: 'OpenEEW sensor/5.png',
        caption: 'Bottom copper: bus routing on a solid ground reference.',
      },
      {
        file: 'OpenEEW sensor/2.png',
        caption: 'Schematic blocks: USB, serial bridge, controller, accelerometer, Ethernet, LEDs and expansion headers.',
      },
    ],
  },

  {
    id: 'esp32s3-wearable',
    featured: false,
    title: 'ESP32-S3 Wearable Audio & Haptic Device',
    short: '4-layer organic-shaped wearable: I²S mic + amp, haptic motor, LiPo charging and fuel gauge.',
    category: 'wearable',
    layers: '4 layers',
    tool: 'KiCad',
    tags: ['ESP32-S3', 'I²S audio', 'MEMS mic', 'Haptics', 'LiPo + fuel gauge', 'USB-C'],
    summary:
      'A four-layer wearable built around the ESP32-S3, shaped to fit a curved enclosure. It records through an SPH0645LM4H I²S MEMS microphone, plays audio through a MAX98357A class-D amplifier, drives a DC vibration motor and RGB LEDs, and charges a LiPo over USB-C with an MCP73831 charger and MAX17048 fuel gauge.',
    specs: [
      ['MCU', 'ESP32-S3-WROOM-1'],
      ['Audio', 'SPH0645 mic · MAX98357A amp'],
      ['Haptics', 'DC motor via AO3400A FET'],
      ['Charging', 'MCP73831 (125 mA) · USB-C'],
      ['Gauge', 'MAX17048 fuel gauge'],
      ['Regulator', 'AP2112K 3.3 V LDO'],
    ],
    contributions: [
      'Shaped the outline to the industrial-design enclosure and checked fit against the 3D housing.',
      'Kept the module antenna over a copper keep-out that extends past the board edge.',
      'Built the motor driver with a low-side MOSFET and flyback diode, and included a full battery path (charge, gauge, power switch).',
    ],
    images: [
      {
        file: 'ESP32 based Wearable motor device/Screenshot 2026-09-09 021858.png',
        caption: '3D top view: ESP32-S3 module with buttons, motor connector, mic and USB-C.',
      },
      {
        file: 'ESP32 based Wearable motor device/Screenshot 2026-09-09 022011.png',
        caption: 'Board checked against the enclosure, next to the routed layout with the antenna keep-out.',
      },
      {
        file: 'ESP32 based Wearable motor device/Screenshot 2026-09-09 022039.png',
        caption: 'Routed layout detail: I²S, charger and motor-driver sections.',
      },
      {
        file: 'ESP32 based Wearable motor device/Screenshot 2026-09-09 022208.jpg',
        caption: 'Schematic: ESP32-S3, USB-C LiPo charger, fuel gauge, LDO, microphone, amplifier and motor driver.',
      },
      {
        file: 'ESP32 based Wearable motor device/Screenshot 2026-09-09 021930.png',
        caption: '3D bottom view: LDO and battery / speaker connectors.',
      },
    ],
  },

  {
    id: 'ultra-mini',
    featured: false,
    title: 'Ultra-Miniaturized Round PCB',
    short: 'Coin-sized ESP32-C3 board with round display: dense placement, microvias, fine pitch.',
    category: 'wearable',
    layers: 'Multilayer HDI',
    tool: 'ECAD + MCAD',
    tags: ['ESP32-C3', 'HDI', 'Microvias', 'Fine pitch', 'Round display', 'Enclosure'],
    summary:
      'An ultra-compact PCB for a space-critical product, about the size of a coin, that stays fully functional. It uses high-density placement, microvias and fine-pitch parts in a multilayer stack to fit an ESP32-C3 module, USB-C, power management and a round display, with signal integrity, power delivery and thermal limits all met in a tiny footprint. Manufactured and assembled with precision SMT.',
    specs: [
      ['MCU', 'ESP32-C3-MINI-1'],
      ['Form factor', 'Round, coin-sized'],
      ['Technology', 'Microvias · fine pitch'],
      ['I/O', 'USB-C · round LCD flex'],
      ['Build', 'Precision SMT assembly'],
    ],
    contributions: [
      'Worked through tight routing constraints while keeping signal integrity, power delivery and thermal limits.',
      'Co-designed the stack with the enclosure: board, display and housing in one exploded model.',
      'Took the design through fabrication and SMT assembly.',
    ],
    images: [
      {
        file: 'Ultra-mininatured PCB design/33.jpg',
        caption: 'Assembled board next to a coin for scale, with the round display flex underneath.',
      },
      {
        file: 'Ultra-mininatured PCB design/22.jpg',
        caption: 'Exploded render: PCB, gasket and housing.',
      },
    ],
  },

  {
    id: 'isolated-control',
    featured: false,
    title: '4-Layer Isolated Dual-Loop Industrial Controller',
    short: 'Card-edge control board: two MCU loops, isolation, power management, high-current switching.',
    category: 'industrial',
    layers: '4 layers',
    tool: 'Cadence OrCAD / Allegro',
    tags: ['Dual MCU', 'Galvanic isolation', 'High-current', 'Power management', 'Card-edge'],
    summary:
      'A complex 4-layer isolated, dual-loop industrial control PCB laid out in OrCAD PCB Editor / Allegro from an OrCAD Capture schematic. Two MCU-based control loops, signal isolation, regulated power management and high-current switching share one long card-edge board that plugs into a backplane.',
    specs: [
      ['Stack-up', '4 layers'],
      ['Control', '2 independent MCU loops'],
      ['Isolation', 'Isolated I/O and signalling'],
      ['Power', 'Regulated rails + high-current switching'],
      ['Interface', 'Gold-finger card edge'],
      ['Flow', 'OrCAD Capture → Allegro'],
    ],
    contributions: [
      'Separated isolated domains with clear creepage gaps and kept each control loop in its own region.',
      'Sized copper pours for the high-current switching paths and placed the power stages near the edge connector.',
      'Supported prototype assembly, bring-up and design revisions.',
    ],
    images: [
      {
        file: '4-Layer Isolated Dual-Loop Industrial Control PCB with MCU-Based Control, Power Management, and High-Current Switching/1.jpeg',
        caption: 'Assembled controller: two MCUs, power stages and gold-finger card-edge connectors.',
      },
      {
        file: '4-Layer Isolated Dual-Loop Industrial Control PCB with MCU-Based Control, Power Management, and High-Current Switching/2.jpeg',
        caption: 'Allegro global view: copper pours sized for the high-current paths.',
      },
      {
        file: '4-Layer Isolated Dual-Loop Industrial Control PCB with MCU-Based Control, Power Management, and High-Current Switching/3.jpeg',
        caption: 'Placement view: isolated sections and power components along the board.',
      },
    ],
  },

  {
    id: 'iris-camera',
    featured: false,
    title: 'IRIS Dual-Camera Sensor Board',
    short: 'STM32F407 board with two CMOS image sensors and an IR distance sensor.',
    category: 'robotics',
    layers: 'Camera + MCU',
    tool: 'Altium Designer',
    tags: ['STM32F407', 'Dual CMOS', 'IR ranging', 'LCD', 'Micro-USB'],
    summary:
      'A camera and sensing board ("CMOS Camera V2.0") pairing two CMOS image sensors on flex connectors with a Sharp infrared distance sensor, run by an STM32F407 on the back. It also has an LCD connector, a 22-pin expansion header, status LEDs and micro-USB.',
    specs: [
      ['MCU', 'STM32F407 (LQFP-100)'],
      ['Imaging', '2× CMOS sensor, FPC'],
      ['Ranging', 'Sharp GP2Y0A21 IR'],
      ['I/O', 'LCD · 22-pin header · micro-USB'],
    ],
    contributions: [
      'Placed the two sensors symmetrically around the IR ranger for a stereo-style baseline.',
      'Routed both camera interfaces to the STM32F4 on the back side, keeping the front clear for optics.',
      'Took the design from 3D model to assembled V2.0 hardware.',
    ],
    images: [
      {
        file: 'IRIS Camera board/IRIS camera board1.png',
        caption: 'Assembled V2.0 board: two camera modules on either side of the IR distance sensor.',
      },
      {
        file: 'IRIS Camera board/Iris Camera.png',
        caption: '3D model before fabrication.',
      },
      {
        file: 'IRIS Camera board/IRIS camera board back.png',
        caption: 'Back side: STM32F407 with crystal, interface IC and support parts.',
      },
      {
        file: 'IRIS Camera board/IRIS camera board2.png',
        caption: 'Side detail: lens module, FPC connector and IR sensor.',
      },
    ],
  },
]
