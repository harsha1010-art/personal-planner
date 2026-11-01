import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-02-20',
  summary: 'CSAT numeracy methods: orders of magnitude, percentages, profit and loss, ratios, mixtures and averages, each with a short worked example. All examples are original practice.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The syllabus sets basic numeracy at **Class X level**: numbers and their relations, and orders of magnitude. So you need no advanced maths. You need a few reliable methods and clean arithmetic. CSAT is a qualifying paper at **33%**, so aim for accuracy, not for solving everything. Today\'s plan output is **25 timed questions**, which at the paper\'s pace of 1.5 minutes each takes about **38 minutes**.' },
    { t: 'note', kind: 'exam', title: 'About every example here', text: 'All examples are **original practice, written for this note**. None is a past UPSC question. Official GS Paper II has not been downloaded for this site, so take real questions from the UPSC website.' },
    { t: 'flow', caption: 'The same five steps work for nearly every numeracy question.', steps: [
      { title: 'Read the ask', sub: 'What number, in what unit?' },
      { title: 'Pick a base', sub: 'Use 100, or a total in parts' },
      { title: 'Work it out', sub: 'Write short steps' },
      { title: 'Check the size', sub: 'Is the answer sensible?' },
      { title: 'Use the options', sub: 'Eliminate, or test one back' },
    ] },

    { t: 'h', text: 'Numbers and orders of magnitude' },
    { t: 'table', caption: 'Indian and international units. Learn the powers of ten.', head: ['Word', 'Power of 10', 'Equal to'], rows: [
      ['Thousand', '10^3', '1,000'],
      ['Lakh', '10^5', '100 thousand'],
      ['Million', '10^6', '10 lakh'],
      ['Crore', '10^7', '10 million'],
      ['Billion', '10^9', '100 crore'],
      ['Lakh crore', '10^12', '1 trillion'],
    ] },
    { t: 'note', kind: 'exam', title: 'Original practice, not a UPSC question: size estimate', text: 'A country has an income of Rs 300 lakh crore and 150 crore people, as round made-up numbers. What is income per person? Write it in powers: 300 x 10^12 / (150 x 10^7) = 2 x 10^5. **Answer: Rs 2 lakh.** You can often pick the right option from the power of ten alone.' },

    { t: 'h', text: 'Percentages' },
    { t: 'table', caption: 'Fractions to learn by heart. They turn long division into one step.', head: ['Fraction', 'Percent', 'Fraction', 'Percent'], rows: [
      ['1/2', '50%', '1/8', '12.5%'],
      ['1/3', '33.33%', '1/9', '11.11%'],
      ['1/4', '25%', '1/10', '10%'],
      ['1/5', '20%', '1/11', '9.09%'],
      ['1/6', '16.67%', '1/12', '8.33%'],
      ['1/7', '14.29%', '1/16', '6.25%'],
    ] },
    { t: 'table', caption: 'Worked examples. All are original practice, not UPSC questions.', head: ['Type', 'Example', 'Working', 'Answer'], rows: [
      ['Quick percent', '15% of 240', '10% = 24; 5% = 12; 24 + 12', '**36**'],
      ['Approximation', '49.8% of 401', 'About half of 400', '**About 200** (exact: 199.7)'],
      ['Reverse', 'After a 25% rise, a price is Rs 500. What was it?', '500 / 1.25', '**Rs 400**'],
      ['Successive change', 'Up 20%, then down 20%', '100 to 120 to 96', '**Net fall of 4%**'],
      ['More than, less than', 'A earns 25% more than B. By what percent is B below A?', '25 / 125', '**20%**'],
      ['Constant spending', 'Price rises 25%. Cut in use to keep spending the same?', '25 / 125', '**20%**'],
      ['Mixed groups', '40% of voters are women. 50% of women and 30% of men voted. Overall turnout?', '0.4 x 50 + 0.6 x 30 = 20 + 18', '**38%**'],
    ] },
    { t: 'p', text: '**The successive-change formula:** for changes of a% and b%, the net is **a + b + ab/100**. Use a minus sign for a fall. For the example above: 20 - 20 - (20 x 20)/100 = -4.' },
    { t: 'compare', caption: 'Two ideas that are often confused.', columns: [
      { title: 'Percentage points', items: ['Simple difference between two percentages', 'A rate going from 8% to 10% is up **2 percentage points**', 'Used for interest rates, turnout, shares'] },
      { title: 'Percent change', items: ['Change divided by the old value', 'The same move, from 8% to 10%, is 2 / 8, or **25%**', 'Always ask: percent of what?'] },
    ] },
    { t: 'note', kind: 'trap', title: 'The base changes', text: 'A fall of 20% does not undo a rise of 20%. The second percent applies to a new base. This is the most common percent error, so always use base 100 and walk through the steps.' },

    { t: 'h3', text: 'Profit, loss and discount' },
    { t: 'p', text: 'These are percentages with fixed bases. **Profit and loss are on cost price.** **Discount is on marked price.**' },
    { t: 'table', caption: 'Original practice, not UPSC questions.', head: ['Example', 'Working', 'Answer'], rows: [
      ['Cost Rs 800, sold for Rs 920. Profit percent?', '120 / 800', '**15%**'],
      ['Marked 25% above cost, then 20% discount. Profit?', '100 to 125; 125 x 0.8 = 100', '**None.** Sale price equals cost'],
    ] },

    { t: 'h', text: 'Ratios and proportion' },
    { t: 'p', text: 'Think in **parts**. A ratio tells you the parts. Find what one part is worth, then multiply.' },
    { t: 'table', caption: 'Worked examples. All are original practice, not UPSC questions.', head: ['Type', 'Example', 'Working', 'Answer'], rows: [
      ['Sharing', 'Split 360 in the ratio 2:3:4', '9 parts; 1 part = 40', '**80, 120, 160**'],
      ['Joining ratios', 'A:B = 2:3 and B:C = 4:5. Find A:B:C', 'Make B equal: B = 12. A:B = 8:12; B:C = 12:15', '**8:12:15**'],
      ['Ages', 'Ages are 3:4 now and 4:5 after 5 years', '(3x + 5)/(4x + 5) = 4/5; 15x + 25 = 16x + 20; x = 5', '**15 and 20**'],
      ['Partnership', 'A puts in Rs 4,000 for 12 months; B, Rs 6,000 for 6 months. Share a profit of Rs 1,400', 'Money x time: 48,000:36,000 = 4:3', '**A Rs 800, B Rs 600**'],
      ['Mixture', '20 litres of milk and water at 3:1. How much water to add for 3:2?', 'Milk 15, water 5. 15/(5 + w) = 3/2; 5 + w = 10', '**5 litres**'],
    ] },
    { t: 'h3', text: 'Alligation for mixing two prices' },
    { t: 'strata', caption: 'Original practice, not a UPSC question: mix rice at Rs 40 and Rs 60 per kg to get a mix worth Rs 45 per kg.', layers: [
      { title: 'Write the prices', sub: 'Cheap 40, dear 60, mean 45' },
      { title: 'Take differences from the mean', sub: 'Dear minus mean: 60 - 45 = 15. Mean minus cheap: 45 - 40 = 5' },
      { title: 'Read the ratio', sub: 'Cheap : dear = 15 : 5 = 3 : 1' },
      { title: 'Check', sub: '(3 x 40 + 1 x 60) / 4 = 180 / 4 = 45' },
    ] },
    { t: 'note', kind: 'trap', title: 'In mixtures, track what stays fixed', text: 'When you add water, the milk does not change. Do not scale both sides of the ratio. Solve for the fixed part first, as in the mixture row above.' },

    { t: 'h', text: 'Averages' },
    { t: 'p', text: '**Average = sum / count.** So **sum = average x count**. Most average questions become easy once you turn them into sums.' },
    { t: 'table', caption: 'Worked examples. All are original practice, not UPSC questions.', head: ['Type', 'Example', 'Working', 'Answer'], rows: [
      ['Deviation method', 'Average of 47, 52, 49, 56, 46', 'Base 50: -3, +2, -1, +6, -4, which sum to 0', '**50**'],
      ['New member', 'Average of 20 students is 35. It becomes 36 with a teacher added. Teacher\'s value?', '36 x 21 - 35 x 20 = 756 - 700', '**56**'],
      ['Weighted', '30 boys average 60; 20 girls average 70', '(1,800 + 1,400) / 50', '**64**'],
      ['Corrected data', 'Average of 10 numbers is 24. One was entered as 52 instead of 25', 'Sum 240, less 27 = 213; 213 / 10', '**21.3**'],
      ['Natural numbers', 'Average of the first 50 natural numbers', '(50 + 1) / 2', '**25.5**'],
    ] },
    { t: 'note', kind: 'trap', title: 'Do not average averages', text: 'In the weighted row, the simple average of 60 and 70 is 65, but the answer is 64, because there are more boys. The weighted result always lies closer to the larger group. Average speed has the same trap, which is covered in the next note.' },

    { t: 'h', text: 'Practice plan for today' },
    { t: 'table', caption: 'Personal advice for your 25 timed questions. This split is not an official pattern.', head: ['Block', 'Questions', 'Check afterwards'], rows: [
      ['Percent, profit and loss', '10', 'Did you keep the right base?'],
      ['Ratios and mixtures', '8', 'Did you track the fixed part?'],
      ['Averages', '5', 'Did you use sums?'],
      ['Orders of magnitude', '2', 'Did you check the power of ten?'],
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'No Mains paper here, but the skill carries over', text: 'CSAT is not tested in Mains. Yet the difference between a percent and a percentage point, or between a rate and a level, matters when you quote data in GS answers. Getting these right makes your answers more exact.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Lakh 10^5, crore 10^7, lakh crore 10^12 (1 trillion).',
      'Net of two changes: a + b + ab/100.',
      'Rise of r%: fall to reverse is r / (100 + r). So 25% gives 20%.',
      'Profit on cost; discount on marked price.',
      'Ratio: count parts, value one part.',
      'Alligation: differences from the mean give the ratio, crosswise.',
      'Average x count = sum.',
      'Every example here is original practice, not a past UPSC question.',
    ] },
  ],
  sources: [
    { label: 'UPSC syllabus file, Prelims Paper II (checked in your folder)' },
    { label: 'UPSC, Examination Notice 05/2026-CSE, for the 33% rule (seen as search excerpt; UPSC blocked direct opening)', url: 'https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf' },
  ],
  beyond: {
    refer: [
      { what: 'Full official GS Paper II', where: 'UPSC previous question papers', why: 'Real questions for timed practice, which this note does not include.', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
      { what: 'NCERT Class X Mathematics', where: 'NCERT free textbook site', why: 'If a method feels new, go to the level the syllabus names.', url: 'https://ncert.nic.in/textbook.php' },
    ],
    current: [
      { issue: 'CSAT numeracy', link: 'No major recent development found as of November 2026. Recheck the CSE 2027 notice.', source: 'UPSC notice for 2026', url: 'https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf' },
    ],
  },
}
