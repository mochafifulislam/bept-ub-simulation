export interface SectionStrategyGuide {
  id: string;
  sectionTitle: string;
  sectionSubtitle: string;
  totalQuestions: number;
  timeAllocation: string;
  idealPacing: string;
  targetRawScore: string;
  overview: string;
  subsections: {
    title: string;
    description: string;
    goldenRules: {
      rule: string;
      explanation: string;
      exampleBad?: string;
      exampleGood?: string;
    }[];
  }[];
  proTips: string[];
}

export const beptStrategies: SectionStrategyGuide[] = [
  {
    id: 'general',
    sectionTitle: 'Strategi Umum BEPT Universitas Brawijaya',
    sectionSubtitle: 'Mindset & Manajemen Waktu Ujian 120 Menit (140 Soal)',
    totalQuestions: 140,
    timeAllocation: '120 Menit (Total Waktu Global)',
    idealPacing: '~50 detik per soal secara rata-rata',
    targetRawScore: '115+ dari 140 (Setara Skor TOEFL 550+)',
    overview: 'Tes BEPT Universitas Brawijaya diakses melalui Computer-Based Testing (ecbt.ub.ac.id) berbasis Moodle. Total durasi adalah 120 menit untuk 140 butir soal. Tidak ada pengurangan nilai untuk jawaban salah (No Negative Marking), sehingga HARAM mengosongkan jawaban apa pun.',
    subsections: [
      {
        title: 'Karakteristik Khusus E-CBT UB yang Menguntungkan Anda',
        description: 'Berdasarkan panduan resmi E-CBT UB:',
        goldenRules: [
          {
            rule: 'Bisa Mengerjakan Secara Fleksibel & Bebas Antar Sesi',
            explanation: 'Berbeda dengan TOEFL ITP kertas tradisional di mana Anda terkunci pada satu sesi per waktu, di E-CBT UB waktu 120 menit berjalan secara global. Anda dapat melompat antara Listening, Structure, dan Reading kapan saja menggunakan panel navigasi soal di sebelah kanan.'
          },
          {
            rule: 'Audio Listening Bisa Diputar Ulang & Diatur Kecepatannya',
            explanation: 'Di E-CBT UB, audio listening tidak langsung berputar otomatis saat halaman dibuka. Anda harus menekan tombol Play secara manual. Anda dapat mem-pause, memutar ulang beberapa kali, dan mempercepat (1.25x/1.5x) atau memperlambat (0.75x/1x). Manfaatkan fitur ini jika tertinggal.'
          },
          {
            rule: 'Manfaatkan Fitur Bendera (Flag Question) & Summary of Attempt',
            explanation: 'Beri tanda bendera pada nomor yang Anda ragu-ragu. Di akhir pengerjaan, layar ringkasan akan menampilkan daftar nomor yang belum dijawab atau ditandai. Pastikan tidak ada "Not yet answered" sebelum menekan tombol Submit All and Finish.'
          }
        ]
      }
    ],
    proTips: [
      'Alokasi waktu ideal: Listening (35 menit) -> Structure & Written Expression (25 menit) -> Reading Comprehension (50 menit) -> Review & Cek Soal Flagged (10 menit).',
      'Jangan pernah membiarkan ada soal kosong. Jika waktu tersisa 2 menit dan masih ada 5 soal belum terjawab, pilih satu opsi konsisten (misal B atau C) untuk seluruh sisa soal.',
      'Gunakan tombol shortcut keyboard volume FN+F2 dan FN+F3 saat ujian di laboratorium UB untuk memastikan audio terdengar jelas tanpa mengganggu konsentrasi.'
    ]
  },
  {
    id: 'listening',
    sectionTitle: 'Section 1: Listening Comprehension',
    sectionSubtitle: '50 Soal · Part A (1-30), Part B (31-38), Part C (39-50)',
    totalQuestions: 50,
    timeAllocation: 'Nominal 35 Menit (Dapat diatur dalam 120 menit total)',
    idealPacing: '~40 detik per soal setelah audio selesai',
    targetRawScore: '40-45 dari 50 soal benar (Skor Konversi 55-63)',
    overview: 'Section 1 menguji pemahaman Anda terhadap bahasa Inggris lisan formal maupun percakapan informal khas kampus Amerika. Di BEPT UB, audio diputar via pemutar browser E-CBT.',
    subsections: [
      {
        title: 'Part A: Short Dialogues (Soal 1 - 30)',
        description: 'Percakapan pendek 2 orang (Pria dan Wanita) diikuti 1 pertanyaan narator.',
        goldenRules: [
          {
            rule: 'Fokus Utama pada Pembicara Kedua (The Second Speaker Rule)',
            explanation: 'Dalam 85-90% soal Part A, kunci jawaban dan makna tersirat terletak pada apa yang diucapkan oleh orang kedua. Simak pembicara pertama untuk konteks, tetapi dengarkan pembicara kedua dengan fokus penuh.'
          },
          {
            rule: 'Waspada Suara Serupa (Avoid Similar Sounds Trap)',
            explanation: 'Pembuat soal TOEFL sengaja menaruh kata-kata yang bunyinya sangat mirip dengan kata di audio (misal: "weather" vs "whether", "depart" vs "department"). Jawaban yang benar hampir selalu berupa PARAFRASA dengan kata yang berbeda, BUKAN kata yang bunyinya sama persis!'
          },
          {
            rule: 'Pahami Idiom Ungkapan Persetujuan & Penolakan Halus',
            explanation: 'Ungkapan seperti "You can say that again!" berarti setuju 100%. Ungkapan "Could I ever!" berarti sangat ingin/pasti. Ungkapan "If only I didn\'t have..." berarti penolakan halus karena ada kendala lain.'
          }
        ]
      },
      {
        title: 'Part B: Longer Conversations (Soal 31 - 38)',
        description: '2 percakapan lebih panjang mengenai kehidupan kampus atau diskusi akademis, masing-masing diikuti 3-4 pertanyaan.',
        goldenRules: [
          {
            rule: 'Skim Pilihan Jawaban Sebelum Memutar Audio',
            explanation: 'Karena di E-CBT UB Anda yang mengontrol kapan audio dimulai, luangkan 10-15 detik untuk membaca cepat keempat pilihan jawaban (A, B, C, D) sebelum menekan tombol Play! Anda akan langsung mengetahui topik apa yang akan dibahas.'
          },
          {
            rule: 'Catat Informasi 5W + 1H',
            explanation: 'Catat poin penting: Siapa yang berbicara, apa masalah utamanya, apa solusi yang disarankan, dan kapan/di mana hal itu akan dilakukan.'
          }
        ]
      },
      {
        title: 'Part C: Academic Talks & Mini-Lectures (Soal 39 - 50)',
        description: '3 ceramah/kuliah dosen tentang ilmu sains, sejarah, seni, atau biologi, masing-masing diikuti 4 pertanyaan.',
        goldenRules: [
          {
            rule: 'Kalimat Pembuka Adalah Kunci Topik Utama',
            explanation: 'Dosen selalu menyebutkan fokus materi pada kalimat ke-1 atau ke-2 ("Today we will discuss...", "Let\'s examine the evolutionary history of..."). Simak kalimat pembuka dengan teliti untuk menjawab pertanyaan nomor pertama.'
          },
          {
            rule: 'Perhatikan Hubungan Sebab-Akibat (Cause and Effect)',
            explanation: 'Catat kata transisi seperti "consequently", "as a result", "because of this", "leading to". Pertanyaan di Part C hampir selalu menanyakan faktor pemicu suatu fenomena sains atau sejarah.'
          }
        ]
      }
    ],
    proTips: [
      'Gunakan fitur speed 1x saat pertama kali mendengarkan, dan gunakan replay jika ada frase kunci yang belum tertangkap.',
      'Jangan terkejut jika ada kosakata istilah biologi atau astronomi yang rumit; fokuslah pada hubungan logis antara konsep yang dijelaskan dosen.'
    ]
  },
  {
    id: 'structure',
    sectionTitle: 'Section 2: Structure and Written Expression',
    sectionSubtitle: '40 Soal · Structure (51-65), Written Expression (66-90)',
    totalQuestions: 40,
    timeAllocation: 'Nominal 25 Menit (~35 detik per soal)',
    idealPacing: 'Sangat krusial menghemat waktu di sini untuk ditabung ke sesi Reading!',
    targetRawScore: '33-37 dari 40 soal benar (Skor Konversi 55-65)',
    overview: 'Section 2 menguji penguasaan tata bahasa baku (formal standard written English). Terdiri dari 15 soal melengkapi kalimat dan 25 soal mengidentifikasi bagian yang salah (garis bawah A, B, C, D).',
    subsections: [
      {
        title: 'Structure: Melengkapi Kalimat (Soal 51 - 65)',
        description: 'Temukan bagian kalimat yang rumpang agar kalimat menjadi gramatikal.',
        goldenRules: [
          {
            rule: 'Langkah 1: Identifikasi Subjek (Subject) dan Kata Kerja (Verb)',
            explanation: 'Setiap kalimat bahasa Inggris wajib memiliki minimal 1 Subject dan 1 Main Verb. Temukan apa yang sudah ada di soal. Jika Subject belum ada, cari Subject. Jika Verb belum ada, cari Verb. Jangan memilih opsi yang memberikan Verb ganda tanpa penghubung (connector).'
          },
          {
            rule: 'Rumus Konektor: N Klausa Membutuhkan (N - 1) Connector',
            explanation: 'Jika sebuah kalimat memiliki 2 klausa (2 Subject dan 2 Verb), wajib ada 1 kata penghubung (because, although, which, that, since, while). Jika ada 3 klausa, wajib ada 2 konektor.'
          },
          {
            rule: 'Kuasai Pola Inversi Negatif & Kondisional',
            explanation: 'Jika kalimat diawali kata negatif (Not until, Rarely, Seldom, Never, Scarcely, Only then), susunan kata kerja harus dibalik: Aux + S + V (contoh: "Rarely have scientists found...").'
          }
        ]
      },
      {
        title: 'Written Expression: Mencari Kesalahan (Soal 66 - 90)',
        description: 'Identifikasi 1 dari 4 pilihan bergaris bawah (A, B, C, D) yang salah secara tata bahasa.',
        goldenRules: [
          {
            rule: 'Cek Subject-Verb Agreement Terlebih Dahulu',
            explanation: 'Ini adalah pola kesalahan paling sering di BEPT! Perhatikan apakah subjek tunggal dipasangkan dengan kata kerja jamak atau sebaliknya, terutama jika terhalang prepositional phrase (contoh: "The discovery of new vaccines have revolutionized" -> SALAH, harusnya has).'
          },
          {
            rule: 'Cek Paralelisme Kata (Parallel Structure)',
            explanation: 'Jika ada kata sambung "and", "but", "or" serta paired conjunctions ("both...and", "either...or", "not only...but also"), bentuk katanya harus setara. Noun dengan Noun, Adjective dengan Adjective, Gerund (-ing) dengan Gerund (-ing).'
          },
          {
            rule: 'Cek Pasangan Part of Speech: Adjective vs Adverb',
            explanation: 'Adjective menerangkan Noun (urban centers, bukan urbanly centers). Adverb menerangkan Verb atau Adjective (severely damaged, bukan severe damaged).'
          },
          {
            rule: 'Waspada Countable vs Uncountable Nouns',
            explanation: 'Amount of + Uncountable (amount of water/money/time). Number of + Countable Plural (number of students/books/trees). Di BEPT sering ditukar!'
          }
        ]
      }
    ],
    proTips: [
      'Jangan terjemahkan kalimat kata per kata ke bahasa Indonesia! Analisis struktur sintaksisnya (S + V + O / Compl).',
      'Jika Anda ragu pada soal Written Expression, periksa apakah ada kata kerja berakhiran -s atau kata yang berpasangan dengan "and". 70% kesalahan berada di sana.'
    ]
  },
  {
    id: 'reading',
    sectionTitle: 'Section 3: Reading Comprehension',
    sectionSubtitle: '50 Soal · 5 Teks Akademis (91-140) masing-masing 9-11 soal',
    totalQuestions: 50,
    timeAllocation: 'Nominal 55 Menit (~10-11 menit per teks)',
    idealPacing: '3-4 menit membaca teks + 6-7 menit menjawab 10 pertanyaan',
    targetRawScore: '40-45 dari 50 soal benar (Skor Konversi 55-63)',
    overview: 'Section 3 menyajikan artikel akademis dari berbagai disiplin ilmu (biologi kelautan, sejarah, geologi, demografi, arsitektur). Tidak diperlukan pengetahuan teknis sebelumnya karena semua jawaban bersumber dari teks.',
    subsections: [
      {
        title: 'Metode Membaca Efektif: Skimming & Scanning',
        description: 'Trik membaca cepat tanpa kehabisan waktu.',
        goldenRules: [
          {
            rule: 'Baca Paragraf Pertama & Kalimat Pertama Setiap Paragraf (Skimming)',
            explanation: 'Jangan membaca lambat kata demi kata dari awal. Lakukan skimming pada kalimat pembuka tiap paragraf selama 60-90 detik untuk menangkap peta ide bacaan.'
          },
          {
            rule: 'Gunakan Kata Kunci Soal untuk Melacak Jawaban (Scanning)',
            explanation: 'Untuk soal detail ("According to the passage..."), cari kata kunci unik di pertanyaan (nama orang, tahun, istilah teknis), lalu langsung arahkan mata ke teks pada bagian yang memuat kata kunci tersebut.'
          }
        ]
      },
      {
        title: 'Strategi Menghadapi Jenis Soal Spesifik',
        description: 'Pendekatan praktis untuk tiap format pertanyaan.',
        goldenRules: [
          {
            rule: 'Soal Main Idea / Primary Purpose',
            explanation: 'Jawabannya harus mencakup SELURUH paragraf, bukan hanya satu detail sempit. Biasanya dirangkum pada kalimat pertama paragraf ke-1 atau kalimat terakhir paragraf penutup.'
          },
          {
            rule: 'Soal Vocabulary in Context ("closest in meaning to")',
            explanation: 'Jangan langsung memilih definisi kamus pertama! Baca kalimat di sekitar kata tersebut. Masukkan opsi A, B, C, D ke dalam kalimat dan pilih kata yang paling logis mempertahankan konteks makna.'
          },
          {
            rule: 'Soal Negative Factual ("All of the following EXCEPT / NOT mentioned")',
            explanation: 'Tiga opsi ada di dalam teks, dan satu opsi salah atau tidak disebutkan. Temukan ketiga opsi yang ada di teks dan coret/eliminasi mereka.'
          },
          {
            rule: 'Soal Referensi Kata Ganti ("The word \'it\' / \'they\' in line X refers to")',
            explanation: 'Kata ganti selalu merujuk pada kata benda (noun) yang berada TEPAT SEBELUMNYA di kalimat yang sama atau kalimat sebelumnya. Periksa kesesuaian tunggal/jamaknya.'
          }
        ]
      }
    ],
    proTips: [
      'Alokasikan maksimal 11 menit untuk setiap teks bacaan (10 soal). Jika waktu per teks sudah 10 menit, segera selesaikan dan lanjut ke teks berikutnya.',
      'Gunakan fitur penyorot teks mental atau perhatikan nomor baris yang dirujuk pada soal untuk menghemat waktu scanning.'
    ]
  }
];
