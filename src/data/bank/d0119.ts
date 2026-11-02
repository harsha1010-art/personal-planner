import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2027-01-19'
const S = 'Notes: Agriculture, minerals, industries, population and settlements'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const COUNT4: Four = ['Only one', 'Only two', 'Only three', 'All four']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-0119-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', 'The name Milpa for shifting cultivation is used in which region?', null, null, ['Central America', 'North-east India', 'Indonesia and Malaysia', 'West Africa'], 0, 'Milpa is the name used in Central America for slash and burn cultivation.', ['', 'In north-east India the name is Jhum.', 'In Indonesia and Malaysia the name is Ladang.', 'West Africa is cited for cocoa plantations, and Milpa is a Central American name.'], 'Shifting cultivation', 'Jhum, Milpa, Ladang: shifting cultivation.', 'Regional names for one practice suit direct recall.', 'Notes: Types of agriculture'),
  q(2, 'easy', 'factual', 'Which one of the following is a rabi crop?', null, null, ['Mustard', 'Soybean', 'Jowar', 'Maize'], 0, 'Mustard is grown in winter as a rabi crop, with wheat, barley and gram.', ['', 'Soybean is sown with the southwest monsoon as a kharif crop.', 'Jowar is listed as a kharif crop, sown with the southwest monsoon.', 'Maize is listed as a kharif crop, sown with the southwest monsoon.'], 'Cropping seasons', 'Rabi: wheat, barley, gram, mustard.', 'Crop seasons are basic to Indian agriculture.', 'Notes: Indian agriculture'),
  q(3, 'easy', 'factual', 'Neyveli in Tamil Nadu is known for which mineral?', null, null, ['Lignite', 'Uranium', 'Copper', 'Mica'], 0, 'Neyveli in Tamil Nadu is the main site listed for lignite, a low-grade coal.', ['', 'Uranium is linked with Jaduguda and Tummalapalle.', 'Copper is linked with Khetri, Malanjkhand and Singhbhum.', 'Mica is linked with Koderma, Nellore and Bhilwara.'], 'Mineral sites', 'Neyveli: lignite.', 'Mineral sites are matched often in Prelims.', 'Notes: Minerals and energy'),
  q(4, 'easy', 'factual', 'According to Census 2011, what was India\'s overall sex ratio, in females per 1,000 males?', null, null, ['943', '919', '933', '982'], 0, 'The overall sex ratio in Census 2011 was 943 females per 1,000 males.', ['', '919 was the child sex ratio for ages 0-6, not the overall ratio.', '933 was the figure of the previous census, not of Census 2011.', '982 is higher than the Census 2011 value of 943.'], 'Census 2011', 'Sex ratio 943, child sex ratio 919.', 'These 2011 figures stay in use until new data appear.', 'Notes: Population'),
  y(2024, 5, 3, 'easy', 'factual', 'Which of the following countries are well known as the two largest cocoa producers in the world?', null, null, ['Algeria and Morocco', 'Botswana and Namibia', 'Côte d\'Ivoire and Ghana', 'Madagascar and Mozambique'], 2, 'Cote d\'Ivoire and Ghana, in West Africa, are the two largest cocoa producers.', ['Algeria and Morocco are in the dry north of Africa, not the cocoa belt.', 'Botswana and Namibia are arid southern African countries, not major cocoa producers.', '', 'Madagascar and Mozambique are not the leading cocoa producers named here.'], 'Cocoa producers', 'Cocoa: Cote d\'Ivoire and Ghana.', 'Asked in Prelims 2024, Q5.', 'Notes: Indian agriculture; UPSC CSE Prelims 2024 GS I'),
  y(2023, 7, 3, 'easy', 'factual', 'About three-fourths of world\'s cobalt, a metal required for the manufacture of batteries for electric motor vehicles, is produced by', null, null, ['Argentina', 'Botswana', 'the Democratic Republic of the Congo', 'Kazakhstan'], 2, 'The DR Congo produces about three-fourths of the world\'s cobalt.', ['Argentina is better known for lithium brine, not as the leading cobalt source.', 'Botswana is better known for diamonds, not as the leading cobalt source.', '', 'Kazakhstan is not the country that produces most of the world\'s cobalt.'], 'Cobalt', 'Cobalt: DR Congo, about three-fourths.', 'Asked in Prelims 2023, Q7.', 'Notes: Minerals and energy; UPSC CSE Prelims 2023 GS I'),
  y(2021, 57, 27, 'easy', 'factual', 'Among the following, which one is the least water-efficient crop?', null, null, ['Sugarcane', 'Sunflower', 'Pearl millet', 'Red gram'], 0, 'Sugarcane has heavy water use and is the least water-efficient of these.', ['', 'Sunflower needs much less water than sugarcane.', 'Pearl millet is a hardy crop of low rainfall areas.', 'Red gram is a pulse that needs much less water than sugarcane.'], 'Water use of crops', 'Sugarcane is water-heavy, and millets are hardy.', 'Asked in Prelims 2021, Q57.', 'Notes: Indian agriculture; UPSC CSE Prelims 2021 GS I'),
  y(2020, 87, 37, 'easy', 'application', '"The crop is subtropical in nature. A hard frost is injurious to it. It requires at least 210 frost-free days and 50 to 100 centimeters of rainfall for its growth. A light well-drained soil capable of retaining moisture is ideally suited for the cultivation of the crop." Which one of the following is that crop?', null, null, ['Cotton', 'Jute', 'Sugarcane', 'Tea'], 0, 'At least 210 frost-free days and 50-100 cm of rain describe cotton.', ['', 'Jute needs hot, humid conditions and delta alluvium.', 'Sugarcane is hot and wet with heavy water use, unlike this description.', 'Tea needs warm, wet conditions on drained slopes.'], 'Cotton conditions', 'Cotton: 210 frost-free days, 50-100 cm.', 'Asked in Prelims 2020, Q87.', 'Notes: Indian agriculture; UPSC CSE Prelims 2020 GS I'),

  // Moderate
  q(5, 'moderate', 'multi-statement', 'Consider the following statements about plantation agriculture:', ['1. It is based on a large estate growing one crop.', '2. It needs capital and is oriented towards export.', '3. It was introduced by Europeans.'], 'How many of the above statements are correct?', COUNT, 2, 'All three are correct. Examples include tea in India, rubber in Malaysia and cocoa in West Africa.', ['All three hold, so one is too few.', 'All three hold, so two is too few.', '', 'All three hold, as they define plantation agriculture.'], 'Plantation agriculture', 'Plantation: estate, one crop, capital, export, European origin.', 'Definitions of farming types are standard.', 'Notes: Types of agriculture'),
  q(6, 'moderate', 'assertion-reason', 'Statement I: Sugar mills in India tend to stay near cane fields.\nStatement II: Sugarcane cannot be stored for long and loses weight in processing.', null, 'Which one of the following is correct?', SI, 0, 'Both are correct, and II explains I. A weight-losing raw material that spoils quickly pulls the mill towards the source.', ['', 'II gives the reason for the location, so it does explain I.', 'II is also correct: cane cannot be stored for long.', 'I is correct: mills stay near the fields.'], 'Location of sugar', 'Weight-losing, perishable inputs pull industry to the source.', 'Location factors are directly in the syllabus.', 'Notes: Location of industries'),
  q(7, 'moderate', 'assertion-reason', 'Statement I: Gondwana basins hold most of India\'s coal.\nStatement II: Old crystalline rocks of the peninsula hold metallic ores.', null, 'Which one of the following is correct?', SI, 1, 'Both are correct, but II does not explain I. II concerns metallic ores in other rocks and says nothing about why coal is in Gondwana basins.', ['II concerns metallic ores, so it does not explain the location of coal.', '', 'II is also correct: the Dharwar rocks hold metallic ores.', 'I is correct: Gondwana basins hold most coal.'], 'Rock and mineral link', 'Dharwar for metals, Gondwana for coal.', 'The rock and mineral link is more durable than belt labels.', 'Notes: Minerals and energy'),
  q(8, 'moderate', 'match', 'Match List I (mineral) with List II (site):', ['List I: A. Uranium; B. Copper; C. Mica; D. Zinc and lead', 'List II: 1. Koderma; 2. Khetri; 3. Jaduguda; 4. Zawar'], 'Select the correct code:', ['A-2, B-3, C-1, D-4', 'A-3, B-2, C-1, D-4', 'A-3, B-2, C-4, D-1', 'A-2, B-3, C-4, D-1'], 1, 'Uranium is at Jaduguda, copper at Khetri, mica at Koderma, and zinc and lead at Zawar.', ['Jaduguda is uranium and Khetri is copper, so A and B are swapped.', '', 'Koderma is mica and Zawar is zinc and lead, so C and D are swapped.', 'This swaps both the uranium and copper pair and the mica and zinc pair.'], 'Mineral sites', 'Jaduguda, Khetri, Koderma, Zawar.', 'The note marks these as favourites for matching.', 'Notes: Minerals and energy'),
  q(9, 'moderate', 'map', 'Which one of the following coalfields is located in West Bengal?', null, null, ['Raniganj', 'Jharia', 'Korba', 'Talcher'], 0, 'Raniganj is the coalfield in West Bengal.', ['', 'Jharia is in Jharkhand.', 'Korba is in Chhattisgarh.', 'Talcher is in Odisha.'], 'Coalfields', 'Raniganj is in West Bengal, and Jharia and Bokaro in Jharkhand.', 'Coalfields are tested by state on maps.', 'Notes: Minerals and energy'),
  q(10, 'moderate', 'match', 'Match List I (factor of location) with List II (example):', ['List I: A. Raw material; B. Climate; C. Policy; D. Inertia', 'List II: 1. Ahmedabad as a continuing textile centre; 2. Bhilai and Bokaro in the planning era; 3. Humid Maharashtra and Gujarat for cotton textiles; 4. Jamshedpur near ore and coal'], 'Select the correct code:', ['A-3, B-4, C-1, D-2', 'A-4, B-3, C-1, D-2', 'A-3, B-4, C-2, D-1', 'A-4, B-3, C-2, D-1'], 3, 'Jamshedpur shows raw material, humid western India shows climate, Bhilai and Bokaro show policy and Ahmedabad shows inertia.', ['Jamshedpur shows raw material and humid air shows climate, and C and D are also swapped.', 'Bhilai and Bokaro show policy, and Ahmedabad shows inertia, so C and D are swapped.', 'Jamshedpur is the raw material case, and humidity is the climate case, so A and B are swapped.', ''], 'Location factors', 'Inertia: an industry stays after the first reason fades.', 'Mains asks for location factors with examples.', 'Notes: Location of industries'),
  q(11, 'moderate', 'statement', 'Consider the following statements:', ['1. Cooperative farming pools resources voluntarily, and was most successful in Denmark.', '2. The Soviet kolkhoz was a voluntary form of cooperative farming.'], 'Which of the statements given above is/are correct?', BOTH, 0, 'Only 1 is correct. The kolkhoz was collective farming, which was state-driven.', ['', 'Statement 2 fails: the kolkhoz was state-driven collective farming.', 'Statement 2 is false, so both cannot be correct.', 'Statement 1 is correct: Denmark is the usual example of cooperative farming.'], 'Cooperative and collective', 'Cooperative is voluntary. Collective is state-driven.', 'The note warns against swapping these.', 'Notes: Types of agriculture'),
  q(12, 'moderate', 'multi-statement', 'Consider the following statements based on Census 2011:', ['1. Bihar had the highest population density among states.', '2. Haryana had the highest sex ratio among states.', '3. Sikkim had the highest population among states.'], 'How many of the above statements are correct?', COUNT, 0, 'Only statement 1 is correct. Kerala had the highest sex ratio and Haryana the lowest, while Uttar Pradesh was the most populous state and Sikkim the least.', ['', 'Statements 2 and 3 both fail, so two cannot be correct.', 'Statement 2 names the lowest as the highest, and statement 3 does the same for population.', 'Statement 1 is correct: Bihar had the highest density.'], 'Census extremes', 'Highest density Bihar, highest sex ratio Kerala, largest population UP.', 'State extremes are common statement material.', 'Notes: Population'),
  q(13, 'moderate', 'multi-statement', 'Consider the following statements about the demographic transition, as given in NCERT:', ['1. In the first stage, both birth and death rates are low.', '2. In the second stage, the birth rate falls before the death rate.', '3. In the third stage, both rates are high and society is young.'], 'How many of the above statements are correct?', COUNT, 3, 'None is correct. Stage 1 has high rates, in stage 2 the death rate falls first, and in stage 3 both rates are low and society ages.', ['Each of the three fails, so not even one holds.', 'Each of the three fails, so two cannot hold.', 'Statement 1 reverses stage 1, 2 reverses which rate falls first, and 3 reverses stage 3.', ''], 'Demographic transition', 'Death rate falls first, then the birth rate.', 'The transition is core population theory.', 'Notes: Population'),
  q(14, 'moderate', 'match', 'Consider the following pairs of rural settlement pattern and setting:', ['1. Linear : Along a road, river or canal', '2. Circular : Around a tank', '3. Star-like : Where roads meet', '4. Double : On two river banks'], 'How many of the above pairs are correctly matched?', COUNT4, 3, 'All four are correct, as given in NCERT-based settlement patterns.', ['All four pairs hold, so one is too few.', 'All four pairs hold, so two is too few.', 'All four pairs hold, so three is too few.', ''], 'Settlement patterns', 'Shape follows road, river, tank or junction.', 'Settlements are in the syllabus and often neglected.', 'Notes: Settlements'),
  y(2022, 21, 13, 'moderate', 'factual', 'Among the following crops, which one is the most important anthropogenic source of both methane and nitrous oxide?', null, null, ['Cotton', 'Rice', 'Sugarcane', 'Wheat'], 1, 'Rice is a key man-made source of methane and nitrous oxide, as flooded fields favour methane release.', ['Cotton is not the crop singled out for both of these gases.', '', 'Sugarcane is water-heavy but is not the crop singled out for both gases.', 'Wheat is not grown flooded like rice, so it is not the key methane source.'], 'Rice and emissions', 'Rice: methane and nitrous oxide.', 'Asked in Prelims 2022, Q21.', 'Notes: Indian agriculture; UPSC CSE Prelims 2022 GS I'),
  y(2023, 4, 3, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. India has more arable area than China.', '2. The proportion of irrigated area is more in India as compared to China.', '3. The average productivity per hectare in Indian agriculture is higher than that in China.'], 'How many of the above statements are correct?', COUNT, 1, 'Statements 1 and 2 are correct. India has more arable land and a higher irrigated share, but lower productivity.', ['Statements 1 and 2 both hold, so one is too few.', '', 'Statement 3 fails: Indian productivity is lower than China\'s.', 'Statements 1 and 2 are correct: the arable and irrigated shares favour India.'], 'India and China farming', 'India has more arable land but lower productivity.', 'Asked in Prelims 2023, Q4.', 'Notes: Indian agriculture; UPSC CSE Prelims 2023 GS I'),
  y(2024, 41, 17, 'moderate', 'factual', 'The total fertility rate in an economy is defined as:', null, null, ['the number of children born per 1000 people in the population in a year.', 'the number of children born to a couple in their lifetime in a given population.', 'the birth rate minus death rate.', 'the average number of live births a woman would have by the end of her child-bearing age.'], 3, 'TFR is the average number of births per woman over her lifetime.', ['This describes the crude birth rate, not TFR.', 'TFR is measured per woman and not per couple.', 'This describes natural increase, not TFR.', ''], 'Total fertility rate', 'TFR: births per woman. Replacement is about 2.1.', 'Asked in Prelims 2024, Q41.', 'Notes: Population; UPSC CSE Prelims 2024 GS I'),
  y(2020, 86, 37, 'moderate', 'multi-statement', 'With reference to pulse production in India, consider the following statements:', ['1. Black gram can be cultivated as both kharif and rabi crop.', '2. Green-gram alone accounts for nearly half of pulse production.', '3. In the last three decades, while the production of kharif pulses has increased, the production of rabi pulses has decreased.'], 'Which of the statements given above is/are correct?', ['1 only', '2 and 3 only', '2 only', '1, 2 and 3'], 0, 'Only 1 is correct. Green gram does not make up nearly half of pulse output, and rabi pulses have not declined.', ['', 'Both fail: green gram is not nearly half of output, and rabi pulses have not declined.', 'Statement 2 fails: green gram does not account for nearly half of production.', 'Statements 2 and 3 fail, so all three cannot be correct.'], 'Pulses', 'Black gram is grown in both kharif and rabi.', 'Asked in Prelims 2020, Q86.', 'Notes: Indian agriculture; UPSC CSE Prelims 2020 GS I'),

  // Hard
  y(2022, 28, 15, 'hard', 'multi-statement', 'With reference to India, consider the following statements:', ['1. Monazite is a source of rare earths.', '2. Monazite contains thorium.', '3. Monazite occurs naturally in the entire Indian coastal sands in India.', '4. In India, Government bodies only can process or export monazite.'], 'Which of the statements given above are correct?', ['1, 2 and 3 only', '1, 2 and 4 only', '3 and 4 only', '1, 2, 3 and 4'], 1, 'Statements 1, 2 and 4 are correct. Monazite occurs only in certain coastal tracts such as Kerala, Tamil Nadu and Odisha, not along the entire coast.', ['Statement 3 fails: monazite does not occur along the entire coast.', '', 'Statement 3 fails, and this also leaves out statements 1 and 2, which are correct.', 'Statement 3 fails, so all four cannot be correct.'], 'Monazite', 'Monazite: rare earths and thorium, in certain coastal sands.', 'Asked in Prelims 2022, Q28.', 'Notes: Minerals and energy; UPSC CSE Prelims 2022 GS I'),
  y(2026, 95, 49, 'hard', 'multi-statement', 'Which of the following statements about Rare Earth Elements (REEs) and Critical Minerals is/are correct?', ['1. Modern technological innovations including Artificial Intelligence, robotics and space exploration extensively utilise Rare Earth Elements (REEs).', '2. China has the highest share in mining of REEs followed by India.', '3. The Government of India launched the National Critical Mineral Mission (NCMM) in 2025 to establish a robust framework for self-reliance in the critical mineral sector.', '4. Rare Earth Elements are a set of 13 metallic elements.'], 'Select the answer using the code given below:', ['1 and 3 only', '3 only', '1, 3 and 4', '1, 2 and 4'], 0, 'Statements 1 and 3 are correct. Rare earths are usually counted as 17 elements, and India is not the second largest miner.', ['', 'Statement 1 also holds: modern technology uses rare earths extensively.', 'Statement 4 fails: the group is usually counted as 17 elements.', 'Statements 2 and 4 fail: India is not second in mining, and the group has 17 elements.'], 'Rare earths and NCMM', 'Rare earths: 17 elements. NCMM: approved in January 2025.', 'Asked in Prelims 2026, Q95.', 'Notes: Minerals and energy; UPSC CSE Prelims 2026 GS I'),
  q(15, 'hard', 'multi-statement', 'Consider the following statements about the criteria for a census town:', ['1. It needs a population of at least 5,000.', '2. At least 75% of female main workers must be outside agriculture.', '3. It needs a density of at least 500 people per sq km.'], 'How many of the above statements are correct?', COUNT, 0, 'Only statement 1 is correct. The test is 75% of male main workers, and 400 people per sq km.', ['', 'Statements 2 and 3 both fail, so two cannot be correct.', 'Statement 2 names the wrong group, and statement 3 the wrong density.', 'Statement 1 is correct: the population test is at least 5,000.'], 'Census town', 'Census town: 5,000, 75%, 400.', 'Exact thresholds make close, fair distractors.', 'Notes: Settlements'),
  q(16, 'hard', 'current-static', 'With reference to Census 2027, as of November 2026, consider the following statements:', ['1. Population enumeration is generally scheduled for February 2027.', '2. Ladakh and snow-bound areas were scheduled for September 2026.'], 'Which of the statements given above is/are correct?', BOTH, 2, 'Both are correct. House-listing ran from April to September 2026, and enumeration follows in February 2027, with snow-bound areas scheduled earlier.', ['Statement 2 is also correct: snow-bound areas were scheduled for September 2026.', 'Statement 1 is also correct: general enumeration is scheduled for February 2027.', '', 'Both statements are correct, as both dates are in the schedule.'], 'Census 2027', 'Enumeration February 2027, snow-bound areas earlier.', 'A census during the exam year is likely to draw questions.', 'Notes: Population; News On AIR'),
  q(17, 'hard', 'assertion-reason', 'Statement I: Indian textbooks generally date Gondwana coal to the Permian-age Gondwana system.\nStatement II: Tertiary coal in India is found in the north-east.', null, 'Which one of the following is correct?', SI, 1, 'Both are correct, but II does not explain I. II gives the location of a younger coal type, which says nothing about the age of Gondwana coal.', ['II concerns Tertiary coal, so it does not explain the age of Gondwana coal.', '', 'II is also correct: Tertiary coal is found in the north-east.', 'I is correct: Gondwana coal is generally dated to the Permian.'], 'Age of coal', 'Gondwana coal is about 250 million years old, and Tertiary coal is younger.', 'The note flags a common error in dating this coal.', 'Notes: Minerals and energy'),
  q(18, 'hard', 'match', 'Consider the following pairs of crop and condition:', ['1. Rice : Above 100 cm of rain', '2. Wheat : 50-75 cm of rain', '3. Cotton : Black, well-drained soil', '4. Rubber : Hot and wet all year', '5. Jute : Black soil of the Deccan'], 'How many of the above pairs are correctly matched?', ['Only two', 'Only three', 'Only four', 'All five'], 2, 'Only pair 5 fails. Jute needs hot, humid conditions on delta alluvium.', ['Pairs 1, 2, 3 and 4 all hold, so two is too few.', 'Pairs 1, 2, 3 and 4 all hold, so three is too few.', '', 'Pair 5 fails: jute grows on delta alluvium and not on black soil.'], 'Crop conditions', 'Jute: delta alluvium, hot and humid.', 'Crop and condition matching is common.', 'Notes: Indian agriculture'),
  q(19, 'hard', 'multi-statement', 'Consider the following pairs of farming type and region:', ['1. Extensive commercial grain : Pampas', '2. Dairy : Monsoon Asia', '3. Intensive subsistence : Monsoon Asia'], 'Which of the pairs given above is/are correctly matched?', ['1 and 3 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'], 0, 'Pairs 1 and 3 are correct. Dairy farming is listed for north-west Europe, Canada and New Zealand.', ['', 'Pair 2 fails: dairy is listed for north-west Europe, Canada and New Zealand.', 'Pair 2 fails: dairy is listed for north-west Europe, Canada and New Zealand.', 'Pair 2 fails, so all three cannot be correct.'], 'Farming regions', 'Monsoon Asia is intensive subsistence.', 'Farming types are tested by location.', 'Notes: Types of agriculture'),
  q(20, 'hard', 'application', 'Consider the following goods:', ['1. Cement', '2. Sugar', '3. Bottled drinks', '4. Computer chips'], 'Under Weber\'s least-cost idea, how many of the above are made from weight-losing raw material and so locate near the source?', COUNT4, 1, 'Cement and sugar locate near the source. Bottled drinks gain weight and locate near markets, and chips are footloose.', ['Cement and sugar both qualify, so one is too few.', '', 'Bottled drinks and chips do not qualify, so three is too many.', 'Bottled drinks gain weight, and chips are footloose, so not all four qualify.'], 'Weber\'s least-cost idea', 'Weight-losing to source, weight-gaining to market, light goods footloose.', 'Weber\'s logic is applied to examples.', 'Notes: Location of industries'),
]

