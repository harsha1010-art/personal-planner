import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2027-01-23'
const S = 'Notes: Money, banking, RBI and financial markets'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-0123-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  y(2021, 11, 7, 'easy', 'factual', 'The money multiplier in an economy increases with which one of the following?', null, null,
    ['Increase in the Cash Reserve Ratio in the banks', 'Increase in the Statutory Liquidity Ratio in the banks', 'Increase in the banking habit of the people', 'Increase in the population of the country'], 2,
    'When people keep more money in banks and less as cash, more of each rupee returns to the banks to be lent again, so the multiplier rises.',
    ['A higher CRR locks up more of each deposit, which lowers the multiplier.', 'A higher SLR also leaves less to lend, which lowers the multiplier.', '', 'Population size does not by itself change how much of each deposit is re-lent.'],
    'Money multiplier', 'Multiplier rises with banking habit and falls with higher reserves.', 'UPSC set this in 2021 (Q11), and a near-identical version in 2019 (Q90).', 'Notes: How banks create money; UPSC GS Paper I 2021'),
  q(1, 'easy', 'multi-statement', 'Consider the following statements:', ['1. The Cash Reserve Ratio is held by banks with the RBI and earns no interest.', '2. The Statutory Liquidity Ratio is held by the bank itself in liquid assets such as government securities.'], 'Which of the statements given above is/are correct?', BOTH, 2,
    'Both are correct. CRR is cash kept with RBI and earns nothing. SLR assets stay with the bank in forms such as government securities.',
    ['Statement 2 is also correct: SLR assets are kept by the bank itself.', 'Statement 1 is also correct: CRR is held with RBI.', '', 'Both statements correctly describe where each reserve is held.'],
    'CRR and SLR', 'CRR with RBI; SLR with the bank.', 'The note flags the location of the reserve as a recurring trap.', 'Notes: Current rates table and trap note'),
  q(2, 'easy', 'factual', 'Which one of the following rates forms the floor of the RBI\'s interest rate corridor?', null, null,
    ['Standing Deposit Facility rate', 'Marginal Standing Facility rate', 'Bank Rate', 'Fixed reverse repo rate'], 0,
    'Banks can park surplus funds with RBI at the SDF rate without collateral, so the SDF rate is the floor of the corridor.',
    ['', 'MSF is the ceiling of the corridor: emergency borrowing from RBI.', 'Bank Rate is aligned with MSF, so it sits at the top, not the floor.', 'The fixed reverse repo is no longer the floor; it is used at RBI\'s discretion.'],
    'Policy corridor', 'SDF is the floor; MSF is the ceiling; repo sits between them.', 'Replacement of the reverse repo as floor is a popular elimination trap.', 'Notes: Current rates table'),
  q(3, 'easy', 'factual', 'A loan becomes a Non-Performing Asset when interest or principal is overdue for more than', null, null,
    ['90 days', '30 days', '60 days', '180 days'], 0,
    'A loan is an NPA once interest or principal is overdue for more than 90 days.',
    ['', '30 days is well short of the 90-day NPA rule.', '60 days is still short of the 90-day NPA rule.', '180 days is longer than the 90-day NPA rule.'],
    'NPA definition', 'NPA: overdue more than 90 days.', 'Basic banking definition that anchors every bad-loan question.', 'Notes: Banks and the bad-loan problem'),
  q(4, 'easy', 'match', 'Consider the following pairs:', ['1. PFRDA : Insurance', '2. SEBI : Securities markets and mutual funds', '3. IFSCA : GIFT City International Financial Services Centre'], 'How many of the above pairs are correctly matched?', COUNT, 1,
    'Pairs 2 and 3 are correct. Pair 1 is wrong: PFRDA regulates pensions (NPS), and IRDAI regulates insurance.',
    ['Pairs 2 and 3 are both correct, so more than one pair matches.', '', 'Pair 1 fails: PFRDA regulates pensions, not insurance.', 'Pairs 2 and 3 are correct, so "None" is wrong.'],
    'Financial regulators', 'RBI banks, SEBI securities, IRDAI insurance, PFRDA pensions, IFSCA GIFT City.', 'Regulator mapping is a low-cost, frequent elimination question.', 'Notes: Financial markets'),
  q(5, 'easy', 'factual', 'The Monetary Policy Committee of India consists of', null, null,
    ['six members: three from RBI and three nominated by the Centre', 'six members, all from RBI', 'five members: three from RBI and two nominated by the Centre', 'seven members, with the Finance Secretary as chair'], 0,
    'The MPC has six members: three from RBI, including the Governor as chair, and three nominated by the Centre.',
    ['', 'Only three members are from RBI; the other three are nominated by the Centre.', 'The strength is six, not five.', 'The Governor chairs the MPC, and it has six members.'],
    'MPC composition', 'Six members, majority vote, Governor has a casting vote.', 'The institutional design of the MPC is a standard Prelims fact.', 'Notes: RBI and the monetary policy framework'),
  q(6, 'easy', 'match', 'Consider the following pairs:', ['1. SARFAESI Act, 2002 : Enforcing security', '2. Insolvency and Bankruptcy Code, 2016 : Time-bound resolution', '3. NARCL : Bad bank'], 'How many of the above pairs are correctly matched?', COUNT, 2,
    'All three are correct. These are the main instruments for dealing with bad loans.',
    ['Pairs 2 and 3 are also correct, so more than one matches.', 'All three match; none of them is wrongly described.', '', 'Each pair is correct, so "None" is wrong.'],
    'Bad-loan resolution', 'SARFAESI enforces, IBC resolves, NARCL aggregates.', 'A Mains answer on bank health should cite these together.', 'Notes: Banks and the bad-loan problem'),
  q(7, 'easy', 'factual', 'Under Priority Sector Lending, the target for domestic banks is what share of adjusted net bank credit?', null, null,
    ['40%', '18%', '25%', '60%'], 0,
    'Domestic banks must direct 40% of adjusted net bank credit to priority sectors such as agriculture, MSMEs and weaker sections.',
    ['', '18% is the SLR level as of 30 October 2026, not the priority sector target.', '25% is not the domestic bank target; the target is 40%.', '60% is the FRBM general government debt figure, not a lending target.'],
    'Priority Sector Lending', 'Domestic banks: 40% of adjusted net bank credit.', 'Credit direction is a stable, testable feature of the banking system.', 'Notes: Banks and the bad-loan problem'),

  // Moderate
  y(2020, 57, 25, 'moderate', 'multi-statement', 'If the RBI decides to adopt an expansionist monetary policy, which of the following would it not do ?', ['1. Cut and optimize the Statutory Liquidity Ratio', '2. Increase the Marginal Standing Facility Rate', '3. Cut the Bank Rate and Repo Rate'], 'Select the correct answer using the code given below :',
    ['1 and 2 only', '2 only', '1 and 3 only', '1, 2 and 3'], 1,
    'Raising the MSF rate makes emergency money dearer, which tightens. Cutting SLR, Bank Rate and repo all ease, so only item 2 would not be done.',
    ['Item 1 eases liquidity, so RBI would do it; only item 2 would be avoided.', '', 'Items 1 and 3 are easing moves that RBI would adopt, not avoid.', 'Items 1 and 3 are easing moves, so they do not belong in the list of what RBI would not do.'],
    'Expansionary policy', 'Cheaper or more plentiful money is expansionary.', 'UPSC set this in 2020 (Q57).', 'Notes: RBI and the monetary policy framework; UPSC GS Paper I 2020'),
  y(2023, 24, 11, 'moderate', 'factual', 'Which one of the following activities of the Reserve Bank of India is considered to be part of \'sterilization\'?', null, null,
    ['Conducting \'Open Market Operations\'', 'Oversight of settlement and payment systems', 'Debt and cash management for the Central and State Governments', 'Regulating the functions of Non-banking Financial Institutions'], 0,
    'Sterilization offsets the liquidity effect of flows such as forex intervention. RBI does this by buying or selling government securities, so Open Market Operations fit.',
    ['', 'Payment system oversight is a regulatory task and does not offset liquidity.', 'Debt management serves government borrowing and is not a liquidity offset in itself.', 'Regulating NBFCs is supervision and does not alter liquidity.'],
    'Sterilization and OMOs', 'OMOs and MSS absorb or inject liquidity to offset other flows.', 'UPSC set this in 2023 (Q24). It links the RBI and external sector notes.', 'Notes: RBI\'s tools; UPSC GS Paper I 2023'),
  y(2023, 25, 11, 'moderate', 'multi-statement', 'Consider the following markets :', ['1. Government Bond Market', '2. Call Money Market', '3. Treasury Bill Market', '4. Stock Market'], 'How many of the above are included in capital markets?',
    ['Only one', 'Only two', 'Only three', 'All four'], 1,
    'Government bonds and stocks are capital market instruments, with maturities above one year. Call money and Treasury bills belong to the money market.',
    ['Both government bonds and stocks are capital market items, so the count is two.', '', 'Treasury bills run up to 364 days, so they are money market; the count is only two.', 'Call money and Treasury bills are money market, so not all four qualify.'],
    'Money versus capital market', 'Up to one year is money market; over one year is capital market.', 'UPSC set this in 2023 (Q25).', 'Notes: Financial markets; UPSC GS Paper I 2023'),
  y(2018, 56, 25, 'moderate', 'multi-statement', 'Consider the following statements :', ['1. The Reserve Bank of India manages and services Government of India Securities but not any State Government Securities.', '2. Treasury bills are issued by the Government of India and there are no treasury bills issued by the State Governments.', '3. Treasury bills offer are issued at a discount from the par value.'], 'Which of the statements given above is/are correct ?',
    ['1 and 2 only', '3 only', '2 and 3 only', '1, 2 and 3'], 2,
    'Statements 2 and 3 are correct: only the Centre issues T-bills, and they are issued at a discount. Statement 1 is wrong because RBI also manages State Government securities.',
    ['Statement 1 fails: RBI also manages State Government securities.', 'Statement 2 is also correct: T-bills are issued only by the Centre.', '', 'Statement 1 fails: RBI manages State Government securities as well.'],
    'Treasury bills', 'T-bills: Centre only, up to 364 days, issued at discount.', 'UPSC set this in 2018 (Q56). The wording of statement 3 is as printed in the paper.', 'Notes: Financial markets; UPSC GS Paper I 2018'),
  y(2016, 4, 3, 'moderate', 'multi-statement', 'The establishment of \'Payment Banks\' is being allowed in India to promote financial inclusion. Which of the following statements is/are correct in this context?', ['1. Mobile telephone companies and supermarket chains that are owned and controlled by residents are eligible to be promoters of Payment Banks.', '2. Payment Banks can issue both credit cards and debit cards.', '3. Payment Banks cannot undertake lending activities.'], 'Select the correct answer using the code given below.',
    ['1 and 2 only', '1 and 3 only', '2 only', '1, 2 and 3'], 1,
    'Statements 1 and 3 are correct. Payments banks take small deposits and offer payments, but they cannot lend, so they cannot issue credit cards. Statement 2 fails.',
    ['Statement 2 fails: a credit card is a form of lending, which payments banks cannot do.', '', 'Statement 2 is the false one; statements 1 and 3 are the correct ones.', 'Statement 2 fails: payments banks cannot lend, so credit cards are ruled out.'],
    'Payments banks', 'Payments banks: deposits and payments yes, loans no.', 'UPSC set this in 2016 (Q4).', 'Notes: Banks and the bad-loan problem; UPSC GS Paper I 2016'),
  y(2023, 22, 9, 'moderate', 'assertion-reason', 'Consider the following statements :\nStatement-I :\nIn the post-pandemic recent past, many Central Banks worldwide had carried out interest rate hikes.\nStatement-II :\nCentral Banks generally assume that they have the ability to counteract the rising consumer prices via monetary policy means.', null, 'Which one of the following is correct in respect of the above statements?',
    ['Both Statement-I and Statement-II are correct and Statement-II is the correct explanation for Statement-I', 'Both Statement-I and Statement-II are correct and Statement-II is not the correct explanation for Statement-I', 'Statement-I is correct but Statement-II is incorrect', 'Statement-I is incorrect but Statement-II is correct'], 0,
    'Many central banks raised rates after the pandemic because they treat higher rates as a way to cool rising consumer prices. So II explains I.',
    ['', 'II does explain I: the belief in monetary policy is why they raised rates.', 'II is correct: inflation targeting rests on that assumption.', 'I is correct: RBI itself raised repo to 6.50% by February 2023 in such a cycle.'],
    'Why central banks hike', 'Rate hikes rest on the belief that dearer money cools prices.', 'UPSC set this in 2023 (Q22).', 'Notes: How a repo rate change moves through the economy; UPSC GS Paper I 2023'),
  y(2022, 5, 5, 'moderate', 'multi-statement', 'With reference to the Indian economy, what are the advantages of "Inflation-Indexed Bonds (IIBs)" ?', ['1. Government can reduce the coupon rates on its borrowing by way of IIBs.', '2. IIBs provide protection to the investors from uncertainty regarding inflation.', '3. The interest received as well as capital gains on IIBs are not taxable.'], 'Which of the statements given above are correct ?',
    ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 0,
    'Investors accept a lower coupon because inflation risk is removed, so statements 1 and 2 hold. IIBs carry no blanket tax exemption, so statement 3 fails.',
    ['', 'Statement 3 fails: IIBs have no general tax exemption, and statement 1 has been wrongly dropped.', 'Statement 3 fails: IIBs have no general tax exemption.', 'Statement 3 fails: IIBs have no general tax exemption.'],
    'Inflation-Indexed Bonds', 'IIBs protect investors from inflation risk; they are not tax-free.', 'UPSC set this in 2022 (Q5).', 'Notes: Financial markets; UPSC GS Paper I 2022'),
  q(8, 'moderate', 'application', 'Suppose banks must keep 20% of every deposit as reserves and nobody holds cash. Starting from a fresh deposit of Rs 100, what do total deposits reach in the limit?', null, null,
    ['Rs 500', 'Rs 400', 'Rs 120', 'Rs 80'], 0,
    'The simple multiplier is 1 / 0.20 = 5. Total deposits reach Rs 500, of which Rs 100 is held as reserves and Rs 400 is lent.',
    ['', 'Rs 400 is total new loans in the limit, not total deposits.', 'Rs 120 adds one round of reserves and ignores the repeated re-lending.', 'Rs 80 is only the first loan out of the deposit.'],
    'Credit multiplier', 'Simple multiplier = 1 / reserve ratio; real multipliers are smaller.', 'Short calculations test whether the logic of money creation is clear.', 'Notes: How banks create money'),
  q(9, 'moderate', 'multi-statement', 'Consider the following statements about money aggregates:', ['1. M0 includes bankers\' deposits with the RBI.', '2. M3 equals M1 plus time deposits with banks.', '3. M1 is more liquid than M3.'], 'How many of the above statements are correct?', COUNT, 2,
    'All three are correct. M0 is currency in circulation plus bankers\' and other deposits with RBI. M3 adds time deposits to M1, which makes it broader and less liquid than M1.',
    ['Statements 2 and 3 are also correct, so more than one holds.', 'All three hold; none misstates the aggregates.', '', 'Each statement correctly describes an aggregate, so "None" is wrong.'],
    'Money aggregates', 'M1 is narrow and liquid; M3 is broad; M0 is the base.', 'Aggregates are often asked, as in composition or liquidity ranking.', 'Notes: How banks create money'),
  q(10, 'moderate', 'chronology', 'Arrange the steps of a repo rate hike\'s transmission in their usual order:', ['1. Banks reprice external-benchmark loans', '2. Call, T-bill, CP and CD rates rise', '3. Consumption and investment slow', '4. Overnight money becomes dearer'], 'Select the correct order:',
    ['4-2-1-3', '2-4-1-3', '4-1-2-3', '1-4-2-3'], 0,
    'Overnight money gets dearer first. Money market rates follow, banks then reprice loans, and finally borrowers cut spending.',
    ['', 'Money market rates respond to dearer overnight money, so 4 comes before 2.', 'Banks reprice after money market rates move, so 2 comes before 1.', 'Banks cannot reprice before overnight rates have moved.'],
    'Monetary transmission', 'RBI to money market to banks to borrowers to prices.', 'The chain supplies the structure for any Mains answer on transmission.', 'Notes: How a repo rate change moves through the economy'),
  q(11, 'moderate', 'application', 'A perpetual bond pays Rs 6 a year on a face value of Rs 100. If market rates rise to 8%, the price at which it would trade is about', null, null,
    ['Rs 75', 'Rs 100', 'Rs 133', 'Rs 92'], 0,
    'Price = annual payment / market rate = 6 / 0.08 = Rs 75. When yields rise, prices of existing bonds fall.',
    ['', 'Rs 100 ignores the rise in market rates: at 6% on Rs 100, the bond no longer competes with an 8% return.', 'Rs 133 reverses the ratio (8 / 6); the price falls rather than rises.', 'Rs 92 subtracts the 8% from the face value, which is not how the price is set.'],
    'Bond price and yield', 'Yield up, price down.', 'Explains why a rate hike hurts existing bond holders, including banks.', 'Notes: Financial markets'),
  q(12, 'moderate', 'multi-statement', 'Consider the following statements about India\'s inflation targeting framework:', ['1. The notified target for 1 April 2026 to 31 March 2031 is 4%, with 2% lower and 6% upper tolerance.', '2. If average CPI inflation is outside the band for three consecutive quarters, RBI must explain to the government and propose remedies.', '3. The target is notified by the RBI on the advice of the MPC.'], 'How many of the above statements are correct?', COUNT, 1,
    'Statements 1 and 2 are correct. Statement 3 is wrong because the government notified the target (25 March 2026).',
    ['Statements 1 and 2 both hold, so more than one is correct.', '', 'Statement 3 fails: the government notifies the target, not RBI.', 'Statements 1 and 2 are confirmed by the framework, so "None" is wrong.'],
    'Inflation targeting framework', 'Government sets the target; MPC sets the rate; RBI answers for a miss.', 'Renewal of the target in 2026 makes the framework topical.', 'Notes: RBI and the monetary policy framework; Gazette notification, 25 March 2026'),
  q(13, 'moderate', 'multi-statement', 'Consider the following actions by the RBI:', ['1. Selling government securities through Open Market Operations', '2. Raising the Cash Reserve Ratio', '3. Issuing more securities under the Market Stabilisation Scheme'], 'How many of the above actions would ease liquidity in the banking system?', COUNT, 3,
    'None eases liquidity. Selling securities and issuing MSS paper draw cash from the system, and a higher CRR locks more cash up.',
    ['No action eases: each of the three absorbs or locks up cash.', 'No two ease: OMO sales and MSS issues absorb cash, and a higher CRR locks it up.', 'All three tighten liquidity rather than ease it.', ''],
    'Liquidity tools', 'Sales and locks tighten; purchases and cuts ease.', 'Direction of a tool is the commonest test of monetary policy.', 'Notes: RBI\'s tools'),
  q(14, 'moderate', 'match', 'Match List I with List II:', ['A. Regional Rural Banks', 'B. Small finance banks', 'C. NBFCs', '1. Owned by the Centre, a sponsor bank and the State', '2. Lend mainly to small borrowers and the unbanked', '3. Lend, but cannot take demand deposits or issue cheques'], 'Select the correct answer:',
    ['A-1, B-2, C-3', 'A-2, B-1, C-3', 'A-3, B-2, C-1', 'A-1, B-3, C-2'], 0,
    'RRBs have shared ownership and a rural focus. Small finance banks serve small borrowers and the unbanked. NBFCs lend but stay outside the payment system.',
    ['', 'RRBs, not small finance banks, are the ones with Centre, sponsor bank and State ownership.', 'NBFCs are not owned by the Centre, a sponsor and a State; RRBs are.', 'Small finance banks are banks, so the demand deposit bar applies to NBFCs and not to them.'],
    'Types of banks', 'Who owns, who lends and who takes deposits separate these institutions.', 'Differentiated banks are a steady source of statement questions.', 'Notes: Banks and the bad-loan problem'),

  // Hard
  y(2024, 53, 23, 'hard', 'multi-statement', 'Consider the following statements in respect of the digital rupee :', ['1. It is a sovereign currency issued by the Reserve Bank of India (RBI) in alignment with its monetary policy.', '2. It appears as a liability on the RBI\'s balance sheet.', '3. It is insured against inflation by its very design.', '4. It is freely convertible against commercial bank money and cash.'], 'Which of the statements given above are correct ?',
    ['1 and 2 only', '1 and 3 only', '2 and 4 only', '1, 2 and 4'], 3,
    'The digital rupee is a sovereign liability of RBI, convertible with cash and bank money. Like cash, it carries no protection against inflation, so statement 3 fails.',
    ['Statement 4 is also correct: RBI\'s concept note describes free convertibility with cash and bank money.', 'Statement 3 fails: like cash, it loses value when prices rise.', 'Statement 1 is also correct: it is a sovereign currency issued by RBI.', ''],
    'e-Rupee', 'e-Rupee is digital cash: an RBI liability, with no inflation shield.', 'UPSC set this in 2024 (Q53).', 'Notes: Financial markets; RBI Concept Note on CBDC, October 2022; UPSC GS Paper I 2024'),
  y(2020, 70, 31, 'hard', 'multi-statement', 'With reference to the Indian economy, consider the following statements :', ['1. \'Commercial Paper\' is a short-term unsecured promissory note.', '2. \'Certificate of Deposit\' is a long-term instrument issued by the Reserve Bank of India to a corporation.', '3. \'Call Money\' is a short-term finance used for interbank transactions.', '4. \'Zero-Coupon Bonds\' are the interest bearing short-term bonds issued by the Scheduled Commercial Banks to corporations.'], 'Which of the statements given above is/are correct ?',
    ['1 and 2 only', '4 only', '1 and 3 only', '2, 3 and 4 only'], 2,
    'CP is a short-term unsecured note, and call money is overnight or short-term interbank money. CDs are short-term bank instruments, and zero-coupon bonds pay no coupon.',
    ['Statement 2 fails: a CD is a short-term instrument issued by banks, not a long-term RBI one.', 'Statement 4 fails: a zero-coupon bond by definition pays no periodic interest.', '', 'Statements 2 and 4 fail, as they misdescribe the issuer and the nature of the instruments.'],
    'Money market instruments', 'CP companies, CD banks, call money between banks.', 'UPSC set this in 2020 (Q70).', 'Notes: Financial markets; UPSC GS Paper I 2020'),
  q(15, 'hard', 'assertion-reason', 'Statement I: As of 30 October 2026, the Bank Rate is above the repo rate.\nStatement II: The Bank Rate is the rate at which the RBI lends overnight to banks against government securities.', null, 'Which one of the following is correct?', SI, 2,
    'Statement I is correct: Bank Rate is 5.75% against repo at 5.50%, because it moves with the MSF. Statement II is wrong: that description fits the repo rate.',
    ['II is incorrect, so it cannot explain I: overnight lending against securities is the repo.', 'II is incorrect: it describes the repo rate, whereas Bank Rate is a long-term rediscount rate.', '', 'I is correct as of that date: 5.75% against 5.50%.'],
    'Bank Rate versus repo', 'Bank Rate moves with MSF, not repo.', 'The note flags this mix-up as a standing trap.', 'Notes: Current rates table, as of 30 October 2026'),
  q(16, 'hard', 'assertion-reason', 'Statement I: External-benchmark floating loans adjust to a repo change faster than fixed-rate loans.\nStatement II: Deposit rates tend to rise more slowly than rates on external-benchmark loans.', null, 'Which one of the following is correct?', SI, 1,
    'Both are correct. I is about the reset clause in floating loans. II is about the deposit side of the bank\'s balance sheet, so it does not explain I.',
    ['II does not explain I: the speed of loan resets comes from the benchmark clause, not from deposit behaviour.', '', 'II is also correct: the note lists slow deposit rate adjustment as a limit of transmission.', 'I is correct: floating loans linked to an external benchmark since October 2019 reset quickly.'],
    'Limits of transmission', 'Loans reprice fast if linked; deposits lag.', 'A close Statement I / II pair: both true, but related only loosely.', 'Notes: How a repo rate change moves through the economy'),
  q(17, 'hard', 'application', 'A bank sharply raises its provisions against existing bad loans. Its gross bad loans and total advances are otherwise unchanged. What happens to its GNPA and NNPA ratios?', null, null,
    ['NNPA falls; GNPA is unchanged', 'GNPA falls; NNPA is unchanged', 'Both fall equally', 'Both rise, because provisions are a cost'], 0,
    'GNPA is measured before provisions and NNPA after. More provisions reduce the net figure and leave the gross one where it was.',
    ['', 'GNPA is before provisions, so it does not move with higher provisioning.', 'Only the net measure deducts provisions, so the two cannot fall equally.', 'Provisions hit profit, but they do not raise either ratio.'],
    'GNPA and NNPA', 'Provisions move NNPA, not GNPA.', 'Application tests whether the reader knows what each ratio measures.', 'Notes: Banks and the bad-loan problem'),
  q(18, 'hard', 'match', 'Consider the following pairs:', ['1. Cash Reserve Ratio : Section 42 of the RBI Act', '2. Statutory Liquidity Ratio : Section 42 of the RBI Act', '3. Monetary Policy Committee : Section 45ZA of the RBI Act'], 'How many of the above pairs are correctly matched?', COUNT, 0,
    'Only pair 1 is correct. SLR falls under Section 24 of the Banking Regulation Act. The MPC is under Section 45ZB; Section 45ZA covers the inflation target.',
    ['', 'Pairs 2 and 3 both fail: SLR is under Section 24 of the Banking Regulation Act, and MPC is under 45ZB.', 'Pairs 2 and 3 fail, as SLR and MPC sit under different provisions.', 'Pair 1 is correct: CRR falls under Section 42 of the RBI Act.'],
    'Statutory basis', 'CRR 42 RBI Act; SLR 24 BR Act; target 45ZA; MPC 45ZB.', 'Fine statutory distinctions are typical of harder elimination questions.', 'Notes: Current rates trap note; RBI and the monetary policy framework'),
  q(19, 'hard', 'multi-statement', 'With reference to the RBI\'s monetary policy decision of 7 October 2026, consider the following statements:', ['1. It was the first hike in the repo rate since February 2023.', '2. The MPC was unanimous on both the rate hike and the change of stance.', '3. RBI projected CPI inflation at 6.0% for Q3 of 2026-27.'], 'How many of the above statements are correct?', COUNT, 1,
    'Statements 1 and 3 are correct. Statement 2 is wrong: the vote on the rate was 6-0, but two members preferred a neutral stance.',
    ['Statements 1 and 3 both hold, so the count is more than one.', '', 'Statement 2 fails: two members preferred a neutral stance.', 'Statements 1 and 3 are in the RBI statement of 7 October 2026.'],
    'October 2026 policy', 'Rate vote 6-0; stance split; calibrated tightening.', 'Vote and stance can differ, which is a good test on a recent decision.', 'Notes: How a repo rate change moves; RBI Monetary Policy Statement, 7 October 2026'),
  q(20, 'hard', 'statement', 'Which one of the following is not a reason why a repo rate change may transmit weakly to inflation?', null, null,
    ['External-benchmark floating loans reset quickly after a repo change', 'Food and fuel inflation can be driven by supply shocks', 'Surplus liquidity can keep market rates below the repo rate', 'Fixed-rate loans and deposit rates adjust slowly'], 0,
    'Quick resets of external-benchmark loans are a reason transmission works. The other three are recognised limits.',
    ['', 'Supply-driven food and fuel prices do weaken the effect, as rate hikes cannot fix a supply shock.', 'Surplus liquidity does weaken the effect, by keeping money market rates low.', 'Slow-moving loan and deposit rates do delay the effect.'],
    'Transmission limits', 'Fast resets help transmission; supply shocks, liquidity and sticky rates hurt it.', 'The negative wording forces the candidate to separate both sides of the debate.', 'Notes: How a repo rate change moves through the economy'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-0123-1', day: DAY, marks: 10, words: 150, directive: 'Examine', question: 'Examine the channels through which a repo rate change affects the Indian economy, and the limits of this transmission.',
    mustCover: ['Definition of repo and the monetary policy aim', 'The sequence from money market to banks to borrowers', 'Other channels: exchange rate, bond yields, expectations', 'Limits: supply shocks, sticky deposit rates, surplus liquidity, government borrowing', 'Recent example of October 2026', 'Way forward'],
    model: `Introduction
The repo rate is the rate at which RBI lends overnight to banks. By steering it, RBI seeks to keep inflation near target while supporting growth. The hike of 7 October 2026, from 5.25% to 5.50%, shows the chain.

Channels
Interest rate: call, T-bill, CP and CD rates rise; external-benchmark loans reset; EMIs rise; consumption and investment slow.
Exchange rate: higher rates can attract foreign money and support the rupee.
Asset prices: bond yields rise and bond prices fall.
Expectations: a credible RBI can cool wage and price setting.

Limits
Food and fuel inflation is often supply-driven.
Deposit rates and fixed-rate loans adjust slowly.
Surplus liquidity can keep market rates below repo.
Large government borrowing affects yields.
Effects arrive after several quarters.

Conclusion
Transmission works best with liquidity aligned to the stance, wider benchmark-linked lending and supply-side action on food. Monetary policy cannot do this alone.` },
  { id: 'm-0123-2', day: DAY, marks: 10, words: 150, directive: 'Comment', question: 'India\'s banks show record low bad loans, yet this strength should not breed complacency. Comment.',
    mustCover: ['Meaning of GNPA, NNPA and CRAR', 'Latest data with date', 'What brought the improvement: IBC, SARFAESI, NARCL, PCA', 'Risks: rapid credit growth, unsecured lending', 'Forward-looking measures'],
    model: `Introduction
A loan overdue beyond 90 days is an NPA. GNPA is measured before provisions and NNPA after them. CRAR, capital over risk-weighted assets, is the cushion against loss under the Basel framework.

The strength
At March 2026, GNPA was 1.73% and NNPA 0.40%, against 2.22% and 0.50% a year earlier. CRAR was 17.7% and CET1 15.3% (RBI FSR, June 2026).
The resolution framework helped: SARFAESI, the Insolvency and Bankruptcy Code, NARCL and Prompt Corrective Action.

Why caution is needed
Bank credit grew 18.1% on 15 September 2026, and RBI flagged risks from strong money and credit growth.
Unsecured lending can turn bad quickly.
Rate hikes and a West Asia shock raise repayment stress.
Bad loans lag lending, so today's ratios reflect old credit.

Conclusion
Good times are the time to strengthen buffers. Stress tests, close watch on unsecured retail lending and steady supervision will keep this gain.` },
  { id: 'm-0123-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse', question: 'Critically analyse the performance of flexible inflation targeting in India. Should food inflation be excluded from the target?',
    mustCover: ['Legal framework: Urjit Patel Committee, Sections 45ZA, 45ZB, MPC, 4% with 2-6 band', 'Achievements: credibility, anchored expectations, lower average inflation', 'Criticism: supply shocks, growth and jobs costs, the 2022 miss', 'Food exclusion: both sides, with the new CPI weights', 'Reasoned position', 'Forward-looking conclusion'],
    model: `Introduction
Flexible inflation targeting asks the central bank to aim at an inflation number while keeping an eye on growth. Following the Urjit Patel Committee (2014), the RBI Act was amended in 2016: Section 45ZA provides for the target and 45ZB for the MPC. On 25 March 2026, the 4% target with a 2-6% band was renewed to 31 March 2031.

What it achieved
A credible anchor for expectations, with lower average inflation than before 2016.
Transparency: published minutes, a rule-based vote, and accountability.
Space to respond: CPI averaged only 1.7% in April-December 2025, which allowed cuts to 5.25%.

Where it falls short
Supply shocks lie beyond RBI's control. September 2026 inflation of 5.54% was led by food at 7.74%.
RBI missed the band for three consecutive quarters and reported to the government in November 2022.
Growth and jobs may suffer when policy tightens against shocks it cannot fix.

Should food be excluded?
For exclusion: rate hikes do not bring rain or onions, and core measures lasting pressure better (4.2% in August 2026).
Against: food still has the largest weight, at about 37%. Poor households spend most on food, and persistent food inflation can spill into wages and expectations. A target that ignores it loses credibility with the public.

A reasoned view
Keep headline CPI as the target, while using core as an analytical guide. The band already gives room to look through temporary shocks.

Conclusion
The framework should stay. Better supply management of food, storage and imports will reduce the burden on interest rates.` },
]
