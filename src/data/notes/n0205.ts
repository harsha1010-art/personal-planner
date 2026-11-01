import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2027-02-05',
  summary: 'Genes, gene editing, vaccines by platform, GM crops and India\'s biotech and health policy. UPSC tests this topic in nearly every paper, often with terms from the news.',
  minutes: 24,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'Biotechnology uses living cells and molecules for medicine, farming and industry. UPSC likes this area because the science is exact, so statements can be clearly true or false. Past papers have asked about Cas9, RNAi, recombinant vector vaccines, monoclonal antibodies, biofilms and genetic medicine. You do not need a biology degree. You need clear meanings for about 30 terms.' },
    { t: 'flow', caption: 'The central dogma: how information in DNA becomes a working protein. mRNA vaccines and many gene therapies work within this chain.', steps: [
      { title: 'DNA', sub: 'Stored instructions in the nucleus' },
      { title: 'Transcription', sub: 'DNA copied into mRNA' },
      { title: 'mRNA', sub: 'Carries the message' },
      { title: 'Translation', sub: 'Ribosomes read mRNA' },
      { title: 'Protein', sub: 'Does the work in the cell' },
    ] },

    { t: 'h', text: 'Core terms' },
    { t: 'table', head: ['Term', 'Meaning', 'Exam link'], rows: [
      ['Genome', 'All the genetic material of an organism', 'Genome India; Human Genome Project (finished 2003)'],
      ['Transcriptome', 'The full range of mRNA expressed by an organism', 'Prelims 2016'],
      ['Microsatellite DNA', 'Short repeating DNA used to compare populations and study relationships among species', 'Prelims 2023'],
      ['Metagenomics', 'Reading DNA from all organisms in a sample at once. "Aerial" versions sample a whole habitat', 'Prelims 2023'],
      ['Plasmid', 'Small circular DNA in bacteria; often used as a carrier in gene work', 'Recombinant DNA'],
      ['Stem cells', 'Cells that can renew and turn into other cell types. **Induced pluripotent stem cells** are made by reprogramming adult cells', 'Prelims 2020'],
      ['Biofilm', 'Microbes in a protective layer on surfaces. Forms on implants and food surfaces and resists antibiotics', 'Prelims 2022'],
      ['Probiotics', 'Helpful live microbes, including both bacteria and yeasts. Many occur naturally in the gut', 'Prelims 2022'],
      ['ACE2', 'A cell surface receptor used by SARS-CoV-2 to enter cells', 'Prelims 2021'],
    ] },

    { t: 'h', text: 'Editing and treating genes' },
    { t: 'table', caption: 'Know what each tool actually does.', head: ['Tool', 'What it does', 'Remember'], rows: [
      ['Recombinant DNA', 'Joins DNA from different sources', 'Insulin made in bacteria'],
      ['CRISPR-Cas9', 'A guide RNA leads Cas9 "molecular scissors" to cut DNA at a chosen site', 'Nobel in Chemistry 2020: Charpentier and Doudna. Prelims 2019 asked what Cas9 is'],
      ['RNA interference (RNAi)', 'Small RNAs silence a gene\'s message without changing DNA', 'Prelims 2019: uses in gene silencing, crops and therapies'],
      ['Gene therapy', 'Corrects or compensates for a faulty gene', 'Prelims 2026: carried by engineered viruses or lipid nanoparticles'],
      ['CAR-T cell therapy', 'Patient\'s T cells are engineered to attack cancer', 'NexCAR19 is India\'s home-grown CAR-T therapy'],
      ['Monoclonal antibodies', 'Laboratory-made proteins that bind one specific target', 'Prelims 2025: man-made proteins, bind specific antigens, used against infections such as Nipah'],
      ['Mitochondrial replacement', 'Replaces faulty mitochondria in an egg or embryo', 'Called "three-parent" babies; ethical debate'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026: genetic medicine', text: 'UPSC tested three claims. Genetic medicines correct or compensate for faulty genes (true). Engineered viruses and lipid nanoparticles act as carriers (true). They alter the entire DNA sequence (false: they target specific genes). So read words like "entire", "only" and "all" with suspicion.' },
    { t: 'note', kind: 'trap', title: 'Viruses in Prelims', text: 'Prelims 2025 offered three statements: no virus survives in the ocean, no virus can infect bacteria, no virus can change transcription in host cells. All three are wrong. **Bacteriophages** infect bacteria, and viruses are abundant in seas. Prelims 2021 swapped virus types: **adenoviruses have double-stranded DNA**, while **retroviruses have single-stranded RNA**.' },

    { t: 'h', text: 'Vaccines' },
    { t: 'p', text: 'A vaccine trains the immune system with a harmless form or part of a pathogen. Memory cells then respond faster to real infection. Platforms differ in what they deliver.' },
    { t: 'table', head: ['Platform', 'What is given', 'Examples'], rows: [
      ['Live attenuated', 'Weakened living pathogen', 'BCG, MMR, oral polio'],
      ['Inactivated', 'Killed pathogen', '**Covaxin**, injectable polio'],
      ['Subunit, protein', 'One purified protein', 'Hepatitis B, Corbevax'],
      ['Toxoid', 'Deactivated toxin', 'Diphtheria, tetanus'],
      ['Conjugate', 'Sugar coat linked to a protein', 'Pneumococcal (PCV), Hib'],
      ['Viral vector', 'Harmless virus carrying a gene for the antigen', '**Covishield**, **Sputnik V**'],
      ['mRNA', 'mRNA in lipid nanoparticles; body makes the antigen', 'Pfizer, Moderna, Gennova\'s GEMCOVAC. Nobel in Medicine 2023: Kariko and Weissman'],
      ['DNA', 'DNA plasmid', '**ZyCoV-D**, the first DNA vaccine for humans authorised for COVID-19'],
    ] },
    { t: 'note', kind: 'exam', title: 'Vaccines in past Prelims', text: '**2019:** the false statement was that hepatitis B has no vaccine. It has one. Hepatitis C does not. **2020:** Pneumococcal Conjugate Vaccines were tested, including the false claim of "no side effects". **2021:** recombinant vector vaccines. **2022:** Covishield is **not** on an mRNA platform (it is a viral vector). Sputnik V is vector-based, and Covaxin is inactivated.' },
    { t: 'compare', caption: 'India\'s immunisation framework.', columns: [
      { title: 'Programme', items: ['**Universal Immunisation Programme** (1985)', '**Mission Indradhanush** (2014) targets missed children', 'Polio-free certification in March 2014'] },
      { title: 'New', items: ['**HPV vaccination:** launched nationwide at Ajmer on 28 February 2026', 'Free for girls aged 14, about 1.15 crore', 'Covers HPV 16 and 18 (cervical cancer), and 6 and 11'] },
    ] },
    { t: 'p', text: '**Antimicrobial resistance (AMR)** happens when microbes survive drugs meant to kill them. Overuse in people, poultry and livestock, along with poor sanitation, drives it. Biofilms make it worse. India\'s response is the National Action Plan on AMR, first issued in 2017. Mention it in any health-security answer.' },

    { t: 'h', text: 'GM and gene-edited crops' },
    { t: 'compare', caption: 'Why the law treats these two differently.', columns: [
      { title: 'Genetically modified (GM)', items: ['Adds foreign genes', 'Approved by **GEAC**, under rules of 1989 under the Environment (Protection) Act', '**Bt cotton** (2002) is the only GM crop cultivated commercially in India', 'Bt brinjal stopped by moratorium, 2010'] },
      { title: 'Gene-edited', items: ['Changes a crop\'s own genes, with no foreign DNA in the end product', '**SDN-1 and SDN-2** types exempted from GM biosafety rules in 2022', 'Two rice varieties announced in May 2025: **Kamala** (DRR Dhan 100) and **Pusa DST Rice 1**', 'Critics want tighter checks'] },
    ] },
    { t: 'timeline', caption: 'GM mustard, the live dispute.', items: [
      { when: 'October 2022', what: 'GEAC recommends environmental release of **DMH-11**, developed at Delhi University.' },
      { when: 'July 2024', what: 'Supreme Court gives a **split verdict**. Both judges ask the government to frame a national policy on GM crops.' },
    ] },
    { t: 'note', kind: 'exam', title: 'Crops in past Prelims', text: '**2018** asked about GM mustard. **2021:** Bollgard I and II refer to **GM crop plants**. **2024** tested whether Indian law prohibits import of GM food without approval of the competent authority. Remember that GEAC, not the Agriculture Ministry, is the GM regulator.' },
    { t: 'note', kind: 'mains', title: 'Two sides on GM', text: '**For:** higher yield, less pesticide (as Bt cotton first showed), and resilience, with India importing a lot of edible oil. **Against:** pink bollworm resistance in Bt cotton, seed monopoly, herbicide use, harm to bees, and irreversibility. **Balance:** case-by-case, science-based approval, liability rules, and transparent trial data.' },

    { t: 'h', text: 'India\'s biotech policy' },
    { t: 'table', head: ['Initiative', 'Key point'], rows: [
      ['Department of Biotechnology', 'Set up in 1986, under the Ministry of Science and Technology'],
      ['Genome India', 'DBT-funded catalogue of Indian genetic diversity, sequencing **10,000 genomes**'],
      ['BioE3 Policy', 'Biotechnology for Economy, Environment and Employment; approved in 2024; pushes bio-manufacturing and a circular bioeconomy'],
      ['Biopharma SHAKTI', 'Announced in Budget 2026-27 to build India as a biopharma hub'],
      ['ART and Surrogacy Acts', 'Both 2021. Commercial surrogacy is banned; altruistic surrogacy allowed'],
      ['National Sickle Cell Mission', 'Launched in 2023, aims to end the disease as a public health problem by 2047'],
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026: Genome India', text: 'UPSC asked whether Genome India is a part of the Human Genome Project (false; it is a separate Indian programme), whether DBT funds it (true), and whether its main aim is a catalogue of India\'s genetic diversity (true).' },
    { t: 'note', kind: 'trap', title: 'Nobel confusion', text: '**2020 Chemistry:** CRISPR. **2023 Medicine:** mRNA vaccine science. **2024 Medicine:** microRNA, by Ambros and Ruvkun. RNAi itself got the Nobel in 2006. Do not swap these.' },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '**Ethics:** germline editing and genetic privacy, including data from Genome India. **Equity:** cost of gene therapies, and access for rural patients. **Food:** GM and gene editing. **Health security:** pandemic readiness, vaccine manufacturing, AMR. **Economy:** BioE3 and jobs. Link science to governance, and be balanced.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'Cas9: molecular scissors. RNAi: silences a gene. Neither is a herbicide.',
      'Covishield and Sputnik V: vector. Covaxin: inactivated. ZyCoV-D: DNA.',
      'Adenovirus: double-stranded DNA. Retrovirus: single-stranded RNA.',
      'GEAC: GM approvals. Bt cotton: only commercial GM crop.',
      'SDN-1 and SDN-2: exempted, 2022.',
      'Genome India: 10,000 genomes, DBT.',
      'HPV national programme: 28 February 2026, girls aged 14.',
    ] },
  ],
  sources: [
    { label: 'UPSC Civil Services Prelims 2016, 2018-2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
    { label: 'PIB, Cervical Cancer Vaccination Campaign Launched (28 February 2026)', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc2026228807201.pdf' },
    { label: 'PIB, Transforming India into a Global Biopharma Hub, Budget 2026-27 Series', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc202622776701.pdf' },
    { label: 'PIB, two genome-edited rice varieties announced', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2126802&reg=48&lang=2' },
  ],
  beyond: {
    refer: [
      { what: 'NCERT Class XII Biology, chapters on molecular basis of inheritance and on biotechnology', where: 'NCERT', why: 'For depth on DNA, PCR and recombinant technology, if the terms above feel thin.', url: 'https://ncert.nic.in/textbook.php' },
      { what: 'Genetic Engineering Appraisal Committee', where: 'MoEFCC', why: 'Status of GM decisions changes, so check near the exam.', url: 'https://moef.gov.in/' },
    ],
    current: [
      { issue: 'National HPV programme', link: 'Launched in Ajmer on 28 February 2026 for girls aged 14.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2234009&reg=3&lang=2' },
      { issue: 'Biopharma SHAKTI', link: 'Budget 2026-27 announcement on biopharma capacity (February 2026).', source: 'PIB', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc202622776701.pdf' },
      { issue: 'GM policy', link: 'I could not confirm a final national GM policy or a final GM mustard ruling as of November 2026. Check before the exam.', source: 'Note author' },
    ],
  },
}
