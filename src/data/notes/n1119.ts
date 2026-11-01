import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-19',
  summary: 'Two devotional movements that reshaped Indian religion: Alvars and Nayanars, Sagun and Nirgun saints, and the Sufi orders.',
  minutes: 18,
  hero: { file: 'Painting of Kabir, Amber, ca.1750–1800.jpg', credit: 'Qa\'im Khan Bin Zafar Bahadur', license: 'Public domain' },
  heroAlt: 'An eighteenth-century painting of Kabir at his loom',
  blocks: [
    { t: 'h', text: 'Bhakti: the big picture' },
    { t: 'p', text: 'Bhakti means loving personal devotion to God. It began in **Tamil country** around the **sixth to ninth centuries** with the **Alvars** (Vishnu) and **Nayanars** (Shiva). It later spread north, often in vernacular languages, and challenged ritual and birth-based hierarchy to varying degrees.' },
    { t: 'table', head: ['Group', 'Devotion to', 'Key names', 'Texts'], rows: [
      ['Alvars (12)', 'Vishnu', '**Andal** (woman), Nammalvar, Periyalvar', 'Nalayira Divya Prabandham'],
      ['Nayanars (63)', 'Shiva', 'Appar, Sambandar, Sundarar, **Karaikkal Ammaiyar** (woman)', 'Tevaram, Tirumurai'],
    ] },
    { t: 'h3', text: 'Philosophers' },
    { t: 'table', head: ['Teacher', 'School', 'Idea'], rows: [
      ['Shankara', 'Advaita', 'Non-dualism; refuted Buddhism; set up mathas'],
      ['Ramanuja', 'Vishishtadvaita', 'Qualified non-dualism; "the best means of salvation was devotion" (Prelims 2022)'],
      ['Madhva', 'Dvaita', 'Dualism of God and soul'],
      ['Nimbarka', 'Dvaitadvaita', 'Both dual and non-dual'],
      ['Vallabha', 'Shuddhadvaita', 'Pushti Marg; Krishna worship'],
    ] },
    { t: 'h', text: 'North Indian Bhakti' },
    { t: 'compare', columns: [
      { title: 'Nirguna (God without form)', items: ['**Kabir:** a weaver; Bijak; criticised Hindu and Muslim ritual', '**Guru Nanak:** founder of Sikhism; langar', '**Ravidas:** a leatherworker', '**Dadu Dayal:** Rajasthan', 'Language of the people'] },
      { title: 'Saguna (God with form)', items: ['**Tulsidas:** Ramcharitmanas, in Awadhi', '**Surdas:** Sursagar, Krishna', '**Mirabai:** Rajput princess, Krishna', '**Chaitanya:** Bengal; Gaudiya Vaishnavism, kirtan', '**Sankardev:** Assam; Ekasarana, Namghar'] },
    ] },
    { t: 'h3', text: 'Regional traditions' },
    { t: 'table', head: ['Region', 'Saints', 'Remember'], rows: [
      ['Maharashtra', 'Jnaneshwar, Namdev, Eknath, Tukaram', 'Varkari tradition; Vitthal at Pandharpur'],
      ['Karnataka', '**Basava**, Akka Mahadevi, Purandaradasa', 'Lingayats (Virashaivas); Anubhava Mantapa'],
      ['Kashmir', 'Lal Ded', 'Shaiva mystic'],
      ['Assam', 'Sankardev', 'Satras, Bhaona theatre'],
    ] },
    { t: 'note', kind: 'trap', title: 'Ramananda, Kabir and caste', text: 'Bhakti saints challenged caste in spirit, but it did not end caste in society. Ramananda linked north and south. Many of the Sagun texts defend order. Avoid options that say Bhakti abolished caste or Hindu-Muslim differences.' },

    { t: 'h', text: 'Sufism' },
    { t: 'p', text: 'Sufism is the mystical tradition within Islam. It stresses love for God through inner devotion. Sufis in India organised as **silsilas** (orders), led by a **pir** (or sheikh), with disciples called **murids**, based in a **khanqah**. Key practices are **sama** (devotional music), **zikr** (remembrance), and **fana** (annihilation of the self).' },
    { t: 'table', caption: 'Learn the four main orders. Be aware of differences on music and on state contact.', head: ['Order', 'Key figures', 'Remember'], rows: [
      ['Chishti', 'Moinuddin Chishti (Ajmer), Bakhtiyar Kaki, Nizamuddin Auliya, Nasiruddin Chirag', 'Distanced from state; sama allowed; popular with the masses'],
      ['Suhrawardi', 'Bahauddin Zakariya (Multan)', 'Took state grants, and engaged with rulers'],
      ['Naqshbandi', 'Baqi Billah, **Ahmad Sirhindi**', 'Orthodox; opposed Akbar\'s liberal policy'],
      ['Qadiri', 'Miyan Mir', 'Dara Shikoh was a follower'],
    ] },
    { t: 'img', pic: { file: 'Painting of Kabir with two singing companions, Rajasthan, circa 18th century.jpg', credit: 'Unknown', license: 'Public domain' }, caption: 'Kabir with companions. His verses, called dohas, circulated orally and were later recorded in several traditions, including the Guru Granth Sahib.' },
    { t: 'p', text: '**Wahdat-ul-wujud** (unity of being) was given by Ibn Arabi. Sirhindi opposed it with **wahdat-ul-shuhud** (unity of appearance). **Amir Khusrau** was Nizamuddin Auliya\'s disciple, and linked to qawwali.' },
    { t: 'h', text: 'Shared effects' },
    { t: 'flow', steps: [
      { title: 'Language', sub: 'Vernacular literature grew: Hindi, Marathi, Bengali, Assamese' },
      { title: 'Music', sub: 'Kirtan, bhajan and qawwali' },
      { title: 'Society', sub: 'Space for women and lower castes, within limits' },
      { title: 'Syncretism', sub: 'Shared shrines, though also tensions' },
    ] },
    { t: 'note', kind: 'mains', title: 'Common question', text: 'Be ready to compare both movements and to assess their limits. Use **Basava\'s** Anubhava Mantapa as an example of early democratic debate, and Kabir for present discussions on pluralism.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: ['Alvars for Vishnu, Nayanars for Shiva.', 'Nirguna: Kabir, Nanak. Saguna: Tulsidas, Mira.', 'Chishti: Ajmer. Suhrawardi: Multan.', 'Basava: Lingayats. Sankardev: Assam.'] },
  ],
  sources: [
    { label: 'Nitin Singhania, Indian Art and Culture, Appendix 2 on Bhakti and Sufi Movement' },
    { label: 'NCERT, Themes in Indian History Part II, Ch 6 Bhakti-Sufi Traditions', url: 'https://ncert.nic.in/textbook.php' },
    { label: 'Satish Chandra, History of Medieval India, Ch 11 and 17' },
    { label: 'UPSC Civil Services Prelims 2022, GS Paper I, Q95', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
