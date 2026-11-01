import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-23',
  summary: 'How India held together after 1947: the integration of princely states and foreign enclaves, linguistic reorganisation, and the first steps of nation-building.',
  minutes: 21,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The syllabus line is **"Post-independence consolidation and reorganization within the country."** In 1947, many observers doubted India would survive. It faced Partition violence, millions of refugees, hundreds of princely states, food shortages, and language conflict. The first two decades were about holding the country together through **democratic means**. This note covers political unity and state-making. The next note covers the economy, society and regional movements.' },
    { t: 'wheel', caption: 'The challenges of 1947.', center: 'India in 1947', spokes: ['Partition and refugees', 'Princely states', 'Kashmir war', 'Language conflict', 'Poverty and food', 'Foreign enclaves', 'Caste inequality', 'A new democracy'] },

    { t: 'h', text: 'Partition and refugees' },
    { t: 'p', text: 'Partition displaced an estimated 10 to 15 million people, and hundreds of thousands, perhaps up to a million, were killed. The numbers are estimates and differ by source. Rehabilitation was a huge state task. The government set up a Ministry of Relief and Rehabilitation, and towns such as **Faridabad and Nilokheri** grew up around refugee settlement. The **Nehru-Liaquat Pact (April 1950)** sought to protect minorities in both countries. Gandhi\'s fasts in Calcutta and Delhi, and his assassination on **30 January 1948**, also shaped a secular turn.' },

    { t: 'h', text: 'Integrating the princely states' },
    { t: 'p', text: 'About **565 princely states** (the number varies a little by source) covered about two-fifths of the land. When Britain left, its paramountcy lapsed, and they could in theory choose. A new **States Department** was set up in 1947 under **Sardar Patel**, with **V.P. Menon** as secretary. Mountbatten also helped persuade the rulers.' },
    { t: 'flow', caption: 'The two-stage method.', steps: [
      { title: 'Instrument of Accession', sub: 'Gave up defence, external affairs, communications' },
      { title: 'Standstill Agreement', sub: 'Existing arrangements continue' },
      { title: 'Merger Agreements', sub: 'States merge into provinces or unions' },
      { title: 'Part B states', sub: 'Rajpramukh as head, until 1956' },
      { title: 'Privy purse', sub: 'Pay rulers; abolished in 1971' },
    ] },
    { t: 'table', caption: 'The three hard cases. Learn them cold.', head: ['State', 'Problem', 'How resolved', 'Date'], rows: [
      ['**Junagadh**', 'Muslim Nawab, mostly Hindu subjects, not next to Pakistan. Nawab acceded to Pakistan.', 'Indian forces moved in; a **plebiscite** went heavily for India.', 'February 1948'],
      ['**Hyderabad**', 'The Nizam wanted independence. Standstill in November 1947. **Razakars** under Qasim Razvi. Peasant revolt in Telangana, led by Communists.', '**Operation Polo**, officially called a "police action".', 'September 1948'],
      ['**Jammu and Kashmir**', 'Hindu ruler Hari Singh, mostly Muslim people, delayed. Tribal raiders from Pakistan invaded.', 'He signed the Instrument of Accession; Indian troops airlifted. India went to the UN. Ceasefire followed.', 'Accession October 1947; ceasefire from 1 January 1949'],
    ] },
    { t: 'note', kind: 'trap', title: 'Do not mix these up', text: 'Junagadh had a **plebiscite**. Hyderabad had a **police action**. Kashmir had **accession, then a UN ceasefire**, and no plebiscite has been held. Also Travancore, Jodhpur and Bhopal hesitated, and later joined. The **26th Amendment (1971)** ended privy purses, after the Supreme Court struck down the President\'s 1970 order in the **Madhav Rao Scindia** case.' },
    { t: 'p', text: '**Manipur and Tripura** merged in 1949. Manipur\'s merger remains a grievance for some groups. **Sikkim** was a protectorate and became a state later. So integration was not free from coercion, as some historians note, though it produced a far larger democratic union than anyone could have assumed.' },
    { t: 'h3', text: 'French and Portuguese enclaves' },
    { t: 'table', head: ['Territory', 'From', 'How', 'Date'], rows: [
      ['**Chandernagore**', 'France', 'Plebiscite, then transfer; merged with West Bengal', 'De facto 1950; merged 1955'],
      ['**Pondicherry, Karaikal, Mahe, Yanam**', 'France', 'De facto transfer; treaty; de jure in 1962', '1 November 1954; 16 August 1962'],
      ['**Dadra and Nagar Haveli**', 'Portugal', 'Liberated by nationalists in 1954; 10th Amendment', 'Merged 1961'],
      ['**Goa, Daman and Diu**', 'Portugal', '**Operation Vijay**; 12th Amendment', 'December 1961'],
      ['**Sikkim**', 'Protectorate', 'Referendum; **36th Amendment**. 35th Amendment had given "associate" status.', '16 May 1975'],
    ] },

    { t: 'h', text: 'Reorganising states on language' },
    { t: 'p', text: 'The Congress had promised linguistic provinces since **1920** (Nagpur session). After Partition, its leaders were afraid of further division. The Constitution\'s first framework had four types of states: **Part A, B, C and D**.' },
    { t: 'timeline', caption: 'From fear to acceptance.', items: [
      { when: '1948', what: '**S.K. Dhar Commission** prefers administrative convenience to language.' },
      { when: '1948-49', what: '**JVP Committee** (Jawaharlal Nehru, Vallabhbhai Patel, Pattabhi Sitaramayya) advises against language-based states for now.' },
      { when: '1952', what: '**Potti Sriramulu** dies on **15 December**, after a fast of over 50 days for an Andhra state. Riots follow.' },
      { when: '1 October 1953', what: '**Andhra** becomes the first state on a linguistic basis, from Madras. Capital at Kurnool.' },
      { when: 'December 1953', what: '**States Reorganisation Commission:** **Fazl Ali**, H.N. Kunzru, K.M. Panikkar.' },
      { when: '1955', what: 'SRC reports. Accepts language as a main factor, but rejects "one language, one state", and considers unity, finance and development.' },
      { when: '1 November 1956', what: '**States Reorganisation Act** and **7th Amendment**: **14 states and 6 Union Territories**. A/B/C/D categories end. Five Zonal Councils set up.' },
    ] },
    { t: 'compare', caption: 'Debate on language states.', columns: [
      { title: 'Against, in 1948-49', items: ['Fear of division after Partition', 'Threat to national unity', 'Administrative problems', 'Minorities within new states'] },
      { title: 'For, and what history showed', items: ['Public business in people\'s language', 'Democracy reaches the masses', 'Regional culture accommodated within the Union', 'Language conflict has not, on the whole, broken up India'] },
    ] },
    { t: 'p', text: 'The Constitution gives this power to **Parliament under Article 3**: by simple majority, on the President\'s recommendation, after taking the state legislature\'s views, which are not binding. In **Berubari (1960)**, the Supreme Court said ceding territory to a foreign state needs a constitutional amendment under Article 368. The **7th Amendment** also added **Articles 350A and 350B** on linguistic minorities.' },
    { t: 'timeline', caption: 'State-making after 1956.', items: [
      { when: '1960', what: '**Bombay** split into Maharashtra and Gujarat, after the Samyukta Maharashtra and Mahagujarat agitations.' },
      { when: '1963', what: '**Nagaland**, with Article 371A (13th Amendment).' },
      { when: '1966', what: '**Punjab Reorganisation:** Haryana and Chandigarh (Union Territory) created; some hill areas to Himachal. Shah Commission.' },
      { when: '1971-72', what: '**Himachal Pradesh** (1971); **Manipur, Tripura, Meghalaya** (1972), through the North-Eastern Areas (Reorganisation) Act.' },
      { when: '1975', what: '**Sikkim**.' },
      { when: '1987', what: '**Mizoram**, **Arunachal Pradesh** and **Goa**.' },
      { when: '2000', what: '**Chhattisgarh, Uttarakhand, Jharkhand**: mainly on development and tribal grounds, not language.' },
      { when: '2014', what: '**Telangana**, from Andhra Pradesh.' },
      { when: '2019', what: '**J&K Reorganisation Act:** the state becomes two Union Territories, J&K and Ladakh. A statehood-to-UT downgrade is without precedent.' },
      { when: '2020', what: 'Dadra and Nagar Haveli and Daman and Diu merge. Today: **28 states and 8 UTs** (as of November 2026).' },
    ] },
    { t: 'note', kind: 'trap', title: 'What the Supreme Court said on Article 370', text: 'In **December 2023** the Court upheld the 2019 abrogation of Article 370 (**In Re: Article 370**), and asked that statehood be restored and elections held. It did not fully decide the validity of converting a state into UTs, relying on the government\'s assurance. Assembly elections took place in 2024.' },
    { t: 'note', kind: 'recent', title: 'Ladakh and J&K', text: 'On **23 May 2026**, reports said the Centre and Leh and Kargil groups had an in-principle understanding on a UT-level elected body with safeguards modelled on Articles 371A, F and G. They accepted, for now, that the Sixth Schedule and statehood are not feasible. Finer details were left for further talks. No report of J&K\'s statehood being restored was found when this note was checked (November 2026), so verify this before the exam.' },

    { t: 'h', text: 'Building the nation: other foundations' },
    { t: 'table', caption: 'The institutional work.', head: ['Area', 'What happened', 'Why it matters'], rows: [
      ['**Constitution**', 'In force on 26 January 1950. Republic, universal adult franchise.', 'Bold: votes for all in a mostly non-literate country'],
      ['**First General Election**', 'October 1951 to February 1952. CEC **Sukumar Sen**; ballot symbols for voters who could not read.', 'Congress won 364 of 489 Lok Sabha seats, and democracy took root'],
      ['**"Congress system"**', 'Rajni Kothari\'s term. One dominant party with many factions, which absorbed diversity.', 'Mediated conflict through a broad umbrella'],
      ['**Civil services**', 'Patel defended All India Services; Article 312', 'Administrative unity'],
      ['**Secularism and minorities**', 'Part III rights; Articles 25-30', 'After Partition, a promise to Muslims and others'],
      ['**Science and institutions**', 'Atomic Energy Commission 1948; IIT Kharagpur 1951; UGC', 'Capacity for modernisation'],
      ['**Tribal policy**', 'Nehru\'s five principles, shaped with Verrier Elwin; Fifth and Sixth Schedules', 'Integration without forced assimilation'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2018: the chronology', text: 'UPSC listed four early events: first elected Communist state government (Kerala, **1957**), Imperial Bank renamed State Bank of India (**1955**), Air India nationalised (**1953**), and Goa joining India (**1961**). So learn the order of events in the 1950s and 1960s, not only the big dates.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Role of Patel and Menon; why linguistic reorganisation strengthened rather than broke the union; demand for smaller states (for and against, with criteria); how India\'s democracy survived; comparison with Pakistan. For small states: use calls for a second States Reorganisation Commission, development gaps, and the mixed record of Jharkhand, Uttarakhand and Chhattisgarh.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Junagadh plebiscite February 1948; Operation Polo September 1948.',
      'Dhar 1948, JVP 1948-49, Andhra 1953, SRC 1953-55, 1956 Act.',
      '7th Amendment: 14 states and 6 UTs. 1 November 1956.',
      'Operation Vijay December 1961. Sikkim 1975 under the 36th Amendment.',
      'Article 3: simple majority, state views not binding.',
      'Now 28 states and 8 UTs.',
    ] },
  ],
  sources: [
    { label: 'UPSC CSE syllabus, GS Paper I (candidate\'s copy, upsc-syllabus.pdf, p1)' },
    { label: 'UPSC Civil Services Prelims 2018, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'ThePrint, Ladakh talks and in-principle understanding (23 May 2026)', url: 'https://theprint.in/india/breakthrough-in-ladakh-talks-centre-local-groups-agree-on-elected-representative-body-safeguards/2939234/' },
    { label: 'For further reading: NCERT Class 12, Politics in India Since Independence; Bipan Chandra and others, India Since Independence' },
  ],
  beyond: {
    refer: [
      { what: 'Map of India in 1950 and in 1956', where: 'NCERT Class 12, Politics in India Since Independence, Chapter 1 (nation-building)', why: 'State changes are far easier to remember on a map.' },
      { what: 'Bipan Chandra and others, India Since Independence', where: 'Library or bookshop', why: 'Depth on states\' integration and Mains analysis.' },
    ],
    current: [
      { issue: 'Ladakh talks', link: 'May 2026: in-principle understanding on a UT-level elected body with safeguards; details pending. Check for a later agreement.', source: 'ThePrint', url: 'https://theprint.in/india/breakthrough-in-ladakh-talks-centre-local-groups-agree-on-elected-representative-body-safeguards/2939234/' },
    ],
  },
}
