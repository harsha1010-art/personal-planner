import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-01-26',
  summary: 'How India measures poverty and jobs, with worked examples, then inclusion, infrastructure finance, and the journey from the Planning Commission to NITI Aayog.',
  minutes: 27,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Growth becomes development only if it reaches people. That needs three things: people must escape **poverty**, have **work**, and have access to **finance and basic services**. **Infrastructure** connects them to markets, and **planning** sets priorities. UPSC likes the definitions, so first learn how each number is made. Most disputes in this area come from differences in method.' },

    { t: 'h', text: 'Poverty: three ways to count' },
    { t: 'table', caption: 'Income or consumption poverty lines. India has not officially adopted a new line after 2011-12.', head: ['Committee', 'Year', 'Method', 'Key result'], rows: [
      ['Alagh', '1979', 'Calorie norm: 2,400 rural, 2,100 urban', 'First official line'],
      ['Lakdawala', '1993', 'State-specific lines; CPI-based update', 'Poverty varies by state'],
      ['**Tendulkar**', '2009', 'Moved away from calories to a consumption basket including health and education', '21.9% in 2011-12'],
      ['**Rangarajan**', '2014', 'Fresh basket; higher line', '29.5% in 2011-12. Not formally adopted'],
    ] },
    { t: 'compare', caption: 'Three different questions.', columns: [
      { title: 'Consumption poverty', items: ['Is spending below a line?', 'Source: Household Consumption Expenditure Survey (HCES)', 'Last official: 2011-12'] },
      { title: 'International line', items: ['World Bank, per day at PPP', 'Budget 2026-27 document: extreme poverty 5.3% for 2022-23', 'Below the global average, says the document'] },
      { title: 'Multidimensional poverty', items: ['Is the person deprived on several fronts?', 'NITI Aayog using NFHS', 'Covers health, schooling, living standards'] },
    ] },
    { t: 'h3', text: 'The Multidimensional Poverty Index' },
    { t: 'p', text: 'The MPI is based on the **Alkire-Foster method**. A person who is deprived on at least **one-third** of weighted indicators counts as poor. **MPI = H x A**, where H is the share of people who are poor and A is the average deprivation among them. **Worked example:** in a village of 100, 15 people are poor (H = 15%). They are deprived on 50% of indicators on average (A = 50%). MPI = 0.15 x 0.50 = **0.075**. If nobody leaves poverty but deprivation falls, A falls, so MPI shows gains that a simple headcount would miss.' },
    { t: 'wheel', caption: 'India\'s national MPI has 12 indicators. The global MPI has 10. India adds maternal health and bank accounts.', center: 'National MPI', spokes: ['Nutrition', 'Child and adolescent mortality', 'Maternal health', 'Years of schooling', 'School attendance', 'Cooking fuel', 'Sanitation', 'Drinking water', 'Electricity', 'Housing', 'Assets', 'Bank accounts'] },
    { t: 'table', caption: 'NITI Aayog estimates.', head: ['Year', 'Headcount', 'Note'], rows: [
      ['2013-14', '29.17%', 'Projected'],
      ['2019-21', '14.96%', 'From NFHS-5'],
      ['2022-23', '**11.28%**', 'Projected. About **24.82 crore** people left MPI poverty in nine years'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026', text: 'UPSC tested the **Alkire-Foster** method and the fact that NITI Aayog\'s MPI has **twelve** indicators. Learn the 12 above and how the national index differs from the global one.' },
    { t: 'note', kind: 'trap', title: 'Do not mix poverty numbers', text: '11.28% (MPI), 5.3% (international line) and 21.9% (Tendulkar, 2011-12) answer different questions. Note that 2022-23 in MPI is a projection, not a direct survey result. Critics say MPI counts access, not quality, and that the World Bank line is low. Others reply that all measures point to decline.' },
    { t: 'p', text: '**Inequality:** the **Gini coefficient** runs from 0 (equal) to 1 (one person has all). On consumption, the Economic Survey 2023-24 showed rural falling from 0.283 to 0.266 and urban from 0.363 to 0.314 between 2011-12 and 2022-23. Consumption surveys often understate top incomes, so income and wealth studies show higher inequality. Present both when asked.' },

    { t: 'h', text: 'Unemployment: read the survey first' },
    { t: 'p', text: 'The **Periodic Labour Force Survey (PLFS)** by NSO began in 2017-18. It moved to monthly and calendar-year reporting in 2025. Three ratios are enough. **LFPR** = labour force / population (15+). **WPR** = workers / population. **UR** = unemployed / labour force.' },
    { t: 'table', caption: 'Worked example from the September 2026 monthly bulletin. Note how UR comes from the other two.', head: ['Step', 'Calculation', 'Result'], rows: [
      ['Out of 100 people aged 15+', 'LFPR 55.5', '55.5 people work or look for work'],
      ['Working', 'WPR 52.7', '52.7 people have work'],
      ['Unemployed', '55.5 - 52.7', '2.8 people'],
      ['Unemployment rate', '2.8 / 55.5', '**5.0%**'],
    ] },
    { t: 'compare', caption: 'Two statuses. Annual and monthly numbers differ mainly because of this.', columns: [
      { title: 'Usual status (ps+ss)', items: ['Long reference: 365 days', 'Includes subsidiary work', 'Lower unemployment', '**2025:** UR 3.1%, LFPR 59.3%, male LFPR 79.1%, female LFPR 40.0%', 'Rural UR 2.4%, urban UR 4.8%, youth UR 9.9%'] },
      { title: 'Current Weekly Status (CWS)', items: ['Short reference: last 7 days', 'Catches short-term joblessness', 'Higher unemployment', '**September 2026:** UR 5.0%, LFPR 55.5%, WPR 52.7%', 'Rural UR 4.2%, urban UR 6.9%, female LFPR 34.6%'] },
    ] },
    { t: 'table', caption: 'Types of unemployment, with Indian examples.', head: ['Type', 'Meaning', 'Example'], rows: [
      ['Disguised', 'More people than needed; removing some loses no output', 'Family farms'],
      ['Seasonal', 'Work only part of the year', 'Agriculture off-season'],
      ['Structural', 'Skills do not match jobs', 'Graduates in low-demand fields; educated UR 6.5% in 2025'],
      ['Frictional', 'Between jobs', 'Job change'],
      ['Cyclical', 'Falls in a downturn', 'Export units in a slump'],
    ] },
    { t: 'compare', caption: 'The debate on job quality: both sides.', columns: [
      { title: 'Improvement', items: ['Usual status UR fell from 6.0% in 2017-18 to 3.2% in 2023-24 (Economic Survey)', 'Female LFPR rose sharply from 23% in 2017-18', 'Youth UR fell to 9.9% in 2025 from 10.3%'] },
      { title: 'Concerns', items: ['Agriculture share still high at 43.0% in 2025', 'About 60% of employed were working owners in Q2 2025-26 (Economic Survey), and many of these are very small units', 'Much female rise is self-employment, including unpaid helpers', 'Gig workers: about 2% of workforce; about 40% earn under Rs 15,000 a month (Survey)'] },
    ] },
    { t: 'table', caption: 'Key laws and schemes. Status confirmed from PIB and the Labour Ministry.', head: ['Measure', 'Status and feature'], rows: [
      ['**VB-G RAM G Act, 2025**', 'In force **1 July 2026**. It repealed **MGNREGA, 2005**. Statutory guarantee rose from 100 to **125 days**. Critics note changes to funding and a normative allocation, and argue this weakens demand-based rights. The government says it adds durable rural assets and better planning'],
      ['**Four Labour Codes**', 'Effective **21 November 2025**, merging 29 laws: Wages, Industrial Relations, Social Security, and Occupational Safety. Rules were pre-published on 30 December 2025'],
      ['PM Viksit Bharat Rozgar Yojana', 'Employment-linked incentive from August 2025'],
      ['e-Shram and gig coverage', 'Register for informal workers; Social Security Code recognises gig and platform workers'],
    ] },

    { t: 'h', text: 'Financial and social inclusion' },
    { t: 'flow', caption: 'Inclusion as a chain.', steps: [
      { title: 'Access', sub: 'Jan Dhan accounts (2014), banking correspondents' },
      { title: 'Identity and mobile', sub: 'JAM: Jan Dhan, Aadhaar, Mobile' },
      { title: 'Direct Benefit Transfer', sub: 'Reduces leakage' },
      { title: 'Usage', sub: 'UPI, small loans, Mudra, insurance' },
      { title: 'Resilience', sub: 'Savings, pensions and SHGs under DAY-NRLM' },
    ] },
    { t: 'p', text: 'RBI\'s **Financial Inclusion Index** was **70.0 in March 2026**, up from 67.0 a year earlier, driven mainly by usage (RBI, 16 July 2026). It has three parts: **access, usage and quality**. An account is only a start: dormancy, low credit depth and digital fraud remain challenges. RBI has published a **National Strategy for Financial Inclusion 2025-30**.' },

    { t: 'h', text: 'Infrastructure: who pays and how' },
    { t: 'table', caption: 'The main frameworks.', head: ['Framework', 'What it is', 'As of and size'], rows: [
      ['**National Infrastructure Pipeline**', 'Project list across sectors', 'Rs 111 lakh crore envisaged for FY2020-25'],
      ['**PM GatiShakti** (2021)', 'GIS-based master plan so ministries plan together', 'Coordination tool, not a funding scheme'],
      ['**National Monetisation Pipeline 1.0**', 'Lease out operating assets for cash; ownership stays', 'Rs 6 lakh crore, FY2022-25'],
      ['**NMP 2.0**', 'Second round, launched 23 February 2026', '**Rs 16.72 lakh crore** over FY2026-30, including Rs 5.8 lakh crore private investment'],
      ['**Public capex**', 'Budget spending', '**Rs 12.2 lakh crore** BE 2026-27, up from Rs 11.2 lakh crore'],
      ['**Infrastructure Risk Guarantee Fund**', 'Budget 2026-27 proposal to give private developers more confidence', 'Check rollout status'],
    ] },
    { t: 'table', caption: 'PPP models. Who bears which risk?', head: ['Model', 'Who finances', 'Risk'], rows: [
      ['**EPC**', 'Government pays contractor to build', 'Government bears traffic and financing risk'],
      ['**BOT (Toll)**', 'Private builder collects tolls', 'Private bears traffic risk'],
      ['**BOT (Annuity)**', 'Private builds; government pays fixed annuity', 'Traffic risk with government'],
      ['**Hybrid Annuity**', 'Shared: part by government during construction, rest as annuity', 'Shared; revived highway PPP'],
    ] },
    { t: 'list', items: [
      '**InvITs and REITs:** trusts that hold income-yielding assets and sell units to investors. They are widely used in asset monetisation.',
      '**Budget 2026-27 projects:** a dedicated freight corridor from Surat to Dankuni, seven high-speed rail corridors, 20 new national waterways over five years (PRS).',
      '**Debate:** public capex supports growth and draws private investment, but private capex is uneven, land and clearances delay projects, and monetisation must not become a one-off revenue source.',
    ] },

    { t: 'h', text: 'Planning: Planning Commission to NITI Aayog' },
    { t: 'timeline', caption: 'The plans UPSC asks about.', items: [
      { when: '1950', what: '**Planning Commission** set up by a Cabinet resolution. It was **neither constitutional nor statutory**.' },
      { when: '1951-56', what: 'First Plan: agriculture and irrigation. Harrod-Domar model.' },
      { when: '1956-61', what: 'Second Plan: heavy industry. **Mahalanobis** model.' },
      { when: '1966-69', what: 'Plan holiday after war and drought; Green Revolution started.' },
      { when: '1974-79', what: 'Fifth Plan: Garibi Hatao.' },
      { when: '1992-97', what: 'Eighth Plan: planning became **indicative** after liberalisation.' },
      { when: '2012-17', what: 'Twelfth Plan: faster, more inclusive, sustainable. This was the last Five Year Plan.' },
      { when: '1 January 2015', what: '**NITI Aayog** replaces the Planning Commission, also by a Cabinet resolution.' },
    ] },
    { t: 'compare', columns: [
      { title: 'Planning Commission', items: ['Allocated plan funds', 'Top-down', 'National Development Council for state views', 'Five Year Plans'] },
      { title: 'NITI Aayog', items: ['**No power to allocate funds**', 'Think tank; cooperative federalism', 'Governing Council has all CMs and UT heads', 'Indices: SDG India Index, MPI; DMEO monitors schemes'] },
    ] },
    { t: 'note', kind: 'recent', title: 'What will change before Prelims', text: 'PLFS monthly every mid-month, and the PLFS 2026 annual report, expected around March 2027 if last year\'s timing repeats. Economic Survey 2026-27, for poverty and jobs framing. VB-G RAM G rollout data, as states set up. Check whether any new official poverty line is announced.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Decline in poverty: what MPI, consumption and international lines show, and their limits. Jobless growth and quality of work, with PLFS. MGNREGA to VB-G RAM G: rights and federal cost-sharing on one side, asset creation and planning on the other. Labour Codes: ease of doing business versus worker protection. Asset monetisation and PPP. NITI Aayog: effective think tank or weaker institution for states?' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Tendulkar 21.9%, Rangarajan 29.5%, both 2011-12.',
      'MPI: 29.17 to 11.28; 12 indicators; Alkire-Foster; H x A; cut-off one-third.',
      'UR = unemployed / labour force. CWS 5.0% (Sep 2026). Usual status 3.1% (2025).',
      'VB-G RAM G: 125 days, 1 July 2026. Labour Codes: 21 Nov 2025, 29 laws.',
      'NMP 2.0: Rs 16.72 lakh crore, FY2026-30. NIP: Rs 111 lakh crore.',
      'NITI Aayog: 1 Jan 2015; no fund allocation.',
    ] },
  ],
  sources: [
    { label: 'PIB, PLFS Annual Report 2025, 27 March 2026', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2246009&lang=1&reg=3' },
    { label: 'MoSPI post on PLFS Monthly Bulletin, September 2026', url: 'https://x.com/GoIStats/status/2112066039957594191' },
    { label: 'PIB, 24.82 crore Indians escape multidimensional poverty, January 2024', url: 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=1996271&reg=48&lang=2' },
    { label: 'NITI Aayog, Multidimensional Poverty in India since 2005-06', url: 'https://www.niti.gov.in/sites/default/files/2024-01/MPI-22_NITI-Aayog20254.pdf' },
    { label: 'PIB, Union Budget 2026-27: Rural Transformation document (MPI and extreme poverty)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc2026213789001.pdf' },
    { label: 'PIB, Economic Survey 2023-24 summary (Gini)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/jul/doc2024722351601.pdf' },
    { label: 'PRS, Economic Survey 2025-26 summary', url: 'https://prsindia.org/policy/report-summaries/economic-survey-2025-26' },
    { label: 'PIB, commencement of VB-G RAM G Act', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259703&reg=3&lang=1' },
    { label: 'PIB, Viksit Bharat G RAM G progress note, September 2026', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/sep/doc_10028_20260929_12582401.pdf' },
    { label: 'PIB, Four Labour Codes made effective, November 2025', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2192463&reg=3&lang=2' },
    { label: 'RBI, Financial Inclusion Index for March 2026', url: 'https://rbidocs.rbi.org.in/rdocs/PressRelease/PDFs/PR686B5E4E6AB420641F3817B29B617BE2932.PDF' },
    { label: 'PIB, launch of National Monetisation Pipeline 2.0, February 2026', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2231900&reg=3&lang=1' },
    { label: 'PRS, Union Budget 2026-27 Analysis', url: 'https://prsindia.org/files/budget/budget_parliament/2026/Union_Budget_Analysis-2026-27.pdf' },
    { label: 'UPSC Prelims GS Paper I, 2026', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'PLFS monthly bulletins and annual report', where: 'MoSPI', why: 'Monthly figures replace those here. Note CWS or usual status before quoting.', url: 'https://www.mospi.gov.in/' },
      { what: 'NITI Aayog MPI reports', where: 'niti.gov.in', why: 'State-wise data, and any new national edition.', url: 'https://www.niti.gov.in/' },
      { what: 'VB-G RAM G Act text and rules', where: 'Ministry of Rural Development; PRS', why: 'Exact funding pattern and state role, which should be read from the Act.', url: 'https://prsindia.org/billtrack/the-viksit-bharat-%E2%80%93-guarantee-for-rozgar-and-ajeevika-mission-gramin-vb-%E2%80%93-g-ram-g-bill-2025' },
    ],
    current: [
      { issue: 'VB-G RAM G', link: 'Came into force on 1 July 2026, with MGNREGA repealed on the same date. Budget 2026-27 raised the allocation by 42.8% over RE.', source: 'PIB, PRS', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259703&reg=3&lang=1' },
      { issue: 'Labour Codes', link: 'Effective 21 November 2025. Draft rules pre-published in December 2025.', source: 'PIB, Labour Ministry', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2192463&reg=3&lang=2' },
      { issue: 'Jobs data', link: 'CWS unemployment at 5.0% in September 2026, unchanged from August.', source: 'MoSPI', url: 'https://x.com/GoIStats/status/2112066039957594191' },
      { issue: 'NMP 2.0', link: 'Launched 23 February 2026, with Rs 16.72 lakh crore over FY2026-30.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2231900&reg=3&lang=1' },
    ],
  },
}
