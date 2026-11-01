import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-02-06',
  summary: 'AI and large language models, quantum technology, blockchain, cyber security, missiles and aircraft, and India\'s missions in each. Prelims 2026 tested almost all of these.',
  minutes: 26,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'These fields decide economic strength and national security. UPSC now asks about them directly: Prelims 2026 had questions on large language models, the National Quantum Mission, blockchain, stealth, drone swarms, Mission Sudarshan Chakra and the AI Impact Summit. Most questions test whether you understand how the technology works, along with one or two current facts.' },

    { t: 'h', text: 'Artificial intelligence' },
    { t: 'strata', caption: 'Each layer is a subset of the one above. Prelims 2025 tested that deep learning is a subset of machine learning.', layers: [
      { title: 'Artificial intelligence', sub: 'Machines doing tasks that seem to need human intelligence' },
      { title: 'Machine learning', sub: 'Systems learn patterns from data instead of following only fixed rules' },
      { title: 'Deep learning', sub: 'Machine learning with many-layered neural networks' },
      { title: 'Generative AI and LLMs', sub: 'Models that produce text, images or code' },
    ] },
    { t: 'p', text: 'A **large language model (LLM)** is trained on huge amounts of text. It assigns probabilities to possible next words, and training uses mathematical optimisation to reduce prediction errors. It has no guarantee of truth, and it can **hallucinate** and carry the **bias** of its data. Prelims 2026 tested these points, including the false claim that LLMs produce unbiased outputs.' },
    { t: 'table', caption: 'Global AI summits and India\'s role.', head: ['Summit', 'Date', 'Point'], rows: [
      ['Bletchley Park, UK', 'November 2023', 'Focus on frontier AI safety'],
      ['Seoul', 'May 2024', 'Follow-up on safety'],
      ['Paris, AI Action Summit', 'February 2025', 'Co-chaired by India (Prelims 2025)'],
      ['New Delhi, AI Impact Summit', 'February 2026', '**New Delhi Declaration on AI Impact**, endorsed by 92 countries and international organisations per PIB; built around seven Chakras'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026: AI Impact Summit', text: 'UPSC tested the seven Chakras (including access for social empowerment, AI for science, and secure and trusted AI) and described the Charter for Democratic Diffusion of AI. A claim that the Charter is a **binding** framework is the kind of wording to doubt. Summit declarations like this one are voluntary.' },
    { t: 'list', items: [
      '**IndiaAI Mission:** approved in March 2024 with an outlay of about Rs 10,372 crore. PIB reported **over 38,000 GPUs** provisioned, with 20,000 more planned, as of March 2026.',
      '**Regulation:** the EU AI Act (2024) uses risk tiers. India has so far preferred guidelines and existing laws, including the IT Act and the DPDP Act, over a separate AI law.',
      '**Debate:** productivity and public services against job loss, deepfakes, copyright, energy use and concentration of power.',
    ] },
    { t: 'note', kind: 'exam', title: 'Earlier Prelims', text: 'Prelims 2020 asked what AI can effectively do at present, listing tasks such as reducing industrial electricity use, writing stories, disease diagnosis and text-to-speech. So think in terms of pattern-based tasks, not physical ones such as wireless power transfer.' },

    { t: 'h', text: 'Quantum technology' },
    { t: 'compare', caption: 'A classical bit against a quantum bit.', columns: [
      { title: 'Classical bit', items: ['Either 0 or 1', 'Calculations done one state at a time', 'Stable at room temperature'] },
      { title: 'Qubit', items: ['**Superposition:** a blend of 0 and 1', '**Entanglement:** linked qubits share one state', '**Decoherence:** easily disturbed; many need extreme cold'] },
    ] },
    { t: 'table', caption: 'Four areas of the National Quantum Mission.', head: ['Thematic Hub', 'Goal'], rows: [
      ['Quantum computing', 'Intermediate-scale computers with **50-1,000 physical qubits** in eight years'],
      ['Quantum communication', 'Secure links, including satellite-based, and quantum key distribution'],
      ['Sensing and metrology', 'Atomic clocks and precise magnetometers'],
      ['Materials and devices', 'Superconductors and other materials for quantum devices'],
    ] },
    { t: 'p', text: 'The **National Quantum Mission** was approved in April 2023 with Rs 6,003.65 crore for 2023-24 to 2030-31, under the Department of Science and Technology. **Quantum computers threaten today\'s encryption**, which is why **post-quantum cryptography** matters for banks and defence.' },
    { t: 'note', kind: 'exam', title: 'Quantum in Prelims', text: '**2022:** the term "qubit" belongs to quantum computing. **2025:** Majorana 1 is meant for quantum computing, but it was introduced by **Microsoft**, not Amazon Web Services. **2026:** NQM\'s 50-1,000 qubits and four T-Hubs.' },

    { t: 'h', text: 'Digital technologies' },
    { t: 'table', head: ['Technology', 'Meaning', 'Past Prelims'], rows: [
      ['Blockchain', 'A shared, tamper-evident ledger run across many computers, with no single controller', '2020; 2026 tested **tokenisation** (turning real assets into digital tokens) and **consortium blockchains** (a blend of public and private)'],
      ['Web 3.0', 'A blockchain-based web where users control their data', '2022'],
      ['NFT', 'A unique cryptographic token on a blockchain', '2022'],
      ['SaaS', 'Software rented over the internet, not installed', '2022'],
      ['Internet of Things', 'Everyday devices talking to each other over networks', '2018: car warning of traffic and messaging your office'],
      ['Li-Fi', 'Wireless data through light, faster than Wi-Fi', '2016'],
      ['Semiconductors', 'India Semiconductor Mission (2021). Units include CG Power with Renesas and Stars (Gujarat), Tata (Assam), HCL-Foxconn (Uttar Pradesh)', '2026: HCL-Foxconn in Madhya Pradesh was the wrong pair'],
    ] },

    { t: 'h', text: 'Cyber security' },
    { t: 'table', caption: 'Common attacks.', head: ['Attack', 'What happens'], rows: [
      ['Malware', 'Harmful software, including viruses, worms and trojans'],
      ['Ransomware', 'Files locked until a ransom is paid'],
      ['Phishing', 'Fake messages that trick users into giving up details'],
      ['DDoS', 'Traffic floods from many machines knock out a service'],
      ['Zero-day', 'Attack on a flaw that the maker has not yet fixed'],
      ['Spoofing', 'Faking a trusted identity or signal, including GPS'],
      ['Deepfake', 'AI-made fake audio or video'],
    ] },
    { t: 'compare', caption: 'India\'s institutions and laws.', columns: [
      { title: 'Institutions', items: ['**CERT-In:** national incident response, under Section 70B of the IT Act', '**NCIIPC:** critical information infrastructure, Section 70A', '**I4C:** Home Ministry centre on cybercrime'] },
      { title: 'Law and policy', items: ['**IT Act, 2000**', 'National Cyber Security Policy, 2013', '**Digital Personal Data Protection Act, 2023**', 'India has not joined the Budapest Convention'] },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2020', text: 'UPSC asked what cyber insurance can cover in India. This included the cost of hiring a specialist to reduce loss in cyber extortion. It shows that cyber questions can come in an economic form too.' },

    { t: 'h', text: 'Defence technology' },
    { t: 'compare', caption: 'Prelims 2023 swapped these definitions. Both of its statements were wrong.', columns: [
      { title: 'Ballistic missile', items: ['Rocket-powered only early in flight', 'Then follows a high arc under gravity', 'Goes outside or near the edge of the atmosphere', 'Agni, Prithvi'] },
      { title: 'Cruise missile', items: ['Jet-powered through most of flight', 'Flies low and level', 'Harder to detect', 'BrahMos, Nirbhay'] },
    ] },
    { t: 'table', head: ['System', 'Type', 'Point'], rows: [
      ['Agni-V', 'Long-range ballistic', 'MIRV tested in **Mission Divyastra**, March 2024. Not a cruise missile, as Prelims 2023 tested'],
      ['Advanced Agni with MIRV', 'Ballistic', 'Flight-tested on 8 May 2026'],
      ['Agni-Prime', 'Intermediate-range ballistic, up to 2,000 km', 'First rail-launcher test on 24 September 2025'],
      ['BrahMos', 'Supersonic cruise', 'India-Russia joint venture. Not an ICBM'],
      ['K-4, K-15', 'Submarine-launched', 'Arihant-class; complete the triad'],
      ['Akash', 'Surface-to-air', 'Indigenous; used in Operation Sindoor'],
      ['Pinaka', 'Rocket artillery', 'Multi-barrel launcher'],
      ['Tejas Mk-1', 'Light combat aircraft', 'Not fifth generation'],
      ['AMCA', 'Planned stealth fighter', 'India\'s fifth-generation project'],
    ] },
    { t: 'p', text: 'The **Integrated Guided Missile Development Programme** began in 1983 under A.P.J. Abdul Kalam, and gave Prithvi, Agni, Trishul, Akash and Nag. **Hypersonic** weapons fly above Mach 5 and can manoeuvre in the atmosphere, which makes them hard to intercept. **MIRV** means one missile carrying warheads for different targets.' },
    { t: 'note', kind: 'exam', title: 'Defence in past Prelims', text: '**2022:** Fractional Orbital Bombardment puts a missile in orbit and brings it down on a target. **2024:** of Rafale, MiG-29 and Tejas Mk-1, **none** is fifth generation. **2025:** CL-20, HMX and LLM-105 are **military explosives**. Dornier-228 is maritime patrol and C-17 is transport, but IL-76 is not a supersonic combat plane. Not all UAVs can land vertically or hover. **2026:** stealth (small radar cross-section, radar-absorbing coating) and drone swarms (drones talk to each other; GPS spoofing is a counter).' },
    { t: 'note', kind: 'exam', title: 'Prelims 2026: Mission Sudarshan Chakra', text: 'Announced on Independence Day 2025 as a national security shield by 2035. UPSC tested its aim to strengthen air and missile defence and to reinforce strategic autonomy. Learn it along with the Integrated Air Defence Weapon System and multi-layer defence.' },
    { t: 'list', items: [
      '**Self-reliance:** Defence Acquisition Procedure 2020, positive indigenisation lists, iDEX, and defence corridors in Uttar Pradesh and Tamil Nadu.',
      '**Operation Sindoor (May 2025):** showed the role of drones, loitering munitions and air defence. Raksha Mantri credited DRDO systems in January 2026.',
      '**Other emerging tech:** Prelims 2026 tested **green hydrogen**, which is made by electrolysis with renewable power, and the claim that the mission aims to abate about 50 MMT of emissions by 2030. Prelims 2025 and 2026 tested **rare earth elements** in electronics and AI hardware.',
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '**AI governance:** innovation or regulation; bias; jobs; sovereign models and compute. **Cyber:** critical infrastructure, data protection and surveillance concerns, with government citing security and critics citing privacy. **Defence:** self-reliance against import dependence, role of private industry, and timelines. **Dual-use technology:** drones, quantum and AI can serve both civil and military ends.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'AI > machine learning > deep learning. LLMs predict next words and can be biased.',
      'NQM: April 2023, Rs 6,003.65 crore, 50-1,000 qubits, four T-Hubs.',
      'Majorana 1: Microsoft.',
      'Ballistic: rocket boost, then arc. Cruise: jet, low flight.',
      'Agni-V: ballistic. BrahMos: supersonic cruise.',
      'CERT-In: Section 70B. NCIIPC: Section 70A.',
      'Sudarshan Chakra: announced 2025, security shield by 2035.',
    ] },
  ],
  sources: [
    { label: 'UPSC Civil Services Prelims 2016, 2018, 2020, 2022-2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'PIB, AI Impact Summit 2026 Concludes with Adoption of New Delhi Declaration', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2231208&reg=3&lang=2' },
    { label: 'PIB, India AI Impact Summit 2026: Landmark Global Declaration', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2234343&reg=3&lang=1' },
    { label: 'PIB, Seven Chakras of the India-AI Impact Summit 2026', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2225069&reg=3&lang=2' },
    { label: 'PIB, DRDO launch of Agni-Prime from rail-based launcher (September 2025)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2170979&reg=48&lang=2' },
    { label: 'PIB, flight-trial of Advanced Agni missile with MIRV (May 2026)', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259380&reg=3&lang=2' },
    { label: 'PIB, Raksha Mantri on DRDO Day: DRDO weapons in Operation Sindoor', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2210469&reg=3&lang=1' },
  ],
  beyond: {
    refer: [
      { what: 'IT Act, 2000 and DPDP Act, 2023', where: 'India Code', why: 'Exact sections and any amendments.', url: 'https://www.indiacode.nic.in/' },
      { what: 'Latest DRDO test releases', where: 'PIB, Ministry of Defence', why: 'New tests appear often. Check a few weeks before the exam.', url: 'https://www.pib.gov.in/' },
    ],
    current: [
      { issue: 'AI Impact Summit', link: 'New Delhi, February 2026; PIB reports 92 endorsers.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2231208&reg=3&lang=2' },
      { issue: 'Advanced Agni with MIRV', link: 'Flight-tested on 8 May 2026 from Dr APJ Abdul Kalam Island, Odisha.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2259380&reg=3&lang=2' },
    ],
  },
}
