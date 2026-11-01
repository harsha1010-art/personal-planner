import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-02-04',
  summary: 'Orbits, launch vehicles, satellite families, NavIC, ISRO missions and the private space sector, with status as of early November 2026.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'India\'s space programme began in the 1960s for practical needs: communication, weather and remote sensing. **Vikram Sarabhai** led the early work, and **ISRO** was formed in 1969. The programme now spans planetary missions, navigation, and human spaceflight, and is opening up to private firms.' },
    { t: 'p', text: 'UPSC asks about the basics of launch vehicles and orbits, and about the news: Prelims 2025 asked about Axiom-4, SpaDeX and Gaganyaan, and Prelims 2026 about IN-SPACe and private firms. Learn the science first, and then the current status.' },

    { t: 'h', text: 'Orbits' },
    { t: 'table', caption: 'Height decides speed and use. Figures are approximate.', head: ['Orbit', 'Height', 'Feature', 'Use'], rows: [
      ['Low Earth (LEO)', 'Up to about 2,000 km', 'Fast; lower launch cost', 'ISS, Gaganyaan, Starlink-type networks, imaging'],
      ['Sun-synchronous (SSO)', 'About 500-800 km, polar', 'Crosses a place at the same local time', 'Earth observation; PSLV\'s classic job'],
      ['Medium Earth (MEO)', 'About 20,000 km', 'Long visibility', 'GPS, Galileo, GLONASS'],
      ['Geostationary (GEO)', 'About 35,786 km, above the equator', 'Period of one day; appears fixed', 'INSAT and GSAT communication, weather'],
      ['Geosynchronous (GSO)', 'Same height, but inclined', 'Period of one day; traces a figure-of-eight', 'Part of NavIC'],
      ['Transfer (GTO)', 'Elliptical', 'Satellite then raises itself to its final orbit', 'GSLV and LVM3 drop-off point'],
      ['Lagrange point L1', 'About 1.5 million km towards the Sun', 'Balance of gravity; constant view of the Sun', 'Aditya-L1'],
    ] },
    { t: 'note', kind: 'trap', title: 'Geostationary and geosynchronous', text: 'All geostationary satellites are geosynchronous, but not the reverse. Only a satellite above the equator, moving in Earth\'s direction, looks fixed from the ground. A claim that PSLV satellites look fixed in the sky is false, as Prelims 2018 tested. They are mostly in low orbits.' },

    { t: 'h', text: 'Launch vehicles' },
    { t: 'table', head: ['Vehicle', 'Stages', 'Job', 'Note'], rows: [
      ['PSLV', '4: solid, liquid, solid, liquid', 'Polar and sun-synchronous orbits; also Chandrayaan-1 and Mars Orbiter', 'Long the workhorse. Failures in May 2025 and January 2026 both arose in the third stage'],
      ['GSLV (Mk II)', '3, with an indigenous cryogenic upper stage', 'GTO; about 2.5 tonnes class', 'NISAR, EOS-05, NVS-03'],
      ['LVM3 (formerly GSLV Mk III)', '3: two solid boosters S200, liquid L110, cryogenic C25', 'Heaviest Indian rocket; about 4 tonnes to GTO', 'Chandrayaan-3, CMS-03; **HLVM3** is the human-rated version'],
      ['SSLV', '3 solid, plus a small liquid trim module', 'Small satellites on demand', 'Developmental flights ended 2024; Kulasekarapattinam spaceport is planned for it'],
      ['NGLV (planned)', 'Reusable design', 'Heavier payload at lower cost', 'Approved September 2024'],
    ] },
    { t: 'compare', caption: 'Why the cryogenic stage matters. Cryogenic fuel gives the most thrust per kilogram, but is hard to handle.', columns: [
      { title: 'Solid', items: ['Simple; stores well', 'Cannot easily be shut off', 'Boosters and missiles'] },
      { title: 'Liquid', items: ['UH25, N2O4 in Vikas engine', 'Can be controlled and restarted', 'Middle stages'] },
      { title: 'Cryogenic', items: ['Liquid hydrogen (-253 C) and liquid oxygen (-183 C)', 'Highest efficiency', 'Upper stages for GTO; India denied technology in the 1990s, then built its own'] },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2018', text: 'UPSC tested three claims: that PSLVs launch Earth-resource satellites while GSLVs mainly launch communication ones (true as a general rule); that PSLV satellites look fixed (false); and that GSLV Mk III is a four-stage rocket mixing solid and liquid stages (false: it has three stages, including two strap-on solid boosters and a cryogenic upper stage).' },

    { t: 'h', text: 'Satellite families and NavIC' },
    { t: 'list', items: [
      '**Communication and weather:** INSAT, GSAT and now CMS. **CMS-03** (November 2025) was launched by LVM3-M5.',
      '**Earth observation:** Resourcesat, Cartosat, RISAT and, under the new naming, the **EOS** series.',
      '**EOS-05** (GSLV-F17, 4 September 2026): India\'s first imaging satellite from geosynchronous orbit, 2,367 kg. It replaces the capability lost when GSLV-F10/EOS-03 failed in 2021.',
      '**NISAR** (GSLV-F16, 30 July 2025): NASA-ISRO radar imaging satellite for tracking land, ice and disasters.',
      '**Science:** AstroSat (astronomy, 2015), XPoSat (X-ray polarisation, January 2024), Aditya-L1 (Sun).',
    ] },
    { t: 'table', caption: 'NavIC is India\'s regional navigation system, formerly IRNSS.', head: ['Feature', 'NavIC'], rows: [
      ['Constellation design', '3 satellites in geostationary orbit, 4 in inclined geosynchronous orbit'],
      ['Coverage', 'India and about 1,500 km beyond its borders; regional, not global'],
      ['Services', 'Standard Positioning (civil), Restricted Service (authorised users)'],
      ['New generation', '**NVS series** adds an L1 signal alongside L5 and S, and carries an **indigenous atomic clock**'],
      ['Recent flights', 'NVS-01 (2023). NVS-02 (January 2025) could not reach its intended orbit. **NVS-03** placed in intended orbit by GSLV-F18 (October 2026, per ISRO)'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2018 and 2023', text: 'Prelims 2018 asked whether IRNSS has three geostationary and four geosynchronous satellites (true), whether it covers 5,500 sq km beyond India (false) and whether it would be global by 2019 (false). Prelims 2023 asked which country has its own navigation system, with **Japan** (QZSS) as the right pick among Australia, Canada and Israel. Others to know: GPS (USA), GLONASS (Russia), Galileo (EU), BeiDou (China).' },

    { t: 'h', text: 'Missions' },
    { t: 'timeline', caption: 'Dates are launch dates unless noted. Recent items are as listed on ISRO\'s launch page in November 2026.', items: [
      { when: '1975', what: '**Aryabhata**, first Indian satellite, launched by the Soviet Union.' },
      { when: '1980', what: '**SLV-3** puts Rohini into orbit: India\'s first home-grown launch.' },
      { when: '2008', what: '**Chandrayaan-1:** orbiter whose instruments found evidence of water molecules on the Moon.' },
      { when: '2013-14', what: '**Mars Orbiter Mission** reached Mars orbit on its first attempt in September 2014.' },
      { when: '2019', what: '**Chandrayaan-2:** orbiter works; lander crashed.' },
      { when: '2023', what: '**Chandrayaan-3** soft landing near the lunar south pole on **23 August**, now National Space Day. **Aditya-L1** launched in September, reaching L1 in January 2024.' },
      { when: 'Dec 2024-Jan 2025', what: '**SpaDeX** achieved India\'s first docking in space, on 16 January 2025.' },
      { when: 'June-July 2025', what: '**Axiom-4:** Shubhanshu Shukla became the first Indian on the International Space Station.' },
      { when: 'May 2025', what: 'PSLV-C61/EOS-09 fails.' },
      { when: 'Jan 2026', what: 'PSLV-C62/EOS-N1 fails after a disturbance near the end of the third stage.' },
      { when: 'Sep-Oct 2026', what: 'GSLV-F17/EOS-05 and GSLV-F18/NVS-03 succeed.' },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2016 and 2025', text: 'Prelims 2016 tested Mangalyaan: it is also called the Mars Orbiter Mission (true), and it made India the second country after the USA to orbit Mars (false, because others got there first). A third statement concerned success on the first attempt. Prelims 2025 asked how many of Axiom-4, SpaDeX and Gaganyaan support microgravity research.' },
    { t: 'flow', caption: 'The road ahead, as stated by the government. Dates have slipped before.', steps: [
      { title: 'G1, uncrewed', sub: 'With half-humanoid Vyommitra on HLVM3. ISRO\'s chief said in October 2026 it would fly in about two months' },
      { title: 'Crewed Gaganyaan', sub: 'After further uncrewed flights; target stated as 2027 or later' },
      { title: 'Chandrayaan-4', sub: 'Lunar sample return; approved 2024' },
      { title: 'Bharatiya Antariksh Station', sub: 'Target 2035' },
      { title: 'Indian on the Moon', sub: 'Target 2040' },
    ] },
    { t: 'p', text: 'The **Venus Orbiter Mission** and the **third launch pad at Sriharikota** have also been approved. **LIGO-India** at Hingoli, Maharashtra, is a separate gravitational wave observatory project. Prelims 2019 connected the merger of black holes with **gravitational waves**, and Prelims 2020 asked about the planned **Evolved LISA** space experiment.' },

    { t: 'h', text: 'Governance and private space' },
    { t: 'table', head: ['Body or policy', 'Role'], rows: [
      ['Department of Space', 'Under the Prime Minister; ISRO reports to it'],
      ['NSIL', 'Commercial arm under the Department of Space (2019)'],
      ['IN-SPACe', 'Autonomous single-window body that promotes and authorises private space activity (2020)'],
      ['Indian Space Policy 2023', 'Sets roles of ISRO, NSIL, IN-SPACe and private players'],
      ['Skyroot Aerospace', 'Vikram-S, first private Indian rocket to reach space, November 2022'],
      ['Agnikul Cosmos', 'Agnibaan SOrTeD flight, May 2024, using a 3D-printed engine'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026', text: 'UPSC tested private entities in space: IN-SPACe as an autonomous facilitator, Agnikul\'s flight with a 3D-printed engine, and whether Skyroot has developed liquid fuel for GSLV (false). The same paper asked about India\'s Deep Ocean Mission, whose Samudrayaan project and Matsya-6000 submersible belong under the Ministry of Earth Sciences, not the shipping ministry.' },
    { t: 'note', kind: 'trap', title: 'Treaties', text: 'The **Outer Space Treaty (1967)** bars nuclear weapons in orbit and national claims over the Moon. The **Liability Convention** came in 1972 and the **Registration Convention** in 1975. India joined the US-led **Artemis Accords** in June 2023. These are not the same as the Artemis programme, so joining them does not mean Indian astronauts are on the Artemis missions.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '**Benefits:** weather forecasting, disaster warning, fisheries and agriculture advice, and navigation. **Debate:** is space spending justified in a developing economy? Supporters show direct returns and strategic autonomy; critics ask about opportunity costs and now about reliability after PSLV failures. **Privatisation:** faster growth against regulatory and liability gaps. **Security:** anti-satellite test (Mission Shakti, March 2019), space debris.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'PSLV: four stages, solid-liquid alternating. LVM3: three stages with S200, L110, C25.',
      'GEO is above the equator at about 35,786 km.',
      'NavIC: 3 GEO + 4 GSO design; coverage about 1,500 km beyond India.',
      'EOS-05: first imaging satellite from GSO. NVS-03: indigenous atomic clock.',
      'Aditya-L1: L1 point, Sun. Chandrayaan-3: 23 August 2023.',
      'G1 had not flown as of early November 2026.',
    ] },
  ],
  sources: [
    { label: 'ISRO, launch missions list', url: 'https://www.isro.gov.in/LaunchMissions.html' },
    { label: 'ISRO, GSLV-F18/NVS-03 mission page', url: 'https://www.isro.gov.in/Mission_GSLVF18.html' },
    { label: 'ISRO, GSLV-F17/EOS-05 mission page', url: 'https://www.isro.gov.in/Mission_GSLVF17.html' },
    { label: 'Outlook, ISRO\'s PSLV-C62 mission encounters anomaly during third stage (January 2026)', url: 'https://www.outlookindia.com/national/isros-pslv-c62eos-n1mission-encounters-anomaly-during-third-stage' },
    { label: 'Outlook, GSLV-F17 launch and EOS-05 (September 2026)', url: 'https://outlookindia.com/national/successfully-and-precisely-injected-isro-chairman-hails-gslv-f17-launch-eos-05-reaches-orbit' },
    { label: 'UNI, Gaganyaan test flight in two months, says ISRO chief (24 October 2026)', url: 'https://www.uniindia.com/south-india/space-gaganyaan-test-flight-isro-chief/224116' },
    { label: 'UPSC Civil Services Prelims 2016, 2018, 2019, 2020, 2023, 2025, 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'ISRO launch missions list', where: 'ISRO', why: 'Latest launches change quickly. Check again in April-May 2027.', url: 'https://www.isro.gov.in/LaunchMissions.html' },
    ],
    current: [
      { issue: 'NavIC rebuild', link: 'NVS-03 reached its intended orbit on GSLV-F18 in October 2026, with a new L1 signal and indigenous clock.', source: 'ISRO', url: 'https://www.isro.gov.in/Mission_GSLVF18.html' },
      { issue: 'EOS-05', link: 'India\'s first imaging satellite from geosynchronous orbit (September 2026).', source: 'ISRO', url: 'https://www.isro.gov.in/Mission_GSLVF17.html' },
      { issue: 'Gaganyaan G1', link: 'In October 2026, ISRO\'s chief said the first uncrewed flight was about two months away. Earlier targets have slipped, so check status before the exam.', source: 'UNI', url: 'https://www.uniindia.com/south-india/space-gaganyaan-test-flight-isro-chief/224116' },
      { issue: 'PSLV reliability', link: 'Two straight third-stage-linked failures in May 2025 and January 2026. A root cause was under study in reports I saw.', source: 'Outlook', url: 'https://www.outlookindia.com/national/isros-pslv-c62eos-n1mission-encounters-anomaly-during-third-stage' },
    ],
  },
}
