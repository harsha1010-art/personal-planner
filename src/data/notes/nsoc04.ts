import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-04',
  summary: 'Durkheim on social facts, solidarity, suicide and religion, and Weber on social action, ideal types, authority, bureaucracy and the Protestant ethic. Paper I, Unit 4(b) and (c).',
  minutes: 20,
  blocks: [
    { t: 'h', text: 'Emile Durkheim' },
    { t: 'p', text: 'Durkheim (1858-1917) made sociology a separate discipline by giving it a subject: **social facts**, meaning ways of acting and thinking that are external to individuals, and exercise constraint on them. Law, language and religion are examples. **"Treat social facts as things."** Key works: **The Division of Labour** (1893), **Rules of Sociological Method** (1895), **Suicide** (1897), **Elementary Forms of Religious Life** (1912).' },
    { t: 'table', caption: 'Division of labour: what holds society together changes as it grows.', head: ['', 'Mechanical solidarity', 'Organic solidarity'], rows: [
      ['Based on', 'Similarity', 'Difference and interdependence'],
      ['Society', 'Simple', 'Complex, industrial'],
      ['Collective conscience', 'Strong', 'Weak'],
      ['Law', 'Repressive', 'Restitutive'],
    ] },
    { t: 'p', text: '**Anomie** means normlessness, which arises when rules weaken during rapid change. Durkheim called the unhealthy form of the division of labour the **anomic division of labour**.' },
    { t: 'table', caption: 'Suicide. Rates depend on integration and regulation, which is a key demonstration of social facts.', head: ['Type', 'Cause', 'Example'], rows: [
      ['Egoistic', 'Too little integration', 'Single people, Protestants had higher rates'],
      ['Altruistic', 'Too much integration', 'Soldiers, sati'],
      ['Anomic', 'Too little regulation', 'Sudden economic change'],
      ['Fatalistic', 'Too much regulation', 'Slaves; farmers in debt can be discussed here'],
    ] },
    { t: 'list', items: [
      '**Religion:** based on Australian totemism. Religion separates the **sacred** and **profane**. In worship, society worships itself, through rituals that create **collective effervescence**.',
      '**Criticisms:** Durkheim\'s suicide data is official and can be biased (J. Maxwell Atkinson, Jack Douglas). His functionalism plays down conflict.',
    ] },

    { t: 'h', text: 'Max Weber' },
    { t: 'p', text: 'Weber (1864-1920) asks how people understand their own actions. Sociology is the interpretive understanding (**Verstehen**) of **social action**. Key works: **The Protestant Ethic and the Spirit of Capitalism** (1905), **Economy and Society**.' },
    { t: 'table', caption: 'Four kinds of social action. Rationalisation means that the first type spreads through modern life.', head: ['Type', 'Meaning', 'Example'], rows: [
      ['Instrumental rational', 'Efficient means to a goal', 'Choosing a cheaper supplier'],
      ['Value rational', 'Act for a belief, whatever the cost', 'A martyr'],
      ['Affective', 'Driven by feeling', 'Hitting out in anger'],
      ['Traditional', 'From custom', 'Following a family ritual'],
    ] },
    { t: 'p', text: '**Ideal type:** a mental model that highlights the main features of something, so that real cases can be compared against it. It is not a moral ideal and it does not exist in pure form, such as "bureaucracy" or "capitalism".' },
    { t: 'table', head: ['Authority', 'Source', 'Example'], rows: [
      ['Traditional', 'Custom', 'Kings, elders'],
      ['Charismatic', 'Personal gift', 'Gandhi, religious leaders; becomes "routinised"'],
      ['Legal-rational', 'Rules and office', 'A civil servant'],
    ] },
    { t: 'h3', text: 'Bureaucracy' },
    { t: 'p', text: 'Weber\'s ideal bureaucracy has hierarchy, written rules, specialised roles, impersonality, appointment on merit and salary, and career tenure. It is the most efficient form, yet creates an **iron cage**. **Merton** added that following rules can become the goal itself. Called **bureaupathology** by some, this is highly useful for GS II and IV.' },
    { t: 'h3', text: 'The Protestant ethic' },
    { t: 'p', text: 'Weber asked why modern capitalism arose in Protestant Europe. Calvinist doctrine of **predestination** caused anxiety about salvation, so followers worked hard and saved as a sign of grace, and this helped the "spirit" of capitalism. He stressed **elective affinity**, not one simple cause. Critics such as R.H. Tawney pointed to other causes, and to capitalism in Catholic Italy. For India, Weber\'s Religion of India was challenged by Milton Singer, who found industrial leaders who were religious.' },

    { t: 'h', text: 'Compare the two' },
    { t: 'table', head: ['', 'Durkheim', 'Weber', 'Marx'], rows: [
      ['Focus', 'Social order', 'Meaning and rationalisation', 'Conflict and capitalism'],
      ['Method', 'Positivist', 'Interpretive', 'Dialectical, historical'],
      ['Religion', 'Unifies society', 'Can drive change', 'Opium of the people'],
      ['Modern problem', 'Anomie', 'Iron cage', 'Alienation'],
    ] },
    { t: 'note', kind: 'mains', title: 'The comparison table scores', text: 'Examiners often ask for comparison of the three. Memorise the last table, and always add an Indian example, such as farmer suicides for anomie, or the IAS for bureaucracy.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: ['Four types of suicide: egoistic, altruistic, anomic, fatalistic.', 'Four types of action; three types of authority.', 'Sacred and profane: Durkheim.', 'Verstehen, ideal type, iron cage: Weber.'] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper I, Unit 4(b) and (c), from your upsc-syllabus.pdf' },
    { label: 'NCERT Class XI, Understanding Society, Ch 4', url: 'https://ncert.nic.in/textbook.php' },
    { label: 'George Ritzer, Sociological Theory; Haralambos and Holborn' },
  ],
}
