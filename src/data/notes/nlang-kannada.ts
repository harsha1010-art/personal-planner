import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'lang-kannada',
  summary: 'The Kannada qualifying paper: what it asks, the grammar you need, and how to practise translation and précis.',
  minutes: 12,
  hero: { file: 'Halmidi oldKannada inscription mounted.JPG', credit: 'Dineshkannambadi', license: 'CC BY-SA 3.0' },
  heroAlt: 'The Halmidi inscription, an early Kannada inscription',
  blocks: [
    { t: 'h', text: 'What the paper is' },
    { t: 'p', text: 'Paper A is a **qualifying Indian language paper** of **300 marks**, of matriculation standard. You chose Kannada. As with English, marks are not added to your merit total, but you must reach UPSC\'s minimum (in recent years, 25%) or your other papers will not be evaluated. Answers must be written in Kannada, except where translation requires otherwise. Check the current rules in the **2027 notification**.' },
    { t: 'table', caption: 'Usual question types. Look at the two latest Kannada papers for the current marks.', head: ['Section', 'What you do', 'What to practise'], rows: [
      ['ಪ್ರಬಂಧ (Essay)', 'One essay in Kannada', 'Writing without stopping for words'],
      ['ಗ್ರಹಿಕೆ (Comprehension)', 'Answer from a passage', 'Reading a newspaper article'],
      ['ಸಾರಾಂಶ (Précis)', 'Summarise in one-third', 'Word control'],
      ['ಅನುವಾದ (Translation)', 'English to Kannada, and Kannada to English', 'Meaning first, not word by word'],
      ['ವ್ಯಾಕರಣ (Grammar)', 'Usage, vocabulary, correction', 'The items below'],
    ] },

    { t: 'h', text: 'Core grammar' },
    { t: 'note', kind: 'trap', title: 'Check these with a printed grammar', text: 'These tables are for quick revision. Spellings and school terms can vary. Confirm details in a Karnataka State Board textbook, as listed under Beyond this page.' },
    { t: 'h3', text: 'ವಿಭಕ್ತಿ ಪ್ರತ್ಯಯಗಳು (Case endings)' },
    { t: 'table', head: ['ವಿಭಕ್ತಿ', 'ಪ್ರತ್ಯಯ', 'ಉದಾಹರಣೆ'], rows: [
      ['ಪ್ರಥಮಾ', 'ಉ', 'ರಾಮನು'],
      ['ದ್ವಿತೀಯಾ', 'ಅನ್ನು', 'ರಾಮನನ್ನು'],
      ['ತೃತೀಯಾ', 'ಇಂದ', 'ರಾಮನಿಂದ'],
      ['ಚತುರ್ಥೀ', 'ಗೆ, ಕ್ಕೆ', 'ರಾಮನಿಗೆ'],
      ['ಪಂಚಮೀ', 'ದೆಸೆಯಿಂದ', 'ರಾಮನ ದೆಸೆಯಿಂದ'],
      ['ಷಷ್ಠೀ', 'ಅ', 'ರಾಮನ'],
      ['ಸಪ್ತಮೀ', 'ಅಲ್ಲಿ', 'ರಾಮನಲ್ಲಿ'],
    ] },
    { t: 'h3', text: 'ಸಂಧಿ (Sandhi)' },
    { t: 'compare', columns: [
      { title: 'ಕನ್ನಡ ಸಂಧಿ', items: ['ಲೋಪ ಸಂಧಿ: ಊರು + ಅಲ್ಲಿ = ಊರಲ್ಲಿ', 'ಆಗಮ ಸಂಧಿ: ಮನೆ + ಅನ್ನು = ಮನೆಯನ್ನು', 'ಆದೇಶ ಸಂಧಿ: ಮಳೆ + ಕಾಲ = ಮಳೆಗಾಲ'] },
      { title: 'ಸಂಸ್ಕೃತ ಸಂಧಿ', items: ['ಸವರ್ಣದೀರ್ಘ: ವಿದ್ಯಾ + ಆಲಯ = ವಿದ್ಯಾಲಯ', 'ಗುಣ: ದೇವ + ಇಂದ್ರ = ದೇವೇಂದ್ರ', 'ವೃದ್ಧಿ: ಏಕ + ಏಕ = ಏಕೈಕ', 'ಯಣ್: ಅತಿ + ಅಂತ = ಅತ್ಯಂತ'] },
    ] },
    { t: 'h3', text: 'Common errors' },
    { t: 'table', head: ['Item', 'What to check'], rows: [
      ['Verb agreement', 'The verb changes with person, number and gender'],
      ['ಅಲ್ಪಪ್ರಾಣ, ಮಹಾಪ್ರಾಣ', 'Common spelling trouble, such as ಪಾಠ, not ಪಾಟ'],
      ['ಳ and ಲ', 'A change in letter changes meaning, as with ಕಳೆ and ಕಲೆ'],
      ['ಅರ್ಕಾವೊತ್ತು', 'Use rules of ರ್ carefully, as in ಕರ್ನಾಟಕ'],
      ['English words', 'Prefer Kannada words in formal writing, where a clear one exists'],
    ] },

    { t: 'h', text: 'How to practise translation' },
    { t: 'flow', steps: [
      { title: 'Read', sub: 'Read the whole passage first' },
      { title: 'Break', sub: 'Split long English sentences' },
      { title: 'Rebuild', sub: 'Kannada puts the verb at the end' },
      { title: 'Check', sub: 'Does it read naturally?' },
    ] },
    { t: 'table', caption: 'Terms that often come up in passages on governance. Worth making your own list.', head: ['English', 'ಕನ್ನಡ'], rows: [
      ['Government', 'ಸರ್ಕಾರ'], ['Constitution', 'ಸಂವಿಧಾನ'], ['Education', 'ಶಿಕ್ಷಣ'], ['Environment', 'ಪರಿಸರ'], ['Development', 'ಅಭಿವೃದ್ಧಿ'], ['Society', 'ಸಮಾಜ'], ['Agriculture', 'ಕೃಷಿ'], ['Health', 'ಆರೋಗ್ಯ'], ['Responsibility', 'ಜವಾಬ್ದಾರಿ'], ['Freedom', 'ಸ್ವಾತಂತ್ರ್ಯ'],
    ] },

    { t: 'h', text: 'Your schedule' },
    { t: 'p', text: 'Your plan has 30-40 minutes every Saturday in November and December, then 40 minutes a week in January with a short essay outline and translation each fortnight. February moves to past-paper sections, and March and April to one timed section every two weeks. Five minutes daily reading a Kannada newspaper helps more than a long weekly session.' },
    { t: 'note', kind: 'exam', title: 'Writing speed', text: 'If you rarely write in Kannada now, handwriting speed may be the main risk. Write one page by hand each week, and do a full timed paper before Mains.' },
  ],
  sources: [
    { label: 'UPSC CSE notification, compulsory language paper: check the 2027 notice for the current wording', url: 'https://www.upsc.gov.in/' },
    { label: 'UPSC previous question papers: Civil Services (Main), Kannada Compulsory', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'Karnataka Textbook Society, Kannada textbooks Classes 8-10', url: 'https://ktbs.kar.nic.in/' },
  ],
}
