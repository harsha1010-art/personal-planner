import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2027-01-22'
const S = 'Notes: National income, inflation and development'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-0122-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  y(2018, 48, 21, 'easy', 'statement', 'Increase in absolute and per capita real GNP do not connote a higher level of economic development, if', null, null,
    ['industrial output fails to keep pace with agricultural output.', 'agricultural output fails to keep pace with industrial output.', 'poverty and unemployment increase.', 'imports grow faster than exports.'], 2,
    'Development asks whether people live better. If poverty and unemployment rise while real GNP rises, output has grown but lives have not improved, so growth has not become development.',
    ['A change in the balance between sectors can occur during development and does not by itself show that lives worsened.', 'Industry outpacing agriculture is normal structural change, not proof of absent development.', '', 'A wider trade gap is a balance of payments matter and may even reflect imports of machinery.'],
    'Growth versus development', 'Output can rise while poverty and joblessness worsen: that is growth without development.', 'UPSC set this in 2018 (Q48) to test the line between growth and development.', 'Notes: Growth and development; UPSC GS Paper I 2018'),
  q(1, 'easy', 'application', 'A Korean-owned car plant in Tamil Nadu produces cars worth Rs 500 crore of value added in a year. In which aggregate is this value added counted because of its location?', null, null,
    ['India\'s Gross Domestic Product', 'South Korea\'s Gross Domestic Product', 'India\'s net factor income from abroad', 'Neither country\'s GDP, as ownership and location differ'], 0,
    'GDP is about domestic territory, not the owner. Production inside India counts in India\'s GDP, whoever owns the plant.',
    ['', 'South Korea\'s GDP covers production inside South Korea; this plant is in India.', 'Net factor income records factor incomes crossing borders; it is not where output by location is counted.', 'GDP needs only production within the territory, so ownership does not remove it from GDP.'],
    'Domestic means territory', 'Domestic is location; national is residents.', 'The domestic and national distinction is a basic source of error in national income questions.', 'Notes: GDP and its relatives'),
  q(2, 'easy', 'factual', 'Which one of the following is not counted in India\'s GDP?', null, null,
    ['A monthly government pension received by a retired clerk', 'A haircut bought at a local salon', 'A new tractor made in Punjab and sold to a farmer', 'Software services produced in Bengaluru and sold abroad'], 0,
    'GDP counts final goods and services produced. A pension is a pure transfer: money moves but nothing is produced in return.',
    ['', 'A haircut is a final service produced in India, so it counts.', 'A new tractor is a final good, as machinery is not used up within the year, and it is produced in India.', 'Exports are domestic production, so they count; only the buyer is abroad.'],
    'Transfers excluded from GDP', 'Produced is the test: transfers and second-hand sales stay out.', 'Three words in the GDP definition (final, domestic, produced) generate most conceptual traps.', 'Notes: GDP and its relatives'),
  q(3, 'easy', 'current-static', 'As of November 2026, the official GDP series of India uses which base year, and which earlier base did it replace?', null, null,
    ['2022-23, replacing 2011-12', '2011-12, replacing 2004-05', '2024, replacing 2012', '2020-21, replacing 2011-12'], 0,
    'MoSPI released the new series on 27 February 2026 with base 2022-23, replacing 2011-12.',
    ['', '2011-12 is the old base that was replaced in February 2026, so it is no longer current.', '2024 replacing 2012 describes the CPI rebasing, not the GDP series.', 'MoSPI picked 2022-23 as a recent normal year after Covid, not 2020-21.'],
    'GDP base year', 'GDP base is 2022-23; CPI base is 2024; WPI base is 2022-23.', 'Three rebasings in 2026 make base years an easy current-static question.', 'Notes: The new GDP series; MoSPI press note, 27 February 2026'),
  q(4, 'easy', 'match', 'Consider the following pairs:', ['1. Disinflation : Inflation is falling, but prices are still rising', '2. Deflation : The general price level is falling', '3. Reflation : Deliberate policy to reverse deflation'], 'How many of the above pairs are correctly matched?', COUNT, 2,
    'All three are correct definitions. Disinflation is a lower positive rate, deflation is a falling price level, and reflation is the policy response to deflation.',
    ['Pairs 2 and 3 are also correct, so more than one pair matches.', 'All three match; no pair among them is wrongly defined.', '', 'Each pair states the standard definition, so "None" cannot hold.'],
    'Inflation terms', 'Falling inflation is not falling prices.', 'These look-alike terms are classic close distractors.', 'Notes: Inflation from the ground up'),
  q(5, 'easy', 'factual', 'Which one of the following is not a dimension of the Human Development Index of UNDP?', null, null,
    ['Environmental sustainability', 'A long and healthy life', 'Knowledge', 'A decent standard of living'], 0,
    'The HDI has three dimensions: a long and healthy life, knowledge, and a decent standard of living. Environmental sustainability is not one of them.',
    ['', 'A long and healthy life is one of the three HDI dimensions.', 'Knowledge is one of the three HDI dimensions.', 'A decent standard of living is one of the three HDI dimensions.'],
    'HDI dimensions', 'HDI equals health, knowledge and living standard.', 'HDI is the standard measure of development set against GDP.', 'Notes: Growth and development'),
  q(6, 'easy', 'current-static', 'As of November 2026, the base year of the Consumer Price Index series first released on 12 February 2026 is', null, null,
    ['2024', '2012', '2022-23', '2011-12'], 0,
    'The new CPI series has 2024 = 100. It was first released on 12 February 2026 with January 2026 data.',
    ['', '2012 was the base of the old CPI series, which this one replaced.', '2022-23 is the base of the new GDP and WPI series, not CPI.', '2011-12 was the old GDP base, not a CPI base.'],
    'CPI base year', 'CPI alone among the three has a calendar-year base, 2024.', 'The three new bases are easily mixed up.', 'Notes: Inflation from the ground up; PIB on CPI base revision'),
  q(7, 'easy', 'application', 'Inflation turns out to be much higher than anyone expected. Who is most likely to gain from this?', null, null,
    ['A borrower repaying a fixed-rate loan', 'A pensioner on a fixed monthly pension', 'A saver with a fixed deposit paying less than inflation', 'A worker on a fixed wage'], 0,
    'The borrower repays a fixed amount in money that now buys less, so the real burden of the debt falls.',
    ['', 'A fixed pension buys less as prices rise, so the pensioner loses.', 'If the deposit rate is below inflation, the saver\'s real return is negative.', 'A fixed wage loses purchasing power when prices rise.'],
    'Winners and losers of inflation', 'Unexpected inflation moves real wealth from lenders to borrowers.', 'Distributional effects of inflation link Prelims logic to Mains arguments.', 'Notes: Inflation from the ground up'),

  // Moderate
  y(2020, 67, 29, 'moderate', 'multi-statement', 'Consider the following statements :', ['1. The weightage of food in Consumer Price Index (CPI) is higher than that in Wholesale Price Index (WPI).', '2. The WPI does not capture changes in the prices of services, which CPI does.', '3. Reserve Bank of India has now adopted WPI as its key measure of inflation and to decide on changing the key policy rates.'], 'Which of the statements given above is/are correct ?',
    ['1 and 2 only', '2 only', '3 only', '1, 2 and 3'], 0,
    'Statements 1 and 2 are correct: CPI gives food a larger weight and covers services, while WPI covers goods at first sale. Statement 3 is wrong because RBI\'s target measure is CPI.',
    ['', 'Statement 1 is also correct, as the retail basket gives food the larger weight, so "2 only" is incomplete.', 'Statement 3 is the wrong one: RBI uses CPI, not WPI.', 'Statement 3 fails because RBI\'s key measure is CPI.'],
    'CPI versus WPI', 'CPI: retail, services, RBI target. WPI: goods at first sale.', 'UPSC set this in 2020 (Q67). It remains a basic check on price measures.', 'Notes: Inflation from the ground up; UPSC GS Paper I 2020'),
  y(2022, 7, 5, 'moderate', 'multi-statement', 'Which of the following activities constitute real sector in the economy ?', ['1. Farmers harvesting their crops', '2. Textile mills converting raw cotton into fabrics', '3. A commercial bank lending money to a trading company', '4. A corporate body issuing Rupee Denominated Bonds overseas'], 'Select the correct answer using the code given below :',
    ['1 and 2 only', '2, 3 and 4 only', '1, 3 and 4 only', '1, 2, 3 and 4'], 0,
    'The real sector produces goods and services, such as farming and textile manufacture. Lending and bond issues are financial sector activities.',
    ['', 'Items 3 and 4 are financial transactions, and item 1 (farming) has been wrongly left out.', 'Item 2 (a mill) is real production and is left out, while financial items 3 and 4 are included.', 'Items 3 and 4 move finance, not goods, so they do not belong to the real sector.'],
    'Real versus financial sector', 'Real sector makes things; financial sector moves claims on money.', 'UPSC set this in 2022 (Q7) to test the idea behind production-based accounting.', 'Notes: Inflation from the ground up (exam note); UPSC GS Paper I 2022'),
  y(2021, 12, 7, 'moderate', 'multi-statement', 'With reference to Indian economy, demand-pull inflation can be caused/increased by which of the following?', ['1. Expansionary policies', '2. Fiscal stimulus', '3. Inflation-indexing wages', '4. Higher purchasing power', '5. Rising interest rates'], 'Select the correct answer using the code given below.',
    ['1, 2 and 4 only', '3, 4 and 5 only', '1, 2, 3 and 5 only', '1, 2, 3, 4 and 5'], 0,
    'Expansionary policy, fiscal stimulus and higher purchasing power all raise spending. Rising interest rates reduce spending, so any code with item 5 fails, which leaves only the first code.',
    ['', 'Item 5 fails: rising interest rates cool demand, and items 1 and 2 are wrongly dropped.', 'Item 5 fails: rising interest rates cool demand rather than increase it.', 'Item 5 fails: rising interest rates cool demand rather than increase it.'],
    'Demand-pull inflation', 'Anything that raises spending feeds demand-pull; higher rates do the opposite.', 'UPSC set this in 2021 (Q12). Elimination on one item settles it.', 'Notes: Inflation from the ground up; UPSC GS Paper I 2021'),
  q(8, 'moderate', 'application', 'In an economy (Rs crore), GVA at basic prices is 200, product taxes are 25, product subsidies are 5, net factor income from abroad is -4, and depreciation is 20. What is the national income (NNI)?', null, null,
    ['196', '216', '200', '204'], 0,
    'GDP at market prices = 200 + 25 - 5 = 220. GNI = 220 - 4 = 216. NNI = 216 - 20 = 196.',
    ['', '216 is GNI: depreciation has not been removed yet.', '200 is 220 - 20: it ignores the net factor income of -4.', '204 adds the factor income with the wrong sign (220 + 4 - 20).'],
    'Deriving NNI', 'GVA + net product taxes = GDP; + net factor income = GNI; - depreciation = NNI.', 'The chain of aggregates is quick to test with numbers, as recent papers favour short calculations.', 'Notes: GDP and its relatives'),
  q(9, 'moderate', 'multi-statement', 'In a one-product economy, Year 1 is the base year. Quantity rises from 20 units to 22 units and the price rises from Rs 50 to Rs 55. Consider the following statements:', ['1. Nominal GDP grows by 21%.', '2. Real GDP grows by 10%.', '3. The GDP deflator in Year 2 is 110.'], 'How many of the above statements are correct?', COUNT, 2,
    'Nominal GDP goes from 1,000 to 1,210 (+21%). Real GDP at base price goes from 1,000 to 1,100 (+10%). Deflator = 1,210 / 1,100 x 100 = 110. All three hold.',
    ['Statements 2 and 3 are also correct, as the working shows.', 'None of the three fails: 1,210, 1,100 and 110 all follow from the data.', '', 'Each statement follows from the given data, so "None" is wrong.'],
    'Real, nominal and deflator', 'Real GDP uses base prices; nominal uses current prices; the ratio is the deflator.', 'The deflator is best tested by calculation, not memory.', 'Notes: Real and nominal, a worked example'),
  q(10, 'moderate', 'chronology', 'Arrange the following GDP estimates for one financial year in the order in which they are released:', ['1. Provisional Estimates', '2. Second Advance Estimates', '3. First Advance Estimates', '4. Later revised estimates using fuller data'], 'Select the correct order:',
    ['3-2-1-4', '2-3-1-4', '3-1-2-4', '1-3-2-4'], 0,
    'First Advance Estimates come before the Budget, Second Advance around end-February, Provisional after the year ends, and revised rounds later.',
    ['', 'Second Advance Estimates cannot precede the First Advance Estimates.', 'Provisional Estimates come after the year ends, so after both Advance Estimates.', 'Provisional Estimates come last among these three, not first.'],
    'GDP release sequence', 'Advance, then Provisional, then Revised: always name the release.', 'Revisions cause confusion, as with 7.6%, 7.7% and 7.8% for 2025-26.', 'Notes: The new GDP series'),
  q(11, 'moderate', 'assertion-reason', 'Statement I: The new GDP series uses double deflation in agriculture and manufacturing.\nStatement II: Deflating output and input prices separately avoids misreading real value added when input prices jump.', null, 'Which one of the following is correct?', SI, 0,
    'Both are correct. MoSPI adopted double deflation in these sectors, and the reason is that single deflation misreads real value added when input prices move differently from output prices.',
    ['', 'II does explain I: it gives the reason for the method named in I.', 'II is correct: separate deflation of output and inputs is what double deflation means.', 'I is correct: the MoSPI press note of 27 February 2026 lists this change.'],
    'Double deflation', 'Double deflation: deflate output and inputs separately.', 'The method changes are the main conceptual content of the new series.', 'Notes: The new GDP series; MoSPI press note, 27 February 2026'),
  q(12, 'moderate', 'multi-statement', 'With reference to the GDP series with base 2022-23, consider the following statements:', ['1. Annual survey data are used for the unincorporated sector.', '2. Single deflation has been retained for manufacturing.', '3. Supply and Use Table integration helps production and expenditure totals agree more closely.'], 'How many of the above statements are correct?', COUNT, 1,
    'Statements 1 and 3 are correct. Statement 2 is wrong because manufacturing has moved to double deflation.',
    ['Statements 1 and 3 are both correct, so more than one holds.', '', 'Statement 2 fails: manufacturing now uses double deflation.', 'Statements 1 and 3 are confirmed by the MoSPI press note, so "None" is wrong.'],
    'New series methods', 'Informal data, double deflation and SUT integration are the headline changes.', 'A base change is more than new prices, which is why method questions are likely.', 'Notes: The new GDP series; MoSPI press note, 27 February 2026'),
  q(13, 'moderate', 'match', 'Match List I with List II:', ['A. CPI', 'B. WPI', 'C. GDP deflator', '1. Goods at first sale, with no services', '2. RBI\'s target measure, including services and retail prices', '3. Covers everything in GDP, but is not monthly'], 'Select the correct answer:',
    ['A-1, B-2, C-3', 'A-2, B-1, C-3', 'A-3, B-1, C-2', 'A-2, B-3, C-1'], 1,
    'CPI is RBI\'s target and covers services at retail. WPI, from the Office of Economic Adviser, covers goods at first sale. The deflator is the broadest and is not monthly.',
    ['CPI is not limited to goods at first sale, and WPI is not RBI\'s target.', '', 'The deflator is not RBI\'s target measure; CPI is, and CPI is a monthly series.', 'WPI has no services and is monthly, so it cannot be the measure covering all GDP.'],
    'Three price measures', 'CPI for policy, WPI for goods, deflator for the whole economy.', 'Coverage differences explain why the three measures can diverge.', 'Notes: Inflation from the ground up'),
  q(14, 'moderate', 'application', 'A bad monsoon and a rise in crude oil prices together push prices up while output falls. Which description fits best, and what follows for policy?', null, null,
    ['Cost-push inflation, where rate hikes are less effective and supply action is needed', 'Demand-pull inflation, where tighter monetary policy works well', 'Disinflation, where no policy response is needed as prices are falling', 'Reflation, where policy is deliberately raising prices'], 0,
    'Rising input costs reduce supply, so output falls while prices rise. That is cost-push, and rate hikes do not bring rain or cheaper oil.',
    ['', 'In demand-pull, output rises with prices; here output falls.', 'Disinflation means a falling inflation rate, but here inflation is rising, and prices are not falling in any case.', 'Reflation is a deliberate policy against deflation, not a supply shock.'],
    'Cost-push inflation', 'Output falling with prices rising points to cost-push.', 'The cause of inflation decides whether the repo rate is the right tool.', 'Notes: Inflation from the ground up'),
  q(15, 'moderate', 'statement', 'CPI inflation averaged only 1.7% in April-December 2025 (Economic Survey 2025-26). Readings for the same months of 2026 can look high even when monthly price rises are modest. The best explanation is:', null, null,
    ['Inflation compares prices with a year earlier, so a low base lifts the reading', 'Core inflation excludes food and fuel, so it reads higher than headline', 'The new CPI lowered the weight of food, which always raises inflation', 'WPI is added to CPI in low-inflation periods'], 0,
    'This is the base effect. Inflation compares an index with the same month a year earlier, so a low level last year raises this year\'s rate.',
    ['', 'Core is a separate measure and does not explain a low comparison period.', 'A lower food weight changes the mix of the basket; it has no such automatic effect.', 'WPI and CPI are separate indices, and one is never added to the other.'],
    'Base effect', 'Inflation depends on last year\'s level too.', 'Base effects are the usual explanation offered when monthly prints jump.', 'Notes: Inflation from the ground up'),
  q(16, 'moderate', 'multi-statement', 'Consider the following statements about inflation measures:', ['1. Core inflation removes food and fuel, so it shows lasting pressure.', '2. Headline inflation excludes food items because they are volatile.', '3. If prices stop rising but stay high, inflation remains positive.'], 'How many of the above statements are correct?', COUNT, 0,
    'Only statement 1 is correct. Headline covers everything, including food. If prices stop rising, inflation is zero even though the price level remains high.',
    ['', 'Statement 2 fails: headline includes food. Statement 3 fails: unchanged prices mean zero inflation.', 'Statements 2 and 3 are both false, as headline includes food and steady prices mean zero inflation.', 'Statement 1 is correct: that is the definition of core inflation.'],
    'Headline, core, price level', 'High prices are not the same as high inflation.', 'The difference between price level and inflation is a common conceptual slip.', 'Notes: Inflation from the ground up'),
  q(17, 'moderate', 'multi-statement', 'Consider the following in the circular flow of income:', ['1. Exports', '2. Household saving', '3. Government spending'], 'How many of the above are injections into the circular flow?', COUNT, 1,
    'Exports and government spending are injections. Household saving is a leakage, as it leaves the spending loop.',
    ['Both exports and government spending are injections, so the count is more than one.', '', 'Household saving is a leakage, as are taxes and imports.', 'Exports and government spending do enter the loop, so "None" is wrong.'],
    'Leakages and injections', 'Leakages: saving, taxes, imports. Injections: investment, government, exports.', 'The circular flow underlies all three methods of measuring GDP.', 'Notes: The big picture'),
  q(18, 'moderate', 'statement', 'In 2025-26, India\'s per capita GNI (Rs 2,40,769) was below per capita GDP (Rs 2,43,803), as per MoSPI Provisional Estimates of June 2026. This implies that:', null, null,
    ['India\'s net factor income from abroad was negative', 'India ran a merchandise trade deficit', 'Depreciation exceeded new investment', 'Remittances into India fell during the year'], 0,
    'GNI = GDP + net factor income from abroad. GNI below GDP means incomes paid abroad exceeded incomes received from abroad.',
    ['', 'A trade deficit concerns net exports; the gap here concerns factor incomes.', 'Depreciation separates gross from net aggregates; GDP and GNI are both gross.', 'Remittances recorded as transfers are not factor income, so they do not explain the gap.'],
    'Net factor income', 'GNI minus GDP equals net factor income from abroad.', 'Candidates often confuse factor income with net exports.', 'Notes: GDP and its relatives; MoSPI Provisional Estimates, 5 June 2026'),

  // Hard
  q(19, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Personal remittances recorded as transfers appear in the current account but are not production.', '2. Net factor income from abroad is another name for net exports of goods and services.'], 'Which of the statements given above is/are correct?', BOTH, 0,
    'Statement 1 is correct. Statement 2 is wrong because factor income concerns wages and investment returns, while net exports concern goods and services traded.',
    ['', 'Statement 2 is the wrong one: factor income and net exports are different items.', 'Statement 2 fails, as it merges factor incomes with trade in goods and services.', 'Statement 1 is correct: transfers belong to the current account and are not production.'],
    'Factor income versus trade', 'Wages and returns are factor income; goods and services are net exports; transfers are neither.', 'This fine distinction is the note\'s main trap on national income.', 'Notes: GDP and its relatives'),
  q(20, 'hard', 'application', 'The government raises product subsidies by Rs 5 crore. Output, input costs, basic prices and product taxes stay unchanged. What happens to GVA at basic prices and GDP at market prices?', null, null,
    ['GVA at basic prices is unchanged; GDP at market prices falls by Rs 5 crore', 'GVA at basic prices falls by Rs 5 crore; GDP at market prices is unchanged', 'Both rise by Rs 5 crore', 'Both remain unchanged'], 0,
    'GDP at market prices = GVA at basic prices + product taxes - product subsidies. Only the subsidy term changes, so GVA stays and GDP falls by 5.',
    ['', 'GVA at basic prices excludes net product taxes, so a subsidy does not change it, while GDP does change.', 'A subsidy is subtracted in going from GVA to GDP, so GDP cannot rise from it.', 'GDP at market prices includes net product taxes, so it must move.'],
    'GVA and net product taxes', 'Subsidies widen the gap between GVA and GDP, without any change in production.', 'It explains why GVA and GDP growth can differ in the same quarter, as in 8.2% and 7.8% for Q1 2026-27.', 'Notes: GDP and its relatives'),
  q(21, 'hard', 'assertion-reason', 'Statement I: With food at a lower weight in the 2024-base CPI, the same food price rise adds less to headline inflation than it would on the old basket.\nStatement II: Poor households spend a larger share of their budgets on food than the average household.', null, 'Which one of the following is correct?', SI, 1,
    'Both are correct, but they are separate points. I follows from weights in the index. II is about household budgets, and is the argument against reading too much into the lower weight.',
    ['II does not explain I: the headline effect arises from the index weight, not from what poor households spend.', '', 'II is also correct: it is the standard counter-argument in the food weight debate.', 'I is correct: at a weight near 37%, food contributes less than at the old 45.86%.'],
    'Food weight in CPI', 'A smaller weight mutes the headline, but not what the poor feel.', 'The food weight debate has both a measurement side and a welfare side.', 'Notes: Inflation from the ground up; Exam guide'),
  q(22, 'hard', 'multi-statement', 'A rise in school tuition fees would be directly reflected in which of the following?', ['1. Consumer Price Index', '2. Wholesale Price Index', '3. GDP deflator'], 'Select the correct answer using the code given below:',
    ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 2,
    'Tuition is a service. CPI includes services, and the GDP deflator covers everything in GDP. WPI covers only goods at first sale.',
    ['WPI has no services, so item 2 fails, and the deflator has been wrongly left out.', 'WPI has no services, so item 2 fails, and CPI has been wrongly left out.', '', 'Item 2 fails because WPI does not capture services.'],
    'Index coverage', 'Services show up in CPI and the deflator, never in WPI.', 'Applying coverage to a fresh example resists rote learning.', 'Notes: Inflation from the ground up'),
  q(23, 'hard', 'multi-statement', 'Consider the following statements:', ['1. The base year of a GDP series is the year in which the series is released.', '2. A change of base year updates only prices, leaving data sources and methods untouched.', '3. Routine annual revisions of GDP also shift the base year forward.'], 'How many of the above statements are correct?', COUNT, 3,
    'None is correct. The base year is the price reference (2022-23 for a series released in 2026). A base change also updates sources and methods. Annual revisions add fuller data without changing the base.',
    ['No statement survives: all three misdescribe base-year practice.', 'No two hold: 1 confuses release with reference year, and 2 and 3 misdescribe revisions.', 'All three are false, as the base is a price reference and revisions keep it fixed.', ''],
    'Base year versus revision', 'Base year: price reference. Revision: fuller data on the same base.', 'Tests the difference that the note draws between rebasing and routine revision.', 'Notes: The new GDP series'),
  q(24, 'hard', 'statement', 'India\'s HDI value in UNDP\'s 2025 report (2023 data) was 0.685, while its inequality-adjusted value was 0.475, a loss of 30.7%. Which inference is valid?', null, null,
    ['Inequality in health, education and income pulls achieved human development well below the average', 'India\'s rank falls by 30.7% once inequality is considered', 'The adjustment considers only income inequality, leaving health and education untouched', 'The 0.685 figure already discounts inequality, so the adjustment counts it twice'], 0,
    'The inequality-adjusted index discounts each HDI dimension for inequality within it. The 30.7% loss is the fall in value, so it measures the human development lost to unequal distribution.',
    ['', 'The 30.7% describes the loss in index value, not a change in rank.', 'The adjustment applies to all three dimensions, not to income alone.', 'HDI is an average that does not discount inequality; that is why a separate adjusted value exists.'],
    'Inequality-adjusted HDI', 'HDI is an average; the adjusted value shows who is left behind.', 'The gap is a ready Mains point on growth and equity.', 'Notes: Growth and development; UNDP India, HDI 2025 release'),
  q(25, 'hard', 'assertion-reason', 'Statement I: Stagflation is a condition of high inflation together with low growth.\nStatement II: The Phillips curve states that, in the short run, lower unemployment comes with lower inflation.', null, 'Which one of the following is correct?', SI, 2,
    'Statement I is correct. Statement II is wrong: the Phillips curve is the short-run idea that lower unemployment comes with higher inflation.',
    ['II is incorrect, so it cannot be correct or explain I: the curve links lower unemployment with higher inflation.', 'II is incorrect, as it reverses the direction of the Phillips relation.', '', 'I is correct: it is the standard definition of stagflation.'],
    'Phillips curve', 'Phillips curve: less unemployment, more inflation, in the short run.', 'A reversed direction is the classic elimination trap on this idea.', 'Notes: Inflation from the ground up'),
  q(26, 'hard', 'multi-statement', 'Consider the following:', ['1. A homemaker\'s unpaid cooking for the family', '2. Loss of forest cover caused by mining', '3. How the income generated is shared among households'], 'How many of the above does GDP fail to capture?', COUNT, 2,
    'All three. GDP misses unpaid household work, environmental loss and distribution. That is the reason for ideas such as green GDP and the SDGs.',
    ['Items 2 and 3 are also missed; GDP values only market-valued output totals.', 'Item 3 is missed too: GDP is a total and says nothing about sharing.', '', 'Each item is a known gap in GDP, so "None" is wrong.'],
    'Limits of GDP', 'GDP counts output, not unpaid work, nature or fairness.', 'Limits of GDP lead directly to development measures in both papers.', 'Notes: Growth and development'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-0122-1', day: DAY, marks: 10, words: 150, directive: 'Discuss', question: 'Discuss why a change in the GDP base year is more than a routine revision, with reference to the 2022-23 series.',
    mustCover: ['Meaning of base year as the price reference', 'Difference between rebasing and annual revision', 'Method changes: double deflation, informal sector data, quarterly benchmarking, SUT integration', 'Why it matters for policy and credibility of data', 'Caution against comparing across series'],
    model: `Introduction
A base year is the price reference for real GDP. MoSPI's new series, released on 27 February 2026, moved the base from 2011-12 to 2022-23, a recent normal year after Covid with good data.

Why it differs from a revision
Annual revisions add fuller data to the same framework. A base change also updates sources and methods.

Key changes
Double deflation in agriculture and manufacturing, so input price jumps do not distort real value added.
Annual survey data for the unincorporated sector, instead of assuming it moves with the formal sector.
Wider GST and administrative data, with Proportional Denton benchmarking for quarters.
Supply and Use Table integration, and COICOP 2018 for PFCE.

Why it matters
Tax buoyancy, deficits and debt are all read against GDP, so data credibility shapes policy. Yet series cannot be mixed: the old-series 7.4% for 2025-26 is not comparable with the new 7.8%.

Conclusion
Regular rebasing with transparent methods will keep India's growth data credible.` },
  { id: 'm-0122-2', day: DAY, marks: 10, words: 150, directive: 'Examine', question: 'Examine whether the lower weight of food in the new CPI series changes the conduct of monetary policy in India.',
    mustCover: ['New CPI facts: base 2024, food weight from 45.86% to about 37%', 'Arithmetic of food contribution to headline', 'Argument that policy is less hostage to food shocks', 'Limits: food still largest; poor households spend more on food', 'RBI October 2026 action as evidence', 'Balanced conclusion with supply-side measures'],
    model: `Introduction
CPI, RBI's target measure, was rebased to 2024, with first release on 12 February 2026. The weight of food and beverages fell from 45.86% to about 37%, though it remains the largest group.

How it may change policy
Food shocks now pass less into the headline. In September 2026, food at 7.74% with a weight near 37% contributed about 2.9 points of 5.54% headline inflation.
The basket better matches current spending.
Supply-driven food spikes, which rate hikes address poorly, may force RBI's hand less often.

Why the change is limited
Food is still the largest group, and RBI raised the repo rate in October 2026 as inflation rose.
Poor households spend more on food, so a lower average weight understates their burden.
The 4% target with its 2-6 band is unchanged.

Conclusion
Reweighting improves measurement but does not take food out of policy. Supply action on storage, imports and crop diversification must accompany monetary policy.` },
  { id: 'm-0122-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse', question: 'Critically analyse the view that India\'s recent high GDP growth has not translated equally into development.',
    mustCover: ['Definition of growth and development, with Amartya Sen\'s capability idea', 'Evidence of growth: real GDP numbers with release date', 'Evidence of progress: MPI, unemployment, HDI value', 'Evidence of gaps: IHDI loss, sectoral mismatch, averages hide inequality', 'Limits of GDP: unpaid work, environment, distribution', 'Forward-looking conclusion'],
    model: `Introduction
Growth is a rise in real output. Development, in Amartya Sen's terms, is an expansion of capabilities and freedoms, and includes structural change and equity. The two can diverge.

The growth record
Real GDP grew 7.8% in 2025-26 on the 2022-23 base (PIB, September 2026). Q1 2026-27 also recorded 7.8%.

Where growth has reached people
NITI Aayog's MPI headcount fell from 29.17% in 2013-14 to a projected 11.28% in 2022-23.
Usual status unemployment was 3.1% in 2025 (PLFS).
HDI stood at 0.685 in UNDP's 2025 report, with a rank of 130 of 193.

Where the gap remains
Inequality-adjusted HDI is only 0.475, a loss of 30.7%.
Per capita income of about Rs 2.4 lakh is an average that hides inequality.
Sector mismatch persists: agriculture employs 43.0% of workers (PLFS 2025) but yields nearly one-fifth of income. In Q1 2026-27, primary GVA grew 2.9% against 10.0% for tertiary.
Food inflation of 7.74% in September 2026 hurts poor households most.
GDP also misses unpaid household work and environmental loss.

A balanced view
The critique is partly overstated: poverty has fallen on multiple measures, and growth funds welfare and public capital. Critics, however, note that MPI measures access rather than quality, and that much of the rise in female work is self-employment, including unpaid helpers.

Conclusion
The test is the quality of growth. Moving workers to productive jobs, female workforce participation, and spending on health and learning would close the gap. Tracking HDI, MPI and the SDGs with GDP keeps development in view.` },
]
