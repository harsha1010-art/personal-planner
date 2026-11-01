import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-01-29',
  summary: 'How living systems work: energy flow, food chains, nutrient cycles, species roles, succession and biomes. This is the science that makes the rest of Environment easy.',
  minutes: 22,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: '**Ecology** studies how organisms relate to each other and to their surroundings. An **ecosystem** is a working unit of living parts (biotic) and non-living parts (abiotic) that exchange energy and matter. Arthur Tansley gave the term "ecosystem" in 1935.' },
    { t: 'p', text: 'UPSC rarely asks for textbook definitions alone. It gives an applied situation: why a savanna stays open, who the primary producers of the ocean are, or which nutrient comes from rocks. So learn the logic, not just the words.' },
    { t: 'strata', caption: 'Levels of organisation, from largest to smallest.', layers: [
      { title: 'Biosphere', sub: 'All life on Earth and the air, water and soil it uses' },
      { title: 'Biome', sub: 'A large climate-shaped zone, such as tundra or savanna' },
      { title: 'Ecosystem', sub: 'Community plus its physical environment' },
      { title: 'Community', sub: 'All populations of different species in an area' },
      { title: 'Population', sub: 'Individuals of one species in an area' },
      { title: 'Organism', sub: 'A single individual' },
    ] },

    { t: 'h', text: 'Structure and energy flow' },
    { t: 'flow', caption: 'Energy flows one way and is lost as heat at each step. Nutrients, in contrast, cycle.', steps: [
      { title: 'Sun', sub: 'Source of almost all energy' },
      { title: 'Producers', sub: 'Plants, algae, cyanobacteria' },
      { title: 'Primary consumers', sub: 'Herbivores' },
      { title: 'Secondary, tertiary consumers', sub: 'Carnivores' },
      { title: 'Decomposers', sub: 'Bacteria and fungi return nutrients' },
    ] },
    { t: 'list', items: [
      '**Gross primary productivity (GPP):** total organic matter made by photosynthesis.',
      '**Net primary productivity (NPP):** GPP minus what the plants use in respiration. Only NPP is available to consumers.',
      '**Ten per cent rule (Lindeman):** on average about 10% of energy passes to the next trophic level. This is why food chains are short, usually with four or five links.',
      '**High productivity per unit area:** tropical rainforests, estuaries, coral reefs and wetlands. **Low:** open ocean and deserts. The open ocean still contributes a great deal in total because it is so large.',
    ] },
    { t: 'compare', caption: 'Food chains and food webs.', columns: [
      { title: 'Grazing food chain', items: ['Starts with living green plants', 'Grass, deer, tiger', 'Dominant in many grasslands and open water'] },
      { title: 'Detritus food chain', items: ['Starts with dead organic matter', 'Leaf litter, earthworm, bird', 'Dominant in forest floors, and moves more energy than grazing in many forests'] },
      { title: 'Food web', items: ['Many interlinked chains', 'More links mean more stability', 'Losing one species has less effect than in a single chain'] },
    ] },
    { t: 'table', caption: 'Ecological pyramids. Only the energy pyramid is always upright.', head: ['Pyramid', 'Usual shape', 'Exception'], rows: [
      ['Energy', 'Always upright', 'None. Energy is lost at each level'],
      ['Numbers', 'Usually upright', 'Inverted when one tree supports many insects'],
      ['Biomass', 'Upright on land', 'Inverted in the sea, where a small phytoplankton stock supports more zooplankton'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2021 and 2025: who feeds the ocean', text: 'Prelims 2021 asked which of copepods, cyanobacteria, diatoms and foraminifera are primary producers in ocean food chains. Producers photosynthesise, so the answer is **cyanobacteria and diatoms**. Copepods graze and foraminifera are consumers. Prelims 2025 then tested the claim that marine phytoplankton and photosynthetic bacteria make about half of the world\'s oxygen.' },
    { t: 'note', kind: 'trap', title: 'Bioaccumulation and biomagnification', text: '**Bioaccumulation** is build-up within one organism over its life. **Biomagnification** is the rise in concentration from one trophic level to the next. Both apply to substances that are persistent and fat-soluble, such as DDT and methylmercury. Top predators carry the highest load.' },

    { t: 'h', text: 'Nutrient cycles' },
    { t: 'table', head: ['Cycle', 'Type', 'Main reservoir', 'Key steps'], rows: [
      ['Carbon', 'Gaseous', 'Ocean, rocks, fossil fuels; atmosphere as CO2', 'Photosynthesis, respiration, decomposition, burning'],
      ['Nitrogen', 'Gaseous', 'Atmosphere (about 78% N2)', 'Fixation (Rhizobium, cyanobacteria, lightning), nitrification, denitrification'],
      ['Phosphorus', 'Sedimentary', 'Rocks', 'Weathering releases phosphate; no significant gas stage'],
      ['Sulphur', 'Mainly sedimentary, with a gas stage', 'Rocks, ocean sediments', 'Weathering, volcanoes, burning of coal (SO2)'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2021', text: 'UPSC asked in which biogeochemical cycle the weathering of rocks is the main source of release of the nutrient. That points to the **phosphorus cycle**, a sedimentary cycle. Prelims 2022 also asked which gases in excess cause acid rain, so remember that **nitrogen oxides and sulphur dioxide** are the main ones.' },

    { t: 'h', text: 'How species interact' },
    { t: 'table', head: ['Interaction', 'Effect (A, B)', 'Example'], rows: [
      ['Mutualism', '+, +', 'Fig and fig wasp; lichen (fungus and alga); Rhizobium and legumes; corals and zooxanthellae'],
      ['Commensalism', '+, 0', 'Orchid growing on a mango branch; barnacles on a whale'],
      ['Parasitism', '+, -', 'Cuscuta on host plants; malaria parasite'],
      ['Predation', '+, -', 'Tiger and deer'],
      ['Competition', '-, -', 'Species using the same limited resource'],
      ['Amensalism', '-, 0', 'Penicillium mould suppressing bacteria'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2024', text: 'UPSC asked which plant has a unique relationship with a co-evolved insect that alone can pollinate it, with **fig** among the options. Fig trees and fig wasps are the classic case of obligate mutualism.' },
    { t: 'table', caption: 'Terms that UPSC can mix up.', head: ['Term', 'Meaning', 'Example'], rows: [
      ['Niche', 'The role of a species: its food, space, time of activity. No two species hold the same niche for long', 'Species in a forest feeding at different heights'],
      ['Habitat', 'The place where it lives. A habitat can hold many niches', 'A wetland'],
      ['Ecotone', 'A transition zone between two ecosystems', 'Mangroves between land and sea; grassland-forest edge'],
      ['Edge effect', 'Greater species variety in an ecotone, including some found only there', 'Forest edge birds'],
      ['Keystone species', 'Effect far greater than its numbers suggest', 'Fig trees in tropical forests; sea otter'],
      ['Umbrella species', 'Saving it saves the wider habitat', 'Tiger in its forests'],
      ['Flagship species', 'A popular species used to gather support', 'Giant panda'],
      ['Indicator species', 'Its presence shows the state of the environment', 'Lichens for air quality; stonefly larvae for clean water'],
    ] },
    { t: 'wheel', caption: 'Ecosystem services, as grouped by the Millennium Ecosystem Assessment (2005).', center: 'Ecosystem services', spokes: ['Provisioning: food, water, timber', 'Regulating: climate, floods, pollination', 'Cultural: recreation, sacred groves', 'Supporting: soil formation, nutrient cycling'] },

    { t: 'h', text: 'Ecological succession' },
    { t: 'p', text: '**Succession** is the gradual and fairly predictable change in species in an area over time. It runs from **pioneer species**, through a series of stages called a **sere**, to a relatively stable **climax community**. Climate largely decides what the climax looks like.' },
    { t: 'compare', columns: [
      { title: 'Primary succession', items: ['Starts on bare ground with no soil', 'Bare rock, new lava, retreating glacier', 'Pioneers: lichens, then mosses', 'Very slow, as soil must first form'] },
      { title: 'Secondary succession', items: ['Starts where soil survives', 'Abandoned farmland, burnt or logged forest', 'Pioneers: grasses and fast-growing herbs', 'Much faster'] },
    ] },
    { t: 'flow', caption: 'Primary succession on bare rock (xerarch). In water (hydrarch), a pond fills up and moves from plankton to rooted plants, to marsh and then forest.', steps: [
      { title: 'Bare rock', sub: 'No soil at all' },
      { title: 'Lichens', sub: 'Acids break the rock' },
      { title: 'Mosses', sub: 'Thin soil builds up' },
      { title: 'Herbs and shrubs', sub: 'Soil deepens, shade grows' },
      { title: 'Climax forest', sub: 'Stable, in balance with climate' },
    ] },
    { t: 'note', kind: 'trap', title: 'Common errors', text: 'Biodiversity and biomass usually **rise** during succession, while net productivity tends to **fall** as the community matures, since a mature forest uses most of what it makes. Also, the climax is stable but not frozen: a fire or storm can reset it. Natural succession is also why some wetlands fill up and need management.' },

    { t: 'h', text: 'Biomes' },
    { t: 'table', caption: 'Temperature and rainfall largely determine the biome.', head: ['Biome', 'Climate', 'Plants', 'Animals', 'Where'], rows: [
      ['Tundra', 'Very cold, low precipitation, permafrost', 'Mosses, lichens, sedges', 'Caribou, Arctic fox', 'Arctic, with alpine forms above the tree line'],
      ['Taiga (boreal)', 'Long cold winter, short summer', 'Conifers: spruce, fir, pine', 'Moose, lynx', 'Russia, Canada'],
      ['Temperate deciduous', 'Clear seasons', 'Oak, maple, beech', 'Deer, bears', 'Eastern USA, Europe, East Asia'],
      ['Temperate grassland', 'Moderate rain, hot and cold seasons', 'Grasses', 'Bison', 'Prairies, steppes, pampas, veld'],
      ['Tropical rainforest', 'Hot and wet throughout the year', 'Tall evergreens, climbers, epiphytes', 'Very rich variety', 'Amazon, Congo, Southeast Asia; Western Ghats and Northeast India in part'],
      ['Savanna', 'Warm with a long dry season', 'Grass with scattered trees', 'Large herbivores, big cats', 'Africa; parts of the Deccan'],
      ['Hot desert', 'Very low rain, extreme range', 'Cacti, thorny shrubs', 'Camels, reptiles', 'Sahara, Thar'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2021: two biome questions', text: 'One passage described leaf litter that decomposes faster than in any other biome, a nearly bare soil surface, climbers and epiphytes. That describes a **tropical rainforest**. Fast decay also explains why its soils are nutrient-poor once cleared. Another asked what keeps forest from growing in a savanna. The listed factors were burrowing animals and termites, fire, grazing herbivores, seasonal rainfall and soil properties. Think of a savanna as a system kept open by disturbance and a dry season.' },
    { t: 'p', text: 'Aquatic systems matter as well. **Lakes** have a sunlit **photic** zone and a dark **aphotic** zone, while nutrient overload causes **eutrophication**: algal bloom, then decay, less oxygen and fish deaths. Rising **biochemical oxygen demand (BOD)** signals organic pollution. **Estuaries** and **mangroves** are nutrient-rich nurseries.' },
    { t: 'note', kind: 'exam', title: 'Prelims 2022 and 2026: wetlands and mangroves', text: 'Prelims 2022 used the phrase that wetlands are Earth\'s "kidneys" and asked which function best fits it. The idea is filtering: wetland plants take up excess nutrients and heavy metals. Prelims 2026 asked why mangroves matter for climate resilience. They work as natural bio-shields against tidal surges and also support livelihoods.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: 'Use ecology as a base for applied answers. **Food web loss:** vulture decline in India after diclofenac use shows how losing a scavenger harms the whole system and public health. **Services:** Sundarbans mangroves and cyclone protection. **Succession:** why restoration needs native species and time, and why plantations are not the same as natural forest. **Eutrophication:** urban lakes and sewage.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Energy flows one way. Nutrients cycle.',
      'Ten per cent rule: Lindeman. NPP = GPP minus respiration.',
      'Only the energy pyramid is always upright.',
      'Phosphorus: sedimentary, from rock weathering.',
      'Primary succession: no soil, starts with lichens. Secondary: soil present, faster.',
      'Keystone, umbrella, flagship and indicator species each mean something different.',
      'Ocean producers: phytoplankton, including diatoms and cyanobacteria.',
    ] },
  ],
  sources: [
    { label: 'UPSC Civil Services Prelims 2021, 2022, 2024, 2025, 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'PIB, Ramsar Sites in India: Safeguarding Wetlands of International Importance (25 October 2026)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/oct/doc_10255_20261025_09460901.pdf' },
    { label: 'NCERT Class XII Biology, Ecosystem and Organisms and Populations: reference for further reading', url: 'https://ncert.nic.in/textbook.php' },
  ],
  beyond: {
    refer: [
      { what: 'NCERT Class XII Biology, chapters on Ecosystem and on Organisms and Populations', where: 'NCERT', why: 'UPSC-level wording of these concepts, with diagrams of pyramids and cycles.', url: 'https://ncert.nic.in/textbook.php' },
    ],
    current: [
      { issue: 'Wetlands in the news', link: 'India\'s Ramsar list reached 103 sites as of October 2026. The next note covers the details.', source: 'PIB', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/oct/doc_10255_20261025_09460901.pdf' },
      { issue: 'Core ecology', link: 'No major recent development found. These concepts are static as of November 2026.', source: 'Note author' },
    ],
  },
}
