import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-12-12',
  summary: 'Earth, heat, fire and factory: earthquake zones and the withdrawn 2025 code, tsunami warning, heatwave criteria, fire safety, and Bhopal and industrial law.',
  minutes: 21,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Unlike floods, these hazards give little or no warning, or they are mostly created by people. Earthquakes and tsunamis cannot be predicted in the short term, so **buildings and warning systems** matter most. Heatwaves are slow and often under-counted. Fires and chemical accidents are mainly **failures of regulation**, which makes them a strong GS III and ethics topic.' },

    { t: 'h', text: 'Earthquakes' },
    { t: 'p', text: 'The **Indian plate** is pushing into the Eurasian plate, which raises the Himalaya and builds stress along it. India also has quakes inside the stable peninsula, as at **Latur** (1993). The **National Center for Seismology** under the Ministry of Earth Sciences monitors earthquakes.' },
    { t: 'table', caption: 'Seismic zones under IS 1893 (2016 version). About 59% of India falls in zones III to V, as commonly cited by NDMA.', head: ['Zone', 'Risk', 'Where (examples)'], rows: [
      ['**V**', 'Very high', 'North East, Kashmir valley parts, Himachal, Uttarakhand parts, Kutch, north Bihar, Andaman and Nicobar'],
      ['**IV**', 'High', 'Delhi, Sikkim, parts of Jammu, Uttarakhand, Uttar Pradesh, Bihar, West Bengal, Gujarat'],
      ['**III**', 'Moderate', 'Kerala, Goa, Lakshadweep, parts of Mumbai and Chennai belt, Odisha, Rajasthan'],
      ['**II**', 'Low', 'Rest of the peninsula'],
    ] },
    { t: 'note', kind: 'trap', title: 'Zone VI: was introduced, then withdrawn', text: 'In late 2025, BIS published a new **IS 1893 (2025)** with a Himalayan **Zone VI**, and many coaching notes still show it. A summary of an Economic Times report (March 2026) says BIS **withdrew** the 2025 version by a gazette notice of 3 March 2026 and went back to the **2016** standard, after objections on consultation and cost. So there is **no Zone I**, and treat Zone VI as withdrawn. Verify with BIS before relying on this: the primary notice could not be opened.' },
    { t: 'compare', columns: [
      { title: 'Magnitude', items: ['Energy released at source', 'One number per quake', 'Richter or moment magnitude scale', 'Each whole step: about 32 times more energy'] },
      { title: 'Intensity', items: ['Damage felt at a place', 'Differs by location', '**Modified Mercalli** scale', 'Depends on distance, soil and building'] },
    ] },
    { t: 'table', caption: 'Key quakes.', head: ['Year', 'Place', 'Why cited'], rows: [
      ['1905', 'Kangra', 'Early Himalayan disaster'],
      ['1934', 'Bihar-Nepal', 'Liquefaction in the plains'],
      ['1950', 'Assam-Tibet', 'Largest recorded in India'],
      ['1967', 'Koyna', 'Reservoir-induced seismicity debate'],
      ['1993', 'Latur', 'Peninsular quake; non-engineered houses killed many'],
      ['2001', 'Bhuj', 'Led to Gujarat\'s GSDMA and to a national shift in policy'],
      ['2005', 'Kashmir', 'Cross-border damage'],
      ['2015', 'Nepal', 'India\'s Operation Maitri'],
    ] },
    { t: 'list', items: [
      '**"Quakes do not kill, buildings do."** Enforcement of the **National Building Code** and retrofitting of schools and hospitals are the main tools.',
      '**Liquefaction:** Wet loose soil behaves like a liquid when shaken, a risk for Delhi\'s Yamuna floodplain and the Gangetic plains.',
      '**Seismic gap:** A stretch of the Himalaya that has not ruptured for a long time. Scientists warn it could produce a large future quake, but they cannot state when.',
      '**Good examples:** Japan for building norms, and rebuilt Bhuj for urban planning; Assam-type wooden houses and Kashmir\'s **dhajji-dewari** for traditional design.',
    ] },

    { t: 'h', text: 'Tsunami' },
    { t: 'flow', caption: 'A tsunami is a series of long waves. In deep water they are low and very fast; near shore they slow and rise.', steps: [
      { title: 'Trigger', sub: 'Mainly large undersea quake on a subduction zone; also landslides and volcanoes' },
      { title: 'Open ocean', sub: 'Hundreds of km/h, but small height' },
      { title: 'Shallow water', sub: 'Speed falls, height grows (shoaling)' },
      { title: 'Warning sign', sub: 'Sea may pull back first' },
      { title: 'Run-up', sub: 'Multiple waves; the first may not be the largest' },
    ] },
    { t: 'list', items: [
      '**26 December 2004:** A magnitude 9.1-class quake off Sumatra hit India (Tamil Nadu, Andaman and Nicobar), Sri Lanka, Indonesia and Thailand. Over 2 lakh people died across the region.',
      '**Sources for India:** The Andaman-Sumatra subduction zone, and the Makran zone off Pakistan and Iran for the west coast.',
      '**ITEWC:** The Indian Tsunami Early Warning Centre at **INCOIS, Hyderabad** (2007), under the Ministry of Earth Sciences, works as a regional provider for the Indian Ocean.',
      '**Tsunami Ready:** UNESCO-IOC recognition. Venkatraipur and Noliasahi in Odisha were India\'s first recognised communities (2020).',
      '**5 November:** World Tsunami Awareness Day. **Bio-shields:** Mangroves help reduce wave force, though they do not stop big tsunamis.',
    ] },

    { t: 'h', text: 'Heatwaves' },
    { t: 'table', caption: 'IMD criteria. A heatwave needs a minimum base temperature, then a departure from normal or an absolute value.', head: ['Test', 'Heatwave', 'Severe heatwave'], rows: [
      ['Base temperature', 'Plains 40°C or more; coast 37°C or more; hills 30°C or more', 'Same'],
      ['Departure from normal', '4.5°C to 6.4°C', 'Above 6.4°C'],
      ['Actual maximum (plains)', '45°C or more', '47°C or more'],
    ] },
    { t: 'list', items: [
      '**Why it matters:** Heat strains outdoor workers, the old and the poor. Humidity makes things worse: **wet-bulb temperature** is what limits the human body\'s cooling.',
      '**Heat Action Plan:** **Ahmedabad** (2013), the first in South Asia, was made after the 2010 heatwave. NDMA has given guidelines since 2016-17.',
      '**Urban heat islands:** Concrete, few trees and little water make cities hotter than their surroundings, especially at night.',
      '**Status:** Heatwave is **not** among the centrally notified disasters, though states such as Kerala and Tamil Nadu have treated it as a state-specific disaster. The Sixteenth Finance Commission counts it in the Disaster Risk Index.',
      '**Data problem:** Heat deaths are under-counted, as they are recorded under other causes.',
    ] },
    { t: 'note', kind: 'trap', title: 'Heat terms', text: 'A heatwave is defined by **IMD**, not NDMA. Both **two consecutive days** and spread across stations matter for a formal declaration. **Cold wave** is centrally notified, along with frost, while heatwave is not. That asymmetry is often asked about.' },

    { t: 'h', text: 'Fires' },
    { t: 'compare', columns: [
      { title: 'Urban and building fires', items: ['Uphaar cinema (1997), Kumbakonam school (2004), AMRI hospital (2011), Surat coaching centre (2019), Rajkot gaming zone (2024)', 'Causes: blocked exits, no NOC, poor wiring', 'Rules: **National Building Code Part 4**, state fire laws', 'Fire services are a state and municipal function (12th Schedule)'] },
      { title: 'Forest fires', items: ['Mostly set by people, often for shifting cultivation, mahua, tendu, or grazing', 'Peak in dry season, February-June', 'Uttarakhand\'s chir pine belt is a known case; North East too', '**Forest Survey of India** sends satellite-based alerts', 'National Action Plan on Forest Fires (2018)'] },
    ] },
    { t: 'note', kind: 'mains', title: 'Why hospital and factory fires keep happening', text: 'It is rarely the absence of rules. Fire audits are done on paper, fire departments lack staff, and approvals overlap between agencies. Liability often falls after the event. This can be used for an answer on enforcement, and for ethics on the duty of care.' },

    { t: 'h', text: 'Industrial and chemical hazards' },
    { t: 'timeline', caption: 'Bhopal shaped India\'s chemical safety law.', items: [
      { when: '2-3 December 1984', what: '**Bhopal gas tragedy.** **Methyl isocyanate** leak at Union Carbide. Thousands dead, and long-term illness for many more.' },
      { when: '1985', what: 'Bhopal Gas Leak Disaster (Processing of Claims) Act makes the Centre the sole claimant.' },
      { when: '1986', what: '**Environment (Protection) Act.** Also, **M.C. Mehta v Union of India** (Oleum gas) sets **absolute liability**.' },
      { when: '1987', what: 'Factories Act amended with a chapter on hazardous processes.' },
      { when: '1989', what: 'Manufacture, Storage and Import of Hazardous Chemical (MSIHC) Rules.' },
      { when: '1991', what: '**Public Liability Insurance Act** requires insurance for hazardous industry.' },
      { when: '1996', what: 'Chemical Accidents (Emergency Planning, Preparedness and Response) Rules.' },
      { when: '2010', what: '**National Green Tribunal Act.**' },
      { when: '2020', what: 'Vizag (LG Polymers) styrene leak; NGT used strict liability principles.' },
    ] },
    { t: 'table', head: ['Term', 'Meaning'], rows: [
      ['**Strict liability**', 'Rylands v Fletcher: liable without fault, but some defences allowed'],
      ['**Absolute liability**', 'M.C. Mehta: for hazardous industry, **no defences**. Compensation tied to the firm\'s capacity to pay'],
      ['**Polluter pays**', 'Accepted by Indian courts, as in Vellore Citizens (1996)'],
      ['**Precautionary principle**', 'Act even without full scientific certainty'],
    ] },
    { t: 'list', items: [
      '**Nodal ministry:** Environment, Forest and Climate Change for chemical disasters. Atomic Energy for nuclear and radiological ones.',
      '**Other risks:** Pharma and chemical plant blasts (Sigachi plant, Telangana, June 2025), fireworks units, oil and gas (Baghjan, Assam, 2020), and transport of hazardous goods.',
      '**Worker safety:** The Occupational Safety, Health and Working Conditions Code, 2020 is meant to replace the older Factories Act framework. Critics worry about thresholds and weakening inspections; supporters favour a single simplified code.',
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'India\'s earthquake preparedness: a good law, weak enforcement in the hills and cities. Heat as an unrecognised disaster: should it be notified? Consider cost and its definition. Lessons of Bhopal 40 years on: compensation, clean-up, and corporate accountability. How Tsunami warning shows that science and communities can work together. Include Ahmedabad Heat Action Plan and Bhuj as positive cases.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Zones II to V under the 2016 code; no Zone I. 2025 Zone VI reportedly withdrawn.',
      'Magnitude: energy. Intensity: damage (Mercalli).',
      'ITEWC: INCOIS Hyderabad. 26 December 2004.',
      'Heatwave: plains 40°C, coast 37°C, hills 30°C; departure 4.5-6.4°C.',
      'Bhopal 1984: MIC. EPA 1986; PLI 1991; absolute liability M.C. Mehta.',
    ] },
  ],
  sources: [
    { label: 'Vision IAS, summary of Economic Times report on BIS withdrawal of 2025 seismic code (7 March 2026), seen as a search excerpt; the page itself and the BIS notice could not be opened' },
    { label: 'RGICS, Sixteenth Finance Commission analysis (heatwave in the Disaster Risk Index)', url: 'https://www.rgics.org/environment/indias-public-finance-for-disaster-management-hits-and-misses-of-the-sixteenth-finance-commission/' },
    { label: 'For further reading: NDMA hazard guidelines and IMD heatwave FAQ', url: 'https://ndma.gov.in/' },
  ],
  beyond: {
    refer: [
      { what: 'Current status of IS 1893', where: 'Bureau of Indian Standards', why: 'The status of the 2025 code changed quickly. Confirm it before writing about Zone VI.', url: 'https://www.bis.gov.in/' },
      { what: 'Seismic zone map', where: 'BMTPC Vulnerability Atlas or NCERT', why: 'A map is needed for location questions.' },
    ],
    current: [
      { issue: 'Seismic code withdrawal', link: 'March 2026: 2025 code with Zone VI reported withdrawn and 2016 version restored. Check the primary notice.', source: 'Vision IAS summary of The Economic Times, as a search excerpt' },
      { issue: 'Heatwave in disaster finance', link: 'The Sixteenth Finance Commission index from 2026-27 adds heatwave and lightning.', source: 'RGICS', url: 'https://www.rgics.org/environment/indias-public-finance-for-disaster-management-hits-and-misses-of-the-sixteenth-finance-commission/' },
    ],
  },
}
