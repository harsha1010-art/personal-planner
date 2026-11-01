import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-07',
  summary: 'Theories of social change, modernity and globalisation, development and dependency, education, science and technology, plus the three remaining named thinkers: Parsons, Merton and G.H. Mead. Paper I, Unit 10 and Unit 4(d) to (f).',
  minutes: 26,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: '**Social change** means lasting change in social structure and relations, not just events. Sociology was born asking why Europe changed. Unit 10 asks what drives change, who benefits, and whether "development" means the same everywhere. This note also covers **Parsons, Merton and G.H. Mead** (Unit 4), because their ideas on order and the self frame many change debates.' },

    { t: 'h', text: 'Unit 10(a): theories of change' },
    { t: 'table', head: ['Approach', 'Thinkers and concepts', 'Critique'], rows: [
      ['Evolutionary', '**Comte:** three stages. **Spencer:** simple to complex. **Durkheim:** mechanical to organic', 'Eurocentric and one-directional'],
      ['Neo-evolutionary', '**Parsons:** differentiation, adaptive upgrading, inclusion, value generalisation. **Lenski:** technology and power', 'Treats the West as the end point'],
      ['Cyclical', '**Spengler:** rise and decline of cultures. **Toynbee:** challenge and response. **Pareto:** elite circulation. **Sorokin:** ideational, sensate and idealistic cultures', 'Hard to test'],
      ['Conflict', '**Marx:** forces outgrow relations. **Dahrendorf:** authority conflict. **Coser:** conflict can integrate', 'Economic bias; class is not the only source'],
      ['Ideas and culture', '**Weber:** rationalisation; ideas as "switchmen"', 'Marxists: ideas follow interests'],
      ['Technological', '**Ogburn** (1922): **cultural lag**, as material culture changes faster than norms', 'Technological determinism'],
    ] },

    { t: 'h', text: 'Modernity and globalisation' },
    { t: 'table', caption: 'Modernity theorists differ on whether we have moved beyond it.', head: ['Thinker', 'Concept', 'Meaning'], rows: [
      ['Giddens', 'Time-space distanciation, disembedding, reflexivity', 'Social life is lifted out of local settings; he calls this late modernity, not postmodernity'],
      ['Beck (1986)', 'Risk society', 'Modernity creates its own hazards, which are shared unevenly'],
      ['Bauman (2000)', 'Liquid modernity', 'Fluid bonds and insecure identities'],
      ['Habermas', 'Unfinished project', 'Defends reason; system colonises the lifeworld'],
      ['Lyotard (1979)', 'Postmodern condition', 'Distrust of grand narratives'],
      ['Eisenstadt (2000)', 'Multiple modernities', 'Modernity takes many cultural forms, not one Western form'],
    ] },
    { t: 'compare', caption: 'The three positions on globalisation, from Held and McGrew\'s summary. Add glocalisation as a fourth point.', columns: [
      { title: 'Hyperglobalist', items: ['Ohmae', 'Nation-state declines', 'A borderless market'] },
      { title: 'Sceptic', items: ['Hirst and Thompson', 'Not new; just more trade', 'States are still strong'] },
      { title: 'Transformationalist', items: ['Giddens, Held', 'Real but uneven', 'States and identities are reshaped'] },
    ] },
    { t: 'list', items: [
      '**Robertson:** **glocalisation**, in which the global and the local shape each other.',
      '**Appadurai** (1996): five **scapes**: ethnoscapes, mediascapes, technoscapes, financescapes, ideoscapes.',
      '**Castells:** the network society. **Harvey:** time-space compression. **Ritzer:** McDonaldisation. **Stiglitz:** critique of global institutions.',
      '**India:** Carol Upadhya on IT professionals (Reengineering India, 2016). Reena Patel on women in night-shift call centres. Liberalisation since 1991 widened a new middle class, while most workers stayed informal.',
    ] },
    { t: 'note', kind: 'trap', title: 'Do not swap these', text: '**Distanciation** is Giddens, while **compression** is Harvey. **Risk society** is Beck. **Westernisation** is Srinivas\'s term for cultural change under British rule, and it is not the same as modernisation, which is a wider process and value-neutral in principle.' },

    { t: 'h', text: 'Unit 10(b): development and dependency' },
    { t: 'flow', caption: 'Rostow, The Stages of Economic Growth (1960). The classic modernisation model, and the main target of dependency theory.', steps: [
      { title: 'Traditional society' },
      { title: 'Preconditions for take-off' },
      { title: 'Take-off' },
      { title: 'Drive to maturity' },
      { title: 'High mass consumption' },
    ] },
    { t: 'table', head: ['School', 'Thinkers', 'Core argument', 'Critique'], rows: [
      ['Modernisation', 'Rostow; **Lerner** (empathy); **Inkeles and Smith** (modern man); Parsons', 'Tradition blocks growth; the West shows the way', 'Ethnocentric; ignores colonialism'],
      ['Dependency', '**Prebisch** (centre and periphery); **A.G. Frank** (development of underdevelopment); **Cardoso and Faletto** (dependent development); Dos Santos', 'Underdevelopment comes from incorporation into world capitalism', 'East Asia grew; internal class is ignored'],
      ['World-system', '**Wallerstein** (1974): core, semi-periphery, periphery', 'Whole capitalist world is the unit of study', 'Too economic; little on culture'],
      ['Human development', '**Sen:** capabilities; **Mahbub ul Haq:** HDI (1990)', 'Development as expanding freedoms', 'Hard to measure fully'],
      ['Post-development', '**Escobar**, **Esteva**; in India, **Shiva**', 'Development is a Western discourse of control', 'May romanticise the local'],
    ] },
    { t: 'p', text: '**India:** Dadabhai Naoroji\'s **drain theory** came decades before dependency theory. **S.C. Dube** (Modernization and Development, 1988) sought alternative paths. Gandhi\'s **Hind Swaraj** (1909) is an early critique of modern civilisation. **Displacement** by dams and mining shows who pays for development. See Paper II on Narmada.' },

    { t: 'h', text: 'Unit 10(c): agents of change' },
    { t: 'wheel', caption: 'An answer should use several, and show their interaction. Law alone rarely changes practice.', center: 'Agents of change', spokes: ['State and law', 'Social movements', 'Education', 'Technology', 'Market', 'Media', 'Leaders and charisma', 'Demography and migration'] },

    { t: 'h', text: 'Unit 10(d): education and change' },
    { t: 'table', caption: 'Does schooling transform society, or reproduce it?', head: ['View', 'Thinker', 'Concept'], rows: [
      ['Integration', '**Durkheim**', 'Moral education and solidarity'],
      ['Functional bridge', '**Parsons** (The School Class as a Social System, 1959)', 'From particularism at home to universalism in school'],
      ['Marxist', '**Bowles and Gintis** (1976)', '**Correspondence principle:** school mirrors workplace'],
      ['Reproduction', '**Bourdieu and Passeron** (1970)', '**Cultural capital**; symbolic violence'],
      ['Resistance', '**Paul Willis** (Learning to Labour, 1977)', 'Working-class "lads" reject school, so they enter manual work'],
      ['Language', '**Bernstein**', 'Restricted and elaborated codes'],
      ['Liberation', '**Freire** (banking education); **Illich** (deschooling)', 'Critical consciousness; against institutional schooling'],
    ] },
    { t: 'p', text: '**India:** **Phule** and **Ambedkar** saw education as the road to emancipation. The **Kothari Commission** (1964-66) spoke of education and national development, followed by **RTE 2009** and **NEP 2020**. Yet private and government schools form a hierarchy, and **Nambissan** documented discrimination against Dalit children. **Jeffrey, Jeffery and Jeffery** (Degrees without Freedom?, 2008) showed Dalit and Muslim young men gaining degrees without gaining secure jobs.' },

    { t: 'h', text: 'Unit 10(e): science, technology and change' },
    { t: 'list', items: [
      '**Merton:** the Puritan ethos helped English science (1938). His norms of science (1942) are communalism, universalism, disinterestedness and organised scepticism.',
      '**Kuhn:** paradigms. **Latour and Woolgar** (Laboratory Life, 1979): science is socially built. **Latour:** actor-network theory.',
      '**Bell** (1973): post-industrial society, led by knowledge. **Castells:** informational capitalism. **Zuboff:** surveillance capitalism.',
      '**India:** Green Revolution (soc-09). **Bhopal** (1984) fits Beck\'s risk society. **Ashis Nandy** and **Shiv Visvanathan** question the state\'s faith in science. Digital public systems widen access, but also raise questions of exclusion and the digital divide. **Article 51A(h)** makes scientific temper a duty.',
    ] },

    { t: 'h', text: 'Unit 4(d): Talcott Parsons' },
    { t: 'p', text: 'Parsons (1902-1979) tried to build one general theory of action. **The Structure of Social Action** (1937) gave a **voluntaristic** theory: actors choose ends, within norms and conditions. **The Social System** (1951) asked how order is possible. A social system is a set of actors interacting according to shared norms and roles. Values are **internalised** through socialisation, and **institutionalised** in roles.' },
    { t: 'wheel', caption: 'AGIL: the four functional needs of any system, with the main institution for each.', center: 'AGIL', spokes: ['Adaptation: economy', 'Goal attainment: polity', 'Integration: law and community', 'Latency: family, school, religion'] },
    { t: 'table', caption: 'Pattern variables: five choices that every actor faces. The first option in each pair tends to be traditional.', head: ['Traditional', 'Modern', 'Indian example'], rows: [
      ['Affectivity', 'Affective neutrality', 'Parent versus a judge'],
      ['Collectivity orientation', 'Self orientation', 'Duty to clan versus private profit (this is the least neat pair)'],
      ['Particularism', 'Universalism', 'Jobs for kin versus an open exam'],
      ['Ascription', 'Achievement', 'Caste status versus a UPSC rank'],
      ['Diffuseness', 'Specificity', 'A family tie versus a contract'],
    ] },
    { t: 'list', items: [
      '**Critique:** **Mills** called it "grand theory". **Dahrendorf** (Out of Utopia, 1958) said it cannot explain conflict. **Lockwood** said it neglects material interest. **Dennis Wrong** (1961) attacked the **oversocialised** view of people. **Gouldner** (1970) saw it as a conservative ideology.',
      '**India:** **Milton Singer** found that Madras industrialists practised **compartmentalisation**, keeping office and home norms apart. So the pairs are not a simple line from tradition to modernity.',
    ] },

    { t: 'h', text: 'Unit 4(e): Robert K. Merton' },
    { t: 'p', text: 'Merton (1910-2003) wrote **Social Theory and Social Structure** (1949), and asked for **theories of the middle range**, against Parsons\'s grand scheme. He rejected three functionalist postulates: **functional unity**, **universal functionalism** and **indispensability**, and he added **dysfunction**.' },
    { t: 'compare', caption: 'Merton\'s own examples: the Hopi rain ceremony (manifest: rain; latent: group unity) and Veblen\'s conspicuous consumption.', columns: [
      { title: 'Manifest function', items: ['Intended and recognised', 'Reserved seats for women in panchayats: greater representation'] },
      { title: 'Latent function', items: ['Unintended and unrecognised', 'Women\'s reservation: new local networks and confidence', 'Dysfunction: proxy rule by husbands, the "sarpanch pati"'] },
    ] },
    { t: 'table', caption: 'Social Structure and Anomie (1938). Deviance arises when culture sets goals that structure blocks. + means accepts, - means rejects.', head: ['Adaptation', 'Goals', 'Means', 'Example'], rows: [
      ['Conformity', '+', '+', 'Honest exam candidate'],
      ['Innovation', '+', '-', 'Paper leak, white-collar crime'],
      ['Ritualism', '-', '+', 'Clerk who follows rules with no ambition'],
      ['Retreatism', '-', '-', 'Addict or dropout'],
      ['Rebellion', 'New goals', 'New means', 'Naxalite'],
    ] },
    { t: 'list', items: [
      '**Reference groups:** term from **Herbert Hyman** (1942). **Merton and Alice Kitt** (1950) developed it from The American Soldier. People use groups they do not belong to as a standard. This explains **relative deprivation** and **anticipatory socialisation**. **Sanskritisation** is a clear Indian case, as a lower caste copies a higher one.',
      '**Critique:** **Taylor, Walton and Young** say that the anomie model assumes shared values and ignores who makes the rules. **Cloward and Ohlin** add illegitimate opportunity. Durkheim\'s anomie is normlessness, while Merton\'s is a gap between goals and means.',
      '**Also Merton:** self-fulfilling prophecy; goal displacement in bureaucracy.',
    ] },

    { t: 'h', text: 'Unit 4(f): G.H. Mead, self and identity' },
    { t: 'p', text: 'George Herbert Mead (1863-1931) taught at Chicago. **Mind, Self and Society** (1934) was published after his death from students\' notes. The **self** is not inborn. It arises in social interaction, through **significant symbols** and **taking the role of the other**.' },
    { t: 'flow', caption: 'How the self develops.', steps: [
      { title: 'Preparatory', sub: 'Imitates without meaning' },
      { title: 'Play', sub: 'Takes on one role at a time: mother, teacher' },
      { title: 'Game', sub: 'Holds many roles at once, under rules' },
      { title: 'Generalised other', sub: 'Takes in the view of the whole community' },
    ] },
    { t: 'compare', columns: [
      { title: 'The "I"', items: ['Spontaneous, creative response', 'Source of change', 'Known only after the act'] },
      { title: 'The "Me"', items: ['Organised attitudes of others', 'Source of social control', 'The internalised community'] },
    ] },
    { t: 'list', items: [
      '**Followers:** **Blumer** coined **symbolic interactionism** (1937). **Goffman:** dramaturgy (1959) and stigma (1963).',
      '**Critique:** weak on power and structure; assumes a single shared "generalised other"; neglects emotion and the unconscious.',
      '**India:** a Dalit child learns a stigmatised self from others\' treatment. **Gopal Guru** on humiliation and the shift from "Harijan" to "Dalit" show identity being remade. **Alan Roland** described a more **familial self** in India.',
    ] },
    { t: 'note', kind: 'trap', title: 'Which Mead?', text: 'Unit 4(f) is **George Herbert Mead**. **Margaret Mead** (culture and personality) is an anthropologist. Also, the **looking-glass self** belongs to **Cooley**, not Mead, and Mead himself never used the term "symbolic interactionism".' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Compare modernisation and dependency, with India as a test. Ask whether education reproduces inequality or removes it. Apply pattern variables to Indian society. Apply Merton\'s anomie to exam cheating or corruption. Use the HDI data to show that growth is not the same as development. Show how Mead explains Dalit identity, and where he falls short.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Ogburn: cultural lag. Sorokin: ideational, sensate. Toynbee: challenge and response.',
      'Frank: development of underdevelopment. Wallerstein: core and periphery. Sen: capabilities.',
      'Bowles and Gintis: correspondence. Bourdieu: cultural capital. Willis: lads.',
      'Parsons: AGIL, five pattern variables. Merton: five adaptations, middle range.',
      'G.H. Mead: I and me, generalised other. Cooley: looking-glass self.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper I, Units 4 and 10, from your upsc-syllabus.pdf (pages 73-74)' },
    { label: 'The Tribune, India ranks 130 out of 193 countries, Human Development Report 2025', url: 'https://www.tribuneindia.com/news/world/indias-human-development-continues-to-make-progress-ranks-130-out-of-193-countries' },
    { label: 'Reference for further reading, not checked line by line: Ritzer, Sociological Theory; Haralambos and Holborn; Merton, Social Theory and Social Structure; Mead, Mind, Self and Society' },
  ],
  beyond: {
    refer: [
      { what: 'Latest Human Development Report', where: 'UNDP', why: 'Rank and value change with each report.', url: 'https://hdr.undp.org/' },
      { what: 'Merton on deviance and manifest functions', where: 'Social Theory and Social Structure, early chapters', why: 'Worth reading at source, since it is the most tested of these thinkers.' },
    ],
    current: [
      { issue: 'Human development', link: 'HDR 2025 (May 2025): India ranks 130 of 193, with an HDI value of 0.685 for 2023. Connects to Sen and to the gap between growth and development.', source: 'The Tribune, reporting UNDP', url: 'https://www.tribuneindia.com/news/world/indias-human-development-continues-to-make-progress-ranks-130-out-of-193-countries' },
    ],
  },
}
