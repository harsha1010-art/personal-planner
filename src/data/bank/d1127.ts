import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-27'
const S = 'Notes: India and major powers'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1127-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})
// Wording is copied from the official paper; pdfPage is the PDF page.
const y = (year: number, no: number, pdfPage: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `pyq-${year}-${no}`, day: DAY, kind: 'pyq', pyq: { year, pdfPage, keyStatus: 'reasoned' }, difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', "Which country is usually cited as India's first strategic partner, with the partnership dating from 1998?", null, null, ['France', 'Russia', 'Germany', 'Japan'], 0,
    "France (1998) is usually cited as India's first strategic partner. The Russian and German partnerships both date from 2000.",
    ['', 'The Declaration on Strategic Partnership with Russia came in 2000, after France.', 'The strategic partnership with Germany dates from 2000, after France.', "Japan's Special Strategic and Global Partnership dates from 2014."],
    'First strategic partner', 'First strategic partner: France, 1998.', 'A standard recall point that opens most questions on partnership labels.', 'Notes: Partnership labels table'),
  q(2, 'easy', 'factual', "In which year was the Indo-Soviet Treaty of Peace, Friendship and Cooperation signed?", null, null, ['1971', '1962', '1991', '2000'], 0,
    "The treaty was signed in 1971. The Declaration on Strategic Partnership with Russia followed in 2000.",
    ['', 'The treaty came nine years later than 1962, in 1971.', 'The treaty dates from 1971, two decades before 1991.', 'The year 2000 is the Declaration on Strategic Partnership, not this treaty.'],
    'Indo-Soviet Treaty', 'Indo-Soviet Treaty 1971; Strategic Partnership 2000.', 'The base of the India-Russia relationship, and easily confused with the 2000 declaration.', 'Notes: Russia'),
  q(3, 'easy', 'factual', "The India-US agreement LEMOA primarily deals with which one of the following?", null, null, ['Reciprocal logistics, fuel and repair', 'Secure communications and interoperability', 'Geospatial intelligence sharing', 'Protection of shared military information'], 0,
    "LEMOA (2016) covers reciprocal logistics, fuel and repair. The other options describe COMCASA, BECA and GSOMIA.",
    ['', 'Secure communications and interoperability describe COMCASA (2018).', 'Geospatial intelligence sharing describes BECA (2020).', 'Protection of shared military information describes GSOMIA (2002).'],
    'Foundational agreements', 'GSOMIA 2002, LEMOA 2016, COMCASA 2018, BECA 2020.', 'The note calls this table a favourite for Prelims.', 'Notes: Foundational defence agreements'),
  q(4, 'easy', 'current-static', "Which trade agreement between India and the United Kingdom entered into force on 15 July 2026?", null, null, ['CETA', 'ECTA', 'CEPA', 'CECA'], 0,
    "The India-UK Comprehensive Economic and Trade Agreement, or CETA, was signed on 24 July 2025 and entered into force on 15 July 2026.",
    ['', 'ECTA is the India-Australia trade deal, in force since December 2022.', 'CEPA is the India-UAE agreement of 2022.', 'CECA refers to the India-Australia talks that continue.'],
    'India-UK trade deal', 'UK CETA signed in July 2025, in force in July 2026.', 'A very recent agreement with an exact date, which suits a direct question.', 'Notes: Europe; PIB'),
  q(5, 'easy', 'current-static', "The IMEC corridor was announced at which of the following?", null, null, ['The G20 summit of 2023', 'The BRICS summit at Kazan in 2024', 'The SCO summit at Tianjin in 2025', 'The India-Russia annual summit of December 2025'], 0,
    "The India-Middle East-Europe corridor, IMEC, was announced at the 2023 G20, during India's presidency.",
    ['', 'Kazan in 2024 is linked to the Modi-Xi meeting, not to IMEC.', 'Tianjin in 2025 is linked to the Modi-Xi meeting, not to IMEC.', 'The December 2025 summit produced a Russia programme to 2030, not IMEC.'],
    'IMEC', 'IMEC: announced at the 2023 G20.', 'Corridors are a regular topic for questions on India\'s Gulf links.', 'Notes: Indo-Pacific partners'),
  q(6, 'easy', 'factual', "CBAM, a source of friction in India-EU trade, is best described as which one of the following?", null, null, ['A carbon tax applied at the EU border to goods such as steel and aluminium', 'A US tariff penalty linked to purchases of Russian oil', 'An Indian scheme to subsidise labour-intensive exports', 'A social security arrangement for workers moving between India and the UK'], 0,
    "The note lists CBAM as a carbon tax on steel and aluminium, and as a point of friction in the India-EU trade relationship.",
    ['', 'The 25% penalty linked to Russian oil came from the US and is not CBAM.', 'CBAM is an EU measure, and it is not an Indian export scheme.', 'That describes the Double Contribution Convention with the UK.'],
    'CBAM', 'CBAM: the EU carbon tax that affects steel and aluminium.', 'A climate-trade issue that links GS II and GS III.', 'Notes: Europe'),
  y(2016, 72, 27, 'easy', 'factual', "'Belt and Road Initiative' is sometimes mentioned in the news in the context of the affairs of", null, null, ['African Union', 'Brazil', 'European Union', 'China'], 3,
    "The Belt and Road Initiative is China's project, and India refuses to endorse it. The CPEC, which runs through disputed territory, is the main reason.",
    ['The African Union did not launch it; the initiative is Chinese.', 'Brazil did not launch it; the initiative is Chinese.', 'The EU did not launch it; the initiative is Chinese.', ''],
    'Belt and Road Initiative', 'Belt and Road is Chinese, and India does not endorse it.', 'Asked in Prelims 2016 (GS Paper I, Q72).', 'Notes: China as a strategic rival'),
  y(2025, 62, 29, 'easy', 'factual', 'India is one of the founding members of the International North-South Transport Corridor (INSTC), a multimodal transportation corridor, which will connect', null, null, ['India to Central Asia to Europe via Iran', 'India to Central Asia via China', 'India to South-East Asia through Bangladesh and Myanmar', 'India to Europe through Azerbaijan'], 0,
    "The INSTC runs from India through Iran towards Russia and beyond, and the note gives the route as Mumbai-Iran-Russia. So the answer is the option that goes via Iran.",
    ['', 'The INSTC goes via Iran, not China.', 'South-East Asia links are the Kaladan and Trilateral Highway projects, not the INSTC.', 'The route that defines the corridor runs via Iran, so Azerbaijan alone does not describe it.'],
    'INSTC', 'INSTC: Mumbai, Iran, Russia.', 'Asked in Prelims 2025 (GS Paper I, Q62).', 'Notes: Russia'),

  // Moderate
  q(7, 'moderate', 'multi-statement', "Consider the following statements about India-US foundational defence agreements:", ['1. GSOMIA (2002) protects shared military information.', '2. COMCASA (2018) deals with secure communications and interoperability.', '3. BECA was signed in 2016 for geospatial intelligence sharing.'], 'How many of the above statements are correct?', COUNT, 1,
    "Statements 1 and 2 are correct. BECA does cover geospatial intelligence, but it dates from 2020. The 2016 agreement is LEMOA.",
    ['Two statements are correct, 1 and 2, so this undercounts.', '', 'Statement 3 fails because BECA was signed in 2020, not 2016.', 'Statements 1 and 2 are both correct as stated.'],
    'Foundational agreements', 'BECA is the last of the four, in 2020.', 'Years and purposes are easy to swap, so they suit elimination questions.', 'Notes: Foundational defence agreements'),
  q(8, 'moderate', 'chronology', "Consider the following milestones in India-US relations:", ['1. Major Defence Partner designation', '2. Hyde Act', '3. Framework for an interim trade agreement', '4. iCET on critical technology'], 'Which one of the following gives the correct chronological order?', ['2-1-4-3', '1-2-4-3', '2-4-1-3', '2-1-3-4'], 0,
    "The Hyde Act came in 2006, Major Defence Partner in 2016, iCET in 2023, and the interim trade framework in February 2026.",
    ['', 'Major Defence Partner (2016) came a decade after the Hyde Act (2006).', 'iCET (2023) came after Major Defence Partner (2016).', 'The trade framework (February 2026) came after iCET (2023).'],
    'India-US timeline', 'Hyde 2006, MDP 2016, iCET 2023, framework 2026.', 'The sequence shows how nuclear ties became defence and then technology ties.', 'Notes: United States'),
  q(9, 'moderate', 'multi-statement', "With reference to the term 'strategic partnership' in Indian foreign policy, consider the following statements:", ['1. It has a fixed legal meaning under international law.', '2. It is a political label for broad, long-term cooperation.'], 'Which of the statements given above is/are correct?', BOTH, 1,
    "Only statement 2 is correct. A strategic partnership has no fixed legal meaning, and it is a political label for broad, long-term cooperation.",
    ['Statement 1 fails because the term has no fixed legal meaning.', '', 'Statement 1 fails, so both cannot be correct.', 'Statement 2 is correct, as the note defines the term in those words.'],
    'Strategic partnership', 'Strategic partnership is a political label, not a legal status.', 'Tests the concept behind the labels, not just the list.', 'Notes: The big picture'),
  q(10, 'moderate', 'assertion-reason', "Statement I: India does not join military alliances.\nStatement II: India's stated approach is strategic autonomy, which has grown out of Cold War non-alignment.", null, 'Which one of the following is correct?', SI, 0,
    "Both are correct and II explains I. Staying outside alliances follows from the stated policy of strategic autonomy.",
    ['', 'II does explain I: strategic autonomy is the reason India stays outside alliances.', 'II is also correct: the note traces strategic autonomy to non-alignment.', 'I is also correct: the note opens with this very point.'],
    'Strategic autonomy', 'No alliances; strategic autonomy grown from non-alignment.', 'The core idea behind every Mains question on this topic.', 'Notes: The big picture'),
  q(11, 'moderate', 'assertion-reason', "Statement I: The February 2026 India-US joint statement set out a framework for an interim trade agreement.\nStatement II: The interim trade agreement had been signed and was in force by early October 2026.", null, 'Which one of the following is correct?', SI, 2,
    "I is correct, but II is not. The February 2026 document is a framework, and official reports of 1 October 2026 still describe talks aiming at an early interim agreement.",
    ['II is incorrect, so it cannot explain I: the agreement remained unsigned.', 'II is incorrect, because talks were still under way in October 2026.', '', 'I is correct: the framework was set out in the February 2026 joint statement.'],
    'Framework versus deal', 'Agreed framework is not a signed deal.', 'The note flags this exact confusion as a trap.', 'Notes: Agreed framework is not a signed deal'),
  q(12, 'moderate', 'assertion-reason', "Statement I: Japan is a partner in the Mumbai-Ahmedabad high-speed rail project.\nStatement II: India and Japan held their 16th annual summit in New Delhi in July 2026.", null, 'Which one of the following is correct?', SI, 1,
    "Both are correct, but II does not explain I. The rail partnership is driven by Japanese capital and technology, while the summit is a separate diplomatic event.",
    ['II does not explain I: a 2026 summit cannot be the reason for the rail partnership.', '', 'II is also correct, as the partnership table records.', 'I is also correct, as the Indo-Pacific table records.'],
    'India-Japan ties', 'Japan: capital, technology, annual summits.', 'Tests whether two true facts are in fact linked, as UPSC now often does.', 'Notes: Indo-Pacific partners'),
  q(13, 'moderate', 'assertion-reason', "Statement I: The India-UK CETA gives zero duty on all of India's exports to the UK, without any exception.\nStatement II: The Double Contribution Convention gives relief on social security payments.", null, 'Which one of the following is correct?', SI, 3,
    "I is wrong, because the note gives zero duty on about 99% of India's exports, not on all of them. II is right.",
    ['I is incorrect: the zero-duty coverage is about 99%, not all exports.', 'I is incorrect, so "both are correct" cannot hold.', 'This reverses the truth: I is the incorrect one, and II is correct.', ''],
    'India-UK CETA', 'CETA: zero duty on about 99% of India\'s exports.', 'Absolute words such as "all" are a common UPSC trap.', 'Notes: Europe'),
  q(14, 'moderate', 'multi-statement', "Consider the following statements about India-Russia relations:", ['1. The Kudankulam nuclear plant is a part of the energy relationship.', '2. The S-400 contract dates from 2018.', '3. The December 2025 summit set a trade target of $100 billion by 2030.'], 'How many of the above statements are correct?', COUNT, 2,
    "All three are correct. Kudankulam, the 2018 S-400 contract and the $100 billion target by 2030 are all listed in the note.",
    ['All three are supported, so this undercounts.', 'All three are supported, so this undercounts.', '', 'All three statements are in the note and none is false.'],
    'India-Russia ties', 'Energy, S-400 and $100 billion by 2030.', 'Defence and energy keep Russia central to questions on strategic autonomy.', 'Notes: Russia'),
  q(15, 'moderate', 'match', "Match List I with List II:", ['List I (Partner): A. Australia; B. UAE; C. United Kingdom; D. European Union', 'List II (Trade instrument): 1. CETA; 2. ECTA; 3. CEPA; 4. FTA talks concluded in January 2026'], 'Select the correct code:', ['A-2, B-3, C-1, D-4', 'A-3, B-2, C-1, D-4', 'A-2, B-1, C-3, D-4', 'A-2, B-3, C-4, D-1'], 0,
    "Australia has ECTA, the UAE has CEPA, the UK has CETA, and the EU concluded FTA talks on 27 January 2026.",
    ['', 'This swaps A and B: ECTA is with Australia and CEPA is with the UAE.', 'This swaps B and C: CEPA is with the UAE and CETA is with the UK.', 'This swaps C and D: CETA is with the UK and the January 2026 talks are with the EU.'],
    'Trade deals by partner', 'ECTA Australia; CEPA UAE; CETA UK.', 'Near-identical acronyms are the natural match question.', 'Notes: Partnership labels; Indo-Pacific partners'),
  q(16, 'moderate', 'application', "A country faces steep tariffs from a major partner over its energy purchases. Which one of the following courses is closest to how India responded to the 2025 US tariff shock?", null, null, ['Protect farmers and dairy, defend its energy choices, finish trade deals elsewhere and keep negotiating', 'Join a US-led military alliance in return for tariff relief', 'End all trade talks with the US and rely only on BRICS', 'Stop all engagement with China and Russia to satisfy the US'], 0,
    "India held firm on farmers, dairy and energy, diversified through the UK and EU deals, stabilised ties with China and Russia, and kept talking to the US.",
    ['', 'India does not join military alliances, so this cuts against strategic autonomy.', 'India continued negotiating, and an interim deal was still under discussion in October 2026.', 'India did the opposite, with a thaw with China and a summit with Russia.'],
    'Strategic autonomy in practice', 'Hold firm, diversify, stabilise, keep talking.', 'The note offers this as a model example for strategic autonomy answers.', 'Notes: How India responded to the tariff shock'),
  q(17, 'moderate', 'multi-statement', "With reference to India-China strategic relations, consider the following statements:", ['1. India refuses to endorse the Belt and Road Initiative.', '2. The China-Pakistan Economic Corridor runs entirely outside disputed territory.', '3. China has blocked India in the Nuclear Suppliers Group.'], 'How many of the above statements are correct?', COUNT, 1,
    "Statements 1 and 3 are correct. Statement 2 fails because the CPEC runs through disputed territory, which is why India objects to it.",
    ['Two statements are correct, 1 and 3, so this undercounts.', '', 'Statement 2 fails because the CPEC runs through disputed territory.', 'Statements 1 and 3 are both correct.'],
    'China as rival', 'CPEC through disputed territory; India rejects Belt and Road.', 'The rivalry list supplies most Prelims and Mains points on China.', 'Notes: China as a strategic rival'),
  y(2018, 7, 5, 'moderate', 'multi-statement', "What is/are the consequence/consequences of a country becoming the member of the 'Nuclear Suppliers Group'?", ['1. It will have access to the latest and most efficient nuclear technologies.', '2. It automatically becomes a member of "The Treaty on the Non-Proliferation of Nuclear Weapons (NPT)".'], 'Which of the statements given above is/are correct ?', ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 0,
    "Only 1 is correct, as NSG membership eases access to nuclear technology and trade. NSG membership does not automatically make a state an NPT party. India itself got only an NSG waiver in 2008.",
    ['', 'Statement 2 fails: NPT membership is a separate treaty step and is not automatic.', 'Statement 2 fails, so both cannot be correct.', 'Statement 1 holds: access to nuclear technology is the main benefit.'],
    'NSG membership', 'NSG membership does not bring automatic NPT membership.', 'Asked in Prelims 2018 (GS Paper I, Q7).', 'Notes: United States; China as a strategic rival'),
  y(2016, 81, 31, 'moderate', 'multi-statement', 'Consider the following statements :', ['1. The International Solar Alliance was launched at the United Nations Climate Change Conference in 2015.', '2. The Alliance includes all the member countries of the United Nations.'], 'Which of the statements given above is/are correct?', ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'], 0,
    "Only 1 is correct. The Alliance, which India co-founded with France, was launched at the 2015 climate conference, but it does not include every UN member.",
    ['', 'Statement 2 fails: the Alliance does not include all UN members.', 'Statement 2 fails, so both cannot be correct.', 'Statement 1 is correct: it was launched at the 2015 UN climate conference.'],
    'International Solar Alliance', 'India and France co-founded the Solar Alliance.', 'Asked in Prelims 2016 (GS Paper I, Q81).', 'Notes: Europe, France'),
  y(2018, 34, 17, 'moderate', 'multi-statement', 'Consider the following countries :', ['1. Australia', '2. Canada', '3. China', '4. India', '5. Japan', '6. USA'], "Which of the above are among the 'free-trade partners' of ASEAN ?", ['1, 2, 4 and 5', '3, 4, 5 and 6', '1, 3, 4 and 5', '2, 3, 4 and 6'], 2,
    "Australia, China, India and Japan have free-trade arrangements with ASEAN. Canada and the USA are not among its free-trade partners.",
    ['Canada is not among the listed free-trade partners of ASEAN.', 'The USA is not among the listed free-trade partners of ASEAN.', '', 'Canada and the USA are the two countries that do not qualify.'],
    'ASEAN free-trade partners', 'ASEAN FTA partners include Australia, China, India and Japan.', 'Asked in Prelims 2018 (GS Paper I, Q34).', 'Notes: Indo-Pacific partners'),

  // Hard
  q(18, 'hard', 'match', "Match List I with List II, using the labels as of November 2026:", ['List I (Partner): A. United Kingdom; B. Japan; C. France; D. USA', 'List II (Label): 1. Special Global Strategic Partnership; 2. Comprehensive Global Strategic Partnership; 3. Comprehensive Strategic Partnership; 4. Special Strategic and Global Partnership'], 'Select the correct code:', ['A-3, B-4, C-1, D-2', 'A-3, B-1, C-4, D-2', 'A-2, B-4, C-1, D-3', 'A-3, B-4, C-2, D-1'], 0,
    "The UK has a Comprehensive Strategic Partnership (2021), Japan a Special Strategic and Global Partnership (2014), France a Special Global Strategic Partnership (February 2026) and the USA a Comprehensive Global Strategic Partnership (2020).",
    ['', 'This swaps B and C: the Japan label dates from 2014 and the France label from 2026.', 'This swaps A and D: the Comprehensive Global label belongs to the USA.', 'This swaps C and D: Special Global belongs to France and Comprehensive Global to the USA.'],
    'Partnership labels', 'Similar labels: France is Special Global; Japan is Special Strategic and Global.', 'The near-identical wording makes this an elimination-resistant question.', 'Notes: Partnership labels table'),
  q(19, 'hard', 'multi-statement', "Consider the following statements about the India-EU FTA, as of October 2026:", ['1. Talks concluded on 27 January 2026, about five years after they first began.', '2. The agreement was signed at the January 2026 summit.', '3. The January 2026 summit produced a first Security and Defence Partnership.'], 'How many of the above statements are correct?', COUNT, 0,
    "Only statement 3 is correct. Talks began about 20 years before they concluded, and signing was targeted for December 2026, with entry into force in 2027.",
    ['', 'Only statement 3 holds, because 1 has the wrong period and 2 has the wrong signing date.', 'Statements 1 and 2 fail, so all three cannot be correct.', 'Statement 3 is correct: the first Security and Defence Partnership is in the note.'],
    'India-EU FTA', 'Concluded is not signed: talks ended January 2026, signing targeted December 2026.', 'The conclude-sign-enter into force sequence is a common test of precision.', 'Notes: Europe'),
  q(20, 'hard', 'multi-statement', "With reference to India-Germany relations, consider the following statements:", ["1. Chancellor Merz's January 2026 visit was his first Asia visit as Chancellor, and it began in Ahmedabad.", "2. Germany is usually cited as India's first strategic partner."], 'Which of the statements given above is/are correct?', BOTH, 0,
    "Only statement 1 is correct. France (1998) is usually cited as India's first strategic partner, while the German partnership dates from 2000.",
    ['', 'Statement 2 fails because the first strategic partner is France, and statement 1 is correct.', 'Statement 2 fails, so both cannot be correct.', 'Statement 1 is correct, as the note records the visit in those terms.'],
    'India-Germany ties', 'Germany: partnership in 2000; Merz in India in January 2026.', 'The note says that UPSC tested this visit in Prelims 2026.', 'Notes: Europe, Germany'),
  q(21, 'hard', 'multi-statement', "Consider the following pairs of partner and milestone:", ['1. Russia: Special and Privileged Strategic Partnership, 2000', '2. Australia: Comprehensive Strategic Partnership, 2014', '3. USA: Major Defence Partner designation, 2020'], 'How many of the above pairs are correctly matched?', COUNT, 3,
    "None is correct. The Special and Privileged label for Russia dates from 2010, the Australian partnership from 2020, and the US Major Defence Partner designation from 2016.",
    ['No pair is correct: the right years are 2010, 2020 and 2016.', 'No pair is correct, because each year belongs to a different milestone.', 'All three pairs have the wrong year.', ''],
    'Dates of partnership', 'Russia 2010; Australia 2020; Major Defence Partner 2016.', 'Year-swapping is a typical way to set a close distractor.', 'Notes: Partnership labels table; United States'),
  q(22, 'hard', 'statement', "Which one of the following gives the correct sequence of the India-US civil nuclear process?", null, null, ['Framework from 2005, the Hyde Act in 2006, then the 123 Agreement and an NSG waiver in 2008', 'Framework from 2005, the 123 Agreement in 2006, then the Hyde Act and full NSG membership in 2008', 'Hyde Act in 2005, an NSG waiver in 2006, then the 123 Agreement in 2008', 'The 123 Agreement in 1998, followed by the Hyde Act and an NSG waiver in 2008'], 0,
    "The process ran from the 2005 framework to the Hyde Act in 2006, and then to the 123 Agreement and the NSG waiver in 2008. India received a waiver, not membership.",
    ['', 'The Hyde Act came in 2006, and India received a waiver and not NSG membership.', 'The Hyde Act was in 2006 and the waiver in 2008, so these years are wrong.', '1998 was Pokhran-II and US sanctions, not the 123 Agreement.'],
    'Civil nuclear deal', 'Hyde 2006; 123 and NSG waiver 2008. Waiver is not membership.', 'The waiver-versus-membership distinction recurs in questions on the NSG.', 'Notes: United States; Membership confusion'),
  q(23, 'hard', 'multi-statement', "Consider the following statements about India-US relations:", ['1. iCET (2023) was renamed TRUST in 2025.', '2. A 10-year defence framework was agreed in October 2025.', '3. The February 2026 joint statement put US tariffs on India at 18%.'], 'How many of the above statements are correct?', COUNT, 2,
    "All three are correct. Each appears in the note's United States timeline.",
    ['All three are supported by the timeline, so this undercounts.', 'All three are supported by the timeline, so this undercounts.', '', 'None of the three is false; each is in the note\'s timeline.'],
    'India-US recent milestones', 'iCET became TRUST; 10-year defence framework; 18% in the framework.', 'It tests recent milestones that are easily mixed up.', 'Notes: United States'),
  q(24, 'hard', 'multi-statement', "With reference to India's trade arrangements, consider the following statements:", ['1. The India-UAE CEPA dates from 2020.', '2. The India-Australia ECTA came into force in December 2020.'], 'Which of the statements given above is/are correct?', BOTH, 3,
    "Neither is correct. The India-UAE CEPA dates from 2022, and ECTA came into force in December 2022. Both statements shift the year back to 2020.",
    ['Statement 1 fails because the CEPA dates from 2022.', 'Statement 2 fails because ECTA came into force in December 2022.', 'Both fail, as each has 2020 where the correct year is 2022.', ''],
    'Trade agreement dates', 'CEPA and ECTA both belong to 2022.', 'A close-date distractor of the kind UPSC uses on recent agreements.', 'Notes: Indo-Pacific partners; Partnership labels table'),
  q(25, 'hard', 'statement', "Which one of the following statements about the limits of India-Russia ties is correct?", null, null, ["India has been diversifying its suppliers, so its import share from Russia has fallen, and trade is imbalanced in Russia's favour.", "India's defence import share from Russia has risen, and trade is imbalanced in India's favour.", "India has stopped buying Russian arms entirely, and trade is imbalanced in Russia's favour.", "The $100 billion trade target for 2030 has already been met, and payment problems have ended."], 0,
    "The note lists a falling import share as India diversifies, a trade imbalance in Russia's favour, payment problems under sanctions, and Russia's growing dependence on China.",
    ['', "The share has fallen and the imbalance is in Russia's favour, not India's.", 'India has diversified but not stopped: the S-400, BrahMos and Su-30MKI remain in the relationship.', '$100 billion is a target for 2030, and payment problems are listed as a current limit.'],
    'Limits of Russia ties', 'Falling arms share, imbalance, payments, Russia-China closeness.', 'Mains often asks whether Russia remains a reliable partner.', 'Notes: Russia'),
]

