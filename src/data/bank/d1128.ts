import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-28'
const S = 'Notes: Multilateral institutions'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1128-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', "Which principal organ of the United Nations has been dormant since 1994, when Palau became independent?", null, null, ['Trusteeship Council', 'Economic and Social Council', 'International Court of Justice', 'Secretariat'], 0,
    "The Trusteeship Council has been dormant since 1994, when Palau became independent. The other five principal organs remain active.",
    ['', 'ECOSOC, with 54 members, still coordinates development work.', 'The ICJ, with 15 judges at The Hague, still settles disputes between states.', 'The Secretariat, led by the Secretary-General, still functions.'],
    'UN principal organs', 'Six principal organs; the Trusteeship Council is dormant.', 'Organ-wise functions are where the note says the traps lie.', 'Notes: United Nations'),
  q(2, 'easy', 'factual', "Which one of the following is the top decision-making body of the World Trade Organization?", null, null, ['Ministerial Conference', 'General Council', 'Appellate Body', 'Trade Policy Review Body'], 0,
    "The Ministerial Conference is the WTO's top body, and MC14 met at Yaounde in March 2026.",
    ['', 'The General Council works below the Ministerial Conference.', 'The Appellate Body hears trade disputes, and it has been paralysed since 2019.', 'A review body examines trade policy, and it does not sit at the top of the WTO.'],
    'WTO structure', 'Top WTO body: Ministerial Conference.', 'A plain structural point under the syllabus phrase "structure and mandate".', 'Notes: World Trade Organization'),
  q(3, 'easy', 'factual', "The Asian Infrastructure Investment Bank (AIIB) is based in which city?", null, null, ['Beijing', 'Shanghai', 'New Delhi', 'Tashkent'], 0,
    "The AIIB is China-led and based in Beijing. Shanghai hosts the New Development Bank of BRICS, which is often confused with it.",
    ['', 'Shanghai hosts the New Development Bank of BRICS, not the AIIB.', 'India is a founding member of the AIIB, but the bank is not based there.', 'Tashkent hosts the SCO counter-terrorism structure RATS.'],
    'AIIB and NDB', 'AIIB: Beijing. NDB: Shanghai.', 'Headquarters are a staple, and these two banks are often swapped.', 'Notes: Who publishes what; Quick recall'),
  q(4, 'easy', 'factual', "The SCO's Regional Anti-Terrorist Structure (RATS) is located in which city?", null, null, ['Tashkent', 'Beijing', 'Bishkek', 'Moscow'], 0,
    "RATS is in Tashkent, and the SCO's main base is in Beijing.",
    ['', 'Beijing is the main SCO base, not the location of RATS.', 'Bishkek hosted the 2026 summit, but it does not house RATS.', 'The SCO has no such base in Moscow; RATS is in Tashkent.'],
    'SCO bodies', 'SCO base Beijing; RATS Tashkent.', 'A standard headquarters distinction in the master table.', 'Notes: Master table'),
  q(5, 'easy', 'factual', "In the context of the G20, the term 'troika' refers to which one of the following?", null, null, ['The past, current and next presidencies', 'The three largest economies in the group', 'The EU, the African Union and the host country', 'The finance ministers, central bank governors and leaders'], 0,
    "The troika is the past, current and next G20 presidency, which provides continuity because the G20 has no permanent secretariat.",
    ['', 'The troika is based on the presidency, not on economic size.', 'The EU and the AU are members, but they do not form the troika.', 'These are levels of meeting, while the troika refers to presidencies.'],
    'G20 troika', 'Troika: past, current and next presidency.', 'The note lists this among the G20 details that are easily missed.', 'Notes: G20 details'),
  y(2019, 3, 3, 'easy', 'factual', 'The Global Competitiveness Report is published by the', null, null, ['International Monetary Fund', 'United Nations Conference on Trade and Development', 'World Economic Forum', 'World Bank'], 2,
    "The World Economic Forum publishes the Global Competitiveness Report. The IMF publishes the World Economic Outlook, so the two are often confused.",
    ['The IMF publishes the World Economic Outlook and the Global Financial Stability Report.', 'UNCTAD does not publish this report; the World Economic Forum does.', '', 'The World Bank ran the Ease of Doing Business report, which was discontinued in 2021.'],
    'Who publishes what', 'Global Competitiveness Report: World Economic Forum.', 'Asked in Prelims 2019 (GS Paper I, Q3).', 'Notes: Who publishes what'),
  y(2023, 100, 43, 'easy', 'multi-statement', 'Consider the following statements about G-20 :', ['1. The G-20 group was originally established as a platform for the Finance Ministers and Central Bank Governors to discuss the international economic and financial issues.', "2. Digital public infrastructure is one of India's G-20 priorities."], 'Which of the statements given above is/are correct?', ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 2,
    "Both are correct. The G20 began in 1999 for finance ministers and central bank governors, and India pushed digital public infrastructure during its 2023 presidency.",
    ['Statement 2 is also correct: India pushed digital public infrastructure in 2023.', 'Statement 1 is also correct: the first leaders\' summit came only in 2008.', '', 'Both are correct, so this option cannot hold.'],
    'G20 origin', 'G20: 1999 for finance ministers; leaders from 2008.', 'Asked in Prelims 2023 (GS Paper I, Q100).', 'Notes: G20'),
  y(2016, 67, 25, 'easy', 'multi-statement', 'Consider the following statements :', ['1. New Development Bank has been set up by APEC.', '2. The headquarters of New Development Bank is in Shanghai.'], 'Which of the statements given above is/are correct?', ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 1,
    "Only 2 is correct. The New Development Bank belongs to BRICS, not APEC, and it is based in Shanghai.",
    ['Statement 1 fails because the bank was set up by BRICS, not APEC.', '', 'Statement 1 fails, so both cannot be correct.', 'Statement 2 is correct: the bank is based in Shanghai.'],
    'New Development Bank', 'NDB: BRICS, Shanghai.', 'Asked in Prelims 2016 (GS Paper I, Q67).', 'Notes: BRICS; Who publishes what'),

  // Moderate
  q(6, 'moderate', 'multi-statement', "Consider the following statements about the UN Security Council:", ['1. It has five permanent members with a veto and ten members elected for two years.', '2. Its decisions under Chapter VII bind members.', '3. Changing its permanent membership through a Charter amendment needs two-thirds of members, including all the P5.'], 'How many of the above statements are correct?', COUNT, 2,
    "All three are correct. They explain both the Council's power and why reform is stuck, since any of the P5 can block an amendment.",
    ['All three are supported, so this undercounts.', 'All three are supported, so this undercounts.', '', 'None of the three is false; each is in the note.'],
    'Security Council basics', 'P5 plus 10; Chapter VII binds; amendment needs all P5.', 'Reform of the Council is a standing Mains theme with India at its centre.', 'Notes: United Nations; Security Council reform'),
  q(7, 'moderate', 'multi-statement', "With reference to the United Nations, consider the following statements:", ['1. The Secretary-General is appointed by the General Assembly on the recommendation of the Security Council.', '2. The Economic and Social Council includes all UN member states.'], 'Which of the statements given above is/are correct?', BOTH, 0,
    "Only statement 1 is correct, and Article 97 provides for it. ECOSOC has 54 members, and it is the General Assembly that has all members.",
    ['', 'Statement 2 fails because ECOSOC has 54 members, and statement 1 is correct.', 'Statement 2 fails, so both cannot be correct.', 'Statement 1 is correct under Article 97.'],
    'UN organs', 'Article 97: Secretary-General. ECOSOC: 54 members.', 'The succession to Guterres makes the appointment process topical.', 'Notes: United Nations; UN Charter, Art 97'),
  q(8, 'moderate', 'assertion-reason', "Statement I: A single WTO member can block a decision.\nStatement II: WTO decisions are usually taken by consensus.", null, 'Which one of the following is correct?', SI, 0,
    "Both are correct and II explains I. Because decisions usually need consensus, one member's objection can stop them, which is what happened at MC14.",
    ['', 'II does explain I: consensus is the reason for the veto-like effect.', 'II is also correct, as the note describes the WTO in those terms.', 'I is also correct: India, for example, blocked the Investment Facilitation deal.'],
    'WTO consensus', 'Consensus gives each member a practical veto.', 'It underlies the debate on India\'s stand on the Investment Facilitation deal.', 'Notes: World Trade Organization'),
  q(9, 'moderate', 'assertion-reason', "Statement I: India is a founding member of the Asian Infrastructure Investment Bank.\nStatement II: The Asian Infrastructure Investment Bank is an institution of BRICS.", null, 'Which one of the following is correct?', SI, 2,
    "I is correct, but II is not. The AIIB is China-led, and the BRICS institutions are the New Development Bank and the Contingent Reserve Arrangement.",
    ['II is incorrect, so it cannot explain I: the AIIB is China-led, not a BRICS body.', 'II is incorrect, because the BRICS bank is the New Development Bank.', '', 'I is correct: the note calls India a founding member and a large shareholder.'],
    'AIIB and BRICS', 'AIIB is China-led; the NDB is the BRICS bank.', 'The note\'s trap box highlights these mix-ups between banks.', 'Notes: Who publishes what; BRICS'),
  q(10, 'moderate', 'assertion-reason', "Statement I: India is a member of ICSID, the World Bank Group's body for investment disputes.\nStatement II: IDA gives soft loans to the poorest countries.", null, 'Which one of the following is correct?', SI, 3,
    "I is wrong, as the note records that India is not a member of ICSID. II is right: IDA is the soft-loan arm of the World Bank Group.",
    ['I is incorrect, as India is not a member of ICSID.', 'I is incorrect, so "both are correct" cannot hold.', 'This reverses the truth: I is the incorrect one, and II is correct.', ''],
    'World Bank Group', 'India is not in ICSID; IDA gives soft loans.', 'The arms of the World Bank Group are a common source of statements.', 'Notes: IMF and World Bank'),
  q(11, 'moderate', 'assertion-reason', "Statement I: The Chinese yuan joined the SDR basket in 2016.\nStatement II: Voting power in the IMF depends on quota.", null, 'Which one of the following is correct?', SI, 1,
    "Both are correct, but II does not explain I. Inclusion in the SDR basket is a separate matter from the rule that votes depend on quota.",
    ['II does not explain I: the quota rule on voting is not the reason the yuan entered the basket.', '', 'II is also correct: votes in the IMF depend on quota.', 'I is also correct: the yuan joined the basket in 2016.'],
    'IMF: SDR and quota', 'SDR: dollar, euro, yuan, yen, pound. Votes follow quota.', 'Tests whether two true IMF facts are in fact connected.', 'Notes: IMF and World Bank'),
  q(12, 'moderate', 'match', "Match List I with List II:", ['List I: A. Amber Box; B. Blue Box; C. Green Box; D. Peace clause', 'List II: 1. Interim cover for public stockholding of food; 2. Trade-distorting and capped; 3. Minimal distortion, with no cap; 4. Amber support with limits on production'], 'Select the correct code:', ['A-2, B-4, C-3, D-1', 'A-4, B-2, C-3, D-1', 'A-2, B-3, C-4, D-1', 'A-2, B-4, C-1, D-3'], 0,
    "Amber is trade-distorting and capped, Blue is amber with limits on production, Green has minimal distortion and no cap, and the Bali peace clause gives interim cover for public stockholding.",
    ['', 'This swaps A and B: Amber is the capped category, and Blue is the one with production limits.', 'This swaps B and C: Green has no cap, and Blue has production limits.', 'This swaps C and D: the peace clause covers stockholding, and Green has no cap.'],
    'Agriculture boxes', 'Amber capped; Blue with production limits; Green uncapped.', 'Agricultural subsidies directly affect MSP procurement, so they stay examinable.', 'Notes: World Trade Organization'),
  q(13, 'moderate', 'multi-statement', "With reference to India's positions at the WTO, as of November 2026, consider the following statements:", ['1. India wants the two-tier dispute settlement system restored.', '2. India blocked the Investment Facilitation deal as outside the WTO mandate and multilateral process.', '3. India argued for making the e-commerce moratorium permanent.'], 'How many of the above statements are correct?', COUNT, 1,
    "Statements 1 and 2 are correct. India's concern on the moratorium was the opposite: it says duty-free digital transfers cost developing countries revenue.",
    ['Two statements are correct, 1 and 2, so this undercounts.', '', 'Statement 3 fails because India objects to the revenue cost of the moratorium.', 'Statements 1 and 2 are both correct.'],
    "India's WTO positions", 'India: restore appeals, resist plurilateral investment rules.', 'The note treats this as a direct Mains angle.', 'Notes: World Trade Organization'),
  q(14, 'moderate', 'application', "A country is a member of the SCO, but belongs to neither BRICS nor the Quad. Which one of the following fits this description, as of November 2026?", null, null, ['Pakistan', 'India', 'Russia', 'Japan'], 0,
    "Pakistan is in the SCO, but not in BRICS or the Quad. India belongs to all three, and Russia belongs to the SCO and BRICS.",
    ['', 'India is in the SCO, BRICS and the Quad.', 'Russia is in BRICS as well as the SCO.', 'Japan is a Quad member, and it is not in the SCO.'],
    'Overlapping memberships', 'Pakistan: SCO yes; BRICS and Quad no.', 'The note highlights membership confusion as a Prelims favourite.', 'Notes: Membership confusion'),
  y(2025, 97, 43, 'moderate', 'multi-statement', 'Consider the following statements with regard to BRICS :', ['I. 16th BRICS Summit was held under the Chairship of Russia in Kazan.', 'II. Indonesia has become a full member of BRICS.', 'III. The theme of the 16th BRICS Summit was Strengthening Multiculturalism for Just Global Development and Security.'], 'Which of the statements given above is/are correct?', ['I and II', 'II and III', 'I and III', 'I only'], 0,
    "I and II are correct. The theme of the Kazan summit used the word multilateralism, not multiculturalism, so III fails.",
    ['', 'Statement III fails because the word in the theme was multilateralism.', 'Statement III fails for the same reason, and this option leaves out II.', 'This leaves out II, but Indonesia became a full member in January 2025.'],
    'BRICS summits', 'Kazan 2024; Indonesia joined January 2025.', 'Asked in Prelims 2025 (GS Paper I, Q97).', 'Notes: BRICS; Prelims 2025'),
  y(2022, 4, 3, 'moderate', 'multi-statement', 'With reference to the "G20 Common Framework", consider the following statements :', ['1. It is an initiative endorsed by the G20 together with the Paris Club.', '2. It is an initiative to support Low Income Countries with unsustainable debt.'], 'Which of the statements given above is/are correct?', ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 2,
    "Both are correct. The Common Framework of 2020 for debt treatment was agreed by the G20 with the Paris Club, to help low-income countries with unsustainable debt.",
    ['Statement 2 is also correct: the framework is aimed at low-income countries in debt distress.', 'Statement 1 is also correct: the Paris Club endorsed it with the G20.', '', 'Both are correct, so this option cannot hold.'],
    'G20 Common Framework', 'Common Framework 2020: debt treatment, with the Paris Club.', 'Asked in Prelims 2022 (GS Paper I, Q4).', 'Notes: G20'),
  y(2022, 66, 31, 'moderate', 'multi-statement', 'Consider the following :', ['1. Asian Infrastructure Investment Bank', '2. Missile Technology Control Regime', '3. Shanghai Cooperation Organisation'], 'India is a member of which of the above ?', ['1 and 2 only', '3 only', '2 and 3 only', '1, 2 and 3'], 3,
    "India belongs to all three. It is a founding member of the AIIB, it belongs to the MTCR, and it has been a full SCO member since 2017.",
    ['This leaves out the SCO, of which India has been a full member since 2017.', 'This leaves out the AIIB and the MTCR, and India belongs to both.', 'This leaves out the AIIB, of which India is a founding member.', ''],
    "India's memberships", 'India is in the AIIB, MTCR, SCO; not in APEC or the NSG.', 'Asked in Prelims 2022 (GS Paper I, Q66).', 'Notes: Membership confusion'),
  y(2020, 65, 29, 'moderate', 'factual', 'In which one of the following groups are all the four countries members of G20 ?', null, null, ['Argentina, Mexico, South Africa and Turkey', 'Australia, Canada, Malaysia and New Zealand', 'Brazil, Iran, Saudi Arabia and Vietnam', 'Indonesia, Japan, Singapore and South Korea'], 0,
    "Argentina, Mexico, South Africa and Turkey are all G20 members. Each other group includes at least one non-member. The US excluded South Africa from its 2026 meetings, but that is a separate dispute over participation.",
    ['', 'Malaysia and New Zealand are not G20 members.', 'Iran and Vietnam are not G20 members.', 'Singapore is not a G20 member.'],
    'G20 membership', '19 countries, the EU and the African Union.', 'Asked in Prelims 2020 (GS Paper I, Q65).', 'Notes: G20'),
  y(2016, 15, 7, 'moderate', 'multi-statement', 'With reference to the International Monetary and Financial Committee (IMFC), consider the following statements :', ['1. IMFC discusses matters of concern affecting the global economy, and advises the International Monetary Fund (IMF) on the direction of its work.', "2. The World Bank participates as observer in IMFC's meetings."], 'Which of the statements given above is/are correct?', ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 2,
    "Both are correct. The IMFC advises the IMF, and the World Bank takes part as an observer.",
    ['Statement 2 is also correct: the World Bank attends as an observer.', 'Statement 1 is also correct: the IMFC advises the IMF on its work.', '', 'Both are correct, so this option cannot hold.'],
    'IMFC', 'IMFC advises the IMF; the World Bank observes.', 'Asked in Prelims 2016 (GS Paper I, Q15).', 'Notes: Who publishes what'),

  // Hard
  q(15, 'hard', 'multi-statement', "Consider the following statements about BRICS, as of September 2026:", ['1. Vietnam and Nigeria are full members.', '2. Egypt and Ethiopia are partner countries, not full members.', '3. China holds the chair in 2026.'], 'How many of the above statements are correct?', COUNT, 3,
    "None is correct. Vietnam and Nigeria are partners, Egypt and Ethiopia joined as full members in 2024, and India chairs in 2026, with China following in 2027.",
    ['No statement is correct: 1 and 2 swap the categories, and 3 has the wrong chair.', 'No statement is correct: the partner and member lists are reversed.', 'All three fail, on both membership and the chair.', ''],
    'BRICS members and partners', 'Members and partners differ; India 2026, China 2027.', 'The 2026 chair and enlargement are likely targets, as Prelims 2025 shows.', 'Notes: BRICS'),
  q(16, 'hard', 'multi-statement', "Consider the following statements about the Shanghai Cooperation Organisation, as of November 2026:", ['1. It began as the Shanghai Five.', '2. Iran and Belarus became full members before India did.', '3. China is the next chair for 2026-27.'], 'How many of the above statements are correct?', COUNT, 0,
    "Only statement 1 is correct. India joined in 2017, before Iran (2023) and Belarus (2024), and Pakistan is the next chair for 2026-27.",
    ['', 'Statements 2 and 3 both fail: the order of joining and the chair are wrong.', 'Statements 2 and 3 fail, so all three cannot be correct.', 'Statement 1 is correct: the SCO grew from the Shanghai Five.'],
    'SCO', 'SCO: India 2017, Iran 2023, Belarus 2024; Pakistan chairs next.', 'Pakistan\'s chair creates a practical problem for India, which keeps it in the news.', 'Notes: SCO and Quad'),
  q(17, 'hard', 'statement', "Which one of the following statements about the G20 is correct, as of November 2026?", null, null, ['It has no permanent secretariat or charter, and its membership is 19 countries with the EU and the African Union.', 'It has a permanent secretariat, and its decisions bind the members.', 'It has no secretariat, and its membership is 20 countries with the African Union as an observer.', 'It has a charter but no secretariat, and the African Union joined at Johannesburg in 2025.'], 0,
    "The G20 has no permanent secretariat or charter, and its decisions do not bind. The correct count is 19 countries plus two regional bodies, the EU and the African Union.",
    ['', 'The G20 has no secretariat, and its decisions do not bind.', 'The African Union is a member, not an observer, and the count is 19 countries.', 'There is no charter, and the African Union was admitted in September 2023 at New Delhi.'],
    'G20 structure', 'G20: no secretariat, no charter, non-binding.', 'Structure and mandate questions favour exact counts like this one.', 'Notes: G20 details'),
  q(18, 'hard', 'multi-statement', "With reference to the Quad, consider the following statements:", ['1. It was revived in 2017, and leaders\' summits began in the same year.', '2. It is not a military alliance and has no treaty.'], 'Which of the statements given above is/are correct?', BOTH, 1,
    "Only statement 2 is correct. The Quad was revived in 2017, but leaders' summits began only in 2021.",
    ['Statement 1 fails because leaders\' summits began in 2021, and statement 2 is correct.', '', 'Statement 1 fails, so both cannot be correct.', 'Statement 2 is correct, as the note states directly.'],
    'Quad', 'Quad: revived 2017; leaders from 2021; no treaty.', 'A close-date distractor on a grouping that often appears in questions.', 'Notes: SCO and Quad'),
  q(19, 'hard', 'multi-statement', "Consider the following statements:", ['1. The WTO was created at Bretton Woods in 1944.', '2. The IMF and the World Bank originated under the Marrakesh Agreement.'], 'Which of the statements given above is/are correct?', BOTH, 3,
    "Neither is correct, because the statements swap the origins. The IMF and the World Bank came from Bretton Woods in 1944, and the WTO came from the Marrakesh Agreement in 1995.",
    ['Statement 1 fails because the WTO replaced GATT under the Marrakesh Agreement in 1995.', 'Statement 2 fails because the IMF and the World Bank date from Bretton Woods.', 'Both fail, because the two origins have been swapped.', ''],
    'Origins of institutions', 'Bretton Woods 1944: IMF, World Bank. Marrakesh: WTO.', 'Founding documents are a classic swap trap.', 'Notes: Master table; World Trade Organization'),
  q(20, 'hard', 'statement', "Which one of the following correctly describes the Credentials Committee of the United Nations?", null, null, ['It has nine members and is appointed by the General Assembly at the beginning of each session.', 'It is set up by the Security Council and works under its supervision.', 'It has fifteen members and is appointed by the International Court of Justice.', 'It is appointed by the Secretary-General under Article 97.'], 0,
    "Under Rule 28 of the General Assembly's rules of procedure, the Committee has nine members, appointed by the Assembly at the start of each session, on the proposal of the President.",
    ['', 'The note flags this as the Prelims 2022 trap: the Committee does not belong to the Security Council.', 'Fifteen is the number of ICJ judges, and the ICJ does not appoint this Committee.', 'Article 97 concerns the appointment of the Secretary-General.'],
    'Credentials Committee', 'Credentials Committee: nine members, appointed by the Assembly.', 'The note says Prelims 2022 tested this Committee.', 'Notes: Prelims 2022; UN General Assembly Rules of Procedure, Rule 28'),
  y(2022, 78, 35, 'hard', 'multi-statement', 'With reference to the United Nations General Assembly, consider the following statements :', ['1. The UN General Assembly can grant observer status to the non-member States.', '2. Inter-governmental organisations can seek observer status in the UN General Assembly.', '3. Permanent Observers in the UN General Assembly can maintain missions at the UN headquarters.'], 'Which of the statements given above are correct ?', ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 3,
    "All three are correct. The Assembly can grant observer status to non-member states and to inter-governmental organisations, and permanent observers can keep missions at UN headquarters.",
    ['This leaves out statement 3, but permanent observers can keep missions at headquarters.', 'This leaves out statement 1, which the note gives as an Assembly power.', 'This leaves out statement 2, but inter-governmental organisations can seek this status.', ''],
    'General Assembly observers', 'The Assembly grants observer status to non-members.', 'Asked in Prelims 2022 (GS Paper I, Q78).', 'Notes: United Nations; Prelims 2022'),
  y(2019, 71, 33, 'hard', 'multi-statement', 'With reference to Asian Infrastructure Investment Bank (AIIB), consider the following statements :', ['1. AIIB has more than 80 member nations.', '2. India is the largest shareholder in AIIB.', '3. AIIB does not have any members from outside Asia.'], 'Which of the statements given above is/are correct?', ['1 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 0,
    "Only 1 is correct. The AIIB is China-led, so China and not India is the largest shareholder, and its membership extends beyond Asia.",
    ['', 'Statements 2 and 3 fail: India is large but not the largest, and members include non-Asian states.', 'Statement 3 fails because the AIIB has members from outside Asia.', 'Statements 2 and 3 fail, so all three cannot be correct.'],
    'AIIB', 'AIIB: China-led; India is a large, not the largest, shareholder.', 'Asked in Prelims 2019 (GS Paper I, Q71).', 'Notes: Who publishes what'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-1128-1', day: DAY, marks: 15, words: 250, directive: 'Critically analyse', question: '"Reformed multilateralism" is central to India\'s foreign policy. Critically analyse why reform is needed and why progress has been slow.', mustCover: ['Meaning of reformed multilateralism', 'Case for: 1945 structure, Global South under-represented, India\'s claim', 'UNSC reform blocs: G4, Uniting for Consensus, Ezulwini', 'WTO and G20 strains in 2026', 'Why progress is slow: P5 veto, consensus, unilateralism', 'India\'s way forward'], model: `Introduction
Reformed multilateralism means bigger roles for the Global South, a seat for India at the top table, and rules over unilateral action. It rests on the view that institutions built in 1945 no longer reflect the world.

Why reform is needed
Security Council: Africa and Asia are under-represented. India cites its population, its economy and its record in peacekeeping.
WTO: the Appellate Body has been paralysed since 2019, and the e-commerce moratorium lapsed in March 2026.
G20: the US excluded South Africa from its 2026 presidency, which shows how a host can bend a group with no charter.
Finance: the 16th IMF quota review raised quotas but left shares unchanged.

Why progress is slow
Legal barrier: a Charter amendment needs two-thirds of members, including all P5.
Rival blocs: the G4 faces Uniting for Consensus, and Africa wants its own seats with a veto under the Ezulwini Consensus.
Great power interest: China has not endorsed a permanent seat for Japan or India.
Consensus rules: at the WTO, one member can block, and plurilateral deals move ahead outside the main track.
India's own tension: India also uses consensus to protect its interests, as with Investment Facilitation.

Assessment
Reform is justified, but the demand outruns the means. Progress has come mostly in smaller steps, such as the African Union's G20 entry in 2023.

Way forward
India should build coalitions with Africa, pursue issue-based gains on debt and digital public infrastructure, and use its BRICS and G20 record to keep the agenda alive.` },
  { id: 'm-1128-2', day: DAY, marks: 10, words: 150, directive: 'Critically examine', question: 'Critically examine India\'s decision to block the Investment Facilitation for Development deal at the WTO.', mustCover: ['What the deal is and support for it', 'India\'s reasoning: mandate and process', 'Policy space and consensus', 'Costs: isolation, plurilaterals moving ahead', 'Link to wider WTO crisis', 'Balanced conclusion'], model: `Introduction
At MC14 in Yaounde (March 2026), the Investment Facilitation deal, backed by about 129 members, was not adopted. India held that it lay outside the WTO mandate and the multilateral process.

Case for India's stand
Mandate: investment is not an agreed WTO subject, and a plurilateral text could reshape the rulebook.
Consensus: this rule protects developing countries from rules that they did not negotiate.
Policy space: India wants room for its own investment and development choices.

Case against
Isolation: India stood against a large majority of members.
Practical loss: 66 members also moved ahead on an e-commerce deal, so rules may be written without India.
Credibility: blocking can weaken India's image as a voice for reformed multilateralism.

Conclusion
India's position is legally sound but strategically costly. It should pair objections with its own proposals, such as restoring two-tier dispute settlement and a permanent solution on food stockholding.` },
  { id: 'm-1128-3', day: DAY, marks: 10, words: 150, directive: 'Discuss', question: 'India is a member of both the Quad and groupings such as the SCO and BRICS. Discuss whether this is a contradiction or an expression of strategic autonomy.', mustCover: ['Nature of Quad: not a military alliance', 'Nature of SCO and BRICS', 'Critics\' view of contradiction', 'Supporters\' view of autonomy', 'Examples of friction: terrorism, de-dollarisation, Pakistan\'s chair', 'Conclusion'], model: `Introduction
India sits in the Quad, which has no treaty and is not a military alliance, and also in the SCO and BRICS, where China and Russia are central. Critics see a contradiction, and supporters see autonomy.

The contradiction view
The Quad is shaped by concern over China, while the SCO and BRICS include China.
Pakistan's chairing of the SCO for 2026-27 creates a practical problem for India.
Partners may doubt India's reliability on either side.

The autonomy view
Each grouping serves a different purpose: critical minerals and maritime work in the Quad, security talks in the SCO, and a Global South voice in BRICS.
India shapes these bodies from inside. It rejects de-dollarisation as an aim, and it pressed for no double standards on terrorism at Bishkek.
Membership of these forums is not an alliance, so it carries no duty of mutual defence.

Conclusion
This is managed tension, not contradiction. India should stay issue-based, and it should use each forum for clear national goals.` },
]
