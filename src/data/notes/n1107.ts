import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-07',
  summary: 'India\'s first large empire: Chandragupta and Kautilya, Ashoka and his inscriptions, how the state worked, its art, and why it fell.',
  minutes: 25,
  hero: { file: 'Lion Capital of Ashoka 3.jpg', credit: 'Apurv013', license: 'CC0' },
  heroAlt: 'The Lion Capital of Ashoka from Sarnath',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The Mauryas ruled most of the subcontinent from about 322 to 185 BCE. They are unusually well documented, thanks to four strong sources. Each has limits, and UPSC tests whether you can tell them apart.' },
    { t: 'table', head: ['Source', 'What it is', 'Limit'], rows: [
      ['**Arthashastra**', 'Treatise on statecraft attributed to Kautilya; **rediscovered by R. Shamasastry in 1905 and published in 1909**', 'It says what should happen, and parts may be later than the Mauryas'],
      ['**Indica** of Megasthenes', 'Account by Seleucus\'s envoy at Pataliputra', 'The original is lost and survives in quotes in later Greek writers; some claims are mistaken'],
      ['**Ashoka\'s inscriptions**', 'The king\'s own words on rock and pillar', 'Show the ideals of the king, not always the practice'],
      ['Buddhist and Jain texts, Puranas, Mudrarakshasa', 'Later traditions', 'Written long after, with a religious slant'],
    ] },
    { t: 'img', pic: { file: 'Major Rock Edicts and Major Pillar Edicts by Devanampiya Piyadasi.jpg', credit: 'Natural Earth base map, Wikimedia contributors', license: 'CC BY-SA 3.0' }, caption: 'Findspots of the Major Rock Edicts and Major Pillar Edicts. Their spread is our best evidence for the reach of the empire.' },

    { t: 'h', text: 'The rulers' },
    { t: 'timeline', items: [
      { when: 'Chandragupta, c. 322-298 BCE', what: 'Overthrew Dhana Nanda with the help of **Chanakya**. Defeated **Seleucus Nicator** around 305 BCE and gained Arachosia, Gedrosia, Paropamisadae and Aria, in return for 500 elephants. Greek writers call him **Sandrocottus**. Jain tradition says he became a monk and died by sallekhana at **Shravanabelagola**.' },
      { when: 'Bindusara, c. 298-273 BCE', what: 'Known as **Amitraghata** (slayer of foes). Greek sources mention him asking Antiochus for sweet wine, dried figs and a sophist. He received the envoy **Deimachus** and favoured the **Ajivikas**.' },
      { when: 'Ashoka, c. 268-232 BCE', what: 'Viceroy at Taxila and Ujjain before taking the throne. Fought **Kalinga around 261 BCE**, the only conquest he records, and then turned to Dhamma. Held the Third Buddhist Council and sent missions abroad, including his son **Mahendra** and daughter **Sanghamitra** to Sri Lanka.' },
      { when: 'Later Mauryas, to 185 BCE', what: 'A series of weak rulers. **Pushyamitra Shunga** killed the last king, **Brihadratha**, during an army parade.' },
    ] },

    { t: 'h', text: 'How the state worked' },
    { t: 'strata', caption: 'A simplified view of the hierarchy. The Arthashastra lists many more officers.', layers: [
      { title: 'King', sub: 'Advised by the **mantriparishad**. Seven elements of the state (**saptanga**): king, ministers, territory, fort, treasury, army, allies.' },
      { title: 'Central officers', sub: '**Samaharta** (revenue), **Sannidhata** (treasury), and **adhyakshas** who headed departments, including sita (farms), panya (trade) and shulka (tolls). The **tirthas** were 18 top officials.' },
      { title: 'Provinces', sub: 'Led by **kumaras** or **aryaputras**: Taxila, Ujjain, Tosali, Suvarnagiri, plus the home region around Pataliputra.' },
      { title: 'Districts', sub: '**Pradeshika, Rajuka and Yukta**, as Ashoka\'s inscriptions show. Prelims 2025 asked their level.' },
      { title: 'Villages', sub: '**Gramika** led the village, with **gopa** in charge of a group of 5-10 villages, and **sthanika** above.' },
    ] },
    { t: 'compare', columns: [
      { title: 'Economy', items: ['State farms (**sita**) and control over mines', 'Land tax (**bhaga**) of about one-sixth', 'Punch-marked silver **pana**', 'Roads: the Uttarapatha royal highway', 'Guilds (shreni) and overseas trade'] },
      { title: 'City and army', items: ['**Nagaraka** ran the city', 'Megasthenes: **6 committees of 5 members** each at Pataliputra', 'Very large army with six wings', 'Elaborate spy network (**gudhapurushas**)'] },
      { title: 'Megasthenes\' claims', items: ['Described **seven castes** in India', 'Said there was no slavery, which is not accurate', 'Said people did not write, also doubtful', 'Praised the wooden palace at Pataliputra'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Do not mix these sources', text: 'Six committees and seven castes come from Megasthenes. The saptanga and adhyakshas come from the Arthashastra. Dhamma mahamattas and rajukas come from Ashoka\'s inscriptions. Questions often swap them. Also remember Kautilya\'s **mandala** theory: a neighbour is a likely enemy, and a neighbour\'s neighbour is a likely friend.' },
    { t: 'p', text: 'The old view saw a tightly centralised state in every corner. Historians such as **Romila Thapar** argue that the state controlled its core and trade routes strongly, while outer regions stayed more self-governing. The edicts themselves refer to forest peoples who were only loosely under control.' },

    { t: 'h', text: 'Ashoka\'s inscriptions' },
    { t: 'p', text: 'They use the title **Devanampiya Piyadasi** ("Beloved of the Gods, Pleasant to Behold"). **James Prinsep** deciphered Brahmi in the **1830s** (asked in Prelims 2016). Only the **Maski** and **Gujarra** inscriptions and a few others use the personal name Ashoka. **Kanganahalli**, in Karnataka, has a relief labelled **Ranyo Ashoka** with a portrait of the king (asked in Prelims 2019).' },
    { t: 'table', head: ['Type', 'Content and places'], rows: [
      ['**Major Rock Edicts** (14)', 'Moral and administrative. Girnar, Dhauli, Jaugada, Kalsi, Yerragudi, Mansehra, Shahbazgarhi, Sopara, Kandahar'],
      ['**Separate Kalinga Edicts**', 'Dhauli and Jaugada in Odisha. "All men are my children." These replace Edicts XI-XIII'],
      ['**Minor Rock Edicts**', 'Personal, and his Buddhist link. Maski, Gujarra, Sasaram, Rupnath, Brahmagiri, Bairat, Siddapur'],
      ['**Major Pillar Edicts** (7)', 'Late in reign. Topra and Meerut (moved to Delhi by Firoz Tughlaq), Kaushambi, Lauriya-Nandangarh, Lauriya-Araraj, Rampurva'],
      ['**Minor Pillar Edicts**', '**Rummindei (Lumbini)**: the village was made free of bali and paid only one-eighth bhaga. Also Nigali Sagar, Sarnath, Sanchi'],
    ] },
    { t: 'table', caption: 'The Major Rock Edicts most often asked about. Check I, II, V, XII and XIII first.', head: ['Edict', 'Content'], rows: [
      ['I', 'Bans some animal sacrifice; limits killing in the royal kitchen'],
      ['II', 'Medical care for humans and animals, also beyond his borders; names Cholas, Pandyas, Satyaputras, Keralaputras'],
      ['III', 'Officers tour every five years to teach Dhamma'],
      ['IV', 'Dhammaghosha, the sound of Dhamma, replaces Bherighosha, the war drum'],
      ['V', '**Dhamma mahamattas** appointed in his 13th regnal year'],
      ['VI', 'The king is always ready to hear the people\'s business'],
      ['VII', 'All sects should be free to live everywhere'],
      ['VIII', 'Dhamma tours replace royal hunting'],
      ['IX', 'Criticises popular rituals, and praises the ceremony of Dhamma'],
      ['X', 'Fame and glory matter less than following Dhamma'],
      ['XI', 'Explains Dhamma: respect elders, be kind to the weak'],
      ['XII', '**Religious tolerance**: praising one\'s own sect and blaming others harms one\'s own'],
      ['XIII', '**Kalinga War**: 100,000 killed, 150,000 deported; names Greek kings Antiochus, Ptolemy, Antigonus, Magas and Alexander'],
      ['XIV', 'Why the edicts were engraved'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2020 and 2022', text: 'In 2020, UPSC quoted the Rock Edict XII idea and asked which ruler said it. In 2022, UPSC paired edict sites with states: Dhauli with Odisha, Erragudi with Andhra Pradesh, Jaugada with Madhya Pradesh and Kalsi with Karnataka. Jaugada is actually in Odisha, and Kalsi is in Uttarakhand.' },
    { t: 'p', text: '**Languages and scripts:** mostly **Prakrit in Brahmi**. In the north-west the scripts are **Kharoshthi** (Shahbazgarhi and Mansehra). Kandahar has a **Greek and Aramaic** bilingual, and Kharoshthi is written right to left, unlike Brahmi.' },
    { t: 'h3', text: 'What Dhamma meant' },
    { t: 'p', text: 'Dhamma is Ashoka\'s term for a general moral code: respect for elders, kindness to slaves and animals, truthfulness, restraint and tolerance. It avoids Buddhist doctrine such as the Four Noble Truths. Historians still debate whether it was personal faith or a clever way to hold a diverse empire together. The best answer is that it was both.' },

    { t: 'h', text: 'Mauryan art' },
    { t: 'compare', columns: [
      { title: 'Court art', items: ['Monolithic **Chunar** sandstone pillars with a mirror-like polish', 'Capitals: Sarnath (four lions), Rampurva (bull), Lauriya-Nandangarh (single lion), Sankissa (elephant)', 'Palace at **Kumrahar**, Pataliputra', 'Stupas at Sanchi and Sarnath begun'] },
      { title: 'Popular art', items: ['**Yaksha** and **yakshi** figures', 'Didarganj Yakshi with a chauri (date debated)', 'Parkham Yaksha', 'Terracotta', 'Rock-cut elephant at Dhauli'] },
    ] },
    { t: 'img', pic: { file: 'Lomas Rishi Cave exterior.jpg', credit: 'Srijitakundan', license: 'CC BY-SA 4.0' }, caption: 'Lomas Rishi Cave in the Barabar Hills, Bihar. Its doorway copies timber in stone. The Barabar caves were gifted to the Ajivikas, which shows that royal patronage was not only Buddhist.' },
    { t: 'note', kind: 'exam', title: 'National emblem', text: 'India\'s emblem comes from the Sarnath capital, adopted on 26 January 1950. Only three lions are visible in the emblem, and the Mundaka Upanishad\'s "Satyameva Jayate" is written below. The bull and the horse appear on its abacus, along with the elephant and lion, and the wheel between them.' },

    { t: 'h', text: 'Why the empire fell' },
    { t: 'table', head: ['Explanation', 'Argument', 'Criticism'], rows: [
      ['Brahmanical reaction (H.P. Shastri)', 'Ashoka\'s policies upset brahmanas, leading to the Shunga coup', 'Ashoka respected brahmanas; the Shunga link is not sufficient'],
      ['Ashoka\'s pacifism (H.C. Raychaudhuri)', 'Non-violence weakened the army', 'He kept his army and warned forest people'],
      ['Economic strain (D.D. Kosambi)', 'Large armies and bureaucracy drained resources; debased coins', 'Evidence for debasement is limited'],
      ['Over-centralisation (Romila Thapar)', 'Loyalty was to the king, not to a state, so weak kings meant collapse', 'Generally accepted as one strong factor'],
      ['Other pressures', 'Provincial revolts, frontier attacks by Bactrian Greeks, spread of iron to outer regions', 'Likely contributing causes'],
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Link to GS II and GS IV', text: 'Ashoka provides examples of tolerance, welfare and ethics in governance. Kautilya\'s views on corruption and administration are useful in GS IV. Always add that these are ideals rather than a proven record.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Chandragupta: Seleucus, Megasthenes, Shravanabelagola.',
      'Kalinga: Rock Edict XIII. Tolerance: Rock Edict XII. Mahamattas: Rock Edict V.',
      'Lumbini: tax reduced to one-eighth. Prinsep deciphered Brahmi.',
      'District officers: pradeshika, rajuka, yukta.',
      'Fall: 185 BCE, Pushyamitra Shunga killed Brihadratha.',
    ] },
  ],
  sources: [
    { label: 'R.S. Sharma, Ancient India (NCERT), Ch 13-14' },
    { label: 'Wikipedia: Edicts of Ashoka', url: 'https://en.wikipedia.org/wiki/Edicts_of_Ashoka' },
    { label: 'UPSC Civil Services Prelims 2016, 2019, 2020, 2022, 2025, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
