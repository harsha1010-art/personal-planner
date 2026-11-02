import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-19'
const S = 'Notes: Bhakti and Sufi movements'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1119-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', 'The Alvars of the Tamil country were devotees of', null, null,
    ['Shiva', 'Vishnu', 'Murugan', 'Surya'], 1,
    'The Alvars were devotees of Vishnu, while the Nayanars were devotees of Shiva.',
    ['Shiva was the deity of the Nayanars, the other Tamil Bhakti group.', '', 'The Alvars are defined by devotion to Vishnu, not to Murugan.', 'The Alvars are defined by devotion to Vishnu, not to Surya.'],
    'Alvars and Nayanars', 'Alvars: Vishnu. Nayanars: Shiva.', 'This is the first line of the note\'s quick recall.'),
  q(2, 'easy', 'factual', 'The Ramcharitmanas, written in Awadhi, is the work of', null, null,
    ['Surdas', 'Kabir', 'Tulsidas', 'Dadu Dayal'], 2,
    'Tulsidas, a saguna saint devoted to Rama, wrote the Ramcharitmanas in Awadhi.',
    ['Surdas is known for the Sursagar, centred on Krishna.', 'Kabir was a nirguna saint, linked with the Bijak.', '', 'Dadu Dayal was a nirguna saint from Rajasthan, not this author.'],
    'Tulsidas', 'Tulsidas: Ramcharitmanas, in Awadhi.', 'Author-to-work pairs are standard in this topic.'),
  q(3, 'easy', 'factual', 'Kabir, whose verses are linked with the Bijak, worked as a', null, null,
    ['leatherworker', 'weaver', 'tailor', 'barber'], 1,
    'Kabir was a weaver. His sayings are linked with the Bijak, and he criticised both Hindu and Muslim ritual.',
    ['Ravidas, another nirguna saint, was the leatherworker.', '', 'The tailor among the saints was Namadeva, not Kabir.', 'Sena, a disciple of Ramananda, was the barber, not Kabir.'],
    'Kabir', 'Kabir: weaver, Bijak, nirguna.', 'Saints from artisan groups show the social spread of Bhakti.', 'Notes: North Indian Bhakti; Satish Chandra, History of Medieval India (Bhakti movement)'),
  q(4, 'easy', 'factual', 'Sankardev, linked with Ekasarana and the Namghar, belongs to the Bhakti tradition of', null, null,
    ['Bengal', 'Maharashtra', 'Odisha', 'Assam'], 3,
    'Sankardev belongs to Assam, where he is linked with Ekasarana, the Namghar, satras and Bhaona theatre.',
    ['Bengal\'s best-known Bhakti figure in this note is Chaitanya, not Sankardev.', 'Maharashtra\'s Bhakti saints include Jnaneshwar and Tukaram.', 'Sankardev is firmly tied to Assam and its satras, not to Odisha.', ''],
    'Sankardev', 'Sankardev: Assam, Ekasarana, Namghar.', 'The note lists this in quick recall.'),
  q(5, 'easy', 'factual', 'The Chishti saint Moinuddin Chishti is associated with', null, null,
    ['Ajmer', 'Multan', 'Sirhind', 'Pandharpur'], 0,
    'Moinuddin Chishti established himself at Ajmer. Multan belongs with Bahauddin Zakariya of the Suhrawardi order.',
    ['', 'Multan is associated with Bahauddin Zakariya, a Suhrawardi saint.', 'Sirhind gives its name to Ahmad Sirhindi, a Naqshbandi figure.', 'Pandharpur is the centre of Vitthal worship in Maharashtra.'],
    'Chishti centre', 'Chishti: Ajmer. Suhrawardi: Multan.', 'The note lists this in quick recall.'),
  q(6, 'easy', 'factual', 'Basava is associated with which of the following traditions?', null, null,
    ['Varkaris', 'Lingayats', 'Gaudiya Vaishnavas', 'Pushti Marg'], 1,
    'Basava is associated with the Lingayats, also called Virashaivas, in Karnataka.',
    ['Varkaris centre on Vitthal at Pandharpur in Maharashtra.', '', 'Gaudiya Vaishnavism is linked with Chaitanya in Bengal.', 'Pushti Marg is linked with Vallabha and Krishna worship.'],
    'Basava', 'Basava: Lingayats, Karnataka.', 'A regional link that the note stresses.'),
  q(7, 'easy', 'factual', 'The Adi Granth was compiled by', null, null,
    ['Guru Nanak', 'Guru Angad', 'Guru Arjan', 'Guru Hargobind'], 2,
    'Guru Arjan compiled the Adi Granth, and he was executed under Jahangir in 1606.',
    ['Guru Nanak founded the tradition, but the compilation came under a later Guru.', 'Guru Angad is linked with popularising the Gurmukhi script.', '', 'Guru Hargobind is linked with the Akal Takht and with miri and piri.'],
    'Adi Granth', 'Adi Granth: Guru Arjan.', 'The Gurus are often tested alongside Bhakti.'),
  q(8, 'easy', 'factual', 'In the Sufi tradition, a khanqah is', null, null,
    ['devotional music', 'the remembrance of God', 'the base of a Sufi pir and his disciples', 'the annihilation of the self'], 2,
    'A khanqah is the base where a pir lives with his disciples, the murids. Sama, zikr and fana are the practices named in the other options.',
    ['Devotional music is sama, not the khanqah.', 'Remembrance of God is zikr, not the khanqah.', '', 'Annihilation of the self is fana, not the khanqah.'],
    'Sufi vocabulary', 'Khanqah: the base. Sama: music. Zikr: remembrance. Fana: self-annihilation.', 'Sufi terms are direct recall.'),

  // Moderate
  y(2022, 95, 41, 'moderate', 'factual', 'The world\'s second tallest statue in sitting pose of Ramanuja was inaugurated by the Prime Minister of India at Hyderabad recently. Which one of the following statements correctly represents the teachings of Ramanuja ?', null, null,
    ['The best means of salvation was devotion.', 'Vedas are eternal, self-existent and wholly authoritative.', 'Logical arguments were essential means for the highest bliss.', 'Salvation was to be obtained through meditation.'], 0,
    'Ramanuja held that the best means of salvation was devotion, as the note records. His school is Vishishtadvaita, or qualified non-dualism.',
    ['', 'This stresses the authority of scripture alone, and misses the devotion at the centre of Ramanuja\'s teaching.', 'This puts reasoning first, while Ramanuja\'s stress was on devotion.', 'This puts meditation first, while Ramanuja named devotion as the best means.'],
    'Ramanuja on salvation', 'Ramanuja: devotion is the best means of salvation.', 'The note records this as a Prelims 2022 question.', 'Notes: Philosophers; Prelims 2022 GS I, Q95'),
  y(2016, 17, 9, 'moderate', 'multi-statement', 'With reference to the cultural history of medieval India, consider the following statements :', ['1. Siddhas (Sittars) of Tamil region were monotheistic and condemned idolatry.', '2. Lingayats of Kannada region questioned the theory of rebirth and rejected the caste hierarchy.'], 'Which of the statements given above is/are correct?',
    ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 2,
    'Both are correct. The Tamil Siddhas were monotheistic critics of idol worship, and the Lingayats opposed the caste system and questioned rebirth.',
    ['Statement 2 is also correct: the Lingayats opposed caste and questioned rebirth.', 'Statement 1 is also correct: the Siddhas were monotheistic and condemned idolatry.', '', 'Both are supported, so Neither cannot be the answer.'],
    'Siddhas and Lingayats', 'Lingayats: against caste; questioned rebirth.', 'It extends the Karnataka tradition that the note stresses.', 'Notes: Regional traditions; Satish Chandra, History of Medieval India (Lingayat movement); Prelims 2016 GS I, Q17'),
  q(9, 'moderate', 'match', 'Match the teachers with their schools:', ['A. Shankara', 'B. Ramanuja', 'C. Madhva', 'D. Vallabha', '1. Dvaita', '2. Shuddhadvaita', '3. Advaita', '4. Vishishtadvaita'], 'Select the correct code.',
    ['A-4, B-3, C-1, D-2', 'A-3, B-4, C-2, D-1', 'A-1, B-4, C-3, D-2', 'A-3, B-4, C-1, D-2'], 3,
    'Shankara taught Advaita, Ramanuja Vishishtadvaita, Madhva Dvaita and Vallabha Shuddhadvaita.',
    ['This swaps A and B: Shankara is Advaita and Ramanuja Vishishtadvaita.', 'This swaps C and D: Madhva is Dvaita and Vallabha Shuddhadvaita.', 'This swaps A and C: Shankara is Advaita and Madhva Dvaita.', ''],
    'Vedanta schools', 'Advaita, Vishishtadvaita, Dvaita, Shuddhadvaita.', 'Very similar terms make this an obvious matching test.'),
  q(10, 'moderate', 'multi-statement', 'Consider the following saints:', ['1. Kabir', '2. Ravidas', '3. Surdas'], 'How many of the above belong to the nirguna tradition?',
    COUNT, 1,
    'Kabir and Ravidas were nirguna saints, while Surdas, a devotee of Krishna, was a saguna saint.',
    ['Both Kabir and Ravidas are nirguna, so one is too few.', '', 'Surdas fails, since he was a saguna saint devoted to Krishna.', 'Kabir and Ravidas are nirguna, so None cannot be the answer.'],
    'Nirguna and saguna', 'Nirguna: Kabir, Ravidas. Saguna: Surdas, Tulsidas.', 'The basic classification of north Indian Bhakti.'),
  q(11, 'moderate', 'match', 'Consider the following pairs of region and saint:', ['1. Maharashtra : Tukaram', '2. Karnataka : Purandaradasa', '3. Kashmir : Lal Ded'], 'How many of the above pairs are correctly matched?',
    COUNT, 2,
    'All three are correct. Tukaram belongs to Maharashtra\'s Varkari tradition, Purandaradasa to Karnataka and Lal Ded, a Shaiva mystic, to Kashmir.',
    ['All three follow the note\'s table, so one is too few.', 'Each pair is correct, so two is too few.', '', 'All three pairs are correct, so None cannot be the answer.'],
    'Regional saints', 'Tukaram, Purandaradasa, Lal Ded: Maharashtra, Karnataka, Kashmir.', 'Region-to-saint questions are regular in culture sections.'),
  q(12, 'moderate', 'match', 'Consider the following pairs of Guru and contribution:', ['1. Guru Angad : Gurmukhi script popularised', '2. Guru Amar Das : Manji system', '3. Guru Ram Das : Akal Takht', '4. Guru Tegh Bahadur : Executed under Aurangzeb'], 'How many of the above pairs are correctly matched?',
    ['Only one', 'Only two', 'Only three', 'All four'], 2,
    'Pairs 1, 2 and 4 are correct. Guru Ram Das founded Ramdaspur, later Amritsar, while the Akal Takht belongs with Guru Hargobind.',
    ['Pairs 1, 2 and 4 all hold, so one is too few.', 'Only pair 3 fails, so three pairs are correct, not two.', '', 'Pair 3 fails: the Akal Takht belongs with Guru Hargobind.'],
    'Sikh Gurus', 'Ram Das: Ramdaspur. Hargobind: Akal Takht.', 'Each Guru\'s contribution can be swapped with a neighbour\'s.'),
  q(13, 'moderate', 'assertion-reason', 'Statement I: The Tamil Bhakti saints could reach a wide audience.\nStatement II: They preached and composed in the local language.', null, 'Which one of the following is correct?',
    SI, 0,
    'Both are correct, and II explains I. By using the local language, when Sanskrit was still the language of thought, the saints could speak to people directly.',
    ['', 'Use of the local language is a direct reason for wider reach, so II does explain I.', 'II is also correct: they composed in local languages.', 'I is also correct: the movement grew popular across social groups.'],
    'Vernacular Bhakti', 'Vernacular speech widened the reach of Bhakti.', 'Vernacular growth is named as a main shared effect of the two movements.', 'Notes: Bhakti: the big picture; Satish Chandra, History of Medieval India (Bhakti movement)'),
  q(14, 'moderate', 'assertion-reason', 'Statement I: The Chishti order allowed sama.\nStatement II: Moinuddin Chishti is associated with Ajmer.', null, 'Which one of the following is correct?',
    SI, 1,
    'Both are correct, but II does not explain I. Where a saint settled is no reason for the use of devotional music.',
    ['A saint\'s place of residence does not account for the use of sama, so II does not explain I.', '', 'II is also correct, as Moinuddin Chishti is linked with Ajmer.', 'I is also correct, as the note states that sama was allowed.'],
    'Chishti practice', 'Chishti: Ajmer, sama, distance from the state.', 'It separates two true facts from a causal claim.'),
  q(15, 'moderate', 'assertion-reason', 'Statement I: The Suhrawardis took state grants and engaged with rulers.\nStatement II: The Chishtis, like the Suhrawardis, sought close links with the state.', null, 'Which one of the following is correct?',
    SI, 2,
    'Statement I is correct, but II is wrong. The Chishtis kept their distance from state politics, and this is the main contrast with the Suhrawardis.',
    ['II is incorrect, so it cannot explain I: the Chishtis stayed away from the state.', 'II is not correct at all, because the Chishtis kept away from rulers.', '', 'I is correct: the Suhrawardis accepted grants and engaged with rulers.'],
    'Sufis and the state', 'Chishtis kept away; Suhrawardis engaged.', 'The note singles out this difference between orders.', 'Notes: Sufism; Satish Chandra, History of Medieval India (Sufi movement)'),
  q(16, 'moderate', 'assertion-reason', 'Statement I: The Bhakti movement abolished caste in Indian society.\nStatement II: Ramananda linked Bhakti in the north and the south.', null, 'Which one of the following is correct?',
    SI, 3,
    'Statement I is wrong and II is right. Bhakti saints challenged caste in spirit, but the movement did not end caste in society. Ramananda did link north and south.',
    ['I is wrong, as caste was not abolished, so II cannot explain it.', 'I is wrong, so both statements cannot be correct.', 'I is the wrong statement here, while II on Ramananda is correct.', ''],
    'Limits of Bhakti', 'Bhakti challenged caste but did not end it.', 'The note tells candidates to avoid options saying Bhakti abolished caste.', 'Notes: Regional traditions; Satish Chandra, History of Medieval India (Bhakti movement)'),
  q(17, 'moderate', 'match', 'Match the Sufi terms with their meanings:', ['A. Zikr', 'B. Sama', 'C. Fana', 'D. Murid', '1. Disciple', '2. Annihilation of the self', '3. Remembrance', '4. Devotional music'], 'Select the correct code.',
    ['A-3, B-4, C-2, D-1', 'A-4, B-3, C-2, D-1', 'A-3, B-4, C-1, D-2', 'A-2, B-4, C-3, D-1'], 0,
    'Zikr means remembrance, sama devotional music, fana annihilation of the self, and a murid is a disciple.',
    ['', 'This swaps A and B: zikr is remembrance and sama is music.', 'This swaps C and D: fana is self-annihilation and a murid is a disciple.', 'This swaps A and C: zikr is remembrance and fana is self-annihilation.'],
    'Sufi terms', 'Zikr, sama, fana, murid.', 'The note names each of these key terms.'),
  q(18, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. Andal was a woman among the Alvars.', '2. Karaikkal Ammaiyar was a woman among the Alvars.'], 'Which of the statements given above is/are correct?',
    BOTH, 0,
    'Only statement 1 is correct. Karaikkal Ammaiyar was a woman among the Nayanars, not the Alvars.',
    ['', 'Statement 2 fails, since Karaikkal Ammaiyar was a Nayanar.', 'Statement 2 fails: she belongs with the Shiva devotees.', 'Statement 1 is correct, as Andal was an Alvar.'],
    'Women in Tamil Bhakti', 'Andal: Alvar. Karaikkal Ammaiyar: Nayanar.', 'These two names are often swapped.'),
  q(19, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. Baqi Billah belonged to the Naqshbandi order.', '2. Ahmad Sirhindi opposed Akbar\'s liberal policy.', '3. Dara Shikoh was a follower of Miyan Mir of the Qadiri order.'], 'How many of the above statements are correct?',
    COUNT, 2,
    'All three are correct. The Naqshbandis, with Baqi Billah and Sirhindi, were orthodox, and Dara Shikoh followed Miyan Mir of the Qadiris.',
    ['All three are supported, so one is too few.', 'None of the three fails, so two is too few.', '', 'Each is supported, so None cannot be the answer.'],
    'Later Sufi orders', 'Naqshbandi: Sirhindi. Qadiri: Miyan Mir, Dara.', 'Sufi orders link this topic with Mughal politics.'),
  q(20, 'moderate', 'statement', 'Which one of the following statements about Bhakti and Sufi movements is correct?', null, null,
    ['Sufis used Persian, and also Hindavi and regional languages', 'Bhakti saints wrote only in Sanskrit', 'Every Bhakti teacher belonged to a formal silsila', 'Sufi practice centred on the temple and the street'], 0,
    'Sufis used Persian, and also Hindavi and regional languages. Bhakti saints used regional languages and often had no formal order.',
    ['', 'Bhakti spread largely through regional languages, not Sanskrit alone.', 'Silsila is a Sufi term, and a Bhakti guru often had no formal order.', 'Sufi practice centred on the khanqah and dargah; temple, home and street describe Bhakti.'],
    'Comparing the two', 'Bhakti: guru, regional language. Sufi: pir, silsila, khanqah.', 'The note\'s comparison table suits a statement question.'),

  // Hard
  y(2019, 13, 7, 'hard', 'multi-statement', 'Consider the following statements :', ['1. Saint Nimbarka was a contemporary of Akbar.', '2. Saint Kabir was greatly influenced by Shaikh Ahmad Sirhindi.'], 'Which of the statements given above is/are correct?',
    ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 3,
    'Neither is correct. Nimbarka lived around the thirteenth century, centuries before Akbar. Kabir is placed in the fifteenth century, while Sirhindi belongs to the Mughal period.',
    ['Statement 1 fails, since Nimbarka lived long before Akbar.', 'Statement 2 fails, since Sirhindi came after Kabir and was an orthodox Naqshbandi.', 'Both fail, on the dates of Nimbarka and of Sirhindi.', ''],
    'Dating the saints', 'Nimbarka: before Akbar. Sirhindi: after Kabir.', 'It rewards a basic time frame for each saint.', 'Notes: Philosophers; Sufism; Nitin Singhania, Indian Art and Culture (Bhakti movement); Satish Chandra, History of Medieval India; Prelims 2019 GS I, Q13'),
  q(27, 'hard', 'multi-statement', 'Consider the following statements about regional devotional traditions:', ['1. The Varkari tradition of Maharashtra centres on Vitthal at Pandharpur.', '2. The Haridasa tradition, including Purandaradasa and Kanakadasa, shaped Carnatic music and Kannada devotional writing.'], 'Which of the statements given above is/are correct?',
    BOTH, 2,
    'Both are correct. The Varkaris worship Vitthal at Pandharpur, and the Haridasas of Karnataka shaped both Carnatic music and Kannada devotional writing.',
    ['Statement 2 is also correct, as the note credits the Haridasas with both contributions.', 'Statement 1 is also correct, as Vitthal at Pandharpur is the centre of the Varkaris.', '', 'Both are supported, so Neither cannot be the answer.'],
    'Varkari and Haridasa', 'Varkari: Pandharpur. Haridasa: Carnatic music, Kannada writing.', 'Regional traditions link Bhakti with language and music.', 'Notes: Regional traditions; Karnataka connection'),
  q(21, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Ibn Arabi gave the idea of wahdat-ul-wujud.', '2. Ahmad Sirhindi was the main Indian champion of wahdat-ul-wujud.'], 'Which of the statements given above is/are correct?',
    BOTH, 0,
    'Only statement 1 is correct. Sirhindi opposed wahdat-ul-wujud with wahdat-ul-shuhud, the unity of appearance.',
    ['', 'Statement 2 fails, since Sirhindi opposed this idea.', 'Statement 2 fails: Sirhindi set wahdat-ul-shuhud against it.', 'Statement 1 is correct: the idea is from Ibn Arabi.'],
    'Wujud and shuhud', 'Ibn Arabi: wujud. Sirhindi: shuhud.', 'A fine doctrinal distinction that the note states directly.'),
  q(22, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Amir Khusrau was a disciple of Bahauddin Zakariya.', '2. Miyan Mir belonged to the Suhrawardi order.', '3. Bakhtiyar Kaki belonged to the Naqshbandi order.'], 'How many of the above statements are correct?',
    COUNT, 3,
    'None is correct. Khusrau was Nizamuddin Auliya\'s disciple, Miyan Mir was a Qadiri, and Bakhtiyar Kaki was a Chishti.',
    ['No statement holds: Khusrau follows Nizamuddin, Miyan Mir is Qadiri and Kaki is Chishti.', 'All three names are placed with the wrong saint or order, so two cannot be correct.', 'These are all wrong placings, the reverse of this option.', ''],
    'Saints and orders', 'Khusrau: Nizamuddin. Miyan Mir: Qadiri. Kaki: Chishti.', 'Real names placed in the wrong order is typical of UPSC.'),
  q(23, 'hard', 'multi-statement', 'Consider the following statements about Basavanna:', ['1. He was a minister in the Kalachuri court.', '2. He taught mainly through Sanskrit commentaries.', '3. His Anubhava Mantapa at Kalyana drew people of different castes.'], 'How many of the above statements are correct?',
    COUNT, 1,
    'Statements 1 and 3 are correct. He taught through Kannada vachanas, not Sanskrit commentaries.',
    ['Statements 1 and 3 both hold, so one is too few.', '', 'Statement 2 fails: he taught through Kannada vachanas.', 'Statements 1 and 3 hold, so None cannot be the answer.'],
    'Basavanna', 'Basavanna: Kalachuri minister, Kannada vachanas, Anubhava Mantapa.', 'The note marks Basava as useful for answers on early egalitarian debate.'),
  q(24, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Gaudiya Vaishnavism is linked with Sankardev.', '2. Ekasarana is linked with Chaitanya.'], 'Which of the statements given above is/are correct?',
    BOTH, 3,
    'Neither is correct. The two are swapped: Gaudiya Vaishnavism belongs to Chaitanya in Bengal, and Ekasarana to Sankardev in Assam.',
    ['Statement 1 fails, since Gaudiya Vaishnavism belongs with Chaitanya.', 'Statement 2 fails, since Ekasarana belongs with Sankardev.', 'Both fail, because each tradition is given to the other saint.', ''],
    'Eastern Vaishnavism', 'Chaitanya: Gaudiya. Sankardev: Ekasarana.', 'Neighbouring saguna saints in the east are easily mixed up.'),
  q(25, 'hard', 'chronology', 'Arrange the following Sikh Gurus in chronological order:', ['1. Guru Amar Das', '2. Guru Arjan', '3. Guru Ram Das', '4. Guru Hargobind'], 'Select the correct order.',
    ['3-1-2-4', '1-2-3-4', '1-3-4-2', '1-3-2-4'], 3,
    'The order is Guru Amar Das, Guru Ram Das, Guru Arjan and Guru Hargobind.',
    ['This puts Ram Das before Amar Das, but Amar Das came first.', 'This puts Arjan before Ram Das, but Ram Das came first.', 'This puts Hargobind before Arjan, but Arjan came first.', ''],
    'Order of the Gurus', 'Amar Das, Ram Das, Arjan, Hargobind.', 'The note lists the Gurus in order, and this is a fair sequence test.'),
  q(26, 'hard', 'multi-statement', 'Consider the following statements:', ['1. There were 12 Alvars.', '2. There were 63 Nayanars.', '3. The Nalayira Divya Prabandham is the text of the Nayanars.'], 'How many of the above statements are correct?',
    COUNT, 1,
    'Statements 1 and 2 are correct. The Nalayira Divya Prabandham belongs to the Alvars, while the Nayanars are linked with the Tevaram and Tirumurai.',
    ['Statements 1 and 2 both hold, so one is too few.', '', 'Statement 3 fails: the Prabandham belongs to the Alvars.', 'Statements 1 and 2 hold, so None cannot be the answer.'],
    'Tamil Bhakti texts', 'Alvars: Prabandham. Nayanars: Tevaram, Tirumurai.', 'Numbers and texts from a single table invite a fine distinction.'),
]

