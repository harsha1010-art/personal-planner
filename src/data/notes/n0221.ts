import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-02-21',
  summary: 'CSAT methods for time and work, speed and distance, the number system, and data interpretation, each with short worked examples. All examples are original practice.',
  minutes: 25,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'These four areas look different, but they rest on a few ideas: **rate x time = amount**, breaking numbers into factors, and reading data with care. The syllabus places numeracy and data interpretation (charts, graphs, tables, data sufficiency) at **Class X level**. CSAT qualifies at **33%**, so pick accuracy over speed. Today\'s plan output is **25 timed questions**, about **38 minutes** at 1.5 minutes each.' },
    { t: 'note', kind: 'exam', title: 'About every example here', text: 'All examples and all data below are **original practice, invented for this note**. None is a past UPSC question. Official GS Paper II has not been downloaded for this site, so take real questions from the UPSC website.' },
    { t: 'compare', caption: 'The same relation appears in both topics.', columns: [
      { title: 'Time and work', items: ['Work = rate x time', 'Rate is work per day', 'Working together: rates add', 'Opposing, such as a leak: rates subtract'] },
      { title: 'Speed and distance', items: ['Distance = speed x time', 'Speed is distance per hour', 'Opposite directions: speeds add', 'Same direction: speeds subtract'] },
    ] },

    { t: 'h', text: 'Time and work' },
    { t: 'flow', caption: 'The LCM method avoids fractions.', steps: [
      { title: 'Total work', sub: 'Take the LCM of the days' },
      { title: 'Daily rate', sub: 'Total / days for each person' },
      { title: 'Combine', sub: 'Add, or subtract if opposing' },
      { title: 'Time', sub: 'Total / combined rate' },
    ] },
    { t: 'table', caption: 'Worked examples. All are original practice, not UPSC questions.', head: ['Type', 'Example', 'Working', 'Answer'], rows: [
      ['Together', 'A takes 12 days; B takes 18 days', 'LCM 36. Rates 3 and 2. 36 / 5', '**7.2 days**'],
      ['One leaves', 'Same pair. They work 3 days, then A leaves', 'Done 3 x 5 = 15. Left 21. B: 21 / 2 = 10.5. Total 3 + 10.5', '**13.5 days**'],
      ['Efficiency', 'A is twice as fast as B. B alone takes 30 days', 'A takes 15. LCM 30. Rates 2 and 1. 30 / 3', '**10 days**'],
      ['Worker-days', '12 workers take 15 days. How long for 20 workers?', '12 x 15 = 180; 180 / 20', '**9 days**'],
      ['Worker-hours', '10 workers, 12 days, 6 hours a day. How long for 9 workers at 8 hours?', '10 x 12 x 6 = 720; 720 / (9 x 8)', '**10 days**'],
      ['Pipes', 'One pipe fills in 10 hours; a leak empties in 15 hours', 'LCM 30. Rates +3 and -2. 30 / 1', '**30 hours**'],
    ] },
    { t: 'note', kind: 'trap', title: 'Add rates, not days', text: 'Two people taking 12 and 18 days do not take 30 days, or 15 days. Together they must take less than the faster person alone. If your answer is more than 12, it is wrong. Use this as a quick check.' },

    { t: 'h', text: 'Speed, distance and time' },
    { t: 'p', text: '**Conversion:** to change km/h into m/s, multiply by **5/18**. So 72 km/h = 72 x 5/18 = **20 m/s**. To go back, multiply by 18/5.' },
    { t: 'table', caption: 'Worked examples. All are original practice, not UPSC questions.', head: ['Type', 'Example', 'Working', 'Answer'], rows: [
      ['Average speed', 'Equal distances at 40 and 60 km/h', '2 x 40 x 60 / (40 + 60) = 4,800 / 100', '**48 km/h**'],
      ['Train and pole', '150 m train at 54 km/h', '54 km/h = 15 m/s; 150 / 15', '**10 seconds**'],
      ['Train and platform', 'Same train, 300 m platform', 'Distance = 150 + 300 = 450; 450 / 15', '**30 seconds**'],
      ['Trains crossing', '120 m and 180 m trains, opposite directions, 40 and 50 km/h', 'Relative 90 km/h = 25 m/s; 300 / 25', '**12 seconds**'],
      ['Boats', 'Downstream 15 km/h; upstream 9 km/h', 'Boat (15 + 9) / 2; stream (15 - 9) / 2', '**Boat 12, stream 3 km/h**'],
      ['Late and early', 'At 4 km/h you are 10 minutes late; at 5 km/h, 5 minutes early', 'Gap 15 minutes = 1/4 hour. D/4 - D/5 = 1/4, so D/20 = 1/4', '**5 km**'],
    ] },
    { t: 'note', kind: 'trap', title: 'Speed traps', text: '**Average speed is not the average of speeds.** For the same distance at 40 and 60, the answer is 48, not 50, since you spend longer at the lower speed. Also, **match the units first**: do not divide metres by km/h. A train crossing a pole covers only its own length. A platform adds the platform\'s length.' },

    { t: 'h', text: 'Number system' },
    { t: 'table', caption: 'Divisibility rules.', head: ['Divisor', 'Rule'], rows: [
      ['2, 5, 10', 'Check the last digit'],
      ['3, 9', 'The sum of digits is divisible by 3 or 9'],
      ['4', 'The last two digits form a multiple of 4'],
      ['8', 'The last three digits form a multiple of 8'],
      ['6', 'Divisible by both 2 and 3'],
      ['11', 'Alternate digit sum difference is 0 or a multiple of 11'],
    ] },
    { t: 'table', caption: 'Worked examples. All are original practice, not UPSC questions.', head: ['Type', 'Example', 'Working', 'Answer'], rows: [
      ['Divisibility', 'Is 7,128 divisible by 9 and 11?', 'Digit sum 18, so 9 works. 8 - 2 + 1 - 7 = 0, so 11 works', '**Yes to both** (792 x 9; 648 x 11)'],
      ['LCM', 'Bells ring every 12, 18 and 30 minutes. Next together?', '2^2 x 3^2 x 5 = 180 minutes', '**After 3 hours**'],
      ['HCF and LCM', 'Numbers 12 and 18', 'HCF 6, LCM 36; 6 x 36 = 216 = 12 x 18', '**Product rule holds**'],
      ['Same remainder', 'Smallest number above 3 leaving remainder 3 on division by 4, 5 and 6', 'LCM 60; 60 + 3', '**63**'],
      ['Unit digit', 'Unit digit of 7^22', 'Cycle 7, 9, 3, 1, length 4. 22 leaves remainder 2', '**9**'],
      ['Trailing zeros', 'Zeros at the end of 25!', 'Count fives: 25/5 + 25/25 = 5 + 1', '**6**'],
      ['Count of factors', 'Factors of 72', '72 = 2^3 x 3^2; (3 + 1)(2 + 1)', '**12**'],
      ['Digit counting', 'How many times is 5 written from 1 to 100?', 'Units place 10, tens place 10', '**20**'],
    ] },
    { t: 'note', kind: 'trap', title: 'Number traps', text: 'HCF x LCM = product works for **two numbers only**. 1 is neither prime nor composite, and 2 is the only even prime. In digit counting, 55 uses the digit twice, so it counts twice: that is why the answer is 20, not 19.' },

    { t: 'h', text: 'Data interpretation' },
    { t: 'table', caption: 'Invented data for original practice, not from UPSC or any real source: a farm output in tonnes.', head: ['Year', 'Rice', 'Wheat', 'Pulses', 'Total'], rows: [
      ['2023', '120', '80', '50', '250'],
      ['2024', '150', '90', '60', '300'],
      ['2025', '180', '99', '66', '345'],
    ] },
    { t: 'table', caption: 'Questions on the table above. All are original practice.', head: ['Question', 'Working', 'Answer'], rows: [
      ['Wheat share of total output in 2024?', '90 / 300', '**30%**'],
      ['Growth in rice from 2023 to 2024?', '30 / 120', '**25%**'],
      ['Growth in rice from 2024 to 2025?', '30 / 150', '**20%**'],
      ['Growth in total from 2024 to 2025?', '45 / 300', '**15%**'],
      ['Highest growth from 2023 to 2025?', 'Rice 60/120 = 50%; wheat 19/80 = 23.75%; pulses 16/50 = 32%', '**Rice**'],
    ] },
    { t: 'note', kind: 'trap', title: 'Absolute versus percent', text: 'Rice rose by 30 tonnes in both years, yet its growth fell from 25% to 20%. The same rise on a bigger base is a smaller percent. Check whether the question asks about the change, the percent change or the share.' },
    { t: 'list', items: [
      '**Pie charts:** 360 degrees is 100%. So a 72 degree slice is 72/360 = 20%. On a made-up budget of Rs 500 crore, that is Rs 100 crore.',
      '**Bar and line charts:** read the axis and its units first. A bar chart with a cut-off axis can make small gaps look large.',
      '**Save time:** compare fractions by rough size before working out exact values. Options are often far apart.',
      '**Use only the data given:** do not bring in outside facts, even if you know them.',
    ] },

    { t: 'h3', text: 'Data sufficiency' },
    { t: 'p', text: 'You do not need the answer, only whether the statements are **enough** to get one answer. Test statement I alone, then II alone, and then both.' },
    { t: 'table', caption: 'Original practice, not UPSC questions.', head: ['Question', 'Statement I', 'Statement II', 'Verdict'], rows: [
      ['What is x?', 'x + y = 10', 'x - y = 2', '**Both needed.** Each alone has many answers. Together x = 6'],
      ['Is n even?', 'n is divisible by 6', 'n is divisible by 3', '**I alone is enough.** Every multiple of 6 is even. II fails: 3 is odd, 6 is even'],
    ] },
    { t: 'note', kind: 'trap', title: 'A clear "no" is still an answer', text: 'In a yes-or-no question, a statement is sufficient if it always gives **no** as well as if it always gives **yes**. It fails only if the answer can be either one.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'No Mains paper here, but the skill carries over', text: 'CSAT is not tested in Mains. Still, reading a table properly helps you use Economic Survey data in GS answers. Share, growth and level tell different stories, and a good answer says which one it is using.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Work: LCM as total, rates add. Check against the faster person.',
      'Equal distances: average speed = 2ab / (a + b).',
      'km/h to m/s: multiply by 5/18.',
      'Train passing: add the lengths it must clear; add speeds if opposite, subtract if same direction.',
      'Divisibility by 11: alternate digit sum difference.',
      'Trailing zeros: count fives.',
      'Factor count: add 1 to each power and multiply.',
      'Data sufficiency: you judge the statements, not the number.',
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
      { what: 'NCERT Class X Mathematics', where: 'NCERT free textbook site', why: 'For number system and statistics basics at the level the syllabus names.', url: 'https://ncert.nic.in/textbook.php' },
    ],
    current: [
      { issue: 'CSAT numeracy and DI', link: 'No major recent development found as of November 2026. Recheck the CSE 2027 notice.', source: 'UPSC notice for 2026', url: 'https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf' },
    ],
  },
}
