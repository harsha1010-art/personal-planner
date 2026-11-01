import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-09',
  summary: 'Who owns the land, who pays for inputs, how farmers borrow and insure, and what technology can change: land reforms, subsidies, credit, PMFBY, digital farming and GM crops.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Four questions shape a farmer\'s income: **Who controls the land? What does it cost to farm? Can the farmer borrow? What if the crop fails?** Land reform answered the first after 1947. Subsidies, credit and insurance address the next three, and technology is now cutting across all of them. GS III names land reforms and farm subsidies directly.' },
    { t: 'note', kind: 'exam', title: 'Basic numbers', text: 'As per the Agriculture Census 2015-16, the average holding was **1.08 hectares**, and small and marginal farmers were about **86%** of holdings. Most policy issues start from this tiny holding size. Check whether later census data has been published before quoting it as the latest.' },

    { t: 'h', text: 'Land reforms' },
    { t: 'table', caption: 'What independent India inherited. Revenue settlements decided who paid tax and who had rights.', head: ['System', 'Introduced by', 'Who paid revenue', 'Where'], rows: [
      ['**Zamindari** (Permanent Settlement)', 'Cornwallis, 1793', 'Zamindar, with revenue fixed forever', 'Bengal, Bihar, Odisha'],
      ['**Ryotwari**', 'Munro and Read, around 1820', 'The cultivator directly', 'Madras, Bombay, Assam'],
      ['**Mahalwari**', 'Holt Mackenzie, 1822; extended under Bentinck', 'Village or estate as a group', 'North-west, Punjab, Agra'],
    ] },
    { t: 'flow', caption: 'Land reform came in stages after Independence. Land is a state subject (Entry 18, State List), so outcomes varied widely.', steps: [
      { title: 'Abolish intermediaries', sub: 'Zamindari laws in the 1950s' },
      { title: 'Tenancy reform', sub: 'Fair rent, security, ownership' },
      { title: 'Land ceilings', sub: 'Redistribute surplus' },
      { title: 'Consolidation', sub: 'Join scattered plots' },
      { title: 'Land records', sub: 'DILRMP, SVAMITVA, titling' },
    ] },
    { t: 'table', head: ['Measure', 'Result', 'Limits'], rows: [
      ['**Abolition of intermediaries**', 'The most successful step; ended zamindari broadly', 'Big landlords kept land through "personal cultivation"'],
      ['**Tenancy reform**', 'West Bengal\'s **Operation Barga** (1978) and Kerala\'s reforms stand out', 'Elsewhere, tenants were evicted, or tenancy went underground'],
      ['**Ceiling laws**', '1972 guidelines: 10-18 acres of best land, up to 54 acres of poor land. Family as the unit', 'Benami transfers, exemptions and little land redistributed'],
      ['**Consolidation**', 'Success in Punjab, Haryana and western Uttar Pradesh, which helped the Green Revolution', 'Little progress in most other regions'],
    ] },
    { t: 'timeline', caption: 'Law and movement.', items: [
      { when: '1949', what: '**J.C. Kumarappa Committee** on agrarian reforms.' },
      { when: '1951', what: '**First Amendment** adds Article 31A, 31B and the **Ninth Schedule** to protect land laws from court challenge, after cases like Kameshwar Singh in Patna High Court.' },
      { when: '1951', what: '**Bhoodan** begins with Vinoba Bhave at Pochampally, Telangana. **Gramdan** follows.' },
      { when: '1978', what: '**44th Amendment** removes the right to property from Fundamental Rights. It is now a legal right under **Article 300A**.' },
      { when: '2008', what: 'Digital India Land Records Modernisation Programme (**DILRMP**) begins.' },
      { when: '2016', what: 'NITI Aayog\'s **Model Agricultural Land Leasing Act**, to give tenants rights while protecting ownership.' },
      { when: '2020', what: '**SVAMITVA** uses drones to map village habitation land and give property cards.' },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2019', text: 'UPSC asked about land reforms in independent India, with options on whether ceiling laws targeted family holdings, whether the main aim was land for all the landless, whether cash crops became predominant, and whether ceilings allowed no exemption. So learn what ceilings really did, along with their aims and limits.' },
    { t: 'note', kind: 'mains', title: 'Why land reform is unfinished', text: 'Women rarely hold titles. Tenants remain unrecorded, so they miss insurance and credit. Records are often not up to date, leading to disputes. Leasing laws in many states discourage owners from leasing, leaving land fallow. The aim today is not more redistribution but **secure records and legal leasing**.' },

    { t: 'h', text: 'Farm subsidies' },
    { t: 'compare', caption: 'Subsidy logic: both sides.', columns: [
      { title: 'Why they exist', items: ['Keep inputs affordable for small farmers', 'Protect food security', 'Cheap food for consumers', 'Compensate farmers for price risks'] },
      { title: 'Why they are criticised', items: ['Bigger farmers gain more', 'Urea overuse and nutrient imbalance', 'Free power drains groundwater', 'High fiscal cost crowds out public investment in irrigation and research'] },
    ] },
    { t: 'table', head: ['Item', 'How it works', 'Latest fact'], rows: [
      ['**Urea**', 'Fixed retail price; the government pays the difference. 100% neem-coated since 2015, which reduces diversion to industry', 'Most heavily subsidised, so overused'],
      ['**P and K fertilisers**', '**Nutrient Based Subsidy** since 2010: a fixed subsidy per kg of nutrient, and retail prices can move', 'Kharif 2026 outlay: Rs 41,534 crore, as reported (Cabinet, 2026)'],
      ['**Total fertiliser budget**', 'Under the Department of Fertilizers', 'About **Rs 1.71 lakh crore** in Budget 2026-27. Global price stress can push it higher, as in past years'],
      ['**PM-PRANAM**', '2023. States that reduce chemical fertiliser use share in the savings', 'Encourages alternatives'],
      ['**One Nation One Fertiliser**', '2022 single "Bharat" brand', 'Reduces cross-haul'],
      ['**PM-KISAN**', 'Rs 6,000 a year in three instalments to landholding families; launched 2019', '23 instalments, over **Rs 4.47 lakh crore**; 23rd reached over 9.49 crore farmers (PIB, 2026)'],
      ['**PM Kisan Maandhan**', 'Voluntary pension of Rs 3,000 a month after 60 for small and marginal farmers', '24.96 lakh enrolled as of February 2026 (PIB)'],
    ] },
    { t: 'compare', caption: 'WTO Agreement on Agriculture. Amber limit is 10% of production value for developing countries.', columns: [
      { title: 'Amber Box', items: ['Trade-distorting', 'Includes MSP support and input subsidies', 'Capped'] },
      { title: 'Blue Box', items: ['Linked to production limits', 'Not relevant in India\'s case'] },
      { title: 'Green Box', items: ['Minimal distortion', 'Research, extension, direct income support not tied to output'] },
    ] },
    { t: 'note', kind: 'trap', title: 'PM-KISAN scope', text: 'PM-KISAN is **not** for landless labourers or tenants, as it is tied to land records. It is **income support** and not a subsidy on input or output. Institutional landholders, income tax payers and some professionals are excluded.' },

    { t: 'h', text: 'Credit' },
    { t: 'list', items: [
      '**Why it matters:** Informal moneylenders charge high rates, and debt is linked to distress. NABARD (1982) is the apex body for rural credit.',
      '**Structure:** Cooperatives have a short-term three-tier chain: **State Cooperative Bank, District Central Cooperative Bank (DCCB), Primary Agricultural Credit Society (PACS)**. Commercial banks and Regional Rural Banks also lend. Prelims 2020 tested that DCCBs fund PACS.',
      '**Priority sector:** Banks must lend **18%** of adjusted net bank credit to agriculture, with sub-targets for small and marginal farmers.',
    ] },
    { t: 'table', caption: 'Kisan Credit Card, started in 1998. Figures from PIB as on 3 August 2026.', head: ['Feature', 'Detail'], rows: [
      ['Accounts', '**7.28 crore** operative in 2025-26'],
      ['Outstanding', '**Rs 10.08 lakh crore**'],
      ['Scope', 'Crop loans, later extended to animal husbandry and fisheries (2018-19)'],
      ['Interest', 'Modified Interest Subvention Scheme: 7% base, 1.5% subvention, and 3% more for prompt repayment, so **4%** effective'],
      ['Loan limit', 'Subsidised limit raised from Rs 3 lakh to **Rs 5 lakh**, as announced in Budget 2025-26'],
    ] },
    { t: 'note', kind: 'mains', title: 'Debt waivers', text: 'Waivers give quick relief to those in distress, especially after a bad crop. But they mostly help those with formal loans, can weaken repayment culture, and take state funds from investment. A fair answer sets out both, then favours insurance, income support and access to institutional credit.' },

    { t: 'h', text: 'Crop insurance' },
    { t: 'table', caption: 'PMFBY launched in 2016, and replaced earlier schemes. PIB: over 92.46 crore applications insured and Rs 1.96 lakh crore claims paid up to December 2025.', head: ['Feature', 'Provision'], rows: [
      ['Farmer premium', '**Kharif 2%, rabi 1.5%, commercial and horticulture crops 5%**. The balance is shared by Centre and states'],
      ['Centre-state share', '50:50 generally; **90:10** in the North East and Himalayan states'],
      ['Coverage', 'Sowing failure, standing crop, post-harvest loss, and localised calamities'],
      ['Voluntary', 'Voluntary for all farmers since **Kharif 2020**, as earlier it was compulsory for loanee farmers'],
      ['Linked scheme', 'Restructured Weather Based Crop Insurance Scheme (RWBCIS) pays on weather data'],
      ['Tech', 'YES-TECH (yield estimates using tech), WINDS (weather data), Digi-claim'],
    ] },
    { t: 'note', kind: 'trap', title: 'Prelims 2016 and scheme status', text: 'Prelims 2016 tested the claim of a "uniform premium of 2% for any crop in any season", which is false. **Status:** the last Union Cabinet approval found (1 January 2025) ran to 2025-26, with Rs 69,515.71 crore outlay. As of this writing, a fresh central approval for the new cycle could not be confirmed, so check PIB before quoting its current period. States have decided on their own participation, and Bihar approved PMFBY from Rabi 2026-27.' },
    { t: 'list', items: [
      '**Problems:** Late claim settlement, disputes over crop-cutting experiments, states delaying their share, and some states leaving the scheme. Tenant farmers are poorly covered.',
      '**Beed model:** A Maharashtra design in which insurers return surplus premium when claims are low.',
    ] },

    { t: 'h', text: 'Technology' },
    { t: 'table', caption: 'Figures from PIB, 2026.', head: ['Area', 'What is happening'], rows: [
      ['**Digital Agriculture Mission** (2024)', 'AgriStack, Farmer IDs and Digital Crop Survey. **Over 10.31 crore** Farmer IDs by 3 August 2026; survey covered over 31.3 crore plots in Rabi 2025-26'],
      ['**AI advisories**', 'National Pest Surveillance System, and BharatVistaar answering farmer queries'],
      ['**Drones**', 'Namo Drone Didi: drones for women\'s self-help groups, used in spraying'],
      ['**Natural and organic farming**', 'National Mission on Natural Farming (2024-25), PKVY, and MOVCDNER in the North East'],
      ['**KVKs**', '731 Krishi Vigyan Kendras under ICAR (June 2026)'],
      ['**Precision methods**', 'Micro-irrigation, soil testing, and solar pumps'],
    ] },
    { t: 'compare', caption: 'GM crops. **Bt cotton** (2002) is the only GM crop approved for commercial cultivation in India. GEAC under the Environment Ministry is the regulator. In July 2024 a Supreme Court bench gave a split verdict on GM mustard (DMH-11), and asked for a national GM policy.', columns: [
      { title: 'For', items: ['Higher yields and lower pesticide use, as Bt cotton first showed', 'Could lower edible oil imports', 'Drought and pest resistance'] },
      { title: 'Against', items: ['Bio-safety and gene-flow risks', 'Seed monopolies and cost', 'Bt cotton later faced pink bollworm resistance', 'Weak long-term data, and consumer concerns'] },
    ] },
    { t: 'note', kind: 'trap', title: 'GM and gene editing', text: 'GM adds **foreign** genes. Genome edited plants of the SDN-1 and SDN-2 types (no foreign DNA) were exempted from the strict GM biosafety rules in **2022**. In May 2025, ICAR announced two genome-edited rice varieties. These are not the same legal category as GM crops.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Evaluate land reforms: partial success, varied by state, with Kerala and West Bengal as better examples. Whether direct income transfers should replace input subsidies. Whether the fertiliser subsidy can be rationalised without hurting small farmers. How well PMFBY protects farmers. How AgriStack can help, along with privacy and exclusion risks. Whether India should allow GM food crops. Always end with balance.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Zamindari 1793, Ryotwari Munro, Mahalwari Holt Mackenzie.',
      'First Amendment 1951: Ninth Schedule. 44th Amendment: Article 300A.',
      'Bhoodan 1951, Pochampally. Operation Barga 1978.',
      'NBS 2010. Neem-coated urea 2015. PM-PRANAM 2023.',
      'KCC 1998: 4% effective; Rs 5 lakh limit. PMFBY: 2, 1.5, 5.',
      'Only commercial GM crop: Bt cotton.',
    ] },
  ],
  sources: [
    { label: 'PIB backgrounder, The New Era of Indian Agriculture and Allied Sectors (12 August 2026)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/aug/doc2026812952301.pdf' },
    { label: 'Indian Chemical News, Budget 2026-27 fertiliser allocation', url: 'https://www.indianchemicalnews.com/fertilizer/budget-202627-rs-171-lakh-crore-earmarked-for-fertilizer-subsidies-to-boost-farmer-support-29139' },
    { label: 'UPSC Civil Services Prelims 2016, 2019 and 2020, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'PMFBY operational guidelines', where: 'PMFBY portal', why: 'Exact premium, coverage and current status. Confirm the period of the scheme here.', url: 'https://pmfby.gov.in/' },
      { what: 'State land laws', where: 'State revenue departments', why: 'Ceiling limits and tenancy rules vary state by state.' },
    ],
    current: [
      { issue: 'Farm scheme stock-take', link: 'August 2026 backgrounder gives the latest PM-KISAN, KCC and Digital Agriculture Mission data.', source: 'PIB', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/aug/doc2026812952301.pdf' },
      { issue: 'Fertiliser budget', link: 'About Rs 1.71 lakh crore in Budget 2026-27 (February 2026). Useful for the subsidy-reform debate.', source: 'Indian Chemical News', url: 'https://www.indianchemicalnews.com/fertilizer/budget-202627-rs-171-lakh-crore-earmarked-for-fertilizer-subsidies-to-boost-farmer-support-29139' },
    ],
  },
}
