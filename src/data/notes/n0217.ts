import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-02-17',
  summary: 'How to build issue cards, and the main national policy, governance and social issues as confirmed on 1 November 2026. You must update every card by February 2027.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'note', kind: 'recent', title: 'Read this first: frozen on 1 November 2026', text: 'This note was written on **1 November 2026** for a study day in **February 2027**. It cannot contain anything that happened after that date. Treat each row as the starting point of a card, not the final word. **You must update every issue before you use it.** The update list below tells you what to look for.' },
    { t: 'p', text: 'The syllabus for Paper I opens with **current events of national and international importance**. UPSC rarely tests the headline alone. It tests the concept behind the news: the article, the Act, the body and the data source. So a current affair is useful only when it is tied to static syllabus. Today\'s plan output is **20 issue cards and 30 MCQs**, using one monthly compilation only.' },

    { t: 'h', text: 'Method: how to build an issue card' },
    { t: 'flow', caption: 'One issue, one card. The Issue cards page on this site has the same fields: issue, paper, facts and source.', steps: [
      { title: 'Filter', sub: 'Can you name the syllabus line? If not, skip it' },
      { title: 'Go to the source', sub: 'PIB, gazette, ministry, court order or PRS. Not only a digest' },
      { title: 'Anchor it', sub: 'Article, Act, body, committee, case' },
      { title: 'Record both sides', sub: 'Case for, case against, one Indian example' },
      { title: 'Date it', sub: 'Publisher and date. Write the status as of that date' },
      { title: 'Self-test', sub: 'Write two possible MCQ statements, one true and one false' },
    ] },
    { t: 'table', caption: 'What goes in each field. A sample using the Census.', head: ['Field', 'What to write', 'Sample'], rows: [
      ['Issue', 'A short, searchable name', 'Census 2027 and caste count'],
      ['Paper', 'Prelims, GS1 to GS4 or Essay', 'Prelims, GS1, GS2'],
      ['Facts', 'Provisions, numbers, status', 'Census Act 1948. Two phases. Reference date 1 March 2027'],
      ['Both sides', 'Inside Facts, on separate lines', 'Better targeting of policy, or hardening of caste identity'],
      ['Source and date', 'Publisher and exact date', 'PIB, 25 April 2026'],
    ] },
    { t: 'note', kind: 'trap', title: 'Common card mistakes', text: 'Do not copy paragraphs. A card with more than about 80 words will not get revised. Do not write "recently". Write the month and year. Do not keep a Bill as law: record whether it is **introduced, in committee, passed, assented, in force, withdrawn or defeated**, since UPSC can test the difference.' },

    { t: 'h', text: 'Polity and elections: status on 1 November 2026' },
    { t: 'table', caption: '"Press only" means I could not find an official record in my checks. Confirm it before relying on it.', head: ['Issue', 'Status on 1 Nov 2026', 'Static anchor', 'Source and date'], rows: [
      ['**Census 2027**', 'Phase I, house listing: 1 April to 30 September 2026. Phase II, population enumeration: **February 2027**, reference date **1 March 2027**. Snow-bound areas and Ladakh ran earlier, reference date 1 October 2026. First digital census, with self-enumeration. Caste recorded in Phase II', 'Census Act 1948; Union List entry on census', 'PIB, 25 April 2026. The 40-question Phase II schedule: press, 14 August 2026'],
      ['**131st Amendment Bill and delimitation**', 'Introduced 16 April 2026. Sought up to **850** Lok Sabha seats and women\'s reservation after delimitation. **Defeated 17 April 2026**: 298 for, 230 against. The Delimitation Bill 2026 did not proceed', 'Articles 82, 170, 368; 106th Amendment 2023', 'PRS, status 17 April 2026; LiveLaw, April 2026'],
      ['**One Nation, One Election**', '129th Amendment Bill 2024 and the UT Laws (Amendment) Bill 2024 are with a Joint Committee chaired by P. P. Chaudhary. Report now due on the first day of the last week of **Winter Session 2026**', 'Articles 83, 172; Kovind committee 2024', 'All India Radio, 29 July 2026'],
      ['**Special Intensive Revision (SIR) of rolls**', 'Supreme Court upheld it on **27 May 2026** in ADR v. ECI (CJI Surya Kant, Justice Bagchi). The exercise is for electoral purposes and does not decide citizenship. Rollout continues in phases', 'Article 324; RP Act 1950; Article 326', 'All India Radio, 27 May 2026; PIB, 25 July 2026'],
    ] },
    { t: 'note', kind: 'exam', title: 'A number worth working out', text: 'A Constitution Amendment Bill needs a majority of total membership and **two-thirds of those present and voting** (Article 368). With 298 + 230 = 528 voting, two-thirds is **352**. So 298 votes, a clear simple majority, still failed.' },
    { t: 'compare', caption: 'Delimitation and women\'s reservation: keep the two arguments separate.', columns: [
      { title: 'Case for a quick expansion', items: ['Women\'s reservation under the 106th Amendment stays waiting on Census and delimitation', 'Seat allocation has been frozen for decades, while population has shifted', 'Larger Houses could lower the number of voters per MP'] },
      { title: 'Case of the critics', items: ['Opposition parties said they back women\'s reservation but not the delimitation terms', 'States with lower population growth fear losing relative weight', 'The Delimitation Bill used the latest published Census, which PRS read as 2011, while a new Census is under way'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Do not mix these Bills', text: '**106th Amendment (2023):** law, women\'s reservation, not yet operational. **129th Amendment Bill (2024):** simultaneous polls, in committee. **131st Amendment Bill (2026):** defeated. Article 82 still holds the freeze until the first Census after 2026 is published.' },

    { t: 'h', text: 'Governance and labour: status on 1 November 2026' },
    { t: 'table', head: ['Issue', 'Status on 1 Nov 2026', 'Static anchor', 'Source and date'], rows: [
      ['**VB-G RAM G Act 2025**', 'In force **1 July 2026**, replacing MGNREGA 2005. Statutory guarantee of **125 days** per rural household each financial year. Plans start from Viksit Gram Panchayat Plans with the Gram Sabha', 'Article 41; Article 243G; earlier NREGA 2005', 'PIB, 29 September 2026; notification reported by PIB, 11 May 2026'],
      ['**Four Labour Codes**', 'In force **21 November 2025**. Old rules continue where consistent until final rules are notified. I could not confirm the final central rules', 'Concurrent List; Articles 39, 43', 'PIB, 5 February 2026; Labour Ministry FAQ, 16 March 2026'],
      ['**Digital Personal Data Protection Rules**', 'Notified in **November 2025** with an 18-month phase-in, so the last stage falls around May 2027. Data Protection Board established. MeitY called for applications for its posts in 2026', 'DPDP Act 2023; Article 21 and Puttaswamy (2017); RTI Act', 'PIB, November 2025; MeitY notices, May 2026'],
    ] },
    { t: 'compare', caption: 'The VB-G RAM G debate. Present both sides in Mains.', columns: [
      { title: 'Government position', items: ['More guaranteed days, 125 instead of 100', 'Works tied to water, rural infrastructure, livelihoods and climate events', 'Digital systems and bottom-up village plans', 'PIB called the transition seamless in September 2026'] },
      { title: 'Questions to examine', items: ['Whether the new funding terms reduce demand-led access. Read the Act before writing this', 'Whether States can bear their share', 'Actual person-days and wage delays, once data is available'] },
    ] },
    { t: 'note', kind: 'exam', title: 'Fill this gap yourself', text: 'I could not confirm the funding ratio and the farm-season pause from an official text that I could open, so they are left out here. Read the sections on funding and pause periods in the Act, and add them to your card. They are likely Prelims material.' },

    { t: 'h', text: 'Social issues: status on 1 November 2026' },
    { t: 'table', head: ['Issue', 'Status on 1 Nov 2026', 'Static anchor', 'Source and date'], rows: [
      ['**NFHS-6**', 'Released **29 May 2026**. Survey done in 2023-24, with IIPS Mumbai as nodal agency. Antenatal care coverage 95.9%. Full immunisation at 12-23 months rose from 83.8% to 87.1%. Rising adult obesity and high blood sugar flagged. Anaemia estimates held back pending an ICMR survey', 'GS2 health; Article 47', 'PIB, 29 May 2026; update, 4 August 2026'],
      ['**VBSA Bill 2025** (higher education regulator)', 'Introduced 15 December 2025, sent to a 31-member Joint Committee. A July 2026 meeting to adopt the draft report was cancelled, with no report found', 'Entry 66 of the Union List; NEP 2020', 'Press only, July 2026. Check Lok Sabha records'],
      ['**UGC Equity Regulations 2026**', 'Supreme Court stayed them on **29 January 2026** and said the 2012 Regulations continue. I found no later order', 'Articles 14, 15, 17, 46', 'All India Radio, 29 January 2026'],
    ] },
    { t: 'note', kind: 'trap', title: 'NFHS year', text: 'The report came out in 2026, but the fieldwork was in 2023-24. Quote both when you use a number. Also do not write an anaemia figure for NFHS-6 unless the ministry has released it by the time you read this.' },

    { t: 'h', text: 'Your February update list' },
    { t: 'timeline', caption: 'Each of these falls after this note was written. Check the outcome and rewrite your card.', items: [
      { when: 'Winter Session 2026', what: 'Did the One Nation, One Election committee report, or get another extension? Any VBSA report? Any fresh Bill on women\'s reservation or delimitation?' },
      { when: 'By December 2026', what: 'Final Labour Code rules. Next phase of SIR and any published deletion numbers. Any new Supreme Court order on UGC regulations.' },
      { when: 'January-February 2027', what: 'Exact Census Phase II dates in your State. CSE 2027 notice. Scheme allocations in the Union Budget 2027-28.' },
      { when: 'February 2027', what: 'Census enumeration in the field. Any new VB-G RAM G data on person-days. DPDP phase-in date check.' },
    ] },
    { t: 'p', text: '**Also check, which I did not verify:** the Joint Committee on the 130th Amendment Bill, and any issue your monthly compilation carries that is missing here. Add only what you can link to a syllabus line.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '**GS2:** federalism in delimitation; costs and benefits of simultaneous polls; ECI powers versus voter rights; rights-based welfare after the MGNREGA change. **GS1:** caste data and social change. **Essay:** counting people and governing them. Use a recent fact in the introduction, the static provision in the body, and a balanced way forward.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Census 2027: Phase II in February 2027; reference date 1 March 2027.',
      '131st Amendment Bill: defeated 17 April 2026, 298 to 230.',
      'SIR upheld 27 May 2026; it does not decide citizenship.',
      'VB-G RAM G: in force 1 July 2026; 125 days.',
      'Labour Codes in force 21 November 2025.',
      'DPDP Rules: November 2025, with an 18-month phase-in.',
      'NFHS-6: released May 2026, fieldwork 2023-24.',
      'Everything here is as of 1 November 2026. Update it.',
    ] },
  ],
  sources: [
    { label: 'UPSC syllabus file, Paper I (checked in your folder)' },
    { label: 'PIB, Viksit Bharat - G RAM G, 29 September 2026', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/sep/doc_10028_20260929_12582401.pdf' },
    { label: 'All India Radio, tenure of One Nation, One Election committee, 29 July 2026', url: 'https://newsonair.gov.in/lok-sabha-extends-tenure-of-jpc-on-one-nation-one-election/' },
    { label: 'PRS, The Delimitation Bill, 2026', url: 'https://prsindia.org/billtrack/the-delimitation-bill-2026' },
    { label: 'PIB, Census 2027: First Digital Enumeration, 25 April 2026 (seen as search excerpt; PIB blocked direct opening)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2255461&reg=48&lang=2' },
    { label: 'PIB, SIR being conducted in phases, 25 July 2026 (search excerpt)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2289473&reg=48&lang=2' },
    { label: 'PIB, commencement of VB-G RAM G, May 2026 (search excerpt)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259703&reg=3&lang=1' },
    { label: 'PIB, Provisions for workers in Labour Codes, 5 February 2026 (search excerpt)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2223852&reg=3&lang=1' },
    { label: 'Labour Ministry FAQs on Labour Codes, 16 March 2026 (search excerpt)', url: 'https://www.labour.gov.in/static/uploads/2026/03/a4ccf4c6d97c4f1f36a6d83f8c64213d.pdf' },
    { label: 'PIB, DPDP Rules notified, November 2025 (search excerpt)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&reg=3&lang=2' },
    { label: 'PIB, NFHS release, May 2026 (search excerpt)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2266600&reg=3&lang=1' },
    { label: 'LiveLaw, Lok Sabha rejects 131st Amendment Bill, April 2026 (search excerpt)', url: 'https://www.livelaw.in/amp/top-stories/lok-sabha-rejects-constitution-131st-bill-2026-on-delimitation-530736' },
    { label: 'All India Radio, Supreme Court stays UGC equity regulations, 29 January 2026 (search excerpt)', url: 'https://www.newsonair.gov.in/supreme-court-stays-ugcs-new-equity-regulations' },
    { label: 'All India Radio, Supreme Court upholds SIR, 27 May 2026 (search excerpt)', url: 'https://newsonair.gov.in/supreme-court-upholds-legality-of-ecis-special-intensive-revision-of-electoral-rolls/' },
    { label: 'The Wire, JPC meet on higher education Bill deferred, July 2026 (search excerpt, press only)', url: 'https://thewire.in/politics/jpc-meet-to-adopt-draft-report-on-higher-education-bill-deferred' },
    { label: 'Business Standard, caste count and 40 questions, 14 August 2026 (search excerpt, press only)', url: 'https://www.business-standard.com/india-news/caste-count-returns-to-census-after-1931-as-centre-notifies-40-questions-126081401765_1.html' },
  ],
  beyond: {
    refer: [
      { what: 'PRS Bill Track', where: 'PRS Legislative Research', why: 'Fastest check of whether a Bill is pending, passed or lapsed. Use it for every Bill card.', url: 'https://prsindia.org/billtrack' },
      { what: 'Census 2027 notifications', where: 'Office of the Registrar General', why: 'Exact Phase II dates and questions, which change by State.', url: 'https://censusindia.gov.in/' },
      { what: 'One monthly compilation', where: 'Your choice, per your plan', why: 'Only for coverage after 1 November 2026, which this note cannot have.' },
    ],
    current: [
      { issue: 'Census 2027', link: 'Population enumeration falls in February 2027, as of PIB in April 2026.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2255461&reg=48&lang=2' },
      { issue: 'One Nation, One Election', link: 'Committee report moved to Winter Session 2026, as of July 2026.', source: 'All India Radio', url: 'https://newsonair.gov.in/lok-sabha-extends-tenure-of-jpc-on-one-nation-one-election/' },
      { issue: 'VB-G RAM G', link: 'In force since 1 July 2026; status note of September 2026.', source: 'PIB', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/sep/doc_10028_20260929_12582401.pdf' },
      { issue: 'Delimitation Bill 2026', link: 'Bill stopped after the amendment was defeated, April 2026.', source: 'PRS', url: 'https://prsindia.org/billtrack/the-delimitation-bill-2026' },
    ],
  },
}
