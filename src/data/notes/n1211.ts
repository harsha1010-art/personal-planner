import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-11',
  summary: 'Water and weather disasters: how floods, cyclones, droughts and landslides form, where they hit India, how they are classified, and how they are managed.',
  minutes: 20,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'These four hazards are linked to the monsoon and to climate, and all are made worse by human choices: building on floodplains, drawing too much groundwater, or cutting into hill slopes. India has made real progress against cyclone deaths, through early warning and evacuation. Flood and landslide losses have stayed high, as they rely on land-use decisions that are harder to enforce.' },
    { t: 'table', caption: 'A quick comparison.', head: ['Hazard', 'Onset', 'Lead agency for warning', 'Main risk zones'], rows: [
      ['Flood', 'Hours to days', 'Central Water Commission (river), IMD (rain)', 'Ganga-Brahmaputra plains, Kosi, Assam, coasts, cities'],
      ['Cyclone', 'Days of notice', 'IMD (RSMC New Delhi)', 'East coast mainly; Gujarat and Maharashtra on the west'],
      ['Drought', 'Slow, over months', 'IMD; Agriculture Ministry for response', 'Rajasthan, Marathwada, Vidarbha, Rayalaseema, Bundelkhand'],
      ['Landslide', 'Sudden, rain-triggered', 'Geological Survey of India (nodal)', 'Himalaya, Western Ghats, North East'],
    ] },

    { t: 'h', text: 'Floods' },
    { t: 'compare', columns: [
      { title: 'Natural causes', items: ['Heavy, concentrated rain', 'Silt in Himalayan rivers, as in Kosi and Brahmaputra', 'Cloudbursts', 'Glacial lake outbursts', 'Cyclones and storm surge'] },
      { title: 'Human causes', items: ['Encroachment on floodplains and drains', 'Sudden release from dams', 'Deforestation', 'Unplanned urban growth and concrete surfaces', 'Poorly placed embankments'] },
    ] },
    { t: 'list', items: [
      '**Rashtriya Barh Ayog (1976-80):** Estimated about **40 million hectares** flood-prone. Its main warning was that embankments alone do not solve flooding.',
      '**Constitution:** Flood control is not a separate item. Water is on the State List (Entry 17), so flood management is mainly a state duty, with central funding support.',
      '**Programmes:** Flood Management and Border Areas Programme funds state works. CWC issues forecasts. A **Model Flood Plain Zoning Bill** has existed since 1975, but states have been slow to adopt it.',
      '**Urban floods:** Mumbai 2005 and Chennai 2015 are the classic cases. Causes: blocked natural drains, weak storm water design and encroached lakes. NDMA issued guidelines on urban flooding in 2010.',
    ] },
    { t: 'note', kind: 'trap', title: 'Cloudburst and flood terms', text: 'IMD defines a **cloudburst** as rain of about **100 mm or more in an hour** over a small area, usually in hills. A **flash flood** is a fast local flood. A **GLOF** is a glacial lake outburst flood. South Lhonak lake in **Sikkim** (October 2023) is the main example, and it damaged the Teesta-III dam.' },

    { t: 'h', text: 'Cyclones' },
    { t: 'flow', caption: 'Conditions for a tropical cyclone. They form over warm oceans and weaken over land because their energy source is cut off.', steps: [
      { title: 'Warm sea', sub: 'Surface about 26.5°C or more, to depth' },
      { title: 'Coriolis force', sub: 'Too weak at the equator, so not within about 5°' },
      { title: 'Low wind shear', sub: 'Vertical structure survives' },
      { title: 'Pre-existing low', sub: 'Disturbance to organise around' },
      { title: 'Landfall', sub: 'Wind, surge and rain cause the damage' },
    ] },
    { t: 'table', caption: 'IMD classification by maximum sustained wind speed.', head: ['Category', 'Wind speed (km/h)'], rows: [
      ['Low pressure area', 'Below 31'],
      ['Depression', '31-49'],
      ['Deep depression', '50-61'],
      ['Cyclonic storm', '62-88'],
      ['Severe cyclonic storm', '89-117'],
      ['Very severe cyclonic storm', '118-166'],
      ['Extremely severe cyclonic storm', '167-221'],
      ['Super cyclonic storm', '222 and above'],
    ] },
    { t: 'list', items: [
      '**Season:** Two peaks: April-May and October-December. The Bay of Bengal sees more storms than the Arabian Sea, but the Arabian Sea has warmed and got stronger storms in recent years.',
      '**Naming:** The WMO/ESCAP Panel on Tropical Cyclones names them; 13 countries including India contribute names. **RSMC New Delhi** issues advisories for the North Indian Ocean.',
      '**Storm surge:** Often the deadliest part, worst in the shallow head of the Bay of Bengal.',
      '**Response:** National Cyclone Risk Mitigation Project (shelters, warning systems, roads), with World Bank support.',
    ] },
    { t: 'timeline', caption: 'Cases to cite.', items: [
      { when: '1999', what: 'Odisha super cyclone. About 10,000 deaths. Led to OSDMA.' },
      { when: '2013', what: '**Phailin**: massive evacuations and far fewer deaths in Odisha, so it became the example of good preparedness.' },
      { when: '2019', what: '**Fani** (Odisha) and 2020 **Amphan** (West Bengal, Bangladesh).' },
      { when: '2023', what: '**Biparjoy** made landfall in Gujarat, an Arabian Sea example.' },
      { when: 'October 2025', what: '**Montha** hit the Andhra Pradesh coast. Check IMD for exact details.' },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2020', text: 'UPSC tested whether only some cyclones develop an eye, and whether the eye is about 10°C **cooler** than its surroundings. Remember: the eye of a mature cyclone is calm and **warmer**, because air there sinks.' },

    { t: 'h', text: 'Droughts' },
    { t: 'table', caption: 'Four kinds. They usually follow one another in this order.', head: ['Type', 'What falls short', 'Measure'], rows: [
      ['Meteorological', 'Rainfall', 'IMD: seasonal deficit over 25% of normal in an area; severe if much higher'],
      ['Hydrological', 'Rivers, reservoirs, groundwater', 'Surface and groundwater levels'],
      ['Agricultural', 'Soil moisture during the crop season', 'Crop stress; vegetation indices'],
      ['Socio-economic', 'Food, fodder, water and jobs', 'Prices, migration and scarcity'],
    ] },
    { t: 'flow', caption: 'Manual for Drought Management (2016, later revised). States declare drought, and then the Centre can add funds. The Agriculture Ministry is nodal.', steps: [
      { title: 'Mandatory trigger', sub: 'Rainfall deviation and dry spell' },
      { title: 'Impact indicators', sub: 'Crop sowing, vegetation (remote sensing), soil moisture, hydrology' },
      { title: 'Field check', sub: 'Ground truthing' },
      { title: 'State declares', sub: 'Moderate or severe' },
      { title: 'Central help', sub: 'NDRF request; central team visits for severe drought' },
    ] },
    { t: 'list', items: [
      '**Why it hits so hard:** Much of the net sown area is rainfed, and the poorest farmers are rainfed. About 68% of cultivable land is commonly cited as drought-prone.',
      '**Past programmes:** Drought Prone Areas Programme (1973) and Desert Development Programme (1977-78). Their watershed work now falls under PMKSY.',
      '**Case law:** **Swaraj Abhiyan v Union of India (2016):** The Supreme Court said states should not delay declaring drought, and told the Centre to update its manual and build a mitigation fund.',
      '**Good practices:** Ralegan Siddhi and Hiware Bazar in Maharashtra for watershed work; Rajasthan\'s johads; shifting crops to millets and pulses.',
    ] },
    { t: 'note', kind: 'trap', title: 'Drought is not only low rain', text: 'A year with normal national rainfall can still see drought locally. And drought is not a problem only of dry areas: Marathwada\'s water crisis is partly because of sugarcane, a water-heavy crop. **Drought is declared by the state**, not by IMD.' },

    { t: 'h', text: 'Landslides' },
    { t: 'p', text: 'About **12.6% of India\'s land** (about 0.42 million sq km) is commonly cited as prone to landslides, as per NDMA and GSI. The hazard comes from steep slopes, weak and fractured rock, heavy rain, and earthquakes. Human activity adds to it: road-cutting, tunnels, quarrying, hydropower works and unregulated building.' },
    { t: 'table', caption: 'Examples.', head: ['Event', 'Where', 'Why it is cited'], rows: [
      ['**Kedarnath**, June 2013', 'Uttarakhand', 'Very heavy rain, moraine lake failure, and building near rivers'],
      ['**Joshimath** subsidence, 2023', 'Uttarakhand', 'Land sinking, with debate over construction and drainage'],
      ['**Wayanad**, July 2024', 'Kerala', 'Massive debris flows after extreme rain in the Western Ghats'],
      ['**Dharali**, August 2025', 'Uttarkashi, Uttarakhand', 'Sudden debris flow in Himalayan valley; exact cause debated'],
    ] },
    { t: 'list', items: [
      '**Institutions:** **GSI** is the nodal agency for landslide study, with a National Landslide Susceptibility Mapping programme and early warning trials. **NRSC** released a Landslide Atlas of India in 2023.',
      '**Policy:** NDMA guidelines (2009) and a National Landslide Risk Management Strategy (2019).',
      '**What works:** Slope stabilisation, drainage, hazard mapping, zoning, and rain-based early warning with local communities.',
    ] },
    { t: 'note', kind: 'mains', title: 'Development in the hills', text: 'Be balanced. Hill states need roads, tourism and power for jobs and for security near the borders. But roads and dams cut through fragile rock, and carrying capacity is often ignored. A fair answer backs environmental assessments that also count **cumulative** impacts, along with planning for each valley, and safe roads, and warns against both uncontrolled building and blanket bans.' },

    { t: 'note', kind: 'recent', title: 'Recent context', text: 'A situation report by Sphere India dated 21 July 2026 covered floods and landslides in Assam, Arunachal Pradesh, Jammu and Kashmir, Nagaland, Sikkim and Uttarakhand. The Sixteenth Finance Commission counts floods, droughts, cyclones, landslides, cloudbursts and more in its Disaster Risk Index for 2026-31.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Why cyclone deaths fell but flood losses did not. Urban flooding and city planning. Himalayan fragility and development. Climate change and rising extreme rainfall. Drought-proofing as opposed to drought relief. Use examples: Odisha for cyclones, Chennai and Mumbai for urban floods, Wayanad and Kedarnath for slopes, and Hiware Bazar for water.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Rashtriya Barh Ayog: 40 million hectares. Model Flood Plain Zoning Bill 1975.',
      'Cyclone: 26.5°C sea, Coriolis, low shear. Super cyclone from 222 km/h.',
      'Eye: calm and warm. Storm surge often kills most.',
      'Four droughts: meteorological, hydrological, agricultural, socio-economic.',
      'Drought: state declares; Agriculture Ministry nodal.',
      'Landslide: GSI nodal; about 12.6% of land.',
    ] },
  ],
  sources: [
    { label: 'UPSC Civil Services Prelims 2020, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'RGICS, Sixteenth Finance Commission analysis (Disaster Risk Index hazards)', url: 'https://www.rgics.org/environment/indias-public-finance-for-disaster-management-hits-and-misses-of-the-sixteenth-finance-commission/' },
    { label: 'For further reading: NDMA hazard guidelines; IMD cyclone manual; Manual for Drought Management', url: 'https://ndma.gov.in/' },
  ],
  beyond: {
    refer: [
      { what: 'IMD cyclone e-Atlas and seasonal reports', where: 'India Meteorological Department', why: 'Named-storm tracks and data for 2025-26, which this note does not list in full.', url: 'https://mausam.imd.gov.in/' },
      { what: 'Manual for Drought Management', where: 'Agriculture Ministry', why: 'Exact index and declaration process.', url: 'https://agriwelfare.gov.in/' },
      { what: 'Vulnerability Atlas maps', where: 'BMTPC, NDMA', why: 'A map of hazard zones is better than text for location questions.' },
    ],
    current: [
      { issue: 'Monsoon floods and landslides, 2026', link: 'Multi-state situation report for July 2026. Use it only as an event reference.', source: 'Sphere India situation report, seen through a search result' },
      { issue: 'Risk-based fund sharing', link: 'Sixteenth Finance Commission index adds hazards from 2026-27.', source: 'RGICS', url: 'https://www.rgics.org/environment/indias-public-finance-for-disaster-management-hits-and-misses-of-the-sixteenth-finance-commission/' },
    ],
  },
}
