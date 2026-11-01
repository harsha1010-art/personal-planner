import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-06',
  summary: 'Three institutions in one sitting: power, the state and social movements; theories and forms of religion; and family, descent and patriarchy. Paper I, Units 7, 8 and 9.',
  minutes: 26,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'These three units ask how order is kept and contested. **Politics** deals with who rules, **religion** with shared meaning, and **kinship** with reproduction and inheritance. All three look "natural" to those inside them, and all three carry power. Every answer gains from showing that link.' },

    { t: 'h', text: 'Unit 7(a) and (b): power' },
    { t: 'p', text: '**Weber** defined power as the chance of carrying out one\'s will even against resistance. **Authority** is power seen as legitimate (see soc-04).' },
    { t: 'table', caption: 'Who holds power? Each theory answers differently.', head: ['Theory', 'Thinker and concept', 'Critique'], rows: [
      ['Classical elite', '**Pareto:** circulation of elites, lions and foxes. **Mosca:** the ruling class. **Michels** (1911): **iron law of oligarchy**', 'Treats the masses as passive'],
      ['Power elite', '**C. Wright Mills** (1956): corporate, military and political leaders form one interlocking elite', 'Dahl: he assumes unity rather than testing it'],
      ['Pluralist', '**Dahl** (Who Governs?, 1961): different groups win on different issues in New Haven', 'Bachrach and Baratz (1962): ignores **non-decisions**'],
      ['Marxist', 'The state serves the capitalist class. **Miliband** (personal ties) versus **Poulantzas** (structural role). **Gramsci:** **hegemony**, or rule through consent', 'Reduces power to class'],
      ['Functionalist', '**Parsons:** power is a society\'s capacity to reach goals, so it can grow (**variable-sum**), against the zero-sum view', 'Plays down domination'],
      ['Radical', '**Lukes** (1974): three dimensions, which are decision, non-decision and shaping wants', 'Hard to test "real interests"'],
      ['Post-structural', '**Foucault:** power is spread through discipline and knowledge, and it produces subjects', 'Little place for agency or the state'],
    ] },
    { t: 'compare', caption: 'Syllabus 7(b). In India, the line blurs: farm unions and caste bodies can also become parties.', columns: [
      { title: 'Pressure groups', items: ['Seek influence, not office', 'One interest or issue', 'FICCI, CII, AITUC, Bharatiya Kisan Union', '**Myron Weiner** (Politics of Scarcity, 1962)', '**Kochanek** on business lobbies'] },
      { title: 'Political parties', items: ['Seek office through elections', 'Many interests, a programme', '**Duverger:** cadre and mass parties', '**Kirchheimer:** catch-all parties', '**Kothari:** the **Congress system**; **Yogendra Yadav:** the second democratic upsurge'] },
    ] },
    { t: 'h3', text: 'Bureaucracy after Weber' },
    { t: 'table', head: ['Thinker', 'Addition to Weber', 'India use'], rows: [
      ['Merton (1940)', '**Goal displacement** and trained incapacity: the rule becomes the goal', 'Files and procedure over service'],
      ['Selznick (1949)', '**Cooptation** of local elites in the Tennessee Valley Authority', 'Local capture of development schemes'],
      ['Gouldner (1954)', 'Three patterns: mock, representative, punishment-centred', 'Rules that no one follows'],
      ['Blau (1955)', 'Informal ties can improve efficiency', 'Field officers\' discretion'],
      ['Crozier (1963)', 'Vicious circle of rigid rules; power lies in controlling uncertainty', 'Junior staff control access'],
    ] },
    { t: 'p', text: 'For India, use the **RTI Act 2005** and the role of the **MKSS** (Aruna Roy) as public checks on bureaucratic secrecy.' },

    { t: 'h', text: 'Unit 7(c): nation, state, citizenship' },
    { t: 'table', head: ['Term', 'Key concept', 'India link'], rows: [
      ['Nation', '**Anderson:** imagined community, through print capitalism. **Gellner:** industrial society makes nations. **Hobsbawm:** invented traditions. **A.D. Smith:** ethnic roots', 'Unity in diversity; regional identities'],
      ['State', '**Weber:** monopoly of legitimate force in a territory. Marx: an instrument of class', 'A.R. Desai on the capitalist path after 1947'],
      ['Citizenship', '**T.H. Marshall** (1950): civil, political, then social rights. Critics: this is the English path, and it ignores women and minorities', '**Niraja Jayal** on citizenship in India'],
      ['Democracy', '**Schumpeter:** elites compete for votes. **Pateman:** participatory democracy. **Ambedkar:** political democracy needs social democracy', '73rd and 74th Amendments'],
      ['Civil society', '**Tocqueville:** associations. **Gramsci:** the site of hegemony. **Putnam:** social capital. **Habermas:** public sphere', '**Partha Chatterjee:** the poor act in **political society**, not civil society'],
      ['Ideology', '**Marx:** ruling ideas. **Mannheim:** ideology and utopia. **Althusser:** ideological state apparatuses. **Bell:** end of ideology', 'Secularism, Hindutva, social justice'],
    ] },

    { t: 'h', text: 'Unit 7(d): protest and movements' },
    { t: 'p', text: 'A **protest** is an act of objection. An **agitation** is a sustained campaign on a demand. **Collective action** is any joint action for a shared end. A **social movement** is organised and lasting, with an ideology. A **revolution** seeks a rapid change in the state and the class structure.' },
    { t: 'timeline', caption: 'Theories of movements, in the order they appeared.', items: [
      { when: 'Smelser, 1962', what: '**Value-added model:** structural conduciveness, strain, generalised belief, precipitating factor, mobilisation, failed social control.' },
      { when: 'Davies, 1962; Gurr, 1970', what: '**Relative deprivation:** J-curve, then Why Men Rebel. Critique: deprivation is common, and movements are rare.' },
      { when: 'Olson, 1965', what: '**Free-rider problem:** why rational people may not join.' },
      { when: 'McCarthy and Zald, 1977', what: '**Resource mobilisation:** money, leaders and organisations decide success.' },
      { when: 'Tilly, 1978; McAdam, 1982', what: '**Political process:** openings in the political system matter.' },
      { when: 'Touraine, Melucci, Offe', what: '**New social movements:** identity, culture and quality of life, not class. Critique: not so new, since old movements too had identity.' },
    ] },
    { t: 'list', items: [
      '**Types (Aberle):** alternative, redemptive, reformative and transformative.',
      '**India (M.S.A. Rao):** reform, transformation and revolution. Also **T.K. Oommen** (charisma and institutions) and **Ghanshyam Shah** (classifying Indian movements).',
      '**Revolution:** Marx, class conflict. **Barrington Moore** (1966): agrarian class relations shape paths. **Skocpol** (1979): state breakdown and international pressure, not simply will.',
      '**Examples:** Chipko, Narmada Bachao Andolan, Dalit Panthers (1972), the anti-corruption movement (2011), the farmers\' protest (2020-21).',
    ] },

    { t: 'h', text: 'Unit 8: religion' },
    { t: 'table', caption: 'Unit 8(a). Durkheim, Marx and Weber are in soc-03 and soc-04, so only link them here.', head: ['Thinker', 'Concept', 'Critique'], rows: [
      ['Durkheim', 'Sacred and profane; collective effervescence; society worships itself', 'Generalises from Australia; plays down conflict'],
      ['Marx', 'Opium of the people; ideology', 'Religion also inspires revolt, such as liberation theology'],
      ['Weber', 'Protestant ethic; theodicy; world religions compared', 'Tawney; Singer on Indian industrialists'],
      ['Malinowski', 'Religion and magic relieve anxiety: Trobriand lagoon and open-sea fishing', 'Religion can create anxiety as well'],
      ['Geertz', 'Religion as a **cultural system** of symbols and moods', 'Asad: ignores power'],
      ['Berger', 'Sacred canopy gives meaning; pluralism weakens it', 'Later reversed: "desecularisation" (1999)'],
      ['Srinivas', 'Coorg study (1952): ritual, caste and social order', 'Mainly Hindu and upper-caste focus'],
    ] },
    { t: 'table', caption: 'Unit 8(b). These are the exact syllabus terms.', head: ['Term', 'Meaning', 'Example'], rows: [
      ['Animism', '**Tylor** (1871): belief in spirits, the earliest form in his evolutionism', 'Many tribal belief systems; Tylor\'s scheme is now rejected'],
      ['Monism', 'One ultimate reality. Not the same as monotheism, which holds one God', 'Advaita Vedanta'],
      ['Pluralism', 'Many faiths or paths coexist, and none has a monopoly. **Berger:** a market of faiths', 'India; Sufi and bhakti sharing of shrines'],
      ['Sect', '**Troeltsch**, **Weber:** a voluntary, strict group against the wider world, often breaks away. **Niebuhr:** sects become denominations', 'Kabir Panth, Lingayats in origin'],
      ['Cult', 'Loose, new, centred on a person or practice, often with little conflict over doctrine. **Wallis:** types of new religious movements', 'Godman followings; Sathya Sai (Babb)'],
    ] },
    { t: 'h3', text: 'Unit 8(c): religion in modern society' },
    { t: 'compare', caption: 'The secularisation debate. Use both columns, then India.', columns: [
      { title: 'Religion declines', items: ['**Bryan Wilson** (1966): loss of social significance', '**Berger** (1967): pluralism undermines belief', '**Weber:** disenchantment', '**Norris and Inglehart** (2004): security reduces need for religion'] },
      { title: 'Religion persists', items: ['**Casanova** (1994): religion returns to public life', '**Grace Davie:** believing without belonging', '**Stark and Bainbridge:** demand is constant', '**Berger** (1999): the world is as religious as ever'] },
    ] },
    { t: 'list', items: [
      '**India:** **T.N. Madan** (1987) and **Ashis Nandy** argue that secularism is alien to South Asian religions. **Rajeev Bhargava** defends **principled distance**. Srinivas used secularisation for ritual decline among educated urban groups.',
      '**Science and religion:** conflict thesis versus **Merton** (Puritanism aided English science). Kuhn shows that science too rests on shared paradigms.',
      '**Revivalism** tries to renew a faith by returning to roots. Arya Samaj and Deoband are colonial-era examples. **Fundamentalism** adds literal texts and political aims. Giddens: tradition defended in a traditional way. See **Marty and Appleby** (The Fundamentalism Project).',
      '**Communal violence:** **Varshney** (2002) shows that strong inter-community associations limit riots.',
    ] },

    { t: 'h', text: 'Unit 9: kinship' },
    { t: 'p', text: '**Family** is a kin group. **Household** is a group that shares residence and food. They can differ, which **A.M. Shah** showed for India (The Household Dimension of the Family in India, 1973). **I.P. Desai** (Mahuva study) measured jointness by obligation, not by residence.' },
    { t: 'table', head: ['Thinker', 'Concept', 'Critique'], rows: [
      ['Murdock (1949)', 'Nuclear family is universal; four functions: sexual, reproductive, economic, educational', '**Gough:** the Nayar case. Kibbutz too'],
      ['Parsons', 'Isolated nuclear family fits industry; two functions: primary socialisation and stabilising adults', '**Laslett:** small households before industry. **Michael Anderson:** kin ties aided workers in Preston'],
      ['Engels (1884)', 'Monogamy arises with private property; world-historic defeat of women', 'Thin evidence'],
      ['Goode (1963)', 'Spread of the conjugal family worldwide', 'Kapadia and Shah: Indian jointness adapts'],
      ['Giddens, Beck', 'Pure relationship; normal chaos of love', 'Class and gender still limit choice'],
    ] },
    { t: 'table', caption: 'Unit 9(a) and (b): types and forms. Note: polyandry is rare, with the Todas a classic case.', head: ['Basis', 'Forms'], rows: [
      ['Marriage', 'Monogamy; polygamy (polygyny, polyandry); endogamy, exogamy; hypergamy, hypogamy'],
      ['Residence', 'Patrilocal, matrilocal, neolocal, avunculocal'],
      ['Descent', 'Patrilineal, matrilineal (Nayar, Khasi, Garo), bilateral, double'],
      ['Size and structure', 'Nuclear, joint, extended'],
      ['Authority', 'Patriarchal; matrifocal'],
    ] },
    { t: 'compare', caption: 'Unit 9(c): the two great schools. Dumont applied alliance to South India, while Karve mapped north and south.', columns: [
      { title: 'Descent theory', items: ['**Radcliffe-Brown, Fortes, Evans-Pritchard**', 'Lineage as a corporate group', 'The Nuer: segmentary lineages', 'Best fit: African stateless groups'] },
      { title: 'Alliance theory', items: ['**Levi-Strauss** (1949)', 'Incest taboo creates exchange between groups', 'Restricted and generalised exchange', 'Best fit: cross-cousin marriage systems'] },
    ] },
    { t: 'h3', text: 'Unit 9(d) and (e): patriarchy and trends' },
    { t: 'list', items: [
      '**Patriarchy:** **Millett** (Sexual Politics), **Lerner** (historical origins), **Walby** (six structures: paid work, household, culture, sexuality, violence, state). Walby separates **private** from **public** patriarchy.',
      '**Sexual division of labour:** **Parsons:** instrumental and expressive roles. **Oakley** (1974): housewife role is social, not natural. **Hochschild:** second shift. **Boserup** (1970): colonial and modern farming pushed women out. **Mies:** housewifisation.',
      '**Trends:** smaller households, later marriage, more divorce and single living, live-in couples, ageing, dual earners, migration and transnational families. In India, the **Hindu Succession Amendment 2005** and **Vineeta Sharma** (2020) gave daughters coparcenary rights. **Supriyo** (2023) refused to recognise same-sex marriage, leaving it to the legislature.',
    ] },
    { t: 'note', kind: 'trap', title: 'Common errors', text: 'Patrilineal is about descent, and patrilocal is about residence. Matrilineal is not matriarchal: men such as the mother\'s brother often held authority among the Nayars. Hypergamy means a woman marrying up. **Iron law of oligarchy** is Michels, and **iron cage** is Weber.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Compare elite and pluralist views, using an Indian case. Test whether new social movements theory fits Indian farmers or Dalits. Take up whether secularisation applies to India, using Madan and Bhargava. Ask whether the joint family has really declined, using Shah and Desai. Always bring in gender for family questions.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Mills: power elite. Dahl: pluralism. Lukes: three dimensions. Michels: oligarchy.',
      'Marshall: civil, political, social. Anderson: imagined community.',
      'Smelser: value-added. McCarthy and Zald: resources. Aberle: four types.',
      'Troeltsch: church and sect. Niebuhr: denomination. Tylor: animism.',
      'Murdock: nuclear universal. Levi-Strauss: alliance. A.M. Shah: household.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper I, Units 7, 8 and 9, from your upsc-syllabus.pdf (page 74)' },
    { label: 'Rau\'s IAS Compass, Uttarakhand UCC and live-in relationships', url: 'https://compass.rauias.com/current-affairs/ucc-regulate-live-in-relationships-uttarakhand/' },
    { label: 'Reference for further reading, not checked line by line: Haralambos and Holborn, Sociology: Themes and Perspectives; Madan, Secularism in Its Place; A.M. Shah, The Household Dimension of the Family in India' },
  ],
  beyond: {
    refer: [
      { what: 'NCERT Class XI and XII sociology', where: 'NCERT textbook site', why: 'Clear Indian examples of family and movements, for use in answers.', url: 'https://ncert.nic.in/textbook.php' },
      { what: 'Latest family and fertility data', where: 'National Family Health Survey', why: 'Numbers on household, marriage age and fertility change with each round.', url: 'https://www.nfhsiips.in/' },
    ],
    current: [
      { issue: 'Uttarakhand Uniform Civil Code', link: 'In effect from 27 January 2025, with registration of live-in relationships. Connects to the state, family change and personal law.', source: 'Rau\'s IAS Compass', url: 'https://compass.rauias.com/current-affairs/ucc-regulate-live-in-relationships-uttarakhand/' },
    ],
  },
}
