export const mernQuestions = [
  {
    topic: 'mern',
    subTopic: 'architecture',
    difficulty: 'interview',
    question: 'What is the standard end-to-end data flow in MERN stack architecture when a user submits data on the UI?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'React -> Direct MongoDB connection -> Express -> Node' },
      { id: 'b', text: 'React UI (HTTP request via fetch/axios) -> Express Server (Routes -> Middleware -> Controllers) -> Mongoose ODM -> MongoDB Database -> JSON response back to React State' },
      { id: 'c', text: 'MongoDB trigger -> React state update -> Node terminal' },
      { id: 'd', text: 'Browser HTML -> Node compiler -> SQL DB' }
    ],
    correctOptionId: 'b',
    explanation: 'Client (React) kabhi directly database se connect nahi karta security reasons ki wajah se. Request Express backend par aati hai, validate hoti hai, Mongoose model MongoDB se baat karta hai, aur JSON payload wapas React ko return hota hai.',
    optionExplanations: {
      a: 'Client side se DB direct connect karna security disaster hai.',
      b: 'Flawless production architecture description! Client -> API Server -> DB -> Client.',
      c: 'Reverse order nahi hota standard web flow mein.',
      d: 'MERN stack mein MongoDB hota hai SQL nahi.'
    },
    memoryTrick: 'React ne aawaz lagayi (HTTP) -> Express ne suni (Controller) -> Mongoose ne tijori kholi (MongoDB) -> Maal React ko wapas!',
    tags: ['mern', 'architecture', 'fullstack', 'interview']
  },
  {
    topic: 'mern',
    subTopic: 'security',
    difficulty: 'interview',
    question: 'Where is the most secure place to store a JWT (JSON Web Token) on the client side to protect against XSS (Cross-Site Scripting) attacks?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'In browser `localStorage`' },
      { id: 'b', text: 'In an `httpOnly` and `secure` HTTP Cookie' },
      { id: 'c', text: 'In an HTML DOM data-attribute' },
      { id: 'd', text: 'In URL query parameters' }
    ],
    correctOptionId: 'b',
    explanation: '`localStorage` ko malicious JavaScript (XSS script injection) easily `localStorage.getItem("token")` se chura sakti hai. `httpOnly` cookie ko client-side JavaScript access hi nahi kar sakti, isiliye XSS token theft impossible ho jata hai!',
    optionExplanations: {
      a: '`localStorage` XSS attacks ke aage completely exposed hota hai.',
      b: 'Gold standard security! httpOnly + secure + sameSite cookies.',
      c: 'DOM inspection se koi bhi script chura legi.',
      d: 'URL logs, browser history aur shoulder-surfing se leak ho jata hai.'
    },
    memoryTrick: 'LocalStorage = Khula Tijori! HttpOnly Cookie = Chashma pehnaye bina band tijori jise JS chhoo bhi nahi sakti!',
    tags: ['mern', 'security', 'jwt', 'cookies', 'interview']
  },
  {
    topic: 'mern',
    subTopic: 'deployment',
    difficulty: 'medium',
    question: 'What is the standard production deployment setup for a React Vite application and an Express backend?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Running React via `npm run dev` continuously in production' },
      { id: 'b', text: 'Compiling the React app into static HTML/CSS/JS via `npm run build` served via a CDN or static web host, while hosting the Express API on a dedicated Node server' },
      { id: 'c', text: 'Storing the compiled React build directly inside MongoDB' },
      { id: 'd', text: 'Installing Node.js inside the client web browser' }
    ],
    correctOptionId: 'b',
    explanation: 'React runtime framework nahi hai; build time par wo pure static assets (JS, CSS, HTML) ban jata hai. Production mein static files Vercel/Netlify/S3/CDN se serve hoti hain aur backend Node/Express server par APIs serve hoti hain.',
    optionExplanations: {
      a: 'Vite dev server slow hota hai aur memory leak karega production mein.',
      b: 'Production-grade setup! Build static bundles + Node API service.',
      c: 'Database data ke liye hota hai static files ke liye nahi.',
      d: 'Node.js server OS runtime hai, browser mein nahi chalta.'
    },
    memoryTrick: 'React ka kacha code dev mein, Pakka maal (dist build) prod mein!',
    tags: ['mern', 'deployment', 'production']
  },
  {
    topic: 'mern',
    subTopic: 'api-communication',
    difficulty: 'easy',
    question: 'What is the standard state management pattern when requesting data from an Express backend within a React component?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Relying exclusively on `console.log`' },
      { id: 'b', text: 'Maintaining three distinct states: `data`, `loading` (boolean), and `error` (null/string)' },
      { id: 'c', text: 'Displaying a browser alert popup on each request' },
      { id: 'd', text: 'Triggering a full window reload after every API call' }
    ],
    correctOptionId: 'b',
    explanation: 'Standard UX pattern: Call start par `loading: true, error: null`, success par `data: res, loading: false`, aur catch block mein `error: err.message, loading: false`.',
    optionExplanations: {
      a: 'User ko screen par feedback chahiye console nahi.',
      b: 'Trifecta of async UI state! Data, Loading, Error.',
      c: 'Annoying UX anti-pattern.',
      d: 'SPA (Single Page App) ka matlab hi hai bina reload ke data update karna.'
    },
    memoryTrick: 'Teen Bhai: Data, Loading aur Error! Teeno ko sambhalo, app mast chalegi!',
    tags: ['mern', 'react', 'api', 'state']
  },
  {
    topic: 'mern',
    subTopic: 'cors',
    difficulty: 'easy',
    question: 'When a React dev server (`localhost:5173`) calls an Express backend (`localhost:5000`), why is a CORS error triggered?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Because different port numbers cause the browser to treat them as distinct Origins (Protocol + Domain + Port)' },
      { id: 'b', text: 'Because MongoDB failed to connect' },
      { id: 'c', text: 'Because React is outdated' },
      { id: 'd', text: 'Because the local Wi-Fi connection is down' }
    ],
    correctOptionId: 'a',
    explanation: 'Same-Origin Policy ke hisaab se protocol, domain aur port teeno exact match hone chahiye. 5173 aur 5000 alag ports hain, isiliye browser backend se `cors` headers demand karta hai.',
    optionExplanations: {
      a: 'Same-Origin Policy rule! Different port = Different origin.',
      b: 'CORS browser security layer ka issue hai, DB ka nahi.',
      c: 'React version se iska koi lena dena nahi.',
      d: 'Localhost calls offline bhi hoti hain.'
    },
    memoryTrick: 'Ghar ka number (port) alag hua toh browser bolega "Pehle permission letter (CORS) dikhao!"',
    tags: ['mern', 'cors', 'security']
  },
  {
    topic: 'mern',
    subTopic: 'vite-proxy',
    difficulty: 'medium',
    question: 'In a React Vite development setup, what configuration forwards `/api` requests to `http://localhost:5000` without triggering CORS issues?',
    codeSnippet: '// vite.config.js\nserver: {\n  proxy: {\n    "/api": "http://localhost:5000"\n  }\n}',
    options: [
      { id: 'a', text: 'Vite Dev Server Proxy' },
      { id: 'b', text: 'Redux DevTools' },
      { id: 'c', text: 'Babel Preset' },
      { id: 'd', text: 'React Router Proxy' }
    ],
    correctOptionId: 'a',
    explanation: 'Vite dev server ka built-in reverse proxy browser se aayi `/api` requests ko Node-to-Node backend par forward karta hai. Browser ko lagta hai request same origin par hi ja rahi hai!',
    optionExplanations: {
      a: 'Vite proxy local dev workflow ko seamless banata hai bina backend CORS headache ke.',
      b: 'Redux state debugging ke liye hota hai.',
      c: 'Babel JS transpiler hai.',
      d: 'React Router client-side routing karta hai, proxy nahi.'
    },
    memoryTrick: 'Proxy = Bicholiya! React Vite dev server khud backend se baat karke data la deta hai!',
    tags: ['mern', 'vite', 'proxy']
  },
  {
    topic: 'mern',
    subTopic: 'auth-flow',
    difficulty: 'interview',
    question: 'What is the standard design pattern in React to implement Protected Routes (e.g. `/dashboard`, `/profile`)?',
    codeSnippet: 'const ProtectedRoute = ({ children }) => {\n  const { user } = useAuth();\n  return user ? children : <Navigate to="/login" />;\n};',
    options: [
      { id: 'a', text: 'Password-protecting the static HTML file' },
      { id: 'b', text: 'A wrapper component that verifies auth state from global Auth Context and redirects unauthenticated users via `<Navigate to="/login" />`' },
      { id: 'c', text: 'Sending a command to shut down the client browser' },
      { id: 'd', text: 'Encrypting client-side JavaScript source code' }
    ],
    correctOptionId: 'b',
    explanation: 'React Router mein `<ProtectedRoute>` wrapper auth state verify karta hai. Par saath hi Express backend par bhi JWT middleware hona mandatory hai kyunki client-side route protection sirf UI guard hota hai!',
    optionExplanations: {
      a: 'Nonsense option.',
      b: 'Clean declarative React Router v6 protection wrapper!',
      c: 'Server browser band nahi kar sakta.',
      d: 'Frontend code hamesha client machine pe decrypt hoke hi chalta hai.'
    },
    memoryTrick: 'Darwaze pe bouncer khada karo (ProtectedRoute)! Id card nahi hai toh bouncer login page bhej dega!',
    tags: ['mern', 'auth', 'react-router', 'interview']
  },
  {
    topic: 'mern',
    subTopic: 'env-variables',
    difficulty: 'easy',
    question: 'In a Vite React application, which prefix must environment variables start with to be exposed in the client-side bundle?',
    codeSnippet: 'const apiUrl = import.meta.env._________API_URL;',
    options: [
      { id: 'a', text: 'REACT_APP_' },
      { id: 'b', text: 'VITE_' },
      { id: 'c', text: 'NEXT_PUBLIC_' },
      { id: 'd', text: 'NODE_ENV_' }
    ],
    correctOptionId: 'b',
    explanation: 'Vite sirf wahi variables bundle mein expose karta hai jo `VITE_` se start hote hain (e.g. `VITE_API_URL`) taaki sensitive server secrets accidentally client bundle mein leak na hon!',
    optionExplanations: {
      a: '`REACT_APP_` puraane Create React App (CRA) ka prefix tha.',
      b: '`VITE_` official Vite standard prefix hai.',
      c: '`NEXT_PUBLIC_` Next.js framework ka prefix hai.',
      d: 'Invalid prefix.'
    },
    memoryTrick: 'Vite mein kaam kar rahe ho toh VITE_ ka thappa lagao!',
    tags: ['mern', 'vite', 'env']
  },
  {
    topic: 'mern',
    subTopic: 'nosql-injection',
    difficulty: 'interview',
    question: 'How does a NoSQL Injection vulnerability occur in a MERN stack application, and what is the best mitigation?',
    codeSnippet: '// Attacker sends payload: { "username": "admin", "password": { "$ne": null } }\nconst user = await User.findOne({ username: req.body.username, password: req.body.password });',
    options: [
      { id: 'a', text: 'Due to the absence of relational SQL tables' },
      { id: 'b', text: 'When unsanitized user inputs are passed directly into MongoDB query objects, allowing attackers to inject query operators (`$gt`, `$ne`); mitigated using `mongo-sanitize` and schema validation' },
      { id: 'c', text: 'Due to Node.js memory exhaustion' },
      { id: 'd', text: 'NoSQL injection does not exist in MongoDB' }
    ],
    correctOptionId: 'b',
    explanation: 'Attacker password field mein `{ "$ne": null }` bhej kar password match check bypass kar sakta hai. `express-mongo-sanitize` middleware `$` aur `.` characters ko input se strip karta hai.',
    optionExplanations: {
      a: 'NoSQL collections use karta hai, injection code sanitization flaw hai.',
      b: 'Spot on! Express request bodies ko sanitize karna aur Mongoose type validation enforce karna zaroori hai.',
      c: 'Memory overflow alag issue hai.',
      d: 'NoSQL injection bohot dangerous aur real vulnerability hai.'
    },
    memoryTrick: 'Dollar ($) ka nishaan user input se chheen lo varna MongoDB operator samajh kar sab bypass kar dega!',
    tags: ['mern', 'security', 'nosql-injection', 'interview']
  },
  {
    topic: 'mern',
    subTopic: 'performance',
    difficulty: 'medium',
    question: 'Why should `mongoose.connect()` be called once at server startup rather than on every individual API request?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'It reuses the internal connection pool, eliminating TCP handshake latency and preventing database connection exhaustion' },
      { id: 'b', text: 'It speeds up server restart times' },
      { id: 'c', text: 'Connecting per request is illegal in Node.js' },
      { id: 'd', text: 'It automatically creates database backups' }
    ],
    correctOptionId: 'a',
    explanation: 'Mongoose default connection pool (default 100 sockets) maintain karta hai. Har request pe connect karne se TCP handshake overhead aayega aur MongoDB ke max connections exhaust ho jayenge.',
    optionExplanations: {
      a: 'Connection Pooling! Ek baar connect karo aur poora server pool reuse karega.',
      b: 'Startup time se connection pool ka relation nahi.',
      c: 'Ek baar connect karna hi official recommended pattern hai.',
      d: 'Backup mongodump ka kaam hai.'
    },
    memoryTrick: 'Pani ki pipe ek baar jodo, baar baar kholo-band mat karo!',
    tags: ['mern', 'mongoose', 'performance', 'connection-pool']
  },
  {
    topic: 'mern',
    subTopic: 'validation',
    difficulty: 'medium',
    question: 'Where should input validation (e.g. valid email, strong password) be implemented in a production MERN application?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Exclusively on the frontend (React)' },
      { id: 'b', text: 'Exclusively on the backend (Express)' },
      { id: 'c', text: 'Both: Frontend for instant user feedback/UX, and Backend for authoritative security and data integrity' },
      { id: 'd', text: 'Validation is unnecessary in modern web applications' }
    ],
    correctOptionId: 'c',
    explanation: 'Client-side validation bypass ki ja sakti hai (via Postman ya curl). Server-side validation security ensure karti hai, aur client-side validation user ko bina server roundtrip ke turant error batati hai.',
    optionExplanations: {
      a: 'Client validation ko Postman se easily bypass kiya ja sakta hai.',
      b: 'Sirf backend par rakhne se user ko har typo ke liye server call karni padegi.',
      c: 'Best practice: Frontend for UX, Backend for Security!',
      d: 'Bina validation ke database mein kachra bhar jayega.'
    },
    memoryTrick: 'Aage bhi guard (Frontend UI), peeche bhi taala (Backend Server)!',
    tags: ['mern', 'validation', 'best-practices']
  },
  {
    topic: 'mern',
    subTopic: 'refresh-tokens',
    difficulty: 'interview',
    question: 'Why is a dual-token pattern (short-lived Access Token + long-lived Refresh Token) utilized in authentication systems?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'To increase database storage utilization' },
      { id: 'b', text: 'To balance security and user experience: a stolen access token expires quickly (e.g. 15m), while the refresh token enables seamless session renewal without re-entering credentials' },
      { id: 'c', text: 'Because JWT does not support single token architectures' },
      { id: 'd', text: 'To deallocate server memory' }
    ],
    correctOptionId: 'b',
    explanation: 'Stateless JWT ko revoke karna mushkil hota hai. Short expiry (15m) blast radius kam karti hai, aur Refresh token DB/Redis mein store karke kisi compromised device ko revoke (logout) kiya ja sakta hai.',
    optionExplanations: {
      a: 'Storage optimization ka mudda nahi hai.',
      b: 'Industry gold standard auth architecture! Short access token + secure refresh token.',
      c: 'JWT format kisi bhi expiry time ke sath ban sakta hai.',
      d: 'Token payload crypto signature hota hai.'
    },
    memoryTrick: 'Access Token = Cinema Hall ka Ticket (15 min)! Refresh Token = VIP Pass (Naya ticket lene ke liye)!',
    tags: ['mern', 'auth', 'jwt', 'security', 'interview']
  },
  {
    topic: 'mern',
    subTopic: 'file-storage',
    difficulty: 'interview',
    question: 'Why is storing user-uploaded media files directly inside MongoDB documents considered an anti-pattern in production MERN applications?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Because MongoDB deletes image binaries automatically' },
      { id: 'b', text: 'Because it risks hitting the 16MB document limit, bloats database backups, and degrades RAM cache; media should be stored in Object Storage (S3/Cloudinary) with only URLs in MongoDB' },
      { id: 'c', text: 'Because images can only be stored in SQL relational databases' },
      { id: 'd', text: 'Because Node.js cannot process image buffers' }
    ],
    correctOptionId: 'b',
    explanation: 'Database text aur queryable data ke liye optimize hota hai, heavy binary blobs ke liye nahi. Media files Cloudinary/AWS S3 par store karke CDN se fast deliver hoti hain aur DB lightweight rehta hai.',
    optionExplanations: {
      a: 'Delete nahi karta.',
      b: 'Clean cloud architecture! Files go to S3/Cloud Storage, metadata/URL goes to MongoDB.',
      c: 'SQL mein bhi blob anti-pattern mana jata hai.',
      d: 'Node.js buffers natively files handle karte hain.'
    },
    memoryTrick: 'Tijori (DB) mein photo album mat thunso! Photo wall (Cloudinary/S3) pe tangao, tijori mein bas location likh lo!',
    tags: ['mern', 'file-storage', 'architecture', 'interview']
  },
  {
    topic: 'mern',
    subTopic: 'concurrency',
    difficulty: 'interview',
    question: 'In an e-commerce MERN application, what technique prevents race conditions when two users simultaneously purchase the last remaining item in stock?',
    codeSnippet: 'await Product.updateOne(\n  { _id: productId, stock: { $gt: 0 } },\n  { $inc: { stock: -1 } }\n);',
    options: [
      { id: 'a', text: 'Adding a 5-second `setTimeout` in the React frontend' },
      { id: 'b', text: 'Using an Atomic Conditional Update (`{ stock: { $gt: 0 } }` with `{ $inc: { stock: -1 } }`)' },
      { id: 'c', text: 'Restarting the database server' },
      { id: 'd', text: 'Allowing stock to drop to negative values' }
    ],
    correctOptionId: 'b',
    explanation: 'Pehle read karke check karna `if (product.stock > 0)` aur fir alag save karna race condition create karta hai. Atomic query condition ke sath ek hi step mein document lock karke execute karti hai, isiliye negative stock impossible ho jata hai.',
    optionExplanations: {
      a: 'Client side timeout se race condition solve nahi hoti.',
      b: 'Atomic Conditional Update! Sirf wahi update pass hoga jisko stock > 0 mila.',
      c: 'Server crash solution nahi hota.',
      d: 'Negative stock business loss karwayega.'
    },
    memoryTrick: 'Pehle check fir update mat karo! Ek hi hath mein $gt: 0 check aur $inc: -1 maar do!',
    tags: ['mern', 'concurrency', 'race-condition', 'interview']
  },
  {
    topic: 'mern',
    subTopic: 'api-design',
    difficulty: 'easy',
    question: 'According to RESTful conventions, which HTTP method is used to completely update/replace a resource (e.g. user profile at `/api/users/123`)?',
    codeSnippet: 'PUT /api/users/123',
    options: [
      { id: 'a', text: 'GET' },
      { id: 'b', text: 'PUT' },
      { id: 'c', text: 'POST' },
      { id: 'd', text: 'DELETE' }
    ],
    correctOptionId: 'b',
    explanation: '`PUT` idempotent complete replacement ke liye hota hai. Partial field updates ke liye `PATCH` use hota hai.',
    optionExplanations: {
      a: '`GET` sirf data retrieve karne ke liye hota hai (read-only).',
      b: '`PUT` resource update/replace ke liye standard method hai.',
      c: '`POST` naya resource create karne ke liye hota hai.',
      d: '`DELETE` resource remove karne ke liye hota hai.'
    },
    memoryTrick: 'Pura item replace karna hai? PUT karo! Chhota part change karna hai? PATCH maro!',
    tags: ['mern', 'rest', 'http-methods']
  },
  {
    topic: 'mern',
    subTopic: 'monorepo',
    difficulty: 'medium',
    question: 'Which package allows running frontend and backend npm development scripts concurrently in a single terminal?',
    codeSnippet: '"scripts": {\n  "dev": "concurrently \\"npm run server\\" \\"npm run client\\""\n}',
    options: [
      { id: 'a', text: 'concurrently' },
      { id: 'b', text: 'parallel-js' },
      { id: 'c', text: 'multi-run' },
      { id: 'd', text: 'node-sync' }
    ],
    correctOptionId: 'a',
    explanation: '`concurrently` ek single terminal mein multiple npm scripts ko parallel run karta hai with color-coded prefix labels.',
    optionExplanations: {
      a: '`concurrently` industry standard developer tool hai full-stack dev scripts ke liye.',
      b: 'Invalid package name.',
      c: 'Invalid package name.',
      d: 'Invalid package name.'
    },
    memoryTrick: 'Ek sath dono ko daudana hai? CONCURRENTLY bulao!',
    tags: ['mern', 'tooling', 'concurrently']
  },
  {
    topic: 'mern',
    subTopic: 'pagination',
    difficulty: 'medium',
    question: 'How is server-side pagination calculated and implemented in MongoDB with Express?',
    codeSnippet: 'const page = parseInt(req.query.page) || 1;\nconst limit = 10;\nconst skip = (page - 1) * limit;\nconst items = await Item.find().skip(________).limit(________);',
    options: [
      { id: 'a', text: 'skip(skip).limit(limit)' },
      { id: 'b', text: 'skip(page).limit(page)' },
      { id: 'c', text: 'skip(100).limit(0)' },
      { id: 'd', text: 'skip(limit).limit(skip)' }
    ],
    correctOptionId: 'a',
    explanation: 'Formula: `skip = (page - 1) * limit`. Example: Page 2 ke liye 10 items skip honge aur agle 10 items limit honge.',
    optionExplanations: {
      a: 'Standard offset pagination formula for MongoDB and Express.',
      b: 'Page count pass karne se calculation wrong ho jayegi.',
      c: 'Arbitrary numbers hain.',
      d: 'Parameters interchange kar diye.'
    },
    memoryTrick: 'Page 1 par 0 chhodna hai, Page 2 par 10 chhodna hai = (page - 1) * limit!',
    tags: ['mern', 'pagination', 'mongodb']
  },
  {
    topic: 'mern',
    subTopic: 'websockets',
    difficulty: 'interview',
    question: 'For real-time bi-directional features (such as live chat or instant quiz updates), what is preferred over HTTP polling in the MERN stack?',
    codeSnippet: 'import { Server } from "socket.io";',
    options: [
      { id: 'a', text: 'WebSockets (e.g. Socket.io)' },
      { id: 'b', text: 'CSS Keyframe Animations' },
      { id: 'c', text: 'LocalStorage polling' },
      { id: 'd', text: 'FTP connections' }
    ],
    correctOptionId: 'a',
    explanation: 'WebSockets single persistent full-duplex TCP connection establish karte hain, jisse server bina client ke pooche turant data push kar sakta hai (ultra-low latency).',
    optionExplanations: {
      a: 'Full duplex bi-directional communication between React client and Node server!',
      b: 'Styling layer hai, network nahi.',
      c: 'Polling battery aur server bandwidth waste karti hai.',
      d: 'File transfer protocol hai.'
    },
    memoryTrick: 'Baar baar darwaza mat khatkhatao (HTTP), direct phone line jodo (WebSockets)!',
    tags: ['mern', 'websockets', 'real-time', 'interview']
  },
  {
    topic: 'mern',
    subTopic: 'seo',
    difficulty: 'interview',
    question: 'Why is search engine optimization (SEO) challenging for pure Client-Side Rendered (CSR) React applications, and what is the standard architectural solution?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Because search engine crawlers ban React apps' },
      { id: 'b', text: 'Because initial HTML payloads are virtually empty (`<div id="root"></div>`) and require JavaScript execution; solved by Server-Side Rendering (SSR/Next.js) or pre-rendering' },
      { id: 'c', text: 'Because MongoDB does not support search indexes' },
      { id: 'd', text: 'Because search engines cannot parse CSS files' }
    ],
    correctOptionId: 'b',
    explanation: 'Search crawlers ko initial HTML response mein khali div milta hai agar crawler heavy JS execute na kare. Server-Side Rendering (SSR) server par hi HTML generate karke crawlers ko ready-made content deta hai.',
    optionExplanations: {
      a: 'Googlebot JS execute karta hai lekin crawl budget aur speed par asar padta hai.',
      b: 'CSR vs SSR core interview question! Empty root div vs Server-rendered HTML.',
      c: 'DB indexing alag concern hai.',
      d: 'CSS se SEO ka content reading relation nahi.'
    },
    memoryTrick: 'Khali lifafa bheja (CSR empty root div) toh daakiya (Google) kya padhega? Pura patra likh ke bhejo (SSR)!',
    tags: ['mern', 'seo', 'ssr', 'interview']
  },
  {
    topic: 'mern',
    subTopic: 'state-management',
    difficulty: 'medium',
    question: 'Which popular library is widely used in MERN applications to manage server state, handle request caching, deduplication, and background refetching?',
    codeSnippet: 'const { data, isLoading } = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });',
    options: [
      { id: 'a', text: 'TanStack Query (React Query)' },
      { id: 'b', text: 'jQuery' },
      { id: 'c', text: 'Lodash' },
      { id: 'd', text: 'Bootstrap' }
    ],
    correctOptionId: 'a',
    explanation: 'TanStack Query (React Query) server-state management library hai jo caching, deduplication, background synchronization, aur pagination automatically handle karti hai.',
    optionExplanations: {
      a: 'Modern standard for server state in React applications.',
      b: 'Old DOM library.',
      c: 'Utility helper library.',
      d: 'CSS UI library.'
    },
    memoryTrick: 'API ka maal cache karna hai aur automatic sync rakhna hai? REACT QUERY zindabad!',
    tags: ['mern', 'react-query', 'state-management']
  }
];
