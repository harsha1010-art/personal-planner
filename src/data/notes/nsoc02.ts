import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-02',
  summary: 'How sociologists know what they claim: science, positivism and its critics, qualitative and quantitative methods, and the terms every answer on method uses. Paper I, Units 2 and 3.',
  minutes: 16,
  blocks: [
    { t: 'h', text: 'Sociology as science' },
    { t: 'p', text: 'The basic debate: can society be studied like nature? **Positivists** say yes, and **interpretivists** say the meaning people give to their actions demands different methods. **Critical** theorists add that research can never be separated from power.' },
    { t: 'table', head: ['', 'Positivism', 'Non-positivism (interpretive)', 'Critical'], rows: [
      ['Thinkers', 'Comte, Durkheim, Popper (on falsification, in part)', 'Weber (Verstehen), Schutz, Garfinkel, Geertz', 'Marx, Frankfurt School, feminist standpoint'],
      ['Reality', 'Objective, social facts', 'Socially constructed', 'Shaped by power'],
      ['Method', 'Surveys, statistics, comparison', 'Participant observation, interviews', 'Historical critique, action research'],
      ['Goal', 'Causal laws', 'Understanding meaning', 'Emancipation'],
    ] },
    { t: 'list', items: [
      '**Critique of science:** **Popper** argued for falsification rather than verification. **Kuhn** said science moves through **paradigm** shifts rather than steady progress. Feyerabend went further, and argued "anything goes".',
      '**Fact and value:** Weber separated **value-relevance** (values pick the topic) from **value-neutrality** (researchers should not let values decide findings). Gunnar Myrdal said that researchers should state their values openly. Gouldner called value-free sociology a myth.',
      '**Objectivity in India:** M.N. Srinivas used the terms **observer** and **participant**, and his method of studying one\'s own society raises this problem directly.',
    ] },

    { t: 'h', text: 'Methods' },
    { t: 'compare', columns: [
      { title: 'Quantitative', items: ['Numbers and patterns', 'Surveys, censuses', 'Breadth, generalisable', 'Risk: loses meaning', 'Example: Durkheim\'s Suicide; NSS, NFHS'] },
      { title: 'Qualitative', items: ['Meaning and context', 'Ethnography, interviews', 'Depth', 'Risk: small samples, researcher bias', 'Example: Srinivas\'s Rampura; Whyte\'s Street Corner Society'] },
    ] },
    { t: 'p', text: 'Most modern research uses **mixed methods**. **Triangulation** means checking findings by using more than one method, source or researcher.' },
    { t: 'h3', text: 'Key terms' },
    { t: 'table', head: ['Term', 'Meaning', 'Example'], rows: [
      ['Variable', 'Anything that can vary. Independent causes, dependent is affected', 'Education (independent) and fertility (dependent)'],
      ['Hypothesis', 'A testable statement about a relationship', 'More female education lowers fertility'],
      ['Sampling', 'Selecting a part to represent the whole', 'Random, stratified, snowball, purposive'],
      ['Reliability', 'Same result if repeated', 'A test that gives steady results'],
      ['Validity', 'Measures what it claims', 'Does an exam measure ability, or only memory?'],
      ['Participant observation', 'Researcher joins group life', 'Malinowski in the Trobriand Islands'],
      ['Interview', 'Structured, semi-structured or unstructured', 'Life histories'],
      ['Hawthorne effect', 'People change when watched', 'Elton Mayo\'s studies'],
    ] },
    { t: 'note', kind: 'mains', title: 'Paper I often asks', text: 'Compare methods, not just list them. Write: which method fits which question, and what each one misses. Add a recent example, such as how survey data on caste can undercount due to self-reporting.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: ['Comte, Durkheim: positivism. Weber: Verstehen.', 'Popper: falsification. Kuhn: paradigm.', 'Reliability is consistency. Validity is accuracy.', 'Triangulation: more than one method.'] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper I, Units 2 and 3, from your upsc-syllabus.pdf' },
    { label: 'NCERT Class XI, Understanding Society and Introducing Sociology, Ch 5', url: 'https://ncert.nic.in/textbook.php' },
    { label: 'Haralambos and Holborn, Sociology: Themes and Perspectives, chapters on methodology' },
  ],
}
