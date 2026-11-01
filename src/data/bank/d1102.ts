import type { Difficulty, Format, Question } from '../../lib/types'

const DAY = '2026-11-02'
const STONE = 'R.S. Sharma, Ancient India, Ch 4 The Stone Age'
const CHALCO = 'R.S. Sharma, Ancient India, Ch 5 The Stone-Copper Phase'
const COUNT = ['Only one', 'Only two', 'All three', 'None'] as [string, string, string, string]

const q = (
  n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null,
  options: [string, string, string, string], answer: 0 | 1 | 2 | 3, explanation: string,
  whyWrong: [string, string, string, string], source: string, concept: string, takeaway: string, whyAsked: string,
): Question => ({
  id: `p-1102-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}),
  options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  q(1, 'easy', 'factual', 'The Bhimbetka rock shelters, known for prehistoric paintings, are located in which present-day state?', null, null,
    ['Chhattisgarh', 'Madhya Pradesh', 'Odisha', 'Maharashtra'], 1,
    'Bhimbetka lies near Bhopal in the Vindhyan foothills of Madhya Pradesh and has been a UNESCO World Heritage Site since 2003.',
    ['Chhattisgarh has rock art, such as at Ramgarh, but not Bhimbetka.', '', 'Odisha has rock art at Gudahandi, but Bhimbetka is not there.', 'Maharashtra is known for Ajanta and Ellora, which are historic, not this prehistoric site.'],
    STONE, 'Prehistoric rock art sites', 'Bhimbetka: Madhya Pradesh, UNESCO 2003.', 'UPSC links prehistoric sites to their location and heritage status.'),

  q(2, 'easy', 'factual', 'Which of the following features is most characteristic of Mesolithic stone tool technology?', null, null,
    ['Large hand-axes', 'Microliths', 'Polished stone celts', 'Copper flat axes'], 1,
    'Microliths, which are tiny flaked tools often set into wood or bone handles, are the hallmark of the Mesolithic.',
    ['Large hand-axes belong to the Lower Palaeolithic.', '', 'Polished stone tools mark the Neolithic.', 'Copper tools belong to the Chalcolithic.'],
    STONE, 'Stone Age tool sequence', 'Hand-axe, then flake, then blade, then microlith, then polished tool.', 'Tool sequences are basic to framing questions on chronology.'),

  q(3, 'easy', 'factual', 'In the study of prehistory, the term "Chalcolithic" refers to a culture that used', null, null,
    ['stone tools only', 'iron and stone', 'copper and stone', 'bronze and iron'], 2,
    'Chalco means copper and lithic means stone. Chalcolithic cultures used copper with stone tools.',
    ['Stone alone describes the Stone Age cultures that came before it.', 'Iron came into use much later, around the end of the second millennium BCE in India.', '', 'This combination does not define any named phase in the Indian sequence.'],
    CHALCO, 'Meaning of Chalcolithic', 'Chalcolithic = copper + stone.', 'Definitions are often built into the options of chronological questions.'),

  q(4, 'easy', 'factual', 'Which of the following Neolithic sites is known for pit dwellings?', null, null,
    ['Burzahom', 'Inamgaon', 'Ahar', 'Kayatha'], 0,
    'Burzahom in Kashmir is known for its pit dwellings and for burials in which dogs accompanied their masters.',
    ['', 'Inamgaon is a Chalcolithic Jorwe site in Maharashtra.', 'Ahar is a Chalcolithic site in the Banas valley of Rajasthan.', 'Kayatha is a Chalcolithic site in Madhya Pradesh.'],
    STONE, 'Neolithic regional sites', 'Burzahom: Kashmir, pit dwellings, dog burials.', 'Site-feature pairings are a recurring UPSC format.'),

  q(5, 'easy', 'factual', 'The earliest clear evidence for wheat and barley farming in the Indian subcontinent comes from which site?', null, null,
    ['Mehrgarh', 'Bhimbetka', 'Chirand', 'Daojali Hading'], 0,
    'Mehrgarh in Balochistan shows farming of wheat and barley from around the seventh millennium BCE.',
    ['', 'Bhimbetka is mainly a rock shelter site, not an early farming site.', 'Chirand in Bihar is a later Neolithic site known for bone tools.', 'Daojali Hading is a Neolithic site in Assam, known for different tools and pottery.'],
    STONE, 'Origins of farming', 'Mehrgarh: Balochistan, early wheat and barley.', 'The pre-Harappan background of Harappan farming is a favourite conceptual link.'),

  q(6, 'easy', 'statement', 'Consider the following statement about prehistoric Indians:', ['Palaeolithic people in India lived mainly by food production.'], 'Which assessment of this statement is correct?',
    ['It is correct, because farming began in the Lower Palaeolithic.', 'It is incorrect, because they lived mainly by hunting and gathering.', 'It is correct, because they kept cattle as their main food source.', 'It is incorrect, because they lived mainly by trade.'], 1,
    'Palaeolithic groups were foragers who hunted animals and gathered plants. Food production began much later, in the Neolithic.',
    ['Farming was not present in the Lower Palaeolithic.', '', 'Animal domestication on any scale came much later.', 'Trade was not the basis of Palaeolithic subsistence.'],
    STONE, 'Subsistence in the Stone Age', 'Palaeolithic = food gathering; Neolithic = food production.', 'UPSC tests whether you know the basic economic shift across phases.'),

  q(7, 'easy', 'factual', 'Which period is associated with the change from the Pleistocene to the Holocene epoch and the start of warmer conditions in India?', null, null,
    ['Beginning of the Mesolithic', 'Beginning of the Iron Age', 'End of the Chalcolithic', 'End of the Neolithic'], 0,
    'The Pleistocene ended about 10,000 BCE. As the climate warmed, Mesolithic cultures developed, using small tools and new food sources.',
    ['', 'The Iron Age came many thousands of years later.', 'The Chalcolithic ended long after this change, in the second and first millennia BCE.', 'The Neolithic came after the start of the Holocene.'],
    STONE, 'Climate and culture', 'Holocene warming coincides with the Mesolithic.', 'Links between geography and history are common in recent papers.'),

  q(8, 'moderate', 'multi-statement', 'Consider the following pairs:', ['1. Attirampakkam : Tamil Nadu', '2. Hunsgi : Karnataka', '3. Bagor : Rajasthan'], 'How many of the above pairs are correctly matched?',
    COUNT, 2,
    'All three are correct. Attirampakkam in Tamil Nadu has Acheulian tools, Hunsgi in Karnataka is a Lower Palaeolithic site, and Bagor in Rajasthan is a major Mesolithic site.',
    ['Each of the three pairs is correct, so one is too low.', 'Each of the three pairs is correct, so two is too low.', '', 'All the pairs are correct, so none cannot be right.'],
    STONE, 'Palaeolithic and Mesolithic sites', 'Bagor is the largest Mesolithic site in the Indian subcontinent as commonly cited.', 'UPSC prefers lesser-known sites in pair questions.'),

  q(9, 'moderate', 'multi-statement', 'With reference to Mesolithic India, consider the following statements:', ['1. Evidence of the domestication of animals has been reported from Adamgarh and Bagor.', '2. Mesolithic people did not bury their dead.', '3. Rock paintings at some shelters depict group hunting.'], 'Which of the statements given above is/are correct?',
    ['1 and 2 only', '1 and 3 only', '2 and 3 only', '1, 2 and 3'], 1,
    'Adamgarh and Bagor are often cited for early domestication. Rock art shows group hunting. Statement 2 is wrong because burials are known from sites such as Sarai Nahar Rai and Mahadaha.',
    ['Statement 2 is false, because burials are attested.', '', 'Statement 2 is false, and statement 1 is correct.', 'Statement 2 is false, so this cannot be right.'],
    STONE, 'Mesolithic society', 'Mesolithic: microliths, early domestication, burials and art.', 'A false absolute statement, such as "did not", is a typical UPSC trap.'),

  q(10, 'moderate', 'chronology', 'Arrange the following tool types in the order in which they became dominant in India, from earliest to latest:', ['1. Blades and burins', '2. Hand-axes and cleavers', '3. Flake tools', '4. Microliths'], null,
    ['2-3-1-4', '3-2-1-4', '2-1-3-4', '4-2-3-1'], 0,
    'Hand-axes and cleavers mark the Lower Palaeolithic, flakes the Middle, blades and burins the Upper, and microliths the Mesolithic.',
    ['', 'Hand-axes came before flake tools became dominant.', 'Flake tools became dominant before blades and burins.', 'Microliths were the latest of these four, not the earliest.'],
    STONE, 'Palaeolithic phases', 'Lower: hand-axe. Middle: flake. Upper: blade. Mesolithic: microlith.', 'UPSC uses chronology to test the sequence, not just isolated facts.'),

  q(11, 'moderate', 'match', 'Match the Neolithic site with its region:', ['A. Daojali Hading — 1. Assam', 'B. Chirand — 2. Bihar', 'C. Maski — 3. Karnataka', 'D. Gufkral — 4. Kashmir'], 'Which of the following correctly matches A, B, C and D?',
    ['A-1, B-2, C-3, D-4', 'A-2, B-1, C-3, D-4', 'A-1, B-2, C-4, D-3', 'A-3, B-2, C-1, D-4'], 0,
    'Daojali Hading is in the North Cachar Hills of Assam, Chirand in Bihar, Maski in Karnataka, and Gufkral in Kashmir.',
    ['', 'Daojali Hading is in Assam and Chirand in Bihar, so these are swapped.', 'Maski is in Karnataka and Gufkral in Kashmir, so these are swapped.', 'Daojali Hading is in Assam and Maski in Karnataka, so these are swapped.'],
    STONE, 'Neolithic geography', 'Group Neolithic sites by region, and mark them on a map.', 'Regional diversity of the Neolithic is a good test of map knowledge.'),

  q(12, 'moderate', 'multi-statement', 'Consider the following statements about the South Indian Neolithic:', ['1. Ash mounds at sites such as Utnur and Kupgal are linked to pastoral activity.', '2. Millets were among the crops cultivated.', '3. Its people used only wheel-made pottery from its earliest stage.'], 'How many of the statements given above are correct?',
    COUNT, 1,
    'Statements 1 and 2 are correct. Ash mounds are usually linked to burnt cattle dung, and millets were grown. Statement 3 is wrong because handmade pottery was common in the early stage.',
    ['Both statements 1 and 2 are correct.', '', 'Statement 3 is wrong, so not all three are correct.', 'Statements 1 and 2 are correct, so none is wrong.'],
    STONE, 'South Indian Neolithic', 'Southern Neolithic: cattle, ash mounds, millets.', 'Ash mounds connect archaeology with an economic inference.'),

  q(13, 'moderate', 'statement', 'Which of the following best explains why Neolithic settlers avoided the heavy clay soils of parts of the middle Gangetic plain in early times?', null, null,
    ['Their stone tools could not easily clear dense forest and work heavy soils.', 'These soils contained no minerals useful for farming.', 'Rainfall there was too low to support crops.', 'State laws prevented settlement in these lands.'], 0,
    'The dense vegetation and heavy soil were hard to clear with stone and copper tools. Large-scale settlement became easier later with iron tools.',
    ['', 'These alluvial soils are in fact fertile.', 'This region receives good rainfall, which helped forest growth.', 'There were no states in this period to make such laws.'],
    CHALCO, 'Technology and settlement', 'Tools shaped where people could settle.', 'UPSC increasingly asks why something happened, not just what happened.'),

  q(14, 'moderate', 'match', 'Match the Chalcolithic culture with its core region:', ['A. Ahar — 1. Banas valley, Rajasthan', 'B. Malwa — 2. Madhya Pradesh', 'C. Jorwe — 3. Maharashtra'], 'Which of the following options is correct?',
    ['A-1, B-2, C-3', 'A-2, B-1, C-3', 'A-3, B-2, C-1', 'A-1, B-3, C-2'], 0,
    'Ahar is in the Banas valley, Malwa culture is named after the Malwa plateau in Madhya Pradesh, and Jorwe is in Maharashtra.',
    ['', 'Ahar is in Rajasthan and the Malwa culture in Madhya Pradesh, so this is swapped.', 'Ahar is in Rajasthan and Jorwe in Maharashtra, so this is swapped.', 'Malwa is in Madhya Pradesh and Jorwe in Maharashtra, so this is swapped.'],
    CHALCO, 'Chalcolithic cultures', 'Ahar: Rajasthan. Malwa: MP. Jorwe: Maharashtra.', 'Cultures named after sites are easily confused, which suits a matching format.'),

  q(15, 'moderate', 'multi-statement', 'Consider the following statements about the site of Inamgaon:', ['1. It is a Chalcolithic settlement.', '2. Evidence includes burials in urns placed beneath house floors.', '3. It lies in the Ganga valley.'], 'Which of the statements given above are correct?',
    ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 0,
    'Inamgaon is a Chalcolithic site on the Ghod river in Maharashtra, and it has urn burials beneath floors. It is not in the Ganga valley.',
    ['', 'Statement 3 is wrong, because Inamgaon is in Maharashtra.', 'Statement 3 is wrong, and statement 2 is correct.', 'Statement 3 is wrong, so all three cannot be correct.'],
    CHALCO, 'Chalcolithic burial and settlement', 'Inamgaon: Ghod river, Maharashtra; urn burials inside the settlement.', 'Burial practices reveal beliefs, which makes them useful test material.'),

  q(16, 'moderate', 'assertion-reason', 'Statement I: Chalcolithic cultures of the Deccan generally had a limited use of metal tools.\nStatement II: Copper was relatively scarce, and these communities did not learn to mix copper with tin on a large scale.', null, 'Which one of the following is correct?',
    ['Both statements are correct, and Statement II explains Statement I.', 'Both statements are correct, but Statement II does not explain Statement I.', 'Statement I is correct, but Statement II is incorrect.', 'Statement I is incorrect, but Statement II is correct.'], 0,
    'Stone tools remained in wide use because copper was limited, and copper alone produces softer tools. Bronze-making was not widespread among them.',
    ['', 'Statement II does explain why metal use stayed limited.', 'Statement II is correct as a general description.', 'Statement I is correct, because metal use was limited.'],
    CHALCO, 'Limits of Chalcolithic technology', 'Stone tools continued because copper was scarce and soft.', 'UPSC now frequently uses Statement I and II pairs.'),

  q(17, 'moderate', 'statement', 'Which of the following statements about the Ochre Coloured Pottery (OCP) and copper hoards is correct?', null, null,
    ['OCP sites are linked mainly with the upper Ganga-Yamuna doab, and copper hoards are often found in that region.', 'OCP is the same as Northern Black Polished Ware.', 'OCP belongs to the Early Palaeolithic.', 'Copper hoards are found only in Tamil Nadu.'], 0,
    'OCP settlements of the second millennium BCE are linked to the doab, where many copper hoards have been found.',
    ['', 'NBPW is much later, belonging to the sixth century BCE onwards.', 'Pottery and copper rule out the Palaeolithic.', 'Copper hoards are concentrated in northern and eastern India.'],
    CHALCO, 'Protohistoric cultures in the doab', 'OCP and copper hoards belong together in the doab.', 'Pottery sequences anchor many Prelims chronology questions.'),

  q(18, 'moderate', 'map', 'If you travelled from north to south in India, in which order would you most likely pass these sites?', ['1. Burzahom', '2. Bhimbetka', '3. Brahmagiri'], null,
    ['1-2-3', '2-1-3', '3-2-1', '1-3-2'], 0,
    'Burzahom is in Kashmir, Bhimbetka in Madhya Pradesh, and Brahmagiri in Karnataka.',
    ['', 'Bhimbetka lies south of Burzahom, not north.', 'This order runs from south to north.', 'Brahmagiri is in Karnataka, south of Bhimbetka.'],
    STONE, 'Mapping prehistoric sites', 'Mark every site on a map as you read.', 'Map-based logic is a regular UPSC format.'),

  q(19, 'moderate', 'application', 'An archaeologist finds a site with polished stone axes, handmade pottery, charred grains and bones of domesticated animals, but no metal objects. The site is best assigned to which phase?', null, null,
    ['Lower Palaeolithic', 'Mesolithic', 'Neolithic', 'Chalcolithic'], 2,
    'Polished stone tools, pottery and domestication with no metal point to the Neolithic.',
    ['The Lower Palaeolithic has neither polish, pottery nor farming.', 'The Mesolithic is marked by microliths, and evidence of farming is not its hallmark.', '', 'The Chalcolithic would have copper objects.'],
    STONE, 'Identifying cultural phases', 'Ask what tools, food and metal are present.', 'UPSC is moving towards application rather than recall.'),

  q(20, 'moderate', 'statement', 'Rice cultivation at an early date in the Vindhyan zone is associated with which of the following?', null, null,
    ['Koldihwa', 'Hallur', 'Burzahom', 'Mehrgarh'], 0,
    'Koldihwa in the Belan valley is linked with early rice, although the precise dates are debated.',
    ['', 'Hallur in Karnataka is known for its later Neolithic-Iron Age sequence.', 'Burzahom is a Kashmir site, not linked to rice in the Vindhyas.', 'Mehrgarh is known for early wheat and barley.'],
    STONE, 'Early rice in India', 'Rice: Koldihwa and Lahuradewa. Wheat and barley: Mehrgarh.', 'Rice origins connect prehistory with agriculture.'),

  q(21, 'moderate', 'current-static', 'A 2018 study of Attirampakkam drew wide attention. Its main significance was that it', null, null,
    ['pushed back evidence of Middle Palaeolithic technology in India to about 385,000 years ago', 'proved that farming began in South India', 'discovered a Harappan city in Tamil Nadu', 'deciphered the Indus script'], 0,
    'A 2018 Nature paper reported Middle Palaeolithic technology from about 385,000 years ago, which challenged earlier assumptions about its timing and origin.',
    ['', 'The study was about stone tool technology, not farming.', 'Attirampakkam is a Palaeolithic site, not a Harappan one.', 'The script remains undeciphered.'],
    STONE, 'New findings in Palaeolithic India', 'Attirampakkam: 385,000 years ago, Middle Palaeolithic technology.', 'UPSC uses new research to test static knowledge about older periods.'),

  q(22, 'hard', 'multi-statement', 'Consider the following statements regarding the Palaeolithic in India:', ['1. Palaeolithic sites are found in many parts of the subcontinent, except the alluvial plains of the Indus and Ganga, where evidence is scarce.', '2. The Soan valley is linked with chopper-chopping tools.', '3. Quartzite was a commonly used raw material.'], 'How many of the above statements are correct?',
    COUNT, 2,
    'All are correct. Sites are rare in alluvial plains because stone was scarce and sediments cover old land surfaces. The Soan tradition is known for choppers, and quartzite was widely used.',
    ['All three are correct, so one is too low.', 'All three are correct, so two is too low.', '', 'All three are correct.'],
    STONE, 'Distribution of Palaeolithic sites', 'Raw material and sediment influence where sites are found.', 'It tests the reasons behind site distribution.'),

  q(23, 'hard', 'statement', 'Which of the following is the most accurate reason for caution when describing the Stone Age as a single sequence all over India?', null, null,
    ['Phases overlapped, and hunting-gathering communities continued alongside farmers in many regions.', 'Stone tools were never used in South India.', 'All regions began farming at exactly the same date.', 'Copper was used before stone in most regions.'], 0,
    'The sequence is a useful framework, but cultures overlapped, and foragers lived alongside farmers for a long time.',
    ['', 'Stone tools are found across South India.', 'Farming began at widely different dates.', 'Stone tools came long before copper.'],
    STONE, 'Limits of periodisation', 'Periods are tools for analysis, not sharp breaks.', 'UPSC rewards a nuanced view over a rigid textbook formula.'),

  q(24, 'hard', 'assertion-reason', 'Statement I: Bronze was not widely used in Chalcolithic Deccan cultures.\nStatement II: Daimabad has yielded a hoard of bronze objects, including a chariot.', null, 'Which one of the following is correct?',
    ['Both statements are correct, and Statement II explains Statement I.', 'Both statements are correct, but Statement II does not explain Statement I.', 'Statement I is correct, but Statement II is incorrect.', 'Statement I is incorrect, but Statement II is correct.'], 1,
    'Both are correct, but one exceptional hoard does not explain the general absence of bronze. Bronze use remained limited in the Deccan.',
    ['Daimabad is an exception, and does not explain the general pattern.', '', 'The Daimabad bronze hoard is real and well known.', 'Bronze was in fact not widely used.'],
    CHALCO, 'Daimabad bronzes', 'Daimabad: famous bronze chariot hoard in Maharashtra.', 'The trap is to link two true statements that have no causal connection.'),

  q(25, 'hard', 'multi-statement', 'With reference to Chalcolithic cultures, consider the following statements:', ['1. Most of them had a developed script.', '2. Black-on-red painted pottery was common.', '3. Evidence from some sites suggests differences of social rank.'], 'Which of the statements given above is/are correct?',
    ['1 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'], 1,
    'Painted pottery was common, and burials and houses suggest differences of rank. These cultures did not have a developed script.',
    ['Statement 1 is false, as there is no developed script.', '', 'Statement 1 is false, and statement 2 is true.', 'Statement 1 is false, so this cannot be right.'],
    CHALCO, 'Society in the Chalcolithic', 'Black-on-red ware, some social ranking, no script.', 'It shows the difference between Harappan and non-Harappan cultures.'),

  q(26, 'hard', 'chronology', 'Arrange these cultures in broadly chronological order of their beginning:', ['1. Jorwe', '2. Kayatha', '3. Malwa'], null,
    ['2-3-1', '3-2-1', '1-2-3', '2-1-3'], 0,
    'Kayatha (about 2000-1800 BCE) comes first, Malwa next (about 1700-1400 BCE), then Jorwe (about 1400-700 BCE). The dates are approximate.',
    ['', 'Kayatha began before Malwa.', 'Jorwe is the latest of the three.', 'Malwa came before Jorwe.'],
    CHALCO, 'Sequence of Chalcolithic cultures', 'Kayatha, then Malwa, then Jorwe.', 'Chronology questions test the frame even with approximate dates.'),

  q(27, 'hard', 'statement', 'Which of the following statements about the end of many Chalcolithic settlements in western India is the most defensible?', null, null,
    ['Many declined around the end of the second millennium BCE, and a drier climate is one suggested cause.', 'All were destroyed by a single invasion.', 'They ended because of the Mauryan conquest.', 'They were abandoned because of the spread of Buddhism.'], 0,
    'Many sites declined around 1200-700 BCE, and declining rainfall is a commonly suggested reason, although no single explanation is agreed.',
    ['', 'There is no evidence for a single invasion.', 'The Mauryas came many centuries later.', 'Buddhism arose after this decline.'],
    CHALCO, 'Decline of Chalcolithic cultures', 'Prefer cautious causes over single-event claims.', 'Absolute words like "all" and "single" are classic traps for elimination.'),

  q(28, 'easy', 'factual', 'Rock art found at Edakkal in Wayanad is significant because it is located in', null, null,
    ['natural caves in Kerala', 'man-made Buddhist viharas in Maharashtra', 'the walls of a Harappan city', 'the Barabar hills in Bihar'], 0,
    'Edakkal consists of natural rock formations in the Wayanad district of Kerala, and it has engravings from prehistoric times onward.',
    ['', 'These viharas are historic and are not Edakkal.', 'Edakkal is not a Harappan site.', 'The Barabar caves are Mauryan rock-cut caves.'],
    STONE, 'Rock art across India', 'Edakkal: Wayanad, Kerala.', 'UPSC includes less-known heritage sites in the South.'),
]
