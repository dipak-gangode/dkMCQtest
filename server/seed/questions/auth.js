export const authQuestions = [
  {
    topic: 'auth',
    subTopic: 'auth-vs-authz',
    difficulty: 'easy',
    question: 'What is the fundamental difference between Authentication and Authorization?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'They are two synonymous terms for the exact same process' },
      { id: 'b', text: 'Authentication verifies "Who are you?" (Identity); Authorization checks "What permissions do you have?" (Permissions / Roles)' },
      { id: 'c', text: 'Authorization validates user passwords while Authentication checks roles' },
      { id: 'd', text: 'Authentication applies exclusively to admin accounts' }
    ],
    correctOptionId: 'b',
    explanation: 'Authentication (AuthN) = Identity verification (Username + Password / OTP). Authorization (AuthZ) = Access control (User can edit profile, Admin can delete user).',
    optionExplanations: {
      a: 'Security architecture ke do alag pillars hain.',
      b: 'Spot on definition! Who are you? (AuthN) vs What can you do? (AuthZ).',
      c: 'Ulta bol diya.',
      d: 'Har user ka authentication hota hai.'
    },
    memoryTrick: 'Authentication = Aadhaar card dikhao (Pehchan)! Authorization = V.I.P Lounge ka pass dikhao (Permission)!',
    tags: ['auth', 'fundamentals', 'interview']
  },
  {
    topic: 'auth',
    subTopic: 'jwt-structure',
    difficulty: 'interview',
    question: 'In a standard JSON Web Token (JWT) string separated by two dots (`.`), what do the three segments represent?',
    codeSnippet: 'eyJhbGciOi... . eyJzdWIiOi... . SflKxwRJ...',
    options: [
      { id: 'a', text: 'Username, Password, Database' },
      { id: 'b', text: 'Header, Payload, Signature' },
      { id: 'c', text: 'Key, Value, Hash' },
      { id: 'd', text: 'Client, Server, Proxy' }
    ],
    correctOptionId: 'b',
    explanation: 'JWT 3 parts ka banta hai: Header (algorithm & token type), Payload (claims, user id, expiry), Signature (secret key dwara signed hash jo tampering prevent karta hai).',
    optionExplanations: {
      a: 'Password token mein kabhi nahi daalna chahiye!',
      b: 'Header.Payload.Signature! Universal JWT structure.',
      c: 'Invalid components.',
      d: 'Network topology terms hain.'
    },
    memoryTrick: 'H-P-S: Header (Topi), Payload (Jeb ka maal), Signature (Vakil ki mohar)!',
    tags: ['auth', 'jwt', 'structure', 'interview']
  },
  {
    topic: 'auth',
    subTopic: 'password-hashing',
    difficulty: 'interview',
    question: 'Why is using an adaptive algorithm like `bcrypt` or `Argon2` mandatory for password hashing instead of fast algorithms like MD5 or SHA256?',
    codeSnippet: 'const hash = await bcrypt.hash(password, 10);',
    options: [
      { id: 'a', text: 'Fast hashes like SHA256 can be calculated billions of times per second on GPUs enabling brute-force and rainbow table attacks; bcrypt is deliberately slow (adaptive work factor) and salted' },
      { id: 'b', text: 'Because SHA256 is deprecated in Node.js' },
      { id: 'c', text: 'Because bcrypt allows passwords to be decrypted back to plaintext' },
      { id: 'd', text: 'Because MD5 was authored by Google' }
    ],
    correctOptionId: 'a',
    explanation: 'Fast hashes (MD5/SHA256) data integrity ke liye hote hain, passwords ke liye nahi! Bcrypt mein "Salt" rainbow table attacks ko invalidate karta hai aur configurable "Work Factor/Rounds" hardware advancement ke sath slow hashing ensure karta hai.',
    optionExplanations: {
      a: 'Critical security insight! Password hashing ka hero feature "Slowness" aur "Salting" hai.',
      b: 'Node crypto mein SHA256 fully supported hai.',
      c: 'Bcrypt one-way cryptographic hash hai, decrypt nahi ho sakta.',
      d: 'Ron Rivest ne banaya tha MD5.'
    },
    memoryTrick: 'Chor ke paas Supercomputer hai! Fast taale (MD5) ko 1 second mein tod dega, isiliye BCRYPT ka bhaari lakho chakkar wala taala lagao!',
    tags: ['auth', 'hashing', 'bcrypt', 'security', 'interview']
  },
  {
    topic: 'auth',
    subTopic: 'salt',
    difficulty: 'medium',
    question: 'What is the primary role of a "Salt" in password hashing?',
    codeSnippet: 'bcrypt.genSalt(10);',
    options: [
      { id: 'a', text: 'To transform passwords to lowercase format' },
      { id: 'b', text: 'To append unique random data to each password so identical passwords produce completely distinct hashes, rendering precomputed Rainbow Tables useless' },
      { id: 'c', text: 'To encrypt the database connection stream' },
      { id: 'd', text: 'To enforce a minimum length of 8 characters' }
    ],
    correctOptionId: 'b',
    explanation: 'Bina salt ke `password123` ka hash hamesha same banega, jise hacker pre-computed Rainbow Table se turant match kar lega. Salt har password ko uniquely randomize kar deta hai.',
    optionExplanations: {
      a: 'String conversion alag cheez hai.',
      b: 'Rainbow tables ka antim sanskar karta hai Salt! Unique cryptographic entropy.',
      c: 'TLS/SSL DB connection encrypt karta hai.',
      d: 'Salt password length modify nahi karta, hash input customize karta hai.'
    },
    memoryTrick: 'Khane mein Namak (Salt) swaad badalta hai, Password mein Salt hacker ka dimaag kharab karta hai!',
    tags: ['auth', 'salt', 'bcrypt', 'security']
  },
  {
    topic: 'auth',
    subTopic: 'jwt-security',
    difficulty: 'interview',
    question: 'A standard JWT Payload is Base64URL-encoded. What does this mean in terms of data confidentiality?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'The payload is strongly encrypted and cannot be viewed without the secret key' },
      { id: 'b', text: 'The payload is merely encoded, NOT encrypted; anyone can decode and view claims (user ID, email) in plaintext' },
      { id: 'c', text: 'The token automatically encrypts after 24 hours' },
      { id: 'd', text: 'Base64 represents an image format' }
    ],
    correctOptionId: 'b',
    explanation: 'JWT ka signature integrity verify karta hai ki data tamper nahi hua, lekin standard JWT payload encrypted nahi hota! Isiliye JWT payload ke andar passwords, credit card numbers, ya sensitive PII kabhi nahi rakhna chahiye!',
    optionExplanations: {
      a: 'Sabse common misconception! Encoding != Encryption.',
      b: '100% correct! Base64 decoding bina kisi key ke 1 millisecond mein ho jati hai.',
      c: 'Encryption expiry se trigger nahi hoti.',
      d: 'Base64 binary-to-text encoding scheme hai.'
    },
    memoryTrick: 'JWT = Postcard! Pata aur chitthi sabko dikhti hai (Payload), bas post office ki mohar asli hai (Signature)!',
    tags: ['auth', 'jwt', 'security', 'interview']
  },
  {
    topic: 'auth',
    subTopic: 'csrf',
    difficulty: 'interview',
    question: 'What is a Cross-Site Request Forgery (CSRF) attack and which modern cookie attribute natively mitigates it?',
    codeSnippet: 'res.cookie("token", val, { sameSite: "strict" });',
    options: [
      { id: 'a', text: 'An attack where a hacker breaches the primary database' },
      { id: 'b', text: 'An attack where a malicious site tricks a user\'s browser into submitting unauthorized requests using existing authenticated session cookies; blocked natively by `SameSite: "strict"` or `"lax"`' },
      { id: 'c', text: 'An unexpected network connection drop' },
      { id: 'd', text: 'An attack that occurs exclusively on native mobile applications' }
    ],
    correctOptionId: 'b',
    explanation: 'Browser automatically cookies attach kar deta hai cross-site requests mein. Malicious site user se `bank.com/transfer` submit karwa sakti hai. `SameSite: strict` cross-origin contexts mein cookies bhejna block kar deta hai.',
    optionExplanations: {
      a: 'DB breach alag vulnerability hai.',
      b: 'Classic CSRF attack mechanics and SameSite modern cookie defense!',
      c: 'Absurd option.',
      d: 'Web browsers ka vulnerability hai cookies auto-sending ki wajah se.'
    },
    memoryTrick: 'SameSite = "Bahar wale kisi link se aayega toh meri cookie use mat karne dena"!',
    tags: ['auth', 'csrf', 'cookies', 'security', 'interview']
  },
  {
    topic: 'auth',
    subTopic: 'oauth',
    difficulty: 'interview',
    question: 'In the OAuth 2.0 Authorization Code Flow, what is the primary purpose of PKCE (Proof Key for Code Exchange)?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'To decipher user passwords' },
      { id: 'b', text: 'To protect public clients (such as Single Page Apps and mobile apps) that cannot securely store a client secret against authorization code interception attacks' },
      { id: 'c', text: 'To accelerate database query execution' },
      { id: 'd', text: 'To replace OAuth 2.0 completely' }
    ],
    correctOptionId: 'b',
    explanation: 'Frontend SPAs mein client secret embed nahi kiya ja sakta (inspect element se leak ho jayega). PKCE dynamic code verifier aur code challenge hash generate karke authorization code theft block karta hai.',
    optionExplanations: {
      a: 'OAuth passwords handle nahi karta.',
      b: 'Spot on! Modern SPAs aur Mobile apps ke liye PKCE mandatory standard hai.',
      c: 'Security protocol hai, DB indexing nahi.',
      d: 'OAuth 2.0 ka security extension hai.'
    },
    memoryTrick: 'PKCE = Secret Code Whisper! Frontend ke paas secret key nahi hai, toh ek baar ka temporary challenge bana ke kaam chalao!',
    tags: ['auth', 'oauth', 'pkce', 'interview']
  },
  {
    topic: 'auth',
    subTopic: 'headers',
    difficulty: 'easy',
    question: 'Which standard HTTP header is used to pass a JWT Bearer token in authenticated requests?',
    codeSnippet: '________: Bearer eyJhbGciOi...',
    options: [
      { id: 'a', text: 'Authentication' },
      { id: 'b', text: 'Authorization' },
      { id: 'c', text: 'X-Auth-Token' },
      { id: 'd', text: 'Token-Key' }
    ],
    correctOptionId: 'b',
    explanation: 'RFC 6750 standard header `Authorization: Bearer <token>` specify karta hai.',
    optionExplanations: {
      a: 'Standard HTTP header `Authorization` hota hai, `Authentication` nahi.',
      b: '`Authorization` standard RFC header name hai.',
      c: 'Non-standard custom header hai.',
      d: 'Non-standard header hai.'
    },
    memoryTrick: 'Header ka naam hai AUTHORIZATION, value hai BEARER token!',
    tags: ['auth', 'headers', 'jwt']
  },
  {
    topic: 'auth',
    subTopic: 'rbac',
    difficulty: 'medium',
    question: 'What is a clean design pattern in Express for implementing Role-Based Access Control (RBAC) middleware?',
    codeSnippet: 'const authorizeRoles = (...allowedRoles) => {\n  return (req, res, next) => {\n    if (!allowedRoles.includes(req.user.role)) {\n      return res.status(403).json({ message: "Forbidden" });\n    }\n    next();\n  };\n};',
    options: [
      { id: 'a', text: 'A higher-order middleware factory that accepts allowed roles and inspects `req.user.role`' },
      { id: 'b', text: 'Writing redundant hardcoded `if/else` checks inside every route handler' },
      { id: 'c', text: 'Dropping database collections on failure' },
      { id: 'd', text: 'Hiding buttons on the client with `display: none`' }
    ],
    correctOptionId: 'a',
    explanation: '`authorizeRoles("admin", "moderator")` higher-order middleware factory pattern clean, reusable aur declarative route protection deta hai.',
    optionExplanations: {
      a: 'Clean architectural pattern for RBAC in Express.js.',
      b: 'Code duplication aur bug-prone practice.',
      c: 'Absurd option.',
      d: 'Frontend hiding security nahi hoti; API ko protect karna zaroori hai.'
    },
    memoryTrick: 'Bouncer ko list do "In roles ko andar aane dena" (authorizeRoles)!',
    tags: ['auth', 'rbac', 'middleware']
  },
  {
    topic: 'auth',
    subTopic: 'sessions-vs-tokens',
    difficulty: 'interview',
    question: 'From a scalability perspective, what is the key difference between Session-based (Stateful) and Token-based (Stateless) authentication?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Session authentication scales effortlessly while Token authentication cannot scale horizontally' },
      { id: 'b', text: 'Session authentication requires centralized state lookup (e.g. Redis) on every request; stateless JWTs can be independently verified cryptographically on any backend node' },
      { id: 'c', text: 'Tokens can only be parsed by mobile applications' },
      { id: 'd', text: 'Both mechanisms are architecturally identical' }
    ],
    correctOptionId: 'b',
    explanation: 'JWT verification pure math (cryptographic signature check) hota hai bina database query ke. Session auth har request par DB/Redis lookup karta hai.',
    optionExplanations: {
      a: 'Ulta bol diya, stateless tokens scale better horizontally.',
      b: 'Core architectural trade-off! Shared Redis lookup vs Stateless crypto verification.',
      c: 'Web aur mobile dono par ubiquitous hain.',
      d: 'Stateful vs Stateless ka bohot bada architectural difference hai.'
    },
    memoryTrick: 'Session = Hotel ka register (Har baar register kholo)! Token = Stamp laga pass (Koi bhi guard stamp dekh ke entry de dega)!',
    tags: ['auth', 'sessions', 'jwt', 'scalability', 'interview']
  },
  {
    topic: 'auth',
    subTopic: 'mfa',
    difficulty: 'easy',
    question: 'Which three core factors are utilized in Multi-Factor Authentication (MFA), requiring at least two for verification?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Something you know (Password), Something you have (Phone/Authenticator app), Something you are (Biometrics/Fingerprint)' },
      { id: 'b', text: 'Email, Username, Phone number' },
      { id: 'c', text: 'Chrome, Firefox, Safari' },
      { id: 'd', text: 'HTML, CSS, JavaScript' }
    ],
    correctOptionId: 'a',
    explanation: 'MFA triad: Knowledge (Know: password/pin), Possession (Have: hardware token/TOTP app), Inherence (Are: fingerprint/face scan). Do password mangna 2FA nahi kehlata.',
    optionExplanations: {
      a: 'Textbook definition of Authentication Factors!',
      b: 'Ye sab knowledge ya identifiers hain.',
      c: 'Browsers hain.',
      d: 'Frontend languages hain.'
    },
    memoryTrick: 'K-P-I: Jo pata hai (Password), Jo jeb mein hai (Phone OTP), Jo tum khud ho (Aankh/Ungli ka nishaan)!',
    tags: ['auth', 'mfa', 'security']
  },
  {
    topic: 'auth',
    subTopic: 'timing-attacks',
    difficulty: 'interview',
    question: 'Why should `crypto.timingSafeEqual()` be used instead of standard `===` when comparing secret tokens or hashes?',
    codeSnippet: 'crypto.timingSafeEqual(bufferA, bufferB);',
    options: [
      { id: 'a', text: 'Because standard `===` causes JavaScript heap memory leaks' },
      { id: 'b', text: 'Because standard `===` short-circuits on the first mismatched byte, allowing attackers to measure execution time differences (Timing Attack) to deduce secrets' },
      { id: 'c', text: 'Because `===` can only compare numbers' },
      { id: 'd', text: 'Because the crypto module requires commercial licensing' }
    ],
    correctOptionId: 'b',
    explanation: 'Constant-time comparison ensures ki har comparison exact same time le chahe pehla byte galat ho ya aakhiri, timing side-channel attacks ko completely neutralize karte hue.',
    optionExplanations: {
      a: 'Memory leak issue nahi hai.',
      b: 'Deep cryptographic security concept! Constant-time comparison prevents timing side channels.',
      c: 'Triple equals any types compare karta hai.',
      d: 'Node.js built-in module hai.'
    },
    memoryTrick: 'Ghar ka darwaza kholne mein har baar barabar time lagao, varna chor aawaz sun kar chaabi ka design jaan lega!',
    tags: ['auth', 'cryptography', 'timing-attacks', 'interview']
  },
  {
    topic: 'auth',
    subTopic: 'jwt-expiration',
    difficulty: 'easy',
    question: 'Which standard registered claim key in a JWT payload specifies the token\'s expiration timestamp?',
    codeSnippet: 'const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });\n// In payload: { ________: 1711234567 }',
    options: [
      { id: 'a', text: 'expiry' },
      { id: 'b', text: 'exp' },
      { id: 'c', text: 'timeout' },
      { id: 'd', text: 'ttl' }
    ],
    correctOptionId: 'b',
    explanation: '`exp` standard JWT RFC registered claim hai jo Unix timestamp in seconds store karta hai. Verify karte waqt library check karti hai ki `Date.now() / 1000 < exp`.',
    optionExplanations: {
      a: 'Non-standard key name.',
      b: '`exp` standard registered claim key name hai.',
      c: 'Invalid claim.',
      d: 'Invalid claim.'
    },
    memoryTrick: 'EXP = Expiration! Short and crisp!',
    tags: ['auth', 'jwt', 'claims']
  },
  {
    topic: 'auth',
    subTopic: 'cookie-flags',
    difficulty: 'medium',
    question: 'Which cookie attribute ensures that an authentication cookie is only transmitted over HTTPS encrypted connections, preventing Man-in-the-Middle eavesdropping?',
    codeSnippet: 'res.cookie("token", jwt, { ________: true, httpOnly: true });',
    options: [
      { id: 'a', text: 'secure' },
      { id: 'b', text: 'sslOnly' },
      { id: 'c', text: 'encrypted' },
      { id: 'd', text: 'tls' }
    ],
    correctOptionId: 'a',
    explanation: '`secure: true` flag lagane par browser is cookie ko plain unencrypted HTTP par kabhi nahi bhejega, sirf verified HTTPS over TLS par hi transmit karega.',
    optionExplanations: {
      a: '`secure: true` standard HTTP cookie attribute hai.',
      b: 'Invalid attribute.',
      c: 'Invalid attribute.',
      d: 'Invalid attribute.'
    },
    memoryTrick: 'HTTPS hai tabhi bhejunga = SECURE: true!',
    tags: ['auth', 'cookies', 'security']
  },
  {
    topic: 'auth',
    subTopic: 'rate-limiting',
    difficulty: 'easy',
    question: 'What is the primary and most effective initial defense against brute-force dictionary attacks on authentication endpoints?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Shutting down the database server' },
      { id: 'b', text: 'Implementing IP-based and account-based rate limiting (e.g. temporary cooldown after 5 failed attempts)' },
      { id: 'c', text: 'Requiring passwords of at least 100 characters' },
      { id: 'd', text: 'Preventing users from logging in' }
    ],
    correctOptionId: 'b',
    explanation: 'Rate limiting aur account lockouts brute-force attack ko economically infeasible bana dete hain kyunki 5 attempts ke baad hacker ko 15 minute wait karna padega.',
    optionExplanations: {
      a: 'DDoS self-inflicted ho jayega.',
      b: 'Industry standard brute force mitigation technique!',
      c: 'Poor UX.',
      d: 'Absurd option.'
    },
    memoryTrick: '5 baar galti hui toh 15 minute ka danda! (Rate Limiting)',
    tags: ['auth', 'security', 'rate-limiting']
  }
];
