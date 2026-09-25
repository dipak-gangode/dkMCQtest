export const nodejsQuestions = [
  {
    topic: 'nodejs',
    subTopic: 'fundamentals',
    difficulty: 'interview',
    question: 'How does Node.js handle heavy I/O operations (file reading, database queries, network calls) in a non-blocking manner despite having a single-threaded JavaScript runtime?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'It spawns a new OS thread for every incoming user request' },
      { id: 'b', text: 'By utilizing the Libuv C library thread pool and OS kernel async primitives coordinated by the Event Loop' },
      { id: 'c', text: 'The V8 engine executes multi-threaded JavaScript code' },
      { id: 'd', text: 'Node.js runs JavaScript on multiple threads by default' }
    ],
    correctOptionId: 'b',
    explanation: 'Node.js ka JavaScript main execution thread single-threaded hota hai, lekin background I/O operations Libuv ke thread pool (default 4 threads) aur OS async APIs dwara handle kiye jaate hain.',
    optionExplanations: {
      a: 'Java ya Apache server naye thread banate hain, Node.js event-driven single-thread par chalta hai.',
      b: 'Libuv + Event Loop architecture! Yehi Node.js ka asali engine room hai.',
      c: 'V8 engine single-thread execution karta hai.',
      d: 'JS runtime single-threaded hai.'
    },
    memoryTrick: 'Dukaan pe baitha ek hi cashier (Single Thread JS), lekin godaam mein 4 mazdoor (Libuv Thread Pool)!',
    tags: ['nodejs', 'event-loop', 'libuv', 'interview']
  },
  {
    topic: 'nodejs',
    subTopic: 'event-loop',
    difficulty: 'interview',
    question: 'In the Node.js Event Loop, which function has higher execution priority: `process.nextTick()` or `setImmediate()`?',
    codeSnippet: 'setImmediate(() => console.log("A"));\nprocess.nextTick(() => console.log("B"));',
    options: [
      { id: 'a', text: '`setImmediate` always executes first' },
      { id: 'b', text: '`process.nextTick()` enters the microtask queue and executes immediately after the current operation finishes, before moving to the next event loop phase' },
      { id: 'c', text: 'Both execute in random non-deterministic order' },
      { id: 'd', text: '`process.nextTick()` has been deprecated in modern Node.js' }
    ],
    correctOptionId: 'b',
    explanation: '`process.nextTick` technically event loop ka part nahi hai; ye microtask queue se bhi pehle current operation ke end par execute hota hai! `setImmediate` check phase mein chalta hai. So "B" pehle aayega fir "A".',
    optionExplanations: {
      a: 'SetImmediate Check phase mein wait karta hai.',
      b: 'Spot on! NextTick sabse urgent VIP queue hoti hai Node.js mein.',
      c: 'Strict deterministic queues hain.',
      d: 'Active core Node.js API hai.'
    },
    memoryTrick: 'NEXT TICK = VIP Line! Event loop ko bolta hai "Ruk, pehle mera kaam nipta!"',
    tags: ['nodejs', 'event-loop', 'nextTick', 'interview']
  },
  {
    topic: 'nodejs',
    subTopic: 'file-system',
    difficulty: 'easy',
    question: 'Which method is recommended best practice for non-blocking asynchronous file reading in Node.js?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '`fs.readFileSync()`' },
      { id: 'b', text: '`fs.promises.readFile()` or `fs.readFile()` with a callback' },
      { id: 'c', text: '`fs.loadFile()`' },
      { id: 'd', text: '`fs.openFileStream()`' }
    ],
    correctOptionId: 'b',
    explanation: '`fs.promises.readFile()` asynchronous hota hai jo event loop ko block nahi karta. `readFileSync()` synchronous hota hai aur poore server ko freeze kar deta hai jab tak file read na ho!',
    optionExplanations: {
      a: '`readFileSync` server freeze kar deta hai, production web server mein anti-pattern hai.',
      b: 'Promises/async-await wala `fs.promises.readFile` clean aur non-blocking hai.',
      c: 'Aisa koi method nahi hota.',
      d: 'Streams ke liye `createReadStream` hota hai.'
    },
    memoryTrick: 'Sync mat lagao varna poora server ruk jayega! Async promises use karo!',
    tags: ['nodejs', 'fs', 'async']
  },
  {
    topic: 'nodejs',
    subTopic: 'streams',
    difficulty: 'interview',
    question: 'Why is using Node.js Streams critical when processing large files (such as a 2GB video or large log file)?',
    codeSnippet: 'const readStream = fs.createReadStream("huge.mp4");\nreadStream.pipe(res);',
    options: [
      { id: 'a', text: 'Streams automatically compress files' },
      { id: 'b', text: 'Streams process data chunk-by-chunk (default 64KB) without loading the entire file into RAM at once' },
      { id: 'c', text: 'Streams reduce CPU usage to exactly 0%' },
      { id: 'd', text: 'Streams are exclusively used for network packets' }
    ],
    correctOptionId: 'b',
    explanation: 'Agar 2GB file ko `fs.readFile` se padhoge toh 2GB RAM ek sath consume ho kar Node crash (`JavaScript heap out of memory`) ho jayega. Streams chunk-by-chunk stream karti hain taaki memory 20-30MB ke constant buffer mein rahe!',
    optionExplanations: {
      a: 'Compression zlib ka kaam hai, streaming chunking ka.',
      b: 'Life saver for memory! Data ko ghut ghut karke peena, ek sath baltie nahi ulatna.',
      c: 'CPU load normal rehta hai.',
      d: 'Files, sockets, HTTP requests sab streams hote hain.'
    },
    memoryTrick: 'Balti bhar ke paani sar pe mat dalo (OOM crash), Nalke se glass bhar bhar ke piyo (STREAMS)!',
    tags: ['nodejs', 'streams', 'performance', 'interview']
  },
  {
    topic: 'nodejs',
    subTopic: 'streams',
    difficulty: 'interview',
    question: 'What is "Backpressure" in Node.js streams and how does `.pipe()` resolve it automatically?',
    codeSnippet: 'readable.pipe(writable);',
    options: [
      { id: 'a', text: 'A condition where the physical storage drive is full' },
      { id: 'b', text: 'A condition where a readable stream produces data faster than a writable stream can consume it, prompting `.pipe()` to pause reading until internal buffers drain' },
      { id: 'c', text: 'An unexpected network socket drop' },
      { id: 'd', text: 'A fatal unhandled exception crash' }
    ],
    correctOptionId: 'b',
    explanation: 'Backpressure tab aati hai jab producer consumer se tez data fekta hai. `.pipe()` internally `drain` event aur pause/resume manage karke RAM overflow hone se bacha leta hai.',
    optionExplanations: {
      a: 'Disk space se alag issue hai.',
      b: 'Exact technical definition! Pipe automatically backpressure balance karta hai.',
      c: 'Network disconnection alag error hai.',
      d: 'Backpressure handle na hone par crash hota hai, par concept producer vs consumer flow balance ka hai.'
    },
    memoryTrick: 'Pipe mein kachra fas gaya? Pani pehle band karo (pause), rasta saaf ho toh fir chalu karo!',
    tags: ['nodejs', 'streams', 'backpressure', 'interview']
  },
  {
    topic: 'nodejs',
    subTopic: 'buffers',
    difficulty: 'medium',
    question: 'What is the primary purpose of the `Buffer` class in Node.js?',
    codeSnippet: 'const buf = Buffer.from("Hello Bhidu", "utf-8");',
    options: [
      { id: 'a', text: 'To directly allocate and manipulate raw binary memory data (bytes) outside the V8 heap' },
      { id: 'b', text: 'To optimize JavaScript array indexing performance' },
      { id: 'c', text: 'To store browser cookies across HTTP sessions' },
      { id: 'd', text: 'To parse JSON data structures' }
    ],
    correctOptionId: 'a',
    explanation: 'JavaScript originally strings aur numbers ke liye thi. Node.js ne TCP streams aur files ke raw binary memory bytes handle karne ke liye `Buffer` class introduce ki.',
    optionExplanations: {
      a: 'Raw fixed-length binary memory bytes chunk! V8 heap ke bahar allocated hota hai.',
      b: 'Array ki speed nahi, binary data handling ke liye hai.',
      c: 'Cookies HTTP headers mein hoti hain.',
      d: 'JSON parser alag hota hai.'
    },
    memoryTrick: 'Raw Binary Bytes ka dabba = BUFFER! 0 aur 1 ka sidha hisaab!',
    tags: ['nodejs', 'buffers']
  },
  {
    topic: 'nodejs',
    subTopic: 'events',
    difficulty: 'medium',
    question: 'Which core module in Node.js is used to create custom event-driven architectures?',
    codeSnippet: 'import { ________ } from "node:events";\nclass MyEmitter extends EventEmitter {}',
    options: [
      { id: 'a', text: 'EventBus' },
      { id: 'b', text: 'EventEmitter' },
      { id: 'c', text: 'EventDispatcher' },
      { id: 'd', text: 'EventHub' }
    ],
    correctOptionId: 'b',
    explanation: '`EventEmitter` Node.js ke saare event-driven modules (HTTP server, streams, sockets) ka foundation base class hai.',
    optionExplanations: {
      a: 'Third-party pattern ho sakta hai, core module EventEmitter hai.',
      b: '`EventEmitter` with `.on()` aur `.emit()` Node.js standard hai.',
      c: 'DOM standard term hai.',
      d: 'Azure/Cloud service name hai.'
    },
    memoryTrick: 'Event fekna hai (.emit) aur sunna hai (.on) toh EventEmitter pakdo!',
    tags: ['nodejs', 'events', 'event-emitter']
  },
  {
    topic: 'nodejs',
    subTopic: 'env',
    difficulty: 'easy',
    question: 'Which global object provides access to system environment variables in Node.js?',
    codeSnippet: 'const port = ________.PORT || 5000;',
    options: [
      { id: 'a', text: 'process.env' },
      { id: 'b', text: 'global.env' },
      { id: 'c', text: 'system.env' },
      { id: 'd', text: 'node.env' }
    ],
    correctOptionId: 'a',
    explanation: '`process.env` global object hai jo OS ke injected environment variables ko store karta hai.',
    optionExplanations: {
      a: '`process.env` standard API hai.',
      b: 'Invalid property.',
      c: 'Invalid property.',
      d: 'Invalid property.'
    },
    memoryTrick: 'System ke raaz jaan ne hain? process.env se poochho!',
    tags: ['nodejs', 'env', 'process']
  },
  {
    topic: 'nodejs',
    subTopic: 'npm',
    difficulty: 'easy',
    question: 'What is the distinction between `dependencies` and `devDependencies` in `package.json`?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Both sections are identical and interchangeable' },
      { id: 'b', text: '`dependencies` are essential packages for running the application in production; `devDependencies` are only needed during development and automated testing' },
      { id: 'c', text: '`devDependencies` are executed specifically on mobile devices' },
      { id: 'd', text: '`dependencies` are free open source packages while `devDependencies` are paid' }
    ],
    correctOptionId: 'b',
    explanation: 'Production build banate waqt `npm install --production` sirf `dependencies` install karta hai, jisse container/server deployment fast aur lightweight rehta hai.',
    optionExplanations: {
      a: 'Deployment bundle size aur security audit mein farak padta hai.',
      b: 'Production runtime vs Dev-only tools! Clean separation.',
      c: 'Absurd option.',
      d: 'Dono open source free packages hote hain.'
    },
    memoryTrick: 'Production mein Express chahiye chalne ke liye (Dependency)! Nodemon sirf developer ki aiyashi ke liye hai (DevDependency)!',
    tags: ['nodejs', 'npm', 'package-json']
  },
  {
    topic: 'nodejs',
    subTopic: 'package-lock',
    difficulty: 'medium',
    question: 'Why is committing `package-lock.json` to version control strongly recommended?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'To artificially inflate repository size' },
      { id: 'b', text: 'To ensure identical dependency versions and exact nested dependency trees across all developer machines and production environments' },
      { id: 'c', text: 'It contains Node.js precompiled machine code binaries' },
      { id: 'd', text: 'To avoid running `npm install` altogether' }
    ],
    correctOptionId: 'b',
    explanation: '`package-lock.json` exact resolved URLs, hashes, aur specific versions lock karta hai taaki "mera machine pe chal raha tha, server pe fatt gaya" wala problem na aaye.',
    optionExplanations: {
      a: 'Size badhana goal nahi hota.',
      b: 'Deterministic reproducible builds across all environments!',
      c: 'JSON text file hoti hai, binary nahi.',
      d: 'Install command `npm ci` isi lock file ko padh kar fast install karta hai.'
    },
    memoryTrick: 'Lock = Tala laga diya version pe! Kal ko naya version aake project nahi phod sakta!',
    tags: ['nodejs', 'npm', 'package-lock']
  },
  {
    topic: 'nodejs',
    subTopic: 'modules',
    difficulty: 'easy',
    question: 'In ES Modules (ESM), which utility function is used to derive the current file directory path (`__dirname` replacement)?',
    codeSnippet: 'import path from "node:path";\nimport { fileURLToPath } from "node:url";\nconst __dirname = path.dirname(________(import.meta.url));',
    options: [
      { id: 'a', text: 'fileURLToPath' },
      { id: 'b', text: 'urlToFolder' },
      { id: 'c', text: 'getDirPath' },
      { id: 'd', text: 'parseUrl' }
    ],
    correctOptionId: 'a',
    explanation: 'ESM mein `__dirname` aur `__filename` globals nahi hote. Unhe banane ke liye `fileURLToPath(import.meta.url)` use kiya jata hai.',
    optionExplanations: {
      a: 'Standard Node.js url module utility function.',
      b: 'Invalid function name.',
      c: 'Invalid function name.',
      d: 'Invalid function name.'
    },
    memoryTrick: 'File URL ko Path banao = fileURLToPath!',
    tags: ['nodejs', 'esm', 'modules']
  },
  {
    topic: 'nodejs',
    subTopic: 'worker-threads',
    difficulty: 'interview',
    question: 'Which Node.js feature should be used for CPU-intensive tasks (such as encryption, image resizing, or large data parsing) to avoid blocking the Event Loop?',
    codeSnippet: 'import { Worker } from "node:worker_threads";',
    options: [
      { id: 'a', text: 'setTimeout(fn, 0)' },
      { id: 'b', text: 'Worker Threads (`worker_threads` module)' },
      { id: 'c', text: 'Promise.resolve()' },
      { id: 'd', text: 'setInterval' }
    ],
    correctOptionId: 'b',
    explanation: 'Promise aur setTimeout CPU computation ko alag thread pe nahi bhejte, wo main thread ko hi freeze karenge. `worker_threads` actual parallel OS threads create karke CPU heavy work background mein execute karta hai.',
    optionExplanations: {
      a: 'setTimeout task ko sirf delay karta hai, chalta main thread par hi hai.',
      b: 'True multi-threading for CPU bound tasks in Node.js!',
      c: 'Promise bhi main thread pe compute hota hai.',
      d: 'Interval main thread freeze kar dega.'
    },
    memoryTrick: 'I/O ke liye async kaafi hai, lekin CPU mining ke liye WORKER THREADS bulao!',
    tags: ['nodejs', 'worker-threads', 'performance', 'interview']
  },
  {
    topic: 'nodejs',
    subTopic: 'cluster',
    difficulty: 'interview',
    question: 'Which built-in Node.js module allows you to scale application processes across all CPU cores of a multi-core machine?',
    codeSnippet: 'import cluster from "node:cluster";\nimport os from "node:os";\nconst numCPUs = os.cpus().length;',
    options: [
      { id: 'a', text: 'cluster' },
      { id: 'b', text: 'multiprocess' },
      { id: 'c', text: 'loadbalancer' },
      { id: 'd', text: 'cpu-scale' }
    ],
    correctOptionId: 'a',
    explanation: '`cluster` module parent master process se multiple child worker processes fork karta hai jo same server port share karte hain, multi-core scaling enable karte hue.',
    optionExplanations: {
      a: '`node:cluster` official built-in clustering module hai.',
      b: 'Python module name hai.',
      c: 'Nginx ya cloud tool hota hai.',
      d: 'Fake name.'
    },
    memoryTrick: 'Single process se 8 core ka laptop waste ho raha hai? CLUSTER banao aur 8 workers khade karo!',
    tags: ['nodejs', 'cluster', 'scaling', 'interview']
  },
  {
    topic: 'nodejs',
    subTopic: 'error-handling',
    difficulty: 'interview',
    question: 'Which process-level event is emitted in Node.js when a Promise rejects and has no `.catch()` handler attached?',
    codeSnippet: 'process.on("________", (reason, promise) => {\n  console.error("Unhandled rejection at:", promise);\n});',
    options: [
      { id: 'a', text: 'uncaughtException' },
      { id: 'b', text: 'unhandledRejection' },
      { id: 'c', text: 'promiseError' },
      { id: 'd', text: 'crashWarning' }
    ],
    correctOptionId: 'b',
    explanation: '`unhandledRejection` tab fire hota hai jab koi Promise reject hoti hai aur execution dauran koi reject handler attach nahi hota. Synchronous uncaught errors ke liye `uncaughtException` hota hai.',
    optionExplanations: {
      a: '`uncaughtException` synchronous unhandled errors ke liye hota hai.',
      b: '`unhandledRejection` asynchronous rejected promises ke liye standard process event hai.',
      c: 'Invalid event name.',
      d: 'Invalid event name.'
    },
    memoryTrick: 'Promise reject hua aur catch nahi kiya? unhandledRejection pakdega!',
    tags: ['nodejs', 'error-handling', 'promises', 'interview']
  },
  {
    topic: 'nodejs',
    subTopic: 'globals',
    difficulty: 'easy',
    question: 'While web browsers provide the `window` object, which object represents the top-level global scope in Node.js?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'window' },
      { id: 'b', text: 'global' },
      { id: 'c', text: 'document' },
      { id: 'd', text: 'client' }
    ],
    correctOptionId: 'b',
    explanation: 'Node.js mein global scope `global` object hota hai. Modern JS mein universal access ke liye `globalThis` use hota hai jo browser aur Node dono mein chal jata hai.',
    optionExplanations: {
      a: 'Browser mein window hota hai, Node mein window undefined hota hai.',
      b: '`global` Node.js ka primary top-level namespace hai.',
      c: 'Node mein DOM/document nahi hota.',
      d: 'Invalid object.'
    },
    memoryTrick: 'Duniya gol hai, Node ka raja GLOBAL hai!',
    tags: ['nodejs', 'globals', 'basics']
  },
  {
    topic: 'nodejs',
    subTopic: 'event-loop',
    difficulty: 'interview',
    question: 'What is the correct sequential order of the 6 phases in the Libuv Event Loop?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Timers -> Pending Callbacks -> Idle/Prepare -> Poll -> Check -> Close Callbacks' },
      { id: 'b', text: 'Poll -> Timers -> Check -> Close -> Idle -> Pending' },
      { id: 'c', text: 'Close -> Timers -> Poll -> Check -> Idle -> Pending' },
      { id: 'd', text: 'Check -> Poll -> Timers -> Close -> Pending -> Idle' }
    ],
    correctOptionId: 'a',
    explanation: 'Event loop order: 1. Timers (setTimeout/setInterval) -> 2. Pending I/O callbacks -> 3. Idle/Prepare -> 4. Poll (incoming connections/data) -> 5. Check (setImmediate) -> 6. Close callbacks (socket.on("close")).',
    optionExplanations: {
      a: 'Perfect official Node.js documentation sequence!',
      b: 'Incorrect order.',
      c: 'Incorrect order.',
      d: 'Incorrect order.'
    },
    memoryTrick: 'T-P-I-P-C-C: Timers se shuru karo, Close pe khatam karo!',
    tags: ['nodejs', 'event-loop', 'phases', 'interview']
  },
  {
    topic: 'nodejs',
    subTopic: 'crypto',
    difficulty: 'medium',
    question: 'Which method in Node.js\'s built-in `crypto` module generates cryptographically strong pseudo-random data for auth tokens?',
    codeSnippet: 'import crypto from "node:crypto";\nconst token = crypto.________(32).toString("hex");',
    options: [
      { id: 'a', text: 'Math.random' },
      { id: 'b', text: 'randomBytes' },
      { id: 'c', text: 'generateKey' },
      { id: 'd', text: 'createSalt' }
    ],
    correctOptionId: 'b',
    explanation: '`crypto.randomBytes(size)` cryptographically strong pseudo-random bytes generate karta hai jo auth tokens ke liye secure hote hain.',
    optionExplanations: {
      a: '`Math.random()` predictable hota hai aur security vulnerabilities create karta hai.',
      b: '`randomBytes` industry standard secure entropy source hai.',
      c: '`generateKey` WebCrypto API method hai.',
      d: 'Invalid method.'
    },
    memoryTrick: 'Security chahiye toh Math.random bhool jao, crypto.randomBytes lagao!',
    tags: ['nodejs', 'crypto', 'security']
  },
  {
    topic: 'nodejs',
    subTopic: 'path',
    difficulty: 'easy',
    question: 'Which method safely concatenates file paths across different operating systems (Windows `\\` vs POSIX `/`)?',
    codeSnippet: 'import path from "node:path";\nconst fullPath = path.________("src", "utils", "file.js");',
    options: [
      { id: 'a', text: 'concat' },
      { id: 'b', text: 'join' },
      { id: 'c', text: 'append' },
      { id: 'd', text: 'merge' }
    ],
    correctOptionId: 'b',
    explanation: '`path.join()` operating system ke separator ke hisaab se path normalise karke safely join karta hai.',
    optionExplanations: {
      a: 'String concat slashes gadbad kar deta hai.',
      b: '`path.join()` Windows aur Linux dono par compatible path banata hai.',
      c: 'Invalid method.',
      d: 'Invalid method.'
    },
    memoryTrick: 'Slashes ka jhanjhat chhod, path.join() se jod!',
    tags: ['nodejs', 'path', 'basics']
  },
  {
    topic: 'nodejs',
    subTopic: 'child-process',
    difficulty: 'interview',
    question: 'What is the key difference between `exec` and `spawn` in the Node.js `child_process` module?',
    codeSnippet: 'import { exec, spawn } from "node:child_process";',
    options: [
      { id: 'a', text: '`exec` buffers the entire command output in memory before passing it to a callback; `spawn` streams the output continuously via events' },
      { id: 'b', text: 'Both methods perform identically with no differences' },
      { id: 'c', text: '`spawn` operates exclusively on Windows environments' },
      { id: 'd', text: '`exec` inevitably causes memory leaks' }
    ],
    correctOptionId: 'a',
    explanation: '`exec` command ko subshell mein run karta hai aur maxBuffer limit ke sath output buffer mein deta hai (small commands ke liye). `spawn` directly process launch karta hai aur streams deta hai (large output ya real-time progress ke liye).',
    optionExplanations: {
      a: 'Accurate distinction! Chhoti commands = exec, Lamba output/streaming = spawn.',
      b: 'Buffer vs Stream ka fundamental difference hai.',
      c: 'Cross-platform chalta hai.',
      d: 'Default maxBuffer 1MB exceed hone par error throw karta hai, leak nahi.'
    },
    memoryTrick: 'Chhota kaam toh EXEC, Badi streaming ho toh SPAWN!',
    tags: ['nodejs', 'child-process', 'interview']
  },
  {
    topic: 'nodejs',
    subTopic: 'http',
    difficulty: 'easy',
    question: 'Which method starts a Node.js HTTP server listening for incoming network connections on a designated port?',
    codeSnippet: 'import http from "node:http";\nconst server = http.createServer((req, res) => res.end("Hello"));\nserver.________(3000, () => console.log("Running"));',
    options: [
      { id: 'a', text: 'bind' },
      { id: 'b', text: 'listen' },
      { id: 'c', text: 'run' },
      { id: 'd', text: 'start' }
    ],
    correctOptionId: 'b',
    explanation: '`server.listen(port, callback)` specify kiye gaye port par incoming TCP connections ko listen karna start karta hai.',
    optionExplanations: {
      a: 'Socket binding internal step hota hai, public method listen hai.',
      b: 'Standard Node.js server listen method.',
      c: 'Invalid method.',
      d: 'Invalid method.'
    },
    memoryTrick: 'Server kaan lagaye baitha hai = LISTEN!',
    tags: ['nodejs', 'http', 'server']
  }
];
