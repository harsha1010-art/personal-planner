import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-13',
  summary: 'Theories of social movements, then peasants and farmers, workers, women, Dalits and backward classes, tribals, environment, and ethnic identity. Paper II, Unit C(v), with C(iii)(c) on class mobilisation.',
  minutes: 26,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'A social movement is sustained, collective action aimed at promoting or resisting change, largely outside regular institutions. Unit **C(v)** lists peasants and farmers, women, backward classes and Dalits, environment, and ethnicity and identity. This note adds workers and tribal movements, since your plan and C(iii)(c) ask for them. For each movement, keep the same five questions in mind: who, against what, using what ideology, with which organisation, and with what outcome.' },
    { t: 'table', caption: 'Theory first. Use one line of theory to open any movement answer.', head: ['Theory', 'Thinker', 'Claim', 'Limit'], rows: [
      ['Structural strain', '**Neil Smelser**', 'Value-added steps lead to collective behaviour', 'Treats protest as strain, not reason'],
      ['Relative deprivation', '**Ted Gurr**; in India, **M.S.A. Rao**', 'People revolt when the gap between expectation and reality grows', 'Deprivation is common, but revolt is rare'],
      ['Resource mobilisation', '**McCarthy and Zald**', 'Organisation, money and leaders matter', 'Ignores meaning and emotion'],
      ['Political process', '**Sidney Tarrow**', 'Openings in the political system set the timing', 'Underplays culture'],
      ['New social movements', '**Touraine**, **Melucci**', 'Identity, culture and autonomy; not just class', 'Old and new overlap in India'],
    ] },
    { t: 'p', text: '**Indian frames:** **M.S.A. Rao** sorted movements into reformist, transformative and revolutionary. **T.K. Oommen** studied movements as a process and looked at charisma and how movements settle down (his work on Bhoodan-Gramdan). **Ghanshyam Shah** classified the Indian literature by participants. **Rajendra Singh** questioned a sharp old-new divide in India.' },

    { t: 'h', text: 'Peasants and farmers' },
    { t: 'table', caption: 'Peasant and farmer movements are different things. The trap is to merge them.', head: ['', 'Peasant movements', 'New farmers\' movements'], rows: [
      ['Period', 'Colonial to around 1970', 'From the late 1970s and 1980s'],
      ['Base', 'Tenants, poor peasants, labourers, sometimes rich peasants', 'Market-linked owner-cultivators'],
      ['Enemy', 'Landlord, moneylender, colonial state', 'State and market: prices, inputs, loans'],
      ['Demand', 'Land, rent, debt relief', 'Remunerative prices, loan relief, subsidies'],
      ['Examples', 'Tebhaga (1946-47), Telangana (1946-51), Naxalbari (1967)', 'Shetkari Sanghatana (Sharad Joshi), BKU (Mahendra Singh Tikait), KRRS (Nanjundaswamy)'],
    ] },
    { t: 'list', items: [
      '**Kathleen Gough:** five types of peasant uprising: restorative, religious, social banditry, terrorist vengeance, mass insurrection.',
      '**D.N. Dhanagare:** class composition decides the course of peasant movements from 1920 to 1950.',
      '**A.R. Desai:** Marxist collections on peasant struggles after independence.',
      '**Ranajit Guha:** Elementary Aspects of Peasant Insurgency. The peasant is the subject of his own revolt, not an inert follower of elites.',
      '**James Scott:** Weapons of the Weak. Use this for everyday forms of resistance, though his study is from Malaysia.',
      '**Sharad Joshi:** **Bharat vs India**, rural producers set against the urban state. **Tom Brass** and others argue that this hides class divisions, since rich farmers lead and labourers gain little.',
      '**2020-21 farm protests:** three farm laws of 2020 were repealed in November 2021. Use this for the politics of the minimum support price and the power of a coalition of unions.',
    ] },

    { t: 'h', text: 'Workers: class mobilisation' },
    { t: 'timeline', items: [
      { when: '1918-20', what: 'Ahmedabad mill strike with Gandhi; Textile Labour Association. **AITUC** founded in 1920.' },
      { when: '1947-70', what: 'Unions split by party: **INTUC** (1947), HMS (1948), **BMS** (1955), **CITU** (1970).' },
      { when: '1972', what: '**SEWA** registered under Ela Bhatt: self-employed women, trade union and cooperative together.' },
      { when: '1974', what: 'National railway strike under George Fernandes, followed by a hard state response.' },
      { when: '1982', what: '**Bombay textile strike** under Datta Samant. Long, and it failed. Mills declined. **Chhattisgarh Mukti Morcha** under Shankar Guha Niyogi joined labour, adivasi and health issues.' },
      { when: 'After 1991', what: 'Contract labour grows, union density falls, and strikes decline.' },
      { when: '21 November 2025', what: 'Four **Labour Codes** take effect, combining 29 central laws. Gig and platform work defined for the first time (PIB). Unions and government differ on their effect on workers.' },
    ] },
    { t: 'table', head: ['Thinker', 'Argument'], rows: [
      ['**Rajnarayan Chandavarkar**', 'Bombay workers were shaped by neighbourhood, caste and rural ties, as much as by the factory'],
      ['**E.A. Ramaswamy**', 'Union and worker relations in Coimbatore; the union as an active political actor'],
      ['**Jan Breman**', 'Closure of Ahmedabad mills pushed formal workers into informal work, and class power fell'],
      ['**Rina Agarwala**', 'Informal workers mobilise in new ways, and make welfare demands on the state rather than on the employer'],
      ['**Sharit Bhowmik**', 'Organising street vendors and informal workers'],
    ] },

    { t: 'h', text: 'Women\'s movement' },
    { t: 'flow', caption: 'Stages, drawn from histories such as Radha Kumar\'s The History of Doing.', steps: [
      { title: 'Social reform, 19th c.', sub: 'Sati, widow remarriage, education; men lead, later Pandita Ramabai and Savitribai Phule' },
      { title: 'Nationalist phase', sub: 'AIWC (1927), mass action in Gandhian campaigns; Sarda Act (1929)' },
      { title: 'Lull after 1947', sub: 'Assumption that the Constitution had solved it. Shahada and Telangana are exceptions' },
      { title: 'Towards Equality (1974)', sub: 'Report shows sharp decline in women\'s status' },
      { title: 'Autonomous feminism', sub: 'Mathura case, dowry, Roop Kanwar, anti-arrack in Andhra' },
      { title: 'Rights and plural feminisms', sub: 'Vishakha, Dalit feminism, Nirbhaya, queer politics' },
    ] },
    { t: 'table', head: ['Event', 'What changed'], rows: [
      ['*Mathura* case and the Open Letter (1979)', 'Campaign led to the 1983 custodial rape amendment'],
      ['*Shah Bano* (1985) and the 1986 Act', 'Split between gender justice and community identity'],
      ['Roop Kanwar (1987)', 'Commission of Sati (Prevention) Act, 1987'],
      ['*Vishakha* (1997)', 'Workplace harassment guidelines, after Bhanwari Devi; POSH Act, 2013'],
      ['Delhi 2012 and the **Verma Committee**', 'Criminal Law (Amendment) Act, 2013'],
      ['106th Amendment (2023)', 'One-third of seats for women in Lok Sabha and Assemblies, tied to census and delimitation'],
    ] },
    { t: 'compare', caption: 'Three debates inside feminism.', columns: [
      { title: 'Reform and the "women\'s question"', items: ['**Partha Chatterjee:** nationalism solved it by placing women in the home, as the inner domain', '**Sangari and Vaid:** Recasting Women'] },
      { title: 'Caste and gender', items: ['**Gopal Guru:** "Dalit women talk differently"', '**Sharmila Rege:** Dalit feminist standpoint', 'Upper-caste leadership criticised'] },
      { title: 'Law and state', items: ['**Flavia Agnes:** law and gender inequality, and personal laws', '**Nivedita Menon:** feminist limits of reliance on the state', 'Protection or surveillance?'] },
    ] },

    { t: 'h', text: 'Dalit and backward class movements' },
    { t: 'table', head: ['Stage', 'Actors', 'Goal'], rows: [
      ['Anti-caste reform', '**Jyotiba Phule**, Satyashodhak Samaj (1873); **Narayana Guru**; **Ayyankali**', 'Education, dignity, challenge to Brahmin authority'],
      ['Non-Brahmin', 'Justice Party, **Periyar\'s** Self-Respect Movement (1925)', 'Jobs, rational self-respect'],
      ['Ambedkarite', 'Mahad (1927), Kalaram (1930), Poona Pact (1932), Nagpur conversion (1956)', 'Rights and political safeguards; a distinct identity'],
      ['Radical', '**Dalit Panthers** (1972), Dalit literature', 'Anger, urban youth, class and caste'],
      ['Electoral', 'BAMCEF, **BSP** under Kanshi Ram (1984)', 'State power through a bahujan coalition'],
      ['Post-Mandal and today', 'Una (2016), Bhima Koregaon (2018), sub-classification', 'Atrocities, education, internal inequality'],
    ] },
    { t: 'list', items: [
      '**Sanskritisation or protest?** **M.S.A. Rao** and **Owen Lynch** (Jatavs of Agra) track the shift from caste uplift to political claims. **Rudolph and Rudolph:** caste associations as a modern form.',
      '**Eleanor Zelliot** and **Gail Omvedt** are the main histories of Ambedkar and of the Dalit movement. **Mark Juergensmeyer** on Ad Dharm in Punjab.',
      '**Backward classes:** Kalelkar (1953-55), **Mandal** (report 1980; announced 1990), *Indra Sawhney* (1992; 27%, creamy layer, 50% ceiling). **Christophe Jaffrelot:** "silent revolution" as lower castes gain power in north India. **Yogendra Yadav:** second democratic upsurge.',
      '**Limits:** **Anand Teltumbde** on Khairlanji (2006) and on the persistence of caste despite rights. **Gopal Guru** on humiliation as an experience. *State of Punjab v. Davinder Singh* (2024) allowed sub-classification within SCs, which sharpens internal debate.',
    ] },

    { t: 'h', text: 'Tribal movements' },
    { t: 'table', caption: 'The periods follow K.S. Singh.', head: ['Period', 'Character', 'Examples'], rows: [
      ['1795-1860', 'Revolts against early British rule, land grabs', 'Kol (1831-32), Santhal Hul (1855)'],
      ['1860-1920', 'Colonial forest and land laws; millenarian and agrarian mix', 'Munda Ulgulan (1899-1900), Tana Bhagat'],
      ['1920-47', 'Links with nationalism, while keeping separate goals', 'Devi movement (Hardiman), Rampa'],
      ['Since 1947', 'Autonomy, statehood, land and forest rights, armed conflict', 'Naga, Mizo, Bodo; Jharkhand (state, 2000); Niyamgiri; Pathalgadi (Khunti, 2017-18)'],
    ] },
    { t: 'p', text: '**Surajit Sinha** reviewed tribal solidarity movements. **Nandini Sundar** (The Burning Forest) studied conflict in Bastar. The Supreme Court ruled against Salwa Judum in 2011. Use this to ask whether a state can win consent while it arms one side.' },

    { t: 'h', text: 'Environmental movements' },
    { t: 'table', head: ['Movement', 'Where and who', 'Issue', 'Point'], rows: [
      ['**Chipko**', 'Uttarakhand, 1973 onward. Reni (1974), Gaura Devi; C.P. Bhatt; Sunderlal Bahuguna', 'Commercial felling', 'Livelihood before ecology'],
      ['**Silent Valley**', 'Kerala; Kerala Sastra Sahitya Parishad', 'Hydro project', 'Science-led and successful'],
      ['**Appiko**', 'Uttara Kannada, 1983; Pandurang Hegde', 'Forest', 'Chipko spreads south'],
      ['**Narmada Bachao Andolan**', 'Medha Patkar', 'Big dams, displacement', 'Questions the development model'],
      ['**Plachimada**', 'Kerala, Coca-Cola plant', 'Groundwater', 'Water vs corporation'],
      ['**Thoothukudi**', 'Tamil Nadu, Sterlite; police firing in 2018', 'Pollution', 'Urban and working people'],
    ] },
    { t: 'compare', columns: [
      { title: 'Guha and allied arguments', items: ['**Environmentalism of the poor:** **Guha and Martinez-Alier**. Ecology as survival, not lifestyle', '**Guha:** three strands: crusading Gandhian, ecological Marxist, appropriate technology', '**Gadgil and Guha:** Ecology and Equity'] },
      { title: 'Gender and critique', items: ['**Vandana Shiva:** Staying Alive; women as closest to nature', '**Bina Agarwal:** **feminist environmentalism**, as the link comes from labour and property, not nature', '**Amita Baviskar:** warns against romantic views of adivasis'] },
    ] },

    { t: 'h', text: 'Ethnicity and identity movements' },
    { t: 'p', text: '**Fredrik Barth** says ethnic groups are defined by boundaries, not cultural content. **Paul Brass** shows elites turn ethnic categories into political communities (instrumentalism). **Myron Weiner** (Sons of the Soil) studied conflict between migrants and locals, including Assam and Bombay. **Sanjib Baruah** studies Assam and the north-east. **Benedict Anderson\'s** "imagined communities" helps explain why identities seem old even when they are recent.' },
    { t: 'table', head: ['Type', 'Example', 'Demand'], rows: [
      ['Language', 'Dravidian movement; Andhra (1953)', 'Self-respect, language state'],
      ['Regional statehood', 'Telangana (2014), Gorkhaland', 'Statehood; resources and dignity'],
      ['Ethno-nationalism', 'Naga, Mizo; Punjab', 'Autonomy, separate claim, accord'],
      ['Sons of the soil', 'Assam Movement (1979-85), Shiv Sena', 'Migrants, jobs, citizenship'],
      ['Reservation claims', 'Jat, Patidar, Maratha agitations', 'Quotas amid farm distress'],
    ] },
    { t: 'note', kind: 'trap', title: 'Common mix-ups', text: 'Do not treat all farmer politics as peasant revolt. Do not credit "environmentalism of the poor" to Shiva. Rao is relative deprivation in India, and Gurr the general theory. Gough lists five types of uprising, and Dhanagare stresses class. Do not call an event a success without saying who benefited.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Are Indian new social movements really new? Why have farmer movements been stronger than labour movements since the 1980s? Is the Dalit movement moving from protest to power? Does the women\'s movement speak for all women? How do environmental movements question development? Answer with theory, then two Indian cases with years, then what changed and for whom. Add an internal critique, as examiners look for this.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Smelser, Gurr, McCarthy and Zald, Tarrow, Touraine and Melucci.',
      'Rao: reformist, transformative, revolutionary. Oommen: charisma and process.',
      'Gough: five uprising types. Joshi: Bharat vs India.',
      'Towards Equality (1974); Mathura, Vishakha, Verma.',
      'Chipko 1973; NBA; Guha, Shiva, Agarwal, Baviskar.',
      'Barth: boundaries. Brass: elites. Weiner: sons of the soil.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper II, C(iii) and C(v), from your upsc-syllabus.pdf, p. 75' },
    { label: 'PIB, Government makes the four Labour Codes effective, November 2025 (read as a search excerpt, not opened)' },
    { label: 'Movement dates, thinkers and cases named here are from the standard literature and were not re-opened for this note. Use them as further reading, and check a book before quoting it.' },
  ],
  beyond: {
    refer: [
      { what: 'Ghanshyam Shah, Social Movements in India: A Review of Literature', where: 'Your library', why: 'The best one-book survey of this whole unit.' },
      { what: 'Radha Kumar, The History of Doing', where: 'Your library', why: 'Depth on women\'s campaigns, with a timeline that notes cannot give in full.' },
      { what: 'Labour Codes text and rules', where: 'Ministry of Labour and Employment', why: 'Rules were pre-published on 30 December 2025. Check the current status before quoting.', url: 'https://www.labour.gov.in/' },
    ],
    current: [
      { issue: 'Labour Codes', link: 'Took effect on 21 November 2025. Use for debates on union rights and informal workers.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2192463&reg=48&lang=2' },
      { issue: 'Gig workers', link: 'The Code on Social Security defines gig and platform work. Aggregators are to contribute 1-2% of turnover, capped at 5% of what they pay such workers (PIB, 2025). A new test for informal worker mobilisation.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2192463&reg=48&lang=2' },
      { issue: 'Caste data', link: 'Census 2027 records caste in the enumeration phase due in February 2027. Expect sharper backward class and sub-classification debates.', source: 'Ministry of Home Affairs, as reported by Business Standard, January 2026', url: 'https://www.business-standard.com/india-news/census-2027-centre-notifies-first-phase-house-listing-april-1-126010701331_1.html' },
    ],
  },
}
