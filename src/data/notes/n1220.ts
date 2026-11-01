import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-20',
  summary: 'A reusable method for GS IV case studies, plus two original worked cases, clearly marked as practice. They are not past UPSC questions.',
  minutes: 18,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The syllabus ends with **"Case Studies on above issues"**. In recent papers, Section B has been case studies, and it carries about half of the 250 marks. Check the latest paper for the exact pattern. These questions test judgement, not memory. A good case answer is not a moral essay. It reads like a good officer\'s note: who is affected, what is at stake, what are the options, what will you do, in what order.' },
    { t: 'note', kind: 'exam', title: 'This has now reached Prelims', text: 'The official **Prelims 2026** GS Paper I had scenario questions on ethics and administration. One had an officer reporting a vaccine distributor that compromised quality, and asked which principle of public administration it showed. Another asked how to mediate over a waste plant near a tribal hamlet. A third asked what an official should do with unproven information on a contractor. Read them in the paper itself. The method below works for those as well.' },

    { t: 'h', text: 'The method: SOCIAL-A' },
    { t: 'p', text: 'This memory aid is our own, not an official format. Use it as a checklist. In the exam, do not name the steps in full. Use them as headings or a mental plan.' },
    { t: 'flow', caption: 'Seven steps. Spend roughly the first two minutes on the first three.', steps: [
      { title: 'S: Stakeholders', sub: 'Who is affected, including the voiceless?' },
      { title: 'O: Overview of facts', sub: 'What do I know, and what do I not know?' },
      { title: 'C: Conflict of values', sub: 'Name the dilemma exactly' },
      { title: 'I: Info and law', sub: 'What do law, rules and precedent say?' },
      { title: 'A: Alternatives', sub: 'Three or more options, with pros and cons' },
      { title: 'L: Line of action', sub: 'Choose one, with steps by time' },
      { title: 'A: After-care', sub: 'Long-term and systemic fix' },
    ] },
    { t: 'table', caption: 'What each step should look like on paper.', head: ['Step', 'Write', 'Avoid'], rows: [
      ['Stakeholders', 'A short table or list, with each one\'s interest', 'Listing only the obvious parties'],
      ['Facts', 'Separate facts from allegations. State gaps.', 'Assuming guilt from a rumour'],
      ['Values', '"Efficiency versus fairness", "loyalty versus honesty"', 'Writing only "this is an ethical issue"'],
      ['Law', 'Name the relevant Act, rule or duty if you are sure', 'Citing a section you are unsure of'],
      ['Options', 'Include a tempting bad option, and explain why not', 'Two extremes, with nothing in between'],
      ['Decision', 'Immediate (24 hours), short term, long term; specific and doable', 'Vague lines like "will sensitise all stakeholders"'],
      ['System fix', 'SOP, audit, training, feedback', 'Grand reforms outside your powers'],
    ] },

    { t: 'h3', text: 'Tests for a hard decision' },
    { t: 'table', caption: 'When two options look close, run them through these.', head: ['Test', 'The question', 'Basis'], rows: [
      ['Legality', 'Is it within law and rules?', 'Rule of law'],
      ['Harm', 'Who gets hurt, how badly, and can it be reversed?', 'Utilitarian, and care ethics'],
      ['Dignity', 'Am I using a person only as a means?', 'Kant'],
      ['Worst-off', 'What does this do for the weakest?', 'Rawls, Gandhi\'s talisman'],
      ['Publicity', 'Could I defend this openly, in the press or before a court?', 'Transparency'],
      ['Mirror', 'Would I want this rule applied to my own family?', 'Universalisability'],
    ] },
    { t: 'h3', text: 'Order of escalation for pressure from above' },
    { t: 'strata', caption: 'Go down the ladder only as needed. Most cases stop before the last rungs.', layers: [
      { title: '1. Clarify', sub: 'Politely explain the rule and consequences.' },
      { title: '2. Put in writing', sub: 'Ask for a written order, and record your view in the file.' },
      { title: '3. Escalate', sub: 'Inform the next superior or Chief Vigilance Officer.' },
      { title: '4. Formal complaint', sub: 'CVC, PIDPI complaint or other legal channel.' },
      { title: '5. Refuse', sub: 'Do not carry out an illegal order, and accept the career cost.' },
    ] },
    { t: 'compare', caption: 'Common traps.', columns: [
      { title: 'Marks are lost when you', items: ['Resign at once (it abandons the people you serve)', 'Go straight to the media', 'Take a heroic, one-person route', 'Ignore your own conflict of interest', 'Choose a side before knowing facts', 'Forget to help the victim right now'] },
      { title: 'Marks are gained when you', items: ['Help the person first, then fix the system', 'Follow the chain of command, then go beyond it if needed', 'Protect the whistleblower\'s identity', 'Mix firmness with empathy', 'Give specific times and names of offices', 'Accept a cost honestly'] },
    ] },
    { t: 'note', kind: 'trap', title: 'False dilemmas', text: 'A case often gives you two bad choices, such as "either complete the bridge on time or report the defect". Look for a third path: report the defect, and propose a revised schedule with a safe interim route. Examiners want to see that you can widen the options, without dodging the decision.' },

    { t: 'h', text: 'Worked case 1 (practice example, not a UPSC question)' },
    { t: 'note', kind: 'exam', title: 'Practice case: the pension camp', text: 'You are District Collector of a drought-hit district. A pension drive must meet a target by the end of the month, and the minister will visit. Your deputy reports that 2,000 pension claims are in the system, but some names look false: a local politician\'s workers helped fill the forms, and 150 applicants may be dead or absent. Stopping now will delay payment for real, elderly beneficiaries, and the politician has warned you against "creating trouble". What will you do?' },
    { t: 'table', caption: 'Stakeholders.', head: ['Who', 'Interest'], rows: [
      ['Elderly real beneficiaries', 'Money for food and medicine, now'],
      ['Taxpayers', 'Funds should reach only the eligible'],
      ['Politician', 'Credit and votes; may have gained from the fraud'],
      ['Your staff', 'Fear of pressure and of blame'],
      ['You', 'Duty, reputation, career'],
    ] },
    { t: 'p', text: '**The dilemma:** speedy relief versus integrity of public funds, and hierarchy versus honesty. **Facts:** 150 names are only suspected. Fraud is not yet proved, and the politician\'s role is not established. **Law:** scheme guidelines, financial rules, and the Prevention of Corruption Act if an official is involved.' },
    { t: 'table', caption: 'Options.', head: ['Option', 'Pros', 'Cons', 'Verdict'], rows: [
      ['Release all 2,000', 'Target met; no conflict', 'Possible fraud, and later liability', 'Reject'],
      ['Freeze all 2,000', 'Clean, on paper', 'Punishes the poor for others\' wrongdoing', 'Reject'],
      ['Split: release verified ones, check the 150 quickly', 'Protects both money and people', 'Needs fast verification; pressure remains', '**Choose**'],
    ] },
    { t: 'list', items: [
      '**Within 24 hours:** Release payments to those whose identity and life status are verified through the bank or Aadhaar-linked records, or by local staff. Set up teams to check the 150, with a three-day deadline. Hold a camp so that genuine people are not wrongly excluded.',
      '**Next week:** Keep everything in writing. Report the progress and the reason for any gap in the target to the department and, honestly, to the minister\'s office. Ask for a formal report on any fraud. If evidence exists, refer it for vigilance action and an FIR under the law.',
      '**Response to the pressure:** Meet the politician courteously, state the rule, and offer open credit for legitimate work. Log any threat.',
      '**Long term:** Use periodic life certificates, social audit in gram sabhas, public display of beneficiary lists, and a grievance helpline.',
    ] },
    { t: 'p', text: '**Values used:** integrity, objectivity, compassion, courage, accountability. **Reasoning:** Rawls and Gandhi point to the weakest first. Kant forbids treating the real beneficiaries as collateral. The law forbids paying out on false claims. **Cost accepted:** the target may be missed by a small margin, and you may face a transfer.' },

    { t: 'h', text: 'Worked case 2 (practice example, not a UPSC question)' },
    { t: 'note', kind: 'exam', title: 'Practice case: the factory and the river', text: 'You are the new Regional Officer of a State Pollution Control Board. A large factory employing 6,000 local workers is found to be discharging untreated effluent into a river that supplies drinking water to villages downstream. Children there have fallen ill, though the cause is unproved. Your predecessor signed a clean report. The owner offers to fund a hospital in the area if you allow "some time". Workers\' unions fear closure. A senior says, "Jobs matter more. Do not spoil the investment climate." What are your options, and what would you do?' },
    { t: 'table', caption: 'Stakeholders.', head: ['Who', 'Interest'], rows: [
      ['Villagers and children', 'Safe water, health, compensation'],
      ['Workers and families', 'Livelihood'],
      ['Factory owner', 'Profit, continued operation'],
      ['State and Board', 'Investment, credibility, the law'],
      ['River and future generations', 'No voice, but real stakes'],
    ] },
    { t: 'p', text: '**The dilemma:** right to life and health versus livelihoods; rule of law versus pressure from a superior; and a tempting "good" (a hospital) offered as a quid pro quo. **Law and principles:** Water (Prevention and Control of Pollution) Act, 1974; Environment (Protection) Act, 1986; Article 21; and the Supreme Court\'s **polluter pays** and **precautionary** principles (**Vellore Citizens Welfare Forum, 1996**).' },
    { t: 'table', caption: 'Options.', head: ['Option', 'Pros', 'Cons', 'Verdict'], rows: [
      ['Accept hospital, give time', 'Jobs safe; a visible benefit', 'A disguised bribe; harm continues', 'Reject: illegal and unethical'],
      ['Close at once and permanently', 'Stops the harm', 'Workers punished; may not be proportionate', 'Only if harm is grave and no fix exists'],
      ['Sample now; direct a time-bound, enforceable fix; order partial or temporary closure of the polluting unit if needed; safe water for villages', 'Protects health, law and as many jobs as possible', 'Needs monitoring; pressure from all sides', '**Choose**'],
    ] },
    { t: 'list', items: [
      '**Immediately:** Collect samples with a recognised laboratory and record the chain of custody. Arrange tanker water and a health camp through the Collector. Decline the offer in writing, and report it to the appropriate authority.',
      '**Within days:** On the results, issue a statutory direction: treat the effluent to the norm, with a dated plan, and a bank guarantee. If the discharge is dangerous, order the closure of the polluting process under the law, until compliance.',
      '**For the workers:** Ask the owner to protect wages during the fix. Hold a meeting with the unions and the Labour Department, so that they hear the facts directly.',
      '**For the past:** Record the mismatch with the earlier report and refer it for inquiry. Do not presume guilt. Assess compensation under polluter pays, including the river\'s restoration.',
      '**Long term:** Continuous online monitoring with public data, surprise inspections, and a citizens\' water committee.',
    ] },
    { t: 'p', text: '**Answer to the senior:** Say respectfully that a lawful, stable climate serves investment better than a hidden liability, and ask for any contrary instruction in writing. **Values used:** integrity, courage, compassion, intergenerational responsibility. **Thinkers:** a pure Bentham calculation might favour 6,000 jobs, but it ignores the long-term and uncounted harm, and Kant and Article 21 do not allow children\'s health to be traded away. Rawls supports a fix that shields both villagers and workers.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Writing under time pressure', text: 'Aim for about 250 words for a 20-mark case. Start with the core dilemma in one line. Use a small stakeholder table only if it saves words. Give options in brief. Spend most words on your chosen course of action, with clear steps. End with a line on the system fix. Practise on real past papers, timing yourself.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Order: stakeholders, facts, values, law, options, action, system fix.',
      'Help the victim first, then the system.',
      'Facts are not allegations.',
      'Ask for it in writing; escalate before going public.',
      'Find the third option, then commit to it.',
      'Resignation and going to the media are rarely the first step.',
    ] },
  ],
  sources: [
    { label: 'UPSC CSE syllabus, GS Paper IV (candidate\'s copy, upsc-syllabus.pdf, p3-4)' },
    { label: 'UPSC Civil Services Prelims 2026, GS Paper I, questions around Q51-53', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'The method and both worked cases are original practice material written for this site, not drawn from a past paper.' },
  ],
  beyond: {
    refer: [
      { what: 'Past GS IV Section B case studies', where: 'UPSC previous question papers', why: 'Only real papers show the current length, tone and marks. Write three under timed conditions.', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    ],
    current: [
      { issue: 'No major recent development found', link: 'For fresh examples, use the Section 17A and RTI disputes in the probity note (checked November 2026).', source: 'Not applicable' },
    ],
  },
}
