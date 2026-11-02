import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-15'
const S = 'Notes: Delhi Sultanate'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1115-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  y(2025, 13, 7, 'easy', 'factual', "The irrigation device called 'Araghatta' was", null, null,
    ['a water bag made of leather pulled over a pulley', 'a large wheel with earthen pots tied to the outer ends of its spokes', 'a larger earthen pot driven by bullocks', 'a large water bucket pulled up by rope directly by hand'], 1,
    'The araghatta was a water wheel with earthen pots tied around it, an older form of the device later called the Persian wheel. It lifted water continuously for irrigation.',
    ['A leather bag on a pulley is a separate lifting device; the araghatta works by a wheel, not a bag.', '', 'A single pot driven by bullocks misses the defining feature, which is a wheel carrying many pots.', 'A bucket hauled up by hand involves no wheel, so it cannot be the araghatta.'],
    'Araghatta water wheel', 'Araghatta: a wheel with pots tied around it, lifting water for irrigation.', 'The note records that Prelims 2025 tested this term, and irrigation technology links medieval economy with agriculture.', 'Notes: Economy, society and culture; Prelims 2025 GS I, Q13'),
  y(2016, 38, 15, 'easy', 'factual', 'Banjaras during the medieval period of Indian history were generally', null, null,
    ['agriculturists', 'warriors', 'weavers', 'traders'], 3,
    'Banjaras were itinerant traders and carriers. Under Alauddin Khalji they carried foodgrains to the towns and were registered so that they could not hoard.',
    ['Banjaras bought grain from peasants and carried it; they were not themselves the cultivators.', 'Banjaras are known for carrying goods in bulk, not for military service.', 'Weaving was a separate craft; the banjaras moved goods between village and town.', ''],
    'Banjaras as carriers', 'Banjaras: grain-carrying traders, registered under Alauddin market control.', 'It tests a social group that appears in both Sultanate market control and medieval trade.', 'Notes: Economy, society and culture; Satish Chandra, History of Medieval India (Alauddin\'s market control); Prelims 2016 GS I, Q38'),
  q(1, 'easy', 'chronology', 'Arrange the following dynasties of the Delhi Sultanate in chronological order:', ['1. Tughluq', '2. Slave (Mamluk)', '3. Lodi', '4. Khalji', '5. Sayyid'], 'Select the correct order.',
    ['2-4-1-5-3', '2-1-4-5-3', '4-2-1-5-3', '2-4-5-1-3'], 0,
    'The order is Slave (1206-1290), Khalji (1290-1320), Tughluq (1320-1414), Sayyid (1414-1451) and Lodi (1451-1526).',
    ['', 'This puts the Tughluqs before the Khaljis, but the Tughluqs began only in 1320 after the Khaljis fell.', 'This starts with the Khaljis, but the Slave dynasty began in 1206 and the Khaljis in 1290.', 'This puts the Sayyids before the Tughluqs, but the Sayyids began in 1414 when the Tughluqs ended.'],
    'Order of dynasties', 'Slave, Khalji, Tughluq, Sayyid, Lodi.', 'The sequence is the frame on which every ruler and reform question depends.'),
  q(2, 'easy', 'factual', 'The Turkan-i-Chahalgani, or the Forty, is associated with the formation of the Sultanate under which ruler?', null, null,
    ['Iltutmish', 'Balban', 'Qutbuddin Aibak', 'Alauddin Khalji'], 0,
    'The Forty, a group of Turkish nobles, belongs to Iltutmish, who gave the Sultanate its structure. Later rulers had to struggle against the power of this group.',
    ['', 'Balban set out to break the power of the chahalgani; he did not create it.', 'Aibak held north India at the very start, before the structure that Iltutmish gave the state.', 'Alauddin is linked with market control and the dagh, and he ruled long after the Forty arose.'],
    'The Forty', 'Forty: Iltutmish. Breaking their power: Balban.', 'The note lists this among reforms that must not be swapped.', 'Notes: The big picture; Satish Chandra, History of Medieval India (Raziya and Balban)'),
  q(3, 'easy', 'factual', 'Which Sultan insisted on the court ceremonies of sijda and paibos to raise royal prestige?', null, null,
    ['Iltutmish', 'Balban', 'Alauddin Khalji', 'Firoz Shah Tughluq'], 1,
    'Balban raised royal prestige through sijda and paibos, meaning prostration and kissing the monarch\'s feet, along with a theory of kingship and blood-and-iron methods.',
    ['Iltutmish is linked with the iqta, the tanka and the Forty, not these ceremonies.', '', 'Alauddin relied on market control and military reforms, not on these court ceremonies.', 'Firoz is remembered for canals and the Diwan-i-Khairat rather than court prostration.'],
    'Balban\'s kingship', 'Sijda and paibos: Balban.', 'Reform-to-ruler pairs are a staple of medieval history elimination questions.'),
  q(4, 'easy', 'factual', 'The Tarikh-i-Firozshahi, a key source for the Delhi Sultanate, was written by', null, null,
    ['Amir Khusrau', 'Ibn Battuta', 'Barani', 'Firoz Shah Tughluq'], 2,
    'Barani wrote the Tarikh-i-Firozshahi. The title names the ruler Firoz Shah, but the historian was Barani.',
    ['Amir Khusrau is known as a Persian poet linked with Khari Boli and music, not as the author of this chronicle.', 'Ibn Battuta wrote the Rihla, a travel account, not this history.', '', 'The work is named after Firoz Shah, who was its subject and not its author.'],
    'Sultanate sources', 'Barani: Tarikh-i-Firozshahi. Ibn Battuta: Rihla.', 'Author-to-work pairs are commonly tested in cultural history.'),
  q(5, 'easy', 'statement', 'Which one of the following correctly describes the event that ended the Delhi Sultanate in 1526?', null, null,
    ['Babur defeated Ibrahim Lodi at Panipat', 'Babur defeated Sikandar Lodi at Panipat', 'Babur defeated Ibrahim Lodi at Khanwa', 'Timur defeated Ibrahim Lodi at Panipat'], 0,
    'Ibrahim Lodi lost to Babur at Panipat in 1526, which ended Lodi rule and with it the Delhi Sultanate.',
    ['', 'Sikandar Lodi was the earlier ruler who founded Agra; the Lodi ruler defeated at Panipat was Ibrahim.', 'Khanwa in 1527 was fought against Rana Sanga, not Ibrahim Lodi.', 'Timur sacked Delhi in 1398 under the Tughluqs, more than a century before Panipat.'],
    'End of the Sultanate', 'Panipat 1526: Babur defeats Ibrahim Lodi.', 'The note lists this as a quick-recall date that links the Sultanate with the Mughals.'),
  q(6, 'easy', 'factual', 'The holder of an iqta, a land revenue assignment given for service, was known as the', null, null,
    ['khut', 'ariz', 'barid', 'muqti'], 3,
    'An iqta was a land revenue assignment for service, and its holder was the muqti.',
    ['Khuts were rural chiefs at village level, not holders of iqtas from the Sultan.', 'The Ariz-i-Mumalik headed the military department and did not hold the iqta by that title.', 'The Barid-i-Mumalik headed intelligence and the post, a separate function.', ''],
    'Iqta and muqti', 'Iqta is the assignment; muqti is the holder.', 'The iqta is the central administrative institution of the Sultanate.', 'Notes: Administration; Satish Chandra, History of Medieval India (Government and administration)'),

  // Moderate
  y(2021, 38, 19, 'moderate', 'multi-statement', 'Consider the following statements :', ['1. It was during the reign of Iltutmish that Chengiz Khan reached the Indus in pursuit of the fugitive Khwarezm prince.', '2. It was during the reign of Muhammad bin Tughluq that Taimur occupied Multan and crossed the Indus.', '3. It was during the reign of Deva Raya II of Vijayanagara Empire that Vasco da Gama reached the coast of Kerala.'], 'Which of the statements given above is/are correct?',
    ['1 only', '1 and 2', '3 only', '2 and 3'], 0,
    'Only statement 1 is correct. Chengiz Khan came to the Indus in pursuit of the Khwarizmi prince in 1221, under Iltutmish. Timur came in 1398 under the later Tughluqs, and Vasco da Gama reached Calicut in 1498, long after Deva Raya II.',
    ['', 'Statement 2 fails because Timur came in 1398, under the later Tughluqs and not under Muhammad bin Tughluq.', 'Statement 3 fails because Vasco da Gama arrived in 1498, long after Deva Raya II.', 'Both fail: Timur came under the later Tughluqs, and Vasco da Gama came in 1498, after Deva Raya II.'],
    'Invaders and reigns', 'Chengiz: Iltutmish. Timur: later Tughluqs. Vasco da Gama: 1498.', 'The note singles out this Prelims 2021 question as a model for matching foreign arrivals with rulers.', 'Notes: The big picture; Satish Chandra, History of Medieval India; Prelims 2021 GS I, Q38'),
  y(2019, 12, 7, 'moderate', 'multi-statement', 'Consider the following statements :', ["1. In the revenue administration of Delhi Sultanate, the in-charge of revenue collection was known as 'Amil'.", '2. The Iqta system of Sultans of Delhi was an ancient indigenous institution.', "3. The office of 'Mir Bakshi' came into existence during the reign of Khalji Sultans of Delhi."], 'Which of the statements given above is/are correct?',
    ['1 only', '1 and 2 only', '3 only', '1, 2 and 3'], 0,
    'Only statement 1 stands. The iqta came with the Turkish rulers and was not an ancient Indian institution, and the Mir Bakshi was a Mughal minister, not a Khalji office.',
    ['', 'Statement 2 fails because the iqta was brought in by the Turkish rulers, not inherited as an ancient Indian institution.', 'Statement 3 fails because the Mir Bakshi belongs to the Mughal central administration.', 'Statements 2 and 3 fail: the iqta was not ancient and indigenous, and the Mir Bakshi was Mughal.'],
    'Sultanate revenue offices', 'Iqta: Turkish rulers. Mir Bakshi: Mughals.', 'It tests the common mix-up between Sultanate and Mughal offices.', 'Notes: Administration; Satish Chandra, History of Medieval India (Government and administration); Prelims 2019 GS I, Q12'),
  q(7, 'moderate', 'multi-statement', 'Consider the following measures:', ['1. Branding of horses (dagh)', '2. A descriptive roll of soldiers (chehra)', '3. Land revenue fixed at half of the produce'], 'How many of the above are associated with Alauddin Khalji?',
    COUNT, 2,
    'All three belong to Alauddin Khalji. The dagh and chehra checked fraud in the army, and he raised land revenue to half of the produce.',
    ['Statements 1, 2 and 3 are all Alauddin\'s, so counting only one undercounts them.', 'Each of the three is Alauddin\'s, including the half-produce demand on land.', '', 'All three are firmly attributed to Alauddin Khalji, so None is impossible.'],
    'Alauddin\'s reforms', 'Alauddin: dagh, chehra, half-produce revenue, market control.', 'Later rulers such as Sher Shah and Akbar reused dagh and chehra, so the origin is a favourite test.', 'Notes: The big picture; Satish Chandra, History of Medieval India (Alauddin Khalji)'),
  q(8, 'moderate', 'match', 'Consider the following pairs:', ['1. Diwan-i-Mustakhraj : Alauddin Khalji', '2. Diwan-i-Amir-i-Kohi : Firoz Shah Tughluq', '3. Diwan-i-Bandagan : Firoz Shah Tughluq'], 'How many of the above pairs are correctly matched?',
    COUNT, 1,
    'Pairs 1 and 3 are correct. The Diwan-i-Amir-i-Kohi, the agriculture department, belongs to Muhammad bin Tughluq and not to Firoz.',
    ['Pairs 1 and 3 are both correct, since Mustakhraj is Alauddin\'s and Bandagan is Firoz\'s.', '', 'Pair 2 fails because the Diwan-i-Amir-i-Kohi was set up by Muhammad bin Tughluq.', 'Pairs 1 and 3 are correct, so None cannot be the answer.'],
    'New departments', 'Mustakhraj: Alauddin. Amir-i-Kohi: Muhammad bin Tughluq. Bandagan, Khairat: Firoz.', 'Close-sounding departments under related dynasties make a good elimination test.'),
  q(9, 'moderate', 'match', 'Match the Sultanate offices with their functions:', ['A. Ariz-i-Mumalik', 'B. Barid-i-Mumalik', 'C. Qazi-ul-Quzat', 'D. Sadr-us-Sudur', '1. Religious affairs and grants', '2. Military department', '3. Intelligence and post', '4. Chief judge'], 'Select the correct code.',
    ['A-3, B-2, C-4, D-1', 'A-2, B-3, C-1, D-4', 'A-2, B-3, C-4, D-1', 'A-4, B-3, C-2, D-1'], 2,
    'The Ariz-i-Mumalik ran the military department, the Barid-i-Mumalik intelligence and the post, the Qazi-ul-Quzat was the chief judge, and the Sadr-us-Sudur handled religious affairs and grants.',
    ['This swaps A and B: the Ariz ran the military, while the Barid ran intelligence and post.', 'This swaps C and D: the Qazi-ul-Quzat was the chief judge, and the Sadr handled grants.', '', 'This swaps A and C: the Ariz was military, and the Qazi-ul-Quzat was the chief judge.'],
    'Central offices', 'Ariz: army. Barid: post. Qazi: justice. Sadr: grants.', 'Office-to-function matching is a direct test of the administration table.', 'Notes: Administration'),
  q(10, 'moderate', 'assertion-reason', "Statement I: Barani describes the khuts and muqaddams as having lost their comfortable way of life under Alauddin Khalji.\nStatement II: Alauddin made these rural chiefs pay the same taxes as others and give up the illegal cesses they used to collect.", null, 'Which one of the following is correct?',
    SI, 0,
    'Both are correct, and II explains I. By making khuts and muqaddams pay the same taxes as others and stopping their cesses, Alauddin curbed their wealth, which is what Barani describes.',
    ['', 'II is the direct cause of what I reports, since the loss of cesses and new tax burdens made them poorer.', 'II is also correct: Alauddin wanted these landlords to pay the same taxes as others.', 'I is also correct: Barani says the khuts and muqaddams could no longer live in their old style.'],
    'Curbing rural chiefs', 'Alauddin curbed khuts and muqaddams through equal taxation.', 'It tests how the state reached down to the village elite.', 'Notes: Administration; Satish Chandra, History of Medieval India (Alauddin Khalji)'),
  q(11, 'moderate', 'assertion-reason', 'Statement I: The Alai Darwaza contains a dome built on correct scientific lines.\nStatement II: The Alai Darwaza was added by Alauddin Khalji as an entrance to the Qutb complex.', null, 'Which one of the following is correct?',
    SI, 1,
    'Both are correct, but II does not explain I. Who built the gate and where it stands does not account for the engineering of its dome.',
    ['II gives the patron and the place of the gate, which is not a reason for the correct construction of the dome.', '', 'II is also correct: Alauddin added this entrance door to the Qutb.', 'I is also correct: the dome here was built on correct scientific lines for the first time.'],
    'Alai Darwaza', 'Alai Darwaza: Alauddin; arch and dome on scientific lines.', 'Sultanate architecture is often linked to the true arch and dome.', 'Notes: Economy, society and culture; Satish Chandra, History of Medieval India (Architecture)'),
  q(12, 'moderate', 'assertion-reason', 'Statement I: Firoz Shah Tughluq imposed jizya on brahmanas.\nStatement II: Firoz Shah Tughluq is remembered for greatly increasing the number of taxes on his subjects.', null, 'Which one of the following is correct?',
    SI, 2,
    'Statement I is correct, but II is wrong. Firoz imposed jizya on brahmanas, yet he is noted for abolishing many taxes rather than adding them.',
    ['II is incorrect, since Firoz abolished many taxes, so it cannot explain I.', 'II is not correct at all: the note records that Firoz abolished many taxes.', '', 'I is correct: Firoz did impose jizya on brahmanas, as the note states.'],
    'Firoz and taxation', 'Firoz: canals, many taxes abolished, jizya on brahmanas.', 'A ruler with mixed policies invites careful statement testing.', 'Notes: The big picture'),
  q(13, 'moderate', 'assertion-reason', 'Statement I: Ibn Battuta served at the court of Firoz Shah Tughluq.\nStatement II: Ibn Battuta is the author of the Rihla.', null, 'Which one of the following is correct?',
    SI, 3,
    'Statement I is wrong and II is right. Ibn Battuta, who wrote the Rihla, lived at the court of Muhammad bin Tughluq, not Firoz.',
    ['I is wrong, because Ibn Battuta was at the court of Muhammad bin Tughluq and not Firoz.', 'I is wrong, so both statements cannot be correct: his patron was Muhammad bin Tughluq.', 'I is the wrong statement here, while II about the Rihla is correct.', ''],
    'Ibn Battuta', 'Ibn Battuta: Rihla; at Muhammad bin Tughluq\'s court.', 'Travellers must be matched with the correct ruler.', 'Notes: Economy, society and culture; Satish Chandra, History of Medieval India'),
  q(14, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. Muhammad bin Tughluq built Tughluqabad.', '2. Muhammad bin Tughluq issued a token currency.', '3. Muhammad bin Tughluq set up the Diwan-i-Bandagan.'], 'How many of the above statements are correct?',
    COUNT, 0,
    'Only statement 2 is correct. Ghiyasuddin Tughluq built Tughluqabad, and the Diwan-i-Bandagan for slaves belongs to Firoz.',
    ['', 'Only one holds: statement 1 fails since Ghiyasuddin built Tughluqabad, and statement 3 fails since the department is Firoz\'s.', 'Statements 1 and 3 fail: Tughluqabad is Ghiyasuddin\'s and the Diwan-i-Bandagan is Firoz\'s.', 'Statement 2 is correct, since the token currency was his experiment.'],
    'Tughluq attributions', 'Tughluqabad: Ghiyasuddin. Token: Muhammad. Bandagan: Firoz.', 'The Tughluq rulers are easily confused, which is why the note warns against swapping reforms.'),
  q(15, 'moderate', 'multi-statement', 'Consider the following statements about Sultanate architecture:', ['1. Sloping walls were a striking feature of Tughluq buildings.', '2. The Quwwat-ul-Islam mosque near the Qutb Minar was converted from an earlier temple.'], 'Which of the statements given above is/are correct?',
    BOTH, 2,
    'Both are correct. Tughluq buildings are known for sloping walls, called batter, and the Quwwat-ul-Islam mosque was made by converting a temple.',
    ['Statement 2 is also correct: the mosque was converted from a temple.', 'Statement 1 is also correct: the sloping walls, or batter, mark Tughluq buildings.', '', 'Both are supported, so Neither cannot be the answer.'],
    'Sultanate architecture', 'Tughluq: sloping walls. Quwwat-ul-Islam: converted temple.', 'Architectural features are a reliable way to test the period\'s culture.', 'Notes: Economy, society and culture; Satish Chandra, History of Medieval India (Architecture)'),
  q(16, 'moderate', 'multi-statement', 'Consider the following statements about Razia:', ['1. She was the first and only woman to rule as Sultan of Delhi.', '2. Turkish nobles accused her of being too friendly with the Abyssinian noble Yaqut Khan.'], 'Which of the statements given above is/are correct?',
    BOTH, 2,
    'Both are correct. Razia was the first and only woman Sultan, and her attempts to raise a non-Turk brought accusations from the Turkish nobles.',
    ['Statement 2 is also correct: the nobles accused her over Yaqut Khan.', 'Statement 1 is also correct: she was the first and only woman Sultan.', '', 'Both are supported, so Neither cannot be the answer.'],
    'Razia and the nobles', 'Razia\'s reign began the struggle between monarchy and Turkish nobles.', 'Her reign shows the tension between the crown and the Forty.', 'Notes: The big picture; Satish Chandra, History of Medieval India (Raziya)'),
  q(17, 'moderate', 'application', 'Under Alauddin Khalji, a grain merchant in Delhi had to enter his name in a register kept by the high officer who controlled shopkeepers and prices in that market. This officer was called the', null, null,
    ['shahna', 'muqti', 'ariz', 'barid'], 0,
    'Each of Alauddin\'s markets at Delhi was under an officer called the shahna, who kept a register of merchants and controlled shopkeepers and prices.',
    ['', 'A muqti held an iqta in the provinces and did not run the Delhi markets.', 'The ariz dealt with the military department, not with market prices.', 'The barid dealt with intelligence and post, though not with registering merchants.'],
    'Market control officers', 'Market control: three markets, each under a shahna.', 'Market control is the best-known Sultanate economic measure, and the machinery behind it is fair for moderate testing.', 'Notes: The big picture; Satish Chandra, History of Medieval India (Alauddin\'s market control)'),
  q(18, 'moderate', 'application', 'A student claims that Timur\'s invasion of 1398 alone destroyed the Delhi Sultanate. Which of the following is the best correction?', null, null,
    ['Provinces had already been breaking away, as Vijayanagara and the Bahmani kingdom had arisen before 1398', 'The Sultanate had already ended before 1398, because Babur had occupied Delhi', 'Timur stayed on as Sultan and his family ruled until 1526', 'Timur\'s invasion took place under the Lodis, so it cannot explain the Tughluq decline'], 0,
    'Decline was a process: overreach, failed projects and breakaway provinces came first. Vijayanagara (1336) and the Bahmani kingdom (1347) predate Timur, and the Sultanate lasted until 1526.',
    ['', 'Babur came only in 1526, so he cannot have ended the Sultanate before 1398.', 'Timur did not stay to rule Delhi: Sayyid and Lodi rulers followed until 1526.', 'Timur came under the later Tughluqs in 1398; the Lodis began only in 1451.'],
    'Why the Sultanate declined', 'Timur was a fatal blow to prestige, not the sole cause.', 'Causal questions test whether the candidate sees decline as a process.', 'Notes: Why it declined; Notes: Vijayanagara and Bahmani'),

  // Hard
  y(2022, 57, 27, 'hard', 'multi-statement', 'With reference to Indian history, consider the following statements :', ['1. The first Mongol invasion of India happened during the reign of Jalal-ud-din Khalji.', '2. During the reign of Ala-ud-din Khalji, one Mongol assault marched up to Delhi and besieged the city.', '3. Muhammad-bin-Tughlaq temporarily lost portions of north-west of his kingdom to Mongols.'], 'Which of the statements given above is/are correct ?',
    ['1 and 2', '2 only', '1 and 3', '3 only'], 1,
    'Statement 2 alone stands. The Mongol threat appeared in 1221, long before Jalal-ud-din Khalji. Muhammad bin Tughluq, by contrast, beat the Mongols after their raid and extended his power beyond the Indus for a time.',
    ['Statement 1 fails because the Mongol threat first appeared in 1221, well before the Khaljis.', '', 'Statement 1 fails on date, and statement 2, which is correct, is left out of this code.', 'This leaves out statement 2, the Mongol siege of Delhi under Alauddin, which is correct.'],
    'Mongols and the Sultanate', 'Mongol threat from 1221; Delhi besieged under Alauddin.', 'It builds on the note\'s point about matching each foreign invader with a reign.', 'Notes: The big picture; Satish Chandra, History of Medieval India; Prelims 2022 GS I, Q57'),
  y(2022, 58, 27, 'hard', 'factual', 'With reference to Indian history, who of the following were known as "Kulah-Daran" ?', null, null,
    ['Arab merchants', 'Qalandars', 'Persian calligraphists', 'Sayyids'], 3,
    'Kulah-Daran means wearers of the pointed cap (kulah), a mark of the Sayyids, who claimed descent from the Prophet. Here the term refers to a descent group, not to the Sayyid dynasty as such.',
    ['Arab merchants were a trading group, and the pointed cap was a mark of Sayyid status.', 'Qalandars were wandering mystics, a different religious type.', 'Calligraphists were defined by a craft, whereas this title marks descent.', ''],
    'Kulah-Daran', 'Kulah-Daran: Sayyids, the wearers of the pointed cap.', 'It rewards knowledge of social status terms among the Muslim elite of the period.', 'Notes: The big picture; web search on the term, from coaching explanations of the 2022 paper; Prelims 2022 GS I, Q58'),
  q(19, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Qutbuddin Aibak introduced the silver tanka and copper jital.', '2. Balban created the Turkan-i-Chahalgani.', '3. Large-scale canal building is the reform most closely associated with Alauddin Khalji.'], 'How many of the above statements are correct?',
    COUNT, 3,
    'None is correct. The tanka and jital and the Forty both belong to Iltutmish, and canals are the hallmark of Firoz Shah Tughluq.',
    ['No statement holds: statement 1 is Iltutmish, statement 2 is Iltutmish, and statement 3 is Firoz.', 'Each of the three shifts a reform to the wrong ruler, so two cannot be correct.', 'All three are wrong attributions, the reverse of this option.', ''],
    'Reforms swapped', 'Iltutmish: coins and the Forty. Firoz: canals.', 'The trap note warns precisely against these swaps.'),
  q(20, 'hard', 'match', 'Consider the following pairs of department and function:', ['1. Diwan-i-Wizarat : revenue and finance', '2. Diwan-i-Arz : military', '3. Diwan-i-Mustakhraj : agriculture', '4. Diwan-i-Khairat : charity'], 'How many of the above pairs are correctly matched?',
    ['Only one', 'Only two', 'Only three', 'All four'], 2,
    'Pairs 1, 2 and 4 are correct. The Diwan-i-Mustakhraj dealt with arrears under Alauddin, while agriculture fell to Muhammad bin Tughluq\'s Diwan-i-Amir-i-Kohi.',
    ['Pairs 1, 2 and 4 all hold, so counting one is too low.', 'Only pair 3 fails, so three pairs, and not two, are correct.', '', 'Pair 3 fails: the Diwan-i-Mustakhraj dealt with arrears, not agriculture.'],
    'Departments and functions', 'Mustakhraj: arrears. Amir-i-Kohi: agriculture.', 'Similar Persian office names are a classic source of confusion.'),
  q(21, 'hard', 'multi-statement', 'Consider the following statements about Malik Kafur\'s southern campaigns:', ['1. They brought Warangal and Dwar Samudra under direct annexation by the Sultanate.', '2. Alauddin Khalji appointed Kafur malik-naib, or vice-regent of the empire.'], 'Which of the statements given above is/are correct?',
    BOTH, 1,
    'Only statement 2 is correct. Kafur forced the rulers of Warangal and Dwar Samudra to sue for peace, give up treasure and promise tribute, so the political effects were limited and they were not annexed.',
    ['Statement 1 fails: these rulers paid tribute and were not annexed at this stage.', '', 'Statement 1 fails, since these campaigns forced tribute rather than direct annexation.', 'Statement 2 is correct: Kafur was made malik-naib.'],
    'Limits of southern expansion', 'Kafur\'s campaigns brought tribute and treasure, not annexation.', 'It tests the distinction between a raid or tributary success and lasting conquest.', 'Notes: The big picture; Satish Chandra, History of Medieval India (Alauddin\'s expansion)'),
  q(22, 'hard', 'multi-statement', 'Consider the following statements about Amir Khusrau:', ['1. He was a Persian poet.', '2. He is linked with Khari Boli and with music.', '3. Firm historical evidence proves that he invented the sitar.'], 'How many of the above statements are correct?',
    COUNT, 1,
    'Statements 1 and 2 are correct. Khusrau is credited with inventing the sitar, but Satish Chandra points out that there is no evidence for it, so statement 3 fails.',
    ['Both statements 1 and 2 hold, since Khusrau was a Persian poet and is linked with Khari Boli and music.', '', 'Statement 3 fails: the credit for the sitar is popular, but there is no evidence for it.', 'Statements 1 and 2 are correct, so None cannot be the answer.'],
    'Amir Khusrau', 'Khusrau: Persian poet, Khari Boli and music; sitar claim unproven.', 'UPSC likes to separate popular attribution from documented fact.', 'Notes: Economy, society and culture; Satish Chandra, History of Medieval India (Music)'),
  q(23, 'hard', 'statement', 'Which one of the following statements about taxes under the Delhi Sultanate is correct?', null, null,
    ['Kharaj was the land tax, and khams was a share of war booty', 'Khams was the land tax, and kharaj was a share of war booty', 'Zakat was levied on non-Muslims, and jizya on Muslims', 'Zakat was a tax on land, and jizya a share of war booty'], 0,
    'Kharaj was the land tax, khams a share of war booty, jizya a tax on non-Muslims and zakat a tax on Muslims.',
    ['', 'This swaps the two: kharaj was on land, and khams was the booty share.', 'This reverses the two: zakat fell on Muslims and jizya on non-Muslims.', 'Zakat fell on Muslims rather than on land, and khams, not jizya, was the booty share.'],
    'Sultanate taxes', 'Kharaj land, khams booty, jizya non-Muslims, zakat Muslims.', 'Four similar fiscal terms are easy to swap under pressure.'),
  q(24, 'hard', 'multi-statement', 'Consider the following statements about the last two dynasties of the Sultanate:', ['1. Khizr Khan and his successors ran a weak and narrow state.', '2. The Lodis were Afghan rulers.', '3. The gaz-i-Sikandari measure is associated with Sikandar Lodi.'], 'How many of the above statements are correct?',
    COUNT, 2,
    'All three are correct. The Sayyid state under Khizr Khan was weak, the Lodis were Afghans, and the gaz-i-Sikandari is linked with Sikandar Lodi, not with a Sayyid ruler.',
    ['All three hold, including the Afghan identity of the Lodis.', 'Statements 1, 2 and 3 are all correct, so two is too few.', '', 'Each statement is supported, so None cannot be the answer.'],
    'Sayyids and Lodis', 'Sayyid: weak state. Lodi: Afghan rule; Sikandar and the gaz.', 'The last dynasties are often skipped in revision, which makes them a useful discriminator.'),
]

