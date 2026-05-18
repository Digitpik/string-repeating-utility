function repeatStringNumTimes(str, num) {
  // Guard clause to instantly catch zero or negative multipliers
  if (num <= 0) {
    return "";
  }

  // String accumulator bucket
  let accumulatedString = "";

  // Loop exactly 'num' times to append the pattern
  for (let i = 0; i < num; i++) {
    accumulatedString += str;
  }

  return accumulatedString;
}

// Verification Logs
console.log("--- Testing Custom String Repeating Utility ---");
console.log(`repeatStringNumTimes("abc", 3): "${repeatStringNumTimes("abc", 3)}"`); // "abcabcabc"
console.log(`repeatStringNumTimes("*", 5): "${repeatStringNumTimes("*", 5)}"`);     // "*****"
console.log(`repeatStringNumTimes("xyz", 0): "${repeatStringNumTimes("xyz", 0)}"`);   // ""
