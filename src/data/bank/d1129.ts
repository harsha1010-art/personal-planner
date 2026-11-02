import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-29'
const S = 'Notes: Transparency, accountability and e-governance'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1129-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', "Under the RTI Act, 2005, information concerning the life or liberty of a person must be provided within which period?", null, null, ['48 hours', '24 hours', '7 days', '30 days'], 0,
    "Where life or liberty is at stake, the reply is due in 48 hours. The ordinary time limit is 30 days.",
    ['', 'The Act gives 48 hours, not 24 hours, in this case.', 'Seven days is not a time limit in the sections the note lists; the limit is 48 hours.', 'Thirty days is the ordinary limit, not the one for life or liberty.'],
    'RTI time limits', 'RTI: 30 days, or 48 hours for life or liberty.', 'Time limits in the Act are simple to test and easy to mix up.', 'Notes: Right to Information Act; RTI Act 2005, Section 7'),
  q(2, 'easy', 'factual', "What is the maximum penalty that can be imposed on a Public Information Officer under Section 20 of the RTI Act?", null, null, ['Rs 25,000', 'Rs 10,000', 'Rs 50,000', 'Rs 1,00,000'], 0,
    "The penalty is Rs 250 a day, up to a maximum of Rs 25,000, and it falls on the PIO and not on the department.",
    ['', 'The ceiling is Rs 25,000, not Rs 10,000.', 'The ceiling is Rs 25,000, which is half of this figure.', 'The ceiling is Rs 25,000, far below Rs 1 lakh.'],
    'RTI penalty', 'Rs 250 a day, up to Rs 25,000, on the PIO.', 'A direct number from the Act, and the note marks it for quick recall.', 'Notes: Right to Information Act; RTI Act 2005, Section 20'),
  q(3, 'easy', 'factual', "Which State was the first to enact a Right to Services law, in 2010?", null, null, ['Madhya Pradesh', 'Rajasthan', 'Karnataka', 'Kerala'], 0,
    "Madhya Pradesh was the first, in 2010, and many states followed. These laws set a legal time limit, an appeal and a penalty on the officer.",
    ['', 'Rajasthan is linked to the MKSS and RTI movement, not the first services law.', 'Karnataka is linked to Bhoomi land records, not the first services law.', 'Kerala is linked to FRIENDS, not the first services law.'],
    'Right to Services', 'Right to Services: Madhya Pradesh, 2010.', 'The note gives this as a key contrast with charters.', 'Notes: Citizen charters and public service guarantees'),
  q(4, 'easy', 'factual', "The practice of jan sunwais (public hearings) that gave rise to social audit in India is associated with which organisation?", null, null, ['Mazdoor Kisan Shakti Sangathan', 'Self Employed Women\'s Association', 'Pratham', 'National Informatics Centre'], 0,
    "The Mazdoor Kisan Shakti Sangathan held jan sunwais in Rajasthan in the 1990s. It was also central to the RTI movement.",
    ['', 'SEWA organises informal women workers, and it is not the source of jan sunwais.', 'Pratham is known for its ASER work on learning, not public hearings.', 'The NIC is a government IT body, not a grassroots movement.'],
    'Roots of social audit', 'MKSS: jan sunwais and the RTI movement.', 'It links a movement to two major transparency tools.', 'Notes: Social audit'),
  q(5, 'easy', 'factual', "The idea of the Citizens' Charter was first launched in which country, in 1991?", null, null, ['United Kingdom', 'United States', 'Canada', 'Australia'], 0,
    "The Citizens' Charter began in the United Kingdom in 1991 under John Major. India adopted it in 1997, under DARPG.",
    ['', 'It was launched in the UK under John Major, not the United States.', 'It was launched in the UK, not Canada.', 'It was launched in the UK, not Australia.'],
    "Citizens' Charter origin", 'Charters: UK 1991, India 1997.', 'Origin and year are standard recall on this syllabus item.', "Notes: Citizen charters and public service guarantees"),
  q(6, 'easy', 'factual', "The CPGRAMS time norm for disposing of grievances was cut in August 2024 from 30 days to how many days?", null, null, ['21 days', '15 days', '25 days', '10 days'], 0,
    "The norm was cut from 30 to 21 days in August 2024. DARPG's August 2026 report put the average central disposal time at 13 days.",
    ['', 'The norm is 21 days, not 15.', 'The norm is 21 days, not 25.', 'The norm is 21 days, and 13 days is the reported average, not the norm.'],
    'CPGRAMS', 'CPGRAMS norm: 21 days since August 2024.', 'CPGRAMS is the main grievance portal named in the syllabus area.', 'Notes: E-governance'),
  q(7, 'easy', 'factual', "The Central Vigilance Commission became a statutory body through an Act of which year?", null, null, ['2003', '2005', '2013', '2014'], 0,
    "The CVC has been statutory since the CVC Act, 2003. It oversees vigilance and superintends the CBI on corruption cases.",
    ['', '2005 is the year of the RTI Act and the 2nd ARC, not the CVC Act.', '2013 is the year of the Lokpal and Lokayuktas Act.', '2014 is the year of the Whistle Blowers Protection Act.'],
    'CVC', 'CVC: statutory since 2003.', 'Statutory status and year are often tested among accountability bodies.', 'Notes: Anti-corruption bodies'),
  y(2016, 84, 31, 'easy', 'multi-statement', "Regarding 'DigiLocker', sometimes seen in the news, which of the following statements is/are correct?", ['1. It is a digital locker system offered by the Government under Digital India Programme.', '2. It allows you to access your e-documents irrespective of your physical location.'], 'Select the correct answer using the code given below.', ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 2,
    "Both are correct. DigiLocker is a government digital locker under Digital India, and it gives access to e-documents from anywhere.",
    ['Statement 2 is also correct: access does not depend on physical location.', 'Statement 1 is also correct: it is part of the Digital India programme.', '', 'Both are correct, so this option cannot hold.'],
    'DigiLocker', 'DigiLocker: a Digital India e-document locker.', 'Asked in Prelims 2016 (GS Paper I, Q84).', 'Notes: E-governance'),

  // Moderate
  q(8, 'moderate', 'multi-statement', "Consider the following pairs of RTI Act sections and subjects:", ['1. Section 4: Proactive disclosure', '2. Section 8: Exemptions', '3. Section 24: Penalty on the Public Information Officer'], 'How many of the above pairs are correctly matched?', COUNT, 1,
    "Pairs 1 and 2 are correct. Section 24 exempts listed intelligence and security bodies, and the penalty is in Section 20.",
    ['Two pairs are correct, 1 and 2, so this undercounts.', '', 'Pair 3 fails because the penalty is in Section 20, not Section 24.', 'Pairs 1 and 2 are both correct.'],
    'RTI sections', 'Section 4 disclosure; 8 exemptions; 20 penalty; 24 exempt bodies.', 'The note says these sections can be tested directly.', 'Notes: Sections that UPSC can test'),
  q(9, 'moderate', 'multi-statement', "With reference to the Central Information Commission, consider the following statements:", ['1. It is a constitutional body.', '2. Appointment is by the President on the recommendation of a committee of the Prime Minister, the Leader of Opposition in the Lok Sabha and a Cabinet Minister.'], 'Which of the statements given above is/are correct?', BOTH, 1,
    "Only statement 2 is correct. The Commission is statutory, set up under the RTI Act, and not constitutional.",
    ['Statement 1 fails because the Commission is statutory, and statement 2 is correct.', '', 'Statement 1 fails, so both cannot be correct.', 'Statement 2 is correct: it describes the appointment process.'],
    'Information Commission', 'CIC: statutory, not constitutional.', 'The note lists this as a common RTI error.', 'Notes: Common RTI errors'),
  q(10, 'moderate', 'assertion-reason', "Statement I: A citizen cannot go to court to enforce a Citizens' Charter as such.\nStatement II: A Citizens' Charter has no statutory force.", null, 'Which one of the following is correct?', SI, 0,
    "Both are correct and II explains I. A charter is a public statement of standards, so it creates no enforceable legal right, unlike a Right to Services Act.",
    ['', 'II does explain I: the lack of statutory force is why a charter cannot be enforced.', 'II is also correct, and the note states it in those words.', 'I is also correct: the note says a claim of enforceability in court is wrong.'],
    'Charter and law', 'Charter: no statutory force. Right to Services Act: legal force.', 'The note marks this as a trap, and it is a clean elimination point.', 'Notes: Charter and law'),
  q(11, 'moderate', 'assertion-reason', "Statement I: The RTI Act took full effect on 12 October 2005.\nStatement II: The Supreme Court read a right to know into Article 19(1)(a) in Raj Narain (1975).", null, 'Which one of the following is correct?', SI, 1,
    "Both are correct, but II does not explain I. The 1975 ruling is the constitutional background, and it does not explain the date on which the Act took effect.",
    ['II does not explain I: a 1975 ruling cannot account for the 2005 commencement date.', '', 'II is also correct: the note cites Raj Narain and S.P. Gupta.', 'I is also correct: this is the date in the note.'],
    'RTI background', 'Right to know began in the courts; the Act came in 2005.', 'It tests the difference between a judicial basis and a statutory date.', 'Notes: Right to Information Act'),
  q(12, 'moderate', 'assertion-reason', "Statement I: Section 24 of the RTI Act exempts listed intelligence and security bodies.\nStatement II: This exemption extends even to allegations of corruption and human rights violations.", null, 'Which one of the following is correct?', SI, 2,
    "I is correct, but II is not. Section 24 has an express exception: information on corruption and human rights allegations is not exempt.",
    ['II is incorrect, so it cannot explain I: those allegations are carved out of the exemption.', 'II is incorrect, because corruption and human rights are the two exceptions.', '', 'I is correct: Section 24 exempts these listed bodies.'],
    'Section 24', 'Section 24 exempts bodies, except for corruption and human rights.', 'The exception is precisely the kind of detail UPSC tests.', 'Notes: Sections that UPSC can test'),
  q(13, 'moderate', 'assertion-reason', "Statement I: The RTI Amendment Act, 2019 gave Information Commissioners a fixed five-year term with parity with Election Commissioners.\nStatement II: The government defended the 2019 change by saying that Information Commissions are statutory, not constitutional.", null, 'Which one of the following is correct?', SI, 3,
    "I is wrong, because the fixed term and parity were the earlier position. The 2019 Act let the Centre set terms and salaries. II is right.",
    ['I is incorrect, as the amendment removed the fixed term and parity.', 'I is incorrect, so "both are correct" cannot hold.', 'This reverses the truth: I is the incorrect one, and II is correct.', ''],
    '2019 RTI amendment', '2019: the Centre sets commissioners\' terms and salaries.', 'A live independence debate that feeds both Prelims and Mains.', 'Notes: Changes and rulings'),
  q(14, 'moderate', 'multi-statement', "Consider the following statements about social audit in India:", ['1. Section 17 of MGNREGA required Gram Sabhas to carry out social audits.', '2. Meghalaya passed the first state law for social audit of schemes, in 2017.', '3. The National Food Security Act, 2013 also provides for social audits by local bodies.'], 'How many of the above statements are correct?', COUNT, 2,
    "All three are correct. They are the main legal references for social audit that the note gives.",
    ['All three are supported, so this undercounts.', 'All three are supported, so this undercounts.', '', 'None of the three is false; each is in the note.'],
    'Social audit law', 'MGNREGA s.17, Meghalaya 2017, NFSA 2013.', 'Legal anchors make social audit easy to test in statement form.', 'Notes: Social audit'),
  q(15, 'moderate', 'match', "Match the reports of the 2nd Administrative Reforms Commission with their numbers:", ['List I: A. Right to Information: Master Key to Good Governance; B. Ethics in Governance; C. Promoting e-Governance: The SMART Way Forward; D. Citizen Centric Administration: The Heart of Governance', 'List II: 1. 12th report; 2. 1st report; 3. 11th report; 4. 4th report'], 'Select the correct code:', ['A-2, B-4, C-3, D-1', 'A-4, B-2, C-3, D-1', 'A-2, B-4, C-1, D-3', 'A-2, B-3, C-4, D-1'], 0,
    "RTI is the 1st report, Ethics in Governance the 4th, e-Governance the 11th and Citizen Centric Administration the 12th.",
    ['', 'This swaps A and B: RTI is the 1st report and Ethics the 4th.', 'This swaps C and D: e-Governance is the 11th and Citizen Centric the 12th.', 'This swaps B and C: Ethics is the 4th and e-Governance the 11th.'],
    '2nd ARC reports', '2nd ARC: 1 RTI; 4 Ethics; 11 e-Gov; 12 Citizen Centric.', 'These reports are the main reference for Mains answers across GS II and IV.', 'Notes: The Second Administrative Reforms Commission'),
  q(16, 'moderate', 'chronology', "Consider the following steps in India's e-governance story:", ['1. Digital India', '2. National Informatics Centre', '3. Government e-Marketplace (GeM)', '4. National e-Governance Plan'], 'Which one of the following gives the correct chronological order?', ['2-4-1-3', '4-2-1-3', '2-1-4-3', '2-4-3-1'], 0,
    "The National Informatics Centre came in 1976, the National e-Governance Plan in 2006, Digital India in 2015 and GeM in 2016-17.",
    ['', 'The NIC (1976) long predates the National e-Governance Plan (2006).', 'The National e-Governance Plan (2006) came before Digital India (2015).', 'GeM (2016-17) came after Digital India (2015).'],
    'E-governance timeline', 'NIC 1976, NeGP 2006, Digital India 2015, GeM 2016-17.', 'Sequence questions test the evolution of the programme.', 'Notes: E-governance'),
  q(17, 'moderate', 'application', "In a village, people affected by a welfare scheme gather in a public hearing and compare official records with what beneficiaries actually received. Which accountability tool does this best describe?", null, null, ['Social audit', 'CAG audit', 'Second appeal under the RTI Act', 'A CPGRAMS grievance'], 0,
    "This is a social audit: community-led, usually in a public hearing, checking whether benefits reached the right people.",
    ['', 'A CAG audit is expert-led and checks compliance and money, not a community hearing.', 'A second appeal is made to the Information Commission against a refusal of information.', 'CPGRAMS is an online grievance portal, not a public verification of records.'],
    'Social audit versus CAG audit', 'Social audit is community-led; CAG audit is expert-led.', 'The distinction is a natural application-style question.', 'Notes: Social audit'),
  q(18, 'moderate', 'multi-statement', "With reference to e-governance, consider the following statements:", ['1. It is usually mapped as G2C, G2B, G2G and G2E.', '2. In the 2nd ARC formula SMART, the letter M stands for "Moral".'], 'Which of the statements given above is/are correct?', BOTH, 2,
    "Both are correct. SMART means Simple, Moral, Accountable, Responsive and Transparent, and the four categories are the standard map of e-governance.",
    ['Statement 2 is also correct: SMART includes "Moral".', 'Statement 1 is also correct: these are the four usual categories.', '', 'Both are correct, so this option cannot hold.'],
    'E-governance basics', 'SMART: Simple, Moral, Accountable, Responsive, Transparent.', 'The letter M is often assumed to mean "Measurable", which makes this a useful test.', 'Notes: E-governance'),
  q(19, 'moderate', 'multi-statement', "Consider the following statements about the RTI appeal process:", ['1. The first appeal lies to the Information Commission.', '2. The second appeal lies directly to the High Court.', '3. The penalty for wrongful denial falls on the department.'], 'How many of the above statements are correct?', COUNT, 3,
    "None is correct. The first appeal goes to a senior officer in the department, the second goes to the Information Commission, and the penalty falls on the PIO.",
    ['No statement is correct: each one misplaces a step or the penalty.', 'No statement is correct, as all three change the actual route.', 'All three fail, on the first appeal, the second appeal and the penalty.', ''],
    'RTI appeals', 'First appeal: senior officer. Second: Commission. Penalty: PIO.', 'Precise procedure questions punish a vague memory of the Act.', 'Notes: How a request moves; Common RTI errors'),
  q(20, 'moderate', 'multi-statement', "With reference to the Prevention of Corruption Act as amended in 2018, consider the following statements:", ['1. Giving a bribe is an offence.', '2. Section 17A removed the need for prior approval before probes into officials\' decisions.'], 'Which of the statements given above is/are correct?', BOTH, 0,
    "Only statement 1 is correct. Section 17A does the opposite: prior approval is needed before probing officials' decisions.",
    ['', 'Statement 2 reverses Section 17A, and statement 1 is correct.', 'Statement 2 fails, so both cannot be correct.', 'Statement 1 is correct: the 2018 amendment made bribe-giving an offence.'],
    'Prevention of Corruption Act', '2018: bribe-giving is an offence; 17A needs prior approval.', 'Section 17A is a frequent subject in the anti-corruption debate.', 'Notes: Anti-corruption bodies'),
  y(2018, 36, 17, 'moderate', 'multi-statement', 'Which of the following is/are the aim/aims of "Digital India" Plan of the Government of India ?', ["1. Formation of India's own Internet companies like China did.", '2. Establish a policy framework to encourage overseas multinational corporations that collect Big Data to build their large data centres within our national geographical boundaries.', '3. Connect many of our villages to the Internet and bring Wi-Fi to many of our schools, public places and major tourist centres.'], 'Select the correct answer using the code given below :', ['1 and 2 only', '3 only', '2 and 3 only', '1, 2 and 3'], 1,
    "Only 3 fits. Digital India is about digital infrastructure, services and empowerment, and connecting villages and public places falls within that. It has no aim of creating Chinese-style internet firms or the stated data-centre policy.",
    ['Statements 1 and 2 are not aims of the programme.', '', 'Statement 2 is not among the stated aims of the programme.', 'Statements 1 and 2 are not aims, so all three cannot hold.'],
    'Digital India aims', 'Digital India aims at connectivity and digital delivery.', 'Asked in Prelims 2018 (GS Paper I, Q36).', 'Notes: E-governance'),

  // Hard
  q(21, 'hard', 'multi-statement', "Consider the following statements about the change to the RTI Act through the DPDP Act, 2023, as per reports up to March 2026:", ['1. Section 44(3) of the DPDP Act rewrites Section 8(1)(j) of the RTI Act.', '2. Section 8(2) of the RTI Act, on public interest outweighing harm, has been repealed.', '3. The Supreme Court referred the challenge to a Constitution Bench.'], 'How many of the above statements are correct?', COUNT, 1,
    "Statements 1 and 3 are correct. Section 8(2) remains, and the government relies on it to say that public-interest disclosure is still possible.",
    ['Two statements are correct, 1 and 3, so this undercounts.', '', 'Statement 2 fails because Section 8(2) survives the change.', 'Statements 1 and 3 are both correct.'],
    'DPDP and RTI', 'Clause 8(1)(j) changed; Section 8(2) still stands.', 'The privacy-transparency debate is a likely Mains and Prelims theme.', 'Notes: The 2025 change to Section 8(1)(j)'),
  q(22, 'hard', 'match', "Match List I with List II:", ['List I (Case): A. Thalappalam Service Cooperative Bank; B. Subhash Chandra Agarwal; C. Anjali Bhardwaj; D. Puttaswamy', 'List II (Point): 1. Privacy as a fundamental right; 2. A public authority must be substantially financed or controlled by government; 3. Vacancies in Information Commissions must be filled on time; 4. The CJI\'s office is a public authority'], 'Select the correct code:', ['A-2, B-4, C-3, D-1', 'A-4, B-2, C-3, D-1', 'A-2, B-3, C-4, D-1', 'A-2, B-4, C-1, D-3'], 0,
    "Thalappalam (2013) set the substantial finance or control test, Subhash Chandra Agarwal (2019) concerned the CJI's office, Anjali Bhardwaj (2019) concerned vacancies, and Puttaswamy (2017) recognised privacy.",
    ['', 'This swaps A and B: Thalappalam gave the finance or control test.', 'This swaps B and C: Agarwal concerned the CJI\'s office, and Bhardwaj concerned vacancies.', 'This swaps C and D: Puttaswamy is the privacy case.'],
    'RTI case law', 'Thalappalam 2013; Agarwal and Bhardwaj 2019; Puttaswamy 2017.', 'The note names these as key cases for Mains answers.', 'Notes: Changes and rulings; The 2025 change to Section 8(1)(j)'),
  q(23, 'hard', 'multi-statement', "Consider the following statements about the Lokpal:", ['1. It has a Chairperson and up to 8 members, half of them judicial.', '2. The Prime Minister lies wholly outside its jurisdiction.', '3. The first Lokpal was appointed in 2013, the year of the Act.'], 'How many of the above statements are correct?', COUNT, 0,
    "Only statement 1 is correct. The Prime Minister is covered, with safeguards, and the first Lokpal was appointed only in 2019.",
    ['', 'Statements 2 and 3 both fail, on the PM and on the year.', 'Statements 2 and 3 fail, so all three cannot be correct.', 'Statement 1 is correct: this is the composition in the Act.'],
    'Lokpal', 'Lokpal: PM covered with safeguards; first appointed in 2019.', 'The note records that Prelims 2025 tested the Lokpal in detail.', 'Notes: Anti-corruption bodies; Lokpal and Lokayuktas Act, 2013'),
  q(24, 'hard', 'statement', "Which one of the following correctly describes Sevottam?", null, null, ['A DARPG model with the standard IS 15700:2005, having three parts: charter, grievance redress and service delivery capability', 'A DARPG model with the standard IS 15700:2005, giving citizens a legal right to services with a penalty on officers', 'A CAG framework with three parts: compliance audit, performance audit and social audit', 'A National Informatics Centre standard with four stages: presence, interaction, transaction and transformation'], 0,
    "Sevottam is DARPG's service excellence model, with the standard IS 15700:2005 and three parts: charter, grievance redress and service delivery capability.",
    ['', 'A legal right and a penalty belong to Right to Services laws, not Sevottam.', 'Sevottam is a DARPG model and not a CAG framework.', 'Those four stages describe a common e-governance model, not Sevottam.'],
    'Sevottam', 'Sevottam: charter, grievance redress, delivery capability.', 'Close distractors mix three tools that the note keeps separate.', 'Notes: Citizen charters and public service guarantees'),
  q(25, 'hard', 'multi-statement', "Consider the following statements about Administrative Reforms Commissions:", ['1. The first ARC (1966) began under M. Veerappa Moily.', '2. The 2nd ARC gave 12 reports by 2009.'], 'Which of the statements given above is/are correct?', BOTH, 3,
    "Neither is correct. The first ARC began under Morarji Desai, and the 2nd ARC, chaired first by Moily, gave 15 reports. The 12th is the report on citizen-centric administration.",
    ['Statement 1 fails because Morarji Desai, not Moily, began as the first ARC\'s head.', 'Statement 2 fails because the 2nd ARC gave 15 reports, not 12.', 'Both fail, on the chairperson and on the number of reports.', ''],
    'Administrative Reforms Commissions', '1st ARC: Morarji Desai, 1966. 2nd ARC: Moily, 15 reports.', 'Heads and report counts are an easy place to set a trap.', 'Notes: The Second Administrative Reforms Commission'),
  q(26, 'hard', 'match', "Match List I with List II:", ['List I (Project): A. Gyandoot; B. Bhoomi; C. FRIENDS; D. eSeva', 'List II (State): 1. Andhra Pradesh; 2. Madhya Pradesh; 3. Kerala; 4. Karnataka'], 'Select the correct code:', ['A-2, B-4, C-3, D-1', 'A-4, B-2, C-3, D-1', 'A-2, B-4, C-1, D-3', 'A-3, B-4, C-2, D-1'], 0,
    "Gyandoot is from Madhya Pradesh, Bhoomi from Karnataka, FRIENDS from Kerala and eSeva from Andhra Pradesh.",
    ['', 'This swaps A and B: Gyandoot is Madhya Pradesh and Bhoomi is Karnataka.', 'This swaps C and D: FRIENDS is Kerala and eSeva is Andhra Pradesh.', 'This swaps A and C: Gyandoot is Madhya Pradesh and FRIENDS is Kerala.'],
    'State e-governance pilots', 'Gyandoot MP; Bhoomi Karnataka; FRIENDS Kerala; eSeva AP.', 'State pilots remain the standard examples of e-governance.', 'Notes: E-governance'),
  q(27, 'hard', 'assertion-reason', "Statement I: A fast average disposal time on CPGRAMS does not by itself show that grievances have been solved.\nStatement II: A portal can close a grievance without solving it.", null, 'Which one of the following is correct?', SI, 0,
    "Both are correct and II explains I. Closure is an administrative step, so speed alone cannot prove accountability. The note therefore asks for CPGRAMS numbers to be read with caution.",
    ['', 'II does explain I: closure without a solution is why speed does not prove success.', 'II is also correct, as the note states it directly.', 'I is also correct: faster digital service does not by itself mean accountability.'],
    'Speed and accountability', 'Faster digital service does not by itself mean accountability.', 'The note marks this as a trap, and it gives Mains answers a critical edge.', 'Notes: Do not merge these'),
  y(2024, 98, 43, 'hard', 'multi-statement', 'With reference to the Digital India Land Records Modernisation Programme, consider the following statements :', ['1. To implement the scheme, the Central Government provides 100% funding.', '2. Under the Scheme, Cadastral Maps are digitised.', '3. An initiative has been undertaken to transliterate the Records of Rights from local language to any of the languages recognized by the Constitution of India.'], 'Which of the statements given above are correct?', ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 3,
    "All three are correct. The programme is centrally funded, it digitises cadastral maps, and it has an initiative to transliterate Records of Rights into languages recognised by the Constitution.",
    ['This leaves out statement 3, but the transliteration initiative is part of the programme.', 'This leaves out statement 1, but the programme has 100% central funding.', 'This leaves out statement 2, but digitising cadastral maps is a core activity.', ''],
    'Land records programme', 'Land records: central funding, cadastral maps, transliteration.', 'Asked in Prelims 2024 (GS Paper I, Q98), as the note records.', 'Notes: E-governance; UPSC Prelims 2024'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-1129-1', day: DAY, marks: 15, words: 250, directive: 'Critically analyse', question: 'Two decades after its enactment, the Right to Information Act faces challenges from both within and outside the law. Critically analyse, with reference to the amendments of 2019 and the changes of 2025.', mustCover: ['Origins and what the Act achieved', 'Section 4, Section 8 and Section 20 framework', 'Vacancies and enforcement weakness', '2019 Amendment: terms and independence', '2025 Section 8(1)(j) change: both sides', 'Way forward, including Puttaswamy and Agarwal balance'], model: `Introduction
The RTI Act, which took full effect on 12 October 2005, grew from the right to know in Raj Narain (1975) and S.P. Gupta (1981), and from the MKSS movement in Rajasthan. It made access to information a legal right, with timelines, appeals and penalties.

What it achieved
Citizens gained a 30-day reply rule, a two-stage appeal and a penalty on the PIO of up to Rs 25,000. Subhash Chandra Agarwal (2019) brought the CJI's office within the Act.

Internal weaknesses
Proactive disclosure under Section 4 remains weak.
Commissions have limited means of enforcing their orders.
Vacancies persist, despite the direction in Anjali Bhardwaj (2019) to fill posts on time.
Thalappalam (2013) narrowed the idea of a public authority to bodies substantially financed or controlled by government.

Changes in the law
2019 Amendment: the Centre now sets terms and salaries of Commissioners. Critics see a threat to independence, while the government says Commissions are statutory, not constitutional.
2025 change: Section 44(3) of the DPDP Act rewrites Section 8(1)(j), removing the public-interest test inside that clause. The government cites privacy (Puttaswamy, 2017) and Section 8(2). Critics fear that records of officials, payments and ration lists can be withheld as personal.

Assessment
The Act survives, but it is weaker. Privacy is a genuine right, but a blanket exemption upsets the balance.

Way forward
Fill vacancies on time, restore secure tenure, and read Section 8(2) generously. The pending Constitution Bench reference offers a chance to set a clear test for privacy and transparency.` },
  { id: 'm-1129-2', day: DAY, marks: 10, words: 150, directive: 'Examine', question: 'Examine why Citizens\' Charters in India have had limited impact, and whether Right to Services laws offer a better answer.', mustCover: ['Origin and purpose of charters', 'Weakness: no legal force, drafted without users', 'Sevottam and 2nd ARC 12th report', 'Right to Services: law, time limit, appeal, penalty', 'Limits of these laws', 'Conclusion'], model: `Introduction
A Citizens' Charter is a public statement of standards, timelines and how to complain. It began in the UK in 1991, and India adopted it in 1997 under DARPG.

Why the impact has been limited
No legal force: a charter has no statutory backing, so citizens cannot enforce it.
Poor design: charters are often drafted without users.
Uneven follow-up: Sevottam (IS 15700:2005) brought a standard, but adoption has been uneven.

Are Right to Services laws better?
Yes, in part: since Madhya Pradesh in 2010, these laws set a legal time limit, an appeal and a penalty on the officer.
But they are state-level only, as a central Bill lapsed in 2014, and they address delay more than quality.

Conclusion
Charters and laws should work together. Following the 2nd ARC's 12th report, charters need user consultation and a seven-step model, while services laws supply the legal force and grievance redress.` },
  { id: 'm-1129-3', day: DAY, marks: 10, words: 150, directive: 'Critically examine', question: 'E-governance can be a route to inclusion or to new forms of exclusion. Critically examine.', mustCover: ['Definition and models: G2C and stages', 'Evidence of gains: NeGP, Digital India, CPGRAMS, UMANG', 'Barriers: divide, language, connectivity, cyber security', 'Process re-engineering: 2nd ARC 11th report', 'Accountability caveat', 'Way forward'], model: `Introduction
E-governance uses ICT to deliver services and run government across G2C, G2B, G2G and G2E. Its goal, in the 2nd ARC's words, is SMART government: Simple, Moral, Accountable, Responsive and Transparent.

Route to inclusion
Reach: the National e-Governance Plan (2006), Common Service Centres and Digital India (2015) bring services closer to citizens.
Convenience: UMANG and DigiLocker reduce visits to offices.
Redress: CPGRAMS cut its norm to 21 days in 2024.

Route to exclusion
Digital divide, language barriers and weak connectivity leave out those who most need services.
Cyber security and data privacy create new risks.
Digitising a poor process only speeds up failure, as the 11th report warns.
A portal can close a grievance without solving it.

Way forward
Re-engineer processes first, keep assisted and offline channels, offer services in local languages, and measure outcomes rather than speed. E-governance should support accountability, not replace it.` },
]
