import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-27',
  summary: 'A first map of Environment: core ideas, India\'s laws and institutions, protected areas and global conventions. The notes of 29 and 30 January go deeper.',
  minutes: 20,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Environment sits in **GS Paper III** in Mains, but it matters most in Prelims. Questions come from it every year in the official papers checked (2016, 2018-2026). They range from basic ecology to very recent facts, such as a new tiger reserve. Prelims 2026 tested Madhav National Park, which became a tiger reserve only in 2025.' },
    { t: 'p', text: 'This note gives you the structure. Then the **29 January note** covers ecosystems, food chains, biomes and succession, while the **30 January note** covers species, conventions, pollution and climate change in full.' },
    { t: 'flow', caption: 'A simple way to organise the whole subject.', steps: [
      { title: 'Ecology', sub: 'How nature works' },
      { title: 'Biodiversity', sub: 'What we stand to lose' },
      { title: 'Threats', sub: 'Habitat loss, pollution, climate change' },
      { title: 'Indian response', sub: 'Laws, institutions, protected areas' },
      { title: 'Global response', sub: 'Conventions and COPs' },
    ] },

    { t: 'h', text: 'Ecology in one page' },
    { t: 'list', items: [
      '**Ecosystem:** living organisms plus their physical environment, exchanging energy and matter.',
      '**Energy** flows one way, and only about 10% passes up each trophic level. **Nutrients** cycle.',
      '**Food chain and food web:** producers, consumers and decomposers. Webs are more stable than single chains.',
      '**Succession:** gradual change in communities towards a stable climax.',
      '**Biome:** a large zone defined by climate, such as tundra, taiga, savanna or tropical rainforest.',
      '**Species roles:** keystone, umbrella, flagship, indicator. Do not treat these as the same thing.',
    ] },

    { t: 'h', text: 'From Stockholm to the present' },
    { t: 'timeline', caption: 'Global environmental diplomacy and its Indian echo.', items: [
      { when: '1972', what: '**Stockholm Conference.** UNEP created; 5 June became World Environment Day. India passes the **Wild Life (Protection) Act**.' },
      { when: '1976', what: '**42nd Amendment:** Article 48A and Article 51A(g) added. Forests and wildlife moved to the Concurrent List.' },
      { when: '1984-86', what: 'The Bhopal gas tragedy leads to the **Environment (Protection) Act, 1986**.' },
      { when: '1987', what: '**Brundtland Report** defines sustainable development. Montreal Protocol on ozone.' },
      { when: '1992', what: '**Rio Earth Summit:** UNFCCC and CBD opened for signature; Agenda 21; UNCCD followed from it in 1994.' },
      { when: '2015', what: '**Paris Agreement** and the Sustainable Development Goals.' },
      { when: '2022', what: 'Kunming-Montreal Global Biodiversity Framework. India amends the Wild Life Act.' },
      { when: '2026', what: 'BBNJ High Seas Agreement enters into force (January). India submits its 2031-35 NDC (April). COP31 in Antalya (November).' },
    ] },

    { t: 'h', text: 'India\'s legal base' },
    { t: 'table', head: ['Law', 'Year', 'Why it matters'], rows: [
      ['Wild Life (Protection) Act', '1972', 'Protected areas and schedules. 2006 change set up NTCA and the Wildlife Crime Control Bureau. 2022 change cut schedules to four'],
      ['Water Act', '1974', 'Created pollution control boards, including the CPCB'],
      ['Forest (Conservation) Act', '1980', 'Central approval needed to divert forest land. Amended in 2023 and renamed the Van (Sanrakshan Evam Samvardhan) Adhiniyam'],
      ['Air Act', '1981', 'Air pollution control'],
      ['Environment (Protection) Act', '1986', 'Umbrella law, base for EIA, coastal, waste and wetland rules'],
      ['Biological Diversity Act', '2002', 'NBA, State Boards, Biodiversity Management Committees; amended 2023'],
      ['Forest Rights Act', '2006', 'Individual and community rights; Ministry of Tribal Affairs is the nodal ministry'],
      ['National Green Tribunal Act', '2010', 'Specialised environmental tribunal'],
    ] },
    { t: 'note', kind: 'exam', title: 'Past Prelims on these laws', text: '**2019:** under the Forest Rights Act, bamboo is a minor forest produce. **2020:** the Central Ground Water Authority was formed under the Environment (Protection) Act. **2021:** the Ministry of Tribal Affairs is the nodal ministry for the Forest Rights Act. **2019** also asked how far the Ramsar Convention binds India on its wetlands. It does not require India to protect every wetland.' },
    { t: 'note', kind: 'trap', title: 'NGT limits', text: 'The NGT\'s Schedule I lists seven Acts, including the Water, Air, Environment (Protection), Forest (Conservation) and Biological Diversity Acts. The **Wild Life (Protection) Act and the Forest Rights Act are not on it**. This is a favourite way of testing the tribunal.' },
    { t: 'table', caption: 'Who does what.', head: ['Body', 'Role'], rows: [
      ['MoEFCC', 'Nodal ministry for environment, forests and climate policy'],
      ['CPCB', 'Statutory pollution body under the Water Act; sets standards; runs monitoring'],
      ['NTCA', 'Statutory tiger authority; chaired by the Environment Minister'],
      ['National Board for Wildlife', 'Chaired by the Prime Minister; advises on wildlife and clearance matters in protected areas'],
      ['National Biodiversity Authority', 'Based in Chennai; regulates access to biological resources'],
      ['Forest Survey of India', 'Publishes the biennial India State of Forest Report'],
      ['GEAC', 'Under MoEFCC; appraises genetically engineered organisms'],
    ] },
    { t: 'p', text: '**Courts have shaped this field.** In **T.N. Godavarman** (from 1996), the Supreme Court read "forest" broadly. **Vellore Citizens** (1996) accepted the precautionary and polluter-pays principles. **M.K. Ranjitsinh** (2024), a Great Indian Bustard case, recognised a right against the adverse effects of climate change.' },

    { t: 'h', text: 'Protected areas: first look' },
    { t: 'compare', caption: 'Key counts. Dates matter. Full detail is in the 30 January note.', columns: [
      { title: 'Under the Wild Life Act', items: ['National Parks: 106', 'Wildlife Sanctuaries: 573', 'Conservation Reserves: 115', 'Community Reserves: 220', 'As of 27 November 2023 (PIB, 2025)'] },
      { title: 'Special networks', items: ['Tiger reserves: **58** (as of July 2026)', 'Ramsar sites: **103** (as of October 2026)', 'Biosphere reserves: **18**, with **13** in UNESCO\'s network (as of November 2025)'] },
    ] },
    { t: 'note', kind: 'trap', title: 'Three different labels', text: 'A **Ramsar site** is a treaty listing. A **UNESCO biosphere reserve** comes from a programme, not a treaty. A **national park** is a legal category under Indian law. One place can hold all three labels at once: for example, Keoladeo is both a Ramsar site and a national park.' },

    { t: 'h', text: 'Global conventions: first look' },
    { t: 'table', caption: 'Learn by subject. The details follow on 30 January.', head: ['Subject', 'Treaties'], rows: [
      ['Climate', 'UNFCCC (1992), Kyoto Protocol (1997), Paris Agreement (2015)'],
      ['Biodiversity', 'CBD (1992), with Cartagena (2000) and Nagoya (2010) protocols; Kunming-Montreal Framework (2022)'],
      ['Species', 'CITES (trade, 1973), CMS (migration, 1979)'],
      ['Habitat', 'Ramsar (wetlands, 1971), UNCCD (land, 1994), BBNJ (high seas, 2023)'],
      ['Atmosphere', 'Vienna (1985), Montreal (1987), Kigali Amendment (2016)'],
      ['Chemicals and waste', 'Basel (1989), Rotterdam (1998), Stockholm (2001), Minamata (2013)'],
    ] },
    { t: 'note', kind: 'recent', title: 'Status check, as of 2 November 2026', text: 'The latest climate talks concluded were **COP30 in Belem** (November 2025). The call to triple adaptation finance by 2035 is the headline. **COP31** meets in **Antalya from 9 to 20 November 2026**, with Turkiye as host and Australia leading negotiations. India\'s new NDC aims for a 47% cut in emissions intensity and 60% non-fossil power capacity by 2035. There is still no plastics treaty.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'GS III asks about environmental conservation, pollution, and impact assessment. Use a simple frame: **problem, law or body, gap, way forward**. Good cases include the EIA process and public hearings, forest diversion and the 2023 amendment, and whether growth and conservation really conflict. Present both sides. Industry and States point to delays, while communities and ecologists point to weak compliance and diluted safeguards.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Article 48A and 51A(g): 42nd Amendment, 1976.',
      'EPA 1986 followed Bhopal. NGT 2010. FRA 2006.',
      'NGT Schedule I excludes the Wild Life Act and the Forest Rights Act.',
      '58 tiger reserves, 103 Ramsar sites, 18 biosphere reserves.',
      'Rio 1992: UNFCCC and CBD.',
      'Next: 29 January for ecology, 30 January for conventions and climate.',
    ] },
  ],
  sources: [
    { label: 'UPSC Civil Services Prelims 2019, 2020, 2021, 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'PIB, Ramsar Sites in India (25 October 2026)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/oct/doc_10255_20261025_09460901.pdf' },
    { label: 'PIB, India Leads the Wilderness in Tiger Conservation (28 July 2026)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc2026728934601.pdf' },
    { label: 'PIB, India\'s Wildlife Conservation Milestones (March 2025)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/mar/doc202533511501.pdf' },
    { label: 'PIB, India\'s Biosphere Reserves (November 2025)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc2025113683301.pdf' },
    { label: 'COP30 Executive Report (March 2026)', url: 'https://unfccc.int/sites/default/files/resource/COP_30_executive_report.pdf' },
    { label: 'India\'s NDC 2031-2035 (UNFCCC)', url: 'https://unfccc.int/sites/default/files/2026-04/INDIA%20NDC%202031-35.pdf' },
    { label: 'Down To Earth, BBNJ treaty enters into force in January 2026', url: 'https://www.downtoearth.org.in/water/bbnj-treaty-receives-60-ratifications-will-enter-into-force-to-protect-marine-life-in-international-waters-in-january-2026' },
    { label: 'ENB, INC-5.3 plastics session', url: 'https://enb.iisd.org/plastic-pollution-marine-environment-negotiating-committee-inc5.3' },
  ],
  beyond: {
    refer: [
      { what: 'India State of Forest Report', where: 'Forest Survey of India', why: 'Latest forest and tree cover data, which change with each report.', url: 'https://fsi.nic.in/' },
      { what: 'Text of the National Green Tribunal Act, 2010', where: 'India Code', why: 'Check Schedule I and the list of Acts.', url: 'https://www.indiacode.nic.in/' },
    ],
    current: [
      { issue: 'COP31', link: 'Antalya, 9-20 November 2026. Outcomes were not available when this note was written.', source: 'UNCCD event listing', url: 'https://www.unccd.int/index.php/events/other/2026-un-climate-change-conference-cop31' },
      { issue: 'Ramsar 103', link: 'Sukhna Wetland and Sauj Jheel were added (October 2026).', source: 'Ramsar Convention', url: 'https://www.ramsar.org/news/india-adds-two-more-wetlands-international-importance-list' },
    ],
  },
}
