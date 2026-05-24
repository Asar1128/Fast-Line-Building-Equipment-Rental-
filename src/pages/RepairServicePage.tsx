import { useState, useEffect } from 'react';
import { RootLayout } from '@/components/layout/RootLayout';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Link, useParams } from 'react-router-dom';
import { loadCategory } from '@/lib/machinery';
import type { MachineryCategory } from '@/lib/machinery';

interface RepairContent {
  seoIntro: string;
  seoBody: string;
  closingText: string;
}

const whyChooseReasons = [
  {
    title: 'Certified Technicians',
    text: 'Our repair team consists of factory-trained, certified technicians with years of hands-on experience servicing construction and industrial equipment across Dubai and the UAE. We diagnose issues accurately and fix them right the first time, ensuring your equipment meets manufacturer specifications and safety standards before it leaves our workshop.',
  },
  {
    title: 'Genuine Spare Parts',
    text: 'We use only OEM-approved and genuine spare parts for all repair work, sourced directly from authorised distributors in the UAE. Counterfeit or low-grade parts can cause repeated failures and safety hazards — we never compromise on component quality, which extends the service life of your equipment and maintains warranty validity.',
  },
  {
    title: 'Quick Turnaround',
    text: 'Downtime costs money. Our team is structured for same-day diagnostics and fast repair turnaround across Dubai, Al Quoz, and all industrial zones in the UAE. Most common repairs are completed within 24–48 hours. For urgent on-site jobs, our mobile service vans can reach your location within hours to minimise project delays.',
  },
];

