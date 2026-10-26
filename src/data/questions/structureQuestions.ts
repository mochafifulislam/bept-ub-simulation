import { Question } from '../../types/bept';

export const structureQuestions: Question[] = [
  // --- PART 1: STRUCTURE / SENTENCE COMPLETION (Questions 51 - 65) ---
  {
    id: 51,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 51,
    title: 'Question 51',
    prompt: 'No phenomenon in the universe is _____ than an exploding star.',
    options: [
      { key: 'A', text: 'the most spectacular' },
      { key: 'B', text: 'more spectacular' },
      { key: 'C', text: 'as spectacular' },
      { key: 'D', text: 'spectacular' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata perbandingan "than" menandakan bentuk komparatif (comparative degree). Untuk kata sifat multi-suku kata seperti "spectacular", bentuk komparatifnya adalah "more spectacular".',
    strategyTip: 'Cari kata sinyal: adanya kata "than" mutlak membutuhkan bentuk comparative (more / -er).',
    grammarTopic: 'Comparative Degree'
  },
  {
    id: 52,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 52,
    title: 'Question 52',
    prompt: 'Not until the late nineteenth century _____ widely recognized as a separate academic discipline.',
    options: [
      { key: 'A', text: 'psychology became' },
      { key: 'B', text: 'did psychology become' },
      { key: 'C', text: 'when psychology became' },
      { key: 'D', text: 'that psychology was' }
    ],
    correctAnswer: 'B',
    explanation: 'Ketika kalimat diawali dengan frasa negatif pembatas "Not until...", klausa utama harus mengalami inversi (Inversion): Auxiliary/Modal + Subject + Main Verb ("did psychology become").',
    strategyTip: 'Aturan Inversi Negatif: Not until / Seldom / Never / Rarely di awal kalimat -> Aux + Subject + Verb.',
    grammarTopic: 'Negative Inversion'
  },
  {
    id: 53,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 53,
    title: 'Question 53',
    prompt: '_____ in extensive wetland areas, peat moss absorbs immense volumes of moisture.',
    options: [
      { key: 'A', text: 'It grows' },
      { key: 'B', text: 'Growing' },
      { key: 'C', text: 'Growth' },
      { key: 'D', text: 'Because grown' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat membutuhkan participle clause aktif sebagai reduced adverbial clause yang menerangkan subjek "peat moss". Bentuk yang tepat adalah present participle "-ing" ("Growing in extensive wetland areas...").',
    strategyTip: 'Reduced clause aktif yang mendahului koma menggunakan Present Participle (V-ing).',
    grammarTopic: 'Participle Clauses'
  },
  {
    id: 54,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 54,
    title: 'Question 54',
    prompt: 'The architectural design of the new laboratory _____ by the university board yesterday afternoon.',
    options: [
      { key: 'A', text: 'was approved' },
      { key: 'B', text: 'approving' },
      { key: 'C', text: 'has approved' },
      { key: 'D', text: 'approved' }
    ],
    correctAnswer: 'A',
    explanation: 'Subjek "The architectural design" adalah benda yang menerima aksi (pasif), dan ada kata keterangan waktu lampau "yesterday afternoon" serta agen "by the university board". Bentuk pasif simple past yang tepat adalah "was approved".',
    strategyTip: 'Subjek benda tak bernyawa + "by [agent]" + waktu lampau = was/were + V3 (Past Passive).',
    grammarTopic: 'Passive Voice'
  },
  {
    id: 55,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 55,
    title: 'Question 55',
    prompt: 'Geologists classify rocks into three fundamental types according to _____ they were formed.',
    options: [
      { key: 'A', text: 'how' },
      { key: 'B', text: 'what' },
      { key: 'C', text: 'which' },
      { key: 'D', text: 'that' }
    ],
    correctAnswer: 'A',
    explanation: 'Preposisi "according to" membutuhkan noun clause sebagai objek preposisi. Kata tanya "how" (bagaimana / cara) tepat untuk menjelaskan proses pembentukan batuan ("how they were formed").',
    strategyTip: 'Preposisi + Noun Clause Connector (how/what/where) + Subject + Verb.',
    grammarTopic: 'Noun Clauses'
  },
  {
    id: 56,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 56,
    title: 'Question 56',
    prompt: 'Rarely _____ such catastrophic volcanic eruptions occurred within the same geological millennium.',
    options: [
      { key: 'A', text: 'have' },
      { key: 'B', text: 'has' },
      { key: 'C', text: 'they have' },
      { key: 'D', text: 'having' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata negatif pembatas "Rarely" di awal kalimat memerlukan susunan inversi. Karena subjeknya adalah jamak ("such catastrophic volcanic eruptions"), auxiliary verb yang tepat adalah "have".',
    strategyTip: 'Rarely + Aux + Subject Plural + V3 -> "Rarely have such eruptions occurred".',
    grammarTopic: 'Subject-Verb Inversion'
  },
  {
    id: 57,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 57,
    title: 'Question 57',
    prompt: '_____ the speed of light in a vacuum is constant, its velocity decreases when traversing denser optical media.',
    options: [
      { key: 'A', text: 'Although' },
      { key: 'B', text: 'Despite' },
      { key: 'C', text: 'In spite of' },
      { key: 'D', text: 'Nevertheless' }
    ],
    correctAnswer: 'A',
    explanation: 'Klausa pertama memiliki subjek ("the speed of light") dan predikat ("is"), sehingga merupakan klausa penuh. Penghubung konsesif yang diikuti oleh klausa (S + V) adalah konjungsi "Although", sedangkan "Despite" dan "In spite of" diikuti noun phrase.',
    strategyTip: 'Although + S + V vs Despite + Noun/Gerund.',
    grammarTopic: 'Adverbial Conjunctions'
  },
  {
    id: 58,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 58,
    title: 'Question 58',
    prompt: 'The committee chair recommended that the revised research budget _____ submitted before Friday noon.',
    options: [
      { key: 'A', text: 'is' },
      { key: 'B', text: 'be' },
      { key: 'C', text: 'was' },
      { key: 'D', text: 'will be' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata kerja subjunctive seperti "recommended that", "suggested that", "insisted that" mewajibkan kata kerja dalam subjunctive clause berbentuk bare infinitive ("be submitted"), bukan "is" atau "was".',
    strategyTip: 'Subjunctive of Urgency: recommend/demand/require that + S + [bare infinitive / be + V3].',
    grammarTopic: 'Subjunctive Mood'
  },
  {
    id: 59,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 59,
    title: 'Question 59',
    prompt: 'Neither the principal investigator nor the laboratory assistants _____ satisfied with the preliminary data.',
    options: [
      { key: 'A', text: 'was' },
      { key: 'B', text: 'were' },
      { key: 'C', text: 'is' },
      { key: 'D', text: 'being' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada susunan paired conjunction "Neither... nor...", kata kerja harus menyesuaikan dengan subjek yang paling dekat dengan kata kerja (Proximity Rule). Di sini subjek terdekat adalah "the laboratory assistants" (jamak), sehingga memerlukan kata kerja jamak "were".',
    strategyTip: 'Neither A nor B -> Verb mengikuti B (subjek yang lebih dekat).',
    grammarTopic: 'Subject-Verb Agreement (Correlative Conjunctions)'
  },
  {
    id: 60,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 60,
    title: 'Question 60',
    prompt: 'Unlike conventional batteries, fuel cells produce electricity _____ heat directly from chemical reactions.',
    options: [
      { key: 'A', text: 'and' },
      { key: 'B', text: 'also' },
      { key: 'C', text: 'as' },
      { key: 'D', text: 'nor' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat menghubungkan dua objek paralel: "electricity" [noun] dan "heat" [noun]. Konjungsi koordinatif paralel yang tepat adalah "and".',
    strategyTip: 'Parallel Structure: Noun and Noun.',
    grammarTopic: 'Parallel Structure'
  },
  {
    id: 61,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 61,
    title: 'Question 61',
    prompt: 'The more efficiently an internal combustion engine burns its fuel, _____.',
    options: [
      { key: 'A', text: 'the less exhaust emissions it produces' },
      { key: 'B', text: 'it produces fewer exhaust emissions' },
      { key: 'C', text: 'less exhaust emissions are produced' },
      { key: 'D', text: 'fewer are the exhaust emissions produced' }
    ],
    correctAnswer: 'A',
    explanation: 'Pola perbandingan ganda bertingkat adalah: The + comparative..., the + comparative... ("The more efficiently..., the less exhaust emissions it produces").',
    strategyTip: 'Double Comparative Formula: The + [comparative]..., the + [comparative]...',
    grammarTopic: 'Correlative Comparisons'
  },
  {
    id: 62,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 62,
    title: 'Question 62',
    prompt: 'Photosynthesis is the fundamental biological process _____ green plants convert sunlight into chemical energy.',
    options: [
      { key: 'A', text: 'by which' },
      { key: 'B', text: 'which' },
      { key: 'C', text: 'that' },
      { key: 'D', text: 'in that' }
    ],
    correctAnswer: 'A',
    explanation: 'Klausa menerangkan cara atau perantara ("process by which..."). Jika memakai "which" saja, klausanya kehilangan preposisi ("plants convert sunlight by this process"). Oleh karena itu, bentuk tepatnya adalah "by which".',
    strategyTip: 'Preposition + Relative Pronoun: process by which / manner in which.',
    grammarTopic: 'Adjective Clauses with Prepositions'
  },
  {
    id: 63,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 63,
    title: 'Question 63',
    prompt: 'Had the navigational compass not malfunctioned, the expedition team _____ their designated outpost.',
    options: [
      { key: 'A', text: 'would have reached' },
      { key: 'B', text: 'will reach' },
      { key: 'C', text: 'reached' },
      { key: 'D', text: 'would reach' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat ini merupakan bentuk Inverted Conditional Type 3 ("Had + S + V3"). Hasil pengandaian pada klausa utama mutlak menggunakan "would have + V3" ("would have reached").',
    strategyTip: 'Had + S + V3 (Type 3) pasangannya adalah would/could/might + have + V3.',
    grammarTopic: 'Conditionals (Inversion Type 3)'
  },
  {
    id: 64,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 64,
    title: 'Question 64',
    prompt: '_____ discovered in 1930, Pluto was initially classified as the ninth planet of our solar system.',
    options: [
      { key: 'A', text: 'First' },
      { key: 'B', text: 'It was first' },
      { key: 'C', text: 'When first' },
      { key: 'D', text: 'Because first' }
    ],
    correctAnswer: 'C',
    explanation: 'Bentuk reduced time clause: "When [it was] first discovered in 1930, Pluto was initially classified...". Menggunakan "When first" membuat kalimat gramatikal dan padu.',
    strategyTip: 'Reduced Adverb Clause of Time: When + [past participle]..., Subject + Verb.',
    grammarTopic: 'Reduced Adverb Clauses'
  },
  {
    id: 65,
    section: 'structure',
    subSection: 'Structure: Sentence Completion',
    questionNumber: 65,
    title: 'Question 65',
    prompt: 'If a diamond is heated without oxygen, it will transform into graphite, a form of _____ that it is used as a lubricant.',
    options: [
      { key: 'A', text: 'so soft the carbon' },
      { key: 'B', text: 'carbon so soft' },
      { key: 'C', text: 'carbon is so soft' },
      { key: 'D', text: 'is carbon so soft' }
    ],
    correctAnswer: 'B',
    explanation: 'Struktur appositive phrase: "a form of carbon so soft that it is used as a lubricant". Kata "so soft that" merupakan post-nominal adjective modifier yang menerangkan "carbon".',
    strategyTip: 'Pola "noun + so + adjective + that + clause" (so soft that it is used as a lubricant).',
    grammarTopic: 'Adjective Post-Modifiers and Result Clauses'
  },

  // --- PART 2: WRITTEN EXPRESSION / ERROR IDENTIFICATION (Questions 66 - 90) ---
  {
    id: 66,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 66,
    title: 'Question 66',
    prompt: 'The human brain (A: contains) approximately eighty-six billion neurons, (B: each) of which (C: are connected) to thousands of adjacent (D: synapses).',
    options: [
      { key: 'A', text: 'contains' },
      { key: 'B', text: 'each' },
      { key: 'C', text: 'are connected' },
      { key: 'D', text: 'synapses' }
    ],
    correctAnswer: 'C',
    explanation: 'Frasa "each of which" memiliki subjek tunggal ("each"). Oleh karena itu, kata kerja harus berbentuk tunggal yaitu "is connected", bukan jamak "are connected".',
    strategyTip: '"Each of + [plural noun]" selalu diikuti kata kerja tunggal (singular verb).',
    grammarTopic: 'Subject-Verb Agreement with Indefinite Pronouns'
  },
  {
    id: 67,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 67,
    title: 'Question 67',
    prompt: 'Commercial airplanes (A: fly) at high altitudes (B: because) the air is thinner, which (C: reducing) aerodynamic drag and (D: saves) substantial fuel.',
    options: [
      { key: 'A', text: 'fly' },
      { key: 'B', text: 'because' },
      { key: 'C', text: 'reducing' },
      { key: 'D', text: 'saves' }
    ],
    correctAnswer: 'C',
    explanation: 'Klausa penjelas "which..." membutuhkan kata kerja predikatif yang paralel dengan "saves". Seharusnya menggunakan "reduces", bukan present participle "reducing".',
    strategyTip: 'Paralelisme predikat: which reduces aerodynamic drag and saves fuel.',
    grammarTopic: 'Parallel Structure & Finite Verbs'
  },
  {
    id: 68,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 68,
    title: 'Question 68',
    prompt: 'Mount Everest is (A: the most high) peak on Earth, (B: rising) to an elevation of 8,848 meters (C: above) sea (D: level).',
    options: [
      { key: 'A', text: 'the most high' },
      { key: 'B', text: 'rising' },
      { key: 'C', text: 'above' },
      { key: 'D', text: 'level' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata sifat bersuku kata satu seperti "high" membentuk derajat superlatif dengan menambahkan akhiran "-est" ("the highest"), bukan "the most high".',
    strategyTip: 'Aturan superlatif satu suku kata: high -> highest (bukan most high).',
    grammarTopic: 'Superlative Adjective Forms'
  },
  {
    id: 69,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 69,
    title: 'Question 69',
    prompt: 'The Industrial Revolution (A: brought about) profound economic transformations, (B: leading) to the migration of (C: millions of) rural agriculturalists (D: into urbanly) centers.',
    options: [
      { key: 'A', text: 'brought about' },
      { key: 'B', text: 'leading' },
      { key: 'C', text: 'millions of' },
      { key: 'D', text: 'into urbanly' }
    ],
    correctAnswer: 'D',
    explanation: 'Kata "centers" adalah kata benda (noun), sehingga harus diterangkan oleh kata sifat (adjective) "urban", bukan kata keterangan (adverb) "urbanly". Bentuk yang tepat: "into urban centers".',
    strategyTip: 'Noun harus dimodifikasi oleh Adjective, bukan Adverb (urban centers, bukan urbanly centers).',
    grammarTopic: 'Adjective vs Adverb Usage'
  },
  {
    id: 70,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 70,
    title: 'Question 70',
    prompt: 'Neither the department chair (A: nor) the committee members (B: has arrived) at a unanimous (C: consensus) regarding the new curriculum (D: guidelines).',
    options: [
      { key: 'A', text: 'nor' },
      { key: 'B', text: 'has arrived' },
      { key: 'C', text: 'consensus' },
      { key: 'D', text: 'guidelines' }
    ],
    correctAnswer: 'B',
    explanation: 'Dalam konstruksi "Neither... nor...", kata kerja harus berkesesuaian dengan subjek kedua ("the committee members", jamak). Oleh karena itu, kata kerja harus "have arrived", bukan "has arrived".',
    strategyTip: 'Neither A nor B: verb mengikuti B (members -> have arrived).',
    grammarTopic: 'Subject-Verb Agreement (Correlative Conjunctions)'
  },
  {
    id: 71,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 71,
    title: 'Question 71',
    prompt: 'Before (A: the invention of) refrigeration, salt was commonly (B: utilized for) preserving perishable food items (C: such like) meat and (D: fish).',
    options: [
      { key: 'A', text: 'the invention of' },
      { key: 'B', text: 'utilized for' },
      { key: 'C', text: 'such like' },
      { key: 'D', text: 'fish' }
    ],
    correctAnswer: 'C',
    explanation: 'Untuk memberikan contoh dalam bahasa Inggris formal, gunakan frasa "such as", bukan "such like".',
    strategyTip: 'Selalu gunakan "such as" untuk contoh (bukan "such like").',
    grammarTopic: 'Prepositional Idioms & Examples'
  },
  {
    id: 72,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 72,
    title: 'Question 72',
    prompt: 'The Pacific Ocean (A: covers) more than thirty percent of the (B: planet\'s) surface, (C: making it) larger than (D: all the continents combining).',
    options: [
      { key: 'A', text: 'covers' },
      { key: 'B', text: 'planet\'s' },
      { key: 'C', text: 'making it' },
      { key: 'D', text: 'all the continents combining' }
    ],
    correctAnswer: 'D',
    explanation: 'Frasa yang benar adalah "all the continents combined" (past participle pasif bermakna "digabungkan"), bukan present participle aktif "combining".',
    strategyTip: 'Gunakan Past Participle pasif setelah noun: all continents combined.',
    grammarTopic: 'Participle Word Forms'
  },
  {
    id: 73,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 73,
    title: 'Question 73',
    prompt: 'Despite (A: its extensive) geological surveys, the exploratory team was (B: unable) to locate (C: no) commercially viable mineral deposits in the (D: northern valley).',
    options: [
      { key: 'A', text: 'its extensive' },
      { key: 'B', text: 'unable' },
      { key: 'C', text: 'no' },
      { key: 'D', text: 'northern valley' }
    ],
    correctAnswer: 'C',
    explanation: 'Kata "unable" sudah bermakna negatif. Menambahkan kata "no" menghasilkan double negative yang tidak diperbolehkan dalam tata bahasa standar. Seharusnya menggunakan "any" ("unable to locate any commercially viable...").',
    strategyTip: 'Hindari double negative: unable + no -> unable + any.',
    grammarTopic: 'Double Negatives'
  },
  {
    id: 74,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 74,
    title: 'Question 74',
    prompt: 'A large (A: amount) of students (B: gathered) outside the administration hall (C: to protest) the unexpected tuition (D: hike).',
    options: [
      { key: 'A', text: 'amount' },
      { key: 'B', text: 'gathered' },
      { key: 'C', text: 'to protest' },
      { key: 'D', text: 'hike' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata benda "students" adalah countable noun (dapat dihitung). Untuk countable noun jamak, gunakan "number" ("A large number of students"), bukan "amount" yang hanya dipakai untuk uncountable noun.',
    strategyTip: 'Number of + Countable Nouns vs Amount of + Uncountable Nouns.',
    grammarTopic: 'Quantifiers (Amount vs Number)'
  },
  {
    id: 75,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 75,
    title: 'Question 75',
    prompt: 'The photosynthesis rate (A: depends) primarily on the intensity of light, the concentration of (B: atmospheric) carbon dioxide, and (C: how warm the temperature is).',
    options: [
      { key: 'A', text: 'depends' },
      { key: 'B', text: 'atmospheric' },
      { key: 'C', text: 'how warm the temperature is' },
      { key: 'D', text: 'temperature' }
    ],
    correctAnswer: 'C',
    explanation: 'Elemen-elemen dalam seri harus paralel: "the intensity of light" [noun phrase], "the concentration of carbon dioxide" [noun phrase], dan harus dipasangkan dengan noun phrase seperti "the ambient temperature", bukan klausa "how warm the temperature is".',
    strategyTip: 'Parallel Series: Noun Phrase, Noun Phrase, and Noun Phrase.',
    grammarTopic: 'Parallel Structure in Series'
  },
  {
    id: 76,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 76,
    title: 'Question 76',
    prompt: 'Although wolves (A: were once) widespread throughout North America, (B: their) natural habitats have been (C: severer) degraded by human (D: encroachment).',
    options: [
      { key: 'A', text: 'were once' },
      { key: 'B', text: 'their' },
      { key: 'C', text: 'severer' },
      { key: 'D', text: 'encroachment' }
    ],
    correctAnswer: 'C',
    explanation: 'Kata yang menerangkan kata kerja pasif "degraded" harus berupa kata keterangan (adverb) yaitu "severely", bukan bentuk komparatif adjective "severer". Bentuk tepat: "severely degraded".',
    strategyTip: 'Kata kerja pasif (have been degraded) diterangkan oleh adverb (severely).',
    grammarTopic: 'Adverb Modifiers'
  },
  {
    id: 77,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 77,
    title: 'Question 77',
    prompt: 'The doctor (A: strongly recommended) that the patient (B: rests) in bed for at least three days (C: following) the surgical (D: procedure).',
    options: [
      { key: 'A', text: 'strongly recommended' },
      { key: 'B', text: 'rests' },
      { key: 'C', text: 'following' },
      { key: 'D', text: 'procedure' }
    ],
    correctAnswer: 'B',
    explanation: 'Setelah kata kerja subjunctive "recommended that", kata kerja untuk subjek "the patient" harus dalam bentuk bare infinitive (kata kerja dasar tanpa akhiran -s), yaitu "rest", bukan "rests".',
    strategyTip: 'Subjunctive: recommended that + Subject + [V1 dasar tanpa s] (rest, bukan rests).',
    grammarTopic: 'Subjunctive Mood Verbs'
  },
  {
    id: 78,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 78,
    title: 'Question 78',
    prompt: 'The library (A: contains) a vast collection of rare manuscripts, (B: most of which) (C: dates back) to the fourteenth (D: century).',
    options: [
      { key: 'A', text: 'contains' },
      { key: 'B', text: 'most of which' },
      { key: 'C', text: 'dates back' },
      { key: 'D', text: 'century' }
    ],
    correctAnswer: 'C',
    explanation: 'Pronoun "which" merujuk pada "rare manuscripts" (jamak). Fraksi "most of which" oleh karenanya membutuhkan kata kerja jamak "date back" (tanpa akhiran -s), bukan "dates back".',
    strategyTip: 'Most of which [referring to plural manuscripts] -> date back (bukan dates back).',
    grammarTopic: 'Relative Clause Subject-Verb Agreement'
  },
  {
    id: 79,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 79,
    title: 'Question 79',
    prompt: 'Because of (A: it is) dense atmosphere, Venus retains (B: extreme) surface heat, (C: reaching) temperatures (D: exceeding) 460 degrees Celsius.',
    options: [
      { key: 'A', text: 'it is' },
      { key: 'B', text: 'extreme' },
      { key: 'C', text: 'reaching' },
      { key: 'D', text: 'exceeding' }
    ],
    correctAnswer: 'A',
    explanation: 'Frasa preposisi "Because of" harus diikuti oleh kata benda atau noun phrase dengan possessive adjective "its", bukan kontraksi subjek-kata kerja "it is". Bentuk yang tepat: "Because of its dense atmosphere...".',
    strategyTip: 'Because of + Possessive Adjective + Noun (its atmosphere, bukan it is atmosphere).',
    grammarTopic: 'Possessive Adjectives vs Contractions'
  },
  {
    id: 80,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 80,
    title: 'Question 80',
    prompt: 'Many historical artifacts (A: discovered) in archaeological excavations (B: require) specialized preservation techniques (C: to prevent) them from (D: deteriorate).',
    options: [
      { key: 'A', text: 'discovered' },
      { key: 'B', text: 'require' },
      { key: 'C', text: 'to prevent' },
      { key: 'D', text: 'deteriorate' }
    ],
    correctAnswer: 'D',
    explanation: 'Setelah preposisi "from", kata kerja harus berbentuk Gerund (-ing). Bentuk yang tepat adalah "deteriorating", bukan bare verb "deteriorate".',
    strategyTip: 'Preposisi + Gerund (prevent... from deteriorating).',
    grammarTopic: 'Prepositions Followed by Gerunds'
  },
  {
    id: 81,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 81,
    title: 'Question 81',
    prompt: 'The economic prosperity of the colonial seaport (A: was heavily) reliant (B: in) the maritime export of timber, fur, and (C: agricultural) (D: commodities).',
    options: [
      { key: 'A', text: 'was heavily' },
      { key: 'B', text: 'in' },
      { key: 'C', text: 'agricultural' },
      { key: 'D', text: 'commodities' }
    ],
    correctAnswer: 'B',
    explanation: 'Pasangan preposisi yang tepat untuk kata sifat "reliant" adalah "on" atau "upon" ("reliant on..."), bukan "in".',
    strategyTip: 'Dependent prepositions: reliant on, dependent on (bukan in).',
    grammarTopic: 'Preposition Combinations'
  },
  {
    id: 82,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 82,
    title: 'Question 82',
    prompt: 'The speed of sound through water is (A: considerably) faster than (B: through) air because liquid water molecules are (C: packed more closer) (D: together).',
    options: [
      { key: 'A', text: 'considerably' },
      { key: 'B', text: 'through' },
      { key: 'C', text: 'packed more closer' },
      { key: 'D', text: 'together' }
    ],
    correctAnswer: 'C',
    explanation: 'Bentuk komparatif dari "close" adalah "closer". Penggunaan "more closer" adalah double comparative (kemubaziran perbandingan). Bentuk yang benar adalah "packed closer together".',
    strategyTip: 'Double comparative error: dilarang menggunakan "more" bersama akhiran "-er" (more closer -> closer).',
    grammarTopic: 'Redundant Comparatives'
  },
  {
    id: 83,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 83,
    title: 'Question 83',
    prompt: 'Every citizen (A: have) the constitutional right (B: to express) their opinions (C: peacefully) in public (D: forums).',
    options: [
      { key: 'A', text: 'have' },
      { key: 'B', text: 'to express' },
      { key: 'C', text: 'peacefully' },
      { key: 'D', text: 'forums' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "Every" selalu diikuti oleh kata benda tunggal dan memerlukan kata kerja tunggal (singular verb). Subjek "Every citizen" harus diikuti oleh "has", bukan jamak "have".',
    strategyTip: 'Every / Each + Singular Noun -> Singular Verb (has, bukan have).',
    grammarTopic: 'Subject-Verb Agreement with Every'
  },
  {
    id: 84,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 84,
    title: 'Question 84',
    prompt: 'The novel\'s intricate storyline and (A: vivid developed) characters captivated (B: readers) throughout (C: the entire) literary (D: community).',
    options: [
      { key: 'A', text: 'vivid developed' },
      { key: 'B', text: 'readers' },
      { key: 'C', text: 'the entire' },
      { key: 'D', text: 'community' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata sifat partisipel "developed" harus diterangkan oleh sebuah adverb (kata keterangan), yaitu "vividly", bukan kata sifat "vivid". Bentuk yang tepat: "vividly developed characters".',
    strategyTip: 'Adverb menerangkan Adjective/Participle (vividly developed, bukan vivid developed).',
    grammarTopic: 'Adverb Modifying Participle'
  },
  {
    id: 85,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 85,
    title: 'Question 85',
    prompt: 'Unlike (A: another) metallic elements, mercury remains in a liquid state (B: at standard) ambient room (C: temperature) and (D: pressure).',
    options: [
      { key: 'A', text: 'another' },
      { key: 'B', text: 'at standard' },
      { key: 'C', text: 'temperature' },
      { key: 'D', text: 'pressure' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata benda "elements" adalah jamak (plural). Penentu yang tepat sebelum kata benda jamak adalah "other", bukan "another" yang hanya digunakan untuk kata benda tunggal. Bentuk tepat: "Unlike other metallic elements...".',
    strategyTip: 'Another + Singular Noun vs Other + Plural Nouns.',
    grammarTopic: 'Other vs Another'
  },
  {
    id: 86,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 86,
    title: 'Question 86',
    prompt: 'The research fellowship is awarded annually to (A: whoever) candidate demonstrates (B: the greatest) academic promise and (C: scholarly) (D: achievement).',
    options: [
      { key: 'A', text: 'whoever' },
      { key: 'B', text: 'the greatest' },
      { key: 'C', text: 'scholarly' },
      { key: 'D', text: 'achievement' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "candidate" adalah noun yang memerlukan determiner adjective "whichever" (atau "whichever / any candidate who"), bukan pronoun "whoever" yang berdiri sendiri tanpa memodifikasi noun secara langsung.',
    strategyTip: 'Gunakan whichever/whatever sebelum kata benda, atau whoever sebagai subjek mandiri (whoever demonstrates).',
    grammarTopic: 'Relative Pronouns vs Determiners'
  },
  {
    id: 87,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 87,
    title: 'Question 87',
    prompt: 'Due to (A: severe drought) conditions, the agricultural ministry ordered farmers (B: to reduce) the (C: number) of water used for crop (D: irrigation).',
    options: [
      { key: 'A', text: 'severe drought' },
      { key: 'B', text: 'to reduce' },
      { key: 'C', text: 'number' },
      { key: 'D', text: 'irrigation' }
    ],
    correctAnswer: 'C',
    explanation: 'Kata "water" adalah uncountable noun (benda tak dapat dihitung). Oleh karena itu, kata ukur yang tepat adalah "amount", bukan "number" yang khusus untuk benda dapat dihitung.',
    strategyTip: 'Amount of water (bukan number of water).',
    grammarTopic: 'Countable vs Uncountable Quantifiers'
  },
  {
    id: 88,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 88,
    title: 'Question 88',
    prompt: 'Between the two (A: proposed architectural designs), the committee unanimously (B: preferred) the one that was (C: more economical) and (D: functionally).',
    options: [
      { key: 'A', text: 'proposed architectural designs' },
      { key: 'B', text: 'preferred' },
      { key: 'C', text: 'more economical' },
      { key: 'D', text: 'functionally' }
    ],
    correctAnswer: 'D',
    explanation: 'Struktur paralel predikatif setelah "was": "more economical" [adjective] dan harus dipasangkan dengan kata sifat [adjective] yaitu "functional", bukan kata keterangan [adverb] "functionally".',
    strategyTip: 'Paralelisme Adjective: was economical and functional.',
    grammarTopic: 'Parallel Adjectives'
  },
  {
    id: 89,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 89,
    title: 'Question 89',
    prompt: 'The fossilized remains (A: were excavated) by the paleontologist, (B: who) dedicated his career (C: to unearth) prehistoric mammalian (D: skeletons).',
    options: [
      { key: 'A', text: 'were excavated' },
      { key: 'B', text: 'who' },
      { key: 'C', text: 'to unearth' },
      { key: 'D', text: 'skeletons' }
    ],
    correctAnswer: 'C',
    explanation: 'Frasa idiomatis "dedicate one\'s career/life to" memiliki kata "to" sebagai preposisi (bukan infinitive marker). Oleh karena itu, setelah "to" harus diikuti oleh Gerund (-ing), yaitu "to unearthing", bukan "to unearth".',
    strategyTip: 'Dedicate to + Gerund (-ing) -> dedicate career to unearthing.',
    grammarTopic: 'Prepositional Verbs with Gerunds'
  },
  {
    id: 90,
    section: 'structure',
    subSection: 'Written Expression: Error Identification',
    questionNumber: 90,
    title: 'Question 90',
    prompt: 'Not only (A: the volcanic eruption destroyed) the surrounding forests, (B: but it also) disrupted atmospheric weather patterns (C: for several) consecutive (D: years).',
    options: [
      { key: 'A', text: 'the volcanic eruption destroyed' },
      { key: 'B', text: 'but it also' },
      { key: 'C', text: 'for several' },
      { key: 'D', text: 'years' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat diawali dengan frasa negatif korelatif "Not only...". Sesuai aturan inversi, klausa harus dibalik menjadi: Auxiliary + Subject + Main Verb ("Not only did the volcanic eruption destroy..."), bukan susunan kalimat normal.',
    strategyTip: 'Inversi Wajib: Not only + did + Subject + V1 dasar...',
    grammarTopic: 'Correlative Inversion (Not Only)'
  }
];
