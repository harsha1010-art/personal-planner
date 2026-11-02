import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-16'
const S = 'Notes: Vijayanagara, Bahmani and regional kingdoms'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1116-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  y(2024, 56, 25, 'easy', 'factual', 'Who of the following rulers of medieval India gave permission to the Portuguese to build a fort at Bhatkal ?', null, null,
    ['Krishnadevaraya', 'Narasimha Saluva', 'Muhammad Shah III', 'Yusuf Adil Shah'], 0,
    'Krishnadeva Raya allowed the Portuguese to build a fort at Bhatkal. Vijayanagara had an interest in the horse trade that the Portuguese controlled by sea.',
    ['', 'Narasimha Saluva belonged to the earlier Saluva line, and the note ties the Bhatkal permission to Krishnadeva Raya.', 'Muhammad Shah III was a Bahmani sultan; the Bhatkal permission is tied to Krishnadeva Raya of Vijayanagara.', 'Yusuf Adil Shah ruled Bijapur, a rival state; the Bhatkal permission came from Krishnadeva Raya.'],
    'Krishnadeva and the Portuguese', 'Bhatkal fort: Krishnadeva Raya.', 'The note records that Prelims 2024 tested this link.', 'Notes: Vijayanagara; Prelims 2024 GS I, Q56'),
  y(2023, 48, 19, 'easy', 'factual', 'Who among the following rulers of Vijayanagara Empire constructed a large dam across Tungabhadra River and a canal-cum-aqueduct several kilometres long from the river to the capital city?', null, null,
    ['Devaraya I', 'Mallikarjuna', 'Vira Vijaya', 'Virupaksha'], 0,
    'Deva Raya I built a dam across the Tungabhadra and took canals into the city to relieve its water shortage. The canals irrigated nearby fields as well.',
    ['', 'Mallikarjuna is not the ruler credited with this dam; the credit goes to Deva Raya I.', 'Vira Vijaya is not credited with this work; the sources name Deva Raya I.', 'Virupaksha is not the builder named here; the sources name Deva Raya I.'],
    'Deva Raya I\'s dam', 'Tungabhadra dam and canals: Deva Raya I.', 'State water management is a repeated theme in this topic.', 'Notes: Vijayanagara; Satish Chandra, History of Medieval India (Deva Raya I); Prelims 2023 GS I, Q48'),
  y(2022, 52, 25, 'easy', 'factual', 'In medieval India, the term "Fanam" referred to :', null, null,
    ['Clothing', 'Coins', 'Ornaments', 'Weapons'], 1,
    'Fanam refers to a small coin. In Vijayanagara coinage, gold pagodas were the higher denomination and gold fanams were fractional units.',
    ['Fanam is a unit of money, not a kind of garment.', '', 'Fanams were gold coins, though the term names a denomination and not jewellery.', 'The word belongs to coinage and has no connection with arms.'],
    'Fanam', 'Vijayanagara coins: gold varaha or pagoda, with fanam as a fraction.', 'Coin terms are a simple but repeated recall test.', 'Notes: Vijayanagara; Nitin Singhania, Indian Art and Culture (Coins in Ancient and Medieval India); Prelims 2022 GS I, Q52'),
  y(2019, 11, 7, 'easy', 'factual', "Building 'Kalyaana Mandapas' was a notable feature in the temple construction in the kingdom of", null, null,
    ['Chalukya', 'Chandela', 'Rashtrakuta', 'Vijayanagara'], 3,
    'Kalyana mandapas, built as separate halls within temple complexes, are a feature of Vijayanagara temple building.',
    ['Chalukya temples are examples of an earlier style, while the kalyana mandapa is linked with Vijayanagara.', 'Chandela temples such as those of Khajuraho belong to a north Indian tradition, not this feature.', 'Rashtrakuta work such as the Kailash temple at Ellora belongs to an earlier period.', ''],
    'Kalyana mandapa', 'Vijayanagara temples: raya gopuram, kalyana mandapa, musical pillars.', 'Temple architecture features are often used to identify dynasties.', 'Notes: Vijayanagara; Nitin Singhania, Indian Art and Culture (Vijayanagara temples); Prelims 2019 GS I, Q11'),
  q(1, 'easy', 'factual', 'The Vijayanagara kingdom was founded in 1336 by', null, null,
    ['Deva Raya I and Deva Raya II', 'Harihara and Bukka', 'Saluva Narasimha and Krishnadeva Raya', 'Rama Raya and Achyuta Raya'], 1,
    'Harihara and Bukka of the Sangama family founded Vijayanagara in 1336 on the Tungabhadra, with the capital at Hampi.',
    ['Deva Raya I and II were later Sangama rulers, in the fifteenth century.', '', 'They belong to the later Saluva and Tuluva lines, not the founding.', 'Rama Raya and Achyuta Raya belong to the sixteenth century, near the end of the empire\'s peak.'],
    'Founding of Vijayanagara', '1336: Harihara and Bukka, Sangama family.', 'A core date and name for any test on the empire.'),
  q(2, 'easy', 'factual', 'The Telugu work Amuktamalyada was written by', null, null,
    ['Allasani Peddana', 'Deva Raya II', 'Krishnadeva Raya', 'Rama Raya'], 2,
    'Krishnadeva Raya wrote Amuktamalyada in Telugu. Allasani Peddana was a poet at his court, one of the Ashtadiggajas.',
    ['Peddana was one of the Ashtadiggajas at the court, but the king himself wrote this work.', 'Deva Raya II is known for recruiting Muslim soldiers, not for this work.', '', 'Rama Raya was the regent defeated at Talikota, not this author.'],
    'Amuktamalyada', 'Amuktamalyada: Krishnadeva Raya, in Telugu.', 'The note lists this in quick recall.'),
  q(3, 'easy', 'factual', 'The Gol Gumbaz, known for its huge dome and whispering gallery, stands in the territory of which Deccan state?', null, null,
    ['Golconda', 'Ahmadnagar', 'Bidar', 'Bijapur'], 3,
    'The Gol Gumbaz at Bijapur is the tomb of Muhammad Adil Shah of the Adil Shahi dynasty.',
    ['Golconda under the Qutb Shahis is known for diamonds and the Charminar at Hyderabad.', 'Ahmadnagar is linked with Chand Bibi and Malik Ambar, not this tomb.', 'Bidar is known for the madrasa of Mahmud Gawan, not the Gol Gumbaz.', ''],
    'Gol Gumbaz', 'Gol Gumbaz: Bijapur, Adil Shahi.', 'A standard monument-to-state pair.'),
  q(4, 'easy', 'factual', 'Goa was captured for the Portuguese in 1510 by', null, null,
    ['Vasco da Gama', 'Albuquerque', 'Domingo Paes', 'Nuniz'], 1,
    'Albuquerque took Goa in 1510. Vasco da Gama had reached Calicut in 1498, and Paes and Nuniz are known as writers on Vijayanagara.',
    ['Vasco da Gama reached Calicut in 1498, and did not take Goa in 1510.', '', 'Domingo Paes is remembered as a visitor to Krishnadeva Raya\'s Vijayanagara.', 'Nuniz is remembered as a writer on Vijayanagara under Achyuta Raya.'],
    'Portuguese expansion', '1498 Calicut: Vasco da Gama. 1510 Goa: Albuquerque.', 'The note lists both Portuguese dates for recall.'),

  // Moderate
  y(2021, 35, 19, 'moderate', 'multi-statement', 'According to Portuguese writer Nuniz, the women in Vijayanagara Empire were expert in which of the following areas?', ['1. Wrestling', '2. Astrology', '3. Accounting', '4. Soothsaying'], 'Select the correct answer using the code given below.',
    ['1, 2 and 3 only', '1, 3 and 4 only', '2 and 4 only', '1, 2, 3 and 4'], 3,
    'Nuniz reported that women in Vijayanagara worked as wrestlers, astrologers, accountants and soothsayers, so all four are correct.',
    ['This leaves out soothsaying, which Nuniz also mentions.', 'This leaves out astrology, which Nuniz also mentions.', 'This leaves out wrestling and accounting, both of which Nuniz mentions.', ''],
    'Women in Vijayanagara', 'Nuniz: women as wrestlers, astrologers, accountants, soothsayers.', 'The note records this Prelims 2021 question, and it recalls a striking social detail.', 'Notes: Vijayanagara; Prelims 2021 GS I, Q35'),
  y(2019, 23, 11, 'moderate', 'map', 'Consider the following pairs :', ['Famous place : River', '1. Pandharpur : Chandrabhaga', '2. Tiruchirappalli : Cauvery', '3. Hampi : Malaprabha'], 'Which of the pairs given above are correctly matched?',
    ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 0,
    'Pairs 1 and 2 are correct. Hampi, the Vijayanagara capital, stands on the Tungabhadra, not the Malaprabha.',
    ['', 'Pair 3 fails, because Hampi lies on the Tungabhadra.', 'Pair 3 fails since Hampi is on the Tungabhadra, and pair 2 is in fact correct.', 'Pair 3 fails, since the river at Hampi is the Tungabhadra.'],
    'Hampi and the Tungabhadra', 'Hampi: on the Tungabhadra.', 'Maps and rivers tie history with geography.', 'Notes: Vijayanagara; Prelims 2019 GS I, Q23'),
  q(22, 'moderate', 'multi-statement', 'Consider the following statements about Krishnadeva Raya:', ['1. He compelled the ruler of Orissa to restore Vijayanagara territories up to the river Krishna.', '2. He paid close attention to building up a strong navy.'], 'Which of the statements given above is/are correct?',
    BOTH, 0,
    'Only statement 1 is correct. Krishnadeva Raya recovered the territory up to the Krishna from Orissa, but Satish Chandra notes that he paid scant attention to developing a navy.',
    ['', 'Statement 2 fails, since he paid scant attention to a navy, unlike the Cholas.', 'Statement 2 fails: his strength lay on land and not at sea.', 'Statement 1 is correct: Orissa had to restore the lands up to the Krishna.'],
    'Krishnadeva on land and sea','Krishnadeva: strong on land, weak at sea.', 'Neglect of naval power helps explain the rise of the Portuguese.', 'Notes: Vijayanagara; Satish Chandra, History of Medieval India (Krishna Deva Raya)'),
  q(5, 'moderate', 'chronology', 'Arrange the following dynasties of Vijayanagara in chronological order:', ['1. Tuluva', '2. Sangama', '3. Aravidu', '4. Saluva'], 'Select the correct order.',
    ['2-1-4-3', '4-2-1-3', '2-4-1-3', '2-4-3-1'], 2,
    'The four dynasties ruled in the order Sangama, Saluva, Tuluva, Aravidu.',
    ['This puts Tuluva before Saluva, but Krishnadeva Raya\'s Tuluva line followed the Saluvas.', 'The founding dynasty was Sangama, so Saluva cannot come first.', '', 'This puts Aravidu before Tuluva, but Aravidu came last.'],
    'Vijayanagara dynasties', 'Sangama, Saluva, Tuluva, Aravidu.', 'Sequence questions are standard for this empire.'),
  q(6, 'moderate', 'match', 'Match the travellers with the Vijayanagara ruler in whose time they are placed:', ['A. Nicolo Conti', 'B. Abdur Razzaq', 'C. Domingo Paes', 'D. Nuniz', '1. Krishnadeva Raya', '2. Deva Raya I', '3. Achyuta Raya', '4. Deva Raya II'], 'Select the correct code.',
    ['A-2, B-4, C-1, D-3', 'A-4, B-2, C-1, D-3', 'A-2, B-4, C-3, D-1', 'A-1, B-4, C-2, D-3'], 0,
    'Conti visited under Deva Raya I, Abdur Razzaq under Deva Raya II, Paes under Krishnadeva Raya, and Nuniz is placed under Achyuta Raya.',
    ['', 'This swaps Conti and Razzaq: Conti came in Deva Raya I\'s time and Razzaq in Deva Raya II\'s.', 'This swaps Paes and Nuniz: Paes is placed under Krishnadeva Raya and Nuniz under Achyuta Raya.', 'This swaps Conti and Paes: Conti came under Deva Raya I and Paes under Krishnadeva Raya.'],
    'Foreign travellers', 'Conti, Razzaq, Paes, Nuniz: Deva Raya I, Deva Raya II, Krishnadeva, Achyuta.', 'The note says to use this list directly, and it is a repeat favourite.'),
  q(7, 'moderate', 'multi-statement', 'Consider the following statements about the Battle of Talikota:', ['1. It was fought in 1565.', '2. It is also called Rakshasi-Tangadi.', '3. Rama Raya led the Deccan sultanates in the battle.'], 'How many of the above statements are correct?',
    COUNT, 1,
    'Statements 1 and 2 are correct. Rama Raya led Vijayanagara and was defeated by the combined Deccan sultanates, after which Hampi was sacked.',
    ['Both statement 1 on the date and statement 2 on the name are correct.', '', 'Statement 3 fails: Rama Raya led the Vijayanagara side and fought against the sultanates.', 'The date and the alternative name are both correct, so None is impossible.'],
    'Talikota, 1565', '1565: the sultanates defeat Rama Raya; Hampi sacked.', 'It is the turning point in south Indian politics.', 'Notes: Vijayanagara; Satish Chandra, History of Medieval India'),
  q(8, 'moderate', 'multi-statement', 'Consider the following statements about the Nayaka system:', ['1. Military chiefs were given territory, called amaram, for service.', '2. It later led to breakaway states such as Madurai and Tanjore.'], 'Which of the statements given above is/are correct?',
    BOTH, 2,
    'Both are correct. Nayakas held amaram in return for maintaining troops, and many of them, such as those of Madurai and Tanjore, became independent later.',
    ['Statement 2 is also correct, since Madurai and Tanjore became independent later.', 'Statement 1 is also correct, since nayakas held amaram for service.', '', 'Both are supported, so Neither cannot be the answer.'],
    'Nayaka system', 'Nayakas: amaram for service; later, breakaway states.', 'The note suggests this for answers on decentralised military power.', 'Notes: Vijayanagara; Satish Chandra, History of Medieval India (State and economy under Vijayanagara)'),
  q(9, 'moderate', 'multi-statement', 'Consider the following statements about the Bahmani kingdom:', ['1. It began in 1347 under Alauddin Hasan Bahman Shah.', '2. Its capital was first at Gulbarga and later at Bidar.', '3. Mahmud Gawan, its minister, was a native Deccani noble.'], 'How many of the above statements are correct?',
    COUNT, 1,
    'Statements 1 and 2 are correct. Mahmud Gawan was a Persian, so he belonged to the newcomer group, not to the long-established Deccanis.',
    ['Statements 1 and 2 both hold, on the founder and on the two capitals.', '', 'Statement 3 fails: Mahmud Gawan was a Persian, not a Deccani.', 'The founder and capitals are correctly stated, so None is impossible.'],
    'Bahmani kingdom', '1347: Bahman Shah. Gulbarga, then Bidar. Gawan: Persian.', 'The Deccani-Afaqi divide explains the kingdom\'s collapse.'),
  q(10, 'moderate', 'match', 'Consider the following pairs of Deccan state and dynasty:', ['1. Bijapur : Adil Shahi', '2. Golconda : Qutb Shahi', '3. Ahmadnagar : Imad Shahi', '4. Bidar : Barid Shahi'], 'How many of the above pairs are correctly matched?',
    ['Only one', 'Only two', 'Only three', 'All four'], 2,
    'Pairs 1, 2 and 4 are correct. Ahmadnagar was ruled by the Nizam Shahis, while the Imad Shahis ruled Berar.',
    ['Pairs 1, 2 and 4 are all correct, so counting one is too low.', 'Only pair 3 fails, so three pairs are correct, not two.', '', 'Pair 3 fails: the Imad Shahis ruled Berar, not Ahmadnagar.'],
    'Five Deccan sultanates', 'Adil: Bijapur. Qutb: Golconda. Nizam: Ahmadnagar. Barid: Bidar. Imad: Berar.', 'Five similar dynastic names make a natural elimination test.'),
  q(11, 'moderate', 'assertion-reason', 'Statement I: The rivalry between Vijayanagara and the Bahmani kingdom was not simply religious.\nStatement II: Vijayanagara employed Muslim soldiers, and alliances crossed religious lines.', null, 'Which one of the following is correct?',
    SI, 0,
    'Both are correct, and II explains I. The presence of Muslim soldiers in Vijayanagara and alliances across religion show that the struggle was about land, trade and mines more than faith.',
    ['', 'II is the evidence that supports I, so it does explain it.', 'II is also correct: Vijayanagara did employ Muslim soldiers.', 'I is also correct: the conflict centred on the Raichur Doab, trade and diamond mines.'],
    'Not a religious war', 'Raichur Doab, trade and mines, more than religion.', 'The note flags this as a trap, and it is a strong theme for analysis.'),
  q(12, 'moderate', 'assertion-reason', 'Statement I: The Kitab-i-Nauras is associated with Ibrahim Adil Shah II.\nStatement II: Ibrahim Adil Shah II ruled the Qutb Shahi kingdom of Golconda.', null, 'Which one of the following is correct?',
    SI, 2,
    'Statement I is correct, but II is wrong. Ibrahim Adil Shah II was an Adil Shahi ruler of Bijapur, not a Qutb Shahi ruler of Golconda.',
    ['II is incorrect, so it cannot explain I: he ruled Bijapur.', 'II is not correct at all, since he belonged to the Adil Shahi line of Bijapur.', '', 'I is correct: the note links the Kitab-i-Nauras to Ibrahim Adil Shah II.'],
    'Kitab-i-Nauras', 'Kitab-i-Nauras: Ibrahim Adil Shah II of Bijapur.', 'Cultural works of Deccan rulers appear in questions on composite culture.'),
  q(13, 'moderate', 'assertion-reason', 'Statement I: Rana Sanga of Mewar won the Battle of Khanwa in 1527.\nStatement II: Rana Kumbha was a ruler of Mewar.', null, 'Which one of the following is correct?',
    SI, 3,
    'Statement I is wrong and II is right. Rana Sanga lost at Khanwa in 1527, and Rana Kumbha was indeed a ruler of Mewar.',
    ['I is wrong, because Sanga lost at Khanwa, so II cannot explain it.', 'I is wrong, so both statements cannot be correct: Sanga lost the battle.', 'I is the wrong statement here, while II about Kumbha is right.', ''],
    'Mewar', 'Sanga lost at Khanwa in 1527.', 'Mewar links this topic with the rise of the Mughals.', 'Notes: Regional kingdoms; Satish Chandra, History of Medieval India (Mewar)'),
  q(14, 'moderate', 'match', 'Match the rulers with their regions:', ['A. Zain-ul-Abidin', 'B. Husain Shah', 'C. Mahmud Begarha', 'D. Hoshang Shah', '1. Malwa', '2. Kashmir', '3. Gujarat', '4. Bengal'], 'Select the correct code.',
    ['A-2, B-3, C-4, D-1', 'A-2, B-4, C-3, D-1', 'A-4, B-2, C-3, D-1', 'A-2, B-4, C-1, D-3'], 1,
    'Zain-ul-Abidin ruled Kashmir, Husain Shah Bengal, Mahmud Begarha Gujarat and Hoshang Shah Malwa.',
    ['This swaps B and C: Husain Shah ruled Bengal and Mahmud Begarha ruled Gujarat.', '', 'This swaps A and B: Zain-ul-Abidin ruled Kashmir and Husain Shah ruled Bengal.', 'This swaps C and D: Mahmud Begarha ruled Gujarat and Hoshang Shah ruled Malwa.'],
    'Regional rulers', 'Kashmir, Bengal, Gujarat, Malwa: Zain-ul-Abidin, Husain Shah, Begarha, Hoshang.', 'The note warns that these often appear in questions on culture.'),
  q(15, 'moderate', 'multi-statement', 'Consider the following:', ['1. The raya gopuram', '2. Mandapas with musical pillars', '3. The gold varaha, or pagoda'], 'How many of the above are features of the Vijayanagara empire?',
    COUNT, 2,
    'All three belong to Vijayanagara. The Vittala and Virupaksha temples show its architecture, and the gold varaha or pagoda was its coin.',
    ['Each of the three is listed in the note as a Vijayanagara feature, so one is too few.', 'All three, including the varaha, are Vijayanagara features.', '', 'All three are Vijayanagara features, so None cannot be the answer.'],
    'Vijayanagara art and coin', 'Raya gopuram, musical pillars, gold varaha.', 'Art and coins are linked with Hampi as a UNESCO site.'),

  // Hard
  y(2016, 9, 5, 'hard', 'multi-statement', 'Regarding the taxation system of Krishna Deva, the ruler of Vijayanagar, consider the following statements :', ['1. The tax rate on land was fixed depending on the quality of the land.', '2. Private owners of workshops paid an industries tax.'], 'Which of the statements given above is/are correct?',
    ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 2,
    'Both are correct. Vijayanagara land tax varied with the crop, soil and method of irrigation, and taxes reached beyond land to workshops and professions.',
    ['Statement 2 is also correct, since non-agricultural activity such as workshops was taxed too.', 'Statement 1 is also correct, since land rates varied with the crop, soil and irrigation.', '', 'Both are supported, so Neither cannot be the answer.'],
    'Vijayanagara taxation', 'Vijayanagara: land rates varied with soil and crop; crafts taxed too.', 'It shows the fiscal reach of the empire beyond land.', 'Notes: Vijayanagara; Satish Chandra, History of Medieval India (State and economy under Vijayanagara); web search on statement 2; Prelims 2016 GS I, Q9'),
  q(23, 'hard', 'multi-statement', 'Consider the following statements about Bahmani politics:', ['1. The Afaqis were the long-established nobles of the Deccan.', '2. Strife among the nobles helped split the kingdom into five principalities.', '3. Firuz Shah Bahmani built an observatory near Daulatabad.'], 'How many of the above statements are correct?',
    COUNT, 1,
    'Statements 2 and 3 are correct. The Afaqis, also called gharibs, were the foreign newcomers, while the long-established nobles were the Deccanis.',
    ['Statements 2 and 3 both hold, so one is too few.', '', 'Statement 1 fails: it reverses the groups, as the Afaqis were the newcomers.', 'Statements 2 and 3 are supported, so None cannot be the answer.'],
    'Deccani and Afaqi', 'Deccanis: old settlers. Afaqis: newcomers.', 'The note names this rivalry as the reason the kingdom divided, and the two labels are easily reversed.', 'Notes: Bahmani and the Deccan Sultanates; Satish Chandra, History of Medieval India (Bahmani kingdom)'),
  q(16, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Zain-ul-Abidin of Kashmir is known for tolerance and Persian translations of Sanskrit texts.', '2. Hoshang Shah founded Ahmedabad.', '3. Mahmud Begarha is known for the architecture of Mandu.'], 'How many of the above statements are correct?',
    COUNT, 0,
    'Only statement 1 is correct. Ahmad Shah of Gujarat founded Ahmedabad, and Mandu is the architecture of Malwa under Hoshang Shah, so statements 2 and 3 swap these rulers.',
    ['', 'Only statement 1 holds: statements 2 and 3 swap the Gujarat and Malwa rulers.', 'Statements 2 and 3 fail: Ahmedabad is linked to Ahmad Shah and Mandu to Hoshang Shah.', 'Statement 1 is correct, so None cannot be the answer.'],
    'Regional cultural pairs', 'Ahmedabad: Ahmad Shah. Mandu: Hoshang Shah.', 'Adjacent Gujarat and Malwa are easily swapped.'),
  q(17, 'hard', 'multi-statement', 'Consider the following statements about land and service under Vijayanagara:', ['1. Amaram was the land given to village functionaries for their local services.', '2. Ayagars were village functionaries paid with land or a share of the produce.'], 'Which of the statements given above is/are correct?',
    BOTH, 1,
    'Only statement 2 is correct. Amaram went to military chiefs, the nayakas, for maintaining troops, whereas ayagars were village functionaries.',
    ['Statement 1 fails, since amaram went to nayakas, the military chiefs.', '', 'Statement 1 fails, as it gives the ayagar\'s position to the amaram.', 'Statement 2 is correct: ayagars were paid with land or a share of the produce.'],
    'Amaram and ayagar', 'Amaram: military chiefs. Ayagar: village functionaries.', 'Two closely related terms from one table are ideal for a fine distinction.'),
  q(18, 'hard', 'multi-statement', 'Consider the following statements about Mahmud Gawan:', ['1. He divided the Bahmani kingdom into eight provinces called tarafs.', '2. He built a madrasa at the capital, Bidar.', '3. He was executed in 1482 amid strife among the nobles.'], 'How many of the above statements are correct?',
    COUNT, 2,
    'All three are correct. Gawan created eight tarafs and built the madrasa at Bidar, and he was executed in 1482, after which the party strife grew worse.',
    ['All three are supported, including the eight tarafs and the date of his execution.', 'Statements 1, 2 and 3 are all correct, so two is too few.', '', 'Each statement is supported, so None is not possible.'],
    'Mahmud Gawan', 'Gawan: eight tarafs, Bidar madrasa, executed 1482.', 'His fall shows why the Bahmani kingdom broke into five states.', 'Notes: Bahmani and the Deccan Sultanates; Satish Chandra, History of Medieval India (Mahmud Gawan)'),
  q(19, 'hard', 'multi-statement', 'With reference to Odisha, consider the following statements:', ['1. The rulers of the Ganga dynasty built the temples at Konark and Puri.', '2. The Gajapati dynasty came to power before the Eastern Gangas.'], 'Which of the statements given above is/are correct?',
    BOTH, 0,
    'Only statement 1 is correct. The Gangas built the temples, and the Gajapati dynasty came to the fore after the raids of the fourteenth century destroyed the prestige of the Gangas.',
    ['', 'Statement 2 fails, because the Gajapatis followed the Gangas.', 'Statement 2 fails: the sequence is Eastern Ganga first, then Gajapati.', 'Statement 1 is correct, since the Gangas built Konark and the Puri temple.'],
    'Odisha dynasties', 'Eastern Gangas first, then Gajapatis.', 'The note names both dynasties together, which invites a sequence test.', 'Notes: Regional kingdoms; Satish Chandra, History of Medieval India (Orissa)'),
  q(20, 'hard', 'multi-statement', 'Consider the following statements:', ['1. The Charminar stands at Bijapur.', '2. The Gol Gumbaz is the tomb of Ibrahim Adil Shah II.', '3. Malik Ambar is associated with the Qutb Shahi state of Golconda.'], 'How many of the above statements are correct?',
    COUNT, 3,
    'None is correct. The Charminar is at Hyderabad, the Gol Gumbaz is the tomb of Muhammad Adil Shah, and Malik Ambar belongs with Ahmadnagar.',
    ['All fail: the Charminar is at Hyderabad, and the Gol Gumbaz and Malik Ambar are also misattributed.', 'No two hold: the tomb is Muhammad Adil Shah\'s, and Malik Ambar is Ahmadnagar\'s.', 'These are all wrong attributions, the reverse of this option.', ''],
    'Deccan monuments and names', 'Charminar: Hyderabad. Gol Gumbaz: Muhammad Adil Shah. Ambar: Ahmadnagar.', 'Each statement borrows a real name from a neighbouring state.'),
  q(21, 'hard', 'statement', 'With reference to the Portuguese in the Indian Ocean, the cartaz was', null, null,
    ['a permit that ships were forced to buy from the Portuguese', 'a tax paid by the Portuguese to the Zamorin of Calicut', 'a gold coin issued by the Portuguese at Goa', 'a fort granted to the Portuguese by Krishnadeva Raya'], 0,
    'The cartaz was a permit system that forced ships to buy permits, as the Portuguese sought control of sea trade.',
    ['', 'It was the Portuguese who imposed the cartaz on others, and it was not a tax paid to the Zamorin.', 'The cartaz is a sailing permit, not a coin.', 'A fort at Bhatkal was a separate grant; the cartaz was a permit for ships.'],
    'Cartaz', 'Cartaz: Portuguese permits to control sea trade.', 'It shows how sea power turned into commercial control.'),
]

