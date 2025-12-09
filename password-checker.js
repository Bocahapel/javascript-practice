function passwordEntropyChecker(password) {
  const uniqueChar = new Set(password).size;
  return Math.log2(Math.pow(uniqueChar, password.length));
}

function classifyEntropy(bits) {
  if (bits < 28) return "Very Weak";
  if (bits < 36) return "Weak";
  if (bits < 60) return "Reasonable";
  if (bits < 128) return "Strong";
  return "Very Strong";
}

function passwordChecker(password) {
  const entropy = passwordEntropyChecker(password);

  return {
    password,
    entropy: entropy.toFixed(2),
    rating: classifyEntropy(entropy),
  };

  //   let score = 0;

  //   //lenght check
  //   if (password.length >= 8) score++;

  //   //lower case
  //   if (/[a-z]/.test(password)) score++;

  //   //upper case
  //   if (/[A-Z]/.test(password)) score++;

  //   //check number
  //   if (/\d/.test(password)) score++;

  //   //symbol
  //   if (/[^A-Za-z0-9]/.test(password)) score++;

  //   switch (score) {
  //     case 0:
  //       return "please input passwor";
  //     case 1:
  //       return "weak";
  //     case 2:
  //       return "medium";
  //     case 3:
  //       return "better";
  //     case 4:
  //       return "good";
  //   }
}

console.log(passwordChecker("abcde"));
