// What a topic needs from outside this site, and its current-affairs links.
// Every plan day shows something from here: its own entry if written, or its subject's default.

export interface ReferItem {
  what: string
  where: string
  why: string
  url?: string
}

export interface CurrentItem {
  issue: string
  link: string
  source: string
  url?: string
}

export interface Beyond {
  refer: ReferItem[]
  current: CurrentItem[]
}

const PIB = { source: 'Press Information Bureau', url: 'https://pib.gov.in/' }
const ATLAS = { what: 'School atlas', where: 'Oxford or Orient Blackswan atlas', why: 'Map questions need you to place sites yourself. Notes cannot replace this practice.' }
const PYQ = { what: 'Full official question papers', where: 'UPSC previous question papers', why: 'Timed practice under real conditions.', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' }

export const byTopic: Record<string, Beyond> = {
  '2026-11-02': {
    refer: [
      { ...ATLAS, why: 'Mark Burzahom, Mehrgarh, Bhimbetka, Inamgaon and Chirand, because Prelims tests location.' },
      { what: 'Bhimbetka official description', where: 'UNESCO World Heritage List', why: 'Authoritative wording for the rock art facts.', url: 'https://whc.unesco.org/en/list/925/' },
    ],
    current: [{ issue: 'New dates for stone tools', link: 'The 2018 Attirampakkam study revised Middle Palaeolithic timings.', source: 'Nature, 2018', url: 'https://doi.org/10.1038/nature25444' }],
  },
  '2026-11-03': {
    refer: [
      { ...ATLAS, why: 'Mark the extreme sites and the Gujarat, Rajasthan and Haryana sites.' },
      { what: 'Dholavira description', where: 'UNESCO World Heritage List', why: 'Official account of the water system and city layout.', url: 'https://whc.unesco.org/en/list/1645/' },
    ],
    current: [
      { issue: 'Dholavira', link: 'UNESCO World Heritage Site since 2021.', source: 'UNESCO', url: 'https://whc.unesco.org/en/list/1645/' },
      { issue: 'Rakhigarhi genome', link: 'The 2019 study feeds the debate on who the Harappans were.', source: 'Cell, 2019', url: 'https://doi.org/10.1016/j.cell.2019.08.048' },
      { issue: 'National Maritime Heritage Complex, Lothal', link: 'Connects Lothal to maritime heritage. Check its latest status before the exam.', ...PIB },
    ],
  },
  '2026-11-04': {
    refer: [
      { ...ATLAS, why: 'Trace the Sapta Sindhu rivers and the shift towards the Ganga-Yamuna doab.' },
      { what: 'Vedic Sanskrit hymns in translation (optional)', where: 'Any published translation, in a library', why: 'Only if you wish to read primary sources. You do not need this for Prelims.' },
    ],
    current: [{ issue: 'Ancient DNA debate', link: 'Steppe ancestry studies are often in the news in discussions on Indo-Aryan origins.', source: 'Science, 2019', url: 'https://doi.org/10.1126/science.aat7487' }],
  },
  '2026-11-05': {
    refer: [{ ...ATLAS, why: 'Plot all 16 mahajanapadas with their capitals and rivers.' }],
    current: [{ issue: 'No direct current link', link: 'Treat this as static. It can return through excavations at Rajgir, Vaishali or Kaushambi.', source: 'Archaeological Survey of India', url: 'https://asi.nic.in/' }],
  },
  '2026-11-06': {
    refer: [
      { what: 'NCERT Themes in Indian History, Part I, Ch 4', where: 'NCERT free textbook site', why: 'The clearest account of Sanchi and symbols, and UPSC seems to draw on it.', url: 'https://ncert.nic.in/textbook.php' },
      { what: 'Sites of Buddhist heritage', where: 'UNESCO: Sanchi, Bodh Gaya', why: 'Official descriptions of the monuments.', url: 'https://whc.unesco.org/en/list/524/' },
    ],
    current: [
      { issue: 'Classical languages', link: 'Pali and Prakrit were granted classical language status in October 2024.', ...PIB },
      { issue: 'Piprahwa gems', link: 'Returned to India in 2025, after a planned auction was stopped.', ...PIB },
    ],
  },
  '2026-11-07': {
    refer: [
      { ...ATLAS, why: 'Mark edict sites with their states. Prelims 2022 tested this.' },
      { what: 'Text of the edicts in translation', where: 'Wikipedia: Edicts of Ashoka, with its linked translations', why: 'Worth reading Rock Edicts XII and XIII in full for Mains quotes.', url: 'https://en.wikipedia.org/wiki/Edicts_of_Ashoka' },
    ],
    current: [{ issue: 'National emblem', link: 'Debates about the emblem on the new Parliament building connect to the Sarnath capital.', ...PIB }],
  },
  '2026-11-08': {
    refer: [{ ...ATLAS, why: 'Plot Taxila, Purushapura, Mathura, Pratishthana, Barygaza, Arikamedu and Muziris.' }],
    current: [{ issue: 'Monuments and museums', link: 'The Mathura and Gandhara schools can appear through repatriated art stories. Check ASI and Ministry of Culture notes.', source: 'Ministry of Culture', url: 'https://indiaculture.gov.in/' }],
  },
  '2026-11-09': {
    refer: [
      { ...ATLAS, why: 'Mark Prayag, Ujjain, Pataliputra, Mehrauli, Deogarh and Nalanda.' },
      { what: 'Nalanda official description', where: 'UNESCO World Heritage List', why: 'Official wording on the site and its history.', url: 'https://whc.unesco.org/en/list/1502/' },
    ],
    current: [{ issue: 'Nalanda University', link: 'The new campus at Rajgir was inaugurated in 2024, and is often contrasted with the ancient site.', ...PIB }],
  },
  '2026-11-10': {
    refer: [
      { ...ATLAS, why: 'Mark Chera, Chola and Pandya capitals and ports, and Keeladi.' },
      { what: 'Keeladi reports', where: 'Tamil Nadu State Department of Archaeology', why: 'Primary reports on the dates. These dates are disputed, so use the official wording.', url: 'https://www.tnarch.gov.in/' },
    ],
    current: [{ issue: 'Keeladi and Sivagalai', link: 'Claims about urban life and early iron in Tamil Nadu are debated. Treat any single date as contested.', source: 'Tamil Nadu State Department of Archaeology', url: 'https://www.tnarch.gov.in/' }],
  },
  '2026-11-11': {
    refer: [
      { what: 'Photos of temples and caves', where: 'UNESCO: Ajanta, Ellora, Mahabalipuram', why: 'You should recognise these forms by sight.', url: 'https://whc.unesco.org/en/list/242/' },
      { what: 'Centre for Cultural Resources and Training', where: 'CCRT website', why: 'Your plan names this as a reference for art forms.', url: 'https://ccrtindia.gov.in/' },
    ],
    current: [{ issue: 'UNESCO and heritage sites', link: 'New UNESCO inscriptions and the tentative list are regular Prelims material.', source: 'UNESCO India', url: 'https://whc.unesco.org/en/statesparties/in' }],
  },
  '2026-11-12': {
    refer: [{ what: 'Indian Knowledge Systems', where: 'Ministry of Education IKS Division', why: 'Useful for recent government framing of older knowledge.', url: 'https://iksindia.org/' }],
    current: [{ issue: 'Satellite names', link: 'Aryabhata was the name of India\'s first satellite in 1975, and such links are used in questions.', source: 'ISRO', url: 'https://www.isro.gov.in/' }],
  },
  'soc-01': {
    refer: [
      { what: 'NCERT Class XI: Introducing Sociology', where: 'NCERT free textbook site', why: 'A plain introduction before you move to standard references.', url: 'https://ncert.nic.in/textbook.php' },
      { what: 'Standard reference for thinkers', where: 'Haralambos and Holborn, Sociology: Themes and Perspectives', why: 'This optional is scored at Mains level, and needs more depth than notes alone.' },
      { what: 'Official Sociology syllabus and past papers', where: 'UPSC notification and past papers', why: 'Controls your depth.', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    ],
    current: [{ issue: 'Common sense vs evidence', link: 'Use data from the National Family Health Survey to test common-sense claims about family or gender.', source: 'NFHS', url: 'https://www.nfhsiips.in/' }],
  },
  'lang-english': {
    refer: [PYQ, { what: 'Current exam instructions', where: 'UPSC 2027 notification, due 13 January 2027', why: 'Check marks and pattern before you rely on any notes.', url: 'https://www.upsc.gov.in/' }],
    current: [{ issue: 'Reading practice', link: 'Read one newspaper editorial each day, then write a one-third précis of it.', source: 'Any national daily' }],
  },
  'lang-kannada': {
    refer: [PYQ, { what: 'Kannada grammar', where: 'Karnataka State Board Kannada textbooks, Classes 8-10', why: 'Your plan calls for grammar practice, and a printed grammar is safer than notes for details.', url: 'https://ktbs.kar.nic.in/' }],
    current: [{ issue: 'Reading practice', link: 'Read Prajavani or Vijaya Karnataka and translate two lines each day.', source: 'Kannada daily' }],
  },
  essay: {
    refer: [PYQ, { what: 'Data and examples', where: 'Economic Survey, NITI Aayog, National Statistics Office', why: 'Essays need current numbers and examples.', url: 'https://www.indiabudget.gov.in/economicsurvey/' }],
    current: [{ issue: 'Your issue cards', link: 'Use your issue cards as your example bank.', source: 'Issue cards on this site' }],
  },
}

const PRESS: CurrentItem = { issue: 'Latest updates', link: 'Search this topic on PIB, and add what matters to your issue cards.', ...PIB }

const SUBJECT_DEFAULTS: Record<string, ReferItem[]> = {
  'Ancient History': [{ ...ATLAS, why: 'Mark the sites named in this day\'s revision.' }],
  'Medieval History': [{ ...ATLAS, why: 'Mark the capitals, battles and trade towns.' }],
  'Modern History': [{ what: 'Rajiv Ahir, A Brief History of Modern India', where: 'Named in your plan. Not in your UPSC folder', why: 'Your plan\'s primary source until the notes for this day are written.' }],
  'Art & Culture': [{ what: 'Centre for Cultural Resources and Training', where: 'CCRT website', why: 'Your plan\'s reference for art forms.', url: 'https://ccrtindia.gov.in/' }],
  Polity: [{ what: 'Constitution of India', where: 'Legislative Department', why: 'Check article wording directly.', url: 'https://legislative.gov.in/constitution-of-india/' }, { what: 'M. Laxmikanth, Indian Polity', where: 'Named in your plan. You have notes on it only', why: 'Your plan\'s primary source until the notes for this day are written.' }],
  Geography: [ATLAS, { what: 'NCERT Geography XI and XII', where: 'NCERT free textbook site', why: 'Your plan\'s base source. You have only XII Part 1 in your folder.', url: 'https://ncert.nic.in/textbook.php' }],
  Economy: [{ what: 'Economic Survey and Union Budget', where: 'Government of India', why: 'Latest figures, which notes will date.', url: 'https://www.indiabudget.gov.in/' }, { what: 'RBI explainers', where: 'Reserve Bank of India', why: 'Official wording on monetary policy.', url: 'https://www.rbi.org.in/' }],
  Environment: [{ what: 'Ministry of Environment', where: 'Official site', why: 'Protected areas, conventions and rules.', url: 'https://moef.gov.in/' }],
  'Science & Technology': [{ what: 'ISRO and Department of Biotechnology', where: 'Official sites', why: 'Accurate mission and technology facts.', url: 'https://www.isro.gov.in/' }],
  'International Relations': [{ what: 'Country briefs', where: 'Ministry of External Affairs', why: 'Your plan\'s official source for bilateral relations.', url: 'https://www.mea.gov.in/' }],
  Governance: [{ what: '2nd ARC reports', where: 'Department of Administrative Reforms', why: 'Your plan cites these for Mains.', url: 'https://darpg.gov.in/' }],
  'Society & Social Justice': [{ what: 'NCERT Sociology XI and XII', where: 'NCERT free textbook site', why: 'Your plan\'s base source.', url: 'https://ncert.nic.in/textbook.php' }],
  Agriculture: [{ what: 'Economic Survey, agriculture chapter', where: 'Government of India', why: 'Current data on farming.', url: 'https://www.indiabudget.gov.in/economicsurvey/' }],
  'Disaster Management': [{ what: 'NDMA guidelines', where: 'National Disaster Management Authority', why: 'Your plan\'s official source.', url: 'https://ndma.gov.in/' }],
  'Internal Security': [{ what: 'Annual Report', where: 'Ministry of Home Affairs', why: 'Your plan\'s official source.', url: 'https://www.mha.gov.in/' }, { what: 'Cyber security advisories', where: 'CERT-In', why: 'Official source for cyber topics.', url: 'https://www.cert-in.org.in/' }],
  Ethics: [{ what: 'Lexicon or Subba Rao & Roy Chowdhury', where: 'Named in your plan. Not in your UPSC folder', why: 'Your plan\'s source until the notes for this day are written.' }, { what: '2nd ARC 4th Report, Ethics in Governance', where: 'Department of Administrative Reforms', why: 'Cited in your plan.', url: 'https://darpg.gov.in/' }],
  'World History': [{ what: 'NCERT History IX and X', where: 'NCERT free textbook site', why: 'Your plan\'s selective source.', url: 'https://ncert.nic.in/textbook.php' }],
  'Post-independence India': [{ what: 'Bipan Chandra, India Since Independence', where: 'Named in your plan. Not in your UPSC folder', why: 'Your plan\'s selective source.' }],
  Infrastructure: [{ what: 'Economic Survey', where: 'Government of India', why: 'Latest sector data.', url: 'https://www.indiabudget.gov.in/economicsurvey/' }],
  'Current Affairs': [{ what: 'One daily and one monthly compilation', where: 'Your choice, per your plan', why: 'Current affairs cannot be pre-written here. Use issue cards.' }],
  CSAT: [PYQ],
  Mixed: [PYQ],
}

export function beyondFor(key: string, subject: string): Beyond {
  return byTopic[key] ?? { refer: SUBJECT_DEFAULTS[subject] ?? [PYQ], current: [PRESS] }
}
