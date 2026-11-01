import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-01',
  summary: 'Why sociology arose in a changing Europe, what it studies, how it differs from common sense, and how it relates to the other social sciences. Paper I, Unit 1.',
  minutes: 16,
  hero: { file: 'Powerloom weaving in 1835.jpg', credit: 'T. Allom and J. Tingle', license: 'Public domain' },
  heroAlt: 'An 1835 engraving of a factory floor with power looms',
  blocks: [
    { t: 'h', text: 'Where this fits' },
    { t: 'p', text: 'This is Unit 1 of **Paper I, Fundamentals of Sociology**: "Modernity and social changes in Europe and emergence of sociology; scope of the subject and comparison with other social sciences; sociology and common sense." Sociology has **no Prelims paper**, so there are no MCQs here. The optional has two papers of 250 marks each, and it is scored through written answers. Practise by writing.' },

    { t: 'h', text: 'Why sociology emerged in Europe' },
    { t: 'p', text: 'Sociology arose in the 19th century because Europe felt that its old order had collapsed. Thinkers wanted a science that could explain the new society, and restore order or transform it. Three revolutions drove this.' },
    { t: 'compare', columns: [
      { title: 'Enlightenment', items: ['Reason and evidence over tradition and religion', 'Society could be studied and changed', 'Montesquieu, Rousseau, Voltaire'] },
      { title: 'French Revolution', items: ['Old hierarchy of king, church and estate fell', 'Raised questions about order and rights', 'Conservative reaction: Maistre, Bonald'] },
      { title: 'Industrial Revolution', items: ['Factories, cities and a working class', 'Poverty, alienation and urban crime', 'Family and community changed'] },
    ] },
    { t: 'timeline', caption: 'Founders. Learn who did what, not just the dates.', items: [
      { when: 'Auguste Comte (1798-1857)', what: 'Coined **"sociology"** and gave the law of three stages: theological, metaphysical and positive. Sought social physics.' },
      { when: 'Herbert Spencer (1820-1903)', what: 'Society as an evolving organism; applied evolution to society.' },
      { when: 'Karl Marx (1818-1883)', what: 'Capitalism and class conflict. Change comes through material conditions.' },
      { when: 'Emile Durkheim (1858-1917)', what: 'Social facts as things; founded the first European sociology department at Bordeaux, and the journal L\'Annee Sociologique.' },
      { when: 'Max Weber (1864-1920)', what: 'Interpretive sociology (Verstehen); rationalisation of the modern world.' },
    ] },
    { t: 'note', kind: 'mains', title: 'Modernity is the key idea', text: 'Use **modernity** as your frame: rationality, individualism, capitalism, nation-states, urban life and secularisation. Classical sociology is largely a response to modernity. Giddens summarises it as a series of institutional changes that began in post-feudal Europe.' },

    { t: 'h', text: 'Scope of sociology' },
    { t: 'p', text: 'There are two broad views on what sociology should cover. The **specialistic or formalistic view** (Simmel, Tonnies, Weber) treats sociology as a study of the forms of social relationships. The **synthetic view** (Durkheim, Sorokin, Hobhouse) treats it as a general science of society, which relates all social sciences.' },
    { t: 'list', items: [
      '**Micro level:** everyday interaction, such as Mead\'s self and Goffman\'s dramaturgy.',
      '**Macro level:** institutions and large structures, such as Marx on class and Parsons on social systems.',
      '**Topics:** family, religion, stratification, work, politics, education and social change.',
      '**Method:** Mills\' **sociological imagination** connects personal troubles with public issues. For instance, unemployment is not just one person\'s failing.',
    ] },

    { t: 'h', text: 'Sociology and common sense' },
    { t: 'table', caption: 'A core table, since this is a named syllabus item.', head: ['', 'Common sense', 'Sociology'], rows: [
      ['Basis', 'Personal experience and tradition', 'Systematic evidence and method'],
      ['Explanation', 'Often natural or individual', 'Social and structural'],
      ['Testing', 'Rarely tested; holds contradictions', 'Tested, and open to criticism'],
      ['Perspective', 'Local and taken-for-granted', 'Comparative'],
      ['Example', '"Suicide is purely a personal act"', 'Durkheim showed that suicide rates vary with social integration'],
    ] },
    { t: 'p', text: 'Peter Berger noted the fascination of sociology lies in seeing "the familiar" anew. But do not present common sense as worthless. Alfred Schutz and the **ethnomethodologists** such as Garfinkel treated everyday knowledge as a key thing to study, and Giddens speaks of a **double hermeneutic**: sociological ideas feed back into what people believe.' },
    { t: 'note', kind: 'exam', title: 'Indian examples score well', text: 'André Béteille wrote on sociology and common sense with Indian examples, such as the assumption that caste is simply about ritual purity, or that poverty is purely a matter of laziness. Add NFHS or Census data to show how evidence tests popular claims about gender or family.' },

    { t: 'h', text: 'Relation with other social sciences' },
    { t: 'table', head: ['Discipline', 'Focus', 'How sociology differs', 'Example of overlap'], rows: [
      ['Anthropology', 'Small societies; culture, kinship', 'Sociology is more on modern and complex societies; the boundary has blurred', 'M.N. Srinivas used both'],
      ['History', 'Unique past events', 'Sociology looks for general patterns', 'Weber on capitalism'],
      ['Economics', 'Production and markets; individual choice', 'Treats economy as embedded in society', 'Polanyi\'s embeddedness; Sen on capabilities'],
      ['Political science', 'State and formal power', 'Studies power in all social relations', 'Political sociology, Michels'],
      ['Psychology', 'Individual mind', 'Group-level facts', 'Durkheim\'s rejection of psychological explanation; Mead'],
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'How to write Sociology answers', text: 'Open with a thinker or concept. Use one or two theoretical points, with an Indian example. Close by linking to the question. Use specific names: writing "Mills\' sociological imagination" shows more than "sociologists say".' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Comte coined the term. Law of three stages.',
      'Three revolutions: Enlightenment, French, Industrial.',
      'Formal: Simmel. Synthetic: Durkheim, Sorokin.',
      'Mills: troubles and issues. Berger: making the familiar strange. Giddens: double hermeneutic.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper I, from your upsc-syllabus.pdf (page 73)' },
    { label: 'NCERT Class XI, Introducing Sociology, Ch 1', url: 'https://ncert.nic.in/textbook.php' },
    { label: 'C. Wright Mills, The Sociological Imagination; Anthony Giddens, Sociology' },
  ],
}
