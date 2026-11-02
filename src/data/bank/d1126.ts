import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-26'
const S = 'Notes: India and its neighbourhood'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1126-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', "With which country does India share its longest land border?", null, null, ['Bangladesh', 'China', 'Pakistan', 'Nepal'], 0,
    "Bangladesh, at about 4,096.7 km, is India's longest land border, as commonly cited from Home Ministry data. China follows at 3,488 km.",
    ['', 'The China border is about 3,488 km, second to Bangladesh.', 'The Pakistan border is about 3,323 km, third on the list.', 'The Nepal border is about 1,751 km, well below Bangladesh.'],
    'Land border lengths', 'Longest border: Bangladesh. Shortest: Afghanistan.', 'Border lengths and border states are standard map-based recall.', 'Notes: Land borders table'),
  q(2, 'easy', 'factual', "The Indus Waters Treaty of 1960 was brokered by which body?", null, null, ['The World Bank', 'The United Nations Security Council', 'The International Court of Justice', 'The Commonwealth Secretariat'], 0,
    "The World Bank brokered the 1960 treaty between India and Pakistan. It split the eastern and western rivers between the two countries.",
    ['', 'The Security Council did not broker the treaty; the World Bank did.', 'The ICJ settles disputes between states, and it did not negotiate this treaty.', 'The Commonwealth Secretariat had no role; the World Bank brokered it.'],
    'Indus Waters Treaty', 'Indus treaty: 1960, brokered by the World Bank.', 'The treaty is central to India-Pakistan relations and is in the news because of the abeyance.', 'Notes: Pakistan'),
  q(3, 'easy', 'factual', "Under the Indus Waters Treaty, which one of the following is a western river?", null, null, ['Chenab', 'Ravi', 'Beas', 'Sutlej'], 0,
    "The western rivers are the Indus, Jhelum and Chenab, which go to Pakistan with limited Indian use. The eastern rivers are the Ravi, Beas and Sutlej.",
    ['', 'The Ravi is an eastern river, allocated to India.', 'The Beas is an eastern river, allocated to India.', 'The Sutlej is an eastern river, allocated to India.'],
    'Eastern and western rivers', 'West: Indus, Jhelum, Chenab. East: Ravi, Beas, Sutlej.', 'River allocation under the treaty is a basic and repeatable fact.', 'Notes: Pakistan'),
  q(4, 'easy', 'factual', "Which one of the following correctly pairs SAARC's founding place with the location of its secretariat?", null, null, ['Founded in Dhaka; secretariat in Kathmandu', 'Founded in Kathmandu; secretariat in Dhaka', 'Founded in Colombo; secretariat in Kathmandu', 'Founded in Dhaka; secretariat in Colombo'], 0,
    "SAARC was founded on 8 December 1985 in Dhaka, and its secretariat is in Kathmandu. Candidates often swap these because the BIMSTEC secretariat is in Dhaka.",
    ['', 'This reverses the two places: Dhaka is the founding place and Kathmandu the secretariat.', 'SAARC was founded in Dhaka, not Colombo.', 'The secretariat is in Kathmandu, not Colombo.'],
    'SAARC basics', 'SAARC: founded in Dhaka, secretariat in Kathmandu.', 'The note flags this as a common confusion with BIMSTEC.', 'Notes: Regional groupings'),
  q(5, 'easy', 'current-static', "MAHASAGAR, which widened the SAGAR vision to the Global South, was announced in March 2025 in which country?", null, null, ['Mauritius', 'Maldives', 'Sri Lanka', 'Seychelles'], 0,
    "MAHASAGAR (Mutual and Holistic Advancement for Security and Growth Across Regions) was announced in Mauritius in March 2025. It widened SAGAR, which dates from 2015.",
    ['', "The Prime Minister's Maldives visit came in July 2025 and was about the reset in ties.", "The April 2025 Colombo visit is linked to the first defence MoU, not to MAHASAGAR.", 'The note places the announcement in Mauritius, not Seychelles.'],
    'SAGAR and MAHASAGAR', 'SAGAR 2015; MAHASAGAR 2025, in Mauritius.', 'Maritime doctrine is a recurring theme in India\'s Indian Ocean policy.', 'Notes: Doctrine timeline'),
  q(6, 'easy', 'map', "Chabahar port, which India uses as a route to Afghanistan and Central Asia, is located in which country?", null, null, ['Iran', 'Pakistan', 'Oman', 'Afghanistan'], 0,
    "Chabahar is in Iran. It gives India a route to Afghanistan that avoids Pakistan, unlike Gwadar, which is in Pakistan.",
    ['', 'Gwadar is the port in Pakistan, and it is often confused with Chabahar.', 'Chabahar is on the Iranian coast, not in Oman.', 'Afghanistan is landlocked; Chabahar is its sea route through Iran.'],
    'Chabahar and Gwadar', 'Chabahar: Iran. Gwadar: Pakistan.', 'The note flags this as a common confusion, and it suits a map question.', 'Notes: Myanmar and Afghanistan; Common confusions'),
  q(7, 'easy', 'factual', "The India-Bangladesh Land Boundary Agreement of 2015 was implemented through which Constitutional Amendment?", null, null, ['100th Amendment', '99th Amendment', '101st Amendment', '103rd Amendment'], 0,
    "The 100th Constitutional Amendment gave effect to the Land Boundary Agreement, under which the two countries exchanged enclaves.",
    ['', 'The 99th Amendment dealt with the National Judicial Appointments Commission.', 'The 101st Amendment introduced the Goods and Services Tax.', 'The 103rd Amendment provided the reservation for economically weaker sections.'],
    'Land Boundary Agreement', 'Land Boundary Agreement 2015: 100th Amendment.', 'It links foreign policy with constitutional law, so it suits both GS II themes.', 'Notes: Bangladesh; Constitution of India, First Schedule amendment'),
  q(8, 'easy', 'factual', "Operation Cactus (1988), in which India foiled a coup, took place in which country?", null, null, ['Maldives', 'Sri Lanka', 'Bangladesh', 'Myanmar'], 0,
    "India foiled a coup attempt in the Maldives through Operation Cactus in 1988. It remains the standard example of India's role as a security provider there.",
    ['', 'India\'s Sri Lanka intervention was the IPKF under the 1987 Accord, not Operation Cactus.', 'India\'s major Bangladesh operation was in 1971, not Operation Cactus in 1988.', 'Myanmar saw a coup in 2021, and it has no link to Operation Cactus.'],
    'Operation Cactus', 'Operation Cactus, 1988: the Maldives.', 'A classic reference in questions on India\'s Indian Ocean role.', 'Notes: Maldives'),

  // Moderate
  q(9, 'moderate', 'multi-statement', "Consider the following statements about the Indus Waters Treaty, as of November 2026:", ['1. The eastern rivers, namely the Ravi, Beas and Sutlej, are allocated to India.', '2. India has formally abrogated the treaty.', '3. The treaty contains a clause allowing either side to suspend it.'], 'How many of the above statements are correct?', COUNT, 0,
    "Only statement 1 is correct. India holds the treaty in abeyance and has not ended it, and the treaty has no clause for one side to suspend it, which is why the step is legally contested.",
    ['', 'Statements 2 and 3 both fail: abeyance is not abrogation, and there is no suspension clause.', 'Statements 2 and 3 fail, so all three cannot be correct.', 'Statement 1 is correct: the eastern rivers do go to India.'],
    'Abeyance versus abrogation', 'India holds the treaty in abeyance; it has not ended it.', 'The note marks this as a trap, and Mains answers need the legal distinction.', 'Notes: Pakistan; Abeyance is not abrogation'),
  y(2025, 92, 41, 'moderate', 'multi-statement', "Consider the following statements in respect of BIMSTEC :", ['I. It is a regional organization consisting of seven member States till January 2025.', 'II. It came into existence with the signing of the Dhaka Declaration, 1999.', 'III. Bangladesh, India, Sri Lanka, Thailand and Nepal are founding member States of BIMSTEC.', "IV. In BIMSTEC, the subsector of 'tourism' is being led by India."], 'Which of the statements given above is/are correct?', ['I and II', 'II and III', 'I and IV', 'I only'], 3,
    "Only I is correct. BIMSTEC began with the Bangkok Declaration of 1997, Nepal joined later rather than at the founding, and after the reorganisation tourism falls under the People-to-People Contact sector led by Nepal.",
    ['Statement II fails: the founding document is the Bangkok Declaration, 1997.', 'II and III both fail: wrong declaration, and Nepal was not a founder.', 'Statement IV fails: tourism sits under the sector led by Nepal, not India.', ''],
    'BIMSTEC founding facts', 'BIMSTEC: Bangkok 1997; secretariat in Dhaka.', 'Asked in Prelims 2025 (GS Paper I, Q92).', 'Notes: Regional groupings; Nepal Ministry of Foreign Affairs, Nepal and BIMSTEC'),
  y(2026, 66, 35, 'moderate', 'multi-statement', "Which of the following connectivity projects is/are a part of cooperation between India and the ASEAN member countries ?", ['1. Kaladan Multi-Modal Transit Transport Project', '2. IMT Trilateral Highway', '3. Agartala-Akhaura Rail Line'], 'Select the answer using the code given below :', ['1 and 2', '2 and 3', '1 and 3', '2 only'], 0,
    "Kaladan runs through Myanmar, and the India-Myanmar-Thailand Highway links two ASEAN members, so both qualify. The Agartala-Akhaura line links India with Bangladesh, which is not in ASEAN.",
    ['', 'Project 3 fails because Agartala-Akhaura connects India with Bangladesh, a non-ASEAN country.', 'Project 3 fails for the same reason, and this option also leaves out the IMT Highway.', 'This leaves out Kaladan, which is built with Myanmar, an ASEAN member.'],
    'Connectivity to ASEAN', 'Myanmar is India\'s land bridge to ASEAN.', 'Asked in Prelims 2026 (GS Paper I, Q66).', 'Notes: Myanmar and Afghanistan'),
  q(10, 'moderate', 'assertion-reason', "Statement I: India's arguments on river waters need to stay consistent across its different neighbours.\nStatement II: India is the upper riparian in relation to Pakistan and Bangladesh, but the lower riparian in relation to China.", null, 'Which one of the following is correct?', SI, 0,
    "Both are correct and II explains I. A claim that India makes as an upper riparian against Pakistan can be turned against it on the Brahmaputra, where China is upstream.",
    ['', 'II does explain I: India\'s mixed riparian position is the very reason consistency matters.', 'II is also correct: China is upstream on the Yarlung Tsangpo (the Brahmaputra upstream).', 'I is also correct, as the note\'s Mains angle on water as diplomacy states.'],
    'Water as diplomacy', 'Upper riparian to Pakistan and Bangladesh, lower to China.', 'A direct Mains angle in the note, and a natural Prelims logic question.', 'Notes: Exam guide; China'),
  q(11, 'moderate', 'assertion-reason', "Statement I: The revised India-Bhutan treaty of 2007 removed the earlier provision on guidance in foreign policy.\nStatement II: Hydropower is at the centre of the India-Bhutan relationship.", null, 'Which one of the following is correct?', SI, 1,
    "Both are correct, but II does not explain I. The 2007 revision concerned sovereignty in foreign policy, while hydropower is a separate economic pillar of the relationship.",
    ['II does not explain I: hydropower cooperation was not the reason for changing the foreign policy clause.', '', 'II is also correct: Chukha, Tala and Mangdechhu are the examples.', 'I is also correct: the 1949 treaty was revised in 2007 to remove guidance on foreign policy.'],
    'India-Bhutan treaty', '1949 treaty revised in 2007; hydropower is the economic core.', 'Bhutan is a recurring test of how India treats a smaller partner.', 'Notes: Bhutan'),
  q(12, 'moderate', 'assertion-reason', "Statement I: The Kaladan Multi-Modal Project uses Sittwe port.\nStatement II: The Kaladan project runs through Bangladesh to give the Northeast access to the sea.", null, 'Which one of the following is correct?', SI, 2,
    "Statement I is correct, but II is not. Kaladan runs through Myanmar, and not Bangladesh, as the note's list of common confusions points out.",
    ['II is incorrect, because the route runs through Myanmar, so it cannot explain I.', 'II is not correct at all: the project does not run through Bangladesh.', '', 'I is correct: Sittwe port in Myanmar is part of the project.'],
    'Kaladan project', 'Kaladan runs through Myanmar via Sittwe, not Bangladesh.', 'The note flags this as a common confusion in the connectivity topic.', 'Notes: Myanmar and Afghanistan; Common confusions'),
  q(13, 'moderate', 'assertion-reason', "Statement I: The Free Movement Regime is an arrangement along the India-Bangladesh border.\nStatement II: The plan announced in 2024 to end the Free Movement Regime is opposed in Mizoram and Nagaland.", null, 'Which one of the following is correct?', SI, 3,
    "Statement I is wrong, as the Free Movement Regime applies along the India-Myanmar border. Statement II is right, and it shows how border states become stakeholders.",
    ['I is incorrect, so this pairing cannot hold: the regime concerns the Myanmar border.', 'I is incorrect: the regime concerns the Myanmar border, not the Bangladesh border.', 'This reverses the truth: I is the incorrect one, and II is correct.', ''],
    'Free Movement Regime', 'Free Movement Regime: Myanmar border, opposed in Mizoram and Nagaland.', 'It connects border management, the Northeast and federalism.', 'Notes: Myanmar and Afghanistan'),
  q(14, 'moderate', 'multi-statement', "With reference to India and Sri Lanka, consider the following statements:", ['1. The 1987 Accord is linked to the 13th Amendment in Sri Lanka and to the Indian Peace Keeping Force.', '2. Katchatheevu was ceded under agreements of 1974 and 1976.'], 'Which of the statements given above is/are correct?', BOTH, 2,
    "Both are correct. The 1987 Accord brought the 13th Amendment and the IPKF, and Katchatheevu, ceded under the 1974 and 1976 agreements, remains a live Tamil Nadu issue.",
    ['Statement 2 is also correct: the 1974 and 1976 agreements ceded Katchatheevu.', 'Statement 1 is also correct: the Accord led to the 13th Amendment and the IPKF.', '', 'Both statements are correct, so this option cannot hold.'],
    'India-Sri Lanka history', '1987 Accord: 13th Amendment, IPKF. Katchatheevu: 1974 and 1976.', 'Fishermen and Tamil Nadu politics keep these agreements in the news.', 'Notes: Sri Lanka'),
  q(15, 'moderate', 'multi-statement', "With reference to India and Nepal, as of November 2026, consider the following statements:", ['1. The 1950 Treaty of Peace and Friendship provides for an open border, and Nepal wants it revised.', '2. The Pancheshwar project under the Mahakali Treaty has been completed.'], 'Which of the statements given above is/are correct?', BOTH, 0,
    "Only statement 1 is correct. The Mahakali Treaty dates from 1996, but the Pancheshwar project under it is still pending.",
    ['', 'Statement 2 fails because Pancheshwar is still pending, and statement 1 is correct.', 'Statement 2 fails, so both cannot be correct.', 'Statement 1 is correct: the open border comes from the 1950 Treaty.'],
    'India-Nepal treaties', '1950 Treaty: open border. Mahakali 1996: Pancheshwar pending.', 'River treaties with Nepal are a steady source of questions.', 'Notes: Nepal'),
  q(16, 'moderate', 'chronology', "Consider the following elements of India's neighbourhood policy:", ['1. SAGAR', '2. Gujral Doctrine', '3. MAHASAGAR', '4. Neighbourhood First'], 'Which one of the following gives the correct chronological order?', ['2-4-1-3', '4-2-1-3', '2-1-4-3', '4-1-2-3'], 0,
    "The order is Gujral Doctrine (1996-97), Neighbourhood First (2014), SAGAR (2015) and MAHASAGAR (2025).",
    ['', 'Neighbourhood First (2014) came well after the Gujral Doctrine (1996-97).', 'SAGAR (2015) came one year after Neighbourhood First (2014), so the order of those two is wrong.', 'Gujral (1996-97) is the earliest, so it cannot follow Neighbourhood First or SAGAR.'],
    'Doctrine timeline', 'Gujral, Neighbourhood First, SAGAR, MAHASAGAR.', 'It tests the evolution of policy, not just names.', 'Notes: How the doctrine evolved'),
  q(17, 'moderate', 'application', "A student writes that India's upgrade of its technical mission in Kabul to an embassy in October 2025 amounts to formal recognition of the Taliban government. Which one of the following best corrects this claim, as of November 2026?", null, null, ['India has upgraded its mission to an embassy, but has not formally recognised the Taliban government.', 'India has formally recognised the Taliban government, and an embassy follows automatically.', 'India has closed its mission in Kabul, and it deals with the Taliban only through Iran.', 'India has recognised the National Unity Government instead of the Taliban.'], 0,
    "India's Kabul mission became an embassy in October 2025, but India has given no formal recognition. The note treats engagement and recognition as separate steps.",
    ['', 'The note says there is no formal recognition, so the two steps are not linked.', 'The mission was upgraded in Kabul, not closed.', 'The National Unity Government is Myanmar\'s exiled body, not an Afghan one.'],
    'Engagement without recognition', 'Embassy in Kabul since October 2025, without formal recognition.', 'It tests the interest-based engagement debate from the Mains angles.', 'Notes: Myanmar and Afghanistan'),
  q(18, 'moderate', 'multi-statement', "Consider the following statements about India-Bangladesh relations:", ['1. The Ganga Water Treaty was signed for a period of 50 years.', '2. The Teesta water-sharing deal was signed along with the Land Boundary Agreement of 2015.', '3. Ties warmed sharply under the interim government led by Muhammad Yunus after August 2024.'], 'How many of the above statements are correct?', COUNT, 3,
    "None is correct. The Ganga treaty was for 30 years, the Teesta deal is still unsigned, and ties cooled sharply under the interim government.",
    ['No statement is correct: 1 has the wrong term, 2 ignores the unsigned Teesta deal, 3 reverses the trend.', 'No statement is correct: the term is 30 years and the Teesta deal remains unsigned.', 'All three fail, for the term, the Teesta deal and the direction of ties.', ''],
    'India-Bangladesh issues', 'Ganga 30 years; Teesta unsigned; ties cooled after August 2024.', 'The December 2026 expiry keeps this relationship in the news.', 'Notes: Bangladesh'),
  q(19, 'moderate', 'current-static', "Which one of the following was part of the reset in India-Maldives ties during the Prime Minister's visit of July 2025?", null, null, ['A rupee line of credit of Rs 4,850 crore, 40% lower annual debt repayments and FTA talks', 'The return of Indian troops to the Maldives under a new military base agreement', 'Maldivian entry into BIMSTEC as its eighth member', 'A transfer of the Greater Male Connectivity Project to Chinese funding'], 0,
    "The July 2025 package had a rupee line of credit worth Rs 4,850 crore, a 40% cut in annual debt repayments and the start of FTA talks.",
    ['', 'Indian troops were replaced in 2024, and the note records no return of troops.', 'BIMSTEC\'s seven members are listed in the note, and the Maldives is not one of them.', 'The Greater Male Connectivity Project is India-funded, as the note states.'],
    'India-Maldives reset', 'From India Out in 2023 to a reset in July 2025.', 'It shows how a relationship can recover after an anti-India campaign.', 'Notes: Maldives'),
  q(20, 'moderate', 'match', "Match List I with List II:", ['List I: A. Mahakali Treaty; B. Gelephu Mindfulness City; C. Free Movement Regime; D. Hambantota', 'List II: 1. Sri Lanka; 2. Nepal; 3. Myanmar; 4. Bhutan'], 'Select the correct code:', ['A-2, B-4, C-3, D-1', 'A-4, B-2, C-3, D-1', 'A-2, B-4, C-1, D-3', 'A-3, B-4, C-2, D-1'], 0,
    "The Mahakali Treaty is with Nepal, Gelephu is in Bhutan near Assam, the Free Movement Regime covers the Myanmar border, and Hambantota is in Sri Lanka.",
    ['', 'This swaps A and B: Mahakali is with Nepal and Gelephu is in Bhutan.', 'This swaps C and D: the regime is with Myanmar and Hambantota is in Sri Lanka.', 'A and C are wrong: Mahakali is with Nepal, and the regime is with Myanmar.'],
    'Neighbour-wise issues', 'Know one treaty and one project per neighbour.', 'Prelims now uses project-to-country matching, as in 2026.', 'Notes: Nepal, Bhutan, Sri Lanka and the Maldives'),

  // Hard
  y(2026, 61, 33, 'hard', 'multi-statement', "Consider the following statements about river bridges connecting India with neighbouring countries :", ["1. 'Maitri Setu', built over Feni river, connects Ramgarh in India with Sabroom in Bangladesh.", '2. Jhulaghat suspension bridge connects India with Myanmar.', '3. Mechi bridge and its approaches connect Panitanki Bypass in India with Kakarvitta in Nepal.'], 'Which of the statements given above is/are correct ?', ['1 and 2', '2 and 3', '1 only', '3 only'], 3,
    "Only 3 is correct. Maitri Setu links Sabroom in India with Ramgarh in Bangladesh, so statement 1 reverses the places, and Jhulaghat lies on the India-Nepal border, not the Myanmar border.",
    ['Both 1 and 2 fail: places reversed in 1, and Jhulaghat is on the Nepal border.', 'Statement 2 fails because Jhulaghat connects India with Nepal, not Myanmar.', 'Statement 1 fails because Sabroom is in India and Ramgarh is in Bangladesh.', ''],
    'Cross-border bridges', 'Maitri Setu: Sabroom (India) to Ramgarh (Bangladesh).', 'Asked in Prelims 2026 (GS Paper I, Q61).', 'Notes: Bangladesh and Nepal; UPSC Prelims 2026'),
  y(2026, 67, 35, 'hard', 'match', 'Match List I with List II and select the answer using the code given below the Lists :', ['List I (Project Supported by India): A. Mangdechhu Hydroelectric Project; B. Restoration of Stor Palace; C. District Hospital at Dickoya; D. Institute of Security and Law Enforcement Studies', 'List II (Country): 1. Maldives; 2. Afghanistan; 3. Bhutan; 4. Sri Lanka'], 'Code :', ['A-1, B-4, C-2, D-3', 'A-3, B-2, C-4, D-1', 'A-3, B-4, C-2, D-1', 'A-1, B-2, C-4, D-3'], 1,
    "Mangdechhu is in Bhutan, Stor Palace in Kabul, the Dickoya hospital in Sri Lanka, and the Institute of Security and Law Enforcement Studies in the Maldives. That gives A-3, B-2, C-4, D-1.",
    ['Mangdechhu is a Bhutanese hydropower project, not in the Maldives.', '', 'This swaps B and C: Stor Palace is in Afghanistan and Dickoya is in Sri Lanka.', 'This swaps A and D: Mangdechhu is in Bhutan and the Institute is in the Maldives.'],
    'Indian projects abroad', 'Project-to-country pairs are a Prelims favourite.', 'Asked in Prelims 2026 (GS Paper I, Q67).', 'Notes: Nepal, Bhutan, Sri Lanka and the Maldives; UPSC Prelims 2026'),
  y(2026, 72, 39, 'hard', 'match', 'Match List I with List II and select the answer using the code given below the Lists :', ['List I (BIMSTEC Centre/Establishment): A. BIMSTEC Cultural Industries Observatory; B. BIMSTEC Energy Centre; C. BIMSTEC Centre for Weather and Climate; D. BIMSTEC Technology Transfer Facility', 'List II (Location): 1. NOIDA; 2. Bengaluru; 3. Colombo; 4. Thimphu'], 'Code :', ['A-3, B-2, C-1, D-4', 'A-3, B-1, C-2, D-4', 'A-4, B-2, C-1, D-3', 'A-4, B-1, C-2, D-3'], 2,
    "The Observatory is in Thimphu, the Energy Centre in Bengaluru, the Weather and Climate Centre in Noida, and the Technology Transfer Facility in Colombo: A-4, B-2, C-1, D-3.",
    ['A and D are swapped: the Observatory is in Thimphu and the Facility in Colombo.', 'All four are off: the Observatory is in Thimphu and the Energy Centre in Bengaluru.', '', 'B and C are swapped: the Energy Centre is in Bengaluru and the Weather Centre in Noida.'],
    'BIMSTEC centres', 'BIMSTEC centres are spread across member states.', 'Asked in Prelims 2026 (GS Paper I, Q72), as the note records.', 'Notes: Prelims 2025 and 2026 on BIMSTEC; UPSC Prelims 2026'),
  q(21, 'hard', 'multi-statement', "Consider the following statements about the Indus Waters Treaty dispute, as of November 2026:", ['1. A Court of Arbitration has found that the treaty remains in force.', '2. India accepts the Court of Arbitration as validly constituted.', '3. Pakistan raised the treaty at the SCO summit in September 2026.'], 'How many of the above statements are correct?', COUNT, 1,
    "Statements 1 and 3 are correct. India calls the court illegally constituted and treats its awards as null and void, so statement 2 fails.",
    ['Two statements are correct, 1 and 3, so this undercounts.', '', 'Statement 2 fails because India rejects the court as illegally constituted.', 'Statements 1 and 3 are both supported by the note.'],
    'Arbitration and India', 'India rejects the Court of Arbitration and its awards.', 'A balanced Mains answer needs both sides\' legal positions.', 'Notes: Pakistan'),
  q(22, 'hard', 'map', "Consider the following States:", ['1. Uttarakhand', '2. Sikkim', '3. West Bengal', '4. Assam'], 'How many of the above share a land border with both Nepal and Bhutan?', ['Only one', 'Only two', 'Only three', 'All four'], 1,
    "Sikkim and West Bengal border both Nepal and Bhutan. Uttarakhand borders Nepal but not Bhutan, and Assam borders Bhutan but not Nepal.",
    ['Two States qualify: Sikkim and West Bengal both appear in the Nepal and Bhutan rows.', '', 'Only two qualify, because Uttarakhand and Assam each border just one of the two countries.', 'Uttarakhand does not border Bhutan, and Assam does not border Nepal.'],
    'Border states', 'Sikkim and West Bengal touch both Nepal and Bhutan.', 'Border-state combinations are classic elimination-resistant map questions.', 'Notes: Land borders table'),
  q(23, 'hard', 'multi-statement', "Consider the following pairs:", ['1. "India Out" campaign in 2023: Maldives', '2. First defence MoU with India in April 2025: Bangladesh', '3. Gen Z protests that ousted the government in September 2025: Bangladesh'], 'How many of the above pairs are correctly matched?', COUNT, 0,
    "Only pair 1 is correct. The April 2025 defence MoU was with Sri Lanka, and the September 2025 Gen Z protests that ousted the Oli government were in Nepal.",
    ['', 'Pairs 2 and 3 both fail: the defence MoU is Sri Lanka and the protests are Nepal.', 'Pairs 2 and 3 fail, so all three cannot be right.', 'Pair 1 is correct: Muizzu ran on an "India Out" campaign in 2023.'],
    'Recent neighbourhood events', 'Separate Nepal 2025 from Bangladesh 2024.', 'The events of 2024-26 are easy to confuse across countries, which suits Prelims.', 'Notes: Nepal, Bhutan, Sri Lanka and the Maldives'),
  q(24, 'hard', 'statement', "Which one of the following correctly describes the Ganga Water Treaty between India and Bangladesh?", null, null, ['Signed on 12 December 1996 for 30 years, covering Farakka flows, and expiring on 12 December 2026', 'Signed on 12 December 1996 for 25 years, covering Farakka flows, and expiring in 2021', 'Signed on 12 December 1996 for 30 years, covering the Teesta and Farakka flows together', 'Signed in 2015 along with the Land Boundary Agreement, covering Farakka flows for 30 years'], 0,
    "The treaty was signed on 12 December 1996 for 30 years, it covers Farakka flows, and it expires on 12 December 2026. The Teesta remains a separate, unsigned issue.",
    ['', 'The term is 30 years, not 25, so the treaty did not expire in 2021.', 'The Teesta is not covered: the Teesta deal remains unsigned.', 'The treaty dates from 1996, not 2015; the Land Boundary Agreement is a separate instrument.'],
    'Ganga Water Treaty', 'Ganga: 1996, 30 years, Farakka; ends 12 December 2026.', 'The expiry date makes this an obvious test point for the coming exam.', 'Notes: Bangladesh; Quick recall'),
  q(25, 'hard', 'multi-statement', "With reference to the India-China border, consider the following statements:", ['1. India objects to the cession of the Shaksgam Valley by Pakistan to China in 1963.', '2. China rejects the McMahon Line (1914) and claims Arunachal Pradesh as "South Tibet".', '3. The Doklam standoff of 2017 took place near the trijunction of India, Bhutan and China.'], 'How many of the above statements are correct?', COUNT, 2,
    "All three are correct. The Shaksgam Valley is an objection in the western sector, the McMahon Line dispute concerns the eastern sector, and Doklam involved Bhutan as well as India and China.",
    ['All three statements are supported, so this undercounts.', 'Statements 1, 2 and 3 are all correct, so this undercounts.', '', 'All three statements are in the note and none is false.'],
    'India-China boundary', 'West: Aksai Chin, Shaksgam. East: McMahon Line.', 'The boundary remains unresolved, so sector-wise facts stay relevant.', 'Notes: China'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-1126-1', day: DAY, marks: 10, words: 150, directive: 'Examine', question: 'Examine how India\'s position as both an upper and a lower riparian state shapes its water diplomacy with its neighbours.', mustCover: ['Upper riparian to Pakistan and Bangladesh, lower to China', 'Indus Waters Treaty and the abeyance', 'Ganga treaty expiry and the Teesta issue', 'Brahmaputra and the planned Chinese dam', 'Need for consistent legal arguments', 'Role of states such as West Bengal'], model: `Introduction
Water links India to its neighbours in opposite ways. India is upstream of Pakistan and Bangladesh, but downstream of China, so an argument used in one place can return in another.

As upper riparian
With Pakistan, India has held the 1960 Indus Waters Treaty in abeyance since April 2025, tying it to cross-border terrorism. Pakistan and a Court of Arbitration say the treaty remains in force, and India rejects that court.
With Bangladesh, the 1996 Ganga treaty expires on 12 December 2026, and the Teesta deal remains unsigned because of West Bengal's objections.

As lower riparian
China plans a mega-dam on the Yarlung Tsangpo. Here India needs the very principles of notice and fair use that its neighbours ask of it.

Way forward
India should separate treaty rights from security signalling, renew the Ganga arrangement on time, involve border states early, and build one consistent doctrine on shared rivers.` },
  { id: 'm-1126-2', day: DAY, marks: 10, words: 150, directive: 'Discuss', question: 'Why has BIMSTEC not replaced SAARC as the main platform for regional cooperation in South Asia? Discuss.', mustCover: ['SAARC stalled since 2016, last summit 2014', 'BIMSTEC as the route around Pakistan', 'BIMSTEC strengths: link to South-East Asia, Charter in force 2024', 'Limits: Myanmar, Bangladesh politics, infrequent summits', 'Not the same membership or purpose', 'Way forward'], model: `Introduction
SAARC (1985) has held no summit since Kathmandu in 2014, after the 2016 Islamabad summit collapsed following Uri. BIMSTEC (1997) is India's preferred alternative, because it excludes Pakistan, but it has not fully taken SAARC's place.

Why BIMSTEC appeals
It links South and South-East Asia and fits Act East. Its Charter came into force in 2024, and its sixth summit was held in Bangkok in April 2025.

Why it has not replaced SAARC
1. Different membership: Pakistan, Afghanistan and the Maldives are outside it, so it cannot address all of South Asia.
2. Weak delivery: projects such as Kaladan and the Trilateral Highway have been slow.
3. Politics: the coup in Myanmar and strained India-Bangladesh ties limit trust.
4. Thin summitry: as of July 2026, the next summit was only a possibility for 2027.

Way forward
India should fund connectivity on time, deepen trade rules and treat BIMSTEC as a complement to bilateral ties, not a substitute for them.` },
  { id: 'm-1126-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse', question: 'Critically analyse whether India\'s Neighbourhood First policy has delivered, in light of the political changes in its neighbourhood since 2024.', mustCover: ['Meaning and origin: Gujral to 2014 policy', 'Gains: crisis aid, power trade, connectivity', 'Limits: slow projects, interference perceptions, China', 'Political change in Bangladesh, Nepal, Myanmar', 'Examples: Sri Lanka 2022, Maldives reset', 'Balanced verdict and way forward'], model: `Introduction
A stable neighbourhood is a precondition for India's larger ambitions. Neighbourhood First, launched in 2014, builds on the Gujral Doctrine's idea of giving smaller neighbours more without strict reciprocity. Sharp political changes since 2024 have tested it.

Where it has delivered
Crisis response: about $4 billion in support to Sri Lanka in 2022, and aid after Cyclone Ditwah in 2025.
Energy and connectivity: Bhutan's Punatsangchhu-II (1,020 MW) was inaugurated in 2025, and Kaladan and the Greater Male project extend India's reach.
Recovery of ties: the Maldives moved from an "India Out" campaign in 2023 to a reset with a Rs 4,850 crore rupee credit line in July 2025.

Where it has fallen short
Political exposure: close ties with Sheikh Hasina left India exposed after August 2024, and ties cooled sharply under the interim government.
Unresolved issues: Teesta remains unsigned, Nepal protests over Lipulekh, and Tamil Nadu's concerns over Katchatheevu and fishermen persist.
Slow delivery: Pancheshwar is pending, and projects move slower than promised.
Competition: China offers money and infrastructure, so smaller states have alternatives.
Size asymmetry: fear of domination can turn domestic politics against India.

Assessment
The policy has worked as crisis insurance and as a source of connectivity, but it has not produced lasting political goodwill. Engaging whoever holds power, as in Myanmar and Afghanistan, protects interests but carries a cost in values.

Way forward
India should deal with parties across the spectrum, finish projects on time, involve border states, and make its water and trade commitments predictable.` },
]
