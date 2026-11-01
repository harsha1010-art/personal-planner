import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-21',
  summary: 'All of Indian architecture in one view: Buddhist forms, regional temple schools, and Indo-Islamic buildings from the Sultanate to the Mughals.',
  minutes: 20,
  hero: { file: 'Kandariya Mahadeva Temple, Khajuraho, Madhya Pradesh.jpg', credit: 'Taru23', license: 'CC BY-SA 4.0' },
  heroAlt: 'Kandariya Mahadeva Temple at Khajuraho',
  blocks: [
    { t: 'h', text: 'How to study this' },
    { t: 'p', text: 'Start with the two earlier notes on Buddhism and Ancient Art, which cover stupas, caves and the three temple styles. This note extends them with regional temple schools and Indo-Islamic buildings. UPSC often gives a monument and asks about its dynasty, religion or features.' },
    { t: 'svg', id: 'temple-styles', caption: 'The three styles again. Recall this first.' },

    { t: 'h', text: 'Regional Nagara schools' },
    { t: 'table', head: ['School', 'Region', 'Patrons', 'Features', 'Examples'], rows: [
      ['Odisha (Kalinga)', 'Odisha', 'Eastern Gangas, Somavamshis', 'Deul (tower), jagamohana (porch), no pillars inside', 'Lingaraja, Jagannath, **Konark Sun Temple**'],
      ['Khajuraho', 'Bundelkhand, MP', '**Chandelas**', 'High platform, no enclosure, several shikhara clusters, erotic sculpture', 'Kandariya Mahadeva, Lakshmana'],
      ['Solanki (Maru-Gurjara)', 'Gujarat, Rajasthan', 'Solankis', 'Stepped tank, intricate carving', 'Modhera Sun Temple, **Dilwara** (Jain), Rani ki Vav'],
    ] },
    { t: 'h', text: 'Southern and Deccan schools' },
    { t: 'timeline', caption: 'The Dravida style grew through these stages.', items: [
      { when: 'Pallava, 7th-9th century', what: 'Mahendra style (rock-cut mandapas), Mamalla style (**rathas** at Mahabalipuram, Descent of the Ganga), Rajasimha style (**Shore Temple**, Kailasanatha at Kanchi).' },
      { when: 'Chalukya of Badami, 6th-8th century', what: 'Aihole, Badami and **Pattadakal** (Virupaksha, Papanatha).' },
      { when: 'Rashtrakuta, 8th-10th century', what: '**Kailasa at Ellora**. Elephanta is also often linked to this general period.' },
      { when: 'Chola, 9th-13th century', what: '**Brihadeshwara at Thanjavur** (Rajaraja I), with a huge vimana. Gangaikonda Cholapuram, Airavatesvara. Famous for **Nataraja** bronzes.' },
      { when: 'Hoysala, 11th-14th century', what: 'Belur, Halebidu, Somanathapura in Karnataka. Star-shaped plan, soapstone. A Vesara type.' },
      { when: 'Vijayanagara, 14th-16th century', what: 'Hampi: Raya gopurams, kalyana mandapas, musical pillars.' },
      { when: 'Nayaka, 16th-18th century', what: 'Very tall gopurams at **Madurai**, and long corridors at Rameswaram.' },
    ] },
    { t: 'note', kind: 'exam', title: 'UNESCO link', text: 'In Karnataka\'s Hoysala temples, the Sacred Ensembles of the Hoysalas were inscribed by UNESCO in **2023**. Great Living Chola Temples, Sun Temple at Konark, Khajuraho, Pattadakal, Hampi and Mahabalipuram are also on the list. Check for later additions.' },

    { t: 'h', text: 'Indo-Islamic architecture' },
    { t: 'p', text: 'Indo-Islamic buildings introduced the **true arch and dome**, minarets and geometric and calligraphic decoration. Figures were avoided. Local craftsmen also brought in Hindu motifs like the lotus and the kalasha. Lime mortar became standard.' },
    { t: 'table', head: ['Period', 'Feature', 'Examples'], rows: [
      ['Slave (Mamluk)', 'Corbelled arches at first, re-used temple material', 'Quwwat-ul-Islam, **Qutb Minar**, Adhai Din ka Jhonpra (Ajmer)'],
      ['Khalji', 'True arch and dome; red sandstone with marble', '**Alai Darwaza**, Jamaat Khana Masjid'],
      ['Tughluq', 'Sloping walls, simple and military; mixing of arch and lintel', 'Tughluqabad, Kotla Firoz Shah'],
      ['Lodi and Sayyid', 'Octagonal tombs; double dome', 'Lodi Garden tombs'],
      ['Provincial', 'Regional styles', 'Bengal: Adina Mosque. Jaunpur: Atala Masjid. Gujarat: Jama Masjid. Bijapur: Gol Gumbaz. Golconda: Charminar. Mandu: Jahaz Mahal'],
      ['Mughal', 'Charbagh gardens; pietra dura; symmetrical plans; white marble', 'Humayun\'s Tomb, Fatehpur Sikri, Taj Mahal, Red Fort'],
    ] },
    { t: 'note', kind: 'trap', title: 'Common confusions', text: 'Iltutmish completed the Qutb Minar, which Aibak began. **Alai Darwaza** has the first true arch and dome of real scale. Humayun\'s Tomb was built by his widow Hamida Banu Begum, as a precursor to the Taj Mahal. Pietra dura begins with Itimad-ud-Daulah at Agra.' },
    { t: 'note', kind: 'mains', title: 'Common angle', text: 'Discuss Indo-Islamic architecture as a synthesis, using specific features: arches and domes on one side, and lotus and kalasha on the other. Connect with conservation issues such as pollution at the Taj Mahal, and the Supreme Court\'s M.C. Mehta case.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: ['Khajuraho: Chandela. Konark: Eastern Ganga. Thanjavur: Rajaraja I.', 'Rathas: Mamallapuram. Hoysala: star plan.', 'Alai Darwaza: first true arch. Taj: pietra dura and charbagh.'] },
  ],
  sources: [
    { label: 'Nitin Singhania, Indian Art and Culture, Ch 1' },
    { label: 'NCERT, An Introduction to Indian Art (Class XI)', url: 'https://ncert.nic.in/textbook.php' },
    { label: 'UNESCO: India\'s World Heritage List', url: 'https://whc.unesco.org/en/statesparties/in' },
  ],
}
