import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2027-01-26'
const S = 'Notes: Poverty, unemployment, inclusion, infrastructure and planning'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-0126-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  y(2026, 88, 47, 'easy', 'factual', 'Which one of the following correctly represents the three key sub-indices of the Financial Inclusion Index (FI-Index) of the Reserve Bank of India (RBI) ?', null, null,
    ['Credit access, Insurance depth, and Pension coverage', 'Banking access, GDP contribution, and Financial literacy', 'Access, Usage, and Quality', 'Access, Affordability, and Transparency'], 2,
    'The RBI\'s FI-Index has three parts: access, usage and quality. It stood at 70.0 in March 2026, driven mainly by usage.',
    ['These are parts of the financial sector, but they are not the three sub-indices of the FI-Index.', 'GDP contribution is not a part of the index, and literacy is not a named sub-index.', '', 'Access is correct, but the other two parts are usage and quality.'],
    'FI-Index', 'FI-Index: access, usage, quality.', 'UPSC set this in 2026 (Q88).', 'Notes: Financial and social inclusion; UPSC GS Paper I 2026'),
  y(2016, 73, 27, 'easy', 'statement', 'Pradhan Mantri MUDRA Yojana is aimed at', null, null,
    ['bringing the small entrepreneurs into formal financial system', 'providing loans to poor farmers for cultivating particular crops', 'providing pensions to old and destitute persons', 'funding the voluntary organizations involved in the promotion of skill development and employment generation'], 0,
    'Mudra gives small loans to micro and small businesses, drawing small entrepreneurs into formal finance. It belongs to the usage stage of the inclusion chain.',
    ['', 'Crop loans are the work of crop credit such as the Kisan Credit Card, not Mudra.', 'Pensions for the old are a matter for pension schemes, not Mudra.', 'Mudra lends to small entrepreneurs, not to voluntary organisations.'],
    'Mudra', 'Mudra: small loans to small entrepreneurs.', 'UPSC set this in 2016 (Q73).', 'Notes: Financial and social inclusion; UPSC GS Paper I 2016'),
  q(1, 'easy', 'multi-statement', 'Consider the following statements:', ['1. The Tendulkar committee method gave a poverty estimate of 21.9% for 2011-12.', '2. The Rangarajan committee estimate of 29.5% for 2011-12 was formally adopted as the official line.'], 'Which of the statements given above is/are correct?', BOTH, 0,
    'Statement 1 is correct. Statement 2 is wrong: the Rangarajan estimate of 29.5% was not formally adopted.',
    ['', 'Statement 2 fails: the Rangarajan line was not formally adopted.', 'Statement 2 fails, as the Rangarajan line was not formally adopted.', 'Statement 1 is correct: 21.9% is the Tendulkar figure for 2011-12.'],
    'Poverty committees', 'Tendulkar 21.9%; Rangarajan 29.5%, not adopted.', 'These two numbers remain the last official-type estimates.', 'Notes: Poverty, three ways to count'),
  q(2, 'easy', 'factual', 'In the Periodic Labour Force Survey, the unemployment rate is calculated as', null, null,
    ['unemployed persons / labour force', 'unemployed persons / population aged 15 and above', 'workers / population aged 15 and above', 'labour force / population aged 15 and above'], 0,
    'The UR is the unemployed divided by the labour force, not by the whole population.',
    ['', 'Dividing by the whole population understates the rate; the denominator is the labour force.', 'Workers divided by population is the Worker Population Ratio.', 'Labour force divided by population is the LFPR.'],
    'UR, WPR, LFPR', 'UR uses the labour force as the base.', 'Three ratios are enough to read all job data.', 'Notes: Unemployment, read the survey first'),
  q(3, 'easy', 'statement', 'Which one of the following most clearly distinguishes NITI Aayog from the former Planning Commission?', null, null,
    ['NITI Aayog has no power to allocate funds', 'NITI Aayog is a constitutional body', 'NITI Aayog prepares and enforces Five Year Plans', 'NITI Aayog works on a top-down planning model'], 0,
    'NITI Aayog is a think tank for cooperative federalism and has no power to allocate funds. The Planning Commission allocated plan funds.',
    ['', 'It was created by a Cabinet resolution, so it is not a constitutional body.', 'The Twelfth Plan was the last Five Year Plan; NITI does not enforce such plans.', 'A top-down model is associated with the Planning Commission.'],
    'NITI Aayog', 'NITI advises and has no power to allocate funds.', 'The comparison is a standard one in both papers.', 'Notes: Planning Commission to NITI Aayog'),
  q(4, 'easy', 'factual', 'The national Multidimensional Poverty Index of NITI Aayog has how many indicators, compared with the global MPI?', null, null,
    ['12, against 10 in the global MPI', '10, against 12 in the global MPI', '12 in both', '10 in both'], 0,
    'India\'s national MPI has 12 indicators. The global MPI has 10.',
    ['', 'This reverses the numbers: the national index has more indicators.', 'The global MPI has 10, not 12.', 'The national MPI has 12, not 10.'],
    'National MPI', 'National 12; global 10.', 'The note records that the number of indicators has been tested.', 'Notes: The Multidimensional Poverty Index'),
  q(5, 'easy', 'application', 'On a small family farm, seven members work, but five would produce the same output. Removing two members would cause no loss of output. This is a case of', null, null,
    ['disguised unemployment', 'frictional unemployment', 'cyclical unemployment', 'structural unemployment'], 0,
    'Disguised unemployment means more people are engaged than needed, so removing some loses no output. Family farms are the classic example.',
    ['', 'Frictional unemployment is the short gap between jobs.', 'Cyclical unemployment rises in a downturn, as with export units in a slump.', 'Structural unemployment is a mismatch between skills and jobs.'],
    'Disguised unemployment', 'No loss of output when workers leave: disguised unemployment.', 'It explains why farm employment stays high.', 'Notes: Unemployment, read the survey first'),
  q(6, 'easy', 'statement', 'PM GatiShakti (2021) is best described as', null, null,
    ['a GIS-based master plan so that ministries plan together', 'a fund that pays private developers for road projects', 'a list of operating assets to be leased out for cash', 'a body that grants environmental clearances for highways'], 0,
    'PM GatiShakti is a GIS-based master plan and a coordination tool. It is not a funding scheme.',
    ['', 'It is not a funding scheme; it is a coordination tool.', 'Leasing assets for cash describes the National Monetisation Pipeline.', 'It is a planning tool, not a clearance authority.'],
    'PM GatiShakti', 'GatiShakti coordinates; it does not fund.', 'Infrastructure frameworks are easily confused with each other.', 'Notes: Infrastructure, who pays and how'),

  // Moderate
  y(2019, 24, 11, 'moderate', 'statement', 'In a given year in India, official poverty lines are higher in some States than in others because', null, null,
    ['poverty rates vary from State to State', 'price levels vary from State to State', 'Gross State Product varies from State to State', 'quality of public distribution varies from State to State'], 1,
    'State lines are built from the same basket at State price levels, so they differ with prices. The Lakdawala method made lines State-specific and updated them with price indices.',
    ['Poverty rates are the result of applying the lines, not the reason the lines differ.', '', 'Gross State Product measures output and does not set a price-based poverty line.', 'PDS quality may affect welfare, but the lines are set from prices.'],
    'State poverty lines', 'State poverty lines differ because prices differ.', 'UPSC set this in 2019 (Q24).', 'Notes: Poverty, three ways to count; UPSC GS Paper I 2019'),
  y(2023, 74, 31, 'moderate', 'multi-statement', 'Consider the following statements :', ['1. The Self-Help Group (SHG) programme was originally initiated by the State Bank of India by providing microcredit to the financially deprived.', '2. In an SHG, all members of a group take responsibility for a loan that an individual member takes.', '3. The Regional Rural Banks and Scheduled Commercial Banks support SHGs.'], 'How many of the above statements are correct?',
    ['Only one', 'Only two', 'All three', 'None'], 1,
    'Statements 2 and 3 are correct. Statement 1 fails: the SHG-bank linkage programme began with NABARD, not the State Bank of India.',
    ['Statements 2 and 3 both hold, so more than one is correct.', '', 'Statement 1 fails: the programme was begun by NABARD.', 'Statements 2 and 3 are correct: joint responsibility and bank support are core features.'],
    'Self-Help Groups', 'SHG: group responsibility and bank linkage, begun by NABARD.', 'UPSC set this in 2023 (Q74). SHGs are the resilience end of the inclusion chain.', 'Notes: Financial and social inclusion; UPSC GS Paper I 2023'),
  q(7, 'moderate', 'application', 'In a district, 20% of people are multidimensionally poor, and they are deprived on 40% of weighted indicators on average. What is the district\'s MPI?', null, null,
    ['0.08', '0.60', '0.50', '0.20'], 0,
    'MPI multiplies headcount by intensity: H x A = 0.20 x 0.40 = 0.08.',
    ['', '0.60 adds H and A, when the formula multiplies them.', '0.50 divides H by A, which has no meaning here.', '0.20 is the headcount H alone, without allowing for intensity.'],
    'MPI formula', 'MPI = headcount x intensity.', 'A quick calculation confirms the method.', 'Notes: The Multidimensional Poverty Index'),
  q(8, 'moderate', 'application', 'A State has an LFPR of 60% and a WPR of 57%. What is its unemployment rate?', null, null,
    ['5.0%', '3.0%', '5.3%', '95.0%'], 0,
    'Out of 100 people, 60 are in the labour force and 57 have work, so 3 are unemployed. UR = 3 / 60 = 5.0%.',
    ['', '3.0% is the unemployed share of the population, but UR uses the labour force as the base.', '5.3% divides by workers (3 / 57), when the base is the labour force.', '95% is the employed share of the labour force, not the UR.'],
    'Deriving UR', 'UR = (LFPR - WPR) / LFPR.', 'Calculation guards against mixing up the ratios.', 'Notes: Unemployment, read the survey first'),
  q(9, 'moderate', 'current-static', 'With reference to the PLFS Annual Report for 2025 (usual status), consider the following statements:', ['1. The urban unemployment rate was higher than the rural rate.', '2. The youth unemployment rate was below the overall rate.', '3. The female LFPR was higher than the male LFPR.'], 'How many of the above statements are correct?', COUNT, 0,
    'Only statement 1 is correct: urban 4.8%, rural 2.4%. Youth UR was 9.9%, above the overall 3.1%. Female LFPR was 40.0%, against male 79.1%.',
    ['', 'Statements 2 and 3 both fail: youth UR was 9.9% and female LFPR was 40.0%.', 'Statements 2 and 3 fail on the 2025 figures.', 'Statement 1 is correct: 4.8% urban against 2.4% rural.'],
    'PLFS 2025 pattern', 'Urban above rural; youth well above average; female LFPR half of male.', 'The pattern matters more than exact figures.', 'Notes: Unemployment; PIB, PLFS Annual Report 2025, 27 March 2026'),
  q(10, 'moderate', 'match', 'Match List I with List II:', ['A. Alagh', 'B. Lakdawala', 'C. Tendulkar', '1. Moved from calories to a consumption basket including health and education', '2. Calorie norm of 2,400 rural and 2,100 urban', '3. State-specific lines with CPI-based update'], 'Select the correct answer:',
    ['A-1, B-2, C-3', 'A-2, B-1, C-3', 'A-3, B-2, C-1', 'A-2, B-3, C-1'], 3,
    'Alagh (1979) used the calorie norm. Lakdawala (1993) made lines State-specific. Tendulkar (2009) moved to a consumption basket.',
    ['Alagh is the calorie approach, not the basket approach.', 'Lakdawala is about State-specific lines, not the move away from calories.', 'Alagh used a calorie norm, not State-specific lines.', ''],
    'Evolution of poverty lines', 'Alagh calories, Lakdawala States, Tendulkar basket.', 'The evolution of method is more durable than any number.', 'Notes: Poverty, three ways to count'),
  q(11, 'moderate', 'multi-statement', 'Consider the following statements on poverty numbers in India:', ['1. The MPI headcount of 11.28% for 2022-23 is a projection, not a direct survey result.', '2. The figure of 5.3% for 2022-23 in the Budget 2026-27 document refers to extreme poverty on the international line.', '3. The figure of 21.9% is a Tendulkar estimate for 2022-23.'], 'How many of the above statements are correct?', COUNT, 1,
    'Statements 1 and 2 are correct. Statement 3 is wrong: 21.9% refers to 2011-12.',
    ['Statements 1 and 2 both hold, so more than one is correct.', '', 'Statement 3 fails: the Tendulkar 21.9% refers to 2011-12.', 'Statements 1 and 2 are confirmed by the sources, so "None" is wrong.'],
    'Do not mix poverty numbers', '11.28% MPI, 5.3% international, 21.9% Tendulkar: each answers a different question.', 'The note marks mixing of these numbers as its main trap.', 'Notes: Poverty, three ways to count; PIB, Union Budget 2026-27 Rural Transformation document'),
  q(12, 'moderate', 'current-static', 'As of November 2026, consider the following statements:', ['1. The VB-G RAM G Act, 2025 came into force on 1 July 2026, repealing MGNREGA, 2005.', '2. The statutory employment guarantee rose from 100 to 125 days.'], 'Which of the statements given above is/are correct?', BOTH, 2,
    'Both are correct, as confirmed by PIB. The MGNREGA has been replaced, so older facts about it must not be carried over.',
    ['Statement 2 is also correct: 125 days under the new Act.', 'Statement 1 is also correct: the Act commenced on 1 July 2026.', '', 'Both statements are confirmed by PIB.'],
    'VB-G RAM G', 'MGNREGA is gone: VB-G RAM G, 125 days, from 1 July 2026.', 'The largest rural employment law has changed, which makes this a prime current-static fact.', 'Notes: Key laws and schemes; PIB, commencement of VB-G RAM G Act'),
  q(13, 'moderate', 'assertion-reason', 'Statement I: The four Labour Codes, effective 21 November 2025, merged 29 laws.\nStatement II: The Code on Social Security recognises gig and platform workers.', null, 'Which one of the following is correct?', SI, 1,
    'Both are correct. But the merger in I is about consolidating laws, and recognition of gig workers in II is one specific feature, so II does not explain I.',
    ['II does not explain I: gig recognition does not account for the merger of 29 laws.', '', 'II is also correct: the Social Security Code recognises these workers.', 'I is correct: this is the date and the count given by PIB.'],
    'Labour Codes', 'Four Codes, 29 laws, 21 November 2025.', 'A both-true-but-unrelated pair tests care in reading.', 'Notes: Key laws and schemes; PIB, November 2025'),
  q(14, 'moderate', 'application', 'Under which highway model does a private developer bear the traffic risk by collecting tolls from users?', null, null,
    ['BOT (Toll)', 'EPC', 'BOT (Annuity)', 'Hybrid Annuity'], 0,
    'Under BOT (Toll), the private builder collects tolls, so it bears the traffic risk.',
    ['', 'Under EPC, the government pays the contractor and bears traffic and financing risk.', 'Under BOT (Annuity), a fixed annuity from the government leaves traffic risk with the government.', 'The Hybrid Annuity model shares financing, with annuity payments rather than private toll risk.'],
    'PPP risk allocation', 'Follow the traffic risk to identify the model.', 'The note asks exactly this: who bears which risk?', 'Notes: Infrastructure, who pays and how'),
  q(15, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. Under the National Monetisation Pipeline, ownership of leased assets passes to the private party.', '2. NMP 2.0, launched on 23 February 2026, covers FY2026-30.', '3. The National Infrastructure Pipeline is a bond issued to raise funds for projects.'], 'How many of the above statements are correct?', COUNT, 0,
    'Only statement 2 is correct. Under monetisation, ownership stays with the government. The NIP is a project list across sectors, not a bond.',
    ['', 'Statements 1 and 3 both fail: ownership stays with the government, and the NIP is a project list.', 'Statements 1 and 3 fail, as they misdescribe the NMP and NIP.', 'Statement 2 is correct, so "None" is wrong.'],
    'NMP and NIP', 'NIP lists projects; NMP leases assets; ownership stays.', 'Similar acronyms make for natural distractors.', 'Notes: Infrastructure, who pays and how; PIB, February 2026'),
  q(16, 'moderate', 'chronology', 'Arrange the following in chronological order:', ['1. Plan holiday after war and drought', '2. Second Plan with its focus on heavy industry', '3. Eighth Plan, when planning became indicative', '4. Fifth Plan with the theme of Garibi Hatao'], 'Select the correct order:',
    ['2-1-4-3', '1-2-4-3', '2-4-1-3', '2-1-3-4'], 0,
    'The Second Plan ran 1956-61, the plan holiday 1966-69, the Fifth Plan 1974-79 and the Eighth Plan 1992-97.',
    ['', 'The Second Plan (1956-61) came before the plan holiday (1966-69).', 'The plan holiday (1966-69) came before the Fifth Plan (1974-79).', 'The Fifth Plan (1974-79) came before the Eighth Plan (1992-97).'],
    'Five Year Plans', 'Second heavy industry, holiday 1966-69, Fifth Garibi Hatao, Eighth indicative.', 'The note gives the plans UPSC is most likely to ask about.', 'Notes: Planning Commission to NITI Aayog'),
  q(17, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. NITI Aayog was created by an Act of Parliament.', '2. The Planning Commission was set up in 1950 by a Cabinet resolution.'], 'Which of the statements given above is/are correct?', BOTH, 1,
    'Statement 2 is correct. Statement 1 is wrong: NITI Aayog too was created by a Cabinet resolution, effective 1 January 2015.',
    ['Statement 1 fails: NITI Aayog was set up by a Cabinet resolution.', '', 'Statement 1 fails, as no Act of Parliament created NITI Aayog.', 'Statement 2 is correct: the Commission was neither constitutional nor statutory.'],
    'Status of planning bodies', 'Both bodies came from Cabinet resolutions.', 'Constitutional or statutory status is a common source of Prelims traps.', 'Notes: Planning Commission to NITI Aayog'),
  q(18, 'moderate', 'multi-statement', 'Consider the following statements on inequality in India:', ['1. A Gini coefficient of 0 denotes complete equality.', '2. As per the Economic Survey 2023-24, the rural consumption Gini fell between 2011-12 and 2022-23.', '3. Consumption surveys often understate top incomes.'], 'How many of the above statements are correct?', COUNT, 2,
    'All three are correct. The rural Gini fell from 0.283 to 0.266. Since surveys understate top incomes, income and wealth studies show higher inequality.',
    ['Statements 2 and 3 are also correct, so more than one holds.', 'All three hold; statement 1 is the definition, and 2 and 3 are in the sources.', '', 'Each statement is correct, so "None" is wrong.'],
    'Gini and inequality', 'Consumption Gini fell, but it understates top incomes.', 'A balanced Mains answer has to present both consumption and income data.', 'Notes: Poverty; PIB, Economic Survey 2023-24 summary'),

  // Hard
  y(2019, 70, 31, 'hard', 'multi-statement', 'With reference to India\'s Five-Year Plans, which of the following statements is/are correct?', ['1. From the Second Five-Year Plan, there was a determined thrust towards substitution of basic and capital good industries.', '2. The Fourth Five-Year Plan adopted the objective of correcting the earlier trend of increased concentration of wealth and economic power.', '3. In the Fifth Five-Year Plan, for the first time, the financial sector was included as an integral part of the Plan.'], 'Select the correct answer using the code given below.',
    ['1 and 2 only', '2 only', '3 only', '1, 2 and 3'], 0,
    'The Second Plan pushed heavy industry, and the Fourth aimed to reduce concentration of economic power. Statement 3 does not fit the Fifth Plan, whose known theme was Garibi Hatao.',
    ['', 'Statement 1 is also correct: the Mahalanobis strategy of the Second Plan.', 'Statement 3 is the one that does not hold; 1 and 2 are the correct ones.', 'Statement 3 does not fit the Fifth Plan, so "all three" fails.'],
    'Plan objectives', 'Second heavy industry; Fourth concentration of wealth; Fifth Garibi Hatao.', 'UPSC set this in 2019 (Q70).', 'Notes: Planning Commission to NITI Aayog; UPSC GS Paper I 2019'),
  q(19, 'hard', 'application', 'In a district, the MPI headcount stays at 15%, but the average deprivation among the poor falls from 50% to 40%. Which conclusion is correct?', null, null,
    ['The MPI falls from 0.075 to 0.06, while the headcount does not change', 'The MPI does not change, as the same share of people is poor', 'The headcount falls to 12%, and the MPI does not change', 'The MPI rises, as intensity is measured inversely'], 0,
    'MPI = H x A. With H at 0.15, the fall in A takes the MPI from 0.075 to 0.06. This shows gains that a simple headcount would miss.',
    ['', 'The MPI reflects intensity as well as headcount, so it does fall.', 'The headcount is given as unchanged; it is intensity that moved.', 'Intensity enters directly, so lower deprivation lowers the MPI.'],
    'Intensity in MPI', 'MPI registers gains even when headcount stays the same.', 'This is why the note says MPI shows gains that a headcount would miss.', 'Notes: The Multidimensional Poverty Index'),
  q(20, 'hard', 'multi-statement', 'Consider the following indicators:', ['1. Maternal health', '2. Bank accounts', '3. Cooking fuel'], 'How many of the above are in India\'s national MPI but not in the global MPI?', COUNT, 1,
    'India adds maternal health and bank accounts to the global set. Cooking fuel is common to both.',
    ['Both maternal health and bank accounts are national additions, so the count is two.', '', 'Cooking fuel is in the global index as well, so it is not an addition.', 'Maternal health and bank accounts are national additions, so "None" is wrong.'],
    'National versus global MPI', 'India adds maternal health and bank accounts.', 'A fine distinction, in an area that has already drawn UPSC\'s attention.', 'Notes: The Multidimensional Poverty Index'),
  q(21, 'hard', 'multi-statement', 'Which of the following point to concerns about the quality of employment in India, in spite of a falling unemployment rate?', ['1. Agriculture\'s share of employment was still 43.0% in 2025.', '2. About 60% of the employed were working owners in Q2 2025-26, many in very small units.', '3. Much of the rise in female participation is self-employment, including unpaid helpers.'], 'How many of the above are valid concerns?', COUNT, 2,
    'All three are valid concerns recorded in the note, drawing on PLFS and the Economic Survey. A falling unemployment rate says little about the quality of work.',
    ['Items 2 and 3 are also valid, so more than one holds.', 'All three hold, including the point about working owners.', '', 'Each item appears in the debate on job quality, so "None" is wrong.'],
    'Quality of jobs', 'A low UR can hide low-quality work.', 'Jobless growth and job quality are likely Mains angles.', 'Notes: Unemployment; PRS, Economic Survey 2025-26; PIB, PLFS 2025'),
  q(22, 'hard', 'multi-statement', 'Consider the following statements:', ['1. The Governing Council of NITI Aayog excludes Chief Ministers.', '2. The National Development Council is a body created under NITI Aayog.', '3. The DMEO allocates plan funds to the States.'], 'How many of the above statements are correct?', COUNT, 3,
    'None is correct. The Governing Council has all CMs and UT heads. The National Development Council was the forum for State views in the Planning Commission era. The DMEO monitors schemes.',
    ['No statement holds: all three misdescribe the bodies.', 'No two hold: CMs sit on the Council, and DMEO only monitors.', 'All three are false, as each misstates a function.', ''],
    'NITI Aayog bodies', 'CMs in the Council; DMEO monitors; no fund allocation.', 'Close institutional details make hard elimination questions.', 'Notes: Planning Commission to NITI Aayog'),
  q(23, 'hard', 'assertion-reason', 'Statement I: Monthly unemployment on Current Weekly Status (5.0% in September 2026) is higher than annual usual status unemployment (3.1% in 2025).\nStatement II: CWS has a seven-day reference that catches short-term joblessness, while usual status has a long reference and includes subsidiary work.', null, 'Which one of the following is correct?', SI, 0,
    'Both are correct, and II explains I. The note says annual and monthly numbers differ mainly because of this difference in status.',
    ['', 'II does explain I: the note attributes the difference mainly to the reference period.', 'II is correct: these are the definitions of the two statuses.', 'I is correct on the data as of those dates.'],
    'CWS versus usual status', 'Always name the status before quoting a jobless rate.', 'A trap in any comparison of unemployment data.', 'Notes: Unemployment; PIB, PLFS 2025; MoSPI, PLFS Monthly Bulletin, September 2026'),
  q(24, 'hard', 'assertion-reason', 'Statement I: Critics argue that the VB-G RAM G Act weakens demand-based rights through a normative allocation and changes to funding.\nStatement II: The Act reduced the statutory guarantee from 125 to 100 days.', null, 'Which one of the following is correct?', SI, 2,
    'Statement I is correct: this is the critics\' argument. Statement II reverses the change: the guarantee rose from 100 to 125 days.',
    ['II is incorrect, so it cannot explain I: the guarantee rose to 125 days.', 'II is incorrect, as it reverses the change in days.', '', 'I is correct: this criticism is recorded in the note.'],
    'VB-G RAM G debate', 'More days, but the debate is on funding and demand.', 'The rights versus planning debate is a likely Mains question.', 'Notes: Key laws and schemes'),
  q(25, 'hard', 'match', 'Consider the following pairs:', ['1. Structural unemployment : Graduates in low-demand fields', '2. Frictional unemployment : Export units in a slump', '3. Seasonal unemployment : Agriculture off-season'], 'How many of the above pairs are correctly matched?', COUNT, 1,
    'Pairs 1 and 3 are correct. Pair 2 is wrong: export units in a slump show cyclical unemployment. Frictional unemployment is the gap between jobs.',
    ['Pairs 1 and 3 both match, so more than one is correct.', '', 'Pair 2 fails: a slump causes cyclical unemployment.', 'Pairs 1 and 3 are correct, so "None" is wrong.'],
    'Types of unemployment', 'Match the cause: skills, slump, season or job change.', 'Examples are harder to match than definitions.', 'Notes: Unemployment, read the survey first'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-0126-1', day: DAY, marks: 10, words: 150, directive: 'Discuss', question: 'India\'s poverty numbers differ widely depending on the measure used. Discuss what the different measures show, and their limits.',
    mustCover: ['Consumption lines: Tendulkar and Rangarajan', 'International line: World Bank at PPP', 'MPI: Alkire-Foster method and data', 'Why numbers differ', 'Limits of each', 'Conclusion on what policy should use'],
    model: `Introduction
Poverty estimates differ because they ask different questions. Most disputes in this area come from method.

The measures
Consumption line: is spending below a line? Tendulkar gave 21.9% and Rangarajan 29.5% for 2011-12. No new official line has been adopted since.
International line: the Budget 2026-27 document gives extreme poverty of 5.3% for 2022-23, at PPP.
MPI: is a person deprived on at least one-third of weighted indicators? NITI Aayog's headcount fell from 29.17% in 2013-14 to a projected 11.28% in 2022-23, with about 24.82 crore people leaving MPI poverty.

Limits
The consumption line is dated.
The World Bank line is criticised as low.
MPI counts access, not quality, and 2022-23 is a projection.

Yet all the measures point to decline.

Conclusion
No single number suffices. India should update an official line using HCES, keep MPI for non-income deprivation, and always state the measure and year.` },
  { id: 'm-0126-2', day: DAY, marks: 10, words: 150, directive: 'Examine', question: 'Examine the replacement of MGNREGA by the VB-G RAM G Act from the standpoint of rural rights and federal cost-sharing.',
    mustCover: ['Facts: commencement 1 July 2026, repeal of MGNREGA, 125 days', 'Government case: durable assets and better planning', 'Critics: normative allocation, funding changes, weaker demand-based right', 'Federal implications', 'What to monitor and way forward'],
    model: `Introduction
The VB-G RAM G Act, 2025 came into force on 1 July 2026 and repealed MGNREGA, 2005. The statutory guarantee rose from 100 to 125 days.

The government's case
More guaranteed days for rural households.
Durable rural assets and better planning.
Budget 2026-27 raised the allocation by 42.8% over RE (PRS).

The critics' case
A normative allocation may cap work, weakening the demand-based character of the right.
Changes to funding may shift costs to States, and fiscally weak States may struggle.
A larger entitlement on paper means little if funds do not match demand.

Assessment
The test lies in rollout: whether work is provided on demand, wages are paid on time, and poorer States can bear their share. The exact funding pattern should be read from the Act and its rules.

Conclusion
Asset quality and rights need not conflict. Demand-responsive budgets and fair cost-sharing would secure both.` },
  { id: 'm-0126-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse', question: 'India\'s unemployment rate has fallen, yet concerns about jobs persist. Critically analyse with reference to PLFS data and recent labour reforms.',
    mustCover: ['PLFS method: usual status and CWS, ratios', 'Improvement: UR decline, female LFPR, youth UR', 'Concerns: agriculture share, self-employment, gig work, educated unemployment', 'Labour Codes and employment schemes', 'Both sides on reforms', 'Forward-looking conclusion'],
    model: `Introduction
The PLFS measures LFPR, WPR and the unemployment rate. Usual status has a long reference, while Current Weekly Status catches short-term joblessness, so the status must always be named.

The improvement
Usual status unemployment fell from 6.0% in 2017-18 to 3.2% in 2023-24, and 3.1% in 2025.
Female LFPR rose sharply from 23% in 2017-18 to 40.0% in 2025.
Youth unemployment fell to 9.9% in 2025 from 10.3%.

Why concerns persist
A low UR does not show job quality. CWS unemployment was 5.0% in September 2026, and urban CWS 6.9%.
Agriculture still held 43.0% of employment in 2025, with disguised unemployment on family farms.
About 60% of the employed were working owners in Q2 2025-26, many in very small units.
Much of the female rise is self-employment, including unpaid helpers.
Educated unemployment was 6.5% in 2025, which suggests a structural mismatch.
Gig workers are about 2% of the workforce, and about 40% earn under Rs 15,000 a month.

Reforms
The four Labour Codes, effective 21 November 2025, merged 29 laws and recognise gig workers. Supporters stress ease of doing business; critics fear weaker worker protection. PM Viksit Bharat Rozgar Yojana offers employment-linked incentives, and e-Shram registers informal workers.

Assessment
The data show more people at work, not necessarily better work. Both views hold in part.

Conclusion
Labour-intensive manufacturing, skills matched to demand, female-friendly work and social security for gig workers would turn falling unemployment into secure livelihoods.` },
]
