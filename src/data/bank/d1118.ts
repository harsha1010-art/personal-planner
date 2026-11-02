import type { Difficulty, Format, MainsQuestion, Question } from '../../lib/types'

type Four = [string, string, string, string]
const DAY = '2026-11-18'
const S = 'Notes: Marathas, later Mughals and regional states'
const COUNT: Four = ['Only one', 'Only two', 'All three', 'None']
const BOTH: Four = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2']
const SI: Four = ['Both are correct, and Statement II explains Statement I', 'Both are correct, but Statement II does not explain Statement I', 'Statement I is correct, but Statement II is incorrect', 'Statement I is incorrect, but Statement II is correct']
const q = (n: number, difficulty: Difficulty, format: Format, stem: string, lines: string[] | null, ask: string | null, options: Four, answer: 0 | 1 | 2 | 3, explanation: string, whyWrong: Four, concept: string, takeaway: string, whyAsked: string, source = S): Question => ({
  id: `p-1118-${n}`, day: DAY, kind: 'predicted', difficulty, format, stem, ...(lines ? { lines } : {}), ...(ask ? { ask } : {}), options, answer, explanation, whyWrong, source, concept, takeaway, whyAsked,
})

export const questions: Question[] = [
  // Easy
  q(1, 'easy', 'factual', 'Afzal Khan, killed by Shivaji at Pratapgarh in 1659, was a noble of', null, null,
    ['Golconda', 'Bijapur', 'Ahmadnagar', 'the Mughal Empire'], 1,
    'Afzal Khan was a premier noble of Bijapur, which sent him against Shivaji. Shivaji killed him at Pratapgarh in 1659.',
    ['Golconda did not send Afzal Khan; Shivaji\'s early conquests were at the expense of Bijapur.', '', 'Ahmadnagar did not send him; he came from the Bijapur state.', 'The Mughal commanders sent against Shivaji were Shaista Khan and Jai Singh.'],
    'Afzal Khan', '1659: Afzal Khan of Bijapur killed at Pratapgarh.', 'The first major date in Shivaji\'s timeline.', 'Notes: Shivaji and the Marathas; Satish Chandra, History of Medieval India (Rise of the Marathas)'),
  q(2, 'easy', 'factual', 'Shivaji was crowned Chhatrapati in 1674 at', null, null,
    ['Purandar', 'Pratapgarh', 'Raigad', 'Surat'], 2,
    'Shivaji was crowned Chhatrapati at Raigad in 1674.',
    ['Purandar is the fort that gave its name to the treaty with Jai Singh in 1665.', 'Pratapgarh is where Afzal Khan was killed in 1659.', '', 'Surat was the Mughal port that Shivaji sacked in 1664.'],
    'Raigad, 1674', '1674: crowned at Raigad as Chhatrapati.', 'The note lists this in quick recall.'),
  q(3, 'easy', 'factual', 'Chauth, as collected by the Marathas, was', null, null,
    ['one-fourth of the revenue, paid to avoid Maratha raids', 'one-tenth of the revenue, claimed as hereditary head of the region', 'one-half of the produce, paid by peasants to the Peshwa', 'one-third of the produce, paid as a temple grant'], 0,
    'Chauth was one-fourth of the revenue, paid to avoid Maratha raids. The extra 10% was sardeshmukhi.',
    ['', 'This describes sardeshmukhi, not chauth.', 'Half of the produce was not chauth, which was a quarter of the revenue.', 'Chauth was a quarter, and it was not a temple grant.'],
    'Chauth', 'Chauth 25%, sardeshmukhi 10%.', 'The note lists these rates in quick recall.'),
  q(4, 'easy', 'factual', 'The Marathas lost the Third Battle of Panipat in 1761 to', null, null,
    ['the English East India Company', 'Nadir Shah', 'Nizam-ul-Mulk', 'Ahmad Shah Abdali'], 3,
    'Ahmad Shah Abdali defeated the Marathas, led by Sadashiv Rao Bhau, at Third Panipat. It was a loss to the Afghans, not to the British.',
    ['The note warns that this was a loss to the Afghans, not to the British.', 'Nadir Shah invaded in 1739, more than twenty years earlier.', 'Nizam-ul-Mulk founded Hyderabad in 1724 and did not fight this battle.', ''],
    'Third Panipat', '1761: Abdali beat the Marathas.', 'The note marks this confusion as a trap.'),
  q(5, 'easy', 'factual', 'Nadir Shah invaded India in 1739 during the reign of', null, null,
    ['Farrukhsiyar', 'Bahadur Shah I', 'Muhammad Shah', 'Shah Alam II'], 2,
    'Nadir Shah invaded in 1739 under Muhammad Shah (1719-48), and he took the Peacock Throne and the Koh-i-Noor.',
    ['Farrukhsiyar ruled from 1713 to 1719, before the invasion.', 'Bahadur Shah I ruled from 1707 to 1712, long before the invasion.', '', 'Shah Alam II ruled from 1759, after the invasion.'],
    'Nadir Shah', '1739: Nadir Shah, under Muhammad Shah.', 'It is the key external shock in the Mughal decline.'),
  q(6, 'easy', 'factual', 'The Khalsa was founded in 1699 by', null, null,
    ['Guru Gobind Singh', 'Guru Tegh Bahadur', 'Banda Bahadur', 'Ranjit Singh'], 0,
    'Guru Gobind Singh founded the Khalsa in 1699. Banda Bahadur led a rising after this, and Ranjit Singh came much later.',
    ['', 'Guru Tegh Bahadur was executed in 1675, before the Khalsa.', 'Banda Bahadur led a rising in Punjab and was executed in 1716; he did not found the Khalsa.', 'Ranjit Singh took Lahore in 1799, a century later.'],
    'Khalsa', '1699: Khalsa, Guru Gobind Singh.', 'The Sikhs are a major part of the warrior states story.'),
  q(7, 'easy', 'factual', 'The last Mughal emperor, exiled to Rangoon after 1857, was', null, null,
    ['Shah Alam II', 'Muhammad Shah', 'Farrukhsiyar', 'Bahadur Shah Zafar'], 3,
    'Bahadur Shah Zafar (1837-57) was the last emperor and was exiled to Rangoon after 1857.',
    ['Shah Alam II ruled until 1806 and gave the Diwani of Bengal to the Company.', 'Muhammad Shah died in 1748, long before 1857.', 'Farrukhsiyar ruled until 1719 and issued the farman of 1717.', ''],
    'Last Mughal', 'Bahadur Shah Zafar: exiled to Rangoon.', 'A direct recall linked to the revolt of 1857.'),
  q(8, 'easy', 'factual', 'Nizam-ul-Mulk Asaf Jah is associated with the foundation in 1724 of which state?', null, null,
    ['Awadh', 'Hyderabad', 'Bengal', 'Mysore'], 1,
    'Nizam-ul-Mulk Asaf Jah founded Hyderabad, a successor state, in 1724.',
    ['Awadh is associated with Saadat Khan Burhan-ul-Mulk.', '', 'Bengal is associated with Murshid Quli Khan and Alivardi Khan.', 'Mysore is associated with the Wodeyars, Haidar Ali and Tipu Sultan.'],
    'Hyderabad', 'Hyderabad, 1724: Nizam-ul-Mulk Asaf Jah.', 'Regional state founders are a repeated matching area.'),

  // Moderate
  q(9, 'moderate', 'match', 'Match the members of the Ashtapradhan with their functions:', ['A. Amatya', 'B. Sachiv', 'C. Sumant', 'D. Nyayadhish', '1. Justice', '2. Foreign affairs', '3. Finance', '4. Secretary'], 'Select the correct code.',
    ['A-4, B-3, C-2, D-1', 'A-3, B-4, C-1, D-2', 'A-2, B-4, C-3, D-1', 'A-3, B-4, C-2, D-1'], 3,
    'The Amatya handled finance, the Sachiv was the secretary, the Sumant handled foreign affairs and the Nyayadhish justice.',
    ['This swaps A and B: the Amatya handled finance and the Sachiv was the secretary.', 'This swaps C and D: the Sumant was foreign affairs and the Nyayadhish was justice.', 'This swaps A and C: the Amatya handled finance and the Sumant foreign affairs.', ''],
    'Ashtapradhan', 'Amatya finance, Sachiv secretary, Sumant foreign, Nyayadhish justice.', 'The note\'s table of eight ministers suits a matching test.', 'Notes: Shivaji and the Marathas; Satish Chandra, History of Medieval India (Shivaji\'s administration)'),
  q(10, 'moderate', 'match', 'Consider the following pairs of Maratha family and centre:', ['1. Gaikwad : Baroda', '2. Holkar : Gwalior', '3. Bhonsle : Nagpur'], 'How many of the above pairs are correctly matched?',
    COUNT, 1,
    'Pairs 1 and 3 are correct. The Holkars were at Indore, and Gwalior was the centre of the Scindias.',
    ['Pairs 1 and 3 both hold, so one is too few.', '', 'Pair 2 fails: the Holkars were at Indore, not at Gwalior.', 'Pairs 1 and 3 hold, so None cannot be the answer.'],
    'Maratha confederacy', 'Gaikwad Baroda, Holkar Indore, Scindia Gwalior, Bhonsle Nagpur.', 'A swap between two families is a classic trap.'),
  q(11, 'moderate', 'multi-statement', 'Consider the following statements about the Treaty of Purandar:', ['1. It was made with Jai Singh in 1665.', '2. Shivaji surrendered 23 forts under it.', '3. A mansab of 5,000 was granted to Shivaji\'s minor son, Sambhaji.'], 'How many of the above statements are correct?',
    COUNT, 2,
    'All three are correct. Shivaji gave up 23 of his 35 forts to Jai Singh in 1665, and since he asked to be excused from personal service, the mansab went to Sambhaji.',
    ['All three are supported, so one is too few.', 'The mansab for Sambhaji is also correct, so two is too few.', '', 'Each statement is supported, so None cannot be the answer.'],
    'Treaty of Purandar', 'Purandar 1665: 23 forts, mansab for Sambhaji.', 'The note marks Purandar as a trap against confusion with Panipat.', 'Notes: Shivaji and the Marathas; Satish Chandra, History of Medieval India (Treaty of Purandar)'),
  q(12, 'moderate', 'chronology', 'Arrange the following events in chronological order:', ['1. Treaty of Purandar', '2. Sack of Surat', '3. Coronation at Raigad', '4. Killing of Afzal Khan'], 'Select the correct order.',
    ['4-2-1-3', '2-4-1-3', '4-1-2-3', '4-2-3-1'], 0,
    'The order is Afzal Khan (1659), the sack of Surat (1664), Purandar (1665) and the coronation (1674).',
    ['', 'This puts Surat (1664) before Afzal Khan (1659).', 'This puts Purandar (1665) before Surat (1664).', 'This puts the coronation (1674) before Purandar (1665).'],
    'Shivaji\'s timeline', '1659, 1664, 1665, 1674.', 'The note\'s timeline suits a sequence test.'),
  q(13, 'moderate', 'chronology', 'Arrange the following Mughal emperors in chronological order:', ['1. Muhammad Shah', '2. Shah Alam II', '3. Bahadur Shah I', '4. Farrukhsiyar'], 'Select the correct order.',
    ['4-3-1-2', '3-1-4-2', '3-4-1-2', '3-4-2-1'], 2,
    'Bahadur Shah I (1707-12) came first, followed by Farrukhsiyar (1713-19), Muhammad Shah (1719-48) and Shah Alam II (1759-1806).',
    ['This puts Farrukhsiyar before Bahadur Shah I, but Bahadur Shah I succeeded in 1707.', 'This puts Muhammad Shah before Farrukhsiyar, but Muhammad Shah began only in 1719.', '', 'This puts Shah Alam II (from 1759) before Muhammad Shah (died 1748).'],
    'Later Mughals', 'Bahadur Shah I, Farrukhsiyar, Muhammad Shah, Shah Alam II.', 'The note gives this as a quick sequence for the eighteenth century.'),
  q(14, 'moderate', 'assertion-reason', 'Statement I: Under Aurangzeb, many mansabdars in the Deccan made private agreements with Maratha sardars to pay chauth.\nStatement II: Disturbed conditions in the Deccan left these mansabdars unable to realise income from their jagirs.', null, 'Which one of the following is correct?',
    SI, 0,
    'Both are correct, and II explains I. Because they could not collect from disturbed jagirs, many mansabdars paid a quarter of their income to the Marathas in return for no disturbance.',
    ['', 'II gives the direct reason for the agreements in I, so it does explain them.', 'II is also correct: the observer Bhim Sen reports that they could hardly collect anything.', 'I is also correct: Bhim Sen reports such private agreements with Maratha sardars.'],
    'Jagir crisis and chauth', 'Failed jagirs drove mansabdars to pay chauth privately.', 'It links the jagir crisis with Maratha power in one causal step.', 'Notes: Mughal decline; Satish Chandra, History of Medieval India (Crisis of the jagirdari system)'),
  q(15, 'moderate', 'assertion-reason', 'Statement I: Shivaji sacked Surat in 1664.\nStatement II: Shivaji made the Treaty of Purandar with Jai Singh in 1665.', null, 'Which one of the following is correct?',
    SI, 1,
    'Both are correct, but II does not explain I. The treaty came a year after the sack of Surat, so it cannot be the reason for it.',
    ['The treaty came after the sack, so it cannot be the reason for it.', '', 'II is also correct, since Purandar was made in 1665.', 'I is also correct, since Surat was sacked in 1664.'],
    'Surat and Purandar', 'Surat 1664 came first, Purandar 1665 next.', 'Order of events helps to test true and explanatory links.'),
  q(16, 'moderate', 'assertion-reason', 'Statement I: In the Third Battle of Panipat, the Marathas were defeated by an Afghan ruler.\nStatement II: The victor at Third Panipat was the English East India Company.', null, 'Which one of the following is correct?',
    SI, 2,
    'Statement I is correct, but II is wrong. Ahmad Shah Abdali won the battle, and the note warns that it was not a loss to the British.',
    ['II is incorrect, so it cannot explain I: the victor was Abdali.', 'II is not correct at all, since the Company did not win this battle.', '', 'I is correct: Ahmad Shah Abdali defeated the Marathas.'],
    'Panipat and the British', 'Third Panipat: lost to the Afghans.', 'A trap note from the topic itself.'),
  q(17, 'moderate', 'assertion-reason', 'Statement I: The Treaty of Purandar was signed with the Afghans.\nStatement II: Balaji Vishwanath obtained Mughal recognition of chauth in 1719.', null, 'Which one of the following is correct?',
    SI, 3,
    'Statement I is wrong and II is right. Purandar was a treaty with the Mughals through Jai Singh, and Balaji Vishwanath obtained recognition of chauth in 1719.',
    ['I is wrong, as Purandar was made with the Mughals, so II cannot explain it.', 'I is wrong, so both statements cannot be correct.', 'I is the wrong statement here, while II on Balaji Vishwanath is correct.', ''],
    'Maratha treaties', 'Purandar: with the Mughals. 1719: chauth recognised.', 'The note warns against mixing Purandar and Panipat.'),
  q(18, 'moderate', 'multi-statement', 'Consider the following statements about Shah Alam II:', ['1. He lost at Buxar in 1764.', '2. He gave the Diwani of Bengal to the Company in 1765.'], 'Which of the statements given above is/are correct?',
    BOTH, 2,
    'Both are correct. After the defeat at Buxar in 1764, Shah Alam II gave the Diwani of Bengal to the Company in 1765.',
    ['Statement 2 is also correct, as the Diwani followed in 1765.', 'Statement 1 is also correct, as he lost at Buxar in 1764.', '', 'Both are supported, so Neither cannot be the answer.'],
    'Buxar and Diwani', 'Buxar 1764, Diwani 1765.', 'These dates link Mughal decline with early British rule.'),
  q(19, 'moderate', 'multi-statement', 'Consider the following statements about Farrukhsiyar:', ['1. His 1717 farman gave the English Company trade concessions in Bengal.', '2. Nadir Shah invaded India during his reign.'], 'Which of the statements given above is/are correct?',
    BOTH, 0,
    'Only statement 1 is correct. Nadir Shah invaded in 1739, under Muhammad Shah, twenty years after Farrukhsiyar\'s reign ended.',
    ['', 'Statement 2 fails: Nadir Shah came in 1739, under Muhammad Shah.', 'Statement 2 fails on the reign, since Farrukhsiyar\'s rule ended in 1719.', 'Statement 1 is correct: the 1717 farman gave these concessions.'],
    'Farrukhsiyar', 'Farrukhsiyar: the 1717 farman and the Sayyid Brothers.', 'The farman is a bridge from Mughal to Company history.'),
  q(20, 'moderate', 'match', 'Consider the following pairs of state and founder or key figure:', ['1. Bengal : Murshid Quli Khan', '2. Awadh : Saadat Khan Burhan-ul-Mulk', '3. Mysore : Sawai Jai Singh II'], 'How many of the above pairs are correctly matched?',
    COUNT, 1,
    'Pairs 1 and 2 are correct. Sawai Jai Singh II belongs with Jaipur, while Mysore is linked with the Wodeyars, Haidar Ali and Tipu Sultan.',
    ['Pairs 1 and 2 both hold, so one is too few.', '', 'Pair 3 fails: Sawai Jai Singh II belongs with Jaipur, not Mysore.', 'Pairs 1 and 2 hold, so None cannot be the answer.'],
    'Regional founders', 'Bengal: Murshid Quli. Awadh: Saadat Khan. Jaipur: Jai Singh II.', 'Founders of eighteenth-century states are direct recall with close options.'),
  q(21, 'moderate', 'multi-statement', 'Consider the following statements about the Sikhs:', ['1. Banda Bahadur was executed in 1716.', '2. Ranjit Singh took Lahore in 1799.', '3. The Treaty of Amritsar of 1809 was signed with the Marathas.'], 'How many of the above statements are correct?',
    COUNT, 1,
    'Statements 1 and 2 are correct. Ranjit Singh signed the Treaty of Amritsar with the British, not with the Marathas.',
    ['Statements 1 and 2 both hold, so one is too few.', '', 'Statement 3 fails: the treaty was signed with the British.', 'Statements 1 and 2 hold, so None cannot be the answer.'],
    'Sikh chronology', '1716 Banda. 1799 Lahore. 1809 Amritsar, with the British.', 'The note\'s Sikh section gives three clean dates.'),
  q(22, 'moderate', 'application', 'A historian argues that the eighteenth century saw strong regional economies growing out of Mughal roots, so that power was redistributed and did not simply collapse. This position is closest to', null, null,
    ['the revisionist view of historians such as Muzaffar Alam and C.A. Bayly', 'the dark age view, which blames weak rulers and a Muslim-Hindu split', 'the view that the century saw only total collapse', 'the view that the Mughals fell only because of Nadir Shah'], 0,
    'This is the revisionist position, associated with Muzaffar Alam and C.A. Bayly. It stresses regional growth and redistribution of power, not total collapse.',
    ['', 'The dark age view blames weak rulers and a Muslim-Hindu split, and it does not stress regional growth.', 'Total collapse is what this historian rejects, since power was redistributed.', 'This single-cause view ignores the regional economies that the historian stresses.'],
    'Eighteenth-century debate', 'Revisionists: redistribution of power, not total collapse.', 'The note names this debate as a likely question for Mains and Prelims.'),

  // Hard
  q(23, 'hard', 'multi-statement', 'Consider the following statements about Shivaji\'s Ashtapradhan:', ['1. It worked as a council of ministers with collective responsibility.', '2. Each of the ministers was directly responsible to the ruler.'], 'Which of the statements given above is/are correct?',
    BOTH, 1,
    'Only statement 2 is correct. Satish Chandra notes that the Ashtapradhan was not in the nature of a council of ministers, since each was directly responsible to the ruler.',
    ['Statement 1 fails, since it was not a council of ministers in that sense.', '', 'Statement 1 fails: the group was not collectively responsible.', 'Statement 2 is correct: each minister answered to Shivaji directly.'],
    'Nature of the Ashtapradhan', 'Ashtapradhan: eight ministers, each answering to the ruler; not a cabinet.', 'A modern word like council is a typical UPSC trap.', 'Notes: Shivaji and the Marathas; Satish Chandra, History of Medieval India (Shivaji\'s administration)'),
  q(24, 'hard', 'multi-statement', 'Consider the following statements about Shivaji\'s revenue system:', ['1. Shivaji abolished the deshmukhi system altogether.', '2. Shivaji never gave a jagir to any official.', '3. Chauth came to one-half of the land revenue.'], 'How many of the above statements are correct?',
    COUNT, 3,
    'None is correct. Satish Chandra says it is wrong to think that Shivaji abolished the deshmukhi system or awarded no jagirs. He supervised the local families closely, and chauth was one-fourth.',
    ['No statement holds: he curbed the deshmukhs, gave some jagirs, and took a quarter as chauth.', 'All three overstate or misstate the facts, so two cannot be correct.', 'These are all wrong, the reverse of this option.', ''],
    'Shivaji and local power', 'Shivaji curbed deshmukhs but did not abolish them.', 'Absolute words such as altogether and never are key signals in UPSC statements.', 'Notes: Shivaji and the Marathas; Satish Chandra, History of Medieval India (Shivaji\'s administration)'),
  q(25, 'hard', 'multi-statement', 'Consider the following statements about the Maratha defeat at Panipat in 1761:', ['1. Rajputs, Jats and Sikhs did not join the Marathas.', '2. Maratha supplies of food and money were cut off.', '3. The Marathas never recovered their power in north India after the battle.'], 'How many of the above statements are correct?',
    COUNT, 1,
    'Statements 1 and 2 are correct. The defeat was a blow to expansion, but the Marathas recovered within a decade.',
    ['Statements 1 and 2 both hold, so one is too few.', '', 'Statement 3 fails, since the Marathas recovered within a decade.', 'Statements 1 and 2 hold, so None cannot be the answer.'],
    'Limits of the defeat', 'Panipat: a blow, but recovery came within a decade.', 'It tests the note\'s own limit on the battle\'s effects.'),
  q(26, 'hard', 'multi-statement', 'Consider the following statements about the Jats:', ['1. Gokula led a rebellion in the Mathura region under Aurangzeb.', '2. Rajaram and Churaman also led the Jats.', '3. Suraj Mal built up Bharatpur.'], 'How many of the above statements are correct?',
    COUNT, 2,
    'All three are correct. Gokula led the rebellion of 1669, Rajaram and Churaman led later resistance, and Suraj Mal built up Bharatpur.',
    ['All three are supported, so one is too few.', 'The later leaders are also correctly named, so two is too few.', '', 'Each statement is supported, so None cannot be the answer.'],
    'Jat power', 'Gokula, Rajaram, Churaman, then Suraj Mal at Bharatpur.', 'Peasant-based risings show an alternative path to state formation.', 'Notes: Sikhs and Jats; Satish Chandra, History of Medieval India (Jats and Satnamis)'),
  q(27, 'hard', 'statement', 'Which one of the following correctly groups eighteenth-century states, as they are commonly classified?', null, null,
    ['Successor: Bengal, Awadh, Hyderabad. Warrior: Marathas, Sikhs, Jats. Independent: Mysore, Rajput states', 'Successor: Marathas, Sikhs, Jats. Warrior: Bengal, Awadh, Hyderabad. Independent: Mysore, Rajput states', 'Successor: Bengal, Awadh, Mysore. Warrior: Marathas, Sikhs, Jats. Independent: Hyderabad, Rajput states', 'Successor: Bengal, Hyderabad, Rajput states. Warrior: Marathas, Sikhs, Jats. Independent: Mysore, Awadh'], 0,
    'Bengal, Awadh and Hyderabad were successor states, the Marathas, Sikhs and Jats warrior states, and Mysore and the Rajput states independent.',
    ['', 'This swaps the first two groups: Bengal, Awadh and Hyderabad were successor states.', 'This swaps Mysore and Hyderabad: Mysore is independent and Hyderabad a successor state.', 'This swaps Awadh and the Rajput states: Awadh is a successor state.'],
    'Types of regional state', 'Successor, warrior and independent states.', 'The note says to group these by type.'),
  q(28, 'hard', 'multi-statement', 'Consider the following statements about Rajput and Mysore rule in the eighteenth century:', ['1. Sawai Jai Singh II is linked with Jaipur city and observatories.', '2. Mysore emerged from the Mughal province of Awadh.'], 'Which of the statements given above is/are correct?',
    BOTH, 0,
    'Only statement 1 is correct. Mysore emerged out of Vijayanagara under the Wodeyars, not from Awadh.',
    ['', 'Statement 2 fails, since Mysore emerged out of Vijayanagara.', 'Statement 2 fails: the origin of Mysore lies with Vijayanagara and the Wodeyars.', 'Statement 1 is correct, as Jai Singh II is linked with Jaipur and observatories.'],
    'Origins of states', 'Mysore: out of Vijayanagara. Jaipur: Jai Singh II.', 'The note says to learn the origin of each state.'),
  q(29, 'hard', 'multi-statement', 'Consider the following statements:', ['1. Sardeshmukhi was an extra 10% claimed as hereditary head of the region.', '2. Deshmukhs and patils were local revenue families that Shivaji tried to keep under control.'], 'Which of the statements given above is/are correct?',
    BOTH, 2,
    'Both are correct. The Marathas claimed sardeshmukhi on top of chauth, and Shivaji tried to keep deshmukh and patil families under control.',
    ['Statement 2 is also correct, since these local families were kept under watch.', 'Statement 1 is also correct, as sardeshmukhi was the extra 10%.', '', 'Both are supported, so Neither cannot be the answer.'],
    'Maratha terms', 'Sardeshmukhi 10%. Deshmukh, patil: local revenue families.', 'Terms with the same root are easily mixed up.'),
  q(30, 'hard', 'multi-statement', 'Consider the following statements about the Peshwas:', ['1. Balaji Vishwanath made the post of Peshwa hereditary.', '2. Baji Rao I expanded into Malwa and Gujarat and raided Delhi in 1737.', '3. Sadashiv Rao Bhau led the Marathas at Third Panipat.'], 'How many of the above statements are correct?',
    COUNT, 2,
    'All three are correct, and they show how power passed from the Peshwa\'s post through expansion to the crisis of 1761.',
    ['All three are supported, so one is too few.', 'All three hold, including the raid on Delhi in 1737, so two is too few.', '', 'Each statement is supported, so None cannot be the answer.'],
    'The Peshwas', 'Balaji Vishwanath, Baji Rao I, then Panipat under Bhau.', 'The Peshwa sequence is often confused because of similar names.'),
]

