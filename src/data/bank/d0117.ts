import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2027-01-17'
const S = 'Notes: Oceanography'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const COUNT4: Four = ['Only one', 'Only two', 'Only three', 'All four']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-0117-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', 'Which one of the following relief features holds the deepest parts of the ocean?', null, null, ['Trench', 'Abyssal plain', 'Continental slope', 'Continental rise'], 0, 'Trenches, at subduction zones, are the deepest parts. The Mariana Trench reaches about 11 km.', ['', 'The abyssal plain is flat and deep, but shallower than the trenches.', 'The slope is the steep drop from the shelf, well above the deep floor.', 'The rise is sediment piled at the foot of the slope, far above trench depths.'], 'Ocean relief', 'Shelf, slope, rise, plain, then trench.', 'Relief order is the base of oceanography.', 'Notes: Relief of the ocean floor'),
  q(2, 'easy', 'map', 'Which one of the following is not one of the listed coral regions of India?', null, null, ['Gulf of Khambhat', 'Gulf of Mannar', 'Lakshadweep', 'Andaman and Nicobar'], 0, 'India\'s coral regions are the Gulf of Mannar, Gulf of Kutch, Lakshadweep and Andaman and Nicobar. Khambhat is noted for tidal range, not reefs.', ['', 'The Gulf of Mannar is one of India\'s coral regions.', 'Lakshadweep is one of India\'s coral regions, with atolls.', 'Andaman and Nicobar is one of India\'s coral regions.'], 'Corals in India', 'Mannar, Kutch, Lakshadweep, Andaman and Nicobar.', 'Khambhat and Kutch are easily confused on a map.', 'Notes: Coral reefs'),
  q(3, 'easy', 'factual', 'Which one of the following is a cold current?', null, null, ['Benguela', 'Gulf Stream', 'Kuroshio', 'Brazil'], 0, 'The Benguela is a cold current in the South Atlantic, linked with the Namib desert.', ['', 'The Gulf Stream is a warm current of the North Atlantic.', 'The Kuroshio is a warm current of the North Pacific.', 'The Brazil Current is a warm current of the South Atlantic.'], 'Warm and cold currents', 'Gulf Stream, Kuroshio, Brazil: warm. Canary, Benguela, Peru, California: cold.', 'Currents are tested by name and nature.', 'Notes: Ocean currents'),
  q(4, 'easy', 'factual', 'Under UNCLOS, the contiguous zone extends up to how many nautical miles from the baseline?', null, null, ['24', '12', '200', '350'], 0, 'The contiguous zone extends to 24 nm, and the state may enforce customs, immigration and similar laws there.', ['', '12 nm is the limit of the territorial sea.', '200 nm is the limit of the Exclusive Economic Zone.', '350 nm is not the contiguous zone limit, which is far nearer the coast at 24 nm.'], 'UNCLOS zones', 'Territorial 12, contiguous 24, EEZ 200.', 'Maritime zone limits are core facts.', 'Notes: Law of the sea'),
  q(5, 'easy', 'factual', 'Where is the highest tidal range in the world found?', null, null, ['Bay of Fundy', 'Gulf of Khambhat', 'Gulf of Mexico', 'Sundarbans'], 0, 'The Bay of Fundy in Canada has the highest tidal range.', ['', 'The Gulf of Khambhat has a high range for India, but not the highest in the world.', 'Parts of the Gulf of Mexico are known for diurnal tides, not for the highest range.', 'The Sundarbans have a high range for India, but not the highest in the world.'], 'Tidal range', 'World: Bay of Fundy. India: Khambhat, Kutch, Sundarbans.', 'Extremes of tidal range are common recall items.', 'Notes: Tides'),
  q(6, 'easy', 'statement', 'Spring tides occur:', null, null, ['At new and full Moon, when Sun, Moon and Earth are in line', 'At first and last quarter, when Sun and Moon are at right angles', 'Only when the Moon is farthest from the Earth', 'Only during the spring season of the Northern Hemisphere'], 0, 'At new and full Moon, the Sun and Moon pull in line and give the highest high tides.', ['', 'First and last quarter give neap tides, which have the lowest range.', 'The Moon being farthest from the Earth gives an apogean tide, with a smaller range.', 'The name does not refer to the season: spring tides occur about twice a month.'], 'Spring and neap tides', 'Spring: new and full Moon. Neap: quarters.', 'The name misleads, so it is often tested.', 'Notes: Tides'),
  q(7, 'easy', 'factual', 'A ring-shaped reef around a lagoon, as seen in Lakshadweep, is called:', null, null, ['Atoll', 'Fringing reef', 'Barrier reef', 'Guyot'], 0, 'An atoll is a ring of reef around a lagoon, and Lakshadweep is the Indian example.', ['', 'A fringing reef is attached to the coast and has no enclosing ring.', 'A barrier reef is separated from the coast by a lagoon, and does not ring it.', 'A guyot is a flat-topped seamount and not a reef.'], 'Coral reef types', 'Fringing, barrier, atoll: attached, separated, ring.', 'Reef types are basic recall.', 'Notes: Coral reefs'),
  y(2023, 6, 3, 'easy', 'factual', 'Ilmenite and rutile, abundantly available in certain coastal tracts of India, are rich sources of which one of the following?', null, null, ['Aluminium', 'Copper', 'Iron', 'Titanium'], 3, 'Ilmenite and rutile are coastal placer minerals and rich sources of titanium.', ['Aluminium comes mainly from bauxite and not from these placers.', 'Copper is not the metal these two placer minerals are valued for.', 'Ilmenite contains iron, but the mineral pair is prized for titanium.', ''], 'Coastal placers', 'Ilmenite and rutile: titanium. Monazite: thorium and rare earths.', 'Asked in Prelims 2023, Q6.', 'Notes: Marine resources; UPSC CSE Prelims 2023 GS I'),

  // Moderate
  q(8, 'moderate', 'multi-statement', 'Consider the following processes:', ['1. Evaporation', '2. Ice formation', '3. River inflow'], 'How many of the above raise the salinity of sea water?', COUNT, 1, 'Evaporation and ice formation raise salinity. River inflow lowers it by adding fresh water.', ['Evaporation and ice formation both raise salinity, so one is too few.', '', 'River inflow lowers salinity, so all three cannot raise it.', 'Evaporation and ice formation do raise salinity, so the answer is not none.'], 'Controls of salinity', 'Evaporation and ice raise it. Rain, rivers and melting lower it.', 'Salinity is tested through its causes.', 'Notes: Temperature and salinity'),
  q(9, 'moderate', 'assertion-reason', 'Statement I: Surface salinity is highest in the subtropics and not at the equator.\nStatement II: In the subtropics evaporation is high and rain is low, while the equator is wetter.', null, 'Which one of the following is correct?', SI, 0, 'Both are correct, and II explains I. The balance of evaporation and rain sets the surface salinity pattern.', ['', 'II gives the direct cause of I, so it does explain it.', 'II is correct: this is the climate contrast between the two belts.', 'I is correct: salinity peaks in the subtropics.'], 'Salinity and latitude', 'Highest salinity is in the subtropics.', 'A common misconception is that the hot equator is saltiest.', 'Notes: Temperature and salinity'),
  q(10, 'moderate', 'assertion-reason', 'Statement I: The Baltic Sea is saltier than the Red Sea.\nStatement II: The Baltic has low evaporation and receives water from many rivers.', null, 'Which one of the following is correct?', SI, 3, 'The Baltic is much fresher than the Red Sea, so I is incorrect. II is correct, and it is the reason the Baltic is fresh.', ['I is false: the Red Sea is far saltier, so II cannot explain it.', 'I is false: the Baltic is the fresher of the two.', 'I is the false statement here, and II is correct.', ''], 'Enclosed seas', 'Red Sea: very salty. Baltic: much fresher.', 'Enclosed seas show how climate and rivers control salinity.', 'Notes: Temperature and salinity'),
  q(11, 'moderate', 'match', 'Consider the following pairs of current and ocean:', ['1. Kuroshio : Pacific', '2. Agulhas : Indian', '3. Benguela : Atlantic', '4. Oyashio : Atlantic'], 'How many of the above pairs are correctly matched?', COUNT4, 2, 'Pairs 1, 2 and 3 are correct. The Oyashio is a cold current of the North Pacific.', ['Pairs 1, 2 and 3 all hold, so one is too few.', 'Pairs 1, 2 and 3 all hold, so two is too few.', '', 'Pair 4 fails: the Oyashio belongs to the Pacific, where it meets the Kuroshio.'], 'Currents by ocean', 'Kuroshio and Oyashio are both North Pacific, and meet off Japan.', 'Current names are matched to basins in map-based questions.', 'Notes: Ocean currents'),
  q(12, 'moderate', 'map', 'On a map of the North Atlantic gyre, tracing the loop from the western boundary, which sequence is correct?', null, null, ['Gulf Stream, North Atlantic Drift, Canary, North Equatorial', 'Gulf Stream, Canary, North Atlantic Drift, North Equatorial', 'Canary, Gulf Stream, North Equatorial, North Atlantic Drift', 'North Atlantic Drift, Gulf Stream, North Equatorial, Canary'], 0, 'The gyre runs clockwise: north as the Gulf Stream, east as the Drift, south as the Canary, and west along the equator.', ['', 'The Canary is on the eastern side, so it comes after the Drift crosses the ocean.', 'The Canary cannot lead into the Gulf Stream directly, as equatorial flow lies between them.', 'The Drift is fed by the Gulf Stream, so the Drift cannot come before it.'], 'North Atlantic gyre', 'Northern gyres run clockwise, and southern ones anticlockwise.', 'Tracing a gyre is the exam skill the note stresses.', 'Notes: Ocean currents'),
  q(13, 'moderate', 'match', 'Match List I (desert) with List II (cold current offshore):', ['List I: A. Atacama; B. Namib; C. Sahara; D. Sonoran', 'List II: 1. Benguela; 2. Peru; 3. California; 4. Canary'], 'Select the correct code:', ['A-1, B-2, C-4, D-3', 'A-2, B-1, C-3, D-4', 'A-2, B-1, C-4, D-3', 'A-1, B-2, C-3, D-4'], 2, 'Atacama goes with Peru, Namib with Benguela, Sahara with Canary and Sonoran with California.', ['The Atacama lies off the Peru Current, and the Namib off the Benguela, so A and B are reversed.', 'The Sahara lies by the Canary and the Sonoran by the California, so C and D are reversed.', '', 'This reverses both the Atacama and Namib pair and the Sahara and Sonoran pair.'], 'Currents and deserts', 'Atacama with Peru, Namib with Benguela.', 'West coast deserts join currents with climate.', 'Notes: Ocean currents'),
  q(14, 'moderate', 'statement', 'With reference to rich fishing grounds, consider the following statements:', ['1. The Grand Banks lie where the Gulf Stream and Labrador Current meet.', '2. The waters off Japan are rich where the Kuroshio and Oyashio meet.'], 'Which of the statements given above is/are correct?', BOTH, 2, 'Both are correct. Warm and cold waters meet in these areas, and plankton grows there.', ['Statement 2 is also correct: the Kuroshio and Oyashio meet off Japan.', 'Statement 1 is also correct: the Gulf Stream and Labrador meet at the Grand Banks.', '', 'Both are correct, as the meeting of warm and cold waters makes them rich.'], 'Fishing grounds', 'Warm and cold meeting means plankton and fish.', 'Fishing grounds connect currents with economy.', 'Notes: Ocean currents'),
  q(15, 'moderate', 'multi-statement', 'Consider the following statements about tides:', ['1. Neap tides occur at new and full Moon.', '2. Apogean tides occur when the Moon is closest to the Earth.', '3. A semidiurnal pattern means one high tide and one low tide a day.'], 'How many of the above statements are correct?', COUNT, 3, 'None is correct. Neap tides occur at the quarters, apogean tides when the Moon is farthest, and semidiurnal means two nearly equal tides a day.', ['Each of the three fails, so not even one holds.', 'Each of the three fails, so two cannot hold.', 'Statement 1 describes spring tides, 2 describes perigean tides and 3 describes diurnal tides.', ''], 'Types of tide', 'Semidiurnal is two tides a day and the most common form.', 'Tide types are tested with swapped definitions.', 'Notes: Tides'),
  q(16, 'moderate', 'match', 'Match List I (sea-level event) with List II (main cause):', ['List I: A. Wind wave; B. Tsunami; C. Tide; D. Storm surge', 'List II: 1. Gravity of Moon and Sun; 2. Seabed displacement; 3. Wind and low pressure in a cyclone; 4. Wind on the surface'], 'Select the correct code:', ['A-4, B-1, C-2, D-3', 'A-4, B-2, C-1, D-3', 'A-3, B-2, C-1, D-4', 'A-3, B-1, C-2, D-4'], 1, 'Wind waves come from surface wind, tsunamis from seabed displacement, tides from gravity and storm surge from a cyclone\'s wind and low pressure.', ['Tsunamis come from seabed displacement and tides from gravity, so B and C are swapped.', '', 'Storm surge belongs to cyclones, and wind waves to surface wind, so A and D are swapped.', 'This swaps both the wind wave and storm surge pair and the tsunami and tide pair.'], 'Waves, tides and surges', 'Different causes: wind, seabed, gravity, cyclone.', 'The note flags this as a trap.', 'Notes: Tides'),
  q(17, 'moderate', 'current-static', 'As of September 2025, for which area did India sign a 15-year contract with the International Seabed Authority for polymetallic sulphides, making it the first country to hold two such contracts?', null, null, ['Carlsberg Ridge', 'Central Indian Ocean Basin', 'Central and South West Indian Ridge', 'Ninety East Ridge'], 0, 'The September 2025 contract covers sulphides on the Carlsberg Ridge.', ['', 'The Central Indian Ocean Basin contract, from 2002, is for polymetallic nodules.', 'The Central and South West Indian Ridge contract is India\'s earlier sulphide contract, from 2016.', 'The contract in question was for the Carlsberg Ridge, not the Ninety East Ridge.'], 'India\'s ISA contracts', 'Nodules 2002, sulphides 2016, sulphides on Carlsberg 2025.', 'It links a recent development with static marine resources.', 'Notes: Law of the sea; News On AIR, September 2025'),
  y(2024, 89, 39, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. The Red Sea receives very little precipitation in any form.', '2. No water enters the Red Sea from rivers.'], 'Which of the statements given above is/are correct?', BOTH, 2, 'Both are correct. The Red Sea has very low rainfall and no large river inflow, which helps make it very salty.', ['Statement 2 also holds, as no large river enters the Red Sea.', 'Statement 1 also holds, as rainfall over the Red Sea is very low.', '', 'Both statements hold, as these are the standard reasons for its salinity.'], 'Red Sea salinity', 'Low rain, no large rivers and high evaporation make it salty.', 'Asked in Prelims 2024, Q89.', 'Notes: Temperature and salinity; UPSC CSE Prelims 2024 GS I'),
  y(2021, 58, 27, 'moderate', 'statement', 'Consider the following statements:', ['1. In the tropical zone, the western sections of the oceans are warmer than the eastern sections owing to the influence of trade winds.', '2. In the temperate zone, westerlies make the eastern sections of oceans warmer than the western sections.'], 'Which of the statements given above is/are correct?', BOTH, 2, 'Both are correct. Trade winds pile warm water in the west of tropical oceans, and westerlies carry warmth to the east in the temperate zone.', ['Statement 2 also holds: westerlies warm the eastern sections.', 'Statement 1 also holds: trade winds warm the western sections.', '', 'Both hold, because the prevailing wind differs between the two zones.'], 'Winds and ocean warmth', 'Tropics: west is warmer. Temperate: east is warmer.', 'Asked in Prelims 2021, Q58.', 'Notes: Ocean currents; UPSC CSE Prelims 2021 GS I'),
  y(2022, 85, 37, 'moderate', 'multi-statement', 'With reference to the United Nations Convention on the Law of Sea, consider the following statements:', ['1. A coastal state has the right to establish the breadth of its territorial sea up to a limit not exceeding 12 nautical miles, measured from baseline determined in accordance with the convention.', '2. Ships of all states, whether coastal or land-locked, enjoy the right of innocent passage through the territorial sea.', '3. The Exclusive Economic Zone shall not extend beyond 200 nautical miles from the baseline from which the breadth of the territorial sea is measured.'], 'Which of the statements given above are correct?', ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 3, 'All three are correct: the 12 nm limit, innocent passage for all states, and the 200 nm limit.', ['Statement 3 also holds: 200 nm is the limit of the EEZ.', 'Statement 1 also holds: 12 nm is the limit of the territorial sea.', 'Statement 2 also holds: foreign ships have the right of innocent passage.', ''], 'UNCLOS', 'Territorial 12, EEZ 200, innocent passage for all.', 'Asked in Prelims 2022, Q85.', 'Notes: Law of the sea; UPSC CSE Prelims 2022 GS I'),
  y(2026, 50, 25, 'moderate', 'multi-statement', 'Which of the following statements with regard to India\'s Deep Ocean Mission is/are correct?', ['1. It was launched by the Ministry of Ports, Shipping and Waterways, Government of India.', '2. Matsya-6000 has been designed to carry 3 people for deep sea exploration.', '3. Samudrayaan is a project under this mission.'], 'Select the answer using the code given below:', ['1 only', '2 and 3 only', '1 and 2 only', '1, 2 and 3'], 1, 'Statements 2 and 3 are correct. The mission belongs to the Ministry of Earth Sciences, so statement 1 fails.', ['Statement 1 fails: the mission belongs to the Ministry of Earth Sciences.', '', 'Statement 1 fails: the mission belongs to the Ministry of Earth Sciences.', 'Statement 1 fails, so all three cannot be correct.'], 'Deep Ocean Mission', 'Ministry of Earth Sciences, Samudrayaan, Matsya 6000.', 'Asked in Prelims 2026, Q50.', 'Notes: Law of the sea; UPSC CSE Prelims 2026 GS I'),

  // Hard
  y(2021, 56, 27, 'hard', 'multi-statement', 'Consider the following statements:', ['1. The Global Ocean Commission grants licences for seabed exploration and mining in international waters.', '2. India has received licences for seabed mineral exploration in international waters.', '3. \'Rare earth minerals\' are present on seafloor in international waters.'], 'Which of the statements given above are correct?', ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 1, 'Statements 2 and 3 are correct. Seabed licences are granted by the International Seabed Authority, not the Global Ocean Commission.', ['Statement 1 fails: the International Seabed Authority grants the licences.', '', 'Statement 1 fails: the International Seabed Authority grants the licences.', 'Statement 1 fails, so all three cannot be correct.'], 'Seabed licensing', 'The ISA, in Kingston, grants seabed licences.', 'Asked in Prelims 2021, Q56.', 'Notes: Marine resources; UPSC CSE Prelims 2021 GS I'),
  y(2018, 87, 37, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Most of the world\'s coral reefs are in tropical waters.', '2. More than one-third of the world\'s coral reefs are located in the territories of Australia, Indonesia and Philippines.', '3. Coral reefs host far more number of animal phyla than those hosted by tropical rainforests.'], 'Which of the statements given above is/are correct?', ['1 and 2 only', '3 only', '1 and 3 only', '1, 2 and 3'], 3, 'All three are correct. Reefs are mainly tropical, these three countries hold a large share of them, and reefs are richer in animal phyla than rainforests.', ['Statement 3 also holds: reefs host more animal phyla than tropical rainforests.', 'Statements 1 and 2 also hold: reefs are mainly tropical, and these countries hold over a third.', 'Statement 2 also holds: these three countries together hold over a third of reefs.', ''], 'Coral reef facts', 'Reefs are mainly tropical and exceptionally rich in animal phyla.', 'Asked in Prelims 2018, Q87.', 'Notes: Coral reefs; UPSC CSE Prelims 2018 GS I'),
  q(18, 'hard', 'statement', 'Forchhammer\'s principle states that:', null, null, ['The ratio between the major salts in sea water stays almost constant even if total salinity varies', 'Total salinity stays almost constant though the ratio between salts varies', 'Salinity rises steadily with depth in all oceans', 'Salinity falls from the equator towards the poles at a constant rate'], 0, 'Total salinity varies, but the proportion of the major salts to each other stays almost constant.', ['', 'This reverses the principle: it is total salinity that varies, and the ratio that holds.', 'The principle concerns the ratio of salts, not a pattern of salinity with depth.', 'Salinity is highest in the subtropics, so it does not fall steadily from the equator.'], 'Forchhammer\'s principle', 'Ratio of major salts is constant, total salinity is not.', 'The two halves are easily reversed.', 'Notes: Temperature and salinity'),
  q(19, 'hard', 'assertion-reason', 'Statement I: The continental shelf off western India is generally wider than the shelf off the eastern coast.\nStatement II: The east coast plains of India are wider than the west coast plains.', null, 'Which one of the following is correct?', SI, 1, 'Both are correct, but II does not explain I. The width of the coastal plain does not account for the shelf. The contrast surprises many for that reason.', ['A wider east coast plain would suggest the opposite, so II cannot explain I.', '', 'II is also correct: the east coast plains are the wider ones.', 'I is correct: the Arabian Sea shelf, with Mumbai High on it, is the wider one.'], 'Shelf width around India', 'Western shelf is wider, though the eastern plain is wider.', 'The note flags this as a trap.', 'Notes: Relief of the ocean floor'),
  q(20, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Surface currents carry only about a tenth of ocean water.', '2. Thermohaline circulation is driven by cold, salty water sinking near Greenland and Antarctica.', '3. Thermohaline circulation moves water much faster than surface currents.'], 'Which of the statements given above is/are correct?', ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 0, 'Statements 1 and 2 are correct. Statement 3 fails, because thermohaline circulation is slow.', ['', 'Statement 3 fails: the deep circulation is slow.', 'Statement 3 fails: the deep circulation is slow.', 'Statement 3 fails, so all three cannot be correct.'], 'Thermohaline circulation', 'Deep circulation moves most water, and moves it slowly.', 'Surface and deep circulation are often confused.', 'Notes: Ocean currents'),
  q(21, 'hard', 'multi-statement', 'Consider the following statements about the northern Indian Ocean:', ['1. Its surface currents reverse fully with the seasons because of the monsoon.', '2. Its surface flow is westward in summer and eastward in winter.', '3. The Somali Current keeps the same direction all year.'], 'How many of the above statements are correct?', COUNT, 0, 'Only statement 1 is correct. The flow is eastward in summer and westward in winter, and the Somali Current also reverses.', ['', 'Statements 2 and 3 both fail, so two cannot be correct.', 'Statement 2 reverses the directions and statement 3 denies the Somali reversal.', 'Statement 1 is correct: the reversal with the monsoon is the defining feature.'], 'Monsoon drift', 'Eastward in summer, westward in winter.', 'The reversal is unique, so it is examinable.', 'Notes: Ocean currents'),
  q(22, 'hard', 'match', 'Consider the following pairs of marine resource and association:', ['1. Polymetallic nodules : Central Indian Ocean Basin', '2. Polymetallic sulphides : Hydrothermal vents', '3. Monazite : Thorium', '4. Gas hydrates : Krishna-Godavari basin'], 'How many of the above pairs are correctly matched?', COUNT4, 3, 'All four are correct, each as listed in the note.', ['All four pairs hold, so one is too few.', 'All four pairs hold, so two is too few.', 'All four pairs hold, so three is too few.', ''], 'Marine resources', 'Nodules on the deep seabed, sulphides near vents, placers on the coast.', 'Resource and location pairs are easy to test closely.', 'Notes: Marine resources'),
  q(23, 'hard', 'multi-statement', 'Consider the following statements under UNCLOS:', ['1. In the EEZ the coastal state has full sovereignty, and foreign ships have no freedom of navigation.', '2. In the contiguous zone the state may enforce customs and immigration laws.', '3. The seabed beyond national limits is overseen by an authority based in Kingston, Jamaica.'], 'Which of the statements given above is/are correct?', ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], 2, 'Statements 2 and 3 are correct. The EEZ gives exclusive rights over resources, while others keep freedom of navigation.', ['Statement 1 fails: others keep freedom of navigation in the EEZ.', 'Statement 1 fails: EEZ rights are over resources and are not full sovereignty.', '', 'Statement 1 fails, so all three cannot be correct.'], 'EEZ and the Area', 'EEZ means resource rights, not sovereignty.', 'The difference between the EEZ and the territorial sea is a classic test.', 'Notes: Law of the sea'),
]

