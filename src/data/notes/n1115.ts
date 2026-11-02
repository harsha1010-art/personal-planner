import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-15',
  summary: 'Five dynasties in 320 years: how the Sultanate was set up, how it governed and taxed, and why it broke apart.',
  minutes: 20,
  hero: { file: 'Qutb Minar with Neem Tree.jpg', credit: 'Shikhers', license: 'CC BY-SA 4.0' },
  heroAlt: 'The Qutb Minar in Delhi',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The Delhi Sultanate ran from **1206 to 1526**. After Muhammad Ghori\'s victory at **Tarain in 1192**, his slave Qutbuddin Aibak held north India. The Sultanate survived Mongol threats, expanded far into the south, and then split up after the Tughluqs.' },
    { t: 'timeline', caption: 'The five dynasties, in order: Slave, Khalji, Tughluq, Sayyid, Lodi.', items: [
      { when: 'Slave (Mamluk), 1206-1290', what: '**Aibak** (Lakh Baksh; began Qutb Minar). **Iltutmish** gave the Sultanate structure: the **iqta** system, silver **tanka** and copper **jital**, and the **Turkan-i-Chahalgani** (the Forty). **Razia** was the first and only woman Sultan. **Balban** raised royal prestige: **sijda** and **paibos**, theory of kingship, and blood-and-iron methods.' },
      { when: 'Khalji, 1290-1320', what: '**Alauddin** defeated Mongols and took Gujarat, Ranthambhore, Chittor, and sent **Malik Kafur** to the south. Introduced **market control**, branding of horses (**dagh**), a descriptive roll of soldiers (**chehra**), and land revenue at half the produce.' },
      { when: 'Tughluq, 1320-1414', what: '**Ghiyasuddin** built Tughluqabad. **Muhammad bin Tughluq** tried capital shift to Daulatabad, token currency, the Doab tax and the Khurasan and Qarachil campaigns. **Firoz Shah** ran canals, abolished many taxes, and imposed **jizya** on brahmanas. **Timur** sacked Delhi in **1398**.' },
      { when: 'Sayyid, 1414-1451', what: 'Khizr Khan and successors; a weak and narrow state.' },
      { when: 'Lodi, 1451-1526', what: 'Afghan rule. **Sikandar Lodi** founded Agra (about 1504-06; sources differ) and the **gaz-i-Sikandari** measure. **Ibrahim Lodi** lost to Babur at **Panipat in 1526**.' },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2021', text: 'UPSC tested whether Chengiz Khan reached the Indus during the reign of Iltutmish (yes), and whether Timur came during Muhammad bin Tughluq\'s reign (no, it was under the later Tughluqs). So learn which foreign invader came under which ruler.' },

    { t: 'h', text: 'Administration' },
    { t: 'table', head: ['Post or term', 'Meaning'], rows: [
      ['Wazir', 'Head of revenue and finance (Diwan-i-Wizarat)'],
      ['Ariz-i-Mumalik', 'Military department (Diwan-i-Arz)'],
      ['Sadr-us-Sudur', 'Religious affairs and grants'],
      ['Qazi-ul-Quzat', 'Chief judge'],
      ['Barid-i-Mumalik', 'Intelligence and post'],
      ['Iqta', 'Land revenue assignment for service, held by a **muqti**'],
      ['Shiqdar, Faujdar', 'Lower regional officers'],
      ['Khuts, Muqaddams', 'Rural chiefs, the village-level elite whom Alauddin curbed'],
    ] },
    { t: 'compare', columns: [
      { title: 'Taxes', items: ['**Kharaj:** land tax', '**Jizya:** tax on non-Muslims', '**Khams:** war booty share', '**Zakat:** on Muslims'] },
      { title: 'New departments', items: ['Diwan-i-Mustakhraj: arrears, Alauddin', 'Diwan-i-Amir-i-Kohi: agriculture, Muhammad bin Tughluq', 'Diwan-i-Bandagan: slaves, Firoz', 'Diwan-i-Khairat: charity, Firoz'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Do not swap these reforms', text: 'Branding and market control: **Alauddin**. Token currency and Daulatabad: **Muhammad bin Tughluq**. Canals and Khairat: **Firoz**. Sijda and paibos: **Balban**. Forty: **Iltutmish**.' },

    { t: 'h', text: 'Economy, society and culture' },
    { t: 'list', items: [
      '**Technology:** the Persian wheel (**araghatta** in older form), spinning wheel and paper spread in this time. Prelims 2025 tested what araghatta was.',
      '**Towns:** Delhi, Daulatabad and Lahore grew. Crafts and long-distance trade expanded.',
      '**Architecture:** arch and dome (true arch), red sandstone and marble, Quwwat-ul-Islam Mosque, Alai Darwaza, Tughluqabad\'s sloping walls, and Lodi Garden tombs.',
      '**Literature:** **Amir Khusrau** (Persian poet, also linked to Khari Boli and music), **Barani** (Tarikh-i-Firozshahi), **Ibn Battuta** (Rihla, at Muhammad bin Tughluq\'s court).',
    ] },

    { t: 'h', text: 'Why it declined' },
    { t: 'flow', steps: [
      { title: 'Overreach', sub: 'Too large to hold from Delhi' },
      { title: 'Failed projects', sub: 'Muhammad bin Tughluq\'s experiments cost resources' },
      { title: 'Provinces break', sub: 'Vijayanagara, Bahmani and others rise' },
      { title: 'Timur, 1398', sub: 'A fatal blow to prestige' },
      { title: 'Babur, 1526', sub: 'Panipat ends the Lodis' },
    ] },
    { t: 'note', kind: 'mains', title: 'Good framing', text: 'Compare the Sultanate with earlier states as an urban, cash-tax, Persianate system that also relied on local chiefs. Muhammad bin Tughluq\'s failures are a handy case on policy design and implementation.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: ['Order: Slave, Khalji, Tughluq, Sayyid, Lodi.', 'Iltutmish: iqta and the Forty.', 'Alauddin: market control, dagh, chehra.', 'Muhammad bin Tughluq: token currency, Daulatabad.', 'Panipat 1526: Babur defeats Ibrahim Lodi.'] },
  ],
  sources: [
    { label: 'Satish Chandra, History of Medieval India, Ch 6-8' },
    { label: 'UPSC Civil Services Prelims 2021 and 2025, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
