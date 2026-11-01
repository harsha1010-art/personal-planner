import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'lang-english',
  summary: 'The English qualifying paper in Mains. If you fail it, your other Mains papers are not assessed, so it needs steady practice, not heavy study.',
  minutes: 11,
  hero: { file: 'Pen-writing-notes-studying.jpg', credit: 'Tookapic', license: 'CC0' },
  heroAlt: 'A hand writing notes in a notebook',
  blocks: [
    { t: 'h', text: 'What the paper is' },
    { t: 'p', text: 'Paper B (English) is a **qualifying** paper of **300 marks**, of matriculation or equivalent standard. Its marks are not added to your merit total. However, you must clear the minimum set by UPSC (in recent years, 25% in each language paper), or your other papers will not be evaluated. Check this in the **2027 notification**, due in January.' },
    { t: 'table', caption: 'The usual question types from UPSC\'s pattern. Marks vary from year to year, so look at the two latest papers.', head: ['Section', 'What you do', 'Skill'], rows: [
      ['Essay', 'One essay on a given subject', 'Clear points, organised argument'],
      ['Comprehension', 'Answer questions from passages', 'Accurate reading'],
      ['Précis', 'Reduce a passage to one-third', 'Selection and word control'],
      ['Grammar and usage', 'Correct errors, fill blanks, change voice and speech', 'Accuracy'],
      ['Vocabulary', 'Synonyms, antonyms, idioms', 'Word knowledge'],
    ] },

    { t: 'h', text: 'How to approach each section' },
    { t: 'h3', text: 'Essay' },
    { t: 'flow', steps: [
      { title: 'Plan', sub: '5 minutes. Write 5 points' },
      { title: 'Introduce', sub: 'Say what you will argue' },
      { title: 'Develop', sub: 'One idea per paragraph, with an example' },
      { title: 'Close', sub: 'A clear, short finish' },
    ] },
    { t: 'p', text: 'Use simple sentences. The aim is clear and correct English, not impressive vocabulary.' },
    { t: 'h3', text: 'Comprehension' },
    { t: 'list', items: [
      'Read the questions first, then read the passage.',
      'Answer in your own words unless told otherwise.',
      'Stick to the passage. Do not add outside knowledge.',
    ] },
    { t: 'h3', text: 'Précis' },
    { t: 'list', items: [
      'Target **one-third** of the original length, and state the word count if asked.',
      'Find the central idea and keep its logic.',
      'Remove examples, repetition and quotations.',
      'Write in your own words, third person, and past tense where suitable.',
      'Draft first, count, and then write a fair copy.',
    ] },
    { t: 'h3', text: 'Grammar errors to watch for' },
    { t: 'table', head: ['Rule', 'Wrong', 'Right'], rows: [
      ['Subject-verb agreement', 'The list of items are long.', 'The list of items is long.'],
      ['Tense in past context', 'He said he will come.', 'He said he would come.'],
      ['Articles', 'He is honest man.', 'He is an honest man.'],
      ['Prepositions', 'She is good in maths.', 'She is good at maths.'],
      ['Parallel structure', 'He likes reading and to write.', 'He likes reading and writing.'],
      ['Reported speech', 'She said, "I am tired."', 'She said that she was tired.'],
      ['Passive voice', 'They built the bridge.', 'The bridge was built by them.'],
    ] },

    { t: 'h', text: 'Your schedule' },
    { t: 'p', text: 'Your plan schedules English on alternate Sundays from November, 45 minutes a week in February, and one timed section every two weeks in March and April. A simple cycle: one week précis and comprehension, one week grammar and an essay. Do not over-invest, because this is a pass-or-fail paper. Doing well in it gets you nothing extra.' },
    { t: 'note', kind: 'exam', title: 'The risk is neglect', text: 'Candidates sometimes fail language papers through lack of practice, which voids the rest of Mains. So write at least one full paper under timed conditions before Mains.' },
  ],
  sources: [
    { label: 'UPSC CSE notification, compulsory language paper: check the 2027 notice for the current wording', url: 'https://www.upsc.gov.in/' },
    { label: 'UPSC previous question papers: Civil Services (Main), English Compulsory', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
