import { Question } from '../../types/bept';

export const listeningQuestions: Question[] = [
  // --- PART A: SHORT CONVERSATIONS (Questions 1 - 30) ---
  {
    id: 1,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 1,
    title: 'Question 1',
    prompt: 'Listen to a short conversation between two people and choose the best answer to the question.',
    audioScript: [
      { speaker: 'Man', text: 'Did you hear about the torrential rain warning for tonight?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'Yes, and I only wish I hadn\'t left my laundry out in the yard!', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman imply?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman imply?',
    options: [
      { key: 'A', text: 'She also missed the weather forecast.' },
      { key: 'B', text: 'She has some clothes that need to be cleaned.' },
      { key: 'C', text: 'The man should take the time to watch the news.' },
      { key: 'D', text: 'Her clothes will probably get wet in the rain.' }
    ],
    correctAnswer: 'D',
    explanation: 'Wanita tersebut mengatakan "I only wish I hadn\'t left my laundry out in the yard" (Saya hanya berharap saya tidak meninggalkan cucian saya di halaman). Penggunaan past subjunctive "wish I hadn\'t" menunjukkan penyesalan atas kenyataan bahwa pakaiannya masih di luar dan akan terkena hujan lebat malam ini.',
    strategyTip: 'Fokus pada pembicara kedua. Ungkapan "wish + had/hadn\'t" menyatakan kondisi kebalikan dari fakta di dunia nyata.'
  },
  {
    id: 2,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 2,
    title: 'Question 2',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Are you going to the biology review session tonight at seven?', voiceGender: 'female' },
      { speaker: 'Man', text: 'Could I ever! Dr. Miller\'s midterm exam is notoriously tough.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man mean?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man mean?',
    options: [
      { key: 'A', text: 'He is definitely planning to attend the session.' },
      { key: 'B', text: 'He cannot make it because of another commitment.' },
      { key: 'C', text: 'He doubts Dr. Miller will give a difficult exam.' },
      { key: 'D', text: 'He has already reviewed the biology material.' }
    ],
    correctAnswer: 'A',
    explanation: 'Frasa idiomatis "Could I ever!" bermakna penegasan persetujuan yang sangat kuat (sangat ingin / pasti ikut). Si pria menegaskan bahwa ia tentu akan datang ke sesi review karena ujiannya terkenal sangat sulit.',
    strategyTip: 'Perhatikan idiom penegasan seperti "Could I ever!" atau "You bet!" yang berarti "Of course / Definitely yes".'
  },
  {
    id: 3,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 3,
    title: 'Question 3',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'Have you turned in the research methodology proposal yet?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'Not yet. I still have to double-check my bibliography and format the citations.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What will the woman probably do next?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What will the woman probably do next?',
    options: [
      { key: 'A', text: 'Submit the proposal to her professor right away.' },
      { key: 'B', text: 'Review the references in her paper.' },
      { key: 'C', text: 'Begin writing the introductory paragraph.' },
      { key: 'D', text: 'Ask the man for research assistance.' }
    ],
    correctAnswer: 'B',
    explanation: 'Wanita mengatakan "I still have to double-check my bibliography and format the citations" (Saya masih harus mengecek ulang daftar pustaka dan memformat kutipan). Kata "bibliography/citations" bersinonim dengan "references".',
    strategyTip: 'Jawaban yang tepat pada TOEFL sering kali merupakan parafrasa kata kunci (bibliography -> references).'
  },
  {
    id: 4,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 4,
    title: 'Question 4',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'I heard that Professor Bennett postponed the calculus exam until next Monday.', voiceGender: 'female' },
      { speaker: 'Man', text: 'That took a load off my mind!', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man imply?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man imply?',
    options: [
      { key: 'A', text: 'He is relieved by the announcement.' },
      { key: 'B', text: 'He cannot remember the date of the exam.' },
      { key: 'C', text: 'He is disappointed with the postponement.' },
      { key: 'D', text: 'He will drop the calculus class.' }
    ],
    correctAnswer: 'A',
    explanation: 'Idiom "took a load off my mind" bermakna membuat seseorang merasa sangat lega (relieved) dari beban pikiran atau stres.',
    strategyTip: 'Idiom emosi sering keluar di Part A. "Relieved" sering diungkapkan dengan "take a weight/load off one\'s mind/shoulders".'
  },
  {
    id: 5,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 5,
    title: 'Question 5',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'I was hoping to speak with the department manager before the afternoon briefing.', voiceGender: 'male' },
      { speaker: 'Woman', text: 'His calendar is completely booked solid until tomorrow morning.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman imply?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman imply?',
    options: [
      { key: 'A', text: 'The man should go to the meeting immediately.' },
      { key: 'B', text: 'The manager will be available before the meeting.' },
      { key: 'C', text: 'The manager is too busy to see the man now.' },
      { key: 'D', text: 'The man should buy a calendar.' }
    ],
    correctAnswer: 'C',
    explanation: 'Wanita menyatakan "His calendar is completely booked solid until tomorrow morning" yang berarti manajer sangat sibuk dan jadwalnya penuh, sehingga tidak bisa menemui pria tersebut saat ini.',
    strategyTip: 'Ungkapan "booked solid" atau "tied up" mengindikasikan jadwal penuh / terlalu sibuk.'
  },
  {
    id: 6,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 6,
    title: 'Question 6',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'The campus computer lab is always crowded around this hour. How did you get a station?', voiceGender: 'female' },
      { speaker: 'Man', text: 'I made a reservation online yesterday morning.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What did the man do?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What did the man do?',
    options: [
      { key: 'A', text: 'He booked a computer station in advance.' },
      { key: 'B', text: 'He arrived at the laboratory before dawn.' },
      { key: 'C', text: 'He asked a friend to save a computer for him.' },
      { key: 'D', text: 'He bought a new laptop yesterday.' }
    ],
    correctAnswer: 'A',
    explanation: '"Made a reservation online yesterday morning" sama artinya dengan "booked a computer station in advance" (memesan workstation komputer terlebih dahulu sebelumnya).',
    strategyTip: 'Sinonim: "make a reservation" = "book in advance".'
  },
  {
    id: 7,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 7,
    title: 'Question 7',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'Should we order pizza for dinner, or would you prefer cooking something?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'To be honest, after studying for six straight hours, the kitchen is the last place I want to be.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman suggest?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman suggest?',
    options: [
      { key: 'A', text: 'Ordering food rather than preparing a meal.' },
      { key: 'B', text: 'Studying in the kitchen for another hour.' },
      { key: 'C', text: 'Cleaning the kitchen together before dinner.' },
      { key: 'D', text: 'Skipping dinner altogether.' }
    ],
    correctAnswer: 'A',
    explanation: 'Frasa "the last place I want to be" menunjukkan keengganan untuk memasak sendiri karena sudah lelah belajar. Pilihan terbaik adalah memesan makanan (ordering pizza).',
    strategyTip: '"The last thing / place I want" = sama sekali tidak ingin melakukan hal tersebut.'
  },
  {
    id: 8,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 8,
    title: 'Question 8',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Did you manage to fix the printer jam in the faculty lounge?', voiceGender: 'female' },
      { speaker: 'Man', text: 'Hardly. In fact, I only seemed to make things worse.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man mean?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man mean?',
    options: [
      { key: 'A', text: 'He was unable to resolve the printer issue.' },
      { key: 'B', text: 'He worked hard and fixed the machine completely.' },
      { key: 'C', text: 'The lounge was locked when he arrived.' },
      { key: 'D', text: 'He purchased a brand-new printer.' }
    ],
    correctAnswer: 'A',
    explanation: '"Hardly" merupakan kata dengan makna negatif ("hampir tidak sama sekali"). Ditambah "make things worse", ini menegaskan dia gagal memperbaiki printer.',
    strategyTip: 'Waspadai kata-kata bernuansa negatif: "hardly", "barely", "scarcely", "seldom".'
  },
  {
    id: 9,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 9,
    title: 'Question 9',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'Can you help me assemble this bookshelf this afternoon?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'If only I didn\'t have a chemistry lab report due at four o\'clock!', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman imply?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman imply?',
    options: [
      { key: 'A', text: 'She cannot help because she has an assignment deadline.' },
      { key: 'B', text: 'She will help the man right after four o\'clock.' },
      { key: 'C', text: 'She does not know how to assemble furniture.' },
      { key: 'D', text: 'She wants the man to assist with her lab report.' }
    ],
    correctAnswer: 'A',
    explanation: '"If only I didn\'t have..." adalah pengandaian penolakan halus. Dia tidak dapat membantu karena memiliki tenggat waktu tugas kimia pada pukul 4.',
    strategyTip: '"If only..." biasanya mengindikasikan penolakan atau ketidakmampuan memenuhi permintaan.'
  },
  {
    id: 10,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 10,
    title: 'Question 10',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'I\'m really nervous about presenting our marketing project to the client tomorrow.', voiceGender: 'female' },
      { speaker: 'Man', text: 'Relax, we have rehearsed the slides ten times. You\'ll do just fine.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What is the man trying to do?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What is the man trying to do?',
    options: [
      { key: 'A', text: 'Reassure the woman about the presentation.' },
      { key: 'B', text: 'Postpone the client meeting until next week.' },
      { key: 'C', text: 'Encourage the woman to memorize ten more slides.' },
      { key: 'D', text: 'Criticize the woman\'s preparation.' }
    ],
    correctAnswer: 'A',
    explanation: 'Pria berkata "Relax, we have rehearsed the slides ten times. You\'ll do just fine", tujuannya adalah menenangkan dan meyakinkan rekan kerjanya (reassure).',
    strategyTip: 'Pertanyaan fungsi ujaran ("What is the man trying to do?") sering dijawab dengan kata kerja seperti reassure, suggest, apologize.'
  },
  {
    id: 11,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 11,
    title: 'Question 11',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'Is it still raining outside, or did the sky clear up?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'Take your raincoat, that\'s all I\'ll say!', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman imply?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman imply?',
    options: [
      { key: 'A', text: 'It is still raining heavily outdoors.' },
      { key: 'B', text: 'The weather has turned completely sunny.' },
      { key: 'C', text: 'The man should buy a new raincoat.' },
      { key: 'D', text: 'She forgot her umbrella in the car.' }
    ],
    correctAnswer: 'A',
    explanation: '"Take your raincoat, that\'s all I\'ll say!" menyiratkan bahwa di luar cuaca masih hujan dan basah sehingga jas hujan mutlak dibutuhkan.',
    strategyTip: 'Jawaban implisit: jika disuruh membawa perlengkapan hujan, berarti cuaca di luar sedang hujan.'
  },
  {
    id: 12,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 12,
    title: 'Question 12',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Did Thomas get accepted into the graduate architecture program?', voiceGender: 'female' },
      { speaker: 'Man', text: 'Not only was he accepted, but he was also awarded a full tuition scholarship!', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man say about Thomas?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man say about Thomas?',
    options: [
      { key: 'A', text: 'He received financial support along with admission.' },
      { key: 'B', text: 'He decided not to attend architecture school.' },
      { key: 'C', text: 'He needs to apply for a scholarship next semester.' },
      { key: 'D', text: 'He was rejected by the graduate admissions committee.' }
    ],
    correctAnswer: 'A',
    explanation: 'Struktur "Not only was he accepted, but he was also awarded a full tuition scholarship" berarti Thomas diterima sekaligus mendapatkan beasiswa penuh pembiayaan kuliah (financial support).',
    strategyTip: 'Inversi "Not only... but also..." menekankan kedua hal positif terjadi bersamaan.'
  },
  {
    id: 13,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 13,
    title: 'Question 13',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'Do you want to drive together to the academic seminar in Surabaya?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'I would, but my car is in the repair shop until Friday.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What problem does the woman have?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What problem does the woman have?',
    options: [
      { key: 'A', text: 'Her vehicle is currently being serviced.' },
      { key: 'B', text: 'She cannot attend the seminar on Friday.' },
      { key: 'C', text: 'She does not know the driving directions to Surabaya.' },
      { key: 'D', text: 'She prefers to take the train alone.' }
    ],
    correctAnswer: 'A',
    explanation: '"My car is in the repair shop" bersinonim dengan "her vehicle is currently being serviced".',
    strategyTip: 'Parafrasa: car -> vehicle, repair shop -> being serviced.'
  },
  {
    id: 14,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 14,
    title: 'Question 14',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'I can\'t believe how complex this econometric assignment is!', voiceGender: 'female' },
      { speaker: 'Man', text: 'You can say that again! I\'ve spent three nights on problem four alone.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man mean?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man mean?',
    options: [
      { key: 'A', text: 'He strongly agrees that the assignment is difficult.' },
      { key: 'B', text: 'He did not hear what the woman just said.' },
      { key: 'C', text: 'He wants the woman to repeat her statement.' },
      { key: 'D', text: 'He finished all four problems in one night.' }
    ],
    correctAnswer: 'A',
    explanation: 'Idiom umum TOEFL: "You can say that again!" BUKAN berarti menyuruh mengulangi perkataan, melainkan ekspresi persetujuan penuh ("I completely agree with you!").',
    strategyTip: 'Jebakan klasik TOEFL: "You can say that again" = 100% agree.'
  },
  {
    id: 15,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 15,
    title: 'Question 15',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'Excuse me, are tickets for the evening concert still available at the box office?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'They sold out within twenty minutes of the counter opening.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman tell the man?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman tell the man?',
    options: [
      { key: 'A', text: 'No tickets remain for the performance.' },
      { key: 'B', text: 'The concert has been cancelled.' },
      { key: 'C', text: 'Tickets will go on sale in twenty minutes.' },
      { key: 'D', text: 'He can purchase tickets only at the morning counter.' }
    ],
    correctAnswer: 'A',
    explanation: '"Sold out" berarti tiket sudah habis terjual seluruhnya tanpa ada yang tersisa (no tickets remain).',
    strategyTip: 'Identifikasi frasa umum transaksi seperti "sold out" = no tickets remain.'
  },
  {
    id: 16,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 16,
    title: 'Question 16',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Has Dr. Robinson posted the final exam scores outside his office?', voiceGender: 'female' },
      { speaker: 'Man', text: 'As a matter of fact, he just pinned them on the bulletin board ten minutes ago.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man imply?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man imply?',
    options: [
      { key: 'A', text: 'The grades are now available for viewing.' },
      { key: 'B', text: 'Dr. Robinson will post the scores next week.' },
      { key: 'C', text: 'The office door has been closed for ten minutes.' },
      { key: 'D', text: 'Students must email the professor directly for their grades.' }
    ],
    correctAnswer: 'A',
    explanation: 'Nilai ujian baru saja ditempelkan di papan pengumuman sepuluh menit yang lalu, artinya nilai tersebut sekarang sudah dapat dilihat oleh mahasiswa.',
    strategyTip: 'Perhatikan frasa "just pinned them on the board" -> now available.'
  },
  {
    id: 17,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 17,
    title: 'Question 17',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'I\'m thinking of dropping my introductory linguistics course.', voiceGender: 'male' },
      { speaker: 'Woman', text: 'Why not sleep on it before making such a major decision?', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman suggest the man do?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman suggest the man do?',
    options: [
      { key: 'A', text: 'Wait until tomorrow before deciding.' },
      { key: 'B', text: 'Take a nap during his linguistics lecture.' },
      { key: 'C', text: 'Drop the course immediately.' },
      { key: 'D', text: 'Talk to his roommate about sleeping habits.' }
    ],
    correctAnswer: 'A',
    explanation: 'Idiom "sleep on it" bermakna menunda pengambilan keputusan hingga keesokan harinya agar bisa berpikir lebih jernih dan tenang.',
    strategyTip: '"Sleep on it" = wait until tomorrow before making a final decision.'
  },
  {
    id: 18,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 18,
    title: 'Question 18',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Did the delivery truck drop off the lab specimens this morning?', voiceGender: 'female' },
      { speaker: 'Man', text: 'They arrived right before the noon break.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man say about the specimens?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man say about the specimens?',
    options: [
      { key: 'A', text: 'They were delivered earlier today.' },
      { key: 'B', text: 'They were damaged during transit.' },
      { key: 'C', text: 'They will be delivered tomorrow noon.' },
      { key: 'D', text: 'The delivery truck got lost on campus.' }
    ],
    correctAnswer: 'A',
    explanation: '"They arrived right before the noon break" berarti sampel laboratorium tersebut sudah sampai lebih awal hari ini.',
    strategyTip: 'Waktu "right before noon" masuk ke dalam kategori "earlier today".'
  },
  {
    id: 19,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 19,
    title: 'Question 19',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'How did your job interview with the multinational consultancy go?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'I couldn\'t have asked for a better reception from the interviewers!', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman mean?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman mean?',
    options: [
      { key: 'A', text: 'The interview went exceptionally well.' },
      { key: 'B', text: 'She did not like the questions she was asked.' },
      { key: 'C', text: 'She was not received warmly by the panel.' },
      { key: 'D', text: 'She asked the interviewers too many questions.' }
    ],
    correctAnswer: 'A',
    explanation: 'Frasa "I couldn\'t have asked for a better [X]" adalah idiom yang berarti hasilnya sudah paling sempurna/sangat memuaskan (exceptionally well).',
    strategyTip: 'Bentuk komparatif negatif ("couldn\'t have been better") berarti bermakna superlatif paling bagus.'
  },
  {
    id: 20,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 20,
    title: 'Question 20',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Should we stop by the grocery store on our way back to the dorms?', voiceGender: 'female' },
      { speaker: 'Man', text: 'Let\'s wait until the weekend when they have the student discount specials.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man suggest?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man suggest?',
    options: [
      { key: 'A', text: 'Delaying grocery shopping to take advantage of discounts.' },
      { key: 'B', text: 'Going to a different store today.' },
      { key: 'C', text: 'Cooking dinner at the dorm right away.' },
      { key: 'D', text: 'Applying for a student card immediately.' }
    ],
    correctAnswer: 'A',
    explanation: 'Pria menyarankan untuk menunda belanja bahan makanan hingga akhir pekan ("Let\'s wait until the weekend") agar bisa memanfaatkan diskon khusus mahasiswa.',
    strategyTip: '"Let\'s wait until..." = menyarankan penundaan (delaying).'
  },
  {
    id: 21,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 21,
    title: 'Question 21',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'Did Kevin show up to the student council executive meeting?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'Hardly ever does he miss one, but today his flight was delayed.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman say about Kevin?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman say about Kevin?',
    options: [
      { key: 'A', text: 'He usually attends the meetings, but missed today\'s.' },
      { key: 'B', text: 'He frequently forgets about student council sessions.' },
      { key: 'C', text: 'He arrived at the meeting by airplane.' },
      { key: 'D', text: 'He resigned from his council position.' }
    ],
    correctAnswer: 'A',
    explanation: '"Hardly ever does he miss one" berarti ia hampir selalu hadir, namun hari ini ia tidak bisa hadir karena penerbangannya ditunda (delayed).',
    strategyTip: '"Hardly ever misses" = almost always attends.'
  },
  {
    id: 22,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 22,
    title: 'Question 22',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'I heard you were looking for an apartment near the faculty of engineering.', voiceGender: 'female' },
      { speaker: 'Man', text: 'Yes, but finding something affordable within walking distance is easier said than done.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man imply?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man imply?',
    options: [
      { key: 'A', text: 'Finding a cheap apartment close to campus is very difficult.' },
      { key: 'B', text: 'He has already signed a lease on an apartment.' },
      { key: 'C', text: 'He prefers to live far from the engineering faculty.' },
      { key: 'D', text: 'Walking to campus is easy for him.' }
    ],
    correctAnswer: 'A',
    explanation: 'Idiom "easier said than done" (lebih mudah diucapkan daripada dilakukan) berarti tugas tersebut sangat sulit untuk diwujudkan.',
    strategyTip: '"Easier said than done" = difficult to accomplish.'
  },
  {
    id: 23,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 23,
    title: 'Question 23',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'Is the new campus art gallery open to the general public yet?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'Only to faculty members until the official grand opening on Friday.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman mean?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman mean?',
    options: [
      { key: 'A', text: 'The public cannot enter the gallery before Friday.' },
      { key: 'B', text: 'The gallery will close permanently on Friday.' },
      { key: 'C', text: 'Faculty members are not allowed inside.' },
      { key: 'D', text: 'The opening ceremony has been cancelled.' }
    ],
    correctAnswer: 'A',
    explanation: 'Galeri saat ini hanya terbuka untuk anggota staf pengajar (faculty) sampai pembukaan resmi untuk umum pada hari Jumat.',
    strategyTip: 'Kata pembatas "only... until..." membatasi akses sebelum waktu yang ditentukan.'
  },
  {
    id: 24,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 24,
    title: 'Question 24',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Did you get to talk to the financial aid officer about your grant application?', voiceGender: 'female' },
      { speaker: 'Man', text: 'I waited in line for forty minutes, only to find out she had stepped out for lunch.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What happened to the man?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What happened to the man?',
    options: [
      { key: 'A', text: 'He was unable to see the officer despite waiting.' },
      { key: 'B', text: 'He had lunch with the financial aid officer.' },
      { key: 'C', text: 'He submitted his grant application successfully.' },
      { key: 'D', text: 'He arrived forty minutes after lunch ended.' }
    ],
    correctAnswer: 'A',
    explanation: 'Struktur "only to find out..." menunjukkan hasil yang mengecewakan setelah berusaha; pria tersebut telah menunggu 40 menit namun tidak berhasil bertemu petugas karena petugas sedang keluar makan siang.',
    strategyTip: '"Only to [find/realize]" = hasil yang tidak diharapkan / sia-sia.'
  },
  {
    id: 25,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 25,
    title: 'Question 25',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'I\'m really dreading this thirty-page history paper.', voiceGender: 'male' },
      { speaker: 'Woman', text: 'If you tackle it in smaller chunks every day, you won\'t feel so overwhelmed.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What advice does the woman give the man?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What advice does the woman give the man?',
    options: [
      { key: 'A', text: 'Work on the paper gradually over time.' },
      { key: 'B', text: 'Ask the professor to reduce the page limit.' },
      { key: 'C', text: 'Complete the entire paper in one weekend.' },
      { key: 'D', text: 'Change his major to avoid history courses.' }
    ],
    correctAnswer: 'A',
    explanation: '"Tackle it in smaller chunks every day" berarti mengerjakan makalah tersebut secara bertahap sedikit demi sedikit setiap hari (gradually over time).',
    strategyTip: 'Parafrasa: "in smaller chunks every day" = "gradually over time".'
  },
  {
    id: 26,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 26,
    title: 'Question 26',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Do you know if the campus shuttle runs on weekend evenings?', voiceGender: 'female' },
      { speaker: 'Man', text: 'It operates on an hourly schedule until midnight on Saturdays.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man mean?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man mean?',
    options: [
      { key: 'A', text: 'The shuttle service is available once every hour on Saturday nights.' },
      { key: 'B', text: 'The shuttle does not operate on Saturdays.' },
      { key: 'C', text: 'The shuttle departs every minute until midnight.' },
      { key: 'D', text: 'The bus station is closed on the weekend.' }
    ],
    correctAnswer: 'A',
    explanation: '"Operates on an hourly schedule until midnight on Saturdays" artinya bus antar-jemput kampus beroperasi satu jam sekali sampai tengah malam pada malam Minggu.',
    strategyTip: '"Hourly schedule" = once every hour.'
  },
  {
    id: 27,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 27,
    title: 'Question 27',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'I thought Sarah was going to lead the committee on environmental sustainability.', voiceGender: 'male' },
      { speaker: 'Woman', text: 'She had her hands full with her master\'s thesis defense.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'Why did Sarah not lead the committee?', voiceGender: 'male' }
    ],
    audioQuestionText: 'Why did Sarah not lead the committee?',
    options: [
      { key: 'A', text: 'She was extremely occupied with her thesis.' },
      { key: 'B', text: 'She had injured both of her hands.' },
      { key: 'C', text: 'She was not interested in environmental issues.' },
      { key: 'D', text: 'Her thesis defense was cancelled.' }
    ],
    correctAnswer: 'A',
    explanation: 'Idiom "had her hands full" bermakna sangat sibuk (extremely busy/occupied) dengan urusan lain, yaitu persiapan sidang tesis magisternya.',
    strategyTip: 'Jangan memilih jawaban harfiah: "had her hands full" bukan berarti tangan terluka, melainkan sangat sibuk.'
  },
  {
    id: 28,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 28,
    title: 'Question 28',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Are you sure this statistics textbook has all the formulas we need?', voiceGender: 'female' },
      { speaker: 'Man', text: 'Without a shadow of a doubt! It\'s the standard reference in the field.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man mean?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man mean?',
    options: [
      { key: 'A', text: 'He is completely confident in the book\'s contents.' },
      { key: 'B', text: 'He doubts the textbook is useful.' },
      { key: 'C', text: 'He thinks the formulas are too shadowy to read.' },
      { key: 'D', text: 'He wants to find another statistics reference.' }
    ],
    correctAnswer: 'A',
    explanation: '"Without a shadow of a doubt" adalah frasa penegasan yang berarti sama sekali tidak diragukan lagi / sangat yakin (completely confident).',
    strategyTip: '"Without a shadow of a doubt" = completely certain / no doubt.'
  },
  {
    id: 29,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 29,
    title: 'Question 29',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Man', text: 'Did you get to watch the guest lecture on renewable energy yesterday?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'I would have, had my car not broken down on the highway.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'What does the woman mean?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the woman mean?',
    options: [
      { key: 'A', text: 'She was unable to attend because of car trouble.' },
      { key: 'B', text: 'She enjoyed the guest lecture on renewable energy.' },
      { key: 'C', text: 'She gave the guest speaker a ride on the highway.' },
      { key: 'D', text: 'Her car broke down while returning from the lecture.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat inverted conditional type 3: "had my car not broken down..." berarti "if my car had not broken down, I would have watched it". Faktanya mobilnya mogok sehingga dia tidak bisa hadir.',
    strategyTip: 'Inversi pengandaian lampau ("had [subject] not [verb]") menyatakan alasan kegagalan suatu aktivitas di masa lalu.'
  },
  {
    id: 30,
    section: 'listening',
    subSection: 'Part A: Short Conversations',
    questionNumber: 30,
    title: 'Question 30',
    prompt: 'Listen to a short conversation between two people and choose the best answer.',
    audioScript: [
      { speaker: 'Woman', text: 'Should we ask Professor Harrison for an extension on our group term paper?', voiceGender: 'female' },
      { speaker: 'Man', text: 'Given his strict policy on deadlines, we\'d be barking up the wrong tree.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'What does the man mean?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What does the man mean?',
    options: [
      { key: 'A', text: 'Asking the professor for an extension will be ineffective.' },
      { key: 'B', text: 'The professor likes dogs and animal studies.' },
      { key: 'C', text: 'They should submit the paper to a different professor.' },
      { key: 'D', text: 'They should plant trees near the faculty building.' }
    ],
    correctAnswer: 'A',
    explanation: 'Idiom "barking up the wrong tree" berarti mengambil jalur yang salah atau mengharapkan sesuatu dari pihak yang tidak akan memberikannya; meminta perpanjangan waktu pada dosen tersebut sia-sia.',
    strategyTip: 'Hindari opsi yang mengulang kata harfiah idiom (tree, barking, dogs).'
  },

  // --- PART B: LONGER CONVERSATIONS (Questions 31 - 38) ---
  // Conversation 1: Questions 31 - 34 (Academic Biology Field Trip & Cave Organisms - from PDF page 7!)
  {
    id: 31,
    section: 'listening',
    subSection: 'Part B: Longer Conversations',
    questionNumber: 31,
    title: 'Questions 31-34 (Part B)',
    prompt: 'Listen to a conversation between two biology students discussing an upcoming field research trip.',
    audioScript: [
      { speaker: 'Narrator', text: 'Listen to a conversation between two biology students.', voiceGender: 'male' },
      { speaker: 'Man', text: 'Hi Brenda, have you completed the background reading for Dr. Jenkins\' field trip to Mammoth Cave on Saturday?', voiceGender: 'male' },
      { speaker: 'Woman', text: 'I just finished the chapter on subterranean ecosystems! It\'s fascinating how specialized cave-dwelling organisms are.', voiceGender: 'female' },
      { speaker: 'Man', text: 'Right. The book categorizes them into troglobites, troglophiles, and trogloxenes. Troglobites are the true permanent cave dwellers that can\'t survive outside.', voiceGender: 'male' },
      { speaker: 'Woman', text: 'Exactly. Over millions of years of complete darkness, they evolved severe evolutionary adaptations like total loss of pigmentation and blind eyes, but heightened tactile and chemical sensory organs.', voiceGender: 'female' },
      { speaker: 'Man', text: 'And our main task on Saturday will be documenting their localized distribution in the twilight zone versus the deep dark zone.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'Question 31. What is the main topic of the conversation?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What is the main topic of the conversation?',
    options: [
      { key: 'A', text: 'Physical characteristics of cave environments.' },
      { key: 'B', text: 'How animals first began living in caves.' },
      { key: 'C', text: 'How animals that are now extinct.' },
      { key: 'D', text: 'Characteristics of animals living in caves.' }
    ],
    correctAnswer: 'D',
    explanation: 'Percakapan berfokus pada organisme penghuni gua (cave dwellers / troglobites) serta karakteristik dan adaptasi unik yang mereka miliki (kehilangan pigmen, kebutaan, organ taktil tajam).',
    strategyTip: 'Main topic Part B biasanya dibahas di 1-2 kalimat awal percakapan.'
  },
  {
    id: 32,
    section: 'listening',
    subSection: 'Part B: Longer Conversations',
    questionNumber: 32,
    title: 'Questions 31-34 (Part B)',
    prompt: 'Listen to the continuation of the conversation and answer the question.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 32. According to the speakers, what is unique about troglobites?', voiceGender: 'male' }
    ],
    audioQuestionText: 'According to the speakers, what is unique about troglobites?',
    options: [
      { key: 'A', text: 'They cannot survive outside the cave environment.' },
      { key: 'B', text: 'They only visit caves to hunt for food at night.' },
      { key: 'C', text: 'They have exceptionally bright body coloration.' },
      { key: 'D', text: 'They hibernate during the winter months.' }
    ],
    correctAnswer: 'A',
    explanation: 'Si pria mengatakan: "Troglobites are the true permanent cave dwellers that can\'t survive outside" (Troglobites adalah penghuni gua permanen sejati yang tidak dapat bertahan hidup di luar gua).',
    strategyTip: 'Catat definisi istilah teknis yang disebutkan oleh pembicara.'
  },
  {
    id: 33,
    section: 'listening',
    subSection: 'Part B: Longer Conversations',
    questionNumber: 33,
    title: 'Questions 31-34 (Part B)',
    prompt: 'Listen to the continuation of the conversation and answer the question.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 33. What evolutionary change did cave-dwelling animals undergo?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What evolutionary change did cave-dwelling animals undergo?',
    options: [
      { key: 'A', text: 'Loss of pigment and eyesight with enhanced tactile senses.' },
      { key: 'B', text: 'Development of large wings for cave flying.' },
      { key: 'C', text: 'Thick fur coats to resist extreme frost.' },
      { key: 'D', text: 'The ability to produce bright bioluminescence.' }
    ],
    correctAnswer: 'A',
    explanation: 'Brenda menjelaskan: "...evolved severe evolutionary adaptations like total loss of pigmentation and blind eyes, but heightened tactile and chemical sensory organs".',
    strategyTip: 'Jawaban langsung disebutkan secara terinci dalam dialog pembicara kedua.'
  },
  {
    id: 34,
    section: 'listening',
    subSection: 'Part B: Longer Conversations',
    questionNumber: 34,
    title: 'Questions 31-34 (Part B)',
    prompt: 'Listen to the continuation of the conversation and answer the question.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 34. What will the students do during Saturday\'s field trip?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What will the students do during Saturday\'s field trip?',
    options: [
      { key: 'A', text: 'Document organism distribution across cave zones.' },
      { key: 'B', text: 'Capture troglobites and take them to the university lab.' },
      { key: 'C', text: 'Build an artificial lighting system inside the cave.' },
      { key: 'D', text: 'Map the geological rock formations of Mammoth Cave.' }
    ],
    correctAnswer: 'A',
    explanation: 'Si pria menyatakan: "our main task on Saturday will be documenting their localized distribution in the twilight zone versus the deep dark zone".',
    strategyTip: 'Perhatikan bagian akhir percakapan yang biasanya membicarakan tugas atau rencana mendatang (future action).'
  },

  // Conversation 2: Questions 35 - 38 (Campus Course Registration & Internship Credits)
  {
    id: 35,
    section: 'listening',
    subSection: 'Part B: Longer Conversations',
    questionNumber: 35,
    title: 'Questions 35-38 (Part B)',
    prompt: 'Listen to a conversation between a student and an academic advisor.',
    audioScript: [
      { speaker: 'Narrator', text: 'Listen to a conversation between a university student and his academic advisor.', voiceGender: 'male' },
      { speaker: 'Student', text: 'Good morning, Ms. Albright. I need some guidance regarding my graduation audit for next semester.', voiceGender: 'male' },
      { speaker: 'Advisor', text: 'Certainly, Marcus. Let\'s pull up your transcript. You\'ve fulfilled all major core requirements, but you\'re still short three elective credits.', voiceGender: 'female' },
      { speaker: 'Student', text: 'That\'s what I wanted to ask. I received an offer for a part-time internship at an environmental engineering firm. Can that count towards those elective credits?', voiceGender: 'male' },
      { speaker: 'Advisor', text: 'Yes, provided that the internship entails at least 120 documented hours and your workplace supervisor submits a midterm progress evaluation alongside your final portfolio.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'Question 35. Why did the student visit the academic advisor?', voiceGender: 'male' }
    ],
    audioQuestionText: 'Why did the student visit the academic advisor?',
    options: [
      { key: 'A', text: 'To ask if an internship can fulfill his remaining credits.' },
      { key: 'B', text: 'To change his undergraduate major to engineering.' },
      { key: 'C', text: 'To request an extension on his tuition payment.' },
      { key: 'D', text: 'To apply for a teaching assistantship position.' }
    ],
    correctAnswer: 'A',
    explanation: 'Mahasiswa tersebut berkonsultasi mengenai sisa 3 SKS mata kuliah pilihan dan menanyakan apakah magang kerja paruh waktu dapat dihitung untuk memenuhi SKS tersebut.',
    strategyTip: 'Alasan utama berkonsultasi selalu diutarakan di awal percakapan.'
  },
  {
    id: 36,
    section: 'listening',
    subSection: 'Part B: Longer Conversations',
    questionNumber: 36,
    title: 'Questions 35-38 (Part B)',
    prompt: 'Listen to the continuation of the conversation and answer the question.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 36. How many credits does the student still need for graduation?', voiceGender: 'male' }
    ],
    audioQuestionText: 'How many credits does the student still need for graduation?',
    options: [
      { key: 'A', text: 'Three elective credits.' },
      { key: 'B', text: 'Twelve core credits.' },
      { key: 'C', text: 'Sixteen total credits.' },
      { key: 'D', text: 'One introductory laboratory credit.' }
    ],
    correctAnswer: 'A',
    explanation: 'Pembimbing akademik menyatakan: "You\'ve fulfilled all major core requirements, but you\'re still short three elective credits" (Masih kurang 3 SKS pilihan).',
    strategyTip: 'Catat angka dan jenis syarat akademik (3 elective credits).'
  },
  {
    id: 37,
    section: 'listening',
    subSection: 'Part B: Longer Conversations',
    questionNumber: 37,
    title: 'Questions 35-38 (Part B)',
    prompt: 'Listen to the continuation of the conversation and answer the question.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 37. What is one requirement for the internship to qualify for academic credit?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What is one requirement for the internship to qualify for academic credit?',
    options: [
      { key: 'A', text: 'Completing a minimum of 120 documented work hours.' },
      { key: 'B', text: 'Working without any monetary compensation.' },
      { key: 'C', text: 'Publishing an article in a scientific journal.' },
      { key: 'D', text: 'Completing the internship outside of Indonesia.' }
    ],
    correctAnswer: 'A',
    explanation: 'Syaratnya adalah magang mencakup sedikitnya 120 jam kerja terdokumentasi ("at least 120 documented hours") serta ada evaluasi dan portofolio.',
    strategyTip: 'Perhatikan kata syarat: "provided that...", "on condition that...".'
  },
  {
    id: 38,
    section: 'listening',
    subSection: 'Part B: Longer Conversations',
    questionNumber: 38,
    title: 'Questions 35-38 (Part B)',
    prompt: 'Listen to the continuation of the conversation and answer the question.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 38. What must the student\'s workplace supervisor submit?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What must the student\'s workplace supervisor submit?',
    options: [
      { key: 'A', text: 'A midterm progress evaluation.' },
      { key: 'B', text: 'A formal letter of recommendation for graduate school.' },
      { key: 'C', text: 'A financial statement of the firm\'s profits.' },
      { key: 'D', text: 'A syllabus of the training workshops.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dinyatakan: "your workplace supervisor submits a midterm progress evaluation alongside your final portfolio".',
    strategyTip: 'Fokus pada siapa yang harus menyerahkan apa (supervisor -> evaluation).'
  },

  // --- PART C: TALKS / LECTURES (Questions 39 - 50) ---
  // Talk 1: Questions 39 - 42 (Astronomy: Supernovae and Heavy Elements)
  {
    id: 39,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 39,
    title: 'Questions 39-42 (Part C: Astronomy Lecture)',
    prompt: 'Listen to a professor delivering a lecture on stellar astrophysics.',
    audioScript: [
      { speaker: 'Narrator', text: 'Listen to a lecture by an astronomy professor.', voiceGender: 'male' },
      { speaker: 'Professor', text: 'Good afternoon, class. Today we will explore the violent life cycle ends of massive stars, specifically the phenomenon known as a Type II core-collapse supernova. When a star exceeding eight solar masses exhausts its core nuclear fuel, it can no longer generate outward thermal radiation pressure to counteract gravity. In a fraction of a second, the iron core collapses into an ultra-dense neutron star, while the outer layers rebound outward in a cataclysmic explosion. What makes supernovae so foundational to cosmic history is nucleosynthesis: the extreme pressure and neutron flux during the blast forge elements heavier than iron—including gold, silver, and uranium—and disperse them across interstellar gas clouds, seeding future solar systems.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'Question 39. What is the primary focus of the lecture?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What is the primary focus of the lecture?',
    options: [
      { key: 'A', text: 'The core-collapse of massive stars and element formation.' },
      { key: 'B', text: 'How commercial telescopes detect solar flares.' },
      { key: 'C', text: 'The chemical differences between gold and iron.' },
      { key: 'D', text: 'The gravitational orbits of planetary satellites.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dosen menjelaskan proses keruntuhan inti bintang masif (core-collapse supernova) serta perannya dalam pembentukan unsur-unsur berat di alam semesta (nucleosynthesis).',
    strategyTip: 'Kalimat pertama kuliah selalu memaparkan topik utama ("Today we will explore...").'
  },
  {
    id: 40,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 40,
    title: 'Questions 39-42 (Part C: Astronomy Lecture)',
    prompt: 'Listen to the question based on the lecture and choose the best answer.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 40. What triggers the collapse of a massive star\'s core?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What triggers the collapse of a massive star\'s core?',
    options: [
      { key: 'A', text: 'The exhaustion of nuclear fuel in the iron core.' },
      { key: 'B', text: 'Collision with an interstellar asteroid belt.' },
      { key: 'C', text: 'A decrease in gravitational pull from nearby stars.' },
      { key: 'D', text: 'Excessive outward thermal pressure.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dosen menyatakan bahwa ketika bintang masif kehabisan bahan bakar nuklirnya di inti besi ("exhausts its core nuclear fuel"), tekanan radiasi tidak lagi mampu menahan gravitasi sehingga inti runtuh.',
    strategyTip: 'Hubungan sebab-akibat (cause and effect) sangat sering ditanyakan di Part C.'
  },
  {
    id: 41,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 41,
    title: 'Questions 39-42 (Part C: Astronomy Lecture)',
    prompt: 'Listen to the question based on the lecture and choose the best answer.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 41. What remnant is left behind at the center after the collapse?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What remnant is left behind at the center after the collapse?',
    options: [
      { key: 'A', text: 'A dense neutron star.' },
      { key: 'B', text: 'A gaseous brown dwarf.' },
      { key: 'C', text: 'A frozen ice comet.' },
      { key: 'D', text: 'A stable hydrogen sphere.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks kuliah: "the iron core collapses into an ultra-dense neutron star, while the outer layers rebound outward in a cataclysmic explosion".',
    strategyTip: 'Catat istilah sains kunci (neutron star).'
  },
  {
    id: 42,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 42,
    title: 'Questions 39-42 (Part C: Astronomy Lecture)',
    prompt: 'Listen to the question based on the lecture and choose the best answer.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 42. Why are supernovae considered foundational to cosmic history?', voiceGender: 'male' }
    ],
    audioQuestionText: 'Why are supernovae considered foundational to cosmic history?',
    options: [
      { key: 'A', text: 'They forge and disperse heavy elements that form new planets.' },
      { key: 'B', text: 'They permanently eliminate harmful cosmic rays.' },
      { key: 'C', text: 'They cool down the overall temperature of galaxies.' },
      { key: 'D', text: 'They prevent black holes from expanding.' }
    ],
    correctAnswer: 'A',
    explanation: 'Supernova menghasilkan nukleosintesis unsur berat (emas, perak, uranium) dan menyebarkannya ke awan gas antarbintang untuk membentuk tata surya baru ("seeding future solar systems").',
    strategyTip: 'Pertanyaan signifikansi/dampak ("Why are they important?") biasanya dijawab di bagian akhir paparan.'
  },

  // Talk 2: Questions 43 - 46 (American History: The Erie Canal)
  {
    id: 43,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 43,
    title: 'Questions 43-46 (Part C: History Lecture)',
    prompt: 'Listen to a history professor discuss early 19th-century American transportation.',
    audioScript: [
      { speaker: 'Narrator', text: 'Listen to a lecture by an American history professor.', voiceGender: 'male' },
      { speaker: 'Professor', text: 'When the Erie Canal opened in 1825, connecting the Hudson River in Albany to Lake Erie at Buffalo, it transformed the American economic landscape almost overnight. Prior to the canal, moving a ton of wheat or manufactured freight from the Great Lakes across the Appalachian Mountains to New York City cost around one hundred dollars and took several grueling weeks by pack wagon. The canal plummeted that freight cost to under eight dollars a ton and slashed transit time to just six days. As a result, New York City emerged as the preeminent commercial port in North America, while cities along the canal corridor like Rochester and Syracuse experienced rapid industrial urbanization.', voiceGender: 'female' },
      { speaker: 'Narrator', text: 'Question 43. What major waterway does the lecture describe?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What major waterway does the lecture describe?',
    options: [
      { key: 'A', text: 'The Erie Canal.' },
      { key: 'B', text: 'The Panama Canal.' },
      { key: 'C', text: 'The Mississippi River shipping locks.' },
      { key: 'D', text: 'The St. Lawrence Seaway.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kuliah membahas pembukaan Kanal Erie (Erie Canal) pada tahun 1825 yang menghubungkan Sungai Hudson dan Danau Erie.',
    strategyTip: 'Nama tempat dan jalur transportasi kunci disebutkan berulang kali di awal kuliah.'
  },
  {
    id: 44,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 44,
    title: 'Questions 43-46 (Part C: History Lecture)',
    prompt: 'Listen to the question based on the lecture and choose the best answer.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 44. What was the transport cost per ton before the canal opened?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What was the transport cost per ton before the canal opened?',
    options: [
      { key: 'A', text: 'Around one hundred dollars.' },
      { key: 'B', text: 'Under eight dollars.' },
      { key: 'C', text: 'Fifty dollars.' },
      { key: 'D', text: 'Twenty-five dollars.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dosen menyebutkan: "cost around one hundred dollars and took several grueling weeks by pack wagon" sebelum kanal dibuka, dan turun menjadi di bawah 8 dolar setelah kanal dibuka.',
    strategyTip: 'Bandingkan angka sebelum vs sesudah: $100 sebelum vs $8 sesudah.'
  },
  {
    id: 45,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 45,
    title: 'Questions 43-46 (Part C: History Lecture)',
    prompt: 'Listen to the question based on the lecture and choose the best answer.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 45. How did the canal affect transit time for cargo?', voiceGender: 'male' }
    ],
    audioQuestionText: 'How did the canal affect transit time for cargo?',
    options: [
      { key: 'A', text: 'It reduced the transit time to approximately six days.' },
      { key: 'B', text: 'It increased transit time due to heavy river traffic.' },
      { key: 'C', text: 'It kept transit time unchanged at three weeks.' },
      { key: 'D', text: 'It limited shipping to winter months only.' }
    ],
    correctAnswer: 'A',
    explanation: 'Disebutkan secara eksplisit: "slashed transit time to just six days" (memotong waktu transit menjadi hanya 6 hari).',
    strategyTip: '"Slashed" = cut dramatically / reduced.'
  },
  {
    id: 46,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 46,
    title: 'Questions 43-46 (Part C: History Lecture)',
    prompt: 'Listen to the question based on the lecture and choose the best answer.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 46. What was an economic consequence for New York City?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What was an economic consequence for New York City?',
    options: [
      { key: 'A', text: 'It became the leading commercial seaport in North America.' },
      { key: 'B', text: 'It lost its trade dominance to Philadelphia.' },
      { key: 'C', text: 'Its agricultural production ceased completely.' },
      { key: 'D', text: 'It banned the importation of manufactured goods.' }
    ],
    correctAnswer: 'A',
    explanation: 'Dosen menyatakan: "As a result, New York City emerged as the preeminent commercial port in North America". "Preeminent" bersinonim dengan "leading".',
    strategyTip: 'Kaitkan hasil historis ("emerged as preeminent") dengan sinonim "leading".'
  },

  // Talk 3: Questions 47 - 50 (Environmental Science: Wetland Filtration)
  {
    id: 47,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 47,
    title: 'Questions 47-50 (Part C: Ecology Lecture)',
    prompt: 'Listen to an environmental science lecture on wetland ecosystems.',
    audioScript: [
      { speaker: 'Narrator', text: 'Listen to a lecture by an environmental science professor.', voiceGender: 'male' },
      { speaker: 'Professor', text: 'Wetlands are frequently described by ecologists as the kidneys of the earth. Why? Because they perform an indispensable biological filtration service. When storm runoff flows into a wetland, the dense network of emergent vegetation—such as cattails, reeds, and sedges—dramatically reduces the velocity of the water. This deceleration allows suspended sediments and heavy metals to settle out of the water column. Concurrently, microbial communities thriving in the oxygen-depleted anaerobic soil layers break down organic pollutants and absorb excess agricultural nitrogen and phosphorus through biochemical denitrification. Without wetlands, these agricultural effluents directly infiltrate coastal aquifers, causing toxic algal blooms.', voiceGender: 'male' },
      { speaker: 'Narrator', text: 'Question 47. Why are wetlands compared to human kidneys?', voiceGender: 'male' }
    ],
    audioQuestionText: 'Why are wetlands compared to human kidneys?',
    options: [
      { key: 'A', text: 'Because they filter pollutants and toxins from water.' },
      { key: 'B', text: 'Because they maintain a high sodium salt level.' },
      { key: 'C', text: 'Because they regulate ambient air temperatures.' },
      { key: 'D', text: 'Because they are shaped like kidney beans.' }
    ],
    correctAnswer: 'A',
    explanation: 'Lahan basah (wetlands) dijuluki ginjal bumi karena fungsinya menyaring sedimen, polutan organik, dan kelebihan nutrisi dari air sebelum mencapai danau atau laut.',
    strategyTip: 'Analogi ilmiah ("kidneys of the earth") digunakan untuk menggambarkan fungsi filtrasi (filtering pollutants).'
  },
  {
    id: 48,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 48,
    title: 'Questions 47-50 (Part C: Ecology Lecture)',
    prompt: 'Listen to the question based on the lecture and choose the best answer.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 48. What role do emergent plants like reeds and cattails play?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What role do emergent plants like reeds and cattails play?',
    options: [
      { key: 'A', text: 'They slow down water velocity to let sediments settle.' },
      { key: 'B', text: 'They absorb solar energy to heat groundwater.' },
      { key: 'C', text: 'They release toxic chemicals to repel herbivores.' },
      { key: 'D', text: 'They accelerate water drainage to prevent flooding.' }
    ],
    correctAnswer: 'A',
    explanation: 'Tanaman lahan basah secara mekanik memperlambat laju aliran air ("reduces the velocity of the water"), sehingga partikel lumpur dan logam berat mengendap.',
    strategyTip: 'Mekanisme fisik: tanaman rimbun -> air melambat -> sedimen mengendap.'
  },
  {
    id: 49,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 49,
    title: 'Questions 47-50 (Part C: Ecology Lecture)',
    prompt: 'Listen to the question based on the lecture and choose the best answer.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 49. How do soil microbes neutralize agricultural runoff?', voiceGender: 'male' }
    ],
    audioQuestionText: 'How do soil microbes neutralize agricultural runoff?',
    options: [
      { key: 'A', text: 'By absorbing excess nitrogen and phosphorus via denitrification.' },
      { key: 'B', text: 'By synthesizing synthetic chemical fertilizers.' },
      { key: 'C', text: 'By evaporating water into atmospheric vapor.' },
      { key: 'D', text: 'By turning soil into solid rock layers.' }
    ],
    correctAnswer: 'A',
    explanation: 'Mikroba tanah di lapisan anaerob mengurai polutan organik dan menyerap kelebihan nitrogen dan fosfor melalui proses denitrifikasi biokimiawi.',
    strategyTip: 'Perhatikan proses biokimia yang disebutkan: "absorb excess nitrogen and phosphorus".'
  },
  {
    id: 50,
    section: 'listening',
    subSection: 'Part C: Academic Talks',
    questionNumber: 50,
    title: 'Questions 47-50 (Part C: Ecology Lecture)',
    prompt: 'Listen to the question based on the lecture and choose the best answer.',
    audioScript: [
      { speaker: 'Narrator', text: 'Question 50. What is a consequence of destroying natural wetlands?', voiceGender: 'male' }
    ],
    audioQuestionText: 'What is a consequence of destroying natural wetlands?',
    options: [
      { key: 'A', text: 'Toxic algal blooms caused by unfiltered agricultural effluents.' },
      { key: 'B', text: 'A decrease in global atmospheric carbon dioxide.' },
      { key: 'C', text: 'The complete drying up of river systems.' },
      { key: 'D', text: 'An overpopulation of wetland waterfowls.' }
    ],
    correctAnswer: 'A',
    explanation: 'Tanpa lahan basah, limpasan pertanian yang tidak tersaring langsung masuk ke perairan dan memicu ledakan populasi alga beracun ("toxic algal blooms").',
    strategyTip: 'Dampak negatif hilangnya ekosistem menjadi kesimpulan umum dalam soal sains lingkungan.'
  }
];
