import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-17'
const S = 'Notes: Mughal Empire'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1117-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  y(2021, 45, 23, 'easy', 'chronology', 'With reference to medieval India, which one of the following is the correct sequence in ascending order in terms of size?', null, null,
    ['Paragana—Sarkar—Suba', 'Sarkar—Paragana—Suba', 'Suba—Sarkar—Paragana', 'Paragana—Suba—Sarkar'], 0,
    'The pargana was the smallest of the three, several parganas made up a sarkar, and the suba was the province at the top.',
    ['', 'This puts the sarkar below the pargana, but the sarkar was the larger district unit.', 'This is the descending order, while the question asks for ascending size.', 'This puts the suba below the sarkar, but the suba was the province above it.'],
    'Administrative units', 'Ascending: pargana, sarkar, suba.', 'The note records this Prelims 2021 question as a pattern to learn.', 'Notes: Administration; Prelims 2021 GS I, Q45'),
  q(25, 'easy', 'factual', 'Mansur and Bishandas, masters of animal and portrait painting, belong to the reign of', null, null,
    ['Akbar', 'Shah Jahan', 'Jahangir', 'Aurangzeb'], 2,
    'Mansur and Bishandas are the names of Jahangir\'s peak of animal and portrait painting, whereas Akbar\'s atelier is known for manuscripts such as the Hamzanama and the Razmnama.',
    ['Akbar is linked with the Hamzanama and the Razmnama, while these two painters mark the next reign.', 'Shah Jahan is remembered mainly for architecture such as the Taj Mahal, and these painters came earlier.', '', 'Aurangzeb is linked with the Fatawa-i-Alamgiri, long after these painters.'],
    'Jahangir\'s painters', 'Mansur and Bishandas: Jahangir.', 'Painting by ruler is a repeat cultural theme.', 'Notes: Art and culture; Satish Chandra, History of Medieval India (Painting)'),
  y(2018, 73, 33, 'easy', 'factual', 'Which one of the following foreign travellers elaborately discussed about diamonds and diamond mines of India ?', null, null,
    ['Francois Bernier', 'Jean-Baptiste Tavernier', 'Jean de Thevenot', 'Abbe Barthelemy Carre'], 1,
    'Jean-Baptiste Tavernier wrote about Indian diamonds and diamond mines. Bernier is remembered instead for his account of Aurangzeb\'s court and land.',
    ['Bernier is remembered for describing Aurangzeb\'s court and land, not the diamond mines.', '', 'Thevenot is not the traveller known for this discussion; the diamond account is Tavernier\'s.', 'Carre is not the traveller known for this discussion; the diamond account is Tavernier\'s.'],
    'Tavernier on diamonds', 'Tavernier: diamonds. Bernier: court and land.', 'The note records this Prelims 2018 question.', 'Notes: Economy and society; Prelims 2018 GS I, Q73'),
  q(1, 'easy', 'factual', 'Babur defeated Rana Sanga in 1527 at the Battle of', null, null,
    ['Panipat', 'Chausa', 'Khanwa', 'Kannauj'], 2,
    'Babur defeated Rana Sanga at Khanwa in 1527, the year after his victory at Panipat in 1526.',
    ['Panipat in 1526 was Babur\'s victory over Ibrahim Lodi, not over Rana Sanga.', 'Chausa in 1539 was a defeat of Humayun by Sher Shah.', '', 'Kannauj in 1540 was also a defeat of Humayun by Sher Shah.'],
    'Babur\'s battles', 'Panipat 1526, Khanwa 1527.', 'The note lists these battle dates for recall.'),
  q(2, 'easy', 'factual', 'Humayun lost his empire in 1540 to', null, null,
    ['Sher Shah Sur', 'Hemu', 'Rana Sanga', 'Ibrahim Lodi'], 0,
    'Sher Shah defeated Humayun at Chausa in 1539 and at Kannauj in 1540. Humayun regained Delhi only in 1555.',
    ['', 'Hemu fought Akbar at Second Panipat in 1556, not Humayun in 1540.', 'Rana Sanga lost to Babur at Khanwa in 1527.', 'Ibrahim Lodi lost to Babur at Panipat in 1526.'],
    'Humayun and Sher Shah', 'Chausa 1539 and Kannauj 1540: Sher Shah beat Humayun.', 'The Sur interlude is a key break in the Mughal sequence.'),
  q(3, 'easy', 'factual', 'Which Mughal emperor abolished jizya in 1564?', null, null,
    ['Jahangir', 'Akbar', 'Shah Jahan', 'Aurangzeb'], 1,
    'Akbar abolished jizya in 1564, as part of a wider policy that included Rajput alliances and Sulh-i-kul.',
    ['Jahangir came to the throne in 1605, long after the abolition in 1564.', '', 'Shah Jahan ruled from 1628, and the abolition came far earlier.', 'Aurangzeb did the opposite and reimposed jizya in 1679.'],
    'Jizya policy', 'Akbar abolished jizya in 1564.', 'Religious policy by ruler is examined often.'),
  q(4, 'easy', 'factual', 'In the Mughal mansabdari system, the zat rank indicated', null, null,
    ['the number of cavalrymen to be maintained', 'the land held directly by the emperor', 'the personal rank and pay of the noble', 'the branding mark on the horses'], 2,
    'Zat fixed a noble\'s personal rank and salary, while sawar showed the cavalry he had to maintain.',
    ['This describes the sawar rank, not the zat rank.', 'This describes khalisa land, which is not a rank.', '', 'This describes the dagh, a check on horses, not a rank.'],
    'Zat and sawar', 'Zat: personal rank and pay. Sawar: cavalry to maintain.', 'The note lists zat and sawar as a basic recall pair.'),
  q(5, 'easy', 'factual', 'Under Akbar, Todar Mal is best known for his work on', null, null,
    ['the land revenue system', 'the Persian translation of the Mahabharata', 'Mughal miniature painting', 'the construction of Fatehpur Sikri'], 0,
    'Todar Mal is the key name in Akbar\'s land revenue system. The zabti system is sometimes called his bandobast.',
    ['', 'The Razmnama was a translation project; Todar Mal is known for revenue.', 'Painting is linked with artists such as Basawan, not with this revenue officer.', 'Fatehpur Sikri is Akbar\'s city, while Todar Mal\'s fame rests on revenue.'],
    'Todar Mal', 'Todar Mal: land revenue, the zabti bandobast.', 'The note calls Todar Mal the key name for revenue.', 'Notes: Administration; Satish Chandra, History of Medieval India (Land revenue system)'),

  // Moderate
  y(2022, 94, 41, 'moderate', 'factual', '"Yogavāsistha" was translated into Persian by Nizamuddin Panipati during the reign of :', null, null,
    ['Akbar', 'Humayun', 'Shahjahan', 'Aurangzeb'], 0,
    'Nizamuddin Panipati\'s translation of the Yogavasistha belongs to Akbar\'s reign, which fits the wider translation of Sanskrit works into Persian at his court, such as the Razmnama.',
    ['', 'Humayun\'s reign predates the translation activity of Akbar\'s court.', 'The translation by Panipati came earlier, in the late sixteenth century; Shah Jahan ruled from 1628.', 'Aurangzeb is linked with the Fatawa-i-Alamgiri, and this translation is far earlier.'],
    'Translations under Akbar', 'Akbar\'s court: Sanskrit works translated into Persian.', 'Persian translations show the composite culture of the Mughal court.', 'Notes: Art and culture; web search on the translator; Prelims 2022 GS I, Q94'),
  y(2025, 75, 33, 'moderate', 'multi-statement', 'Consider the following fruits :', ['I. Papaya', 'II. Pineapple', 'III. Guava'], 'How many of the above were introduced in India by the Portuguese in the sixteenth and seventeenth centuries?',
    ['Only one', 'Only two', 'All the three', 'None'], 2,
    'All three came to India through the Portuguese from the Americas in this period. They belong with the wider exchange that also brought tobacco and maize.',
    ['Papaya, pineapple and guava are all American plants carried by the Portuguese, so one is too few.', 'None of the three can be left out, as each reached India through the Portuguese.', '', 'All three were Portuguese introductions, so None cannot be correct.'],
    'New crops from the Americas', 'Papaya, pineapple and guava came with the Portuguese.', 'New World crops connect trade, diet and agriculture.', 'Notes: Economy and society; Satish Chandra, History of Medieval India (Portuguese); web search on these fruits; Prelims 2025 GS I, Q75'),
  q(6, 'moderate', 'match', 'Match the Mughal ministers with their functions:', ['A. Diwan', 'B. Mir Bakshi', 'C. Mir Saman', 'D. Sadr', '1. Royal household', '2. Religion and grants', '3. Revenue', '4. Military and mansabdars'], 'Select the correct code.',
    ['A-3, B-4, C-1, D-2', 'A-4, B-3, C-1, D-2', 'A-3, B-4, C-2, D-1', 'A-3, B-1, C-4, D-2'], 0,
    'The Diwan handled revenue, the Mir Bakshi the military and mansabdars, the Mir Saman the royal household, and the Sadr religion and grants.',
    ['', 'This swaps A and B: the Diwan was revenue and the Mir Bakshi military.', 'This swaps C and D: the Mir Saman ran the household and the Sadr handled grants.', 'This swaps B and C: the Mir Bakshi was military and the Mir Saman ran the household.'],
    'Central ministers', 'Diwan, Mir Bakshi, Mir Saman, Sadr: revenue, army, household, grants.', 'The note lists this in quick recall, and it is a natural match question.'),
  q(7, 'moderate', 'match', 'Consider the following pairs:', ['1. Hamzanama : Akbar', '2. Sirr-i-Akbar : Jahangir', '3. Fatawa-i-Alamgiri : Aurangzeb'], 'How many of the above pairs are correctly matched?',
    COUNT, 1,
    'Pairs 1 and 3 are correct. The Sirr-i-Akbar is by Dara Shikoh and belongs to Shah Jahan\'s reign, not to Jahangir\'s.',
    ['Pairs 1 and 3 are both correct, so one is too few.', '', 'Pair 2 fails: the Sirr-i-Akbar belongs to Shah Jahan\'s reign, by Dara Shikoh.', 'Pairs 1 and 3 hold, so None cannot be the answer.'],
    'Works by reign', 'Hamzanama: Akbar. Sirr-i-Akbar: Dara, under Shah Jahan.', 'Work-to-reign matching tests the note\'s art and culture table.'),
  q(8, 'moderate', 'match', 'Consider the following pairs:', ['1. Itimad-ud-Daulah : Jahangir', '2. Bibi ka Maqbara : Aurangzeb', '3. Fatehpur Sikri : Akbar'], 'How many of the above pairs are correctly matched?',
    COUNT, 2,
    'All three are correct, and each building belongs in the reign named in the note\'s architecture table.',
    ['All three pairs follow the note\'s table, so one is too few.', 'None of the three is wrong, so two is too few.', '', 'Each pair is correct, so None cannot be the answer.'],
    'Mughal buildings', 'Fatehpur Sikri: Akbar. Itimad-ud-Daulah: Jahangir. Bibi ka Maqbara: Aurangzeb.', 'Monument-to-ruler pairs are standard in culture sections.'),
  q(9, 'moderate', 'multi-statement', 'Consider the following statements about Sher Shah Sur:', ['1. He measured land and used the patta and qabuliyat in his revenue system.', '2. He issued the rupiya and the dam.'], 'Which of the statements given above is/are correct?',
    BOTH, 2,
    'Both are correct. Sher Shah\'s land system, with measured land and the patta and qabuliyat, fed into Akbar\'s, and he issued the rupiya and dam.',
    ['Statement 2 is also correct: he issued the rupiya and dam.', 'Statement 1 is also correct: he measured land and used patta and qabuliyat.', '', 'Both statements are supported, so Neither cannot be the answer.'],
    'Sher Shah\'s reforms', 'Sher Shah: patta, qabuliyat, rupiya, dam, Grand Trunk Road.', 'His reforms are often seen as a bridge to Akbar\'s system.'),
  q(10, 'moderate', 'assertion-reason', 'Statement I: Under the mansabdari system, the Mughals used the dagh and chehra.\nStatement II: These measures were meant to check fraud in the maintenance of cavalry.', null, 'Which one of the following is correct?',
    SI, 0,
    'Both are correct, and II explains I. The branding of horses and the descriptive roll of soldiers were adopted so that nobles really kept the troops they were paid for.',
    ['', 'II gives the very purpose of the measures in I, so it does explain them.', 'II is also correct: the note says dagh and chehra were used to check fraud.', 'I is also correct: the Mughals used both under the mansabdari system.'],
    'Dagh and chehra', 'Dagh and chehra check fraud in cavalry.', 'It connects the Sultanate\'s military tools with the Mughal system.', 'Notes: Administration; Satish Chandra, History of Medieval India (Mansabdari system)'),
  q(11, 'moderate', 'assertion-reason', 'Statement I: Thomas Roe visited the court of Jahangir.\nStatement II: Miniature painting reached its peak in the reign of Jahangir.', null, 'Which one of the following is correct?',
    SI, 1,
    'Both are correct, but II does not explain I. Roe\'s visit concerned English interests, and it has no causal link with the growth of painting.',
    ['II concerns the arts, while the visit of an English envoy had other reasons, so II does not explain I.', '', 'II is also correct: the note places the peak of miniature painting under Jahangir.', 'I is also correct: Thomas Roe came to Jahangir\'s court.'],
    'Jahangir\'s reign', 'Jahangir: Roe\'s visit and the peak of miniature painting.', 'It separates two true facts about one reign from a real causal link.'),
  q(12, 'moderate', 'assertion-reason', 'Statement I: Akbar\'s Ibadat Khana was located at Fatehpur Sikri.\nStatement II: The Ibadat Khana was built by Jahangir.', null, 'Which one of the following is correct?',
    SI, 2,
    'Statement I is correct, but II is wrong. Akbar himself built the Ibadat Khana at Fatehpur Sikri.',
    ['II is incorrect, so it cannot explain I: Akbar built the hall.', 'II is not correct at all, since Akbar built it in 1575.', '', 'I is correct: the note places the Ibadat Khana at Fatehpur Sikri.'],
    'Ibadat Khana', 'Ibadat Khana: Akbar, at Fatehpur Sikri.', 'The note flags this place in its trap on Akbar\'s religion.', 'Notes: Administration (Akbar\'s religion); Satish Chandra, History of Medieval India (Akbar)'),
  q(13, 'moderate', 'assertion-reason', 'Statement I: Din-i-Ilahi became a mass religion in the Mughal empire.\nStatement II: Sulh-i-kul, or peace with all, was Akbar\'s wider policy.', null, 'Which one of the following is correct?',
    SI, 3,
    'Statement I is wrong and II is right. Din-i-Ilahi was not a new mass religion, and few joined it, while Sulh-i-kul was the wider policy.',
    ['I is wrong, as few people joined Din-i-Ilahi, so II cannot explain it.', 'I is wrong, so both statements cannot be correct: it was not a mass religion.', 'I is the wrong statement here, while II on Sulh-i-kul is correct.', ''],
    'Din-i-Ilahi and Sulh-i-kul', 'Din-i-Ilahi: few joined. Sulh-i-kul: the wider policy.', 'The note marks this as a trap.'),
  q(14, 'moderate', 'multi-statement', 'Consider the following statements about the grading of land under Akbar:', ['1. Polaj land was cultivated almost every year.', '2. Parauti land was left fallow for a time.', '3. Banjar was the most fertile category, cultivated without a break.'], 'How many of the above statements are correct?',
    COUNT, 1,
    'Statements 1 and 2 are correct. Banjar had been out of cultivation for the longest time, so it was assessed at concessional rates.',
    ['Statements 1 and 2 both hold, so one is too few.', '', 'Statement 3 fails: banjar had been fallow for the longest period.', 'Statements 1 and 2 hold, so None cannot be the answer.'],
    'Polaj to Banjar', 'Land graded by continuity of cultivation: Polaj, Parauti, Chachar, Banjar.', 'This grading shows how revenue was tied to the extension of cultivation.', 'Notes: Administration; Satish Chandra, History of Medieval India (Land revenue system)'),
  q(15, 'moderate', 'match', 'Consider the following pairs of administrative unit and officer:', ['1. Suba : Subedar', '2. Sarkar : Faujdar and Amalguzar', '3. Village : Muqaddam and Patwari'], 'How many of the above pairs are correctly matched?',
    COUNT, 2,
    'All three are correct. The subedar headed the province, the faujdar and amalguzar worked at the sarkar, and the muqaddam and patwari at the village.',
    ['All three follow the note\'s hierarchy, so one is too few.', 'Each pair is correct, so two is too few.', '', 'All three pairs are correct, so None cannot be the answer.'],
    'Officers by level', 'Suba: subedar. Sarkar: faujdar, amalguzar. Village: muqaddam, patwari.', 'Administrative hierarchy is a recurring area in Prelims.'),
  q(16, 'moderate', 'chronology', 'Arrange the following events in chronological order:', ['1. Din-i-Ilahi', '2. Battle of Chausa', '3. Reimposition of jizya by Aurangzeb', '4. Second Battle of Panipat'], 'Select the correct order.',
    ['2-1-4-3', '4-2-1-3', '2-4-3-1', '2-4-1-3'], 3,
    'The order is Chausa (1539), Second Panipat (1556), Din-i-Ilahi (1582) and the reimposition of jizya (1679).',
    ['This puts Din-i-Ilahi (1582) before Second Panipat (1556).', 'This puts Second Panipat (1556) before Chausa (1539).', 'This puts the jizya of 1679 before Din-i-Ilahi of 1582.', ''],
    'Mughal chronology', '1539, 1556, 1582, 1679.', 'Sequence questions check grasp of the whole period.'),
  q(17, 'moderate', 'multi-statement', 'Consider the following:', ['1. Textiles', '2. Indigo', '3. American silver'], 'How many of the above were major exports from Mughal India?',
    COUNT, 1,
    'Textiles and indigo were exports. American silver came into India as payment, so it was an import.',
    ['Both textiles and indigo were exports, so one is too few.', '', 'Silver fails: India received American silver rather than exporting it.', 'Textiles and indigo were exported, so None cannot be correct.'],
    'Mughal trade', 'India exported textiles, indigo and saltpetre, and received silver.', 'This pattern explains why European traders brought bullion to India.'),

  // Hard
  y(2019, 1, 3, 'hard', 'multi-statement', 'With reference to Mughal India, what is/are the difference/differences between Jagirdar and Zamindar?', ['1. Jagirdars were holders of land assignments in lieu of judicial and police duties, whereas Zamindars were holders of revenue rights without obligation to perform any duty other than revenue collection.', '2. Land assignments to Jagirdars were hereditary and revenue rights of Zamindars were not hereditary.'], 'Select the correct answer using the code given below.',
    ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 3,
    'Neither is correct. Jagirs were assignments of revenue for service as mansabdars, transferable and without hereditary rights, while the zamindar\'s right was hereditary, the reverse of statement 2.',
    ['Statement 1 fails, since jagirs were revenue assignments paying mansabdars for service.', 'Statement 2 reverses the facts: jagirs were transferable, and zamindari rights were hereditary.', 'Both fail, for the reasons on service and on hereditary rights.', ''],
    'Jagirdar and zamindar', 'Jagir: transferable. Zamindar: hereditary local rights.', 'This is a fine distinction that many candidates reverse.', 'Notes: Administration; Satish Chandra, History of Medieval India (Mansabdari and land revenue); Prelims 2019 GS I, Q1'),
  q(18, 'hard', 'match', 'Consider the following pairs of revenue system and method:', ['1. Zabti : crop-sharing', '2. Batai : measured land and cash payment at set rates', '3. Nasaq : yearly measurement of each field'], 'How many of the above pairs are correctly matched?',
    COUNT, 3,
    'None is correct. Zabti used measured land with average prices and yields, batai was crop-sharing, and nasaq was an estimate based on past records.',
    ['No pair holds, since each method is wrongly described.', 'All three descriptions are swapped or wrong, so two cannot be correct.', 'Each pair fails, the reverse of this option.', ''],
    'Zabti, Batai, Nasaq', 'Zabti: measured. Batai: shared. Nasaq: estimated.', 'Three revenue terms from one table invite swapping.', 'Notes: Administration; Satish Chandra, History of Medieval India (Land revenue system)'),
  q(19, 'hard', 'multi-statement', 'Consider the following statements about the mansab under Akbar:', ['1. At first there was only one rank, and it was later split into zat and sawar.', '2. A mansab passed by right from father to son.'], 'Which of the statements given above is/are correct?',
    BOTH, 0,
    'Only statement 1 is correct. The ranks were split into zat and sawar in Akbar\'s later years, in 1594-95. The mansab was not hereditary.',
    ['', 'Statement 2 fails, because the note states that the mansab was not hereditary.', 'Statement 2 fails: mansabs did not pass by right to sons.', 'Statement 1 is correct, as the system developed gradually.'],
    'Evolution of the mansab', 'Mansab: gradual growth, zat and sawar split, not hereditary.', 'It tests the development of the system, not only its definition.', 'Notes: Administration; Satish Chandra, History of Medieval India (Mansabdari system)'),
  q(20, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Khalisa was revenue assigned to mansabdars as pay.', '2. After annexing Bijapur and Golconda, Aurangzeb kept the best jagirs in the khalisa, which added to the shortage of jagirs.'], 'Which of the statements given above is/are correct?',
    BOTH, 1,
    'Only statement 2 is correct. Khalisa was land held directly by the emperor, and keeping the best Deccan lands there made the jagir shortage worse.',
    ['Statement 1 fails, since khalisa was held directly by the emperor, not assigned to nobles.', '', 'Statement 1 fails, as it describes the jagir and not the khalisa.', 'Statement 2 is correct: this choice deepened the shortage of jagirs.'],
    'Khalisa and jagir crisis', 'Khalisa: under the emperor. Too little left for jagirs.', 'It links a definition with the later crisis of the system.', 'Notes: Administration; Satish Chandra, History of Medieval India (Crisis of the jagirdari system)'),
  q(21, 'hard', 'factual', 'Jahangir allowed selected nobles to maintain a large quota of troopers without raising their zat rank. This arrangement was known as', null, null,
    ['nasaq', 'du-aspah sih-aspah', 'bandobast', 'tulughma'], 1,
    'Jahangir introduced the du-aspah sih-aspah system, meaning troopers with two or three horses, by which selected nobles maintained and were paid for a larger quota without a rise in zat.',
    ['Nasaq was a way of estimating land revenue, not a military rank arrangement.', '', 'Bandobast refers to the zabti revenue settlement linked with Todar Mal.', 'Tulughma was the battle tactic that Babur used at Panipat.'],
    'Du-aspah sih-aspah', 'Du-aspah sih-aspah: Jahangir, more troopers without more zat.', 'It tests how the mansab system was adapted after Akbar.', 'Notes: Administration; Satish Chandra, History of Medieval India (Growth of administration)'),
  q(22, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Akbar abolished jizya, and Aurangzeb reimposed it.', '2. Aurangzeb reimposed jizya in 1564.', '3. Guru Arjan was executed under Aurangzeb.'], 'How many of the above statements are correct?',
    COUNT, 0,
    'Only statement 1 is correct. Akbar abolished jizya in 1564 and Aurangzeb reimposed it in 1679. Guru Arjan was executed under Jahangir.',
    ['', 'Only statement 1 holds: 1564 is Akbar\'s abolition, and Guru Arjan\'s execution was under Jahangir.', 'Statements 2 and 3 fail on the date and on the ruler.', 'Statement 1 is correct, so None cannot be the answer.'],
    'Religious policy dates', 'Jizya: abolished 1564, reimposed 1679. Guru Arjan: Jahangir.', 'Close dates and rulers make this elimination-resistant.'),
  q(23, 'hard', 'factual', 'The use of pietra dura in Mughal building is said to begin with which of the following?', null, null,
    ['Itimad-ud-Daulah', 'Taj Mahal', 'Humayun\'s Tomb', 'Buland Darwaza'], 0,
    'Pietra dura begins at the Itimad-ud-Daulah, in Jahangir\'s reign. It became far more popular under Shah Jahan, who used it widely on the Taj Mahal.',
    ['', 'The Taj used pietra dura on a large scale, but it was not the beginning.', 'Humayun\'s Tomb came early in Akbar\'s reign and is known for its dome, not for this start.', 'The Buland Darwaza is the gate at Fatehpur Sikri, under Akbar, and is not this start.'],
    'Pietra dura', 'Pietra dura starts under Jahangir and peaks at the Taj Mahal.', 'Many candidates wrongly assume that it began with the Taj Mahal.', 'Notes: Art and culture; Satish Chandra, History of Medieval India (Architecture)'),
  q(24, 'hard', 'multi-statement', 'Consider the following statements about the Mughal economy:', ['1. The hundi was a credit note used by merchants.', '2. Cash crops such as cotton and indigo grew.', '3. Surat became the main port.'], 'How many of the above statements are correct?',
    COUNT, 2,
    'All three are correct. Merchants used hundis, cash crops expanded, and Surat became the main port, with Armenians, Banias and Europeans active in trade.',
    ['All three are supported by the note, so one is too few.', 'None of the three fails, so two is too few.', '', 'All are supported, so None cannot be the answer.'],
    'Mughal commerce', 'Hundi, cash crops, Surat.', 'Credit, crops and ports together describe a commercial economy.'),
]

