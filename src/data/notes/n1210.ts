import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-10',
  summary: 'How India manages disasters: the cycle, the DM Act 2005 and its 2025 amendment, who does what, how relief is funded, and the Sendai Framework.',
  minutes: 21,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'A **hazard** is a possible threat, like an earthquake. A **disaster** happens when that hazard meets exposed and vulnerable people who cannot cope. So a strong earthquake in an empty desert is a hazard, but not a disaster. India\'s approach changed from **relief after the event** to **reducing risk before it**. The turning points were the Odisha super cyclone (1999), the Gujarat earthquake (2001) and the Indian Ocean tsunami (2004).' },
    { t: 'p', text: '**Risk = hazard x exposure x vulnerability**, reduced by capacity. This is the core idea of modern disaster policy, and GS III has it as a named topic.' },
    { t: 'table', caption: 'Commonly cited national exposure figures from NDMA documents. Use them as approximate.', head: ['Hazard', 'Exposure'], rows: [
      ['Earthquake', 'About 59% of land area in moderate to very high risk'],
      ['Flood', 'About 40 million hectares, or 12% of land'],
      ['Cyclone and tsunami', 'About 5,700 km of the coast as then measured'],
      ['Drought', 'About 68% of cultivable land'],
      ['Landslide', 'Hill regions, Himalaya and Western Ghats'],
    ] },

    { t: 'h', text: 'The disaster management cycle' },
    { t: 'flow', caption: 'The cycle moves from before to during and after. The 2005 Act covers all these stages, not only relief.', steps: [
      { title: 'Prevention and mitigation', sub: 'Reduce risk: building codes, embankments, zoning' },
      { title: 'Preparedness', sub: 'Plans, warnings, drills, stockpiles' },
      { title: 'Response', sub: 'Search and rescue, shelter, medical care' },
      { title: 'Recovery', sub: 'Services and livelihoods return' },
      { title: 'Reconstruction', sub: 'Build Back Better; feeds new mitigation' },
    ] },
    { t: 'compare', columns: [
      { title: 'Structural mitigation', items: ['Physical works', 'Cyclone shelters, embankments, retrofitting', 'Costly but durable'] },
      { title: 'Non-structural mitigation', items: ['Laws, plans, insurance', 'Land-use zoning, building codes, training', 'Cheaper, but needs enforcement'] },
    ] },

    { t: 'h', text: 'India\'s law and institutions' },
    { t: 'timeline', caption: 'How the system was built.', items: [
      { when: '1999', what: '**High Powered Committee** under **J.C. Pant** on disaster plans.' },
      { when: '2001-04', what: 'Gujarat quake and tsunami push the case for a law.' },
      { when: '2005', what: '**Disaster Management Act, 2005** passed. Second ARC\'s Third Report (2006) is on Crisis Management.' },
      { when: '2009', what: '**National Policy on Disaster Management.**' },
      { when: '2016', what: 'First **National Disaster Management Plan**, aligned with Sendai; revised 2019.' },
      { when: '2016', what: 'PM\'s **10-point agenda** at the Asian Ministerial Conference on Disaster Risk Reduction, New Delhi.' },
      { when: '2019', what: 'India launches the **Coalition for Disaster Resilient Infrastructure (CDRI)**, at the UN Climate Action Summit.' },
      { when: 'March 2025', what: '**Disaster Management (Amendment) Act, 2025** (Act 10 of 2025).' },
      { when: 'Nov 2025 report, 2026-31', what: 'Sixteenth Finance Commission changes how disaster funds are shared.' },
    ] },
    { t: 'strata', caption: 'Three-tier structure under the 2005 Act, with NDRF and NIDM as specialised bodies.', layers: [
      { title: 'National', sub: '**NDMA** chaired by the Prime Minister (Section 3). **National Executive Committee** under the Union Home Secretary (Section 8).' },
      { title: 'State', sub: '**SDMA** chaired by the Chief Minister (Section 14). State Executive Committee under the Chief Secretary.' },
      { title: 'District', sub: '**DDMA** chaired by the Collector or DM (Section 25). Elected local representative is co-chair; in Sixth Schedule areas, the Chief Executive Member of the District Council.' },
      { title: 'Urban (from 2025)', sub: '**Urban Disaster Management Authority** may be set up by states for capitals and municipal corporation cities. Chaired by the Municipal Commissioner.' },
    ] },
    { t: 'table', head: ['Body', 'Key fact'], rows: [
      ['**National Crisis Management Committee**', 'Under the **Cabinet Secretary**. Statutory since 2025; nodal for major disasters'],
      ['**High Level Committee**', 'Statutory since 2025. Approves central assistance to states; chaired by the minister in charge of disaster management'],
      ['**NDRF (force)**', 'Section 44. Specialist response force drawn from central armed police. Raised in 2006'],
      ['**NIDM**', 'Section 42. Training and research'],
      ['**Armed forces**', 'Called in support, when civil capacity is exceeded'],
      ['**Aapda Mitra**', 'Community volunteers trained for first response'],
    ] },
    { t: 'table', caption: 'What the 2025 amendment changed.', head: ['Topic', 'Before', 'After'], rows: [
      ['Plans', 'Executive Committees prepared; NDMA and SDMA approved', '**NDMA and SDMA prepare** them'],
      ['Committees', 'NCMC and HLC not in the Act', 'Given **statutory** status'],
      ['Urban disasters', 'No separate authority', '**Urban authorities** allowed'],
      ['State force', 'States set them up administratively', 'Clear power for states to form a **State Disaster Response Force**'],
      ['Data', 'No statutory database', 'National and state **disaster databases**'],
      ['NDMA role', 'General', 'Periodic risk assessment, post-disaster audit, minimum relief standards, regulations and staffing with central approval'],
    ] },
    { t: 'compare', caption: 'The debate over the amendment.', columns: [
      { title: 'Government view', items: ['Clearer legal roles', 'Attention to city floods and climate risks', 'Better data and audits', 'Says it does not centralise power'] },
      { title: 'Critics', items: ['Adds to top-down control, with central approval for NDMA regulations', 'New urban bodies with no clear funding or staff', 'Weak community and panchayat voice', 'Calls for more focus on climate mitigation'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Common confusions', text: '**NDRF has two meanings:** National Disaster Response **Force** (Section 44) and National Disaster Response **Fund** (Section 46). So does **SDRF**: force and fund. "Disaster management" is **not** an entry in the Seventh Schedule; the Act is linked to Concurrent List Entry 23 (social security and social insurance). Also, the Act has **no** legal category of "national calamity". NDMA is headed by the **PM** and NEC by the **Home Secretary**, while NCMC is headed by the **Cabinet Secretary**.' },
    { t: 'h3', text: 'Who leads which disaster' },
    { t: 'table', head: ['Disaster', 'Nodal ministry'], rows: [
      ['Earthquake, flood, cyclone, tsunami, landslide', 'Home Affairs for national coordination; technical agencies such as IMD, CWC, GSI and INCOIS support it'],
      ['Drought, hailstorm, pest attack', 'Agriculture and Farmers Welfare'],
      ['Biological and public health emergency', 'Health and Family Welfare'],
      ['Chemical and industrial', 'Environment, Forest and Climate Change'],
      ['Nuclear and radiological', 'Atomic Energy'],
      ['Air and rail accidents', 'Civil Aviation; Railways'],
    ] },

    { t: 'h', text: 'Money: how relief is funded' },
    { t: 'p', text: 'The Finance Commission decides the size of national and state funds. The state fund is the first line of response. The national fund is used for severe disasters, following a central team\'s assessment. Assistance is for **relief**, not full compensation, under norms set by the Home Ministry.' },
    { t: 'table', caption: 'Sixteenth Finance Commission (2026-27 to 2030-31) as summarised by an RGICS analysis; the source has some minor inconsistencies. Confirm exact numbers in the report itself.', head: ['Item', '15th FC (2021-26)', '16th FC (2026-31)'], rows: [
      ['State funds (SDRF + SDMF)', 'About Rs 1.60 lakh crore', '**Rs 2,04,401 crore** (80% response, 20% mitigation)'],
      ['National funds (NDRF + NDMF)', 'Rs 68,463 crore', '**Rs 79,406 crore**'],
      ['Centre-state share', '75:25; 90:10 for NE and Himalayan states', 'Same'],
      ['Allocation basis', 'Past spending and a risk index', '**Disaster Risk Index 30%, past spending 70%**; index now covers ten hazards including heatwave and lightning'],
    ] },
    { t: 'list', items: [
      '**Notified disasters:** 12 hazards are centrally notified: cyclone, drought, earthquake, fire, flood, tsunami, hailstorm, landslide, avalanche, cloudburst, pest attack, and frost and cold wave. States may also use part of their fund for **local** disasters they name.',
      '**Heatwave and lightning:** They have not been centrally notified, and several states have treated them as state-level disasters. The debate continues.',
      '**Case law:** Swaraj Abhiyan (2016) on drought duties, and Gaurav Kumar Bansal (2021) on ex gratia for Covid deaths under the Act.',
    ] },

    { t: 'h', text: 'The Sendai Framework' },
    { t: 'p', text: 'Adopted at the **Third UN World Conference on Disaster Risk Reduction** in **Sendai, Japan**, in March 2015, it runs from **2015 to 2030**. It is a voluntary and **non-binding** framework, with national governments primarily responsible. Its follow-up body is the **UN Office for Disaster Risk Reduction (UNDRR)**. It moves from **managing disasters** to **managing risk**, and covers natural and man-made hazards, including biological ones.' },
    { t: 'timeline', caption: 'Global path to Sendai.', items: [
      { when: '1990s', what: 'International Decade for Natural Disaster Reduction.' },
      { when: '1994', what: '**Yokohama** Strategy.' },
      { when: '2005-2015', what: '**Hyogo** Framework for Action.' },
      { when: '2015-2030', what: '**Sendai** Framework. A mid-term review was completed in 2023.' },
    ] },
    { t: 'compare', caption: 'Four priorities and seven global targets. Four targets aim to reduce, three to increase.', columns: [
      { title: 'Four priorities', items: ['1. Understanding disaster risk', '2. Strengthening disaster risk governance', '3. Investing in risk reduction for resilience', '4. Enhancing preparedness and "Build Back Better"'] },
      { title: 'Reduce', items: ['Mortality', 'Number of people affected', 'Direct economic loss in relation to GDP', 'Damage to critical infrastructure and basic services'] },
      { title: 'Increase', items: ['Countries with national and local strategies', 'International cooperation with developing countries', 'Access to multi-hazard early warning and risk information'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Sendai, not Paris', text: 'Sendai covers **disaster risk**, not emission cuts. It is not a treaty with penalties. It follows **Hyogo**, not Kyoto. It has **7 targets and 4 priorities**; do not reverse them.' },
    { t: 'h3', text: 'India\'s international role' },
    { t: 'list', items: [
      '**CDRI:** A partnership of countries and organisations for resilient infrastructure, with its secretariat in New Delhi.',
      '**HADR:** India sends relief abroad, including through NDRF. Operation Maitri (Nepal, 2015) and Operation Brahma (Myanmar, 2025) are examples.',
      '**Early warning:** IMD, INCOIS, CWC and the Common Alerting Protocol (SACHET).',
    ] },
    { t: 'note', kind: 'recent', title: 'Current links', text: 'The 2025 amendment and the Sixteenth Finance Commission\'s ten-hazard index are the main recent changes. Both put emphasis on data, risk and mitigation. A useful state example is **Odisha**, whose OSDMA (set up after 1999) cut cyclone deaths sharply over later storms.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Assess India\'s shift from relief to risk reduction. Review the working of the Act: weak DDMAs, vacancies, low mitigation spending, poor enforcement of building codes. Discuss whether the 2025 amendment centralises or strengthens. Show alignment with Sendai priorities. Cite the 2nd ARC report, the Odisha example and CDRI. End with community-based preparedness and climate links.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'NDMA PM, NEC Home Secretary, NCMC Cabinet Secretary, DDMA Collector.',
      'Section 44 force, Section 46 fund, Section 42 NIDM.',
      'Sendai: March 2015, 2015-2030, 4 priorities, 7 targets.',
      'Yokohama 1994, Hyogo 2005, Sendai 2015.',
      '16th FC: Rs 2,04,401 crore state funds, 80:20 response to mitigation.',
      'Amendment Act 2025: NCMC and HLC statutory; urban authorities; State Force; databases.',
    ] },
  ],
  sources: [
    { label: 'PRS Legislative Research, Disaster Management (Amendment) Bill, 2024', url: 'https://prsindia.org/billtrack/the-disaster-management-amendment-bill-2024' },
    { label: 'RGICS, analysis of the Sixteenth Finance Commission on disaster finance', url: 'https://www.rgics.org/environment/indias-public-finance-for-disaster-management-hits-and-misses-of-the-sixteenth-finance-commission/' },
    { label: 'For further reading: UNDRR, Sendai Framework for Disaster Risk Reduction 2015-2030', url: 'https://www.undrr.org/implementing-sendai-framework/what-sendai-framework' },
  ],
  beyond: {
    refer: [
      { what: 'Sixteenth Finance Commission report, volume on disaster risk', where: 'Union Budget website', why: 'Exact state-wise and fund-wise figures.', url: 'https://www.indiabudget.gov.in/doc/16fcvol2.pdf' },
      { what: 'National Disaster Management Plan', where: 'NDMA', why: 'Detailed responsibility matrix by hazard.', url: 'https://ndma.gov.in/' },
    ],
    current: [
      { issue: 'DM (Amendment) Act 2025', link: 'Passed in March 2025: urban authorities, statutory NCMC and HLC, disaster databases.', source: 'PRS', url: 'https://prsindia.org/billtrack/the-disaster-management-amendment-bill-2024' },
      { issue: 'Sixteenth Finance Commission', link: 'From April 2026: more money for states and a new risk index with ten hazards.', source: 'RGICS', url: 'https://www.rgics.org/environment/indias-public-finance-for-disaster-management-hits-and-misses-of-the-sixteenth-finance-commission/' },
    ],
  },
}