const repairContent: Record<string, RepairContent> = {
  generators: {
    seoIntro:
      'When your generator fails on a construction site in Dubai, every hour of downtime translates to lost productivity. Fast Line provides expert generator repair and maintenance services across Dubai and the UAE, covering diesel generators, silent generators, and portable generator sets from 5.5 kVA to 1000 kVA. Our certified technicians handle everything from engine diagnostics and alternator repairs to fuel system servicing and control panel troubleshooting. Whether you need emergency generator repair on-site in Al Quoz, Jebel Ali, or DIP, or prefer to bring your unit to our workshop, we offer the fastest generator repair turnaround in the market — keeping your power supply uninterrupted and your project on schedule.',
    seoBody:
      'Common generator faults we repair include starting failures, voltage regulation issues, overheating, oil leaks, fuel contamination, and automatic transfer switch (ATS) malfunctions. We service all major generator brands including Honda, Perkins, Cummins, Atlas Copco, and SDMO. Our diagnostic process uses advanced testing equipment to pinpoint the root cause quickly, eliminating guesswork and unnecessary part replacements. Every repaired generator undergoes a full load test before being returned, ensuring it performs reliably under real-world conditions on your Dubai construction site. We also offer preventive generator maintenance contracts tailored to your fleet size and usage patterns, helping you avoid unexpected breakdowns during critical project phases across the UAE.',
    closingText:
      'Don\'t let a faulty generator hold up your construction timeline. Contact Fast Line today for professional generator repair in Dubai, generator maintenance, and emergency generator service across the UAE. Our team is available seven days a week to inspect, diagnose, and restore your generator to peak performance. Call us or send a WhatsApp inquiry to schedule a visit — we respond within the hour for emergency repair requests in Dubai and surrounding industrial areas.',
  },
  compaction: {
    seoIntro:
      'Compaction equipment such as vibratory rollers, plate compactors, and rammers endure extreme stress on construction sites. When your Bomag, Hamm, or Wacker Neuson compactor breaks down on a Dubai road or building project, you need fast, reliable compaction equipment repair. Fast Line offers specialist compactor repair services in Dubai and across the UAE — covering engine rebuilds, hydraulic system repairs, eccentric shaft replacement, and vibration mechanism servicing. Our workshop in Al Quoz is fully equipped to handle everything from minor adjustments to complete compaction equipment overhauls, getting your machines back on the ground with minimal downtime.',
    seoBody:
      'We repair all types of compaction equipment including single-drum rollers, tandem rollers, forward and reversible plate compactors, and trench rammers. Typical issues we resolve include loss of compaction force, hydraulic oil leaks, engine starting problems, worn base plates, faulty exciter units, and transmission failures. Our technicians carry genuine spare parts for all major compaction equipment brands, ensuring repairs that last. We also provide on-site compaction equipment repair in Dubai — our mobile service units travel to your project location saving you the hassle and cost of transporting heavy machinery to a workshop. Each repaired unit is tested to verify it delivers the specified compaction force before sign-off.',
    closingText:
      'Keep your compaction equipment running at full capacity with professional repair services from Fast Line. From vibratory roller repair in Dubai to plate compactor servicing across the UAE, we are your trusted partner for compaction equipment maintenance. Get in touch today via WhatsApp or phone for a free repair assessment — our technicians are ready to visit your site anywhere in Dubai for emergency compaction equipment repairs.',
  },
  'air-compressors': {
    seoIntro:
      'Air compressors are the backbone of pneumatic tool operation on construction and industrial sites. When your diesel or electric air compressor fails in Dubai, your entire tool chain grinds to a halt. Fast Line provides comprehensive air compressor repair and maintenance services across Dubai and the UAE — from portable diesel compressors to large industrial rotary screw units. Our certified compressor technicians diagnose and fix air-end failures, engine problems, electrical faults, pressure regulation issues, and oil contamination. Whether you operate an Atlas Copco, Ingersoll Rand, Kaeser, or Sullair compressor, we have the expertise and genuine parts to restore your compressed air supply fast.',
    seoBody:
      'We service all compressor types including reciprocating piston compressors, rotary screw compressors, and diesel-driven portable units. Common air compressor repairs we handle include seized air-ends, leaking seals and gaskets, faulty inlet valves, pressure switch failures, overheating engines, and compressor oil carryover. Our workshop in Al Quoz is fitted with test benches and diagnostic tools specifically calibrated for compressor performance verification. For construction sites across Dubai, we offer mobile air compressor repair — our service vans are equipped with the necessary tools, common spare parts, and testing equipment to perform most repairs directly at your location. We also stock a comprehensive range of compressor oils, filters, and separator elements for all major brands.',
    closingText:
      'Don\'t let a broken air compressor shut down your operation. Fast Line offers same-day air compressor repair diagnostics in Dubai and emergency compressor service across the UAE. Our air compressor repair team works seven days a week to get your compressed air system back online. Send a WhatsApp message or call us now to book a technician visit — we serve all industrial areas in Dubai including Al Quoz, DIP, Jebel Ali, and Dubai South.',
  },
  welders: {
    seoIntro:
      'Welding generators and diesel welders are critical for pipeline construction, fabrication, and structural steel work across the UAE. When your Miller, Lincoln, or Denyo welder stops producing a stable arc in the middle of a project, you need expert welder repair immediately. Fast Line specialises in diesel welder repair and welding machine maintenance in Dubai — covering engine diagnostics, alternator rewinding, rectifier replacement, control board repair, and output current calibration. Our technicians are trained on all major welding equipment brands and use only genuine components to ensure your repaired welder delivers the stable arc and duty cycle your job demands.',
    seoBody:
      'We repair engine-driven welders, standalone welding generators, inverter welders, and multi-process welding machines. Common welding equipment faults we address include no output current, unstable arc, engine not starting, overheating, low weld penetration, and auxiliary power failure. Our diagnostic process includes full load bank testing and oscilloscope analysis of the welding output waveform, ensuring the machine meets its rated specifications after repair. For field repairs, our mobile welding equipment service covers construction sites, pipeline projects, and fabrication yards across Dubai and the Northern Emirates. We also offer preventive welding machine maintenance programs that include regular inspection of cables, connectors, cooling systems, and engine components to prevent unexpected failures.',
    closingText:
      'When your welder is down, every hour costs you money in idle labour. Fast Line provides rapid welder repair in Dubai and across the UAE with a commitment to same-day diagnosis and fast turnaround. Whether you need diesel welder repair, welding generator servicing, or emergency welding equipment support on your project site, our team is ready to help. Contact us via WhatsApp or phone right now to schedule a repair — available seven days a week across all Dubai industrial zones.',
  },
  'light-towers': {
    seoIntro:
      'Light towers provide essential illumination for night-time construction, road works, and events across Dubai and the UAE. When your mobile light tower fails, site safety and productivity are compromised after dark. Fast Line offers professional light tower repair and maintenance services covering diesel generator sets, telescopic mast mechanisms, LED and metal halide floodlight assemblies, and automatic control systems. Our technicians service all leading light tower brands including Atlas Copco, Terex, Generac, and Powko — providing on-site repairs at your Dubai construction site or comprehensive servicing at our Al Quoz workshop.',
    seoBody:
      'Common light tower problems we resolve include generator engine failure, mast extension mechanism jams, floodlight burnout, timer and photocell control malfunctions, fuel system blockages, and trailer/towing assembly damage. We carry genuine spare parts for hydraulic mast cylinders, ballast units, alternators, and LED driver modules specific to each light tower model. Our mobile service teams are equipped with mast lifting tools and can perform light tower repairs directly at your site — whether it is in Jebel Ali, Dubai Industrial City, Al Quoz, or any other industrial area in the UAE. Each repaired light tower undergoes a full deployment cycle test including mast raise/lower, light activation, and generator load testing to confirm operational readiness.',
    closingText:
      'Don\'t work in the dark — get your light tower repaired quickly by Fast Line\'s expert team. We provide light tower repair in Dubai and across the UAE with fast response times and quality workmanship you can count on. From generator repair to mast mechanism overhaul, our technicians have the experience to fix it right. WhatsApp us now or give us a call to book a light tower inspection or emergency repair — we respond within the hour for urgent requests in Dubai.',
  },
  'scaffolding-towers': {
    seoIntro:
      'Mobile scaffolding towers are essential for safe elevated work in construction, maintenance, and painting projects across Dubai. Damaged frames, bent braces, seized castors, or cracked platform decks can create serious safety hazards for your crew. Fast Line provides comprehensive scaffolding tower repair and refurbishment services in Dubai and the UAE — covering structural inspection, aluminium and steel frame straightening, castor wheel replacement, platform plank repair, guardrail fixing, and complete tower recertification. Every scaffolding tower that passes through our Al Quoz workshop is inspected to BS EN 1004 and local safety standards before being returned to service.',
    seoBody:
      'We repair and refurbish all types of mobile access towers including aluminium alloy towers, steel scaffolding towers, fibreglass insulated towers, and low-level access platforms. Typical repairs we perform include replacing damaged frame members, fixing or replacing locking catches and spring-loaded pawls, castor brake repair and wheel replacement, welding cracked steel components, straightening bent outriggers and stabilisers, and replacing worn platform deck boards. For large scaffolding fleets, we offer batch repair and refurbishment programs at competitive rates with fast turnaround. Our technicians can also visit your site in Dubai to assess tower condition, perform minor on-site repairs, and advise on replacement needs for towers that are beyond economic repair.',
    closingText:
      'Safety starts with well-maintained access equipment. Fast Line provides professional scaffolding tower repair and refurbishment services in Dubai and the UAE — from individual tower units to full fleet overhauls. Ensure your mobile scaffolding towers are safe, stable, and compliant. Contact us via WhatsApp or phone to discuss your scaffolding tower repair requirements or to schedule a site inspection in Dubai, Al Quoz, or anywhere across the UAE.',
  },
  'pressure-washers': {
    seoIntro:
      'High-pressure washers work in harsh, wet environments that accelerate wear on pumps, seals, hoses, and motors. When your cold water or hot water pressure washer stops delivering the cleaning power you need on a Dubai construction site or industrial facility, Fast Line is here to help. We provide expert pressure washer repair in Dubai and the UAE — servicing electric and diesel pressure washers, hot water steam cleaners, and petrol-driven washer units from all major brands. Our technicians specialise in pump rebuilds, motor and engine repairs, unloader valve replacement, hose and lance repair, and burner system servicing for hot water models.',
    seoBody:
      'We diagnose and repair the full spectrum of pressure washer faults including loss of pressure, pulsing spray, water leaks, pump cavitation, thermal relief valve failure, motor burnout, engine starting issues, and burner ignition problems in hot water units. Our workshop in Al Quoz is stocked with genuine pump rebuild kits, high-pressure hoses, trigger guns, spray nozzles, and seals for brands including Karcher, DeWalt, Annovi Reverberi, Interpump, and Cat Pumps. We also offer on-site pressure washer repair in Dubai — our mobile technicians can diagnose and fix most common faults at your location without the need to transport equipment. Each repaired pressure washer is tested under load to confirm it delivers the rated pressure and flow rate before being returned.',
    closingText:
      'Don\'t let a faulty pressure washer slow down your cleaning operations. Fast Line delivers reliable pressure washer repair in Dubai and across the UAE with quick turnaround times and quality parts. Whether you need high-pressure pump repair, diesel burner servicing, or a complete pressure washer overhaul, our team is ready. Call us or send a WhatsApp message today to book your pressure washer repair — we serve all Dubai industrial areas including Al Quoz, DIP, and Jebel Ali.',
  },
  cleaners: {
    seoIntro:
      'Floor cleaning machines — scrubber dryers, sweepers, and burnishers — are complex electromechanical systems that require specialist attention when they fail. Fast Line provides professional floor cleaner repair and maintenance services in Dubai and across the UAE, covering ride-on scrubber dryers, walk-behind floor scrubbers, industrial sweepers, and high-speed burnishers. Our technicians are experienced with all major floor cleaning equipment brands and carry diagnostic tools and genuine spare parts to resolve brush motor failures, vacuum system faults, battery and charger issues, squeegee assembly problems, and solution delivery system blockages.',
    seoBody:
      'Common floor cleaner faults we resolve include brush deck motor failure, poor water pick-up, battery not holding charge, squeegee leaving streaks, solution pump malfunction, control board errors, and drive motor issues. We repair machines from Cleanstar, Tennant, Nilfisk, Karcher, Fimap, and other leading manufacturers. Our Al Quoz workshop is set up with testing areas where we can run machines through full wet and dry cleaning cycles to verify repair quality. For hotels, malls, hospitals, and commercial facilities in Dubai that rely on floor cleaners for daily operations, we offer on-site floor cleaner repair with mobile service vans equipped to handle most common repairs directly at your location, minimising downtime.',
    closingText:
      'A broken floor cleaner means unsanitary floors and operational disruption. Fast Line offers fast floor cleaner repair and floor scrubber servicing across Dubai and the UAE — keeping your cleaning fleet in top condition. From battery replacement to complete brush deck rebuilds, we handle it all. WhatsApp us or call today to schedule a floor cleaner repair visit — our technicians cover all areas of Dubai including business districts, industrial zones, and hospitality locations.',
  },
  grinders: {
    seoIntro:
      'Concrete floor grinders are heavy-duty machines that operate in extremely abrasive conditions, causing wear on diamond tooling, drive systems, bearings, dust extraction, and motor assemblies. Fast Line provides specialist floor grinder repair in Dubai and the UAE — servicing planetary grinders, single-disc grinders, and remote-controlled grinding machines. Our technicians diagnose and repair motor failures, gearbox damage, belt and pulley wear, electrical control faults, dust shroud replacement, and diamond tool holder reconditioning. We work on Trelawny, Husqvarna, HTC, Blastrac, Scanmaskin, and other professional grinder brands.',
    seoBody:
      'Typical floor grinder repair jobs we handle include grinding disc motor burnout, planetary drive belt failure, dust extraction loss, water feed system blockage, variable speed controller malfunction, and excessive vibration from worn bearings or unbalanced discs. Our workshop in Al Quoz has the equipment to test grinder motors under load, measure vibration levels, and verify dust extraction efficiency after repair. We stock a comprehensive inventory of grinder spare parts including carbon brushes, drive belts, seals, bearings, switchgear, and dust extraction hoses. For large grinding projects in Dubai where equipment failure causes costly delays, we offer emergency on-site grinder repair — our technicians arrive at your site with common spare parts and diagnostic tools to get your grinder back into operation as quickly as possible.',
    closingText:
      'Don\'t let grinder downtime delay your surface preparation or polishing project. Fast Line delivers expert floor grinder repair in Dubai and floor grinding machine maintenance across the UAE. Our technicians know these machines inside and out and can diagnose and repair most faults rapidly. Send a WhatsApp message or call us now to book a grinder repair — we provide site visits to all Dubai locations including Al Quoz, DIP, Dubai South, and Jebel Ali.',
  },
  threaders: {
    seoIntro:
      'Pipe threading machines are precision tools that must maintain exact thread tolerances for leak-proof pipe connections in plumbing, HVAC, and industrial piping systems. Fast Line provides professional pipe threader repair and maintenance services in Dubai and the UAE — covering Ridgid, Rothenberger, Virax, and other leading pipe threading machine brands. Our technicians handle everything from threading die head servicing and carriage feed mechanism repair to motor rewinding, oil pump replacement, and stand/base assembly welding. Whether your portable threader or shop-mounted threading machine needs routine servicing or major repair, we have the expertise to restore it to factory threading accuracy.',
    seoBody:
      'We resolve common pipe threader issues including worn or chipped threading dies producing poor thread quality, carriage jam on the feed screw, oil system clogging leading to thread galling, motor failure, chuck jaw wear causing pipe slippage, and electrical control malfunctions. Our Al Quoz workshop is equipped with thread gauges and calibration equipment to verify NPT, BSPT, and metric thread standards after every repair. We stock genuine die heads, die segments, oil pumps, carriage drive components, and motor parts for rapid repair turnaround. For mechanical and plumbing contractors across Dubai who depend on pipe threaders for daily operations, our mobile repair service can visit your workshop or construction site to perform on-the-spot diagnostics and many common repairs.',
    closingText:
      'Keep your pipe threading machines producing clean, accurate threads with professional repair services from Fast Line. We offer pipe threader repair in Dubai, threading machine servicing, and die head replacement across the UAE with fast turnaround. Contact us on WhatsApp or call us today to arrange a pipe threader inspection or emergency repair — we cover all areas of Dubai from Al Quoz to Jebel Ali and beyond.',
  },
  'air-coolers': {
    seoIntro:
      'Portable evaporative air coolers are vital for managing heat on Dubai construction sites, in warehouses, workshops, and at outdoor events — especially during the UAE summer months. When your air cooler stops delivering effective cooling due to pump failure, motor burnout, or clogged cooling pads, your work environment becomes unsafe. Fast Line provides expert air cooler repair and maintenance services across Dubai and the UAE, specialising in Portacool, MasterCool, and other leading evaporative cooler brands. Our technicians repair water circulation pump failures, fan motor faults, float valve malfunctions, electrical control issues, and degraded cooling media replacement.',
    seoBody:
      'Typical evaporative air cooler repairs we handle include water pump replacement, oscillating fan motor repair, cooling pad replacement, float valve and water level sensor calibration, control board diagnostics, and leak repair on water tanks and distribution trays. We carry genuine spare parts for all major evaporative cooler brands, ensuring repairs that restore cooling efficiency to factory specifications. Our service includes a full system clean and descale during repair, removing mineral buildup that reduces cooling performance in Dubai\'s hard water conditions. For construction companies and warehouse operators across the UAE that rely on multiple air coolers, we offer fleet maintenance programs with scheduled inspections and preventive servicing to keep all units running at peak cooling capacity throughout the hot season.',
    closingText:
      'Beat the Dubai heat with properly maintained air coolers. Fast Line offers same-day air cooler repair and evaporative cooler maintenance across Dubai and the UAE — from single unit repairs to full fleet servicing programs. Contact us now via WhatsApp or phone to schedule an air cooler inspection or emergency repair. We serve all Dubai industrial areas, construction sites, and commercial facilities seven days a week.',
  },
  'exhaust-fans': {
    seoIntro:
      'Industrial exhaust fans and ventilation blowers are critical for removing fumes, dust, heat, and contaminated air from confined spaces such as welding bays, underground works, tanks, and tunnels. A failed exhaust fan in a Dubai construction or industrial site creates immediate health and safety risks. Fast Line provides specialist exhaust fan repair and industrial ventilation equipment servicing across Dubai and the UAE — covering motor rewinding, impeller balancing, bearing replacement, duct damage repair, and electrical control troubleshooting for brands including Xtractor, Airflow, and other leading industrial fan manufacturers.',
    seoBody:
      'Common industrial exhaust fan faults we diagnose and repair include motor burnout from overload or contamination, impeller imbalance causing excessive vibration and noise, worn bearings, damaged fan blades, duct connection leaks, speed controller failure, and thermal overload trip. Our workshop in Al Quoz is equipped with dynamic balancing machines for impellers up to 1.5 metres diameter, motor test benches, and vibration analysis equipment for precise fault diagnosis. We stock a wide range of industrial fan spare parts including motors, impellers, bearings, drive belts, pulleys, and electrical control components. For urgent situations where a ventilation failure creates unsafe working conditions on a Dubai construction site, we provide emergency on-site exhaust fan repair — our mobile team can deploy within hours to restore critical ventilation.',
    closingText:
      'Maintain a safe working environment with properly functioning ventilation equipment. Fast Line provides professional exhaust fan repair in Dubai and industrial fan servicing across the UAE with rapid response times and quality workmanship. Get in touch via WhatsApp or call us today to schedule an exhaust fan inspection or emergency ventilation repair — our team covers all Dubai industrial and construction zones.',
  },
  'industrial-fans': {
    seoIntro:
      'Heavy-duty industrial fans — drum fans, pedestal fans, and high-velocity floor fans — provide essential cooling and air circulation in Dubai\'s construction sites, warehouses, factories, and workshops. When these workhorses fail due to motor burnout, blade damage, or electrical faults, working conditions deteriorate rapidly in the UAE heat. Fast Line provides expert industrial fan repair and maintenance services across Dubai, servicing Trotec, Big Ass Fans, Air King, and other industrial fan brands. Our technicians handle motor repair and rewinding, blade replacement and balancing, oscillation mechanism repair, speed controller troubleshooting, and complete electrical safety inspections.',
    seoBody:
      'We resolve the full range of industrial fan problems including seized or burnt-out motors, damaged or unbalanced blades causing vibration, failed oscillation gearboxes, broken fan guards and mounting brackets, faulty capacitor starters, variable speed controller failures, and damaged power cables. Our Al Quoz workshop has motor test benches and dynamic balancing equipment to verify motor performance and blade balance after repair. We carry genuine spare parts for motors, capacitors, speed controllers, oscillation mechanisms, and fan blades for all major industrial fan brands. For facilities and construction companies in Dubai with multiple industrial fans, we offer preventive maintenance contracts that include regular cleaning, lubrication, electrical safety checks, and performance testing — reducing the risk of unexpected fan failures during peak summer months.',
    closingText:
      'Keep your workspace cool and productive with properly maintained industrial fans. Fast Line offers reliable industrial fan repair and heavy-duty fan servicing across Dubai and the UAE — from individual fan repairs to comprehensive fleet maintenance programs. Contact us via WhatsApp or phone to book an industrial fan inspection or emergency repair today. We serve all industrial zones in Dubai including Al Quoz, DIP, Jebel Ali, and Dubai South.',
  },
  'vacuum-cleaners': {
    seoIntro:
      'Industrial wet and dry vacuum cleaners are essential for construction site cleanup, dust extraction, and debris removal across Dubai. When your Karcher, Nilfisk, or Makita industrial vacuum loses suction, overheats, or stops working entirely, site cleanliness and safety suffer. Fast Line provides professional vacuum cleaner repair and maintenance services in Dubai and the UAE — covering motor burnout repair, suction turbine replacement, filter system servicing, electrical fault diagnosis, and float valve repair for wet/dry models. Our technicians are experienced with all major industrial vacuum brands and use only genuine spare parts for repairs.',
    seoBody:
      'Common industrial vacuum cleaner faults we resolve include loss of suction power, motor overheating and thermal cut-out, damaged or clogged HEPA and cartridge filters, cracked hoses, faulty power switches, broken tank latches, caster wheel failure, and wet/dry float valve malfunction. Our Al Quoz workshop carries a comprehensive inventory of vacuum cleaner spare parts including motors, turbines, filters, hoses, power cords, switches, and float assemblies. After every repair, we conduct a full performance test measuring suction pressure, airflow rate, and filtration efficiency. For construction companies and facility management providers in Dubai that rely on multiple vacuum cleaners, we offer on-site repair services and fleet maintenance programs to keep your entire cleaning equipment inventory operational.',
    closingText:
      'Don\'t let a broken vacuum cleaner compromise your site cleanliness and dust control. Fast Line offers fast, reliable industrial vacuum cleaner repair in Dubai and across the UAE — with same-day diagnosis and quick turnaround on most repairs. WhatsApp us or call today to schedule a vacuum cleaner inspection or emergency on-site repair for your Dubai construction site or facility.',
  },
  'power-cables': {
    seoIntro:
      'Industrial power cables and extension leads carry heavy electrical loads across Dubai construction sites, powering everything from hand tools to heavy machinery. Damaged cables with exposed conductors, failed connectors, or internal breaks create serious electrical shock and fire hazards. Fast Line provides professional power cable repair and industrial electrical cable maintenance services in Dubai and the UAE — covering cable jointing, industrial plug and socket replacement, insulation testing, and complete cable assembly refurbishment for single-phase and three-phase systems from 16A to 125A.',
    seoBody:
      'We repair all types of industrial power cables including H07RN-F rubber flexible cables, armoured cables, and heavy-duty extension leads with CEE-form connectors. Common power cable repairs we handle include cable jointing for cut or crushed cables, replacement of damaged industrial plugs and sockets (16A, 32A, 63A, 125A), rewiring of distribution boxes, and complete cable assembly rebuilds. Our workshop in Al Quoz is equipped with industrial crimping tools, heat-shrink equipment, and insulation resistance testers — every repaired cable assembly undergoes a full electrical safety test including insulation resistance measurement and continuity check before being returned for use. We also offer on-site power cable inspection and repair services across Dubai, with our mobile team equipped to perform emergency cable repairs and temporary power distribution setup at construction sites.',
    closingText:
      'Never compromise on electrical safety. Fast Line provides professional power cable repair and industrial extension lead refurbishment services across Dubai and the UAE — using quality components and rigorous testing standards. Contact us via WhatsApp or phone to arrange a cable inspection, order replacement cable assemblies, or request emergency power cable repair at your Dubai construction site.',
  },
  'marble-cutters': {
    seoIntro:
      'Precision marble and tile cutters are essential for flooring, tiling, and stone work on Dubai construction and renovation projects. When your Makita, Rubi, or Husqvarna marble cutter produces chipped cuts, has a seized motor, or develops water system issues, your tiling work quality and productivity suffer. Fast Line provides specialist marble cutter repair and tile cutting machine maintenance services across Dubai and the UAE. Our technicians service handheld tile cutters, table-mounted wet saws, and bridge saws — handling motor repairs, blade arbor bearing replacement, water pump servicing, and guide rail calibration.',
    seoBody:
      'We diagnose and repair common marble and tile cutter faults including motor burnout, arbor bearing failure causing blade wobble and chipped cuts, water pump failure leading to dry cutting and blade overheating, guide rail misalignment, switchgear failure, and cracked or damaged cutting tables. Our Al Quoz workshop stocks genuine spare parts for Makita, DeWalt, Rubi, Husqvarna, and other professional tile cutter brands — including armatures, field coils, bearings, water pumps, switches, and guide rails. After repair, each tile cutter is tested on actual marble and porcelain tiles to verify cutting accuracy, straightness, and chip-free edge quality. For tiling contractors across Dubai facing urgent machine breakdowns, our mobile repair service can come to your site with common spare parts and diagnostic equipment.',
    closingText:
      'Keep your tile and marble cutting operations running smoothly with professional repair services from Fast Line. We offer reliable marble cutter repair in Dubai and tile saw servicing across the UAE with fast turnaround and OEM-quality parts. Contact us now via WhatsApp or phone to schedule a marble cutter inspection or emergency on-site repair — we serve all areas of Dubai seven days a week.',
  },
  'concrete-mixers': {
    seoIntro:
      'Site concrete mixers are workhorses that endure heavy loads, abrasive materials, and constant use on Dubai construction sites. When your Belle, Altrad, or Winget concrete mixer develops drum drive issues, motor failure, or structural damage, your concrete production stops. Fast Line provides comprehensive concrete mixer repair and maintenance services in Dubai and across the UAE — covering drum drive system repair, motor and engine servicing, gearbox rebuilds, frame welding, wheel and axle repair, and electrical control troubleshooting on both diesel and electric concrete mixers.',
    seoBody:
      'Typical concrete mixer repairs we handle include drum drive belt or chain replacement, electric motor burnout or capacitor failure, diesel engine servicing and repair, gearbox oil leaks and bearing wear, drum paddle wear, frame cracks from fatigue, and wheel/axle damage from site movement. Our Al Quoz workshop is equipped for heavy machinery repair with overhead lifting, welding stations, and engine diagnostic equipment. We stock drum drive components, motors, gearbox parts, and wheels for all major concrete mixer brands. For construction companies in Dubai and the UAE, we offer on-site concrete mixer repair — our mobile workshop can handle many common repairs at your project location, avoiding the need to transport heavy mixers to our facility. Each repaired mixer is test-run with a batch of material to confirm smooth drum rotation under load.',
    closingText:
      'Keep your concrete production on schedule with professional mixer repair services from Fast Line. We provide expert concrete mixer repair in Dubai, cement mixer servicing, and on-site mixer maintenance across the UAE. Call us or send a WhatsApp message today to schedule a concrete mixer inspection or request emergency repair — our team serves all Dubai construction sites and industrial areas.',
  },
  'gas-cylinders': {
    seoIntro:
      'Industrial gas cylinders for LPG, oxygen, argon, and acetylene must be maintained to strict safety standards for welding, cutting, and heating operations across Dubai. Compromised cylinder valves, damaged regulators, or leaking connections create serious safety risks on construction sites and fabrication workshops. Fast Line provides gas cylinder valve repair, regulator servicing, and gas system safety inspection services in Dubai and the UAE. Our trained technicians handle cylinder valve replacement and reconditioning, pressure regulator repair and calibration, leak detection and sealing, and complete gas delivery system safety audits.',
    seoBody:
      'We service industrial gas cylinders and their associated equipment including LPG cylinders, oxygen cylinders, acetylene cylinders, argon cylinders, nitrogen cylinders, and mixed gas cylinders. Common repair and maintenance services we provide include cylinder valve replacement for leaking or seized valves, pressure regulator overhaul including diaphragm replacement and pressure gauge calibration, flashback arrestor testing and replacement, hose assembly inspection and replacement, and manifold system leak testing. All cylinder valve work is performed to local safety regulations and industry standards. Our Al Quoz facility is equipped with pressure testing benches, leak detection equipment, and calibrated pressure gauges for accurate regulator servicing. For fabrication workshops and construction sites in Dubai, we offer on-site gas system safety inspections and minor repairs.',
    closingText:
      'Safety-critical gas equipment demands professional maintenance. Fast Line provides gas cylinder valve repair, regulator servicing, and gas system safety inspections across Dubai and the UAE. Don\'t compromise on safety — contact us via WhatsApp or phone to arrange a gas cylinder inspection, request valve repair, or schedule a site safety audit for your gas equipment. We serve all Dubai industrial areas including Al Quoz, Jebel Ali, and DIP.',
  },
  'bar-benders': {
    seoIntro:
      'Electric rebar benders are essential for reinforced concrete preparation on Dubai construction projects. When your bar bending machine loses bending force, develops electrical faults, or suffers mechanical wear, your steel fixing schedule is disrupted and labour stands idle. Fast Line provides specialist bar bender repair and rebar bending machine maintenance services in Dubai and across the UAE — covering motor repair, hydraulic system servicing, bending die replacement, control circuit troubleshooting, and frame repair. Our technicians service Toyo, Omag, Progress, and other professional bar bender brands.',
    seoBody:
      'We repair common bar bender faults including motor burnout or single-phasing on three-phase machines, hydraulic oil leaks and loss of bending force, worn or damaged bending rollers and pins, faulty foot pedal and limit switch controls, seized rotating tables, and structural frame cracks. Our workshop in Al Quoz carries a stock of commonly needed bar bender spare parts including hydraulic seals, bending pins and rollers of various diameters, contactors, overload relays, oil filters, and control switches. Each repaired bar bender undergoes a full operational test bending rebar at its rated maximum capacity to verify correct function and safety. For construction steel contractors in Dubai, we offer on-site bar bender repair — our mobile team can diagnose and fix many faults at your project location, eliminating the downtime and transport costs of sending machines to our workshop.',
    closingText:
      'Keep your steel reinforcement work on track with professional bar bender repair from Fast Line. We provide expert rebar bender repair in Dubai and bar bending machine servicing across the UAE with fast turnaround and genuine spare parts. Contact us on WhatsApp or call us today to schedule a bar bender inspection or emergency on-site repair at your Dubai construction project.',
  },
  'steel-cutters': {
    seoIntro:
      'Rebar cutting machines are high-force tools that take significant mechanical stress cutting steel bars day after day on Dubai construction sites. When your steel cutter jams, loses cutting force, or develops hydraulic or electrical failure, your reinforcement work stops. Fast Line provides professional steel cutter repair and rebar cutting machine maintenance services in Dubai and across the UAE — covering hydraulic system repair, blade replacement and sharpening, motor servicing, control circuit diagnostics, and frame straightening and welding. We service Toyo, Sima, Progress, and other leading rebar cutter brands.',
    seoBody:
      'Typical steel cutter repairs we perform include hydraulic pump failure and loss of cutting pressure, worn or chipped cutting blades, return spring failure preventing blade retraction, electrical motor burnout, control valve sticking, hydraulic fluid contamination, and frame or guard damage from site handling. Our Al Quoz workshop maintains an inventory of rebar cutter spare parts including cutting blades for various bar diameters, hydraulic seals and O-ring kits, pump components, return springs, contactors, and overload relays. Every repaired steel cutter is tested by cutting rebar at its maximum rated diameter to confirm clean, square cuts and full blade retraction. For steel fixing contractors in Dubai experiencing urgent machine breakdowns, we provide on-site steel cutter repair with our mobile service unit carrying common spare parts and diagnostic tools.',
    closingText:
      'Don\'t let a broken rebar cutter delay your reinforcement work. Fast Line delivers reliable steel cutter repair in Dubai and rebar cutting machine servicing across the UAE — with same-day diagnosis and fast turnaround on most repairs. WhatsApp us or call today to schedule a steel cutter inspection or request emergency on-site repair. We cover all Dubai construction sites and industrial zones.',
  },
  'cable-crimpers': {
    seoIntro:
      'Battery-powered hydraulic cable crimping tools must deliver precise, reliable compression force for electrical installations in Dubai\'s construction and industrial projects. When your Klauke, Cembre, or Greenlee cable crimper loses crimping pressure, develops hydraulic leaks, or suffers battery/motor failure, electrical termination quality is compromised. Fast Line provides specialist cable crimper repair and hydraulic crimping tool servicing in Dubai and across the UAE — covering hydraulic pump repair, crimping die replacement, battery and charger diagnostics, motor servicing, and complete tool calibration.',
    seoBody:
      'We diagnose and repair common cable crimper faults including hydraulic fluid leaks and loss of crimping force, damaged or worn crimping dies producing poor connections, battery failure or rapid discharge, motor burnout, micro-switch malfunction, and control board errors. Our workshop in Al Quoz is equipped with crimp force testers and die inspection gauges to verify that each repaired crimping tool delivers the specified compression force for copper and aluminium conductors. We stock genuine spare parts for all major cable crimper brands including hydraulic seals, pump pistons, crimping dies, battery packs, chargers, motors, and circuit boards. For electrical contractors in Dubai requiring urgent tool repairs, our mobile service can come to your site with common spare parts and diagnostic equipment.',
    closingText:
      'Ensure quality electrical terminations every time with properly maintained crimping tools from Fast Line. We provide expert cable crimper repair in Dubai and hydraulic crimping tool servicing across the UAE — keeping your electrical installation tools in peak working condition. Contact us on WhatsApp or call today to book a cable crimper inspection or organise emergency on-site repair for your Dubai project.',
  },
};

