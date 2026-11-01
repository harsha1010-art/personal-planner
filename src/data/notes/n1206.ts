import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-06',
  summary: 'What India grows, when and where: crop seasons, cropping systems, crop requirements, the soil groups and the irrigation system, with the latest output figures.',
  minutes: 22,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'India\'s cropping pattern is the result of **climate, soil, water and prices**. The monsoon sets the seasons. Soils decide what grows well. Irrigation and government price support then push farmers towards some crops and away from others. This is why Punjab grows rice in a semi-arid climate, and why pulses and oilseeds lag.' },
    { t: 'p', text: 'GS III asks about cropping patterns and irrigation by name. Agriculture still supports about **46.1% of the workforce**, as per a PIB backgrounder of August 2026.' },
    { t: 'table', caption: 'Output, 2025-26, Third Advance Estimates (released 27 May 2026). These figures get revised, so use them as orders of magnitude.', head: ['Crop', 'Output', 'Note'], rows: [
      ['Total foodgrains', '376.56 million tonnes', 'Record; up about 5.3% on 357.73 million tonnes in 2024-25'],
      ['Rice', '154.02 million tonnes', 'Largest foodgrain'],
      ['Wheat', '120.66 million tonnes', 'Second largest'],
      ['Maize', '55.09 million tonnes', 'Fast rise, up from 43.41 million tonnes'],
      ['Shree Anna (millets)', '17.58 million tonnes', 'Name used by the government for millets'],
      ['Oilseeds', '43.06 million tonnes', 'India still imports much of its edible oil'],
      ['Sugarcane', '500.06 million tonnes', 'Very water-intensive'],
      ['Horticulture', 'About 377.78 million tonnes', 'Second Advance Estimates; now larger than foodgrains'],
    ] },

    { t: 'h', text: 'Crop seasons' },
    { t: 'table', caption: 'Sowing and harvest months vary by region. Many southern and eastern areas do not follow this pattern exactly.', head: ['Season', 'Sown', 'Harvested', 'Main crops', 'Water and weather'], rows: [
      ['**Kharif**', 'June-July, with the south-west monsoon', 'September-October', 'Rice, maize, jowar, bajra, ragi, tur, moong, urad, cotton, groundnut, soybean, jute', 'Monsoon rain, warm and humid'],
      ['**Rabi**', 'October-November', 'March-April', 'Wheat, barley, gram, lentil, mustard, peas', 'Cool growing period, warm at ripening; western disturbances help in the north-west'],
      ['**Zaid**', 'March-April', 'June', 'Watermelon, muskmelon, cucumber, fodder, some moong', 'Short summer window, needs irrigation'],
    ] },
    { t: 'note', kind: 'trap', title: 'Season mix-ups', text: '**Rice** is mainly kharif, but Assam, West Bengal and Odisha can take up to three rice crops in a year (aus, aman and boro), and boro is a winter-sown crop. **Sugarcane** stays in the field for about a year, so it does not fit a single season. **Tamil Nadu** gets much of its rain from the north-east monsoon, so its main rice season differs from the north.' },

    { t: 'h', text: 'Cropping systems and key terms' },
    { t: 'table', head: ['Term', 'Meaning', 'Example or use'], rows: [
      ['Cropping pattern', 'The proportion of area under different crops at a time', 'Rice-wheat in the north-west plains'],
      ['Cropping intensity', 'Gross cropped area divided by net sown area, times 100', 'Rises when the same field is sown more than once a year. Irrigation is the main driver'],
      ['Monocropping', 'The same crop year after year', 'Depletes specific nutrients, raises pest build-up'],
      ['Multiple cropping', 'Two or more crops on a field in a year', 'Needs irrigation or assured rain'],
      ['Intercropping', 'Two or more crops grown together in a set row pattern', 'Sugarcane with pulses'],
      ['Mixed cropping', 'Seeds mixed and sown with no set rows', 'A hedge against rain failure on dry land'],
      ['Crop rotation', 'Different crops in sequence on one field', 'Legumes add nitrogen through rhizobium in root nodules'],
      ['Shifting cultivation', 'Clear and burn a patch, farm it, then move on', '**Jhum** in the north-east, **podu** in Andhra Pradesh and Odisha, **bewar** in Madhya Pradesh'],
      ['Dryland farming', 'Farming on rain alone in low-rainfall areas', 'Millets, pulses, oilseeds'],
    ] },

    { t: 'h', text: 'What each crop needs' },
    { t: 'table', caption: 'Leading states are given as a guide. Rankings shift by year, so memorise the group and not the exact order.', head: ['Crop', 'Climate and soil', 'Leading states'], rows: [
      ['Rice', 'Over 25°C, over 100 cm rain or irrigation, clayey alluvial', 'West Bengal, Uttar Pradesh, Punjab, Telangana, Andhra Pradesh'],
      ['Wheat', 'Cool growing season, 50-75 cm rain, well-drained loam', 'Uttar Pradesh, Madhya Pradesh, Punjab, Haryana'],
      ['Millets', 'Hardy, low rain, poor soils', 'Rajasthan (bajra), Maharashtra (jowar), Karnataka (ragi)'],
      ['Pulses', 'Low rain, fix nitrogen', 'Madhya Pradesh, Rajasthan, Maharashtra'],
      ['Cotton', 'Over 21°C, about 210 frost-free days, black soil', 'Gujarat, Maharashtra, Telangana'],
      ['Sugarcane', 'Hot and humid, 75-100 cm rain or irrigation', 'Uttar Pradesh, Maharashtra, Karnataka'],
      ['Jute', 'Hot, humid, new alluvium of deltas', 'West Bengal, Assam, Bihar'],
      ['Tea', 'Well-drained hill slopes, acidic soil, well-spread rain', 'Assam, West Bengal, Tamil Nadu, Kerala'],
      ['Coffee', 'Hill slopes, shade, no frost', 'Karnataka, Kerala, Tamil Nadu'],
      ['Rubber', 'Hot, humid, over 200 cm rain', 'Kerala, then north-east and Tamil Nadu'],
    ] },

    { t: 'h', text: 'Soils of India' },
    { t: 'p', text: 'The **ICAR** classification lists eight major soil groups. Questions usually test parent material, colour, nutrients and crops.' },
    { t: 'table', head: ['Soil', 'How it forms and where', 'Rich in / poor in', 'Crops'], rows: [
      ['**Alluvial**', 'River deposits; northern plains and deltas. **Khadar** is new, **bhangar** is old', 'Rich in potash; poor in nitrogen and phosphorus', 'Rice, wheat, sugarcane, jute'],
      ['**Black (regur)**', 'Weathered lava of the **Deccan Traps**; Maharashtra, Malwa, Gujarat. Swells when wet and cracks when dry', 'Rich in lime, iron, magnesia, alumina; poor in nitrogen, phosphorus, humus', 'Cotton, soybean, jowar, sugarcane'],
      ['**Red and yellow**', 'Crystalline and metamorphic rocks; low rainfall areas of the eastern and southern Deccan. Red from iron, yellow when hydrated', 'Poor in nitrogen, phosphorus, humus', 'Millets, groundnut, pulses'],
      ['**Laterite**', 'Intense leaching under high heat and heavy rain; Karnataka, Kerala, Odisha, Meghalaya hills', 'Rich in iron and aluminium oxides; poor in humus and nitrogen; acidic', 'Cashew, tea, coffee, rubber. Also used for bricks'],
      ['**Arid**', 'Dry heat; western Rajasthan. Sandy with kankar layer', 'Saline, low humus', 'Bajra and pulses, more with irrigation'],
      ['**Saline**', 'Dry areas and over-irrigation; salts rise to the surface. Called **reh, kallar, usar**', 'Poor in nitrogen and calcium', 'Treated with gypsum'],
      ['**Peaty**', 'Heavy rain and high humidity, much organic matter; Kerala backwaters, Sundarbans, north Bihar', 'High organic matter; acidic', 'Rice in some areas'],
      ['**Forest**', 'Hill and mountain slopes', 'Acidic and low in humus on higher slopes', 'Plantations, fruit'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2021', text: 'UPSC asked what the black cotton soil of India formed from. The answer is the weathering of **fissure volcanic rock**, and not granite or shale.' },
    { t: 'note', kind: 'trap', title: 'Do not confuse these', text: '**Khadar** is new alluvium and **bhangar** is old. Black soil holds water, and it is **poor in nitrogen and phosphorus** despite being fertile. Laterite is formed by **leaching** in hot and wet areas, not by dry conditions. Saline soil is often **caused** by canal irrigation with poor drainage, as in parts of Punjab and Haryana.' },
    { t: 'list', items: [
      '**Agro-climatic regions:** The Planning Commission set out **15 agro-climatic zones**, and ICAR-NBSS&LUP mapped **20 agro-ecological regions**. They use different criteria, so do not treat them as the same.',
      '**Soil Health Card:** Launched in 2015. **26.09 crore** cards issued as of July 2026 (PIB).',
      '**Problems:** Erosion, salinity and waterlogging, loss of organic carbon, and fertiliser imbalance.',
    ] },

    { t: 'h', text: 'Irrigation' },
    { t: 'compare', caption: 'A little over half of India\'s sown area is irrigated. The exact share differs by source and year, so check the latest Land Use Statistics before quoting one.', columns: [
      { title: 'Wells and tubewells', items: ['Largest source today', 'North-west plains, Gujarat, Rajasthan', 'Quick and farmer-controlled', 'Falling water table; cheap power adds to overuse'] },
      { title: 'Canals', items: ['Plains and deltas', 'Large public cost', 'Waterlogging and salinity at the head; shortage at the tail end'] },
      { title: 'Tanks', items: ['Peninsular India, hard-rock areas', 'Old community systems', 'Silting and encroachment'] },
    ] },
    { t: 'flow', caption: 'Pradhan Mantri Krishi Sinchayee Yojana (2015): "Har Khet ko Pani" and "More Crop per Drop". It joins several programmes.', steps: [
      { title: 'AIBP', sub: 'Finishing major and medium projects' },
      { title: 'Har Khet ko Pani', sub: 'Source creation and command area work' },
      { title: 'Watershed', sub: 'Rainfed area development' },
      { title: 'Per Drop More Crop', sub: 'Drip and sprinkler; now run by the Agriculture Ministry' },
    ] },
    { t: 'list', items: [
      '**Micro-irrigation:** Drip and sprinkler save water and fertiliser. **Fertigation** means delivering fertiliser through the irrigation water.',
      '**Atal Bhujal Yojana (2019):** Community-led groundwater management in seven water-stressed states: Gujarat, Haryana, Karnataka, Madhya Pradesh, Maharashtra, Rajasthan and Uttar Pradesh.',
      '**PM-KUSUM:** Solar pumps and feeder solarisation. As on 2 August 2026: about 11.49 lakh off-grid pumps, over 15.89 lakh pumps under feeder solarisation (PIB).',
      '**Mihir Shah Committee (2016):** Proposed merging the Central Water Commission and Central Ground Water Board into a **National Water Commission**.',
    ] },
    { t: 'note', kind: 'exam', title: 'Past Prelims', text: 'Prelims 2016 asked about the advantages of drip irrigation, and Prelims 2020 about the advantages of fertigation. Learn the practical benefits: less water, less weed growth, less leaching, and better control of nutrients.' },

    { t: 'h', text: 'Why the pattern is a problem, and what is being done' },
    { t: 'compare', caption: 'Both sides of the diversification debate.', columns: [
      { title: 'Why farmers stay with rice and wheat', items: ['Assured procurement at MSP', 'Stable yields with low risk', 'Subsidised power and fertiliser', 'Food security gains of the Green Revolution'] },
      { title: 'Costs of staying', items: ['Groundwater depletion in Punjab and Haryana', 'Stubble burning and air pollution', 'Soil nutrient imbalance', 'Import dependence for pulses and edible oils'] },
    ] },
    { t: 'list', items: [
      '**Pulses:** Mission for Aatmanirbharta in Pulses (Cabinet, October 2025), running to 2030-31.',
      '**Oilseeds:** National Mission on Edible Oils: Oil Palm (2021) and Oilseeds (2024).',
      '**Backward districts:** PM Dhan-Dhaanya Krishi Yojana (Cabinet, July 2025) covers 100 low-performing agriculture districts.',
      '**Price signal:** The 2027-28 rabi MSPs gave wheat only a Rs 25 rise but large rises to safflower, mustard and lentil. This favours diversification.',
      '**Millets:** 2023 was the UN International Year of Millets, on India\'s proposal.',
    ] },
    { t: 'note', kind: 'recent', title: 'Current links', text: 'Third Advance Estimates (May 2026) show record foodgrain, with maize and sugarcane rising sharply. The Economic Survey 2025-26 also pushed crop diversification and horticulture.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Explain the factors behind cropping patterns, then ask whether they fit water availability. Good examples are the rice belt in north-west India and sugarcane in drought-prone Maharashtra. Discuss the tension between food security and water security. Weigh diversification against farmer risk. Recommend price signals, assured procurement for pulses, micro-irrigation, and power pricing reform, while noting the political cost of reform. Haryana\'s Mera Pani Meri Virasat is a useful state example.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Kharif: June to October. Rabi: October to April. Zaid: March to June.',
      'Black soil: Deccan Traps, cotton, poor in nitrogen and phosphorus.',
      'Laterite: leaching, iron and aluminium, cashew and tea.',
      'Khadar new, bhangar old. Reh, kallar, usar: saline.',
      'PMKSY 2015. Atal Bhujal 2019 covers seven states.',
      'Foodgrain 2025-26: 376.56 million tonnes (Third Advance Estimates).',
    ] },
  ],
  sources: [
    { label: 'PIB backgrounder, The New Era of Indian Agriculture and Allied Sectors (12 August 2026)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/aug/doc2026812952301.pdf' },
    { label: 'Rural Voice, report of the Third Advance Estimates 2025-26 (27 May 2026)', url: 'https://eng.ruralvoice.in/government-estimates-record-376.56-million-tonnes-foodgrain-production-in-2025-26-up-5.3pc-from-last-year' },
    { label: 'Vajirao, summary of the rabi MSP decision for 2027-28 (crop-wise rises)', url: 'https://www.vajiraoinstitute.com/upsc-ias-current-affairs/cabinet-approves-minimum-support-prices-for-rabi-crops-msp-2027-28.aspx' },
    { label: 'UPSC Civil Services Prelims 2016, 2020 and 2021, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'For further reading: NCERT, India: Physical Environment (soils) and India: People and Economy (agriculture and water)' },
  ],
  beyond: {
    refer: [
      { what: 'Atlas maps of soils and crop regions', where: 'Any school atlas, or NCERT Class 11 and 12 Geography', why: 'A note cannot replace practice on a map, and Prelims uses location.' },
      { what: 'Latest crop estimates', where: 'Directorate of Economics and Statistics, Agriculture Ministry', why: 'Estimates are revised during the year.', url: 'https://desagri.gov.in/' },
    ],
    current: [
      { issue: 'Record foodgrain estimate', link: 'Third Advance Estimates (May 2026) put 2025-26 foodgrains at 376.56 million tonnes. Use it to open an answer on cropping patterns.', source: 'Rural Voice, citing the Agriculture Ministry', url: 'https://eng.ruralvoice.in/government-estimates-record-376.56-million-tonnes-foodgrain-production-in-2025-26-up-5.3pc-from-last-year' },
      { issue: 'Allied-sector and irrigation-linked progress', link: 'PIB backgrounder of August 2026 gives Soil Health Card and PM-KUSUM figures.', source: 'PIB', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/aug/doc2026812952301.pdf' },
    ],
  },
}
