import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2027-01-24'
const S = 'Notes: Fiscal policy, budget, taxes and public debt'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-0124-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  y(2021, 3, 3, 'easy', 'application', 'Which among the following steps is most likely to be taken at the time of an economic recession?', null, null,
    ['Cut in tax rates accompanied by increase in interest rate', 'Increase in expenditure on public projects', 'Increase in tax rates accompanied by reduction of interest rate', 'Reduction of expenditure on public projects'], 1,
    'In a recession, the government\'s stabilising job is to support demand. Higher spending on public projects does this directly.',
    ['The higher interest rate would cut demand and work against the tax cut.', '', 'The higher tax rates would take away demand and work against the lower interest rate.', 'Cutting public spending reduces demand further and deepens a recession.'],
    'Fiscal stabilisation', 'Downturn: spend more or tax less, and do not raise rates.', 'UPSC set this in 2021 (Q3). Stabilisation is one of the three jobs of fiscal policy.', 'Notes: The big picture; UPSC GS Paper I 2021'),
  q(1, 'easy', 'factual', 'Which one of the following is a capital receipt that does not add to the government\'s debt?', null, null,
    ['Disinvestment proceeds', 'Market borrowing', 'Dividends from public sector enterprises', 'Goods and Services Tax collections'], 0,
    'Disinvestment reduces an asset, so it is a capital receipt, but it creates no liability. That is why it counts as non-debt and reduces the fiscal deficit.',
    ['', 'Market borrowing is a capital receipt, but it adds to debt.', 'Dividends are revenue receipts: they neither add a liability nor reduce an asset.', 'Taxes are revenue receipts, not capital receipts.'],
    'Non-debt capital receipts', 'Disinvestment and loan recoveries are non-debt capital receipts.', 'The note flags disinvestment as a common classification error.', 'Notes: The Budget, step by step'),
  q(2, 'easy', 'match', 'Consider the following pairs:', ['1. Article 112 : Annual Financial Statement', '2. Article 116 : Vote on account', '3. Article 267 : Consolidated Fund and Public Account'], 'How many of the above pairs are correctly matched?', COUNT, 1,
    'Pairs 1 and 2 are correct. Pair 3 is wrong: Article 266 covers the Consolidated Fund and Public Account, while Article 267 covers the Contingency Fund.',
    ['Pairs 1 and 2 are both correct, so more than one matches.', '', 'Pair 3 fails: Article 267 is the Contingency Fund.', 'Pairs 1 and 2 are correct, so "None" is wrong.'],
    'Budget articles', '266 Consolidated and Public Account; 267 Contingency Fund.', 'Article numbers in the financial provisions are directly tested.', 'Notes: Articles to know; Constitution of India, Arts 112, 116, 266, 267'),
  q(3, 'easy', 'statement', 'Which one of the following best describes indirect taxes such as GST?', null, null,
    ['They can be regressive, as poor households pay a higher share of their income', 'They are generally progressive, as rates rise with the buyer\'s income', 'They are paid only by the person on whom they are levied, and cannot be passed on', 'They are the same as income tax for a registered business'], 0,
    'Indirect taxes are passed on to consumers. Everyone pays the same rate on an item, so poor households pay a higher share of income.',
    ['', 'GST rates depend on the item, not on the income of the buyer, so they are not progressive in that way.', 'That describes a direct tax; indirect taxes are passed on to the consumer.', 'Income tax is a direct tax, so it is a separate levy from GST.'],
    'Direct and indirect taxes', 'Direct tends to be progressive; indirect can be regressive.', 'Equity of the tax mix is a staple of both Prelims and Mains.', 'Notes: Taxes'),
  q(4, 'easy', 'factual', 'Interest paid by the Centre on loans raised to build highways is classified as', null, null,
    ['revenue expenditure', 'capital expenditure', 'a non-debt capital receipt', 'effective capital expenditure'], 0,
    'Interest payment is always revenue expenditure, even when the loan financed a capital asset. It creates no asset and reduces no liability.',
    ['', 'Building the highway is capital expenditure, but the interest on the loan is not.', 'Interest is a payment made by the government, so it cannot be a receipt.', 'Effective capital expenditure adds grants for capital creation to capex; it excludes interest.'],
    'Interest as revenue spending', 'Interest is revenue expenditure, whatever the loan was for.', 'The note flags this as a common error.', 'Notes: The Budget, step by step'),
  q(5, 'easy', 'factual', 'The Goods and Services Tax was introduced under which Constitutional Amendment, and from which date?', null, null,
    ['101st Amendment, from 1 July 2017', '122nd Amendment, from 1 April 2017', '100th Amendment, from 1 July 2017', '103rd Amendment, from 22 September 2025'], 0,
    'GST came through the 101st Amendment and began on 1 July 2017. It is a destination-based tax.',
    ['', 'The Bill was numbered 122nd, but the enacted Amendment is the 101st, and the start date was 1 July.', 'The Amendment was the 101st, not the 100th.', '22 September 2025 is the date of GST 2.0; the original Amendment was the 101st.'],
    'GST origin', '101st Amendment, 1 July 2017, Article 279A Council.', 'The difference between Bill number and Amendment number is an old trap.', 'Notes: Taxes'),
  q(6, 'easy', 'multi-statement', 'Consider the following statements:', ['1. A Finance Commission is constituted under Article 280 every five years.', '2. The 16th Finance Commission was chaired by N.K. Singh.'], 'Which of the statements given above is/are correct?', BOTH, 0,
    'Statement 1 is correct. Statement 2 is wrong: Arvind Panagariya chaired the 16th Finance Commission. N.K. Singh headed the FRBM Review Committee of 2017.',
    ['', 'Statement 2 is the wrong one: the chair of the 16th Commission was Arvind Panagariya.', 'Statement 2 fails, as the chair was Arvind Panagariya.', 'Statement 1 is correct: Article 280 provides for the Commission.'],
    'Finance Commission basics', '16th FC: Arvind Panagariya, 2026-31.', 'Committee and chair confusion is a typical close distractor.', 'Notes: Finance Commission; Constitution of India, Art 280'),
  q(7, 'easy', 'factual', 'The idea that, beyond a point, higher tax rates can reduce tax revenue is associated with the', null, null,
    ['Laffer curve', 'Phillips curve', 'Base effect', 'Impossible trinity'], 0,
    'The Laffer curve shows that revenue can fall once tax rates rise beyond a point.',
    ['', 'The Phillips curve links unemployment and inflation, not tax rates and revenue.', 'The base effect concerns comparison with a low or high year-ago level.', 'The impossible trinity concerns exchange rates, capital flows and monetary policy.'],
    'Laffer curve', 'Very high rates can bring in less revenue.', 'A standard term used in debates on tax cuts and GST rationalisation.', 'Notes: Taxes'),

  // Moderate
  y(2021, 10, 7, 'moderate', 'statement', 'Which one of the following is likely to be the most inflationary in its effects?', null, null,
    ['Repayment of public debt', 'Borrowing from the public to finance a budget deficit', 'Borrowing from the banks to finance a budget deficit', 'Creation of new money to finance a budget deficit'], 3,
    'Creating new money adds directly to the money supply, without withdrawing purchasing power from anyone else. So it is the most inflationary route.',
    ['Repaying debt does not finance new spending, so it is the least likely to add to demand.', 'Borrowing from the public shifts existing purchasing power to the government.', 'Bank borrowing draws on existing funds, so it adds less than freshly created money.', ''],
    'Deficit financing and inflation', 'Printing money to fund a deficit is the most inflationary route.', 'UPSC set this in 2021 (Q10). The note lists inflation among the risks of borrowing.', 'Notes: Public debt; UPSC GS Paper I 2021'),
  y(2016, 12, 7, 'moderate', 'multi-statement', 'Which of the following is/are included in the capital budget of the Government of India?', ['1. Expenditure on acquisition of assets like roads, buildings, machinery, etc.', '2. Loans received from foreign governments', '3. Loans and advances granted to the States and Union Territories'], 'Select the correct answer using the code given below.',
    ['1 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 3,
    'All three pass the test. Assets and loans given are capital expenditure, and loans received are capital receipts that add a liability.',
    ['Items 2 and 3 are also capital: one creates a liability and the other creates an asset.', 'Item 1 is the clearest capital item, as it creates an asset.', 'Item 2 is also capital: a loan received adds a liability.', ''],
    'Capital budget', 'The test: does it create or reduce an asset or liability?', 'UPSC set this in 2016 (Q12).', 'Notes: The Budget, step by step; UPSC GS Paper I 2016'),
  y(2025, 61, 29, 'moderate', 'multi-statement', 'Suppose the revenue expenditure is ₹80,000 crores and the revenue receipts of the Government are ₹60,000 crores. The Government budget also shows borrowings of ₹10,000 crores and interest payments of ₹6,000 crores. Which of the following statements are correct?', ['I. Revenue deficit is ₹20,000 crores.', 'II. Fiscal deficit is ₹10,000 crores.', 'III. Primary deficit is ₹4,000 crores.'], 'Select the correct answer using the code given below.',
    ['I and II only', 'II and III only', 'I and III only', 'I, II and III'], 3,
    'Revenue deficit = 80,000 - 60,000 = 20,000. Fiscal deficit equals borrowing, 10,000. Primary deficit = 10,000 - 6,000 = 4,000. All three hold.',
    ['Statement III also holds: 10,000 - 6,000 = 4,000.', 'Statement I also holds: 80,000 - 60,000 = 20,000.', 'Statement II also holds: fiscal deficit equals the borrowing of 10,000.', ''],
    'Computing deficits', 'FD equals borrowing; PD = FD - interest.', 'UPSC set this in 2025 (Q61).', 'Notes: The Budget, step by step; UPSC GS Paper I 2025'),
  y(2025, 65, 29, 'moderate', 'application', 'A country\'s fiscal deficit stands at ₹50,000 crores. It is receiving ₹10,000 crores through non-debt creating capital receipts. The country\'s interest liabilities are ₹1,500 crores. What is the gross primary deficit?', null, null,
    ['₹48,500 crores', '₹51,500 crores', '₹58,500 crores', 'None of the above'], 0,
    'Primary deficit = fiscal deficit - interest = 50,000 - 1,500 = 48,500. Non-debt capital receipts are already netted out in arriving at the fiscal deficit, so they are a distractor.',
    ['', '51,500 adds interest when it should be subtracted.', '58,500 wrongly adds the non-debt receipts, which are already netted out of the fiscal deficit.', '48,500 is listed, so "None of the above" fails.'],
    'Primary deficit', 'Do not adjust non-debt receipts twice.', 'UPSC set this in 2025 (Q65).', 'Notes: The Budget, step by step; UPSC GS Paper I 2025'),
  y(2022, 10, 7, 'moderate', 'multi-statement', 'With reference to the Indian economy, consider the following statements :', ['1. A share of the household financial savings goes towards government borrowings.', '2. Dated securities issued at market-related rates in auctions form a large component of internal debt.'], 'Which of the above statements is/are correct ?', BOTH, 2,
    'Both are correct. Household savings reach the government through banks and other savers\' institutions that hold its securities. Auctioned dated securities are the main part of internal debt.',
    ['Statement 2 is also correct: dated securities are the main internal debt.', 'Statement 1 is also correct: banks and institutions invest household savings in government paper.', '', 'Both statements describe how India\'s domestic debt works.'],
    'Internal public debt', 'Household savings finance public debt through intermediaries.', 'UPSC set this in 2022 (Q10). It links to crowding out.', 'Notes: Public debt; UPSC GS Paper I 2022'),
  q(22, 'moderate', 'statement', 'Budget 2026-27 (BE) shows a revenue deficit of 1.5% of GDP alongside a fiscal deficit of 4.3%. What does the positive revenue deficit signify?', null, null,
    ['Part of the borrowing pays for day-to-day costs rather than for capital', 'All borrowing is being used to create capital assets', 'The government has no primary deficit', 'Revenue receipts are higher than revenue expenditure'], 0,
    'A revenue deficit means revenue expenditure exceeds revenue receipts. The gap must be met by borrowing, so that part of borrowing funds current costs.',
    ['', 'If all borrowing built assets, there would be no revenue deficit to finance.', 'The primary deficit is separate and was 0.7% of GDP in BE 2026-27.', 'That would be a revenue surplus, the opposite of a revenue deficit.'],
    'Reading the revenue deficit', 'Revenue deficit: borrowing is paying for current costs.', 'Reading deficits as messages is more useful than memorising the numbers.', 'Notes: The Budget, step by step; PRS, February 2026'),
  q(8, 'moderate', 'application', 'In a budget (Rs crore), revenue expenditure is 150, revenue receipts are 120, and grants for creating capital assets are 10. What is the effective revenue deficit?', null, null,
    ['20', '30', '40', '10'], 0,
    'Revenue deficit = 150 - 120 = 30. Effective revenue deficit = 30 - 10 = 20, as it removes grants that create capital assets.',
    ['', '30 is the plain revenue deficit: the grants have not been removed.', '40 adds the grants, when they should be subtracted.', '10 is only the amount of the grants, not the deficit.'],
    'Effective revenue deficit', 'ERD shows truly current spending: RD minus capital-creating grants.', 'Short deficit calculations are now a recognised question type.', 'Notes: The Budget, step by step'),
  q(9, 'moderate', 'application', 'A government starts with debt at 50% of GDP. Nominal GDP grows by 10%, and it runs a fiscal deficit of 3% of the new GDP. What is the debt ratio at the end of the year, approximately?', null, null,
    ['48.5%', '53%', '50%', '45.5%'], 0,
    'The old debt shrinks to 50 / 1.10 = 45.5% of the larger GDP. Adding the deficit of 3 gives about 48.5%. So the ratio falls despite a deficit.',
    ['', '53% adds the deficit but ignores the growth in GDP.', '50% assumes growth and the deficit cancel out exactly, which they do not here.', '45.5% allows for growth but forgets the new borrowing.'],
    'Debt dynamics', 'The ratio can fall with a deficit if nominal GDP grows fast enough.', 'The debt anchor makes this arithmetic central to current policy.', 'Notes: Public debt'),
  q(10, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. A tax buoyancy above 1 means that tax revenue grows faster than GDP.', '2. Tax elasticity measures the same response after removing the effect of tax rate changes.'], 'Which of the statements given above is/are correct?', BOTH, 2,
    'Both are correct. Buoyancy includes the effect of rate changes, while elasticity strips them out.',
    ['Statement 2 is also correct: elasticity removes tax rate changes.', 'Statement 1 is also correct: above 1 means taxes outgrow GDP.', '', 'Both statements are standard definitions in the note.'],
    'Buoyancy and elasticity', 'Buoyancy includes rate changes; elasticity excludes them.', 'A fine difference between two close terms.', 'Notes: Taxes'),
  q(11, 'moderate', 'multi-statement', 'With reference to GST as it stood in November 2026, consider the following statements:', ['1. The rationalised rates took effect on 22 September 2025.', '2. The main slabs are 5% and 18%, with 40% on demerit goods.', '3. GST is an origin-based tax, so revenue accrues to the producing State.'], 'How many of the above statements are correct?', COUNT, 1,
    'Statements 1 and 2 are correct. Statement 3 is wrong: GST is destination-based.',
    ['Statements 1 and 2 both hold, so more than one is correct.', '', 'Statement 3 fails, because GST is destination-based.', 'Statements 1 and 2 are correct, so "None" is wrong.'],
    'GST 2.0', '5, 18 and 40 since 22 September 2025; destination-based.', 'GST 2.0 is the biggest recent change to indirect tax.', 'Notes: Taxes'),
  q(12, 'moderate', 'assertion-reason', 'Statement I: States object to the Centre\'s growing use of cess and surcharge.\nStatement II: Cess and surcharge are not part of the divisible pool shared with States.', null, 'Which one of the following is correct?', SI, 0,
    'Both are correct. Because these levies stay outside the divisible pool, revenue raised through them is not shared, and that is why States object.',
    ['', 'II does explain I: staying out of the shared pool is the very ground of the objection.', 'II is correct: cess and surcharge are outside the divisible pool.', 'I is correct: the note records this objection by States.'],
    'Cess and federalism', 'Cess and surcharge shrink the shareable pool.', 'A key point in fiscal federalism debates.', 'Notes: Taxes; Exam guide'),
  q(13, 'moderate', 'match', 'Match List I with List II:', ['A. Dividends from public enterprises', 'B. Recovery of loans', 'C. Market borrowing', '1. Non-debt capital receipt', '2. Revenue receipt', '3. Debt capital receipt'], 'Select the correct answer:',
    ['A-1, B-2, C-3', 'A-2, B-1, C-3', 'A-2, B-3, C-1', 'A-3, B-1, C-2'], 1,
    'Dividends are revenue receipts. Loan recovery reduces an asset without adding debt. Borrowing adds a liability, so it is a debt capital receipt.',
    ['Dividends create no liability and reduce no asset, so they are revenue, not capital.', '', 'Recovery of a loan adds no debt, and borrowing is not non-debt.', 'Dividends do not add debt, so they cannot be debt capital receipts.'],
    'Classifying receipts', 'Ask: does it add a liability or reduce an asset?', 'The note warns that borrowing is not revenue and that recovery is non-debt.', 'Notes: The Budget, step by step'),
  q(14, 'moderate', 'current-static', 'With reference to India\'s fiscal rules as of November 2026, consider the following statements:', ['1. The 2018 text of the FRBM Act carries a fiscal deficit target of 3% of GDP by 31 March 2021.', '2. The same text carries debt limits of 60% for general government and 40% for the Centre by 31 March 2025.', '3. The current stated policy of the Centre is debt at 50 plus or minus 1% of GDP by 31 March 2031.'], 'How many of the above statements are correct?', COUNT, 2,
    'All three are correct, and they answer different questions. Statements 1 and 2 describe the statute, whose deadlines have passed. Statement 3 is the policy anchor of Budget 2026-27.',
    ['Statements 2 and 3 are also correct: the Act and the policy can both be stated.', 'All three hold; the anchor does not make the statutory text false.', '', 'Each statement is confirmed by the budget documents, so "None" is wrong.'],
    'Statute versus policy', '"The Act" means 2018 numbers; "current target" means the debt anchor.', 'The note warns that this exact distinction is a likely trap.', 'Notes: FRBM and the current fiscal targets; FRBM statements, Budget 2025-26; PIB, 1 February 2026'),
  q(15, 'moderate', 'multi-statement', 'With reference to the 16th Finance Commission, consider the following statements:', ['1. Grants are given for local bodies and disaster management.', '2. Revenue deficit grants continue, while sector-specific grants have ended.'], 'Which of the statements given above is/are correct?', BOTH, 0,
    'Statement 1 is correct. Statement 2 is wrong: revenue deficit, sector-specific and State-specific grants have all ended.',
    ['', 'Statement 2 fails: revenue deficit grants have also ended.', 'Statement 2 fails, as revenue deficit grants have also ended.', 'Statement 1 is correct: grants are for local bodies and disaster management.'],
    '16th FC grants', 'Only local body and disaster grants remain.', 'The end of revenue deficit grants matters most for weaker States.', 'Notes: Finance Commission; PRS Report Summary'),

  // Hard
  y(2018, 9, 7, 'hard', 'multi-statement', 'Consider the following statements :', ['1. The Fiscal Responsibility and Budget Management (FRBM) Review Committee Report has recommended a debt to GDP ratio of 60% for the general (combined) government by 2023, comprising 40% for the Central Government and 20% for the State Governments.', '2. The Central Government has domestic liabilities of 21% of GDP as compared to that of 49% of GDP of the State Governments.', '3. As per the Constitution of India, it is mandatory for a State to take the Central Government\'s consent for raising any loan if the former owes any outstanding liabilities to the latter.'], 'Which of the statements given above is/are correct ?',
    ['1 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 2,
    'Statement 1 is the N.K. Singh recommendation. Statement 3 follows Article 293. Statement 2 reverses the position, as the Centre\'s liabilities were the larger share.',
    ['Statement 3 is also correct under Article 293(3).', 'Statement 2 fails: it reverses the Centre and the States.', '', 'Statement 2 fails: it reverses the Centre and the States.'],
    'FRBM Review Committee', 'N.K. Singh: 60 = 40 Centre + 20 States, by 2023.', 'UPSC set this in 2018 (Q9).', 'Notes: FRBM and the current fiscal targets; Constitution of India, Art 293; UPSC GS Paper I 2018'),
  y(2025, 66, 31, 'hard', 'multi-statement', 'Which of the following statements with regard to recommendations of the 15th Finance Commission of India are correct?', ['I. It has recommended grants of ₹4,800 crores from the year 2022-23 to the year 2025-26 for incentivizing States to enhance educational outcomes.', 'II. 45% of the net proceeds of Union taxes are to be shared with States.', 'III. ₹45,000 crores are to be kept as performance-based incentive for all States for carrying out agricultural reforms.', 'IV. It reintroduced tax effort criteria to reward fiscal performance.'], 'Select the correct answer using the code given below.',
    ['I, II and III', 'I, II and IV', 'I, III and IV', 'II, III and IV'], 2,
    'Statement II is the false one: the 15th Commission\'s share was 41%, which the 16th has kept. Tax effort carried a 2.5% weight. Statements I and III are consistent with published summaries of its recommendations.',
    ['Statement II fails: the vertical share was 41%, not 45%.', 'Statement II fails: the vertical share was 41%, not 45%.', '', 'Statement II fails: the vertical share was 41%, not 45%.'],
    '15th FC recommendations', 'Vertical share 41%; 45% was the weight for income distance.', 'UPSC set this in 2025 (Q66). 45% is a tempting figure from the horizontal formula.', 'Notes: Finance Commission; published summaries of the 15th FC report checked for Statements I and III; UPSC GS Paper I 2025'),
  q(16, 'hard', 'statement', 'Compared with the 15th Finance Commission, the weight of which horizontal devolution criterion was increased by the 16th Finance Commission?', null, null,
    ['Population (2011)', 'Income distance', 'Area', 'Demographic performance'], 0,
    'Population (2011) rose from 15% to 17.5%. Income distance, area and demographic performance all fell.',
    ['', 'Income distance fell from 45% to 42.5%.', 'Area fell from 15% to 10%.', 'Demographic performance fell from 12.5% to 10%.'],
    '16th FC formula', 'Up: population. New: contribution to GDP. Gone: tax effort.', 'Changes in weights separate those who read the table from those who skimmed it.', 'Notes: Finance Commission; PRS Report Summary'),
  q(17, 'hard', 'assertion-reason', 'Statement I: The Centre\'s debt ratio can fall even while it runs a fiscal deficit.\nStatement II: A debt ratio falls whenever the interest rate exceeds nominal GDP growth.', null, 'Which one of the following is correct?', SI, 2,
    'Statement I is correct: 56.1 / 1.10 + 4.3 is about 55.3%, below 56.1%. Statement II is wrong: growth above the interest rate is what helps, not the other way round.',
    ['II is incorrect, so it cannot explain I: it reverses the g above r condition.', 'II is incorrect: an interest rate above growth makes the debt path harder.', '', 'I is correct: the worked example in the note shows the ratio falling with a deficit.'],
    'g above r', 'Debt dynamics improve when growth exceeds the interest rate.', 'Reversing the condition is the natural way to test this idea.', 'Notes: Public debt'),
  q(18, 'hard', 'multi-statement', 'Consider the following statements:', ['1. The primary deficit shows the gap in the budget without past interest.', '2. A primary surplus can exist even while the fiscal deficit is positive.', '3. Budget 2026-27 shows interest at about 40% of revenue receipts, which limits space for other spending.'], 'How many of the above statements are correct?', COUNT, 2,
    'All three are correct. If interest exceeds the fiscal deficit, the primary balance is in surplus. In BE 2026-27, interest of about Rs 14.04 lakh crore is about 40% of revenue receipts.',
    ['Statements 2 and 3 are also correct, so more than one holds.', 'All three hold, including the possibility of a primary surplus.', '', 'Each statement holds, so "None" is wrong.'],
    'Reading the primary deficit', 'PD strips out the legacy of past borrowing.', 'Reading deficits as messages is a skill both papers reward.', 'Notes: The Budget, step by step; PRS, February 2026'),
  q(19, 'hard', 'application', 'The Centre borrows heavily in the domestic market at a time when private firms also want to borrow. Which outcome is the most likely concern?', null, null,
    ['Crowding out, as higher yields can squeeze private borrowing', 'A fall in the debt ratio, as borrowing raises nominal GDP one for one', 'A rise in the divisible pool, as borrowing is shared with the States', 'A lower fiscal deficit, as borrowing is a capital receipt'], 0,
    'Large public borrowing competes for the same savings. It can push up yields and make borrowing costlier for private firms.',
    ['', 'Borrowing adds to debt, and it does not raise GDP one for one.', 'The divisible pool consists of Union taxes, not of borrowing.', 'The fiscal deficit is the very gap that borrowing finances; borrowing does not reduce it.'],
    'Crowding out', 'Public borrowing can raise yields and squeeze private credit.', 'Crowding out is the main argument on the cost side of the borrowing debate.', 'Notes: Public debt'),
  q(20, 'hard', 'multi-statement', 'Consider the following statements about the passage of the Union Budget:', ['1. The word "Budget" is used in Article 112 of the Constitution.', '2. Demands for Grants are voted by both Houses of Parliament.', '3. The Appropriation Bill carries the tax proposals of the Budget.'], 'How many of the above statements are correct?', COUNT, 3,
    'None is correct. Article 112 says Annual Financial Statement. Demands are voted only by the Lok Sabha. Tax proposals are in the Finance Bill, whereas the Appropriation Bill authorises spending.',
    ['No statement holds: all three misdescribe the procedure.', 'No two hold: Article 112 avoids the word, and demands go to the Lok Sabha alone.', 'All three are false, as each misstates the procedure.', ''],
    'Budget procedure', 'Annual Financial Statement; Lok Sabha votes demands; Finance Bill for taxes.', 'Procedural errors of this kind make strong elimination questions.', 'Notes: The Budget, step by step; Constitution of India, Arts 112, 113, 114'),
  q(21, 'hard', 'multi-statement', 'With reference to the new income tax regime (Budget 2025-26, unchanged in 2026-27), consider the following statements:', ['1. The basic exemption limit has been raised to Rs 12 lakh.', '2. A rebate means that no tax is payable on income up to Rs 12 lakh, though the nil slab extends only to Rs 4 lakh.'], 'Which of the statements given above is/are correct?', BOTH, 1,
    'Statement 2 is correct. Statement 1 is wrong: the nil slab ends at Rs 4 lakh, and zero tax up to Rs 12 lakh comes from a rebate.',
    ['Statement 1 fails: the nil slab is only up to Rs 4 lakh.', '', 'Statement 1 fails, as the rebate is not an exemption limit.', 'Statement 2 is correct: this is how the rebate works.'],
    'Slab versus rebate', 'Nil slab Rs 4 lakh; no tax up to Rs 12 lakh through rebate.', 'Rebate and exemption are often confused in popular reports.', 'Notes: Taxes'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-0124-1', day: DAY, marks: 10, words: 150, directive: 'Discuss', question: 'Discuss the shift in India\'s fiscal framework from deficit targets to a debt anchor, with its merits and risks.',
    mustCover: ['History: FRBM 2003, N.K. Singh Committee, 2018 amendment', 'The current anchor: 50 plus or minus 1% by 31 March 2031', 'Merit: clearer view of sustainability and flexibility', 'Risk: weaker yearly constraint and dependence on growth', 'Statute versus policy', 'Forward-looking conclusion'],
    model: `Introduction
The FRBM Act, 2003 set a path to reduce deficits. After the N.K. Singh Committee (2017), the 2018 amendment set a fiscal deficit of 3% and debt limits of 60% (general) and 40% (Centre). Budget 2026-27 moved the Centre to a debt anchor of 50 plus or minus 1% of GDP by 31 March 2031.

Merits
Debt is the ultimate test of sustainability.
It allows flexibility in shocks such as Covid.
It rewards growth: at 10% nominal growth, the ratio falls despite a deficit.

Risks
A multi-year goal is a weaker yearly constraint than a deficit target.
If nominal growth falls, the path gets harder.
Off-budget borrowing can hide true debt.
The statute still carries the 2018 numbers, so law and policy diverge.

Conclusion
The anchor needs an annual path that is published and monitored, along with an amended law. The Economic Survey's idea of a rule regime after 2031 is a useful direction.` },
  { id: 'm-0124-2', day: DAY, marks: 10, words: 150, directive: 'Examine', question: 'Examine how the recommendations of the 16th Finance Commission affect the balance between equity and efficiency in fiscal federalism.',
    mustCover: ['Article 280 and the 41% vertical share', 'Changes in horizontal weights', 'Efficiency argument for the GDP contribution criterion', 'Equity concern and end of revenue deficit grants', 'Cess and surcharge issue', 'Balanced conclusion'],
    model: `Introduction
Under Article 280, the 16th Finance Commission (Chair: Arvind Panagariya) covers 2026-31. It kept the States' share at 41% of the divisible pool, and the government accepted this.

Towards efficiency
A new criterion, contribution to GDP, carries 10%. Better-off States welcome it.
Income distance fell from 45% to 42.5%.
It advises stopping off-budget borrowing and privatising discoms.

Equity concerns
Income distance remains the largest criterion, so redistribution continues.
But revenue deficit, sector-specific and State-specific grants have ended, which hits weaker States.
Poorer States worry about the GDP criterion.
Tax and fiscal effort has been removed, which reduces the direct reward for own revenue.

The wider issue
Rising cess and surcharge stay outside the pool, so the effective share can be below 41%.

Conclusion
The formula leans moderately towards efficiency. Limits on cess use and targeted support to weak States would keep the federal bargain fair.` },
  { id: 'm-0124-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse', question: 'Fiscal consolidation is as much about the quality of spending as about the size of the deficit. Critically analyse with reference to Budget 2026-27.',
    mustCover: ['Meaning of fiscal consolidation and quality of spending', 'Deficit and debt data with BE label', 'Capex push and multiplier', 'Interest and committed spending burden', 'Revenue side and federal issues', 'Risks: crowding out, nominal growth, new GDP base; way forward'],
    model: `Introduction
Fiscal consolidation means reducing deficits and debt relative to GDP. Quality of spending asks what the money buys. Borrowing is not wrong in itself: it depends on whether it builds future capacity and can be serviced.

Size of the deficit (BE 2026-27)
Fiscal deficit 4.3%, revenue deficit 1.5% and primary deficit 0.7% of GDP.
Central debt 55.6%, on the path to 50 plus or minus 1% by March 2031.

Signs of better quality
Capital expenditure of Rs 12.22 lakh crore; effective capex of Rs 17.15 lakh crore, or 4.4% of GDP.
The capex multiplier exceeds that of revenue spending, and roads and ports raise future output.

Where quality is weak
Interest is 26% of total expenditure and 40% of revenue receipts, which squeezes health and education.
Salaries, pensions and interest take 65.3% of revenue receipts (PRS).
A revenue deficit means part of borrowing still pays for daily costs.
Subsidies need better targeting.

Limits of the argument
Revenue spending is not always poor: health, education and welfare build human capital.
Capex can face delays, and heavy borrowing can crowd out private investment.
The path depends on nominal growth, assumed at 10%. The new GDP base may also restate ratios.
States carry much of public spending, and off-budget borrowing hides true debt.

Conclusion
Consolidation should pair a credible debt path with better spending. Eliminating the revenue deficit over time, rationalising untargeted transfers and protecting social spending would make the debt anchor credible as well as growth-friendly.` },
]