export default function RepairServicePage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [category, setCategory] = useState<MachineryCategory | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categorySlug) return;
    setLoading(true);
    loadCategory(categorySlug).then((data) => {
      setCategory(data);
      setLoading(false);
    });
  }, [categorySlug]);

  if (!categorySlug || (!loading && !category)) {
    return (
      <RootLayout
        meta={{
          title: 'Service Not Found',
          description: 'The requested repair service could not be found.',
          canonicalPath: `/repair-services/${categorySlug}`,
          ogImage: '/images/og-default.jpg',
        }}
      >
        <div className="bg-white border-b border-border-light">
          <Container className="py-16 text-center">
            <Heading level={1} className="text-navy-900">Service Not Found</Heading>
            <p className="mt-4 text-navy-600">
              The repair service you are looking for does not exist.
            </p>
            <Link to="/" className="mt-6 inline-block text-brand-600 hover:underline font-medium">
              ← Back to Home
            </Link>
          </Container>
        </div>
      </RootLayout>
    );
  }

  if (loading || !category) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-slate-50">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#ffb600] border-t-transparent"></div>
      </div>
    );
  }

  const content = repairContent[categorySlug];

  const heroImage =
    category.slug === 'generators' ? '/images/generator-hero-bg.png' :
    category.slug === 'air-compressors' ? '/images/air-compressor-hero-bg.png' :
    category.slug === 'welders' ? '/images/welder-hero-bg.png' :
    category.slug === 'light-towers' ? '/images/light-towers-hero-bg.png' :
    category.slug === 'scaffolding-towers' ? '/images/scaffolding-towers-hero-bg.png' :
    category.slug === 'pressure-washers' ? '/images/pressure-washers-hero-bg.png' :
    category.slug === 'cleaners' ? '/images/cleaners-hero-bg.png' :
    '/images/hero-bg.webp';

  const metaTitle = `${category.name} Repair Services in Dubai & UAE | Fast Line`;
  const metaDescription = `Expert ${category.name.toLowerCase()} repair, diagnostics, and maintenance in Dubai & UAE. Certified technicians, genuine spare parts, and quick turnaround. Call +971-56-571-4999.`;
  const whatsappMessage = `I want to inquire about ${category.name} repair`;
  const whatsappUrl = `https://wa.me/9710565714999?text=${encodeURIComponent(whatsappMessage)}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${category.name} Repair Services in Dubai & UAE`,
    description: metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Fast Line Building Equipment Rental L.L.C',
      telephone: '+971-56-571-4999',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Adeem Building, Dubai 44 Street, Al Quoz Third',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'Country', name: 'AE' },
      ],
    },
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'Country', name: 'AE' },
    ],
    serviceType: `${category.name} Repair`,
    offers: {
      '@type': 'Offer',
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'Country', name: 'AE' },
      ],
    },
  };

  return (
    <RootLayout
      meta={{
        title: metaTitle,
        description: metaDescription,
        canonicalPath: `/repair-services/${categorySlug}`,
        ogImage: heroImage,
      }}
      jsonLd={jsonLd}
    >
      {/* Banner Image */}
      <div className="relative w-full min-h-[40vh] md:min-h-[50vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-transparent z-10" />
          <img
            src={heroImage}
            alt={`${category.name} Repair Services in Dubai & UAE`}
            className="h-full w-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-20 w-full px-6 sm:px-8 lg:px-12 mt-8 md:mt-0">
          <div className="max-w-[1400px] mx-auto text-center lg:text-left">
            <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400 backdrop-blur-sm mb-4">
              EXPERT REPAIR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight">
              {category.name} Repair
            </h1>
            <p className="mt-6 text-lg text-navy-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Professional maintenance, diagnostic, and repair solutions for all types of {category.name.toLowerCase()}. Ensure your equipment runs at peak performance with minimal downtime.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-border-light">
        <Container className="py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-navy-500">
              <li>
                <Link to="/" className="hover:text-navy-900 hover:underline">Home</Link>
              </li>
              <li><span aria-hidden="true">/</span></li>
              <li>
                <Link to="/repair-services" className="hover:text-navy-900 hover:underline">Repair Services</Link>
              </li>
              <li><span aria-hidden="true">/</span></li>
              <li className="font-medium text-navy-900">{category.name} Repair</li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Main Content Section */}
      <Section className="py-16 md:py-24 bg-background-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Content Column */}
            <div className="lg:col-span-8">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-border-light">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-6 tracking-tight">Comprehensive {category.name} Maintenance & Repair</h2>

                {content ? (
                  <>
                    <p className="text-lg text-navy-700 leading-relaxed mb-6">
                      {content.seoIntro}
                    </p>

                    <p className="text-navy-600 leading-relaxed mb-8">
                      {content.seoBody}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg text-navy-700 leading-relaxed mb-6">
                      Professional repair and maintenance services for {category.name.toLowerCase()} are available now at Fast Line. Our certified technicians provide reliable diagnostics and quality repairs using genuine parts, ensuring your {category.name.toLowerCase()} operate at peak performance. We serve construction sites, industrial facilities, and commercial operations across Dubai and the UAE.
                    </p>
                    <p className="text-navy-600 leading-relaxed mb-8">
                      Contact our team to discuss your {category.name.toLowerCase()} repair requirements. We offer on-site service calls throughout Dubai and workshop-based repairs at our Al Quoz facility. Same-day diagnostic appointments are available, and we aim for the fastest repair turnaround times in the market to minimise your equipment downtime.
                    </p>
                  </>
                )}

                <div className="bg-navy-50 rounded-xl p-6 md:p-8 mb-8 border border-border-light">
                  <h3 className="text-2xl font-bold text-navy-900 mb-6">Why Choose Our Repair Services?</h3>
                  <ul className="space-y-5">
                    {whyChooseReasons.map((reason) => (
                      <li key={reason.title} className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center shrink-0 mr-4 mt-0.5">
                          <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <div>
                          <strong className="block text-navy-900 text-lg mb-1">{reason.title}</strong>
                          <span className="text-navy-600 leading-relaxed">{reason.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-navy-600 leading-relaxed">
                  {content
                    ? content.closingText
                    : `For expert ${category.name.toLowerCase()} repair and maintenance services in Dubai and across the UAE, trust the team at Fast Line. We combine technical expertise, genuine spare parts, and fast response times to keep your equipment working reliably. Contact us today to schedule a repair or discuss your maintenance requirements.`}
                </p>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4">
              <div className="bg-navy-900 rounded-2xl p-8 text-center sticky top-28 shadow-xl border border-navy-800">
                <div className="w-20 h-20 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-20"></div>
                  <svg className="w-10 h-10 text-brand-500 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Need Your {category.name.replace(/s$/, '')} Repaired?</h3>
                <p className="text-navy-200 mb-8 leading-relaxed text-sm md:text-base">
                  Our service team is ready to inspect and fix your equipment. Send us an inquiry and we'll get back to you immediately.
                </p>
                <Link
                  to="/contact"
                  className="block w-full rounded-xl bg-brand-500 px-6 py-4 text-base font-bold text-navy-900 hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/20"
                >
                  Contact Us
                </Link>
                <div className="mt-4 pt-6 border-t border-navy-800">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-base font-bold text-white hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Contact Us on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </RootLayout>
  );
}
