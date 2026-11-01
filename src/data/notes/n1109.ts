import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-09',
  summary: 'The Guptas and their successors: conquests, inscriptions, feudal trends, science and art, plus Harsha, the Chalukyas and the Pallavas.',
  minutes: 24,
  hero: { file: 'Iron Pillar, Delhi, May 2008.jpg', credit: 'Mark A. Wilson', license: 'Public domain' },
  heroAlt: 'The rust-resistant Iron Pillar at Mehrauli, Delhi',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The Guptas ruled from about 319 to 550 CE. Older books call this a "Golden Age". That is true of literature, science and art, but historians also point to declining towns and trade, more land grants, and a harsher position for some groups. UPSC tends to reward this balanced view.' },
    { t: 'timeline', items: [
      { when: 'Chandragupta I, c. 319-335', what: 'Married the Licchavi princess **Kumaradevi**, and took the title **Maharajadhiraja**. The Gupta era starts in 319-320 CE.' },
      { when: 'Samudragupta, c. 335-375', what: 'Known from **Harisena\'s Prayag Prashasti**, on the Allahabad pillar. Conquered kings in Aryavarta and defeated then reinstated kings of the south. Called "Indian Napoleon" by V.A. Smith. Coins show him playing the veena.' },
      { when: 'Chandragupta II, c. 380-415', what: '**Vikramaditya**. Defeated the Western Kshatrapas, and made Ujjain a second capital. Married his daughter **Prabhavati** to the Vakataka line. Chinese pilgrim **Fa-hien** visited. Kalidasa is traditionally placed at his court.' },
      { when: 'Kumaragupta I, c. 415-455', what: 'Linked to the foundation of **Nalanda** under the title Shakraditya.' },
      { when: 'Skandagupta, c. 455-467', what: 'Repelled the **Hunas**. His Junagadh inscription records the repair of the **Sudarshana lake** by his governor Parnadatta.' },
      { when: 'Decline, by c. 550', what: 'Huna invasions under Toramana and Mihirakula, revolts by feudatories, and a loss of revenue through land grants.' },
    ] },
    { t: 'img', pic: { file: 'Gupta Empire, Samudragupta, 335-380 AD, Gold Dinar, 7.9g, Javelin Type.jpg', credit: 'Mitresh66', license: 'CC BY-SA 4.0' }, caption: 'A gold dinar of Samudragupta. Guptas issued many gold coins, though the later ones have less gold, and silver and copper coins are comparatively rarer.' },

    { t: 'h', text: 'Sources' },
    { t: 'table', caption: 'These inscriptions and accounts are frequently tested.', head: ['Source', 'What it says'], rows: [
      ['Prayag Prashasti (Allahabad pillar)', 'Harisena\'s praise of Samudragupta. Written on an Ashokan pillar'],
      ['Mehrauli Iron Pillar', 'Praises a king "Chandra", usually identified with Chandragupta II. Famous for its rust resistance'],
      ['Junagadh (Skandagupta)', 'Repair of the Sudarshana lake'],
      ['Eran pillar (510 CE)', 'Records a widow\'s self-immolation, often cited as the earliest epigraphic evidence of sati'],
      ['Fa-hien', 'Visited during Chandragupta II: mild punishments, Buddhism strong in places, untouchables (chandalas) outside towns'],
      ['Kalidasa\'s plays', 'Show court culture; also a useful window on social rank'],
      ['Puranas', 'Compiled in their present form around this time'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2025 and 2020', text: 'In 2025, UPSC asked during whose reign Fa-hien travelled to India. In 2020, it asked about Panini, Amarasimha and Kalidasa with the kings they are linked to. So learn each scholar\'s dynasty: Panini is linked to a much earlier time, before Pushyamitra Shunga; Amarasimha is usually placed in the Gupta age, not with Harsha.' },

    { t: 'h', text: 'Administration and economy' },
    { t: 'p', text: 'The Gupta state was less centralised than the Mauryan. Kings took grand titles like **Maharajadhiraja** and **Parama-bhattaraka**. This suggests they ruled over lesser kings, not that they controlled everything directly. Many officials were paid in land, and posts became hereditary.' },
    { t: 'strata', layers: [
      { title: 'Bhukti (province)', sub: 'Governed by an **uparika**' },
      { title: 'Vishaya (district)', sub: 'Governed by a **vishayapati**. Council included the chief merchant, chief artisan and chief scribe' },
      { title: 'Vithi', sub: 'Group of villages' },
      { title: 'Grama (village)', sub: 'Elders and a village headman' },
    ] },
    { t: 'table', caption: 'Land and tax terms. These are favourites for matching questions.', head: ['Term', 'Meaning'], rows: [
      ['Vishti', 'Forced labour, a sort of tax paid by the people to the state (Prelims 2019)'],
      ['Kulyavapa, dronavapa', 'Measures of land (Prelims 2020)'],
      ['Agrahara', 'Tax-free land grant to brahmanas'],
      ['Brahmadeya', 'Grant of land to brahmanas, usually with revenue rights'],
      ['Bhaga, bhoga, kara', 'Taxes on land and produce; bhaga was usually one-sixth'],
      ['Uparika', 'A class of tenant in some contexts, and also a provincial governor title. Use context'],
    ] },
    { t: 'p', text: '**Economy:** The Gupta age saw land grants expand farming into new areas, but also what R.S. Sharma calls the decline of urban centres and long-distance trade, particularly with Rome. **Ports** such as Ghantasala, Kadura and Chaul handled foreign trade with South-East Asia, as asked in Prelims 2020.' },
    { t: 'note', kind: 'trap', title: '"Golden Age" with care', text: 'Do not choose options that claim everyone prospered, or that land grants helped central power. They tended to weaken it. Women\'s status and the position of untouchables also worsened in many respects, and Fa-hien shows chandalas living outside towns.' },

    { t: 'h', text: 'Culture and science' },
    { t: 'compare', columns: [
      { title: 'Literature', items: ['**Kalidasa:** Abhijnanashakuntalam, Meghaduta, Raghuvamsha, Kumarasambhava', '**Shudraka:** Mrichchhakatika', '**Vishakhadatta:** Mudrarakshasa, Devichandraguptam', '**Amarasimha:** Amarakosha (lexicon)', '**Vatsyayana:** Kamasutra'] },
      { title: 'Science', items: ['**Aryabhata:** Aryabhatiya; Earth rotates; pi close to 3.1416; zero place-value', '**Varahamihira:** Pancha Siddhantika, Brihat Samhita', '**Brahmagupta:** Brahmasphuta Siddhanta (about 628 CE)', '**Dhanvantari**, Vagbhata (medicine)', 'Iron technology, Mehrauli pillar'] },
      { title: 'Art and religion', items: ['Early stone temples: **Deogarh, Sanchi 17, Bhitargaon** (brick)', 'Bhagavatism, Vishnu and his avatars', '**Udayagiri Varaha** relief', '**Ajanta** caves (Vakataka patronage)', 'Sarnath school of Buddha sculpture'] },
    ] },
    { t: 'img', pic: { file: 'Udayagiri Caves, cave 5, Vishnu as Varaha Avatar (9839977024).jpg', credit: 'Arian Zwegers', license: 'CC BY 2.0' }, caption: 'Varaha rescuing Earth at Udayagiri, Madhya Pradesh, about the early fifth century. It reflects growing Vaishnava devotion, and is often read as a royal symbol.' },
    { t: 'img', pic: { file: 'Remains of the Dashavatara Temple in Deogarh, Lalitpur.jpg', credit: 'Work2win', license: 'CC BY-SA 4.0' }, caption: 'The Dashavatara Temple at Deogarh is among the earliest Nagara-style stone temples. Prelims 2026 asked about its shikhara.' },
    { t: 'p', text: '**Nalanda:** Founded under Kumaragupta I, it became a major Buddhist university. Hsuan Tsang and Yijing studied there. Its ruins became a UNESCO World Heritage Site in **2016**, and a new Nalanda University campus at Rajgir opened in **2024**.' },

    { t: 'h', text: 'After the Guptas' },
    { t: 'p', text: 'Prelims 2021 asked which kingdoms held power in the north between the Guptas and Harsha: the later Guptas of Magadha, the **Pushyabhutis of Thanesar**, the **Maukharis of Kanauj** and the **Maitrakas of Valabhi**. The Paramaras and Yadavas rose later, so they do not fit.' },
    { t: 'table', head: ['Power', 'Key facts'], rows: [
      ['Harshavardhana (606-647)', 'Capital **Kanauj**. Wrote plays Ratnavali, Priyadarshika, Nagananda. Court poet **Banabhatta** wrote Harshacharita. **Hsuan Tsang** described the great assembly at Kanauj and the quinquennial assembly at **Prayag**. Defeated by **Pulakeshin II** on the Narmada.'],
      ['Chalukyas of Badami', '**Pulakeshin II** defeated Harsha. The **Aihole inscription** by Ravikirti describes this. Temples at Badami, Aihole and Pattadakal.'],
      ['Pallavas of Kanchi', '**Mahendravarman I** (titles Mattavilasa, Vichitrachitta, Gunabhara, as asked in Prelims 2025), **Narasimhavarman I** (Mamalla, took Vatapi), rock-cut temples at Mahabalipuram.'],
      ['Vakatakas of Deccan', 'Close Gupta allies through Prabhavati. Patronage of Ajanta, through Harishena\'s minister Varahadeva.'],
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Golden Age: a balanced answer', text: 'Yes for art, science and literature. Less so for trade, towns and social inequality. Add the feudal character of land grants, and close with why the label says more about 19th-century nationalist historians than about the period itself.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Prayag: Harisena, Samudragupta. Mehrauli: Chandra. Junagadh: Sudarshana. Eran: sati.',
      'Fa-hien: Chandragupta II. Hsuan Tsang: Harsha. Nalanda: Kumaragupta I.',
      'Vishti: forced labour. Kulyavapa: land measure. Vishaya: district.',
      'Aihole: Pulakeshin II. Banabhatta: Harshacharita.',
    ] },
  ],
  sources: [
    { label: 'R.S. Sharma, Ancient India (NCERT), Ch 19-23. Key names and terms were checked in the OCR text' },
    { label: 'Wikipedia: Gupta Empire', url: 'https://en.wikipedia.org/wiki/Gupta_Empire' },
    { label: 'UNESCO: Nalanda Mahavihara', url: 'https://whc.unesco.org/en/list/1502/' },
    { label: 'UPSC Civil Services Prelims 2019, 2020, 2021, 2023, 2025, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
