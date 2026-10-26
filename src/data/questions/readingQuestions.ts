import { Question } from '../../types/bept';

const PASSAGE_1 = `Deep-sea bioluminescence—the biochemical production and emission of visible cold light by living marine organisms—represents one of the most widespread and ecologically vital evolutionary adaptations in oceanic ecosystems. In the abyssal and bathypelagic zones, which lie well beyond the reach of solar penetration (below 1,000 meters), natural ambient light is entirely nonexistent. Under these perpetually dark and high-pressure regimes, over ninety percent of resident organisms, spanning bacteria, cnidarians, cephalopods, and teleost fishes, possess specialized light-generating organs known as photophores.

Biochemically, bioluminescent light is generated via an exergonic oxidation reaction catalyzed by an enzyme termed luciferase, which acts upon a light-emitting pigment substrate called luciferin. Unlike artificial incandescent illumination, which expends significant thermal energy, bioluminescence is remarkably efficient; nearly ninety-eight percent of the consumed chemical energy is converted directly into radiant light, releasing negligible ambient heat. The spectral frequency emitted by most bathypelagic species peaks precisely in the blue-green spectrum (wavelengths approximately 470 to 490 nanometers). This chromatic selectivity is not fortuitous: blue-green wavelengths exhibit the lowest absorption and scattering coefficients in saline water, thereby propagating over maximal physical distances.

Ecologically, bioluminescence fulfills a multifaceted array of survival functions. Organisms deploy photophores for predation, such as the anglerfish's bioluminescent esca (a modified dorsal fin ray suspended over its jaws to lure unwary prey). Conversely, species utilize sudden luminous bursts or glowing cloud ejections to blind or disorient pursuing predators, granting crucial moments for escape. Furthermore, counterillumination—wherein ventral photophores emit light that precisely matches the intensity and color of downwelling ambient downlight from the surface—effectively obliterates an organism's silhouette from the perspective of predators scanning upward from below. Finally, species-specific temporal flash patterns facilitate conspecific mate recognition in the otherwise vast, featureless void of the oceanic abyss.`;

const PASSAGE_2 = `The mid-fifteenth-century advent of Johannes Gutenberg's movable type printing press in Mainz, Germany, is universally regarded by cultural historians as a foundational catalyst for early modern European civilization. Before this mechanical watershed, the dissemination of written knowledge was constrained by the labor-intensive scriptorium traditions of medieval monasteries. Scribes painstakingly hand-copied manuscript codices on animal parchment or vellum. Consequently, book ownership was an elite prerogative restricted to ecclesiastical institutions and royalty, while literacy rates among the general populace remained dismally low.

Gutenberg's breakthrough did not stem merely from the concept of movable type, which had in fact been pioneered centuries earlier in Song Dynasty China and Korea using ceramic and metallic matrices. Rather, Gutenberg's enduring genius lay in synthesizing a comprehensive industrial system: the invention of an adjustable hand mold for casting durable lead-tin alloy type, the formulation of a viscous oil-based ink that adhered smoothly to metal, and the adaptation of a heavy screw press originally used for pressing agricultural olives and wine grapes. This integrated assemblage enabled the unprecedented mass replication of identical textual editions with remarkable speed, legibility, and geometric precision.

The sociopolitical ramifications unfolded with astonishing rapidity. By 1500, printing presses operated in over two hundred European cities, generating an estimated twenty million volumes—exceeding the total aggregate output produced by European scribes over the preceding millennium. This explosion of accessible print decentralized intellectual authority, breaking the monopolistic control previously exercised by clerical hierarchies over biblical interpretation and scholarly dogma. Vernacular translations of classical and religious treatises flourished, standardizing national languages and galvanizing the Protestant Reformation, the Scientific Revolution, and the Enlightenment.`;

const PASSAGE_3 = `Carbon demonstrates an extraordinary capacity to form divergent allotropic crystal structures with vastly contrasting physical and chemical attributes. The two most quintessential natural allotropes of pure carbon are diamond and graphite, whose divergent characteristics originate directly from their localized atomic bonding geometry.

In a diamond lattice, each carbon atom undergoes sp3 hybridization, forming four rigid, covalent sigma bonds directed toward the vertices of a regular tetrahedron. This continuous three-dimensional network of equilateral covalent bonds produces an exceptionally tight atomic packing density. Consequently, diamond is the hardest naturally occurring mineral on Mohs scale (ranking at a definitive 10), possesses an extraordinary bulk modulus, and displays remarkable optical clarity and dispersion. Thermally, diamond functions as a superior heat conductor due to the strong stiffness of its lattice vibrations (phonons), yet it remains an electrical insulator because all valence electrons are tightly localized within covalent bonds.

In contrast, graphite exhibits sp2 hybridization, wherein each carbon atom bonds covalently to only three neighbors within planar hexagonal sheets, leaving one delocalized pi electron per carbon atom free to migrate across the plane. These planar layers are held together merely by weak, non-directional van der Waals dispersion forces. As a result, the adjacent sheets can readily cleave and slip past one another under minimal tangential shear stress, rendering graphite extremely soft, slippery, and an ideal dry solid-state industrial lubricant. Moreover, the mobile delocalized electrons confer high electrical conductivity parallel to the basal planes, making graphite widely favored for electrodes and galvanic cells. If diamond is heated in an anaerobic vacuum without oxygen to approximately 1,500 degrees Celsius, it spontaneously rearranges its crystalline lattice to achieve the lower thermodynamic equilibrium state of graphite.`;

