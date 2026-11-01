import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-09',
  summary: 'The Indian village as idea and fact, land tenure and land reform, agrarian classes, the Green Revolution, the mode-of-production debate, rural development and rural labour. Paper II, B(i), B(iv)(a) and C(ii).',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Land decided status, power and livelihood in India for centuries. This note covers three questions. **What is the village?** A self-sufficient republic, or a site of caste domination? **Who controls land?** Colonial settlement, land reform and the market all changed this. **What did technology and the state do?** Green Revolution gains were real, but they were uneven. As of 2015-16, about **86%** of holdings were small or marginal, with an average holding of **1.08 hectares** (Agriculture Census).' },

    { t: 'h', text: 'B(i)(a): the idea of the Indian village' },
    { t: 'timeline', caption: 'The village was first an idea of colonial writers and nationalists, and only later a field site.', items: [
      { when: 'Metcalfe, 1830', what: '**"Little republics":** self-sufficient, unchanging units.' },
      { when: 'Marx, 1853', what: 'Self-sufficient villages as the base of Asiatic stagnation.' },
      { when: 'Maine, 1871; Baden-Powell, 1890s', what: 'Village Communities; The Land Systems of British India. Tenure and joint-village forms.' },
      { when: 'Gandhi', what: '**Gram swaraj:** village as moral and political ideal.' },
      { when: 'Ambedkar, 1948', what: 'Village as a **"sink of localism"**, a place of caste oppression.' },
      { when: 'Nehru', what: 'Village as backward, to be changed by planning and science.' },
    ] },
    { t: 'note', kind: 'mains', title: 'Three images, one source', text: '**Surinder Jodhka** (2002) compares Gandhi, Nehru and Ambedkar on the village: authentic, backward and oppressive. Use this contrast to open any question on village as idea.' },
    { t: 'table', caption: 'The great village studies of the 1950s-70s. Learn the author, village and finding.', head: ['Scholar', 'Village or work', 'Main finding'], rows: [
      ['**M.N. Srinivas**', 'Rampura, Mysore; India\'s Villages (ed., 1955)', 'Village as a unity; **dominant caste**'],
      ['**S.C. Dube**', 'Shamirpet; Indian Village (1955)', 'Multiple groups and factions; change through contact'],
      ['**McKim Marriott**', 'Kishan Garhi; Village India (1955)', 'Parochialisation and universalisation'],
      ['**Andre Beteille**', 'Sripuram; Caste, Class and Power (1965)', 'Caste, class and power come apart'],
      ['**F.G. Bailey**', 'Bisipara; Caste and the Economic Frontier (1957)', 'Market changes shift caste rank'],
      ['**T.S. Epstein**', 'Wangala and Dalena (1962)', 'Irrigation versus diversified villages'],
      ['**Jan Breman**', 'South Gujarat; Patronage and Exploitation (1974)', '**Hali** bondage turns into wage exploitation'],
      ['**Kathleen Gough**', 'Kumbapettai, Thanjavur', 'Class conflict in a Brahmin village'],
    ] },
    { t: 'compare', columns: [
      { title: 'Critiques of village studies', items: ['**Dumont and Pocock** (1957): caste and kin cross village lines, so the village is no real unit', '**Breman** (1987): the image of the closed village was built by colonial officials', '**Marxists:** too little on class or the state', 'Fieldwork often reflected upper-caste men'] },
      { title: 'Why they still matter', items: ['Tested book views against practice', 'Trace change through restudies', '**Himanshu, Lanjouw and Stern:** Palanpur (How Lives Change, 2018)', '**Dipankar Gupta** (2005): the village is shrinking as a source of livelihood and identity'] },
    ] },

    { t: 'h', text: 'B(i)(b): land tenure' },
    { t: 'table', caption: 'Colonial land systems. Traps: Cornwallis, Munro and Holt Mackenzie are not interchangeable.', head: ['', 'Zamindari (Permanent)', 'Ryotwari', 'Mahalwari'], rows: [
      ['Year and name', '1793, Cornwallis', 'From about 1820, Munro and Read', 'From 1822, Holt Mackenzie'],
      ['Regions', 'Bengal, Bihar, Orissa', 'Madras, Bombay, Assam', 'North-west provinces, Punjab, central India'],
      ['Who pays', 'Zamindar, a fixed sum', 'The cultivator', 'Village or mahal, jointly'],
      ['Social effect', 'New absentee landlords; subinfeudation', 'High taxes, moneylender control', 'Power of village headmen; land transfers'],
    ] },
    { t: 'p', text: '**Results:** land became a commodity. Moneylenders and traders gained. Food crops gave way to commercial crops. **Daniel Thorner** (The Agrarian Prospect in India, 1956) called the overall system a **built-in depressor**: rent and interest made investment pointless for owners and useless for tenants. **Deccan riots** (1875) are a good example of peasant anger.' },

    { t: 'h3', text: 'Land reforms after 1947' },
    { t: 'table', head: ['Reform', 'Details', 'Result'], rows: [
      ['Abolition of intermediaries', 'Kumarappa Committee (1949); state acts from 1950; **First Amendment 1951**, Articles 31A and 31B, Ninth Schedule', 'Most successful. Former zamindars kept "personal cultivation" land'],
      ['Tenancy', 'Security and fair rent. **Operation Barga**, West Bengal (1978); Kerala after 1969', 'Mass evictions before laws took effect; "voluntary" surrenders'],
      ['Ceilings', 'State laws; national guidelines of 1972', 'Benami transfers; little land distributed'],
      ['Bhoodan and Gramdan', '**Vinoba Bhave**, Pochampalli (1951)', 'Much land was poor; **T.K. Oommen** studied the movement'],
      ['Consolidation', 'Punjab, Haryana, west UP', 'Helped the Green Revolution'],
    ] },
    { t: 'p', text: '**Sociological reading:** Reforms weakened the old landlords. They strengthened **upper tenants of middle castes**: Jats, Patidars, Kammas, Reddys, Vokkaligas. So they helped form today\'s dominant castes. The landless, mostly Dalit, gained least. **P.C. Joshi** and **P.S. Appu** explain the gap through landlord power within the state. **Bina Agarwal** (A Field of One\'s Own, 1994) notes that women were largely left out of redistribution, and argues for land rights for women. **Ronald Herring** (Land to the Tiller, 1983) shows the role of left politics in Kerala.' },

    { t: 'h', text: 'B(iv)(a): agrarian classes' },
    { t: 'strata', caption: 'Daniel Thorner\'s categories (1956) are based on income from land: rent, own work or wages.', layers: [
      { title: 'Malik', sub: 'Income from ownership: big landlords and rich landowners' },
      { title: 'Kisan', sub: 'Work own land with family: small owners, tenants' },
      { title: 'Mazdoor', sub: 'Income from wages: landless labour, poor sharecroppers' },
    ] },
    { t: 'list', items: [
      '**Marxist classes:** landlord, rich peasant, middle peasant, poor peasant and labourer. **Utsa Patnaik** used a **labour-exploitation** criterion to define them.',
      '**Hamza Alavi** (1965): **middle peasants** are the most revolutionary, since they have some independence. Compare **Eric Wolf**.',
      '**Rudolph and Rudolph** (In Pursuit of Lakshmi, 1987): **bullock capitalists**, self-employed middle farmers, gained political strength.',
      '**Beteille:** classes in villages do not fit caste neatly, though the top and bottom usually overlap with caste.',
    ] },

    { t: 'h', text: 'C(ii)(b): Green Revolution and social change' },
    { t: 'flow', caption: 'Started in the mid-1960s after food shortages. Borlaug\'s dwarf wheat came from Mexico. M.S. Swaminathan and C. Subramaniam led the effort in India.', steps: [
      { title: 'Seeds', sub: 'High-yield wheat, then rice' },
      { title: 'Inputs', sub: 'Fertiliser, irrigation, credit' },
      { title: 'State support', sub: 'Minimum support prices, procurement' },
      { title: 'Regions', sub: 'Punjab, Haryana, west UP, coastal Andhra, Thanjavur' },
      { title: 'Social effects', sub: 'New classes, wage labour, migration' },
    ] },
    { t: 'compare', caption: 'Polarisation or broad gain? The debate has no single answer, because results varied by region.', columns: [
      { title: 'It increased inequality', items: ['**Francine Frankel** (1971): gains to large farmers; rising conflict', '**Byres, Harriss:** capitalist differentiation', '**Wolf Ladejinsky** (1969): tenants squeezed in Punjab', '**Kilvenmani** (Thanjavur, December 1968): 44 Dalit labourers killed in a wage dispute', '**Shiva:** ecological and social damage'] },
      { title: 'Gains spread more widely', items: ['**G.S. Bhalla and G.K. Chadha:** small farmers in Punjab also gained', '**Hazell and Ramasamy** (1991): wide village gains in North Arcot', 'More labour demand and higher wages in many areas', 'Food security and lower grain prices'] },
    ] },
    { t: 'list', items: [
      '**Patron to contract:** **Breman** shows that attached ties gave way to casual wage labour. Machines and migrant labour from Bihar and Eastern UP replaced older bonds.',
      '**Gender:** Women\'s field labour fell among rich peasant households. **Monica Das Gupta** (1987) showed girl-child disadvantage in rural Punjab despite prosperity.',
      '**Politics:** new farmers formed movements in the 1970s-80s: **BKU** (Tikait), **Shetkari Sanghatana** (Sharad Joshi, "Bharat versus India"), **Karnataka Rajya Raitha Sangha**. **Varshney** and **Dipankar Gupta** study this.',
    ] },

    { t: 'h', text: 'C(ii)(c): changing modes of production' },
    { t: 'p', text: 'In the 1970s, the **Economic and Political Weekly** carried the great debate. Is Indian agriculture feudal, or is it capitalist? **Alice Thorner** (1982) later summed it up.' },
    { t: 'table', head: ['Scholar', 'Position'], rows: [
      ['**Utsa Patnaik**', 'Capitalism is growing, with profits reinvested, but it is limited'],
      ['**Ashok Rudra**', 'Large farmers do not fit a clear capitalist class'],
      ['**Amit Bhaduri** (1973)', '**Semi-feudalism:** landlord-lender uses debt and tenancy to block improvement'],
      ['**Hamza Alavi, Jairus Banaji**', 'A **colonial mode of production**, distinct from European feudalism'],
    ] },
    { t: 'p', text: '**Since 1991:** input costs, withdrawal of state support and exposure to markets have produced **agrarian distress**. **A.R. Vasavi** (Shadow Space, 2012) reads farmer suicides sociologically, and links them to Durkheim\'s anomie and to loss of local knowledge. The **farm laws** of 2020 were repealed in 2021 after a year of protest.' },

    { t: 'h', text: 'C(ii)(a): rural development' },
    { t: 'timeline', caption: 'From community uplift to rights, then to a revised guarantee.', items: [
      { when: '1948', what: 'Albert Mayer\'s **Etawah** pilot.' },
      { when: '2 Oct 1952', what: '**Community Development Programme**: blocks and village-level workers.' },
      { when: '1957', what: '**Balwantrai Mehta Committee:** three-tier panchayats, since CDP lacked participation.' },
      { when: '1978-80', what: '**IRDP** targets the rural poor.' },
      { when: '2005', what: '**MGNREGA**: a legal right to work, 100 days per household.' },
      { when: '2011', what: '**National Rural Livelihoods Mission**: self-help groups.' },
      { when: '1 July 2026', what: '**VB-G RAM G Act** replaces MGNREGA, with 125 days guaranteed. Notified on 11 May 2026.' },
    ] },
    { t: 'list', items: [
      '**Critique of CDP:** **S.C. Dube** (India\'s Changing Villages, 1958): officials favoured elites and showed a top-down style, so benefits went to upper groups.',
      '**Cooperatives:** the **Amul** model (Kaira, 1946; Kurien; Operation Flood, 1970) is the success story. **B.S. Baviskar** (The Politics of Development, 1980) and **Donald Attwood** (Raising Cane, 1992) showed that Maharashtra sugar cooperatives created both growth and rural elites. Link to the **Ministry of Cooperation** (2021).',
      '**Poverty alleviation:** programme design meets local power. **Elite capture** remains the core sociological issue.',
    ] },

    { t: 'h', text: 'C(ii)(d): rural labour' },
    { t: 'table', head: ['Problem', 'Details', 'Thinkers or law'], rows: [
      ['Bondage', 'Debt ties labour, often Dalit or Adivasi', 'Article 23; **Bonded Labour System (Abolition) Act, 1976**; **Bandhua Mukti Morcha** (1984); Breman on hali'],
      ['Migration', 'Seasonal, circular, in kilns and sugarcane', '**Breman:** Footloose Labour (1996); **David Mosse** on Bhil migrants'],
      ['Feminisation', 'Men leave, women stay on the land with few rights', '**Bina Agarwal**'],
      ['Caste and wage conflict', 'Labour demands provoke violence', 'Kilvenmani; Bihar\'s private armies'],
    ] },
    { t: 'note', kind: 'trap', title: 'Do not swap these', text: '**Malik-kisan-mazdoor** and **built-in depressor** are Daniel Thorner. **Bullock capitalists** are the Rudolphs. **Semi-feudalism** is mainly Bhaduri. **Middle peasant thesis** is Alavi and Wolf. **India\'s Changing Villages** is Dube, and **India\'s Villages** is the collection edited by Srinivas.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Discuss why land reforms fell short, and whom they helped. Compare the Green Revolution\'s social effects in two regions. Discuss the idea of village in Gandhi and Ambedkar. Examine whether rural India is still agrarian, using Gupta. Examine bonded labour today. Link caste to land in every answer, and bring in women through Agarwal.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Zamindari 1793; Ryotwari about 1820; Mahalwari 1822.',
      'Thorner: malik, kisan, mazdoor; built-in depressor.',
      'CDP 1952; Mehta 1957; Dube\'s critique.',
      'Frankel: polarisation. Bhalla and Chadha: gains to small farmers.',
      'Bhaduri: semi-feudalism. Breman: hali, footloose labour.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper II, Sections B and C, from your upsc-syllabus.pdf (pages 74-75)' },
    { label: 'Rural Voice, Government notifies VB-G RAM G Act, 2026', url: 'https://eng.ruralvoice.in/government-notifies-vb-g-ram-g-act-to-be-implemented-from-1-july-2026' },
    { label: 'Devdiscourse agency report on the Agriculture Census 2015-16 (86.21% small and marginal; 1.08 hectares)', url: 'https://www.devdiscourse.com/Article/agency-wire/202383-data-shows-increase-in-female-participation-in-agriculture-sector-of-india' },
    { label: 'India Environment Portal, Agriculture Census 2015-16 (1.08 hectares)', url: 'https://indiaenvironmentportal.org.in/reports-and-documents/agriculture-census-2015-16' },
    { label: 'Reference for further reading, not checked line by line: Beteille, Studies in Agrarian Social Structure; Thorner, The Agrarian Prospect in India; Frankel, India\'s Green Revolution; Jodhka on the village' },
  ],
  beyond: {
    refer: [
      { what: 'Latest Agriculture Census', where: 'Department of Agriculture and Farmers Welfare', why: 'Holding sizes and women operators shift with each round. Check for a newer one than 2015-16.', url: 'https://agcensus.da.gov.in/' },
      { what: 'State of India\'s land reform data', where: 'Department of Land Resources', why: 'Ceiling surplus and distribution totals change, and notes do not hold them.', url: 'https://dolr.gov.in/' },
    ],
    current: [
      { issue: 'VB-G RAM G Act', link: 'Notified 11 May 2026; replaced MGNREGA from 1 July 2026 with 125 days of work. Connects to rural labour, migration and the right to work.', source: 'Rural Voice', url: 'https://eng.ruralvoice.in/government-notifies-vb-g-ram-g-act-to-be-implemented-from-1-july-2026' },
    ],
  },
}
