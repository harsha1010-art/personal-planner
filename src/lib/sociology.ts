import { daysBetween } from './plan'

/** NCERT Sociology textbooks (2026-27 reprint), as downloaded from ncert.nic.in. */
export const NCERT = {
  IS: 'Introducing Sociology (Class XI)',
  US: 'Understanding Society (Class XI)',
  ISoc: 'Indian Society (Class XII)',
  SCD: 'Social Change and Development in India (Class XII)',
} as const

export interface SocChapter {
  key: string
  paper: 'I' | 'II'
  /** Unit number as printed in UPSC's syllabus. */
  unit: string
  title: string
  /** UPSC's own wording for each part of the unit. */
  syllabus: string[]
  /** NCERT chapters that cover it, as book code and chapter number. */
  ncert: [keyof typeof NCERT, number][]
  /** Study sessions of about three hours. */
  sessions: number
  /** The earlier week note that covered this chapter before it was rewritten from the books. */
  draft: string
}

export const chapters: SocChapter[] = [
  { key: 'soc1-01', paper: 'I', unit: '1', title: 'Sociology: the discipline', sessions: 1, draft: 'soc-01', ncert: [['IS', 1], ['US', 4]], syllabus: ['Modernity and social changes in Europe and emergence of sociology.', 'Scope of the subject and comparison with other social sciences.', 'Sociology and common sense.'] },
  { key: 'soc1-02', paper: 'I', unit: '2', title: 'Sociology as science', sessions: 1, draft: 'soc-02', ncert: [['IS', 5]], syllabus: ['Science, scientific method and critique.', 'Major theoretical strands of research methodology.', 'Positivism and its critique.', 'Fact value and objectivity.', 'Non-positivist methodologies.'] },
  { key: 'soc1-03', paper: 'I', unit: '3', title: 'Research methods and analysis', sessions: 1, draft: 'soc-02', ncert: [['IS', 5]], syllabus: ['Qualitative and quantitative methods.', 'Techniques of data collection.', 'Variables, sampling, hypothesis, reliability and validity.'] },
  { key: 'soc1-04', paper: 'I', unit: '4(a)', title: 'Karl Marx', sessions: 2, draft: 'soc-03', ncert: [['US', 4]], syllabus: ['Historical materialism, mode of production, alienation, class struggle.'] },
  { key: 'soc1-05', paper: 'I', unit: '4(b)', title: 'Emile Durkheim', sessions: 2, draft: 'soc-04', ncert: [['US', 4]], syllabus: ['Division of labour, social fact, suicide, religion and society.'] },
  { key: 'soc1-06', paper: 'I', unit: '4(c)', title: 'Max Weber', sessions: 2, draft: 'soc-04', ncert: [['US', 4]], syllabus: ['Social action, ideal types, authority, bureaucracy, protestant ethic and the spirit of capitalism.'] },
  { key: 'soc1-07', paper: 'I', unit: '4(d)', title: 'Talcott Parsons', sessions: 1, draft: 'soc-04', ncert: [['IS', 2]], syllabus: ['Social system, pattern variables.'] },
  { key: 'soc1-08', paper: 'I', unit: '4(e)', title: 'Robert K. Merton', sessions: 1, draft: 'soc-04', ncert: [['IS', 2]], syllabus: ['Latent and manifest functions, conformity and deviance, reference groups.'] },
  { key: 'soc1-09', paper: 'I', unit: '4(f)', title: 'George Herbert Mead', sessions: 1, draft: 'soc-04', ncert: [['IS', 4]], syllabus: ['Self and identity.'] },
  { key: 'soc1-10', paper: 'I', unit: '5(a), 5(b)', title: 'Stratification: concepts and theories', sessions: 1, draft: 'soc-05', ncert: [['US', 1], ['ISoc', 5]], syllabus: ['Concepts: equality, inequality, hierarchy, exclusion, poverty and deprivation.', 'Theories of social stratification: structural functionalist theory, Marxist theory, Weberian theory.'] },
  { key: 'soc1-11', paper: 'I', unit: '5(c), 5(d)', title: 'Dimensions of stratification and social mobility', sessions: 1, draft: 'soc-05', ncert: [['US', 1], ['IS', 2], ['ISoc', 5]], syllabus: ['Dimensions: social stratification of class, status groups, gender, ethnicity and race.', 'Social mobility: open and closed systems, types of mobility, sources and causes of mobility.'] },
  { key: 'soc1-12', paper: 'I', unit: '6', title: 'Work and economic life', sessions: 1, draft: 'soc-05', ncert: [['IS', 3], ['ISoc', 4], ['SCD', 5]], syllabus: ['Social organization of work in different types of society: slave society, feudal society, industrial/capitalist society.', 'Formal and informal organization of work.', 'Labour and society.'] },
  { key: 'soc1-13', paper: 'I', unit: '7', title: 'Politics and society', sessions: 2, draft: 'soc-06', ncert: [['IS', 3], ['SCD', 8]], syllabus: ['Sociological theories of power.', 'Power elite, bureaucracy, pressure groups, and political parties.', 'Nation, state, citizenship, democracy, civil society, ideology.', 'Protest, agitation, social movements, collective action, revolution.'] },
  { key: 'soc1-14', paper: 'I', unit: '8', title: 'Religion and society', sessions: 1, draft: 'soc-06', ncert: [['IS', 3]], syllabus: ['Sociological theories of religion.', 'Types of religious practices: animism, monism, pluralism, sects, cults.', 'Religion in modern society: religion and science, secularization, religious revivalism, fundamentalism.'] },
  { key: 'soc1-15', paper: 'I', unit: '9', title: 'Systems of kinship', sessions: 1, draft: 'soc-06', ncert: [['IS', 3], ['ISoc', 3]], syllabus: ['Family, household, marriage.', 'Types and forms of family.', 'Lineage and descent.', 'Patriarchy and sexual division of labour.', 'Contemporary trends.'] },
  { key: 'soc1-16', paper: 'I', unit: '10', title: 'Social change in modern society', sessions: 2, draft: 'soc-07', ncert: [['US', 2], ['SCD', 6], ['IS', 3]], syllabus: ['Sociological theories of social change.', 'Development and dependency.', 'Agents of social change.', 'Education and social change.', 'Science, technology and social change.'] },

  { key: 'soc2-01', paper: 'II', unit: 'A(i)', title: 'Perspectives on the study of Indian society', sessions: 2, draft: 'soc-08', ncert: [['US', 5], ['ISoc', 1]], syllabus: ['Indology (G.S. Ghurye).', 'Structural functionalism (M.N. Srinivas).', 'Marxist sociology (A.R. Desai).'] },
  { key: 'soc2-02', paper: 'II', unit: 'A(ii)', title: 'Impact of colonial rule on Indian society', sessions: 1, draft: 'soc-08', ncert: [['SCD', 1], ['SCD', 2]], syllabus: ['Social background of Indian nationalism.', 'Modernization of Indian tradition.', 'Protests and movements during the colonial period.', 'Social reforms.'] },
  { key: 'soc2-03', paper: 'II', unit: 'B(i)', title: 'Rural and agrarian social structure', sessions: 1, draft: 'soc-09', ncert: [['SCD', 4], ['US', 2]], syllabus: ['The idea of Indian village and village studies.', 'Agrarian social structure: evolution of land tenure system, land reforms.'] },
  { key: 'soc2-04', paper: 'II', unit: 'B(ii)', title: 'Caste system', sessions: 2, draft: 'soc-10', ncert: [['ISoc', 3], ['ISoc', 5]], syllabus: ['Perspectives on the study of caste systems: G.S. Ghurye, M.N. Srinivas, Louis Dumont, Andre Beteille.', 'Features of caste system.', 'Untouchability: forms and perspectives.'] },
  { key: 'soc2-05', paper: 'II', unit: 'B(iii)', title: 'Tribal communities in India', sessions: 1, draft: 'soc-11', ncert: [['ISoc', 3], ['ISoc', 5]], syllabus: ['Definitional problems.', 'Geographical spread.', 'Colonial policies and tribes.', 'Issues of integration and autonomy.'] },
  { key: 'soc2-06', paper: 'II', unit: 'B(iv)', title: 'Social classes in India', sessions: 1, draft: 'soc-11', ncert: [['ISoc', 4], ['SCD', 5]], syllabus: ['Agrarian class structure.', 'Industrial class structure.', 'Middle classes in India.'] },
  { key: 'soc2-07', paper: 'II', unit: 'B(v)', title: 'Systems of kinship in India', sessions: 1, draft: 'soc-12', ncert: [['ISoc', 3]], syllabus: ['Lineage and descent in India.', 'Types of kinship systems.', 'Family and marriage in India.', 'Household dimensions of the family.', 'Patriarchy, entitlements and sexual division of labour.'] },
  { key: 'soc2-08', paper: 'II', unit: 'B(vi)', title: 'Religion and society in India', sessions: 1, draft: 'soc-12', ncert: [['ISoc', 6]], syllabus: ['Religious communities in India.', 'Problems of religious minorities.'] },
  { key: 'soc2-09', paper: 'II', unit: 'C(i)', title: 'Visions of social change in India', sessions: 1, draft: 'soc-14', ncert: [['SCD', 3]], syllabus: ['Idea of development planning and mixed economy.', 'Constitution, law and social change.', 'Education and social change.'] },
  { key: 'soc2-10', paper: 'II', unit: 'C(ii)', title: 'Rural and agrarian transformation in India', sessions: 1, draft: 'soc-09', ncert: [['SCD', 4]], syllabus: ['Programmes of rural development, Community Development Programme, cooperatives, poverty alleviation schemes.', 'Green revolution and social change.', 'Changing modes of production in Indian agriculture.', 'Problems of rural labour, bondage, migration.'] },
  { key: 'soc2-11', paper: 'II', unit: 'C(iii)', title: 'Industrialization and urbanisation in India', sessions: 1, draft: 'soc-11', ncert: [['SCD', 5], ['SCD', 1], ['US', 2]], syllabus: ['Evolution of modern industry in India.', 'Growth of urban settlements in India.', 'Working class: structure, growth, class mobilization.', 'Informal sector, child labour.', 'Slums and deprivation in urban areas.'] },
  { key: 'soc2-12', paper: 'II', unit: 'C(iv)', title: 'Politics and society in India', sessions: 1, draft: 'soc-14', ncert: [['ISoc', 6], ['SCD', 3]], syllabus: ['Nation, democracy and citizenship.', 'Political parties, pressure groups, social and political elite.', 'Regionalism and decentralization of power.', 'Secularization.'] },
  { key: 'soc2-13', paper: 'II', unit: 'C(v)', title: 'Social movements in modern India', sessions: 2, draft: 'soc-13', ncert: [['SCD', 8]], syllabus: ['Peasants and farmers movements.', 'Women\'s movement.', 'Backward classes and Dalit movement.', 'Environmental movements.', 'Ethnicity and identity movements.'] },
  { key: 'soc2-14', paper: 'II', unit: 'C(vi)', title: 'Population dynamics', sessions: 1, draft: 'soc-14', ncert: [['ISoc', 2]], syllabus: ['Population size, growth, composition and distribution.', 'Components of population growth: birth, death, migration.', 'Population policy and family planning.', 'Emerging issues: ageing, sex ratios, child and infant mortality, reproductive health.'] },
  { key: 'soc2-15', paper: 'II', unit: 'C(vii)', title: 'Challenges of social transformation', sessions: 2, draft: 'soc-14', ncert: [['ISoc', 5], ['ISoc', 6], ['US', 3], ['SCD', 6]], syllabus: ['Crisis of development: displacement, environmental problems and sustainability.', 'Poverty, deprivation and inequalities.', 'Violence against women.', 'Caste conflicts.', 'Ethnic conflicts, communalism, religious revivalism.', 'Illiteracy and disparities in education.'] },
]

