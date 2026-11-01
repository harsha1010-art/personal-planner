import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-01-17',
  summary: 'The ocean floor, temperature and salinity, currents and tides, coral reefs, marine resources and the law of the sea, with India\'s seabed contracts.',
  minutes: 22,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Oceans cover about 71% of the Earth. They store heat, drive climate and carry most world trade. For the exam, the two most useful skills are **reading a current map** and **explaining a pattern**: why deserts sit on west coasts, why fishing is rich off Japan and Newfoundland, and why the Red Sea is so salty.' },

    { t: 'h', text: 'Relief of the ocean floor' },
    { t: 'strata', caption: 'Going from the coast to the deep sea.', layers: [
      { title: 'Continental shelf', sub: 'Gentle, shallow extension of the land. Rich in fish and in oil and gas.' },
      { title: 'Continental slope', sub: 'A steep drop, often cut by submarine canyons.' },
      { title: 'Continental rise', sub: 'Sediment piled at the foot of the slope.' },
      { title: 'Abyssal plain', sub: 'Flat, deep, covered in fine sediments and ooze.' },
      { title: 'Mid-ocean ridge', sub: 'Underwater mountain chain where new crust forms.' },
      { title: 'Trench', sub: 'The deepest parts, at subduction zones. The Mariana Trench reaches about 11 km.' },
    ] },
    { t: 'list', items: [
      '**Minor features:** seamount (underwater volcano), guyot (flat-topped seamount), atoll (ring-shaped reef), and submarine canyon.',
      '**Ocean size order:** Pacific, Atlantic, Indian, Southern, Arctic. The Pacific is the largest and deepest, and is bordered by the Ring of Fire.',
    ] },
    { t: 'note', kind: 'trap', title: 'Shelf widths around India', text: 'The Arabian Sea shelf off western India is generally **wider** than the Bay of Bengal shelf off the eastern coast. This surprises many, because the east coast plains are wider. Rich offshore oil at Mumbai High sits on that western shelf.' },

    { t: 'h', text: 'Temperature and salinity' },
    { t: 'compare', columns: [
      { title: 'Temperature', items: ['Falls from equator to poles', 'Falls with depth', '**Thermocline:** layer of sharp fall in temperature, below the warm surface layer', 'Northern Hemisphere oceans are warmer, as they meet more land', 'Currents and winds alter it'] },
      { title: 'Salinity', items: ['Grams of salt per 1,000 g of water', 'Average is about **35 parts per thousand**', '**Raised by:** evaporation, ice formation', '**Lowered by:** rain, river inflow, melting ice', '**Halocline:** layer of sharp change in salinity'] },
    ] },
    { t: 'list', items: [
      '**Highest:** subtropics, not the equator. Evaporation is high and rain is low there. The equator is wetter.',
      '**Enclosed seas:** the **Red Sea** is very salty because of low rainfall, almost no river inflow and high evaporation. The Baltic is much fresher because of cold, low evaporation and many rivers.',
      '**Near India:** the Arabian Sea is saltier than the Bay of Bengal, since the Bay gets the Ganga, Brahmaputra and other large rivers.',
      '**Constant proportion:** Forchhammer\'s principle says the ratio between major salts stays almost constant, even if total salinity varies.',
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2024: Red Sea', text: 'UPSC stated that the Red Sea receives very little precipitation, and that no water enters it from rivers. Both fit standard descriptions: it has very low rainfall and no large river inflow. The same paper tested the Sumed pipeline, which links the Red Sea with the Mediterranean.' },

    { t: 'h', text: 'Ocean currents' },
    { t: 'p', text: 'Currents are started by **winds** and **density differences**, then shaped by the Coriolis force and by coastlines. Surface currents carry only about a tenth of ocean water. Deep currents move the rest, in the slow **thermohaline circulation**, driven by cold and salty water sinking near Greenland and Antarctica.' },
    { t: 'img', pic: { file: 'Ocean surface currents.jpg', credit: 'NOAA', license: 'Public domain' }, caption: 'Surface currents. Note the big loops, or gyres, in each ocean basin. Practise naming them on a blank map.' },
    { t: 'flow', caption: 'Why gyres form, using the North Atlantic.', steps: [
      { title: 'Trade winds', sub: 'Push water west along the equator' },
      { title: 'Western boundary', sub: 'Warm water turns north as the Gulf Stream' },
      { title: 'Westerlies', sub: 'Carry it east as the North Atlantic Drift' },
      { title: 'Eastern boundary', sub: 'Cooled water returns south as the Canary Current' },
      { title: 'Loop closes', sub: 'Clockwise in the north, anticlockwise in the south' },
    ] },
    { t: 'table', caption: 'Learn this table with a map. W means warm, C means cold.', head: ['Ocean', 'North', 'South'], rows: [
      ['Atlantic', 'Gulf Stream (W), N Atlantic Drift (W), Canary (C), Labrador (C), N Equatorial (W)', 'Brazil (W), Benguela (C), Falkland (C), S Equatorial (W)'],
      ['Pacific', 'Kuroshio (W), N Pacific Drift (W), California (C), Oyashio (C), Alaska (W)', 'E Australian (W), Peru or Humboldt (C), S Equatorial (W)'],
      ['Indian', 'Monsoon drift that reverses with the season; Somali (seasonal)', 'Agulhas (W), Mozambique (W), West Australian (C), S Equatorial (W)'],
      ['Southern', 'None', 'West Wind Drift, or Antarctic Circumpolar (C), flows round the globe'],
    ] },
    { t: 'table', caption: 'What currents do to climate and economy.', head: ['Effect', 'Mechanism', 'Examples'], rows: [
      ['West coast deserts', 'Cold currents cool the air, so it holds less moisture and it is stable', 'Atacama (Peru), Namib (Benguela), Sahara (Canary), Sonoran (California)'],
      ['Mild winters', 'Warm drift heats onshore winds', 'North-west Europe; ports in Norway stay ice-free'],
      ['Rich fishing', 'Warm and cold waters meet, and plankton grows', 'Grand Banks (Gulf Stream, Labrador); off Japan (Kuroshio, Oyashio)'],
      ['Upwelling', 'Offshore winds pull cold nutrient-rich water up', 'Peru, weakened in El Nino years'],
      ['Fog', 'Warm and cold air meet', 'Newfoundland'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2021 and 2024', text: 'Prelims 2021: in the tropics, western parts of oceans are warmer than eastern parts because of the trades. In the temperate zone, the westerlies make the eastern parts warmer than the western. Both statements hold. Prelims 2024 asked how the Gulf Stream and North Atlantic Drift affect isotherms: they **warm** the North Atlantic, so isotherms bend north. A statement that they make it colder is wrong.' },
    { t: 'note', kind: 'trap', title: 'The northern Indian Ocean is different', text: 'Only here do surface currents reverse fully with the seasons, because of the monsoon. Eastward in summer, westward in winter. The Somali Current also reverses.' },

    { t: 'h', text: 'Tides' },
    { t: 'table', caption: 'Tides are the rise and fall of sea level caused mainly by the Moon\'s and Sun\'s gravity. Most coasts have about two high tides a day, with a gap of about 12 hours 25 minutes.', head: ['Type', 'When', 'Result'], rows: [
      ['Spring', 'New and full Moon: Sun, Moon and Earth in line', 'Highest high tides'],
      ['Neap', 'First and last quarter: Sun and Moon at right angles', 'Lowest range'],
      ['Perigean', 'Moon closest to Earth (about once a month)', 'Unusually high'],
      ['Apogean', 'Moon farthest from Earth', 'Smaller range'],
      ['Semidiurnal', 'Two nearly equal tides a day', 'Most common form'],
      ['Diurnal', 'One high and one low tide a day', 'Found in parts of Gulf of Mexico'],
      ['Mixed', 'Two tides of unequal heights a day', 'West coast of North America'],
    ] },
    { t: 'list', items: [
      '**Highest range:** Bay of Fundy, Canada.',
      '**India:** tidal range is high in the **Gulf of Khambhat**, **Gulf of Kutch** and the **Sundarbans**, which are named as tidal energy sites.',
      '**Uses:** tides help navigation at tidal ports (Kolkata on the Hooghly), flush harbours and make tidal power possible.',
      '**Tidal bore:** a wall of water moving upriver, seen in the Hooghly.',
    ] },
    { t: 'note', kind: 'trap', title: 'Not all waves are the same', text: 'Wind waves move mostly surface energy, and the water itself does not travel far. Tsunamis are caused by seabed displacement, and move through the full depth. Tides are caused by gravity. Storm surge is caused by wind and low pressure in a cyclone.' },

    { t: 'h', text: 'Coral reefs' },
    { t: 'compare', columns: [
      { title: 'Conditions', items: ['Warm water, about 20-30°C', 'Clear, shallow, sunlit water', 'Normal salinity, low sediment', 'Polyps live with **zooxanthellae** algae'] },
      { title: 'Types', items: ['**Fringing:** attached to the coast', '**Barrier:** separated by a lagoon', '**Atoll:** ring around a lagoon', 'Great Barrier Reef is the largest'] },
      { title: 'In India', items: ['Gulf of Mannar', 'Gulf of Kutch', 'Lakshadweep (atolls)', 'Andaman and Nicobar'] },
    ] },
    { t: 'p', text: '**Threats:** warm water bleaching (polyps expel their algae), acidification, pollution, sediment, overfishing and coastal building. Corals protect coasts from waves, and support fisheries and tourism.' },

    { t: 'h', text: 'Marine resources' },
    { t: 'table', head: ['Resource', 'Details', 'Where'], rows: [
      ['Fish', 'Shelves and upwelling zones', 'North Atlantic, north-west Pacific, Peru'],
      ['Oil and gas', 'On continental shelves', 'Mumbai High, Krishna-Godavari basin, Persian Gulf, North Sea'],
      ['Polymetallic nodules', 'Manganese, nickel, cobalt and copper on the deep seabed', 'Central Indian Ocean Basin'],
      ['Polymetallic sulphides', 'Copper, zinc, gold near hydrothermal vents', 'Indian Ocean ridges'],
      ['Coastal placers', '**Ilmenite and rutile** (titanium), **monazite** (rare earths, thorium)', 'Kerala, Tamil Nadu, Odisha'],
      ['Gas hydrates', 'Methane locked in ice under the seabed', 'Continental margins, Krishna-Godavari basin'],
      ['Energy', 'Tides, waves, offshore wind, ocean thermal energy', 'Coasts'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2021 and 2023', text: 'Prelims 2023: ilmenite and rutile are rich sources of titanium. Prelims 2021: the **International Seabed Authority** grants seabed licences (not a body called the Global Ocean Commission), India holds licences, and rare earth minerals exist on the international seafloor.' },

    { t: 'h', text: 'Law of the sea' },
    { t: 'strata', caption: 'UNCLOS 1982 zones, measured from the baseline. Prelims 2022 tested the 12 nm and 200 nm limits and innocent passage.', layers: [
      { title: 'Internal waters', sub: 'Landward of the baseline. Full sovereignty.' },
      { title: 'Territorial sea, 12 nm', sub: 'Sovereignty, but foreign ships have the right of **innocent passage**.' },
      { title: 'Contiguous zone, 24 nm', sub: 'State may enforce customs, immigration and similar laws.' },
      { title: 'EEZ, 200 nm', sub: 'Exclusive rights over resources. Others keep freedom of navigation.' },
      { title: 'High seas', sub: 'Open to all. Seabed beyond national limits, or "the Area", is overseen by the **ISA**, based in Kingston, Jamaica.' },
    ] },
    { t: 'timeline', caption: 'India\'s contracts with the International Seabed Authority.', items: [
      { when: '2002', what: 'Polymetallic nodules contract for the Central Indian Ocean Basin.' },
      { when: '2016', what: 'Polymetallic sulphides contract for the Central and South West Indian Ridge.' },
      { when: 'September 2025', what: 'A 15-year contract for sulphides on the **Carlsberg Ridge**. India became the first country to hold two sulphide contracts.' },
    ] },
    { t: 'p', text: '**Deep Ocean Mission:** the Ministry of Earth Sciences mission includes **Samudrayaan**, whose crewed submersible **Matsya 6000** is designed to reach 6,000 m. It supports seabed mining technology and ocean science.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Explain why west coasts of continents in the tropics have deserts. Discuss how currents shape climate and fisheries. Explain causes of salinity variation. Discuss the blue economy, deep-sea mining and its environmental risks, with both sides: strategic minerals against harm to little-known ecosystems. Discuss coral bleaching and its effect on coasts.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Average salinity about 35 ppt. Highest in the subtropics.',
      'Gulf Stream and Kuroshio: warm. Canary, Benguela, Peru, California: cold.',
      'Atacama with Peru, Namib with Benguela.',
      'Spring tide: new and full Moon. Neap: quarters.',
      'Territorial 12, contiguous 24, EEZ 200 nautical miles.',
      'Carlsberg Ridge: India\'s second sulphide contract, 2025.',
    ] },
  ],
  sources: [
    { label: 'Vision IAS, Geography Value Added Material (Mains 2025), Ch 3: salinity, currents, tides, resources, coral reefs' },
    { label: 'UPSC Civil Services Prelims 2021, 2022, 2023, 2024, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'News On AIR: India\'s 15-year contract with ISA (September 2025)', url: 'https://www.newsonair.gov.in/india-signs-15-year-contract-with-isa-to-explore-polymetallic-sulphides-in-indian-ocean' },
  ],
  beyond: {
    refer: [
      { what: 'A world atlas map of ocean currents', where: 'Oxford or Orient BlackSwan school atlas', why: 'Currents are learnt by tracing, not reading. Trace each gyre twice.' },
      { what: 'UNCLOS text', where: 'United Nations', why: 'Check exact zone definitions if you quote articles.', url: 'https://www.un.org/depts/los/convention_agreements/texts/unclos/unclos_e.pdf' },
    ],
    current: [
      { issue: 'ISA contract on the Carlsberg Ridge', link: 'Reported September 2025. A 15-year exploration contract, giving India two polymetallic sulphide contracts.', source: 'News On AIR', url: 'https://www.newsonair.gov.in/india-signs-15-year-contract-with-isa-to-explore-polymetallic-sulphides-in-indian-ocean' },
      { issue: 'High Seas (BBNJ) Treaty', link: 'Late 2025 reports said the treaty would enter into force on 17 January 2026, and that India signed in September 2024 but had not yet ratified. I could not confirm India\'s status after that, so check before quoting.', source: 'SeafoodSource search listing (not opened)' },
    ],
  },
}
