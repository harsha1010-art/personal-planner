import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-04',
  summary: 'How a pastoral society of the north-west became the agrarian, varna-based, kingship-led society of the Ganga valley, and the texts that record the change.',
  minutes: 20,
  hero: { file: 'Rigveda MS2097.jpg', credit: 'Unknown', license: 'Public domain' },
  heroAlt: 'A manuscript page of the Rigveda in Devanagari script',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The Vedic age is known mainly from texts, and this is its key contrast with the Harappans, who are known from objects. It is divided into the **Early Vedic** period (about 1500-1000 BCE), known from the Rig Veda, and the **Later Vedic** period (about 1000-500 BCE), known from the later Samhitas, Brahmanas, Aranyakas and early Upanishads. The geographical centre shifted from the **Sapta Sindhu** region to the **upper Ganga-Yamuna doab**.' },
    { t: 'p', text: 'The origin of Indo-Aryan speakers has long been debated. Linguistic similarities connect Sanskrit with Avestan, Greek and Latin. The **Boghazkoy inscription** (about 1400 BCE, in Turkey) names Indra, Varuna, Mitra and the Nasatyas. Recent ancient DNA studies support movement from the Central Asian steppe into South Asia in the second millennium BCE, and most scholars accept migration rather than a sudden invasion.' },

    { t: 'h', text: 'The Vedic texts' },
    { t: 'svg', id: 'vedic-texts', caption: 'Vedic literature moved from hymns, to ritual manuals, to philosophy. Together these are called Shruti, meaning "that which is heard".' },
    { t: 'table', head: ['Veda', 'Content', 'Remember', 'Upaveda'], rows: [
      ['Rig', 'Hymns to gods. **10 mandalas, 1,028 hymns**', 'Mandalas II-VII are the oldest "family books". Mandala III has the Gayatri Mantra. Mandala X has the Purusha Sukta.', 'Ayurveda'],
      ['Sama', 'Rig verses set to melody', 'Regarded as a root of Indian music', 'Gandharvaveda'],
      ['Yajur', 'Sacrificial formulas in prose and verse', 'Black (Krishna) and White (Shukla) versions', 'Dhanurveda'],
      ['Atharva', 'Charms, medicine, popular beliefs', 'Calls the sabha and samiti "daughters of Prajapati". Least priestly.', 'Shilpaveda'],
    ] },
    { t: 'list', items: [
      '**Brahmanas:** Prose explanations of ritual. The Shatapatha is associated with the Yajur Veda, and the Aitareya with the Rig Veda.',
      '**Aranyakas:** "Forest texts" that give ritual a symbolic meaning.',
      '**Upanishads:** Philosophical texts known as **Vedanta**. There are 108 by tradition, with about 13 major ones. "Satyameva Jayate" comes from the **Mundaka Upanishad**.',
      '**Vedangas:** Six supporting subjects: Shiksha (phonetics), Kalpa (ritual), Vyakarana (grammar), Nirukta (etymology), Chhanda (metre), Jyotisha (astronomy). These are treated as Smriti rather than Shruti.',
    ] },
    { t: 'note', kind: 'exam', title: 'Upanishads in Prelims', text: 'Prelims 2024 tested the statements that Upanishads have no parables, and that they are earlier than the Puranas. The first is wrong because the Upanishads do use stories and dialogues, and the second is right. Note how UPSC uses "no" and "all" to set a trap.' },

    { t: 'h', text: 'Rig Vedic geography' },
    { t: 'p', text: 'Most Early Vedic references point to the Afghan frontier, Punjab and the fringes of western UP. The Ganga is mentioned once and the Yamuna about three times. In contrast, the **Sindhu** is the most-mentioned river, and the **Sarasvati** is praised as the best of rivers (naditama).' },
    { t: 'table', caption: 'Ancient and modern river names. Prelims 2026 tested these pairs directly.', head: ['Vedic name', 'Modern name'], rows: [
      ['Vitasta', 'Jhelum'], ['Asikni', 'Chenab'], ['Parushni', 'Ravi'], ['Vipas', 'Beas'], ['Sutudri', 'Sutlej'], ['Drishadvati', 'Ghaggar (commonly identified)'], ['Gomati', 'Gomal'], ['Kubha', 'Kabul'], ['Krumu', 'Kurram'],
    ] },
    { t: 'p', text: 'The **Battle of Ten Kings** (dasarajna) was fought on the Parushni. **Sudas**, a Bharata chief advised by Vasishtha, defeated a confederacy of ten chiefs linked with Vishvamitra. The Bharatas later merged with the Purus to form the **Kurus**, who dominate Later Vedic texts.' },

    { t: 'h', text: 'How society changed' },
    { t: 'p', text: 'UPSC usually tests this topic as a comparison. If you remember one table from this topic, make it this one.' },
    { t: 'table', head: ['Area', 'Early Vedic (Rig Veda)', 'Later Vedic'], rows: [
      ['Region', 'Sapta Sindhu', 'Upper Ganga valley; Kuru-Panchala, later Kosala and Videha'],
      ['Economy', 'Mainly **pastoral**; cattle as wealth. Yava (barley) grown', 'Mainly **agrarian**; rice (vrihi), wheat. Crafts and early towns such as Hastinapur and Kaushambi'],
      ['Metals', 'Copper or bronze (ayas)', 'Iron from about 1000 BCE (shyama or krishna ayas), though its role in clearing forests is debated'],
      ['Pottery', 'No distinctive securely linked ware', '**Painted Grey Ware (PGW)**, with some black-and-red ware'],
      ['Polity', 'Tribal chief (rajan); jana', 'Territorial king; janapada and rashtra'],
      ['Assemblies', 'Sabha, samiti, vidatha, gana were strong; women attended some', 'Vidatha disappears, sabha and samiti weaken, and women are excluded'],
      ['Tax', 'Bali was largely voluntary', 'Bali, bhaga and shulka became regular, with a treasurer (sangrihitri) and tax collector (bhagadugha)'],
      ['Society', 'Fairly fluid; varna is not yet hereditary', 'Four varnas harden; gotra exogamy; ashramas emerge'],
      ['Women', 'Relatively better status; composers such as Lopamudra, Ghosha and Apala', 'Decline, with exceptions such as Gargi and Maitreyi'],
      ['Gods', 'Indra (most hymns), Agni, Varuna (keeper of **rita**), Soma', 'Prajapati, Vishnu, Rudra rise; Indra and Agni fade'],
      ['Worship', 'Simple prayers and offerings', 'Elaborate sacrifices led by priests'],
    ] },
    { t: 'compare', caption: 'Royal rituals grew as kingship grew.', columns: [
      { title: 'Rajasuya', items: ['Consecration ritual', 'Conferred supreme power on the king'] },
      { title: 'Ashvamedha', items: ['Horse sacrifice', 'Claim to rule all the land the horse crossed'] },
      { title: 'Vajapeya', items: ['Chariot race', 'The king was made to win against his kinsmen'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Words that shift meaning', text: '**Ayas** in the Rig Veda is usually read as copper or bronze, not iron. **Gavishti** literally means "search for cows", and it also came to mean war. **Gotra** first meant cow-pen, then a lineage. **Purusha Sukta** is in Mandala X, which is late, so it is not evidence of a rigid varna system in the earliest Rig Veda.' },
    { t: 'h3', text: 'Early officials and terms' },
    { t: 'list', items: [
      '**Purohita:** the chief priest; **senani:** army leader; **gramani:** head of the grama.',
      '**Kula** (family), **grama** (village), **vis** (clan) and **jana** (tribe) were the basic social units, in that order.',
      '**Ratnins** were the "jewel-holders" in Later Vedic texts, including the queen, the priest and the treasurer, whose homes the king visited during the Rajasuya.',
      '**Nishka** in the Rig Veda was an ornament, not a coin. Coins appear only later.',
    ] },

    { t: 'h', text: 'Religion and philosophy' },
    { t: 'wheel', caption: 'The four ashramas and four purusharthas are often confused. The fourth ashrama, sannyasa, was established later than the first three. The Jabala Upanishad is commonly cited for all four.', center: 'Ashramas', spokes: ['Brahmacharya\n(student)', 'Grihastha\n(householder)', 'Vanaprastha\n(forest life)', 'Sannyasa\n(renunciation)'] },
    { t: 'p', text: 'The Upanishads turned from sacrifice to self-knowledge. Their main ideas are **Brahman** (ultimate reality), **atman** (self), their identity, and **karma, samsara and moksha**. Some teachers were kshatriyas, such as Janaka of Videha, which hints at tension with priestly authority. These ideas formed the background to Buddhism and Jainism.' },
    { t: 'note', kind: 'recent', title: 'Why this is still asked', text: 'Questions on Sarasvati, the Rig Vedic economy and genetic studies keep the topic current. Prelims 2026 used the Rig Veda\'s references to wells, pulleys and draught animals to test how evidence supports a historical claim.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Connect it to today', text: 'Use the Vedic material in GS I answers on women in Indian society, on the origins of caste and on India\'s philosophical traditions. Keep your claims careful: these texts were written by priests and reflect elite ideas, not the lives of everyone.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Rig Veda: 10 mandalas, 1,028 hymns; Gayatri in III; Purusha Sukta in X.',
      'Most hymns: Indra, then Agni. Keeper of rita: Varuna.',
      'Early = pastoral, tribal, bali voluntary. Later = agrarian, territorial, iron, PGW, regular tax.',
      'Satyameva Jayate: Mundaka Upanishad.',
      'Battle of Ten Kings: Parushni (Ravi); Sudas won.',
    ] },
  ],
  sources: [
    { label: 'R.S. Sharma, Ancient India (NCERT), Ch 7-8' },
    { label: 'Narasimhan et al., Science (2019): The formation of human populations in South and Central Asia', url: 'https://doi.org/10.1126/science.aat7487' },
    { label: 'Wikipedia: Vedic period', url: 'https://en.wikipedia.org/wiki/Vedic_period' },
    { label: 'UPSC Civil Services Prelims 2024 and 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