export const mains: MainsQuestion[] = [
  {
    id: 'm-0117-1', day: DAY, marks: 10, words: 150, directive: 'Examine',
    question: 'Examine why the western margins of continents in the tropics often have deserts, with examples.',
    mustCover: ['Cold currents on eastern sides of ocean basins', 'Cool, stable air holding less moisture', 'Role of subtropical high pressure', 'Examples: Atacama, Namib, Sahara, Sonoran', 'Effects on fishing and upwelling, or exceptions'],
    model: `Introduction

Gyres carry cooled water towards the equator along the eastern sides of ocean basins, which are the western margins of continents. Many major hot deserts sit beside these cold currents.

Mechanism

Cold current: it cools the air above, so the air holds less moisture and becomes stable. Rising motion is weak, so rain is rare.

Subtropical high: sinking air under the subtropical highs adds to the dryness, giving hot desert climates.

Examples

Atacama: Peru Current.

Namib: Benguela Current.

Sahara: Canary Current.

Sonoran: California Current.

Related effects

Fog can form where air masses meet. Off Peru, offshore winds pull up cold, nutrient-rich water, which supports rich fishing, though this weakens in El Nino years.

Conclusion

The desert pattern shows that climate depends on ocean circulation as well as latitude. Any lasting change in currents would therefore alter both coastal climate and fisheries.`,
  },
  {
    id: 'm-0117-2', day: DAY, marks: 10, words: 150, directive: 'Discuss',
    question: 'Discuss the factors that control the salinity of ocean water, with suitable examples from enclosed seas and the seas around India.',
    mustCover: ['Definition and the average of about 35 parts per thousand', 'Factors raising and lowering salinity', 'Latitudinal pattern with the subtropical peak', 'Red Sea and Baltic contrast', 'Arabian Sea and Bay of Bengal contrast'],
    model: `Introduction

Salinity is the grams of salt per 1,000 g of water, and averages about 35 parts per thousand. It reflects the balance between water added and water removed.

Controls

Raised by evaporation and ice formation.

Lowered by rain, river inflow and melting ice.

Pattern with latitude

Salinity peaks in the subtropics, where evaporation is high and rain is low. The equator is wetter, so it is less salty despite the heat.

Enclosed seas

The Red Sea is very salty because of low rainfall, almost no river inflow and high evaporation.

The Baltic is much fresher because of cold, low evaporation and many rivers.

Around India

The Arabian Sea is saltier than the Bay of Bengal, since the Bay receives the Ganga, Brahmaputra and other large rivers.

Conclusion

Total salinity varies from place to place, yet the ratio of major salts stays almost constant, as Forchhammer's principle states. Salinity also contributes to the density differences that drive deep circulation.`,
  },
  {
    id: 'm-0117-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse',
    question: 'Critically analyse India\'s interest in deep-sea mining in the Indian Ocean, weighing its strategic value against its environmental risks.',
    mustCover: ['Resources: nodules and sulphides and their minerals', 'Legal basis: UNCLOS, the Area and the ISA', 'India\'s contracts of 2002, 2016 and 2025, and the Deep Ocean Mission', 'Strategic and economic rationale', 'Environmental risks to little-known ecosystems', 'Balanced way forward'],
    model: `Introduction

The deep seabed holds minerals that land sources supply unevenly. India has moved early in this field, but mining ecosystems that are barely understood carries real risk.

Resources and legal basis

Polymetallic nodules hold manganese, nickel, cobalt and copper. Polymetallic sulphides near hydrothermal vents hold copper, zinc and gold.

Under UNCLOS, the seabed beyond national limits, or "the Area", is overseen by the International Seabed Authority in Kingston, Jamaica.

India's position

2002: nodules contract for the Central Indian Ocean Basin.

2016: sulphides contract for the Central and South West Indian Ridge.

September 2025: a 15-year sulphides contract for the Carlsberg Ridge, making India the first country to hold two sulphide contracts.

The Deep Ocean Mission of the Ministry of Earth Sciences includes Samudrayaan, whose crewed submersible Matsya 6000 is designed to reach 6,000 m.

Strategic case

These minerals are important for industry and energy. A presence in the Indian Ocean strengthens India's position in the region, and also builds ocean science and technology.

Environmental concerns

Deep-sea ecosystems are little known, so the harm is hard to predict. Mining may disturb the seabed around sites such as vents. Damage to slow-recovering habitats may not be reversible.

Critical view

These are exploration contracts and not a licence to mine now. Exploration builds the knowledge needed to judge the risks. The case for commercial mining remains open.

Way forward

India should gather baseline data, assess impacts openly, and support strong ISA rules before any extraction.

Conclusion

Strategic ambition and caution are compatible if knowledge comes before extraction.`,
  },
]