export const mains: MainsQuestion[] = [
  { id: 'm-1127-1', day: DAY, marks: 15, words: 250, directive: 'Critically analyse', question: 'Is strategic autonomy still a workable foreign policy goal for India in a divided world? Critically analyse with reference to the events of 2025-26.', mustCover: ['Meaning: autonomy, non-alignment, multi-alignment', 'Evidence for: Russian oil, BRICS and Quad together, response to tariffs', 'Evidence against: dependence on Chinese inputs and the US market', 'Tariff episode and diversification through UK and EU deals', 'Costs of balancing several partners', 'Forward-looking conclusion on capacity'], model: `Introduction
Strategic autonomy means the ability to choose foreign policy on national interest, without being bound to an alliance. It grew out of Cold War non-alignment, and is today often described as multi-alignment.

Evidence that it works
India keeps Russian oil and arms alongside technology and defence ties with the US and its partners, and it sits in BRICS and the Quad together.
When US tariffs reached 50% in August 2025, including a 25% penalty linked to Russian oil, India held firm on farmers, dairy and energy.
It diversified: the UK CETA entered into force in July 2026, and EU talks concluded in January 2026.
It stabilised ties with China and held a summit with Russia in December 2025, while still negotiating an interim deal with the US.

Evidence of limits
Dependence: heavy imports of electronics, solar cells and pharmaceutical ingredients from China, along with its export curbs on rare earths, limit India's choices.
Market exposure: the tariff shock showed how much exporters rely on the US market.
Defence: Russia's growing dependence on China raises questions over long-term supply.
Costs: friction such as H-1B and CBAM shows that partners also impose their own terms.

Assessment
Autonomy survives, but it is no longer free. It now depends on managing costs across several partners at once, and it is more a practice of balancing than a fixed position.

Way forward
Real autonomy rests on capacity. India should diversify critical inputs, build its defence and technology base, and finish trade deals, so that its choices stay its own.` },
  { id: 'm-1127-2', day: DAY, marks: 10, words: 150, directive: 'Examine', question: 'Can Russia remain a reliable strategic partner for India as it moves closer to China? Examine.', mustCover: ['History: 1971 treaty, 2000 declaration', 'Current pillars: defence, energy, connectivity', 'December 2025 summit outcomes', 'Limits: imbalance, payments, sanctions', 'Russia-China closeness', 'Balanced conclusion'], model: `Introduction
India and Russia have a long relationship, from the 1971 Indo-Soviet Treaty to the 2000 Declaration on Strategic Partnership and the Special and Privileged label of 2010.

Why Russia remains valuable
Defence: the S-400, the BrahMos joint venture and the Su-30MKI.
Energy: the Kudankulam plant and discounted crude since 2022.
Connectivity: the International North-South Transport Corridor.
Diplomacy: the December 2025 summit signed 16 agreements and set a $100 billion trade target by 2030.

Why doubts persist
Russia's growing dependence on China could limit its choices in a crisis with India.
Trade is imbalanced in Russia's favour, with payment problems under sanctions.
Oil purchases triggered US penalties and EU curbs.
India is already diversifying, and its import share from Russia has fallen.

Conclusion
Russia remains useful, but no longer unconditionally. India should keep the partnership, widen trade beyond oil and arms, and avoid single-source dependence in defence.` },
  { id: 'm-1127-3', day: DAY, marks: 10, words: 150, directive: 'Discuss', question: 'Discuss the significance of India\'s trade agreements with the United Kingdom and the European Union for its labour-intensive exports, and the risks that remain.', mustCover: ['UK CETA facts and coverage', 'India-EU FTA status as of the date', 'Benefit to labour-intensive sectors', 'Double Contribution Convention', 'CBAM and other risks', 'Way forward'], model: `Introduction
After US tariffs in 2025, India completed long-pending trade talks with Europe. The UK CETA entered into force on 15 July 2026, and India-EU talks concluded on 27 January 2026, with signing targeted for December 2026 (as of October 2026).

Significance
Market access: zero duty on about 99% of India's exports to the UK helps labour-intensive sectors compete.
Diversification: these deals reduce exposure to a single market, as the tariff shock showed.
Mobility: the Double Contribution Convention gives relief on social security payments.
Wider ties: the EU summit also produced a first Security and Defence Partnership.

Risks
CBAM: the EU's carbon tax on steel and aluminium can offset tariff gains.
Delay: the EU deal is not yet signed or in force.
Capacity: small firms may struggle to meet standards and use preferences.

Way forward
India should help exporters with compliance and carbon accounting, and keep raising CBAM with the EU so that the gains are real.` },
]
