import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2027-01-18'
const S = 'Notes: Indian physiography, drainage, climate and soils'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const COUNT4: Four = ['Only one', 'Only two', 'Only three', 'All four']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-0118-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', 'Flat valleys called duns, such as Dehradun, are found in which Himalayan range?', null, null, ['Shiwalik', 'Lesser Himalaya', 'Greater Himalaya', 'Trans-Himalaya'], 0, 'Duns are flat valleys in the Shiwaliks, the outer range of unconsolidated gravels.', ['', 'The Lesser Himalaya has valleys such as Kashmir, Kangra and Kullu, not the duns.', 'The Greater Himalaya is the high snowy range with peaks such as Everest.', 'The Trans-Himalaya is the Karakoram, Ladakh and Zaskar group, far north of the duns.'], 'Himalayan ranges', 'Duns lie in the Shiwaliks.', 'Range-specific features are common in Prelims.', 'Notes: Himalaya'),
  q(2, 'easy', 'factual', 'The Bhagirathi and the Alaknanda meet to form the Ganga at:', null, null, ['Devprayag', 'Rudraprayag', 'Karnaprayag', 'Haridwar'], 0, 'The Bhagirathi and Alaknanda meet at Devprayag, and the river is called the Ganga from there.', ['', 'Rudraprayag is on the Alaknanda and is not the place where it meets the Bhagirathi.', 'Karnaprayag is on the Alaknanda and is not the place where it meets the Bhagirathi.', 'Haridwar is downstream on the Ganga, after the two streams have already met.'], 'Source of the Ganga', 'Devprayag: Bhagirathi and Alaknanda.', 'Confluence points are a standard recall item.', 'Notes: Drainage'),
  q(3, 'easy', 'factual', 'Which is the highest peak in peninsular India?', null, null, ['Anaimudi', 'Doda Betta', 'Mahendragiri', 'Mahabaleshwar'], 0, 'Anaimudi, at 2,695 m in the Western Ghats, is the highest peak in the peninsula.', ['', 'Doda Betta is 2,637 m, which is slightly lower than Anaimudi.', 'Mahendragiri, at about 1,500 m, is in the lower Eastern Ghats.', 'Mahabaleshwar is the source area of the Krishna and is not the highest peak.'], 'Peninsular peaks', 'Anaimudi 2,695 m, Doda Betta 2,637 m.', 'Peak heights decide close options.', 'Notes: Peninsular Plateau, Desert, Coasts and Islands'),
  q(4, 'easy', 'map', 'The Ten Degree Channel separates:', null, null, ['Andaman from Nicobar', 'Minicoy from the Maldives', 'Amindivi from Cannanore islands', 'Sri Lanka from India'], 0, 'The Ten Degree Channel divides the Andaman group from the Nicobar group.', ['', 'Minicoy and the Maldives are separated by the Eight Degree Channel.', 'Amindivi and Cannanore islands are separated by the Eleven Degree Channel.', 'The Ten Degree Channel lies in the Bay of Bengal side, not between Sri Lanka and India.'], 'Island channels', 'Ten Degree: Andaman and Nicobar.', 'Channels are favourite map items.', 'Notes: Peninsular Plateau, Desert, Coasts and Islands'),
  q(5, 'easy', 'statement', 'Which one of the following best describes the Bhabar?', null, null, ['A pebbly belt at the foot of the Shiwaliks where streams vanish underground', 'A wet, marshy tract where streams re-emerge', 'Older alluvium standing above the flood line', 'New alluvium on the floodplain'], 0, 'The Bhabar is the pebbly belt at the foot of the Shiwaliks, where streams sink underground.', ['', 'This describes the Terai, which lies south of the Bhabar.', 'This describes the Bhangar, the older alluvium.', 'This describes the Khadar, the new fertile alluvium.'], 'Northern Plains belts', 'Bhabar, Terai, Bhangar, Khadar from north to south.', 'The note marks these belts as favourites.', 'Notes: Northern Plains'),
  q(6, 'easy', 'factual', 'What is India\'s standard meridian?', null, null, ['82°30\' E', '77°30\' E', '80°00\' E', '85°30\' E'], 0, 'The standard meridian is 82°30\' E, near Mirzapur.', ['', '77°30\' E is close to the longitude of Delhi and Bengaluru, not the standard meridian.', '80°00\' E is not the standard meridian, which lies at 82°30\' E near Mirzapur.', '85°30\' E lies east of the standard meridian, which is at 82°30\' E.'], 'Standard meridian', '82°30\' E, near Mirzapur.', 'Basic location facts are checked directly.', 'Notes: The big picture'),
  y(2021, 64, 29, 'easy', 'factual', 'The black cotton soil of India has been formed due to the weathering of', null, null, ['brown forest soil', 'fissure volcanic rock', 'granite and schist', 'shale and limestone'], 1, 'Black cotton soil formed from the weathering of fissure volcanic rock, the Deccan basalts.', ['Brown forest soil is itself a soil, and is not the parent of regur.', '', 'Granite is not the parent: the black soil belt lies on the Deccan basalts.', 'Shale and limestone are sedimentary, and are not the parent of regur.'], 'Black soil origin', 'Black soil comes from Deccan basalt.', 'Asked in Prelims 2021, Q64.', 'Notes: Soils; UPSC CSE Prelims 2021 GS I'),
  y(2022, 24, 13, 'easy', 'factual', 'Gandikota canyon of South India was created by which one of the following rivers?', null, null, ['Cauvery', 'Manjira', 'Pennar', 'Tungabhadra'], 2, 'The Pennar created the Gandikota canyon.', ['The Cauvery rises at Brahmagiri in Kodagu and does not form Gandikota.', 'The Manjira is not the river associated with the canyon.', '', 'The Tungabhadra is a Krishna tributary and is not the river of the canyon.'], 'Gandikota', 'Gandikota: Pennar.', 'Asked in Prelims 2022, Q24.', 'Notes: Drainage; UPSC CSE Prelims 2022 GS I'),

  // Moderate
  q(7, 'moderate', 'multi-statement', 'Consider the following statements about Indian rivers:', ['1. Himalayan rivers are perennial, being fed by snow and rain.', '2. Peninsular rivers generally have fixed courses in hard rock.', '3. West-flowing Peninsular rivers end mostly in big deltas.'], 'How many of the above statements are correct?', COUNT, 1, 'Statements 1 and 2 are correct. On the west, Peninsular rivers end in estuaries, and deltas are on the east.', ['Statements 1 and 2 both hold, so one is too few.', '', 'Statement 3 fails: the west-flowing rivers end in estuaries.', 'Statements 1 and 2 are correct: these are the standard contrasts.'], 'Himalayan and Peninsular', 'Himalayan rivers are young and perennial. Peninsular are mature and seasonal.', 'This contrast is core for Prelims and Mains.', 'Notes: Drainage'),
  q(8, 'moderate', 'assertion-reason', 'Statement I: The Narmada and the Tapi form estuaries and not deltas.\nStatement II: The Narmada and the Tapi run through rift valleys.', null, 'Which one of the following is correct?', SI, 0, 'Both are correct, and II explains I, as the note gives the rift valley setting as the reason these rivers form estuaries.', ['', 'The rift valley setting is the reason given for the estuaries, so II does explain I.', 'II is also correct: both rivers lie in rift valleys.', 'I is correct: both rivers form estuaries on the Arabian Sea.'], 'West-flowing rivers', 'Narmada and Tapi make estuaries in rift valleys.', 'Why the west coast lacks deltas is a known question.', 'Notes: Drainage'),
  q(9, 'moderate', 'match', 'Match List I (river) with List II (source):', ['List I: A. Godavari; B. Krishna; C. Kaveri; D. Narmada', 'List II: 1. Amarkantak; 2. Brahmagiri; 3. Mahabaleshwar; 4. Trimbakeshwar'], 'Select the correct code:', ['A-4, B-3, C-1, D-2', 'A-3, B-4, C-2, D-1', 'A-4, B-3, C-2, D-1', 'A-3, B-4, C-1, D-2'], 2, 'Godavari rises at Trimbakeshwar, Krishna at Mahabaleshwar, Kaveri at Brahmagiri and Narmada at Amarkantak.', ['The Kaveri rises at Brahmagiri and the Narmada at Amarkantak, so C and D are swapped.', 'The Godavari rises at Trimbakeshwar and the Krishna at Mahabaleshwar, so A and B are swapped.', '', 'This swaps both the Godavari and Krishna pair and the Kaveri and Narmada pair.'], 'River sources', 'Learn source and direction for each Peninsular river.', 'Source matching is a common format.', 'Notes: Drainage'),
  q(10, 'moderate', 'map', 'Which one of the following rivers enters India through the Shipki La area?', null, null, ['Satluj', 'Indus', 'Beas', 'Ravi'], 0, 'The Satluj rises near Rakshas Tal in Tibet and enters India at Shipki La.', ['', 'The Indus rises near Mansarovar and enters through Ladakh.', 'The Beas does not rise in Tibet: it does not enter through a trans-border pass.', 'The Ravi does not rise in Tibet: it does not enter through a trans-border pass.'], 'Satluj', 'Satluj: Rakshas Tal, enters at Shipki La.', 'Passes and rivers are tested together in map questions.', 'Notes: Drainage'),
  q(11, 'moderate', 'match', 'Consider the following pairs of lake and feature:', ['1. Chilika : Brackish lagoon', '2. Loktak : Floating islands (phumdis)', '3. Lonar : Meteorite crater', '4. Sambhar : Freshwater'], 'How many of the above pairs are correctly matched?', COUNT4, 2, 'Pairs 1, 2 and 3 are correct. Sambhar is saline, with Didwana and Kuchaman in Rajasthan.', ['Pairs 1, 2 and 3 all hold, so one is too few.', 'Pairs 1, 2 and 3 all hold, so two is too few.', '', 'Pair 4 fails: Sambhar is a saline lake.'], 'Lake types', 'Sambhar saline, Lonar crater, Loktak phumdis.', 'Lake types are a recurring theme.', 'Notes: Drainage'),
  q(12, 'moderate', 'statement', 'With reference to the Indus Waters Treaty of 1960, consider the following statements:', ['1. India received the eastern rivers: Ravi, Beas and Satluj.', '2. Pakistan received the western rivers: Indus, Jhelum and Chenab, subject to limited Indian use.'], 'Which of the statements given above is/are correct?', BOTH, 2, 'Both are correct, as this is the basic allocation under the treaty.', ['Statement 2 is also correct: the western rivers went to Pakistan.', 'Statement 1 is also correct: the eastern rivers went to India.', '', 'Both are correct, and this is the allocation under the treaty.'], 'Indus Waters Treaty', 'Eastern to India, western to Pakistan.', 'The treaty stays in the news, so its basics matter.', 'Notes: Drainage'),
  q(13, 'moderate', 'match', 'Consider the following pairs of weather feature and association:', ['1. Mango showers : Kerala and Karnataka', '2. Blossom showers : Coffee', '3. Kalbaisakhi : Bengal and Assam'], 'How many of the above pairs are correctly matched?', COUNT, 2, 'All three are correct: these are the pre-monsoon showers of the hot season.', ['All three pairs hold, so one is too few.', 'All three pairs hold, so two is too few.', '', 'All three pairs hold, as each is a standard pre-monsoon association.'], 'Pre-monsoon showers', 'Mango showers, blossom showers and kalbaisakhi are pre-monsoon.', 'Local weather names suit matching.', 'Notes: Climate of India'),
  q(14, 'moderate', 'multi-statement', 'Consider the following statements about soils:', ['1. Alluvial soil is rich in phosphorus and low in potash.', '2. Laterite soil is rich in nutrients because of leaching.', '3. Red soil gets its red colour from hydration.'], 'How many of the above statements are correct?', COUNT, 3, 'None is correct. Alluvial soil is rich in potash and low in phosphorus, laterite is poor in nutrients and red colour comes from iron.', ['Each of the three fails, so not even one holds.', 'Each of the three fails, so two cannot hold.', 'Statement 1 reverses potash and phosphorus, 2 reverses leaching, and 3 confuses red and yellow.', ''], 'Soil properties', 'Alluvial: rich in potash, low in phosphorus. Iron gives red, hydration gives yellow.', 'Soil properties are easily reversed in statements.', 'Notes: Soils'),
  q(15, 'moderate', 'match', 'Match List I (drainage pattern) with List II (setting):', ['List I: A. Dendritic; B. Trellis; C. Radial; D. Centripetal', 'List II: 1. From a dome, such as Amarkantak; 2. Into a basin, such as Loktak; 3. On folded hills; 4. Branching, on plains'], 'Select the correct code:', ['A-3, B-4, C-1, D-2', 'A-4, B-3, C-2, D-1', 'A-3, B-4, C-2, D-1', 'A-4, B-3, C-1, D-2'], 3, 'Dendritic is branching on plains, trellis is on folded hills, radial flows out from a dome and centripetal flows into a basin.', ['Dendritic is on plains and trellis on folded hills, so A and B are swapped.', 'Radial flows out and centripetal flows in, so C and D are swapped.', 'This swaps both the dendritic and trellis pair and the radial and centripetal pair.', ''], 'Drainage patterns', 'Radial flows out, and centripetal flows in.', 'Patterns are often tested by example.', 'Notes: Drainage'),
  y(2024, 6, 5, 'moderate', 'map', 'With reference to the Himalayan rivers joining the Ganga downstream of Prayagraj from West to East, which one of the following sequences is correct?', null, null, ['Ghaghara - Gomati - Gandak - Kosi', 'Gomati - Ghaghara - Gandak - Kosi', 'Ghaghara - Gomati - Kosi - Gandak', 'Gomati - Ghaghara - Kosi - Gandak'], 1, 'From west to east, the rivers join in the order Gomati, Ghaghara, Gandak, Kosi.', ['The Gomati joins before the Ghaghara when moving east, so this reverses the first two.', '', 'This reverses both pairs: the correct order is Gomati, Ghaghara, Gandak, Kosi.', 'The Gandak joins before the Kosi when moving east, so this reverses the last two.'], 'Ganga left-bank tributaries', 'Gomati, Ghaghara, Gandak, Kosi, west to east.', 'Asked in Prelims 2024, Q6.', 'Notes: Drainage; UPSC CSE Prelims 2024 GS I'),
  y(2023, 1, 3, 'moderate', 'multi-statement', 'Consider the following statements:', ['1. Jhelum River passes through Wular Lake.', '2. Krishna River directly feeds Kolleru Lake.', '3. Meandering of Gandak River formed Kanwar Lake.'], 'How many of the statements given above are correct?', COUNT, 1, 'Statements 1 and 3 are correct. Kolleru lies between the Godavari and Krishna deltas and is not directly fed by the Krishna.', ['Statements 1 and 3 both hold, so one is too few.', '', 'Statement 2 fails: the Krishna does not directly feed Kolleru.', 'Statements 1 and 3 are correct: Wular is on the Jhelum and Kanwar is an oxbow of the Gandak.'], 'Lakes and rivers', 'Kolleru lies between deltas, and is not directly fed by the Krishna.', 'Asked in Prelims 2023, Q1.', 'Notes: Drainage; UPSC CSE Prelims 2023 GS I'),
  y(2026, 33, 17, 'moderate', 'multi-statement', 'With reference to the climate of Andaman and Nicobar Islands, which of the following statements is/are correct?', ['1. The climate can be defined as a humid, tropical coastal climate.', '2. It receives rainfall from both South-west monsoon and North-east monsoon.', '3. Maximum precipitation is between December and May.'], 'Select the answer using the code given below:', ['1 only', '1 and 2', '2 and 3', '3 only'], 1, 'Statements 1 and 2 are correct. The islands get rain from both monsoons. December to May includes their driest months, so statement 3 fails.', ['Statement 2 also holds: the islands get rain from both monsoons.', '', 'Statement 3 fails: December to May includes their driest months.', 'Statement 3 fails, and statements 1 and 2 are the correct ones.'], 'Andaman climate', 'Andaman and Nicobar get rain from both monsoons.', 'Asked in Prelims 2026, Q33.', 'Notes: Climate of India; UPSC CSE Prelims 2026 GS I'),
  y(2022, 25, 13, 'moderate', 'match', 'Consider the following pairs:', ['Peak : Mountains', '1. Namcha Barwa : Garhwal Himalaya', '2. Nanda Devi : Kumaon Himalaya', '3. Nokrek : Sikkim Himalaya'], 'Which of the pairs given above is/are correctly matched?', ['1 and 2', '2 only', '1 and 3', '3 only'], 1, 'Only pair 2 is correct. Namcha Barwa is in the Assam Himalaya, and Nokrek is in the Garo Hills of Meghalaya.', ['Pair 1 fails: Namcha Barwa is at the eastern end, in the Assam Himalaya.', '', 'Pairs 1 and 3 both fail: Namcha Barwa is Assam Himalaya and Nokrek is Garo Hills.', 'Pair 3 fails: Nokrek is in the Garo Hills of Meghalaya.'], 'Peaks and ranges', 'Nanda Devi: Kumaon. Namcha Barwa: Assam Himalaya. Nokrek: Garo Hills.', 'Asked in Prelims 2022, Q25.', 'Notes: Himalaya; UPSC CSE Prelims 2022 GS I'),
  y(2021, 53, 25, 'moderate', 'factual', 'With reference to the Indus river system, of the following four rivers, three of them pour into one of them which joins the Indus direct. Among the following, which one is such river that joins the Indus direct?', null, null, ['Chenab', 'Jhelum', 'Ravi', 'Sutlej'], 0, 'The Jhelum, Ravi and Satluj pour into the Chenab, and the Chenab joins the Indus.', ['', 'The Jhelum pours into the Chenab and does not join the Indus directly.', 'The Ravi pours into the Chenab and does not join the Indus directly.', 'The Satluj pours into the Chenab and does not join the Indus directly.'], 'Indus tributaries', 'The Chenab carries the others to the Indus.', 'Asked in Prelims 2021, Q53.', 'Notes: Drainage; UPSC CSE Prelims 2021 GS I'),

  // Hard
  y(2023, 5, 3, 'hard', 'application', 'Which one of the following is the best example of repeated falls in sea level, giving rise to present-day extensive marshland?', null, null, ['Bhitarkanika Mangroves', 'Marakkanam Salt Pans', 'Naupada Swamp', 'Rann of Kutch'], 3, 'The Rann of Kutch is the marshland formed through repeated falls in sea level.', ['Bhitarkanika is a mangrove wetland on the Odisha coast, not the example of this process.', 'Marakkanam is known for salt pans, and is not the extensive marshland in question.', 'Naupada is a coastal swamp of limited extent, and is not the best example.', ''], 'Rann of Kachchh', 'Rann: marshland from repeated falls in sea level.', 'Asked in Prelims 2023, Q5.', 'Notes: Peninsular Plateau, Desert, Coasts and Islands; UPSC CSE Prelims 2023 GS I'),
  y(2026, 34, 17, 'hard', 'multi-statement', 'Which of the following geographical features or phenomena is/are associated with the Peninsular Block of India?', ['1. Submergence of parts of the western coast due to tectonic activity', '2. Presence of residual mountain ranges such as the Veliconda hills and Mahendragiri hills', '3. Deep, V-shaped river valleys formed by fast-flowing rivers'], 'Select the answer using the code given below:', ['1 only', '1 and 2', '2 and 3', '3 only'], 1, 'Statements 1 and 2 fit the Peninsular block. Deep V-shaped valleys are a Himalayan trait, as peninsular valleys are broad, shallow and mature.', ['Statement 2 also fits: Veliconda and Mahendragiri are residual ranges.', '', 'Statement 3 fails: deep V-shaped valleys are Himalayan.', 'Statement 3 fails: deep V-shaped valleys are Himalayan.'], 'Peninsular block', 'Peninsula: residual hills and broad, mature valleys.', 'Asked in Prelims 2026, Q34.', 'Notes: Peninsular Plateau, Desert, Coasts and Islands; UPSC CSE Prelims 2026 GS I'),
  y(2021, 55, 25, 'hard', 'multi-statement', 'Consider the following rivers:', ['1. Brahmani', '2. Nagavali', '3. Subarnarekha', '4. Vamsadhara'], 'Which of the above rise from the Eastern Ghats?', ['1 and 2', '2 and 4', '3 and 4', '1 and 3'], 1, 'The Nagavali and Vamsadhara rise in the Eastern Ghats. The Subarnarekha rises in the Chota Nagpur region, and so does the Brahmani.', ['The Brahmani does not rise in the Eastern Ghats, and belongs to the Chota Nagpur side.', '', 'The Subarnarekha rises in the Chota Nagpur region and not the Eastern Ghats.', 'Neither the Brahmani nor the Subarnarekha rises in the Eastern Ghats.'], 'Eastern Ghats rivers', 'Nagavali and Vamsadhara rise in the Eastern Ghats.', 'Asked in Prelims 2021, Q55.', 'Notes: Drainage; UPSC CSE Prelims 2021 GS I'),
  q(16, 'hard', 'current-static', 'With reference to the coastline figures in the Ports Ministry circular of 29 April 2025, consider the following statements:', ['1. India\'s coastline was given as 11,098.81 km.', '2. The figure rose because the land area of India grew.', '3. Among states, Odisha now has the longest coastline.'], 'How many of the above statements are correct?', COUNT, 0, 'Only statement 1 is correct. The land did not grow, as finer maps count more bends, and Gujarat stays the longest among states.', ['', 'Statements 2 and 3 both fail, so two cannot be correct.', 'Statement 2 ignores the coastline paradox, and statement 3 names the wrong state.', 'Statement 1 is correct: this is the revised figure in the circular.'], 'Coastline revision', 'Revised to 11,098.81 km through finer measurement.', 'A recent revision of a static number is highly examinable.', 'Notes: The big picture; Manorama Yearbook, December 2025'),
  q(17, 'hard', 'map', 'Consider the following statements about the channels around Lakshadweep:', ['1. The Eleven Degree Channel separates the Amindivi from the Cannanore islands.', '2. The Eight Degree Channel separates Minicoy from the Maldives.', '3. The Ten Degree Channel lies just north of Minicoy.'], 'How many of the above statements are correct?', COUNT, 1, 'Statements 1 and 2 are correct. The channel north of Minicoy is the Nine Degree Channel. The Ten Degree Channel is between Andaman and Nicobar.', ['Statements 1 and 2 both hold, so one is too few.', '', 'Statement 3 fails: the Nine Degree Channel lies north of Minicoy.', 'Statements 1 and 2 are correct: both are standard island channels.'], 'Lakshadweep channels', '11: Amindivi and Cannanore. 9: north of Minicoy. 8: Minicoy and Maldives.', 'Near-identical channel names make close options.', 'Notes: Peninsular Plateau, Desert, Coasts and Islands'),
  q(18, 'hard', 'multi-statement', 'Consider the following statements about the Ghats:', ['1. The Western Ghats are continuous, while the Eastern Ghats are broken by rivers.', '2. The Godavari, Krishna and Kaveri rise in the Western Ghats and cut through the Eastern Ghats.', '3. Mahendragiri in the Eastern Ghats is higher than Doda Betta in the Western Ghats.'], 'Which of the statements given above is/are correct?', ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 0, 'Statements 1 and 2 are correct. Mahendragiri, about 1,500 m, is far lower than Doda Betta at 2,637 m.', ['', 'Statement 3 fails: the Eastern Ghats are lower, as Mahendragiri shows.', 'Statement 3 fails: the Eastern Ghats are lower, as Mahendragiri shows.', 'Statement 3 fails, so all three cannot be correct.'], 'Western and Eastern Ghats', 'Western Ghats: continuous and higher. Eastern Ghats: broken and lower.', 'The contrast is a common basis for statement questions.', 'Notes: Peninsular Plateau, Desert, Coasts and Islands'),
  q(19, 'hard', 'match', 'Consider the following pairs of range and Himalayan division:', ['1. Pir Panjal : Lesser Himalaya', '2. Zaskar : Shiwalik', '3. Karakoram : Trans-Himalaya', '4. Dhauladhar : Greater Himalaya'], 'How many of the above pairs are correctly matched?', COUNT4, 1, 'Pairs 1 and 3 are correct. Zaskar is Trans-Himalayan, and Dhauladhar is in the Lesser Himalaya.', ['Pairs 1 and 3 both hold, so one is too few.', '', 'Pairs 2 and 4 both fail, so three is too many.', 'Pairs 2 and 4 fail: Zaskar is Trans-Himalayan, and Dhauladhar is Lesser Himalayan.'], 'Himalayan ranges', 'Pir Panjal, Dhauladhar and Mahabharat are Lesser Himalaya.', 'Ranges are placed in the wrong division to test recall.', 'Notes: Himalaya'),
  q(20, 'hard', 'assertion-reason', 'Statement I: The Meghalaya plateau is part of the Purvanchal hills of the Himalaya.\nStatement II: The Meghalaya plateau is a detached part of the Peninsular block.', null, 'Which one of the following is correct?', SI, 3, 'The Meghalaya plateau is a detached part of the Peninsular block, so I is incorrect and II is correct. Purvanchal means the Patkai, Naga, Manipur and Mizo hills.', ['I is false: the plateau is not part of Purvanchal.', 'I is false: the plateau is not part of Purvanchal.', 'I is the false statement here, and II is correct.', ''], 'Meghalaya plateau', 'Meghalaya is Peninsular. Purvanchal is Himalayan.', 'Its location in the north-east makes it a natural trap.', 'Notes: Himalaya'),
]

