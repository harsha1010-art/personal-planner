import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-18',
  summary: 'The rise of Maratha power, the Mughal decline after 1707, and the regional states that took over in the eighteenth century.',
  minutes: 16,
  hero: { file: 'Epic statue of Shivaji at Raigad Fort.jpg', credit: 'Omi2394', license: 'CC BY-SA 3.0' },
  heroAlt: 'Statue of Shivaji at Raigad Fort',
  blocks: [
    { t: 'h', text: 'Shivaji and the Marathas' },
    { t: 'timeline', items: [
      { when: '1659', what: 'Killed **Afzal Khan** of Bijapur at Pratapgarh.' },
      { when: '1664', what: 'Sacked Surat, the richest Mughal port.' },
      { when: '1665', what: '**Treaty of Purandar** with Jai Singh; surrendered 23 forts. Shivaji later escaped from Agra.' },
      { when: '1674', what: 'Crowned at **Raigad** as **Chhatrapati**.' },
      { when: '1689-1707', what: 'Sambhaji executed. Rajaram and Tarabai resisted. Aurangzeb died in the Deccan, without a final victory.' },
    ] },
    { t: 'table', head: ['Term', 'Meaning'], rows: [
      ['Ashtapradhan', 'Eight ministers: **Peshwa** (head), Amatya (finance), Sachiv (secretary), Mantri, Senapati, Sumant (foreign), Nyayadhish, Panditrao'],
      ['Chauth', 'One-fourth of revenue, paid to avoid Maratha raids'],
      ['Sardeshmukhi', 'Extra 10% claimed as hereditary head of the region'],
      ['Deshmukh, Patil', 'Local revenue families, which Shivaji tried to keep under control'],
    ] },
    { t: 'h3', text: 'The Peshwas' },
    { t: 'list', items: [
      '**Balaji Vishwanath** made the Peshwa\'s post hereditary, and obtained Mughal recognition of chauth in 1719.',
      '**Baji Rao I** expanded to Malwa, Gujarat and raided Delhi in 1737, and developed the Maratha confederacy of **Gaikwad (Baroda), Holkar (Indore), Scindia (Gwalior), Bhonsle (Nagpur)**.',
      '**Third Battle of Panipat (1761):** Ahmad Shah Abdali defeated the Marathas under Sadashiv Rao Bhau. Reasons included logistic problems and lack of allies.',
    ] },
    { t: 'note', kind: 'trap', title: 'Purandar vs Panipat', text: 'Purandar (1665) is a treaty with the Mughals. Third Panipat (1761) is a loss to the Afghans, not to the British.' },

    { t: 'h', text: 'Mughal decline' },
    { t: 'p', text: 'Historians split on why the empire fell after 1707. The **"dark age" view** blames weak rulers and a Muslim-Hindu split. **Revisionist** historians such as Muzaffar Alam and C.A. Bayly see strong regional economies growing out of Mughal roots, so this was a redistribution of power rather than a total collapse.' },
    { t: 'flow', steps: [
      { title: 'Jagir crisis', sub: 'Too many nobles, too little land' },
      { title: 'Revolts', sub: 'Jats, Sikhs, Satnamis, Marathas' },
      { title: 'Weak heirs', sub: 'Farrukhsiyar, Sayyid Brothers' },
      { title: 'Invasions', sub: 'Nadir Shah 1739; Abdali' },
      { title: 'Companies', sub: 'British grow in the east' },
    ] },
    { t: 'h', text: 'Regional states' },
    { t: 'table', caption: 'Group these by type. Prelims 2021 tested how some were formed.', head: ['Type', 'State', 'Founder or key figure'], rows: [
      ['Successor state', 'Bengal', 'Murshid Quli Khan; Alivardi Khan'],
      ['Successor state', 'Awadh', 'Saadat Khan Burhan-ul-Mulk'],
      ['Successor state', 'Hyderabad', 'Nizam-ul-Mulk Asaf Jah (1724)'],
      ['Warrior state', 'Marathas, Sikhs, Jats', 'Peshwas; Ranjit Singh; Suraj Mal'],
      ['Independent', 'Mysore', 'Haidar Ali, Tipu Sultan. Emerged out of Vijayanagara under the Wodeyars'],
      ['Independent', 'Rajput states', 'Sawai Jai Singh II: Jaipur city, observatories'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2021', text: 'UPSC asked if the Nizamat of Arcot emerged from Hyderabad, and Mysore from Vijayanagara, and whether Rohilkhand was formed from territory taken by Ahmad Shah Durrani. Learn the origin of each state: Mysore\'s link to Vijayanagara is the safest of the three.' },
    { t: 'note', kind: 'mains', title: 'Good question to prepare', text: 'Was the eighteenth century a "dark age"? Answer no, and support the answer with regional prosperity and the new states, while noting political instability and the opening it gave to the British.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: ['1674 Raigad. 1761 Third Panipat.', 'Chauth 25%, Sardeshmukhi 10%.', 'Ashtapradhan: Peshwa as head.', 'Nadir Shah in 1739 took the Peacock Throne and Koh-i-Noor.'] },
  ],
  sources: [
    { label: 'Satish Chandra, History of Medieval India, Ch 18-19' },
    { label: 'NCERT, Themes in Indian History; Bipan Chandra et al., India\'s Struggle for Independence for the wider context' },
    { label: 'UPSC Civil Services Prelims 2021, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
