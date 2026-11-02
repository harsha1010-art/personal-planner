import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2027-01-20'
const S = 'Notes: World mapping'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const COUNT4: Four = ['Only one', 'Only two', 'Only three', 'All four']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-0120-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'map', 'The Bab-el-Mandeb strait joins which two waters?', null, null, ['Red Sea and Gulf of Aden', 'Persian Gulf and Gulf of Oman', 'Black Sea and Sea of Marmara', 'Mediterranean Sea and Red Sea'], 0, 'Bab-el-Mandeb joins the Red Sea and the Gulf of Aden, between Yemen on one side and Djibouti and Eritrea on the other.', ['', 'The Persian Gulf and Gulf of Oman are joined by Hormuz.', 'The Black Sea and Marmara are joined by the Bosphorus.', 'The Mediterranean and Red Sea are joined by the Suez Canal, a man-made link.'], 'Red Sea chokepoint', 'Bab-el-Mandeb: Red Sea and Gulf of Aden.', 'Chokepoints are in the news and on the map.', 'Notes: Straits and canals'),
  q(2, 'easy', 'map', 'The Strait of Gibraltar lies between:', null, null, ['Spain and Morocco', 'UK and France', 'Italy and Tunisia', 'Greece and Turkey'], 0, 'Gibraltar joins the Atlantic and the Mediterranean, between Spain and Morocco.', ['', 'The UK and France are separated by the Strait of Dover.', 'Italy and Tunisia face each other across the central Mediterranean, not Gibraltar.', 'Greece and Turkey face each other across the Aegean, far from Gibraltar.'], 'Gibraltar', 'Gibraltar: Spain and Morocco.', 'Each strait is learnt with its two shores.', 'Notes: Straits and canals'),
  q(3, 'easy', 'factual', 'The Kiel Canal, in Germany, joins:', null, null, ['North Sea and Baltic Sea', 'Atlantic and Pacific', 'Mediterranean and Red Sea', 'Black Sea and Aegean Sea'], 0, 'The Kiel Canal joins the North Sea and the Baltic Sea, across Germany.', ['', 'The Atlantic and Pacific are joined by the Panama Canal.', 'The Mediterranean and Red Sea are joined by the Suez Canal.', 'The Black Sea and Aegean are linked through the Bosphorus, Marmara and Dardanelles.'], 'Canals', 'Kiel: North Sea and Baltic.', 'Man-made links are simple map items.', 'Notes: Straits and canals'),
  q(4, 'easy', 'map', 'Aconcagua, the highest peak of South America, lies in which country?', null, null, ['Argentina', 'Peru', 'Bolivia', 'Ecuador'], 0, 'Aconcagua lies in Argentina, in the Andes.', ['', 'Peru is an Andean country, but Aconcagua is not there.', 'Bolivia is an Andean country, but Aconcagua is not there.', 'Ecuador is an Andean country, but Aconcagua is not there.'], 'Continental peaks', 'Aconcagua: Argentina.', 'Peaks are tested with country and range.', 'Notes: Mountains and peaks'),
  q(5, 'easy', 'map', 'The Danube ends in which sea?', null, null, ['Black Sea', 'Baltic Sea', 'North Sea', 'Adriatic Sea'], 0, 'The Danube passes Vienna, Budapest and Belgrade and ends in the Black Sea.', ['', 'The Danube flows south-east, away from the Baltic.', 'The Rhine and the Thames end in the North Sea, not the Danube.', 'The Danube passes inland of the Adriatic and does not end there.'], 'Rivers by mouth', 'Danube: Black Sea. Rhine: North Sea.', 'Most Prelims traps swap the mouth.', 'Notes: Rivers by continent'),
  q(6, 'easy', 'factual', 'Which is the deepest lake in the world?', null, null, ['Baikal', 'Superior', 'Victoria', 'Titicaca'], 0, 'Lake Baikal in Russia is the deepest lake in the world.', ['', 'Superior is the largest of the Great Lakes, not the deepest in the world.', 'Victoria is the largest lake in Africa, not the deepest in the world.', 'Titicaca is known as a high navigable lake, not as the deepest.'], 'Key lakes', 'Baikal is the deepest. Superior is the largest Great Lake.', 'Superlatives about lakes are recall items.', 'Notes: Lakes and deserts'),
  y(2026, 30, 15, 'easy', 'map', 'Ships from which of the following countries have to cross the Strait of Hormuz to reach out to the Indian Ocean?', ['1. Bahrain', '2. Syria', '3. Qatar', '4. Egypt'], 'Select the answer using the code given below:', ['1 and 2', '1 and 3', '2 and 3', '3 and 4'], 1, 'Bahrain and Qatar lie inside the Persian Gulf, whose only sea exit is Hormuz. Syria and Egypt have other outlets.', ['Syria is on the Mediterranean, so it is not bound to Hormuz.', '', 'Syria is on the Mediterranean, so it is not bound to Hormuz.', 'Egypt has a Red Sea coast, and so reaches the Indian Ocean without Hormuz.'], 'Hormuz', 'Inner Gulf exporters have no other sea route.', 'Asked in Prelims 2026, Q30.', 'Notes: Straits and canals; UPSC CSE Prelims 2026 GS I'),
  y(2024, 8, 5, 'easy', 'map', 'Consider the following countries:', ['1. Finland', '2. Germany', '3. Norway', '4. Russia'], 'How many of the above countries have a border with the North Sea?', COUNT4, 1, 'Only Germany and Norway touch the North Sea. Finland and Russia are on the Baltic side, not the North Sea.', ['Germany and Norway both touch the North Sea, so one is too few.', '', 'Finland and Russia do not touch it, so three is too many.', 'Finland and Russia do not touch it, so not all four qualify.'], 'North Sea', 'North Sea: UK, Norway, Denmark, Germany, Netherlands, Belgium, France.', 'Asked in Prelims 2024, Q8.', 'Notes: Seas and their neighbours; UPSC CSE Prelims 2024 GS I'),

  // Moderate
  q(7, 'moderate', 'map', 'Consider the following countries:', ['1. Kazakhstan', '2. Turkmenistan', '3. Iran', '4. Uzbekistan'], 'How many of the above border the Caspian Sea?', COUNT4, 2, 'Kazakhstan, Turkmenistan and Iran border the Caspian. Uzbekistan does not, and is linked with the Aral.', ['Kazakhstan, Turkmenistan and Iran all qualify, so one is too few.', 'Kazakhstan, Turkmenistan and Iran all qualify, so two is too few.', '', 'Uzbekistan does not touch the Caspian, so not all four qualify.'], 'Caspian neighbours', 'Caspian five: Russia, Kazakhstan, Turkmenistan, Iran, Azerbaijan.', 'Sea neighbours are asked often.', 'Notes: Seas and their neighbours'),
  q(8, 'moderate', 'match', 'Match List I (strait) with List II (between):', ['List I: A. Lombok; B. Sunda; C. Malacca; D. Palk', 'List II: 1. Malay Peninsula and Sumatra; 2. India and Sri Lanka; 3. Bali and Lombok; 4. Java and Sumatra'], 'Select the correct code:', ['A-4, B-3, C-2, D-1', 'A-3, B-4, C-2, D-1', 'A-4, B-3, C-1, D-2', 'A-3, B-4, C-1, D-2'], 3, 'Lombok lies between Bali and Lombok, Sunda between Java and Sumatra, Malacca between the Malay Peninsula and Sumatra, and Palk between India and Sri Lanka.', ['This swaps both the Lombok and Sunda pair and the Malacca and Palk pair.', 'Malacca is by Sumatra and Palk is by India, so C and D are swapped.', 'Lombok is by Bali and Sunda is by Java, so A and B are swapped.', ''], 'Straits by shore', 'Sunda: Java, Sumatra. Lombok: Bali, Lombok.', 'Indonesian straits are easily confused.', 'Notes: Straits and canals'),
  q(9, 'moderate', 'match', 'Consider the following pairs of river and where it ends:', ['1. Yangtze : Bohai Sea', '2. Amur : Sea of Okhotsk', '3. Irrawaddy : Andaman Sea', '4. Niger : Indian Ocean'], 'How many of the above pairs are correctly matched?', COUNT4, 1, 'Pairs 2 and 3 are correct. The Yangtze ends in the East China Sea and the Niger in the Gulf of Guinea.', ['Pairs 2 and 3 both hold, so one is too few.', '', 'Pairs 1 and 4 both fail, so three is too many.', 'Pairs 1 and 4 fail: the Bohai takes the Huang He, and the Niger reaches the Gulf of Guinea.'], 'Rivers by mouth', 'Huang He: Bohai. Yangtze: East China Sea.', 'Swapping a river\'s mouth is the usual trap.', 'Notes: Rivers by continent'),
  q(10, 'moderate', 'map', 'Consider the following countries:', ['1. Botswana', '2. Paraguay', '3. Madagascar'], 'Through how many of the above does the Tropic of Capricorn pass?', COUNT, 2, 'The Tropic of Capricorn passes through all three.', ['All three lie on the line, so one is too few.', 'All three lie on the line, so two is too few.', '', 'All three lie on the line, so the answer is not none.'], 'Tropic of Capricorn', 'Capricorn: Chile, Argentina, Paraguay, Brazil, Namibia, Botswana, South Africa, Mozambique, Madagascar, Australia.', 'Latitude lines are favourite map items.', 'Notes: Lines of latitude'),
  q(11, 'moderate', 'assertion-reason', 'Statement I: The Congo crosses the Equator twice.\nStatement II: The Limpopo crosses the Tropic of Capricorn twice.', null, 'Which one of the following is correct?', SI, 1, 'Both are correct, but II does not explain I. They are separate facts about two different rivers and lines.', ['II concerns a different river and line, so it cannot explain I.', '', 'II is also correct: the Limpopo crosses Capricorn twice.', 'I is correct: the Congo crosses the Equator twice.'], 'Rivers crossing lines', 'Congo: Equator. Limpopo: Capricorn. Mahi: Cancer. Each twice.', 'The note marks these as traps.', 'Notes: Rivers by continent'),
  q(12, 'moderate', 'assertion-reason', 'Statement I: Turkey lies on both sides of the Bosphorus and the Dardanelles.\nStatement II: The Bosphorus and the Dardanelles each directly join the Black Sea with the Aegean Sea.', null, 'Which one of the following is correct?', SI, 2, 'I is correct, but II is incorrect. The Bosphorus joins the Black Sea and Marmara, and the Dardanelles joins Marmara and the Aegean.', ['II is false, because each strait joins Marmara to one other sea.', 'II is false, because each strait joins Marmara to one other sea.', '', 'I is correct: both straits have Turkey on both sides.'], 'Turkish straits', 'Black Sea, Bosphorus, Marmara, Dardanelles, Aegean.', 'The sequence of waters is exact, which makes it testable.', 'Notes: Straits and canals'),
  q(13, 'moderate', 'match', 'Consider the following pairs of region and country:', ['1. Levant : Lebanon', '2. Maghreb : Tunisia', '3. Horn of Africa : Djibouti', '4. Sahel : Burkina Faso'], 'How many of the above pairs are correctly matched?', COUNT4, 3, 'All four are correct: each country belongs to the region named.', ['All four pairs hold, so one is too few.', 'All four pairs hold, so two is too few.', 'All four pairs hold, so three is too few.', ''], 'Named regions', 'Levant, Maghreb, Horn, Sahel: learn the members.', 'These names appear in news and questions.', 'Notes: Regions, borders and hot spots'),
  q(14, 'moderate', 'multi-statement', 'Consider the following statements about borders:', ['1. The McMahon Line lies between India and Pakistan.', '2. The Durand Line lies between India and Afghanistan.', '3. The Radcliffe Line lies between India and China.'], 'How many of the above statements are correct?', COUNT, 3, 'None is correct. McMahon is India and China, Durand is Pakistan and Afghanistan, and Radcliffe is India with Pakistan and Bangladesh.', ['Each of the three fails, so not even one holds.', 'Each of the three fails, so two cannot hold.', 'Each line has been given the wrong pair of countries.', ''], 'Border lines', 'McMahon: China. Durand: Pakistan and Afghanistan. Radcliffe: Pakistan and Bangladesh.', 'Frontier names are basic and often swapped.', 'Notes: Regions, borders and hot spots'),
  q(15, 'moderate', 'map', 'Which one of the following Indian states does not lie on the Tropic of Cancer?', null, null, ['Odisha', 'Jharkhand', 'Tripura', 'Chhattisgarh'], 0, 'The line crosses Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram, and not Odisha.', ['', 'Jharkhand is one of the eight states on the Tropic of Cancer.', 'Tripura is one of the eight states on the Tropic of Cancer.', 'Chhattisgarh is one of the eight states on the Tropic of Cancer.'], 'India on Cancer', 'Eight states lie on the Tropic of Cancer. Odisha is not one.', 'Odisha is a plausible distractor, as it adjoins this belt.', 'Notes: Lines of latitude'),
  y(2022, 27, 13, 'moderate', 'map', 'Consider the following countries:', ['1. Azerbaijan', '2. Kyrgyzstan', '3. Tajikistan', '4. Turkmenistan', '5. Uzbekistan'], 'Which of the above have borders with Afghanistan?', ['1, 2 and 5 only', '1, 2, 3 and 4 only', '3, 4 and 5 only', '1, 2, 3, 4 and 5'], 2, 'Tajikistan, Turkmenistan and Uzbekistan border Afghanistan. Azerbaijan and Kyrgyzstan do not.', ['Azerbaijan is in the Caucasus, and Kyrgyzstan has no border with Afghanistan.', 'Azerbaijan and Kyrgyzstan do not border Afghanistan.', '', 'Azerbaijan and Kyrgyzstan do not border Afghanistan.'], 'Afghanistan neighbours', 'Afghanistan: Pakistan, Iran, Turkmenistan, Uzbekistan, Tajikistan, China.', 'Asked in Prelims 2022, Q27.', 'Notes: Regions, borders and hot spots; UPSC CSE Prelims 2022 GS I'),
  y(2025, 22, 11, 'moderate', 'map', 'Consider the following countries:', ['I. Bolivia', 'II. Brazil', 'III. Colombia', 'IV. Ecuador', 'V. Paraguay', 'VI. Venezuela'], 'Andes mountains pass through how many of the above countries?', ['Only two', 'Only three', 'Only four', 'Only five'], 2, 'The Andes pass through Bolivia, Colombia, Ecuador and Venezuela. Brazil and Paraguay are not on the Andes.', ['Bolivia, Colombia, Ecuador and Venezuela all qualify, so two is too few.', 'Bolivia, Colombia, Ecuador and Venezuela all qualify, so three is too few.', '', 'Brazil and Paraguay are not on the Andes, so five is too many.'], 'Andes countries', 'Andes: seven countries, not Brazil or Paraguay.', 'Asked in Prelims 2025, Q22.', 'Notes: Mountains and peaks; UPSC CSE Prelims 2025 GS I'),
  y(2023, 61, 25, 'moderate', 'map', 'Consider the following countries:', ['1. Bulgaria', '2. Czech Republic', '3. Hungary', '4. Latvia', '5. Lithuania', '6. Romania'], 'How many of the above-mentioned countries share a land border with Ukraine?', ['Only two', 'Only three', 'Only four', 'Only five'], 0, 'Of these, only Hungary and Romania border Ukraine.', ['', 'Only Hungary and Romania qualify, so three is too many.', 'Only Hungary and Romania qualify, so four is too many.', 'Only Hungary and Romania qualify, so five is too many.'], 'Ukraine neighbours', 'Ukraine: Russia, Belarus, Poland, Slovakia, Hungary, Romania, Moldova.', 'Asked in Prelims 2023, Q61.', 'Notes: Regions, borders and hot spots; UPSC CSE Prelims 2023 GS I'),
  y(2020, 68, 29, 'moderate', 'match', 'Consider the following pairs:', ['River : Flows into', '1. Mekong : Andaman Sea', '2. Thames : Irish Sea', '3. Volga : Caspian Sea', '4. Zambezi : Indian Ocean'], 'Which of the pairs given above is/are correctly matched?', ['1 and 2 only', '3 only', '3 and 4 only', '1, 2 and 4 only'], 2, 'Pairs 3 and 4 are correct. The Mekong flows into the South China Sea and the Thames into the North Sea.', ['Both fail: the Mekong ends in the South China Sea and the Thames in the North Sea.', 'Pair 4 also holds: the Zambezi ends in the Indian Ocean.', '', 'Pairs 1 and 2 fail: the Mekong ends in the South China Sea, the Thames in the North Sea.'], 'Rivers by mouth', 'Mekong: South China Sea. Thames: North Sea.', 'Asked in Prelims 2020, Q68.', 'Notes: Rivers by continent; UPSC CSE Prelims 2020 GS I'),
  y(2019, 36, 17, 'moderate', 'match', 'Consider the following pairs:', ['Sea : Bordering country', '1. Adriatic Sea : Albania', '2. Black Sea : Croatia', '3. Caspian Sea : Kazakhstan', '4. Mediterranean Sea : Morocco', '5. Red Sea : Syria'], 'Which of the pairs given above are correctly matched?', ['1, 2 and 4 only', '1, 3 and 4 only', '2 and 5 only', '1, 2, 3, 4 and 5'], 1, 'Pairs 1, 3 and 4 are correct. Croatia is on the Adriatic, and Syria is on the Mediterranean.', ['Pair 2 fails: Croatia is on the Adriatic and not the Black Sea.', '', 'Both fail: Croatia is on the Adriatic, and Syria is on the Mediterranean.', 'Pairs 2 and 5 fail, so all five cannot be correct.'], 'Seas and neighbours', 'Croatia: Adriatic. Syria: Mediterranean.', 'Asked in Prelims 2019, Q36.', 'Notes: Seas and their neighbours; UPSC CSE Prelims 2019 GS I'),

  // Hard
  y(2025, 23, 11, 'hard', 'map', 'Consider the following water bodies:', ['I. Lake Tanganyika', 'II. Lake Tonlé Sap', 'III. Patos Lagoon'], 'Through how many of them does the equator pass?', ['Only one', 'Only two', 'All the three', 'None'], 3, 'None. Tanganyika is south of the Equator, Tonle Sap is north of it and Patos Lagoon is far to the south. Victoria is the lake it crosses.', ['Each of the three lies off the line, so not even one qualifies.', 'Each of the three lies off the line, so two cannot qualify.', 'All three lie off the line, and Lake Victoria is the lake often confused here.', ''], 'Equator and lakes', 'The Equator crosses Victoria and not Tanganyika.', 'Asked in Prelims 2025, Q23.', 'Notes: Lakes and deserts; UPSC CSE Prelims 2025 GS I'),
  y(2026, 26, 13, 'hard', 'multi-statement', 'Which of the following with reference to Indian States is/are not correct?', ['1. Uttar Pradesh shares its boundary with the highest number of other Indian States.', '2. Rajasthan shares the longest international border among all Indian States.', '3. Sikkim is the only State that shares its boundary with just one other Indian State.'], 'Select the answer using the code given below:', ['1 only', '1 and 2', '2 and 3', '3 only'], 2, 'Statements 2 and 3 are not correct. West Bengal has the longest international border, and Meghalaya, which adjoins only Assam, also has one neighbouring state.', ['Statement 1 is correct, so it cannot be the incorrect one: UP touches the most states.', 'Statement 1 is correct: UP touches the most states.', '', 'Statement 2 is also not correct: West Bengal has the longest international border.'], 'State borders', 'West Bengal: longest international border. Sikkim and Meghalaya: one neighbouring state.', 'Asked in Prelims 2026, Q26.', 'Notes: Regions, borders and hot spots; UPSC CSE Prelims 2026 GS I'),
  y(2024, 88, 39, 'hard', 'assertion-reason', 'Consider the following statements:', ['Statement-I: Sumed pipeline is a strategic route for Persian Gulf oil and natural gas shipments to Europe.', 'Statement-II: Sumed pipeline connects the Red Sea with the Mediterranean Sea.'], 'Which one of the following is correct in respect of the above statements?', ['Both Statement-I and Statement-II are correct and Statement-II explains Statement-I', 'Both Statement-I and Statement-II are correct, but Statement-II does not explain Statement-I', 'Statement-I is correct, but Statement-II is incorrect', 'Statement-I is incorrect, but Statement-II is correct'], 0, 'Both are correct, and II explains I. By linking the Red Sea to the Mediterranean in Egypt, the pipeline gives Gulf oil a route to Europe.', ['', 'The link between the two seas is why the route matters, so II does explain I.', 'II is correct: the Sumed links the Red Sea with the Mediterranean.', 'I is correct: the pipeline serves Gulf shipments heading to Europe.'], 'Sumed pipeline', 'The Sumed is a pipeline in Egypt and not a canal.', 'Asked in Prelims 2024, Q88.', 'Notes: Straits and canals; UPSC CSE Prelims 2024 GS I'),
  q(16, 'hard', 'map', 'Which one of the following Indian rivers crosses the Tropic of Cancer twice?', null, null, ['Mahi', 'Narmada', 'Tapi', 'Luni'], 0, 'The Mahi crosses the Tropic of Cancer twice.', ['', 'The Narmada flows west, south of the Tropic of Cancer, and does not cross it twice.', 'The Tapi flows west, south of the Tropic of Cancer, and does not cross it twice.', 'The Luni is the river of the Indian Desert ending in the Rann, not the river known for this.'], 'Mahi', 'Mahi: Cancer twice.', 'The note lists this as a trap.', 'Notes: Rivers by continent'),
  q(17, 'hard', 'map', 'Consider the following countries:', ['1. Gabon', '2. Somalia', '3. Tanzania', '4. Maldives'], 'Through how many of the above does the Equator pass?', COUNT4, 2, 'The Equator passes through Gabon, Somalia and the Maldives. Tanzania lies just south of it, though it shares Lake Victoria.', ['Gabon, Somalia and the Maldives all qualify, so one is too few.', 'Gabon, Somalia and the Maldives all qualify, so two is too few.', '', 'Tanzania lies south of the Equator, so not all four qualify.'], 'Equator countries', 'East Africa on the Equator: Uganda, Kenya, Somalia, not Tanzania.', 'Tanzania is the common wrong guess, because of Lake Victoria.', 'Notes: Lines of latitude'),
  q(18, 'hard', 'map', 'Consider the following countries:', ['1. Mauritania', '2. Taiwan', '3. Sudan', '4. Yemen'], 'Through how many of the above does the Tropic of Cancer pass?', COUNT4, 1, 'The Tropic of Cancer passes through Mauritania and Taiwan. Sudan and Yemen lie south of it.', ['Mauritania and Taiwan both qualify, so one is too few.', '', 'Sudan and Yemen lie south of the line, so three is too many.', 'Sudan and Yemen lie south of the line, so not all four qualify.'], 'Tropic of Cancer', 'In Africa: Western Sahara, Mauritania, Mali, Algeria, Niger, Libya, Egypt.', 'Sudan and Yemen are near misses.', 'Notes: Lines of latitude'),
  q(19, 'hard', 'multi-statement', 'Consider the following statements about lakes:', ['1. Lake Titicaca lies between Peru and Chile.', '2. Lake Victoria is shared by Uganda, Kenya and Tanzania.', '3. The Equator crosses Lake Tanganyika.'], 'How many of the above statements are correct?', COUNT, 0, 'Only statement 2 is correct. Titicaca is shared by Peru and Bolivia, and Tanganyika is south of the Equator.', ['', 'Statements 1 and 3 both fail, so two cannot be correct.', 'Statement 1 names the wrong neighbour, and statement 3 names the wrong lake.', 'Statement 2 is correct: these are Lake Victoria\'s three shores.'], 'Lake locations', 'Titicaca: Peru and Bolivia.', 'Close neighbours make fair hard distractors.', 'Notes: Lakes and deserts'),
  q(20, 'hard', 'multi-statement', 'Which of the following border the Persian Gulf?', ['1. Kuwait', '2. Oman (Musandam)', '3. Yemen'], 'Select the correct answer using the code given below:', ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 0, 'Kuwait and Oman, through Musandam, border the Persian Gulf. Yemen is on the Red Sea and Gulf of Aden.', ['', 'Yemen does not border the Gulf, and Kuwait does.', 'Yemen does not border the Gulf, and Oman does at Musandam.', 'Yemen does not border the Gulf, so all three cannot qualify.'], 'Persian Gulf neighbours', 'Gulf: Iran, Iraq, Kuwait, Saudi Arabia, Bahrain, Qatar, UAE, Oman (Musandam).', 'Musandam makes Oman an exact-knowledge item.', 'Notes: Seas and their neighbours'),
]

