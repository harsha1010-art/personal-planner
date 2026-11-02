import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2027-01-25'
const S = 'Notes: External sector, exchange rate, trade and institutions'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-0125-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  y(2020, 51, 23, 'easy', 'statement', 'With reference to Foreign Direct Investment in India, which one of the following is considered its major characteristic ?', null, null,
    ['It is the investment through capital instruments essentially in a listed company.', 'It is a largely non-debt creating capital flow.', 'It is the investment which involves debt-servicing.', 'It is the investment made by foreign institutional investors in the Government securities.'], 1,
    'FDI brings a lasting equity interest, not a loan, so it is largely non-debt creating. It is also harder to withdraw than portfolio money.',
    ['FDI is not confined to listed companies; it denotes a lasting interest, wherever the company is listed.', '', 'Debt-servicing belongs to borrowing such as ECBs; FDI is equity-type capital.', 'Institutional purchases of government securities are portfolio flows, not FDI.'],
    'Nature of FDI', 'FDI: lasting interest, non-debt, harder to withdraw.', 'UPSC set this in 2020 (Q51).', 'Notes: The big picture, FDI and FPI; UPSC GS Paper I 2020'),
  y(2016, 18, 9, 'easy', 'factual', 'Which of the following best describes the term \'import cover\', sometimes seen in the news?', null, null,
    ['It is the ratio of value of imports to the Gross Domestic Product of a country', 'It is the total value of imports of a country in a year', 'It is the ratio between the value of exports and that of imports between two countries', 'It is the number of months of imports that could be paid for by a country\'s international reserves'], 3,
    'Import cover expresses reserves in months of imports. RBI put it at about 11 months in October 2026.',
    ['A ratio of imports to GDP measures trade openness and has nothing to do with reserves.', 'The total value of imports is the import bill, without any link to reserves.', 'A ratio of exports to imports describes bilateral trade, not reserve adequacy.', ''],
    'Import cover', 'Import cover = reserves in months of imports.', 'UPSC set this in 2016 (Q18). It is the most quoted measure of reserve adequacy.', 'Notes: Reserves and external debt; UPSC GS Paper I 2016'),
  y(2016, 75, 27, 'easy', 'factual', '\'Global Financial Stability Report\' is prepared by the', null, null,
    ['European Central Bank', 'International Monetary Fund', 'International Bank for Reconstruction and Development', 'Organization for Economic Cooperation and Development'], 1,
    'The IMF prepares the Global Financial Stability Report, as well as the World Economic Outlook.',
    ['The European Central Bank is a regional central bank and does not publish this report.', '', 'The IBRD is a part of the World Bank, whose flagship is the World Development Report.', 'The OECD is known for tax and policy coordination, such as BEPS, and not for this report.'],
    'IMF reports', 'IMF: World Economic Outlook and Global Financial Stability Report.', 'UPSC set this in 2016 (Q75). The note says UPSC asks who publishes which report.', 'Notes: Global institutions; UPSC GS Paper I 2016'),
  q(1, 'easy', 'factual', 'In India\'s Balance of Payments, remittances from Indians working abroad are recorded under the', null, null,
    ['current account', 'capital and financial account', 'errors and omissions', 'change in reserves'], 0,
    'Remittances are transfers and belong to the current account, because they create no future claim.',
    ['', 'The capital and financial account holds items that create a claim or liability, such as FDI or loans.', 'Errors and omissions is only a balancing item for gaps in records.', 'Change in reserves records what RBI adds or uses, not the original transaction.'],
    'Remittances in BoP', 'No future claim: current account. Claim or liability: capital account.', 'The note flags this as a common error.', 'Notes: The big picture'),
  q(2, 'easy', 'application', 'The market exchange rate moves from Rs 90 to Rs 95 per US dollar under a managed float. This movement is best described as', null, null,
    ['depreciation of the rupee', 'appreciation of the rupee', 'devaluation of the rupee', 'revaluation of the rupee'], 0,
    'More rupees are needed to buy one dollar, and the market set the move. So the rupee has depreciated.',
    ['', 'Appreciation would mean fewer rupees per dollar; here it takes more.', 'Devaluation is an official change under a fixed rate, and this is a market move.', 'Revaluation is an official upward change under a fixed rate.'],
    'Depreciation', 'Higher number per dollar means a weaker rupee.', 'Direction of the quote is an easy point to get wrong.', 'Notes: Exchange rates from scratch'),
  q(3, 'easy', 'match', 'Consider the following pairs:', ['1. World Economic Outlook : IMF', '2. World Development Report : World Bank', '3. Asian Development Outlook : AIIB'], 'How many of the above pairs are correctly matched?', COUNT, 1,
    'Pairs 1 and 2 are correct. Pair 3 is wrong: the Asian Development Outlook is an ADB report.',
    ['Pairs 1 and 2 are both correct, so more than one matches.', '', 'Pair 3 fails: the report belongs to the ADB, not the AIIB.', 'Pairs 1 and 2 are correct, so "None" is wrong.'],
    'Who publishes what', 'IMF WEO; World Bank WDR; ADB Asian Development Outlook.', 'Report-institution pairs are a repeated question type.', 'Notes: Global institutions'),
  q(4, 'easy', 'match', 'Consider the following pairs:', ['1. Asian Infrastructure Investment Bank : Beijing', '2. New Development Bank : Shanghai', '3. Asian Development Bank : Manila'], 'How many of the above pairs are correctly matched?', COUNT, 2,
    'All three are correct: the AIIB is based in Beijing, the BRICS bank (NDB) in Shanghai, and the ADB in Manila.',
    ['Pairs 2 and 3 are also correct, so more than one matches.', 'All three match; none of the locations is wrong.', '', 'Each pair is correct, so "None" is wrong.'],
    'Multilateral banks', 'AIIB Beijing, NDB Shanghai, ADB Manila.', 'AIIB and NDB are easily mixed up because both are China-based.', 'Notes: Global institutions'),
  q(5, 'easy', 'factual', 'As of November 2026, which one of the following currencies is not in the IMF\'s SDR basket?', null, null,
    ['Indian rupee', 'Chinese yuan', 'Japanese yen', 'Pound sterling'], 0,
    'The SDR basket has five currencies: the US dollar, euro, Chinese yuan, Japanese yen and pound sterling. The rupee is not one of them.',
    ['', 'The yuan is one of the five SDR currencies.', 'The yen is one of the five SDR currencies.', 'Pound sterling is one of the five SDR currencies.'],
    'SDR basket', 'SDR: dollar, euro, yuan, yen, pound.', 'SDRs are also a part of India\'s reserves.', 'Notes: Global institutions'),

  // Moderate
  y(2020, 52, 23, 'moderate', 'multi-statement', 'With reference to the international trade of India at present, which of the following statements is/are correct ?', ['1. India\'s merchandise exports are less than its merchandise imports.', '2. India\'s imports of iron and steel, chemicals, fertilisers and machinery have decreased in recent years.', '3. India\'s exports of services are more than its imports of services.', '4. India suffers from an overall trade/current account deficit.'], 'Select the correct answer using the code given below :',
    ['1 and 2 only', '2 and 4 only', '3 only', '1, 3 and 4 only'], 3,
    'India has a goods deficit, a services surplus, and an overall current account deficit. Statement 2 was not the trend, so the last code fits.',
    ['Statement 2 fails: these imports had not declined, and statement 3 has been left out.', 'Statement 2 fails: these imports had not declined, and statements 1 and 3 have been left out.', 'Statements 1 and 4 are also correct: India runs both a goods deficit and a current account deficit.', ''],
    'Pattern of India\'s trade', 'Goods deficit, services surplus, current account deficit.', 'UPSC set this in 2020 (Q52). The pattern still holds in the Q1 2026-27 data.', 'Notes: The big picture; UPSC GS Paper I 2020'),
  y(2019, 86, 39, 'moderate', 'statement', 'Which one of the following is not the most likely measure the Government/RBI takes to stop the slide of Indian rupee?', null, null,
    ['Curbing imports of non-essential goods and promoting exports', 'Encouraging Indian borrowers to issue rupee denominated Masala Bonds', 'Easing conditions relating to external commercial borrowing', 'Following an expansionary monetary policy'], 3,
    'Lower rates and easier money tend to push capital out and weaken the rupee. The other three reduce dollar demand or bring more dollars in.',
    ['Curbing imports and promoting exports reduces the net demand for dollars, which supports the rupee.', 'Masala Bonds bring in foreign money while the currency risk stays with investors, which supports the rupee.', 'Easier ECB rules bring in dollars, which supports the rupee.', ''],
    'Defending the rupee', 'To support the rupee: fewer dollars out, more dollars in, and not easier money.', 'UPSC set this in 2019 (Q86).', 'Notes: Exchange rates from scratch; UPSC GS Paper I 2019'),
  y(2019, 63, 29, 'moderate', 'multi-statement', 'Consider the following statements :', ['1. Most of India\'s external debt is owed by governmental entities.', '2. All of India\'s external debt is denominated in US dollars.'], 'Which of the statements given above is/are correct?', BOTH, 3,
    'Neither is correct. Most external debt is owed by non-government borrowers, and it comes in several currencies. At end-June 2026, the dollar was 54.8% and the rupee 29.8%.',
    ['Statement 1 fails: non-government borrowers such as companies and banks owe most of it.', 'Statement 2 fails: the dollar share was 54.8%, and the rupee alone was 29.8% (end-June 2026).', 'Both statements fail, on who owes the debt and in what currency it is owed.', ''],
    'External debt profile', 'External debt is mostly non-government, and not all in dollars.', 'UPSC set this in 2019 (Q63).', 'Notes: Reserves and external debt; RBI External Debt release, 30 September 2026; UPSC GS Paper I 2019'),
  y(2022, 3, 3, 'moderate', 'multi-statement', 'With reference to the Indian economy, consider the following statements :', ['1. If the inflation is too high, Reserve Bank of India (RBI) is likely to buy government securities.', '2. If the rupee is rapidly depreciating, RBI is likely to sell dollars in the market.', '3. If interest rates in the USA or European Union were to fall, that is likely to induce RBI to buy dollars.'], 'Which of the statements given above are correct ?',
    ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 1,
    'Selling dollars supports a falling rupee. Lower foreign rates draw money to India, so RBI may buy dollars to curb appreciation. Against high inflation, RBI would sell securities, not buy them.',
    ['Statement 1 fails: buying securities injects cash, which is the wrong response to high inflation.', '', 'Statement 1 fails: buying securities injects cash, which is the wrong response to high inflation.', 'Statement 1 fails: buying securities injects cash, which is the wrong response to high inflation.'],
    'RBI market operations', 'Sell dollars for a weak rupee; sell bonds for high inflation.', 'UPSC set this in 2022 (Q3). It joins the RBI and external sector notes.', 'Notes: Exchange rates from scratch; UPSC GS Paper I 2022'),
  q(6, 'moderate', 'application', 'In a year, a country has a current account deficit of US$ 10 billion and a net capital and financial account inflow of US$ 6 billion. Errors and omissions are zero. What happens to its reserves on a BoP basis?', null, null,
    ['They fall by US$ 4 billion', 'They rise by US$ 4 billion', 'They rise by US$ 16 billion', 'They fall by US$ 16 billion'], 0,
    'Current account + capital and financial account + errors = change in reserves. So -10 + 6 + 0 = -4, a fall of US$ 4 billion.',
    ['', 'Inflows covered only part of the deficit, so reserves cannot rise.', 'A rise of 16 would treat the deficit as an inflow.', 'A fall of 16 would treat the capital inflow as an outflow.'],
    'BoP identity', 'CA + KA + errors = change in reserves.', 'The note works this identity with real data, so a quick variant is fair.', 'Notes: The big picture'),
  q(7, 'moderate', 'assertion-reason', 'Statement I: India\'s current account deficit in Q1 2026-27 was only 0.5% of GDP, despite a merchandise deficit of US$ 86.1 billion.\nStatement II: Net services and remittances largely offset the merchandise deficit in that quarter.', null, 'Which one of the following is correct?', SI, 0,
    'Both are correct (RBI, 1 September 2026). Net services of 51.6 and remittances of 42.9 offset the goods gap, which is why the CAD was small.',
    ['', 'II does explain I: these inflows are the reason the deficit stayed small.', 'II is correct: net services of 51.6 and remittances of 42.9 together exceed the goods deficit of 86.1.', 'I is correct: the CAD was US$ 4.2 billion, or 0.5% of GDP.'],
    'Why the CAD stays low', 'Services and remittances finance the goods gap.', 'The structure of the CAD is a likely Mains angle too.', 'Notes: The big picture; RBI BoP release, 1 September 2026'),
  q(8, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. Foreign portfolio investment usually means a stake of 10% or more in the equity of a firm.', '2. FDI is harder to withdraw than portfolio investment.', '3. External commercial borrowing is part of the current account.'], 'How many of the above statements are correct?', COUNT, 0,
    'Only statement 2 is correct. The 10% threshold marks FDI, and portfolio flows are below it. ECBs create a liability, so they sit in the capital and financial account.',
    ['', 'Statements 1 and 3 both fail: 10% or more marks FDI, and ECBs are in the capital account.', 'Statements 1 and 3 fail, as they misplace FPI and ECB.', 'Statement 2 is correct, so "None" is wrong.'],
    'Types of capital flow', 'FDI 10% or more; FPI below; ECB in the capital account.', 'Separating these flows is needed to read any BoP table.', 'Notes: The big picture, FDI and FPI'),
  q(9, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. India has full capital account convertibility.', '2. The rupee has been convertible on the current account since August 1994 (IMF Article VIII).'], 'Which of the statements given above is/are correct?', BOTH, 1,
    'Statement 2 is correct. Statement 1 is wrong: capital account convertibility in India is only partial. The Tarapore Committees studied it.',
    ['Statement 1 fails: India has only partial capital account convertibility.', '', 'Statement 1 fails, as convertibility on the capital account is partial.', 'Statement 2 is correct: August 1994 is the date of current account convertibility.'],
    'Convertibility', 'Current account: full since 1994. Capital account: partial.', 'A standard distinction, with a date and committee attached.', 'Notes: Exchange rates from scratch'),
  q(10, 'moderate', 'chronology', 'Arrange the following events in chronological order:', ['1. "Taper tantrum" hits the rupee', '2. LERMS, a dual exchange rate', '3. FEMA replaces FERA', '4. Current account convertibility'], 'Select the correct order:',
    ['2-4-3-1', '2-3-4-1', '4-2-3-1', '2-4-1-3'], 0,
    'LERMS came in 1992-93, current account convertibility in 1994, FEMA in 1999, and the taper tantrum in 2013.',
    ['', 'Current account convertibility (1994) came before FEMA (1999).', 'LERMS (1992-93) came before current account convertibility (1994).', 'FEMA (1999) came well before the taper tantrum (2013).'],
    'Path to managed float', '1991 crisis, 1993 market rate, 1994 convertibility, 1999 FEMA.', 'Chronology of liberalisation is a natural question format.', 'Notes: Exchange rates from scratch'),
  q(11, 'moderate', 'multi-statement', 'If the rupee weakens against the dollar, consider the following likely effects:', ['1. An IT exporter earning in dollars receives more rupees.', '2. An oil refiner paying in dollars faces a higher rupee cost.', '3. A firm with an unhedged dollar loan finds its rupee burden lighter.'], 'How many of the above effects are correct?', COUNT, 1,
    'Effects 1 and 2 are correct. Effect 3 is reversed: an unhedged dollar loan takes more rupees to repay.',
    ['Effects 1 and 2 both hold, so more than one is correct.', '', 'Effect 3 fails: the rupee burden of a dollar loan rises when the rupee falls.', 'Effects 1 and 2 are correct, so "None" is wrong.'],
    'Who gains from a weak rupee', 'Exporters gain; importers and unhedged borrowers lose.', 'The weak rupee debate is a likely Mains question.', 'Notes: Exchange rates from scratch'),
  q(12, 'moderate', 'statement', 'Crude oil prices rise sharply. Which one of the following is the least likely short-term consequence for India?', null, null,
    ['RBI buys dollars heavily to build reserves as the rupee strengthens', 'The trade deficit and CAD widen', 'Imported inflation rises through fuel, fertiliser and transport costs', 'The government changes excise duty or the subsidy bill rises'], 0,
    'An oil shock weakens the rupee, so RBI is more likely to sell dollars than buy them. The other three are part of the usual chain.',
    ['', 'A higher import bill does widen the trade deficit and CAD, as India imports most of its crude.', 'Imported inflation through fuel and fertiliser is a direct effect.', 'Excise changes or a higher subsidy bill are part of the usual government response.'],
    'Oil shock transmission', 'Oil up: CAD up, rupee down, inflation up, RBI sells dollars.', 'The note says this chain played out in 2026.', 'Notes: Exchange rates from scratch; RBI Governor\'s Statement, 7 October 2026'),
  q(13, 'moderate', 'match', 'Match List I with List II:', ['A. Anti-dumping duty', 'B. Countervailing duty', 'C. Safeguard measure', '1. Against subsidised imports', '2. Against an import surge', '3. Against imports below normal price'], 'Select the correct answer:',
    ['A-1, B-2, C-3', 'A-3, B-2, C-1', 'A-3, B-1, C-2', 'A-2, B-1, C-3'], 2,
    'Anti-dumping targets imports below normal price. Countervailing duty targets subsidies. Safeguards respond to an import surge.',
    ['Anti-dumping concerns pricing below normal value, not subsidies.', 'Countervailing duty answers subsidies, not surges.', '', 'Anti-dumping concerns pricing below normal value, not surges.'],
    'WTO trade remedies', 'Dumping: price. Countervailing: subsidy. Safeguard: surge.', 'Three close terms make a clean matching question.', 'Notes: Global institutions'),
  q(14, 'moderate', 'statement', 'India\'s reported foreign exchange reserves fall in a week when the RBI has made no dollar sales. The most likely reason is that', null, null,
    ['the dollar strengthened, so reserve assets held in euros and yen are worth less in dollars', 'FDI inflows are directly subtracted from reported reserves', 'SDRs were excluded from the definition of reserves that week', 'remittances are recorded as a liability against reserves'], 0,
    'This is a valuation effect. Assets in other currencies lose dollar value when the dollar strengthens, even without any RBI sale.',
    ['', 'FDI inflows add dollars to the system, and they are not subtracted from reserves.', 'SDRs are a regular part of reserves.', 'Remittances are current account inflows, and they create no liability.'],
    'Valuation effect', 'Reserves can fall without any RBI sale.', 'Explains why weekly reserves differ from the BoP-basis change.', 'Notes: Reserves and external debt'),
  q(15, 'moderate', 'current-static', 'With reference to India\'s trade agreements, consider the following statements, each stated as confirmed from PIB and Commerce Ministry documents up to October 2026:', ['1. The TEPA with EFTA came into force on 1 October 2025.', '2. Talks on the India-EU FTA were concluded on 27 January 2026.', '3. The India-New Zealand agreement was signed on 27 April 2026.'], 'How many of the above statements are correct?', COUNT, 2,
    'All three are correct. Note that the statements give past events, while the status of these deals can change, so check before the exam.',
    ['Statements 2 and 3 are also correct, so more than one holds.', 'All three hold; each date is confirmed by the listed documents.', '', 'Each statement is confirmed, so "None" is wrong.'],
    'India\'s FTAs', 'Concluded, signed and in force are different stages of an FTA.', 'The run of trade deals makes them current-static material for 2027.', 'Notes: Trade and agreements; PIB; Commerce Ministry factsheet, April 2026'),

  // Hard
  y(2020, 56, 23, 'hard', 'multi-statement', 'With reference to Trade-Related Investment Measures (TRIMS), which of the following statements is/are correct ?', ['1. Quantitative restrictions on imports by foreign investors are prohibited.', '2. They apply to investment measures related to trade in both goods and services.', '3. They are not concerned with the regulation of foreign investment.'], 'Select the correct answer using the code given below :',
    ['1 and 2 only', '2 only', '1 and 3 only', '1, 2 and 3'], 2,
    'TRIMS bars trade-related measures such as quantitative restrictions and applies only to trade in goods. It does not regulate foreign investment as such. So statements 1 and 3 hold.',
    ['Statement 2 fails: TRIMS applies to trade in goods only.', 'Statement 2 is the false one: TRIMS does not cover services.', '', 'Statement 2 fails: TRIMS applies to trade in goods only.'],
    'TRIMS', 'TRIMS: goods only, and not an investment regulation as such.', 'UPSC set this in 2020 (Q56).', 'Notes: Global institutions; WTO TRIMS Agreement; UPSC GS Paper I 2020'),
  y(2022, 2, 3, 'hard', 'multi-statement', 'With reference to the Indian economy, consider the following statements :', ['1. An increase in Nominal Effective Exchange Rate (NEER) indicates the appreciation of rupee.', '2. An increase in the Real Effective Exchange Rate (REER) indicates an improvement in trade competitiveness.', '3. An increasing trend in domestic inflation relative to inflation in other countries is likely to cause an increasing divergence between NEER and REER.'], 'Which of the above statements are correct ?',
    ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 2,
    'A higher NEER is an appreciation. REER adjusts NEER for relative inflation, so higher domestic inflation pulls the two apart. A rising REER signals a loss, not a gain, of competitiveness.',
    ['Statement 2 fails: a rising REER means exports become less competitive.', 'Statement 2 fails: a rising REER means exports become less competitive.', '', 'Statement 2 fails: a rising REER means exports become less competitive.'],
    'NEER and REER', 'REER is NEER adjusted for inflation; up means less competitive.', 'UPSC set this in 2022 (Q2).', 'Notes: Exchange rates from scratch; UPSC GS Paper I 2022'),
  y(2022, 61, 29, 'hard', 'multi-statement', 'Consider the following statements :', ['1. Tight monetary policy of US Federal Reserve could lead to capital flight.', '2. Capital flight may increase the interest cost of firms with existing External Commercial Borrowings (ECBs).', '3. Devaluation of domestic currency decreases the currency risk associated with ECBs.'], 'Which of the statements given above are correct ?',
    ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 0,
    'Higher US rates can pull capital away, and capital flight raises the cost of servicing ECBs. A weaker domestic currency raises the burden of foreign debt, so statement 3 fails.',
    ['', 'Statement 3 fails: devaluation raises the local currency cost of foreign debt.', 'Statement 3 fails: devaluation raises the local currency cost of foreign debt.', 'Statement 3 fails: devaluation raises the local currency cost of foreign debt.'],
    'Capital flight and ECBs', 'A weaker currency makes foreign debt heavier.', 'UPSC set this in 2022 (Q61). The 2013 taper tantrum is the Indian example.', 'Notes: Exchange rates from scratch; UPSC GS Paper I 2022'),
  q(16, 'hard', 'application', 'A country has free movement of capital and wants its central bank to set interest rates independently. According to the impossible trinity, it must give up', null, null,
    ['a fixed exchange rate', 'free movement of capital', 'independent monetary policy', 'its current account convertibility'], 0,
    'A country cannot have a fixed rate, free capital and independent monetary policy all at once. Keeping the last two means letting the exchange rate move.',
    ['', 'Free capital is one of the two aims the country has chosen to keep.', 'Independent monetary policy is the other aim the country has chosen to keep.', 'Current account convertibility is not one of the three parts of the trinity.'],
    'Impossible trinity', 'Pick two of three: fixed rate, free capital, independent policy.', 'Explains why India manages a float while keeping capital controls partial.', 'Notes: Exchange rates from scratch'),
  q(17, 'hard', 'assertion-reason', 'Statement I: A low current account deficit implies that the merchandise trade deficit is also low.\nStatement II: Remittances belong to the current account.', null, 'Which one of the following is correct?', SI, 3,
    'Statement I is wrong: India had a huge goods deficit with a CAD of only 0.5% of GDP in Q1 2026-27. Statement II is correct.',
    ['I is incorrect: services and remittances can offset a large goods deficit.', 'I is incorrect: a small CAD can coexist with a large goods deficit.', 'II is correct, and I is the incorrect one: the note shows a large goods gap beside a small CAD.', ''],
    'CAD versus trade deficit', 'A low CAD does not mean a low trade deficit.', 'This is the note\'s main trap on the BoP.', 'Notes: The big picture'),
  q(18, 'hard', 'current-static', 'With reference to India\'s external debt at end-June 2026 (RBI, 30 September 2026), consider the following statements:', ['1. Short-term debt by original maturity was 19.7% of the total.', '2. The debt service ratio was 5.6% of current receipts.', '3. Rupee-denominated debt was a larger share than dollar-denominated debt.'], 'How many of the above statements are correct?', COUNT, 1,
    'Statements 1 and 2 are correct. Statement 3 is wrong: the dollar share was 54.8%, and the rupee share was 29.8%.',
    ['Statements 1 and 2 both hold, so more than one is correct.', '', 'Statement 3 fails: the dollar share of 54.8% exceeds the rupee share of 29.8%.', 'Statements 1 and 2 are in the RBI release, so "None" is wrong.'],
    'External debt indicators', 'Check share, maturity and service ratio together.', 'These are the standard indicators of external vulnerability.', 'Notes: Reserves and external debt; RBI External Debt release, 30 September 2026'),
  q(19, 'hard', 'multi-statement', 'Consider the following statements:', ['1. The SDR is a currency used by households for retail payments.', '2. Voting in the IMF is on the basis of one country, one vote.', '3. The World Bank\'s main task is short-term Balance of Payments help.'], 'How many of the above statements are correct?', COUNT, 3,
    'None is correct. The SDR is a reserve asset and not a currency. IMF voting is by quota. Short-term BoP help is the IMF\'s role, while the World Bank does long-term development lending.',
    ['No statement holds: all three misdescribe the institutions.', 'No two hold: SDR, quota voting and the World Bank\'s role are all misstated.', 'All three are false, as each confuses a basic feature.', ''],
    'IMF and World Bank', 'IMF: short-term, quota votes, SDR. World Bank: long-term development.', 'Basic differences between the Bretton Woods twins are tested repeatedly.', 'Notes: Global institutions'),
  q(20, 'hard', 'multi-statement', 'With reference to the WTO, consider the following statements:', ['1. The Most Favoured Nation principle means that imported goods, once inside a country, must be treated like locally made goods.', '2. The Appellate Body has been unable to work since 2019, as the US blocked appointments.'], 'Which of the statements given above is/are correct?', BOTH, 1,
    'Statement 2 is correct. Statement 1 describes national treatment. MFN means that a member must treat all other members alike.',
    ['Statement 1 fails: it describes national treatment, not MFN.', '', 'Statement 1 fails, as it mixes up MFN with national treatment.', 'Statement 2 is correct: this is the WTO\'s dispute settlement crisis.'],
    'WTO principles', 'MFN: among foreigners. National treatment: foreign versus local.', 'A close pair of principles and a live institutional crisis.', 'Notes: Global institutions'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-0125-1', day: DAY, marks: 10, words: 150, directive: 'Discuss', question: 'India runs a large merchandise trade deficit, yet its current account deficit remains modest. Discuss the reasons and the risks in this structure.',
    mustCover: ['BoP structure and definition of CAD', 'Q1 2026-27 numbers with date', 'Role of services and remittances', 'Investment income outflow', 'Risks: oil, dependence on remittances, capital flows', 'Way forward'],
    model: `Introduction
The current account records goods, services, income and transfers. In Q1 2026-27, India's merchandise deficit was US$ 86.1 billion, but the CAD was only US$ 4.2 billion, or 0.5% of GDP (RBI, September 2026). For 2025-26, the CAD was 0.6% of GDP.

Why the CAD stays modest
Net services of US$ 51.6 billion, led by IT, business services and Global Capability Centres.
Remittances of US$ 42.9 billion.
These more than offset the goods gap, before other items, mainly net investment income, of about -US$ 12.6 billion.

Risks
The goods deficit is exposed to crude prices, as India imports most of its crude.
Remittances depend on host economies, including West Asia.
AI may reduce routine service exports.
Even a small CAD needs financing: FPI outflows meant reserves fell by US$ 8.1 billion in the quarter.

Conclusion
Export-oriented manufacturing, energy diversification and durable FDI would make this strength more secure.` },
  { id: 'm-0125-2', day: DAY, marks: 10, words: 150, directive: 'Examine', question: 'Is a weak rupee good or bad for the Indian economy? Examine with reference to recent developments.',
    mustCover: ['Depreciation and managed float explained', 'Gainers: exporters', 'Losers: importers, unhedged borrowers, students abroad, inflation', 'Link with oil and FPI flows', 'RBI approach and competitiveness (REER)', 'Balanced conclusion'],
    model: `Introduction
Under India's managed float, the market sets the rate and RBI curbs volatility. As of 30 October 2026, the rupee was Rs 95.25 per dollar, amid crude volatility and FPI outflows.

How it helps
Exporters earn more rupees: a $1,000 IT contract yields Rs 95,000 rather than Rs 85,000.
Imports become costlier, which may favour domestic producers.

How it hurts
Oil, fertiliser and other imports cost more, adding to inflation.
Unhedged foreign borrowers carry a heavier burden; the dollar share of external debt was 54.8% in June 2026.
Overseas study and travel become costlier.
With inflation rising, it adds to pressure on RBI, which raised rates in October 2026.

Assessment
Export gains depend on demand abroad and on the REER, not just on the nominal rate. Sharp falls hurt confidence more than gradual adjustment does.

Conclusion
Neither strength nor weakness is the goal. An orderly rate, reserves as a buffer and export competitiveness matter most.` },
  { id: 'm-0125-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse', question: 'Critically analyse the resilience of India\'s external sector in the light of the 2026 oil shock and capital outflows.',
    mustCover: ['Frame: external sector resilience and 1991 contrast', 'Strengths: CAD, reserves, import cover, debt ratio, rating, services', 'Vulnerabilities: oil, FPI, rupee, reserves depletion, short-term debt', 'Reserves adequacy: cover versus carry cost', 'Role of FTAs and FDI', 'Forward-looking conclusion'],
    model: `Introduction
External resilience is the capacity to absorb shocks without a payments crisis. In 1991, India pledged gold and sought IMF help. In 2026, a West Asia flare-up raised crude prices and FPIs sold, which tests how far India has come.

Strengths
CAD of 0.5% of GDP in Q1 2026-27, supported by services and remittances.
Reserves of US$ 734.6 billion on 2 October 2026, covering about 11 months of imports and 94.4% of external debt.
External debt of 20.8% of GDP at end-June 2026, with a debt service ratio of 5.6%.
Total exports were a record US$ 863.1 billion in 2025-26.
S&P affirmed a BBB rating, stable, in August 2026.

Vulnerabilities
India imports most of its crude, so oil feeds the CAD, the rupee and inflation.
Portfolio money is volatile: net FPI outflow was US$ 10.3 billion from April to 5 October 2026.
Reserves fell US$ 8.1 billion on a BoP basis in Q1, and the rupee reached 95.25 by 30 October.
Holding large reserves also has a carrying cost.
The quarterly goods deficit widened from US$ 68.9 billion to US$ 86.1 billion, year on year.

Assessment
India is far from a 1991-type risk, as the buffers are large. Yet resilience rests heavily on services and remittances, and less on goods competitiveness.

Way forward
Energy diversification, durable FDI over hot money, and use of FTAs by small exporters. Sensitive sectors and rules of origin should be guarded.

Conclusion
The buffers buy time; a stronger export base brings lasting security.` },
]
