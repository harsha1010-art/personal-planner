import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-30',
  summary: 'The institutions of governance: the civil services and their reform, the legal forms and regulation of NGOs, how SHGs are organised, and what citizen-centric administration means. Scheme delivery is in the separate welfare delivery note.',
  minutes: 20,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'GS II asks about the "role of civil services in a democracy" and about the "development processes and the development industry", including NGOs, SHGs, donors and charities. This note covers **structures**: who these actors are, how the law frames them and how they are reformed. How benefits actually reach people is covered in the note on welfare delivery.' },
    { t: 'p', text: 'Think of three actors. The **state** has reach and authority. **NGOs** bring flexibility, voice and innovation. **SHGs** organise people themselves, especially poor rural women. Good governance depends on the three working together, and on each being answerable.' },

    { t: 'h', text: 'Civil services: the constitutional frame' },
    { t: 'table', caption: 'Part XIV of the Constitution', head: ['Article', 'What it does'], rows: [
      ['309', 'Parliament and state legislatures regulate recruitment and service conditions'],
      ['310', '**Doctrine of pleasure:** civil servants hold office during the pleasure of the President or Governor'],
      ['311', '**Safeguards:** no removal by an authority below the appointing one; inquiry and a hearing, with exceptions in 311(2)'],
      ['312', '**All India Services:** created by Rajya Sabha resolution (two-thirds) and a law of Parliament'],
      ['315-323', 'Union and State Public Service Commissions. **Article 320** lists their functions'],
      ['323A', 'Administrative tribunals, such as the CAT'],
    ] },
    { t: 'note', kind: 'trap', title: 'Articles and services', text: 'There are three **All India Services:** IAS, IPS and **Indian Forest Service**. The Indian Foreign Service is a Central Service, and is not one of them. **All India Services Act, 1951**, is the parent law. UPSC is a **constitutional** body, while the CVC, CBI and Information Commissions are not.' },
    { t: 'compare', caption: 'The civil service debate', columns: [
      { title: 'Why they matter', items: ['Continuity when governments change', 'Neutral advice', 'Sardar Patel\'s "steel frame"; Civil Services Day on **21 April** recalls his 1947 address', 'National integration through All India cadres', 'Delivery at district level'] },
      { title: 'Common criticisms', items: ['Generalists in technical jobs', 'Political interference and transfers', 'Rule-following above results (Merton\'s goal displacement)', 'Colonial distance from citizens', 'Weak performance measurement', 'Corruption and slow inquiries'] },
    ] },
    { t: 'timeline', caption: 'Reform committees and cases', items: [
      { when: '1976', what: '**Kothari Committee:** set the current three-stage exam pattern.' },
      { when: '1989', what: '**Satish Chandra Committee:** added the essay paper and raised interview marks.' },
      { when: '2001', what: '**Alagh Committee:** reviewed the examination system.' },
      { when: '2004', what: '**Hota Committee:** civil service reforms, including performance and tenure.' },
      { when: '2006', what: '*Prakash Singh*: directions on police reform, including fixed tenure and a State Security Commission.' },
      { when: '2008', what: '**2nd ARC, 10th report:** performance-linked pay, domain expertise and a review at key career points.' },
      { when: '2013', what: '*T.S.R. Subramanian*: minimum tenure, a Civil Services Board, and **written instructions** from political bosses.' },
    ] },

    { t: 'h', text: 'Civil services: recent changes' },
    { t: 'table', caption: 'As of November 2026', head: ['Reform', 'What it is', 'Status and debate'], rows: [
      ['**Mission Karmayogi**', 'National Programme for Civil Services Capacity Building, approved in September 2020. Moves from rule-based to role-based training, through the **iGOT Karmayogi** platform', 'A **Capacity Building Commission** supports it. The test is whether training changes behaviour'],
      ['**Lateral entry**', 'Joint secretary and director-level recruitment of outsiders on contract, since 2018', 'In **August 2024** the UPSC advertisement for 45 posts was withdrawn after the government cited social justice and reservation. **For:** expertise. **Against:** reservation gaps and conflict of interest'],
      ['**8th Pay Commission**', 'Notified on **3 November 2025**, with **18 months** to report; chaired by Justice Ranjana Desai', 'Report not submitted as of August 2026. Implementation date undecided'],
      ['**Unified Pension Scheme**', 'An option under NPS from 1 April 2025, with an assured pension of 50% of average pay after 25 years', 'States and employees\' groups still debate it against the Old Pension Scheme'],
      ['**Premature retirement**', 'Rule 56(j) and similar rules let government retire weak or doubtful officers', 'Supporters cite accountability, while critics fear misuse'],
    ] },

    { t: 'h', text: 'NGOs: what they are and how the law treats them' },
    { t: 'p', text: 'An NGO is a private, non-profit body working for a public purpose. **Article 19(1)(c)** protects the right to form associations. The **National Policy on the Voluntary Sector, 2007**, recognises their role, and **NGO Darpan**, run by NITI Aayog, is a voluntary registry for dealing with government.' },
    { t: 'table', head: ['Legal form', 'Law', 'Note'], rows: [
      ['Society', 'Societies Registration Act, **1860**', 'Membership-based; state amendments apply'],
      ['Trust', 'Indian Trusts Act, 1882 covers private trusts; public trusts are under state law', 'Run by trustees'],
      ['Section 8 company', 'Companies Act, **2013**', 'Profits applied to objects; no dividends'],
    ] },
    { t: 'compare', caption: 'The roles NGOs play, and the charges they face', columns: [
      { title: 'Roles', items: ['**Service delivery:** Akshaya Patra (school meals)', '**Advocacy:** MKSS for RTI', '**Evidence:** Pratham\'s ASER on learning', '**Organising:** SEWA for informal women workers', '**Watchdog:** on environment and rights'] },
      { title: 'Concerns', items: ['Weak internal accountability', 'Reliance on donors and their priorities', 'Fund misuse in some cases', 'Government sees some foreign-funded work as harming public interest', 'NGOs see tighter regulation as shrinking civic space'] },
    ] },
    { t: 'timeline', caption: 'Foreign Contribution (Regulation) Act: FCRA', items: [
      { when: '1976, 2010', what: 'First law during the Emergency. Replaced by the **FCRA, 2010**. Registration is valid for five years.' },
      { when: '2020', what: 'Amendment: administrative spending capped at **20%** (from 50%), **sub-granting barred**, a designated SBI account in New Delhi, and Aadhaar for office-bearers.' },
      { when: '2022', what: '*Noel Harper*: the Supreme Court upheld the 2020 changes, saying there is no absolute right to foreign funds.' },
      { when: 'March 2026', what: 'An **FCRA Amendment Bill** was introduced, proposing an authority to manage assets after registration ends. Reported as pending in June 2026.' },
      { when: '22 June 2026', what: '**Amendment Rules:** NGOs state specific objectives and areas, pay fees by activity and state, and disclose social media accounts. Reports put active registrations at about 14,500 (one source).' },
    ] },
    { t: 'note', kind: 'mains', title: 'Balance the FCRA argument', text: 'State the sovereignty and transparency case first, then the proportionality case. The 2020 sub-grant ban hurts small grassroots groups, which rely on larger bodies for funds. A sound answer backs regulation, but asks for clear standards, reasons and a fair appeal.' },

    { t: 'h', text: 'Self-Help Groups' },
    { t: 'p', text: 'An SHG is usually a group of **10-20** people, mainly women from similar backgrounds, who save regularly, lend to each other, and then borrow from banks. The group\'s peer pressure replaces collateral.' },
    { t: 'flow', caption: 'How SHGs developed', steps: [
      { title: 'Early models', sub: 'SEWA (1972) and MYRADA in the 1980s' },
      { title: '1992', sub: '**NABARD** SHG-Bank Linkage pilot' },
      { title: '1998-99', sub: 'Kudumbashree in Kerala; SGSY nationally' },
      { title: '2011', sub: '**National Rural Livelihoods Mission**' },
      { title: '2015-16', sub: 'Renamed **DAY-NRLM**' },
      { title: '2023 onward', sub: 'Lakhpati Didi, Drone Didi' },
    ] },
    { t: 'strata', caption: 'The DAY-NRLM federation', layers: [
      { title: 'Cluster Level Federation', sub: 'A group of villages; links to banks and government' },
      { title: 'Village Organisation', sub: 'All SHGs in a village, which also receives community funds' },
      { title: 'Self-Help Group', sub: 'Weekly saving, internal lending, record-keeping' },
    ] },
    { t: 'table', caption: 'Which model is which', head: ['', 'SHG', 'Microfinance institution', 'Cooperative'], rows: [
      ['Who owns it', 'The members', 'A company, NBFC or NGO', 'The members, under cooperative law'],
      ['Credit method', 'Group savings, then bank linkage', 'Direct small loans, often joint liability', 'Member loans'],
      ['Regulator', 'None specific; banks follow RBI and NABARD circulars', 'RBI for NBFC-MFIs', 'State registrars; Centre for multi-state ones'],
      ['Key reference', 'NABARD, DAY-NRLM', '**Malegam Committee** (2011, tested in Prelims 2026)', '**97th Amendment**: Article 43B'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2023', text: 'UPSC gave three statements on SHGs. The first said the programme was originally started by the **State Bank of India**. That is the trap, as the bank-linkage programme is associated with **NABARD**. The others were on joint responsibility, and support from Regional Rural and Scheduled Commercial Banks.' },
    { t: 'list', items: [
      '**Scale (31 March 2026, PIB):** 94.31 lakh SHGs with 10.14 crore members under DAY-NRLM, with over ₹12 lakh crore in cumulative bank credit (reported in 2026).',
      '**Lakhpati Didi:** a member earning at least ₹1 lakh a year. PIB reported 3.07 crore such women as of May 2026. Targets differ across official releases (3 crore, then 6 crore), so check before quoting.',
      '**Strengths:** women\'s voice, lower dependence on moneylenders, a link for government schemes.',
      '**Limits:** small and low-return enterprises, debt burden, uneven regional spread, and extra unpaid work when SHGs are used as cheap delivery agents.',
    ] },

    { t: 'h', text: 'Citizen-centric administration' },
    { t: 'p', text: 'This means designing government around the citizen\'s needs, not around its own convenience. The 2nd ARC\'s **12th report** said that functioning institutions, clear accountability and citizen participation must come together, and it warned against treating technology as a substitute.' },
    { t: 'wheel', caption: 'Pillars drawn from the 12th report and Sevottam', center: 'Citizen-centric', spokes: ['Process simplification', 'Single-window services', 'Delegation to the field', 'Local government', 'Grievance redress', 'User feedback', 'Whistle-blower safety', 'Accountable leadership'] },
    { t: 'list', items: [
      '**Examples:** Aspirational Districts Programme (2018), Good Governance Day (25 December), and PM\'s Awards for Excellence in Public Administration.',
      '**Local government as the base:** the 73rd and 74th Amendments shift services closer to people, as covered in the local bodies notes.',
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '(1) Are civil services still fit for purpose? Use the steel frame, Karmayogi, lateral entry and Article 311. (2) Should Article 311 protections be diluted? Balance neutrality against accountability. (3) Do NGOs complement or challenge the state? Use FCRA, and the 2020 and 2026 changes. (4) Have SHGs brought real women\'s empowerment? Separate income, voice and debt. Kudumbashree is a good case. (5) Generalist against specialist: 2nd ARC and Hota. Link to Weber\'s bureaucracy and GS IV.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Articles 309, 310, 311, 312; 315-323 for commissions.',
      'All India Services: IAS, IPS, Indian Forest Service.',
      'Kothari 1976; Satish Chandra 1989; Hota 2004; 2nd ARC 10th report.',
      'FCRA 2010; 2020 amendment: 20% cap, no sub-granting.',
      'NABARD 1992; NRLM 2011; DAY-NRLM federation in three tiers.',
      'Mission Karmayogi 2020; Civil Services Day 21 April.',
    ] },
  ],
  sources: [
    { label: 'PIB: Empowering the Poor, a Decade of Inclusive Transformation (Lakhpati Didi figures)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2270144&reg=3&lang=1' },
    { label: 'PIB: release and factsheet on DAY-NRLM, 2026 (SHG counts)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2288996&reg=1&lang=1' },
    { label: 'Akashvani News: Loans of over ₹12 lakh crore to women SHGs', url: 'https://newsonair.gov.in/loans-worth-over-12-lakh-crore-disbursed-to-women-shgs-under-day-nrlm-rural-development-minister-shivraj-singh-chouhan/' },
    { label: 'Angel One: 8th CPC deadline set for mid-2027', url: 'https://www.angelone.in/news/personal-finance/8th-cpc-deadline-set-for-mid-2027-leaving-1-2-crore-employees-anxious-about-backdated-pay' },
    { label: 'Free Press Journal: 8th Pay Commission report still awaited', url: 'https://www.freepressjournal.in/business/8th-pay-commission-report-still-awaited-government-yet-to-decide-implementation-date' },
    { label: 'ICNL: India FCRA Amendment Rules briefer, August 2026', url: 'https://www.icnl.org/wp-content/uploads/India-FCRA-Amendment-Rules-briefer-final-Aug.-2026_Final_3-2.pdf' },
    { label: 'Drishti IAS: FCRA Amendment Rules 2026 (secondary)', url: 'https://www.drishtiias.com/daily-updates/daily-news-analysis/fcfr-amendment-rules-2026' },
    { label: 'UPSC Civil Services Prelims 2023 and 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'FCRA Act, Rules and registration data', where: 'Ministry of Home Affairs FCRA portal', why: 'Exact rule text and live counts of registered bodies.', url: 'https://fcraonline.nic.in/' },
      { what: 'DAY-NRLM dashboard', where: 'Ministry of Rural Development', why: 'Latest state-wise SHG data, which keeps changing.', url: 'https://aajeevika.gov.in/' },
    ],
    current: [
      { issue: 'FCRA Rules 2026', link: 'Notified on 22 June 2026, and tightening purpose and area declarations for NGOs. Separate Bill reported pending.', source: 'ICNL', url: 'https://www.icnl.org/wp-content/uploads/India-FCRA-Amendment-Rules-briefer-final-Aug.-2026_Final_3-2.pdf' },
      { issue: '8th Central Pay Commission', link: 'Report still awaited as of August 2026, with a deadline falling in May 2027.', source: 'Free Press Journal', url: 'https://www.freepressjournal.in/business/8th-pay-commission-report-still-awaited-government-yet-to-decide-implementation-date' },
      { issue: 'Lakhpati Didi', link: 'PIB reported 3.07 crore in May 2026. Link to women\'s economic empowerment.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2270144&reg=3&lang=1' },
    ],
  },
}
