export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  standards: string[];
  docs: { label: string; url: string }[];
}

export const products: Product[] = [
  // === EMERGENCY LIGHTING INVERTERS ===
  {
    slug: 'power-wave-1',
    image: '/images/products/power-wave-1.png',
    name: 'Power Wave 1',
    tagline: 'Single Phase, 2.1 – 17kW',
    description: 'Single phase emergency lighting inverter listed to UL924 and UL1778. Pure sine wave output providing 90-120 minute battery backup with zero transfer time, TVSS surge suppression, and microprocessor-controlled LCD self-testing.',
    category: 'emergency-lighting',
    features: ['True Online Double Conversion', 'Zero Transfer Time', 'Pure Sine Wave PWM', 'TVSS Surge Suppression (Class C)', 'Input Power Factor Correction', 'Microprocessor LCD Display', 'Self-Test & Battery Exerciser', 'Multiple Output Voltages'],
    standards: ['UL 924', 'UL 1778', 'NFPA 101', 'NFPA 70', 'NEC'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/powerwave1_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/powerwave1_TS.pdf' },
      { label: 'Drawings', url: '/pdf/powerwave1_TD.pdf' },
      { label: 'Manual', url: '/pdf/powerwave1_TM.pdf' },
    ],
  },
  {
    slug: 'power-wave-3',
    image: '/images/products/power-wave-3.png',
    name: 'Power Wave 3',
    tagline: 'Three Phase, 8 – 50kW',
    description: 'Three phase emergency lighting inverter listed to UL924 and UL1778. Internal maintenance bypass, TVSS surge suppression, and 90-120 minute battery backup with main input/output breakers.',
    category: 'emergency-lighting',
    features: ['Three Phase Output', 'Internal Maintenance Bypass', 'TVSS Surge Suppression (Class C)', 'Main Input & Output Breakers (UL1489)', 'Microprocessor LCD Display', 'Self-Test & Battery Exerciser'],
    standards: ['UL 924', 'UL 1778', 'UL 1489', 'NFPA 101'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/powerwave3_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/powerwave3_TS.pdf' },
      { label: 'Drawings', url: '/pdf/powerwave3_TD.pdf' },
    ],
  },
  {
    slug: 'power-wave-4',
    image: '/images/products/power-wave-4.png',
    name: 'Power Wave 4',
    tagline: 'Three Phase, 8 – 400kW',
    description: 'High-capacity three phase emergency lighting inverter with field-selectable UPS Double Conversion or Green Mode. Independent phase control, GMS remote monitoring, and internal maintenance bypass.',
    category: 'emergency-lighting',
    features: ['Field-Selectable UPS/Green Mode', 'Independent Phase Control', 'GMS Remote Monitoring', 'Internal Maintenance Bypass', 'TVSS Surge Suppression', 'Self-Test & Battery Exerciser'],
    standards: ['UL 924', 'UL 1778', 'NFPA 101', 'NFPA 70'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/powerwave4_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/powerwave4_TS.pdf' },
      { label: 'Drawings', url: '/pdf/powerwave4_TD.pdf' },
    ],
  },
  {
    slug: 'mini-power-wave',
    image: '/images/products/mini-power-wave.png',
    name: 'Mini Power Wave',
    tagline: 'Single Phase, 500W – 2.7kW',
    description: 'Compact single phase UL924 emergency lighting inverter. Both inverter electronics and backup batteries fit into a single enclosure, ideal for small spaces. Pure sine wave output with 90-120 minute backup.',
    category: 'emergency-lighting',
    features: ['All-in-One Enclosure', 'Pure Sine Wave Output', '90-120 Minute Backup', 'Compact Form Factor', 'Microprocessor Controlled', 'Self-Test & Battery Exerciser'],
    standards: ['UL 924', 'UL 1778'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/minipowerwave_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/minipowerwave_TS.pdf' },
      { label: 'Drawings', url: '/pdf/minipowerwave_TD.pdf' },
      { label: 'Manual', url: '/pdf/minipowerwave_TM.pdf' },
    ],
  },
  {
    slug: 'micro-power-wave',
    image: '/images/products/micro-power-wave.png',
    name: 'Micro Power Wave',
    tagline: 'Single Phase, 200W – 490W',
    description: 'Ultra-compact single phase emergency lighting inverter listed to UL924. Electronics and batteries in a single enclosure for tight spaces. 90-minute minimum battery backup.',
    category: 'emergency-lighting',
    features: ['Ultra-Compact Enclosure', 'Pure Sine Wave Output', '90-Minute Minimum Backup', 'ETL Listed to UL924', 'Single Enclosure Design'],
    standards: ['UL 924'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/micropowerwave_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/micropowerwave_TS.pdf' },
      { label: 'Drawings', url: '/pdf/micropowerwave_TD.pdf' },
      { label: 'Manual', url: '/pdf/micropowerwave_TM.pdf' },
    ],
  },
  {
    slug: 'nano-wave',
    image: '/images/products/nano-wave.png',
    name: 'Nano Power Wave',
    tagline: 'Single Phase, 35W – 100W (Lithium Ion)',
    description: 'Lithium ion powered UL924 remote emergency lighting dimming inverter for LED and fluorescent fixtures. Supports 90-minute emergency lighting with option to derate for 2-hour run time per Life Safety Code.',
    category: 'emergency-lighting',
    features: ['Lithium Ion Battery', 'LED & Fluorescent Compatible', 'Dimming Capability', '90-Min or 2-Hour Runtime', 'Remote Mounting', 'Life Safety Code Compliant'],
    standards: ['UL 924'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/nanowave_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/nanowave_TS.pdf' },
      { label: 'Drawings', url: '/pdf/nanowave_TD.pdf' },
      { label: 'Manual', url: '/pdf/nanowave_TM.pdf' },
    ],
  },
  {
    slug: 'heu',
    image: '/images/products/heu.png',
    name: 'Harsh Environment UPS',
    tagline: 'Single Phase, 2.1 – 17kW',
    description: 'Emergency lighting inverter built for industrial conditions. Conformal coated electronics, filtered ventilation, and NEMA 3R steel enclosure withstand tough environments while maintaining UL924 compliance.',
    category: 'emergency-lighting',
    features: ['NEMA 3R Steel Enclosure', 'Conformal Coated Electronics', 'Filtered Ventilation', 'Industrial Grade Construction', 'Pure Sine Wave Output', 'Zero Transfer Time'],
    standards: ['UL 924', 'UL 1778', 'NEMA 3R'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/heu_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/heu_TS.pdf' },
      { label: 'Drawings', url: '/pdf/heu_TD.pdf' },
      { label: 'Manual', url: '/pdf/heu_TM.pdf' },
    ],
  },
  // === SEISMIC CERTIFIED ===
  {
    slug: 'sv-power-wave-1',
    image: '/images/products/sv-power-wave-1.png',
    name: 'SV Power Wave 1',
    tagline: 'Seismic Certified, Single Phase, 3 – 17kW',
    description: 'Shaker table tested and OSHPD/HCAI certified single phase emergency lighting inverter. Approved for California hospitals and seismic zones with zero transfer time technology.',
    category: 'emergency-lighting',
    features: ['Shaker Table Tested', 'OSHPD/HCAI Certified', 'Zero Transfer Time', 'Pure Sine Wave PWM', 'TVSS Surge Suppression', 'Self-Test & Battery Exerciser'],
    standards: ['UL 924', 'UL 1778', 'OSHPD', 'HCAI', 'NFPA 101'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/svpowerwave1_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/svpowerwave1_TS.pdf' },
      { label: 'Drawings', url: '/pdf/svpowerwave1_TD.pdf' },
      { label: 'Manual', url: '/pdf/powerwave1_TM.pdf' },
    ],
  },
  {
    slug: 'sv-power-wave-3',
    image: '/images/products/sv-power-wave-3.png',
    name: 'SV Power Wave 3',
    tagline: 'Seismic Certified, Three Phase, 8 – 50kW',
    description: 'Shaker table tested and OSHPD/HCAI certified three phase emergency lighting inverter for seismic zones and California hospital applications.',
    category: 'emergency-lighting',
    features: ['Shaker Table Tested', 'OSHPD/HCAI Certified', 'Three Phase Output', 'Internal Maintenance Bypass', 'Zero Transfer Time'],
    standards: ['UL 924', 'UL 1778', 'OSHPD', 'HCAI'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/svpowerwave3_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/svpowerwave3_TS.pdf' },
      { label: 'Drawings', url: '/pdf/svpowerwave3_TD.pdf' },
    ],
  },
  {
    slug: 'sv-power-wave-4',
    image: '/images/products/sv-power-wave-4.png',
    name: 'SV Power Wave 4',
    tagline: 'Seismic Certified, Three Phase, 8 – 400kW',
    description: 'Shaker table tested OSHPD/HCAI certified high-capacity three phase inverter with independent phase control and GMS remote monitoring for seismic applications.',
    category: 'emergency-lighting',
    features: ['Shaker Table Tested', 'OSHPD/HCAI Certified', 'Independent Phase Control', 'GMS Remote Monitoring', 'Internal Maintenance Bypass'],
    standards: ['UL 924', 'UL 1778', 'OSHPD', 'HCAI'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/svpowerwave4_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/svpowerwave4_TS.pdf' },
      { label: 'Drawings', url: '/pdf/svpowerwave4_TD.pdf' },
      { label: 'Manual', url: '/pdf/svpowerwave4_TM.pdf' },
    ],
  },
  // === ELEVATOR BACKUP ===
  {
    slug: 'elevate',
    image: '/images/products/elevate.png',
    name: 'Power Wave Elevate',
    tagline: 'Three Phase, 24 – 240kW',
    description: 'Three phase elevator emergency backup system listed to UL924 and UL1778. Designed specifically to provide reliable elevator power during outages for safe building evacuation.',
    category: 'elevator-backup',
    features: ['Elevator-Specific Design', 'Three Phase Output', 'UL924 & UL1778 Listed', 'Safe Evacuation Power', 'Building Code Compliant'],
    standards: ['UL 924', 'UL 1778'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/PW-Elevate_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/PW-Elevate_TS.pdf' },
      { label: 'Drawings', url: '/pdf/PW-Elevate_TD.pdf' },
      { label: 'Manual', url: '/pdf/PW-Elevate_TM.pdf' },
    ],
  },
  // === FIRE ALARM BACKUP ===
  {
    slug: 'fire-alarm-backup',
    image: '/images/products/fire-alarm-backup.png',
    name: 'Fire Alarm Backup',
    tagline: 'UL1481 Fire Alarm Battery Backup',
    description: 'Specialized backup system listed to UL1481 for fire alarm notification appliance circuits. Ensures continuous power to fire alarm systems during outages for life safety compliance.',
    category: 'fire-alarm-backup',
    features: ['UL1481 Listed', 'Fire Alarm NAC Backup', 'Life Safety Compliant', 'Continuous Power During Outages', 'Self-Testing'],
    standards: ['UL 1481', 'NFPA 72'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/fab_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/fab_TS.pdf' },
      { label: 'Drawings', url: '/pdf/fab_TD.pdf' },
      { label: 'Manual', url: '/pdf/fab_TM.pdf' },
    ],
  },
  // === UPS BACKUP ===
  {
    slug: 'host-power',
    image: '/images/products/host-power.png',
    name: 'Host Power UPS',
    tagline: 'Three Phase, 10 – 500kVA',
    description: 'Advanced high-frequency UPS for non-linear loads with built-in load distribution. 90% efficiency, PWM sinusoidal waveform, generator compatible, and modular assembly for easy installation.',
    category: 'ups-backup',
    features: ['High Frequency Technology', 'Built-in Load Distribution', '90% Efficiency', 'PWM Sinusoidal Output', 'Generator Compatible', 'Modular Assembly', 'LCD Self-Diagnostics'],
    standards: ['UL 1778', 'UL 924', 'UL 924A'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/hostpower_DS.pdf' },
      { label: 'Manual', url: '/pdf/hostpower_TM.pdf' },
    ],
  },
  {
    slug: 'protector-1',
    image: '/images/products/protector-1.png',
    name: 'Protector 1',
    tagline: 'Single Phase UPS Protection',
    description: 'Single phase UPS surge protection system designed to protect electrical equipment from voltage transients and surge events in commercial and industrial environments.',
    category: 'ups-backup',
    features: ['Surge Protection', 'Single Phase', 'Voltage Transient Protection', 'Commercial & Industrial Grade'],
    standards: ['UL 1778'],
    docs: [],
  },
  {
    slug: 'protector-3',
    image: '/images/products/protector-3.png',
    name: 'Protector 3',
    tagline: 'Three Phase UPS Protection',
    description: 'Three phase UPS surge protection system offering enhanced protection for critical power applications in demanding industrial and commercial environments.',
    category: 'ups-backup',
    features: ['Three Phase Protection', 'Enhanced Surge Protection', 'Critical Load Protection', 'Industrial Grade'],
    standards: ['UL 1778'],
    docs: [],
  },
  // === MEDICAL GRADE ===
  {
    slug: 'medical-power',
    image: '/images/products/medical-power.png',
    name: 'Medical Power',
    tagline: 'Three Phase, 10 – 200kVA',
    description: 'Medical-grade UL60601-1 certified power conditioner with superior sub-cycle voltage stabilization of 1%. Independent phase control, seamless redundant power paths, and service without shutdown.',
    category: 'medical-grade',
    features: ['UL60601-1 Listed', '1% Voltage Stabilization', 'Independent Phase Control', 'Seamless Redundant Paths', 'Service Without Shutdown', '12-Pulse Harmonic Reduction', 'Front Service Clearance Only'],
    standards: ['UL 60601-1'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/medpower_DS.pdf' },
      { label: 'Manual', url: '/pdf/medpower_TM.pdf' },
    ],
  },
  {
    slug: 'phase-stabilizer',
    image: '/images/products/phase-stabilizer.png',
    name: 'Phase Stabilizer',
    tagline: 'Three Phase, 15 – 1,250kVA',
    description: 'Medical-grade power conditioning with ±1.5% output voltage regulation. Input and output filtering for clean, stable power delivery to sensitive loads with secondary surge suppression.',
    category: 'medical-grade',
    features: ['±1.5% Voltage Regulation', 'Input Filter (-40 dB)', 'Output Filter (-60 dB/decade)', 'Controlled Impedance', 'Secondary Surge Suppression'],
    standards: ['UL 1950', 'NFPA', 'NEC'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/phasestab_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/phasestab_TS.pdf' },
      { label: 'Drawings', url: '/pdf/phasestab_TD.pdf' },
    ],
  },
  // === VOLTAGE REGULATORS ===
  {
    slug: 'power-reg',
    image: '/images/products/power-reg.png',
    name: 'Power Reg',
    tagline: 'Three Phase, 15 – 2,000kVA',
    description: 'High-efficiency voltage regulator with ±3% output regulation and zero crossing tap switching. Common-mode noise attenuation up to -152 dB for ultra-regulated power delivery.',
    category: 'voltage-regulators',
    features: ['±3% Output Regulation', '>97% Efficiency', 'Zero Crossing Tap Switching', 'Common-Mode Noise Attenuation (-152 dB)', 'Low Distortion', 'Single Point Grounding'],
    standards: ['UL 1950', 'NFPA', 'NEMA'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/powerreg_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/powerreg_TS.pdf' },
      { label: 'Drawings', url: '/pdf/powerreg_TD.pdf' },
      { label: 'Manual', url: '/pdf/powerreg_TM.pdf' },
    ],
  },
  {
    slug: 'constant-power-6',
    image: '/images/products/constant-power-6.png',
    name: 'Constant Power 6',
    tagline: 'Single Phase, 3 – 15kVA',
    description: 'Single-phase isolation and voltage regulation with dual-shielded transformer. Input tolerance +10%/-26%, output ±3%. Distribution receptacles and compact footprint.',
    category: 'voltage-regulators',
    features: ['Dual-Shielded Transformer', 'Input +10%/-26% Tolerance', 'Output ±3% Regulation', 'Input/Output Filter (-60 dB)', 'Distribution Receptacles', 'Compact Footprint'],
    standards: ['UL 1950', 'NFPA', 'NEMA'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/cp6_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/cp6_TS.pdf' },
      { label: 'Drawings', url: '/pdf/cp6_TD.pdf' },
      { label: 'Manual', url: '/pdf/cp_TM.pdf' },
    ],
  },
  {
    slug: 'constant-power-18',
    image: '/images/products/constant-power-18.png',
    name: 'Constant Power 18',
    tagline: 'Three Phase, 15 – 100kVA',
    description: 'Three-phase isolation and voltage regulation in low-profile caster-based cabinet. SCR regulation assembly with main circuit breaker and shunt trip for responsive power conditioning.',
    category: 'voltage-regulators',
    features: ['Low-Profile Cabinet', 'SCR Regulation', 'Main Breaker with Shunt Trip', 'Dual-Shielded Transformer', 'Input Filter (-40 dB)', 'Bypass Switch'],
    standards: ['UL 1950', 'NFPA', 'NEMA'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/cp18_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/cp18_TS.pdf' },
      { label: 'Drawings', url: '/pdf/cp18_TD.pdf' },
    ],
  },
  // === ISOLATION TRANSFORMERS ===
  {
    slug: 'isocare',
    image: '/images/products/isocare.png',
    name: 'ISO-Care',
    tagline: 'Three Phase, 15 – 500kVA',
    description: 'Isolation transformer providing clean, noise-free power. Low impedance design with common mode noise attenuation up to -152 dB. Indoor and outdoor rated with NEMA 12 certification.',
    category: 'isolation-transformers',
    features: ['Common-Mode Noise Attenuation (-152 dB)', '3-5% Low Impedance', 'Adjustable Input Taps', 'NEMA 12 Certified', 'Indoor & Outdoor Rated', 'Temperature Sensor'],
    standards: ['UL 506', 'NFPA', 'NEMA'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/isocare_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/isocare_TS.pdf' },
      { label: 'Drawings', url: '/pdf/isocare_TD.pdf' },
      { label: 'Manual', url: '/pdf/isocare_TM.pdf' },
    ],
  },
  // === POWER DISTRIBUTION ===
  {
    slug: 'power-island',
    image: '/images/products/power-island.png',
    name: 'Power Island',
    tagline: '42 Pole (Sm), 84 Pole (Lg)',
    description: 'Modular power distribution with neutral and ground bus. Tiered and slotted conduit landing brackets supporting single and three-phase applications.',
    category: 'power-distribution',
    features: ['Modular Design', 'Neutral & Ground Bus', 'Tiered Conduit Landing', 'Single or Three Phase', 'Square D Compatible', 'Easy Access'],
    standards: ['UL Listed'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/powerisland_DS.pdf' },
      { label: 'Drawings', url: '/pdf/powerisland_TD.pdf' },
    ],
  },
  {
    slug: 'power-pac',
    image: '/images/products/power-pac.png',
    name: 'Power Pac',
    tagline: 'Three Phase, 15 – 450kVA',
    description: 'Comprehensive power distribution with built-in voltage regulation and monitoring. Designed for harmonic loads with >96% efficiency and system monitoring panel.',
    category: 'power-distribution',
    features: ['Built-in Regulation', '>96% Efficiency', 'Remote Distribution', 'System Monitoring Panel', 'Designed for Harmonic Loads', 'Swivel Caster & Leveling'],
    standards: ['UL 50', 'UL 67', 'UL 489', 'NFPA', 'NEMA'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/powerpac_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/powerpac_TS.pdf' },
      { label: 'Drawings', url: '/pdf/powerpac_TD.pdf' },
    ],
  },
  {
    slug: 'power-pal',
    image: '/images/products/power-pal.png',
    name: 'Power Pal',
    tagline: 'Three Phase, 15 – 300kVA',
    description: 'Efficient power distribution with high isolation and harmonic load support. Cost-effective alternative to regulated systems with >96% efficiency and overload protection.',
    category: 'power-distribution',
    features: ['High Isolation', '>96% Efficiency', 'Harmonic Load Support', 'Overload Protection', 'Remote Distribution', 'System Monitoring'],
    standards: ['UL 50', 'UL 67', 'UL 489', 'NFPA', 'NEMA'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/powerpal_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/powerpal_TS.pdf' },
      { label: 'Drawings', url: '/pdf/powerpal_TD.pdf' },
    ],
  },
  // === MONITORING ===
  {
    slug: 'gms',
    image: '/images/products/gms.png',
    name: 'Global Monitoring System',
    tagline: 'Remote Power System Monitoring',
    description: '24/7 remote monitoring and notification system for power protection equipment. Real-time visibility into system performance for proactive maintenance and emergency alerts.',
    category: 'monitoring',
    features: ['24/7 Monitoring', 'Real-Time Notifications', 'Remote Access', 'Proactive Maintenance Alerts', 'System Performance Tracking'],
    standards: [],
    docs: [
      { label: 'Data Sheet', url: '/pdf/gms_DS.pdf' },
    ],
  },
  {
    slug: 'bas',
    image: '/images/products/bas.png',
    name: 'Battery Advisor System',
    tagline: 'Advanced Battery Monitoring',
    description: 'State-of-the-art battery monitoring measuring voltage, impedance, temperature, and string current. Wireless or wired with touch screen display for comprehensive battery health tracking.',
    category: 'monitoring',
    features: ['Ohmic Value Testing', 'Wireless or Wired', 'Touch Screen Display', 'Battery Voltage Monitoring', 'String Current Monitoring', 'Temperature Sensing', 'Impedance Measurement'],
    standards: [],
    docs: [
      { label: 'Data Sheet', url: '/pdf/bms_DS.pdf' },
    ],
  },
  // === LOAD CONTROL ===
  {
    slug: 'lcr20',
    image: '/images/products/lcr20.png',
    name: 'LCR20',
    tagline: 'Automatic Load Control Relay',
    description: 'UL924 load control relay for emergency lighting with 0-10V dimmer override for full emergency illumination. Quick-connect IP65 rated test switch in aluminum housing.',
    category: 'load-control-relays',
    features: ['UL924 Listed', '0-10V Dimmer Override', 'IP65 Rated Connections', 'Quick-Connect Test Switch', 'Aluminum Case', '5-Year Warranty'],
    standards: ['UL 924', 'UL 1778', 'NFPA 101'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/LCR20_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/LCR20_TS.pdf' },
      { label: 'Manual', url: '/pdf/LCR20_TM.pdf' },
    ],
  },
  // === FREQUENCY CONVERTER ===
  {
    slug: 'frequency-converter',
    image: '/images/products/frequency-converter.png',
    name: 'Frequency Converter',
    tagline: '10kVA – 320kVA (50/60/400Hz)',
    description: 'Industrial frequency converter with true galvanic isolation and ±0.1Hz accuracy. Built for harsh environments with redundant power supply, modular plug-and-play design, and advanced DSP/IGBT technology.',
    category: 'frequency-converters',
    features: ['True Galvanic Isolation', '±0.1Hz Accuracy', 'Redundant Power Supply', 'Harsh Environment Construction', 'Modular Plug-and-Play', 'Intelligent Fan Control', 'DSP & IGBT Technology'],
    standards: ['UL 924', 'UL 1778', 'NFPA 101'],
    docs: [
      { label: 'Data Sheet', url: '/pdf/fc_DS.pdf' },
      { label: 'Tech Specs', url: '/pdf/fc_TS.pdf' },
      { label: 'Drawings', url: '/pdf/fc_TD.pdf' },
      { label: 'Manual', url: '/pdf/fc_TM.pdf' },
    ],
  },
];

