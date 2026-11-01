import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-17',
  summary: 'From Babur to Aurangzeb: the rulers, the mansab and jagir systems, land revenue, trade, art and religious policy.',
  minutes: 24,
  hero: { file: 'Fatehput Sikiri Buland Darwaza gate 2010.jpg', credit: 'Marcin Białek', license: 'CC BY-SA 3.0' },
  heroAlt: 'The Buland Darwaza at Fatehpur Sikri',
  blocks: [
    { t: 'h', text: 'Rulers in sequence' },
    { t: 'timeline', items: [
      { when: 'Babur (1526-30)', what: 'Won **Panipat (1526)** using tulughma and artillery, then **Khanwa (1527)** against Rana Sanga. Wrote Baburnama (Tuzuk-i-Baburi) in Turki.' },
      { when: 'Humayun (1530-40, 1555-56)', what: 'Lost to **Sher Shah** at Chausa (1539) and Kannauj (1540). Regained Delhi in 1555.' },
      { when: 'Sher Shah Sur (1540-45)', what: 'Reformer: Grand Trunk Road, sarais, **rupiya** and dam, measured land (**patta, qabuliyat**). His land system fed into Akbar\'s.' },
      { when: 'Akbar (1556-1605)', what: 'Second Panipat (1556) against Hemu. Rajput alliances, abolished jizya (1564), **Mansabdari**, **Zabti**, **Sulh-i-kul**, Din-i-Ilahi (1582).' },
      { when: 'Jahangir (1605-27)', what: 'Nur Jahan; Thomas Roe\'s visit; miniature painting at its peak; executed Guru Arjan.' },
      { when: 'Shah Jahan (1628-58)', what: 'Taj Mahal, Red Fort, Jama Masjid; costly Central Asian wars; Dara Shikoh translated Upanishads.' },
      { when: 'Aurangzeb (1658-1707)', what: 'Largest empire. Reimposed jizya (1679). Long Deccan wars, conflicts with Marathas, Sikhs and Rajputs.' },
    ] },
    { t: 'note', kind: 'exam', title: 'Learn the pairs', text: 'Prelims 2021 asked for the ascending order of administrative units: **Paragana, Sarkar, Suba**. Know the hierarchy below, and which ruler started what.' },

    { t: 'h', text: 'Administration' },
    { t: 'strata', layers: [
      { title: 'Emperor', sub: 'Supreme; advised by the wakil and four major ministers' },
      { title: 'Ministers', sub: '**Diwan** (revenue), **Mir Bakshi** (military, mansabdars), **Mir Saman** (royal household), **Sadr** (religion, grants)' },
      { title: 'Suba (province)', sub: '**Subedar** with a provincial diwan and bakshi' },
      { title: 'Sarkar (district)', sub: '**Faujdar** (order), **Amalguzar** (revenue)' },
      { title: 'Pargana', sub: '**Shiqdar**, **Qanungo** (records), **Amin**' },
      { title: 'Village', sub: '**Muqaddam** and **Patwari**' },
    ] },
    { t: 'compare', columns: [
      { title: 'Mansabdari', items: ['Every noble had a numerical rank', '**Zat:** personal rank and pay', '**Sawar:** cavalry to maintain', 'Started by Akbar in the form used later; not hereditary', 'Dagh and chehra to check fraud'] },
      { title: 'Jagirdari', items: ['Mansabdars paid by assignment of revenue', 'Jagirs were transferable, usually every few years', '**Khalisa:** land held directly by the emperor', '**Zamindars:** kept local rights', 'Crisis later: jagirs were too few for too many nobles'] },
    ] },
    { t: 'table', caption: 'Land revenue under Akbar. Todar Mal is the key name.', head: ['System', 'How it worked', 'Where'], rows: [
      ['Zabti (Bandobast)', 'Land measured; average of 10 years\' prices and yields; cash payment', 'Core of north India'],
      ['Batai (Ghallabakshi)', 'Crop-sharing', 'Used in parts'],
      ['Nasaq', 'Estimate, based on past records', 'Bengal and elsewhere'],
    ] },
    { t: 'p', text: 'Land was graded by use: **Polaj, Parauti, Chachar, Banjar**. The state share was usually one-third. Under Aurangzeb, it rose in many areas to one-half.' },
    { t: 'note', kind: 'trap', title: 'Akbar\'s religion', text: 'Din-i-Ilahi was not a new mass religion, and few joined it. **Sulh-i-kul** (peace with all) is the wider policy. Abul Fazl\'s Akbarnama and Ain-i-Akbari are the sources. Ibadat Khana was at **Fatehpur Sikri**.' },

    { t: 'h', text: 'Economy and society' },
    { t: 'list', items: [
      '**Trade:** India exported textiles, indigo and saltpetre, and received American silver. Surat became the main port. Trade grew among Armenians, Banias and Europeans.',
      '**Crops:** new crops from the Americas, including tobacco and maize. Cash crops such as cotton and indigo grew.',
      '**Hundi:** a credit note used by merchants (Prelims 2020 used this in a post-Harsha context, which shows how old the term is).',
      '**Travellers:** **Tavernier** wrote about diamonds (Prelims 2018). **Bernier** described Aurangzeb\'s court and land. Thomas Roe came to Jahangir\'s court.',
    ] },
    { t: 'h', text: 'Art and culture' },
    { t: 'img', pic: { file: 'Basawan. Akbar Taming Mad Elephant Hawai. Composition by Basawan, coloring by Chitra. (right part) Akbarnama, ca. 1590, Victoria and Albert Museum, London.. (2).jpg', credit: 'Basawan and Chitra', license: 'Public domain' }, caption: 'A painting from the Akbarnama. Mughal miniature painting combined Persian, Indian and later European elements.', tall: true },
    { t: 'table', head: ['Ruler', 'Architecture', 'Painting or literature'], rows: [
      ['Akbar', 'Fatehpur Sikri, Agra Fort, Humayun\'s Tomb built in his time', 'Hamzanama; Mahabharata in Persian (Razmnama)'],
      ['Jahangir', 'Itimad-ud-Daulah (pietra dura begins), Shalimar in Kashmir', 'Peak of animal and portrait painting: Mansur, Bishandas'],
      ['Shah Jahan', 'Taj Mahal, Red Fort, Jama Masjid', 'Sirr-i-Akbar by Dara Shikoh'],
      ['Aurangzeb', 'Bibi ka Maqbara, Moti Masjid in Delhi', 'Fatawa-i-Alamgiri'],
    ] },
    { t: 'note', kind: 'mains', title: 'Link with the present', text: 'Akbar\'s Sulh-i-kul and Rajput alliances are useful examples for pluralism. The land revenue system shows how state capacity and agrarian society connect, which also helps in GS III land reforms answers.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: ['Zat and sawar. Zabti and Todar Mal.', 'Ascending: pargana, sarkar, suba.', 'Diwan, Mir Bakshi, Mir Saman, Sadr.', 'Panipat 1526 and 1556. Khanwa 1527. Chausa 1539.'] },
  ],
  sources: [
    { label: 'Satish Chandra, History of Medieval India, Ch 12-13, 15-16' },
    { label: 'UPSC Civil Services Prelims 2018, 2020, 2021, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
