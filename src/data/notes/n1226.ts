import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-26',
  summary: 'A first map of Science and Technology: India\'s S&T institutions, then the basics of space, defence, biotech, nanotech and AI. The notes of 4, 5 and 6 February go deeper.',
  minutes: 20,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The GS III syllabus asks for awareness of IT, space, computers, robotics, nanotechnology, biotechnology and intellectual property rights, along with indigenisation and the role of science in everyday life. UPSC does not expect a scientist\'s depth. It expects you to know what a technology does, what India has done with it, and how it affects policy.' },
    { t: 'p', text: 'Use this note to build a frame. The **4 February note** covers space, the **5 February note** covers biotech and health, and the **6 February note** covers AI, quantum, cyber and defence. **Nanotechnology** is covered here, as it does not get a separate note.' },
    { t: 'wheel', caption: 'Five areas that Prelims keeps returning to.', center: 'S&T for UPSC', spokes: ['Space: orbits, rockets, ISRO missions', 'Defence: missiles, aircraft, drones', 'Biotech: genes, vaccines, GM crops', 'Nanotech: materials at 1-100 nm', 'AI and digital: LLMs, blockchain, cyber'] },

    { t: 'h', text: 'Who does what in India' },
    { t: 'table', head: ['Body', 'Role'], rows: [
      ['Department of Science and Technology (DST)', 'Policy and funding for science; runs the National Quantum Mission'],
      ['Department of Biotechnology (DBT)', 'Biotech research and missions, such as Genome India'],
      ['CSIR, under DSIR', 'A network of national research laboratories'],
      ['Department of Atomic Energy', 'Nuclear energy and research'],
      ['Department of Space, ISRO', 'Space programme; both under the Prime Minister'],
      ['IN-SPACe', 'Promotes and authorises private space activity'],
      ['DRDO', 'Defence research, under the Ministry of Defence'],
      ['Ministry of Earth Sciences', 'Weather, ocean and the Deep Ocean Mission'],
      ['MeitY', 'IT, AI and semiconductors'],
      ['Anusandhan National Research Foundation', 'Set up by a 2023 Act to fund and steer research'],
    ] },
    { t: 'timeline', caption: 'Missions and policies worth knowing.', items: [
      { when: '2007', what: '**Nano Mission** launched.' },
      { when: '2021', what: '**India Semiconductor Mission.**' },
      { when: '2023', what: '**National Quantum Mission**, **Indian Space Policy** and **Chandrayaan-3** landing (23 August).' },
      { when: '2024', what: '**IndiaAI Mission** and **BioE3 Policy.**' },
      { when: '2025', what: '**Genome India** data on 10,000 genomes; **Mission Sudarshan Chakra** announced; NISAR launched.' },
      { when: '2026', what: '**AI Impact Summit** in New Delhi (February), **national HPV vaccination programme** (February), **EOS-05** and **NVS-03** launched (September-October).' },
    ] },

    { t: 'h', text: 'Space in brief' },
    { t: 'compare', caption: 'Details follow on 4 February.', columns: [
      { title: 'Rockets', items: ['**PSLV:** four stages, low and polar orbits', '**GSLV:** cryogenic upper stage, transfer orbit', '**LVM3:** India\'s heaviest; human-rated version for Gaganyaan', '**SSLV:** small satellites'] },
      { title: 'Status, November 2026', items: ['**Chandrayaan-3** succeeded in 2023; **Aditya-L1** observes the Sun from L1', '**PSLV** failed in May 2025 and January 2026', '**Gaganyaan G1** uncrewed flight has not yet flown; ISRO\'s chief said in October 2026 that it was about two months away', '**NavIC** being rebuilt with NVS satellites'] },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims link', text: 'Prelims 2018 tested PSLV and GSLV roles and IRNSS. Prelims 2025 asked about microgravity research in Axiom-4, SpaDeX and Gaganyaan. Prelims 2026 tested IN-SPACe, Agnikul and Skyroot.' },

    { t: 'h', text: 'Defence in brief' },
    { t: 'list', items: [
      '**Ballistic missiles** are boosted by rockets and then follow an arc (Agni). **Cruise missiles** are jet-powered and fly low (BrahMos). Prelims 2023 swapped these.',
      '**DRDO** leads development. The missile programme began in 1983 under A.P.J. Abdul Kalam.',
      '**Self-reliance:** indigenisation lists, the iDEX start-up scheme and defence corridors.',
      '**New focus:** drones, air defence and Mission Sudarshan Chakra, which Prelims 2026 tested.',
    ] },

    { t: 'h', text: 'Biotech in brief' },
    { t: 'flow', caption: 'Three ideas, in the order you should learn them. Details follow on 5 February.', steps: [
      { title: 'Genes', sub: 'DNA to RNA to protein' },
      { title: 'Tools', sub: 'CRISPR-Cas9, RNAi, gene therapy' },
      { title: 'Uses', sub: 'Vaccines, GM and gene-edited crops, medicines' },
      { title: 'Rules', sub: 'GEAC, biosafety, ethics' },
    ] },
    { t: 'note', kind: 'trap', title: 'A frequent mix-up', text: 'A **GM crop** carries foreign genes and needs GEAC approval. A **gene-edited crop** of the SDN-1 or SDN-2 type has changes to its own genes and has been exempt from those GM rules since 2022. Similarly, **Covishield** is a viral-vector vaccine rather than an mRNA vaccine, as Prelims 2022 tested.' },

    { t: 'h', text: 'Nanotechnology' },
    { t: 'p', text: 'Nanotechnology works with matter at about **1-100 nanometres**. One nanometre is a billionth of a metre. At this scale, a material behaves differently because its **surface area is very large for its volume**, and quantum effects start to appear. So gold can change colour, and carbon can become extremely strong.' },
    { t: 'table', head: ['Material or use', 'What it does', 'India or exam link'], rows: [
      ['Carbon nanotubes', 'Rolled graphene: very strong and conductive. Possible carriers of drugs and sensors', 'Prelims 2020 tested their use as carriers of drugs and antigens, artificial capillaries and biosensors, and whether they are biodegradable'],
      ['Graphene', 'One-atom-thick sheet of carbon; strong and conductive', 'Electronics and filters'],
      ['Metal oxide nanoparticles', 'Zinc oxide and titanium dioxide block UV', 'Prelims 2022: used in cosmetics'],
      ['Nano-medicine', 'Lipid nanoparticles deliver drugs and mRNA', 'Prelims 2026: carriers for genetic medicine'],
      ['Nano fertiliser', 'Small particles, with claims of better uptake', 'IFFCO nano urea; field results are debated'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2022', text: 'UPSC tested three claims: nanoparticles do not exist in nature except when made by humans (false: volcanoes, fire and sea spray make them), some metal oxide nanoparticles are used in cosmetics (true), and nanoparticles of some commercial products that enter the environment are unsafe for humans (true).' },
    { t: 'compare', caption: 'Benefits and risks, useful for GS III.', columns: [
      { title: 'Benefits', items: ['Targeted cancer drugs', 'Water purification', 'Better batteries and solar cells', 'Lighter and stronger materials'] },
      { title: 'Risks', items: ['Particles may reach lungs and the bloodstream', 'Unknown long-term ecological effects', 'Standards and labelling lag behind', 'Worker safety in factories'] },
    ] },

    { t: 'h', text: 'AI and digital in brief' },
    { t: 'p', text: '**AI** is the wide field, **machine learning** learns from data, and **deep learning** uses many-layered networks. **Large language models** predict the next word from probabilities, and can be wrong or biased. Prelims 2026 tested them. Learn **blockchain** as a shared ledger, and **qubits** as the units of quantum computing. Details follow on 6 February.' },

    { t: 'h', text: 'Intellectual property rights' },
    { t: 'table', caption: 'IPR is named in the syllabus, and pharma is India\'s main case.', head: ['Point', 'Detail'], rows: [
      ['Patent', 'Protects an invention, generally for 20 years, under the Patents Act, 1970'],
      ['Section 3(d)', 'Bars patents on new forms of known drugs unless they show better efficacy. Upheld in **Novartis (2013)**'],
      ['Compulsory licence', 'Lets others make a patented product for public need. **Natco (2012)** is India\'s first case'],
      ['TRIPS', 'WTO agreement that sets minimum IPR standards'],
      ['Geographical Indication', 'Links a product to a place, such as Darjeeling tea'],
      ['Traditional Knowledge Digital Library', 'Prevents wrongful patents on Indian traditional knowledge'],
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Good GS III frames: **indigenisation** and import dependence; **dual-use** technology; **ethics** of gene editing and AI; **R&D funding**, where critics say Indian private investment is low, while the government points to ANRF and new missions. Always use one Indian example. Conclude with what the state should do: fund, regulate, or get out of the way.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Nanoscale: 1-100 nm. Surface area drives new properties.',
      'PSLV: four stages. LVM3: India\'s heaviest rocket.',
      'Ballistic: arc. Cruise: low and jet-powered.',
      'GM needs GEAC. SDN-1 and SDN-2 gene edits exempted, 2022.',
      'Section 3(d): Novartis. Compulsory licence: Natco.',
      'Next: 4 February for space, 5 February for biotech, 6 February for AI and defence.',
    ] },
  ],
  sources: [
    { label: 'UPSC CSE syllabus (candidate\'s copy)' },
    { label: 'UPSC Civil Services Prelims 2018, 2020, 2022, 2023, 2025, 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'ISRO, launch missions list', url: 'https://www.isro.gov.in/LaunchMissions.html' },
    { label: 'ISRO, GSLV-F18/NVS-03 mission page', url: 'https://www.isro.gov.in/Mission_GSLVF18.html' },
    { label: 'UNI, Gaganyaan test flight in two months, says ISRO chief (24 October 2026)', url: 'https://www.uniindia.com/south-india/space-gaganyaan-test-flight-isro-chief/224116' },
    { label: 'PIB, Cervical Cancer Vaccination Campaign Launched (February 2026)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc2026228807201.pdf' },
    { label: 'PIB, AI Impact Summit 2026 Concludes with Adoption of New Delhi Declaration', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2231208&reg=3&lang=2' },
  ],
  beyond: {
    refer: [
      { what: 'Patents Act, 1970, Section 3(d)', where: 'India Code', why: 'Exact wording for a Mains answer on drug patents.', url: 'https://www.indiacode.nic.in/' },
    ],
    current: [
      { issue: 'NavIC', link: 'NVS-03 reached its intended orbit in October 2026.', source: 'ISRO', url: 'https://www.isro.gov.in/Mission_GSLVF18.html' },
      { issue: 'AI Impact Summit', link: 'Held in New Delhi in February 2026. It produced the New Delhi Declaration.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2231208&reg=3&lang=2' },
    ],
  },
}
