import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-12',
  summary: 'What ancient India knew and how it taught: mathematics, astronomy and medicine, the great universities, and the six schools of philosophy.',
  minutes: 18,
  hero: { file: 'Temple 12 - Nalanda Mahavihara (21).jpg', credit: 'Sumitsurai', license: 'CC BY-SA 4.0' },
  heroAlt: 'Ruins at Nalanda Mahavihara in Bihar',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'UPSC rarely asks for long lists here. It asks which scholar did what, and which school said what. Learn this topic as short, firm pairs, and avoid inflated claims. A good answer treats these achievements as real, and also acknowledges that early science worked alongside ritual and astrology.' },

    { t: 'h', text: 'Mathematics and astronomy' },
    { t: 'table', head: ['Scholar', 'Date', 'Work', 'Contribution'], rows: [
      ['Baudhayana', 'c. 800-500 BCE', 'Shulba Sutras', 'Altar geometry, including a statement of the Pythagorean relation'],
      ['Aryabhata', 'b. 476 CE', 'Aryabhatiya', 'Earth rotates on its axis; eclipses explained by shadows; pi close to 3.1416'],
      ['Varahamihira', '6th century', 'Pancha Siddhantika, Brihat Samhita', 'Summary of five astronomical systems; an encyclopaedia of topics'],
      ['Brahmagupta', '7th century', 'Brahmasphuta Siddhanta', 'Rules for zero and negative numbers'],
      ['Bhaskara I', '7th century', 'Mahabhaskariya', 'Commentary on Aryabhata'],
      ['Bhaskara II', '12th century', 'Siddhanta Shiromani, Lilavati', 'Algebra and early ideas in calculus'],
    ] },
    { t: 'img', pic: { file: '2064 aryabhata-crp.jpg', credit: 'IUCAA statue, Wikimedia contributors', license: 'Public domain' }, caption: 'A modern statue of Aryabhata at IUCAA, Pune. No portrait from his lifetime exists, so this is imaginary.', tall: true },
    { t: 'p', text: '**Place-value system:** It became India\'s most influential gift to world mathematics, spreading through Arab scholars to Europe. Prelims 2026 asked about its epigraphic history: early inscriptions from Gujarat in the late sixth century, general use across India by the ninth century, and inscriptions in South-East Asia as early as the seventh century. The **Bakhshali Manuscript** contains an early dot for zero, though its dating is debated.' },
    { t: 'note', kind: 'trap', title: 'Aryabhata and heliocentrism', text: 'Aryabhata said Earth rotates. He did not clearly say that Earth revolves around the Sun, so be careful with options claiming he gave a heliocentric theory. Similarly, do not credit Bhaskara I for Lilavati: that was Bhaskara II.' },

    { t: 'h', text: 'Medicine and metallurgy' },
    { t: 'compare', columns: [
      { title: 'Medicine', items: ['**Charaka Samhita:** internal medicine, based on Agnivesha', '**Sushruta Samhita:** surgery, incl. plastic surgery of the nose', '**Vagbhata:** Ashtanga Hridaya', '**Atharva Veda** has early healing charms', 'Ayurveda\'s three doshas: vata, pitta, kapha'] },
      { title: 'Metals and materials', items: ['**Mehrauli iron pillar:** rust-resistant', '**Lost-wax casting:** Dancing Girl and Sultanganj Buddha', '**Wootz steel** from South India', '**Zinc** smelting at Zawar, Rajasthan', '**Harappan** bead-making and drilling'] },
    ] },

    { t: 'h', text: 'Education' },
    { t: 'table', head: ['Centre', 'Region', 'Remember'], rows: [
      ['Takshashila', 'Pakistan (Rawalpindi)', 'Early centre; traditional links to Panini, Chanakya, Jivaka. No fixed campus in the modern sense'],
      ['Nalanda', 'Bihar', 'Founded under Kumaragupta I. Hsuan Tsang and Yijing studied there. Destroyed around 1200. UNESCO 2016'],
      ['Vikramashila', 'Bihar', 'Founded by the Pala king **Dharmapala**. Atisha taught here'],
      ['Odantapuri', 'Bihar', 'Founded by **Gopala**, a Pala king'],
      ['Valabhi', 'Gujarat', 'Maitraka centre, also the place of the Second Jain Council'],
      ['Kanchi', 'Tamil Nadu', 'Pallava-era centre; ghatikas for brahmana learning'],
    ] },
    { t: 'list', items: [
      '**Vedic gurukula:** students lived with teachers, learning through recitation and memory.',
      '**Ghatika** and **agrahara:** brahmana learning centres in the south.',
      '**Viharas:** Buddhist monasteries taught monks and sometimes lay students.',
      'Women\'s access narrowed over time, with named exceptions such as Gargi.',
    ] },

    { t: 'h', text: 'Six schools of philosophy' },
    { t: 'p', text: 'Six **astika** schools accept the Vedas, in that they do not openly reject them. **Nastika** schools do reject the Vedas: Buddhism, Jainism, Ajivika and **Charvaka**. Each of the six astika schools has a traditional founder and a defining idea.' },
    { t: 'table', caption: 'Learn these as pairs. They are also often grouped in pairs: Nyaya-Vaisheshika, Samkhya-Yoga, Mimamsa-Vedanta.', head: ['School', 'Founder', 'Text', 'Core idea'], rows: [
      ['Samkhya', 'Kapila', 'Samkhya Karika', 'Dualism of **purusha** and **prakriti**; early forms had no god'],
      ['Yoga', 'Patanjali', 'Yoga Sutra', 'Eight limbs (**ashtanga**) to control the mind'],
      ['Nyaya', 'Gautama', 'Nyaya Sutra', 'Logic; valid means of knowledge (pramana)'],
      ['Vaisheshika', 'Kanada', 'Vaisheshika Sutra', 'Atoms (**paramanu**) and categories of reality'],
      ['Mimamsa', 'Jaimini', 'Mimamsa Sutra', 'Vedic ritual and duty'],
      ['Vedanta', 'Badarayana', 'Brahma Sutra', 'Brahman; later Shankara\'s **Advaita**, Ramanuja\'s **Vishishtadvaita**, Madhva\'s **Dvaita**'],
    ] },
    { t: 'compare', columns: [
      { title: 'Nastika schools', items: ['**Charvaka (Lokayata):** materialism; only perception is valid', '**Ajivika:** fatalism (niyati); Makkhali Gosala', '**Buddhism** and **Jainism**: see their own topic'] },
      { title: 'How UPSC uses this', items: ['A quote on perception as sole source: Charvaka', 'Atoms: Vaisheshika', 'Logic: Nyaya', 'Purusha and prakriti: Samkhya'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Two thinkers called Patanjali?', text: 'The grammarian Patanjali (Mahabhashya, Shunga period) is often distinguished from the author of the Yoga Sutra. Similarly, the Gautama who founded Nyaya is not Gautama Buddha. Nagarjuna the Buddhist philosopher is not the alchemist of the same name in later traditions.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'A fair stance', text: 'If asked about Indian science, describe achievements with their dates and sources. Then explain limits such as the link to ritual, and why knowledge spread through Arab scholars. Avoid sweeping claims, which examiners see through quickly. Yoga and Ayurveda link this to soft power and to the International Day of Yoga.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Aryabhatiya: rotation. Pancha Siddhantika: Varahamihira. Lilavati: Bhaskara II.',
      'Charaka: medicine. Sushruta: surgery.',
      'Vikramashila: Dharmapala. Nalanda: Kumaragupta I.',
      'Kapila-Samkhya; Patanjali-Yoga; Gautama-Nyaya; Kanada-Vaisheshika; Jaimini-Mimamsa; Badarayana-Vedanta.',
    ] },
  ],
  sources: [
    { label: 'Nitin Singhania, Indian Art and Culture, Ch 14 (philosophy) and Ch 16 (science)' },
    { label: 'R.S. Sharma, Ancient India (NCERT), Ch 20' },
    { label: 'UPSC Civil Services Prelims 2026, GS Paper I, Q7', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
