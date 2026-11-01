import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-10',
  summary: 'The Tamil country at the start of the historical age: three crowned kingdoms, a remarkable poetry, Roman trade and a society described by its own poets.',
  minutes: 18,
  hero: { file: 'Thiruvalluvar Statue, Kanyakumari Beach.jpg', credit: 'N. S. Vincent', license: 'CC0' },
  heroAlt: 'The Thiruvalluvar statue at Kanyakumari',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The far south is known as **Tamilakam**, and the early historical period there, about 300 BCE to 300 CE, is named after the **Sangam** poems. Sangam means an assembly of poets. Tradition speaks of three such academies at Madurai and elsewhere, with mythically long dates. Historians accept the poems, not the legend.' },
    { t: 'p', text: 'Before this came the **Megalithic** phase, known from large stone burials from about 1000 BCE. These people used iron and black-and-red ware, and practised farming, hunting and fishing. Sites such as **Adichanallur**, **Brahmagiri** and **Mangadu** belong to this tradition.' },
    { t: 'img', pic: { file: 'Keeladi Archaeological Excavation Site, Tamil Nadu.jpg', credit: 'Saif Arash', license: 'CC BY 4.0' }, caption: 'Excavation at Keeladi, near Madurai, on the Vaigai river. Finds include brick structures and Tamil-Brahmi on pottery, and their dating is debated.' },

    { t: 'h', text: 'Three kingdoms' },
    { t: 'table', caption: 'The most testable table. Ashoka\'s Rock Edicts II and XIII also name these kingdoms, and Kharavela\'s inscription mentions a Tamil confederacy.', head: ['', 'Chera', 'Chola', 'Pandya'], rows: [
      ['Region', 'Kerala and western Tamil Nadu', 'Kaveri delta', 'Southern tip'],
      ['Capital', 'Vanji (Karur, by some)', 'Uraiyur, then Puhar', 'Madurai'],
      ['Port', 'Muziris, Tondi', 'Puhar (Kaveripattinam)', 'Korkai, Saliyur'],
      ['Emblem', 'Bow', 'Tiger', 'Fish'],
      ['Key ruler', '**Senguttuvan** (the Red Chera)', '**Karikala** (Battle of Venni)', '**Nedunjeliyan** (Battle of Talaiyalanganam)'],
      ['Remember', 'Pattini cult of Kannagi', 'Kallanai on the Kaveri, by tradition', 'Pearl fishery'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2023 and 2026', text: 'In 2023, Korkai, Poompuhar and Muchiri were asked as ports. In 2026, UPSC paired Senguttuvan with Chera, Udiyanjeral with Chola and Nedunjeliyan with Pandya. Udiyanjeral was a Chera, so that pair is wrong. Do not stop at the well-known kings.' },

    { t: 'h', text: 'Sangam literature' },
    { t: 'compare', columns: [
      { title: 'Eighteen Greater Texts', items: ['**Ettuthokai:** 8 anthologies, incl. Akananuru, Purananuru, Kuruntokai, Natrinai', '**Pattuppattu:** 10 long poems, incl. Maturaikkanci, Pattinappalai'] },
      { title: 'Eighteen Lesser Texts', items: ['**Tirukkural** by Tiruvalluvar: ethics, polity and love', 'Naladiyar', 'Generally post-Sangam'] },
      { title: 'Grammar and epics', items: ['**Tolkappiyam:** oldest surviving Tamil grammar, by Tolkappiyar', '**Silappatikaram** by Ilango Adigal: Kannagi', '**Manimekalai** by Sittalai Sattanar: a Buddhist epic', 'Epics are post-Sangam'] },
    ] },
    { t: 'p', text: 'Poems are divided into **akam** (inner: love) and **puram** (outer: war and public life). In contrast with Sanskrit\'s ritual focus, these poems talk about farmers, fishers, soldiers and bards. A **Prelims 2022** question tested the point that Sangam poems refer to material culture and the warrior ethic, and that the varna idea was known to the poets.' },
    { t: 'table', caption: 'Five landscapes, or tinai. Each one suggests a way of life and a mood in love poetry.', head: ['Tinai', 'Landscape', 'People and work', 'Mood'], rows: [
      ['Kurinji', 'Hills', 'Hunters, gatherers', 'Union'],
      ['Mullai', 'Forest, pasture', 'Herders', 'Patient waiting'],
      ['Marutam', 'Riverine farmland', 'Ploughmen', 'Infidelity and quarrels'],
      ['Neytal', 'Coast', 'Fishers, salt makers', 'Pining'],
      ['Palai', 'Arid land', 'Robbers, warriors', 'Separation'],
    ] },
    { t: 'note', kind: 'trap', title: 'Vattakirutal', text: 'Prelims 2023 asked about this term. It refers to a king defeated in battle who starves himself to death. This shows the strong warrior code in **puram** poetry. Do not confuse it with Jain sallekhana, although the act is similar in form.' },

    { t: 'h', text: 'Society and economy' },
    { t: 'list', items: [
      '**Polity:** Kings, called **vendar**, ruled with chiefs called **velir**. Chiefs such as the "seven patrons" (kadai ezhu vallal) are remembered for generosity. Assemblies include the **manram**, and the **avai** was the royal court.',
      '**Society:** Divided by landscape and occupation more than by the four-varna system at first. Words for groups include **arasar** (rulers), **vellalar** (rich farmers), **kadaisiyar** (agricultural labourers) and **panar** (bards).',
      '**Brahmanas** appear in the poems, along with some Vedic rituals, showing growing northern contact.',
      '**Women:** Women poets are known, such as **Avvaiyar**, Nachchellaiyar and Kakkaipadiniyar. Widowhood was harsh.',
      '**Religion:** **Murugan** (Seyon) was the leading god. The hero stones (**nadukal**) honoured warriors who died in battle.',
    ] },
    { t: 'h3', text: 'Trade with Rome' },
    { t: 'p', text: 'Roman gold coins found in Tamil Nadu and Kerala confirm the trade. Pepper, pearls and beryl went out, and Roman coins, wine and pottery came in. Excavations at **Arikamedu**, near Puducherry, revealed amphorae, a Roman-style warehouse and **Arretine ware**. The **Periplus** and Pliny both describe these routes. **Pattanam**, in Kerala, is often linked to ancient Muziris.' },
    { t: 'note', kind: 'exam', title: 'Beware of absolute statements', text: 'Options that call Sangam society casteless, or those that say it had a fully developed varna system, are both likely to be wrong. The safer view is that varna ideas were known, but social order rested on local occupation and rank.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'The angle to prepare', text: 'Explain Sangam literature as a source for social history, and show the link between ecology and culture through the tinai. You can use the Kural in GS IV answers on ethics in public life.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Chera bow, Chola tiger, Pandya fish.',
      'Korkai: Pandya. Puhar: Chola. Muziris: Chera.',
      'Akam love, puram war. Five tinai.',
      'Tolkappiyam: grammar. Kural: ethics. Silappatikaram: Kannagi. Manimekalai: Buddhist.',
      'Vattakirutal: defeated king starves himself.',
    ] },
  ],
  sources: [
    { label: 'R.S. Sharma, Ancient India (NCERT), Ch 17. Karikala, Arikamedu and Muziris were checked in the OCR text' },
    { label: 'Wikipedia: Sangam literature and Sangam period', url: 'https://en.wikipedia.org/wiki/Sangam_period' },
    { label: 'UPSC Civil Services Prelims 2022, 2023, 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