// Category definitions
export const categories = [
  { slug: 'emergency-lighting',
    image: '/images/products/emergency-lighting.png', name: 'Emergency Lighting Inverters', tagline: 'UL924 Emergency Lighting Inverter Systems', description: 'Single and three phase emergency lighting inverters from 35W to 400kW. UL924 listed with 90-120 minute battery backup. Standard, seismic-certified, and harsh environment models.' },
  { slug: 'elevator-backup',
    image: '/images/products/elevator-backup.png', name: 'Elevator Backup', tagline: 'UL924 Elevator Emergency Backup Systems', description: 'Three phase elevator emergency backup systems for safe building evacuation during power outages. UL924 and UL1778 listed.' },
  { slug: 'fire-alarm-backup',
    image: '/images/products/fire-alarm-backup.png', name: 'Fire Alarm Backup', tagline: 'UL1481 Fire Alarm Backup Systems', description: 'UL1481 listed backup systems for fire alarm notification appliance circuits. Ensures continuous power for life safety compliance.' },
  { slug: 'ups-backup',
    image: '/images/products/ups-backup.png', name: 'UPS Backup', tagline: 'UL1778 Uninterruptible Power Supply', description: 'High-frequency UPS systems for critical loads. Generator compatible with built-in load distribution and modular assembly.' },
  { slug: 'medical-grade',
    image: '/images/products/medical-grade.png', name: 'Medical Grade', tagline: 'Hospital-Grade Power Protection', description: 'UL60601-1 certified medical-grade power conditioners and UPS systems. Sub-cycle voltage stabilization for critical care equipment.' },
  { slug: 'voltage-regulators',
    image: '/images/products/voltage-regulators.png', name: 'Voltage Regulators', tagline: 'Power Conditioning & Regulation', description: 'Voltage regulators and power conditioners from 3kVA to 2,000kVA. Including Power Reg and Constant Power series with ±3% regulation.' },
  { slug: 'isolation-transformers',
    image: '/images/products/isocare.png', name: 'Isolation Transformers', tagline: 'Clean Power · Noise & Harmonic Cancellation', description: 'Isolation transformers for noise-sensitive and harmonic-heavy loads. Common-mode noise attenuation up to -152 dB. Indoor and outdoor NEMA 12 rated.' },
  { slug: 'frequency-converters',
    image: '/images/products/frequency-converter.png', name: 'Frequency Converters', tagline: '50 / 60 / 400 Hz Conversion', description: 'Industrial frequency converters with true galvanic isolation and ±0.1Hz accuracy. 10 to 320 kVA. Built for defense, aerospace, and global OEM integration.' },
  { slug: 'power-distribution',
    image: '/images/products/power-distribution.png', name: 'Power Distribution', tagline: 'Power Distribution Units', description: 'Customizable power distribution solutions for permanent and temporary installations. Modular designs with monitoring capabilities.' },
  { slug: 'monitoring',
    image: '/images/products/monitoring.png', name: 'Monitoring & Software', tagline: 'System Monitoring Solutions', description: 'Global Monitoring System (GMS) for remote power system oversight and Battery Advisor System (BAS) for comprehensive battery health tracking.' },
  { slug: 'load-control-relays',
    image: '/images/products/load-control-relays.png', name: 'Load Control Relays', tagline: 'UL924 Load Control Relays', description: 'Automatic load control relays for emergency lighting dimmer override. UL924 listed with IP65 rated connections.' },
  { slug: 'custom-oem',
    image: '/images/products/custom-oem.png', name: 'Custom OEM', tagline: 'Custom Engineered Solutions', description: '48 years of custom power engineering. Frequency converters, voltage modification, global multi-input systems, and complete power solutions built to your spec.' },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug);
}
