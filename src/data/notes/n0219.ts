import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-02-19',
  summary: 'What CSAT asks, how the 33% qualifying rule works in marks, how to run a one-hour diagnostic, and methods for comprehension and reasoning. All examples are original practice.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'General Studies Paper II, called **CSAT**, is qualifying. It does not add to your Prelims merit, but if you fall short of the minimum, your Paper I will not save you. So the aim is safety, not a top score. Today you find out how safe you are.' },
    { t: 'table', caption: 'Pattern, and how each point was checked. Recheck everything in the CSE 2027 notice, which reports of UPSC\'s calendar place in January 2027.', head: ['Point', 'Rule', 'Checked against'], rows: [
      ['Marks and time', '200 marks, 2 hours', 'Syllabus file in your folder'],
      ['Question type', 'Multiple choice, objective', 'Syllabus file, Note 2'],
      ['Qualifying mark', 'Minimum **33%**, which is **66 of 200**', 'UPSC notice 05/2026-CSE, 4 February 2026'],
      ['Wrong answer', 'Minus one-third of the marks for that question. Blank: no penalty. Two answers marked: treated as wrong', 'UPSC notice 06/2026-IFoSE, which uses the same Prelims'],
      ['Questions', '**80**, so 2.5 marks each', 'Not stated in the syllabus file or the notice text I could read. A reprint of the official key for 24 May 2026 runs from 1 to 80. Confirm on your paper\'s cover'],
      ['Language', 'English comprehension passages have no Hindi translation', 'Syllabus file, Note 1'],
    ] },
    { t: 'p', text: 'The syllabus lists: comprehension; interpersonal skills including communication; logical reasoning and analytical ability; decision-making and problem-solving; general mental ability; basic numeracy and data interpretation at **Class X level**; and English comprehension at Class X level.' },

    { t: 'h', text: 'What 33% means in practice' },
    { t: 'p', text: 'A wrong answer costs 2.5 / 3, or about **0.83**. So **three wrong answers cancel one right answer** (3 x 0.83 = 2.5).' },
    { t: 'table', caption: 'Each mark is correct x 2.5, minus wrong x 0.83 (exactly one-third of 2.5).', head: ['Correct', 'Wrong', 'Working', 'Net', 'Result (66 needed)'], rows: [
      ['27', '0', '67.5 - 0', '67.5', 'Pass'],
      ['30', '9', '75 - 7.5', '67.5', 'Pass'],
      ['33', '18', '82.5 - 15', '67.5', 'Pass'],
      ['35', '25', '87.5 - 20.83', '66.67', 'Pass, barely'],
      ['34', '25', '85 - 20.83', '64.17', '**Fail**'],
    ] },
    { t: 'note', kind: 'trap', title: 'Do not aim for 66', text: 'A small slip can take you below the line, and a hard paper gives no sympathy. As personal advice, not a UPSC rule: aim for **90 or more** in full mocks, which is 36 net correct answers. If you are above 120 in mocks, keep CSAT practice light, and give the time to Paper I.' },

    { t: 'h', text: 'The one-hour diagnostic' },
    { t: 'p', text: 'At the paper\'s pace of 120 minutes for 80 questions, each question gets **1.5 minutes**. So in 60 minutes, attempt **40 questions**. Use half of one full official paper from the UPSC website. Download it yourself: this site does not hold GS Paper II, so nothing here is a past question.' },
    { t: 'flow', caption: 'Your plan output for today.', steps: [
      { title: 'Set up', sub: '20 comprehension, 20 reasoning and maths' },
      { title: 'Sit', sub: '60 minutes, no breaks, OMR style' },
      { title: 'Mark', sub: 'Plus 2.5, minus 0.83, double it for /200' },
      { title: 'Classify', sub: 'Put each error in the table below' },
      { title: 'Decide', sub: 'Pick two weak types for this week' },
    ] },
    { t: 'table', caption: 'Error log. The fix depends on the cause.', head: ['Error type', 'Sign', 'Fix'], rows: [
      ['Concept gap', 'Could not start', 'Learn the method, do 10 easy ones'],
      ['Calculation slip', 'Right method, wrong number', 'Write steps, check with options'],
      ['Misread question', 'Answered something else', 'Underline the ask; note NOT, EXCEPT'],
      ['Time out', 'Knew it, but did not reach it', 'Practise two-pass solving'],
      ['Bad guess', 'Marked with no elimination', 'Guess only after removing two options'],
    ] },
    { t: 'table', caption: 'Reading your score (doubled to 200). These bands are advice, not official.', head: ['Score /200', 'Meaning', 'Action'], rows: [
      ['Below 66', 'At risk', 'Daily CSAT work of 45-60 minutes until you clear 90 twice'],
      ['66-90', 'Thin margin', 'Four sessions a week'],
      ['90-120', 'Safe with care', 'Two sessions and one mock a week'],
      ['Above 120', 'Safe', 'One full paper every 10-14 days'],
    ] },

    { t: 'h', text: 'Comprehension method' },
    { t: 'flow', steps: [
      { title: 'Read the question stem first', sub: 'Know what you are hunting' },
      { title: 'Read the passage once', sub: 'Find topic, stance and turning words' },
      { title: 'Answer from the text', sub: 'Not from your own knowledge' },
      { title: 'Eliminate', sub: 'Extreme, outside, or partly true options' },
    ] },
    { t: 'table', head: ['Question asks', 'What it means', 'Test'], rows: [
      ['Main idea or central theme', 'What the whole passage is about', 'Would it cover every paragraph?'],
      ['Inference', 'Must follow from the text', 'Can you point to supporting lines?'],
      ['Assumption', 'Unstated, but the argument depends on it', 'Negate it. Does the argument collapse?'],
      ['Corollary or implication', 'Follows if the passage is accepted', 'Does it need new facts? Then reject'],
      ['Tone or author\'s view', 'Attitude of the writer', 'Look at adjectives and "however"'],
    ] },
    { t: 'note', kind: 'exam', title: 'Original practice, not a UPSC question: inference', text: '**Passage:** A town widened its main road to end traffic jams. Within three years the jams returned, since more people chose to drive once trips got quicker. Planners later found that bus lanes moved more people per hour than the new car lanes.**Which is the most logical inference?** (a) Wider roads never reduce jams for any period. (b) Quicker trips can draw in extra traffic that erodes the gain. (c) Buses are cheaper than cars. (d) The town should ban private cars.**Answer: (b).** (a) is too extreme, since jams returned only after some time. (c) brings in cost, which is not in the passage. (d) is a policy step nobody argued for.' },
    { t: 'note', kind: 'exam', title: 'Original practice, not a UPSC question: assumption', text: '**Argument, based on the passage above:** "The town should add bus lanes rather than car lanes." **Which is assumed?** Moving more people per hour is a goal of the town\'s road policy.**Negation test:** if moving more people were not a goal, the bus lane data would give no reason for the advice. The argument collapses, so this is an assumption.' },
    { t: 'note', kind: 'trap', title: 'Words that warn you', text: '**Always, never, only, all, must** often make an option too strong. An option may be true in real life, and still be wrong because the passage does not say it. This is the most common trap for GS-minded readers.' },

    { t: 'h', text: 'Reasoning methods' },
    { t: 'table', caption: 'All examples below are original practice, not UPSC questions.', head: ['Type', 'Method', 'Worked example', 'Answer'], rows: [
      ['Syllogism', 'Draw Venn circles. A conclusion must hold in every possible drawing', 'All teachers are readers. Some readers are singers. Are some teachers singers?', '**Does not follow.** The singers may be readers who are not teachers'],
      ['Syllogism', 'Same', 'No A is B. All C are B. Is it true that no C is A?', '**Follows.** C lies inside B, and B is fully outside A'],
      ['Seating', 'Draw slots. Place fixed clues first', 'P, Q, R, S, T sit in a row, facing north. R is in the middle. T is at the far left. S is immediately right of R. P is not next to T. Who sits next to T?', '**Q.** Order: T, Q, R, S, P'],
      ['Blood relation', 'Draw a family tree', 'A is the son of B. B is the sister of C. C is the father of D. How is A related to D?', '**Cousin**'],
      ['Direction', 'Sketch it. Use right triangles', 'Walk 6 km north, turn right, walk 8 km. How far from the start?', '**10 km** to the north-east (6-8-10 triangle)'],
      ['Coding', 'Find the shift, then test it', 'If CAT is written ECV, how is DOG written?', '**FQI**, since each letter moves forward by 2'],
      ['Series', 'Look at differences first', '2, 6, 12, 20, 30, ?', '**42**. Differences: 4, 6, 8, 10, 12'],
      ['Calendar', 'Count extra days, remainder of 7', 'If 1 March in a year is a Monday, what day is 1 June?', '**Tuesday.** 31 + 30 + 31 = 92 days; 92 = 13 x 7 + 1'],
      ['Clock', 'Angle = |30H - 5.5M|', 'Angle between the hands at 3:40?', '**130 degrees.** |90 - 220| = 130'],
    ] },
    { t: 'note', kind: 'trap', title: 'Reasoning traps', text: '"Some" means at least one, and can be all. "Immediately right" is not the same as "somewhere right". **Facing direction matters** in seating: if people face south, their right is your left. In direction problems, read carefully: distance is from the start, not the total walked (14 km above).' },

    { t: 'h', text: 'Two-pass paper strategy' },
    { t: 'compare', caption: 'Personal advice. The paper does not require any order.', columns: [
      { title: 'First pass, about 75 minutes', items: ['Your strong type first', 'Short passages and easy arithmetic', 'Mark on the OMR as you go', 'Skip anything stuck past 2 minutes'] },
      { title: 'Second pass, about 45 minutes', items: ['Return to skipped items', 'Attempt where two options are out', 'Stop guessing once you are comfortably safe', 'Leave 5 minutes to check the OMR'] },
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'No Mains paper here, but the skill carries over', text: 'CSAT is not tested in Mains. Still, reading for the exact demand, separating fact from assumption and weighing options all help GS answers, Essay and Ethics case studies. Use your error log in the same way for your answer writing.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      '200 marks, 2 hours, qualifying at 33%, or 66 marks.',
      '80 questions at 2.5 each; confirm on your booklet.',
      'Wrong answer: minus 0.83. Three wrong cancel one right.',
      'Pace: 1.5 minutes each; 40 questions in the one-hour diagnostic.',
      'Comprehension: answer from the passage, and distrust extreme options.',
      'Assumption: negate it and see if the argument falls.',
      'Examples here are original practice. None is a past UPSC question.',
    ] },
  ],
  sources: [
    { label: 'UPSC syllabus file, Prelims Part A (checked in your folder)' },
    { label: 'UPSC, Examination Notice 05/2026-CSE, 4 February 2026 (seen as search excerpt; UPSC blocked direct opening)', url: 'https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf' },
    { label: 'UPSC, Examination Notice 06/2026-IFoSE (search excerpt, for the penalty rule)', url: 'https://www.upsc.gov.in/sites/default/files/Notif-IFSP-2026-Engl-060226Rev.pdf' },
    { label: 'Drishti IAS reprint of the official GS Paper II key, Prelims of 24 May 2026, for the numbering only', url: 'https://www.drishtiias.com/images/pdf/GS Paper-II.pdf' },
    { label: 'Vision IAS, report of UPSC Calendar 2027 (search excerpt, press)', url: 'https://visionias.in/blog/upsc-news/upsc-calendar-2027-out-cse-prelims-on-23-may-2027-check-exam-dates-download-pdf' },
  ],
  beyond: {
    refer: [
      { what: 'Full official GS Paper II', where: 'UPSC previous question papers', why: 'Notes cannot replace a timed real paper. Use it for this diagnostic.', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
      { what: 'CSE 2027 notice', where: 'UPSC', why: 'The binding statement of the qualifying mark and penalty for your exam.', url: 'https://www.upsc.gov.in/' },
    ],
    current: [
      { issue: 'CSAT pattern', link: 'No major recent development found as of November 2026. Recheck when the CSE 2027 notice is out.', source: 'UPSC notice for 2026', url: 'https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf' },
    ],
  },
}
