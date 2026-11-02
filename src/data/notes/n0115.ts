import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-01-15',
  summary: 'How the solid Earth works: its layers, moving plates, earthquakes and volcanoes, the rock cycle, and the landforms made by rivers, ice, wind, sea and groundwater.',
  minutes: 26,
  hero: { file: 'Tectonic plates and ring of fire.png', credit: 'Astroskiandhike', license: 'CC BY-SA 4.0' },
  heroAlt: 'World map of tectonic plates with the Pacific Ring of Fire marked',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Two sets of forces shape the land. **Endogenic** forces come from inside the Earth: plate movement, folding, faulting and volcanism. They build relief. **Exogenic** forces come from outside: sun-driven weathering, and erosion by rivers, ice, wind and waves. They wear relief down. Every landform is a stage in this contest.' },
    { t: 'p', text: 'UPSC tests this area through concept statements and matching. Recent Prelims papers asked about volcanic products, weathering, mountain types, rock permeability and the evidence for continental drift. Mains asks for mechanism plus distribution, often with an Indian example.' },

    { t: 'h', text: 'Inside the Earth' },
    { t: 'p', text: 'Nobody has drilled through the crust, so most knowledge is indirect. **Direct sources** are mines, deep drilling and volcanic material. **Indirect sources** are seismic waves, gravity and magnetic surveys, meteorites, and the rise of temperature and pressure with depth.' },
    { t: 'strata', caption: 'From the surface down. Depths are rounded textbook values.', layers: [
      { title: 'Crust', sub: 'About 5 km under oceans (basaltic), about 30 km under continents (granitic), and up to about 70 km under the Himalaya. Brittle.' },
      { title: 'Mohorovicic (Moho) discontinuity', sub: 'Boundary between crust and mantle. Seismic velocity jumps here.' },
      { title: 'Mantle', sub: 'Down to about 2,900 km. Its upper weak part, the **asthenosphere** (to about 400 km), is the main source of magma.' },
      { title: 'Gutenberg discontinuity', sub: 'Boundary between mantle and core, at about 2,900 km. S-waves stop here.' },
      { title: 'Outer core', sub: 'Liquid. Mainly nickel and iron (**nife**). Its motion is linked to the magnetic field.' },
      { title: 'Lehmann discontinuity', sub: 'Separates the outer and inner core, at about 5,150 km.' },
      { title: 'Inner core', sub: 'Solid, because pressure is enormous, down to the centre at about 6,370 km.' },
    ] },
    { t: 'img', pic: { file: 'The layers of the Earth model.jpg', credit: 'Rajneesh kumar Thakur', license: 'CC BY-SA 4.0' }, caption: 'A model of the Earth\'s layers. Draw this in Mains with the discontinuities labelled.' },
    { t: 'note', kind: 'trap', title: 'Lithosphere is not crust', text: 'The **lithosphere** is the crust plus the rigid top of the mantle. It is mechanically defined, and it is what breaks into plates. The **asthenosphere** below it is weak and can flow. Do not write that plates are made of crust alone.' },
    { t: 'table', caption: 'Seismic waves are the main tool for mapping the interior.', head: ['', 'P-waves', 'S-waves', 'Surface waves (L, R)'], rows: [
      ['Motion', 'Compression, parallel to travel', 'Shear, at right angles to travel', 'Roll or sway along the surface'],
      ['Speed', 'Fastest, arrive first', 'Slower, arrive second', 'Slowest, arrive last'],
      ['Medium', 'Solid, liquid and gas', 'Solids only', 'Near the surface'],
      ['Damage', 'Lower', 'Moderate', 'Most destructive'],
    ] },
    { t: 'p', text: '**Shadow zones** gave the key proof. S-waves are not recorded beyond about 105° from the epicentre, which shows that the outer core is liquid. P-waves are weak or absent between about 105° and 145°, because they bend on entering the core.' },

    { t: 'h', text: 'From continental drift to plate tectonics' },
    { t: 'timeline', caption: 'The idea matured over about 55 years.', items: [
      { when: '1912', what: '**Alfred Wegener** proposes continental drift: one landmass, **Pangaea**, one ocean, **Panthalassa**. Pangaea split into **Laurasia** and **Gondwana**. He could not explain the force.' },
      { when: '1930s', what: '**Arthur Holmes** suggests convection currents in the mantle as the driving force.' },
      { when: '1960s', what: '**Harry Hess** proposes sea-floor spreading: new crust forms at mid-ocean ridges and is consumed at trenches. Palaeomagnetic stripes support it, as does the fact that ocean crust is young.' },
      { when: '1967-68', what: '**Plate tectonics** unites these ideas: rigid lithospheric plates move over the asthenosphere.' },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2025: drift evidence', text: 'UPSC listed three items as possible evidence for continental drift: ancient rock belts matching between Brazil and West Africa, Ghana\'s gold linked to the Brazil plateau, and **Gondwana** sediments in India with counterparts in six southern landmasses. All three are standard evidence. Also learn **tillite** and fossils such as **Mesosaurus** and **Lystrosaurus**.' },
    { t: 'p', text: '**Major plates:** Pacific, North American, South American, Eurasian, African, Antarctic and Indo-Australian. **Minor plates:** Cocos, Nazca, Arabian, Philippine, Caroline and Fiji.' },
    { t: 'table', caption: 'Three kinds of boundary. Learn one example for each row.', head: ['Boundary', 'What happens', 'Features', 'Example'], rows: [
      ['Divergent (constructive)', 'Plates move apart, magma rises', 'Mid-ocean ridges, rift valleys, shallow quakes', 'Mid-Atlantic Ridge; East African Rift'],
      ['Convergent: ocean-ocean', 'One plate subducts', 'Trench, island arc', 'Mariana, Aleutian, Japan, Philippines'],
      ['Convergent: ocean-continent', 'Ocean plate subducts', 'Trench, fold mountains, volcanoes', 'Nazca under South America: Andes'],
      ['Convergent: continent-continent', 'Both are light, so little subduction', 'High fold mountains, strong quakes, almost no volcanoes', 'India and Eurasia: Himalaya'],
      ['Transform (conservative)', 'Plates slide past', 'Strike-slip faults, strong quakes, no crust made or lost', 'San Andreas Fault'],
    ] },
    { t: 'img', pic: { file: 'Tectonic plates boundary types & movement.png', credit: 'Hughrance', license: 'CC BY-SA 4.0' }, caption: 'Plates, boundary types and movement. Trace the Indo-Australian plate boundary and the Pacific rim on this map.' },
    { t: 'note', kind: 'trap', title: 'Why the Himalaya has no volcanoes', text: 'Two continental plates collide and neither sinks far, so there is little melting. Compare the Andes, where an ocean plate subducts and feeds a volcanic chain.' },

    { t: 'h', text: 'Earthquakes, volcanoes and tsunamis' },
    { t: 'compare', caption: 'Magnitude and intensity are the classic confusion.', columns: [
      { title: 'Earthquake terms', items: ['**Focus (hypocentre):** where rupture starts', '**Epicentre:** point on the surface above it', '**Richter or moment magnitude:** energy released, one value per quake', '**Mercalli scale:** intensity, or damage, which varies by place'] },
      { title: 'Where and why', items: ['Tectonic: along faults, the most common', 'Volcanic: magma movement', 'Induced: reservoirs and mining', 'Circum-Pacific belt: the largest share of quakes', 'Mid-continental (Alpine-Himalayan) belt: includes India'] },
    ] },
    { t: 'table', caption: 'Volcano types by form.', head: ['Type', 'Lava and shape', 'Example'], rows: [
      ['Shield', 'Fluid basalt, gentle slopes', 'Mauna Loa, Hawaii'],
      ['Composite (strato)', 'Viscous lava and ash layers, explosive, steep', 'Fuji, Vesuvius'],
      ['Caldera', 'Collapsed crater after huge eruption', 'Toba, Yellowstone'],
      ['Flood basalt', 'Fluid lava over huge areas', 'Deccan Traps'],
      ['Mid-ocean ridge', 'Submarine eruptions', 'Mid-Atlantic Ridge'],
    ] },
    { t: 'list', items: [
      '**Volcanic products:** lava, pyroclastic debris, ash and dust, and gases including nitrogen and sulphur compounds. Prelims 2024 asked how many of these four were products of eruptions, and all four are.',
      '**Intrusive forms:** batholith (large, deep), laccolith (dome), lopolith (saucer), phacolith (wavy), sill (horizontal) and dyke (vertical). The Deccan has many dykes and sills.',
      '**India:** **Barren Island** in the Andaman Sea is the country\'s only active volcano. **Narcondam** is usually described as dormant.',
      '**Hotspots:** a mantle plume can pierce a plate far from any boundary, as in Hawaii. The Deccan Traps are linked to the Reunion hotspot.',
      '**Tsunami:** a sea wave usually set off by an undersea quake with vertical displacement of the seabed. Long wavelength, and low in deep water, it grows on approaching shallow coasts. The **2004 Indian Ocean** event began off Sumatra at a convergent boundary.',
      '**Landslides:** driven by slope, rain, weak rock and road-cutting. The Himalaya and Western Ghats are the main zones in India.',
    ] },

    { t: 'h', text: 'Rocks and the rock cycle' },
    { t: 'p', text: 'By weight, the crust is mostly **oxygen** (about 46.6%), then **silicon** (27.7%), **aluminium** (8.1%), **iron** (5%), then calcium, sodium, potassium and magnesium.' },
    { t: 'table', head: ['', 'Igneous', 'Sedimentary', 'Metamorphic'], rows: [
      ['Formed by', 'Cooling of magma or lava', 'Compaction of sediments', 'Heat and pressure on existing rock'],
      ['Features', 'Crystalline, no fossils', 'Layers (strata), may hold fossils', 'Recrystallised, often banded (foliated)'],
      ['Examples', 'Granite (intrusive), basalt (extrusive)', 'Sandstone, shale, limestone, coal', 'Marble, slate, quartzite, gneiss'],
      ['Economic value', 'Metallic ores', 'Coal, petroleum, cement material', 'Building stone'],
    ] },
    { t: 'flow', caption: 'The rock cycle. Any rock can become any other, and magma resets the system.', steps: [
      { title: 'Magma', sub: 'Cools to igneous rock' },
      { title: 'Weathering', sub: 'Breaks rock into sediment' },
      { title: 'Lithification', sub: 'Sediment becomes sedimentary rock' },
      { title: 'Heat and pressure', sub: 'Produce metamorphic rock' },
      { title: 'Melting', sub: 'Back to magma, often at subduction zones' },
    ] },
    { t: 'table', caption: 'Parent to metamorphic pairs are a favourite for matching.', head: ['Parent', 'Becomes'], rows: [
      ['Limestone', 'Marble'],
      ['Sandstone', 'Quartzite'],
      ['Shale', 'Slate, then schist'],
      ['Granite', 'Gneiss'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2024 and 2025: water and rock', text: 'Prelims 2024 linked rain to weathering: rainwater holds dissolved **carbon dioxide** and **oxygen**, which drive carbonation and oxidation. Prelims 2025 compared chalk and clay. Chalk is porous and permeable. Clay is **actually porous but nearly impermeable**, because its pores are too fine to let water through. Porosity and permeability are not the same.' },

    { t: 'h', text: 'Weathering and landforms' },
    { t: 'compare', columns: [
      { title: 'Physical weathering', items: ['Frost wedging in cold regions', 'Exfoliation: heating and cooling peel rock', 'Salt crystal growth', 'Pressure release'] },
      { title: 'Chemical weathering', items: ['Solution', 'Carbonation: limestone dissolves', 'Oxidation: iron rusts', 'Hydration and hydrolysis'] },
      { title: 'Biological weathering', items: ['Roots open cracks', 'Burrowing animals', 'Lichens release acids', 'Human activity'] },
    ] },
    { t: 'table', caption: 'Learn landforms by agent, split into erosion and deposition.', head: ['Agent', 'Erosional', 'Depositional'], rows: [
      ['River', 'V-shaped valley, gorge, canyon, waterfall, potholes, rapids', 'Alluvial fan, floodplain, levee, meander, oxbow lake, delta'],
      ['Glacier', 'Cirque, horn, aretes, U-shaped valley, hanging valley, fjord', 'Moraine, drumlin, esker, outwash plain'],
      ['Wind', 'Mushroom rock, yardang, inselberg, deflation hollow', 'Barchan, seif dune, loess'],
      ['Sea waves', 'Cliff, wave-cut platform, cave, arch, stack', 'Beach, spit, bar, lagoon'],
      ['Groundwater (karst)', 'Sinkhole, doline, uvala, lapies, caves', 'Stalactite, stalagmite, pillar'],
    ] },
    { t: 'table', caption: 'Mountain types. Prelims 2024 asked for correct matches of region, range and type.', head: ['Type', 'How formed', 'Examples'], rows: [
      ['Young fold', 'Recent convergence', 'Himalaya, Alps, Andes, Rockies'],
      ['Old fold', 'Ancient folding, now worn down', 'Appalachians, Aravalli, Urals'],
      ['Block', 'Faulting: raised block (horst), sunk block (graben)', 'Vosges, Black Forest; Narmada and Tapi lie in rift valleys'],
      ['Volcanic', 'Accumulated lava and ash', 'Fuji, Kilimanjaro'],
      ['Residual', 'Remains after erosion', 'Nilgiri, Parasnath, Rajmahal, Veliconda, Mahendragiri'],
    ] },
    { t: 'note', kind: 'trap', title: 'Common mix-ups', text: 'The Vosges are block mountains in **Europe**, not Central Asia, and the Alps are fold mountains. A **delta** is not simply an estuary: delta means deposition, estuary means a drowned mouth where tides scour. Stalactites hang down, and stalagmites rise from the floor.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Explain why earthquakes and volcanoes follow plate boundaries, with a labelled map. Discuss the origin of the Himalaya and why it remains seismically active. Compare landforms under different agents. Explain landslide risk in the Himalaya and Western Ghats with natural and human causes, and end on land-use and building-code responses.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Moho: crust and mantle. Gutenberg: mantle and core. Lehmann: outer and inner core.',
      'S-waves do not pass through liquid, so the outer core is liquid.',
      'Divergent, convergent, transform: Mid-Atlantic, Himalaya, San Andreas.',
      'Magnitude is energy, intensity is damage.',
      'Limestone to marble, sandstone to quartzite, shale to slate, granite to gneiss.',
      'Barren Island is India\'s only active volcano.',
    ] },
  ],
  sources: [
    { label: 'Vision IAS, Geography Value Added Material (Mains 2025), Ch 1: interior, plates, earthquakes, rocks' },
    { label: 'UPSC Civil Services Prelims 2024 and 2025, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'ClearIAS: withdrawal of the revised seismic code (secondary report)', url: 'https://www.clearias.com/new-seismic-zonation-map-of-india/' },
  ],
  beyond: {
    refer: [
      { what: 'NCERT Fundamentals of Physical Geography (Class 11)', where: 'NCERT', why: 'Reference for further reading. Its diagrams of waves, shadow zones and landforms are worth seeing once.' },
      { what: 'IS 1893 (Part 1) and the seismic zone map', where: 'Bureau of Indian Standards', why: 'Check the current official status before quoting zones in an answer.' },
    ],
    current: [
      { issue: 'Seismic code reversal', link: 'BIS released IS 1893:2025 with a new Zone VI for the Himalayan arc, then withdrew it after concerns from the Housing Ministry. As of March 2026, reports say the 2016 standard with Zones II to V applies again. Check the BIS site, as this comes from secondary reports.', source: 'ClearIAS (secondary)', url: 'https://www.clearias.com/new-seismic-zonation-map-of-india/' },
    ],
  },
}
