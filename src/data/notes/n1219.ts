import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-19',
  summary: 'Probity, accountability and transparency, and the machinery against corruption: 2nd ARC Fourth Report, Prevention of Corruption Act, CVC, CAG, Lokpal and RTI, with current disputes.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The syllabus heading reads: **"Probity in Governance: Concept of public service; Philosophical basis of governance and probity; Information sharing and transparency in government, Right to Information, Codes of Ethics, Codes of Conduct, Citizen\'s Charters, Work culture, Quality of service delivery, Utilization of public funds, challenges of corruption."** This is also GS II content, and it is the area of GS IV where facts earn the most marks.' },
    { t: 'compare', caption: 'Terms to define first.', columns: [
      { title: 'Probity', items: ['Proven uprightness in public dealings', 'Goes beyond avoiding crime', 'Includes procedure, fairness and appearance'] },
      { title: 'Accountability', items: ['Answering for use of power', 'Has two parts: **answerability** and **enforcement**', 'Vertical (voters), horizontal (courts, CAG), social (citizens, media)'] },
      { title: 'Transparency', items: ['Decisions and information are open', 'Reactive (RTI requests) and proactive (Section 4 disclosures)', 'Makes accountability possible'] },
    ] },
    { t: 'p', text: 'The **philosophical basis** of probity rests on a simple idea: public power is held in **trust** for the people. It connects to the social contract (Locke), Gandhi\'s trusteeship, and Kautilya\'s view that the ruler\'s good lies in the people\'s good. The UN Convention against Corruption (**UNCAC**, ratified by India in 2011) adds an international frame.' },

    { t: 'h', text: 'Corruption: what it is, why it persists' },
    { t: 'p', text: 'The 2nd ARC calls corruption an important manifestation of the failure of ethics. A common working definition is the abuse of entrusted power for private gain. It takes forms such as **coercive** (a citizen pays for what is due) and **collusive** (citizen and official both gain, and the public loses).' },
    { t: 'wheel', caption: 'Why corruption persists.', center: 'Causes', spokes: ['Discretion and monopoly', 'Low risk of punishment', 'Election finance', 'Complex procedures', 'Weak institutions', 'Social tolerance', 'Delay in courts', 'Low information'] },
    { t: 'note', kind: 'exam', title: 'A useful formula', text: 'Robert Klitgaard\'s formula: **corruption = monopoly + discretion − accountability**. It is simple and helps structure a remedies answer: cut monopoly (competition), reduce discretion (rules, IT), raise accountability (audit, RTI).' },

    { t: 'h', text: 'Second ARC, Fourth Report: Ethics in Governance (2007)' },
    { t: 'p', text: 'The **Second Administrative Reforms Commission**, chaired by **M. Veerappa Moily**, gave its Fourth Report in January 2007. Its chapters run through ethical framework, legal framework, institutional framework, social infrastructure, systemic reforms, protecting the honest civil servant, and international cooperation.' },
    { t: 'table', caption: 'Key recommendations, checked against the report\'s own summary. These are recommendations, and many were not enacted as framed.', head: ['Area', 'Recommendation'], rows: [
      ['**Election funding**', 'Partial state funding, mainly in kind, for reducing illegitimate funding'],
      ['**Legislators**', 'Abolish MPLADS and MLALADS. Declare MPs and MLAs "public authorities" under RTI, other than when legislating. Amend Article 105(2) so immunity does not cover corrupt acts.'],
      ['**Civil servants**', 'Define Public Service Values; breach is misconduct. **Repeal Articles 310 and 311**, and protect officers instead through a law under Article 309.'],
      ['**Definition of corruption**', 'Add to the Prevention of Corruption Act: gross perversion of the Constitution, abuse of authority, obstruction of justice, squandering public money.'],
      ['**Collusive bribery**', 'A special offence, with presumption where public interest suffers, and punishment double that of other bribery.'],
      ['**Sanction**', 'No prior sanction for those trapped red-handed or for disproportionate assets. Sanction decided within two months.'],
      ['**Private sector**', 'Bring private providers of public utility services, and substantially funded NGOs, under the Act.'],
      ['**Whistleblowers**', 'Enact protection law with confidentiality and penalties for retaliation.'],
      ['**Serious economic offences**', 'New law and a Serious Frauds Office'],
      ['**Lokpal**', 'A constitutional **Rashtriya Lokayukta**, with the Prime Minister kept out of its jurisdiction, and with the CVC as ex-officio member.'],
      ['**States and local bodies**', 'Mandatory Lokayukta, State Vigilance Commissions, local bodies ombudsman'],
      ['**Judiciary**', 'A National Judicial Council; a Judicial Values Commissioner'],
    ] },
    { t: 'note', kind: 'trap', title: 'Compare 2nd ARC and the 2013 Lokpal Act', text: 'The 2nd ARC proposed keeping the **Prime Minister out**. The **Lokpal and Lokayuktas Act, 2013** includes the PM, with safeguards. The ARC proposed a constitutional body; the Lokpal is **statutory**. Do not mix these up.' },

    { t: 'h', text: 'The anti-corruption machinery' },
    { t: 'table', caption: 'The bodies, compared. Status and structure are the common traps.', head: ['Body', 'Basis', 'Composition and tenure', 'Role and limit'], rows: [
      ['**CVC**', 'Set up in 1964 by a government resolution on **Santhanam Committee** advice. Statutory by the **CVC Act, 2003**, after **Vineet Narain (1997)**.', 'Central Vigilance Commissioner and up to two Vigilance Commissioners. **4 years or age 65**. Appointed by the President on advice of PM, Home Minister and Leader of Opposition in Lok Sabha.', 'Supervises vigilance in central bodies and the CBI\'s work under the PC Act. Its advice is **not binding**. Handles whistleblower complaints under the 2004 PIDPI resolution.'],
      ['**CAG**', 'Constitutional: **Articles 148-151**. **DPC Act, 1971**.', '**6 years or age 65**. Appointed by the President; removed like a Supreme Court judge. Not eligible for further office.', 'Audits Union and state accounts. Reports to the President or Governor, laid before the legislature; examined by the **PAC**. Audit, not prosecution.'],
      ['**Lokpal**', '**Lokpal and Lokayuktas Act, 2013**. First chairperson appointed 2019.', 'Chairperson and up to 8 members; half judicial; half from SC, ST, OBC, minorities and women. Selection panel: PM, Speaker, Leader of Opposition, CJI or nominee, an eminent jurist.', 'Inquires into corruption complaints against public servants, including PM with safeguards. **Applies in and outside India.**'],
      ['**CBI**', 'Delhi Special Police Establishment Act, 1946', 'Director selected by a committee of PM, Leader of Opposition and CJI', 'Investigates. Needs state consent to act in that state, and is under CVC supervision for PC Act cases.'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2025: Lokpal', text: 'UPSC tested whether Lokpal covers Indian public servants posted abroad (it does), whether only a Chief Justice can be chairperson (no: an eminent person or a Supreme Court judge can also qualify), and age conditions. Prelims 2024 asked about the **Lok Sabha Ethics Committee**: its ad hoc origin, whether only a member can complain, and sub judice matters. Note: any person can complain through a member.' },
    { t: 'p', text: 'Another point: the CAG\'s audit is increasingly a **performance audit**, beyond checking accounts. The **2G report (2010)** estimated a presumptive loss of Rs 1.76 lakh crore, which set off a large debate. A special CBI court acquitted the accused in 2017. So some see strong watchdog work, and others see an overreach based on an estimate. Keep both views.' },

    { t: 'h', text: 'Prevention of Corruption Act, 1988 and its 2018 amendment' },
    { t: 'table', head: ['Provision', 'Effect'], rows: [
      ['**Section 7**', 'Public servant taking an undue advantage. Punishment raised to 3-7 years by the 2018 amendment.'],
      ['**Section 8**', 'Bribe-giving is now clearly an offence. Those compelled to give can report within 7 days.'],
      ['**Section 13**', 'Criminal misconduct narrowed to misappropriation and illicit enrichment.'],
      ['**Section 17A (2018)**', 'Prior approval needed before inquiry into decisions or recommendations made in official duties. Does not apply to on-the-spot arrest in a trap.'],
      ['**Section 19**', 'Prior sanction for prosecuting serving public servants, extended to former officers in 2018.'],
    ] },
    { t: 'compare', caption: 'Section 17A: the live debate. In January 2026, a Supreme Court bench split on this question.', columns: [
      { title: 'For the protection', items: ['Shields honest officers from motivated cases', 'Prevents **policy paralysis**', 'Justice K.V. Viswanathan held it valid, saying it helps attract and retain capable officers'] },
      { title: 'Against the protection', items: ['Government decides whether to probe its own people', 'Blocks inquiry at the very start', 'Justice B.V. Nagarathna held it unconstitutional', 'Echoes **Subramanian Swamy (2014)**, which struck down Section 6A DSPE Act'] },
    ] },

    { t: 'h', text: 'Right to Information Act, 2005' },
    { t: 'flow', caption: 'How an RTI request moves.', steps: [
      { title: 'Application', sub: 'To the PIO; Section 6, no reasons needed' },
      { title: 'Reply', sub: '30 days; 48 hours for life or liberty (Section 7)' },
      { title: 'First appeal', sub: 'Senior officer in the same body (Section 19)' },
      { title: 'Second appeal', sub: 'Central or State Information Commission' },
      { title: 'Penalty', sub: 'Rs 250 a day, up to Rs 25,000 on the PIO (Section 20)' },
    ] },
    { t: 'table', caption: 'Sections and cases worth remembering.', head: ['Item', 'Point'], rows: [
      ['**Section 4**', 'Proactive disclosure by public authorities'],
      ['**Section 8**', 'Exemptions: security, Cabinet papers, trade secrets, personal information and so on. **Section 8(2)** allows disclosure where public interest outweighs harm.'],
      ['**Section 24**', 'Certain intelligence and security organisations are out, except for corruption and human rights allegations.'],
      ['**2019 Amendment**', 'Tenure and salary of Information Commissioners to be set by the Central Government. Critics say this weakens autonomy.'],
      ['**Raj Narain (1975), S.P. Gupta (1981)**', 'Right to know flows from Article 19(1)(a)'],
      ['**CPIO, Supreme Court v Subhash Chandra Agarwal (2019)**', 'Office of the CJI is a public authority, subject to balancing privacy and judicial independence.'],
    ] },
    { t: 'note', kind: 'recent', title: 'RTI and the data protection law', text: '**Section 44(3)** of the Digital Personal Data Protection Act, 2023 rewrote RTI Section 8(1)(j) to exempt personal information, dropping the earlier public-interest test in that clause. Supporters of the change point to Section 8(2), which still protects public interest. Petitioners call it a blanket exemption. On **16 February 2026**, the Supreme Court issued notice and sent the question to a larger bench, with no stay.' },

    { t: 'h', text: 'Other tools of probity' },
    { t: 'table', head: ['Tool', 'Details', 'Limit'], rows: [
      ['**Codes of ethics and conduct**', 'CCS Conduct Rules 1964; AIS Conduct Rules 1968', 'A statutory statement of public service values is still absent, despite the ARC\'s advice.'],
      ['**Citizens\' Charter**', 'UK 1991; India from 1997. Tells citizens standards, timelines and grievance routes. Often linked with **Sevottam**.', 'Often non-binding, and drafted without citizens. Several states have **Right to Services** laws for enforcement.'],
      ['**Whistle Blowers Protection Act, 2014**', 'Enacted after cases like **Satyendra Dubey** (2003). PIDPI resolution in 2004 was an early response.', 'Long reported as not brought into force. Check the present status before quoting.'],
      ['**Social audit**', 'Citizens verify public spending. MGNREGA requires it by law. Meghalaya passed a state law in 2017.', 'Capacity and follow-up are uneven.'],
      ['**E-governance**', 'Direct Benefit Transfer, GeM, e-procurement', 'Digital exclusion; data accuracy'],
      ['**Integrity pacts**', 'Bidder and buyer pledge clean conduct, with outside monitors', 'Depends on monitors\' strength'],
    ] },
    { t: 'p', text: '**Work culture and quality of service:** punctuality, respect for citizens, time-bound decisions, and reward for performance. **Utilisation of public funds:** GFR 2017, Fiscal responsibility, outcome budgets, and audit. Use examples such as **PM-KISAN direct transfer** to show leakage reduction, while noting exclusion errors.' },
    { t: 'p', text: '**Corporate governance:** syllabus overlap. Use **Kumar Mangalam Birla (1999)**, **Narayana Murthy (2003)** and **Uday Kotak (2017)** committees, **Satyam (2009)** and the Companies Act 2013 (independent directors; Section 135 on CSR; Section 177 on vigil mechanism).' },
    { t: 'table', caption: 'Numbers to use, with date.', head: ['Measure', 'Latest figure', 'Source'], rows: [
      ['**TI Corruption Perceptions Index 2025**', 'Global average 42. 182 countries and territories. India reported at **91st, score 39** (published February 2026).', 'Transparency International; India rank from news reports'],
      ['**CVC Annual Report 2025**', 'CVOs received **70,584** complaints in 2025; banks (9,933) and Railways (9,381) topped the list (reported September 2026).', 'PTI via ThePrint'],
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Citizens\' Charter: Is it effective? RTI: strengths and dilution. CVC or Lokpal: Why have they not lived up to expectations? Article 311: Should it go? Transparency versus privacy. Use a structure: define; legal base; what works; where it fails; 2nd ARC or SC case; way forward.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'CVC: 1964 resolution, 2003 Act, 4 years or age 65.',
      'CAG: Articles 148-151, 6 years or age 65, DPC Act 1971.',
      'Lokpal: statutory, 2013 Act, up to 8 members, covers the PM with safeguards.',
      'PC Act: 2018 made bribe-giving an offence and added Section 17A.',
      'RTI: 30 days, 48 hours for life or liberty, Rs 25,000 maximum penalty.',
      '2nd ARC: repeal Articles 310-311; collusive bribery; Rashtriya Lokayukta.',
    ] },
  ],
  sources: [
    { label: 'UPSC CSE syllabus, GS Paper IV (candidate\'s copy, upsc-syllabus.pdf, p4)' },
    { label: 'Second Administrative Reforms Commission, Fourth Report: Ethics in Governance (January 2007), Summary of Recommendations', url: 'https://delhihighcourt.nic.in/web/sites/default/files/reports/ethics4.pdf' },
    { label: 'News On AIR, Supreme Court split verdict on Section 17A (14 January 2026)', url: 'https://www.newsonair.gov.in/sc-delivers-split-verdict-on-validity-of-section-17a-of-prevention-of-corruption-act-mandates-prior-sanction-before-initiating-inquiry' },
    { label: 'LiveLaw, Supreme Court refers DPDP-RTI pleas to a larger bench (16 February 2026)', url: 'https://www.livelaw.in/top-stories/supreme-court-refers-pleas-challenging-dpdp-act-amendment-to-rti-act-to-larger-bench-523266' },
    { label: 'ThePrint (PTI), CVC report figures for 2025 (2 September 2026)', url: 'https://theprint.in/india/70584-corruption-complaints-received-against-govt-depts-in-2025-banks-railways-top-chart/3031617/' },
    { label: 'Transparency International, Corruption Perceptions Index 2025', url: 'https://www.transparency.org/en/cpi/2025' },
    { label: 'UPSC Civil Services Prelims 2024 and 2025, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'Text of the RTI Act, 2005, as amended', where: 'Central Information Commission or Department of Personnel and Training', why: 'Check the current wording of Section 8(1)(j) after the DPDP change.' },
      { what: 'Central Vigilance Commission website', where: 'cvc.gov.in', why: 'Who holds the office now and the latest annual report. The Commissioner\'s post was due to fall vacant in August 2026, and the successor could not be confirmed here.', url: 'https://cvc.gov.in' },
    ],
    current: [
      { issue: 'Section 17A split verdict', link: 'January 2026: Justices Nagarathna and Viswanathan differed, so the matter goes to a larger bench. Check for a final ruling before the exam.', source: 'News On AIR', url: 'https://www.newsonair.gov.in/sc-delivers-split-verdict-on-validity-of-section-17a-of-prevention-of-corruption-act-mandates-prior-sanction-before-initiating-inquiry' },
      { issue: 'DPDP Act and RTI', link: 'February 2026: larger bench reference, with no stay on the Act. Use in a question on transparency versus privacy.', source: 'LiveLaw', url: 'https://www.livelaw.in/top-stories/supreme-court-refers-pleas-challenging-dpdp-act-amendment-to-rti-act-to-larger-bench-523266' },
      { issue: 'CVC report for 2025', link: 'September 2026: 70,584 complaints, with banks and Railways on top.', source: 'ThePrint (PTI)', url: 'https://theprint.in/india/70584-corruption-complaints-received-against-govt-depts-in-2025-banks-railways-top-chart/3031617/' },
    ],
  },
}
