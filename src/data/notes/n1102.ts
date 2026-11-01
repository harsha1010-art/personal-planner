import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-02',
  summary: 'From the first stone tools to copper-using villages: how people in India moved from foraging to farming, and which sites UPSC expects you to place.',
  minutes: 18,
  hero: { file: 'Rock Shelter 8, Bhimbetka 02.jpg', credit: 'Bernard Gagnon', license: 'CC BY-SA 3.0' },
  heroAlt: 'A rock shelter at Bhimbetka in Madhya Pradesh',
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'History in the strict sense relies on written records. **Prehistory** is the time before writing, known only through tools, bones and art. **Protohistory** covers cultures that had writing we cannot read, such as the Harappans, or that are described only in later records. The main question across this period is simple: how did people move from gathering food to producing it?' },
    { t: 'strata', caption: 'The sequence runs from top (oldest) to bottom (latest). Dates vary by region, and phases overlapped.', layers: [
      { title: 'Lower Palaeolithic', sub: 'Up to about 100,000 years ago. Hand-axes, cleavers and choppers. Food gathering.' },
      { title: 'Middle Palaeolithic', sub: 'Flake tools, including scrapers and points, often made by the Levallois method.' },
      { title: 'Upper Palaeolithic', sub: 'From about 40,000 years ago. Blades and burins, bone tools, ostrich-shell beads.' },
      { title: 'Mesolithic', sub: 'About 10,000-6000 BCE, varying widely. Microliths, early domestication, rock art.' },
      { title: 'Neolithic', sub: 'From about 7000 BCE at Mehrgarh, later elsewhere. Polished tools, farming, pottery, settled villages.' },
      { title: 'Chalcolithic', sub: 'About 2000-700 BCE, outside the Harappan zone. Copper with stone, painted pottery.' },
    ] },
    { t: 'note', kind: 'trap', title: 'These are stages, not dates', text: 'The Neolithic began around 7000 BCE at Mehrgarh, but only around 2500 BCE or later in much of South India. Hunter-gatherers also lived alongside farmers for centuries. Be wary of any option that says something happened "all over India" at once.' },

    { t: 'h', text: 'Palaeolithic: the old stone age' },
    { t: 'p', text: 'India\'s Palaeolithic coincides with the Ice Age, or **Pleistocene**. Sites appear in many regions, but rarely on the Indus and Ganga alluvial plains, because stone is scarce there and later sediment buries old surfaces. People relied on hunting and gathering and did not know farming or pottery.' },
    { t: 'table', head: ['Phase', 'Typical tools', 'Key sites'], rows: [
      ['Lower', 'Hand-axes, cleavers (Acheulian); choppers (Soan)', 'Attirampakkam (TN), Hunsgi and Isampur (Karnataka), Belan valley (UP), Bhimbetka (MP), Soan valley (Pakistan), Didwana (Rajasthan)'],
      ['Middle', 'Flakes: scrapers, borers, points', 'Nevasa (Maharashtra), Bhimbetka, Belan valley, Narmada valley'],
      ['Upper', 'Blades, burins, bone tools', 'Bhimbetka, Baghor (MP), Patne (Maharashtra), Kurnool caves (AP), Belan valley'],
    ] },
    { t: 'list', items: [
      '**Robert Bruce Foote** discovered India\'s first Palaeolithic tool at Pallavaram near Madras in **1863**. He is known as the father of Indian prehistory.',
      'The **Hathnora** skull cap from the Narmada valley in Madhya Pradesh is the best-known early hominin fossil from India. It was found in 1982.',
      '**Patne** has an ostrich eggshell with engraved designs, and **Baghor** has a possible shrine stone. These show early symbolic behaviour.',
    ] },
    { t: 'note', kind: 'recent', title: 'Attirampakkam, 2018', text: 'A study in Nature dated Middle Palaeolithic tools here to about 385,000 years ago. This is much earlier than had been assumed, and it complicates the view that such technology arrived only with later migrations.' },

    { t: 'h', text: 'Mesolithic: small tools, big change' },
    { t: 'p', text: 'As the Holocene brought a warmer climate, grasslands and new animal and plant resources spread. People made **microliths**, tiny tools of chert and chalcedony set in wood or bone handles to make arrows and sickles. Hunting, fishing and gathering continued, but in places they began to keep animals.' },
    { t: 'list', items: [
      '**Bagor** (Rajasthan) and **Adamgarh** (MP): often cited for early evidence of domesticated animals.',
      '**Langhnaj** (Gujarat): a well-known microlith site with skeletal remains.',
      '**Sarai Nahar Rai, Mahadaha, Damdama** (Ganga plain, UP): burials and hearths.',
      '**Chopani Mando** (Belan valley): shows the Palaeolithic to Neolithic transition and has early handmade pottery.',
    ] },
    { t: 'img', pic: { file: 'Rock painting, Bhimbetka, Raisen district, MP.jpg', credit: 'Yann', license: 'CC BY-SA 4.0' }, caption: 'Painting at Bhimbetka. The site has over 700 shelters, and its art runs from the Mesolithic to historic times. It became a UNESCO World Heritage Site in 2003.' },
    { t: 'p', text: '**Rock art** is the Mesolithic\'s great legacy. Bhimbetka was brought to wider attention by **V.S. Wakankar** in 1957. Its paintings show hunting, dancing and animals, mainly in red and white made from natural minerals. Other rock art sites include Adamgarh and Pachmarhi in Madhya Pradesh, Kupgal in Karnataka, and Edakkal in Wayanad, Kerala.' },

    { t: 'h', text: 'Neolithic: the first farmers' },
    { t: 'p', text: 'V. Gordon Childe called this change the **Neolithic Revolution**. Its defining features are polished stone tools, domesticated plants and animals, pottery and permanent villages. The change came at different times and took different forms in each region.' },
    { t: 'table', caption: 'Regional diversity is the key point. Learn one or two features per region.', head: ['Region', 'Sites', 'Signature features'], rows: [
      ['North-west', 'Mehrgarh (Balochistan)', 'Early wheat, barley; cattle, sheep, goats; mud-brick homes; cotton later'],
      ['Kashmir', 'Burzahom, Gufkral', 'Pit dwellings; dogs buried with humans; bone tools'],
      ['Vindhyas', 'Koldihwa, Mahagara, Chopani Mando', 'Early rice; cord-marked pottery'],
      ['Middle Ganga', 'Chirand (Bihar), Lahuradewa (UP)', 'Bone tools at Chirand; early rice at Lahuradewa'],
      ['South', 'Brahmagiri, Maski, Piklihal, Tekkalakota, Hallur, Sanganakallu', 'Cattle herding; millets and pulses; ash mounds at Utnur and Kupgal'],
      ['North-east', 'Daojali Hading, Sarutaru (Assam)', 'Stone tools and cord-marked pottery linked to South-East Asia'],
    ] },
    { t: 'note', kind: 'exam', title: 'Burzahom in Prelims', text: 'Prelims 2021 paired Burzahom with "rock-cut shrines". That is a trap: Burzahom is a Neolithic pit-dwelling site in Kashmir. The same question paired Ganeshwar with copper artefacts and Chandraketugarh with terracotta art.' },

    { t: 'h', text: 'Chalcolithic: copper enters' },
    { t: 'p', text: 'Chalcolithic cultures used copper with stone. Most existed **outside and after** the main Harappan zone, but some were contemporary with it, and **Ganeshwar** in Rajasthan may have supplied copper to Harappan people. They had little or no bronze, and no script. Most sites were villages in the semi-arid zone, where the soil was light and easy to work.' },
    { t: 'table', head: ['Culture', 'Approx. date', 'Region and sites', 'Known for'], rows: [
      ['Kayatha', '2000-1800 BCE', 'Chambal, MP', 'Sturdy red-slipped ware; Harappan contacts'],
      ['Ahar (Banas)', '2800-1500 BCE', 'Rajasthan: Ahar, Gilund', 'Stone-built houses; local copper; little stone tool use at Ahar'],
      ['Malwa', '1700-1400 BCE', 'MP and Deccan: Navdatoli, Eran, Nagda', 'Fine painted pottery; spindle whorls'],
      ['Jorwe', '1400-700 BCE', 'Maharashtra: Jorwe, Nevasa, Daimabad, Inamgaon, Chandoli', 'Urn burials under floors; large settlements'],
      ['Copper hoards and OCP', '2nd millennium BCE', 'Ganga-Yamuna doab', 'Hoards of copper objects; ochre-coloured pottery'],
    ] },
    { t: 'flow', caption: 'What Chalcolithic societies added, and what they lacked.', steps: [
      { title: 'Metal', sub: 'Copper smelting becomes a specialist craft' },
      { title: 'Pottery', sub: 'Black-on-red painted ware is common' },
      { title: 'Rank', sub: 'Inamgaon has a large "chief\'s house" and uneven grave goods' },
      { title: 'Limits', sub: 'No script, little bronze, and no cities' },
    ] },
    { t: 'list', items: [
      '**Burial:** Bodies were placed north-south in Maharashtra and east-west in South India, usually with pots.',
      '**Daimabad** is known for a bronze hoard including a chariot, an exception to the general lack of bronze.',
      '**Decline:** Many Jorwe settlements faded around 700 BCE. A drier climate is the common explanation, but there is no agreement.',
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'exam', title: 'How UPSC asks this topic', text: 'Prelims 2024 gave a table of archaeological sites with their states and descriptions, and asked which rows were correct. It included Inamgaon, Mangadu, Chandraketugarh and Salihundam. So always learn the site, the state and the type of site together, and do it on a map.' },
    { t: 'note', kind: 'mains', title: 'Use it in GS I', text: 'Prehistory rarely appears as a direct Mains question, but rock art is part of Indian art forms. Regional diversity also helps in answers about the ecological roots of Indian culture.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Tools: hand-axe, flake, blade, microlith, polished axe, copper.',
      'Wheat and barley: Mehrgarh. Rice: Koldihwa, Lahuradewa. Millets: South India.',
      'Pit dwellings and dog burials: Burzahom. Ash mounds: Utnur, Kupgal. Bone tools: Chirand.',
      'Urn burials under floors: Inamgaon. Bronze chariot: Daimabad. Copper supply: Ganeshwar.',
    ] },
  ],
  sources: [
    { label: 'R.S. Sharma, Ancient India (NCERT), Ch 4-5' },
    { label: 'UNESCO: Rock Shelters of Bhimbetka', url: 'https://whc.unesco.org/en/list/925/' },
    { label: 'Akhilesh et al., Nature (2018): Early Middle Palaeolithic culture at Attirampakkam', url: 'https://doi.org/10.1038/nature25444' },
    { label: 'UPSC Civil Services Prelims 2021 and 2024, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
}
