import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-01-22',
  summary: 'How a country measures its output and prices, from first principles: GDP, GVA, real and nominal, the 2022-23 GDP series, the 2024 CPI series, inflation types, and why growth is not the same as development.',
  minutes: 28,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'An economy does three things at once. Firms **produce** goods and services. That production pays **incomes** as wages, rent, interest and profit. People and firms then **spend** those incomes. All three are views of one loop, so in principle they give the same total. **GDP** is the number that measures this loop. **Inflation** tells you how much of a rise in GDP is real and how much is only higher prices. **Development** asks whether people actually live better.' },
    { t: 'flow', caption: 'The circular flow. Leakages (saving, taxes, imports) leave the loop. Injections (investment, government spending, exports) enter it.', steps: [
      { title: 'Firms produce', sub: 'Production method: add up value added' },
      { title: 'Incomes are paid', sub: 'Income method: wages, rent, interest, profit' },
      { title: 'Households spend', sub: 'Expenditure method: C + I + G + (X - M)' },
      { title: 'Firms sell and produce again', sub: 'The loop continues' },
    ] },

    { t: 'h', text: 'GDP and its relatives' },
    { t: 'p', text: '**Gross Domestic Product (GDP)** is the value of final goods and services produced within the domestic territory in a period. Three words matter. **Final** avoids double counting: flour sold to a baker is not counted separately from the bread. **Domestic** means the location, not the owner: a Korean car plant in Tamil Nadu counts. **Produced** excludes second-hand sales and pure transfers such as pensions.' },
    { t: 'table', caption: 'Worked example in Rs crore. Follow it line by line. All the other aggregates come from simple adjustments.', head: ['Step', 'Calculation', 'Result', 'Meaning'], rows: [
      ['GVA at basic prices', 'Output 160 minus inputs 60', '100', 'Value added by producers, sector by sector'],
      ['GDP at market prices', '100 + product taxes 12 - product subsidies 2', '110', 'The headline GDP'],
      ['GNI (GNP)', '110 + net factor income from abroad (-1)', '109', 'Income of residents, wherever earned'],
      ['NNI (NNP)', '109 - depreciation 10', '99', 'Income after replacing worn-out capital. Called **national income**'],
      ['Per capita income', 'NNI / population', 'Varies', 'A simple average that hides inequality'],
    ] },
    { t: 'compare', caption: 'Two pairs that are often confused.', columns: [
      { title: 'Gross vs Net', items: ['**Gross** includes depreciation', '**Net** removes depreciation', 'NDP = GDP - depreciation'] },
      { title: 'Domestic vs National', items: ['**Domestic** is about territory', '**National** is about residents', 'GNI = GDP + net factor income from abroad', 'India\'s net factor income is negative: per capita GNI (Rs 2,40,769) was below per capita GDP (Rs 2,43,803) in 2025-26, MoSPI Provisional Estimates, June 2026'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Common errors', text: 'GDP at **market prices** includes net product taxes. **GVA at basic prices** does not. Also, **net factor income from abroad** is about incomes such as wages and investment returns. It is different from net exports. Transfers such as remittances count in the current account, but they are not production.' },

    { t: 'h3', text: 'Real and nominal: a worked example' },
    { t: 'table', caption: 'A one-product economy. Year 1 is the base year.', head: ['', 'Year 1', 'Year 2', 'Change'], rows: [
      ['Quantity (shirts)', '10', '11', '+10%'],
      ['Price (Rs)', '100', '105', '+5%'],
      ['Nominal GDP (current price x quantity)', '1,000', '1,155', '+15.5%'],
      ['Real GDP (base price x quantity)', '1,000', '1,100', '+10%'],
      ['GDP deflator (nominal / real x 100)', '100', '105', '+5%'],
    ] },
    { t: 'p', text: 'Real growth is roughly nominal growth minus deflator inflation. Check against real data: in **Q1 of 2026-27**, nominal GDP grew **10.3%** and real GDP grew **7.8%** (MoSPI, 31 August 2026), so the implied price rise was about 2.3%. The Budget needs nominal growth because tax revenue depends on it. It assumed **10%** nominal growth for 2026-27 (PRS, February 2026).' },

    { t: 'h', text: 'The new GDP series: base year 2022-23' },
    { t: 'p', text: '**Confirmed:** MoSPI released the new series on **27 February 2026**. It replaced base **2011-12**. MoSPI chose 2022-23 because it was a recent normal year after Covid, with good data. A **base year** is the price reference for real GDP. A base change also updates sources and methods, which is why it is different from routine annual revisions.' },
    { t: 'table', caption: 'What changed in the new series (MoSPI press note, 27 February 2026).', head: ['Area', 'Change', 'Why it matters'], rows: [
      ['Deflation', '**Double deflation** in agriculture and manufacturing; volume or single extrapolation elsewhere', 'Output and input prices are deflated separately. If input prices jump, single deflation would misread real value added'],
      ['Informal sector', 'Annual survey data for the unincorporated sector', 'Avoids assuming that informal output moves like the formal sector'],
      ['Companies', 'Activities of multi-activity enterprises separated', 'Better sector allocation'],
      ['Quarterly data', 'Wider use of GST and administrative data; **Proportional Denton** benchmarking', 'Smoother, better-aligned quarters'],
      ['Consumption', 'PFCE on **COICOP 2018** classification', 'Matches international practice'],
      ['Discrepancies', 'Supply and Use Table integration', 'Production and expenditure totals agree more closely'],
    ] },
    { t: 'table', caption: 'Latest official numbers. Real growth uses 2022-23 prices.', head: ['Item', 'Figure', 'As of and source'], rows: [
      ['Real GDP growth 2025-26', '**7.8%** after revision (earlier 7.7%)', 'PIB factsheet on MoSPI data, 1 Sep 2026'],
      ['Real GDP growth 2024-25, 2023-24', '7.2%, 7.3% after revision', 'PIB factsheet, 1 Sep 2026'],
      ['Nominal GDP 2025-26', 'Rs 346.36 lakh crore, up 8.9%', 'MoSPI Provisional Estimates, 5 Jun 2026'],
      ['Real GDP 2025-26', 'Rs 323.12 lakh crore', 'MoSPI, 5 Jun 2026'],
      ['Q1 2026-27 real GDP, real GVA', '7.8%, 8.2%', 'MoSPI, 31 Aug 2026'],
      ['Q1 2026-27 sectors (real GVA)', 'Primary 2.9%, secondary 8.6%, tertiary 10.0%, manufacturing 9.2%', 'MoSPI and PIB, Aug-Sep 2026'],
      ['2026-27 real GDP projection', '7.1%', 'RBI, 7 Oct 2026'],
    ] },
    { t: 'note', kind: 'trap', title: 'Do not mix series', text: 'The 7.4% for 2025-26 in the Economic Survey and Budget (January-February 2026) was on the **old** series. It is not comparable with the 7.6%, 7.7% and 7.8% figures on the new base. The FY26 number moved from 7.6% (Second Advance Estimates) to 7.7% (Provisional) to 7.8% (revision). Always name the release.' },
    { t: 'timeline', caption: 'How one year\'s GDP gets revised. Check the MoSPI Advance Release Calendar for exact dates.', items: [
      { when: 'First Advance Estimates', what: 'Released before the Budget, using part-year data.' },
      { when: 'Second Advance Estimates', what: 'Around the end of February.' },
      { when: 'Provisional Estimates', what: 'After the year ends. For 2025-26, this came on 5 June 2026.' },
      { when: 'Revised estimates', what: 'Later annual rounds use fuller data, as in the August 2026 revisions.' },
    ] },

    { t: 'h', text: 'Inflation from the ground up' },
    { t: 'p', text: '**Inflation** is the rate of change of the general price level. It is calculated on a basket: an index for this month compared with the same month last year. Price level high is not the same as inflation high. If prices stop rising but stay high, inflation is zero.' },
    { t: 'table', caption: 'The three price measures.', head: ['Measure', 'Published by', 'Base', 'Key fact'], rows: [
      ['**CPI**', 'NSO, MoSPI', '**2024 = 100**', 'RBI\'s target measure. Includes services and retail prices'],
      ['**WPI**', 'Office of Economic Adviser, DPIIT', '**2022-23**', 'Goods at first sale; no services. New series 15 June 2026, 957 items (from 697)'],
      ['**GDP deflator**', 'NSO, MoSPI', '2022-23', 'Broadest. Covers everything in GDP. Not monthly'],
    ] },
    { t: 'table', caption: 'New CPI series: confirmed revision, first released 12 February 2026 with January 2026 data.', head: ['Feature', 'Old series', 'New series'], rows: [
      ['Base', '2012', '**2024**'],
      ['Weighted items', '299', '**358**'],
      ['Structure', '6 groups', '**12 divisions** on COICOP 2018'],
      ['Food and beverages weight', '45.86%', 'About 37%. MoSPI says it fell but remains the largest group. Check the exact weight on cpi.mospi.gov.in'],
      ['Back series', '-', 'January 2013 to December 2024'],
    ] },
    { t: 'p', text: '**Latest:** CPI inflation was **5.54%** in September 2026 (rural 6.08%, urban 4.88%), up from 4.83% in August. Food inflation (CFPI) was **7.74%**. Onion inflation was 108.09%. These are provisional (MoSPI, 12 October 2026). **Worked weight example:** food at 7.74% with a weight near 37% contributes about 2.9 points of the 5.54%. So food is a large part of the headline, but less than it would have been on the old basket.' },
    { t: 'compare', caption: 'Causes of inflation.', columns: [
      { title: 'Demand-pull', items: ['Too much spending chases too few goods', 'Causes: expansionary monetary policy, fiscal stimulus, wage rises spent on goods', 'Output rises with prices', 'Response: tighter policy works well'] },
      { title: 'Cost-push', items: ['Input costs rise, so supply falls', 'Causes: crude oil, fertiliser, bad monsoon, rupee fall', 'Output falls while prices rise', 'Response: rate hikes are less effective; supply action is needed'] },
    ] },
    { t: 'list', items: [
      '**Headline** covers everything. **Core** removes food and fuel, so it shows lasting pressure. Core was 4.2% in August 2026 (RBI, October 2026).',
      '**Disinflation:** inflation is falling, prices are still rising. **Deflation:** prices are falling. **Stagflation:** high inflation with low growth. **Reflation:** deliberate policy to reverse deflation.',
      '**Base effect:** inflation compares with a year earlier. CPI averaged only 1.7% in April-December 2025 (Economic Survey 2025-26), so a low base lifts 2026 readings even if monthly rises are modest.',
      '**Phillips curve:** the short-run idea that lower unemployment comes with higher inflation.',
    ] },
    { t: 'table', caption: 'Who wins and who loses from unexpected inflation.', head: ['Loses', 'Gains'], rows: [
      ['Savers with fixed deposits (if the rate is below inflation)', 'Borrowers with fixed-rate loans'],
      ['Pensioners and fixed-wage workers', 'Holders of real assets, sometimes'],
      ['Exporters, if domestic prices rise faster than the rupee falls', 'Government in nominal revenue terms'],
    ] },
    { t: 'note', kind: 'exam', title: 'What UPSC has asked', text: 'Prelims 2021 asked what can cause **demand-pull inflation** (options included expansionary policies, fiscal stimulus and inflation-indexed wages). Prelims 2022 asked about **Inflation-Indexed Bonds** and which activities belong to the **real sector**, such as farming and textile mills as opposed to lending. Prelims 2020 tested whether RBI uses WPI as its key measure. It uses **CPI**.' },

    { t: 'h', text: 'Growth and development' },
    { t: 'compare', columns: [
      { title: 'Growth', items: ['Rise in real output', 'Quantitative', 'GDP, GNI', 'Can be jobless or unequal'] },
      { title: 'Development', items: ['Better lives, freedoms and capabilities (**Amartya Sen**)', 'Qualitative and quantitative', 'HDI, MPI, health, schooling', 'Includes structural change and equity'] },
    ] },
    { t: 'p', text: '**HDI** (UNDP) has three dimensions: long and healthy life, knowledge, and a decent standard of living. India ranked **130 of 193**, value **0.685**, in the 2025 report, using 2023 data. Adjusted for inequality, it falls to **0.475**, a loss of 30.7%. That gap is itself a Mains point. GDP also misses unpaid household work, environmental loss and distribution. That is the reason for ideas such as **green GDP** and the **SDGs**.' },
    { t: 'note', kind: 'recent', title: 'Numbers that will change before Prelims', text: 'Q2 GDP data, First Advance Estimates, the Economic Survey and Budget 2027-28, Second Advance Estimates, and monthly CPI (the next is on 12 November 2026). Note the next RBI projection in the December 2026 policy. Re-check the table above in April 2027.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Why base-year revision matters and what it does to credibility of data. Why the same 7-8% growth feels different across households: compare GDP with per capita income, HDI and employment. Food inflation: whether food weight reduction changes monetary policy, with both sides (better match to current spending, but poor households still spend more on food). Consumption and investment as growth engines: PFCE and GFCF.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'GDP base **2022-23**, released 27 Feb 2026. CPI base **2024**, released 12 Feb 2026. WPI base **2022-23**, released 15 Jun 2026.',
      'GVA + net product taxes = GDP. GDP + net factor income = GNI. GNI - depreciation = NNI.',
      'Nominal 10.3%, real 7.8% in Q1 2026-27. FY26 real growth 7.8% after revision.',
      'RBI target measure is CPI, not WPI.',
      'HDI 2025 report: rank 130, value 0.685.',
    ] },
  ],
  sources: [
    { label: 'MoSPI, Press Note on New Series of GDP Estimates, Base 2022-23, 27 February 2026', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc2026227806501.pdf' },
    { label: 'PIB factsheet on Q1 2026-27 GDP and revisions, 1 September 2026', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/sep/doc_9759_20260901_14422101.pdf' },
    { label: 'MoSPI, Provisional Estimates 2025-26 (PIB), 5 June 2026', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2269286&reg=48&lang=1' },
    { label: 'PIB, CPI on base 2024 for September 2026, 12 October 2026', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2322244&lang=2&reg=48' },
    { label: 'PIB, revision of CPI base to 2024', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2291051&reg=48&lang=2' },
    { label: 'PIB, new WPI and PPI series, base 2022-23', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2272872&reg=3&lang=1' },
    { label: 'RBI, Monetary Policy Statement, 7 October 2026', url: 'https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=63742' },
    { label: 'RBI, Governor\'s Statement, 7 October 2026', url: 'https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=63744' },
    { label: 'PRS, Economic Survey 2025-26 summary', url: 'https://prsindia.org/policy/report-summaries/economic-survey-2025-26' },
    { label: 'PRS, Union Budget 2026-27 Analysis', url: 'https://prsindia.org/files/budget/budget_parliament/2026/Union_Budget_Analysis-2026-27.pdf' },
    { label: 'UNDP India, HDI 2025 release', url: 'https://www.undp.org/india/press-releases/indias-human-development-continues-make-progress-ranks-130-out-193-countries' },
    { label: 'UPSC Prelims GS Paper I, 2020, 2021, 2022', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'MoSPI Advance Release Calendar and latest press notes', where: 'mospi.gov.in', why: 'Exact dates for Q2 and Q3 GDP, First and Second Advance Estimates. Numbers in this note will be replaced by these.', url: 'https://www.mospi.gov.in/' },
      { what: 'CPI weights by division and monthly release', where: 'cpi.mospi.gov.in', why: 'Confirm the exact food and beverages weight in the 2024 series.', url: 'https://cpi.mospi.gov.in/' },
      { what: 'Economic Survey 2026-27, Chapter 1', where: 'indiabudget.gov.in, expected at end-January 2027', why: 'Latest official framing of growth and inflation for Prelims.', url: 'https://www.indiabudget.gov.in/economicsurvey/' },
      { what: 'WPI monthly release', where: 'Office of Economic Adviser, DPIIT', why: 'Latest WPI on the new base.', url: 'https://eaindustry.nic.in/' },
    ],
    current: [
      { issue: 'GDP new series', link: 'Base moved to 2022-23 on 27 February 2026. Revisions in August 2026 raised FY24, FY25 and FY26 growth by 0.1 point each.', source: 'MoSPI, PIB', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/sep/doc_9759_20260901_14422101.pdf' },
      { issue: 'CPI series and inflation rise', link: 'September 2026 inflation reached 5.54%, with food at 7.74%. RBI raised rates in October 2026 partly for this reason.', source: 'PIB, RBI', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2322244&lang=2&reg=48' },
      { issue: 'WPI and IIP rebased', link: 'WPI and PPI moved to 2022-23 on 15 June 2026. The new IIP series on 2022-23 began with April 2026 data.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2272872&reg=3&lang=1' },
    ],
  },
}