export const chapterByKey = new Map(chapters.map((c) => [c.key, c]))

// First reading of both papers runs from 2 November to 31 January, as you planned.
const START = '2026-11-02'
const READING_DAYS = 91
const totalSessions = chapters.reduce((n, c) => n + c.sessions, 0)

const addDays = (iso: string, n: number) => {
  const d = new Date(`${iso}T00:00:00Z`)
  d.setUTCDate(d.getUTCDate() + n)
  return d.toISOString().slice(0, 10)
}

/** The dates each chapter is scheduled for, in proportion to its sessions. */
export const chapterDates = new Map<string, { from: string; to: string }>()
let done = 0
for (const c of chapters) {
  const from = Math.round((done / totalSessions) * READING_DAYS)
  done += c.sessions
  const to = Math.round((done / totalSessions) * READING_DAYS) - 1
  chapterDates.set(c.key, { from: addDays(START, from), to: addDays(START, Math.max(from, to)) })
}

/** The chapter scheduled for a date. After January it returns the last chapter, which revision then works from. */
export function chapterFor(date: string) {
  const n = daysBetween(START, date)
  if (n < 0) return chapters[0]
  return chapters.find((c) => date <= chapterDates.get(c.key)!.to) ?? chapters[chapters.length - 1]
}

export const paperTitle = { I: 'Paper I: Fundamentals of Sociology', II: 'Paper II: Indian Society, Structure and Change' } as const
