// Project albums.
// `file` is relative to the ../projects folder. Run `npm run images` after changing images:
// it writes optimised WebP files to public/img/<id>/<index>.webp (+ -thumb.webp).
// `trim: true` crops uniform black letterbox bars from screen captures.
// `crop: [left, top, width, height]` cuts a screenshot down to the board (removes app UI).

// One category per project, by what the product is for.
export const categories = [
  { id: 'all', label: 'All projects' },
  { id: 'medical', label: 'Medical & Research Instruments', blurb: 'Low-noise biopotential acquisition and research hardware.' },
  { id: 'robotics', label: 'Robotics & Machine Vision', blurb: 'Robot controllers, compute carriers and camera / sensing boards.' },
  { id: 'iot', label: 'IoT & Connected Devices', blurb: 'Networked sensor nodes and wireless processing platforms.' },
  { id: 'wearable', label: 'Wearables & Miniature Devices', blurb: 'Battery-powered, space-constrained products shaped to their enclosures.' },
  { id: 'industrial', label: 'Industrial Control & Power', blurb: 'Isolated control, communication interfaces, power management and high-current switching.' },
  { id: 'devboards', label: 'Dev Boards & Embedded Tools', blurb: 'Evaluation boards, USB devices and the host tools that drive them.' },
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

  {
    id: 'am625-carrier',
    featured: true,
    title: 'TI AM625 SOM + Carrier Board',
    short: '10-layer AM625 SOM on a 6-layer carrier: dual display, dual Gigabit Ethernet, audio and eMMC.',
    category: 'devboards',
    layers: '6 L carrier · 10 L SOM',
    tool: 'Altium Designer',
    tags: ['TI AM625', 'SOM', 'Gigabit Ethernet', 'HDMI / LVDS', 'eMMC', 'Audio codec'],
    summary:
      'A carrier board for a custom Texas Instruments AM625 system-on-module, built for AI and full-HD dual-display applications. The SOM is a 10-layer design and the carrier a 6-layer board that brings out video, networking, audio, storage and USB, with its own DC-DC power stage and JTAG debug.',
    specs: [
      ['Processor', 'TI AM625 SOM'],
      ['Layers', 'Carrier 6 · SOM 10'],
      ['Storage', 'eMMC up to 32 GB (HS400) · microSD'],
      ['Video', 'LVDS → RGB (SN75LVDS82) → HDMI'],
      ['Network', '2× Gigabit Ethernet, RTL8211F RGMII PHY'],
      ['Audio', 'TLV320AIC3106 codec'],
      ['USB / power', 'USB-C + USB-A · TLV62595 DC-DC'],
      ['Debug', 'JTAG (TC2050) · UART · SPI · I2C · CAN'],
    ],
    contributions: [
      'Drew the block diagram and split the schematic into per-function sheets: DC-DC, eMMC & SD, HDMI, bootstrap, two GbE PHYs, USB, audio, JTAG/debug and SoC pin-out.',
      'Routed the RGMII Ethernet, LVDS video and HS400 eMMC interfaces as impedance-controlled, length-matched groups.',
      'Built the USB-C input with protection feeding a TLV62595 DC-DC converter for stable carrier power.',
      'Placed all user connectors (2× RJ45, HDMI, USB-A, USB-C, audio jack, headers) along the board edges for an enclosure-ready layout.',
    ],
    images: [
      {
        file: 'Carrier Board for AM625/Carrier Board for AM625-1.png',
        crop: [635, 150, 775, 710],
        caption: '3D view of the carrier: AM625 SOM in the middle, two RJ45 Gigabit ports, USB-A, USB-C, HDMI and audio jack along the edges.',
      },
      {
        file: 'Carrier Board for AM625/5.png',
        caption: 'Block diagram: AM625 SOM with eMMC, LVDS→HDMI video, audio codec, RGMII Ethernet PHY, USB, SD card, JTAG and DC-DC power.',
      },
      {
        file: 'Carrier Board for AM625/Carrier Board for AM625-3.png',
        crop: [580, 160, 810, 800],
        caption: 'Top-layer routing with ground pours and the isolated Ethernet magnetics area.',
      },
      {
        file: 'Carrier Board for AM625/Carrier Board for AM625-2.png',
        crop: [700, 170, 710, 690],
        caption: 'Bottom side: microSD socket and memory under the SOM area.',
      },
    ],
  },

  {
    id: 'esp32p4-gateway',
    featured: true,
    title: 'ESP32-P4 Solar LoRa IoT Gateway ("DeepSense V2")',
    short: 'ESP32-P4 + ESP32-C6 gateway with an SX1262 LoRa module, I2S microphone and solar charging.',
    category: 'iot',
    layers: '75 × 75 mm',
    tool: 'Altium Designer',
    tags: ['ESP32-P4', 'ESP32-C6', 'LoRa SX1262', 'Solar MPPT', 'I2S audio', 'microSD'],
    summary:
      'A custom IoT gateway built around the Espressif ESP32-P4 processor. An ESP32-C6 module adds Wi-Fi 6 / BLE, and an eByte E22-900M22S (SX1262) module provides long-range LoRa links to field nodes. It records audio from an I2S microphone to microSD and runs off solar power with two batteries, so it can be deployed with no mains supply.',
    specs: [
      ['Processor', 'Espressif ESP32-P4'],
      ['Wireless', 'ESP32-C6 (Wi-Fi 6 / BLE) · E22-900M22S LoRa'],
      ['Audio', 'I2S microphone connector'],
      ['Storage', 'microSD'],
      ['Power', 'Solar input, CN3791 MPPT charger, 2 battery inputs'],
      ['Regulation', 'MP1584 buck + TLV62569 DC-DC, TVS + fuse'],
      ['Board', '75 × 75 mm, JLCPCB assembled'],
    ],
    contributions: [
      'Placed the two radio modules at opposite corners with their antenna keep-outs at the board edge, away from the switching power stage.',
      'Designed the solar charging and dual-battery power path with input protection (TVS, fuse, Schottky) and a buck stage for the 3.3 V rail.',
      'Routed the ESP32-P4 fan-out with a stitched ground pad and short decoupling loops, and labelled every connector on the silkscreen (I2S, I2C, BAT1/2, SOLAR, programming).',
      'Prepared BOM and CPL files and checked part placement in the JLCPCB assembly viewer.',
    ],
    images: [
      {
        file: 'Custom ESP32-P4 Based IoT Gateway PCB Design/Custom ESP32-P4 Based IoT Gateway PCB Design1.png',
        caption: '3D render: ESP32-P4 at the centre, ESP32-C6 module (top right), LoRa module (right), microSD, USB-C and the power stage below.',
      },
      {
        file: 'Custom ESP32-P4 Based IoT Gateway PCB Design/Custom ESP32-P4 Based IoT Gateway PCB Design2.png',
        caption: 'PCB layout with the 75 mm outline: ground-stitched processor pad, LoRa module footprint and wide power copper.',
      },
      {
        file: 'Custom ESP32-P4 Based IoT Gateway PCB Design/Custom ESP32-P4 Based IoT Gateway PCB Design3.png',
        crop: [60, 20, 831, 812],
        caption: 'Bottom side: labelled BAT1/BAT2, SOLAR, I2C and ESP32-C6 programming connectors.',
      },
      {
        file: 'Custom ESP32-P4 Based IoT Gateway PCB Design/Custom ESP32-P4 Based IoT Gateway PCB Design4.png',
        caption: 'Combined layer view of the routing.',
      },
      {
        file: 'Custom ESP32-P4 Based IoT Gateway PCB Design/Custom ESP32-P4 Based IoT Gateway PCB Design5.png',
        crop: [30, 75, 1080, 870],
        caption: 'JLCPCB assembly preview: placement and part check before ordering.',
      },
    ],
  },

  {
    id: 'lte-lora-ble-node',
    featured: false,
    title: 'BLE + LTE + LoRa Environmental Sensor Node',
    short: 'Round tri-radio sensor node: LTE-M/NB-IoT, LoRa and BLE with three u.FL antennas.',
    category: 'iot',
    layers: 'Round, double-sided',
    tool: 'Altium Designer',
    tags: ['LTE-M / NB-IoT', 'Quectel BG770A', 'LoRa', 'BLE', 'STM32', 'Nano-SIM'],
    summary:
      'A circular environmental-monitoring node ("Envirometrics Prototype V1.0") with three radios, so it can report over whichever link is available: a Quectel cellular module for LTE-M / NB-IoT, a LoRa module and BLE. An STM32 runs the board, which also has a nano-SIM, SPI flash and connectors for a display, sensors and a battery.',
    specs: [
      ['MCU', 'STM32 (LQFP-64)'],
      ['Cellular', 'Quectel BG770A-GL, LTE-M / NB-IoT + nano-SIM'],
      ['Long range', 'LoRa module (RF96)'],
      ['Short range', 'BLE'],
      ['Antennas', '3× u.FL'],
      ['I/O', 'Display (SPI), I2C + ADC sensor port, UART, USB, SWD, battery'],
    ],
    contributions: [
      'Fit three radios on a small round board, each with its own u.FL feed placed at the edge and short RF traces.',
      'Kept a solid ground pour under the RF section and stitched it with vias around the board edge.',
      'Moved all connectors (display, sensors, SWD, battery) to the back so the top side stays free for the radios.',
      'Built and assembled the prototype from the 3D design.',
    ],
    images: [
      {
        file: 'BLE, LTE & LORA based IoT device/BLE, LTE & LORA based IoT device 2.png',
        caption: 'Assembled prototype: STM32 in the middle, Quectel LTE module (right), LoRa module (left) and nano-SIM holder.',
      },
      {
        file: 'BLE, LTE & LORA based IoT device/BLE, LTE & LORA based IoT device 1.png',
        caption: '3D model of the top side with the three u.FL antenna connectors.',
      },
      {
        file: 'BLE, LTE & LORA based IoT device/BLE, LTE & LORA based IoT device 3.png',
        caption: 'PCB layout: ground pour and via stitching around the RF sections.',
      },
      {
        file: 'BLE, LTE & LORA based IoT device/BLE, LTE & LORA based IoT device 4.png',
        caption: '3D model of the back: display, SWD, sensor and battery connectors.',
      },
      {
        file: 'BLE, LTE & LORA based IoT device/BLE, LTE & LORA based IoT device 5.png',
        caption: 'Assembled back side.',
      },
    ],
  },

  {
    id: 'industrial-comm',
    featured: false,
    title: 'Industrial Communication & Control Board Set',
    short: 'A family of control, power, sensor-ring and LED boards, built and assembled as a pilot run.',
    category: 'industrial',
    layers: 'Multi-board system',
    tool: 'Altium Designer',
    tags: ['ESP8266 / NodeMCU', 'ADS1115 ADC', 'Buck converters', 'Fan / load drivers', 'Pilot run'],
    summary:
      'A complete set of boards for one connected control system, taken through a pilot run. Controller boards carry a Wi-Fi module and an ADS1115 ADC, with two buck converters, fan and load drivers, and a 19 V input. Alongside them are MCU interface boards, ring-shaped sensor boards and LED array panels, all joined by keyed wire-to-board connectors.',
    specs: [
      ['Controller', 'NodeMCU (ESP8266) + ADS1115 16-bit ADC'],
      ['Power', '19 V input → 2× buck regulators'],
      ['Outputs', 'Fan and load drivers'],
      ['Boards', 'Controller · MCU interface · ring sensor · LED array'],
      ['Wiring', 'Keyed JST wire-to-board connectors'],
    ],
    contributions: [
      'Split the system into separate board types so each could be tested and replaced on its own.',
      'Designed the power stage and driver outputs on the controller boards, with every connector labelled.',
      'Built the pilot batch and brought up the boards on the bench.',
    ],
    images: [
      {
        file: 'Industrial Communication Interface PCB/Industrial Communication Interface PCB2.png',
        caption: 'The full board set: LED arrays, MCU interface boards, ring sensor boards and Wi-Fi controller boards.',
      },
      {
        file: 'Industrial Communication Interface PCB/Industrial Communication Interface PCB1.png',
        caption: 'The pilot batch on the bench after assembly.',
      },
      {
        file: 'Industrial Communication Interface PCB/Industrial Communication Interface PCB3.png',
        caption: 'Another view of the batch, with cable harnesses being made.',
      },
    ],
  },
  // ------------------------------------------------------------------
  // Projects from GitHub (github.com/devengineer0312). `repo` links the album
  // to its repository; images marked "Illustration" are diagrams drawn from the
  // repository contents (scripts/make-covers.mjs), the rest come from the repo.
  // ------------------------------------------------------------------
  {
    id: 'gh-headband-eeg',
    repo: 'Headband_EEG_Firmware',
    featured: false,
    title: '6-Channel EEG Headband Firmware',
    short: 'ATmega1284 firmware: EEG acquisition, impedance checks and Bluetooth streaming.',
    category: 'medical',
    layers: 'Firmware · C++',
    tool: 'Arduino / AVR',
    tags: ['ATmega1284', 'EEG', '6 channels', 'Bluetooth', 'Impedance'],
    summary:
      'Firmware for a wearable 6-channel EEG headband built on an ATmega1284. It drives the analog front end, measures electrode impedance, streams data over Bluetooth, can generate synthetic test signals, and exposes a serial command set to enable or disable individual channels and start or stop streaming.',
    specs: [
      ['MCU', 'ATmega1284 @ 16 MHz'],
      ['Channels', '6 EEG channels'],
      ['Link', 'Bluetooth data stream'],
      ['Checks', 'Electrode impedance'],
      ['Test mode', 'Synthetic signal generator'],
      ['Code', 'C++ (Arduino)'],
    ],
    notesTitle: 'In the repository',
    contributions: [
      'Separate modules for ADC acquisition (adc.cpp), Bluetooth (bth.cpp) and impedance measurement (impedance.cpp).',
      'Single-character serial command protocol for per-channel control, streaming, synthetic data and soft reset.',
      'Pre-built .hex images, with and without bootloader, for programming boards.',
    ],
    images: [
      {
        file: 'GitHub repositories/Headband_EEG_Firmware/cover.png',
        caption: 'Illustration: 6 headband electrodes → ATmega1284 acquisition and impedance checks → Bluetooth stream to the host.',
      },
    ],
  },
  {
    id: 'gh-fpga-adc',
    repo: 'FPGA_ADC_FIRMWARE',
    featured: false,
    title: 'FPGA ADC / DAC Data Acquisition',
    short: 'VHDL interfaces for an ADS8330 ADC and AD5441 DAC, plus a 48-channel PC app.',
    category: 'medical',
    layers: 'FPGA · VHDL',
    tool: 'Intel Quartus',
    tags: ['VHDL', 'Quartus', 'ADS8330', 'AD5441', '48 channels'],
    summary:
      'FPGA design for a multi-channel data-acquisition system on an Intel (Altera) device: VHDL interface blocks for the TI ADS8330 16-bit ADC and the AD5441 DAC with a power-on reset block, developed through numbered design iterations, plus a Windows application for 48-channel acquisition.',
    specs: [
      ['FPGA', 'Intel (Altera) · Quartus'],
      ['HDL', 'VHDL (+ Verilog)'],
      ['ADC', 'TI ADS8330, 16-bit'],
      ['DAC', 'AD5441'],
      ['Host', '48-channel Windows app (C++)'],
    ],
    notesTitle: 'In the repository',
    contributions: [
      'ADC and DAC interface entities (ads8330_interface, ad5441_interface) with a top-level adc_dac_interface.',
      'Design iterations kept as separate Quartus projects (Itn1 → Itn5) with fit, timing and pin reports.',
      'Firmware 3.3 release with pin-assignment fixes and the 48-channel acquisition application.',
    ],
    images: [
      {
        file: 'GitHub repositories/FPGA_ADC_FIRMWARE/cover.png',
        caption: 'Illustration: 48 analog channels → ADS8330 ADC → FPGA interface logic → AD5441 DAC, with the 48-channel PC application.',
      },
    ],
  },
  {
    id: 'gh-elocker',
    repo: 'PHYS-eLocker-BLE-firmware-master',
    featured: false,
    title: 'eLocker BLE Smart Lock Firmware',
    short: 'TI CC2640R2 production firmware: BLE access, RFID, AES-128, motor and logs.',
    category: 'iot',
    layers: 'Firmware · C',
    tool: 'TI BLE SDK',
    tags: ['TI CC2640R2', 'BLE', 'RFID', 'AES-128', 'Production'],
    summary:
      'Production firmware for a Bluetooth Low Energy electronic locker on the TI CC2640R2. It handles phone access over BLE, an RFID reader over SPI, AES-128 encryption, lock-motor control, battery monitoring and non-volatile event logs, and ships as versioned releases with production programming and test guides.',
    specs: [
      ['MCU', 'TI CC2640R2 (BLE)'],
      ['Access', 'BLE phone app · RFID'],
      ['Security', 'AES-128'],
      ['Hardware', 'Lock motor · battery ADC'],
      ['Releases', 'v0.2.2 → v0.4.5'],
    ],
    notesTitle: 'In the repository',
    contributions: [
      'Application modules for RFID driver and task manager, SPI driver, encryption, logs, NV commands and hardware control.',
      'Release notes tracking fixes such as accurate battery sensing (ADC on a floating pin) and an engineering/installation mode.',
      'Production programming and testing documents bundled with each release build.',
    ],
    images: [
      {
        file: 'GitHub repositories/PHYS-eLocker-BLE-firmware-master/cover.png',
        caption: 'Illustration: CC2640R2 firmware blocks: BLE phone access, RFID, AES-128, motor, battery ADC and event logs, with the release history.',
      },
    ],
  },
  {
    id: 'gh-pet-tracker',
    repo: 'Pet-tracker',
    featured: false,
    title: 'Pet Tracker: GPS & Motion IoT',
    short: 'ESP32-C6 GPS + IMU tracker with WebSocket telemetry and a live map dashboard.',
    category: 'iot',
    layers: 'Firmware + Web',
    tool: 'ESP32 / Angular',
    tags: ['ESP32-C6', 'GPS NEO-6M', 'MPU-6050', 'WebSocket', 'Angular'],
    summary:
      'An end-to-end IoT pet tracker. An ESP32-C6 reads a u-blox NEO-6M GPS and an MPU-6050 IMU for activity detection, and sends telemetry over secure WebSockets to an Angular dashboard that shows the pet live on a map. The app is deployed and publicly accessible.',
    specs: [
      ['MCU', 'ESP32-C6'],
      ['Position', 'u-blox NEO-6M GPS'],
      ['Motion', 'MPU-6050 IMU'],
      ['Link', 'Secure WebSocket'],
      ['Dashboard', 'Angular 20 · TypeScript'],
    ],
    notesTitle: 'In the repository',
    contributions: [
      'ESP32-C6 firmware for GPS and IMU acquisition and activity detection.',
      'Angular dashboard showing the pet’s live location on a map.',
      'Wiring diagram for the prototype and container setup for deployment.',
    ],
    images: [
      {
        file: 'GitHub repositories/Pet-tracker/map-dashboard.png',
        caption: 'PetTracker dashboard: live pet position on the map.',
      },
      {
        file: 'GitHub repositories/Pet-tracker/circuit.png',
        caption: 'Prototype wiring: ESP32-C6 DevKit, MPU-6050 IMU and NEO-6M GPS with patch antenna.',
      },
    ],
  },
  {
    id: 'gh-vanguard',
    repo: 'Vanguard-Telemetry-Enterprise-IoT-Fleet-Tracking',
    featured: false,
    title: 'Vanguard Telemetry: IoT Fleet Tracking',
    short: 'Real-time GPS fleet platform: telemetry ingest, geofences and a live command center.',
    category: 'iot',
    layers: 'Full-stack IoT',
    tool: 'Node.js / React',
    tags: ['GPS telemetry', 'Geofencing', 'Node.js', 'React', 'Redis', 'Socket.io'],
    summary:
      'A full-stack IoT fleet-monitoring platform for real-time GPS telemetry ingestion, geofence evaluation and live asset visualisation. Built with TypeScript, Node.js, React, Redis, Prisma and Socket.io, it supports both simulated fleets and live device telemetry.',
    specs: [
      ['Backend', 'Node.js · TypeScript'],
      ['Data', 'Redis · Prisma'],
      ['Realtime', 'Socket.io'],
      ['Frontend', 'React command center'],
      ['Features', 'Geofences · live maps'],
    ],
    notesTitle: 'In the repository',
    contributions: [
      'Telemetry processing: receive, validate and process GPS updates from devices or the built-in simulator.',
      'Geofence engine that evaluates asset positions against boundaries in real time.',
      'Interactive React command center with live map and asset status.',
    ],
    images: [
      {
        file: 'GitHub repositories/Vanguard-Telemetry-Enterprise-IoT-Fleet-Tracking/cover.png',
        caption: 'Illustration: GPS devices → ingest → geofence engine → live React command center.',
      },
      {
        file: 'GitHub repositories/Vanguard-Telemetry-Enterprise-IoT-Fleet-Tracking/logo.jpg',
        caption: 'Vanguard Telemetry logo.',
      },
    ],
  },
  {
    id: 'gh-smartring',
    repo: 'smartring-f723e_disco',
    featured: false,
    title: 'Smart Ring UI on STM32F7',
    short: 'Cortex-M7 touchscreen interface on the STM32F723E-Discovery kit.',
    category: 'wearable',
    layers: 'Firmware · C',
    tool: 'STM32 / HAL',
    tags: ['STM32F723', 'Cortex-M7', 'Touchscreen', 'HAL'],
    summary:
      'STM32F7 (Cortex-M7) application on the STM32F723E-Discovery kit for a smart-ring interface: touchscreen driver with calibration and the ring UI logic, built on ST HAL and CMSIS.',
    specs: [
      ['MCU', 'STM32F723 · Cortex-M7'],
      ['Board', 'STM32F723E-Discovery'],
      ['Display', 'Touchscreen + calibration'],
      ['Stack', 'ST HAL · CMSIS'],
    ],
    notesTitle: 'In the repository',
    contributions: [
      'Smart-ring application logic (smartring.c) and clock setup (clock.c).',
      'Touchscreen calibration routine (ts_calib.c).',
      'Built on ST’s Discovery-kit HAL, CMSIS and utilities.',
    ],
    images: [
      {
        file: 'GitHub repositories/smartring-f723e_disco/cover.png',
        caption: 'Illustration: smart-ring UI on the Discovery board touchscreen, with the firmware layers.',
      },
    ],
  },
  {
    id: 'gh-usb-demo',
    repo: 'USBDemoBoard_Firmware',
    featured: false,
    title: 'USB Demo Board: Firmware + Host App',
    short: 'PIC USB device firmware with a C# Windows host application.',
    category: 'devboards',
    layers: 'Firmware + Host',
    tool: 'MPLAB / C#',
    tags: ['PIC', 'USB device', 'MPLAB', 'C# WinForms'],
    summary:
      'A USB demo board package: Microchip PIC USB device firmware written in C (MPLAB) and a C# Windows Forms host application that connects to the board over USB to exchange commands and data.',
    specs: [
      ['MCU', 'Microchip PIC (USB)'],
      ['Firmware', 'C · MPLAB'],
      ['Host', 'C# Windows Forms'],
      ['Version', '4.6.1'],
    ],
    notesTitle: 'In the repository',
    contributions: [
      'Device firmware with USB functions and linker script for the PIC target.',
      'Windows host app with a USB class for device communication.',
      'Pre-built firmware .hex for programming.',
    ],
    images: [
      {
        file: 'GitHub repositories/USBDemoBoard_Firmware/cover.png',
        caption: 'Illustration: PIC USB device board connected to the C# Windows host application.',
      },
    ],
  },
  {
    id: 'gh-24ghz-radar',
    repo: '24GHz-radar',
    featured: false,
    title: '24 GHz Doppler Radar (Sense2GoL)',
    short: 'Arduino IDE support for Infineon’s Sense2GoL 24 GHz radar board.',
    category: 'devboards',
    layers: 'Firmware · C',
    tool: 'Arduino / J-Link',
    tags: ['24 GHz radar', 'Infineon XMC1300', 'Arduino', 'J-Link'],
    summary:
      'Arduino IDE integration for Infineon’s Sense2GoL 24 GHz Doppler radar demo board (XMC1300 MCU), including the board core and setup for flashing and debugging with SEGGER J-Link.',
    specs: [
      ['Radar', '24 GHz Doppler'],
      ['Board', 'Infineon Sense2GoL'],
      ['MCU', 'XMC1300 (Arm Cortex-M0)'],
      ['Tooling', 'Arduino IDE · SEGGER J-Link'],
    ],
    notesTitle: 'In the repository',
    contributions: [
      'Arduino board package and core for the XMC1300-based radar board.',
      'Installation guide for the Arduino IDE and J-Link drivers.',
      'Based on Infineon’s Sense2GoL Arduino integration.',
    ],
    images: [
      {
        file: 'GitHub repositories/24GHz-radar/cover.png',
        caption: 'Illustration: Sense2GoL radar board, Doppler signal from a moving target, and the J-Link / Arduino tool chain.',
      },
    ],
  },
]
