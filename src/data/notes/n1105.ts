import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-05',
  summary: 'The sixteen great states of the Buddha\'s time, why Magadha defeated them all, and the second urbanisation that made it possible.',
  minutes: 17,
  hero: { file: 'I12 1karshapana Maghada 1ar (8482307176).jpg', credit: 'Jean-Michel Moullec', license: 'CC BY 2.0' },
  heroAlt: 'A silver punch-marked karshapana coin from Magadha',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'By the sixth century BCE, the tribal jana had given way to territorial states called **janapadas**, and the strongest were **mahajanapadas**, or great states. In this same period came coins, new towns, and new religions. It is often called the age of the **second urbanisation**, the first having been Harappan.' },
    { t: 'img', pic: { file: 'Mahajanapadas (c. 500 BCE).png', credit: 'Avantiputra7', license: 'CC BY-SA 3.0' }, caption: 'The mahajanapadas around 500 BCE. Note how many lie in the Ganga plain, with only Ashmaka south of the Vindhyas.' },

    { t: 'h', text: 'The sixteen mahajanapadas' },
    { t: 'p', text: 'The Buddhist **Anguttara Nikaya** gives the standard list. The Jain **Bhagavati Sutra** gives a different list of sixteen. Most were monarchies, and a few were **gana-sanghas**, governed by clan assemblies.' },
    { t: 'table', caption: 'Capitals are a very common Prelims fact. Learn them on a map.', head: ['State', 'Capital', 'Modern region', 'Rivers and notes'], rows: [
      ['Anga', 'Champa', 'Eastern Bihar', 'Annexed by Bimbisara'],
      ['Magadha', 'Rajagriha, later Pataliputra', 'South Bihar', 'Became the empire'],
      ['Kashi', 'Varanasi', 'Around Varanasi', 'Taken by Kosala, then Magadha'],
      ['Kosala', 'Shravasti (north), Kushavati (south)', 'Awadh, UP', 'River **Sarayu**; ruled by Prasenajit'],
      ['Vajji', 'Vaishali', 'North Bihar', 'Confederacy of 8 clans, incl. Licchavi, Videha, Jnatrika'],
      ['Malla', 'Kushinara, Pava', 'Gorakhpur area, UP', 'Gana-sangha; the Buddha died at Kushinara'],
      ['Chedi', 'Shuktimati', 'Bundelkhand', 'Yamuna region'],
      ['Vatsa', 'Kaushambi', 'Prayagraj area', 'Ruled by Udayana'],
      ['Kuru', 'Indraprastha', 'Delhi-Haryana', 'Hastinapura flood legend'],
      ['Panchala', 'Ahichchhatra, Kampilya', 'Western UP', 'North and south divisions'],
      ['Matsya', 'Viratanagara (Bairat)', 'Jaipur-Alwar', 'Later absorbed by Magadha'],
      ['Shurasena', 'Mathura', 'Braj', 'Ruler Avantiputra was a Buddhist follower'],
      ['Avanti', 'Ujjayini (north), Mahishmati (south)', 'Malwa', 'Rivers **Kshipra, Narmada**; Magadha\'s main rival'],
      ['Ashmaka', 'Potali or Paudanya', 'Godavari valley', 'River **Godavari**; the only one south of the Vindhyas'],
      ['Gandhara', 'Taxila', 'NW Pakistan', 'Learning centre; fell to Persia'],
      ['Kamboja', 'Rajapura', 'NW frontier', 'Known for horses'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2025', text: 'UPSC paired territorial regions with rivers: Asmaka and Godavari, Kamboja and Vipas, Avanti and Mahanadi, Kosala and Sarayu. Two are right and two are wrong. Learning the rivers along with the capitals would have solved it.' },

    { t: 'h', text: 'Gana-sanghas: the "republics"' },
    { t: 'compare', columns: [
      { title: 'Monarchies', items: ['Hereditary king', 'Magadha, Kosala, Vatsa, Avanti', 'Sanskritised, with priests giving ritual legitimacy', 'Standing armies and tax systems', 'Expanding territories'] },
      { title: 'Gana-sanghas', items: ['Rule by clan heads called rajas, meeting in an assembly', 'Vajji, Malla, Shakya, Koliya', 'Debate and votes using **salakas** (voting sticks)', 'Slaves and labourers had no voice', 'Tended to be in the Himalayan foothills'] },
    ] },
    { t: 'p', text: 'Both the Buddha and Mahavira came from such clans, which might explain the debate-based rules of the Buddhist sangha. In the Mahaparinibbana Sutta, the Buddha said the Vajjis would remain strong as long as they kept meeting in concord. Calling them republics needs a caveat: they were **oligarchies of a clan elite**.' },

    { t: 'h', text: 'Why Magadha won' },
    { t: 'flow', caption: 'Resources paid for armies, and ambitious rulers used them.', steps: [
      { title: 'Land', sub: 'Fertile, rain-fed rice plains yielded large surpluses' },
      { title: 'Iron', sub: 'Mines near Rajgir and Chota Nagpur equipped tools and weapons' },
      { title: 'Rivers', sub: 'Ganga, Son and Gandak moved troops and traded goods' },
      { title: 'Elephants', sub: 'Eastern forests supplied a major military edge' },
      { title: 'Rulers', sub: 'Marriage, war and annexation built the state' },
    ] },
    { t: 'list', items: [
      '**Capitals:** Rajagriha was protected by five hills, and Pataliputra stood where the Ganga, Son and Gandak meet. Each was a natural fort.',
      '**Society:** Magadha lay outside the older Brahmanical heartland, so it may have been more open. Buddhists and Jains also found patrons here.',
      '**Weapons:** Ajatashatru is credited with the **mahashilakantaka** (a stone-throwing engine) and **rathamusala** (a chariot with blades).',
    ] },
    { t: 'timeline', caption: 'Dynasties of Magadha. Dates are traditional and approximate.', items: [
      { when: 'Haryanka, c. 544-413 BCE', what: '**Bimbisara** annexed Anga and used marriages with Kosala, Vaishali and Madra. He sent his physician **Jivaka** to treat Avanti\'s King Pradyota. **Ajatashatru** killed his father, defeated Kosala and destroyed the Vajji confederacy after a long war. **Udayin** founded Pataliputra.' },
      { when: 'Shishunaga, c. 413-345 BCE', what: '**Shishunaga** ended Avanti\'s power, and with it the long rivalry. **Kalashoka** convened the Second Buddhist Council at Vaishali.' },
      { when: 'Nanda, c. 345-322 BCE', what: '**Mahapadma Nanda**, of low birth by tradition, was called **ekarat** (sole ruler) and **sarva-kshatrantaka** (destroyer of all kshatriyas). He conquered Kalinga. **Dhana Nanda** ruled when Alexander reached the Beas, and his huge army may have deterred the Greeks.' },
    ] },
    { t: 'note', kind: 'trap', title: 'Not all at once', text: 'Do not place Bimbisara in the Nanda dynasty, nor Pataliputra\'s foundation under Bimbisara. Udayin founded it. Also, Kalashoka here is not Ashoka. He is sometimes called Kakavarna.' },

    { t: 'h', text: 'The second urbanisation' },
    { t: 'p', text: 'Towns appeared in the Ganga plain from about the sixth century BCE. **Northern Black Polished Ware (NBPW)**, a glossy luxury pottery, marks these settlements. **Punch-marked coins** of silver and copper, called **karshapana**, were stamped with symbols but no text, and they are the earliest coinage in India.' },
    { t: 'img', pic: { file: 'Magadha kingdom coin Circa 350 BC AR Karshapana.jpg', credit: 'CNG Coins', license: 'CC BY-SA 3.0' }, caption: 'A Magadhan silver karshapana. Each symbol was punched separately, which is why the coins are called "punch-marked".' },
    { t: 'table', head: ['Change', 'Evidence', 'Why it matters'], rows: [
      ['Farming surplus', 'Wet-rice cultivation, wider use of iron tools', 'Fed towns and paid taxes'],
      ['Money and trade', 'Punch-marked coins; merchants called setthis', 'Long-distance trade grew'],
      ['Crafts', 'Guild-like groups (shreni)', 'Occupational identity grew'],
      ['Writing returns', 'Brahmi in Ashoka\'s time; records of earlier use are debated', 'Administration expanded'],
      ['Tax', 'Bali, bhaga, shulka were regular', 'Funded armies and officers'],
    ] },
    { t: 'h3', text: 'Foreign contact in the north-west' },
    { t: 'list', items: [
      '**Persia:** Cyrus and then **Darius I** (about 518 BCE) took Gandhara and the Indus region, and it became a rich province. Contact helped spread the **Kharoshthi** script, derived from Aramaic.',
      '**Alexander:** He defeated **Porus** on the Jhelum (Hydaspes) in **326 BCE**. His troops refused to cross the **Beas**. He left soon after and died in 323 BCE. The direct political effect was limited, but it opened routes and Greek accounts.',
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'The two standard questions', text: 'Why did Magadha rise? Answer with geography, resources, military and leadership, then close by saying no single factor explains it. Were the gana-sanghas democracies? Say they were deliberative but limited to a clan elite.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Only mahajanapada south of the Vindhyas: Ashmaka, on the Godavari.',
      'Anguttara Nikaya is the Buddhist list; Bhagavati Sutra is the Jain list.',
      'Haryanka, then Shishunaga, then Nanda, then Maurya.',
      'Pataliputra: founded by Udayin. Sarva-kshatrantaka: Mahapadma Nanda.',
      'NBPW and punch-marked coins mark the second urbanisation.',
    ] },
  ],
  sources: [
    { label: 'R.S. Sharma, Ancient India (NCERT), Ch 10-12' },
    { label: 'Wikipedia: Mahajanapadas', url: 'https://en.wikipedia.org/wiki/Mahajanapadas' },
    { label: 'Wikipedia: Haryanka dynasty', url: 'https://en.wikipedia.org/wiki/Haryanka_dynasty' },
    { label: 'UPSC Civil Services Prelims 2025, GS Paper I, Q17', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
