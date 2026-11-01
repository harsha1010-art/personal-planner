import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-29',
  summary: 'The tools that make government answerable: RTI, citizen charters, social audit, Lokpal and e-governance, with the 2nd ARC\'s recommendations and the 2025-26 changes to the RTI Act.',
  minutes: 22,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'GS II asks for "important aspects of governance, transparency and accountability, e-governance, citizens\' charters". **Transparency** means that people can see what government does. **Accountability** means that someone must answer for it and face consequences. **E-governance** is the delivery tool that can support both. Transparency without consequences is weak, which is why the RTI, grievance redress and vigilance laws need to work together.' },
    { t: 'wheel', caption: 'India\'s accountability toolkit', center: 'Answerable government', spokes: ['RTI', 'Citizen charters', 'Right to Services laws', 'Social audit', 'CAG audit', 'Lokpal and CVC', 'Grievance redress (CPGRAMS)', 'Courts and PIL'] },

    { t: 'h', text: 'Right to Information Act, 2005' },
    { t: 'p', text: 'The Supreme Court read a right to know into **Article 19(1)(a)** in *Raj Narain* (1975) and *S.P. Gupta* (1981). The movement began with the **Mazdoor Kisan Shakti Sangathan (MKSS)** in Rajasthan, and states such as Tamil Nadu and Goa passed laws in the 1990s. The Freedom of Information Act, 2002 was never brought into force. The RTI Act took full effect on **12 October 2005**.' },
    { t: 'table', caption: 'Sections that UPSC can test', head: ['Section', 'What it says'], rows: [
      ['2(f), 2(h)', 'Definitions of **information** and **public authority**'],
      ['4', '**Proactive disclosure** by public authorities'],
      ['6, 7', 'Request; reply in **30 days**, or **48 hours** if life or liberty is at stake; 5 more days if through an Assistant PIO'],
      ['8', 'Exemptions, such as security, cabinet papers and personal information. **8(2)** allows disclosure if public interest outweighs harm'],
      ['12, 15', '**Central** and **State Information Commissions**'],
      ['18, 19', 'Complaints and appeals: first appeal inside the department, then second appeal to the Commission'],
      ['20', 'Penalty on the PIO: **₹250 a day, up to ₹25,000**'],
      ['24', 'Exempts listed intelligence and security bodies, **except for corruption and human rights allegations**'],
    ] },
    { t: 'flow', caption: 'How a request moves', steps: [
      { title: 'Application', sub: 'To the Public Information Officer, with a fee; BPL applicants exempt' },
      { title: 'Reply', sub: 'Within 30 days' },
      { title: 'First appeal', sub: 'To a senior officer, within 30 days' },
      { title: 'Second appeal', sub: 'To the Information Commission, within 90 days' },
      { title: 'Courts', sub: 'Writ jurisdiction remains open' },
    ] },
    { t: 'timeline', caption: 'Changes and rulings', items: [
      { when: '2013', what: '*Thalappalam Service Cooperative Bank*: a body is a public authority only if it is substantially financed or controlled by the government.' },
      { when: '2019 (Act)', what: '**RTI Amendment Act:** the Centre sets the terms and salaries of Information Commissioners. Earlier they had a fixed five-year term and parity with Election Commissioners. Critics saw a threat to independence, and the government said Commissions are statutory, not constitutional.' },
      { when: '2019 (cases)', what: '*Subhash Chandra Agarwal*: the **CJI\'s office is a public authority**, with privacy balanced against disclosure. *Anjali Bhardwaj*: vacancies in Commissions must be filled on time.' },
      { when: '13 November 2025', what: '**Section 44(3) of the DPDP Act, 2023** took effect. It rewrites **Section 8(1)(j)** so that personal information is exempt, without the old public-interest test inside that clause.' },
      { when: 'February 2026', what: 'The Supreme Court declined to stay the change earlier, then referred the challenge to a **Constitution Bench**. I found no ruling as of the latest reports (March 2026).' },
    ] },
    { t: 'compare', caption: 'The 2025 change to Section 8(1)(j): both sides', columns: [
      { title: 'Government view', items: ['Privacy is a fundamental right (*Puttaswamy*, 2017)', 'Clarifies and harmonises two laws', 'Section 8(2) still allows public-interest disclosure'] },
      { title: 'Critics\' view', items: ['Almost any record about an official can be called personal', 'Blocks checks on ration lists, payments and officials\' records', 'The Act\'s older rule, that what cannot be denied to Parliament cannot be denied to a citizen, was dropped from the clause'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Common RTI errors', text: 'The Central Information Commission is **statutory**, not constitutional. Appointment is by the **President** on the recommendation of a committee of the **PM, Leader of Opposition in the Lok Sabha and a Cabinet Minister**. Penalties fall on the PIO, not the department. Commissions have limited means of enforcing their own orders, which is a known weakness.' },

    { t: 'h', text: 'Citizen charters and public service guarantees' },
    { t: 'table', head: ['Tool', 'Origin', 'Key points', 'Weakness'], rows: [
      ['Citizens\' Charter', 'UK, **1991** (John Major). India: **1997** under DARPG', 'Public statement of standards, timelines and how to complain', 'Not legally enforceable; often drafted without users'],
      ['Sevottam', 'DARPG model, with standard **IS 15700:2005**', 'Three parts: charter, grievance redress, service delivery capability', 'Uneven adoption'],
      ['Right to Services laws', '**Madhya Pradesh, 2010**, the first; many states followed', 'Legal time limit, appeal and penalty on the officer', 'State-level only; a central Bill lapsed in 2014'],
    ] },
    { t: 'note', kind: 'trap', title: 'Charter and law', text: 'A **Citizens\' Charter has no statutory force**. A Right to Services Act does. If a statement says that charters are enforceable in court, it is wrong.' },

    { t: 'h', text: 'Social audit' },
    { t: 'p', text: 'A social audit lets the people affected by a scheme check its records and results, usually in a public hearing. A **CAG audit** is expert-led and checks compliance and money. A social audit is community-led and also checks whether benefits reached the right people.' },
    { t: 'list', items: [
      '**Roots:** MKSS **jan sunwais** (public hearings) in Rajasthan in the 1990s.',
      '**MGNREGA, Section 17:** Gram Sabhas had to carry out social audits. **Audit of Scheme Rules, 2011**, were framed in consultation with the CAG.',
      '**Andhra Pradesh** built an early independent social audit society.',
      '**Meghalaya** passed the first state law for social audit of schemes, in **2017**.',
      '**National Food Security Act, 2013**, also provides for social audits by local bodies.',
      '**Weaknesses:** units short of staff and money, weak independence, and little follow-up of findings.',
      '**VB-G RAM G Act:** this replaced MGNREGA on **1 July 2026**. Secondary accounts disagree on how it carries over social audit, so read the Act and rules before writing a detail on it.',
    ] },

    { t: 'h', text: 'Anti-corruption bodies' },
    { t: 'table', head: ['Body or law', 'Key facts'], rows: [
      ['**Lokpal and Lokayuktas Act, 2013**', 'Chairperson and up to 8 members, half of them judicial. Minimum age 45. First Lokpal appointed in 2019. Chair: Justice A.M. Khanwilkar (as last reported)'],
      ['**PM under Lokpal**', 'Covered, with safeguards: excludes international relations, security, atomic energy and space; needs a two-thirds bench; held in camera'],
      ['**CVC**', 'Statutory since the CVC Act, 2003; oversees vigilance and superintends the CBI on corruption cases'],
      ['**Prevention of Corruption Act**', 'Amended in 2018: bribe-giving is an offence; prior approval is needed before probes into officials\' decisions (Section 17A)'],
      ['**Whistle Blowers Protection Act, 2014**', 'Passed, but reports still describe it as not brought into force. Check this before writing'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2025 on Lokpal', text: 'UPSC tested four claims: that it does not reach Indian public servants abroad, that only a CJI can chair it, that the minimum age is 45, and that it cannot inquire into a sitting PM. Only the **age** claim is correct: it reaches public servants in and outside India, a Supreme Court judge or eminent person can also chair, and the PM is covered with safeguards.' },

    { t: 'h', text: 'The Second Administrative Reforms Commission' },
    { t: 'p', text: 'The first ARC (1966) began under Morarji Desai. The **2nd ARC** was set up in **2005**, chaired first by **M. Veerappa Moily**, and gave **15 reports** by 2009.' },
    { t: 'table', caption: 'The reports most used in GS II and IV', head: ['No.', 'Report', 'Main ideas'], rows: [
      ['1', 'Right to Information: Master Key to Good Governance', 'Repeal the Official Secrets Act, 1923; strengthen proactive disclosure'],
      ['4', 'Ethics in Governance', 'A constitutional Rashtriya Lokayukta; code of ethics; stop criminalisation of politics'],
      ['6', 'Local Governance', 'Clear devolution of functions, funds and functionaries'],
      ['10', 'Refurbishing of Personnel Administration', 'Performance-based pay and assessment, domain expertise'],
      ['11', 'Promoting e-Governance: The SMART Way Forward', 'Re-engineer processes first; a legal framework for e-governance'],
      ['12', 'Citizen Centric Administration: The Heart of Governance', 'A seven-step charter model, single-window delivery, citizen feedback'],
      ['15', 'State and District Administration', 'Delegation and a reformed district role'],
    ] },

    { t: 'h', text: 'E-governance' },
    { t: 'p', text: 'E-governance is the use of ICT to deliver services and run government. It is usually mapped as **G2C, G2B, G2G and G2E**. A common model has four stages: **presence, interaction, transaction and transformation**. SMART means **Simple, Moral, Accountable, Responsive and Transparent**.' },
    { t: 'timeline', items: [
      { when: '1976', what: 'National Informatics Centre set up.' },
      { when: '1990s-2000s', what: 'State pilots: **Gyandoot** (Madhya Pradesh), **Bhoomi** (land records, Karnataka), **FRIENDS** (Kerala), **eSeva** (Andhra Pradesh).' },
      { when: '2006', what: '**National e-Governance Plan** with Mission Mode Projects and Common Service Centres.' },
      { when: '2015', what: '**Digital India** (1 July) with nine pillars, and **e-Kranti** as NeGP 2.0. **DigiLocker** arrives, as tested in Prelims 2016.' },
      { when: '2016-17', what: '**GeM** for public buying, and **UMANG** for a single services app.' },
      { when: '2023-25', what: 'Digital public infrastructure pushed at the G20 and the **DPDP Act, 2023**, with rules notified in November 2025.' },
    ] },
    { t: 'list', items: [
      '**CPGRAMS:** the central grievance portal. Time norm cut from 30 to **21 days** in August 2024. Average central disposal time was **13 days** in 2026, per DARPG\'s August 2026 report.',
      '**NeSDA:** DARPG\'s periodic assessment of states\' online service delivery.',
      '**Land records:** Prelims 2024 asked about the Digital India Land Records Modernisation Programme.',
      '**Barriers:** digital divide, language, weak connectivity, cyber security, data privacy, and systems built without changing the process.',
    ] },
    { t: 'note', kind: 'trap', title: 'Do not merge these', text: 'Faster digital service does not by itself mean accountability. A portal can close a grievance without solving it. Both CPGRAMS numbers and appeals data should be read with that caveat.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '(1) Two decades of RTI: successes, vacancies, attacks on users and the 2019 and 2025 changes. (2) Privacy against transparency after the DPDP amendment; use *Puttaswamy* and *Subhash Chandra Agarwal*. (3) Why charters fail, and whether Right to Services laws are a better answer, drawing on the 12th ARC report. (4) Social audit as a deepening of democracy, and limits such as elite capture. (5) E-governance as a route to inclusion or new exclusion. Scheme delivery details are in the welfare delivery note.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'RTI: 30 days, 48 hours, ₹25,000 maximum penalty.',
      'Section 4: disclosure. Section 8: exemptions. Section 24: exempt bodies.',
      'Charters: UK 1991, India 1997. Right to Services: Madhya Pradesh 2010.',
      'Social audit: MKSS roots, MGNREGA Section 17, Meghalaya law 2017.',
      '2nd ARC: 2005, Moily, 15 reports; 11th on e-governance, 12th on citizen-centric administration.',
      'Digital India: 1 July 2015; NeGP: 2006.',
    ] },
  ],
  sources: [
    { label: 'Supreme Court Observer: Challenge to DPDP Act, bench refuses to stay amendment', url: 'https://www.scobserver.in/?p=19079' },
    { label: 'ThePrint: Larger Supreme Court bench to hear challenge to DPDP amendment', url: 'https://theprint.in/judiciary/larger-sc-bench-to-hear-challenge-to-dpdp-amendment-that-blunts-rtis-public-interest-shield/2856118' },
    { label: 'Verdictum: Supreme Court on filling posts in Information Commissions', url: 'https://www.verdictum.in/court-updates/supreme-court/anjali-bhardwaj-ors-v-union-of-india-ors-miscellaneous-application-no19792019-in-wpc-no-4362018-1560100' },
    { label: 'PIB: DARPG 52nd Monthly CPGRAMS Report, August 2026', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2314963&reg=48&lang=2' },
    { label: 'PIB: CPGRAMS note', url: 'https://www.pib.gov.in/PressNoteDetails.aspx?NoteId=159478&ModuleId=3&reg=3&lang=1' },
    { label: 'Rural Voice: Government notifies VB-G RAM G Act from 1 July 2026', url: 'https://eng.ruralvoice.in/government-notifies-vb-g-ram-g-act-to-be-implemented-from-1-july-2026' },
    { label: 'Hitavada: Lokpal scraps tender for BMW cars, January 2026', url: 'https://www.thehitavada.com/Encyc/2026/1/2/lokpal-scraps-controversial-tender-to-buy-7-bmw-cars-.html' },
    { label: 'UPSC Civil Services Prelims 2016, 2024 and 2025, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'Text of the RTI Act and amendments', where: 'Department of Personnel and Training', why: 'To check exact section wording, particularly the amended Section 8(1)(j).', url: 'https://rti.gov.in/' },
      { what: 'Reports of the 2nd ARC', where: 'Department of Administrative Reforms and Public Grievances', why: 'Mains-quality recommendations in the commission\'s own terms.', url: 'https://darpg.gov.in/' },
    ],
    current: [
      { issue: 'RTI and DPDP challenge', link: 'Referred to a Constitution Bench in February 2026; check for a ruling before Mains.', source: 'Supreme Court Observer', url: 'https://www.scobserver.in/?p=19079' },
      { issue: 'CPGRAMS performance', link: 'DARPG\'s August 2026 report puts the 2026 average central disposal time at 13 days.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2314963&reg=48&lang=2' },
      { issue: 'Lokpal and public trust', link: 'The Lokpal scrapped its tender to buy seven BMW cars in early January 2026, after criticism.', source: 'Hitavada', url: 'https://www.thehitavada.com/Encyc/2026/1/2/lokpal-scraps-controversial-tender-to-buy-7-bmw-cars-.html' },
    ],
  },
}
