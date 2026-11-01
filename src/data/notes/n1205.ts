import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-05',
  summary: 'How welfare actually reaches people: targeting, DBT and JAM, food and work guarantees, and the laws and schemes for vulnerable groups, with the role of NGOs and SHGs at the last mile. The structures of NGOs and SHGs are in the separate civil services note.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'GS II asks about "welfare schemes for vulnerable sections of the population by the Centre and States and the performance of these schemes; mechanisms, laws, institutions and bodies". The exam tests the scheme, but the marks in Mains come from **why delivery succeeds or fails**. India\'s main promises rest on Articles **38, 39, 41, 46 and 47**. Good laws matter less if the money, grain or service does not reach the right person.' },
    { t: 'flow', caption: 'The delivery chain. Each step can fail.', steps: [
      { title: 'Identify', sub: 'SECC data, ration lists, registries' },
      { title: 'Enrol', sub: 'Aadhaar, Jan Dhan, documents' },
      { title: 'Transfer', sub: 'Cash through DBT, or goods through PDS' },
      { title: 'Last mile', sub: 'Banking agents, ASHAs, Anganwadis, SHGs' },
      { title: 'Grievance', sub: 'Helplines and portals' },
      { title: 'Audit', sub: 'Social audit, CAG, evaluation' },
    ] },

    { t: 'h', text: 'Design choices' },
    { t: 'compare', columns: [
      { title: 'Universal or targeted', items: ['**Universal:** fewer exclusion errors and simple to run, but costly. Tamil Nadu\'s PDS is a known example', '**Targeted:** cheaper, but poor people can be left out', '**Inclusion error:** the non-poor get benefits', '**Exclusion error:** the poor are left out. Usually the more harmful one'] },
      { title: 'Cash or in kind', items: ['**Cash:** choice, lower leakage, low transport cost. Works where markets and banks are near', '**In kind:** protects against price rises, and more likely to reach women and children\'s nutrition', 'Evidence from Dreze and Khera, and others, shows that many PDS users prefer grain, especially in remote places'] },
      { title: 'Rights or schemes', items: ['**Rights law:** NFSA, RTE; can be enforced in court', '**Scheme:** flexible, but can be changed by executive order', 'The move from MGNREGA to VB-G RAM G has revived this debate'] },
    ] },

    { t: 'h', text: 'DBT and JAM' },
    { t: 'p', text: '**Direct Benefit Transfer** began in **2013**. **JAM** stands for **Jan Dhan, Aadhaar and Mobile**, as promoted in the Economic Survey 2014-15. The money goes directly to the bank account, cutting out middlemen.' },
    { t: 'compare', columns: [
      { title: 'What it has done', items: ['Reported savings of **₹3.48 lakh crore** (2009-2024) in an April 2025 study. Other estimates differ', 'Food subsidy accounts for over half of this reported saving', 'Beneficiary count rose from 11 crore to 176 crore (2013-2024, same study)', 'LPG (**PAHAL**), MGNREGA wages and PM-KISAN run on it'] },
      { title: 'Limits', items: ['"Savings" include removing duplicates, but also possibly genuine people', 'Biometric failures hit the old and manual workers', 'Payment failures and frozen accounts', 'Distance from bank agents', 'Cash cannot fix missing schools or health care'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Aadhaar in welfare', text: 'In the **Aadhaar judgment (2018)**, the Supreme Court upheld its use for welfare under **Section 7 of the Aadhaar Act, 2016**, and struck down mandatory use for bank accounts and mobile phones. Reported hunger deaths in **Jharkhand** in 2017 fed the exclusion debate. Do not write that Aadhaar is mandatory for everything.' },

    { t: 'h', text: 'Food security' },
    { t: 'table', head: ['Element', 'Facts'], rows: [
      ['**NFSA, 2013**', 'Legal right to subsidised grain for up to **75% of rural and 50% of urban** people (about two-thirds overall)'],
      ['Entitlement', 'Priority households: **5 kg per person a month**. **Antyodaya** households: **35 kg per family a month**'],
      ['Women', 'The eldest woman (18+) is the **head of household** on the ration card. Maternity benefit of at least ₹6,000'],
      ['**PMGKAY**', 'Free grain under NFSA for about **81 crore** people, extended for five years from **1 January 2024 to December 2028**, at an estimated cost of about ₹11.80 lakh crore'],
      ['**One Nation One Ration Card**', 'Portability: a migrant can use a ration card at any Fair Price Shop'],
      ['Oversight', 'State Food Commissions and District Grievance Officers. Section 28 on social audit'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2018', text: 'UPSC asked about the NFSA, including a claim that only Below Poverty Line families are eligible. That is false, as the Act uses priority and Antyodaya categories. It also tested the eldest woman being the head of household for the ration card.' },

    { t: 'h', text: 'Rural work: from MGNREGA to VB-G RAM G' },
    { t: 'table', caption: 'As of November 2026. The new Act took effect on 1 July 2026, and MGNREGA was repealed from that date.', head: ['', 'MGNREGA, 2005', 'VB-G RAM G Act, 2025'], rows: [
      ['Guarantee', '100 days per household', '**125 days** per household'],
      ['Funding', 'Centre paid unskilled wages in full, and most material costs', '**60:40** Centre-State, and 90:10 for Northeastern and Himalayan states'],
      ['Timing', 'Demand-based throughout the year', 'Reports describe a pause of up to 60 days in peak farm seasons'],
    ] },
    { t: 'compare', caption: 'Both sides', columns: [
      { title: 'Supporters', items: ['More guaranteed days', 'Better asset planning', 'Farm labour availability', 'An SBI report claims states may gain about ₹17,000 crore on average'] },
      { title: 'Critics', items: ['Moves costs to states, and poorer ones may limit work', 'Weakens the demand-based right', 'Less local control', 'Karnataka and Kerala assemblies passed resolutions against it; some states object to the cost share'] },
    ] },

    { t: 'h', text: 'Vulnerable groups: laws, bodies, schemes' },
    { t: 'table', head: ['Group', 'Law or provision', 'Body and schemes'], rows: [
      ['**Scheduled Castes**', 'Article 17; PCR Act, 1955; **SC/ST (Prevention of Atrocities) Act, 1989**; Manual Scavengers Act, 2013', 'National Commission for SCs (Article 338); PM-AJAY; post-matric scholarships; NAMASTE'],
      ['**Scheduled Tribes**', 'Fifth and Sixth Schedules; **PESA, 1996**; **Forest Rights Act, 2006**', 'NCST (Article 338A); Eklavya schools; **PM-JANMAN** (2023) for 75 PVTGs; **Dharti Aaba Janjatiya Gram Utkarsh Abhiyan** (October 2024): 25 interventions, 17 ministries, 63,843 villages'],
      ['**Backward Classes**', 'Article 340; **102nd Amendment** gives NCBC constitutional status (Article 338B)', 'PM-DAKSH; SEED for de-notified tribes'],
      ['**Minorities**', 'Articles 29-30; NCM Act, 1992', 'PM\'s New 15-Point Programme; PM VIKAS'],
      ['**Women and children**', 'POCSO, 2012; Juvenile Justice Act, 2015', '**Mission Shakti** (Sambal and Samarthya); **Saksham Anganwadi and Poshan 2.0**; **Mission Vatsalya**; PM Matru Vandana Yojana'],
      ['**Persons with disabilities**', '**RPwD Act, 2016:** 21 disabilities; 4% jobs and 5% higher education reservation', 'Sugamya Bharat Abhiyan (2015); Department of Empowerment of Persons with Disabilities'],
      ['**Elderly**', 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007', 'NSAP pensions; PM-JAY for 70+'],
      ['**Transgender persons**', '*NALSA* (2014); 2019 Act; **2026 Amendment**', 'SMILE scheme; Garima Greh'],
      ['**Informal and migrant workers**', 'Social Security Code', 'e-Shram; aggregator-linked gig worker provisions'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026', text: 'UPSC asked about persons with disabilities. One statement dated the Rights of Persons with Disabilities Act to **2018**; the correct year is **2016**. Another described Sugamya Bharat\'s three domains: built infrastructure, transport systems, and information and communication. Dates and domains are the trap here.' },
    { t: 'note', kind: 'recent', title: 'Transgender Amendment Act, 2026', text: 'Passed in March 2026, assent on 30 March, and in effect from **25 May 2026**. It **removes the explicit right to self-perceived gender identity**, and it makes medical scrutiny a step in legal recognition. Supporters say it focuses protection on those facing real exclusion. Critics say it conflicts with *NALSA*, and protests followed.' },
    { t: 'note', kind: 'exam', title: 'Prelims 2019 on PVTGs', text: 'Criteria and numbers were tested, including a false figure of 95. There are **75** PVTGs. See the Indian society note for details.' },

    { t: 'h', text: 'NGOs and SHGs at the last mile' },
    { t: 'p', text: 'This section asks how these bodies help deliver services. Their legal form and history are covered in the note on civil services, NGOs and SHGs.' },
    { t: 'table', head: ['Actor', 'Delivery role', 'Example', 'Risk'], rows: [
      ['SHGs', 'Credit access, nutrition, canteens, banking agents', '**Kudumbashree** (Kerala) runs enterprises and supports local government; **Jeevika** (Bihar)', 'Unpaid or under-paid work for women'],
      ['NGOs', 'Delivery, awareness, monitoring', '**Akshaya Patra** in school meals; **Pratham** on foundational learning', 'Uneven reach and dependence on donors'],
      ['Front-line workers', 'Home-level services', '**ASHA** and **Anganwadi** workers', 'Low pay and overload; they are classed as volunteers or honorary workers'],
      ['Local bodies', 'Beneficiary selection and audit', 'Gram Sabhas under PESA and FRA', 'Elite capture'],
    ] },

    { t: 'h', text: 'Why delivery fails, and what helps' },
    { t: 'table', head: ['Failure', 'Example', 'Fix'], rows: [
      ['Exclusion', 'Old data: NFSA coverage still rests on Census 2011 population', 'Regular updates; self-enrolment'],
      ['Silos', 'Many schemes for one family', 'Convergence, as in DAJGUA; one-stop centres'],
      ['Low capacity', 'Vacancies and overworked front-line staff', 'Pay, training, supervision'],
      ['Weak information', 'People do not know entitlements', 'Proactive disclosure and local camps'],
      ['Fiscal strain', 'Centre-State disputes on matching funds', 'Clear cost-sharing, advance funds'],
      ['Weak accountability', 'Audit findings go unaddressed', 'Social audit with follow-up, and grievance redress with deadlines'],
    ] },
    { t: 'list', items: [
      '**State ideas:** Rajasthan\'s Jan Aadhaar; Tamil Nadu\'s universal PDS and breakfast scheme; Odisha\'s KALIA for small farmers; Kerala\'s local planning.',
      '**Women-focused cash schemes:** several states run them. They raise questions of empowerment and fiscal cost. The "freebies" debate continues in the courts and in fiscal policy.',
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '(1) "Technology cannot replace state capacity": examine with DBT and Aadhaar. Use both sides. (2) From entitlement to mission: MGNREGA to VB-G RAM G. (3) Assess NFSA and PMGKAY: food security against nutrition, fiscal costs and an outdated population base. (4) Are tribal schemes reaching PVTGs? Use PM-JANMAN, FRA and PESA. (5) Rights of the transgender community after the 2026 Amendment. (6) SHG-led delivery: empowerment or cheap labour? Always add one state best practice.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'NFSA: 75% rural, 50% urban; 5 kg; Antyodaya 35 kg. PMGKAY to December 2028.',
      'DBT 2013; JAM; Aadhaar Act Section 7.',
      'VB-G RAM G: 125 days; 60:40; in force 1 July 2026.',
      'RPwD 2016: 21 disabilities; 4% and 5%.',
      'PESA 1996; FRA 2006; PM-JANMAN 2023; DAJGUA 2024.',
      'Transgender Amendment Act in effect 25 May 2026; *NALSA* 2014.',
    ] },
  ],
  sources: [
    { label: 'Rural Voice: Government notifies VB-G RAM G Act from 1 July 2026', url: 'https://eng.ruralvoice.in/government-notifies-vb-g-ram-g-act-to-be-implemented-from-1-july-2026' },
    { label: 'DT Next: VB-G RAM G replaces MGNREGA, explained', url: 'https://www.dtnext.in/explainer/explained-vb-g-ram-g-replaces-mgnrega-125-workdays-higher-wages-and-states-concerns' },
    { label: 'Akashvani News: Government rebuttals on VB-G RAM G claims', url: 'https://www.newsonair.gov.in/govt-issues-strong-rebuttals-against-misleading-claims-regarding-viksit-bharat-g-ram-g-act/' },
    { label: 'Scroll: Karnataka and Kerala legislatures pass resolutions against VB-G RAM G', url: 'https://scroll.in/latest/1090513/scroll_in' },
    { label: 'Lokmat Times: SBI report on VB-G RAM G and states', url: 'https://www.lokmattimes.com/business/vb-g-ram-g-act-likely-to-make-states-net-gainers-of-rs-17000-cr-despite-6040-funding-shift-sbi-report' },
    { label: 'Business Today: DBT system, ₹3.48 lakh crore saved', url: 'https://www.businesstoday.in/latest/economy/story/dbt-system-delivers-big-rs-348-lakh-crore-saved-subsidy-share-falls-to-9-473240-2025-04-23' },
    { label: 'Vajiram and Ravi: Free foodgrains for 81 crore people under NFSA (secondary)', url: 'https://vajiramandravi.com/current-affairs/free-foodgrains-for-81-crore-people-under-nfsa/' },
    { label: 'Bar and Bench: Transgender Amendment Bill gets Presidential assent', url: 'https://www.barandbench.com/news/transgender-amendment-bill-gets-presidential-assent-amid-protests' },
    { label: 'Lexplosion: Transgender Persons Amendment Act, 2026', url: 'https://lexplosion.in/central-government-issues-the-transgender-persons-protection-of-rights-amendment-act-2026-modifies-the-definition-of-transgender-person-and-incorporates-additional-penalties/' },
    { label: 'Ministry of Tribal Affairs: Dharti Aaba Janjatiya Gram Utkarsh Abhiyan', url: 'https://tribal.nic.in/dajagua.aspx' },
    { label: 'UPSC Civil Services Prelims 2018, 2019 and 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'DBT Bharat portal', where: 'Cabinet Secretariat', why: 'Live scheme-wise data on transfers and official savings estimates.', url: 'https://dbtbharat.gov.in/' },
      { what: 'VB-G RAM G Act and rules', where: 'Ministry of Rural Development', why: 'Secondary reports disagree on details such as social audit. Check exact provisions.', url: 'https://rural.gov.in/' },
    ],
    current: [
      { issue: 'VB-G RAM G rollout', link: 'In force from 1 July 2026. States\' objections on 60:40 cost share continued into July 2026.', source: 'Rural Voice', url: 'https://eng.ruralvoice.in/government-notifies-vb-g-ram-g-act-to-be-implemented-from-1-july-2026' },
      { issue: 'Transgender Amendment Act', link: 'In effect from 25 May 2026, amid protests over self-identification.', source: 'Lexplosion', url: 'https://lexplosion.in/central-government-issues-the-transgender-persons-protection-of-rights-amendment-act-2026-modifies-the-definition-of-transgender-person-and-incorporates-additional-penalties/' },
      { issue: 'Tribal welfare', link: 'DAJGUA, launched in October 2024, targets 63,843 villages through 17 ministries.', source: 'Ministry of Tribal Affairs', url: 'https://tribal.nic.in/dajagua.aspx' },
    ],
  },
}
