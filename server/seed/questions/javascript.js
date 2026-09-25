export const javascriptQuestions = [
  {
    topic: 'javascript',
    subTopic: 'arrays',
    difficulty: 'easy',
    question: 'Which JavaScript array method adds one or more elements to the end of an array and returns the new array length?',
    codeSnippet: 'const numbers = [1, 2, 3];\nnumbers.______(4);',
    options: [
      { id: 'a', text: 'pop()' },
      { id: 'b', text: 'push()' },
      { id: 'c', text: 'shift()' },
      { id: 'd', text: 'slice()' }
    ],
    correctOptionId: 'b',
    explanation: '`push()` array ke end mein elements insert karta hai aur mutated array ki new length return karta hai.',
    optionExplanations: {
      a: '`pop()` array ke end se element delete karta hai, add nahi!',
      b: '`push()` bilkul sahi! End mein item ghused deta hai!',
      c: '`shift()` array ke START se element remove karta hai.',
      d: '`slice()` array ka tukda copy karta hai bina original array ko modify kiye.'
    },
    memoryTrick: 'PUSH = Andar daal! POP = Bahar nikaal!',
    tags: ['javascript', 'arrays', 'methods']
  },
  {
    topic: 'javascript',
    subTopic: 'output',
    difficulty: 'medium',
    question: 'What is the output of the following JavaScript code?',
    codeSnippet: 'console.log([] + []);\nconsole.log([] + {});',
    options: [
      { id: 'a', text: '"" and "[object Object]"' },
      { id: 'b', text: '[] and {}' },
      { id: 'c', text: '0 and NaN' },
      { id: 'd', text: 'TypeError' }
    ],
    correctOptionId: 'a',
    explanation: 'Jab `+` operator use hota hai, toh objects string mein type coerce hote hain. `[].toString()` banta hai `""` (empty string), isiliye `"" + ""` = `""`. Aur `"" + {}.toString()` banta hai `"[object Object]"`!',
    optionExplanations: {
      a: 'Dono primitives string mein convert ho kar concatenate ho gaye.',
      b: 'JS addition mein objects direct preserve nahi rehte.',
      c: 'Plus operator string concatenation ko priority deta hai object coercion mein.',
      d: 'JS type coercion karta hai, error throw nahi karta.'
    },
    memoryTrick: 'JS coercion = Jhol hi Jhol! Empty array string banta hai empty ("")!',
    tags: ['javascript', 'output', 'type-coercion', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'closures',
    difficulty: 'interview',
    question: 'What is a Closure in JavaScript?',
    codeSnippet: 'function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}',
    options: [
      { id: 'a', text: 'A function that cleans up browser memory after execution' },
      { id: 'b', text: 'An inner function that retains access to its outer lexical scope variables even after the outer function has returned' },
      { id: 'c', text: 'Any function that invokes itself recursively' },
      { id: 'd', text: 'A built-in JavaScript object that closes open file streams' }
    ],
    correctOptionId: 'b',
    explanation: 'Closure tab banta hai jab inner function apne surrounding lexical environment ke variables ka access preserve karta hai, even after outer function has returned!',
    optionExplanations: {
      a: 'Closure memory close nahi karta, ulta references retain karke rakhta hai!',
      b: 'Spot on definition! Lexical scope binding outer scope ko zinda rakhti hai.',
      c: 'Recursion alag concept hai (function calling itself).',
      d: 'File closing Node fs ka kaam hai, JS closure language feature hai.'
    },
    memoryTrick: 'Maa-baap (outer function) chale bhi gaye, toh bhi beta (inner function) ghar ki chaabi (variables) jeb mein rakhta hai!',
    tags: ['javascript', 'closures', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'hoisting',
    difficulty: 'medium',
    question: 'What is the exact output of this code?',
    codeSnippet: 'console.log(a);\nvar a = 10;\nconsole.log(b);\nlet b = 20;',
    options: [
      { id: 'a', text: 'undefined and 20' },
      { id: 'b', text: 'undefined and ReferenceError' },
      { id: 'c', text: '10 and 20' },
      { id: 'd', text: 'ReferenceError and undefined' }
    ],
    correctOptionId: 'b',
    explanation: '`var` hoist hota hai aur initialize hota hai `undefined` ke sath. `let` bhi hoist hota hai lekin TDZ (Temporal Dead Zone) mein rehta hai jab tak declaration execute na ho, isiliye `ReferenceError` aayega!',
    optionExplanations: {
      a: '`let` access karne par ReferenceError aata hai TDZ ki wajah se.',
      b: 'Pehle undefined print hoga, fir b access hote hi ReferenceError fatal throw hoga.',
      c: 'Declaration se pehle actual value kabhi nahi milti.',
      d: 'Var ReferenceError nahi deta, undefined deta hai.'
    },
    memoryTrick: 'VAR = Bhulakkad (undefined de deta hai)! LET = Strict Police (TDZ mein pakad ke chappal marega ReferenceError ke sath)!',
    tags: ['javascript', 'hoisting', 'tdz', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'event-loop',
    difficulty: 'interview',
    question: 'What is the order of console output in this event loop code snippet?',
    codeSnippet: 'console.log("1");\nsetTimeout(() => console.log("2"), 0);\nPromise.resolve().then(() => console.log("3"));\nconsole.log("4");',
    options: [
      { id: 'a', text: '1, 4, 3, 2' },
      { id: 'b', text: '1, 2, 3, 4' },
      { id: 'c', text: '1, 4, 2, 3' },
      { id: 'd', text: '1, 3, 4, 2' }
    ],
    correctOptionId: 'a',
    explanation: '1 aur 4 synchronous Call Stack mein turant execute honge. Promise Microtask Queue mein jata hai jo Macrotask se pehle empty hoti hai (3), aur setTimeout Macrotask/Task Queue mein jata hai (2). So 1 -> 4 -> 3 -> 2!',
    optionExplanations: {
      a: 'Synchronous pehle (1, 4), fir Microtask (3), fir Macrotask (2)!',
      b: 'Async operations turant synchronous ke beech mein nahi ghuste.',
      c: 'Microtask hamesha Macrotask se pehle execute hota hai.',
      d: '4 synchronous hai, Promise resolution se pehle stack clear karega.'
    },
    memoryTrick: 'Sync Raja > Microtask Mantri (Promise) > Macrotask Praja (setTimeout)!',
    tags: ['javascript', 'event-loop', 'promises', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'equality',
    difficulty: 'easy',
    question: 'What is the primary difference between `==` (loose equality) and `===` (strict equality)?',
    codeSnippet: '5 == "5"  // ?\n5 === "5" // ?',
    options: [
      { id: 'a', text: 'They are identical; triple equals is simply newer syntax' },
      { id: 'b', text: '`==` performs type coercion before comparing, while `===` checks both value and data type strictly without coercion' },
      { id: 'c', text: '`===` can only be used to compare strings' },
      { id: 'd', text: '`==` is optimized and faster than `===`' }
    ],
    correctOptionId: 'b',
    explanation: '`5 == "5"` true return karega kyunki wo string ko number mein convert kar deta hai. `5 === "5"` false return karega kyunki type mismatch hai (number vs string).',
    optionExplanations: {
      a: 'Bohot bada difference hai bugs create karne mein.',
      b: 'Bilkul sahi! Professional code mein hamesha `===` use karna chahiye.',
      c: 'Har type par kaam karta hai.',
      d: 'Speed ka issue nahi hai, type safety ka hai.'
    },
    memoryTrick: '== matlab Jugaad! === matlab Asli Verification (ID aur Shakal dono)!',
    tags: ['javascript', 'operators', 'equality']
  },
  {
    topic: 'javascript',
    subTopic: 'arrays',
    difficulty: 'medium',
    question: 'What is the output of the following code snippet?',
    codeSnippet: 'const nums = [1, 2, 3];\nconst res = nums.map(n => {\n  n * 2;\n});\nconsole.log(res);',
    options: [
      { id: 'a', text: '[2, 4, 6]' },
      { id: 'b', text: '[undefined, undefined, undefined]' },
      { id: 'c', text: '[1, 2, 3]' },
      { id: 'd', text: 'TypeError' }
    ],
    correctOptionId: 'b',
    explanation: 'Arrow function mein curly braces `{}` lagane par explicit `return` likhna padta hai! Bina `return` ke function `undefined` return karega.',
    optionExplanations: {
      a: 'Agar curly braces na hote `n => n * 2` toh [2, 4, 6] aata.',
      b: 'Curly braces lagaye lekin `return` nahi likha, isiliye sab `undefined` ho gaya!',
      c: 'Map original array return nahi karta.',
      d: 'Koi error nahi aata, bas empty return undefined ban jata hai.'
    },
    memoryTrick: 'Curly braces lagaya toh RETURN likhna padega! Varna undefined ka thobda dekhna padega!',
    tags: ['javascript', 'output', 'arrays', 'arrow-functions']
  },
  {
    topic: 'javascript',
    subTopic: 'this-keyword',
    difficulty: 'interview',
    question: 'How does the `this` keyword behave differently in arrow functions compared to regular functions?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Arrow functions have their own `this` bound dynamically at runtime' },
      { id: 'b', text: 'Arrow functions do not have their own `this`; they inherit `this` lexically from their enclosing scope' },
      { id: 'c', text: 'Regular functions always set `this` to undefined' },
      { id: 'd', text: 'Using `this` inside an arrow function throws a syntax error' }
    ],
    correctOptionId: 'b',
    explanation: 'Arrow functions do not have their own `this` binding. They lexically resolve `this` from the enclosing execution context.',
    optionExplanations: {
      a: 'Regular function ka apna dynamic this hota hai.',
      b: 'Arrow function lexical scope se this churata hai! Isiliye `.bind()` bhi ispe kaam nahi karta.',
      c: 'Regular function mein caller object ya global object this banta hai.',
      d: 'Syntax error nahi hota, valid hai.'
    },
    memoryTrick: 'Arrow function = Anath (no own this)! Padosi (parent scope) ke this se guzara karta hai!',
    tags: ['javascript', 'this', 'arrow-functions', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'objects',
    difficulty: 'medium',
    question: 'What is the primary difference between a shallow copy and a deep copy of an object?',
    codeSnippet: 'const obj = { a: 1, b: { c: 2 } };',
    options: [
      { id: 'a', text: 'They are completely identical in memory and behavior' },
      { id: 'b', text: 'A shallow copy only copies top-level properties and retains references to nested objects, whereas a deep copy creates independent instances of all nested objects' },
      { id: 'c', text: 'A deep copy causes an inevitable memory leak' },
      { id: 'd', text: 'Shallow copies can only be created for arrays' }
    ],
    correctOptionId: 'b',
    explanation: '`Object.assign()` ya spread `{ ...obj }` shallow copy karte hain (nested object `b` abhi bhi purane memory address ko point karta hai). Deep copy ke liye `structuredClone(obj)` use hota hai.',
    optionExplanations: {
      a: 'Shallow copy nested object mutate karne par original bhi badal deta hai.',
      b: 'Spot on! Deep copy completely independent duplicate object create karta hai.',
      c: 'Nahi, normal garbage collected memory hoti hai.',
      d: 'Shallow copy objects aur arrays dono par hoti hai.'
    },
    memoryTrick: 'Shallow = Upar upar se! Deep = Pataal tak clone karo (structuredClone)!',
    tags: ['javascript', 'objects', 'cloning', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'promises',
    difficulty: 'medium',
    question: 'Which Promise method executes multiple promises concurrently and rejects immediately if ANY single promise rejects?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Promise.allSettled()' },
      { id: 'b', text: 'Promise.race()' },
      { id: 'c', text: 'Promise.all()' },
      { id: 'd', text: 'Promise.any()' }
    ],
    correctOptionId: 'c',
    explanation: '`Promise.all()` "fail-fast" principle pe kaam karta hai: saare resolve honge tabhi resolve hoga, agar ek bhi reject hua toh turant reject ho jayega.',
    optionExplanations: {
      a: '`allSettled` saare promises ke finish hone ka wait karta hai chahe resolve ho ya reject.',
      b: '`race` sabse pehle finish hone wale (resolve ya reject) ko leta hai.',
      c: '`Promise.all` sabka resolve hona chahta hai, ek bhi phoota toh blast!',
      d: '`Promise.any` pehla successful resolve dhoondhta hai.'
    },
    memoryTrick: 'Promise.all = Sabka Saath, Sabka Vikas! Ek bhi gaya toh mission cancel!',
    tags: ['javascript', 'promises', 'async']
  },
  {
    topic: 'javascript',
    subTopic: 'es6',
    difficulty: 'easy',
    question: 'Which ES6 syntax correctly destructures `name` and `age` from the `user` object?',
    codeSnippet: 'const user = { name: "Bhai", age: 25 };',
    options: [
      { id: 'a', text: 'const [name, age] = user;' },
      { id: 'b', text: 'const { name, age } = user;' },
      { id: 'c', text: 'const (name, age) = user;' },
      { id: 'd', text: 'const { user.name, user.age };' }
    ],
    correctOptionId: 'b',
    explanation: 'Object destructuring curly braces `{}` se hoti hai matching key names ke sath: `const { name, age } = user;`.',
    optionExplanations: {
      a: 'Square brackets `[]` array destructuring ke liye use hote hain.',
      b: 'Curly brackets `{ name, age }` object keys destructure karte hain.',
      c: 'Parenthesis invalid syntax hai.',
      d: 'Invalid syntax.'
    },
    memoryTrick: 'Object hai {} toh destructure bhi hoga {} mein!',
    tags: ['javascript', 'es6', 'destructuring']
  },
  {
    topic: 'javascript',
    subTopic: 'output',
    difficulty: 'medium',
    question: 'What is the output of the following JavaScript code snippet?',
    codeSnippet: 'console.log(typeof NaN);\nconsole.log(NaN === NaN);',
    options: [
      { id: 'a', text: '"number" and false' },
      { id: 'b', text: '"nan" and true' },
      { id: 'c', text: '"undefined" and false' },
      { id: 'd', text: '"number" and true' }
    ],
    correctOptionId: 'a',
    explanation: 'JavaScript mein `NaN` (Not-a-Number) ka data type `"number"` hota hai! Aur IEEE 754 floating point standard ke mutabiq `NaN` apne aap ke bhi barabar nahi hota (`NaN === NaN` is `false`).',
    optionExplanations: {
      a: 'JS ka iconic interview question! typeof NaN number hota hai aur wo apne aap se unequal hota hai.',
      b: '`nan` data type exist nahi karta JS mein.',
      c: 'Undefined alag type hai.',
      d: 'NaN kisi ke barabar nahi hota, isiliye Number.isNaN() banaya gaya.'
    },
    memoryTrick: 'NaN ka matlab: Not a Number lekin type hai number! Aur itna ghamandi hai ki khud ke barabar bhi nahi manta!',
    tags: ['javascript', 'output', 'nan', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'arrays',
    difficulty: 'easy',
    question: 'Which method is best suited to accumulate array items into a single calculated result (such as a sum)?',
    codeSnippet: 'const nums = [10, 20, 30];\nconst sum = nums.________((acc, curr) => acc + curr, 0);',
    options: [
      { id: 'a', text: 'filter' },
      { id: 'b', text: 'reduce' },
      { id: 'c', text: 'forEach' },
      { id: 'd', text: 'find' }
    ],
    correctOptionId: 'b',
    explanation: '`reduce()` method accumulator pattern use karke array ke elements ko single result value mein condense karta hai.',
    optionExplanations: {
      a: '`filter` elements chhaant kar naya array banata hai.',
      b: '`reduce` accumulator aur current value ko jod kar final single value deta hai.',
      c: '`forEach` sirf loop karta hai aur `undefined` return karta hai.',
      d: '`find` pehla matching element return karta hai.'
    },
    memoryTrick: 'Poore array ko nichod kar ek banana hai? REDUCE lagao!',
    tags: ['javascript', 'arrays', 'methods']
  },
  {
    topic: 'javascript',
    subTopic: 'scope',
    difficulty: 'medium',
    question: 'What is the output of the following for-loop after the timeouts finish?',
    codeSnippet: 'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}',
    options: [
      { id: 'a', text: '0, 1, 2' },
      { id: 'b', text: '3, 3, 3' },
      { id: 'c', text: 'undefined, undefined, undefined' },
      { id: 'd', text: '1, 2, 3' }
    ],
    correctOptionId: 'b',
    explanation: '`var` function-scoped hota hai, block-scoped nahi. Jab tak `setTimeout` ka 100ms timer poora hoga, loop khatam ho chuka hoga aur shared variable `i` ki value 3 ho chuki hogi! Agar `let` use karte toh 0, 1, 2 aata.',
    optionExplanations: {
      a: 'Agar `let i = 0` hota toh har iteration ka naya block scope banta aur 0, 1, 2 aata.',
      b: 'Var ek hi memory box share karta hai, toh teeno callbacks 3 print karenge.',
      c: 'Variable i globally/function scope mein zinda hai 3 value ke sath.',
      d: 'Loop zero se start hua tha aur 3 par stop hua.'
    },
    memoryTrick: 'Var loop mein dilli ka laddu hai, sabko 3-3-3 dega! LET lagao agar 0, 1, 2 chahiye!',
    tags: ['javascript', 'output', 'scope', 'event-loop', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'async-await',
    difficulty: 'medium',
    question: 'What does an `async` function always implicitly return?',
    codeSnippet: 'async function getNumber() {\n  return 42;\n}',
    options: [
      { id: 'a', text: 'Raw Number 42' },
      { id: 'b', text: 'A Promise resolving with 42' },
      { id: 'c', text: 'undefined' },
      { id: 'd', text: 'A Callback function' }
    ],
    correctOptionId: 'b',
    explanation: '`async` keyword lagate hi function ka return value automatically `Promise.resolve(returnValue)` mein wrap ho jata hai.',
    optionExplanations: {
      a: 'Direct number nahi milta, use pane ke liye `await` ya `.then()` lagana padega.',
      b: 'Har async function ek Promise return karta hai guaranteed!',
      c: 'Function ne explicit value return ki hai toh undefined nahi hoga.',
      d: 'Async function Promise return karta hai, callback nahi.'
    },
    memoryTrick: 'Async likha matlab Promise pakka! Chahe return mein chillar do, wo lifafe (Promise) mein wrap hoke hi aayega!',
    tags: ['javascript', 'async-await', 'promises']
  },
  {
    topic: 'javascript',
    subTopic: 'currying',
    difficulty: 'interview',
    question: 'What is Currying in JavaScript?',
    codeSnippet: 'const add = a => b => a + b;\nadd(2)(3); // 5',
    options: [
      { id: 'a', text: 'A technique for minifying JavaScript files' },
      { id: 'b', text: 'A technique of converting a function with multiple arguments into a sequence of functions that each take a single argument' },
      { id: 'c', text: 'Chaining array map and filter methods together' },
      { id: 'd', text: 'A pattern for handling runtime errors' }
    ],
    correctOptionId: 'b',
    explanation: 'Currying transforms `fn(a, b, c)` into callable sequence `fn(a)(b)(c)`. Ye functional programming aur reusable partially applied functions banane mein bohot use hota hai.',
    optionExplanations: {
      a: 'Minification build tools karte hain.',
      b: 'Exact textbook aur interview definition! Har step ek function return karta hai.',
      c: 'Method chaining hoti hai wo.',
      d: 'Try-catch error handling hota hai.'
    },
    memoryTrick: 'Curry ek sath nahi banti, ek-ek masala daal ke (ek-ek argument leke) banti hai!',
    tags: ['javascript', 'currying', 'functional-programming', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'prototypes',
    difficulty: 'interview',
    question: 'What is the terminal (end) point of the prototype chain in JavaScript?',
    codeSnippet: 'Object.getPrototypeOf(Object.prototype); // ?',
    options: [
      { id: 'a', text: 'undefined' },
      { id: 'b', text: 'null' },
      { id: 'c', text: 'Object' },
      { id: 'd', text: 'window' }
    ],
    correctOptionId: 'b',
    explanation: 'Prototype chain `Object.prototype` par ja kar end hoti hai, aur `Object.prototype.__proto__` strictly `null` hota hai. Iske aage koi prototype nahi hota.',
    optionExplanations: {
      a: 'Undefined missing property pe aata hai, chain termination pe nahi.',
      b: '`null` prototype chain ka end point (shunya) hai.',
      c: 'Object constructor function hai.',
      d: 'Window browser ka global object hai.'
    },
    memoryTrick: 'Khandaan ki shuruaat NULL se hoti hai! Chain ka aakhiri dada = NULL!',
    tags: ['javascript', 'prototypes', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'es6',
    difficulty: 'easy',
    question: 'What is the purpose of the rest parameter syntax (`...args`) in function declarations?',
    codeSnippet: 'function sum(...args) {\n  return args.reduce((a, b) => a + b);\n}',
    options: [
      { id: 'a', text: 'To spread an array into individual values at call site' },
      { id: 'b', text: 'To collect an indefinite number of arguments into a genuine Array' },
      { id: 'c', text: 'To pause function execution' },
      { id: 'd', text: 'To deallocate memory in the function' }
    ],
    correctOptionId: 'b',
    explanation: 'Parameter position par `...args` Rest parameter kehlata hai jo kitne bhi arguments ko ek single array mein pack kar deta hai.',
    optionExplanations: {
      a: 'Wo spread operator ka kaam hota hai call side par.',
      b: 'Rest operator parameter list ke remaining arguments ko array bana deta hai.',
      c: 'Function pause yield/generators karte hain.',
      d: 'Memory cleanup garbage collector karta hai.'
    },
    memoryTrick: 'Function parameter mein ... = REST (sabko pack kar lo)! Bahar ... = SPREAD (phaila do)!',
    tags: ['javascript', 'es6', 'rest-spread']
  },
  {
    topic: 'javascript',
    subTopic: 'null-undefined',
    difficulty: 'easy',
    question: 'What is the practical difference between `null` and `undefined` in JavaScript?',
    codeSnippet: 'let x;\nlet y = null;',
    options: [
      { id: 'a', text: 'They are strictly identical in value and behavior' },
      { id: 'b', text: '`undefined` means a variable has been declared but not assigned a value; `null` is an intentional assignment representing an empty or non-existent value' },
      { id: 'c', text: '`null` is a number while `undefined` is a string' },
      { id: 'd', text: '`undefined` consumes no memory at runtime' }
    ],
    correctOptionId: 'b',
    explanation: '`undefined` JavaScript ka default uninitialized state hai. `null` explicit intentional assignment hai jo batata hai "yahan deliberately koi value nahi hai".',
    optionExplanations: {
      a: '`null !== undefined` hota hai strict check mein.',
      b: 'Exact semantic difference! Ek system deta hai, ek developer deta hai.',
      c: 'Dono primitive types hain.',
      d: 'Dono runtime memory mein exist karte hain.'
    },
    memoryTrick: 'Undefined = System bola "mujhe nahi pata"! Null = Developer bola "maine khud khali rakha hai"!',
    tags: ['javascript', 'basics', 'types']
  },
  {
    topic: 'javascript',
    subTopic: 'output',
    difficulty: 'medium',
    question: 'What is the output of this code snippet?',
    codeSnippet: 'const a = [1, 2, 3];\nconst b = a;\nb.push(4);\nconsole.log(a.length);',
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '4' },
      { id: 'c', text: 'undefined' },
      { id: 'd', text: 'TypeError' }
    ],
    correctOptionId: 'b',
    explanation: 'Arrays objects hote hain aur by reference pass hote hain. `b = a` naya array nahi banata balki usi memory address ko point karta hai, isiliye `b` mein push karne se `a` bhi modify ho gaya!',
    optionExplanations: {
      a: 'Array copy nahi hua tha, sirf pointer copy hua tha.',
      b: 'Dono `a` aur `b` ek hi heap memory ko point kar rahe hain, isiliye length 4 ho gayi.',
      c: 'Length property valid integer deti hai.',
      d: 'Const variable ke andar ki contents mutate ki ja sakti hain, reassignment illegal hoti hai.'
    },
    memoryTrick: 'Ek hi kamre ki do chaabi! b se andar jaake samaan rakhoge toh a ko bhi dikhega!',
    tags: ['javascript', 'output', 'references', 'arrays']
  },
  {
    topic: 'javascript',
    subTopic: 'es6',
    difficulty: 'easy',
    question: 'Which modern operator is used to safely access nested object properties without throwing a runtime error when an intermediate reference is null or undefined?',
    codeSnippet: 'const city = user?.address?.city;',
    options: [
      { id: 'a', text: 'Nullish Coalescing (??)' },
      { id: 'b', text: 'Optional Chaining (?.)' },
      { id: 'c', text: 'Ternary Operator (?:)' },
      { id: 'd', text: 'Spread Operator (...)' }
    ],
    correctOptionId: 'b',
    explanation: '`?.` (Optional Chaining) agar reference `null` ya `undefined` ho toh crash hone ke bajaye safely short-circuit karke `undefined` return kar deta hai.',
    optionExplanations: {
      a: '`??` fallback default value dene ke liye hota hai.',
      b: '`?.` optional chaining operator hai jo "Cannot read property of undefined" error se bachata hai.',
      c: '`?:` condition ? trueVal : falseVal ke liye hota hai.',
      d: '`...` array ya object unpack karne ke liye hota hai.'
    },
    memoryTrick: 'Question mark dot (?.) = Pehle poochho "bhai tu zinda hai kya?", fir aage badho!',
    tags: ['javascript', 'es6', 'operators']
  },
  {
    topic: 'javascript',
    subTopic: 'es6',
    difficulty: 'medium',
    question: 'What are the resulting values of `a` and `b` in the following code?',
    codeSnippet: 'const count = 0;\nconst a = count || 10;\nconst b = count ?? 10;',
    options: [
      { id: 'a', text: 'a = 10, b = 0' },
      { id: 'b', text: 'a = 0, b = 10' },
      { id: 'c', text: 'a = 10, b = 10' },
      { id: 'd', text: 'a = 0, b = 0' }
    ],
    correctOptionId: 'a',
    explanation: '`||` kisi bhi falsy value (0, "", false, null, undefined) par fallback deta hai. Jabki `??` sirf strictly `null` ya `undefined` hone par hi fallback leta hai! Since 0 valid number hai, `count ?? 10` evaluates to 0.',
    optionExplanations: {
      a: '`||` ne 0 ko falsy man kar 10 le liya, jabki `??` ne 0 ko valid value mana!',
      b: 'Ulta answer hai.',
      c: 'Dono ka behaviour different hota hai 0 aur false par.',
      d: 'Logical OR 0 pe fallback trigger karta hai.'
    },
    memoryTrick: '|| har falsy pe bhadak jata hai! ?? sirf NULL aur UNDEFINED ko bhao deta hai!',
    tags: ['javascript', 'operators', 'output', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'functions',
    difficulty: 'interview',
    question: 'What is the core difference between Debouncing and Throttling?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'They are identical concepts with different names' },
      { id: 'b', text: 'Debounce executes only after a specified period of inactivity; Throttle guarantees execution at most once per specified time interval during continuous events' },
      { id: 'c', text: 'Throttle is exclusively designed for search input fields' },
      { id: 'd', text: 'Debounce forces an automatic browser page reload' }
    ],
    correctOptionId: 'b',
    explanation: 'Debounce: "Typing band hone ke 300ms baad search API call karo". Throttle: "Window scroll karte waqt har 200ms mein scroll position check karo".',
    optionExplanations: {
      a: 'Execution timing aur rate limiting behaviour alag hai.',
      b: 'Accurate practical definition! Search bar mein debounce, scroll/resize mein throttle.',
      c: 'Search input mein debounce better rehta hai taaki har keystroke pe call na jaye.',
      d: 'Browser refresh nahi karta, function call delay karta hai.'
    },
    memoryTrick: 'Debounce = "Pehle bol le bhai, jab tu shaant hoga tab main jawab dunga"! Throttle = "Tu bolta reh, main ghadi dekh ke har 5 second mein bolunga"!',
    tags: ['javascript', 'performance', 'debounce-throttle', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'sets-maps',
    difficulty: 'easy',
    question: 'What is the cleanest one-line way to remove duplicate values from a JavaScript array?',
    codeSnippet: 'const arr = [1, 2, 2, 3, 3, 4];\nconst unique = ________;',
    options: [
      { id: 'a', text: '[...new Set(arr)]' },
      { id: 'b', text: 'arr.filterDuplicates()' },
      { id: 'c', text: 'Object.unique(arr)' },
      { id: 'd', text: 'new Map(arr)' }
    ],
    correctOptionId: 'a',
    explanation: '`Set` collection sirf unique values store karta hai. Array ko `new Set(arr)` mein daal kar spread `[... ]` karne se duplicate-free array ban jata hai.',
    optionExplanations: {
      a: 'Modern JS ka sabse famous 1-liner duplicate removal trick.',
      b: 'Aisa koi native array method nahi hota.',
      c: 'Invalid method.',
      d: 'Map key-value pairs ke liye hota hai.'
    },
    memoryTrick: 'Duplicate se chhutkara chahiye? SET banao aur SPREAD maro!',
    tags: ['javascript', 'sets', 'arrays']
  },
  {
    topic: 'javascript',
    subTopic: 'output',
    difficulty: 'interview',
    question: 'What is the output of the following JavaScript code snippet in non-strict mode?',
    codeSnippet: 'const obj = {\n  x: 42,\n  getX: function() {\n    return this.x;\n  }\n};\nconst unboundGetX = obj.getX;\nconsole.log(unboundGetX());',
    options: [
      { id: 'a', text: '42' },
      { id: 'b', text: 'undefined' },
      { id: 'c', text: 'ReferenceError' },
      { id: 'd', text: 'null' }
    ],
    correctOptionId: 'b',
    explanation: 'Jab function ko kisi alag variable mein assign karke standalone call kiya jata hai, toh uske execution context ka caller lose ho jata hai. Strict mode mein `this` `undefined` hota hai aur non-strict mein `window` jisme `x` nahi hai, isiliye `undefined` aayega!',
    optionExplanations: {
      a: 'Agar `obj.getX()` call karte toh 42 aata.',
      b: 'Standalone function invocation mein `this` obj nahi rehta, isiliye undefined!',
      c: 'ReferenceError tab aata jab variable na milta, yahan this.x undefined hai.',
      d: 'Null tab aata jab explicit null set hota.'
    },
    memoryTrick: 'Ghar se bahar nikala toh baap (obj) ka naam bhool gaya! Ab this kho gaya!',
    tags: ['javascript', 'output', 'this', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'error-handling',
    difficulty: 'medium',
    question: 'In a `try...catch...finally` construct, when does the `finally` block execute?',
    codeSnippet: 'try {\n  doSomething();\n} catch (e) {\n  handleError();\n} finally {\n  cleanup();\n}',
    options: [
      { id: 'a', text: 'Only when an error occurs in the try block' },
      { id: 'b', text: 'Only when NO error occurs in the try block' },
      { id: 'c', text: 'Always, regardless of whether an error was thrown or handled' },
      { id: 'd', text: 'Only when an unhandled Promise rejects' }
    ],
    correctOptionId: 'c',
    explanation: '`finally` block hamesha execute hota hai chahe code smoothly chale ya catch block mein error handle ho, even if try block returns earlier!',
    optionExplanations: {
      a: 'Ye catch block ka kaam hai.',
      b: 'Normal try block ka kaam hai.',
      c: 'Cleanup actions (loaders off, DB connection close) ke liye finally guaranteed execute hota hai.',
      d: 'Async aur sync dono mein finally guaranteed chalta hai.'
    },
    memoryTrick: 'FINALLY = "Chahe aandhi aaye ya toofan, main toh chalunga hi chalunga!"',
    tags: ['javascript', 'error-handling']
  },
  {
    topic: 'javascript',
    subTopic: 'json',
    difficulty: 'easy',
    question: 'Which method converts a JavaScript object into a JSON-formatted string?',
    codeSnippet: 'const user = { name: "Bhai" };\nconst jsonString = ________(user);',
    options: [
      { id: 'a', text: 'JSON.parse' },
      { id: 'b', text: 'JSON.stringify' },
      { id: 'c', text: 'JSON.toText' },
      { id: 'd', text: 'JSON.serialize' }
    ],
    correctOptionId: 'b',
    explanation: '`JSON.stringify()` JS value/object ko JSON string mein convert karta hai.',
    optionExplanations: {
      a: '`JSON.parse()` JSON string ko vapas JS object banata hai.',
      b: '`JSON.stringify()` string banata hai.',
      c: 'Aisa koi method nahi hota.',
      d: 'Ye doosri languages mein hota hai, JS mein stringify hai.'
    },
    memoryTrick: 'String banana hai toh STRINGIFY! Parse karke object banana hai toh PARSE!',
    tags: ['javascript', 'json']
  },
  {
    topic: 'javascript',
    subTopic: 'dom',
    difficulty: 'easy',
    question: 'Which standard DOM method is used to attach an event handler to an element?',
    codeSnippet: 'const btn = document.querySelector("#btn");\nbtn.________("click", handleClick);',
    options: [
      { id: 'a', text: 'attachListener' },
      { id: 'b', text: 'addEventListener' },
      { id: 'c', text: 'onClick' },
      { id: 'd', text: 'bindEvent' }
    ],
    correctOptionId: 'b',
    explanation: '`addEventListener("click", handler)` modern standard DOM event handling method hai jo multiple listeners support karta hai.',
    optionExplanations: {
      a: 'Invalid method name.',
      b: '`addEventListener` W3C standard DOM method hai.',
      c: '`onclick` property hoti hai, method nahi.',
      d: 'jQuery ya purana pattern hai.'
    },
    memoryTrick: 'Event ka kaan khada karna hai? addEventListener!',
    tags: ['javascript', 'dom', 'events']
  },
  {
    topic: 'javascript',
    subTopic: 'events',
    difficulty: 'medium',
    question: 'What is the order of execution in the standard DOM event propagation cycle?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'The event travels downward from window to target (Capturing phase), then bubbles upward from target back to root (Bubbling phase)' },
      { id: 'b', text: 'Both phases travel in the same downward direction simultaneously' },
      { id: 'c', text: 'Bubbling only occurs on mobile touchscreen devices' },
      { id: 'd', text: 'Capturing only occurs for keyboard events' }
    ],
    correctOptionId: 'a',
    explanation: 'DOM event dispatch cycle: Window se target element tak aana = Capturing (Trickling). Target par fire hona = Target phase. Target se wapas Window tak float hona = Bubbling!',
    optionExplanations: {
      a: 'Ekdum textbook visual cycle! Upar se neeche aana Capture, neeche se upar jaana Bubble.',
      b: 'Opposite directions mein travel karte hain.',
      c: 'Har browser aur device par same DOM event flow hota hai.',
      d: 'Sabhi bubbling events par applicable hai.'
    },
    memoryTrick: 'Pehle goli daagi (Capture neeche aayi), fir paani ka bulbula (Bubble) upar gaya!',
    tags: ['javascript', 'events', 'dom', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'events',
    difficulty: 'medium',
    question: 'Which event method prevents the browser from executing its default action (such as page reload on form submission)?',
    codeSnippet: 'function handleSubmit(e) {\n  e.________();\n  // AJAX code\n}',
    options: [
      { id: 'a', text: 'stopPropagation' },
      { id: 'b', text: 'preventDefault' },
      { id: 'c', text: 'cancelBubble' },
      { id: 'd', text: 'stopImmediatePropagation' }
    ],
    correctOptionId: 'b',
    explanation: '`e.preventDefault()` browser ke default action (jaise form submit par page reload hona ya link click par redirect hona) ko cancel karta hai.',
    optionExplanations: {
      a: '`e.stopPropagation()` event ko parent hierarchy mein bubble hone se rokta hai, page reload nahi rokta.',
      b: '`e.preventDefault()` browser ka default reload behaviour block karta hai.',
      c: 'Puraana IE specific property thi.',
      d: 'Same element ke doosre listeners ko rokta hai.'
    },
    memoryTrick: 'Browser ko bolo: "Apna default dimaag mat chala" = PREVENT DEFAULT!',
    tags: ['javascript', 'events', 'forms']
  },
  {
    topic: 'javascript',
    subTopic: 'generators',
    difficulty: 'interview',
    question: 'Which syntax declares a generator function and which keyword is used to pause its execution?',
    codeSnippet: 'function* idMaker() {\n  let index = 0;\n  while (true) {\n    ________ index++;\n  }\n}',
    options: [
      { id: 'a', text: '`function*` and `yield`' },
      { id: 'b', text: '`#function` and `pause`' },
      { id: 'c', text: '`$function` and `await`' },
      { id: 'd', text: '`&function` and `return`' }
    ],
    correctOptionId: 'a',
    explanation: '`function*` generator function declare karta hai aur `yield` keyword function ko pause karke intermediate value return karta hai jab tak `.next()` na call ho.',
    optionExplanations: {
      a: '`function*` + `yield` standard ES6 generator syntax hai.',
      b: '`#` private fields ke liye hota hai.',
      c: '`await` async function ke sath use hota hai.',
      d: '`return` function ko permanently terminate kar deta hai, pause nahi karta.'
    },
    memoryTrick: 'Star (*) lagao generator banao! Yield bolo aur pause ho jao!',
    tags: ['javascript', 'generators', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'es6',
    difficulty: 'easy',
    question: 'Which quote character is used to create Template Literals with multi-line strings and embedded expressions?',
    codeSnippet: 'const message = `Hello ${name}, welcome to ${app}!`;',
    options: [
      { id: 'a', text: 'Single quotes (\'\')' },
      { id: 'b', text: 'Double quotes ("")' },
      { id: 'c', text: 'Backticks (``)' },
      { id: 'd', text: 'Angle brackets (<>)' }
    ],
    correctOptionId: 'c',
    explanation: 'Backticks (`) template literals create karte hain jo `${expression}` syntax aur multi-line formatting support karte hain.',
    optionExplanations: {
      a: 'Single quotes variable interpolation support nahi karte.',
      b: 'Double quotes mein string concatenation `+` se karni padti hai.',
      c: 'Backticks (Tab key ke upar wala button) se string interpolation hoti hai.',
      d: 'Angle brackets HTML ya Generics ke liye hote hain.'
    },
    memoryTrick: 'Backtick lagao, dollar-curly (${}) se variable nachao!',
    tags: ['javascript', 'es6', 'strings']
  },
  {
    topic: 'javascript',
    subTopic: 'arrays',
    difficulty: 'medium',
    question: 'What is the primary difference between `Array.prototype.find()` and `Array.prototype.filter()`?',
    codeSnippet: 'const users = [{id: 1}, {id: 2}, {id: 2}];',
    options: [
      { id: 'a', text: '`find()` returns the first matching element itself, whereas `filter()` returns a new Array containing all matching elements' },
      { id: 'b', text: 'Both methods return identical arrays' },
      { id: 'c', text: '`find()` returns the matching index rather than the element' },
      { id: 'd', text: '`filter()` mutates the original array in place' }
    ],
    correctOptionId: 'a',
    explanation: '`find()` condition match hote hi search stop karke pehla item de deta hai. `filter()` pura array scan karke sabhi matching items ka array banata hai.',
    optionExplanations: {
      a: 'Exact difference! Single object vs Array of objects.',
      b: 'Return types aur count alag hoti hai.',
      c: 'Index ke liye `findIndex()` use hota hai.',
      d: 'Filter immutable hota hai, original array ko modify nahi karta.'
    },
    memoryTrick: 'FIND = Pehla banda pakdo! FILTER = Sab matching bando ki list banao!',
    tags: ['javascript', 'arrays', 'methods']
  },
  {
    topic: 'javascript',
    subTopic: 'memory',
    difficulty: 'interview',
    question: 'Which primary algorithm is used by modern JavaScript engines (such as V8) to reclaim unreachable memory in garbage collection?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Reference Counting (Legacy mechanism)' },
      { id: 'b', text: 'Mark-and-Sweep Algorithm' },
      { id: 'c', text: 'FIFO Queue Clearing' },
      { id: 'd', text: 'Bubble Clear Algorithm' }
    ],
    correctOptionId: 'b',
    explanation: 'Modern JS engines (V8 waghera) Mark-and-Sweep use karte hain. Ye root objects (global, call stack) se traverse karte hain, sab reachable objects ko "mark" karte hain, aur baki unreachables ko "sweep" (delete) kar dete hain. Isse circular references ka leak solve ho gaya.',
    optionExplanations: {
      a: 'Reference counting purane browsers mein tha jo circular reference par leak kar deta tha.',
      b: 'Mark-and-Sweep modern garbage collection ka backbone hai.',
      c: 'Queue scheduling algorithm hai, GC nahi.',
      d: 'Bubble sort hota hai, clear algorithm nahi.'
    },
    memoryTrick: 'Mark lagao zinda par, Sweep maaro kachre par = MARK AND SWEEP!',
    tags: ['javascript', 'memory', 'garbage-collection', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'es6',
    difficulty: 'medium',
    question: 'What is a major advantage of using `Map` over a plain JavaScript Object (`{}`)?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'A Map allows keys of any data type (objects, functions, primitives), whereas plain Object keys are coerced to strings or symbols' },
      { id: 'b', text: 'A Map consumes zero memory' },
      { id: 'c', text: 'Plain objects have a strict limit of 10 properties' },
      { id: 'd', text: 'A Map can only store numerical values' }
    ],
    correctOptionId: 'a',
    explanation: '`Map` any type of key allow karta hai, insertion order preserve karta hai, aur `.size` property direct deta hai bina `Object.keys(obj).length` kiye.',
    optionExplanations: {
      a: 'Bilkul sahi! Normal object mein `obj[{}]` likhoge toh key string `"[object Object]"` ban jayegi!',
      b: 'Map bhi normal memory leta hai.',
      c: 'Map aur Object dono memory limit tak ja sakte hain.',
      d: 'Map kisi bhi type ki value aur key store kar sakta hai.'
    },
    memoryTrick: 'Map = Asli Aazadi! Object ko bhi key bana lo!',
    tags: ['javascript', 'data-structures', 'map-vs-object', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'strict-mode',
    difficulty: 'medium',
    question: 'What change occurs when `"use strict";` is declared at the top of a JavaScript file or function?',
    codeSnippet: '"use strict";\nx = 10; // ?',
    options: [
      { id: 'a', text: 'Undeclared variables are automatically created on the global window object' },
      { id: 'b', text: 'Silent mistakes throw explicit exceptions (e.g. assigning to an undeclared variable throws a ReferenceError)' },
      { id: 'c', text: 'Code execution becomes 10x slower' },
      { id: 'd', text: 'Arrow functions are disabled completely' }
    ],
    correctOptionId: 'b',
    explanation: 'Strict mode accidental global variables creation rokta hai, secure JS promote karta hai, aur `this` ko global object banne se bacha kar `undefined` rakhta hai.',
    optionExplanations: {
      a: 'Bina strict mode ke accidental global banta tha, strict mode use rokta hai!',
      b: 'Strict mode sloppy code ko error dekar pehle hi pakad leta hai.',
      c: 'Compiler optimizations improve hoti hain, slow nahi hota.',
      d: 'Arrow functions fully supported hain.'
    },
    memoryTrick: 'Use Strict = Strict Masterji! Galti karte hi danda padega!',
    tags: ['javascript', 'strict-mode']
  },
  {
    topic: 'javascript',
    subTopic: 'output',
    difficulty: 'interview',
    question: 'What is the console output of this code snippet?',
    codeSnippet: 'console.log(1 < 2 < 3);\nconsole.log(3 > 2 > 1);',
    options: [
      { id: 'a', text: 'true and true' },
      { id: 'b', text: 'true and false' },
      { id: 'c', text: 'false and false' },
      { id: 'd', text: 'TypeError' }
    ],
    correctOptionId: 'b',
    explanation: 'Left-to-right evaluation: `1 < 2` banta hai `true`. Fir `true < 3` coercion se `1 < 3` banta hai which is `true`. Par doosre mein: `3 > 2` banta hai `true`. Fir `true > 1` coercion se `1 > 1` banta hai which is `false`!',
    optionExplanations: {
      a: 'Maths ki aankh se mat dekho bhidu! JS mein boolean type coercion chalti hai!',
      b: 'Pehla true, doosra false! Classic JS interview trap!',
      c: 'Pehla evaluation true evaluate hota hai.',
      d: 'No error, pure boolean coercion.'
    },
    memoryTrick: 'Maths mein 3 > 2 > 1 sach hai, lekin JS mein true > 1 ban jata hai 1 > 1 (FALSE)!',
    tags: ['javascript', 'output', 'type-coercion', 'interview']
  },
  {
    topic: 'javascript',
    subTopic: 'modules',
    difficulty: 'easy',
    question: 'What is the standard ES Modules (ESM) syntax for exporting and importing a named function?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '`export const add = ...` and `import { add } from "./math.js"`' },
      { id: 'b', text: '`module.exports = { add }` and `require("./math.js")`' },
      { id: 'c', text: '`#include <math.js>`' },
      { id: 'd', text: '`package.export(add)`' }
    ],
    correctOptionId: 'a',
    explanation: 'ES Modules modern standard JS syntax hai jo `import` aur `export` keywords use karta hai. `module.exports` CommonJS (Node.js legacy) ka syntax hai.',
    optionExplanations: {
      a: 'Official ECMAScript module standard syntax.',
      b: 'CommonJS syntax hai.',
      c: 'C/C++ ka syntax hai.',
      d: 'Fake syntax.'
    },
    memoryTrick: 'Modern JS mein: Export karo aage se, Import karo peeche se!',
    tags: ['javascript', 'modules', 'es6']
  },
  {
    topic: 'javascript',
    subTopic: 'web-api',
    difficulty: 'medium',
    question: 'Which Web Storage mechanism persists data permanently even after the browser tab or window is closed?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'sessionStorage' },
      { id: 'b', text: 'localStorage' },
      { id: 'c', text: 'memoryStorage' },
      { id: 'd', text: 'cookie without expiry' }
    ],
    correctOptionId: 'b',
    explanation: '`localStorage` ka data tab close karne ya browser restart karne ke baad bhi persist rehta hai jab tak user ya code use manually clear na kare. `sessionStorage` tab close hote hi destroy ho jata hai.',
    optionExplanations: {
      a: '`sessionStorage` tab close hote hi udd jata hai.',
      b: '`localStorage` permanent client-side key-value storage hai.',
      c: 'Invalid API name.',
      d: 'Cookie without expiry session cookie hoti hai jo tab band hote hi expire ho jati hai.'
    },
    memoryTrick: 'Local = Mohalla! Mohalla wahi rahega chahe ghar ka darwaza (tab) band kar do!',
    tags: ['javascript', 'storage', 'web-api']
  },
  {
    topic: 'javascript',
    subTopic: 'objects',
    difficulty: 'medium',
    question: 'Which method completely freezes an object so that properties cannot be added, deleted, or modified?',
    codeSnippet: 'const config = Object.________({ port: 3000 });',
    options: [
      { id: 'a', text: 'seal' },
      { id: 'b', text: 'freeze' },
      { id: 'c', text: 'lock' },
      { id: 'd', text: 'protect' }
    ],
    correctOptionId: 'b',
    explanation: '`Object.freeze()` object ko immutable banata hai (shallow freeze). `Object.seal()` properties add/delete rokta hai but existing properties mutate karne deta hai.',
    optionExplanations: {
      a: '`Object.seal()` values edit karne deta hai.',
      b: '`Object.freeze()` shallow immutability deta hai!',
      c: 'Invalid method.',
      d: 'Invalid method.'
    },
    memoryTrick: 'FREEZE = Barf jam gaya! Hilna dulna sab band!',
    tags: ['javascript', 'objects', 'immutability']
  }
];
