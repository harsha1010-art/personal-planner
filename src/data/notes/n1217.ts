import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-17',
  summary: 'What aptitude means for a civil servant, the foundational values the syllabus lists, emotional intelligence, and public service ethics in practice.',
  minutes: 19,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Knowing what is right is not enough. An officer must also be able to do it, under pressure, among angry people, with limited resources. This block covers that capacity. The syllabus words are: **"Aptitude and foundational values for Civil Service, integrity, impartiality and non-partisanship, objectivity, dedication to public service, empathy, tolerance and compassion towards the weaker-sections"**, and **"Emotional intelligence-concepts, and their utilities and application in administration and governance"**.' },

    { t: 'h', text: 'Aptitude' },
    { t: 'p', text: '**Aptitude** is a natural or developed capacity to learn or perform a kind of task. It indicates potential. It can be trained, and it differs from person to person. For civil service it includes analytical ability, decision-making, communication, leadership and the ability to handle stress.' },
    { t: 'compare', caption: 'Commonly confused terms.', columns: [
      { title: 'Aptitude', items: ['Potential to do something', '"Can she learn to do it?"', 'Example: quick grasp of numbers'] },
      { title: 'Ability or skill', items: ['Present competence', '"Can she do it now?"', 'Example: can read a balance sheet'] },
      { title: 'Attitude', items: ['Evaluative tendency', '"Does she want to, and how does she view it?"', 'Example: willingness to serve the poor'] },
      { title: 'Interest', items: ['What a person likes doing', 'Motivates effort', 'Example: enjoys field work'] },
    ] },
    { t: 'note', kind: 'mains', title: 'Aptitude versus attitude', text: 'A common question asks which matters more. A balanced answer: aptitude gets the work done, attitude decides for whom and how. A skilled but dishonest officer does more harm than an unskilled one. Selection can test both, but training must keep building both, as in **Mission Karmayogi** (approved September 2020).' },

    { t: 'h', text: 'The foundational values' },
    { t: 'table', caption: 'Syllabus values, with what each means, an example, and what breaks it.', head: ['Value', 'Meaning', 'In practice', 'Threat'], rows: [
      ['**Integrity**', 'Consistency between values, words and acts, even unobserved. Includes honesty, but is wider.', 'Declaring a conflict of interest when a relative bids for a tender', 'Pressure, greed, "everyone does it"'],
      ['**Impartiality**', 'Treating people without favour, based on merit and rules', 'Same enforcement for a rich builder and a poor vendor', 'Caste, region, personal ties'],
      ['**Non-partisanship**', 'Serving the government of the day, without party loyalty', 'Giving the same frank advice to any ruling party', 'Transfers, post-retirement jobs'],
      ['**Objectivity**', 'Decisions based on evidence, not bias or feeling', 'Reading data and hearing both sides before an order', 'Prejudice, haste, media pressure'],
      ['**Dedication to public service**', 'Putting public interest above personal comfort', 'Stay in a flood zone until relief is complete', 'Burnout, indifference'],
      ['**Empathy**', 'Understanding a situation as the other person feels it', 'Seeing why a widow cannot come to the office for a pension', 'File-centred thinking'],
      ['**Tolerance**', 'Accepting views and ways of life unlike one\'s own, within the law', 'Hearing protesters with respect', 'Majoritarian attitudes, arrogance'],
      ['**Compassion towards the weaker sections**', 'Empathy plus the urge to act on suffering', 'Fast-tracking a disability certificate; camp at the village', 'Social distance, elitism'],
    ] },
    { t: 'compare', caption: 'Distinctions UPSC likes. Keep these exact.', columns: [
      { title: 'Sympathy, empathy, compassion', items: ['**Sympathy:** feeling for someone', '**Empathy:** feeling with someone', '**Compassion:** feeling plus action'] },
      { title: 'Integrity, probity', items: ['**Integrity:** inner consistency of character', '**Probity:** proven uprightness in public dealing; integrity shown and checked by procedure'] },
      { title: 'Impartiality, neutrality', items: ['**Impartiality:** no favour while applying rules', '**Non-partisanship:** no party loyalty', '**Neutrality:** can wrongly become indifference; a "committed" officer can still be committed to the Constitution'] },
    ] },
    { t: 'p', text: 'The debate on **neutral versus committed bureaucracy** came to the fore in the early 1970s. The sound view: an officer is neutral between parties, but never neutral on constitutional values, the rule of law or the welfare of citizens.' },

    { t: 'h3', text: 'Sources of these values in Indian rules' },
    { t: 'table', head: ['Source', 'What it does'], rows: [
      ['**Constitution:** Preamble, Part III and IV', 'Sets the values an officer serves. Articles **309-311** cover services.'],
      ['**All India Services (Conduct) Rules, 1968**', 'Conduct rules for IAS, IPS, IFoS: for example, political neutrality and limits on gifts.'],
      ['**Central Civil Services (Conduct) Rules, 1964**', 'Parallel conduct rules for central employees'],
      ['**2nd ARC Fourth Report (2007)**', 'Recommended that "Public Service Values" be defined and made applicable to all tiers of government, with breaches treated as misconduct.'],
      ['**Nolan Committee, UK (1995)**', 'Seven principles: selflessness, integrity, objectivity, accountability, openness, honesty, leadership. The 2nd ARC refers to these.'],
    ] },
    { t: 'note', kind: 'trap', title: 'Code of ethics or code of conduct', text: '**Code of ethics** gives broad values (aspirational). **Code of conduct** lists specific do\'s and don\'ts (enforceable). India has conduct rules for officers. The 2nd ARC pressed for a stated set of public service values to sit above them.' },

    { t: 'h', text: 'Emotional intelligence' },
    { t: 'p', text: 'The term was given academic form by **Peter Salovey and John Mayer (1990)**, as the ability to monitor one\'s own and others\' emotions, tell them apart, and use that information to guide thinking and action. **Daniel Goleman** made it popular with his 1995 book.' },
    { t: 'wheel', caption: 'Goleman\'s five components. The first three are about the self, the last two about others.', center: 'Emotional intelligence', spokes: ['Self-awareness', 'Self-regulation', 'Motivation', 'Empathy', 'Social skills'] },
    { t: 'table', caption: 'Main models of EI.', head: ['Model', 'Proponent', 'Idea'], rows: [
      ['**Ability model**', 'Mayer and Salovey', 'Four abilities: perceive, use, understand and manage emotion. Tested like an intelligence.'],
      ['**Mixed or competency model**', 'Goleman', 'Combines abilities with workplace competencies such as leadership.'],
      ['**Trait or mixed model**', 'Bar-On (EQ-i)', 'A range of emotional and social traits, self-reported.'],
    ] },
    { t: 'compare', caption: 'IQ and EQ. Neither replaces the other.', columns: [
      { title: 'IQ', items: ['Reasoning, memory, logic', 'Relatively stable after youth', 'Predicts academic performance well', 'Helps find the right solution'] },
      { title: 'EI', items: ['Handling emotions and relationships', 'Can be trained, according to its proponents', 'Linked with leadership in many studies, though the evidence is debated', 'Helps get the solution accepted'] },
    ] },
    { t: 'h3', text: 'Utility in administration and governance' },
    { t: 'table', head: ['Situation', 'Without EI', 'With EI'], rows: [
      ['**Riot or tense crowd**', 'Officer shouts, forces action, inflames anger', 'Stays calm, hears elders, then acts firmly'],
      ['**Citizen grievance**', 'Sees a nuisance and a file', 'Recognises fear behind anger; gives clear timeline'],
      ['**Team under deadline**', 'Blames, demoralises', 'Motivates and shares credit'],
      ['**Political pressure**', 'Reacts angrily or gives in', 'Controls reaction, records the request, cites the rule'],
      ['**Disaster relief**', 'Burnout, poor decisions', 'Manages own stress; shows care for survivors and staff'],
      ['**Gender or caste sensitivity**', 'Dismisses a complainant\'s distress', 'Gives dignity and privacy in hearing'],
    ] },
    { t: 'flow', caption: 'A way to use EI in the moment, useful in a case-study answer.', steps: [
      { title: 'Notice', sub: 'What am I feeling? What are they feeling?' },
      { title: 'Pause', sub: 'Do not act on the first impulse' },
      { title: 'Understand', sub: 'What is behind the anger?' },
      { title: 'Respond', sub: 'Calm tone, clear rule, a next step' },
    ] },
    { t: 'note', kind: 'trap', title: 'Limits of EI', text: 'EI is not automatically ethical. **Dark use:** skilled manipulators and demagogues can read and use others\' emotions. Excess empathy can bias judgement toward the person in front of you. So pair EI with integrity and objectivity. Also note critics who argue that "EI" is measured poorly in self-report tests. **Emotional labour** (Hochschild) adds a warning: constantly managing feelings at work is tiring and needs support.' },
    { t: 'p', text: 'Ways to build EI: reflection or journalling, feedback from colleagues (360-degree appraisal), mindfulness, field exposure, role-play in training, and mentoring. These fit with the role-based focus of Mission Karmayogi.' },

    { t: 'h', text: 'Civil service values in practice: status and problems' },
    { t: 'p', text: 'The syllabus also asks about **"Public/Civil service values and Ethics in Public administration: Status and problems"**, plus **laws, rules, regulations and conscience as sources of ethical guidance**. Read this with the probity note.' },
    { t: 'table', caption: 'Common ethical problems in government.', head: ['Problem', 'Example', 'Remedy'], rows: [
      ['Politicisation', 'Transfer for refusing to favour someone', 'Civil services boards and fixed tenure (**T.S.R. Subramanian v Union of India, 2013**)'],
      ['Conflict of interest', 'Post-retirement jobs in regulated firms', 'Cooling-off period, disclosure'],
      ['Corruption and collusion', 'Procurement favours', 'E-procurement, integrity pacts, vigilance'],
      ['Status quo and red tape', 'Avoiding decisions from fear of inquiry', 'Protect honest decisions; focus on intent'],
      ['Elitism', 'Distance from citizens', 'Field postings, social audit, citizen feedback'],
    ] },
    { t: 'table', caption: 'Sources of ethical guidance and how they rank in conflict.', head: ['Source', 'Strength', 'Limit'], rows: [
      ['**Law**', 'Clear, enforceable', 'Lags behind change; can be unjust'],
      ['**Rules and regulations**', 'Detailed, routine', 'May be rigid or outdated'],
      ['**Conscience**', 'Personal moral check', 'Subjective, can be biased'],
    ] },
    { t: 'note', kind: 'mains', title: 'When law and conscience conflict', text: 'A sound order: follow the law first; use your discretion within it to help; record your reasons; raise the issue with superiors or seek change through proper channels. Illegal orders must not be followed. Refusal should be in writing. Conscience alone does not permit an officer to break the law, but it does guide how law is used.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Define and distinguish values (integrity and probity; sympathy, empathy and compassion). Ask how EI helps in specific administrative settings such as law and order or a grievance hearing. Explain neutrality and commitment. Use the 2nd ARC and the Nolan principles for authority. Give a short field example for each value.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Aptitude is potential; attitude is evaluative tendency.',
      'Compassion is empathy plus action.',
      'Salovey and Mayer 1990; Goleman 1995.',
      'Goleman\'s five: self-awareness, self-regulation, motivation, empathy, social skills.',
      'Nolan seven: selflessness, integrity, objectivity, accountability, openness, honesty, leadership.',
      'AIS Conduct Rules 1968; CCS Conduct Rules 1964.',
    ] },
  ],
  sources: [
    { label: 'UPSC CSE syllabus, GS Paper IV (candidate\'s copy, upsc-syllabus.pdf, p4)' },
    { label: 'Second Administrative Reforms Commission, Fourth Report: Ethics in Governance (January 2007), paras 2.2.5 and 2.7.12', url: 'https://delhihighcourt.nic.in/web/sites/default/files/reports/ethics4.pdf' },
  ],
  beyond: {
    refer: [
      { what: 'All India Services (Conduct) Rules, 1968', where: 'Department of Personnel and Training', why: 'For exact rule text on gifts, political neutrality and conduct, because rules are amended over time.' },
      { what: 'Mission Karmayogi programme material', where: 'Department of Personnel and Training', why: 'Latest status of the capacity-building programme changes, so confirm figures there before quoting.' },
    ],
    current: [
      { issue: 'No major recent development found', link: 'Nothing specific to this block was confirmed as of November 2026. See the probity note for current developments in vigilance and RTI.', source: 'Not applicable' },
    ],
  },
}
