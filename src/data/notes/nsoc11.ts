import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-11',
  summary: 'Tribes (definition, spread, colonial policy, integration and autonomy, displacement) and social classes in India (agrarian, industrial, middle). Paper II, Units B(iii) and B(iv).',
  minutes: 26,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'This note covers two units of **Paper II, Section B**. **B(iii) Tribal communities:** definitional problems, geographical spread, colonial policies, integration and autonomy. **B(iv) Social classes:** agrarian, industrial and middle classes. Both ask one question from different sides: how did colonial rule and the Indian state reshape groups who were already unequal? Sociology has no Prelims paper, so everything here is for written answers.' },

    { t: 'h', text: 'Part 1: Tribes' },
    { t: 'h3', text: 'Definitional problems' },
    { t: 'p', text: 'The Constitution does not define "tribe". **Article 366(25)** says Scheduled Tribes are those deemed so under **Article 342**, which works through a presidential order and a law of Parliament. So "Scheduled Tribe" is an **administrative category**. "Tribe" is a contested sociological one. The **Lokur Committee (1965)** gave the working criteria: primitive traits, distinctive culture, geographical isolation, shyness of contact, and backwardness. Critics say words like "primitive" carry a colonial bias.' },
    { t: 'table', caption: 'Who said what on the meaning of tribe.', head: ['Thinker', 'Exact position', 'Use it for'], rows: [
      ['**G.S. Ghurye**', 'Called tribals "backward Hindus". Saw them as part of Hindu society, imperfectly integrated.', 'Assimilation view'],
      ['**Verrier Elwin**', 'Work on the Baiga and on NEFA. Feared contact would destroy tribal culture, and argued for protection.', 'Protection view'],
      ['**N.K. Bose**', '"Hindu method of tribal absorption": tribes entered Hindu society gradually, taking a caste-like place.', 'Historical absorption'],
      ['**F.G. Bailey**', '**Tribe-caste continuum**: use land access to place a group on a line, not in two boxes.', 'Definition problem'],
      ['**Surajit Sinha**', 'State formation and the **Rajput myth** in tribal central India: tribal chiefs claimed Rajput status.', 'Tribes were not isolated'],
      ['**Andre Beteille**', 'Tribe is hard to define: tribes and castes shaded into each other in India. Tribes were part of larger civilisation.', 'Against the isolate model'],
      ['**Virginius Xaxa**', 'Studies tribes as **indigenous people** and asks how they change without becoming castes. Chaired the 2014 High Level Committee.', 'Transformation without caste'],
      ['**K.S. Singh**', 'Led the Anthropological Survey\'s People of India project. Wrote on Birsa Munda and tribal movements.', 'Movements, data'],
    ] },
    { t: 'note', kind: 'trap', title: 'Indigenous or not', text: 'India does not officially use "indigenous peoples" for STs, while activists and Xaxa use the term. "Adivasi" is a self-description that grew in Chotanagpur. State both positions. Do not treat tribe, ST and adivasi as the same word.' },

    { t: 'h3', text: 'Geographical spread' },
    { t: 'table', caption: 'Figures as per Census 2011. The next count is Census 2027.', head: ['Item', 'Detail'], rows: [
      ['Population', '**10.45 crore, 8.6%** of India (Census 2011, Ministry of Tribal Affairs reply to Parliament, August 2024)'],
      ['Rural skew', 'About 11.3% of the rural population is ST (Census 2011)'],
      ['Central and western belt', 'Santhal, Oraon, Munda, Gond, Bhil. Jharkhand, Chhattisgarh, Odisha, Madhya Pradesh, Gujarat, Rajasthan, Maharashtra'],
      ['North-east', 'Naga, Khasi, Garo, Mizo, Bodo. Very high ST share in several states, with a stronger land and autonomy regime'],
      ['South and islands', 'Toda, Irula, Chenchu; Onge, Jarawa, Sentinelese'],
      ['PVTGs', '**75 groups** in 18 states and one UT (Ministry of Tribal Affairs, August 2024). Term replaced "Primitive Tribal Groups".'],
    ] },

    { t: 'h3', text: 'Colonial policies' },
    { t: 'timeline', items: [
      { when: '1793 onward', what: 'New land revenue settlements bring moneylenders and outside landlords (**dikus**) into tribal areas.' },
      { when: '1855', what: '**Santhal Hul**, against dikus and colonial officials.' },
      { when: '1865, 1878, 1927', what: '**Indian Forest Acts**. Customary use became a privilege, and shifting cultivation was restricted. This is the core of **Ramachandra Guha\'s** The Unquiet Woods.' },
      { when: '1871', what: '**Criminal Tribes Act**: whole groups were labelled criminal by birth. Later repealed, and the groups became denotified.' },
      { when: '1873-74', what: '**Inner Line** regulation in the north-east; Scheduled Districts Act.' },
      { when: '1899-1900', what: '**Munda Ulgulan** under Birsa Munda. It led to the **Chotanagpur Tenancy Act, 1908**.' },
      { when: '1935', what: 'Government of India Act creates **excluded and partially excluded areas**.' },
    ] },
    { t: 'p', text: '**Nandini Sundar** (Subalterns and Sovereigns) shows this history in Bastar, and **David Hardiman** (The Coming of the Devi) shows reform-style assertion among adivasis in south Gujarat. Colonial rule did not simply find isolated tribes. It helped create the category through census and law.' },

    { t: 'h3', text: 'Integration or autonomy' },
    { t: 'compare', caption: 'The classic debate. A strong answer shows why neither position survived intact.', columns: [
      { title: 'Isolation / protection', items: ['Elwin\'s early position', 'Protect culture from traders and missionaries', 'Critics: treats people like museum pieces'] },
      { title: 'Assimilation', items: ['Ghurye and social reformers such as Thakkar Bapa', 'Tribes are part of Hindu society', 'Critics: erases identity; becomes a route to inequality'] },
      { title: 'Integration', items: ['**Nehru\'s Panchsheel** in his foreword to Elwin\'s A Philosophy for NEFA', 'Develop on their own lines; respect land and forest rights; train their own teams; avoid over-administration; judge by human quality, not money spent', 'The official policy, but poorly applied'] },
    ] },
    { t: 'table', caption: 'How the Constitution and laws carry the debate.', head: ['Instrument', 'What it does', 'Sociological point'], rows: [
      ['Fifth Schedule', 'Scheduled Areas, Tribes Advisory Council, Governor\'s powers', 'Protection through the state'],
      ['Sixth Schedule', 'Autonomous District Councils in Assam, Meghalaya, Tripura, Mizoram', 'Autonomy through customary institutions'],
      ['Articles 371A, 371G', 'Special provisions for Nagaland and Mizoram on customary law and land', 'Negotiated autonomy after insurgency'],
      ['PESA, 1996', 'Gram sabha powers in Fifth Schedule Areas. From the **Bhuria Committee**', 'Self-rule, weakly implemented'],
      ['Forest Rights Act, 2006', 'Individual and community forest rights', 'Admits a "historical injustice"'],
      ['Tribal Sub-Plan, 1974-75', 'Earmarked funds; later reshaped', 'Development as budget share'],
      ['PM-JANMAN (launched November 2023)', 'Targets PVTG habitations', 'Targeted welfare'],
    ] },
    { t: 'note', kind: 'exam', title: 'Committees to name', text: '**Dhebar Commission** (1960-61), **Lokur Committee** (1965), **Bhuria Committee** (1995, leading to PESA), **Xaxa Committee** (High Level Committee, report 2014, on tribal socio-economic, health and education status). Keep each to its own subject.' },

    { t: 'h3', text: 'Development and displacement' },
    { t: 'flow', caption: 'The tribal displacement argument, step by step.', steps: [
      { title: 'Resource location', sub: 'Dams, mines and forests lie on tribal land' },
      { title: 'State acquisition', sub: '"Public purpose"; weak records of customary rights' },
      { title: 'Dispossession', sub: 'Loss of land, forest, kin networks' },
      { title: 'Weak rehabilitation', sub: 'Cash cannot replace commons' },
      { title: 'Resistance', sub: 'Movements, courts, or armed conflict' },
    ] },
    { t: 'list', items: [
      '**Michael Cernea\'s** impoverishment risks model: landlessness, joblessness, homelessness, marginalisation, food insecurity, morbidity, loss of common property, and social disarticulation. Detailed in the soc-14 note.',
      '**Amita Baviskar** (In the Belly of the River): Bhilala adivasis in the Narmada valley. She warns against romanticising adivasis while supporting their claim.',
      '**Alpa Shah** (In the Shadows of the State): in Jharkhand, some adivasis distrust state development and the NGO-led "eco-incarceration" that keeps them in the forest. It complicates simple pro-tribal arguments.',
      '**Cases:** *Samata* (1997) on transfer of tribal land in Scheduled Areas. *Orissa Mining Corporation* (2013): gram sabhas in Niyamgiri decide on religious and community rights, and the Dongria Kondh rejected mining. *Narmada Bachao Andolan* (2000) allowed the dam to proceed with rehabilitation conditions.',
      '**Law:** the land acquisition law of 2013 requires social impact assessment and special safeguards for Scheduled Areas.',
    ] },

    { t: 'h', text: 'Part 2: Social classes in India' },
    { t: 'p', text: 'Colonial rule turned land into a commodity and created new classes. Class in India never replaced caste. **Andre Beteille\'s** Caste, Class and Power (Sripuram, Tamil Nadu) shows the three orders moving apart: land passed from Brahmins to non-Brahmins, and power passed to those with numbers. This is the single best framing for the unit.' },
    { t: 'h3', text: 'Agrarian class structure' },
    { t: 'table', head: ['Thinker', 'Scheme', 'Key point'], rows: [
      ['**Daniel Thorner**', '**Malik, Kisan, Mazdoor**', 'Classified by ownership and labour, in The Agrarian Prospect in India'],
      ['**Hamza Alavi**', 'Rich, middle, poor peasants', 'Middle peasants were the initial revolutionary force'],
      ['**Utsa Patnaik**', 'Labour-exploitation criterion', 'Measures hired labour against own labour'],
      ['**Andre Beteille**', 'Landlord, tenant, labourer', 'Ownership, control and use of land differ'],
      ['**Jan Breman**', 'Patronage to exploitation', 'Hali bonded labour in south Gujarat gave way to casual labour'],
      ['**M.N. Srinivas**', '**Dominant caste**', 'Land, numbers and ritual status give village power'],
      ['**L. and S. Rudolph**', '**Bullock capitalists**', 'Self-employed middle cultivators as a rising political force'],
    ] },
    { t: 'strata', caption: 'A simplified post-land-reform ladder, drawn for answers. Its boundaries vary by state.', layers: [
      { title: 'Large and capitalist farmers', sub: 'Green Revolution belts; Jats, Patels, Kammas, Reddys' },
      { title: 'Middle peasants', sub: 'Gained from abolition of intermediaries; now the base of farmers\' politics' },
      { title: 'Small and marginal farmers, tenants', sub: 'Depend on wages and off-farm work' },
      { title: 'Landless labourers', sub: 'Heavily Dalit and adivasi; migrant and casual' },
    ] },
    { t: 'h3', text: 'Industrial class structure' },
    { t: 'table', head: ['Group', 'Who', 'Key thinkers'], rows: [
      ['Industrial bourgeoisie', 'Merchant groups such as Parsis, Marwaris, Gujaratis became industrialists', '**Bardhan:** dominant proprietary classes are industrial capitalists, rich farmers and professionals'],
      ['Formal workers', 'Protected minority', '**Holmstrom:** the organised sector as a **citadel**; workers inside are privileged'],
      ['Informal workers', 'Majority; casual, contract, home-based', '**Breman:** informalisation; Ahmedabad mills after closure. **Harriss-White:** India Working'],
      ['Early labour force', 'Mill workers tied to village and caste', '**Morris D. Morris** on commitment; **Chandavarkar** on jobbers and neighbourhood in Bombay'],
    ] },
    { t: 'p', text: '**Partha Chatterjee** later separated **corporate capital** from **non-corporate** petty production, where the state governs large numbers through welfare. Workers and their organisation are covered in soc-13 and soc-16.' },
    { t: 'h3', text: 'Middle classes' },
    { t: 'compare', columns: [
      { title: 'Old middle class', items: ['**B.B. Misra:** colonial education, law and bureaucracy created it', 'Led nationalism and reform', 'Nehruvian salaried class; public sector', 'Ethos of service, at least in self-image'] },
      { title: 'New middle class', items: ['Post-1991 private sector and IT', '**Leela Fernandes:** politics of consumption; defined by consumer aspiration', '**Pavan Varma:** retreat from social concern', '**Satish Deshpande:** a hegemonic class whose caste capital appears as merit'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Middle class is not a number', text: 'There is no single official size for India\'s middle class. Income-based estimates differ widely. Give definitions, not a figure you cannot source. Also avoid saying class replaced caste: Deshpande\'s work on the "general category" argues that upper castes turned caste advantage into seemingly casteless merit.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Tribes: "Is tribe a useful category?"; assimilation vs integration vs autonomy; why FRA and PESA fell short; development vs displacement with Niyamgiri or Narmada. Classes: does class explain agrarian India better than caste; the role of the new middle class in politics; why most workers are outside the citadel. Always end with a tension, such as a law granting rights that the state\'s development model takes away.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Lokur criteria: primitive traits, distinct culture, isolation, shyness of contact, backwardness.',
      'Ghurye: backward Hindus. Bose: Hindu method of absorption. Bailey: tribe-caste continuum. Sinha: Rajput myth.',
      'Elwin vs Ghurye; Nehru\'s Panchsheel is the integration line.',
      'Thorner: Malik, Kisan, Mazdoor. Beteille: caste, class, power. Patnaik: labour-exploitation criterion.',
      'Holmstrom: citadel. Fernandes: new middle class. Misra: colonial origin of the middle class.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper II, B(iii) and B(iv), from your upsc-syllabus.pdf, pp. 74-75' },
    { label: 'Ministry of Tribal Affairs reply, Rajya Sabha, 7 August 2024: ST population and PVTG count (read as a search excerpt, not opened)' },
    { label: 'Thinkers and books named here are from the standard literature and were not re-opened for this note. Use them as further reading, and check a book before quoting it.' },
  ],
  beyond: {
    refer: [
      { what: 'Xaxa Committee report, 2014', where: 'Ministry of Tribal Affairs', why: 'The main recent official assessment of tribal status. Check its data before citing.' },
      { what: 'Census 2011 ST tables', where: 'Census of India', why: 'State shares of ST population were not confirmed for this note, so take them from the tables.', url: 'https://censusindia.gov.in/' },
      { what: 'Standard depth: Xaxa, State, Society and Tribes; Beteille, Caste, Class and Power', where: 'Your library', why: 'Best depth for a 250-mark paper; notes only outline them.' },
    ],
    current: [
      { issue: 'Census 2027', link: 'Population enumeration is due in February 2027, with a reference date of 1 March 2027 (MHA, 2025-26 notifications). It will replace the 2011 tribal baseline.', source: 'Ministry of Home Affairs, as reported by Business Standard, January 2026', url: 'https://www.business-standard.com/india-news/census-2027-centre-notifies-first-phase-house-listing-april-1-126010701331_1.html' },
      { issue: 'PVTG enumeration', link: 'The Ministry of Tribal Affairs told Parliament in August 2024 that it had asked the Registrar General to consider counting PVTGs separately. Final treatment in the census was not confirmed.', source: 'Rajya Sabha reply', url: 'https://rsdebate.nic.in/bitstream/123456789/750936/1/PQ_265_07082024_U1899_p511_p515.pdf' },
      { issue: 'Labour Codes', link: 'The four Codes took effect on 21 November 2025. Use this in the industrial class debate on formal and informal workers.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2192463&reg=48&lang=2' },
    ],
  },
}
