import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-15',
  summary: 'Three linked threats: cyber attacks and crime, social media and misinformation, and money laundering. Covers CERT-In, the IT Act, the 2026 takedown rules, PMLA, Vijay Madanlal and FATF.',
  minutes: 22,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'GS III lists "basics of cyber security", "role of media and social-networking sites", and "money-laundering and its prevention" together. They share one feature: **threats that move faster than the law, and cross borders easily**. Each also raises a similar tension between security and rights, such as privacy, speech, and liberty. India crossed about **100 crore internet connections** by 2025 (PIB, January 2026), and this widens the attack surface.' },

    { t: 'h', text: 'Cyber security basics' },
    { t: 'table', caption: 'Terms that are commonly tested.', head: ['Term', 'Meaning'], rows: [
      ['Malware', 'Harmful software: viruses, worms, trojans, spyware'],
      ['Ransomware', 'Locks data and demands payment. **WannaCry** and **Petya** (2017) are key cases'],
      ['Phishing', 'Fake messages that trick users into giving out data'],
      ['DDoS', 'Floods a system with traffic until it fails'],
      ['Advanced Persistent Threat', 'Long, stealthy attack, often thought to be state-backed'],
      ['Critical information infrastructure', 'Systems whose failure would hurt national security, economy or health: power grid, banks, telecom'],
      ['Digital arrest', 'A fraud in which callers pose as police and hold a person on video, under fear'],
    ] },
    { t: 'note', kind: 'exam', title: 'Past Prelims', text: 'Prelims 2018 asked what WannaCry, Petya and EternalBlue relate to: **cyber attacks**. Prelims 2020 asked what **cyber insurance** can cover in India, such as costs of a consultant in case of cyber extortion. So know both concepts and practical terms.' },
    { t: 'strata', caption: 'Who does what in cyber security.', layers: [
      { title: 'Coordination', sub: 'National Cyber Security Coordinator, in the National Security Council Secretariat' },
      { title: 'CERT-In', sub: 'Under **MeitY**. National agency for incident response under **Section 70B** of the IT Act. Created 2004' },
      { title: 'NCIIPC', sub: 'Protects critical information infrastructure under **Section 70A**. Under **NTRO**' },
      { title: 'I4C', sub: 'Indian Cyber Crime Coordination Centre, Home Ministry. Runs the **cybercrime.gov.in** portal and helpline **1930**' },
      { title: 'States', sub: 'Police and public order are state subjects, so cyber crime cases are investigated by state police' },
    ] },
    { t: 'note', kind: 'recent', title: 'CERT-In numbers', text: 'In **2025**, CERT-In handled over **29.44 lakh incidents** and issued 1,530 alerts, 390 vulnerability notes and 65 advisories. 231 audit organisations were empanelled (PIB, 23 January 2026). The Home Ministry told Parliament that incidents more than doubled from 14,02,809 in 2021. A parliamentary panel flagged a CERT-In staff shortage and likely under-reporting.' },
    { t: 'timeline', caption: 'Law and policy on cyber.', items: [
      { when: '2000', what: '**Information Technology Act.** 2008 amendment adds cyber terrorism and more.' },
      { when: '2013', what: '**National Cyber Security Policy.** A new national strategy has been drafted, but its release could not be confirmed.' },
      { when: '2015', what: '**Shreya Singhal:** Supreme Court strikes down **Section 66A**.' },
      { when: '2017', what: '**Puttaswamy:** privacy is a Fundamental Right. **Cyber Swachhta Kendra** launched.' },
      { when: '2022', what: 'CERT-In Directions: report incidents within **6 hours**, and keep logs for 180 days.' },
      { when: '2023', what: '**Digital Personal Data Protection Act.** Rules were notified in November 2025.' },
      { when: '2024', what: '**BNS and BNSS** come into force, with more digital evidence.' },
      { when: '2025', what: '**Promotion and Regulation of Online Gaming Act.**' },
    ] },
    { t: 'table', caption: 'IT Act, 2000: key sections.', head: ['Section', 'Covers'], rows: [
      ['43', 'Damage to computer systems (civil)'],
      ['66C, 66D, 66E', 'Identity theft, cheating by personation, privacy'],
      ['**66F**', 'Cyber terrorism'],
      ['**69**', 'Interception, monitoring and decryption'],
      ['**69A**', 'Blocking public access to content (Rules, 2009)'],
      ['**70, 70A, 70B**', 'Protected systems, NCIIPC, CERT-In'],
      ['**79**', '**Safe harbour** for intermediaries'],
    ] },
    { t: 'note', kind: 'trap', title: 'Do not mix up', text: 'CERT-In falls under **MeitY**, and NCIIPC falls under **NTRO**. I4C is under the **Home Ministry**. **66A** is struck down, while **69A** blocking survives and was upheld with safeguards in Shreya Singhal. **Budapest Convention** on cyber crime (2001): India has not joined. The **UN Convention against Cybercrime** (adopted 2024) is separate; check India\'s status if a question asks.' },
    { t: 'compare', caption: 'A fair view of India\'s cyber readiness.', columns: [
      { title: 'Strengths', items: ['Strong response institutions', 'Sectoral CSIRTs for finance and power', 'Mock drills, audits, Cyber Swachhta Kendra with free tools', 'Mass digital public infrastructure builds in security'] },
      { title: 'Gaps', items: ['Skilled staff shortage', 'Reliance on imported hardware and software', 'Weak police capacity and cross-border evidence issues', 'Low awareness among users', 'No updated national strategy in force'] },
    ] },

    { t: 'h', text: 'Social media and internal security' },
    { t: 'compare', caption: 'Dual role.', columns: [
      { title: 'Risks', items: ['Online radicalisation and recruitment', 'Fake news and communal rumours; WhatsApp lynching cases (2018)', 'Deepfakes', 'Foreign influence operations', 'Coordination of riots'] },
      { title: 'Uses', items: ['Warnings and disaster information', 'Citizen reporting', 'Counter-narratives', 'Open-source intelligence', 'Space for democracy and dissent'] },
    ] },
    { t: 'table', caption: 'The rule-making path.', head: ['Date', 'Step', 'Point'], rows: [
      ['2021', '**IT Rules, 2021**', 'Grievance officers; significant platforms get compliance duties; traceability for messaging'],
      ['2023-24', 'Fact Check Unit', 'Notified as a rule in 2023; **struck down** by the Bombay High Court in the Kunal Kamra case (September 2024)'],
      ['September 2025', 'X Corp v Union of India', 'Karnataka High Court rejected X\'s challenge to the **Sahyog** portal, which handles takedown notices. An appeal was to be expected; check its status'],
      ['20 February 2026', 'IT Rules amended', '**Government or court takedown orders: from 36 hours to 3 hours.** "Synthetically generated information" defined and to be labelled; intimate imagery from 24 to 2 hours'],
    ] },
    { t: 'compare', caption: 'The takedown debate.', columns: [
      { title: 'Why fast takedown', items: ['Viral harm occurs within hours', 'Deepfakes can cause violence or fraud', 'Platforms have the capacity and profit', 'Labels help users know what is real'] },
      { title: 'Concerns', items: ['Three hours rules out careful review, so platforms may over-remove', 'Executive decides what is unlawful, without a judge', 'Chilling effect on speech', 'Burden on small platforms'] },
    ] },
    { t: 'list', items: [
      '**Internet shutdowns:** **Anuradha Bhasin (2020)** held that indefinite suspensions are not allowed, and that orders must be published and proportionate.',
      '**Hate speech:** **Tehseen Poonawalla (2018)** set guidelines on lynching. BNS Section 353 covers public mischief.',
      '**Other tools:** Media literacy and prebunking are less intrusive and should get more attention.',
    ] },

    { t: 'h', text: 'Money laundering' },
    { t: 'p', text: 'Money laundering is the process of making **dirty money look clean**. It is linked to corruption, drug trade, tax evasion, cyber fraud and terror financing. It weakens the formal economy, and can fund threats to the state.' },
    { t: 'flow', caption: 'Three classic stages.', steps: [
      { title: 'Placement', sub: 'Cash enters the system: banks, casinos, shell firms, mule accounts' },
      { title: 'Layering', sub: 'Transfers, shell firms, crypto, trade invoicing to hide the trail' },
      { title: 'Integration', sub: 'Money returns as "clean": property, business, luxury goods' },
    ] },
    { t: 'table', caption: 'Prevention of Money Laundering Act, 2002 (PMLA), in force from 2005.', head: ['Feature', 'Detail'], rows: [
      ['Agency', '**Enforcement Directorate** (Finance Ministry, Department of Revenue) investigates'],
      ['Intelligence', '**FIU-IND**: receives bank and other reports; analyses and passes them to agencies'],
      ['Offence', '**Section 3**: dealing with proceeds of crime linked to a scheduled offence'],
      ['Attachment', '**Section 5**: provisional attachment of property. Reviewed by the Adjudicating Authority'],
      ['Arrest and bail', '**Section 19** (arrest), **Section 45** (twin conditions for bail)'],
      ['Burden of proof', '**Section 24**: on the accused, once basic facts are shown'],
      ['Reporting entities', 'Banks, intermediaries and others; **virtual digital assets** added in March 2023'],
    ] },
    { t: 'table', caption: 'Court rulings: learn them in order.', head: ['Case', 'Held'], rows: [
      ['**Nikesh Tarachand Shah (2017)**', 'Struck down bail conditions under Section 45; Parliament then amended the provision'],
      ['**Vijay Madanlal Choudhary (2022)**', 'Upheld ED powers of arrest, attachment and search, Section 45, and Section 50 statements. Review was sought'],
      ['**Pankaj Bansal (2023)**', 'Grounds of arrest must be given in writing'],
      ['**Manish Sisodia and V. Senthil Balaji (2024)**', 'Long delay in trial can support bail in spite of Section 45'],
    ] },
    { t: 'compare', caption: 'PMLA debate.', columns: [
      { title: 'Supporters', items: ['Tracks complex financial crime', 'Recovers proceeds of crime', 'Aligned with global standards', 'Strong powers suit large schemes'] },
      { title: 'Critics', items: ['Low conviction compared with cases filed', 'Long pre-trial custody', 'Opposition parties claim selective use', 'Statements to ED usable as evidence, raising self-incrimination issues'] },
    ] },
    { t: 'h3', text: 'FATF' },
    { t: 'list', items: [
      '**What:** The **Financial Action Task Force** was set up in **1989** by the G7 summit in Paris. Its **40 Recommendations** are the global standard on money laundering, terror finance and proliferation finance.',
      '**India:** A member since **2010**.',
      '**Lists:** "Black list" (high-risk, call for action) and "grey list" (increased monitoring). These are informal names.',
      '**India\'s evaluation:** India\'s Mutual Evaluation Report was adopted at the June 2024 plenary in Singapore, and published in September 2024. India got the **"regular follow-up"** category, the top one, and reports said it was compliant or largely compliant with **37 of 40** Recommendations.',
      '**Weak spots flagged:** Pace of prosecutions and convictions, and how anti-terror finance rules affect non-profits.',
    ] },
    { t: 'table', caption: 'Related laws.', head: ['Law', 'Purpose'], rows: [
      ['**FEMA, 1999**', 'Civil law on foreign exchange'],
      ['**Benami Act, 1988** (amended 2016)', 'Bars property held in another\'s name'],
      ['**Black Money Act, 2015**', 'Undisclosed foreign income and assets'],
      ['**FCRA, 2010**', 'Foreign contributions to NGOs'],
      ['**UAPA**', 'Terror financing offences (Section 17)'],
    ] },
    { t: 'note', kind: 'mains', title: 'Crypto, hawala and mule accounts', text: 'New tools mix old and new risks. Hawala moves value with no paper trail. Crypto can cross borders quickly. Mule accounts handle scam money. Responses: KYC, FIU-IND registration of crypto platforms, global tax and data sharing, and bank-level fraud checks. Do not call crypto simply illegal: India taxes it and regulates it under PMLA, with no specific crypto law.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Discuss India\'s cyber preparedness in light of CERT-In data. Discuss whether intermediary liability has swung too far, using the 2026 rules. Security and privacy: Puttaswamy\'s proportionality test. Why PMLA is both needed and contested: Vijay Madanlal and liberty cases. What India\'s FATF rating means for capital access, and what it still requires. Keep both sides in view.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'CERT-In: MeitY, 70B. NCIIPC: NTRO, 70A. I4C: MHA, helpline 1930.',
      '2025: 29.44 lakh incidents. Report within 6 hours.',
      'Shreya Singhal 2015: 66A struck, 69A survives.',
      'IT Rules 2026: takedown in 3 hours.',
      'Placement, layering, integration. PMLA 2002. Vijay Madanlal 2022.',
      'FATF 1989, 40 Recommendations. India: member 2010, regular follow-up 2024.',
    ] },
  ],
  sources: [
    { label: 'PIB, CERT-In: India\'s Frontline Defender against Cyber Threats (23 January 2026)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jan/doc2026123764501.pdf' },
    { label: 'UPSC Civil Services Prelims 2018 and 2020, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'Search excerpts only: FATF June 2024 reports (AIR, Business Today, ETV Bharat); IT Rules 2026 reports (Outlook Business, Bar and Bench, LiveLaw); CERT-In staff shortage (ThePrint)' },
    { label: 'For further reading: FATF, Mutual Evaluation Report of India (2024). Direct access was blocked', url: 'https://www.fatf-gafi.org/en/publications/Mutualevaluations/India-MER-2024.html' },
  ],
  beyond: {
    refer: [
      { what: 'FATF report on India', where: 'FATF', why: 'Exact ratings and flagged gaps for a detailed answer.', url: 'https://www.fatf-gafi.org/en/publications/Mutualevaluations/India-MER-2024.html' },
      { what: 'IT Act text and IT Rules', where: 'MeitY and India Code', why: 'Rules change quickly; check exact wording before quoting.', url: 'https://www.meity.gov.in/' },
    ],
    current: [
      { issue: 'CERT-In annual numbers', link: '29.44 lakh incidents in 2025, per January 2026 PIB document.', source: 'PIB', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jan/doc2026123764501.pdf' },
      { issue: 'Three-hour takedown rule', link: 'IT Rules amended, effective 20 February 2026.', source: 'Reports by Outlook Business and Bar and Bench, seen as search excerpts' },
    ],
  },
}
