import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-05',
  summary: 'Who gets what and why: inequality concepts, the three theories of stratification, class, status, gender, ethnicity and race, social mobility, and the organisation of work. Paper I, Units 5 and 6.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: '**Social stratification** is the ranking of groups in a lasting, socially patterned way. It differs from individual difference: it is passed across generations, backed by beliefs, and found in some form in most societies. Unit 5 asks how inequality is produced and whether people can move. Unit 6 asks how work organises society. The two meet in one question: does your position at work decide your life chances?' },

    { t: 'h', text: 'Unit 5(a): the five concepts' },
    { t: 'table', caption: 'Each syllabus word needs a definition, a thinker and an Indian example.', head: ['Concept', 'Key idea and thinker', 'India'], rows: [
      ['Equality', '**Bryan Turner** (1986) separates equality of being, opportunity, condition and outcome. **Beteille** warns that equality of opportunity and of result can conflict', 'Articles 14-17; reservation debate'],
      ['Inequality', '**Rousseau** (1755): natural versus moral or political inequality. **Beteille** (Inequality among Men, 1977): the ranking of people is shaped by values', 'Caste and gender gaps in schooling and wages'],
      ['Hierarchy', '**Dumont** (Homo Hierarchicus): hierarchy is a ranking of values, in which the higher encompasses the lower', 'Purity and pollution'],
      ['Exclusion', 'Term spread by **Rene Lenoir** in France (1974). **Sen** (2000) separates constitutive exclusion (bad in itself) from instrumental exclusion (causes other losses)', 'Untouchability; denial of housing to Muslims or Dalits'],
      ['Poverty', 'Absolute: **Rowntree** (York study, 1901). Relative: **Townsend** (1979). Capability failure and entitlements: **Sen**. Culture of poverty: **Oscar Lewis**', 'Official lines for 2011-12: Tendulkar 21.9%, Rangarajan 29.5%. NITI Aayog also uses a multidimensional index'],
      ['Deprivation', 'Relative deprivation: **Stouffer** (The American Soldier, 1949), then **Runciman** (1966). People judge their position by a reference group', 'Protest by landed groups such as Patidars and Marathas'],
    ] },
    { t: 'note', kind: 'trap', title: 'Culture of poverty is contested', text: 'Lewis said that the poor develop habits that pass on poverty. Critics such as Charles Valentine argue this blames the poor, and that structure explains the behaviour. Use the critique in any answer. In India, the **NCEUS** (Arjun Sengupta, 2007) showed that poverty is tied to informal work, not to attitude.' },

    { t: 'h', text: 'Unit 5(b): three theories' },
    { t: 'table', head: ['', 'Structural-functionalist', 'Marxist', 'Weberian'], rows: [
      ['Thinkers', '**Davis and Moore** (1945); **Parsons** (1940)', 'Marx; later Dahrendorf, Wright, Poulantzas', 'Weber; later Parkin, Goldthorpe, Lockwood'],
      ['Basis', 'Functional importance and scarce talent; shared values', 'Ownership of the means of production', 'Class, status and party'],
      ['Stratification is', 'Necessary and useful', 'Exploitative and removable', 'Many-sided and not reducible to one cause'],
      ['Class means', 'A rank in a value scale', 'A relation of exploitation', 'Shared market situation and life chances'],
      ['Future', 'Stays, as a motive system', 'Polarisation, then classless society', 'Rationalisation; many middle groups'],
    ] },
    { t: 'compare', caption: 'The Davis-Moore debate is the most useful critique to learn. Melvin Tumin replied in 1953.', columns: [
      { title: 'Davis and Moore', items: ['Some positions matter more', 'Talent is scarce and training is costly', 'High rewards draw talent to them', 'So inequality is unconscious and functional'] },
      { title: 'Tumin\'s critique', items: ['Functional importance is hard to measure', 'Elites block talent, so talent stays hidden', 'Training is not always a sacrifice', 'Stratification breeds hostility, so it can be dysfunctional'] },
    ] },
    { t: 'list', items: [
      '**Dahrendorf** (Class and Class Conflict in Industrial Society, 1959): authority, not ownership, now divides groups, since managers have replaced owners.',
      '**Erik Olin Wright:** managers and supervisors sit in **contradictory class locations**.',
      '**Parkin** (1979): classes form through **social closure**, using **exclusion** from above and **usurpation** from below. This fits caste well.',
      '**Lockwood** (The Blackcoated Worker, 1958) and **Goldthorpe and Lockwood** (The Affluent Worker, 1968-69) rejected the claim of **embourgeoisement**, the idea that well-paid workers become middle class.',
      '**Braverman** (1974) argued the opposite: routine white-collar work leads to **proletarianisation**.',
      '**Bourdieu** (Distinction, 1979): class is also reproduced through **cultural, social and symbolic capital**. Taste is a marker of class.',
    ] },
    { t: 'note', kind: 'trap', title: 'Do not swap these', text: '**Status group** is Weber, based on honour and lifestyle. **Class in itself** is Marx. **Embourgeoisement** was criticised, not proposed, by Goldthorpe and Lockwood. **Contradictory class location** is Wright, while **authority classes** are Dahrendorf.' },

    { t: 'h', text: 'Unit 5(c): dimensions' },
    { t: 'table', caption: 'Inequalities overlap. Kimberle Crenshaw (1989) named this intersectionality.', head: ['Dimension', 'Key concepts', 'Critique or India link'], rows: [
      ['Class', 'Marx: relation to production. Weber: market position. Goldthorpe: work and market situation', 'Indian class is intertwined with caste. See Beteille, Caste, Class and Power (1965)'],
      ['Status group', 'Weber: **honour, lifestyle, restricted marriage and dining**. Caste is his closed status group', 'Dumont: status is primary, and encompasses power. Beteille: status, class and power have separated'],
      ['Gender', '**Oakley** (1972): sex versus gender. **de Beauvoir**: woman as Other. **Walby** (1990): six structures of patriarchy. **Butler** (1990): gender as performance', '**Leela Dube** on seed and earth. **Uma Chakravarti** on Brahmanical patriarchy. **Sharmila Rege** on Dalit feminist standpoint. **Bina Agarwal** on land rights'],
      ['Ethnicity', '**Barth** (1969): the boundary matters, not the cultural content. **Geertz**: primordial ties. **Paul Brass**: elites use identity as an instrument', 'Manipur violence since May 2023; Bezbaruah Committee (2014) on discrimination against north-east people'],
      ['Race', '**Du Bois:** colour line, double consciousness. **Oliver Cox** (1948): race grew from capitalism. **W.J. Wilson** (1978): class now matters more than race for black Americans', '**Berreman** (1960) compared caste and US race. Beteille argued in 2001, around the Durban race conference, that caste is not race'],
    ] },

    { t: 'h', text: 'Unit 5(d): social mobility' },
    { t: 'p', text: '**Sorokin** (Social Mobility, 1927) laid the base: **horizontal** versus **vertical** mobility, with channels such as the army, church, school and family. **Open systems** allow achievement, while **closed systems** fix people by ascription. Real societies lie between the two.' },
    { t: 'table', head: ['Type', 'Meaning', 'Example'], rows: [
      ['Intergenerational', 'Change between parent and child', 'A farmer\'s daughter who becomes a doctor'],
      ['Intragenerational', 'Change within one career', 'A clerk who becomes a manager'],
      ['Structural', 'Caused by a change in the job structure', 'Growth of IT and service jobs after 1991'],
      ['Exchange (circulation)', 'People swap places, with the structure unchanged', 'Few cases in a stable elite'],
      ['Absolute and relative', 'Absolute: number who moved. Relative: chances compared with other classes', 'Goldthorpe stresses relative rates'],
      ['Contest and sponsored', '**Ralph Turner** (1960): open race versus early selection by elites', 'US versus older British schooling'],
      ['Group mobility', 'A whole group moves, not one person', '**Sanskritisation** (Srinivas); Nadars of Tamil Nadu'],
    ] },
    { t: 'flow', caption: 'Sources and causes of mobility. Each works differently for different groups.', steps: [
      { title: 'Structure', sub: 'New jobs through industry and services' },
      { title: 'Education', sub: 'Merit credentials; Blau and Duncan (1967)' },
      { title: 'State', sub: 'Reservation, land reform, law' },
      { title: 'Migration', sub: 'Remittances; Gulf migrants of Kerala' },
      { title: 'Mobilisation', sub: 'Caste associations, Dalit and backward-class politics' },
    ] },
    { t: 'list', items: [
      '**Lipset and Bendix** (1959): industrial societies have broadly similar total rates of mobility.',
      '**Erikson and Goldthorpe** (The Constant Flux, 1992): relative rates stay rather stable even as structures change.',
      '**India:** Srinivas saw Sanskritisation as **positional change**, not structural change. Caste rank can move while the system remains. Reservation has built a Dalit middle class, but it is small and meets social barriers. **Thorat and Attewell** (2007) found job callbacks differed by caste name for equally qualified applicants.',
    ] },

    { t: 'h', text: 'Unit 6: work and economic life' },
    { t: 'table', caption: 'Unit 6(a). Use Marx\'s sequence, but do not suggest every society passed through it.', head: ['', 'Slave society', 'Feudal society', 'Industrial or capitalist society'], rows: [
      ['Worker', 'Owned as property', 'Serf bound to the land', 'Formally free wage worker'],
      ['Surplus taken by', 'Direct force', 'Rent, labour dues', 'Surplus value through the wage'],
      ['Tie', 'Personal, total', 'Personal, with mutual obligations', 'Contract, market'],
      ['Thinkers', '**Orlando Patterson:** slavery as social death', '**Marc Bloch** (Feudal Society)', 'Marx, Durkheim, Weber, Taylor'],
      ['Indian parallel', 'Debt bondage is the nearest modern form; it is not the same as chattel slavery', '**Jajmani** (Wiser, 1936); Beidelman called it exploitative', 'Plantations, mills, IT, gig platforms'],
    ] },
    { t: 'timeline', caption: 'How the study of industrial work developed.', items: [
      { when: '1911', what: '**Taylor:** scientific management, or splitting tasks and timing them.' },
      { when: '1913 onward', what: '**Fordism:** the assembly line and mass production.' },
      { when: '1924-1932', what: '**Hawthorne studies (Mayo, Roethlisberger and Dickson):** informal groups shape output.' },
      { when: '1964', what: '**Blauner:** alienation varies by technology, and is highest on the assembly line. His curve is an inverted U.' },
      { when: '1974', what: '**Braverman:** monopoly capital **deskills** labour.' },
      { when: '1979', what: '**Burawoy:** workers consent through shop-floor games.' },
      { when: '1983', what: '**Hochschild:** **emotional labour** in service jobs.' },
      { when: '1984', what: '**Piore and Sabel:** flexible specialisation, or post-Fordism.' },
      { when: '2011', what: '**Guy Standing:** the **precariat**.' },
    ] },
    { t: 'h3', text: 'Unit 6(b): formal and informal organisation' },
    { t: 'compare', caption: 'The syllabus phrase has two meanings. Write about both.', columns: [
      { title: 'Inside the firm', items: ['**Formal:** Weber\'s rules, offices, hierarchy', '**Informal:** friendships, norms, output limits', 'Mayo and the Hawthorne studies', '**Blau** (1955): informal ties can raise efficiency'] },
      { title: 'In the economy', items: ['**Formal sector:** contract and protection', '**Informal sector:** term from **Keith Hart**\'s Ghana study (published 1973); the ILO\'s Kenya report (1972) spread it', 'NCEUS (2007): over nine-tenths of Indian workers were informally employed', '**Breman:** footloose labour'] },
    ] },
    { t: 'h3', text: 'Unit 6(c): labour and society' },
    { t: 'list', items: [
      '**Labour as a social relation:** **Polanyi** (1944) calls labour a **fictitious commodity**, since it cannot be separated from people. **E.P. Thompson** (1967) showed how factories imposed clock time.',
      '**Gender:** **Maria Mies** (The Lacemakers of Narsapur, 1982) described women\'s home-based work, treated as leisure. **SEWA** (Ela Bhatt, 1972) organised such workers.',
      '**Dual labour force:** **Holmstrom** described organised workers as living in a protected **citadel**, surrounded by the unprotected.',
      '**Unions:** the Bombay textile strike of 1982 under Datta Samant marked the decline of organised textile labour, and work moved to informal units.',
      '**Child labour:** **Myron Weiner** (The Child and the State in India, 1991) argued that Indian elites accepted child work because of beliefs about social order. Link to compulsory schooling.',
    ] },
    { t: 'note', kind: 'recent', title: 'Gig work and the Labour Codes', text: 'The four Labour Codes took effect on **21 November 2025**, and consolidate 29 labour laws. They define gig and platform work in law for the first time. Use this to test Standing and Braverman: gig workers have legal recognition, yet ratings and algorithms keep control. As of November 2026, check the latest rules and state action.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Compare the three theories, and say which fits India best. Argue that caste shows Weber\'s closure better than Davis-Moore. Discuss whether caste and class are converging. Take up relative deprivation and new reservation demands. For Unit 6, trace whether informal work is a survival of the past or a product of capitalism. Open with a thinker, give a critique, and end with an Indian case.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Davis and Moore: functional necessity. Tumin: reply.',
      'Weber: class, status, party. Parkin: closure.',
      'Dahrendorf: authority. Wright: contradictory locations.',
      'Sorokin: horizontal and vertical. Turner: contest and sponsored.',
      'Constant Flux: Erikson and Goldthorpe.',
      'Braverman: deskilling. Hochschild: emotional labour. Hart: informal sector.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper I, Units 5 and 6, from your upsc-syllabus.pdf (page 74)' },
    { label: 'SCC Online, Four Labour Codes, 21 November 2025', url: 'https://www.scconline.com/blog/post/2025/11/21/key-phrase-four-labour-codes/' },
    { label: 'Reference for further reading, not checked line by line: Haralambos and Holborn, Sociology: Themes and Perspectives; Giddens, Sociology; Beteille, Inequality among Men' },
  ],
  beyond: {
    refer: [
      { what: 'Periodic Labour Force Survey', where: 'Ministry of Statistics (MoSPI)', why: 'Latest figures on informal work, women workers and sector shares, which change each year.', url: 'https://www.mospi.gov.in/' },
      { what: 'Original debate', where: 'Davis and Moore (1945), Tumin (1953), American Sociological Review', why: 'Short, and worth reading for depth on the one debate that recurs.' },
    ],
    current: [
      { issue: 'Labour Codes in force', link: 'Effective 21 November 2025, with first legal definitions for gig and platform work. Connects to the informal sector and to the precariat.', source: 'SCC Online', url: 'https://www.scconline.com/blog/post/2025/11/21/key-phrase-four-labour-codes/' },
    ],
  },
}
