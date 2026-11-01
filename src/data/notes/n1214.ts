import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-14',
  summary: 'India\'s land and sea borders: which force guards what, how technology and border villages fit in, the three-tier coastal system after 26/11, and the links between organised crime, drugs and terror.',
  minutes: 21,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'GS III names "security challenges and their management in border areas" and "linkages of organised crime with terrorism". India\'s borders run through deserts, high mountains, rivers and jungles, and they often split communities. The aim is not only to stop threats, but also to **allow legitimate trade and movement**, and to look after people who live near the border. So border management joins security, diplomacy and development.' },

    { t: 'h', text: 'Land borders' },
    { t: 'table', caption: 'Total land border: about **15,106.7 km**. Lengths as given by the Home Ministry; they rarely change. Fencing progress is not listed, as no recent official figure could be confirmed.', head: ['Neighbour', 'Length (km)', 'Guarding force', 'Main challenge'], rows: [
      ['**Bangladesh**', '4,096.7 (longest)', 'BSF', 'Migration, cattle and drug smuggling, riverine gaps'],
      ['**China**', '3,488', 'ITBP (and Army)', 'Undefined LAC; infrastructure race'],
      ['**Pakistan**', '3,323', 'BSF (Army on the LoC)', 'Infiltration, drones, narcotics'],
      ['**Nepal**', '1,751', 'SSB', 'Open border, smuggling, third-country misuse'],
      ['**Myanmar**', '1,643', 'Assam Rifles', 'Insurgents, drugs, refugees, tribal ties'],
      ['**Bhutan**', '699', 'SSB', 'Open border; relatively calm'],
      ['**Afghanistan**', '106', 'Part of the PoK area, not physically held', 'Claimed line'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026', text: 'A statement in the 2026 paper claimed that Rajasthan shares the longest international border among Indian states. Learn this: **West Bengal** has the longest international border. Rajasthan has the longest with Pakistan.' },
    { t: 'note', kind: 'trap', title: 'Border lines', text: '**Radcliffe Line:** India-Pakistan. **Durand Line:** Pakistan-Afghanistan, and not an Indian border in practice. **McMahon Line:** India-China in the east, rejected by China. **LoC:** J&K, not an international border. **LAC:** with China, not demarcated. **Assam Rifles** falls under the Home Ministry administratively, but the Army has operational control.' },
    { t: 'timeline', caption: 'How border policy developed.', items: [
      { when: '1999-2001', what: '**Kargil Review Committee** (K. Subrahmanyam), and the **Group of Ministers** report with a Task Force under **Madhav Godbole**. Suggests **"one border, one force"**.' },
      { when: '2004', what: 'Department of Border Management set up in the Home Ministry.' },
      { when: '2012', what: '**Land Ports Authority of India** begins, for Integrated Check Posts.' },
      { when: '2015', what: 'India-Bangladesh **Land Boundary Agreement** done through the **100th Amendment**: enclaves swapped.' },
      { when: '2018-19', what: '**CIBMS** pilots: smart fencing in Jammu; **BOLD-QIT** in Dhubri, Assam, for riverine stretches.' },
      { when: '2021', what: 'BSF jurisdiction set at a uniform **50 km** in Punjab, West Bengal and Assam. Punjab and West Bengal objected on federal grounds.' },
      { when: '2023', what: '**Vibrant Villages Programme-I** on the northern border.' },
      { when: '2024', what: 'Home Minister announces full Myanmar border fencing and an end to the Free Movement Regime.' },
      { when: '2025', what: '**Vibrant Villages Programme-II** for other land borders. **Immigration and Foreigners Act, 2025** consolidates the law.' },
    ] },
    { t: 'compare', caption: 'Vibrant Villages Programme: a shift from only guarding to building local presence.', columns: [
      { title: 'VVP-I (February 2023)', items: ['Northern border', 'Arunachal, Himachal, Sikkim, Uttarakhand, Ladakh', '2,967 villages in 46 blocks', 'Outlay Rs 4,800 crore'] },
      { title: 'VVP-II (April 2025)', items: ['All other land borders', 'Outlay Rs 6,839 crore', 'Up to 2028-29', 'Focus on roads, livelihoods and stopping out-migration'] },
    ] },
    { t: 'h3', text: 'Myanmar border debate' },
    { t: 'compare', caption: 'The Free Movement Regime let border residents cross a short distance (16 km) without a visa. In 2024 the Centre moved to restrict it and plans a fence along 1,643 km. Reports say a pass-based system with fixed entry points has been applied since December 2024.', columns: [
      { title: 'Government case', items: ['Insurgents move across and use camps in Myanmar', 'Drug trade and refugee inflow after the 2021 coup', 'Manipur violence context'] },
      { title: 'Concerns', items: ['Same tribes live on both sides (Naga, Chin-Kuki-Zo)', 'Mizoram and Nagaland have objected', 'Hard terrain and high cost', 'Hurts local trade and family ties'] },
    ] },
    { t: 'list', items: [
      '**Technology:** Comprehensive Integrated Border Management System (CIBMS): sensors, cameras, radars, drones and command centres. Weather and rivers still limit it.',
      '**Infrastructure:** Border Roads Organisation; **Sela Tunnel** (Arunachal, 2024). China\'s side is built up faster, which is why this matters.',
      '**Open borders:** Nepal and Bhutan: open by treaty and good relations. These are a security risk, but also a sign of closeness.',
    ] },

    { t: 'h', text: 'Coastal security' },
    { t: 'p', text: '**26 November 2008** changed everything: ten attackers reached Mumbai by sea. Since then the system has been rebuilt. India\'s coastline was also re-measured: **11,098.81 km** by a new method (reported 2024-25), against the old **7,516.6 km**. Both figures appear in exams, so read the question.' },
    { t: 'strata', caption: 'Three-tier coastal security. Layers overlap, and the zones are indicative.', layers: [
      { title: 'Indian Navy', sub: 'Overall responsibility for maritime security, including coastal and offshore, and the high seas' },
      { title: 'Indian Coast Guard', sub: 'Territorial waters and the EEZ; lead for coastal security in territorial waters. Set up under the Coast Guard Act, 1978' },
      { title: 'State marine police', sub: 'Close to shore, in shallow waters. Coastal Security Scheme gives boats and stations' },
    ] },
    { t: 'table', head: ['Measure', 'What it does'], rows: [
      ['**Coastal Security Scheme**', 'Began in 2005 (phases from 2005 and 2011). Coastal police stations, boats'],
      ['**NCSMCS**', 'National Committee for Strengthening Maritime and Coastal Security, under the **Cabinet Secretary**'],
      ['**NC3I network**', 'Links coastal radars with the Information Management and Analysis Centre at Gurugram'],
      ['**Sagar Prahari Bal**', 'Navy force created for protecting naval bases and coast after 26/11'],
      ['**Fisher ID and AIS**', 'ID cards and transponders on small boats'],
      ['**Exercises**', '**Sagar Kavach** (state level), **Sea Vigil** (national, from 2019)'],
      ['**IFC-IOR**', 'Information Fusion Centre for the Indian Ocean Region, Gurugram (2018), for regional sharing'],
      ['**Maritime Anti-Piracy Act, 2022**', 'Domestic law to prosecute sea piracy under UNCLOS'],
    ] },
    { t: 'note', kind: 'mains', title: 'Remaining coastal gaps', text: 'Marine police lack sea training, boats are often idle, and many small fishing boats are hard to track. Coordination across many agencies can blur responsibility. Proposals include a dedicated training academy (a National Academy of Coastal Policing has been started in Gujarat), and a single maritime command. Be careful about **who is lead**: there are 15 or more agencies at sea.' },

    { t: 'h', text: 'Organised crime' },
    { t: 'p', text: 'Organised crime is a continuing criminal activity by a group, for money or power, by using violence, threats or corruption. The **Vohra Committee (1993)** described the nexus of crime, politics and officials. The **UN Convention against Transnational Organized Crime** (Palermo, 2000), ratified by India in 2011, is the global framework.' },
    { t: 'table', caption: 'Law on organised crime.', head: ['Law', 'Point'], rows: [
      ['**BNS, Section 111**', 'Defines organised crime in the general criminal law for the first time, from 1 July 2024'],
      ['**BNS, Section 112**', 'Petty organised crime'],
      ['**MCOCA, 1999**', 'Maharashtra\'s law, a model for other states (Karnataka, Gujarat)'],
      ['**NDPS Act, 1985**', 'Narcotic drugs law; **Narcotics Control Bureau**, 1986. Preventive detention under PITNDPS, 1988'],
      ['**PMLA, 2002**', 'Goes after proceeds of crime (see the next note)'],
      ['**Arms Act, 1959**', 'Illegal firearms'],
      ['**ITPA, 1956 and BNS Section 143**', 'Human trafficking'],
    ] },
    { t: 'compare', caption: 'India lies between the two main illicit opium zones.', columns: [
      { title: 'Golden Crescent', items: ['Afghanistan, Iran, Pakistan', 'Western border and sea route: Punjab, Gujarat coast'] },
      { title: 'Golden Triangle', items: ['Myanmar, Laos, Thailand', 'Eastern route: Manipur, Mizoram'] },
    ] },
    { t: 'flow', caption: 'How crime and terror feed each other. PRAHAAR (2026) also names these links.', steps: [
      { title: 'Drugs and smuggling', sub: 'Produce quick cash' },
      { title: 'Hawala and fake currency', sub: 'Move money out of sight' },
      { title: 'Gangs', sub: 'Offer logistics, arms and safe houses' },
      { title: 'Terror and insurgency', sub: 'Pay for attacks, or levy "taxes"' },
      { title: 'Corruption', sub: 'Protects the chain' },
    ] },
    { t: 'list', items: [
      '**Drugs:** **NCORD** (2016) coordinates agencies, and **Nasha Mukt Bharat** (2020) works on demand. The sea route has seen major seizures, such as Mundra in 2021.',
      '**Punjab:** Drones from across the border carry drugs and arms. This has been linked to the border\'s drug-gang-terror chain.',
      '**Fake currency:** **FICN** is a known cross-border threat. **NIA** has a dedicated unit on terror funding and fake currency.',
      '**International:** **Bharatpol** (January 2025) by CBI links Indian police to Interpol. **MLATs** and extradition tie this together.',
      '**Newer threats:** Scam compounds in Myanmar and Cambodia and "cyber slavery" of trafficked Indians, as well as wildlife crime.',
    ] },
    { t: 'note', kind: 'trap', title: 'Common mix-ups', text: 'Golden **Crescent** is Afghanistan, Iran and Pakistan. Golden **Triangle** is Myanmar, Laos and Thailand. India is in neither, but it lies between them. **NCB** is under the Home Ministry, and Narcotics law is a **central** Act, but police are from the states. So joint action is needed.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Compare the challenges of each border, and match them to a response. Border policing in a federal system: BSF\'s 50 km. Is fencing the right answer on the Myanmar and Bangladesh borders? Coastal security after 26/11: what improved, what has not. Organised crime and terror: show the chain, use BNS Section 111, and add drugs in Punjab and North East. Cite the Kargil Review Committee and Vohra Committee.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'BSF: Pakistan, Bangladesh. ITBP: China. SSB: Nepal, Bhutan. Assam Rifles: Myanmar.',
      '15,106.7 km land border. Longest: Bangladesh. West Bengal: longest state.',
      'VVP-I 2023, VVP-II 2025.',
      'Coast: old 7,516.6 km; new 11,098.81 km. Three tiers: Navy, Coast Guard, marine police.',
      'BNS 111, 112. MCOCA 1999. NDPS 1985. Vohra 1993.',
    ] },
  ],
  sources: [
    { label: 'UPSC Civil Services Prelims 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'Drishti IAS, PRAHAAR summary (links with organised crime)', url: 'https://www.drishtiias.com/daily-updates/daily-news-analysis/national-counterterrorism-policy-and-strategy-prahaar' },
    { label: 'Border Lens, The India-Myanmar border and the future of free movement, seen as a search excerpt only, August 2025' },
    { label: 'For further reading: Home Ministry, Department of Border Management and annual report. Direct access was blocked, so lengths and VVP figures were not freshly checked', url: 'https://www.mha.gov.in/' },
  ],
  beyond: {
    refer: [
      { what: 'Department of Border Management pages and annual report', where: 'Home Ministry', why: 'Fencing progress and border lengths. This note has no fencing figures because they could not be confirmed.', url: 'https://www.mha.gov.in/' },
      { what: 'Political map of India', where: 'Survey of India', why: 'States on each border are commonly tested through maps.', url: 'https://surveyofindia.gov.in/' },
    ],
    current: [
      { issue: 'Myanmar border regime', link: 'Reports describe border passes and fixed entry points in place since December 2024, with the fence plan continuing. Confirm with the Home Ministry.', source: 'Border Lens, as a search excerpt' },
      { issue: 'PRAHAAR', link: 'Released February 2026. Lists crime-terror links and cross-border threats among its priorities.', source: 'Drishti IAS', url: 'https://www.drishtiias.com/daily-updates/daily-news-analysis/national-counterterrorism-policy-and-strategy-prahaar' },
    ],
  },
}
