import { GrammarResumeTopic } from '../types/bept';

export const beptResumeMateri: GrammarResumeTopic[] = [
  {
    id: 'sva',
    category: 'Structure & Written Expression',
    title: '1. Subject - Verb Agreement (Kesesuaian Subjek & Kata Kerja)',
    frequencyInBEPT: 'Sangat Sering (Tinggi)',
    formula: 'Singular Subject + Singular Verb (-s/-es) | Plural Subject + Plural Verb (bare)',
    explanation: 'Subjek tunggal harus menggunakan kata kerja tunggal (is, was, has, runs), sedangkan subjek jamak menggunakan kata kerja jamak (are, were, have, run). Kesalahan paling sering di BEPT terjadi ketika ada frasa preposisi penyela (intervening prepositional phrase) yang mengecoh peserta.',
    keySignals: [
      'Prepositional phrases: of, with, together with, along with, as well as, in addition to (Abaikan frasa di antara koma/preposisi, verb HANYA mengikuti subjek utama di depan!)',
      'Indefinite pronouns selalu TUNGGAL: everyone, everybody, someone, nobody, each, either, neither, one of...',
      'Neither A nor B / Either A or B -> Verb mengikuti B (subjek yang lebih dekat/terakhir)',
      'A number of + Plural Noun -> Plural Verb (are/were/have)',
      'The number of + Plural Noun -> Singular Verb (is/was/has)'
    ],
    commonMistakes: [
      'Terkecoh kata benda tepat sebelum verb padahal itu bagian dari frasa preposisi (contoh: "The collection of rare books ARE..." -> SALAH, harusnya IS karena subjeknya "collection").',
      'Menganggap "each" atau "every" sebagai jamak.'
    ],
    examples: [
      {
        incorrect: 'The quality of the research presentations were remarkable.',
        correct: 'The quality of the research presentations was remarkable.',
        note: 'Subjek utama adalah "The quality" (tunggal), bukan "presentations" yang merupakan objek preposisi "of".'
      },
      {
        incorrect: 'Each of the participating laboratories have submitted their reports.',
        correct: 'Each of the participating laboratories has submitted its report.',
        note: '"Each" adalah pronoun tunggal, sehingga kata kerjanya wajib "has", bukan "have".'
      },
      {
        incorrect: 'A number of species is facing extinction.',
        correct: 'A number of species are facing extinction.',
        note: '"A number of" berarti banyak (plural), sedangkan "The number of" berarti jumlah (singular).'
      }
    ],
    quickPractice: {
      question: 'Neither the department head nor the academic committee members _____ reached a unanimous decision.',
      options: ['has', 'have', 'is', 'was'],
      answerIndex: 1,
      explanation: 'Dalam pola "Neither A nor B", kata kerja mengikuti subjek yang lebih dekat yaitu "the academic committee members" (jamak), sehingga jawabannya adalah "have".'
    }
  },
  {
    id: 'inversion',
    category: 'Structure & Written Expression',
    title: '2. Inversion (Pembalikan Posisi Subjek & Kata Kerja Bantu)',
    frequencyInBEPT: 'Sangat Sering (Tinggi)',
    formula: 'Negative Word + Auxiliary Verb + Subject + Main Verb',
    explanation: 'Dalam bahasa Inggris formal, ketika kalimat diawali dengan kata atau frasa negatif/pembatas, posisi Auxiliary (is, are, was, were, do, does, did, have, has, will, can) wajib diletakkan SEBELUM Subject, persis seperti pola kalimat tanya.',
    keySignals: [
      'Negative adverbs: Rarely, Seldom, Never, Scarcely, Barely, Hardly',
      'Frasa pembatas: Not only, Not until, At no time, Under no circumstances, In no way',
      'Kata "Only": Only after, Only when, Only then, Only in recent years',
      'Klausa tempat di awal: In the center of the campus stands the historic tower.'
    ],
    commonMistakes: [
      'Menulis subjek sebelum verb setelah kata negatif (contoh: "Rarely we have seen..." -> SALAH, harusnya "Rarely have we seen...").',
      'Lupa menggunakan did/do ketika tidak ada auxiliary di kalimat bentuk lampau/sekarang.'
    ],
    examples: [
      {
        incorrect: 'Rarely astronomers observe such brilliant cosmic phenomena.',
        correct: 'Rarely do astronomers observe such brilliant cosmic phenomena.',
        note: 'Setelah "Rarely" di awal kalimat, harus disisipkan auxiliary "do" sebelum subjek "astronomers".'
      },
      {
        incorrect: 'Not only the hurricane caused severe flooding, but it also damaged bridges.',
        correct: 'Not only did the hurricane cause severe flooding, but it also damaged bridges.',
        note: 'Pola wajib: Not only + did + Subject + Verb 1.'
      },
      {
        incorrect: 'Not until 1920 women in the United States gained the constitutional right to vote.',
        correct: 'Not until 1920 did women in the United States gain the constitutional right to vote.',
        note: 'Inversi terjadi pada klausa utama setelah "Not until [waktu]": did + women + gain.'
      }
    ],
    quickPractice: {
      question: 'Only after the lab experiment was verified by independent peers _____ the scientific finding.',
      options: ['the journal published', 'did the journal publish', 'published the journal', 'the journal was published'],
      answerIndex: 1,
      explanation: 'Kalimat diawali "Only after...", sehingga klausa utama harus mengalami inversi: did + Subject (the journal) + Verb 1 (publish).'
    }
  },
  {
    id: 'parallel',
    category: 'Structure & Written Expression',
    title: '3. Parallel Structure (Kesejajaran Bentuk Gramatikal)',
    frequencyInBEPT: 'Sangat Sering (Tinggi)',
    formula: 'Item 1 + and/but/or + Item 2 (Harus memiliki part of speech / bentuk yang sama)',
    explanation: 'Kata sambung koordinatif (and, but, or) serta paired conjunctions (both...and, either...or, neither...nor, not only...but also) mengharuskan unsur-unsur yang dihubungkan memiliki kelas kata yang sama persis (Noun = Noun, Adjective = Adjective, Verb-ing = Verb-ing, Prepositional Phrase = Prepositional Phrase).',
    keySignals: [
      'Coordinate conjunctions: and, but, or, yet',
      'Paired correlatives: both... and, not only... but also, either... or, neither... nor',
      'Comparisons: more... than, as... as, rather than, instead of'
    ],
    commonMistakes: [
      'Menggabungkan kata benda dengan kata sifat atau gerund (misal: "He likes swimming, running, and to hike" -> SALAH, harusnya "hiking").',
      'Tidak sejajar pada pasangan "not only... but also...".'
    ],
    examples: [
      {
        incorrect: 'The seminar was informative, engaging, and provided inspiration.',
        correct: 'The seminar was informative, engaging, and inspirational.',
        note: 'Ketiganya harus berupa Adjective (informative [Adj], engaging [Adj], inspirational [Adj]).'
      },
      {
        incorrect: 'She is interested not only in biology but also wants to study chemistry.',
        correct: 'She is interested not only in biology but also in chemistry.',
        note: 'Pasangan setelah "not only" (in biology [Prep Phrase]) harus setara dengan setelah "but also" (in chemistry [Prep Phrase]).'
      }
    ],
    quickPractice: {
      question: 'The professor evaluated the essay for its analytical rigor, structural clarity, and _____.',
      options: ['it demonstrated originality', 'originality', 'to be original', 'being original'],
      answerIndex: 1,
      explanation: 'Seri kata benda (Noun): analytical rigor [Noun], structural clarity [Noun], and originality [Noun].'
    }
  },
  {
    id: 'reduced_clauses',
    category: 'Structure & Written Expression',
    title: '4. Reduced Clauses & Participles (Klausa Partisipatif Terpangkas)',
    frequencyInBEPT: 'Sangat Sering (Tinggi)',
    formula: 'Active Clause: Verb-ing... | Passive Clause: Verb-3 (Past Participle)...',
    explanation: 'Sebuah Adverb Clause atau Adjective Clause dapat dipangkas (reduced) dengan syarat subjek pada kedua klausa adalah SAMA. Jika aktif bermakna "melakukan", gunakan Verb-ing. Jika pasif bermakna "dikenai/dikerjakan", gunakan Verb-3.',
    keySignals: [
      'Adverb clause connectors yang bisa direduce: Although, While, When, Before, After, Since',
      'Active: "While he was studying..." -> "While studying..."',
      'Passive: "Although it was built in 1900..." -> "Although built in 1900..." atau "Built in 1900, the bridge..."',
      'Waspadai Dangling Participle: subjek setelah koma harus benar-benar pelaku dari participle tersebut.'
    ],
    commonMistakes: [
      'Menggunakan V-ing untuk makna pasif (contoh: "Discovering in 1930, Pluto was named..." -> SALAH, Pluto ditemukan, jadi harus "Discovered in 1930").',
      'Dangling Modifier: "Walking down the street, the building caught my eye" (Seolah gedung yang berjalan!).'
    ],
    examples: [
      {
        incorrect: 'Locating in the eastern valley, the observatory offers clear celestial views.',
        correct: 'Located in the eastern valley, the observatory offers clear celestial views.',
        note: 'Observatorium terletak / didirikan (makna pasif), sehingga menggunakan past participle "Located".'
      },
      {
        incorrect: 'After completed her doctorate, Dr. Nadia joined the faculty.',
        correct: 'After completing her doctorate, Dr. Nadia joined the faculty.',
        note: 'Preposisi/konjungsi "After" diikuti present participle aktif "completing" (atau having completed).'
      }
    ],
    quickPractice: {
      question: '_____ by severe ocean storms, the ancient lighthouse required extensive structural repairs.',
      options: ['Damaged', 'Damaging', 'It was damaged', 'Because damage'],
      answerIndex: 0,
      explanation: 'Mercusuar tersebut mengalami kerusakan / dirusak oleh badai (makna pasif), sehingga bentuk yang benar adalah past participle "Damaged".'
    }
  },
  {
    id: 'subjunctive',
    category: 'Structure & Written Expression',
    title: '5. Subjunctive of Urgency (Kalimat Mandat / Kepentingan)',
    frequencyInBEPT: 'Sering',
    formula: 'Verb of Urgency + that + Subject + Bare Infinitive (Verb 1 polos tanpa -s/-es/was/were)',
    explanation: 'Ketika kalimat menggunakan kata kerja yang menyatakan usulan, desakan, keharusan, atau rekomendasi, kata kerja pada klausa "that" WAJIB berupa kata kerja dasar polos (bare infinitive), terlepas dari apakah subjeknya tunggal, jamak, atau kalimatnya berbentuk lampau.',
    keySignals: [
      'Verbs: recommend, suggest, insist, demand, require, propose, order, mandate',
      'Adjectives: essential, crucial, vital, imperative, necessary, important that + S + [bare infinitive]',
      'Jika pasif: [be + Verb 3] (contoh: "The dean suggested that the report BE submitted tomorrow").'
    ],
    commonMistakes: [
      'Menambahkan akhiran -s pada subjek orang ketiga tunggal (contoh: "The doctor recommended that he rests" -> SALAH, harusnya "rest").',
      'Menggunakan modal "should" atau to-infinitive di dalam klausa that.'
    ],
    examples: [
      {
        incorrect: 'The supervisor insisted that the student completes the experiment before noon.',
        correct: 'The supervisor insisted that the student complete the experiment before noon.',
        note: 'Setelah "insisted that", gunakan bare verb "complete" (tanpa akhiran -s).'
      },
      {
        incorrect: 'It is essential that all laboratory safety rules are observed.',
        correct: 'It is essential that all laboratory safety rules be observed.',
        note: 'Dalam bentuk pasif, gunakan "be observed" (bukan "are observed" atau "is observed").'
      }
    ],
    quickPractice: {
      question: 'The university bylaws require that every graduate candidate _____ a formal oral defense.',
      options: ['undergoes', 'undergo', 'undergoing', 'underwent'],
      answerIndex: 1,
      explanation: 'Kata kerja "require that" mewajibkan subjunctive bare infinitive yaitu "undergo", bukan "undergoes".'
    }
  },
  {
    id: 'conditionals',
    category: 'Structure & Written Expression',
    title: '6. Conditionals & Inverted Conditionals (Pengandaian & Inversi If)',
    frequencyInBEPT: 'Sering',
    formula: 'Type 1: If + V1, will + V1 | Type 2: If + V2/were, would + V1 | Type 3: If + had V3, would have V3',
    explanation: 'Di tes TOEFL/BEPT, kata "if" sering dihilangkan (Inversion): "Had + S + V3" menggantikan "If S had V3"; "Were + S + to V1" menggantikan "If S were to V1"; "Should + S + V1" menggantikan "If S V1".',
    keySignals: [
      'Inversi Type 1: Should you require assistance, please notify the proctor (= If you require...)',
      'Inversi Type 2: Were the temperature to drop, the reaction would cease (= If the temperature dropped...)',
      'Inversi Type 3: Had the team arrived earlier, they would have seen the eclipse (= If the team had arrived...)'
    ],
    commonMistakes: [
      'Memadukan "Had + S + V3" dengan "would + V1" (salah tipe, seharusnya "would have + V3").',
      'Menggunakan "was" dalam pengandaian Type 2 (selalu gunakan "were" untuk semua subjek dalam pengandaian formal).'
    ],
    examples: [
      {
        incorrect: 'Had the navigational compass worked, the ship will reach the harbor safely.',
        correct: 'Had the navigational compass worked, the ship would have reached the harbor safely.',
        note: 'Klausa had + V3 (Type 3) harus berpasangan dengan "would have + V3".'
      },
      {
        incorrect: 'If he was here, he would explain the anomaly.',
        correct: 'If he were here, he would explain the anomaly.',
        note: 'Dalam conditional formal/akademis, to be selalu "were".'
      }
    ],
    quickPractice: {
      question: 'Had the researchers recognized the contamination earlier, they _____ the entire culture.',
      options: ['would not discard', 'would not have discarded', 'did not discard', 'will not discard'],
      answerIndex: 1,
      explanation: 'Inverted conditional type 3 ("Had the researchers recognized...") membutuhkan pasangan "would not have discarded".'
    }
  },
  {
    id: 'confusing_words',
    category: 'Vocabulary & Written Expression',
    title: '7. Confusing Words & False Friends (Pasangan Kata Mengecoh)',
    frequencyInBEPT: 'Sering',
    formula: 'Bandingkan makna transitif vs intransitif dan countable vs uncountable',
    explanation: 'Soal Written Expression sering menguji pasangan kata yang bunyinya serupa tetapi fungsinya berlainan secara gramatikal.',
    keySignals: [
      'Lie (berbaring, intransitif, no object): lie - lay - lain - lying',
      'Lay (meletakkan, transitif, butuh object): lay - laid - laid - laying',
      'Rise (terbit/naik, intransitif): rise - rose - risen (The sun rises)',
      'Raise (menaikkan/mengangkat, transitif): raise - raised - raised (Raise your hand)',
      'Affect (Verb: mempengaruhi) vs Effect (Noun: akibat/dampak)',
      'Fewer (benda hitung jamak) vs Less (benda tak terhitung)',
      'Number of (hitung) vs Amount of (tak terhitung)'
    ],
    commonMistakes: [
      'Menulis "amount of students" (seharusnya "number of students").',
      'Tertukar antara kata kerja "affect" dan kata benda "effect".'
    ],
    examples: [
      {
        incorrect: 'The heavy rainfall had a profound affect on regional crop yields.',
        correct: 'The heavy rainfall had a profound effect on regional crop yields.',
        note: 'Setelah article "a" dan adjective "profound", dibutuhkan Noun "effect", bukan Verb "affect".'
      },
      {
        incorrect: 'The government ordered farmers to reduce the number of water used.',
        correct: 'The government ordered farmers to reduce the amount of water used.',
        note: 'Air ("water") adalah uncountable, gunakan "amount", bukan "number".'
      }
    ],
    quickPractice: {
      question: 'Industrial factories are required to implement filters that emit _____ pollutants into the air.',
      options: ['less', 'fewer', 'fewest', 'lesser'],
      answerIndex: 1,
      explanation: 'Kata "pollutants" adalah kata benda jamak dapat dihitung (countable plural), sehingga bentuk perbandingan yang tepat adalah "fewer", bukan "less".'
    }
  },
  {
    id: 'awl_vocab',
    category: 'Reading & Listening Vocabulary',
    title: '8. 20 Kosakata Kunci Academic Word List (AWL) Paling Sering Muncul di BEPT',
    frequencyInBEPT: 'Sangat Sering (Tinggi)',
    formula: 'Academic Context Clues & Synonyms',
    explanation: 'Teks bacaan dan ceramah BEPT Universitas Brawijaya diambil dari jurnal ilmiah dan buku teks akademis. Menguasai 20 kata kunci AWL ini akan melipatgandakan kecepatan pemahaman Anda.',
    keySignals: [
      'Catalyst = agen pengubah / pemicu reaksi cepat (trigger, stimulus)',
      'Curtailed = dipangkas / dikurangi (reduced, restricted, limited)',
      'Burgeoning = berkembang sangat pesat (rapidly expanding, booming)',
      'Watershed = titik balik bersejarah / tonggak (turning point, milestone)',
      'Distinguished = dibedakan / dicirikan (differentiated, characterized)',
      'Mitigate = meredakan / mengurangi keparahan (alleviate, lessen, ease)',
      'Exergonic = melepaskan energi (energy-releasing)',
      'Negligible = sangat kecil hingga bisa diabaikan (insignificant, trivial)',
      'Conspecific = sesama spesies biologis (of the same species)',
      'Viscous = kental dan lengket (thick, syrupy, adhesive)'
    ],
    commonMistakes: [
      'Mengartikan "distinguished" hanya sebagai "terkenal/hebat", padahal dalam konteks formal teks bacaan sering bermakna "dibedakan/differentiated".',
      'Mengartikan "watershed" secara harfiah sebagai "daerah penampungan air", padahal di teks sejarah bermakna "titik balik bersejarah (turning point)".'
    ],
    examples: [
      {
        incorrect: 'In line 3, "distinguished" means "famous".',
        correct: 'In line 3, "distinguished" means "differentiated".',
        note: 'Konteks: "Historical settlements were frequently distinguished by haphazard growth" = permukiman sejarah dicirikan/dibedakan oleh pertumbuhan yang serampangan.'
      }
    ],
    quickPractice: {
      question: 'In academic research texts, the word "mitigate" is closest in meaning to:',
      options: ['alleviate or reduce', 'intensify or worsen', 'calculate accurately', 'refuse entirely'],
      answerIndex: 0,
      explanation: '"Mitigate" bermakna meredakan atau mengurangi dampak negatif (alleviate / reduce).'
    }
  }
];