export const mains: MainsQuestion[] = [
  {
    id: 'm-0120-1', day: DAY, marks: 10, words: 150, directive: 'Examine',
    question: 'Examine the significance of the Hormuz and Red Sea chokepoints for India\'s energy security and trade.',
    mustCover: ['Locate Hormuz and Bab-el-Mandeb with their shores', 'Role of Gulf exporters with no other sea route', 'Link through the Red Sea and Suez to Europe', 'Recent disruption and its costs, with a date caveat', 'Responses: diversified supply and routes'],
    model: `Introduction

A chokepoint is a narrow passage on a major sea route. Two matter greatly to India: Hormuz, between Iran and Oman, and Bab-el-Mandeb, between Yemen and Djibouti and Eritrea.

Significance

Hormuz: it is the exit from the Persian Gulf. Exporters such as Bahrain, Qatar and Kuwait have no other sea route, so disruption hits their supply to India directly.

Red Sea route: Bab-el-Mandeb leads to the Red Sea, the Suez Canal and the Mediterranean. This is a main link between India and Europe. The Sumed pipeline in Egypt offers a partial alternative for oil.

Recent disruption

Reports in 2026 described heavy disruption at Hormuz and renewed attacks in the Red Sea. A July 2026 report warned of higher costs for Indian traders. The position changes quickly, so recent news must be checked.

Way forward

India can diversify its suppliers, build reserves and work with partners on maritime security.

Conclusion

Geography cannot be changed, so resilience must come from planning.`,
  },
  {
    id: 'm-0120-2', day: DAY, marks: 10, words: 150, directive: 'Discuss',
    question: 'Discuss the shrinking of the Aral Sea and Lake Chad as examples of change in critical geographical features.',
    mustCover: ['Location and neighbours of both', 'Diversion of the Amu Darya and Syr Darya for cotton', 'Lake Chad in the dry Sahel', 'Effects on livelihoods and security', 'Lessons for water management, including India'],
    model: `Introduction

Lakes in dry regions depend on a fragile water balance. The Aral Sea and Lake Chad show how quickly that balance can break.

Aral Sea

Shared by Kazakhstan and Uzbekistan, it was fed by the Amu Darya and Syr Darya. These were diverted for cotton irrigation, so the inflow fell and the sea shrank. It is a clear example of change driven by human activity.

Lake Chad

Shared by Chad, Niger, Nigeria and Cameroon, it lies in the Sahel. It has shrunk under dry conditions and heavy demand for water.

Effects

Livelihoods based on fishing and farming suffer, and competition over land and water can follow. This adds to stress in the already unstable Sahel.

Lessons

Rivers need basin-level management across borders. Water-heavy crops in dry regions carry long-term costs, which is also relevant to India's groundwater debate.

Conclusion

Both cases show that such change can be rapid and hard to reverse, so early basin planning is far cheaper than repair.`,
  },
  {
    id: 'm-0120-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse',
    question: 'Critically analyse the value of emerging Arctic sea routes for global trade and for India.',
    mustCover: ['Geographic setting and role of the Bering Strait', 'Melting ice as the driver of access', 'Trade benefits and comparison with Suez-Red Sea chokepoints', 'Limits: season, cost, risk, control by littoral states', 'Environmental concerns', 'India\'s interest: Himadri, observer status, Arctic Policy'],
    model: `Introduction

The Arctic Ocean, reached from the Pacific through the Bering Strait between Russia and Alaska, has long been closed to regular shipping by ice. Warming is now opening seasonal passages, which is a change in a critical geographical feature.

Potential value

Shorter routes: Arctic passages can shorten voyages between east Asia and Europe.

Alternative to chokepoints: disruption at Hormuz and in the Red Sea, as reported in 2026, shows the value of having other routes.

Resources: easier access may also raise interest in the region's resources.

Limits

Season: access remains seasonal and uncertain, so schedules are hard to keep.

Cost and risk: ships need special design, while rescue services and ports are few.

Control: littoral states, especially Russia, hold much influence along the routes, which raises political risk.

Environmental concerns

Shipping brings emissions and the danger of spills in a fragile region. It is also troubling that a route gains value from the same warming that harms the rest of the world, including through sea-level rise and monsoon change.

India's interest

India runs the Himadri research station at Ny-Alesund in Svalbard, has been an Arctic Council observer since 2013, and published an Arctic Policy in 2022. Its interest lies in science, climate links with the monsoon, and trade. However, the routes would serve Indian ports less directly than east Asian ones.

Conclusion

Arctic routes are a useful supplement and not a replacement for the Suez route. India should build its scientific presence, diversify trade routes and argue for strong environmental rules.`,
  },
]
