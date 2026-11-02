import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-30'
const S = 'Notes: Civil services, NGOs, SHGs'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1130-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', "Which one of the following is NOT an All India Service?", null, null, ['Indian Foreign Service', 'Indian Administrative Service', 'Indian Police Service', 'Indian Forest Service'], 0,
    "The three All India Services are the IAS, the IPS and the Indian Forest Service. The Indian Foreign Service is a Central Service.",
    ['', 'The IAS is one of the three All India Services.', 'The IPS is one of the three All India Services.', 'The Indian Forest Service is the third All India Service, and it is often confused with the Foreign Service.'],
    'All India Services', 'All India Services: IAS, IPS, Indian Forest Service.', 'The note flags the Forest and Foreign Service confusion as a trap.', 'Notes: Articles and services'),
  q(2, 'easy', 'factual', "The doctrine of pleasure, under which civil servants hold office during the pleasure of the President or Governor, is found in which Article of the Constitution?", null, null, ['Article 310', 'Article 309', 'Article 311', 'Article 312'], 0,
    "Article 310 contains the doctrine of pleasure. Article 311 then gives civil servants safeguards against arbitrary removal.",
    ['', 'Article 309 is about regulating recruitment and service conditions.', 'Article 311 gives safeguards on removal, not the doctrine of pleasure.', 'Article 312 deals with creating All India Services.'],
    'Doctrine of pleasure', 'Article 310: pleasure. Article 311: safeguards.', 'Part XIV articles are a direct and repeated exam point.', 'Notes: Part XIV of the Constitution; Constitution of India, Art 310'),
  q(3, 'easy', 'factual', "Civil Services Day, which recalls Sardar Patel's 1947 address to officers, is observed on which date?", null, null, ['21 April', '25 December', '26 November', '12 October'], 0,
    "Civil Services Day falls on 21 April and recalls Sardar Patel's 1947 address, known for the 'steel frame' idea.",
    ['', '25 December is Good Governance Day.', '26 November is Constitution Day, not Civil Services Day.', '12 October 2005 is the day the RTI Act took full effect.'],
    'Civil Services Day', 'Civil Services Day: 21 April.', 'A simple date, and one easily confused with other governance days.', 'Notes: The civil service debate'),
  q(4, 'easy', 'factual', "Mission Karmayogi, approved in September 2020, is the national programme for which one of the following?", null, null, ['Civil services capacity building', 'Women\'s self-help group finance', 'Registration of voluntary organisations', 'Pension reform for government employees'], 0,
    "Mission Karmayogi is the National Programme for Civil Services Capacity Building. It moves training from rule-based to role-based, through iGOT Karmayogi.",
    ['', 'SHG finance falls under NABARD and DAY-NRLM, not Mission Karmayogi.', 'Voluntary organisations use NGO Darpan, not Mission Karmayogi.', 'The pension reform is the Unified Pension Scheme, not Mission Karmayogi.'],
    'Mission Karmayogi', 'Karmayogi: from rule-based to role-based training.', 'The main recent reform in the civil services note.', 'Notes: Civil services: recent changes'),
  q(5, 'easy', 'factual', "A Self-Help Group usually has how many members?", null, null, ['10-20', '2-5', '50-100', '100-200'], 0,
    "An SHG usually has 10-20 people, mainly women from similar backgrounds, who save regularly, lend to each other and then borrow from banks.",
    ['', 'Two to five is too small for the group saving and peer pressure the model uses.', 'A body this size is closer to a federation than an SHG.', 'Even a Village Organisation is a federation of groups; an SHG has 10-20 people.'],
    'SHG basics', 'SHG: usually 10-20 members.', 'The basic definition behind every SHG question.', 'Notes: Self-Help Groups'),
  q(6, 'easy', 'factual', "The SHG-Bank Linkage pilot of 1992 is associated with which institution?", null, null, ['NABARD', 'State Bank of India', 'Reserve Bank of India', 'NITI Aayog'], 0,
    "NABARD launched the SHG-Bank Linkage pilot in 1992. The note warns that Prelims 2023 used the State Bank of India as a trap.",
    ['', 'The note marks the State Bank of India as the trap in Prelims 2023.', 'The RBI regulates NBFC-MFIs, but the SHG pilot was NABARD\'s.', 'NITI Aayog runs NGO Darpan, and it did not start the pilot.'],
    'SHG-Bank Linkage', 'SHG-Bank Linkage: NABARD, 1992.', 'A trap already used in Prelims, as the note records.', 'Notes: How SHGs developed; Prelims 2023'),
  q(7, 'easy', 'factual', "A Section 8 company, a common legal form for NGOs, is registered under which law?", null, null, ['Companies Act, 2013', 'Societies Registration Act, 1860', 'Indian Trusts Act, 1882', 'Foreign Contribution (Regulation) Act, 2010'], 0,
    "A Section 8 company is formed under the Companies Act, 2013. Its profits are applied to its objects, and it pays no dividends.",
    ['', 'The 1860 Act governs societies, which are membership-based.', 'The 1882 Act covers private trusts, not Section 8 companies.', 'The FCRA regulates foreign funds, and it does not create legal forms.'],
    'Legal forms of NGOs', 'Society 1860; Trust 1882; Section 8 company 2013.', 'The note\'s table of legal forms suits direct questions.', 'Notes: NGOs: what they are'),
  q(8, 'easy', 'factual', "NGO Darpan, a voluntary registry for NGOs dealing with government, is run by which body?", null, null, ['NITI Aayog', 'Ministry of Home Affairs', 'Reserve Bank of India', 'Comptroller and Auditor General'], 0,
    "NITI Aayog runs NGO Darpan. It is a voluntary registry, which makes it different from FCRA registration.",
    ['', 'The Home Ministry handles the FCRA portal, not NGO Darpan.', 'The RBI regulates NBFC-MFIs, not NGO registration.', 'The CAG audits government accounts, and it does not run this registry.'],
    'NGO Darpan', 'NGO Darpan: NITI Aayog; voluntary.', 'A common factual question on the voluntary sector.', 'Notes: NGOs: what they are'),

  // Moderate
  q(9, 'moderate', 'multi-statement', "Consider the following statements about Part XIV of the Constitution:", ['1. Article 309 lets Parliament and state legislatures regulate recruitment and service conditions.', '2. Article 311 provides that no civil servant may be removed by an authority below the one that appointed them.', '3. Article 312 lets the Lok Sabha create new All India Services by a two-thirds resolution.'], 'How many of the above statements are correct?', COUNT, 1,
    "Statements 1 and 2 are correct. Article 312 requires a Rajya Sabha resolution, not a Lok Sabha one, along with a law of Parliament.",
    ['Two statements are correct, 1 and 2, so this undercounts.', '', 'Statement 3 fails because the resolution comes from the Rajya Sabha.', 'Statements 1 and 2 are both correct.'],
    'Part XIV articles', 'Article 312: Rajya Sabha, two-thirds, and a law.', 'The House specified in Article 312 is a classic exam detail.', 'Notes: Part XIV of the Constitution; Constitution of India, Arts 309, 311, 312'),
  q(10, 'moderate', 'multi-statement', "Consider the following statements:", ['1. The Union Public Service Commission is a constitutional body.', '2. The Central Vigilance Commission and the Central Bureau of Investigation are constitutional bodies.'], 'Which of the statements given above is/are correct?', BOTH, 0,
    "Only statement 1 is correct. The UPSC is a constitutional body under Articles 315-323, while the CVC and the CBI are not constitutional.",
    ['', 'Statement 2 fails because neither the CVC nor the CBI is constitutional, and statement 1 is correct.', 'Statement 2 fails, so both cannot be correct.', 'Statement 1 is correct: Articles 315-323 provide for Public Service Commissions.'],
    'Constitutional status', 'UPSC is constitutional; CVC, CBI and Information Commissions are not.', 'The note lists this distinction among its traps.', 'Notes: Articles and services'),
  q(11, 'moderate', 'assertion-reason', "Statement I: The 2020 ban on sub-granting under the FCRA hurts small grassroots groups.\nStatement II: Small grassroots groups rely on larger bodies for funds.", null, 'Which one of the following is correct?', SI, 0,
    "Both are correct and II explains I. Because small groups receive funds through larger bodies, a ban on sub-grants cuts that route.",
    ['', 'II does explain I: dependence on larger bodies is why the ban affects them.', 'II is also correct, as the note says in its Mains advice.', 'I is also correct: the note gives this as the proportionality argument.'],
    'FCRA sub-grant ban', 'No sub-granting: small NGOs lose their funding route.', 'It supports the balanced FCRA argument in Mains.', 'Notes: Balance the FCRA argument'),
  q(12, 'moderate', 'assertion-reason', "Statement I: Article 19(1)(c) protects the right to form associations.\nStatement II: The Societies Registration Act dates from 1860.", null, 'Which one of the following is correct?', SI, 1,
    "Both are correct, but II does not explain I. A statute of 1860 cannot explain a right in the Constitution of 1950.",
    ['II does not explain I: the 1860 Act is not the reason for this constitutional right.', '', 'II is also correct: the note lists the Act under legal forms.', 'I is also correct: the note cites Article 19(1)(c) for NGOs.'],
    'NGOs and the law', 'Article 19(1)(c) is the right; the 1860 Act is one legal form.', 'It tests the difference between a constitutional right and a registration law.', 'Notes: NGOs: what they are; Constitution of India, Art 19'),
  q(13, 'moderate', 'assertion-reason', "Statement I: In an SHG, peer pressure from the group replaces collateral.\nStatement II: SHGs are directly regulated by the RBI as NBFC-MFIs.", null, 'Which one of the following is correct?', SI, 2,
    "I is correct, but II is not. There is no specific regulator for SHGs, and banks follow RBI and NABARD circulars when they lend to them. NBFC-MFIs are a separate model.",
    ['II is incorrect, so it cannot explain I: SHGs are not NBFC-MFIs.', 'II is incorrect, because the RBI regulates NBFC-MFIs and not SHGs.', '', 'I is correct: the note says the group\'s peer pressure replaces collateral.'],
    'SHG versus MFI', 'SHGs have no specific regulator; the RBI regulates NBFC-MFIs.', 'The model comparison table is a likely source of statements.', 'Notes: Which model is which'),
  q(14, 'moderate', 'assertion-reason', "Statement I: The August 2024 UPSC advertisement for 45 lateral entry posts led to all the posts being filled.\nStatement II: The government cited social justice and reservation when the advertisement was withdrawn.", null, 'Which one of the following is correct?', SI, 3,
    "I is wrong, because the advertisement was withdrawn. II is right, and it is the core of the debate on reservation and lateral entry.",
    ['I is incorrect, since the advertisement was withdrawn in August 2024.', 'I is incorrect, so "both are correct" cannot hold.', 'This reverses the truth: I is the incorrect one, and II is correct.', ''],
    'Lateral entry', 'August 2024: the advertisement for 45 posts was withdrawn.', 'A recent event that tests the reservation and expertise debate.', 'Notes: Civil services: recent changes'),
  q(15, 'moderate', 'multi-statement', "Consider the following statements about the 2020 amendment to the FCRA:", ['1. It capped administrative spending at 20%.', '2. It barred sub-granting.', '3. It required a designated SBI account in New Delhi.'], 'How many of the above statements are correct?', COUNT, 2,
    "All three are correct. The amendment also required Aadhaar for office-bearers, and the administrative cap fell from 50% to 20%.",
    ['All three are supported, so this undercounts.', 'All three are supported, so this undercounts.', '', 'None of the three is false; each is in the note.'],
    'FCRA 2020', 'FCRA 2020: 20% cap, no sub-granting, SBI New Delhi.', 'The note lists these under Quick recall, which makes them likely targets.', 'Notes: Foreign Contribution (Regulation) Act'),
  q(16, 'moderate', 'multi-statement', "Consider the following statements about civil service reform committees and cases:", ['1. The Kothari Committee (1976) added the essay paper and raised interview marks.', '2. The Satish Chandra Committee (1989) set the current three-stage exam pattern.', '3. The T.S.R. Subramanian judgment (2013) dealt mainly with reform of the exam syllabus.'], 'How many of the above statements are correct?', COUNT, 3,
    "None is correct. Kothari set the three-stage pattern, Satish Chandra added the essay paper and raised interview marks, and T.S.R. Subramanian dealt with tenure, a Civil Services Board and written instructions.",
    ['No statement is correct: 1 and 2 swap the committees, and 3 misstates the case.', 'No statement is correct, as all three misplace the reform.', 'All three fail, as each misdescribes the committee or case.', ''],
    'Reform committees', 'Kothari: three stages. Satish Chandra: essay. T.S.R.: tenure.', 'Committee swaps are a common and fair way to test recall.', 'Notes: Reform committees and cases'),
  q(17, 'moderate', 'match', "Match List I with List II:", ['List I (Body): A. Akshaya Patra; B. Pratham; C. SEWA; D. MKSS', 'List II (Role): 1. Advocacy for RTI; 2. School meals; 3. Organising informal women workers; 4. Evidence on learning through ASER'], 'Select the correct code:', ['A-2, B-4, C-3, D-1', 'A-4, B-2, C-3, D-1', 'A-2, B-4, C-1, D-3', 'A-2, B-3, C-4, D-1'], 0,
    "Akshaya Patra runs school meals, Pratham produces ASER, SEWA organises informal women workers, and MKSS is the voice behind RTI.",
    ['', 'This swaps A and B: Akshaya Patra is school meals and Pratham is ASER.', 'This swaps C and D: SEWA organises workers and MKSS worked on RTI.', 'This swaps B and C: Pratham is ASER and SEWA organises workers.'],
    'Roles of NGOs', 'Delivery, evidence, organising and advocacy each have an example.', 'Named examples are useful for both Prelims matching and Mains answers.', 'Notes: The roles NGOs play'),
  q(18, 'moderate', 'chronology', "Consider the following steps in the development of SHGs in India:", ['1. National Rural Livelihoods Mission', '2. Founding of SEWA', '3. NABARD SHG-Bank Linkage pilot', '4. Kudumbashree in Kerala'], 'Which one of the following gives the correct chronological order?', ['2-3-4-1', '3-2-4-1', '2-4-3-1', '2-3-1-4'], 0,
    "SEWA came in 1972, the NABARD pilot in 1992, Kudumbashree in 1998-99 and the National Rural Livelihoods Mission in 2011.",
    ['', 'SEWA (1972) predates the NABARD pilot (1992).', 'The NABARD pilot (1992) came before Kudumbashree (1998-99).', 'Kudumbashree (1998-99) came before the National Rural Livelihoods Mission (2011).'],
    'SHG timeline', 'SEWA 1972; NABARD 1992; Kudumbashree 1998; NRLM 2011.', 'It shows how a local model became a national mission.', 'Notes: How SHGs developed'),
  q(19, 'moderate', 'application', "A civil servant is dismissed by an authority below the one that appointed them, without an inquiry or a hearing, and there is no exceptional circumstance. Which constitutional provision is the officer most likely to rely on?", null, null, ['Article 311', 'Article 310', 'Article 309', 'Article 320'], 0,
    "Article 311 bars removal by an authority below the appointing one, and it requires an inquiry and a hearing, subject to the exceptions in Article 311(2).",
    ['', 'Article 310 is the doctrine of pleasure, which supports the government and not the officer.', 'Article 309 allows laws on recruitment and conditions, and it is not the safeguard.', 'Article 320 lists the functions of Public Service Commissions.'],
    'Article 311 safeguards', 'Article 311 limits Article 310.', 'Whether Article 311 should be diluted is a named Mains angle.', 'Notes: Part XIV of the Constitution; Constitution of India, Art 311'),
  q(20, 'moderate', 'statement', "Which one of the following correctly describes the legal position of trusts in India?", null, null, ['The Indian Trusts Act, 1882 covers private trusts, while public trusts are under state law.', 'The Indian Trusts Act, 1882 covers public trusts, while private trusts are under state law.', 'All trusts are registered under the Societies Registration Act, 1860.', 'All trusts are registered under Section 8 of the Companies Act, 2013.'], 0,
    "The Indian Trusts Act, 1882 covers private trusts, and public trusts fall under state law. Trusts are run by trustees rather than by a membership.",
    ['', 'This reverses the position: the 1882 Act covers private trusts.', 'The 1860 Act governs societies, not trusts.', 'Section 8 of the Companies Act is a separate form of NGO.'],
    'Legal forms of NGOs', 'Trusts: 1882 for private; state law for public.', 'A fine distinction in the legal forms that Prelims can use.', 'Notes: NGOs: what they are'),
  q(21, 'moderate', 'multi-statement', "Consider the following statements about the DAY-NRLM federation:", ['1. A Village Organisation brings together the SHGs of a village.', '2. A Cluster Level Federation sits below the Village Organisation.', '3. The federation has four tiers.'], 'How many of the above statements are correct?', COUNT, 0,
    "Only statement 1 is correct. The structure has three tiers: SHG, Village Organisation and Cluster Level Federation, with the Cluster Level Federation above the Village Organisation.",
    ['', 'Statements 2 and 3 both fail: the cluster body is on top, and there are three tiers.', 'Statements 2 and 3 fail, so all three cannot be correct.', 'Statement 1 is correct, as the Village Organisation is the middle tier.'],
    'DAY-NRLM federation', 'Three tiers: SHG, Village Organisation, Cluster Level Federation.', 'The note\'s Quick recall includes the three-tier structure.', 'Notes: The DAY-NRLM federation'),
  q(22, 'moderate', 'multi-statement', "Consider the following statements:", ['1. In Prakash Singh (2006), the Supreme Court gave directions on police reform, including fixed tenure and a State Security Commission.', '2. In T.S.R. Subramanian (2013), the Supreme Court addressed minimum tenure and written instructions from political bosses.'], 'Which of the statements given above is/are correct?', BOTH, 2,
    "Both are correct. These two cases are the main judicial markers on tenure and on protecting officers from political interference.",
    ['Statement 2 is also correct, as the note\'s timeline records.', 'Statement 1 is also correct, as the note\'s timeline records.', '', 'Both are correct, so this option cannot hold.'],
    'Courts and tenure', 'Prakash Singh 2006; T.S.R. Subramanian 2013.', 'Both cases are standard references on political interference.', 'Notes: Reform committees and cases'),

  // Hard
  q(23, 'hard', 'multi-statement', "Consider the following pairs:", ['1. Self-Help Group: owned by its members', '2. Microfinance institution: owned by its borrowers under cooperative law', '3. Cooperative: linked to Article 43B through the 97th Amendment'], 'How many of the above pairs are correctly matched?', COUNT, 1,
    "Pairs 1 and 3 are correct. A microfinance institution is run by a company, NBFC or NGO, and cooperative law applies to cooperatives.",
    ['Two pairs are correct, 1 and 3, so this undercounts.', '', 'Pair 2 fails because an MFI is a company, NBFC or NGO.', 'Pairs 1 and 3 are both correct.'],
    'SHG, MFI and cooperative', 'SHG and cooperative: member-owned. MFI: company, NBFC or NGO.', 'The three models are easily confused, so they suit a hard question.', 'Notes: Which model is which'),
  q(24, 'hard', 'multi-statement', "Consider the following statements, as of November 2026:", ['1. The 8th Pay Commission was notified with 12 months to report.', '2. The Unified Pension Scheme gives an assured pension of 50% of average pay after 10 years of service.'], 'Which of the statements given above is/are correct?', BOTH, 3,
    "Neither is correct. The 8th Pay Commission has 18 months to report, and the assured pension of 50% of average pay comes after 25 years.",
    ['Statement 1 fails because the Commission has 18 months, not 12.', 'Statement 2 fails because the requirement is 25 years, not 10.', 'Both fail, on the time limit and on the years of service.', ''],
    'Pay and pension', '8th Pay Commission: 18 months. UPS: 50% after 25 years.', 'Both are live service issues with precise numbers.', 'Notes: Civil services: recent changes'),
  q(25, 'hard', 'multi-statement', "Consider the following statements about the FCRA, as reported up to June 2026:", ['1. In Noel Harper (2022), the Supreme Court upheld the 2020 changes, saying that there is no absolute right to foreign funds.', '2. Registration under the FCRA, 2010 is valid for five years.', '3. An FCRA Amendment Bill introduced in March 2026 proposed an authority to manage assets after registration ends.'], 'How many of the above statements are correct?', COUNT, 2,
    "All three are correct. They cover the leading case, the validity period and the 2026 Bill, which was reported as pending in June 2026.",
    ['All three are supported, so this undercounts.', 'All three are supported, so this undercounts.', '', 'None of the three is false; each is in the note.'],
    'FCRA law and case', 'Noel Harper: no absolute right to foreign funds.', 'A case, a term and a Bill together make a demanding statement question.', 'Notes: Foreign Contribution (Regulation) Act'),
  q(26, 'hard', 'statement', "Which one of the following correctly describes how a new All India Service is created under Article 312?", null, null, ['A Rajya Sabha resolution by a two-thirds majority, followed by a law of Parliament', 'A Lok Sabha resolution by a simple majority, followed by a law of Parliament', 'An order of the President on the advice of the UPSC', 'A constitutional amendment ratified by half of the State legislatures'], 0,
    "Article 312 needs a Rajya Sabha resolution passed by a two-thirds majority, and then a law of Parliament.",
    ['', 'The resolution comes from the Rajya Sabha, and a simple majority is not enough.', 'The UPSC has no such power: Article 320 sets out its functions.', 'No amendment is needed: Article 312 sets a simpler route.'],
    'Article 312', 'New All India Service: Rajya Sabha, two-thirds, and a law.', 'The role of the Rajya Sabha here is a favourite detail.', 'Notes: Part XIV of the Constitution; Constitution of India, Art 312'),
  q(27, 'hard', 'multi-statement', "With reference to citizen-centric administration, consider the following statements:", ['1. The 2nd ARC\'s 12th report treats technology as a sufficient substitute for institutional reform.', '2. Good Governance Day is observed on 25 December.'], 'Which of the statements given above is/are correct?', BOTH, 1,
    "Only statement 2 is correct. The 12th report warned against treating technology as a substitute, and it asked for functioning institutions, clear accountability and citizen participation together.",
    ['Statement 1 fails because the report warned against this, and statement 2 is correct.', '', 'Statement 1 fails, so both cannot be correct.', 'Statement 2 is correct, as the note records the date.'],
    'Citizen-centric administration', '12th report: institutions, accountability, participation.', 'A misread of the report\'s stance makes for a fair hard question.', 'Notes: Citizen-centric administration'),
  q(28, 'hard', 'application', "An officer insists on a form being filled in exactly as prescribed, even though this delays the very relief that the rule was meant to speed up. Which concept best describes this behaviour?", null, null, ["Merton's goal displacement", "Weber's ideal bureaucracy", "Patel's steel frame", 'Doctrine of pleasure'], 0,
    "Merton's goal displacement describes rule-following taking priority over results, and the note lists it among the common criticisms of the civil services.",
    ['', 'Weber\'s model describes rule-based organisation as a type, and it is not this dysfunction.', 'The steel frame refers to the role of the services in holding the country together.', 'The doctrine of pleasure concerns tenure under Article 310, not this behaviour.'],
    'Goal displacement', 'Rules above results: Merton\'s goal displacement.', 'It links the GS II debate with GS IV and Weber, as the note suggests.', 'Notes: The civil service debate; Exam guide'),
  q(29, 'hard', 'statement', "Which one of the following correctly describes a 'Lakhpati Didi', as of May 2026?", null, null, ['An SHG member earning at least Rs 1 lakh a year', 'An SHG member earning at least Rs 1 lakh a month', 'An SHG whose total annual savings exceed Rs 1 lakh', 'An SHG member who has taken a bank loan of at least Rs 1 lakh'], 0,
    "A Lakhpati Didi is a member earning at least Rs 1 lakh a year. The test is individual income, which is why it is not the same as group savings or a loan.",
    ['', 'The threshold is Rs 1 lakh a year, not a month.', 'The test is about a member\'s income, not the group\'s savings.', 'A loan is not income, so this is the wrong test.'],
    'Lakhpati Didi', 'Lakhpati Didi: a member earning at least Rs 1 lakh a year.', 'A scheme term with close alternatives; the numbers change, but the definition holds.', 'Notes: Self-Help Groups'),
  y(2026, 98, 51, 'hard', 'match', 'With reference to different Committees in India, consider the following details :', ['1. R.N. Malhotra Committee | Comprehensive reforms of Insurance sector in India | Insurance Regulatory and Development Authority of India', '2. L.C. Gupta Committee | Preparing a roadmap for the introduction of derivatives trading in India | Securities and Exchange Board of India', '3. Urjit R. Patel Committee | Preparing a roadmap for reforming bank lending to the Housing sector | Reserve Bank of India', '4. Y.H. Malegam Committee | Preparing a roadmap for reforms in Microfinance sector in India | Reserve Bank of India'], 'In which of the above rows are all the details correctly matched ?', ['2 only', '2 and 3', '1, 3 and 4', '2 and 4'], 3,
    "Rows 2 and 4 are correct. The Malhotra Committee preceded the IRDAI and was not formed under it, and the Urjit Patel Committee dealt with the monetary policy framework, not housing lending.",
    ['This leaves out row 4, but the Malegam Committee was formed by the RBI for microfinance.', 'Row 3 fails because the Urjit Patel Committee dealt with the monetary policy framework.', 'Rows 1 and 3 fail, on the forming body and on the subject.', ''],
    'Malegam Committee', 'Malegam Committee: RBI, microfinance.', 'Asked in Prelims 2026 (GS Paper I, Q98), as the note records.', 'Notes: Which model is which; UPSC Prelims 2026'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-1130-1', day: DAY, marks: 15, words: 250, directive: 'Critically examine', question: 'Are India\'s civil services still fit for purpose? Critically examine with reference to recent reforms and constitutional safeguards.', mustCover: ['Role: continuity, neutrality, integration, the steel frame', 'Constitutional frame: Articles 309-312', 'Criticisms: generalists, interference, goal displacement', 'Reforms: Karmayogi, lateral entry, Rule 56(j)', 'Article 311: protection against accountability', 'Way forward: tenure, performance, specialist tracks'], model: `Introduction
Sardar Patel called the civil services a "steel frame". Under Part XIV of the Constitution, they provide continuity, neutral advice and national integration. The question today is whether a colonial-era structure suits a state focused on delivery.

Why they remain relevant
They give continuity when governments change and reach down to the district.
All India cadres support national integration.
Articles 309-312 give a stable legal frame, and Article 311 protects neutrality.

Where they fall short
Generalists hold technical jobs.
Transfers and political interference weaken independence, despite Prakash Singh (2006) and T.S.R. Subramanian (2013).
Rule-following can override results, as in Merton's goal displacement.
Performance measurement is weak, and inquiries are slow.

Recent reforms and their limits
Mission Karmayogi (2020) moves from rule-based to role-based training, but the test is whether behaviour changes.
Lateral entry brings expertise, but the August 2024 advertisement for 45 posts was withdrawn over reservation concerns.
Rule 56(j) allows premature retirement of weak officers, but critics fear misuse.

The Article 311 debate
Diluting safeguards could speed up action against corruption, but it risks politicising the services. The better route is faster inquiries within the existing safeguards.

Way forward
Following the 2nd ARC's 10th report and the Hota Committee, India should link pay and assessment to performance, build domain expertise, set minimum tenure through Civil Services Boards, and require written instructions. The steel frame should become more flexible, without losing its neutrality.` },
  { id: 'm-1130-2', day: DAY, marks: 10, words: 150, directive: 'Discuss', question: 'Discuss whether the regulation of foreign funding of NGOs in India strikes a fair balance between national interest and civic space.', mustCover: ['NGO role and Article 19(1)(c)', 'FCRA 2010 and 2020 changes', 'Sovereignty and transparency case', 'Noel Harper', 'Proportionality: sub-grant ban, small groups', '2026 Rules and Bill; way forward'], model: `Introduction
NGOs deliver services, give evidence and act as watchdogs, and Article 19(1)(c) protects the right to form associations. Foreign funds are regulated by the FCRA, 2010.

The case for regulation
Sovereignty: government sees some foreign-funded work as harming public interest.
Transparency: the 2020 amendment capped administrative spending at 20% and required a designated SBI account.
Judicial support: Noel Harper (2022) held that there is no absolute right to foreign funds.

The case for caution
The sub-grant ban hurts small grassroots groups that rely on larger bodies.
The 2026 Rules require activity-wise fees and disclosure of social media accounts, which NGOs see as shrinking civic space.
A pending Bill on assets adds uncertainty.

Conclusion
Regulation is legitimate, but it must be proportionate. India should set clear standards, give reasons for action and provide a fair appeal, so that genuine groups are not punished along with the few that misuse funds.` },
  { id: 'm-1130-3', day: DAY, marks: 10, words: 150, directive: 'Examine', question: 'Have Self-Help Groups brought real empowerment to women in India? Examine.', mustCover: ['Definition and growth: NABARD 1992, NRLM 2011', 'Income: Lakhpati Didi', 'Voice and collective action', 'Limits: debt, low-return enterprises, regional spread', 'SHGs as cheap delivery agents', 'Conclusion, with Kudumbashree as a case'], model: `Introduction
An SHG is a group of 10-20 people, mainly women, who save and lend together and then borrow from banks. From NABARD's 1992 pilot to DAY-NRLM, SHGs have become a large development channel.

Gains
Income: Lakhpati Didi targets earnings of at least Rs 1 lakh a year.
Finance: bank linkage lowers dependence on moneylenders.
Voice: women gain a collective identity and a link to government schemes, and Kudumbashree in Kerala is a noted case.

Limits
Income: enterprises are often small and low-return.
Debt: loans can add to the burden on poor households.
Unpaid work: SHGs used as cheap delivery agents carry extra unpaid work.
Regional spread: progress is uneven across the country.

Conclusion
SHGs have widened access and voice, but income and voice do not always go together. Policy should move members into better enterprises and markets, protect them from over-borrowing, and pay them for delivery work.` },
]
