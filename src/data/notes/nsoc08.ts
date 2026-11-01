import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-08',
  summary: 'How Indian society has been studied (Ghurye, Srinivas, Desai and their critics), and what colonial rule did to it: nationalism, the modernisation of tradition, protest and social reform. Paper II, Section A.',
  minutes: 22,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Paper II begins with a question about method: **how do we know Indian society?** From texts, from fieldwork, or from class analysis? Each answer sees a different India. Learn these perspectives well, since you can use them in every Paper II answer. The second half shows how colonial rule changed Indian society, and how Indians responded.' },

    { t: 'h', text: 'A(i): three perspectives compared' },
    { t: 'table', caption: 'The core table of Paper II. Each row can open an answer.', head: ['', 'Indology: Ghurye', 'Structural-functionalism: Srinivas', 'Marxism: A.R. Desai'], rows: [
      ['Source', 'Sacred texts, history, with census and ethnography', 'Intensive fieldwork in one village', 'History, class relations, political economy'],
      ['Key question', 'What are the roots and unity of Hindu civilisation?', 'How do institutions work and fit together?', 'Which classes gain, and how does change come?'],
      ['Unit of study', 'Civilisation, caste, tribe', 'Village, caste, ritual', 'Mode of production, state, class'],
      ['View of change', 'Continuity of tradition', 'Gradual adaptation', 'Conflict and contradiction'],
      ['Main criticism', 'Textual, upper-caste view', 'Static; plays down conflict', 'Economic determinism; neglects caste and gender'],
    ] },

    { t: 'h3', text: 'G.S. Ghurye (1893-1983) and Indology' },
    { t: 'p', text: '**Indology** studies India through its classical texts and languages. Colonial scholars such as William Jones and Max Muller began it. Ghurye studied under **W.H.R. Rivers** at Cambridge, led the Bombay department from 1924, and founded the **Indian Sociological Society** (1951) and its journal **Sociological Bulletin**.' },
    { t: 'list', items: [
      '**Caste and Race in India** (1932): six features of caste, and a link between caste and race, following Risley\'s lead while questioning it. He also noted that caste works through **endogamous sub-castes**.',
      '**Tribes:** The Aborigines So-called and Their Future (1943). He called them **"backward Hindus"**, against **Verrier Elwin\'s** case for protection. Note the debate for tribal integration.',
      '**Indian Sadhus** (1953): renouncers as guardians of Hindu culture. He also wrote on cities, on family and kin, and on Social Tensions in India (1968).',
      '**Critique:** The texts reflect a Brahmin male view. He assumed one Hindu India, which sidelines Dalits, tribes and Muslims. He was wider than the label, however, since he used field data and the census too.',
    ] },
    { t: 'p', text: '**Dumont and Pocock** (Contributions to Indian Sociology, 1957) argued that a sociology of India must stand where sociology and Indology meet. So Indology did not end with Ghurye. **Dumont** is a later structural version (soc-10).' },

    { t: 'h3', text: 'M.N. Srinivas (1916-1999) and structural-functionalism' },
    { t: 'p', text: 'Srinivas took a doctorate under Ghurye, then studied at Oxford with **Radcliffe-Brown** and **Evans-Pritchard**. He stressed the **field view** over the **book view**. He wrote **Religion and Society among the Coorgs** (1952), **Social Change in Modern India** (1966) and **The Remembered Village** (1976), written after his Rampura notes burnt in a 1970 fire at Stanford.' },
    { t: 'table', head: ['Concept', 'Meaning', 'Example or critique'], rows: [
      ['Sanskritisation', 'A lower caste or tribe adopts the customs of a higher caste, to raise status', 'Positional change only. Critique: treats upper-caste norms as the ideal'],
      ['Westernisation', 'Changes from British rule in technology, institutions, ideology, values', 'Not the same as modernisation'],
      ['Dominant caste', 'Land, numbers and power locally', 'Details in soc-10'],
      ['Vote bank', 'Term he is credited with, for blocs tied to leaders', 'Politics of caste'],
      ['Vertical and horizontal ties', 'Caste across villages; patron and client within', 'Village as a unity'],
    ] },
    { t: 'p', text: '**Also in this school:** **S.C. Dube** (Indian Village, 1955), **McKim Marriott** (Village India, 1955; **parochialisation** and **universalisation**). **Critique:** It shows order and consensus, and it neglects history, class and conflict. It treats villages as isolates. **Ramkrishna Mukherjee** faulted Indian sociology for describing more than it explains. Feminists note the male fieldworker\'s view of the village.' },

    { t: 'h3', text: 'A.R. Desai (1915-1994) and Marxist sociology' },
    { t: 'p', text: 'Desai took a doctorate under Ghurye, yet moved away from him towards Marxism. He wrote **Social Background of Indian Nationalism** (1948), **Rural Sociology in India**, **Peasant Struggles in India** (1979), **Agrarian Struggles in India after Independence** (1986) and **State and Society in India** (1975). His argument: the post-1947 state follows a capitalist path, so class conflict persists.' },
    { t: 'timeline', caption: 'Desai\'s five phases of nationalism. Each phase widens the social base.', items: [
      { when: 'Up to 1885', what: '**Intelligentsia:** Ram Mohan Roy and the reformers.' },
      { when: '1885-1905', what: '**Moderates:** educated middle class and rising industrialists; Congress founded.' },
      { when: '1905-1918', what: '**Extremists:** lower-middle-class base; swadeshi and boycott.' },
      { when: '1918-1934', what: '**Mass phase:** Gandhi brings in peasants and some workers.' },
      { when: '1934-1939', what: '**Socialist and left groups:** workers and peasants press their own demands.' },
    ] },
    { t: 'list', items: [
      '**Other Marxist work:** **D.P. Mukerji** (a dialectical view of tradition; but he was not an orthodox Marxist), **Ramkrishna Mukherjee** (The Dynamics of a Rural Society, 1957), **Kathleen Gough** and **D.N. Dhanagare** (peasant movements).',
      '**Critique:** The Marxist frame can reduce caste, religion and gender to class. **Historians such as Bipan Chandra** rejected the description of Congress as simply bourgeois. **Subaltern Studies** (Ranajit Guha, 1982 onward) argued peasants had their own politics, separate from elites.',
      '**Further challenges to all three:** the Dalit view (**Ambedkar**, Phule), the feminist view (**Uma Chakravarti**, **Leela Dube**), and the subaltern view (**David Hardiman**, The Coming of the Devi, 1987).',
    ] },
    { t: 'note', kind: 'trap', title: 'Three students, one teacher', text: 'Srinivas, Desai and Irawati Karve all worked under **Ghurye**, so do not treat them as outsiders. Also, the syllabus labels are for study. Ghurye is not purely textual, and Srinivas used some history. A top answer says this.' },

    { t: 'h', text: 'A(ii): impact of colonial rule' },
    { t: 'flow', caption: 'Colonial rule altered structure, then ideas, which together created new classes and a nation.', steps: [
      { title: 'Land revenue', sub: 'Zamindari, ryotwari, mahalwari' },
      { title: 'Economy', sub: 'Commercial crops, decline of handicraft' },
      { title: 'Administration', sub: 'Law, census, railways, press' },
      { title: 'Education', sub: 'Macaulay 1835, Wood\'s Despatch 1854' },
      { title: 'New classes', sub: 'Professionals, traders, workers, landlords' },
    ] },
    { t: 'p', text: '**Colonial knowledge:** The census (from 1872, with the first synchronous one in 1881) fixed fluid groups into lists. **H.H. Risley** tried in 1901 to rank castes, and groups formed bodies to press for higher rank. **Bernard Cohn** and **Nicholas Dirks** (Castes of Mind, 2001) argue that colonial rule made caste the master category. **Susan Bayly** replies that caste was already being formed before colonial rule. Present both views.' },

    { t: 'h3', text: '(a) Social background of Indian nationalism' },
    { t: 'table', head: ['View', 'Thinker', 'Argument'], rows: [
      ['Marxist', 'Desai', 'Colonial capitalism created new classes, and their conflict with Britain made nationalism'],
      ['Economic critique', 'Naoroji, R.C. Dutt', 'Drain of wealth and decline of crafts'],
      ['Cambridge School', 'Anil Seal, Gallagher', 'Elites compete for colonial favours'],
      ['Middle class', 'B.B. Misra', 'Rise of an English-educated professional class'],
      ['Print and community', 'Anderson', 'Newspapers help people imagine a nation'],
      ['Derivative discourse', 'Partha Chatterjee', 'Nationalism borrows from the West, but claims an inner spiritual domain'],
      ['Psychological', 'Ashis Nandy', 'Colonialism also colonised minds'],
    ] },

    { t: 'h3', text: '(b) Modernisation of Indian tradition' },
    { t: 'p', text: '**Yogendra Singh** (Modernization of Indian Tradition, 1973) gives the main framework. He sorts change by **source**, using Redfield and Singer\'s terms **orthogenetic** (from within) and **heterogenetic** (from contact with outsiders), and by **level**, separating culture from structure and micro from macro. He argues that tradition is not simply destroyed: it adapts, sometimes unevenly.' },
    { t: 'compare', caption: 'Against the idea that tradition and modernity are opposites.', columns: [
      { title: 'Tradition adapts', items: ['**Rudolph and Rudolph** (The Modernity of Tradition, 1967): caste associations and Gandhi', '**Milton Singer:** compartmentalisation; Madras industrialists', '**Redfield and Marriott:** great and little traditions', '**Nadars of Tamil Nadu** (Hardgrave): caste used for upward mobility'] },
      { title: 'Tradition blocks', items: ['**Weber:** Hinduism does not support rational capitalism', '**Modernisation theory:** Parsons\'s pattern variables', '**Critique:** ignores Indian merchants and adaptations', '**Marxist:** colonialism blocked growth, not tradition'] },
    ] },

    { t: 'h3', text: '(c) Protests and movements' },
    { t: 'table', caption: 'Use one example for each, then name a sociological reading.', head: ['Type', 'Examples', 'Reading'], rows: [
      ['Tribal', 'Santhal (1855-56), Munda Ulgulan (1899-1900), Rampa (1922-24)', 'Land and forest loss; Guha, Hardiman'],
      ['Peasant', 'Indigo (1859-60), Deccan riots (1875), Champaran (1917), Moplah (1921), Bardoli (1928), Tebhaga (1946-47), Telangana (1946-51)', 'Desai, Gough, Dhanagare'],
      ['Workers', 'AITUC (1920); Bombay textile strikes (1928-29)', 'Class formation; Chandavarkar'],
      ['Non-Brahmin and Dalit', 'Satyashodhak Samaj (1873), Justice Party, Self-Respect (1925), Vaikom (1924-25), Mahad (1927)', '**Gail Omvedt** (Cultural Revolt in a Colonial Society, 1976)'],
      ['Women', 'Women\'s India Association, All India Women\'s Conference (1927)', 'Reform moves to rights'],
    ] },

    { t: 'h3', text: '(d) Social reforms' },
    { t: 'timeline', caption: 'Reform moved from elite Hindu concerns to caste radicalism.', items: [
      { when: '1828-29', what: 'Brahmo Samaj (Ram Mohan Roy); Sati abolished under Bentinck.' },
      { when: '1856', what: 'Hindu Widows\' Remarriage Act, after Vidyasagar\'s campaign.' },
      { when: '1867-75', what: 'Prarthana Samaj; Arya Samaj (Dayanand, 1875); Satyashodhak Samaj (Phule, 1873); Aligarh movement (Syed Ahmad Khan).' },
      { when: '1882', what: 'Tarabai Shinde\'s Stri Purush Tulana; Pandita Ramabai\'s Arya Mahila Samaj.' },
      { when: '1891', what: 'Age of Consent Act.' },
      { when: '1903', what: 'SNDP Yogam, inspired by Narayana Guru, in Kerala.' },
      { when: '1929', what: 'Child Marriage Restraint (Sarda) Act.' },
      { when: '1932', what: 'Poona Pact between Gandhi and Ambedkar.' },
    ] },
    { t: 'list', items: [
      '**Reform or revival:** Roy reinterpreted texts. Arya Samaj looked back to the Vedas. Phule and Ambedkar rejected the system. Periyar attacked Brahmin authority.',
      '**Feminist critique:** **Lata Mani** showed that the sati debate was fought over scripture, with women as its ground. **Partha Chatterjee** says nationalism pushed the women\'s question into the "inner" home. **Uma Chakravarti** questioned the golden age of Vedic women.',
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Evaluate any one perspective, and contrast it with another. Ask whether Indology still has value today. Discuss whether Sanskritisation has a place in the present. Show how colonial rule both changed caste and hardened it. Use Desai\'s phases for the social base of nationalism, and then correct him with subaltern and Dalit views.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Ghurye: Caste and Race in India; "backward Hindus"; Bombay.',
      'Srinivas: Coorgs; Sanskritisation; dominant caste; field view.',
      'Desai: five phases; State and Society in India.',
      'Yogendra Singh: orthogenetic and heterogenetic.',
      'Rudolphs: The Modernity of Tradition. Dirks: Castes of Mind.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper II, Section A, from your upsc-syllabus.pdf (page 74)' },
    { label: 'Rural Voice, Next Census to be held in 2027 with caste enumeration, June 2025', url: 'https://eng.ruralvoice.in/next-census-to-be-held-in-2027-with-caste-enumeration-central-government-issues-notification' },
    { label: 'Reference for further reading, not checked line by line: Yogendra Singh, Modernization of Indian Tradition; A.R. Desai, Social Background of Indian Nationalism; NCERT Class XII, Social Change and Development in India' },
  ],
  beyond: {
    refer: [
      { what: 'NCERT Class XII, Social Change and Development in India', where: 'NCERT textbook site', why: 'Clear chapters on colonialism and on Sanskritisation to read before writing answers.', url: 'https://ncert.nic.in/textbook.php' },
      { what: 'A.R. Desai, Social Background of Indian Nationalism', where: 'Library or bookshop', why: 'Worth reading for the phases and for the class argument at source.' },
    ],
    current: [
      { issue: 'Caste enumeration in Census 2027', link: 'Notified in June 2025, with reference date 1 March 2027 (1 October 2026 for snow-bound areas). Revives the debate on colonial census categories and caste.', source: 'Rural Voice', url: 'https://eng.ruralvoice.in/next-census-to-be-held-in-2027-with-caste-enumeration-central-government-issues-notification' },
    ],
  },
}
