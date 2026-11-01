import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-18',
  summary: 'Indian and Western moral thinkers, each tied to one core idea, one value and one civil-service use. All views are paraphrased, not quoted.',
  minutes: 18,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'The syllabus line is short: **"Contributions of moral thinkers and philosophers from India and world."** The questions usually do one of two things. They give a thinker\'s idea and ask what it means today, or they expect you to use a thinker to support an argument. So learn one idea per thinker, one linked value, and one application. Depth on ten thinkers beats a list of forty.' },
    { t: 'note', kind: 'trap', title: 'Do not invent quotes', text: 'Many quotes circulating under famous names are unverified. This applies especially to Gandhi and Kautilya. In your answer, write "Gandhi held that..." and give the idea. A paraphrase that is correct earns marks. A wrong or fake quote can lose them. Everything below is paraphrased.' },

    { t: 'h', text: 'Indian thinkers and traditions' },
    { t: 'table', caption: 'Indian thought: idea, value, civil-service use.', head: ['Thinker or text', 'Key idea', 'Value', 'Civil-service use'], rows: [
      ['**Bhagavad Gita**', '**Nishkama karma:** act from duty without craving for the fruit. **Lokasangraha:** act for the welfare of the world.', 'Duty, detachment', 'Do the right thing without seeking credit or fearing a transfer.'],
      ['**Buddha**', 'Middle Way; right livelihood; compassion; craving is the cause of suffering.', 'Compassion, moderation', 'Avoid extremes: neither laxity nor harshness. Honest earning as a moral duty.'],
      ['**Mahavira and Jain thought**', '**Ahimsa**, **aparigraha** (non-possession), **anekantavada** (truth has many sides).', 'Non-violence, tolerance', 'Hear all sides in a dispute. Limit desire for wealth.'],
      ['**Ashoka**', 'Dhamma: respect for all sects, care for people and animals, officers (dhamma mahamattas) to spread welfare.', 'Tolerance, welfare', 'A ruler who uses power for welfare and publicly records his duty. Respect for religious pluralism.'],
      ['**Kautilya (Arthashastra)**', 'The king\'s good lies in the good of his subjects. Details many ways officers can embezzle and how to check them.', 'Duty, accountability', 'Early awareness that corruption is systemic. Need for audit, rotation and checks.'],
      ['**Thiruvalluvar (Tirukkural)**', 'Virtue (aram), wealth (porul), love (inbam). Just rule and fair taxation.', 'Righteous conduct', 'A ruler\'s legitimacy rests on justice and fair revenue.'],
      ['**Basava**', '**Kayaka** (honest work as worship), **dasoha** (sharing), rejection of caste. The Anubhava Mantapa was a forum for discussion.', 'Dignity of labour, equality', 'Treat every worker with dignity. Participation in public decision.'],
      ['**Vivekananda**', 'Practical Vedanta: serving the poor as serving the divine. Stress on character and strength.', 'Service, self-confidence', 'See public service as a moral vocation.'],
      ['**Tagore**', 'Universal humanism; criticism of narrow nationalism; freedom in education.', 'Humanism, openness', 'Keep the human being above the system or slogan.'],
      ['**Gandhi**', 'Truth, non-violence, purity of means, **trusteeship**, **sarvodaya**, seven social sins.', 'Truth, service', 'Test every decision by its effect on the poorest person (his "talisman").'],
      ['**Ambedkar**', '**Constitutional morality**, social democracy, annihilation of caste.', 'Equality, dignity, rule of law', 'Obey the constitutional process, even when a popular shortcut exists.'],
      ['**Deendayal Upadhyaya**', '**Integral humanism** (1965) and **Antyodaya**: uplift of the last person.', 'Inclusion', 'Reach the last household first in scheme delivery.'],
      ['**Amartya Sen**', '**Capability approach:** development as expanding real freedoms. **Niti** (rules and institutions) and **nyaya** (actual lives lived).', 'Justice, freedom', 'Do not stop at outlays or rules. Ask what people can really do and be.'],
    ] },
    { t: 'compare', caption: 'Gandhi\'s core ideas, as used in answers.', columns: [
      { title: 'Seven social sins (Young India, 1925)', items: ['Wealth without work', 'Pleasure without conscience', 'Knowledge without character', 'Commerce without morality', 'Science without humanity', 'Worship without sacrifice', 'Politics without principle'] },
      { title: 'Governance use', items: ['**Trusteeship:** wealth is held for society; a basis for corporate responsibility', '**Sarvodaya:** welfare of all', '**Means and ends:** a good goal cannot justify a corrupt method', '**Talisman:** think of the poorest person before you decide'] },
    ] },
    { t: 'note', kind: 'exam', title: 'A related Prelims fact', text: 'Prelims 2020 asked for one common agreement between Gandhism and Marxism. The option on the final goal of a stateless society stands out, since Gandhi and Marx both imagined one, though they differed on class struggle and violence.' },
    { t: 'h3', text: 'Ambedkar on constitutional morality' },
    { t: 'p', text: 'Ambedkar drew the term from the historian Grote. It means respect for the forms of the Constitution, including restraint and willingness to work through its procedures. He warned that it has to be cultivated, and cannot be assumed. In his closing speech to the Constituent Assembly on **25 November 1949**, he warned about relying on hero-worship, and argued that political democracy cannot last without social democracy. Courts have used the idea, for example in **Navtej Singh Johar (2018)**. Critics worry about judges using it too broadly.' },

    { t: 'h', text: 'Western thinkers' },
    { t: 'table', caption: 'Western thought: idea, value, civil-service use.', head: ['Thinker', 'Key idea', 'Value', 'Civil-service use'], rows: [
      ['**Socrates**', 'Self-examination; virtue linked with knowledge. Accepted the verdict of the court rather than flee.', 'Honesty, respect for law', 'Examine your own motives. Disagree, but accept lawful process.'],
      ['**Plato**', 'Republic: four cardinal virtues (wisdom, courage, temperance, justice); philosopher-king.', 'Wisdom, justice', 'Those who hold power should be trained, and detached from private gain.'],
      ['**Aristotle**', 'Nicomachean Ethics: **eudaimonia** (flourishing), the **golden mean**, habit forms character, **phronesis** (practical wisdom).', 'Moderation, character', 'Courage sits between cowardice and recklessness. Integrity is built by daily practice.'],
      ['**Confucius**', '**Ren** (humaneness), **li** (right conduct), the **junzi** (noble person). Rule by example.', 'Benevolence, duty', 'A senior\'s conduct sets the culture of an office.'],
      ['**Machiavelli**', 'The Prince: politics judged by results; a ruler may use harsh means to keep the state.', 'Realism (a counterpoint)', 'A warning. Use his realism to understand power, but not to excuse corruption.'],
      ['**Kant**', '**Categorical imperative:** act only on a rule you could want as a universal law; treat humanity always as an end, never merely as a means. Good will and duty.', 'Duty, dignity', 'No beneficiary is a mere number. Do not make exceptions for yourself or friends.'],
      ['**Bentham**', '**Utilitarianism:** the greatest happiness of the greatest number; calculate pleasure and pain.', 'Public welfare', 'Cost-benefit analysis in policy. Beware harm to minorities.'],
      ['**J.S. Mill**', 'Higher and lower pleasures; On Liberty (1859): **harm principle:** the state may limit liberty only to prevent harm to others.', 'Liberty', 'Limits on state action: public order rules must rest on real harm.'],
      ['**Rawls**', 'A Theory of Justice (1971): **veil of ignorance**; **difference principle:** inequalities are fair only if they benefit the least advantaged.', 'Fairness', 'Justifies affirmative action and pro-poor targeting.'],
      ['**Hannah Arendt**', '**Banality of evil** (Eichmann in Jerusalem, 1963): great wrongs can come from thoughtless obedience.', 'Personal responsibility', 'Following orders does not remove moral responsibility. Think before signing.'],
      ['**Carol Gilligan**', '**Ethics of care** (In a Different Voice, 1982): morality also rests on relationships and care.', 'Care', 'Rules plus care: humane handling of vulnerable citizens.'],
    ] },
    { t: 'compare', caption: 'The three great theories applied to one problem: should a dam displacing 500 tribal families be built?', columns: [
      { title: 'Bentham (utility)', items: ['Count benefits: water, power', 'Count costs: displacement', 'Build if net benefit is higher', 'Danger: the 500 families become a small number'] },
      { title: 'Kant (duty)', items: ['People are not means to an end', 'Consent and dignity come first', 'Do not forcibly displace', 'Danger: may block valuable public works'] },
      { title: 'Rawls (fairness)', items: ['Behind the veil, you might be the displaced', 'Allow only if the worst-off gain', 'So: full resettlement, land for land, share in benefits', 'A workable balance'] },
    ] },
    { t: 'note', kind: 'mains', title: 'Link to Indian law', text: 'The dam example links with the **Right to Fair Compensation Act, 2013** (land acquisition) and the Forest Rights Act, 2006, and gram sabha consent in **Niyamgiri (Orissa Mining Corporation v Ministry of Environment, 2013)**. A law reference makes a philosophical answer concrete.' },

    { t: 'h', text: 'Using a thinker in an answer' },
    { t: 'flow', caption: 'A simple way to use a thinker in about 150 words.', steps: [
      { title: 'Paraphrase', sub: 'The idea in one sentence' },
      { title: 'Explain', sub: 'What it asks of a person or official' },
      { title: 'Apply', sub: 'One Indian administrative example' },
      { title: 'Limit', sub: 'Where it needs balancing' },
    ] },
    { t: 'table', caption: 'Pick a thinker by the theme of the question.', head: ['Theme', 'Useful thinkers'], rows: [
      ['Corruption, integrity', 'Kautilya, Gandhi, Kant'],
      ['Weaker sections', 'Rawls, Gandhi, Ambedkar, Upadhyaya, Sen'],
      ['Tolerance, plural society', 'Ashoka, Jain anekantavada, Tagore, Mill'],
      ['Duty under pressure', 'Gita, Kant, Socrates'],
      ['Blind obedience', 'Arendt, Socrates, Gandhi'],
      ['Policy trade-off', 'Bentham, Mill, Rawls, Sen'],
      ['Character building', 'Aristotle, Confucius, Vivekananda'],
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Expect a quotation question: "What does this mean to you in the present context?" Explain the meaning in simple terms, connect it to public life, give one Indian example, and add a limit or counterpoint. Avoid a list of names. You may also get a direct question on a thinker\'s relevance, such as Gandhian ethics or Kant\'s duty ethics.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Nishkama karma: Gita. Lokasangraha: welfare of the world.',
      'Anekantavada: Jain. Kayaka and dasoha: Basava.',
      'Golden mean and phronesis: Aristotle.',
      'Categorical imperative: Kant. Harm principle: Mill.',
      'Veil of ignorance: Rawls. Capability approach: Sen.',
      'Banality of evil: Arendt. Ethics of care: Gilligan.',
      'Constitutional morality: Ambedkar, drawing on Grote.',
    ] },
  ],
  sources: [
    { label: 'UPSC CSE syllabus, GS Paper IV (candidate\'s copy, upsc-syllabus.pdf, p4)' },
    { label: 'UPSC Civil Services Prelims 2020, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'Constituent Assembly Debates, closing speech of 25 November 1949', where: 'Parliament of India digital library or Lok Sabha debates archive', why: 'If you want to quote Ambedkar, check the exact words there first.' },
      { what: 'Past GS IV quotation questions', where: 'UPSC previous question papers', why: 'See the real format of quote questions, and practise explaining each in 150 words.', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    ],
    current: [
      { issue: 'No major recent development found', link: 'Thinkers do not change. Use current affairs from the probity and case-study notes as examples (checked November 2026).', source: 'Not applicable' },
    ],
  },
}
