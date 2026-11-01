import type { TopicNote } from './types'

export const note: TopicNote = {
  day: '2026-11-27',
  summary: 'India and the US, Russia, China, the EU, UK, Japan, France, Germany and Australia: strategic autonomy, the key defence and trade agreements, and each relationship\'s status as of November 2026.',
  minutes: 22,
  blocks: [
    { t: 'h', text: 'The big picture' },
    { t: 'p', text: 'India does not join military alliances. Its stated approach is **strategic autonomy**, which has grown out of Cold War non-alignment. Today it is often described as **multi-alignment**: buying Russian oil and arms, building technology and defence ties with the US and its partners, and still negotiating with China. The GS II syllabus asks about "effect of policies and politics of developed and developing countries on India\'s interests".' },
    { t: 'p', text: 'The period 2025-26 tested this model. US tariffs hit Indian exports, and India responded by finishing long-pending deals with the UK and the EU and by stabilising ties with China. A **strategic partnership** has no fixed legal meaning. It is a political label for broad, long-term cooperation, and France (1998) is usually cited as India\'s first.' },
    { t: 'table', caption: 'Partnership labels and latest top-level meeting, as of November 2026', head: ['Partner', 'Label and start', 'Latest milestone'], rows: [
      ['USA', 'Comprehensive Global Strategic Partnership (2020)', 'Feb 2026 framework for an interim trade agreement. Not signed as of early October 2026'],
      ['Russia', 'Strategic Partnership (2000); Special and Privileged (2010)', '23rd annual summit, New Delhi, 4-5 December 2025. Date of the 24th is undecided'],
      ['EU', 'Strategic Partnership (2004)', '16th summit, New Delhi, 27 January 2026: FTA talks concluded'],
      ['UK', 'Comprehensive Strategic Partnership (2021)', 'CETA in force from 15 July 2026'],
      ['Japan', 'Special Strategic and Global Partnership (2014)', '16th annual summit, New Delhi, July 2026'],
      ['France', '**Special Global Strategic Partnership** (raised in February 2026, from 1998)', 'Macron visit, 17-19 February 2026'],
      ['Germany', 'Strategic Partnership (2000)', 'Chancellor Merz\'s visit, 12-13 January 2026'],
      ['Australia', 'Comprehensive Strategic Partnership (2020)', 'ECTA trade deal in force since December 2022; CECA talks continue'],
    ] },

    { t: 'h', text: 'United States' },
    { t: 'timeline', items: [
      { when: '1998', what: 'Pokhran-II brings US sanctions, followed by the Jaswant Singh-Talbott dialogue.' },
      { when: '2005-08', what: 'Civil nuclear framework, the **Hyde Act (2006)**, the **123 Agreement** and an NSG waiver in 2008.' },
      { when: '2016', what: 'India is named a **Major Defence Partner**.' },
      { when: '2023-25', what: '**iCET** on critical technology (2023), renamed **TRUST** in 2025. A 10-year defence framework follows in October 2025.' },
      { when: '2025', what: 'US tariffs on Indian goods rise to **50%** by August, including a 25% penalty linked to Russian oil.' },
      { when: 'February 2026', what: 'Joint statement sets out a framework for an **interim trade agreement**, with US tariffs on India at 18%.' },
      { when: 'October 2026', what: 'Goyal meets USTR Greer on the sidelines of a G20 trade ministers\' meeting in Milwaukee. Agriculture and dairy remain sticking points.' },
    ] },
    { t: 'table', caption: 'Foundational defence agreements. A favourite for Prelims.', head: ['Agreement', 'Year', 'Purpose'], rows: [
      ['GSOMIA', '2002', 'Protects shared military information'],
      ['LEMOA', '2016', 'Reciprocal logistics, fuel and repair'],
      ['COMCASA', '2018', 'Secure communications and interoperability'],
      ['BECA', '2020', 'Geospatial intelligence sharing'],
    ] },
    { t: 'note', kind: 'trap', title: 'Agreed framework is not a signed deal', text: 'Some reports loosely say an India-US trade deal has been "sealed". The February 2026 document is a **framework**. The latest official reports I could confirm, from 1 October 2026, describe talks still aiming at an early interim agreement. Check for any change before the exam.' },

    { t: 'h', text: 'Russia' },
    { t: 'list', items: [
      '**History:** Indo-Soviet Treaty of Peace, Friendship and Cooperation, **1971**. The Declaration on Strategic Partnership came in **2000**, and annual summits followed.',
      '**Defence:** S-400 (2018 contract), BrahMos joint venture, Su-30MKI. India has been diversifying its suppliers, and so its import share from Russia has fallen.',
      '**Energy:** Kudankulam nuclear plant. Discounted crude since 2022, which became the trigger for US penalties and EU curbs.',
      '**Connectivity:** International North-South Transport Corridor (Mumbai-Iran-Russia) and the proposed Chennai-Vladivostok maritime corridor.',
      '**December 2025 summit:** 16 agreements were signed, with a programme for economic cooperation up to 2030 and a trade target of **$100 billion by 2030**.',
      '**Limits:** a trade imbalance in Russia\'s favour, payment problems under sanctions, and Russia\'s growing dependence on China.',
    ] },

    { t: 'h', text: 'China as a strategic rival' },
    { t: 'p', text: 'The border history is in the previous note. Strategically, China is India\'s main long-term challenge, and also a supplier it cannot easily replace.' },
    { t: 'compare', caption: 'Why New Delhi both competes and engages', columns: [
      { title: 'Rivalry', items: ['Unsettled boundary and a large troop presence', 'Support for Pakistan, including the CPEC through disputed territory', 'Indian Ocean presence and port access', 'India refuses to endorse the **Belt and Road Initiative**', 'Blocks India in the NSG', 'Export curbs on rare earths and other inputs'] },
      { title: 'Engagement', items: ['Heavy Indian imports of electronics, solar cells and active pharmaceutical ingredients', 'Shared BRICS and SCO membership', 'Shared positions on some climate and trade issues', 'Xi-Modi meetings at Kazan (2024), Tianjin (2025) and New Delhi (September 2026)', 'China chairs BRICS in 2027'] },
    ] },

    { t: 'h', text: 'Europe: EU, UK, France and Germany' },
    { t: 'compare', columns: [
      { title: 'European Union', items: ['**Talks concluded on 27 January 2026**, about 20 years after they first began', 'Signing targeted for **December 2026**, entry into force in 2027 (as of October 2026)', 'First **Security and Defence Partnership**', 'Agenda: "Towards 2030"', 'Friction: **CBAM** carbon tax on steel and aluminium'] },
      { title: 'United Kingdom', items: ['**CETA** signed **24 July 2025**, in force **15 July 2026**', 'Zero duty on about 99% of India\'s exports', '**Double Contribution Convention:** relief on social security payments', 'Vision 2035 roadmap'] },
      { title: 'France', items: ['First strategic partner, 1998', 'Rafale, Scorpene submarines, Jaitapur nuclear plan', 'Horizon 2047 roadmap', 'Feb 2026: India-France Innovation Roadmap 2030 and Year of Innovation', 'Co-founded the **International Solar Alliance** with India'] },
      { title: 'Germany', items: ['Merz\'s first Asia visit as Chancellor, starting in Ahmedabad', 'Declarations on defence industry, semiconductors and critical minerals', 'Supports the India-EU FTA', 'Skilled migration is a growing theme'] },
    ] },
    { t: 'note', kind: 'exam', title: 'Prelims 2026', text: 'UPSC set a question on what did and did not come out of the German Chancellor\'s visit to India in January 2026. So recent leader visits can be tested in detail. Read the official "list of outcomes" for important visits.' },

    { t: 'h', text: 'Indo-Pacific partners' },
    { t: 'table', head: ['Partner', 'What drives it', 'Key items'], rows: [
      ['Japan', 'Shared concern over China; Japanese capital and technology', 'Mumbai-Ahmedabad high-speed rail (Japan noted India\'s aim of priority sections in 2027); Delhi Metro; 2+2 in Tokyo due by end-2026; next summit in Japan in 2027'],
      ['Australia', 'Maritime security, critical minerals, education', 'ECTA (2022); Malabar exercises; Quad partner'],
      ['ASEAN', 'Act East and sea lanes', 'Comprehensive Strategic Partnership (2022); BrahMos sale to the Philippines'],
      ['Gulf', 'Energy, remittances, diaspora', 'India-UAE **CEPA** (2022); **IMEC** corridor announced at the 2023 G20; I2U2'],
    ] },
    { t: 'p', text: 'The groupings themselves, such as the Quad, BRICS and SCO, are covered in the next note.' },
    { t: 'flow', caption: 'How India responded to the tariff shock of 2025: a useful example for "strategic autonomy"', steps: [
      { title: 'US tariffs', sub: 'Up to 50% on many exports, August 2025' },
      { title: 'Hold firm', sub: 'Protect farmers and dairy; defend energy choices' },
      { title: 'Diversify', sub: 'UK CETA in force, EU talks concluded' },
      { title: 'Stabilise', sub: 'Thaw with China; summit with Russia' },
      { title: 'Keep talking', sub: 'Interim US deal still under negotiation' },
    ] },

    { t: 'h', text: 'Exam guide' },
    { t: 'note', kind: 'mains', title: 'Likely angles', text: '(1) Is strategic autonomy still possible in a divided world? **For:** India has kept Russian oil, BRICS and the Quad together. **Against:** dependence on Chinese inputs and on the US market limits its choices. (2) Assess India-US ties beyond trade: defence, technology and diaspora, against tariffs and H-1B friction. (3) Can Russia remain a reliable partner as it moves closer to China? (4) What the EU and UK deals mean for labour-intensive exports, and the risks from CBAM. (5) Middle powers: why France, Japan and Germany matter more as US policy turns unpredictable.' },
    { t: 'h3', text: 'Quick recall' },
    { t: 'list', items: [
      'GSOMIA 2002, LEMOA 2016, COMCASA 2018, BECA 2020.',
      'Indo-Soviet Treaty 1971; India-Russia Strategic Partnership 2000.',
      'UK CETA signed 24 July 2025, in force 15 July 2026.',
      'India-EU FTA talks concluded 27 January 2026, with signing planned for December 2026.',
      'France: Special Global Strategic Partnership, February 2026.',
      'Japan: 16th annual summit, July 2026.',
    ] },
  ],
  sources: [
    { label: 'PIB: India-UK CETA and Agreement on Social Security enter into force', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2285085&lang=1&reg=3' },
    { label: 'GOV.UK: UK-India Trade Deal', url: 'https://www.gov.uk/government/collections/uk-india-trade-deal' },
    { label: 'Prime Minister\'s Office: Joint Statement following the 23rd India-Russia Annual Summit', url: 'https://www.pmindia.gov.in/en/news_updates/joint-statement-following-the-23rd-india-russia-annual-summit/' },
    { label: 'Prime Minister\'s Office: PM meets Russian President on the sidelines of BRICS Summit', url: 'https://www.pmindia.gov.in/en/news_updates/pm-meets-with-the-president-of-the-russian-federation-on-the-sidelines-of-brics-summit/' },
    { label: 'Prime Minister\'s Office: 16th India-Japan Annual Summit Joint Statement', url: 'https://www.pmindia.gov.in/en/news_updates/16th-india-japan-annual-summit-joint-statement/' },
    { label: 'Elysee: India-France Joint Statement, February 2026', url: 'https://www.elysee.fr/en/emmanuel-macron/2026/02/17/india-france-joint-statement-1' },
    { label: 'Prime Minister\'s Office: List of Outcomes, German Chancellor\'s visit', url: 'https://www.pmindia.gov.in/en/news_updates/list-of-outcomes-visit-of-the-chancellor-of-the-federal-republic-of-germany-to-india-january-12-13-2026/' },
    { label: 'Council of the EU: India-EU Summit documents, January 2026', url: 'https://data.consilium.europa.eu/doc/document/ST-5727-2026-INIT/en/pdf' },
    { label: 'Tribune: India-EU FTA legal scrubbing completed', url: 'https://www.tribuneindia.com/news/business/india-eu-fta-legal-scrubbing-completed-signing-expected-by-year-end-govt-sources/' },
    { label: 'Akashvani News: Goyal meets USTR Greer, 1 October 2026', url: 'https://newsonair.gov.in/union-minister-piyush-goyal-meets-us-trade-representative-jamieson-greer-as-part-of-indian-efforts-us-to-reach-mutually-beneficial-trade-agreement/' },
    { label: 'EY: US-India framework for Interim Trade Agreement, February 2026', url: 'https://www.ey.com/en_in/technical/alerts-hub/2026/02/united-states-india-announce-framework-for-interim-trade-agreement' },
    { label: 'UPSC Civil Services Prelims 2026, GS Paper I', url: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
  ],
  beyond: {
    refer: [
      { what: 'Joint statements and lists of outcomes for leader visits', where: 'Ministry of External Affairs', why: 'UPSC tests exact outcomes, and only these lists are reliable for that.', url: 'https://www.mea.gov.in/' },
      { what: 'FTA texts and factsheets', where: 'Department of Commerce', why: 'For exact tariff lines and timelines in the UK and EU agreements.', url: 'https://www.commerce.gov.in/' },
    ],
    current: [
      { issue: 'India-US interim trade agreement', link: 'Still being negotiated when Goyal met USTR Greer around 1 October 2026.', source: 'Akashvani News', url: 'https://newsonair.gov.in/union-minister-piyush-goyal-meets-us-trade-representative-jamieson-greer-as-part-of-indian-efforts-us-to-reach-mutually-beneficial-trade-agreement/' },
      { issue: 'India-EU FTA signing', link: 'Expected in December 2026. Reports differ on the exact day, so confirm it when it happens.', source: 'Tribune', url: 'https://www.tribuneindia.com/news/business/india-eu-fta-legal-scrubbing-completed-signing-expected-by-year-end-govt-sources/' },
      { issue: 'India-UK CETA', link: 'Entered into force on 15 July 2026, along with the social security agreement.', source: 'PIB', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2285085&lang=1&reg=3' },
      { issue: '24th India-Russia summit', link: 'Modi accepted an invitation to Russia, with dates to be fixed, as of September 2026.', source: 'Prime Minister\'s Office', url: 'https://www.pmindia.gov.in/en/news_updates/pm-meets-with-the-president-of-the-russian-federation-on-the-sidelines-of-brics-summit/' },
    ],
  },
}
