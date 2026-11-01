import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-08',
  summary: 'After the Mauryas, north-west invaders and Deccan kings reshaped India: new coins, Mahayana Buddhism, Gandhara art, land grants and Roman trade.',
  minutes: 22,
  hero: { file: 'Kanishka enhanced.jpg', credit: 'Biswarup Ganguly', license: 'CC BY-SA 3.0' },
  heroAlt: 'The headless statue of Kanishka from Mathura',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'From about 200 BCE to 300 CE, no single empire held India. Political fragmentation is often treated as decline, but this was one of ancient India\'s most creative periods. Crafts, trade and towns grew. Foreign rulers adopted Indian faiths, and Indian ideas travelled along the Silk Road.' },
    { t: 'flow', caption: 'Who came after the Mauryas. Treat these as overlapping groups, not a neat sequence.', steps: [
      { title: 'Indigenous', sub: 'Shungas, Kanvas, Chedis of Kalinga, Satavahanas' },
      { title: 'Indo-Greeks', sub: 'From Bactria, about 2nd century BCE' },
      { title: 'Shakas', sub: 'Scythians, from about 1st century BCE' },
      { title: 'Parthians', sub: 'Pahlavas, from about 1st century CE' },
      { title: 'Kushanas', sub: 'Yuezhi, 1st to 3rd century CE' },
    ] },

    { t: 'h', text: 'Indian successors' },
    { t: 'table', head: ['Dynasty', 'Key facts'], rows: [
      ['Shunga (c. 185-73 BCE)', 'Founder **Pushyamitra** killed the last Maurya. He performed Ashvamedha sacrifices and fought Greek kings. Buddhist texts portray him as hostile to Buddhism, but the **Bharhut stupa** was built or expanded under Shunga rule. Grammarian **Patanjali** is linked to this time. A Greek envoy, **Heliodorus**, set up the Garuda pillar at Besnagar under a later Shunga king.'],
      ['Kanva (c. 73-28 BCE)', 'Founder Vasudeva. A short dynasty, and later overthrown by the Satavahanas according to the Puranas.'],
      ['Chedi of Kalinga', '**Kharavela** is known from the **Hathigumpha inscription** at Udayagiri near Bhubaneswar. A Jain patron, he claims to have defeated Magadha and repaired a canal first made by a Nanda king.'],
    ] },
    { t: 'note', kind: 'trap', title: 'Heliodorus', text: 'The Heliodorus pillar at Besnagar was set up by a Greek envoy who calls himself a **Bhagavata**, a devotee of Vishnu. It is an early proof of a foreigner adopting an Indian faith, so do not confuse it with Ashokan pillars or with Shaivism.' },

    { t: 'h', text: 'Rulers from the north-west' },
    { t: 'table', caption: 'Learn one fact that defines each group.', head: ['Group', 'Key rulers', 'Why they matter'], rows: [
      ['Indo-Greeks', '**Menander** (Milinda), capital at Sakala (Sialkot)', 'First in India to issue **gold coins** in quantity by some accounts, and to show portraits and legends on coins. Menander features in the **Milindapanho** in debate with **Nagasena**. Brought Hellenistic elements into art.'],
      ['Shakas', '**Rudradaman I** (about 130-150 CE)', 'His **Junagadh inscription** is the first long inscription in **chaste Sanskrit**. It records repairing the **Sudarshana lake**, and his victories over the Satavahanas. The **Vikrama era of 58 BCE** is associated with a king of Ujjain defeating Shakas.'],
      ['Parthians', '**Gondophernes**', 'Christian tradition links him with **St Thomas**, who is said to have come to India in his reign.'],
      ['Kushanas', '**Kujula Kadphises, Vima Kadphises, Kanishka**', 'Controlled the Silk Road. Vima Kadphises issued many gold coins, and **Kanishka** started an era of **78 CE** (now the **Shaka era**, the basis of India\'s national calendar) according to the common view.'],
    ] },
    { t: 'img', pic: { file: 'Gold coin of Kanishka I.jpg', credit: 'LouisAragon (uploader)', license: 'CC BY-SA 2.5' }, caption: 'A gold coin of Kanishka. Kushana coins show a mix of Iranian, Greek, Hindu and Buddhist deities, so they are key evidence of the religious mix in their empire.' },
    { t: 'h3', text: 'Kanishka' },
    { t: 'list', items: [
      '**Capitals:** Purushapura (Peshawar) and Mathura. The empire reached from Central Asia to the Ganga plain.',
      '**Religion:** He convened the **Fourth Buddhist Council** in Kashmir, and Mahayana grew under his patronage.',
      '**Scholars:** Ashvaghosha (Buddhacharita), Vasumitra, Nagarjuna, and the physician **Charaka** are linked by tradition with his period.',
      '**Art:** Both the **Gandhara** and **Mathura** schools flourished. His headless statue at Mathura shows Central Asian dress and boots.',
    ] },
    { t: 'note', kind: 'trap', title: 'Two eras, two kings', text: '**Vikrama era:** begins 58-57 BCE. **Shaka era:** begins 78 CE and is linked with Kanishka by many scholars. India\'s national calendar uses the Shaka era, and it was adopted in 1957. Do not swap them.' },

    { t: 'h', text: 'The Satavahanas' },
    { t: 'p', text: 'The Satavahanas ruled the Deccan from about the first century BCE to the early third century CE. **Simuka** is named as the founder. The main capital was **Pratishthana** (Paithan), on the Godavari. The Puranas call them **Andhras**, though their early base seems to have been in Maharashtra.' },
    { t: 'table', head: ['Ruler', 'Remember'], rows: [
      ['Satakarni I', 'Early expansion, and performed Vedic sacrifices. The Naneghat inscription was issued by his queen Naganika.'],
      ['Hala', 'Wrote or compiled **Gatha Saptashati** in Maharashtri Prakrit.'],
      ['Gautamiputra Satakarni', 'Greatest ruler. The **Nashik inscription** by his mother, **Gautami Balashri**, says he destroyed the Shakas, Yavanas and Pahlavas, and calls him a unique brahmana. He defeated the Shaka **Nahapana** and restruck his coins.'],
      ['Vasishthiputra Pulumavi', 'Issued coins with ships, suggesting maritime trade. Base moved towards Andhra.'],
      ['Yajna Sri Satakarni', 'Last major ruler; also linked to ship coins.'],
    ] },
    { t: 'compare', columns: [
      { title: 'Unusual features', items: ['**Matronymics:** kings named after their mothers, such as Gautamiputra. Succession was still through men.', '**Land grants:** tax-free grants to brahmanas and Buddhist monks, among the earliest known in India.', '**Prakrit** inscriptions, in Brahmi.', 'Lead coins, and coins of potin and copper.'] },
      { title: 'Religion and art', items: ['Kings performed Vedic rites and also gave to Buddhists.', 'Rock-cut chaityas at **Karle, Nashik, Bhaja, Kanheri**.', 'Stupas at **Amaravati and Nagarjunakonda** (with the Ikshvakus).', 'Sanchi gateways carry a Satavahana-era inscription of Satakarni.'] },
    ] },
    { t: 'img', pic: { file: 'Grand Chaitya at Karla Caves - 2025 - 01.jpg', credit: 'Oleg Yunakov', license: 'CC0' }, caption: 'The great chaitya hall at Karle, in Maharashtra, with pillars carved in stone and a wooden roof frame. Donors included merchants as well as kings.', tall: true },

    { t: 'h', text: 'Trade, crafts and towns' },
    { t: 'p', text: 'R.S. Sharma treats this as the high point of ancient crafts and trade. Texts mention many crafts, and artisans were organised into **guilds**, called shreni. Guilds also acted as bankers: inscriptions record money deposited with them for religious purposes.' },
    { t: 'table', head: ['Item', 'Detail'], rows: [
      ['Exports to Rome', 'Spices (especially pepper), textiles, muslin, ivory, gems, indigo'],
      ['Imports', 'Gold and silver coins, wine, glass, tin, lead'],
      ['Northern route', 'Silk Road through Central Asia, controlled in part by the Kushanas'],
      ['Sea routes', 'Monsoon winds were understood more widely after **Hippalus** (1st century CE tradition)'],
      ['Ports', 'Barygaza (Bharuch), Sopara, Arikamedu, Muziris, Tamralipti'],
      ['Text', 'The **Periplus of the Erythraean Sea** is a Greek sailing guide to these ports. Pliny the Elder complained about Roman gold going to India'],
    ] },
    { t: 'note', kind: 'exam', title: 'Coins and language', text: 'Indo-Greek coins bear kings\' portraits, and Kushana coins are the most abundant in gold. Rudradaman\'s Junagadh inscription is the first long Sanskrit inscription. Sanskrit\'s rise as a language of power begins in this foreign-ruled phase, which is a useful surprise to remember.' },

    { t: 'h', text: 'Schools of sculpture' },
    { t: 'table', caption: 'The most repeatable table in this period. See the Ancient Art topic for more.', head: ['', 'Gandhara', 'Mathura', 'Amaravati'], rows: [
      ['Region', 'North-west', 'Braj, UP', 'Krishna-Guntur, Andhra'],
      ['Material', 'Grey schist, stucco', 'Spotted red sandstone', 'White marble-like limestone'],
      ['Influence', 'Hellenistic', 'Indigenous', 'Indigenous'],
      ['Buddha', 'Wavy hair, heavy drapery, calm', 'Shaved or small curls, smiling, sturdy', 'Mainly narrative; Buddha in scenes'],
      ['Patrons', 'Kushanas', 'Kushanas', 'Satavahanas and Ikshvakus'],
      ['Religion', 'Mainly Buddhist', 'Buddhist, Jain and Hindu', 'Mainly Buddhist'],
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'exam', title: 'What to expect', text: 'I found no recent Prelims question aimed squarely at this period in the papers checked, but its details (coins, inscriptions and sites) appear in art and culture questions. So pay most attention to the Junagadh, Nashik and Hathigumpha inscriptions, and to the sculpture table.' },
    { t: 'note', kind: 'mains', title: 'Good framing for GS I', text: 'Use this period to argue that political fragmentation need not mean cultural decline. Gandhara also shows how Indian culture absorbed outside influence, and is a strong example for answers on cultural synthesis.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Besnagar: Heliodorus, Bhagavata. Hathigumpha: Kharavela, Jain.',
      'Junagadh: Rudradaman, chaste Sanskrit, Sudarshana lake.',
      'Nashik: Gautami Balashri for Gautamiputra Satakarni.',
      'Kanishka: 78 CE, Fourth Council, Purushapura. Gondophernes: St Thomas.',
      'Satavahanas: matronymics, land grants, Prakrit, Karle.',
    ] },
  ],
  sources: [
    { label: 'R.S. Sharma, Ancient India (NCERT), Ch 15-16 and 18. Parts of the OCR text were checked for key names and dates' },
    { label: 'Wikipedia: Satavahana dynasty', url: 'https://en.wikipedia.org/wiki/Satavahana_dynasty' },
  ],
}
