import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-11',
  summary: 'From Mauryan pillars to the first temples: rock-cut caves, schools of sculpture, Ajanta\'s painting, and the temple styles you must recognise on sight.',
  minutes: 22,
  hero: { file: 'Mamallapuram, Shore Temple, India.jpg', credit: 'Vyacheslav Argenberg', license: 'CC BY 4.0' },
  heroAlt: 'The Shore Temple at Mahabalipuram',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Ancient Indian monumental art moved through a clear sequence: wood gave way to stone, relic mounds grew into stupas, and caves led to free-standing temples. Most of this was funded by a wide range of donors, and not only kings. Inscriptions at Sanchi name guilds, nuns and merchants.' },
    { t: 'flow', caption: 'The general sequence. Each stage carried forward earlier forms.', steps: [
      { title: 'Mauryan', sub: 'Polished pillars, stupas, first caves' },
      { title: 'Post-Mauryan', sub: 'Sanchi gateways; Karle; Gandhara, Mathura, Amaravati' },
      { title: 'Gupta', sub: 'Early temples, Sarnath Buddha, Ajanta' },
      { title: 'Post-Gupta', sub: 'Badami, Mahabalipuram, Ellora' },
    ] },

    { t: 'h', text: 'Stupas and rock-cut caves' },
    { t: 'p', text: 'The parts of a stupa are explained with a diagram in the Buddhism and Jainism topic. Learn which parts are later additions: **Sanchi\'s gateways** date to the Satavahana era, while the original mound is linked to Ashoka. Sanchi, Bharhut and Amaravati are the major stupas.' },
    { t: 'svg', id: 'chaitya', caption: 'A chaitya is a hall for collective worship. A vihara is a home for monks, with cells around a hall. Prelims asks you to distinguish the two.' },
    { t: 'table', head: ['Site', 'Region', 'What it has', 'Faith'], rows: [
      ['Barabar', 'Bihar', 'Earliest caves; polished walls', 'Ajivika'],
      ['Bhaja, Karle, Kanheri', 'Maharashtra', 'Chaitya halls', 'Buddhist'],
      ['Ajanta', 'Maharashtra, on the **Waghora** (Prelims 2021)', '30 caves; paintings', 'Buddhist'],
      ['Ellora', 'Maharashtra', '34 caves; Kailasa temple', 'Buddhist, Hindu, Jain'],
      ['Elephanta', 'Near Mumbai', 'Trimurti Sadashiva', 'Shaiva'],
      ['Udayagiri-Khandagiri', 'Odisha', 'Hathigumpha inscription; Rani Gumpha', 'Jain'],
      ['Sittanavasal', 'Tamil Nadu', 'Jain cave shrine with paintings (Prelims 2023)', 'Jain'],
      ['Udayagiri (Vidisha)', 'Madhya Pradesh', 'Varaha relief', 'Hindu'],
    ] },
    { t: 'note', kind: 'trap', title: 'Besnagar and "cave"', text: 'Prelims 2023 paired Besnagar with a Shaivite cave shrine. Besnagar is known for the Heliodorus Vaishnava pillar. So check both the faith and the type of monument in any such pair. Prelims 2016 tested that Ajanta and Mahabalipuram share only the rock-cut form, not their date or religion.' },

    { t: 'h', text: 'Temple styles' },
    { t: 'p', text: 'Texts list three styles, and the difference is in the top of the temple. The Gupta period began the free-standing stone temple. Early temples had a flat roof, like **Sanchi Temple 17**. The curved tower came next, as at **Deogarh**. The basic parts are the **garbhagriha** (sanctum), **mandapa** (hall), **shikhara** or **vimana** (tower), and **pradakshina patha**.' },
    { t: 'svg', id: 'temple-styles', caption: 'A simplified comparison. Real temples vary a lot. These are schematic, not scale drawings.' },
    { t: 'table', head: ['Feature', 'Nagara', 'Dravida', 'Vesara'], rows: [
      ['Region', 'North, Himalaya to Vindhyas', 'South of the Krishna', 'Deccan'],
      ['Tower', 'Curved shikhara, topped by amalaka and kalasha', 'Stepped pyramid vimana, topped by a stupika', 'Mixed'],
      ['Gateway', 'Not prominent', 'Tall **gopuram**, later larger than the vimana', 'Mixed'],
      ['Walls', 'Usually no boundary wall', 'Enclosure wall, with tank', 'Varies'],
      ['Examples', 'Deogarh, Khajuraho, Konark', 'Mahabalipuram, Kanchi, Thanjavur', 'Later Chalukya, Hoysala'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026 tested this exactly', text: 'UPSC asked which of four temples have a Nagara-style shikhara: Malegitti Shivalaya at Badami, Huchimalligudi at Aihole, Dashavatara at Deogarh and Virupaksha at Pattadakal. Malegitti and Virupaksha are Dravida. Chalukyan sites have both styles, which is the difficulty. **Pattadakal** is famous for showing both.' },
    { t: 'img', pic: { file: 'Ellora Caves, India, Kailasa Temple.jpg', credit: 'Vyacheslav Argenberg', license: 'CC BY 4.0' }, caption: 'The Kailasa temple, Ellora Cave 16, cut from a single rock under the Rashtrakuta king Krishna I in the eighth century. It is rock-cut in technique and Dravida in form.' },

    { t: 'h', text: 'Sculpture' },
    { t: 'p', text: 'The Mauryan polish and Yaksha figures came first. The Buddha image then developed under the Kushanas, in two centres. Later, the **Sarnath school** gave the Gupta period its refined seated Buddha with a plain halo, sheer drapery and calm face. Bronze casting advanced too, as at **Sultanganj**, where a large Buddha was found.' },
    { t: 'table', caption: 'The three early schools. See also the Post-Mauryan India topic.', head: ['School', 'Material', 'Style'], rows: [
      ['Gandhara', 'Grey schist', 'Hellenistic; wavy hair, drapery'],
      ['Mathura', 'Spotted red sandstone', 'Indigenous; energetic, also Jain and Hindu images'],
      ['Amaravati', 'White limestone', 'Narrative reliefs in slender figures'],
      ['Sarnath', 'Chunar sandstone', 'Gupta; fine, transparent drapery'],
    ] },

    { t: 'h', text: 'Painting' },
    { t: 'img', pic: { file: 'Bodhisattva Padmapani, cave 1, Ajanta, India.jpg', credit: 'Unknown', license: 'Public domain' }, caption: 'Bodhisattva Padmapani, Ajanta Cave 1. Note the soft modelling and the downcast eyes, which express compassion.', tall: true },
    { t: 'list', items: [
      '**Ajanta:** Caves 9 and 10 belong to the earlier phase (about 2nd-1st century BCE), and many others to the Vakataka phase (about 5th century CE). Themes are the Buddha\'s life and Jatakas. Technique uses a dry plaster with natural pigments, more like tempera than true fresco.',
      '**Bagh (MP):** Related to Ajanta. Prelims 2026 asked about **Hallisalasya**, a scene in the Bagh caves, which shows a joyous group folk dance.',
      '**Sittanavasal (TN):** Jain painting, once dated to the Pallavas and now often linked to the Pandyas.',
      '**Badami:** Early surviving Chalukyan cave painting, with a sixth-century Vishnu cave.',
      '**Six limbs (Shadanga):** From later Sanskrit writing: forms, proportion, emotion, grace, likeness and use of colour.',
    ] },

    { t: 'h', text: 'Literature' },
    { t: 'p', text: 'Ancient literature is covered in depth under each period. Connect the main works with their language: **Pali** for Buddhist canon, **Ardha-Magadhi** Prakrit for Jain Agamas, **Sanskrit** for the Vedas, epics and Kalidasa, and **Tamil** for Sangam. The Mahabharata was composed over a long time, and reached near its final form by about the fourth century CE, as R.S. Sharma says.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Good answer structures', text: 'For temple architecture, compare regional styles and use one example per style. In GS I, also explain why patronage matters: royal power, merchant wealth and religious merit all shaped monuments.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Nagara: curved. Dravida: stepped, gopuram. Vesara: mixed.',
      'Ajanta: Waghora, Buddhist, 30 caves. Ellora: three faiths, Kailasa.',
      'Gandhara grey; Mathura spotted red; Amaravati white; Sarnath fine Gupta.',
      'Barabar: Ajivikas. Sittanavasal: Jain. Bhaja: Buddhist.',
    ] },
  ],
  sources: [
    { label: 'Nitin Singhania, Indian Art and Culture, Ch 1-2' },
    { label: 'NCERT, An Introduction to Indian Art (Class XI)', url: 'https://ncert.nic.in/textbook.php' },
    { label: 'UNESCO: Ajanta Caves', url: 'https://whc.unesco.org/en/list/242/' },
    { label: 'UPSC Civil Services Prelims 2016, 2021, 2023, 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
