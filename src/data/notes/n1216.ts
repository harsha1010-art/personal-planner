import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-16',
  summary: 'The first block of GS IV: what ethics is, what shapes it, where human values come from, and how attitudes form and change.',
  minutes: 20,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: '**GS Paper IV** is titled "Ethics, Integrity, and Aptitude". The syllabus says it tests your attitude and approach to integrity, probity in public life, and how you solve problems and conflicts in dealing with society. It may use the case study approach. So this note is not only theory. Each idea below should become a tool you can use in an answer.' },
    { t: 'table', caption: 'What the syllabus asks in this block, in its own headings.', head: ['Syllabus heading', 'What it covers'], rows: [
      ['**Ethics and Human Interface**', 'Essence, determinants and consequences of ethics in human actions; dimensions of ethics; ethics in private and public relationships'],
      ['**Human Values**', 'Lessons from the lives and teachings of great leaders, reformers and administrators; role of family, society and educational institutions in inculcating values'],
      ['**Attitude**', 'Content, structure, function; its influence and relation with thought and behaviour; moral and political attitudes; social influence and persuasion'],
    ] },

    { t: 'h', text: 'Ethics: essence, determinants, consequences' },
    { t: 'p', text: '**Ethics** is the systematic study of right and wrong conduct, and the standards that guide it. Its **essence** is that a person can choose, can give reasons for the choice, and can be held responsible for it. The Second Administrative Reforms Commission (2nd ARC, 4th Report, 2007) describes ethics as a set of standards that a society places on itself to guide behaviour and choices.' },
    { t: 'compare', caption: 'Four words that candidates use loosely. Keep them apart.', columns: [
      { title: 'Values', items: ['What a person holds important', 'Example: honesty, equality', 'Stable, but ranked differently by each person'] },
      { title: 'Morals', items: ['Personal or group sense of right and wrong', 'Often shaped by faith and culture', 'Can differ across groups'] },
      { title: 'Ethics', items: ['Reasoned standards for conduct', 'Often applied to a role, such as a doctor or officer', 'Open to argument and justification'] },
      { title: 'Law', items: ['Rules enforced by the state', 'Sets the minimum standard', 'Legal is not always ethical, and the reverse also holds'] },
    ] },
    { t: 'wheel', caption: 'Determinants of ethics. In an answer, name at least three and link them to the facts.', center: 'What shapes ethical conduct', spokes: ['Conscience and reason', 'Family and upbringing', 'Religion and culture', 'Law and institutions', 'Peer group and workplace', 'Education', 'Situation and incentives', 'Leaders as role models'] },
    { t: 'table', caption: 'Consequences of ethics at three levels.', head: ['Level', 'When ethics is present', 'When ethics is absent'], rows: [
      ['Individual', 'Self-respect, clear conscience, trust from others', 'Guilt, dissonance, loss of reputation'],
      ['Organisation', 'Morale, fair decisions, lower cost of supervision', 'Corruption, delay, low morale'],
      ['Society and state', 'Public trust, legitimacy, social capital', 'Cynicism, weak institutions, unequal service delivery'],
    ] },

    { t: 'h3', text: 'Dimensions of ethics' },
    { t: 'strata', caption: 'Branches of ethics, from the most abstract to the most practical.', layers: [
      { title: 'Meta-ethics', sub: 'What do "good" and "right" mean? Are moral claims objective or relative?' },
      { title: 'Normative ethics', sub: 'What should one do? Virtue, duty and consequence theories.' },
      { title: 'Applied ethics', sub: 'Specific fields: public administration, medicine, business, environment, artificial intelligence.' },
      { title: 'Descriptive ethics', sub: 'What do people actually believe and do? An empirical study, not a prescription.' },
    ] },
    { t: 'table', caption: 'The three normative theories are the backbone of case-study reasoning.', head: ['Theory', 'Asks', 'Thinker', 'Weakness'], rows: [
      ['**Virtue ethics**', 'What would a person of good character do?', 'Aristotle', 'Gives little direct guidance in a hard choice'],
      ['**Deontology**', 'What is my duty? Is the rule itself right?', 'Kant', 'Duties can conflict; rigid about outcomes'],
      ['**Consequentialism**', 'Which option has the best outcome overall?', 'Bentham, Mill', 'Can sacrifice a minority for the majority'],
    ] },
    { t: 'note', kind: 'trap', title: 'Relativism is not the same as pluralism', text: '**Moral relativism** says right and wrong depend wholly on a culture. **Pluralism** accepts many reasonable values, yet still allows that some acts are wrong. Never use "culture" to defend a practice that violates rights, such as untouchability, which **Article 17** abolishes.' },

    { t: 'h3', text: 'Ethics in private and public relationships' },
    { t: 'compare', caption: 'Private and public ethics cannot be fully separated, but they do follow different logics.', columns: [
      { title: 'Private relationships', items: ['Family, friends', 'Rest on love, loyalty and care', 'Partiality is natural and accepted', 'Enforced by conscience and relationship'] },
      { title: 'Public relationships', items: ['Office, citizens', 'Rest on rules, equality and trust', 'Partiality is a wrong: **nepotism**', 'Enforced by law, audit and public scrutiny'] },
    ] },
    { t: 'p', text: 'The debate: should private conduct matter for public office? One view says only official conduct counts. Another says character is one, so private lapses such as domestic violence or tax evasion show unfitness. A balanced answer: private conduct matters when it is illegal, affects public trust, or bears on the duties of the office. Otherwise, privacy deserves respect, as recognised in **Puttaswamy (2017)**.' },

    { t: 'h', text: 'Human values and where they come from' },
    { t: 'table', caption: 'Lessons from leaders, reformers and administrators. Use one such example per answer, not five.', head: ['Person', 'Value', 'Lesson you can use'], rows: [
      ['**Gandhi**', 'Truth, non-violence, purity of means', 'Means shape ends. Public life needs self-scrutiny.'],
      ['**Ambedkar**', 'Equality, dignity, constitutional morality', 'Legal rights need social change to be real.'],
      ['**Jyotiba and Savitribai Phule**', 'Equality, courage', 'Opened schools for girls and for oppressed castes in the face of social hostility.'],
      ['**Raja Ram Mohan Roy**', 'Reason, reform', 'His campaign against sati shows that custom can be challenged by argument.'],
      ['**Sardar Patel**', 'Unity, firmness, duty', 'Integrated the princely states and defended a neutral All India Service.'],
      ['**Lal Bahadur Shastri**', 'Responsibility, simplicity', 'Resigned as Railway Minister in 1956 after a rail accident, accepting moral responsibility.'],
      ['**T.N. Seshan**', 'Rule of law, courage', 'As Chief Election Commissioner (1990-96), he enforced the Model Code strictly.'],
      ['**E. Sreedharan**', 'Competence, integrity', 'Konkan Railway and Delhi Metro: public projects can be run on time.'],
    ] },
    { t: 'table', caption: 'Role of family, society and educational institutions.', head: ['Agent', 'How it teaches values', 'Limit', 'Better practice'], rows: [
      ['**Family**', 'First and strongest influence. Children imitate more than they obey.', 'Can pass on bias: caste, gender, son preference.', 'Equal treatment of sons and daughters; shared housework.'],
      ['**Society**', 'Norms, peer groups, media, religion, neighbourhood.', 'Conformity can support wrong practices.', 'Role models, local reformers, responsible media.'],
      ['**Education**', 'Curriculum, teachers as models, school culture, sports.', 'Rote value lessons, marks-only culture.', '**NEP 2020** treats ethical and moral values as part of holistic education.'],
    ] },
    { t: 'p', text: 'Two theories help here. **Kohlberg** proposed three levels of moral development: pre-conventional (avoid punishment, seek reward), conventional (conform to norms and law) and post-conventional (principles above convention). **Bandura\'s** social learning theory holds that people learn by observing models. **Gilligan** critiqued Kohlberg for neglecting an ethic of care. For a civil servant, the goal is to act at the post-conventional level while staying within the law.' },

    { t: 'h', text: 'Attitude' },
    { t: 'p', text: 'An **attitude** is a learned, fairly stable tendency to evaluate a person, object, idea or event favourably or unfavourably. It can be explicit (conscious) or implicit (unconscious). The classic **content** is the ABC model.' },
    { t: 'flow', caption: 'Structure of attitude: the ABC model, using an officer\'s attitude to a tribal hamlet.', steps: [
      { title: 'Cognitive', sub: 'Belief: "These people are not consulted enough"' },
      { title: 'Affective', sub: 'Feeling: concern for them' },
      { title: 'Behavioural', sub: 'Action: holds a gram sabha meeting' },
    ] },
    { t: 'table', caption: 'Functions of attitude, from Katz\'s functional theory (1960).', head: ['Function', 'Meaning', 'Example'], rows: [
      ['Knowledge', 'Gives a quick way to make sense of the world', 'Stereotype about a community (quick, but unfair)'],
      ['Utilitarian (adjustment)', 'Helps gain reward or avoid punishment', 'Agreeing with a boss to get a good report'],
      ['Ego-defensive', 'Protects self-image', 'Blaming the public for one\'s own failure'],
      ['Value-expressive', 'Shows one\'s core values', 'An officer proudly refusing gifts'],
    ] },
    { t: 'h3', text: 'Relation with thought and behaviour' },
    { t: 'list', items: [
      '**Attitude does not always predict behaviour.** LaPiere\'s 1930s study found a large gap between stated attitudes to serving a Chinese couple and actual behaviour.',
      '**Theory of Planned Behaviour (Ajzen):** Behaviour follows intention, which is shaped by attitude, social norms and perceived control. So a good attitude also needs a helpful setting.',
      '**Cognitive dissonance (Festinger, 1957):** When belief and action clash, we feel discomfort and change one of them. An honest officer who takes a small gift may start to justify gifts.',
      '**Behaviour can change attitude.** Living and working with a group can reduce prejudice. This is the logic of the **contact hypothesis** (Allport).',
    ] },
    { t: 'h3', text: 'Moral and political attitudes' },
    { t: 'compare', columns: [
      { title: 'Moral attitudes', items: ['Views on right and wrong', 'Example: opposing child labour or dowry', 'Rooted in conscience and upbringing', 'Often felt as absolute, so hard to change'] },
      { title: 'Political attitudes', items: ['Views on power, state, policy', 'Example: on reservation or federalism', 'Shaped by family, class, media, party', 'A civil servant can hold views, but must act **non-partisan**'] },
    ] },
    { t: 'h3', text: 'Social influence and persuasion' },
    { t: 'table', caption: 'Social influence, using Kelman\'s three processes, and the classic experiments.', head: ['Process or study', 'What it shows', 'Link to administration'], rows: [
      ['**Compliance**', 'Change in behaviour to get reward or avoid penalty', 'Fines for littering. Lasts only while monitored.'],
      ['**Identification**', 'Change in order to be like a valued person or group', 'A respected local leader using a toilet'],
      ['**Internalisation**', 'Change because the value is accepted as one\'s own', 'The goal of behaviour change; it lasts'],
      ['**Asch** conformity', 'People may give a wrong answer to match a group', 'Silence in meetings, group pressure in offices'],
      ['**Milgram** obedience', 'Ordinary people may harm others under authority', 'Why "I followed orders" is not a defence for an officer'],
    ] },
    { t: 'p', text: '**Persuasion** is deliberate influence through communication. The classic Yale approach looks at **source** (credible, liked), **message** (clear, two-sided for informed audiences), and **audience** (their prior views). The **Elaboration Likelihood Model** (Petty and Cacioppo) distinguishes a **central route** (argument, lasts longer) from a **peripheral route** (celebrity, cues, fades faster).' },
    { t: 'table', caption: 'Indian public campaigns as persuasion tools. Their results are debated; use them as examples of method.', head: ['Campaign', 'Technique'], rows: [
      ['**Swachh Bharat Mission**', 'Community pressure, role models, local motivators'],
      ['**"Give It Up" for LPG**', 'Appeal to values, plus public recognition'],
      ['**Beti Bachao Beti Padhao**', 'Value change through local leaders and local messaging'],
      ['**Pulse Polio**', 'Trusted faces and religious leaders to counter fear'],
    ] },
    { t: 'note', kind: 'trap', title: 'Persuasion or manipulation?', text: 'Persuasion respects a person\'s choice and uses true information. **Manipulation** hides intent or uses false fear. **Nudges** (Thaler and Sunstein) sit in between: they should stay transparent and easy to opt out of. The Economic Survey 2018-19 discussed using behavioural economics in Indian policy.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Short theory questions usually ask you to define, distinguish and illustrate. Expect: difference between ethics and morality; law versus conscience; role of family in values; how attitudes change; a leader\'s lesson for public life. Structure: define, explain with a framework, add one Indian example, and link back to administration.' },
    { t: 'note', kind: 'exam', title: 'A note on Prelims', text: 'GS IV is a Mains paper. But the 2026 Prelims GS Paper I had scenario questions on officers facing ethical problems (see the note on case studies). So these ideas now have some value in Prelims too.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Normative ethics: virtue, duty, consequence.',
      'Attitude structure: cognitive, affective, behavioural.',
      'Katz functions: knowledge, utilitarian, ego-defensive, value-expressive.',
      'Kelman: compliance, identification, internalisation.',
      'Kohlberg: pre-conventional, conventional, post-conventional.',
      'Elaboration Likelihood Model: central and peripheral routes.',
    ] },
  ],
  sources: [
    { label: 'UPSC CSE syllabus, GS Paper IV (candidate\'s copy, upsc-syllabus.pdf, p3)' },
    { label: 'Second Administrative Reforms Commission, Fourth Report: Ethics in Governance (January 2007)', url: 'https://delhihighcourt.nic.in/web/sites/default/files/reports/ethics4.pdf' },
    { label: 'UPSC Civil Services Prelims 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'Second ARC Fourth Report, Chapters 1 and 2', where: 'Copy hosted by the Delhi High Court', why: 'Short, official framing of ethics in public life, useful for quoting a report accurately.', url: 'https://delhihighcourt.nic.in/web/sites/default/files/reports/ethics4.pdf' },
      { what: 'Recent GS IV papers', where: 'UPSC previous question papers', why: 'Notes cannot replace seeing the current style of theory questions and quotations.', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    ],
    current: [
      { issue: 'No major recent development found', link: 'This block is mostly conceptual. Draw examples from the current affairs in the probity and case-study notes (checked November 2026).', source: 'Not applicable' },
    ],
  },
}
