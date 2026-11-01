import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-10',
  summary: 'Caste through Ghurye, Srinivas, Dumont and Beteille: its features, untouchability, dominant caste, how caste is changing, and caste in politics. Paper II, B(ii), with links to C(vii).',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Caste is the most studied institution in Indian sociology. The key debate is simple to state: is caste a **system of ideas** (purity and pollution), a **system of power and resources**, or now mainly a **political identity**? No single view is enough. A good answer shows who is speaking, from which position, and at what time.' },

    { t: 'h', text: 'Varna and jati' },
    { t: 'compare', caption: 'Most Indian caste life runs on jati, not varna. Do not treat them as the same.', columns: [
      { title: 'Varna', items: ['Four-fold textual model', 'All-India, a fixed scheme', 'Brahmin, Kshatriya, Vaishya, Shudra', 'Untouchables are outside it'] },
      { title: 'Jati', items: ['Thousands of local endogamous groups', 'Regional, and rank can shift', 'Named by occupation, region, lineage', 'What people actually live by'] },
    ] },

    { t: 'h', text: 'B(ii)(a): the four named perspectives' },
    { t: 'table', caption: 'Learn this as a whole. Examiners reward contrast between scholars.', head: ['', 'Ghurye', 'Srinivas', 'Dumont', 'Beteille'], rows: [
      ['Approach', 'Indological, historical', 'Field view, structural-functional', 'Structuralist, ideological', 'Weberian, comparative'],
      ['Key work', 'Caste and Race in India (1932)', 'Caste in Modern India (1962)', 'Homo Hierarchicus (1966; English 1970)', 'Caste, Class and Power (1965)'],
      ['Core idea', 'Six features; endogamy holds it together', 'Local hierarchy; mobility; dominant caste', 'Pure and impure; hierarchy over power', 'Caste, class and power separate'],
      ['Field', 'Texts, census, some ethnography', 'Coorg, Rampura', 'Pramalai Kallar in Tamil Nadu; Sanskrit sources', 'Sripuram, Tanjore'],
      ['Main critique', 'Upper-caste textual lens', 'Consensus view; assumes Brahmin model', 'Top-down; ignores power and Dalit views', 'Understates caste\'s persistence; less on gender'],
    ] },
    { t: 'h3', text: 'Ghurye' },
    { t: 'p', text: 'Ghurye said no short definition would work, so he gave features (below). He traced caste to Brahmin ideas of purity in the Indo-Aryan culture of the Gangetic plain. He also noted that the sub-caste is the true endogamous unit, and that caste solidarity was growing under colonial rule.' },
    { t: 'h3', text: 'Srinivas' },
    { t: 'p', text: 'Srinivas stressed that caste is **local, flexible and changing**. Ranks are vague in the middle, which leaves room for mobility. He introduced **Sanskritisation** in his Coorg study (1952), having first used "Brahminisation". He later added that the model could be Kshatriya, Vaishya or the locally dominant caste. **Critique:** It legitimises upper-caste norms. It can make women\'s lives more restricted, as it often means tighter control over their conduct. It changes position, not structure. **Hardiman** shows that Adivasi reform in the Devi movement also had a protest side.' },
    { t: 'h3', text: 'Dumont' },
    { t: 'list', items: [
      '**Ideology first:** caste is a state of mind, based on the opposition of **pure and impure**.',
      '**Hierarchy:** the Brahmin ranks above the king. Status **encompasses** power, so ritual stands above politics.',
      '**Holism versus individualism:** India values the whole (**Homo Hierarchicus**), while the West values the individual (**Homo Aequalis**).',
      '**Renouncer:** the one individual outside the social order.',
      '**Modern change:** **substantialisation**, as castes behave like separate blocs in competition, instead of relational parts.',
    ] },
    { t: 'compare', caption: 'Dumont is the most criticised, so you must have these replies ready.', columns: [
      { title: 'Power and region', items: ['**Berreman:** the "Brahmanical view" of caste; caste is domination, like US race', '**Dipankar Gupta:** many hierarchies, not one ideology', '**Dirks, Quigley:** the king was central', '**Raheja:** the dominant caste, not the Brahmin, can be the centre of ritual'] },
      { title: 'View from below', items: ['**Mencher** (1974): caste seen from below is exploitation', '**Marriott:** transactions decide rank', '**Moffatt:** Dalits share the ideas, a consensus view', '**Gopal Guru, Kancha Ilaiah:** Dalit-Bahujan critique of consensus'] },
    ] },
    { t: 'h3', text: 'Beteille' },
    { t: 'p', text: 'In **Sripuram** (Tanjore), Beteille found that **status, class and power**, once held together by Brahmins, had come apart. Land passed to non-Brahmins, and politics moved to numerically strong castes, and later Adi-Dravidas. Caste inequality moved from **cumulative** to more **dispersed**. Beteille also separates **caste as a system** (declining) from **caste as identity** (persisting). **Critique:** Marxists see class under-theorised, and Dalit scholars doubt the speed of the change.' },

    { t: 'h', text: 'B(ii)(b): features of the caste system' },
    { t: 'table', caption: 'Ghurye\'s six features. Add present status, so that it is not just a list.', head: ['Feature', 'Meaning', 'Today'], rows: [
      ['Segmental division', 'Birth-based groups with their own rules', 'Identity persists'],
      ['Hierarchy', 'Graded rank, with Brahmins at the top', 'Contested; less clear in the middle'],
      ['Restrictions on food and social contact', 'Rules on commensality', 'Weaker in cities, yet alive in rural areas'],
      ['Civil and religious disabilities', 'Temples, wells, streets denied', 'Illegal; still reported'],
      ['Lack of free choice of occupation', 'Hereditary work', 'Much weakened, but sanitation work remains caste-marked'],
      ['Restrictions on marriage', 'Endogamy', 'The most resilient feature'],
    ] },
    { t: 'list', items: [
      '**Other definitions:** **Bougle:** repulsion, hierarchy, hereditary specialisation. **Hutton** (1946): functions of caste. **Hocart:** kingship and ritual. **Risley:** race. **Nesfield:** occupation.',
      '**Ambedkar** (Castes in India, 1916): **endogamy** is the essence. A caste is an enclosed class. Sati, enforced widowhood and child marriage arose to preserve it, so caste and gender are bound together. He called the system **graded inequality**.',
      '**Comparison:** **Oliver Cox** rejects caste-race parallels, while **Berreman** supports them.',
      '**Beyond Hindus:** **Imtiaz Ahmad** (1973) on Muslims (Ashraf, Ajlaf, Arzal). Dalit Christians and Mazhabi Sikhs show caste across faiths.',
    ] },

    { t: 'h', text: 'B(ii)(c): untouchability' },
    { t: 'table', caption: 'Forms. NCERT sorts them into three dimensions: exclusion, humiliation-subordination and exploitation.', head: ['Dimension', 'Forms', 'Example'], rows: [
      ['Exclusion', 'Bar on water, temple, shops, housing, school seating', 'Separate cups in tea stalls; midday meal segregation'],
      ['Humiliation and subordination', 'Removing footwear, standing before others, bar on riding a horse', 'Attacks on Dalit grooms'],
      ['Exploitation', 'Forced labour, low pay, "unclean" jobs', 'Manual scavenging; carcass removal'],
    ] },
    { t: 'table', caption: 'Perspectives on untouchability.', head: ['View', 'Thinker', 'Claim'], rows: [
      ['Moral reform', '**Gandhi**', 'A sin within Hinduism; "Harijan"; change the upper caste heart'],
      ['Structural', '**Ambedkar** (The Untouchables, 1948; Annihilation of Caste, 1936)', 'Origin in "broken men" and beef-eating; the fix is to destroy caste through law, politics and conversion'],
      ['Ideological', '**Dumont**', 'Necessary opposite of Brahmin purity'],
      ['Class', '**Marxist:** Omvedt, Teltumbde', 'Untouchability serves labour control'],
      ['Lived experience', '**Gopal Guru**, Sharmila Rege, Dalit autobiography', 'Humiliation is the core experience; Dalit women face both caste and patriarchy'],
    ] },
    { t: 'p', text: '**Law:** **Article 17**; **Protection of Civil Rights Act** (1955, renamed in 1976); **SC/ST (Prevention of Atrocities) Act 1989** and its 2015 and 2018 amendments; **Prohibition of Employment as Manual Scavengers Act 2013**. **Evidence:** **Shah, Mander, Thorat, Deshpande and Baviskar** (Untouchability in Rural India, 2006) surveyed villages across 11 states. In **Sukanya Shantha** (2024), the Supreme Court struck down caste-based work in prisons.' },

    { t: 'h', text: 'Dominant caste' },
    { t: 'flow', caption: 'Srinivas first wrote of this after Rampura (1955, 1959). A caste can be dominant without being ritually highest.', steps: [
      { title: 'Numbers', sub: 'Numerically strong locally' },
      { title: 'Land', sub: 'Sizeable land ownership' },
      { title: 'Ritual', sub: 'A fairly high place in the local hierarchy' },
      { title: 'Education and jobs', sub: 'Western education, administration' },
      { title: 'Urban income', sub: 'Added later, as change spreads' },
    ] },
    { t: 'list', items: [
      '**Examples:** Jats (Haryana, west UP), Patidars (Gujarat), Marathas (Maharashtra), Reddys and Kammas (Andhra), Vokkaligas and Lingayats (Karnataka), Yadavs (parts of Bihar and UP).',
      '**Critique:** **S.C. Dube** says power rests with dominant families, and factions within a caste. **T.K. Oommen** (1970) questions the concept. It mixes many criteria, and it describes rather than explains.',
      '**Today:** some dominant castes now seek reservation, a case of **relative deprivation**: Patidars (2015), Jats (2016), Marathas. The Supreme Court struck down Maratha quota in **Jaishri Patil** (2021).',
    ] },

    { t: 'h', text: 'How caste is changing' },
    { t: 'table', head: ['Process', 'Thinker', 'Argument'], rows: [
      ['Sanskritisation and Westernisation', 'Srinivas', 'Cultural mobility, not change in structure'],
      ['Caste associations', 'Rudolph and Rudolph (1967)', 'Tradition adapts, and becomes a modern tool'],
      ['Substantialisation', 'Dumont', 'Vertical ranking gives way to horizontal blocs'],
      ['Secularisation of caste', '**D.L. Sheth** (1999)', 'Ritual weakens, and a new middle class emerges'],
      ['Obituary thesis', 'Srinivas (2003)', 'Caste as a system is dying, though identity lives'],
      ['Persistence', '**Thorat and Attewell** (2007); **Deshpande**; **Teltumbde**', 'Job market discrimination; upper castes see themselves as "casteless"'],
      ['Dalit capital', '**Kapur, Babu and Prasad** (Defying the Odds, 2014); DICCI', 'Market opens gaps, yet barriers remain'],
    ] },

    { t: 'h', text: 'Caste and politics' },
    { t: 'timeline', caption: 'Caste in politics, across a century.', items: [
      { when: '1916-1920s', what: 'Justice Party; non-Brahmin claims in Madras.' },
      { when: '1932', what: '**Poona Pact:** reserved seats replace Ambedkar\'s demand for a separate electorate.' },
      { when: '1950', what: 'Constitution: Articles 16(4), 17, 46, 330, 332. Article 15(4) was added in 1951.' },
      { when: '1970', what: '**Rajni Kothari** (Caste in Indian Politics): politics changes caste as much as caste shapes politics. Secular, integrative and consciousness aspects.' },
      { when: '1980-1990', what: '**Mandal report** (1980), implemented by V.P. Singh (1990).' },
      { when: '1984', what: '**Kanshi Ram** founds the BSP, after BAMCEF and DS4.' },
      { when: '1992', what: '**Indra Sawhney:** 27% OBC quota upheld, 50% limit, creamy layer.' },
      { when: '2022-2024', what: '**Janhit Abhiyan** (2022) upheld the EWS quota. **Davinder Singh** (2024) allowed sub-classification of SCs.' },
    ] },
    { t: 'list', items: [
      '**Rudolphs:** mobilisation moves from vertical to horizontal, then differential.',
      '**Srinivas:** vote bank. **Jaffrelot:** the "silent revolution" of lower castes. **Yogendra Yadav:** second democratic upsurge.',
      '**Is it good for democracy?** One view: caste gives voice and representation. The other: it hardens identity, and benefits the top of each group. **Beteille** warns against confusing caste quotas with equality. Ambedkar sought annihilation, not caste pride.',
      '**Caste conflict (C(vii)(d)):** Kilvenmani (1968), Karamchedu (1985), Khairlanji (2006), Una (2016), Bhima Koregaon (2018). Land, dignity and assertion drive these. **Teltumbde** (The Persistence of Caste, 2010) reads Khairlanji as a case.',
    ] },
    { t: 'note', kind: 'trap', title: 'Common errors', text: 'Do not credit **Dumont** with Sanskritisation or **Srinivas** with substantialisation. **Graded inequality** is Ambedkar. **Dominant** is not the same as high-ranked. **Mandal** was appointed in 1979, reported in 1980 and implemented in 1990. Keep the **1955 Act** apart from the **1989 Act**.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Compare Dumont with Beteille or Srinivas. Discuss whether caste is dying, using Srinivas (2003) against Thorat and Teltumbde. Analyse dominant caste quota demands. Assess caste census debates and caste in politics. Bring in women through Ambedkar and Rege. Link to UGC equity rules for discrimination on campus.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Ghurye: six features. Bougle: three principles. Ambedkar: endogamy, graded inequality.',
      'Dumont: pure and impure, encompassing, substantialisation.',
      'Srinivas: Sanskritisation, dominant caste, vote bank.',
      'Beteille: Sripuram; status, class and power.',
      'Berreman, Gupta and Mencher: critics of consensus.',
      'Kothari: Caste in Indian Politics. Rudolphs: caste associations.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper II, B(ii), from your upsc-syllabus.pdf (page 74)' },
    { label: 'News On AIR, Supreme Court stays UGC\'s new equity regulations, 29 January 2026', url: 'https://www.newsonair.gov.in/supreme-court-stays-ugcs-new-equity-regulations' },
    { label: 'Rural Voice, Next Census to be held in 2027 with caste enumeration, June 2025', url: 'https://eng.ruralvoice.in/next-census-to-be-held-in-2027-with-caste-enumeration-central-government-issues-notification' },
    { label: 'Reference for further reading, not checked line by line: Srinivas, Caste in Modern India; Dumont, Homo Hierarchicus; Beteille, Caste, Class and Power; Gupta (ed.), Social Stratification; NCERT Class XII, Indian Society' },
  ],
  beyond: {
    refer: [
      { what: 'NCERT Class XII, Indian Society', where: 'NCERT textbook site', why: 'Clear statement of caste and untouchability dimensions.', url: 'https://ncert.nic.in/textbook.php' },
      { what: 'Crime in India, chapter on crimes against SCs and STs', where: 'National Crime Records Bureau', why: 'Numbers change each year, so check before citing.', url: 'https://www.ncrb.gov.in/' },
    ],
    current: [
      { issue: 'Caste enumeration in Census 2027', link: 'Notified in June 2025, with reference date 1 March 2027. First caste count since 1931, apart from SECC 2011. Connects to caste politics and sub-classification.', source: 'Rural Voice', url: 'https://eng.ruralvoice.in/next-census-to-be-held-in-2027-with-caste-enumeration-central-government-issues-notification' },
      { issue: 'UGC equity regulations', link: 'The Supreme Court held the 2026 rules in abeyance on 29 January 2026, and the 2012 rules continue. Connects to campus discrimination. Check the latest status.', source: 'News On AIR', url: 'https://www.newsonair.gov.in/supreme-court-stays-ugcs-new-equity-regulations' },
    ],
  },
}