const PASSAGE_4 = `The demographic transition of the United States from an agrarian hinterland to an urbanized industrial titan during the late nineteenth and early twentieth centuries revolutionized the fundamental fabric of American society. Prior to this epoch, the vast majority of the population resided in dispersed rural homesteads and agricultural hamlets. The United States Census Bureau first officially categorized the national population into rural and urban classifications in the census of 1870, arbitrarily designating any incorporated municipality with 8,000 or more inhabitants as urban. By the subsequent census iterations, this threshold was refined to 2,500 residents to capture the proliferating manufacturing mill towns.

The momentum of urbanization accelerated dramatically following the American Civil War, propelled by the synergistic interaction of mechanized agriculture and expanding manufacturing conglomerates. Innovations like the steam tractor, mechanical reaper, and combine harvester drastically curtailed the agrarian labor required to cultivate staple crops, precipitating an exodus of farm laborers toward burgeoning urban hubs. Simultaneously, transcontinental railroad networks converged upon metropolitan nodal points like Chicago, Detroit, and Pittsburgh, channeling raw agrarian commodities directly into gigantic slaughterhouses, steel foundries, and automated factories.

This domestic rural out-migration was reinforced by unprecedented waves of international immigration, primarily from southern and eastern Europe. Arriving at Atlantic ports with limited capital, millions of immigrants settled in dense ethnic enclaves within major industrial cities, providing the labor force that fueled the nation's industrial output. By the landmark census of 1920, the demographic watershed was formally crossed: for the first time in United States history, the urban population surpassed the rural population, permanently altering political dynamics, architectural topologies, and cultural institutions.`;

const PASSAGE_5 = `Urban planning in the post-industrial era has increasingly turned toward architectural integration, wherein municipal infrastructure, green public commons, and functional residential quarters coalesce into unified ecological corridors. Historical settlements were frequently distinguished by haphazard growth, with factories, residential tenement blocks, and commercial markets coexisting without sanitary zoning or transportation planning. Modern civic design, in contrast, applies deliberate zoning protocols that segregate toxic industrial activity while deliberately interweaving high-density residential hubs with mass public transit arteries.

Central to this modern discipline is the concept of transit-oriented development (TOD). Rather than subsidizing decentralized suburban sprawl dependent on private automobiles, TOD concentrates commercial retail, civic institutions, and multi-family housing within a five-to-ten-minute pedestrian catchment radius of rapid transit stations. Empirical studies across metropolitan centers demonstrate that TOD implementations substantially decrease per capita carbon emissions, mitigate vehicular traffic congestion, and stimulate localized retail commerce.

Simultaneously, the integration of biophilic design principles—incorporating vegetative green roofs, urban tree canopies, and permeable bio-swales—addresses the chronic urban heat island effect caused by vast expanses of asphalt and concrete. By restoring natural hydrological infiltration and providing restorative psychological spaces for urban dwellers, modern municipal architecture transforms formerly stark concrete environments into resilient, sustainable habitats.`;

