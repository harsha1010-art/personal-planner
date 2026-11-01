import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-06',
  summary: 'The two great shramana traditions: their founders, doctrines, councils, sects and texts, and how they shaped Indian art. This is one of the most heavily tested topics in ancient history.',
  minutes: 26,
  hero: { file: 'Stupa 1, Sanchi 02.jpg', credit: 'Bernard Gagnon', license: 'CC BY-SA 3.0' },
  heroAlt: 'The Great Stupa at Sanchi with its carved gateway',
  blocks: [
    { t: 'h', text: 'Why two new faiths arose' },
    { t: 'flow', caption: 'The sixth century BCE saw many wandering teachers, or shramanas. Six are named in Buddhist texts, including Makkhali Gosala of the Ajivikas.', steps: [
      { title: 'Ritual', sub: 'Costly Vedic sacrifices dominated by priests' },
      { title: 'Varna', sub: 'Kshatriyas and wealthy vaishyas resented brahmana privilege' },
      { title: 'Economy', sub: 'Farming needed cattle that sacrifice consumed; merchants wanted status' },
      { title: 'Ideas', sub: 'Upanishads had already questioned ritual' },
    ] },

    { t: 'h', text: 'The Buddha\'s life' },
    { t: 'p', text: 'Siddhartha Gautama was born about **563 BCE** (the date is traditional, and many scholars now prefer a later date) in **Lumbini**, in the Shakya gana-sangha, to Shuddhodana and Mayadevi. He was raised by his aunt Mahaprajapati Gautami. He married Yashodhara and had a son, Rahula. After seeing an old man, a sick man, a corpse and an ascetic, he left home at 29.' },
    { t: 'table', caption: 'Five events and their symbols. Early Buddhist art showed these symbols instead of the Buddha\'s body.', head: ['Event', 'Name', 'Place', 'Symbol'], rows: [
      ['Birth', 'Jati', 'Lumbini', 'Lotus and bull'],
      ['Leaving home', 'Mahabhinishkramana', 'Kapilavastu', 'Horse'],
      ['Enlightenment', 'Nirvana or Sambodhi', 'Bodh Gaya, on the Niranjana', 'Bodhi tree'],
      ['First sermon', 'Dharmachakra-pravartana', 'Sarnath (Rishipatana)', 'Wheel'],
      ['Death', 'Mahaparinirvana', 'Kushinagar', 'Stupa'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026: the empty seat', text: 'UPSC asked what an empty seat stood for in early Buddhist iconography. The answer rests on the idea that early artists showed the Buddha only through signs. Learn the sign for each event, as listed above and in NCERT\'s Themes in Indian History, Part I.' },

    { t: 'h', text: 'What the Buddha taught' },
    { t: 'compare', caption: 'The Four Noble Truths lead to the Eightfold Path, which is the Middle Way between luxury and harsh austerity.', columns: [
      { title: 'Four Noble Truths', items: ['**Dukkha:** life involves suffering', '**Samudaya:** craving is the cause', '**Nirodha:** suffering can end', '**Magga:** there is a path to end it'] },
      { title: 'Core ideas', items: ['**Anatta:** no permanent self', '**Anicca:** everything changes', '**Pratitya-samutpada:** dependent origination', '**Karma:** action shapes rebirth', '**Nirvana:** the blowing out of craving'] },
    ] },
    { t: 'wheel', caption: 'The Eightfold Path is grouped into wisdom (first two), ethics (next three) and concentration (last three).', center: 'Eightfold Path', spokes: ['Right View', 'Right Intention', 'Right Speech', 'Right Action', 'Right Livelihood', 'Right Effort', 'Right Mindfulness', 'Right Concentration'] },
    { t: 'list', items: [
      '**Triratna:** Buddha, Dhamma and Sangha.',
      '**Sangha rules:** Decisions were taken by vote, and women were admitted after Mahaprajapati\'s request, with extra rules.',
      '**Lay followers:** Upasaka (male) and upasika (female). A **parivrajaka** is a wandering renunciant, while a **shramana** was a renouncer, not a high-status priest. Prelims 2020 tested exactly these terms.',
      '**Epithets:** Shakyamuni and Tathagata refer to the Buddha. **Nayaputta**, in contrast, is a name for Mahavira, as tested in Prelims 2024.',
    ] },

    { t: 'h', text: 'Texts and councils' },
    { t: 'p', text: 'The **Tripitaka** or "three baskets" were written in Pali: **Vinaya** (monastic rules), **Sutta** (teachings) and **Abhidhamma** (philosophy). The **Jatakas** are stories of the Buddha\'s earlier lives. Other works include the Milindapanho (King Menander and Nagasena), Dipavamsa and Mahavamsa (Sri Lankan chronicles), and Ashvaghosha\'s Buddhacharita.' },
    { t: 'table', caption: 'Learn this table cold. The Third and the Sri Lankan Fourth are recorded only in Theravada sources, and the Kashmir Fourth only in northern ones.', head: ['Council', 'Year', 'Place', 'King', 'President', 'Result'], rows: [
      ['First', 'c. 483 BCE', 'Rajagriha (Sattaparni cave)', 'Ajatashatru', 'Mahakassapa', 'Vinaya recited by Upali, Sutta by Ananda'],
      ['Second', 'c. 383 BCE', 'Vaishali', 'Kalashoka', 'Sabakami', 'Dispute over lax rules; split into Sthaviravadins and Mahasanghikas'],
      ['Third', 'c. 250 BCE', 'Pataliputra', 'Ashoka', 'Moggaliputta Tissa', 'Kathavatthu added; missions sent abroad'],
      ['Fourth', '1st century CE', 'Kundalvana, Kashmir', 'Kanishka', 'Vasumitra (Ashvaghosha as deputy)', 'Sarvastivada commentary; Mahayana rises'],
      ['Fourth (Sri Lanka)', '1st century BCE', 'Aluvihara', 'Vattagamani', 'Not agreed', 'Pali canon written down'],
    ] },

    { t: 'h', text: 'Schools of Buddhism' },
    { t: 'table', head: ['', 'Hinayana / Theravada', 'Mahayana', 'Vajrayana'], rows: [
      ['Goal', 'Arhat: personal liberation', 'Bodhisattva: help all beings', 'Faster liberation through ritual'],
      ['Buddha', 'A great human teacher', 'A divine saviour figure', 'Many divine forms; female deities (Taras)'],
      ['Language', 'Pali', 'Sanskrit', 'Sanskrit, later Tibetan'],
      ['Worship', 'Symbols, with little image worship', 'Image worship and rituals', 'Mantra, mudra, mandala'],
      ['Region today', 'Sri Lanka, Myanmar, Thailand', 'China, Japan, Korea', 'Tibet, Mongolia, Bhutan'],
    ] },
    { t: 'img', pic: { file: 'Gandhara Buddha (tnm).jpeg', credit: 'Tokyo National Museum', license: 'Public domain' }, caption: 'A Gandhara Buddha. Showing the Buddha in human form became common with Mahayana-era art under the Kushanas, with Gandhara and Mathura as the main centres.', tall: true },
    { t: 'list', items: [
      '**Bodhisattvas:** Avalokiteshvara or Padmapani (compassion), Manjushri (wisdom), Vajrapani (power), Kshitigarbha, and **Maitreya, the future Buddha**. Prelims 2018 asked about Maitreya.',
      '**Thinkers:** Nagarjuna (Madhyamaka, shunyata or emptiness), Asanga and Vasubandhu (Yogachara), Dignaga (logic). Prelims 2022 tested these.',
      '**Origin of Mahayana:** Prelims 2020 tested that Sthaviravadins do not belong to Mahayana, that Lokottaravada grew from the Mahasanghikas, and that Mahasanghika deification of the Buddha helped foster Mahayana.',
      '**Centres:** Nalanda (founded under Kumaragupta I), Vikramashila (Dharmapala of the Palas), Odantapuri, Valabhi. **Dhanyakataka** in Andhra was a Mahasanghika centre, as tested in Prelims 2023.',
    ] },

    { t: 'h', text: 'Stupas and Buddhist art' },
    { t: 'svg', id: 'stupa', caption: 'Parts of a stupa. The idea of a burial mound is older than Buddhism, which is why "the concept of stupa is Buddhist in origin" was a false statement in Prelims 2023.' },
    { t: 'compare', columns: [
      { title: 'Chaitya', items: ['Prayer hall with a stupa at one end', 'Karle, Bhaja, Ajanta 19 and 26', 'Barrel-vaulted roof'] },
      { title: 'Vihara', items: ['Monks\' residence', 'Central hall with cells', 'Ajanta, Nashik, Nagarjunakonda'] },
      { title: 'Stupa', items: ['Relic mound', 'Sanchi, Bharhut, Amaravati, Sarnath', 'Walked around clockwise'] },
    ] },

    { t: 'h', text: 'Mahavira and Jainism' },
    { t: 'p', text: 'Jain tradition counts **24 tirthankaras**. The first was **Rishabhadeva**, the 23rd **Parshvanatha** (who was likely historical, around the eighth century BCE), and the 24th **Vardhamana Mahavira**. Mahavira was therefore not the founder of Jainism, but its last great reformer.' },
    { t: 'p', text: 'He was born about **540 BCE** at Kundagrama near Vaishali, to Siddhartha, head of the Jnatrika clan, and Trishala, a Licchavi. He left home at 30, attained **kaivalya** at 42 near Jrimbhikagrama, on the Rijupalika, and died at 72 at **Pavapuri**, near Rajgir. His followers were called **Nirgranthas**, meaning "free from bonds".' },
    { t: 'compare', caption: 'Parshvanatha gave the first four vows. Mahavira added the fifth, brahmacharya.', columns: [
      { title: 'Five vows', items: ['Ahimsa: non-violence', 'Satya: truth', 'Asteya: non-stealing', 'Aparigraha: non-possession', 'Brahmacharya: chastity'] },
      { title: 'Three jewels', items: ['Samyak darshana: right faith', 'Samyak jnana: right knowledge', 'Samyak charitra: right conduct'] },
      { title: 'Key ideas', items: ['**Jiva** exists in all things, even stones and water (Prelims 2023)', '**Anekantavada:** truth has many sides', '**Syadvada:** every claim is conditional', '**Sallekhana:** a fast unto death', 'No creator god'] },
    ] },
    { t: 'table', head: ['', 'Digambara', 'Shvetambara'], rows: [
      ['Meaning', 'Sky-clad', 'White-clad'],
      ['Associated with', 'Bhadrabahu; went south during a famine', 'Sthulabhadra; stayed in the north'],
      ['Monks', 'Nudity for monks', 'Wear white robes'],
      ['Women', 'Cannot attain liberation without rebirth as men', 'Can attain liberation'],
      ['Mahavira', 'Never married', 'Married Yashoda'],
      ['19th Tirthankara', 'Mallinath was male', 'Mallinath was female'],
    ] },
    { t: 'list', items: [
      '**Councils:** First at Pataliputra (about 300 BCE, under Sthulabhadra). Second at **Vallabhi** (512 CE, under Devardhi Kshamashramana), where the texts were written down.',
      '**Texts:** The **Agamas** were written in **Ardha-Magadhi**. These include 12 Angas. Also Kalpasutra by Bhadrabahu.',
      '**Sub-sects:** Sthanakvasis, a Shvetambara reform sect, reject idol worship. Prelims 2018 asked which faith they belong to. Terapanthis are another such sect.',
      '**Patrons:** Chandragupta Maurya (by tradition), Kharavela of Kalinga (Hathigumpha inscription), Chalukyas and Gangas in the south.',
    ] },
    { t: 'img', pic: { file: 'The Gommateshwara Statue, Shravanabelagola 01.jpg', credit: 'Rohit14400', license: 'CC BY-SA 4.0' }, caption: 'Gommateshwara (Bahubali) at Shravanabelagola, Karnataka, made under the Ganga minister Chavundaraya around 983 CE. It stands about 17 metres tall.', tall: true },

    { t: 'h', text: 'Buddhism and Jainism compared' },
    { t: 'table', head: ['', 'Buddhism', 'Jainism'], rows: [
      ['Soul', 'Denied (anatta)', 'Affirmed in all things (jiva)'],
      ['Practice', 'Middle Way', 'Severe austerity'],
      ['Ahimsa', 'Moderate', 'Very strict, which limited occupations'],
      ['Language', 'Pali', 'Prakrit (Ardha-Magadhi)'],
      ['Spread', 'Across Asia; declined in India', 'Stayed in India, sustained by merchants'],
      ['Shared', 'Reject Vedic authority and sacrifice; accept karma; no caste bar in the order; both led by kshatriya founders', 'Same'],
    ] },
    { t: 'note', kind: 'trap', title: 'Same words, different meanings', text: '**Nirvana** in Buddhism is the end of craving, while **kaivalya** in Jainism is pure knowledge of the soul. **Mahasanghika** is a Buddhist sect, not Jain. Neither faith rejected karma or rebirth, and neither set out to abolish caste in wider society.' },
    { t: 'h3', text: 'Why Buddhism declined in India' },
    { t: 'list', items: [
      'Rituals and wealth grew within the monasteries, and they became more detached from lay people.',
      'Brahmanism absorbed Buddhist ideas, and even made the Buddha an avatar of Vishnu.',
      'Pali gave way to Sanskrit, which narrowed popular reach.',
      'Royal patronage shifted, and Turkish raids destroyed Nalanda and Vikramashila around 1200 CE.',
    ] },
    { t: 'note', kind: 'recent', title: 'Current links', text: 'In October 2024, the Union Cabinet declared **Pali and Prakrit** classical languages. In 2025, the **Piprahwa gems**, linked to relics of the Buddha, were returned to India after a planned auction in Hong Kong was halted. Both can anchor a static question on Buddhist heritage.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'exam', title: 'How often it comes up', text: 'This topic appeared in at least eight of the ten official papers checked (2016, 2018-2026). Questions most often test doctrine, sects and specialised terms, rather than biography. Words like Bodhisattva, Mahayana and Mahasanghika recur.' },
    { t: 'note', kind: 'mains', title: 'What to prepare', text: 'Be ready to discuss the social background of these movements, their contribution to Indian art, and whether their ethics still apply. Ahimsa connects to Gandhi, and pluralism (anekantavada) connects to GS IV.' },
  ],
  sources: [
    { label: 'R.S. Sharma, Ancient India (NCERT), Ch 9' },
    { label: 'NCERT, Themes in Indian History Part I, Ch 4 Thinkers, Beliefs and Buildings' },
    { label: 'Nitin Singhania, Indian Art and Culture, Ch 12 Religions in India' },
    { label: 'Wikipedia: Buddhist councils', url: 'https://en.wikipedia.org/wiki/Buddhist_councils' },
    { label: 'PIB, Cabinet approves classical language status (October 2024)', url: 'https://pib.gov.in/' },
    { label: 'UPSC Civil Services Prelims 2016, 2018-2020, 2022-2024, 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