export const mains: MainsQuestion[] = [
  {
    id: 'm-1119-1', day: DAY, marks: 10, words: 150, directive: 'Discuss',
    question: 'Discuss the similarities and differences between the Bhakti and Sufi movements in medieval India.',
    mustCover: ['Definitions and roots', 'Shared love of God and critique of ritual', 'Teacher: guru and pir', 'Language and place', 'Practices: kirtan and sama', 'Relation with the state'],
    model: `Bhakti is loving personal devotion to God, with Tamil origins. Sufism is the mystical tradition within Islam. Both stressed inner devotion.

Similarities

Both criticised ritual and formal orthodoxy to varying degrees. Both used music, in kirtan and in qawwali. Both spoke in the language of the people, and both gave women and lower castes some space, within limits.

Differences

Organisation: a Bhakti guru often had no formal order, while a Sufi pir led a silsila with murids.

Place: Bhakti gathered in temple, home and street; Sufis in the khanqah and dargah.

Language: Bhakti used regional languages; Sufis used Persian, along with Hindavi and regional languages.

State: some saints won royal patronage; Chishtis kept away, but Suhrawardis engaged.

Conclusion

The two movements were different in origin, yet they shaped a shared devotional culture. Their mutual exchange remains a useful resource for pluralism today.`,
  },
  {
    id: 'm-1119-2', day: DAY, marks: 10, words: 150, directive: 'Examine',
    question: 'Examine the significance of Basavanna and the Anubhava Mantapa as an example of early egalitarian thought in India.',
    mustCover: ['Twelfth-century Kalachuri context', 'Vachanas in Kannada', 'Anubhava Mantapa', 'Women such as Akka Mahadevi', 'Rejection of ritual and birth-based status', 'Limits and present value'],
    model: `Basavanna, a twelfth-century minister in the Kalachuri court, led the Lingayat or Virashaiva movement in Karnataka. He taught through Kannada vachanas.

Egalitarian features

The Anubhava Mantapa at Kalyana drew people of different castes for discussion, and it included women such as Akka Mahadevi. He rejected temple ritual and birth-based status. The Lingayats opposed the caste system, opposed child marriage and allowed the remarriage of widows.

Why it matters

Use of Kannada took religious debate to ordinary people. Open discussion across castes makes it a useful example of early democratic and egalitarian ideas.

Limits

It was a religious assembly, not a political institution, and it should not be read as modern democracy. Caste as a social system was not ended.

Conclusion

Basavanna's legacy shows that values of equality and debate have deep roots in India. It gives present-day social reform an indigenous source of inspiration.`,
  },
  {
    id: 'm-1119-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse',
    question: 'The Bhakti and Sufi movements challenged social hierarchy but could not transform it. Critically analyse this statement.',
    mustCover: ['Meaning and spread of both movements', 'Challenge to caste and ritual', 'Saints from artisan and lower castes, and women saints', 'Vernacular growth', 'Limits: caste persisted, saguna texts defending order, state links', 'Lasting contribution and conclusion'],
    model: `The Bhakti movement began in the Tamil country around the sixth to ninth centuries with the Alvars and Nayanars, and Sufism came to India through orders such as the Chishti and Suhrawardi. Both spoke of love for God over ritual and status.

How they challenged hierarchy

Kabir, a weaver, and Ravidas, a leatherworker, denounced discrimination. Ramananda enrolled disciples from all castes, and Basava's Anubhava Mantapa brought together people of different castes. Women such as Andal, Karaikkal Ammaiyar, Akka Mahadevi and Mirabai found a voice. Chishti saints mingled with people of the lower classes, and they kept their distance from the state.

Cultural change

Vernacular literature grew in Hindi, Marathi, Bengali and Assamese. Kirtan, bhajan and qawwali made worship public, and shared shrines encouraged syncretism.

Limits

Satish Chandra notes that no major breach was made in the caste system. Their ideas softened its rigour, but the followers of Kabir shrank into a sect. Many saguna texts defended social order. Some saints received royal patronage, and the Suhrawardis took state grants. Naqshbandis such as Ahmad Sirhindi turned towards orthodoxy. Tensions between communities also continued.

Assessment

The statement is broadly fair, since the saints changed minds more readily than structures. Their aim, too, was often individual reform and not social revolution. Yet they created a climate of opinion that later influenced policies such as Akbar's.

Conclusion

The movements did not end hierarchy, but they gave a lasting language of equality and pluralism. This is why they still speak to debates on social justice today.`,
  },
]