export const mains: MainsQuestion[] = [
  {
    id: 'm-0118-1', day: DAY, marks: 10, words: 150, directive: 'Examine',
    question: 'Examine why rivers flowing from the Western Ghats into the Arabian Sea do not form deltas, unlike the rivers of the east coast.',
    mustCover: ['Short, steep courses of Western Ghats rivers', 'Low sediment load', 'Steep shelf and active tides', 'Narmada and Tapi in rift valleys forming estuaries', 'East coast contrast: long courses, gentle slopes, big deltas'],
    model: `Introduction

India's two coasts differ sharply at their river mouths. Big deltas mark the east coast, while the west coast has short rivers and estuaries. The reasons lie in slope, sediment and structure.

Reasons

Short, steep courses: Western Ghats rivers descend quickly to a narrow coast and carry little sediment.

Sea conditions: they meet a steep shelf and active tides, which carry away what they bring.

Rift valleys: the Narmada and Tapi run through rift valleys and form estuaries.

Narrow, submergent coast: the west coast has limited room for deposition.

East coast contrast

The Godavari, Krishna, Kaveri and Mahanadi are long rivers that flow east across the plateau. They collect sediment and cross a broad, emergent coast, which suits delta building.

Conclusion

River mouths therefore record the plateau's eastward slope and the structure of the coast. This also shapes farming: the eastern deltas support rich rice cultivation, whereas the west relies more on ports and backwaters.`,
  },
  {
    id: 'm-0118-2', day: DAY, marks: 10, words: 150, directive: 'Discuss',
    question: 'Discuss how the Himalaya and the Peninsular plateau shape the contrasting drainage systems of India.',
    mustCover: ['Geological contrast between the young Himalaya and the old block', 'Perennial and seasonal flow', 'Antecedent gorges and graded valleys', 'Shifting and fixed courses', 'Mouths and implications for water and floods'],
    model: `Introduction

India's rivers reflect its geology. The young Himalaya and the old, stable Peninsular block produce very different drainage systems.

Himalayan rivers

Flow: perennial, fed by snow and rain.

Valleys: deep gorges and antecedent courses, as with the Indus near Nanga Parbat.

Course: they meander and shift over the plains and cause floods.

Stage: young, ending in big deltas.

Peninsular rivers

Flow: mostly seasonal and rain-fed. The Kaveri is steadier because it gets both monsoons.

Valleys: broad, shallow and graded.

Course: fixed in hard rock.

Stage: mature. East-flowing rivers form deltas, while the Narmada and Tapi form estuaries.

Implications

Himalayan rivers offer year-round water but bring flood risk. Peninsular rivers suffer from seasonal shortage, which fuels disputes and the demand for storage.

Conclusion

Water planning must fit each system. Flood management suits the north, while storage and careful sharing suit the south.`,
  },
  {
    id: 'm-0118-3', day: DAY, marks: 15, words: 250, directive: 'Critically analyse',
    question: 'Critically analyse the proposal for interlinking of rivers in India as a response to regional water imbalance.',
    mustCover: ['The regional and seasonal imbalance of water', 'Case for: transfer, irrigation and flood and drought relief', 'Ken-Betwa as an example', 'Case against: ecological cost, displacement, doubts about surplus', 'Hydro-geographic differences between river systems', 'Balanced conclusion with alternatives'],
    model: `Introduction

India's water is unevenly spread. Himalayan rivers are perennial and flood-prone, Peninsular rivers are seasonal, and rain is lowest and most variable in the rain shadow and the far west. Interlinking aims to move water from surplus to deficit basins.

The case for

Water transfer: it could carry water to dry regions and support irrigation.

Flood and drought: it could in principle reduce both by moving excess water.

Example: Ken-Betwa is the leading case, meant to bring water to a dry part of central India.

The case against

Ecological cost: canals and dams alter river flows, sediment and habitats, and can submerge forest.

Displacement: reservoirs can uproot communities.

Doubtful surplus: a basin's surplus is itself disputed, since local needs and a changing climate may shrink it.

Geography: Himalayan and Peninsular rivers differ in timing and terrain, so a transfer may not bring water where and when it is needed.

Federal issues: water sharing between states is already contested.

Critical view

The idea treats water as an engineering problem. Yet demand and local conservation are equally important, and rivers also serve ecological functions. Each link needs its own assessment, not a single national verdict.

Way forward

Assess each project on its own evidence, including surplus and ecological flows. Prefer cheaper options first: watershed work, efficient irrigation under schemes such as PMKSY "Per Drop More Crop", and better crop choice.

Conclusion

Interlinking may suit some basins, but it should support, and not replace, demand management and local storage.`,
  },
]
