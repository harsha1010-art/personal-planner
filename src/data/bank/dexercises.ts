import type { MainsQuestion } from '../../lib/types'

// Language writing exercises. These are practice tasks of my own, not UPSC questions.
export const mains: MainsQuestion[] = [
  { id: 'ex-en-precis-1', day: 'lang-english', marks: 20, words: 70, directive: 'Précis', question: 'Write a précis of the following in about 70 words: "Cities across India are growing faster than their services can keep up with. New suburbs often spring up before they have reliable piped water or public transport, and residents depend on tankers and private vehicles. This raises costs for families and adds to pollution and congestion. Planners argue that land use and transport should be planned together, so that homes, jobs and buses are close to one another. Without this, the economic gains of urban growth may be slowly eaten away by long commutes, poor health and lost working hours."', mustCover: ['Cities outpacing services', 'Costs to families and environment', 'Integrated planning as the solution', 'Economic gains at risk', 'Own words; about one-third of the length'], model: `Indian cities are expanding faster than their services. New suburbs often lack piped water and public transport, so residents rely on tankers and private vehicles, which raises household costs, pollution and congestion. Planners recommend combining land-use and transport planning, keeping homes, jobs and buses close together. Otherwise, long commutes, ill health and lost working hours may erode the economic benefits of urban growth.` },
  { id: 'ex-en-grammar-1', day: 'lang-english', marks: 10, words: 60, directive: 'Correct', question: 'Rewrite each sentence correctly: (1) The list of candidates were announced yesterday. (2) He said that he will come tomorrow. (3) She is good in mathematics. (4) Neither the teacher nor the students was present. (5) He is one of those men who never admits a mistake.', mustCover: ['Agreement with "list"', 'Reported speech tense change', 'Correct preposition', 'Verb agrees with nearer subject', 'Plural verb after "those men who"'], model: `(1) The list of candidates was announced yesterday.

(2) He said that he would come the next day.

(3) She is good at mathematics.

(4) Neither the teacher nor the students were present.

(5) He is one of those men who never admit a mistake.` },
  { id: 'ex-en-essay-1', day: 'lang-english', marks: 50, words: 250, directive: 'Short essay', question: 'Write a short essay on "The value of reading newspapers in the age of social media".', mustCover: ['Clear thesis', 'Verification and depth', 'Fair view of social media', 'One or two examples', 'Simple correct English'], model: `Many people now get their news from a phone feed, and a printed newspaper can seem old-fashioned. Yet newspapers remain valuable because of what they do differently.

The main advantage is checking. A reporter and an editor confirm a story before it is published, and a mistake is corrected publicly. A viral post has no such safeguard. During the Covid-19 pandemic, false cures spread quickly online, and reliable reporting helped people find accurate advice.

Newspapers also give readers a wider view. A feed shows us what we already like, while a newspaper places national news, economics, sport and opinion on one page. A reader looking for cricket scores might notice an article on farm prices, and so learn something new. Editorials also train us to follow an argument, which helps us think clearly.

Social media still has real strengths. It is fast, and it gives a voice to people whom big papers may ignore. Citizens have used it to report floods and to demand action. Newspapers also have weaknesses, including commercial pressure and political bias.

The sensible answer is to use both. We can use social media to learn that something has happened, and a good newspaper to understand it. Students, in particular, should build the habit of reading at least one paper daily.

In an age of constant information, what is scarce is not news but judgement. Reading a newspaper is still one of the best ways to develop it.` },
  { id: 'ex-kn-trans-1', day: 'lang-kannada', marks: 20, words: 60, directive: 'Translate into Kannada', question: 'Translate into Kannada: "Education is the foundation of a strong society. Every child should have the opportunity to go to school. The government and parents must work together to achieve this goal."', mustCover: ['Meaning preserved', 'Natural Kannada word order', 'Correct verb endings', 'No word-by-word translation'], model: `ಶಿಕ್ಷಣವು ಬಲಿಷ್ಠ ಸಮಾಜದ ಅಡಿಪಾಯವಾಗಿದೆ. ಪ್ರತಿ ಮಗುವಿಗೂ ಶಾಲೆಗೆ ಹೋಗುವ ಅವಕಾಶ ದೊರೆಯಬೇಕು. ಈ ಗುರಿಯನ್ನು ಸಾಧಿಸಲು ಸರ್ಕಾರ ಮತ್ತು ಪೋಷಕರು ಒಟ್ಟಾಗಿ ಕೆಲಸ ಮಾಡಬೇಕು.` },
  { id: 'ex-kn-trans-2', day: 'lang-kannada', marks: 20, words: 60, directive: 'Translate into English', question: 'Translate into English: "ಮಳೆಗಾಲದಲ್ಲಿ ರೈತರು ಹೊಲಗಳಲ್ಲಿ ಬಿತ್ತನೆ ಮಾಡುತ್ತಾರೆ. ಉತ್ತಮ ಮಳೆಯಾದರೆ ಬೆಳೆ ಚೆನ್ನಾಗಿ ಬರುತ್ತದೆ. ಆದರೆ ಮಳೆ ಕಡಿಮೆಯಾದರೆ ಅವರು ತೊಂದರೆ ಅನುಭವಿಸುತ್ತಾರೆ."', mustCover: ['Tense and meaning', 'Natural English', 'Condition expressed with "if"'], model: `During the rainy season, farmers sow seeds in their fields. If the rains are good, the crop grows well. But if the rainfall is low, they face hardship.` },
  { id: 'ex-kn-essay-1', day: 'lang-kannada', marks: 50, words: 150, directive: 'ಪ್ರಬಂಧ', question: '"ಪರಿಸರ ಸಂರಕ್ಷಣೆಯಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳ ಪಾತ್ರ" ಎಂಬ ವಿಷಯದ ಬಗ್ಗೆ ಕಿರು ಪ್ರಬಂಧ ಬರೆಯಿರಿ.', mustCover: ['ಪೀಠಿಕೆ', 'ವಿದ್ಯಾರ್ಥಿಗಳು ಮಾಡಬಹುದಾದ ಕೆಲಸಗಳು', 'ಉದಾಹರಣೆಗಳು', 'ಉಪಸಂಹಾರ', 'ಸ್ಪಷ್ಟ ಮತ್ತು ಸರಿಯಾದ ಕನ್ನಡ'], model: `ಪರಿಸರವು ನಮ್ಮ ಜೀವನದ ಆಧಾರ. ಆದರೆ ಇಂದು ಮಾಲಿನ್ಯ ಮತ್ತು ಅರಣ್ಯನಾಶ ಹೆಚ್ಚುತ್ತಿವೆ. ಈ ಸಮಸ್ಯೆಯನ್ನು ಎದುರಿಸುವಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳ ಪಾತ್ರ ಬಹಳ ಮುಖ್ಯ.

ವಿದ್ಯಾರ್ಥಿಗಳು ತಮ್ಮ ಶಾಲೆ ಮತ್ತು ಮನೆಯ ಸುತ್ತ ಗಿಡಗಳನ್ನು ನೆಡಬಹುದು. ಪ್ಲಾಸ್ಟಿಕ್ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು. ನೀರು ಮತ್ತು ವಿದ್ಯುತ್ತನ್ನು ಉಳಿಸಬಹುದು. ಕಸವನ್ನು ಬೇರ್ಪಡಿಸಿ ಸರಿಯಾದ ಸ್ಥಳದಲ್ಲಿ ಹಾಕಬಹುದು. ತಮ್ಮ ಮನೆಯವರಿಗೂ ಈ ಬಗ್ಗೆ ತಿಳಿಸಬಹುದು.

ಶಾಲೆಗಳಲ್ಲಿ ಪರಿಸರ ಸಂಘಗಳನ್ನು ಆರಂಭಿಸಿ, ಕೆರೆಗಳ ಸ್ವಚ್ಛತೆಯಂತಹ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸಬಹುದು. ಸಣ್ಣ ಪ್ರಯತ್ನಗಳು ಒಟ್ಟಾದಾಗ ದೊಡ್ಡ ಬದಲಾವಣೆ ಸಾಧ್ಯವಾಗುತ್ತದೆ.

ಇಂದಿನ ವಿದ್ಯಾರ್ಥಿಗಳೇ ನಾಳೆಯ ನಾಗರಿಕರು. ಅವರು ಈಗಲೇ ಪರಿಸರದ ಬಗ್ಗೆ ಕಾಳಜಿ ವಹಿಸಿದರೆ, ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಉತ್ತಮ ಭೂಮಿಯನ್ನು ಉಳಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.` },
  { id: 'ex-kn-grammar-1', day: 'lang-kannada', marks: 10, words: 40, directive: 'ವ್ಯಾಕರಣ', question: 'ಸಂಧಿ ಬಿಡಿಸಿ ಹೆಸರಿಸಿ: (1) ಊರಲ್ಲಿ (2) ಮನೆಯನ್ನು (3) ಮಳೆಗಾಲ (4) ವಿದ್ಯಾಲಯ (5) ದೇವೇಂದ್ರ', mustCover: ['ಸರಿಯಾದ ಪದ ವಿಭಾಗ', 'ಸಂಧಿಯ ಸರಿಯಾದ ಹೆಸರು'], model: `(1) ಊರು + ಅಲ್ಲಿ: ಲೋಪ ಸಂಧಿ

(2) ಮನೆ + ಅನ್ನು: ಆಗಮ ಸಂಧಿ

(3) ಮಳೆ + ಕಾಲ: ಆದೇಶ ಸಂಧಿ

(4) ವಿದ್ಯಾ + ಆಲಯ: ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ

(5) ದೇವ + ಇಂದ್ರ: ಗುಣ ಸಂಧಿ` },
  { id: 'ex-essay-1', day: 'essay', marks: 125, words: 1100, directive: 'Essay', question: 'Write an essay of 1,000-1,200 words: "A society is judged by how it treats its weakest members."', mustCover: ['Clear thesis, with a person or example to open', 'Social, economic, political and ethical dimensions', 'Indian and global examples', 'A fair counter-view', 'A way forward and strong conclusion'], model: `A model is not given here, because it would be better for you to first write one yourself. Plan for 15 minutes, using the guide on the Essay page, then write for 60-75 minutes.

Thesis to consider: how a society treats its weakest members shows its true values, because the strong can usually protect themselves. Test that claim using Ambedkar on caste, the Constitution's Part III and IV, disability rights, and Rawls's difference principle.

Counter-view: societies also need growth to protect the weak, so this should not be seen as a choice between prosperity and justice.

Examples: the 2016 Rights of Persons with Disabilities Act, the MGNREGA debate, and gaps in nutrition data from NFHS.

After you write, read your essay aloud, then mark it against the guide.` },
]
