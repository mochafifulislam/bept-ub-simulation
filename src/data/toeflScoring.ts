/**
 * Official TOEFL ITP Conversion Table and BEPT UB Standard Scoring Calculator.
 * Raw scores are mapped to scaled scores (Section 1: 31-68, Section 2: 31-68, Section 3: 31-67).
 * Final score = ((Scaled1 + Scaled2 + Scaled3) * 10) / 3.
 * Total range: 310 - 677.
 */

// Scaled scores for Section 1: Listening (50 questions, raw score 0 to 50)
const LISTENING_TABLE: number[] = [
  24, 25, 26, 27, 28, 29, 30, 31, 32, 32, // 0 - 9
  33, 35, 37, 37, 38, 41, 41, 42, 43, 44, // 10 - 19
  45, 45, 46, 47, 48, 48, 49, 50, 51, 51, // 20 - 29
  52, 52, 53, 54, 54, 55, 56, 57, 57, 58, // 30 - 39
  59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 68 // 40 - 50
];

// Scaled scores for Section 2: Structure (40 questions, raw score 0 to 40)
const STRUCTURE_TABLE: number[] = [
  20, 21, 22, 23, 24, 25, 26, 27, 29, 31, // 0 - 9
  33, 35, 36, 37, 38, 40, 40, 41, 43, 44, // 10 - 19
  45, 46, 47, 48, 49, 50, 51, 52, 53, 54, // 20 - 29
  55, 56, 57, 58, 60, 61, 63, 65, 66, 67, 68 // 30 - 40
];

// Scaled scores for Section 3: Reading (50 questions, raw score 0 to 50)
const READING_TABLE: number[] = [
  21, 22, 23, 24, 25, 26, 27, 28, 28, 29, // 0 - 9
  30, 31, 32, 34, 35, 36, 37, 38, 39, 40, // 10 - 19
  41, 42, 43, 43, 44, 45, 46, 46, 47, 48, // 20 - 29
  48, 49, 50, 51, 52, 52, 53, 54, 54, 55, // 30 - 39
  56, 57, 58, 59, 60, 61, 63, 65, 66, 67, 67 // 40 - 50
];

export function convertRawToScaled(rawListening: number, rawStructure: number, rawReading: number) {
  const safeListening = Math.max(0, Math.min(50, Math.round(rawListening)));
  const safeStructure = Math.max(0, Math.min(40, Math.round(rawStructure)));
  const safeReading = Math.max(0, Math.min(50, Math.round(rawReading)));

  const scaledL = LISTENING_TABLE[safeListening] ?? 31;
  const scaledS = STRUCTURE_TABLE[safeStructure] ?? 31;
  const scaledR = READING_TABLE[safeReading] ?? 31;

  // Formula: ((scaledL + scaledS + scaledR) * 10) / 3
  const total = Math.round(((scaledL + scaledS + scaledR) * 10) / 3);
  const clampedTotal = Math.max(310, Math.min(677, total));

  // Determine CEFR level
  let cefr: 'A2' | 'B1' | 'B2' | 'C1' = 'A2';
  if (clampedTotal >= 627) {
    cefr = 'C1';
  } else if (clampedTotal >= 543) {
    cefr = 'B2';
  } else if (clampedTotal >= 460) {
    cefr = 'B1';
  } else {
    cefr = 'A2';
  }

  // Universitas Brawijaya standard graduation benchmarks
  const ubPassingStatus = {
    s1Pass: clampedTotal >= 450, // Standard S1 graduation threshold at UB
    s2Pass: clampedTotal >= 500, // Standard S2 master threshold at UB
    s3Pass: clampedTotal >= 550, // Standard S3 doctoral threshold at UB
  };

  return {
    scaledListening: scaledL,
    scaledStructure: scaledS,
    scaledReading: scaledR,
    totalScore: clampedTotal,
    cefr,
    ubPassingStatus
  };
}
