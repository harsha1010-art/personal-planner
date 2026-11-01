import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-28',
  summary: 'The UN, IMF, World Bank, WTO, G20, BRICS, SCO and Quad: structure, membership, India\'s stakes, and their latest summits and disputes as of November 2026.',
  minutes: 26,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'GS II asks about "important international institutions, agencies and fora: their structure and mandate". Prelims loves membership, headquarters and who-does-what. Mains asks whether institutions built in 1945 still work.' },
    { t: 'p', text: 'India\'s line is **reformed multilateralism**: bigger roles for the Global South, a seat at the top table, and rules over unilateral action. In 2026 this was under strain: the WTO e-commerce moratorium lapsed, the US excluded South Africa from the G20, and the Quad leaders\' summit India was to host had not been held. India chaired BRICS this year.' },
    { t: 'table', caption: 'Master table. Membership as of November 2026.', head: ['Body', 'Founded', 'Base', 'Members', 'India'], rows: [
      ['United Nations', '1945', 'New York', '193', 'Founding member'],
      ['IMF', '1944 (Bretton Woods)', 'Washington, DC', 'Near-universal', 'Founding member; **quota share about 2.75%**'],
      ['World Bank', '1944 (Bretton Woods)', 'Washington, DC', 'Near-universal', 'Founding member'],
      ['WTO', '1995 (replaced GATT)', 'Geneva', '**166**', 'Founding member'],
      ['G20', '1999; leaders from 2008', 'No secretariat', '19 countries, EU and **African Union**', 'Presidency 2023'],
      ['BRICS', 'First summit 2009', 'No secretariat', '10 or 11: see below', 'Chair 2026'],
      ['SCO', '2001', 'Beijing; RATS in Tashkent', '**10**', 'Full member since 2017'],
      ['Quad', 'Revived 2017', 'No secretariat', '4', 'Member'],
    ] },

    { t: 'h', text: 'United Nations' },
    { t: 'strata', caption: 'Six principal organs under the Charter', layers: [
      { title: 'General Assembly', sub: 'All members, one vote each. Resolutions are generally non-binding. Can grant observer status to non-members' },
      { title: 'Security Council', sub: '5 permanent members with veto, plus 10 elected for two years. Its Chapter VII decisions bind members' },
      { title: 'Economic and Social Council', sub: '54 members; coordinates development work' },
      { title: 'International Court of Justice', sub: 'The Hague; 15 judges; settles disputes between states' },
      { title: 'Secretariat', sub: 'Led by the Secretary-General, appointed by the Assembly on the Council\'s recommendation (Article 97)' },
      { title: 'Trusteeship Council', sub: 'Dormant since 1994, when Palau became independent' },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2022', text: 'UPSC tested the UN **Credentials Committee**, including a claim that the Security Council sets it up. It also tested General Assembly powers, such as granting observer status. Know which organ does what, because this is where the traps lie.' },
    { t: 'compare', caption: 'Security Council reform: the talks run through the Intergovernmental Negotiations (IGN) in the General Assembly', columns: [
      { title: 'Why India deserves a seat', items: ['Largest population', 'A major economy', 'Long record as a peacekeeping contributor', 'Eight past terms, most recently 2021-22', 'Africa and Asia under-represented'] },
      { title: 'Why reform is stuck', items: ['A Charter amendment needs two-thirds of members, **including all P5**', '**G4** (India, Brazil, Germany, Japan) face **Uniting for Consensus** (Pakistan, Italy and others)', 'Africa wants its own seats, with veto (Ezulwini Consensus)', 'China has not endorsed a permanent seat for Japan or India'] },
    ] },
    { t: 'list', items: [
      '**Council in 2026:** Bahrain, Colombia, DR Congo, Latvia, Liberia, Denmark, Greece, Pakistan, Panama, Somalia. Elected in June 2026 for 2027-28: **Austria, Kyrgyzstan, Portugal, Trinidad and Tobago, Zimbabwe**.',
      '**Next Secretary-General:** Guterres\'s term ends on **31 December 2026**. The Council held straw polls from 30 July. A sixth, on 16 October, reportedly gave Rebeca Grynspan of Costa Rica 9 encouraged and 5 discouraged votes. I found no formal recommendation as of mid-October 2026.',
    ] },

    { t: 'h', text: 'IMF and World Bank' },
    { t: 'compare', columns: [
      { title: 'IMF', items: ['Monitors economies, lends for **balance of payments** problems', 'Votes depend on **quota**', '**SDR basket:** dollar, euro, yuan, yen, pound. The yuan joined in 2016', '**World Economic Outlook**, Global Financial Stability Report', '16th quota review (December 2023): 50% rise to SDR 715.7 billion, shares unchanged; still described as "when effective" in its 2026 report'] },
      { title: 'World Bank Group', items: ['Long-term development lending', '**IBRD:** loans to middle-income countries', '**IDA:** soft loans to poorest countries', '**IFC:** private sector; issued rupee Masala Bonds', '**MIGA:** investment guarantees', '**ICSID:** investment disputes; **India is not a member**', 'Ease of Doing Business was discontinued in 2021'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Who publishes what', text: 'Global Competitiveness Report: **World Economic Forum**, not the IMF (a Prelims 2019 trap). The **IMFC** advises the IMF, and the World Bank takes part as an observer (Prelims 2016). **New Development Bank** belongs to BRICS, not APEC (Prelims 2016). **AIIB** is China-led and based in Beijing, and India is a founding member and a large shareholder.' },

    { t: 'h', text: 'World Trade Organization' },
    { t: 'p', text: 'The WTO replaced GATT under the **Marrakesh Agreement**. The **Ministerial Conference** is its top body, and decisions are usually by consensus, so a single member can block. Its core rules are **most-favoured-nation** and **national treatment**.' },
    { t: 'table', head: ['Issue', 'India\'s position', 'Status'], rows: [
      ['Public stockholding of food', 'Wants a permanent solution so MSP procurement does not breach subsidy caps', '**Peace clause** from Bali (2013) gives interim cover'],
      ['Appellate Body', 'Wants the two-tier system back', 'Paralysed since 2019 because the US blocks appointments'],
      ['E-commerce moratorium', 'Duty-free digital transfers cost developing countries revenue', '**Lapsed 30 March 2026**, for the first time since 1998'],
      ['Investment Facilitation', 'Blocked: outside the WTO mandate and multilateral process', 'Backed by about 129 members, not adopted at MC14'],
      ['Fisheries subsidies', 'Wants space for small fishers and action on big fleets', 'First agreement in place; overfishing talks continue'],
    ] },
    { t: 'p', text: '**MC14, Yaoundé (Cameroon), 26-29 March 2026** ended without agreement on main issues. Afterwards, 66 members pushed ahead with a plurilateral e-commerce deal, and a group of members pledged in May not to levy duties among themselves. The WTO chair reported no significant movement at the General Council in October 2026.' },
    { t: 'list', items: [
      '**Agreement on Agriculture boxes:** **Amber** (trade-distorting, capped), **Blue** (amber with limits on production), **Green** (minimal distortion, no cap).',
      '**TRIPS:** intellectual property rules. India\'s Geographical Indications Act of 1999 was enacted to comply with WTO obligations (Prelims 2018).',
    ] },

    { t: 'h', text: 'G20' },
    { t: 'timeline', items: [
      { when: '1999', what: 'Set up for **finance ministers and central bank governors** after the Asian crisis (Prelims 2023).' },
      { when: '2008', what: 'First leaders\' summit, in response to the global financial crisis.' },
      { when: '2020', what: '**Common Framework** for debt treatment, with the Paris Club (Prelims 2022).' },
      { when: 'September 2023', what: 'India\'s presidency: **New Delhi Declaration**, the African Union admitted, digital public infrastructure pushed (Prelims 2023), and **IMEC** announced.' },
      { when: 'November 2025', what: 'Johannesburg: first summit in Africa, and the US stayed away.' },
      { when: 'December 2026', what: 'US presidency. Leaders\' summit planned for **14-15 December at Doral, Miami**. The US has excluded South Africa and invited Poland. South Africa says one member cannot change the group\'s make-up.' },
    ] },
    { t: 'note', kind: 'trap', title: 'G20 details', text: 'The G20 has no permanent secretariat or charter, and its decisions do not bind. The **troika** is the past, current and next presidency. The AU is a member alongside the EU, so "19 countries plus two regional bodies" is the correct count.' },

    { t: 'h', text: 'BRICS' },
    { t: 'list', items: [
      '**Growth:** BRIC from 2009, South Africa from 2010. Egypt, Ethiopia, Iran and the UAE joined in **2024**, and **Indonesia in January 2025**. Saudi Arabia was invited, but has not clearly confirmed joining, so counts vary between 10 and 11.',
      '**Partners (10, as of September 2026):** Belarus, Bolivia, Cuba, Kazakhstan, Malaysia, Nigeria, Thailand, Uganda, Uzbekistan, Vietnam.',
      '**Institutions:** **New Development Bank** (Shanghai; agreed at Fortaleza in 2014) and the **Contingent Reserve Arrangement** ($100 billion).',
      '**18th Summit:** New Delhi, **12-13 September 2026**, with Modi in the chair and Xi and Putin attending. Theme: Building for Resilience, Innovation, Cooperation and Sustainability.',
      '**New Delhi Declaration:** criticises unilateral tariffs, seeks restoration of two-tier WTO dispute settlement, and says UN reform should amplify the Global South. China and Russia repeat support for a greater UN role for Brazil and India. **China chairs in 2027**.',
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2025', text: 'UPSC asked about the 16th BRICS Summit at Kazan under Russia\'s chair, Indonesia\'s full membership, and the summit theme. Summit details can be tested a year or two later, so note the New Delhi summit carefully.' },

    { t: 'h', text: 'SCO and Quad' },
    { t: 'compare', columns: [
      { title: 'SCO', items: ['Began as the Shanghai Five. **Founded 2001**', '**Members (10):** China, Russia, Kazakhstan, Kyrgyzstan, Tajikistan, Uzbekistan, India, Pakistan (both 2017), Iran (2023), Belarus (2024)', '**26th summit: Bishkek, 31 August-1 September 2026**, on the SCO\'s 25th anniversary', 'Modi: no double standards on terrorism', 'Bishkek Declaration and 28 documents, including a Charter protocol and a centre on security threats', 'English added as an official language, per MEA', '**Next chair: Pakistan** (2026-27), which creates a practical problem for India'] },
      { title: 'Quad', items: ['Grew from the **2004 tsunami** response and a 2007 proposal by Japan\'s Abe', 'Revived in 2017; leaders\' summits from 2021', 'Not a military alliance and has no treaty', '**Foreign ministers met in New Delhi on 26 May 2026:** Critical Minerals Framework, energy security initiative worth over $25 million, port work in Fiji', '**Leaders\' summit:** India\'s turn has been pending since 2025. Not held or dated as of the latest reports; India calls it unscheduled, not cancelled, and some reports say Australia may host next', 'Related but different: **Malabar** naval exercise'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Membership confusion', text: 'India is in the **SCO, AIIB and BRICS**, but is **not** in APEC, and the **NSG** remains closed to it. It belongs to the MTCR, Wassenaar Arrangement and Australia Group. Prelims 2022 tested a list of this kind. Pakistan is in the SCO but not in BRICS or the Quad.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '(1) "Reformed multilateralism": why it is needed, and why progress is slow. (2) How India balances the **Quad and SCO or BRICS**. Critics see a contradiction, and supporters see autonomy. (3) WTO: was India right to block the Investment Facilitation deal? **For:** protects policy space and consensus. **Against:** isolation, and plurilateral deals move ahead without India. (4) Is BRICS an anti-West bloc? India rejects de-dollarisation as an aim, and the declaration avoided a common currency. (5) G20 without South Africa: the rule of membership against the power of the host.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'UN 193; WTO 166; SCO 10; Quad 4.',
      'BRICS bank: Shanghai. AIIB: Beijing. SCO RATS: Tashkent.',
      'MC14: Yaoundé, March 2026. Moratorium lapsed.',
      'BRICS 2026 New Delhi; SCO 2026 Bishkek; G20 2026 Miami; next SCO chair Pakistan; next BRICS chair China.',
      'SDR: dollar, euro, yuan, yen, pound.',
      'Article 97: Secretary-General.',
    ] },
  ],
  sources: [
    { label: 'PIB: BRICS New Delhi Declaration', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2309505&reg=3&lang=1' },
    { label: 'BRICS India 2026: 18th BRICS Summit', url: 'https://www.brics2026.gov.in/18th-brics-summit/' },
    { label: 'Wikipedia: 18th BRICS summit (lead only; for partners and attendance)', url: 'https://en.wikipedia.org/wiki/18th_BRICS_summit' },
    { label: 'SCO Secretariat: 26th Meeting of the Council of Heads of State', url: 'https://eng.sectsco.org/20260901/2493609.html' },
    { label: 'Akashvani News: India on SCO outcomes', url: 'https://newsonair.gov.in/india-highlights-cooperation-on-security-tackle-threats-of-terrorism-and-extremism-as-major-sco-outcome/' },
    { label: 'US State Department: Quad Foreign Ministers\' joint statement, May 2026', url: 'https://www.state.gov/releases/office-of-the-spokesperson/2026/05/joint-statement-from-the-quad-foreign-ministers-meeting-in-new-delhi' },
    { label: 'ThePrint: Annual Quad summits unlikely', url: 'https://theprint.in/diplomacy/annual-quad-summits-unlikely-going-forward-india-to-pass-on-baton-to-australia-amid-scheduling-issues/2941060/' },
    { label: 'WTO: E-commerce work programme', url: 'https://www.wto.org/english/tratop_e/ecom_e/ecom_work_programme_e.htm' },
    { label: 'WTO: General Council news, October 2026', url: 'https://www.wto.org/english/news_e/news26_e/gc_05oct26_508_e.htm' },
    { label: 'Third World Network: MC14 chair\'s summary', url: 'https://twn.my/title2/wto.info/2026/ti260401.htm' },
    { label: 'UN: General Assembly elects Security Council members, June 2026', url: 'https://press.un.org/en/2026/ga12762.doc.htm' },
    { label: 'Security Council Report: Second straw poll on Secretary-General candidates', url: 'https://www.securitycouncilreport.org/whatsinblue/2026/08/second-security-council-straw-poll-on-un-secretary-general-candidates.php' },
    { label: 'Political.org: Grynspan and the sixth straw poll, October 2026 (single press report)', url: 'https://political.org/2026/10/16/grynspan-holds-lead-for-next-un-secretary-general-as-race-enters-decisive-stage-but-two-veto-powers-reportedly-oppose-her/' },
    { label: 'IMF 2026 Annual Report: Resources', url: 'https://www.imf.org/annual-report/2026/who-we-are/resources/index.md' },
    { label: 'Wikipedia: 2026 G20 Miami summit (for dates)', url: 'https://en.wikipedia.org/wiki/2026_G20_Miami_summit' },
    { label: 'Tribune: US unveils G20 for 2026, excludes South Africa', url: 'https://www.tribuneindia.com/news/world/us-unveils-new-g20-for-2026-excludes-south-africa-over-politics-of-grievance' },
    { label: 'UPSC Civil Services Prelims 2016, 2018, 2019, 2022, 2023, 2025, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'New Delhi Declaration, full text', where: 'BRICS India 2026 site', why: 'The exact wording on UN reform, tariffs and terrorism.', url: 'https://www.brics2026.gov.in/document/new-delhi-declaration-building-for-resilience-innovation-cooperation-and-sustainability/' },
      { what: 'IMF quota and voting table', where: 'IMF', why: 'Exact and latest shares. The India figure here came from secondary sources.', url: 'https://www.imf.org/en/About/executive-board/members-quotas' },
    ],
    current: [
      { issue: 'Next UN Secretary-General', link: 'The Council had not recommended anyone by mid-October 2026, and the term ends on 31 December. Check who is appointed.', source: 'Security Council Report', url: 'https://www.securitycouncilreport.org/whatsinblue/2026/08/second-security-council-straw-poll-on-un-secretary-general-candidates.php' },
      { issue: 'G20 Miami summit', link: 'Planned for 14-15 December 2026, without South Africa. Note India\'s stance and the outcome.', source: 'Tribune', url: 'https://www.tribuneindia.com/news/world/us-unveils-new-g20-for-2026-excludes-south-africa-over-politics-of-grievance' },
      { issue: 'WTO after MC14', link: 'No significant progress at the General Council in October 2026 on the moratorium or reform.', source: 'WTO', url: 'https://www.wto.org/english/news_e/news26_e/gc_05oct26_508_e.htm' },
      { issue: 'SCO under Pakistan\'s chair', link: 'Pakistan chairs for 2026-27 after the Bishkek summit (September 2026). Watch India\'s level of participation.', source: 'SCO Secretariat', url: 'https://eng.sectsco.org/20260901/2493609.html' },
    ],
  },
}
