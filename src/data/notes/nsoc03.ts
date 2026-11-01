import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-03',
  summary: 'Marx in one sitting: historical materialism, mode of production, alienation and class struggle, with the main criticisms and Indian applications. Paper I, Unit 4(a).',
  minutes: 14,
  blocks: [
    { t: 'h', text: 'Marx\'s core argument' },
    { t: 'p', text: 'For Marx (1818-1883), people must first produce in order to live, so how they produce shapes the rest of society. He studied capitalism in order to change it, not only to explain it. Key works: **Economic and Philosophic Manuscripts** (1844), **The German Ideology**, **The Communist Manifesto** (1848, with Engels), **Das Kapital** (1867).' },
    { t: 'h', text: 'Historical materialism' },
    { t: 'compare', caption: 'A simplified base and superstructure model. Later Marxists such as Gramsci gave more weight to culture.', columns: [
      { title: 'Base', items: ['**Forces of production:** tools, skills, technology', '**Relations of production:** who owns what, and who works for whom', 'Together: mode of production'] },
      { title: 'Superstructure', items: ['State, law, religion, education, ideology', 'Reflects and protects the base', 'Ideology hides inequality as natural'] },
    ] },
    { t: 'flow', caption: 'Marx\'s historical sequence. Each stage ends when forces outgrow relations.', steps: [
      { title: 'Primitive communism', sub: 'No classes' },
      { title: 'Ancient', sub: 'Master and slave' },
      { title: 'Feudal', sub: 'Lord and serf' },
      { title: 'Capitalist', sub: 'Bourgeoisie and proletariat' },
      { title: 'Communist', sub: 'Classless society' },
    ] },
    { t: 'p', text: 'Marx also described an **Asiatic mode of production**, in which a strong state and village communities supposedly kept India unchanged. Later historians, including Irfan Habib, criticised this view of India as static.' },

    { t: 'h', text: 'Alienation' },
    { t: 'table', head: ['Alienation from', 'Meaning'], rows: [
      ['The product', 'The worker does not own what is made'],
      ['The act of work', 'Labour is forced and has no meaning'],
      ['Species-being', 'Humans lose their creative nature'],
      ['Other people', 'Competition replaces cooperation'],
    ] },
    { t: 'p', text: '**Modern example:** gig workers rated by an app are controlled by an algorithm, and are divided from co-workers. Harry Braverman\'s **deskilling** argument takes this further into modern workplaces.' },

    { t: 'h', text: 'Class and class struggle' },
    { t: 'list', items: [
      '**Exploitation:** workers produce more than they are paid for. Capitalists keep this as **surplus value**.',
      '**Class in itself:** sharing a position. **Class for itself:** being conscious of it and acting. Marx used **false consciousness** for a failure to see this, though the phrase is Engels\'s.',
      '**Polarisation:** he predicted that the middle would fade, and that the working class would make a revolution.',
    ] },
    { t: 'h', text: 'Critique' },
    { t: 'table', head: ['Criticism', 'From'], rows: [
      ['Class is not the only basis of inequality; status and party also matter', 'Weber'],
      ['Middle class grew, instead of shrinking', 'Dahrendorf, Goldthorpe'],
      ['Revolutions came first in peasant societies, not advanced ones', 'Many historians'],
      ['Ideology and culture can be independent', 'Gramsci (hegemony), Althusser'],
      ['Ignores gender and race', 'Feminists, W.E.B. Du Bois'],
    ] },
        { t: 'h', text: 'Other key concepts' },
    { t: 'table', caption: 'These are the terms that lift an answer above a basic summary.', head: ['Concept', 'Meaning', 'Use it for'], rows: [
      ['Commodity fetishism', 'Relations between people appear as relations between things, so we see prices rather than labour', 'Consumer culture'],
      ['Reserve army of labour', 'The unemployed keep wages low and workers obedient', 'Informal sector, contract labour'],
      ['Primitive accumulation', 'Forcible separation of producers from land and tools that began capitalism', 'Land acquisition and displacement'],
      ['Pauperisation', 'Workers\' relative position worsens over time', 'Inequality debates'],
      ['Dialectic', 'Change arises through contradiction', 'Explaining why systems break down'],
    ] },
    { t: 'h', text: 'After Marx' },
    { t: 'table', head: ['Thinker', 'Contribution'], rows: [
      ['Lenin', 'Imperialism as the highest stage of capitalism; the vanguard party'],
      ['Gramsci', '**Hegemony**: rule through consent as well as force'],
      ['Althusser', 'Ideological State Apparatuses such as school and family'],
      ['Frankfurt School', 'The culture industry; how mass culture dulls critique'],
      ['Braverman', 'Deskilling of labour under monopoly capitalism'],
      ['Wallerstein', 'World-systems theory: core, semi-periphery and periphery'],
    ] },
    { t: 'p', text: '**Indian debate:** In the late 1960s and 1970s, scholars argued in the Economic and Political Weekly about whether Indian agriculture had become capitalist or remained semi-feudal. This **mode of production debate** is useful for Paper II on agrarian structure. Marxists such as Kathleen Gough also studied peasant revolts.' },
    { t: 'note', kind: 'mains', title: 'India applications', text: 'A.R. Desai used Marxism for the social background of Indian nationalism. Kathleen Gough, D.N. Dhanagare and A.R. Desai applied it to peasant movements. Ambedkar challenged the claim that class alone explained Indian society, because of caste.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: ['Forces + relations = mode of production.', 'Four kinds of alienation.', 'Surplus value: exploitation.', 'Class in itself vs for itself.'] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper I, Unit 4(a), from your upsc-syllabus.pdf' },
    { label: 'NCERT Class XI, Understanding Society, Ch 4 Introducing Western Sociologists', url: 'https://ncert.nic.in/textbook.php' },
    { label: 'George Ritzer, Sociological Theory; Haralambos and Holborn' },
  ],
}
