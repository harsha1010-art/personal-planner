import type { TopicNote } from './types'

export const note: TopicNote = {
  day: 'soc-12',
  summary: 'Lineage, kinship zones, the joint family debate, household, marriage, patriarchy and entitlements, then religious communities and minorities. Paper II, Units B(v) and B(vi).',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Family and religion look private, yet they decide property, marriage, status and identity. Two syllabus units meet here. **B(v) Systems of Kinship:** lineage and descent, types of kinship systems, family and marriage, household dimensions, and patriarchy, entitlements and sexual division of labour. **B(vi) Religion and Society:** religious communities and problems of religious minorities. The central question for both is how far modernity changes these institutions, and how far they absorb modernity on their own terms.' },

    { t: 'h', text: 'Lineage and descent' },
    { t: 'table', caption: 'Descent decides who you belong to, and often who inherits.', head: ['Type', 'Meaning', 'Indian example'], rows: [
      ['Patrilineal', 'Traced through men; usually with patrilocal residence', 'Most of India'],
      ['Matrilineal', 'Traced through women; authority often with brother or maternal uncle', 'Khasi and Garo of Meghalaya; Nairs of Kerala before reform'],
      ['Lineage and clan', 'Lineage: traceable common ancestor. Clan: claimed, often mythical ancestor', 'Gotra and bhaiband in north India; clans among tribes'],
    ] },
    { t: 'p', text: 'Matriliny is not matriarchy. Among the Khasi, the youngest daughter (**ka khadduh**) holds ancestral property, but men still have much of the authority. **Tiplut Nongbri** shows how development and male-led politics strain Khasi matriliny. Among the Nairs, **Kathleen Gough** used the taravad and its sambandham unions to debate how marriage should be defined at all. Kerala law later ended the joint matrilineal household (Kerala Joint Hindu Family System (Abolition) Act, 1975).' },

    { t: 'h', text: 'Types of kinship systems' },
    { t: 'table', caption: 'Irawati Karve, Kinship Organisation in India: kinship differs by region.', head: ['Karve\'s zone', 'Main rule', 'Note'], rows: [
      ['North', 'Village and gotra exogamy; **no** close kin marriage', 'Marriage is hierarchical: bride-givers lower than bride-takers'],
      ['South', 'Cross-cousin and, in places, uncle-niece marriage; kin marriage within a small circle', 'Marriage strengthens existing ties'],
      ['Central', 'Mix of north and south features', 'Maharashtra, Gujarat, parts of Rajasthan'],
      ['East', 'Distinct patterns, with tribal diversity', 'Includes matrilineal north-east groups'],
    ] },
    { t: 'compare', caption: 'Two ways of reading kinship.', columns: [
      { title: 'Descent emphasis', items: ['Lineage is the key group', 'Fortes and Evans-Pritchard in African studies', 'Useful for north Indian patriliny'] },
      { title: 'Alliance emphasis', items: ['**Louis Dumont:** in Dravidian kinship, marriage alliance is inherited across generations', 'Terms sort kin into cross and parallel', '**Thomas Trautmann** developed Dravidian kinship further'] },
    ] },

    { t: 'h', text: 'The joint family debate' },
    { t: 'p', text: 'The classic claim, from **Parsons** and **William Goode**, is that industry and cities favour the small conjugal family. Indian sociology largely shows a more complicated picture.' },
    { t: 'table', head: ['Thinker', 'Finding', 'Why it matters'], rows: [
      ['**A.M. Shah**', '**Household dimension:** separates household (co-residence) from family (kin). Small households are old, so nuclear residence is not proof of decline.', 'Fits syllabus unit B(v)(d) exactly'],
      ['**I.P. Desai**', 'Mahuva study: jointness is a matter of degree and obligations, not just residence', 'Functional jointness'],
      ['**K.M. Kapadia**', 'Sees change, but joint sentiment persists', 'Classic text on marriage and family'],
      ['**M.S. Gore**', 'Agarwals: urban families change attitudes in stages, with kin ties surviving', 'Urbanisation is not a straight break'],
      ['**Milton Singer**', 'Madras industrial leaders kept joint families and adapted them to business', 'Against Weber\'s view of Hindu ethics, and against Goode'],
      ['**T.N. Madan**', 'Kashmiri Pandits: family as a process and a developmental cycle', 'Avoid snapshot conclusions'],
      ['**Pauline Kolenda**', 'Compared regions and castes: household form varies widely', 'No single Indian family'],
      ['**Patricia Uberoi**', 'Family and marriage as ideals, shown through law and popular culture', 'Modern family as an ideology'],
    ] },
    { t: 'flow', caption: 'The developmental cycle explains why one survey snapshot misleads.', steps: [
      { title: 'Nuclear', sub: 'Couple and children' },
      { title: 'Sons marry', sub: 'Supplemented or lineal joint' },
      { title: 'Parents age', sub: 'Co-residence with a son' },
      { title: 'Death and partition', sub: 'New nuclear units' },
    ] },
    { t: 'note', kind: 'trap', title: 'Three different words', text: '**Family** is a set of kin. **Household** is who lives and eats together. **Jointness** is about obligation and shared property. A family can be joint in property and separate in residence. Migrant households often stretch across places, so do not read residence alone.' },

    { t: 'h', text: 'Marriage in India' },
    { t: 'table', head: ['Theme', 'What to write', 'Thinker or case'], rows: [
      ['Endogamy', 'Caste reproduced through marriage; caste and gender tied together', '**Ambedkar**, Castes in India (1916)'],
      ['Arranged and love marriage', 'Love marriage as a claim on the state; family pushback', '**Perveez Mody**, The Intimate State'],
      ['Honour and khap', 'Control of women\'s marriage choices', '**Prem Chowdhry**; *Shakti Vahini* (2018) against khap interference'],
      ['Dowry', 'Spread beyond old groups, linked to the market and consumption', '**M.N. Srinivas** on modern dowry; **Ursula Sharma**; Dowry Prohibition Act, 1961'],
      ['Long-distance marriages', 'Skewed sex ratios lead to brides brought from other regions', '**Ravinder Kaur**'],
      ['Polyandry', 'Fraternal polyandry in Himalayan groups; tied to land', '**Gerald Berreman**, **D.N. Majumdar**'],
      ['Age at marriage', 'Women aged 20-24 married before 18 fell from 47.4% (NFHS-3, 2005-06) to 26.8% (NFHS-4, 2015-16) and 20.1% (NFHS-6, 2023-24; reported figure, check the fact sheet)', 'Prohibition of Child Marriage Act, 2006'],
      ['Purdah', 'Seclusion and honour among Muslim and Hindu groups', '**Patricia Jeffery**, Frogs in a Well (Pirzada women, Delhi)'],
    ] },
    { t: 'timeline', caption: 'Law changing family and marriage.', items: [
      { when: '1954-56', what: 'Special Marriage Act (1954); **Hindu Code** (1955-56) on marriage, succession, adoption, guardianship.' },
      { when: '1985-86', what: '*Shah Bano* and the Muslim Women Act: maintenance becomes a fight over personal law.' },
      { when: '2005', what: 'Hindu Succession amendment makes daughters coparceners; Domestic Violence Act. *Vineeta Sharma* (2020) settled the right as by birth.' },
      { when: '2017-19', what: '*Shayara Bano* strikes down instant triple talaq (2017), followed by a 2019 Act.' },
      { when: '2018', what: '*Navtej Johar* (Section 377) and *Joseph Shine* (adultery).' },
      { when: '2023', what: '*Supriyo*: the Supreme Court declines to read same-sex marriage into the law.' },
    ] },

    { t: 'h', text: 'Patriarchy, entitlements and sexual division of labour' },
    { t: 'table', head: ['Thinker', 'Concept', 'Indian use'], rows: [
      ['**Uma Chakravarti**', '**Brahmanical patriarchy**', 'Control of women\'s sexuality preserves caste purity'],
      ['**Leela Dube**', 'Seed and earth symbolism; daughters as temporary members', 'Kinship shapes women\'s lives from childhood'],
      ['**Bina Agarwal**', 'A Field of One\'s Own: **land rights** matter as well as jobs', 'Inheritance law vs actual control'],
      ['**Amartya Sen**', '**Entitlements** and **cooperative conflict** in the household', 'Why food, care and money are unequal'],
      ['**Maria Mies**', '**Housewifisation**: women\'s work made to look like leisure', 'The lace makers of Narsapur'],
      ['**Deniz Kandiyoti**', '**Bargaining with patriarchy**', 'Women accept some limits in exchange for security'],
      ['**Sylvia Walby**', 'Private and public patriarchy', 'Patriarchy moving from family to the labour market and state'],
      ['**Dyson and Moore**', 'North and south kinship patterns affect female autonomy and fertility', 'Regional demography'],
    ] },
    { t: 'p', text: '**Sexual division of labour** covers more than paid work. Unpaid care, seed-saving, water collection and fuel work stay uncounted. As men migrate, women take on more farm work without gaining land, which is often called feminisation of agriculture.' },

    { t: 'h', text: 'Religious communities in India' },
    { t: 'p', text: 'Census 2011 counted **Hindus at 79.8%** and **Muslims at 14.2%** of a population of about 121 crore. The others are Christians, Sikhs, Buddhists, Jains and those of other religions and persuasions, including tribal faiths. Take their exact shares from the Census tables. Religious communities are not single blocks: each is divided by caste, region, language and sect.' },
    { t: 'table', head: ['Community', 'Internal sociology', 'Thinker or source'], rows: [
      ['Hindus', 'Sanskritic and local traditions; **universalisation and parochialisation**. Great and little traditions.', '**Srinivas** on the Coorgs; **Marriott**; **Redfield** and **Singer**'],
      ['Muslims', 'Ashraf, Ajlaf, Arzal: caste-like divisions despite doctrine; regional cultures', '**Imtiaz Ahmad**'],
      ['Christians', 'Syrian Christians and Dalit converts; caste survives conversion', '**Rowena Robinson**'],
      ['Sikhs', 'Egalitarian doctrine, yet Jat and Dalit Sikh divides', '**Surinder Jodhka**'],
      ['Buddhists', 'Ambedkar\'s conversion at Nagpur in 1956 as a Dalit social movement', '**Eleanor Zelliot**'],
      ['Tribal faiths', 'Sarna and others; contested counting', 'Discuss with soc-11'],
    ] },

    { t: 'h', text: 'Problems of religious minorities' },
    { t: 'p', text: 'The Constitution gives **Articles 25-30**. The **National Commission for Minorities Act, 1992** recognises notified minorities at the Centre (Muslims, Christians, Sikhs, Buddhists, Parsis, Jains). *T.M.A. Pai* (2002) treats minority status for Article 30 at state level.' },
    { t: 'wheel', caption: 'Six problems to use as an answer structure.', center: 'Minority problems', spokes: ['Security and communal violence', 'Socio-economic disadvantage', 'Identity and personal law', 'Residential and social segregation', 'Political under-representation', 'Caste within minorities'] },
    { t: 'list', items: [
      '**Sachar Committee** (report 2006): education and jobs for Muslims lagged, and communities felt insecure. **Ranganath Misra Commission** (report 2007) recommended quotas, a contested view.',
      '**Paul Brass:** the **institutionalised riot system**, where riots are produced by organised actors. **Ashutosh Varshney:** cities with inter-communal civic links keep peace better. **Gyanendra Pandey:** colonial rule helped construct communalism as a category.',
      '**Dalit Christians and Muslims:** the Constitution (Scheduled Castes) Order, 1950, limits SC status to Hindus, Sikhs and Buddhists. Extending it to Dalit Christians and Muslims remains a contested demand.',
      '**Gayer and Jaffrelot:** urban Muslims and residential segregation. **Zoya Hasan:** representation and the state.',
    ] },
    { t: 'note', kind: 'mains', title: 'Secularisation link', text: 'The full secularisation debate (**Srinivas**, **T.N. Madan**, **Ashis Nandy**, **Rajeev Bhargava**) is in soc-16. Communalism and revivalism are in soc-14.' },
    { t: 'note', kind: 'trap', title: 'Common mix-ups', text: 'Do not credit Sanskritisation to Marriott or universalisation to Srinivas. Karve gives the kinship zones, and Dumont the Dravidian alliance theory. Shah speaks of household, and Desai of degree of jointness.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Has the joint family really declined? Can law change marriage practice? Patriarchy and land rights. Kinship and fertility across north and south. Socio-economic status of Muslims. Caste among minorities. Structure: define the terms, give two or three thinkers, an Indian case, a law, and data with its year. Then conclude that change is uneven across class, region and caste.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Karve: four zones. Dumont: alliance. Shah: household dimension.',
      'Singer: Madras industrialists. Desai: Mahuva. Madan: Kashmiri Pandits. Gore: Agarwals.',
      'Chakravarti: Brahmanical patriarchy. Agarwal: land. Mies: housewifisation.',
      'Imtiaz Ahmad: caste among Muslims. Brass: riot system. Varshney: civic links.',
      'Census 2011: Hindus 79.8%, Muslims 14.2%.',
    ] },
  ],
  sources: [
    { label: 'UPSC Sociology syllabus, Paper II, B(v) and B(vi), from your upsc-syllabus.pdf, p. 75' },
    { label: 'PIB, RGI release on Census 2011 population by religious communities (read as a search excerpt, not opened)' },
    { label: 'NFHS-6 child marriage figure: secondary reports, and the official fact sheet could not be opened. Check it.' },
    { label: 'Thinkers and cases named here are from the standard literature and were not re-opened for this note. Use them as further reading, and check a book before quoting it.' },
  ],
  beyond: {
    refer: [
      { what: 'Patricia Uberoi (ed.), Family, Kinship and Marriage in India', where: 'Your library', why: 'The best single reader on this unit, including Karve, Dumont and Shah.' },
      { what: 'NFHS-6 fact sheets', where: 'NFHS, IIPS', why: 'Check figures such as age at marriage directly, as this note could not open the file.', url: 'https://www.nfhsiips.in/nfhsuser/nfhs6.php' },
      { what: 'Sachar Committee report', where: 'Ministry of Minority Affairs', why: 'Exact education and job data for Muslims. Figures are left out of this note.' },
    ],
    current: [
      { issue: 'NFHS-6', link: 'NFHS-6 (2023-24) was released in May 2026. It updates family, fertility and age at marriage data.', source: 'NFHS, IIPS', url: 'https://www.nfhsiips.in/nfhsuser/nfhs6.php' },
      { issue: 'Uttarakhand UCC', link: 'Reports say the code took effect on 27 January 2025, and it requires registration of live-in relationships. A strong example for law, marriage and privacy.', source: 'Deccan Herald', url: 'https://www.deccanherald.com/india/uttarakhand/only-one-live-in-relationship-registered-in-10-days-after-ucc-implementation-in-uttarakhand-3390741' },
      { issue: 'Census 2027', link: 'Caste will be recorded in the population enumeration phase due in February 2027. Use the new data for caste among religious communities once it is released.', source: 'Ministry of Home Affairs, as reported by Business Standard, January 2026', url: 'https://www.business-standard.com/india-news/census-2027-centre-notifies-first-phase-house-listing-april-1-126010701331_1.html' },
    ],
  },
}