export const mains: MainsQuestion[] = [
  {
    id: 'm-1118-1', day: DAY, marks: 15, words: 250, directive: 'Critically analyse',
    question: 'Was the eighteenth century a dark age in Indian history? Critically analyse with reference to the Mughal decline and the rise of regional states.',
    mustCover: ['The dark age view', 'Revisionist view (Muzaffar Alam, C.A. Bayly)', 'Jagir crisis, revolts, weak heirs and invasions', 'Types of regional state with examples', 'Political instability and the opening for the British', 'A balanced conclusion'],
    model: `After Aurangzeb's death in 1707, the Mughal empire lost its grip. Historians differ on whether this was a dark age or a redistribution of power.

The dark age view

This view stresses weak rulers and a Muslim-Hindu split. There is evidence for instability: the Sayyid Brothers made and unmade emperors, Nadir Shah took the Peacock Throne in 1739, and Abdali defeated the Marathas in 1761.

Structural causes

The crisis began earlier. Jagirs were too few for too many nobles, and Jats, Sikhs, Satnamis and Marathas revolted. Decline was not simply the fault of weak heirs.

The revisionist view

Muzaffar Alam and C.A. Bayly see strong regional economies growing out of Mughal roots. Successor states such as Bengal (Murshid Quli Khan), Awadh (Saadat Khan) and Hyderabad (Asaf Jah) kept Mughal forms. Warrior states of the Marathas, Sikhs and Jats drew on new social forces. Mysore under Haidar Ali and Tipu Sultan and Jaipur under Sawai Jai Singh II show that regional power could be creative, as Jaipur's city and observatories suggest.

Limits of the revisionist view

Regional vigour did not produce unity. Rivalries left the Marathas isolated at Panipat, and the 1717 farman and the Diwani of 1765 show how the Company used this division.

Conclusion

The century was not a dark age: it was a period of regional creativity with serious political instability. That instability, more than any economic collapse, gave the British their opening.`,
  },
  {
    id: 'm-1118-2', day: DAY, marks: 10, words: 150, directive: 'Examine',
    question: 'Examine the reasons for the Maratha defeat at the Third Battle of Panipat, and assess its consequences.',
    mustCover: ['1761, Abdali and Sadashiv Rao Bhau', 'Lack of allies', 'Supply problems', 'Abdali\'s muskets and cavalry', 'A blow to expansion', 'Recovery within a decade'],
    model: `The Third Battle of Panipat (1761) saw Ahmad Shah Abdali defeat the Marathas under Sadashiv Rao Bhau. It was a loss to the Afghans, not to the British.

Reasons

Isolation: Rajputs, Jats and Sikhs did not join them, as Maratha expansion and revenue claims had made few friends in the north.

Supply: the army was cut off from food and money.

Tactics: Abdali's muskets and cavalry prevailed.

Consequences

The defeat was a serious blow to Maratha expansion and prestige in the north, and it exposed the limits of a confederacy of chiefs such as the Gaikwad, Holkar, Scindia and Bhonsle. Yet the Marathas recovered within a decade, so it was not the end of their power.

Conclusion

Panipat shows that military reach without political alliances and secure logistics is fragile. It was a major check, not a final collapse, and its wider gain went to those watching from outside.`,
  },
  {
    id: 'm-1118-3', day: DAY, marks: 10, words: 150, directive: 'Discuss',
    question: 'Discuss the main features of Shivaji\'s administration, and how it helped him build a regional state.',
    mustCover: ['Ashtapradhan, responsible to the ruler', 'Chauth and sardeshmukhi', 'Curbing deshmukhs and mirasdars', 'Army discipline and cash salaries', 'Forts and their safeguards', 'Popular base and regional character'],
    model: `Shivaji, crowned Chhatrapati at Raigad in 1674, built a regional state between Mughal and Deccani power. His administration drew largely on Deccani practice.

Central government

The Ashtapradhan of eight ministers included the Peshwa, Amatya and Sumant. It was not a council in the modern sense, for each minister answered to the ruler directly.

Revenue

Chauth, one-fourth of revenue, and sardeshmukhi, an extra 10%, added income from neighbouring territory. He did not abolish the deshmukhi system, but he supervised local families closely and destroyed the bastions of unruly mirasdars.

Army and forts

Regular soldiers generally received cash salaries, and discipline was strict. Three men of equal rank held each fort, as a guard against treachery.

Assessment

The state depended partly on plunder, but it had a popular base in the region.

Conclusion

Shivaji's system shows how careful control of local elites and military discipline can create a durable regional power.`,
  },
]