export const mains: MainsQuestion[] = [
  {
    id: 'm-1116-1', day: DAY, marks: 10, words: 150, directive: 'Discuss',
    question: 'Discuss how the Nayaka system both strengthened and later weakened the Vijayanagara empire.',
    mustCover: ['Definition: military chiefs holding amaram', 'Troops and revenue for the state', 'Comparison with the iqta', 'Autonomy and difficulty of control', 'Breakaway states after Talikota', 'Lesson on decentralised power'],
    model: `The Nayaka system gave military chiefs territory, called amaram, in return for service. It was similar in some ways to the iqta.

Sources of strength

Nayakas maintained fixed numbers of soldiers, horses and elephants, and paid a sum to the central treasury. This let a large state defend itself and control distant regions.

Sources of weakness

Nayakas became a powerful section, and the centre sometimes found them hard to control. Krishnadeva Raya tried to oust them from the Tungabhadra doab and rule it directly, showing the concern. Hereditary nayakships also weakened the older village self-government.

After Talikota

The defeat of 1565 exposed these weaknesses. Madurai and Tanjore became independent, and Mysore also emerged as a breakaway state.

Conclusion

The system worked when the centre was strong, but it gave regional chiefs the means to leave. It shows that decentralisation needs checks that keep local power accountable.`,
  },
  {
    id: 'm-1116-2', day: DAY, marks: 10, words: 150, directive: 'Examine',
    question: 'Examine the role of water management in the economy and state capacity of the Vijayanagara empire.',
    mustCover: ['Setting on the Tungabhadra', 'Deva Raya I\'s dam and canals', 'Revenue effect', 'Krishnadeva Raya\'s tank', 'Link to urban supply', 'Relevance today'],
    model: `Vijayanagara, set on the Tungabhadra with Hampi as its capital, needed reliable water for both the city and its countryside. Water works were therefore a clear function of the state.

Major works

Deva Raya I built a dam across the Tungabhadra and took canals into the city, relieving its water shortage. He also dammed the Haridra for irrigation. Krishnadeva Raya dug an enormous tank near the capital.

Economic effect

The canals irrigated neighbouring fields and reportedly increased revenue by 350,000 pardaos. Land tax rates varied with irrigation, which linked water directly to state income.

State capacity

Such works required planning, labour and resources. Abdur Razzaq describes running streams and stone canals in the city, which shows the urban reach of the system.

Conclusion

Water works supported both prosperity and royal authority. They remain a useful example for today's discussions on irrigation, urban supply and public investment.`,
  },
  {
    id: 'm-1116-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse',
    question: 'The conflict between Vijayanagara and the Deccan sultanates is often described as a religious war. Critically analyse this view.',
    mustCover: ['Why the religious framing exists', 'Raichur Doab, trade and diamond mines', 'Muslim soldiers and shifting alliances', 'Political marriage and treaties', 'Talikota and the balance of power', 'A balanced conclusion'],
    model: `From the fourteenth century, Vijayanagara (1336) and the Bahmani kingdom (1347) fought repeatedly, and later the Deccan sultanates continued the contest. Chronicles often framed this in religious terms, but the evidence points elsewhere.

Why the view persists

The rulers differed in faith, warfare included massacre, and Vijayanagara rulers were considered protectors of Hinduism.

Economic and strategic causes

The main prize was the fertile Raichur Doab, along with the Krishna-Godavari region, trade and diamond mines. Control of ports such as Goa and Dabhol mattered because of overseas trade and the import of horses.

Crossing of religious lines

Deva Raya I reportedly kept Muslims in his army, and Deva Raya II enlisted 2,000 Muslim cavalrymen. Deva Raya I married his daughter to Firuz Shah Bahmani, and Warangal shifted between the two sides. Rama Raya played the sultanates against one another.

Talikota, 1565

The sultanates, whom Rama Raya had played off and humiliated, combined against his power rather than out of any fixed religious alliance.

Limits of the revisionist view

Religion did shape identity, patronage and the language of war. It cannot be removed altogether, and the suffering of people was real.

Conclusion

The conflict is best seen as a struggle for land, trade and power, carried out in a religiously diverse world. This understanding is a useful guard against reading the present into the past.`,
  },
]