export const mains: MainsQuestion[] = [
  {
    id: 'm-1117-1', day: DAY, marks: 10, words: 150, directive: 'Examine',
    question: 'Examine how the mansabdari and jagirdari systems held the Mughal empire together, and why they later came under strain.',
    mustCover: ['Zat and sawar', 'Non-hereditary and transferable nature', 'Dagh and chehra', 'Mixed nobility and central control', 'Jagir shortage under Aurangzeb', 'Khalisa and Deccan problems'],
    model: `The mansabdari system gave every noble a numerical rank, while the jagirdari system paid him through an assignment of revenue. Together they linked the nobility, the army and land revenue to the emperor.

Sources of strength

Zat fixed personal rank and pay, and sawar the cavalry to be kept. Mansabs were not hereditary and jagirs were usually transferred every few years, so nobles could not build local bases. Dagh and chehra checked fraud, and khalisa land kept resources with the emperor.

Sources of strain

Under Aurangzeb, nobles grew in number faster than good jagirs. The best land after annexing Bijapur and Golconda went into the khalisa, and disturbed Deccan jagirs yielded little. Khafi Khan compared a jagir to one pomegranate among a hundred sick.

Conclusion

The system was a remarkable tool of centralisation, but it depended on expansion and revenue. When these failed, nobles lost loyalty, which is a lasting lesson on institutions.`,
  },
  {
    id: 'm-1117-2', day: DAY, marks: 10, words: 150, directive: 'Discuss',
    question: 'Discuss the main features of Akbar\'s land revenue administration, and how it built on earlier systems.',
    mustCover: ['Sher Shah\'s precedent', 'Zabti and Todar Mal', 'Batai and nasaq', 'Grading of land', 'State share', 'Link to state capacity'],
    model: `Mughal land revenue linked the state directly with agrarian society. Akbar's system, with Todar Mal as its key figure, drew on Sher Shah's measures of measured land, patta and qabuliyat.

Main features

Zabti: land was measured, and cash rates were fixed on an average of ten years' prices and yields, chiefly in the core of north India.

Batai: crop-sharing, used in parts.

Nasaq: an estimate based on past records, as in Bengal and elsewhere.

Land grading: Polaj, Parauti, Chachar and Banjar, by continuity of cultivation. Concessional rates on long-fallow land encouraged its cultivation.

State share: usually one-third, rising in many areas to one-half under Aurangzeb.

Assessment

The system gave predictable revenue and paid the mansabdars through jagirs. Yet measurement did not cover all regions, and zamindars kept local rights.

Conclusion

It shows how state capacity rests on data and local knowledge, a point still relevant to land records reform.`,
  },
  {
    id: 'm-1117-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse',
    question: 'Critically analyse Akbar\'s religious policy. To what extent can Sulh-i-kul be seen as an early model of pluralism?',
    mustCover: ['Rajput alliances and abolition of jizya', 'Ibadat Khana at Fatehpur Sikri', 'Din-i-Ilahi and its limits', 'Sulh-i-kul as state policy', 'Political motives and orthodox opposition', 'Contrast with Aurangzeb and present relevance'],
    model: `Akbar (1556-1605) ruled a diverse empire. His religious policy, summed up as Sulh-i-kul or peace with all, meant equal toleration of and respect for all sections.

Main steps

He formed Rajput alliances and abolished jizya in 1564. In 1575 he built the Ibadat Khana at Fatehpur Sikri for debate among theologians and mystics. Translation projects, such as the Razmnama, brought Sanskrit works into Persian.

Din-i-Ilahi

Din-i-Ilahi (1582) was not a new mass religion. Satish Chandra describes it as an order of the Sufistic type, and few joined it. It shows personal loyalty to the emperor more than conversion.

Case for pluralism

Sulh-i-kul made toleration a principle of statecraft and not merely a concession. Abul Fazl's Akbarnama and Ain-i-Akbari presented this ideal, and service was opened to Rajputs and others.

Limits

The policy also served power, since a mixed nobility balanced rival groups. It was a monarch's grant and could be reversed, as Aurangzeb showed by reimposing jizya in 1679. Orthodox figures such as Badayuni objected. It was not modern secularism, for there were no citizens' rights or legal guarantees.

Conclusion

Sulh-i-kul is best seen as an early and practical model of pluralism, shaped by the needs of empire. It offers a useful lesson today: diversity can strengthen a state, but it lasts only when it rests on institutions and not on the will of one ruler.`,
  },
]
