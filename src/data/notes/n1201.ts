import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-01',
  summary: 'What makes Indian society distinctive: its diversity of language, religion and region, and its core institutions of caste, tribe, family, kinship and village, with the sociologists and data UPSC expects.',
  minutes: 20,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'GS I opens its society section with "salient features of Indian society, diversity of India". The aim is to explain how a society so varied holds together, and how old structures such as caste and patriarchy change without disappearing. Mains questions here are usually about **continuity and change**, so use both words in your answers.' },
    { t: 'wheel', caption: 'Salient features to name in an introduction', center: 'Indian society', spokes: ['Diversity with unity', 'Caste and hierarchy', 'Patriarchy', 'Joint family and kinship', 'Village and agrarian base', 'Tribal communities', 'Religious pluralism', 'Tradition with modernity'] },
    { t: 'note', kind: 'trap', title: 'Diversity is not division', text: '**Diversity** means difference, which can be neutral or rich. **Inequality** means ranked difference with unequal access. **Division** means that the difference has been turned into conflict. Do not treat them as the same word. **Unity** is also not uniformity: it means holding together while staying different.' },

    { t: 'h', text: 'Diversity in numbers' },
    { t: 'p', text: 'The figures below are from **Census 2011**, the latest completed census. **Census 2027** will update them.' },
    { t: 'table', caption: 'Religion, Census 2011 (share of population)', head: ['Religion', 'Share', 'Note'], rows: [
      ['Hindu', '79.8%', 'Majority overall, but a minority in some states and UTs'],
      ['Muslim', '14.2%', 'Largest minority; a majority in Lakshadweep and in Jammu and Kashmir'],
      ['Christian', '2.3%', 'A majority in Nagaland, Mizoram and Meghalaya'],
      ['Sikh', '1.7%', 'A majority in Punjab'],
      ['Buddhist', '0.7%', 'Ladakh, Sikkim, Arunachal, Maharashtra'],
      ['Jain', '0.4%', 'Lowest share of the six, with high literacy'],
    ] },
    { t: 'compare', columns: [
      { title: 'Language', items: ['**22** languages in the **Eighth Schedule**', '**121** languages counted in Census 2011', '**Hindi:** about 43.6% of speakers', '**11** classical languages (after five were added in October 2024)', '**Families:** Indo-Aryan, Dravidian, Austro-Asiatic, Sino-Tibetan'] },
      { title: 'Social groups', items: ['**SC:** 16.6%', '**ST:** 8.6%', '**PVTGs:** 75', 'OBC: no recent all-India count, as census has not counted them', 'Bihar\'s 2023 survey found 63% backward and extremely backward classes'] },
      { title: 'Other diversity', items: ['**Region:** ecological zones and food', '**Rural-urban:** 31.2% urban in 2011', '**Sex ratio:** 943 in 2011', '**Literacy:** 74.04% in 2011', '**Age:** a young population now starting to age'] },
    ] },
    { t: 'h3', text: 'What holds India together' },
    { t: 'list', items: [
      '**Geo-political:** the idea of Bharatvarsha, and the Constitution with one citizenship.',
      '**Cultural:** pilgrimage circuits such as Char Dham and Shakti Peethas, shared epics, Bhakti and Sufi traditions, and festivals.',
      '**Economic:** a national market, migration and jobs that mix people.',
      '**Institutional:** a single judiciary, All India Services, elections and the armed forces.',
      '**Accommodation:** linguistic states, Sixth Schedule, Article 371 provisions and minority rights under **Articles 29-30**.',
    ] },

    { t: 'h', text: 'Caste' },
    { t: 'p', text: '**Varna** is the four-fold textual scheme. **Jati** is the real, local, birth-based group, of which there are thousands. Questions often turn on this difference. **G.S. Ghurye** listed six features: segmental division, hierarchy, restrictions on feeding and social contact, civil and religious privileges and disabilities, restricted choice of occupation, and restricted marriage.' },
    { t: 'table', caption: 'Thinkers and concepts', head: ['Thinker', 'Idea', 'Use in answers'], rows: [
      ['**M.N. Srinivas**', '**Sanskritisation:** lower castes imitate upper-caste customs to climb. **Dominant caste:** power from numbers, land and politics. **Westernisation.**', 'Change happens within the system, as positional and not structural change'],
      ['**Louis Dumont**', '*Homo Hierarchicus*: purity and pollution is the core idea', 'Critics say this is too text-based'],
      ['**B.R. Ambedkar**', '*Annihilation of Caste* (1936): **graded inequality**, endogamy as the root', 'Caste is more than a division of labour; it is a division of labourers'],
      ['**André Béteille**', 'Caste, class and power have separated over time', 'Use it for land and politics in Tanjore'],
      ['**Yogendra Singh**', '*Modernization of Indian Tradition*', 'Tradition adapts rather than dying'],
    ] },
    { t: 'flow', caption: 'How caste has changed: its ritual side has weakened, but its political and economic side remains', steps: [
      { title: 'Ritual', sub: 'Occupational rules weaken with education and cities' },
      { title: 'Constitution', sub: 'Article 15 and Article 17 ban discrimination and untouchability' },
      { title: 'Reservation', sub: 'A new middle class among Dalits and OBCs' },
      { title: 'Politics', sub: 'Caste becomes a voting bloc and an interest group' },
      { title: 'Persistence', sub: 'Marriage, atrocities and manual scavenging remain' },
    ] },
    { t: 'p', text: 'Caste has not stayed only within Hinduism. Studies note caste-like groups among Muslims, Sikhs and Christians. Census counted all castes in **1931** for the last time. SECC 2011 caste data was not published. In **April 2025** the Union government decided to include caste in the next census, and it is planned for the second phase of Census 2027.' },

    { t: 'h', text: 'Tribes' },
    { t: 'list', items: [
      '**Constitution:** **Article 366(25)** defines STs as those notified under **Article 342**. The Constitution does not define "tribe" itself.',
      '**Lokur Committee (1965) criteria:** primitive traits, distinctive culture, geographical isolation, shyness of contact and backwardness. These are still widely quoted, and much criticised.',
      '**Regions:** the central belt (the largest numbers) and the Northeast (the highest share of population). **Bhils** are commonly cited as the largest group. **Mizoram and Lakshadweep** have the highest ST shares.',
      '**The debate:** Verrier Elwin favoured protection, with a degree of isolation. **Ghurye** called tribes "backward Hindus", favouring assimilation. Nehru\'s **Panchsheel for tribes** took a middle path of integration. Virginius Xaxa argues for looking at tribes through their own experience.',
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2019', text: 'UPSC asked about PVTGs: their presence in 18 states and one UT, stagnant or declining population as a criterion, the false number of 95, and Irular and Konda Reddi as examples. The official number is **75**. Criteria include pre-agricultural technology, low literacy, stagnant or falling population and a subsistence economy.' },

    { t: 'h', text: 'Family, kinship and marriage' },
    { t: 'compare', caption: 'Irawati Karve\'s classic contrast of kinship zones', columns: [
      { title: 'North India', items: ['Marriage outside the village and kin (**village exogamy**)', 'Cousin marriage is generally barred', 'Bride moves far and has low status at first', 'Strong patriarchal joint household'] },
      { title: 'South India', items: ['**Cross-cousin** and uncle-niece marriage in some groups', 'Bride often stays near kin', 'Women have relatively more support', 'Higher female autonomy in some measures'] },
    ] },
    { t: 'table', head: ['Feature', 'Pattern', 'Examples and change'], rows: [
      ['Descent', 'Mostly **patrilineal**. **Matrilineal** minority', '**Khasi, Garo** in Meghalaya; historically Nairs of Kerala. Matrilineal does not mean matriarchal, as men often still hold authority'],
      ['Family', 'Joint family as ideal; nuclear common', 'A.M. Shah cautions that households changed less, and more slowly, than the "joint to nuclear" story assumes'],
      ['Marriage', 'Endogamy of caste and religion, with exogamy of gotra and village', 'Inter-caste unions and later marriage are rising from a small base'],
      ['Patriarchy', 'Male control of property, labour and sexuality', 'Hindu Succession Amendment of 2005; *Vineeta Sharma* (2020)'],
    ] },

    { t: 'h', text: 'Village, class and region' },
    { t: 'strata', caption: 'A simplified picture of agrarian structure, after Daniel Thorner', layers: [
      { title: 'Malik', sub: 'Landowners who take rent and profit, often from dominant castes' },
      { title: 'Kisan', sub: 'Working peasant owners and tenants' },
      { title: 'Mazdoor', sub: 'Landless wage workers, often Dalit or Adivasi' },
    ] },
    { t: 'list', items: [
      '**Jajmani system:** W.H. Wiser described hereditary service relations between castes. It has declined with cash wages.',
      '**The "little republic" view:** colonial writers saw a self-sufficient village. Srinivas and later scholars showed that villages had always been linked to wider markets and states.',
      '**New class:** a growing middle class, but also large informal work. Class and caste often overlap, though not fully.',
    ] },

    { t: 'h', text: 'Census 2027' },
    { t: 'timeline', caption: 'Status as of the latest reports found (May 2026). Conducted under the Census Act, 1948.', items: [
      { when: '1 April-30 September 2026', what: '**Phase 1:** houselisting and housing census, with each state choosing 30 days. **Self-enumeration** is available for the first time.' },
      { when: 'February 2027', what: '**Phase 2:** population enumeration, including **caste** at jati level.' },
      { when: '1 March 2027', what: 'Reference date. **1 October 2026** for snow-bound parts of Ladakh, J&K, Himachal Pradesh and Uttarakhand.' },
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '(1) "Unity in diversity": is it still the right description, with examples of both strain and strength? (2) Has caste weakened or simply changed form? Use the flow above. (3) Should caste be enumerated? **For:** data for fair policy. **Against:** it could harden identities. (4) Are joint families disappearing? Use Shah\'s caution. (5) Tribal identity: assimilation, integration or autonomy. Use Elwin, Ghurye, Nehru and PESA.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Eighth Schedule: 22. Census languages: 121. Classical: 11.',
      'SC 16.6%; ST 8.6%; PVTGs 75; Hindu 79.8%; Muslim 14.2% (2011).',
      'Srinivas: Sanskritisation and dominant caste. Dumont: purity. Ambedkar: graded inequality.',
      'Article 366(25) and Article 342 for STs. Lokur 1965.',
      'Karve: North and South kinship. Khasi and Garo: matrilineal.',
      'Census 2027: reference date 1 March 2027.',
    ] },
  ],
  sources: [
    { label: 'Akashvani News: Census 2027 will start from 1 April', url: 'https://www.newsonair.gov.in/census-2027-will-start-from-1st-april' },
    { label: 'Akashvani News: Self-enumeration under Census 2027, April 2026', url: 'https://www.newsonair.gov.in/census-2027-over-5-72-lakh-households-have-availed-self-enumeration-facility-so-far' },
    { label: 'Policy Edge: RGI outlines two-phase method, caste enumeration confirmed', url: 'https://www.policyedge.in/p/caste-enumeration-confirmed-rgi-outlines-two-phase-methodology-for-census-2027' },
    { label: 'Drishti IAS: Census 2027 (secondary)', url: 'https://www.drishtiias.com/daily-updates/daily-news-analysis/census-2027-1/print_manually' },
    { label: 'Census of India 2011 data and standard sociology texts (Srinivas, Karve, Ghurye): from memory, for further reading, not re-opened for this note' },
    { label: 'UPSC Civil Services Prelims 2019, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'Census of India tables', where: 'Office of the Registrar General', why: 'For state-level figures on religion, language and SC/ST, and Census 2027 releases.', url: 'https://censusindia.gov.in/' },
      { what: 'NCERT Class XII, Indian Society', where: 'NCERT', why: 'A short reader for caste, tribe, family and village, in sociologists\' terms.', url: 'https://ncert.nic.in/textbook.php' },
    ],
    current: [
      { issue: 'Census 2027 and caste count', link: 'Houselisting ran from April to September 2026. Population enumeration with caste is due in February 2027, with a reference date of 1 March 2027.', source: 'Akashvani News', url: 'https://www.newsonair.gov.in/census-2027-will-start-from-1st-april' },
    ],
  },
}
