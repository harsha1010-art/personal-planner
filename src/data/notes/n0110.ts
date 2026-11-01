import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-01-10',
  summary: 'What colonial rule did to India\'s economy: the three land settlements compared, the drain of wealth, deindustrialisation, famines, and every major civil, tribal and peasant uprising with its leader, place and result.',
  minutes: 28,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Colonial rule tied India to Britain as a supplier of raw materials, a market for manufactures and a source of revenue. Land revenue paid for the empire, so the land settlements shaped rural life. Those pressures, along with forest laws and moneylenders, produced a long series of uprisings before the Congress existed.' },
    { t: 'p', text: 'Prelims tests this through the features of each settlement and pairs of revolts and leaders. Mains asks about the drain, deindustrialisation, and why these revolts failed to become a national movement.' },
    { t: 'flow', caption: 'R. P. Dutt\'s three stages of colonial exploitation. A useful frame for Mains.', steps: [
      { title: 'Mercantile, 1757-1813', sub: 'Monopoly trade and plunder; Bengal\'s revenue buys exports' },
      { title: 'Free trade, 1813-1858', sub: 'British goods flood India; India exports raw materials' },
      { title: 'Finance capital, after 1858', sub: 'British investment in railways, banks and plantations; guaranteed returns' },
    ] },

    { t: 'h', text: 'The three land settlements' },
    { t: 'table', caption: 'The most testable table in this topic. Shares of area are rough figures used in textbooks.', head: ['', 'Permanent (Zamindari)', 'Ryotwari', 'Mahalwari'], rows: [
      ['**Author**', '**Cornwallis**, 1793 (John Shore assisted)', '**Alexander Read** and **Thomas Munro**', '**Holt Mackenzie**, 1822; later Bird and Thomson'],
      ['**Region**', 'Bengal, Bihar, Orissa, Varanasi, north Madras', 'Madras, Bombay, parts of Assam and Coorg', 'North-Western Provinces (Agra area), Punjab, parts of Central India'],
      ['**Share of area**', 'About 19%', 'About 51%', 'About 30%'],
      ['**Who pays**', 'Zamindar', 'Ryot (cultivator)', 'Village or mahal jointly, through a headman (lambardar)'],
      ['**Who owns**', 'Zamindar', 'Ryot, subject to paying', 'Village community'],
      ['**Demand**', 'Fixed forever; state took 10/11 of rent, zamindar 1/11', 'Reassessed periodically; high, about one-half to one-third', 'Reassessed periodically; about 80% of rental in 1822, cut to about two-thirds in 1833'],
      ['**Main defect**', 'Absentee landlords, subinfeudation, tenants unprotected; state lost rising income', 'Over-assessment; moneylender debt', 'Burden high at first; village elite gained'],
    ] },
    { t: 'list', items: [
      '**Before these:** Warren Hastings\'s farming system (izaradari) of 1772 auctioned revenue rights to the highest bidder, first for five years and then yearly.',
      '**Sunset law:** under the Permanent Settlement, if a zamindar missed the fixed date, the estate was sold. Many old families lost lands and a new urban class bought them.',
      '**Tenancy laws came later:** Bengal Rent Act 1859 and **Bengal Tenancy Act 1885**. The Deccan got the Agriculturists\' Relief Act 1879, and Punjab the **Land Alienation Act 1900**.',
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2024, 2026 and 2018', text: '**2024:** it is false that Ryotwari peasants were exempt from revenue in bad harvests. It is true that a zamindar under the Permanent Settlement who failed to pay on time would lose his zamindari. **2026 (Awadh, after annexation in 1856):** the Summary Settlement treated taluqdars as outsiders and tried to take revenue directly from peasants. The claim that they kept their arms and forts is wrong. This link explains why Awadh taluqdars joined the revolt in 1857. **2018:** one result of British rule in the nineteenth century was **commercialisation of agriculture**, not growth in handicraft exports.' },

    { t: 'h', text: 'Drain, ruin of crafts, famine' },
    { t: 'compare', caption: 'Moderate nationalists built the economic critique of colonialism. It was their most lasting contribution.', columns: [
      { title: 'Drain of wealth', items: ['**Dadabhai Naoroji:** Poverty and Un-British Rule in India (book, 1901; first argued from 1867)', '**R. C. Dutt:** Economic History of India', '**M. G. Ranade**, **G. V. Joshi**, **William Digby** also wrote on it', 'Channels: **Home Charges** (pensions, India Office, interest on debt), salaries and profits sent home', 'No matching return flow to India'] },
      { title: 'Deindustrialisation', items: ['Indian cloth faced tariffs in Britain', 'British machine goods entered at low duty after 1813', 'Loss of court patronage with Indian rulers gone', 'Weavers moved to farming, pressing on land', 'Scholars debate the scale: Morris D. Morris questioned the decline, while Indian nationalist writers and many later historians argue it was real', 'Factories arrived late: Bombay cotton mill (C. N. Davar, 1854), jute at Rishra (1855), **Tata steel (1907)**'] },
    ] },
    { t: 'list', items: [
      '**Exports (Prelims 2018):** cotton, silk, saltpetre and opium were the Company\'s staple exports from Bengal in the mid-eighteenth century.',
      '**Railways:** first line Bombay to Thane, 1853. Built to link ports with hinterlands, on guaranteed returns to British investors. Unintended effects included national unity.',
      '**Currency (Prelims 2026):** the **Hilton-Young Commission (1926)** fixed the rupee-sterling rate. The question asked why the British adopted that rate. Nationalists attacked the ratio of 1s 6d as hurting Indian exporters.',
      '**Famines:** Bengal 1770, Orissa 1866, 1876-78, 1896-97, 1899-1900, **Bengal 1943**. Commissions: **Strachey (1880)**, **Lyall (1898)**, **MacDonnell (1901)**. Railways moved food, but exports went on during scarcity.',
    ] },
    { t: 'note', kind: 'trap', title: 'Indigo: two different reasons', text: 'The revolt of 1859-60 did not end indigo. Cultivation fell around 1900 because **synthetic dye** made it unprofitable. **Prelims 2020** asked exactly this, with "peasant resistance" as the tempting wrong option.' },

    { t: 'h', text: 'Civil uprisings' },
    { t: 'table', caption: 'Led by dispossessed rulers, zamindars, religious men and ex-soldiers. They looked backwards, often to restoring old rule.', head: ['Revolt', 'Date', 'Place', 'Leader', 'Note'], rows: [
      ['Sanyasi-Fakir', '1760s-1800', 'Bengal', 'Majnu Shah, Bhawani Pathak, Devi Chaudhurani', 'Basis of Bankim\'s **Anandamath**'],
      ['Poligars', '1790s-1805', 'Tamil country', '**Kattabomman**, Marudu brothers', 'Against Company revenue demands'],
      ['Velu Thampi', '1808-09', 'Travancore', 'Velu Thampi', 'Diwan against the subsidiary burden'],
      ['**Paika**', '**1817**', 'Khurda, Odisha', '**Bakshi Jagabandhu**', 'Militia lost lands'],
      ['Ramosi', '1820s', 'Western Ghats', 'Chittur Singh, Umaji Naik', 'Maratha ex-employees'],
      ['Kittur', '1824', 'Karnataka', '**Rani Chennamma**, Rayanna', 'Adoption refused'],
      ['Ahom', '1828', 'Assam', 'Gomadhar Konwar', 'After Burma War'],
      ['Faraizi', '1818 on', 'East Bengal', '**Haji Shariatullah**, Dudu Miyan', 'Religious, and against zamindars'],
      ['Wahabi', '1820s-70', 'Patna centre', '**Syed Ahmad of Rae Bareli**', 'Wide network; crushed by 1870s'],
      ['Titu Mir', '1831', 'Barasat, Bengal', 'Titu Mir', 'Bamboo fort'],
      ['**Kuka**', '1870s', 'Punjab', '**Ram Singh**', 'Namdhari Sikhs; exiled to Rangoon'],
    ] },

    { t: 'h', text: 'Tribal uprisings' },
    { t: 'p', text: 'The common cause was the arrival of **dikus** (outsiders: moneylenders, traders, officials) with new land law. Forest laws of **1865 and 1878** closed access to forest. Tribal revolts were often more violent and locally rooted, with leaders who claimed divine sanction.' },
    { t: 'table', head: ['Revolt', 'Date', 'Place', 'Leader', 'Remember'], rows: [
      ['Chuar', '1760s-90s', 'Midnapore, Bankura', 'Durjan Singh', 'Over land and famine'],
      ['Bhil', '1818-31', 'Khandesh', 'Seva Ram', 'Later: Govind Guru, Mangarh, 1913'],
      ['Kol', '1831-32', 'Chota Nagpur', 'Buddho Bhagat', 'Land to outsiders'],
      ['Khasi', '1829-33', 'Meghalaya', 'Tirot Sing', 'Road through hills'],
      ['Khond', '1837-56', 'Odisha', 'Chakra Bisoi', 'British ban on human sacrifice'],
      ['**Santhal (Hul)**', '**1855-56**', 'Rajmahal hills', '**Sidhu and Kanhu**', 'Moneylenders; **Santhal Parganas** created'],
      ['Koya', '1879-80', 'Andhra', 'Tomma Sora', 'Rampa area'],
      ['**Munda (Ulgulan)**', '**1899-1900**', 'Chota Nagpur', '**Birsa Munda**', 'Loss of **khuntkatti** land; Chotanagpur Tenancy Act, **1908**'],
      ['Tana Bhagat', '1914 on', 'Chota Nagpur', 'Jatra Oraon', 'Oraon; later Gandhian'],
      ['**Rampa**', '**1922-24**', 'Andhra', '**Alluri Sitarama Raju**', 'Forest law; guerrilla war'],
      ['Naga', '1930s', 'Manipur, Naga hills', 'Jadonang, **Rani Gaidinliu**', 'Heraka; Nehru called her "Rani"'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims on tribal revolts', text: '**2020:** Ulgulan or the "Great Tumult" means Birsa Munda\'s revolt of 1899-1900. **2018:** after the Santhal uprising, the colonial state created the Santhal Parganas, and the question also asked about a bar on land transfer from Santhal to non-Santhal. Know that the Parganas were the direct response. Later tenancy law carried the land protection forward.' },

    { t: 'h', text: 'Peasant movements' },
    { t: 'timeline', caption: 'The shift to watch: from local protest against planters and moneylenders, to tie-ups with the Congress and the Kisan Sabha, and then Left-led struggles.', items: [
      { when: 'Indigo Revolt, 1859-60', what: 'Bengal, led by **Digambar and Bishnu Biswas** at Nadia. Planters forced indigo on peasants. **Dinabandhu Mitra\'s Neel Darpan** exposed it. An Indigo Commission (1860) followed. Hindu Patriot (Harish Chandra Mukherjee) supported the peasants.' },
      { when: 'Pabna, 1873-76', what: 'East Bengal, Yusufshahi pargana. Agrarian League, **Ishan Roy** and Shambu Pal. Mostly legal resistance. Led towards the Bengal Tenancy Act 1885.' },
      { when: 'Deccan Riots, 1875', what: 'Began at **Supe**, Poona. Targeted Marwari and Gujarati moneylenders; debt bonds were burnt. Agriculturists\' Relief Act 1879.' },
      { when: 'Champaran, Kheda, 1917-18', what: 'Gandhi linked peasant grievances to national politics. **Prelims 2018:** Champaran mattered for "joining peasant unrest to India\'s National Movement".' },
      { when: 'Awadh Kisan Sabha, 1918-21', what: '**Baba Ramchandra** led; Gauri Shankar Mishra and Indra Narain Dwivedi organised; Nehru toured. Then the **Eka Movement** (1921-22), led by **Madari Pasi** in Hardoi and Bahraich, on high rents.' },
      { when: 'Mappila, 1921', what: 'Malabar, against Hindu landlords and the British, tied to Khilafat. Turned communal in places. **Wagon tragedy**, November 1921.' },
      { when: 'Bardoli, 1928', what: 'Gujarat. **Vallabhbhai Patel** led against a 30% revenue hike; he earned the title **Sardar**. An inquiry cut it to about 6%.' },
      { when: 'All India Kisan Sabha, 1936', what: 'Founded at Lucknow. **Swami Sahajanand Saraswati** as president; N. G. Ranga key.' },
      { when: 'Tebhaga, 1946-47', what: 'Bengal. Sharecroppers demanded **two-thirds** of the crop, led by the Kisan Sabha and Communists.' },
      { when: 'Telangana, 1946-51', what: 'Against Nizam\'s landlords; largest guerrilla peasant war of the period.' },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026: Eka and Bardoli', text: 'UPSC set one against the other. Correct: Bardoli was a campaign against enhanced land revenue, and Eka was a protest against excessive rent. False: Eka was run by Congress, taluqdars led it, or Bardoli took place in Saurashtra. Bardoli is in south Gujarat; Eka in the Awadh area, not Varanasi. **2019:** the All India Kisan Sabha was matched with Sahajanand Saraswati.' },
    { t: 'note', kind: 'trap', title: 'Do not confuse', text: '**Kol, Ho, Munda, Oraon** are all Chota Nagpur but differ in date. **Rampa** has two episodes: 1879 and 1922-24. Tebhaga means **two-thirds** to the sharecropper, not one-third. **Mappila 1921** is not the same as the Moplah uprisings of 1836-54.' },

    { t: 'h', text: 'Why they did not unite' },
    { t: 'compare', columns: [
      { title: 'Limits', items: ['Local and scattered', 'Aimed at landlord, moneylender or planter, not colonialism itself', 'Weak links between regions', 'No modern ideology before 1920s', 'British arms and communications'] },
      { title: 'Legacy', items: ['Forced tenancy and forest protections', 'Showed the state was not invincible', 'Fed later Kisan Sabha and Left politics', 'Provided nationalist memory and heroes', 'Fifth and Sixth Schedule thinking draws on this history'] },
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '**Economic:** the drain theory and its critics. Nationalists saw colonial rule as a cause of poverty; some later economists question the scale, but few deny the transfer. Compare the settlements for the effect on tenants. **Social:** why were tribal revolts violent? Use dikus, forest laws and loss of khuntkatti. **Political:** "Peasant movements were not anti-colonial until they joined the Congress" is debatable, so argue both ways using Indigo and Eka. Use Birsa Munda, Santhal and Rampa as your tribal examples, and link them to the Forest Rights Act, 2006, and PESA, 1996, on historical injustice.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Cornwallis 1793: Permanent. Munro 1820: Ryotwari. Holt Mackenzie 1822: Mahalwari.',
      'Naoroji: Poverty and Un-British Rule. Home Charges form the drain.',
      'Sidhu-Kanhu: Santhal, 1855. Birsa: Ulgulan, 1899. Alluri: Rampa, 1922.',
      'Indigo: 1859. Pabna: 1873. Deccan: 1875. Eka: 1921. Bardoli: 1928. Tebhaga: 1946.',
      'Bakshi Jagabandhu: Paika, 1817. Ram Singh: Kuka. Titu Mir: Barasat.',
      'AIKS 1936: Sahajanand. Mappila 1921: Malabar.',
    ] },
  ],
  sources: [
    { label: 'UPSC Civil Services Prelims GS Paper I, 2018-2026 (questions cited above)', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'Further reading, not checked for this note: NCERT Themes in Indian History Part III (Colonialism and the Countryside); Bipan Chandra, Rise and Growth of Economic Nationalism in India' },
  ],
  beyond: {
    refer: [
      { what: 'Forest Rights Act, 2006, preamble', where: 'Ministry of Tribal Affairs', why: 'The exact words on "historical injustice" help a Mains answer on tribal revolts.' },
    ],
    current: [
      { issue: 'Janjatiya Gaurav Varsh', link: 'The year marked the 150th birth anniversary of Birsa Munda. A fortnight of events ran 1-15 November 2025, ending on Janjatiya Gaurav Diwas (15 November).', source: 'News On AIR, October 2025', url: 'https://www.newsonair.gov.in/janjatiya-gaurav-varsh-pakhwada-to-begin-tomorrow-honouring-birsa-mundas-150th-birth-anniversary' },
    ],
  },
}