export const mains: MainsQuestion[] = [
  {
    id: 'm-1115-1', day: DAY, marks: 10, words: 150, directive: 'Examine',
    question: 'Examine why the experiments of Muhammad bin Tughluq are often seen as a case of sound ideas that failed in design and implementation.',
    mustCover: ['Capital shift to Daulatabad and the logic of controlling the south', 'Token currency and its failure', 'Doab tax and the diwan-i-amir-i-kohi', 'Khurasan and Qarachil campaigns', 'Effect on prestige and provinces', 'A forward-looking lesson on policy design'],
    model: `Muhammad bin Tughluq ruled an empire stretching far south, and his projects tried to answer real problems of distance, money and revenue. Their failure lay more in execution than in intent.

Ideas and their failures

Capital shift: Daulatabad suited control of the south, but moving people from Delhi imposed heavy costs.

Token currency: a bronze coin was given the value of the silver tanka. Other rulers had tried token money, yet the state failed to keep it credible.

Agriculture: the Doab tax burdened peasants, while the Diwan-i-Amir-i-Kohi sought to extend cultivation through official loans, with poor results.

Campaigns: the Khurasan and Qarachil plans drained resources.

Consequences

Failed projects hurt prestige and resources, and provinces later broke away as Vijayanagara and the Bahmani kingdom rose.

Conclusion

The lesson remains relevant: reform needs phased rollout, public trust, administrative capacity and feedback. Good intent cannot replace careful design.`,
  },
  {
    id: 'm-1115-2', day: DAY, marks: 10, words: 150, directive: 'Discuss',
    question: 'Discuss how Alauddin Khalji\'s agrarian, market and military measures reinforced one another.',
    mustCover: ['Land revenue at half of the produce', 'Curbing khuts and muqaddams', 'Market control through shahnas and registered banjaras', 'Dagh and chehra', 'Link to a large standing army and Mongol defence', 'Limits of the system'],
    model: `Alauddin Khalji faced Mongol threats and ambitions of expansion, which required a large army. His reforms formed a connected system to pay for it.

Agrarian base

Land revenue rose to half of the produce. Khuts and muqaddams had to pay the same taxes as others and give up illegal cesses, which took surplus from the rural elite.

Market control

Peasants who paid in cash sold grain cheaply to registered banjaras. Delhi's markets, each under a shahna, kept prices low, so soldiers could live on fixed pay.

Military reform

Dagh and chehra checked fraud at musters, so that state money produced real fighting strength. He defeated the Mongols and sent Malik Kafur south.

Limits

The system depended on severe supervision and a strong ruler, and rural elites and peasants bore the burden.

Conclusion

The measures show a remarkable grasp of how revenue, prices and defence connect, though coercion limited their durability.`,
  },
  {
    id: 'm-1115-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse',
    question: 'The Delhi Sultanate was an urban, cash-tax and Persianate state that still depended on local chiefs. Critically analyse this view, and explain how these features contributed to its decline.',
    mustCover: ['Urban growth and crafts', 'Cash-based revenue and coinage', 'Persianate administration and literature', 'Iqta, muqti and dependence on khuts and muqaddams', 'Overreach, failed projects, provincial breakaway and Timur', 'A balanced conclusion'],
    model: `The Delhi Sultanate (1206-1526) spanned five dynasties. It created a new political order, yet it rested on older rural foundations.

Urban and commercial features

Delhi, Daulatabad and Lahore grew, and crafts and long-distance trade expanded. The spinning wheel and paper spread in this period.

Cash and revenue

Iltutmish's silver tanka and copper jital supported a monetised state. Alauddin obliged many peasants to pay in cash and regulated markets.

Persianate culture

Offices such as the Wazir, Ariz-i-Mumalik and Qazi-ul-Quzat gave structure. Barani and Amir Khusrau shaped its literary culture, and the arch and dome changed building.

Dependence on local power

The state could not rule villages alone. Iqtas passed revenue through muqtis, and khuts and muqaddams remained the rural elite. Alauddin curbed them but did not abolish them, so the claim of a purely new state is overstated.

Link to decline

The iqta allowed expansion, but distance gave provincial holders the chance to break away. Muhammad bin Tughluq's failed projects cost resources, and Vijayanagara and the Bahmanis rose. Timur's sack of Delhi in 1398 was a blow to prestige, and the Sayyids held only a narrow state. Babur ended Lodi rule at Panipat in 1526.

Conclusion

The description is broadly fair, but incomplete. The Sultanate was new at the centre and old at the village level. Its lasting legacy, seen in revenue terms, offices and culture, passed to later states, while its failure shows that central ambition needs institutions able to hold distant regions.`,
  },
]
