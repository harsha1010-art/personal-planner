import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'essay',
  summary: 'The Essay paper counts for 250 marks of merit, and rewards a clear argument more than facts. A method for planning and writing, with a timing guide.',
  minutes: 9,
  hero: { file: 'C Lyell notebook page 1.jpg', credit: 'University of Edinburgh Heritage Collections', license: 'CC BY 3.0' },
  heroAlt: 'A handwritten page from a historical notebook',
  blocks: [
    { t: 'h', text: 'What the paper is' },
    { t: 'p', text: 'Essay is **Paper I of Mains**, for **250 marks**, and it counts toward merit. In recent years, candidates have had three hours to write two essays of 1,000-1,200 words, one each from two sections. Many topics are abstract or philosophical, and there is no single right answer. Check the instructions in the current paper.' },
    { t: 'flow', caption: 'A workable pattern for one essay in about 90 minutes.', steps: [
      { title: 'Choose', sub: '5 minutes. Choose a topic where you have examples' },
      { title: 'Brainstorm', sub: '10 minutes. Note the dimensions' },
      { title: 'Structure', sub: '10 minutes. Order the argument' },
      { title: 'Write', sub: '60 minutes. Keep to the plan' },
      { title: 'Review', sub: '5 minutes. Fix errors' },
    ] },

    { t: 'h', text: 'How to plan an essay' },
    { t: 'h3', text: 'Understand the topic' },
    { t: 'p', text: 'Rephrase the topic in your own words. What does it claim? What are the opposing views? Spending time here prevents the biggest failure, writing on a nearby topic instead of the actual one.' },
    { t: 'h3', text: 'Use dimensions to generate points' },
    { t: 'p', text: 'Run through: social, political, economic, historical, ethical, technological, legal, environmental and international. Only use those that matter. For abstract topics, ask how the idea works for an individual, for society and for the state.' },
    { t: 'h3', text: 'Structure' },
    { t: 'table', head: ['Part', 'What it does', 'Length'], rows: [
      ['Introduction', 'A story, an example or a question leading to your thesis', '100-150 words'],
      ['Body', 'Develop your argument, then address opposing views', '700-850 words'],
      ['Way forward', 'Balance, and what follows', '100 words'],
      ['Conclusion', 'Return to your opening idea, and end hopefully and firmly', '80-100 words'],
    ] },
    { t: 'note', kind: 'trap', title: 'Common mistakes', text: 'Writing a long GS answer with subheadings, listing facts without argument, one-sided essays, and too many quotes. Essays usually flow as continuous prose, and strong ones have a thread you can follow from start to finish.' },

    { t: 'h', text: 'Practice and feedback' },
    { t: 'list', items: [
      'Your plan: one essay every two weeks from January.',
      'Keep an example bank through your issue cards: people, data, committees, cases.',
      'Read past UPSC topics, and outline one topic in 15 minutes when short of time.',
      'After writing, check: does each paragraph support the thesis? Is the other side heard? Would a reader remember one clear idea?',
    ] },
    { t: 'note', kind: 'exam', title: 'Mark yourself honestly', text: 'Have someone else read at least a few of your essays. It is hard to judge your own writing, and even a friend can tell you if the argument is hard to follow.' },
  ],
  sources: [
    { label: 'UPSC CSE notification: Scheme of Examination. Check the 2027 notice', url: 'https://www.upsc.gov.in/' },
    { label: 'UPSC previous question papers: Civil Services (Main), Essay', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
