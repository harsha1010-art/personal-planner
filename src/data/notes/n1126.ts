import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-26',
  summary: 'India and its neighbours, country by country: the treaties, disputes and projects UPSC asks about, the regional groupings, and where each relationship stands as of November 2026.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'India shares land borders with seven countries and sea borders with Sri Lanka and the Maldives, among others. A hostile or unstable neighbour costs India security, trade and diplomatic energy, so **a stable neighbourhood is a precondition for India\'s larger ambitions**. GS II lists "India and its neighbourhood relations" as a separate syllabus item.' },
    { t: 'p', text: 'The core difficulty is size. India is far larger than every neighbour except China, so smaller states often fear domination, and domestic politics there can turn anti-India. China now offers them an alternative source of money and infrastructure. In 2024-26 governments changed sharply in Bangladesh, Nepal and Myanmar, which tested India\'s policy of working with whoever holds power.' },
    { t: 'timeline', caption: 'How the doctrine evolved', items: [
      { when: '1996-97', what: '**Gujral Doctrine:** India gives more to smaller neighbours without asking for strict reciprocity. The 1996 Ganga Treaty is the classic example.' },
      { when: '2014', what: '**Neighbourhood First:** SAARC leaders are invited to the swearing-in of the new government. **Act East** replaces Look East in the same year.' },
      { when: '2015', what: '**SAGAR** (Security and Growth for All in the Region) sets out the Indian Ocean policy.' },
      { when: '2025', what: '**MAHASAGAR** (Mutual and Holistic Advancement for Security and Growth Across Regions) is announced in Mauritius in March, widening SAGAR to the Global South.' },
    ] },
    { t: 'table', caption: 'Land borders, as commonly cited from Home Ministry data (km). Longest to shortest.', head: ['Country', 'Length', 'Indian states and UTs to remember'], rows: [
      ['Bangladesh', '4,096.7', 'West Bengal (longest), Assam, Meghalaya, Tripura, Mizoram'],
      ['China', '3,488', 'Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh'],
      ['Pakistan', '3,323', 'Gujarat, Rajasthan, Punjab, Jammu and Kashmir, Ladakh'],
      ['Nepal', '1,751', 'Uttarakhand, Uttar Pradesh, Bihar, West Bengal, Sikkim'],
      ['Myanmar', '1,643', 'Arunachal Pradesh, Nagaland, Manipur, Mizoram'],
      ['Bhutan', '699', 'Sikkim, West Bengal, Assam, Arunachal Pradesh'],
      ['Afghanistan', '106', 'Runs along Pakistan-occupied Jammu and Kashmir, which India claims'],
    ] },

    { t: 'h', text: 'Pakistan' },
    { t: 'timeline', items: [
      { when: '1947-49, 1965, 1971, 1999', what: 'Wars, including Kargil. The **Simla Agreement (1972)** made the Line of Control the frame and commits both sides to bilateral settlement.' },
      { when: '1960', what: '**Indus Waters Treaty**, brokered by the World Bank. Eastern rivers (Ravi, Beas, Sutlej) go to India. Western rivers (Indus, Jhelum, Chenab) go to Pakistan, with limited Indian use.' },
      { when: '2016, 2019', what: 'Uri and the surgical strikes; Pulwama and Balakot. SAARC\'s Islamabad summit collapsed in 2016. Article 370 changes in August 2019 led Pakistan to downgrade ties.' },
      { when: 'April-May 2025', what: '**Pahalgam attack** (22 April). India holds the Indus Waters Treaty **in abeyance** the next day. **Operation Sindoor** begins on 7 May. Military action stops under an understanding on 10 May.' },
      { when: '2026', what: 'A Court of Arbitration ruled on pondage in May, and has found the treaty still in force. India calls the court illegally constituted and its awards null and void. Pakistan raised the treaty at the SCO summit in September.' },
    ] },
    { t: 'note', kind: 'trap', title: 'Abeyance is not abrogation', text: 'India has not formally ended the treaty; it has said the treaty stays in abeyance until Pakistan credibly gives up cross-border terrorism. The treaty has no clause for one side to suspend it, which is why this is legally contested. Both sides\' positions belong in a balanced answer.' },

    { t: 'h', text: 'China' },
    { t: 'p', text: 'China is both a neighbour and a major power. This note covers the border. The wider strategic rivalry is in the next note on major powers.' },
    { t: 'table', head: ['Sector', 'Area', 'Dispute'], rows: [
      ['Western', 'Ladakh, with Aksai Chin', 'China holds Aksai Chin. India also objects to the Shaksgam Valley ceded by Pakistan in 1963.'],
      ['Middle', 'Himachal, Uttarakhand', 'Smallest and least contentious. Lipulekh and Shipki La trade routes run here.'],
      ['Eastern', 'Sikkim, Arunachal Pradesh', 'China rejects the **McMahon Line** (1914) and claims Arunachal as "South Tibet".'],
    ] },
    { t: 'flow', caption: 'From agreements to crisis to a slow thaw', steps: [
      { title: '1993-2013', sub: 'Peace and tranquillity deals, 2005 political parameters, 2013 border defence pact' },
      { title: 'Doklam, 2017', sub: 'Standoff on a Bhutan-China trijunction' },
      { title: 'Galwan, 2020', sub: 'First fatal clash in decades; apps banned, investment rules tightened' },
      { title: 'October 2024', sub: 'Patrolling arrangement for Depsang and Demchok; Modi-Xi at Kazan' },
      { title: '2025', sub: 'Kailash yatra and direct flights resume; Modi at Tianjin' },
      { title: 'September 2026', sub: 'Xi in New Delhi for BRICS, his first India visit in about seven years' },
    ] },
    { t: 'p', text: 'The boundary itself remains unresolved as of November 2026. Other irritants are the **trade deficit**, Chinese export curbs on rare earths and fertiliser, a planned mega-dam on the Yarlung Tsangpo (the Brahmaputra upstream), and Chinese support to Pakistan.' },

    { t: 'h', text: 'Bangladesh' },
    { t: 'list', items: [
      '**1971:** India helped create Bangladesh. **Land Boundary Agreement, 2015**, implemented through the **100th Constitutional Amendment**, exchanged enclaves.',
      '**Ganga Water Treaty:** signed 12 December 1996 for 30 years, covering Farakka flows. It **expires on 12 December 2026**. The **Teesta** deal remains unsigned, largely because of West Bengal\'s objections.',
      '**August 2024:** Sheikh Hasina fell and moved to India. Ties cooled sharply under the interim government led by Muhammad Yunus.',
      '**February 2026:** elections brought the BNP to power, with **Tarique Rahman** as Prime Minister. The BNP has said ties depend on renewing the Ganga treaty.',
      '**Open issues as of late 2026:** Hasina\'s extradition, visas, minorities, border killings, and a planned Tarique Rahman visit that had not been firmly dated in the latest reports I found (August 2026).',
    ] },

    { t: 'h', text: 'Nepal, Bhutan, Sri Lanka and the Maldives' },
    { t: 'compare', columns: [
      { title: 'Nepal', items: ['**1950 Treaty** of Peace and Friendship: open border. Nepal wants it revised', '**Kalapani-Lipulekh-Limpiyadhura:** Nepal put them on its map by constitutional amendment in 2020', 'Rivers: Kosi (1954), Gandak (1959), **Mahakali Treaty (1996)**, Pancheshwar still pending', 'Sept 2025 Gen Z protests ousted the Oli government', '**5 March 2026 election:** RSP landslide; **Balendra Shah** became PM', 'May 2026: Nepal protested the Kailash yatra using Lipulekh'] },
      { title: 'Bhutan', items: ['**1949 treaty, revised 2007**, which removed guidance on foreign policy', 'Hydropower is the centre: Chukha, Tala, Mangdechhu', '**Punatsangchhu-II** (1,020 MW) inaugurated in November 2025', 'Doklam (2017) links Bhutan-China talks to Indian security', '**Gelephu Mindfulness City:** a new special zone near Assam, with rail links planned'] },
      { title: 'Sri Lanka', items: ['**Katchatheevu** ceded under 1974 and 1976 agreements. A live Tamil Nadu issue', '**1987 Accord:** 13th Amendment and the IPKF', '2022 crisis: India gave about $4 billion in support', 'April 2025: Modi in Colombo; first **defence MoU**', '**Palk Bay** fishermen disputes persist', 'Chinese research ships and Hambantota are recurring worries', 'Nov 2025: India\'s aid after Cyclone Ditwah'] },
      { title: 'Maldives', items: ['**Operation Cactus (1988):** India foiled a coup', '**Muizzu** won in 2023 on an "India Out" campaign; Indian troops were replaced in 2024', 'Reset: rupee line of credit worth ₹4,850 crore, 40% lower annual debt repayments and FTA talks during Modi\'s **July 2025** visit', '**Greater Malé Connectivity Project** is India-funded', 'Key sea lanes run close by'] },
    ] },

    { t: 'h', text: 'Myanmar and Afghanistan' },
    { t: 'table', head: ['', 'Myanmar', 'Afghanistan'], rows: [
      ['Why it matters', 'Land bridge to ASEAN; insurgents along the Northeast border', 'Terror risk; access to Central Asia; Pakistan factor'],
      ['Indian projects', '**Kaladan Multi-Modal Project** (Sittwe port), **India-Myanmar-Thailand Highway**', 'Zaranj-Delaram road, Salma Dam, Parliament building; **Chabahar** port in Iran as the route'],
      ['Recent politics', 'Coup 2021. A military-run election followed. **Min Aung Hlaing** elected President on 3 April 2026', 'Taliban took Kabul in August 2021'],
      ['India\'s stance', 'Engages the regime. He visited India 30 May-3 June 2026. Critics, including the exiled National Unity Government, object', 'Technical mission upgraded to an **embassy in October 2025**, but **no formal recognition**. Russia alone has recognised the Taliban (reported as of early 2026)'],
      ['Border issue', 'Plan to fence the border and end the **Free Movement Regime** (announced 2024), which is opposed in Mizoram and Nagaland', 'Afghan-Pakistan clashes add a strategic dimension'],
    ] },

    { t: 'h', text: 'Regional groupings' },
    { t: 'compare', caption: 'As of November 2026', columns: [
      { title: 'SAARC', items: ['Founded **8 December 1985, Dhaka**', '**8 members:** Afghanistan joined in 2007', 'Secretariat: **Kathmandu**', 'Last summit: Kathmandu, **2014**', 'Stalled since the 2016 Islamabad summit was cancelled after Uri', 'SAFTA took effect in 2006, and intra-regional trade remains small'] },
      { title: 'BIMSTEC', items: ['**Bangkok Declaration, 1997**', '**7 members:** Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka, Thailand', 'Secretariat: **Dhaka**', 'Charter in force 2024', '**6th summit, Bangkok, April 2025**', 'Bangladesh chairs. Its next summit was only a possibility for 2027 as of July 2026', 'India\'s preferred route around Pakistan'] },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2025 and 2026 on BIMSTEC', text: 'Prelims 2025 tested BIMSTEC\'s membership and origin, including a statement placing its start in a "Dhaka Declaration, 1999". That is wrong, as it was the **Bangkok Declaration, 1997**. Prelims 2026 asked for BIMSTEC centres to be matched with host locations. Know the founding facts, and check the location list on the BIMSTEC site.' },
    { t: 'note', kind: 'trap', title: 'Common confusions', text: 'The BIMSTEC **secretariat** is in Dhaka, but the declaration was signed in **Bangkok**. The SAARC secretariat is in Kathmandu, but it was founded in Dhaka. Chabahar is in **Iran**, while Gwadar is in Pakistan. Kaladan runs through **Myanmar**, and not Bangladesh.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '(1) Is Neighbourhood First working, given the changes in Dhaka, Kathmandu and Male? Show gains (connectivity, power trade, crisis aid such as Sri Lanka in 2022) and limits (slow projects, perceptions of interference, China). (2) Water as diplomacy: Indus abeyance against Ganga renewal. India is upper riparian to Pakistan and Bangladesh, but lower riparian to China, so its arguments must stay consistent. (3) Should India engage military and Taliban regimes? Weigh interests against democratic values. (4) Why has BIMSTEC not replaced SAARC? (5) Border states as stakeholders: West Bengal on Teesta, Tamil Nadu on fishermen and Mizoram on the Free Movement Regime, which links to federalism.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Indus 1960; Ganga 1996, expiring 12 December 2026; Mahakali 1996.',
      'Land Boundary Agreement 2015: 100th Amendment.',
      'SAARC: 1985, Dhaka founding, Kathmandu secretariat, 8 members.',
      'BIMSTEC: 1997, Bangkok founding, Dhaka secretariat, 7 members.',
      'Longest land border: Bangladesh. Shortest: Afghanistan.',
      'SAGAR 2015; MAHASAGAR 2025.',
    ] },
  ],
  sources: [
    { label: 'MEA, India-Maldives Bilateral Relations brief', url: 'https://www.mea.gov.in/Portal/ForeignRelation/Bilateral.pdf' },
    { label: 'Akashvani News: India rejects Court of Arbitration supplemental award', url: 'https://www.newsonair.gov.in/india-rejects-supplemental-award-given-by-illegally-constituted-court-of-arbitration-under-indus-waters-treaty' },
    { label: 'ASIL: Court of Arbitration finds the Indus Waters Treaty remains in force', url: 'https://asil.org/ilib/court-of-arbitration-finds-that-the-indus-water-treaty-remains-in-force/' },
    { label: 'Akashvani News: PM Modi state visit to Maldives, July 2025', url: 'https://newsonair.gov.in/pm-modi-concludes-successful-state-visit-to-maldives-terms-it-extremely-productive/' },
    { label: 'Prime Minister of India site: Dissanayake meets PM, 20 February 2026', url: 'https://www.narendramodi.in/president-of-sri-lanka-anura-kumara-dissanayake-meets-prime-minister-narendra-modi-20th-february-twenty-twenty-six' },
    { label: 'The Wire: Bangladesh PM visit and Rashtrapati Bhavan communique, August 2026', url: 'https://thewire.in/diplomacy/with-rashtrapati-bhavan-communique-withdrawn-bangladesh-pm-tarique-rahmans-visit-to-india-still-uncertain' },
    { label: 'Outlook: Ganga Water Treaty explained', url: 'https://www.outlookindia.com/international/ganga-water-treaty-explained-why-india-and-bangladesh-are-discussing-its-renewal' },
    { label: 'Kathmandu Post: Nepal protests over Lipulekh, May 2026', url: 'https://kathmandupost.com/national/2026/05/05/nepal-keeps-protesting-over-lipulekh-india-and-china-keep-ignoring-it' },
    { label: 'Jakarta Post: Nepal election landslide, March 2026', url: 'https://www.thejakartapost.com/world/2026/03/13/nepal-ex-rappers-party-wins-election-in-landslide-after-gen-z-protests' },
    { label: 'The Statesman: PM Modi holds talks with Myanmar President', url: 'https://www.thestatesman.com/world/pm-modi-holds-talks-with-myanmar-president-u-min-aung-hlaing-discusses-trade-border-management-1503600666.html' },
    { label: 'Dawn: India restores embassy in Afghanistan, October 2025', url: 'https://www.dawn.com/news/1950392' },
    { label: 'Times of Oman: Bangladesh might host BIMSTEC summit next year', url: 'https://timesofoman.com/article/174681-bangladesh-might-decide-to-host-bimstec-summit-next-year' },
    { label: 'UPSC Civil Services Prelims 2025 and 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'A political map of India\'s borders', where: 'Survey of India', why: 'Border states, passes and disputed areas are best learned on a map.', url: 'https://surveyofindia.gov.in/' },
      { what: 'Country briefs on India\'s bilateral relations', where: 'Ministry of External Affairs', why: 'Official up-to-date summary of each relationship, including projects and credit lines.', url: 'https://www.mea.gov.in/foreign-relations.htm' },
    ],
    current: [
      { issue: 'Ganga Water Treaty expiry', link: 'The 1996 treaty ends on 12 December 2026. Renewal talks were under way, but no new deal had been reported in the sources I found (to August 2026). Check the outcome before the exam.', source: 'Outlook', url: 'https://www.outlookindia.com/international/ganga-water-treaty-explained-why-india-and-bangladesh-are-discussing-its-renewal' },
      { issue: 'Indus Waters Treaty arbitration', link: 'India rejected Court of Arbitration awards in 2026, and keeps the treaty in abeyance.', source: 'Akashvani News', url: 'https://www.newsonair.gov.in/india-rejects-supplemental-award-given-by-illegally-constituted-court-of-arbitration-under-indus-waters-treaty' },
      { issue: 'Lipulekh dispute', link: 'In May 2026 Nepal protested the use of Lipulekh for the Kailash Mansarovar Yatra.', source: 'Kathmandu Post', url: 'https://kathmandupost.com/national/2026/05/05/nepal-keeps-protesting-over-lipulekh-india-and-china-keep-ignoring-it' },
      { issue: 'Myanmar engagement', link: 'President Min Aung Hlaing met PM Modi in New Delhi on 1 June 2026, for talks on trade and border management.', source: 'The Statesman', url: 'https://www.thestatesman.com/world/pm-modi-holds-talks-with-myanmar-president-u-min-aung-hlaing-discusses-trade-border-management-1503600666.html' },
    ],
  },
}