export const mains: MainsQuestion[] = [
  {
    id: 'm-0119-1', day: DAY, marks: 10, words: 150, directive: 'Discuss',
    question: 'Discuss the factors of location of the sugar industry in India, and explain its shift from the north towards Maharashtra and Karnataka.',
    mustCover: ['Weight-losing, perishable raw material', 'Weber\'s least-cost logic', 'Higher sugar content in the south', 'Longer crushing season', 'Cooperatives and the water cost of the shift'],
    model: `Introduction

Sugar is a classic raw-material-oriented industry. Weber's least-cost idea explains why mills stay close to the source, while changing conditions explain why the industry has moved.

Factors of location

Raw material: cane cannot be stored for long and loses weight in processing, so mills stay near fields.

Climate and water: cane is a hot, wet crop with heavy water use.

Labour and capital: the industry needs seasonal workers and organised finance.

Why the shift occurred

Sugar content: southern cane has higher sugar content.

Crushing season: the season is longer, which keeps mills busy for more of the year.

Cooperatives: these have mobilised farmers and capital, especially in Maharashtra.

Implications

The shift raises efficiency but also water stress, since a thirsty crop has spread into drier regions.

Conclusion

Location therefore shifts with economics and institutions. Future policy should weigh mill efficiency against water use, for instance through efficient irrigation and better crop choice.`,
  },
  {
    id: 'm-0119-2', day: DAY, marks: 10, words: 150, directive: 'Examine',
    question: 'Examine the link between geology and the distribution of minerals in India, and comment on the need for a critical minerals strategy.',
    mustCover: ['Dharwar and crystalline rocks for metallic ores', 'Gondwana basins for coal', 'Sedimentary basins for oil and gas, and few Himalayan minerals', 'Thirty critical minerals and the National Critical Mineral Mission', 'KABIL and the balance with mining harm'],
    model: `Introduction

Minerals follow rock age, so India's mineral map is largely a map of its geology.

Geology and distribution

Old crystalline rocks: the Dharwar rocks of the peninsula hold metallic ores, such as iron ore in Odisha, Jharkhand and Karnataka.

Gondwana basins: these hold most coal, as at Jharia and Raniganj.

Sedimentary basins: these hold oil and gas, as at Mumbai High and the Krishna-Godavari basin.

Young Himalaya: few minerals, since the rocks are folded and eroded.

Need for a strategy

Geology does not give India everything. India has identified 30 critical minerals, and the National Critical Mineral Mission was approved in January 2025. KABIL, a joint venture, seeks mines abroad, in Argentina and Australia. Monazite sands offer rare earths and thorium.

A note of caution

Mining harms forests, water and local communities, so these benefits have costs.

Conclusion

A strategy combining domestic exploration, overseas assets and safeguards would secure supply without ignoring local harm.`,
  },
  {
    id: 'm-0119-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse',
    question: 'Critically analyse the regional and environmental costs of the Green Revolution against its contribution to food security in India.',
    mustCover: ['Define the Green Revolution and its core inputs', 'Contribution to food output, especially wheat', 'Regional concentration in Punjab, Haryana and west UP', 'Falling water tables and soil decline', 'Rice emissions and other costs', 'Way forward with sustainable practices'],
    model: `Introduction

The Green Revolution, from the 1960s, combined high-yield seeds, fertilisers and irrigation. It focused mainly on wheat in Punjab, Haryana and west Uttar Pradesh, and it reshaped both Indian farming and its geography.

Contribution

Food security: higher yields gave the country greater food supply and reduced its dependence on others.

Model of change: it showed that science and inputs could raise productivity on small farms.

Rural income: farmers in irrigated regions gained from higher output.

Regional costs

Regional gaps: the benefits went mostly to irrigated areas, and rain-fed regions gained far less.

Crop imbalance: wheat and rice gained at the expense of more varied cropping, including pulses and hardy millets.

Environmental costs

Water: irrigation has contributed to falling water tables.

Soil: heavy use of inputs has contributed to soil decline.

Emissions: rice is a key man-made source of methane and nitrous oxide.

Critical view

The costs do not cancel the gains, because the priority at the time was food security. But the model has limits, and extending it would worsen the stress. Problems of small plots, low productivity and rain dependence also remain unsolved. India still has more arable land than China but lower productivity.

Way forward

Support sustainable practices: System of Rice Intensification, which cuts seed use and methane, along with zero tillage and fertigation.

Diversify towards millets in water-scarce areas.

Focus on rain-fed regions that were left behind.

Conclusion

The next phase must raise productivity while conserving water and soil, and must spread gains more evenly across regions.`,
  },
]
