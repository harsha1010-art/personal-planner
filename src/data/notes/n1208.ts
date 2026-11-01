import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-08',
  summary: 'What happens after harvest: mandis and e-NAM, cold chains and logistics, food processing schemes, and the fast-growing allied sectors of dairy, livestock and fisheries.',
  minutes: 20,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Indian farmers often earn little of what consumers pay. Fragmented land, thin markets, poor storage and many middlemen eat into the price. So farm policy has shifted from output alone to **markets, value addition and allied activities**. GS III names food processing, supply chain management and e-technology in the aid of farmers in its syllabus.' },
    { t: 'flow', caption: 'Each link loses value if it is weak.', steps: [
      { title: 'Farm gate', sub: 'Aggregation through FPOs and PACS' },
      { title: 'Assembly', sub: 'Grading, sorting, testing' },
      { title: 'Storage', sub: 'Warehouses, cold stores, silos' },
      { title: 'Market', sub: 'APMC, e-NAM, direct sale' },
      { title: 'Processing', sub: 'Primary, secondary, tertiary' },
      { title: 'Retail and export', sub: 'Brands, FSSAI standards, APEDA' },
    ] },

    { t: 'h', text: 'Agricultural marketing and e-NAM' },
    { t: 'p', text: '**Agriculture** (Entry 14) and **markets and fairs** (Entry 28) are on the State List, so each state has its own **Agricultural Produce Market Committee (APMC) Act**. Trade in foodstuffs is on the Concurrent List (Entry 33). This is the root of the Centre-state debate over farm laws. The three farm laws of 2020, made under the Concurrent List entry, were repealed in **November 2021**.' },
    { t: 'table', caption: 'e-NAM, launched 14 April 2016. Figures from the PIB backgrounder of August 2026 (as of June 2026).', head: ['Feature', 'Detail'], rows: [
      ['What it is', 'An online trading portal that links existing APMC mandis. It does not replace them'],
      ['Lead agency', 'Small Farmers\' Agribusiness Consortium (**SFAC**) under the Agriculture Ministry'],
      ['Mandis integrated', '**1,656** as of June 2026'],
      ['Registered', '**1.89 crore** farmers and **2.78 lakh** traders'],
      ['State pre-conditions', 'Single-point levy, a single trading licence valid across the state, and electronic auction'],
      ['Other pieces', 'Platform-of-platforms and FPO onboarding; quality testing at mandis'],
    ] },
    { t: 'compare', caption: 'e-NAM: a fair assessment.', columns: [
      { title: 'Gains', items: ['Price discovery and transparency', 'Wider pool of buyers', 'Online payment trail', 'A base for inter-state trade'] },
      { title: 'Limits', items: ['Most trade remains within a mandi or state', 'Weak assaying and grading', 'Traders fear losing commissions and resist', 'Internet and logistics gaps; small lots for distant buyers', 'Depends on state marketing reform'] },
    ] },
    { t: 'list', items: [
      '**Model laws:** The Model Agricultural Produce and Livestock Marketing Act (**2017**) and Model Contract Farming Act (**2018**) were advisory, and states adopted them unevenly.',
      '**FPOs:** The scheme for 10,000 Farmer Producer Organisations began in 2020. PIB reports the target as reached (July 2026).',
      '**PACS:** 79,630 sanctioned for computerisation; 63,707 on the national ERP as of 5 August 2026 (PIB). They are being used as multi-service bodies.',
      '**Warehouse receipts:** The Warehousing (Development and Regulation) Act, 2007 set up **WDRA**, which regulates negotiable warehouse receipts that farmers can pledge for credit.',
      '**Dalwai Committee (2017-18):** On doubling farmers\' income. It stressed that agriculture must be run as an enterprise, with markets and logistics at the centre.',
    ] },
    { t: 'note', kind: 'trap', title: 'e-NAM is not a new mandi', text: 'It connects **existing** mandis online. It is voluntary for states, and it does **not** remove APMC law. It is run by SFAC with the Agriculture Ministry, and not by NABARD or FCI.' },

    { t: 'h', text: 'Food processing' },
    { t: 'p', text: 'Processing raises farm value, reduces waste, and provides off-farm jobs. It has **three stages**: primary (cleaning, milling), secondary (oil, flour, dairy) and tertiary (ready-to-eat products). The sector is under the **Ministry of Food Processing Industries**. Its budget rose from Rs 785.86 crore in 2014-15 to Rs 4,064 crore in 2026-27 (PIB).' },
    { t: 'table', caption: 'Main schemes. Performance data from PIB, as of June 2026.', head: ['Scheme', 'Focus', 'Key facts'], rows: [
      ['**PM Kisan Sampada Yojana** (2017)', 'Umbrella for infrastructure', 'Includes cold chain, agro-processing clusters, and food testing. 1,256 projects done or operational, 37.76 lakh farmers benefit'],
      ['**PMFME** (2020)', 'Micro enterprises, in the unorganised sector', 'Uses **One District One Product**. Credit-linked subsidy of 35%, up to Rs 10 lakh'],
      ['**PLISFPI** (2021)', 'Larger firms and brands abroad', 'Rs 10,900 crore outlay. Incentives of Rs 3,271.44 crore disbursed up to June 2026'],
      ['**Operation Greens** (2018)', 'Tomato, onion, potato (TOP); extended to notified fruits and vegetables', 'Aims to reduce price swings. Often seen alongside Operation Flood as a parallel idea'],
      ['**Agriculture Infrastructure Fund** (2020)', 'Post-harvest infrastructure', 'Rs 1 lakh crore loan facility with 3% interest subvention. Under the Agriculture Ministry, not MoFPI. Supported 18,893 warehouses and 3,110 cold store and cold chain projects'],
    ] },
    { t: 'list', items: [
      '**FDI:** 100% is allowed through the automatic route in food processing. Retail trading of food products made in India is allowed 100% through the government route.',
      '**Regulators:** **FSSAI** under the Food Safety and Standards Act, 2006. **APEDA** for agricultural exports. **MPEDA** for marine products.',
      '**Exports:** Farm exports rose from USD 32.08 billion in 2014-15 to **USD 54.70 billion** in 2025-26. Processed food reached 20.4% of agri exports in 2024-25 (PIB).',
      '**Logistics:** Kisan Rail and Krishi Udan (both 2020) tried to move perishable goods faster.',
    ] },
    { t: 'note', kind: 'mains', title: 'Why the sector is held back', text: 'Small and scattered raw supply. Weak cold chain and last-mile links. Many small unorganised firms and low credit. Varieties not suited to processing, for example table potatoes. Complex standards and weak testing. Good examples of the opposite: **Amul** in Gujarat, Nagpur oranges, and ODOP products like Bihar\'s makhana.' },

    { t: 'h', text: 'Allied sectors' },
    { t: 'p', text: 'Livestock and fisheries have grown faster than crops, and these sectors are key for small and landless households. Their income is steadier because it comes all year.' },
    { t: 'table', caption: 'Latest figures from the PIB backgrounder of August 2026.', head: ['Sector', 'Output', 'India\'s position'], rows: [
      ['Milk', '**248 million tonnes** in 2024-25 (146.31 in 2014-15). 485 g per person per day', 'First; about 25% of world output'],
      ['Eggs', '149.11 billion in 2024-25', 'Second'],
      ['Meat', '10.50 million tonnes in 2024-25', 'Fourth'],
      ['Fish', '197.75 lakh tonnes in 2024-25 (95.79 in 2013-14)', 'Seafood exports about USD 8.46 billion in 2025-26'],
    ] },
    { t: 'table', head: ['Scheme', 'What it does', 'Remember'], rows: [
      ['**Rashtriya Gokul Mission** (2014)', 'Conserves and improves indigenous cattle and buffalo', 'Sex-sorted semen, IVF labs, MAITRI technicians. Prelims 2025'],
      ['**National Programme for Dairy Development**', 'Dairy cooperatives, chilling, testing', '168 lakh litres per day chilling capacity (June 2026)'],
      ['**National Livestock Mission** (2014)', 'Poultry, sheep, goat, pig, fodder, entrepreneurship', '4,321 entrepreneur projects approved (August 2026)'],
      ['**AHIDF**', 'Credit for dairy, meat, feed plants', 'Interest subvention; open to private firms'],
      ['**NADCP** (2019)', 'Vaccination against foot-and-mouth disease and brucellosis', 'Goal: controlling FMD and eventually eradicating it. 132.49 crore FMD doses by March 2026'],
      ['**PMMSY** (2020)', 'Fisheries: production, value chain, welfare', 'Replaced the earlier Blue Revolution scheme. Fish KCC and insurance'],
      ['**Mobile Veterinary Units**', 'Doorstep care', 'Toll-free **1962**; 4,019 units as of July 2026'],
    ] },
    { t: 'timeline', caption: 'Revolutions. Keep the names and products straight, because they are easy to mix up.', items: [
      { when: 'Green (from 1966)', what: 'High-yielding wheat and rice. M.S. Swaminathan and Norman Borlaug.' },
      { when: 'White (Operation Flood, from 1970)', what: 'Milk. **Verghese Kurien** and NDDB, based on the Anand (Amul) cooperative model.' },
      { when: 'Blue', what: 'Fisheries.' },
      { when: 'Yellow', what: 'Oilseeds, through the Technology Mission on Oilseeds in the 1980s.' },
      { when: 'Golden', what: 'Horticulture and honey (in common usage).' },
      { when: 'Sweet', what: 'Honey, promoted through the National Beekeeping and Honey Mission.' },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2025', text: 'UPSC tested the **Rashtriya Gokul Mission**: it matters for rural poor because most low-producing indigenous animals are with small and marginal farmers and landless labourers, and it covers both indigenous cattle and buffalo.' },
    { t: 'list', items: [
      '**Credit:** Kisan Credit Card has extended to animal husbandry and fisheries since 2018-19. PIB counts 4.39 lakh fishers reached as of early 2026.',
      '**Issues:** Low productivity per animal despite the largest herds, fodder scarcity, disease, stray cattle, and climate stress on marine catches. Productivity is improving: average bovine milk yield went up from 1,648 kg to 2,251 kg per animal per year between 2014-15 and 2024-25.',
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Why food processing is a "sunrise" sector but small in value. How FPOs, e-NAM and AIF together change bargaining power. Role of cooperatives, comparing Amul with weak cooperatives elsewhere. Supply chain and price volatility for tomato, onion and potato. Allied sectors as a route to doubling income, with balance on the environmental cost of intensive livestock and overfishing.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Agriculture: Entry 14, State List. Markets: Entry 28, State List.',
      'e-NAM: April 2016, SFAC, 1,656 mandis, 1.89 crore farmers (June 2026).',
      'PMKSY Sampada (2017), PMFME (2020), PLISFPI (2021), Operation Greens (2018), AIF (2020).',
      'Milk 248 mt, eggs 149.11 billion, fish 197.75 lakh tonnes (2024-25).',
      'Gokul 2014, NADCP 2019, PMMSY 2020.',
    ] },
  ],
  sources: [
    { label: 'PIB backgrounder, The New Era of Indian Agriculture and Allied Sectors (12 August 2026)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/aug/doc2026812952301.pdf' },
    { label: 'UPSC Civil Services Prelims 2025, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'e-NAM dashboard', where: 'National Agriculture Market', why: 'Current mandi and trade figures.', url: 'https://www.enam.gov.in/' },
      { what: 'Economic Survey, agriculture chapter', where: 'Finance Ministry', why: 'Latest GVA and allied-sector growth figures, which change each year.', url: 'https://www.indiabudget.gov.in/economicsurvey/' },
    ],
    current: [
      { issue: 'PIB stock-take of agriculture and allied sectors', link: 'August 2026 document gives the latest e-NAM, PLISFPI, dairy and fisheries numbers used here.', source: 'PIB', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/aug/doc2026812952301.pdf' },
    ],
  },
}