export const readingQuestions: Question[] = [
  // --- PASSAGE 1: QUESTIONS 91 - 100 (Deep-Sea Bioluminescence) ---
  {
    id: 91,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 91,
    title: 'Question 91',
    prompt: 'What is the primary topic of the passage?',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'The biochemical mechanics and evolutionary purposes of deep-sea bioluminescence.' },
      { key: 'B', text: 'The industrial harvesting of cold light for commercial lighting.' },
      { key: 'C', text: 'The effects of solar radiation on marine plankton species.' },
      { key: 'D', text: 'Comparative anatomical structures of terrestrial and marine predators.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf pertama hingga ketiga secara komprehensif menguraikan mekanisme biokimia (enzim luciferase, substrat luciferin, efisiensi energi) dan fungsi adaptasi evolusioner (predasi, pertahanan, kamuflase counterillumination, komunikasi kawin).',
    strategyTip: 'Main idea mencakup keseluruhan teks, bukan hanya satu detail paragraf.'
  },
  {
    id: 92,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 92,
    title: 'Question 92',
    prompt: 'The word "perpetually" in paragraph 1 is closest in meaning to',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'constantly' },
      { key: 'B', text: 'temporarily' },
      { key: 'C', text: 'seasonally' },
      { key: 'D', text: 'partially' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "perpetually" bermakna terus-menerus tanpa henti atau abadi ("constantly / continuously").',
    strategyTip: 'Vocabulary in context: "perpetually dark" = selalu gelap gulita tanpa sinar matahari.'
  },
  {
    id: 93,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 93,
    title: 'Question 93',
    prompt: 'According to paragraph 1, approximately what percentage of deep-sea organisms possess photophores?',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'Over ninety percent.' },
      { key: 'B', text: 'Exactly fifty percent.' },
      { key: 'C', text: 'Fewer than ten percent.' },
      { key: 'D', text: 'Approximately twenty-five percent.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan: "over ninety percent of resident organisms, spanning bacteria, cnidarians, cephalopods, and teleost fishes, possess specialized light-generating organs known as photophores".',
    strategyTip: 'Scanning detail: cari kata kunci persentase "percent" di paragraf 1.'
  },
  {
    id: 94,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 94,
    title: 'Question 94',
    prompt: 'The word "exergonic" in paragraph 2 is used to describe a reaction that',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'releases energy' },
      { key: 'B', text: 'absorbs ambient heat' },
      { key: 'C', text: 'requires intense solar light' },
      { key: 'D', text: 'destroys enzymes' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam biokimia, reaksi "exergonic" adalah reaksi yang melepaskan energi ("releases energy"), sebagaimana ditunjukkan oleh emisi cahaya (radiant light).',
    strategyTip: 'Petunjuk konteks kalimat: menghasilkan cahaya dingin dan memancarkan radiasi.'
  },
  {
    id: 95,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 95,
    title: 'Question 95',
    prompt: 'Why do most deep-sea bioluminescent emissions peak in the blue-green spectrum?',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'Blue-green wavelengths travel farthest through seawater with minimal absorption.' },
      { key: 'B', text: 'Blue-green light is the only color visible to human observers.' },
      { key: 'C', text: 'Organisms lack the enzymes necessary to produce yellow light.' },
      { key: 'D', text: 'Predators are completely blind to blue-green illumination.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 2 menyatakan: "blue-green wavelengths exhibit the lowest absorption and scattering coefficients in saline water, thereby propagating over maximal physical distances".',
    strategyTip: 'Cari alasan ilmiah di balik fenomena pada teks paragraf 2.'
  },
  {
    id: 96,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 96,
    title: 'Question 96',
    prompt: 'The word "negligible" in paragraph 2 is closest in meaning to',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'insignificant' },
      { key: 'B', text: 'hazardous' },
      { key: 'C', text: 'substantial' },
      { key: 'D', text: 'beneficial' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "negligible" berarti sangat kecil atau remeh sehingga dapat diabaikan ("insignificant / trivial").',
    strategyTip: 'Negligible heat = panas yang sangat sedikit hingga dapat diabaikan.'
  },
  {
    id: 97,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 97,
    title: 'Question 97',
    prompt: 'How does counterillumination protect an organism from predators?',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'By matching downwelling light to obscure its silhouette from below.' },
      { key: 'B', text: 'By producing a blinding explosion of high-temperature sparks.' },
      { key: 'C', text: 'By mimicking the warning colors of poisonous jellyfish.' },
      { key: 'D', text: 'By repelling predators through sharp electrical discharges.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 3 menjelaskan: "ventral photophores emit light that precisely matches the intensity and color of downwelling ambient downlight... effectively obliterates an organism\'s silhouette from the perspective of predators scanning upward".',
    strategyTip: 'Scanning istilah "counterillumination" pada paragraf 3.'
  },
  {
    id: 98,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 98,
    title: 'Question 98',
    prompt: 'The anglerfish\'s bioluminescent organ is an example of light used for',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'predation' },
      { key: 'B', text: 'thermoregulation' },
      { key: 'C', text: 'photosynthesis' },
      { key: 'D', text: 'navigation map creation' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyebutkan: "Organisms deploy photophores for predation, such as the anglerfish\'s bioluminescent esca... to lure unwary prey".',
    strategyTip: 'Kaitkan contoh anglerfish dengan kategori fungsi "predation" (pemangsaan).'
  },
  {
    id: 99,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 99,
    title: 'Question 99',
    prompt: 'The word "conspecific" in paragraph 3 refers to organisms that',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'belong to the same species' },
      { key: 'B', text: 'prey on other bioluminescent creatures' },
      { key: 'C', text: 'live exclusively in shallow coral reefs' },
      { key: 'D', text: 'lack reproductive capabilities' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam terminologi biologi, awalan "con-" (bersama) + "specific" (spesies) merujuk pada individu dari spesies yang sama ("belonging to the same biological species").',
    strategyTip: 'Etimologi akar kata biologi: conspecific = sesama spesies.'
  },
  {
    id: 100,
    section: 'reading',
    subSection: 'Passage 1: Deep-Sea Bioluminescence',
    questionNumber: 100,
    title: 'Question 100',
    prompt: 'It can be inferred from the passage that incandescent artificial bulbs',
    passageId: 1,
    passageTitle: 'Deep-Sea Bioluminescence',
    passageText: PASSAGE_1,
    options: [
      { key: 'A', text: 'waste much more energy as heat than bioluminescent organisms do.' },
      { key: 'B', text: 'convert ninety-eight percent of their electricity into light.' },
      { key: 'C', text: 'were modeled directly after the photophores of deep-sea fishes.' },
      { key: 'D', text: 'function more effectively under high hydrostatic pressure.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks membandingkan: "Unlike artificial incandescent illumination, which expends significant thermal energy, bioluminescence is remarkably efficient; nearly ninety-eight percent... is converted into radiant light". Hal ini menyiratkan lampu pijar membuang banyak energi menjadi panas.',
    strategyTip: 'Inference pertanyaan komparasi: lampu pijar boros panas dibanding bioluminesensi.'
  },

  // --- PASSAGE 2: QUESTIONS 101 - 110 (Gutenberg and Printing Revolution) ---
  {
    id: 101,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 101,
    title: 'Question 101',
    prompt: 'What was the primary barrier to book ownership before Gutenberg\'s invention?',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'Books had to be laboriously hand-copied by scribes on expensive parchment.' },
      { key: 'B', text: 'Monarchs banned all written literature throughout Europe.' },
      { key: 'C', text: 'Paper had not yet been manufactured anywhere in the world.' },
      { key: 'D', text: 'The Latin language was incomprehensible to scholars.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 1 menjelaskan bahwa sebelum Gutenberg, pengetahuan tertulis dibatasi oleh metode salinan tangan oleh para juru tulis monastik (scribes) yang memakan waktu lama pada bahan perkamen hewan yang mahal.',
    strategyTip: 'Cari kata kunci "labor-intensive scriptorium" dan "hand-copied".'
  },
  {
    id: 102,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 102,
    title: 'Question 102',
    prompt: 'The word "watershed" in paragraph 1 is closest in meaning to',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'turning point' },
      { key: 'B', text: 'disaster' },
      { key: 'C', text: 'water container' },
      { key: 'D', text: 'minor event' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata kiasan "watershed" berarti titik balik bersejarah atau tonggak perubahan besar ("turning point / landmark event").',
    strategyTip: 'Watershed moment / event = titik balik revolusioner.'
  },
  {
    id: 103,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 103,
    title: 'Question 103',
    prompt: 'The author mentions Song Dynasty China and Korea in paragraph 2 to',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'acknowledge that movable type had been invented earlier in East Asia.' },
      { key: 'B', text: 'prove that Gutenberg visited Asia to study metallurgic crafts.' },
      { key: 'C', text: 'demonstrate that European presses were inferior to Asian models.' },
      { key: 'D', text: 'argue that Chinese books were cheaper than German publications.' }
    ],
    correctAnswer: 'A',
    explanation: 'Penulis menyatakan: "which had in fact been pioneered centuries earlier in Song Dynasty China and Korea", untuk mengakui (acknowledge) bahwa prinsip cetak huruf lepas telah dirintis lebih dahulu di Asia Timur.',
    strategyTip: 'Tujuan retoris penulis (author\'s purpose): mengakui preseden historis.'
  },
  {
    id: 104,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 104,
    title: 'Question 104',
    prompt: 'Which of the following was NOT part of Gutenberg\'s integrated printing system?',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'Electronic digital typesetting software.' },
      { key: 'B', text: 'An adjustable hand mold for casting durable alloy type.' },
      { key: 'C', text: 'A viscous oil-based printing ink.' },
      { key: 'D', text: 'An adapted agricultural wooden screw press.' }
    ],
    correctAnswer: 'A',
    explanation: 'Semua opsi B, C, dan D disebutkan sebagai tiga pilar penemuan Gutenberg pada paragraf 2. Opsi A (perangkat lunak digital elektronik) adalah anakronisme dan tidak ada pada abad ke-15.',
    strategyTip: 'Negative factual question ("NOT"): cari hal yang mustahil ada di era tersebut.'
  },
  {
    id: 105,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 105,
    title: 'Question 105',
    prompt: 'The word "viscous" in paragraph 2 is closest in meaning to',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'thick and sticky' },
      { key: 'B', text: 'watery and thin' },
      { key: 'C', text: 'bright and transparent' },
      { key: 'D', text: 'fragrant' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "viscous" merujuk pada zat cair yang kental, pekat, dan lengket ("thick, syrupy, sticky"), yang melekat sempurna pada logam huruf cetak.',
    strategyTip: 'Viscous ink = tinta kental berbahan dasar minyak.'
  },
  {
    id: 106,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 106,
    title: 'Question 106',
    prompt: 'According to paragraph 3, how many printed volumes had been produced in Europe by 1500?',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'An estimated twenty million.' },
      { key: 'B', text: 'Fewer than two hundred.' },
      { key: 'C', text: 'Approximately one thousand.' },
      { key: 'D', text: 'Ten billion.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan: "generating an estimated twenty million volumes—exceeding the total aggregate output produced by European scribes over the preceding millennium".',
    strategyTip: 'Scanning angka: "twenty million volumes".'
  },
  {
    id: 107,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 107,
    title: 'Question 107',
    prompt: 'The word "decentralized" in paragraph 3 means',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'dispersed from a central monopolistic source' },
      { key: 'B', text: 'strictly confined to royal palaces' },
      { key: 'C', text: 'eliminated completely from society' },
      { key: 'D', text: 'moved to a new capital city' }
    ],
    correctAnswer: 'A',
    explanation: '"Decentralized" bermakna mendistribusikan kekuasaan atau kontrol dari satu pusat monopoli ke berbagai pihak yang lebih luas ("dispersed away from a single authority").',
    strategyTip: 'Lawan kata dari centralized/monopolistic.'
  },
  {
    id: 108,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 108,
    title: 'Question 108',
    prompt: 'How did printing in the vernacular affect national languages?',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'It helped standardize regional dialects into formal national languages.' },
      { key: 'B', text: 'It replaced all local languages with classical Greek.' },
      { key: 'C', text: 'It caused languages to disappear entirely.' },
      { key: 'D', text: 'It prohibited people from writing poetry.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks paragraf 3 menyatakan: "Vernacular translations of classical and religious treatises flourished, standardizing national languages...".',
    strategyTip: 'Kaitkan "vernacular" dengan "standardizing national languages".'
  },
  {
    id: 109,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 109,
    title: 'Question 109',
    prompt: 'The word "galvanizing" in paragraph 3 is closest in meaning to',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'stimulating and accelerating' },
      { key: 'B', text: 'delaying and impeding' },
      { key: 'C', text: 'coating with zinc' },
      { key: 'D', text: 'critically evaluating' }
    ],
    correctAnswer: 'A',
    explanation: 'Secara kiasan dalam konteks gerakan sosial dan pemikiran, kata "galvanizing" bermakna memicu, menggerakkan, dan mempercepat ("stimulating, igniting, or spurring into rapid motion").',
    strategyTip: 'Galvanizing the Protestant Reformation = memicu dan mengakselerasi.'
  },
  {
    id: 110,
    section: 'reading',
    subSection: 'Passage 2: The Gutenberg Printing Revolution',
    questionNumber: 110,
    title: 'Question 110',
    prompt: 'It can be inferred from the passage that clerical authorities initially',
    passageId: 2,
    passageTitle: 'The Gutenberg Printing Revolution',
    passageText: PASSAGE_2,
    options: [
      { key: 'A', text: 'held exclusive authority over the interpretation of religious texts.' },
      { key: 'B', text: 'refused to read any hand-written manuscripts.' },
      { key: 'C', text: 'funded Gutenberg\'s initial printing press in Mainz.' },
      { key: 'D', text: 'demanded all books be printed in German rather than Latin.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 3 menyatakan bahwa pers cetak mematahkan monopoli yang sebelumnya dipegang oleh hierarki gereja atas interpretasi kitab suci ("breaking the monopolistic control previously exercised by clerical hierarchies"). Ini membuktikan sebelumnya otoritas tersebut eksklusif dipegang oleh kalangan pemuka agama.',
    strategyTip: 'Pertanyaan inferensi: jika percetakan mematahkan monopoli gereja, berarti sebelumnya otoritas penafsiran bersifat eksklusif.'
  },

  // --- PASSAGE 3: QUESTIONS 111 - 120 (Diamond and Graphite Carbon Allotropes) ---
  {
    id: 111,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 111,
    title: 'Question 111',
    prompt: 'What fundamental factor causes diamond and graphite to exhibit drastically different properties?',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'The geometric arrangement and hybridization of their atomic bonds.' },
      { key: 'B', text: 'The presence of iron and nitrogen impurities inside the minerals.' },
      { key: 'C', text: 'The total atomic mass of the carbon nucleus.' },
      { key: 'D', text: 'The geographic depth at which they are mined.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 1 dan 2 secara tegas menyatakan bahwa perbedaan sifat bersumber dari geometri ikatan atom dan hibridisasinya (sp3 tetrahedral pada intan vs sp2 planar pada grafit).',
    strategyTip: 'Ide pokok sains material: susunan kisi ikatan atom menentukan sifat makroskopik.'
  },
  {
    id: 112,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 112,
    title: 'Question 112',
    prompt: 'The word "allotropes" in paragraph 1 refers to',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'different structural forms of the same chemical element' },
      { key: 'B', text: 'synthetic compounds produced from petroleum' },
      { key: 'C', text: 'radioactive isotopes used in nuclear fission' },
      { key: 'D', text: 'fossilized organic remains found in limestone' }
    ],
    correctAnswer: 'A',
    explanation: 'Alotrop adalah berbagai bentuk struktur kristal atau molekuler yang berbeda dari satu unsur kimia yang sama (dalam hal ini sama-sama karbon murni).',
    strategyTip: 'Definisi istilah kimia: allotropes = bentuk kristal berlainan dari unsur yang sama.'
  },
  {
    id: 113,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 113,
    title: 'Question 113',
    prompt: 'In diamond, what type of hybridization do carbon atoms undergo?',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'sp3 hybridization forming tetrahedral bonds.' },
      { key: 'B', text: 'sp2 planar hybridization.' },
      { key: 'C', text: 'linear sp hybridization.' },
      { key: 'D', text: 'octahedral metallic bonding.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 2 menyatakan: "each carbon atom undergoes sp3 hybridization, forming four rigid, covalent sigma bonds directed toward the vertices of a regular tetrahedron".',
    strategyTip: 'Scanning detail teknis di paragraf 2: "sp3 hybridization".'
  },
  {
    id: 114,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 114,
    title: 'Question 114',
    prompt: 'Why is diamond an electrical insulator?',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'All valence electrons are tightly bound within covalent bonds and cannot freely move.' },
      { key: 'B', text: 'Its surface is coated with non-conductive oxygen atoms.' },
      { key: 'C', text: 'It has an excessive number of free protons in its nucleus.' },
      { key: 'D', text: 'It melts instantly when an electrical current is applied.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan: "yet it remains an electrical insulator because all valence electrons are tightly localized within covalent bonds". Tanpa elektron bebas, arus listrik tidak dapat mengalir.',
    strategyTip: 'Faktor konduktivitas listrik: ada atau tidaknya elektron valensi bebas (delocalized electrons).'
  },
  {
    id: 115,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 115,
    title: 'Question 115',
    prompt: 'The word "cleave" in paragraph 3 is closest in meaning to',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'split or separate' },
      { key: 'B', text: 'fuse together' },
      { key: 'C', text: 'expand rapidly' },
      { key: 'D', text: 'bend smoothly' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam mineralogi dan fisika material, "cleave" bermakna membelah, memisahkan, atau terkelupas sepanjang bidang kristal tertentu ("split / separate along a plane").',
    strategyTip: 'Konteks "readily cleave and slip past one another" = membelah dan bergeser.'
  },
  {
    id: 116,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 116,
    title: 'Question 116',
    prompt: 'What intermolecular forces hold the planar sheets of graphite together?',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'Weak van der Waals dispersion forces.' },
      { key: 'B', text: 'Rigid ionic attraction bonds.' },
      { key: 'C', text: 'Strong covalent tetrahedral bonds.' },
      { key: 'D', text: 'Magnetic nuclear interactions.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 3 menyatakan: "These planar layers are held together merely by weak, non-directional van der Waals dispersion forces".',
    strategyTip: 'Detail ilmiah: ikatan antar-lapisan grafit adalah gaya van der Waals yang lemah.'
  },
  {
    id: 117,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 117,
    title: 'Question 117',
    prompt: 'The author explains that graphite is an effective industrial lubricant because',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'its layers slide easily past one another due to weak interlayer bonding.' },
      { key: 'B', text: 'it absorbs large volumes of petroleum grease.' },
      { key: 'C', text: 'it dissolves completely in water at room temperature.' },
      { key: 'D', text: 'it possesses the highest hardness of all carbon minerals.' }
    ],
    correctAnswer: 'A',
    explanation: 'Karena lembaran heksagonal grafit hanya diikat oleh gaya van der Waals yang lemah, lembaran-lembaran tersebut mudah bergeser satu sama lain saat diberi gaya geser, membuatnya licin dan menjadi pelumas ideal.',
    strategyTip: 'Kaitkan sifat fisik licin (lubricant) dengan struktur lapisan yang mudah bergeser.'
  },
  {
    id: 118,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 118,
    title: 'Question 118',
    prompt: 'Why does graphite conduct electricity whereas diamond does not?',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'Graphite possesses delocalized pi electrons that can move freely across planes.' },
      { key: 'B', text: 'Graphite contains metallic copper atoms between its sheets.' },
      { key: 'C', text: 'Diamond absorbs electric currents and transforms into ash.' },
      { key: 'D', text: 'Graphite undergoes sp3 bonding at high voltages.' }
    ],
    correctAnswer: 'A',
    explanation: 'Setiap atom karbon pada grafit menyisakan satu elektron pi terdelokalisasi ("one delocalized pi electron per carbon atom free to migrate across the plane"), yang memungkinkannya menghantarkan listrik.',
    strategyTip: 'Scanning "delocalized pi electron" pada paragraf 3.'
  },
  {
    id: 119,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 119,
    title: 'Question 119',
    prompt: 'What happens when a diamond is heated to 1,500 degrees Celsius in an oxygen-free environment?',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'It rearranges its crystal lattice to transform into graphite.' },
      { key: 'B', text: 'It shatters into thousands of microscopic diamond shards.' },
      { key: 'C', text: 'It undergoes combustion and forms carbon dioxide gas.' },
      { key: 'D', text: 'It melts into a transparent synthetic liquid.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat terakhir menyatakan: "If diamond is heated in an anaerobic vacuum without oxygen to approximately 1,500 degrees Celsius, it spontaneously rearranges its crystalline lattice to achieve the lower thermodynamic equilibrium state of graphite".',
    strategyTip: 'Lihat kalimat penutup teks yang sama persis dengan soal nomor 65 di bagian Structure.'
  },
  {
    id: 120,
    section: 'reading',
    subSection: 'Passage 3: Carbon Allotropes',
    questionNumber: 120,
    title: 'Question 120',
    prompt: 'The word "spontaneously" in paragraph 3 is closest in meaning to',
    passageId: 3,
    passageTitle: 'Carbon Allotropes: Diamond and Graphite',
    passageText: PASSAGE_3,
    options: [
      { key: 'A', text: 'automatically without external propulsion' },
      { key: 'B', text: 'carefully and hesitantly' },
      { key: 'C', text: 'explosively with loud noise' },
      { key: 'D', text: 'temporarily before returning to original form' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam termodinamika kimia, proses "spontaneous" adalah proses yang terjadi secara alami/otomatis menuju keadaan energi bebas yang lebih rendah tanpa perlu dipaksa dari luar ("automatically / naturally on its own").',
    strategyTip: 'Termodinamika: spontaneous reaction = reaksi alami/otomatis.'
  },

  // --- PASSAGE 4: QUESTIONS 121 - 130 (19th-Century American Urbanization - Matches PDF p.8) ---
  {
    id: 121,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 121,
    title: 'Question 121',
    prompt: 'What is the main topic of the passage?',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: 'The causes and demographic patterns of American urbanization in the late 19th and early 20th centuries.' },
      { key: 'B', text: 'The development of steam-powered locomotives in the Great Lakes region.' },
      { key: 'C', text: 'The history of immigration laws passed by the United States Congress.' },
      { key: 'D', text: 'Methods used by the Census Bureau to survey agricultural production.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menguraikan transisi demografi Amerika dari masyarakat agraris pedesaan menjadi masyarakat industri perkotaan, didorong oleh mekanisasi pertanian, ekspansi industri, jaringan kereta api, dan imigrasi.',
    strategyTip: 'Topik utama mencakup penyebab dan pola transisi demografi perkotaan.'
  },
  {
    id: 122,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 122,
    title: 'Question 122',
    prompt: 'The word "curtailed" in paragraph 2 is closest in meaning to',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: 'reduced' },
      { key: 'B', text: 'demanded' },
      { key: 'C', text: 'expanded' },
      { key: 'D', text: 'rewarded' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "curtailed" berarti memangkas, mengurangi, atau membatasi ("reduced / diminished"). Dalam teks, mekanisasi mengurangi jumlah tenaga kerja yang dibutuhkan di ladang.',
    strategyTip: 'Curtailed agricultural labor = mengurangi kebutuhan tenaga kerja tani.'
  },
  {
    id: 123,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 123,
    title: 'Question 123',
    prompt: 'How did agricultural innovations like the reaper and steam tractor contribute to urbanization?',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: 'They lessened the need for farm labor, driving displaced workers into cities.' },
      { key: 'B', text: 'They made farming more lucrative than factory employment.' },
      { key: 'C', text: 'They were manufactured exclusively in rural craft shops.' },
      { key: 'D', text: 'They destroyed food crops and created severe nationwide famine.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 2 menyatakan bahwa mesin pemanen dan traktor uap mengurangi kebutuhan tenaga kerja untuk menanam tanaman pokok, memicu eksodus buruh tani ke kota-kota ("precipitating an exodus of farm laborers toward burgeoning urban hubs").',
    strategyTip: 'Kausalitas: inovasi mesin pertanian -> buruh tani tergantikan -> pindah ke kota.'
  },
  {
    id: 124,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 124,
    title: 'Question 124',
    prompt: 'The word "burgeoning" in paragraph 2 is closest in meaning to',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: 'rapidly growing' },
      { key: 'B', text: 'heavily polluted' },
      { key: 'C', text: 'ancient and historic' },
      { key: 'D', text: 'sparsely populated' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "burgeoning" berarti berkembang atau bertumbuh dengan sangat pesat ("rapidly expanding / flourishing / growing").',
    strategyTip: 'Burgeoning urban hubs = pusat kota yang tumbuh pesat.'
  },
  {
    id: 125,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 125,
    title: 'Question 125',
    prompt: 'According to the passage, which cities became major nodal hubs connecting railroads and industries?',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: 'Chicago, Detroit, and Pittsburgh.' },
      { key: 'B', text: 'Boston, Richmond, and Savannah.' },
      { key: 'C', text: 'San Francisco, Seattle, and Portland.' },
      { key: 'D', text: 'Denver, Phoenix, and Santa Fe.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 2 secara gamblang menyebutkan: "railroad networks converged upon metropolitan nodal points like Chicago, Detroit, and Pittsburgh".',
    strategyTip: 'Scanning nama kota di paragraf 2.'
  },
  {
    id: 126,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 126,
    title: 'Question 126',
    prompt: 'The word "enclaves" in paragraph 3 refers to',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: 'distinct residential communities with a shared cultural background' },
      { key: 'B', text: 'fortified military barracks outside city walls' },
      { key: 'C', text: 'isolated farming plots in rural territories' },
      { key: 'D', text: 'large government office complexes' }
    ],
    correctAnswer: 'A',
    explanation: 'Istilah "ethnic enclaves" merujuk pada pemukiman perkotaan di mana para imigran dari latar belakang etnis atau budaya yang sama tinggal bersama secara berkelompok ("distinct communities with shared cultural background").',
    strategyTip: 'Ethnic enclaves = kantong permukiman komunitas etnis tertentu.'
  },
  {
    id: 127,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 127,
    title: 'Question 127',
    prompt: 'Where did the primary waves of international immigrants described in paragraph 3 originate?',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: 'Southern and eastern Europe.' },
      { key: 'B', text: 'Northern Africa and Australia.' },
      { key: 'C', text: 'East Asia and the South Pacific.' },
      { key: 'D', text: 'Central America and the Caribbean.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 3 secara eksplisit menyatakan: "waves of international immigration, primarily from southern and eastern Europe".',
    strategyTip: 'Scanning detail: "primarily from southern and eastern Europe".'
  },
  {
    id: 128,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 128,
    title: 'Question 128',
    prompt: 'In which landmark census did the urban population of the United States first surpass the rural population?',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: '1920' },
      { key: 'B', text: '1870' },
      { key: 'C', text: '1890' },
      { key: 'D', text: '1950' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf terakhir menyatakan: "By the landmark census of 1920, the demographic watershed was formally crossed: for the first time in United States history, the urban population surpassed the rural population".',
    strategyTip: 'Perhatikan kata kunci: "surpassed" -> tahun 1920.'
  },
  {
    id: 129,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 129,
    title: 'Question 129',
    prompt: 'The word "watershed" in the final paragraph is closest in meaning to',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: 'decisive milestone' },
      { key: 'B', text: 'water distribution reservoir' },
      { key: 'C', text: 'unexpected failure' },
      { key: 'D', text: 'gradual stagnation' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam konteks demografi historis, "watershed" bermakna tonggak sejarah penting atau peristiwa penentu arah baru ("decisive milestone / historical turning point").',
    strategyTip: 'Watershed = milestone bersejarah.'
  },
  {
    id: 130,
    section: 'reading',
    subSection: 'Passage 4: American Urbanization',
    questionNumber: 130,
    title: 'Question 130',
    prompt: 'According to the passage, the population of the United States was first categorized as rural or urban in',
    passageId: 4,
    passageTitle: 'The Demographic Shift to Urban America',
    passageText: PASSAGE_4,
    options: [
      { key: 'A', text: '1900' },
      { key: 'B', text: '1970' },
      { key: 'C', text: '1950' },
      { key: 'D', text: '1870' }
    ],
    correctAnswer: 'D',
    explanation: 'Paragraf pertama secara eksplisit menyatakan: "The United States Census Bureau first officially categorized the national population into rural and urban classifications in the census of 1870". (Persis sama dengan soal resmi UB pada panduan p.8).',
    strategyTip: 'Soal persis dari dokumen panduan E-CBT UB halaman 8. Cari tahun kategorisasi pertama: 1870.'
  },

  // --- PASSAGE 5: QUESTIONS 131 - 140 (Modern Urban Architecture - Matches PDF p.8) ---
  {
    id: 131,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 131,
    title: 'Question 131',
    prompt: 'The word "distinguished" in paragraph 1 is closest in meaning to',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'differentiated' },
      { key: 'B', text: 'protected' },
      { key: 'C', text: 'famous' },
      { key: 'D', text: 'separated' }
    ],
    correctAnswer: 'A',
    explanation: 'Dalam konteks kalimat "Historical settlements were frequently distinguished by haphazard growth...", kata "distinguished" berarti ditandai atau dicirikan perbedaannya ("differentiated / characterized by distinct features"). (Persis sama dengan soal resmi UB pada panduan p.8).',
    strategyTip: 'Soal persis dari dokumen panduan E-CBT UB halaman 8: distinguished in this context = differentiated.'
  },
  {
    id: 132,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 132,
    title: 'Question 132',
    prompt: 'According to paragraph 1, how did historical settlements differ from modern urban designs?',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'Historical settlements grew haphazardly without sanitary zoning or transportation planning.' },
      { key: 'B', text: 'Historical settlements were built entirely underground.' },
      { key: 'C', text: 'Historical settlements prohibited commercial markets inside towns.' },
      { key: 'D', text: 'Historical settlements were heavily dependent on electric high-speed trains.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 1 menyatakan: "Historical settlements were frequently distinguished by haphazard growth, with factories, residential tenement blocks, and commercial markets coexisting without sanitary zoning or transportation planning".',
    strategyTip: 'Bandingkan permukiman bersejarah vs modern berdasarkan perencanaan tata ruang (zoning).'
  },
  {
    id: 133,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 133,
    title: 'Question 133',
    prompt: 'The acronym "TOD" stands for',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'transit-oriented development' },
      { key: 'B', text: 'toxic-outfall drainage' },
      { key: 'C', text: 'traffic-optimization directive' },
      { key: 'D', text: 'tenement-occupancy distribution' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 2 menyatakan secara eksplisit: "the concept of transit-oriented development (TOD)".',
    strategyTip: 'Scanning akronim pada paragraf 2.'
  },
  {
    id: 134,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 134,
    title: 'Question 134',
    prompt: 'What is a core design principle of transit-oriented development?',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'Clustering housing, retail, and civic buildings within walking distance of transit stations.' },
      { key: 'B', text: 'Expanding suburban highways to allow faster automobile commuting.' },
      { key: 'C', text: 'Eliminating all multi-family apartment housing.' },
      { key: 'D', text: 'Constructing airports in the geographical center of cities.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan: "concentrates commercial retail, civic institutions, and multi-family housing within a five-to-ten-minute pedestrian catchment radius of rapid transit stations".',
    strategyTip: 'Cari kata kunci "pedestrian catchment radius" dan "transit stations".'
  },
  {
    id: 135,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 135,
    title: 'Question 135',
    prompt: 'The word "mitigate" in paragraph 2 is closest in meaning to',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'alleviate or lessen' },
      { key: 'B', text: 'intensify' },
      { key: 'C', text: 'ignore' },
      { key: 'D', text: 'calculate' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "mitigate" berarti meredakan, memperingan, atau mengurangi dampak negatif ("alleviate / lessen / diminish").',
    strategyTip: 'Mitigate vehicular congestion = meredakan kemacetan kendaraan.'
  },
  {
    id: 136,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 136,
    title: 'Question 136',
    prompt: 'Which of the following is cited as a benefit of transit-oriented development?',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'Reduced per capita carbon emissions and decreased traffic congestion.' },
      { key: 'B', text: 'Increased sales of petroleum fuels.' },
      { key: 'C', text: 'Rapid expansion of low-density suburban houses.' },
      { key: 'D', text: 'Cheaper parking fees for personal sport-utility vehicles.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan bahwa studi empiris membuktikan TOD "substantially decrease per capita carbon emissions, mitigate vehicular traffic congestion, and stimulate localized retail commerce".',
    strategyTip: 'Lihat daftar manfaat TOD pada kalimat penutup paragraf 2.'
  },
  {
    id: 137,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 137,
    title: 'Question 137',
    prompt: 'The phrase "biophilic design" in paragraph 3 refers to the practice of',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'incorporating natural elements and vegetation into architectural spaces' },
      { key: 'B', text: 'building structures exclusively out of animal bones' },
      { key: 'C', text: 'manufacturing concrete in automated sterile laboratories' },
      { key: 'D', text: 'demolishing older historical brick monuments' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks secara langsung mendefinisikan prinsip desain biofilik: "incorporating vegetative green roofs, urban tree canopies, and permeable bio-swales", yaitu mengintegrasikan alam dan vegetasi ke dalam arsitektur kota.',
    strategyTip: 'Biophilic = cinta alam / mengintegrasikan elemen tumbuhan ke desain kota.'
  },
  {
    id: 138,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 138,
    title: 'Question 138',
    prompt: 'What causes the "urban heat island effect" mentioned in paragraph 3?',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'Extensive surfaces of asphalt and concrete that absorb and retain heat.' },
      { key: 'B', text: 'Underground volcanic fissures beneath city centers.' },
      { key: 'C', text: 'The natural migration of tropical sea currents.' },
      { key: 'D', text: 'Excessive shade created by tall pine forests.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf 3 menyatakan: "the chronic urban heat island effect caused by vast expanses of asphalt and concrete", yaitu permukaan aspal dan beton yang menyerap panas terik matahari.',
    strategyTip: 'Scanning "caused by..." pada paragraf 3.'
  },
  {
    id: 139,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 139,
    title: 'Question 139',
    prompt: 'The word "restorative" in paragraph 3 is closest in meaning to',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'healing and rejuvenating' },
      { key: 'B', text: 'destructive' },
      { key: 'C', text: 'expensive' },
      { key: 'D', text: 'artificial' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "restorative" berarti memulihkan tenaga, menyegarkan, atau menyembuhkan kelelahan fisik dan mental ("healing, rejuvenating, or reviving").',
    strategyTip: 'Restorative psychological spaces = ruang yang menyegarkan pikiran dan jiwa.'
  },
  {
    id: 140,
    section: 'reading',
    subSection: 'Passage 5: Architecture and Urban Planning',
    questionNumber: 140,
    title: 'Question 140',
    prompt: 'What tone does the author convey toward ecological urban planning?',
    passageId: 5,
    passageTitle: 'Architecture and Ecological Urban Planning',
    passageText: PASSAGE_5,
    options: [
      { key: 'A', text: 'Supportive and constructive.' },
      { key: 'B', text: 'Hostile and cynical.' },
      { key: 'C', text: 'Indifferent and dismissive.' },
      { key: 'D', text: 'Skeptical and sarcastic.' }
    ],
    correctAnswer: 'A',
    explanation: 'Penulis menonjolkan manfaat keberlanjutan, pengurangan emisi, pemulihan ekologis, dan penciptaan habitat yang tangguh, menunjukkan nada yang sangat mendukung dan konstruktif (supportive and constructive).',
    strategyTip: 'Author\'s tone: perhatikan kata sifat positif di akhir bacaan (resilient, sustainable, restorative).'
  }
];
