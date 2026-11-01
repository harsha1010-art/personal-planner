import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-13',
  summary: 'A policy study of India\'s main internal security challenges: the security architecture, terrorism and counter-terror law, Left Wing Extremism, and insurgency in the North East, with a balanced view of the debates.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'GS III asks about the **linkages between development and the spread of extremism**, and the **role of external state and non-state actors**. So this topic is studied as a question of policy: why violence arises, how the state responds, and what this costs in rights and resources. Terrorism, Left Wing Extremism (LWE) and insurgency differ in aims and in the ground they hold, so they need different responses.' },
    { t: 'table', head: ['Form', 'Main aim', 'Base', 'India\'s example'], rows: [
      ['**Terrorism**', 'Spread fear for a political or ideological aim, often with attacks on civilians', 'Small networks, often with cross-border links', '26/11 Mumbai (2008), Pahalgam (2025)'],
      ['**Left Wing Extremism**', 'Overthrow the state through armed struggle, using Maoist ideology', 'Forest and tribal belts', 'CPI (Maoist), formed 2004'],
      ['**Insurgency**', 'Autonomy or independence for a group or region, with some local support', 'Territory and ethnic identity', 'Naga, Meitei and other groups'],
      ['**Radicalisation**', 'A process, not an act: acceptance of violent extremist views', 'Online and in-person', 'Addressed through counter-radicalisation'],
    ] },

    { t: 'h', text: 'Who does what' },
    { t: 'strata', caption: '**Police and public order are on the State List** (Entries 1 and 2). The Union has a duty to protect states under **Article 355**.', layers: [
      { title: 'Policy', sub: 'Home Ministry. National Security Council system and the National Security Adviser' },
      { title: 'Intelligence', sub: 'Intelligence Bureau; **Multi Agency Centre** for sharing; **NATGRID** for linking databases' },
      { title: 'Investigation', sub: '**National Investigation Agency** under the NIA Act, 2008, set up after 26/11. Its powers widened in 2019' },
      { title: 'Armed response', sub: '**NSG** for counter-terror strikes; CAPFs: CRPF (internal security), BSF, ITBP, SSB, CISF; Assam Rifles' },
      { title: 'State', sub: 'State police are first responders, with state counter-terror units and special forces, such as Greyhounds in Telangana' },
    ] },

    { t: 'h', text: 'Terrorism' },
    { t: 'p', text: 'There is no single agreed international definition of terrorism. India proposed the **Comprehensive Convention on International Terrorism (CCIT)** at the UN in **1996**, and it is still not adopted, partly because of the dispute over how to treat "freedom fighters". UN Security Council Resolution **1373** (2001) requires states to fight terror financing, and the **1267 Committee** lists Al-Qaida and ISIL-linked persons and groups.' },
    { t: 'timeline', caption: 'Indian anti-terror law.', items: [
      { when: '1967', what: '**Unlawful Activities (Prevention) Act (UAPA)** passed, originally aimed at unlawful associations.' },
      { when: '1987-1995', what: '**TADA**. Lapsed after widespread complaints of misuse. Upheld in Kartar Singh (1994).' },
      { when: '2002-2004', what: '**POTA**. Passed after the 2001 Parliament attack, repealed in 2004. Upheld in PUCL (2004).' },
      { when: '2004-2012', what: 'UAPA amended to add terrorism provisions. Stricter bail after 2008.' },
      { when: '2019', what: 'UAPA amended so **individuals**, not just organisations, can be designated terrorists. NIA Act amended to widen scheduled offences and allow probes of crimes abroad.' },
      { when: '2024', what: '**Bharatiya Nyaya Sanhita** in force from 1 July 2024. **Section 113** defines a terrorist act.' },
      { when: 'February 2026', what: '**PRAHAAR**, India\'s first comprehensive national counter-terrorism policy and strategy.' },
    ] },
    { t: 'wheel', caption: 'PRAHAAR: seven pillars, whose first letters spell the name. Released by the Home Ministry in February 2026.', center: 'PRAHAAR', spokes: ['Prevention', 'Response', 'Aggregating capacities', 'Human rights and rule of law', 'Attenuating conducive conditions', 'Aligning international efforts', 'Recovery and resilience'] },
    { t: 'list', items: [
      '**Key ideas:** It stresses intelligence through MAC and the Joint Task Force on Intelligence, with local police as first responders, a graded response to radicalised youth, attention on terror finance, online radicalisation, drones, and links with organised crime.',
      '**Events to know:** 1993 Mumbai blasts; 2001 Parliament attack; 26/11 Mumbai (2008); Pulwama (2019); **Pahalgam (April 2025)** followed by **Operation Sindoor (May 2025)**; the Red Fort area car blast in Delhi (November 2025).',
      '**Jammu and Kashmir:** Article 370 provisions were removed in August 2019, and the Supreme Court upheld this in December 2023. J&K and Ladakh are now Union Territories.',
    ] },
    { t: 'compare', caption: 'The UAPA debate. Both points are real.', columns: [
      { title: 'Case for strict law', items: ['Terror conspiracy is hard to prove and crosses borders', 'Witnesses are intimidated', 'States need preventive reach', 'Early action can save lives'] },
      { title: 'Concerns', items: ['Long detention before trial, with bail tough under **Section 43D(5)**', 'Low conviction relative to arrests has been reported', 'Risk of use against dissent', 'Individual designation lacks prior hearing'] },
    ] },
    { t: 'table', head: ['Case', 'Point'], rows: [
      ['**NIA v Zahoor Ahmad Watali (2019)**', 'Court should not examine evidence deeply at the bail stage under UAPA'],
      ['**Union of India v K.A. Najeeb (2021)**', 'Long delay in trial can justify bail despite Section 43D(5), under Article 21'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2023', text: 'A statement in the 2023 paper said that under POTA, 2002, a confession before police cannot be used as evidence. Note that POTA in fact allowed some such confessions under conditions. This is one reason why it was controversial, and why such laws are compared to the ordinary rule that bars confessions to police.' },
    { t: 'note', kind: 'trap', title: 'UAPA and BNS', text: 'BNS Section 113 now defines a terrorist act, but **UAPA still exists**, and it was not repealed. **NIA** is a statutory body, set up in 2009 under the 2008 Act. **NATGRID** is a database link, not an agency that investigates. The proposed **National Counter Terrorism Centre** was stalled in 2012 after states objected on federal grounds.' },
    { t: 'h3', text: 'External state and non-state actors' },
    { t: 'list', items: [
      '**Cross-border support:** India holds Pakistan-based groups such as Lashkar-e-Taiba and Jaish-e-Mohammed responsible for major attacks. Pakistan denies state policy of this kind.',
      '**Finance:** Pakistan left the **FATF grey list** in October 2022. Hawala, drugs and fake currency fund terror.',
      '**Technology:** Drones across the Punjab border, encrypted apps, and online radicalisation.',
      '**Neighbours:** Sanctuaries of north-east groups in Myanmar; a past history of support to them from outside.',
    ] },

    { t: 'h', text: 'Left Wing Extremism' },
    { t: 'flow', caption: 'Why the movement grew, per the 2008 Planning Commission Expert Group under D. Bandyopadhyay: development gaps and governance deficit, as well as ideology.', steps: [
      { title: 'Grievance', sub: 'Land, forest rights, displacement, exclusion' },
      { title: 'Absent state', sub: 'Few roads, schools and officials' },
      { title: 'Ideology', sub: 'Maoist people\'s war since Naxalbari, 1967' },
      { title: 'Armed control', sub: 'PLGA; levies in forest regions' },
      { title: 'State response', sub: 'Security and development together' },
    ] },
    { t: 'table', caption: 'Government\'s approach: the National Policy and Action Plan, 2015.', head: ['Track', 'Measures'], rows: [
      ['Security', '**SAMADHAN** (2017) doctrine; central forces, fortified police stations; state special forces; **Security Related Expenditure** and **Special Infrastructure** schemes'],
      ['Development', 'Road Connectivity Project; mobile towers; Eklavya schools; aspirational districts'],
      ['Rights', 'Forest Rights Act, 2006; PESA, 1996; surrender and rehabilitation policy'],
      ['Legal', 'Bans on CPI (Maoist) under UAPA; **Nandini Sundar (2011)**: the Supreme Court struck down state use of Salwa Judum special police officers in Chhattisgarh'],
    ] },
    { t: 'note', kind: 'recent', title: 'Status as of April 2026', text: 'The Home Ministry told states (communication of 8 April 2026, reported by PTI) that after a review past the 31 March 2026 target date, **no district falls in the LWE-affected category**. In its place it named 38 districts: **37 "Legacy and Thrust"** (free of insurgency, needing continued effort) and one **"District of Concern"**, West Singhbhum in Jharkhand. The Home Minister told Parliament on 30 March 2026 that India was free of Maoists.' },
    { t: 'compare', caption: 'How to read this claim.', columns: [
      { title: 'What it shows', items: ['Major fall in violence and geographic reach', 'Top leadership killed, or surrendered', 'Roads and camps expanded into former strongholds'] },
      { title: 'What is still open', items: ['Underlying land and forest grievances', 'Civilian rights concerns in operations', 'Rehabilitation of those who surrender', 'Risk of re-emergence if development stalls'] },
    ] },

    { t: 'h', text: 'Insurgency in the North East' },
    { t: 'p', text: 'Roots lie in colonial isolation, ethnic identity, fears about migration and land, a difficult border with Myanmar, and weak development. Most groups started by asking for independence or autonomy, and many have since moved to talks. The region\'s violence has fallen sharply in the past decade, per the Home Ministry, though **Manipur** has seen serious ethnic conflict since May 2023.' },
    { t: 'table', caption: 'Accords to remember.', head: ['Year', 'Accord', 'With'], rows: [
      ['1975', 'Shillong Accord', 'Naga underground groups'],
      ['1986', 'Mizo Accord', 'Mizo National Front; a standard example of a successful settlement'],
      ['2015', 'Framework Agreement', 'NSCN (I-M); a final Naga deal is pending, with a dispute over a flag and constitution'],
      ['2020', 'Bodo Accord; Bru-Reang agreement', 'NDFB and others; Bru settlement in Tripura'],
      ['2021', 'Karbi Anglong Agreement', 'Karbi groups'],
      ['2023', 'ULFA (pro-talks) peace accord', 'Pro-talks faction'],
      ['2024', 'Tripura pact', 'NLFT and ATTF'],
    ] },
    { t: 'h3', text: 'AFSPA' },
    { t: 'list', items: [
      '**Armed Forces (Special Powers) Act, 1958.** Under **Section 3**, an area is declared "disturbed". **Section 4** allows force, arrest and search without warrant. **Section 6** needs central sanction to prosecute.',
      '**Current status:** Six-month extension from 1 October 2026 (notified 25 September 2026) in **Manipur** (except 13 police station areas), parts of **Nagaland** (nine districts and 21 police stations) and parts of **Arunachal Pradesh**. The Assam position could not be confirmed. A separate 1990 Act applies to J&K.',
      '**Withdrawn earlier:** Tripura (2015), Meghalaya (2018).',
      '**Case law:** **Naga People\'s Movement (1997)** upheld the law with safeguards. **EEVFAM (2016)** said there is no absolute immunity, and that encounters in Manipur should be probed.',
      '**Committees:** **Jeevan Reddy (2005)** recommended repeal and moving safeguards to another law; the Second ARC backed this. **Santosh Hegde (2013)** examined encounters in Manipur.',
      '**Debate:** Forces say they need legal cover against insurgents. Critics cite Irom Sharmila\'s long fast and the **Oting** killings (December 2021) as evidence of rights costs and low accountability.',
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Development and extremism: which comes first? Use Bandyopadhyay and the Bastar roads debate. Assess PRAHAAR: what is new, and what it depends on, such as state police capacity. Balance security and civil liberties, using UAPA and AFSPA. Peace accords: why some last (Mizo) and others stall (Naga). External actors: Pakistan, Myanmar, and technology. Always keep to facts; say "the government holds" and "critics argue".' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'TADA 1987, POTA 2002, UAPA 1967 (amended 2019). BNS Section 113.',
      'NIA Act 2008. CCIT proposed by India 1996.',
      'PRAHAAR, February 2026: seven pillars.',
      'Naxalbari 1967. SAMADHAN 2017. Policy 2015.',
      'April 2026: no LWE-affected district; West Singhbhum "District of Concern".',
      'AFSPA 1958; Jeevan Reddy 2005; EEVFAM 2016.',
    ] },
  ],
  sources: [
    { label: 'ThePrint (PTI), Home Ministry on LWE-affected districts (15 April 2026)', url: 'https://theprint.in/india/no-naxal-violence-hit-districts-in-india-anymore-home-ministry-to-state-govts/2905794/' },
    { label: 'ThePrint, AFSPA extension (25 September 2026)', url: 'https://theprint.in/india/centre-extends-afspa-in-disturbed-areas-of-manipur-nagaland-arunachal-for-another-6-months/3053501/' },
    { label: 'Drishti IAS, summary of PRAHAAR (25 February 2026)', url: 'https://www.drishtiias.com/daily-updates/daily-news-analysis/national-counterterrorism-policy-and-strategy-prahaar' },
    { label: 'UPSC Civil Services Prelims 2023, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'Text of UAPA and BNS Section 113', where: 'India Code', why: 'Exact wording of the definition, and of the bail bar.', url: 'https://www.indiacode.nic.in/' },
      { what: 'PRAHAAR document', where: 'Home Ministry', why: 'Eight-page primary text. Read it once before writing on it.', url: 'https://www.mha.gov.in/' },
      { what: 'Annual report', where: 'Home Ministry', why: 'Official incident data on J&K, LWE and the North East.', url: 'https://www.mha.gov.in/' },
    ],
    current: [
      { issue: 'LWE status after 31 March 2026', link: 'Districts recast in April 2026. Useful in answers on the security-plus-development approach.', source: 'ThePrint (PTI)', url: 'https://theprint.in/india/no-naxal-violence-hit-districts-in-india-anymore-home-ministry-to-state-govts/2905794/' },
      { issue: 'AFSPA extended from 1 October 2026', link: 'Partly reduced map in the North East, renewed for six months in September 2026.', source: 'ThePrint', url: 'https://theprint.in/india/centre-extends-afspa-in-disturbed-areas-of-manipur-nagaland-arunachal-for-another-6-months/3053501/' },
      { issue: 'PRAHAAR', link: 'First comprehensive counter-terrorism policy (February 2026).', source: 'Drishti IAS', url: 'https://www.drishtiias.com/daily-updates/daily-news-analysis/national-counterterrorism-policy-and-strategy-prahaar' },
    ],
  },
}
