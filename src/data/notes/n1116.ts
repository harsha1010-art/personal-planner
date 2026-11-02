import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-16',
  summary: 'The great rivals of the Deccan, and the regional kingdoms that grew as the Sultanate weakened: their rulers, systems, art and foreign visitors.',
  minutes: 18,
  hero: { file: 'Iconic Stone Chariot @ Vittala Temple, Hampi, Karnataka.jpg', credit: 'Ram Nagesh Thota', license: 'CC BY-SA 4.0' },
  heroAlt: 'The stone chariot at Vittala Temple, Hampi',
  blocks: [
    { t: 'h', text: 'Vijayanagara' },
    { t: 'p', text: 'Founded in **1336** by **Harihara and Bukka** of the Sangama family on the Tungabhadra, with the capital at Hampi. Four dynasties ruled it: **Sangama, Saluva, Tuluva, Aravidu**. Tradition links the founding to the sage Vidyaranya.' },
    { t: 'timeline', items: [
      { when: 'Deva Raya I (c. 1406-22)', what: 'Built a dam on the Tungabhadra, and canals to the capital (Prelims 2023). Nicolo Conti visited.' },
      { when: 'Deva Raya II (c. 1424-46)', what: 'Recruited Muslim soldiers. Abdur Razzaq of Persia visited. (Vasco da Gama came much later, in 1498, as Prelims 2021 tested.)' },
      { when: 'Krishnadeva Raya (1509-29)', what: 'Peak of the empire. Wrote **Amuktamalyada** in Telugu. Court of **Ashtadiggajas**, including Allasani Peddana. Allowed the Portuguese a fort at **Bhatkal** (Prelims 2024). Domingo Paes visited.' },
      { when: 'Battle of Talikota, 1565', what: 'Also called Rakshasi-Tangadi. Bijapur, Bidar, Ahmadnagar and Golconda defeated Rama Raya, and Hampi was sacked.' },
    ] },
    { t: 'table', head: ['Feature', 'Detail'], rows: [
      ['Nayaka system', 'Military chiefs given territory (amaram) for service. Similar in some ways to the iqta. Led later to breakaway states such as Mysore, Madurai, Tanjore'],
      ['Ayagar system', 'Village functionaries paid with land or a share of produce'],
      ['Women', 'Nuniz reported that women served as wrestlers, astrologers, accountants and soothsayers (Prelims 2021)'],
      ['Coins', 'Gold **varaha** or pagoda'],
      ['Architecture', 'Raya gopuram, mandapa with musical pillars, Vittala and Virupaksha temples, Hazara Rama'],
    ] },
    { t: 'note', kind: 'exam', title: 'Foreign travellers', text: 'Ibn Battuta visited Harihara I\'s time. Nicolo Conti: Deva Raya I. Abdur Razzaq: Deva Raya II. Domingo Paes and Barbosa: Krishnadeva Raya. Nuniz: Achyuta Raya. Use this list directly.' },

    { t: 'h', text: 'Bahmani and the Deccan Sultanates' },
    { t: 'p', text: 'The Bahmani kingdom began in **1347** under **Alauddin Hasan Bahman Shah**, with capital at Gulbarga, later Bidar. **Mahmud Gawan**, a Persian minister, reformed administration and built the **madrasa at Bidar**. Fights between Deccani and Afaqi nobles later divided it into five states.' },
    { t: 'table', head: ['State', 'Dynasty', 'Famous for'], rows: [
      ['Bijapur', 'Adil Shahi', '**Gol Gumbaz**; Ibrahim Adil Shah II\'s Kitab-i-Nauras'],
      ['Golconda', 'Qutb Shahi', 'Diamonds; Charminar at Hyderabad'],
      ['Ahmadnagar', 'Nizam Shahi', 'Chand Bibi; Malik Ambar'],
      ['Bidar', 'Barid Shahi', 'Successor at the old capital'],
      ['Berar', 'Imad Shahi', 'Absorbed by Ahmadnagar'],
    ] },
    { t: 'img', pic: { file: 'Gol Gumbaz, Bijapur 1.jpg', credit: 'Rangan Datta Wiki', license: 'CC BY-SA 4.0' }, caption: 'Gol Gumbaz at Bijapur, the tomb of Muhammad Adil Shah, has one of the world\'s largest domes and is known for its whispering gallery.' },
    { t: 'note', kind: 'trap', title: 'Rivalry was not simply religious', text: 'Vijayanagara and the Bahmanis fought mainly over the fertile **Raichur Doab**, trade and diamond mines. Vijayanagara employed Muslim soldiers, and alliances crossed religious lines.' },

    { t: 'h', text: 'Regional kingdoms' },
    { t: 'table', caption: 'These often appear in questions on culture.', head: ['Region', 'Key rulers', 'Remember'], rows: [
      ['Kashmir', 'Zain-ul-Abidin (Bud Shah)', 'Tolerance; Persian translations of Sanskrit texts'],
      ['Bengal', 'Ilyas Shahi, Husain Shah', 'Bengali literature; Chaitanya\'s era'],
      ['Gujarat', 'Ahmad Shah, Mahmud Begarha', 'Founded Ahmedabad; Portuguese conflict'],
      ['Malwa', 'Hoshang Shah', 'Mandu architecture'],
      ['Mewar', 'Rana Kumbha, Rana Sanga', 'Vijay Stambha at Chittor; Sanga lost at Khanwa in 1527'],
      ['Odisha', 'Eastern Gangas, Gajapatis', 'Konark, Jagannath at Puri'],
    ] },
    { t: 'h3', text: 'Portuguese arrival' },
    { t: 'p', text: '**Vasco da Gama** reached Calicut in **1498**, and met the Zamorin. **Albuquerque** took **Goa in 1510**. The **cartaz** system forced ships to buy permits, as the Portuguese sought control of sea trade.' },
    { t: 'note', kind: 'mains', title: 'Use it this way', text: 'Vijayanagara\'s dam and canals are good examples of state water management. Its Nayakas show how decentralised military power can both strengthen and later break a state.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: ['1336 Harihara and Bukka. 1347 Bahman Shah.', '1565 Talikota. 1498 Vasco da Gama.', 'Amuktamalyada: Krishnadeva Raya. Gol Gumbaz: Bijapur.', 'Raichur Doab: the main point of conflict.'] },
  ],
  sources: [
    { label: 'Satish Chandra, History of Medieval India, Ch 9 and 14' },
    { label: 'UNESCO: Group of Monuments at Hampi', url: 'https://whc.unesco.org/en/list/241/' },
    { label: 'UPSC Civil Services Prelims 2021, 2023, 2024, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
