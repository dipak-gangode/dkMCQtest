export const expressQuestions = [
  {
    topic: 'express',
    subTopic: 'middleware',
    difficulty: 'interview',
    question: 'What is a Middleware function in Express.js and what happens if `next()` is not called inside it?',
    codeSnippet: 'app.use((req, res, next) => {\n  console.log("Request received");\n  // if next() is not called:\n});',
    options: [
      { id: 'a', text: 'The Express server crashes immediately' },
      { id: 'b', text: 'The request hangs indefinitely and the client times out because execution is never transferred to the next handler' },
      { id: 'c', text: 'The request automatically completes with a 200 OK status' },
      { id: 'd', text: 'The server restarts automatically' }
    ],
    correctOptionId: 'b',
    explanation: 'Middleware functions pipeline mein chain hote hain. Agar middleware na response end kare (`res.send/json`) aur na hi `next()` call kare, toh request pipeline wahi fas jati hai aur browser loading ghumata reh jata hai!',
    optionExplanations: {
      a: 'Server crash nahi hota, bas socket open rehta hai.',
      b: 'Classic Express trap! Next nahi bola toh aage ka rasta band, client hang!',
      c: 'Express automatic response nahi bhejta bina explicit method ke.',
      d: 'Process crash nahi hoti.'
    },
    memoryTrick: 'Next() bolo taaki gaadi aage badhe! Varna signal red reh jayega aur client latak jayega!',
    tags: ['express', 'middleware', 'interview']
  },
  {
    topic: 'express',
    subTopic: 'routing',
    difficulty: 'easy',
    question: 'In Express, which property on the request object is used to access URL route parameters (e.g. `/users/:id`)?',
    codeSnippet: 'app.get("/users/:id", (req, res) => {\n  const userId = req.________.id;\n});',
    options: [
      { id: 'a', text: 'query' },
      { id: 'b', text: 'params' },
      { id: 'c', text: 'body' },
      { id: 'd', text: 'headers' }
    ],
    correctOptionId: 'b',
    explanation: 'Route parameters `req.params` object mein aate hain. Query strings (e.g. `?search=bhai`) `req.query` mein aate hain.',
    optionExplanations: {
      a: '`req.query` URL query parameters `?key=val` ke liye hota hai.',
      b: '`req.params` path params `:id` ko parse karta hai.',
      c: '`req.body` POST/PUT payload ke liye hota hai.',
      d: '`req.headers` HTTP request headers ke liye hota hai.'
    },
    memoryTrick: 'Path ka param = req.params! Query string = req.query!',
    tags: ['express', 'routing', 'params']
  },
  {
    topic: 'express',
    subTopic: 'body-parsing',
    difficulty: 'easy',
    question: 'In Express 4.16+, which built-in middleware parses incoming requests with JSON payloads into `req.body`?',
    codeSnippet: 'app.use(express.________());',
    options: [
      { id: 'a', text: 'bodyParser' },
      { id: 'b', text: 'json' },
      { id: 'c', text: 'urlencoded' },
      { id: 'd', text: 'parse' }
    ],
    correctOptionId: 'b',
    explanation: '`express.json()` built-in middleware hai jo incoming JSON payloads ko parse karta hai (body-parser library ab Express mein integrate ho gayi hai).',
    optionExplanations: {
      a: 'Pehle alag se require("body-parser") karna padta tha.',
      b: '`express.json()` modern official standard middleware hai.',
      c: '`express.urlencoded()` HTML form submissions ke liye hota hai.',
      d: 'Invalid method name.'
    },
    memoryTrick: 'JSON chahiye toh express.json() lagao!',
    tags: ['express', 'middleware', 'json']
  },
  {
    topic: 'express',
    subTopic: 'error-handling',
    difficulty: 'interview',
    question: 'How does Express.js distinguish an Error-Handling Middleware from standard middleware functions?',
    codeSnippet: 'app.use((________, req, res, next) => {\n  res.status(500).json({ error: err.message });\n});',
    options: [
      { id: 'a', text: 'It accepts 2 arguments (req, res)' },
      { id: 'b', text: 'It accepts 3 arguments (req, res, next)' },
      { id: 'c', text: 'It accepts exactly 4 arguments (err, req, res, next)' },
      { id: 'd', text: 'It accepts only 1 argument (err)' }
    ],
    correctOptionId: 'c',
    explanation: 'Express function ki `fn.length` (parameter count) check karta hai. Exactly 4 parameters `(err, req, res, next)` dekh kar Express samajh jata hai ki ye error handler hai aur `next(err)` aane par seedha ise invoke karta hai!',
    optionExplanations: {
      a: '2 args normal route handler hota hai.',
      b: '3 args normal middleware hota hai.',
      c: 'Char (4) parameters! Pehla parameter hamesha `err` hota hai.',
      d: 'Single argument middleware nahi hota Express mein.'
    },
    memoryTrick: 'Chaar (4) log aayenge toh Error Handle karenge: err, req, res, next!',
    tags: ['express', 'error-handling', 'middleware', 'interview']
  },
  {
    topic: 'express',
    subTopic: 'cors',
    difficulty: 'medium',
    question: 'When calling APIs from frontend (`http://localhost:5173`) to backend (`http://localhost:5000`), what must be configured on the server to prevent CORS errors?',
    codeSnippet: 'import cors from "cors";\napp.use(cors({\n  origin: "________"\n}));',
    options: [
      { id: 'a', text: 'Block the client server IP address' },
      { id: 'b', text: 'Set the allowed Origin header (such as the client URL or `*`)' },
      { id: 'c', text: 'Change the frontend port to match port 5000' },
      { id: 'd', text: 'Disable HTTPS protocol' }
    ],
    correctOptionId: 'b',
    explanation: 'Browser Cross-Origin Resource Sharing policy enforce karta hai. Server ko response headers mein `Access-Control-Allow-Origin: http://localhost:5173` bhej kar browser ko batana padta hai ki ye domain trusted hai.',
    optionExplanations: {
      a: 'IP block karne se request aur block ho jayegi.',
      b: 'CORS middleware origin specify karke browser ko permission deta hai.',
      c: 'Port conflict ho jayega.',
      d: 'HTTPS se CORS ka problem solve nahi hota.'
    },
    memoryTrick: 'CORS = Gatekeeper! Server se pass banwao: "Origin ko aane do"!',
    tags: ['express', 'cors', 'security']
  },
  {
    topic: 'express',
    subTopic: 'status-codes',
    difficulty: 'easy',
    question: 'In REST API design, which HTTP status code is standard convention when a new resource is successfully created?',
    codeSnippet: 'res.status(________).json(newUser);',
    options: [
      { id: 'a', text: '200 OK' },
      { id: 'b', text: '201 Created' },
      { id: 'c', text: '204 No Content' },
      { id: 'd', text: '202 Accepted' }
    ],
    correctOptionId: 'b',
    explanation: '`201 Created` specifically indicate karta hai ki request successful rahi aur server par ek naya resource generate ho gaya.',
    optionExplanations: {
      a: '`200 OK` general success ke liye hota hai.',
      b: '`201 Created` new resource creation ke liye standard REST code hai.',
      c: '`204 No Content` delete ke baad empty response ke liye hota hai.',
      d: '`202 Accepted` asynchronous processing ke liye hota hai.'
    },
    memoryTrick: 'Naya item create hua? Toh 201 ka shagun do!',
    tags: ['express', 'http', 'status-codes', 'rest']
  },
  {
    topic: 'express',
    subTopic: 'routing',
    difficulty: 'medium',
    question: 'Which class is used in Express to organize modular routes into separate files (such as user or product routers)?',
    codeSnippet: 'import { Router } from "express";\nconst router = Router();',
    options: [
      { id: 'a', text: 'express.App' },
      { id: 'b', text: 'express.Router' },
      { id: 'c', text: 'express.RouteHandler' },
      { id: 'd', text: 'express.Dispatcher' }
    ],
    correctOptionId: 'b',
    explanation: '`express.Router()` ek mini-application create karta hai jisme middleware aur routing capabilities hoti hain, jise main app mein `app.use("/api/users", userRouter)` mount kiya jata hai.',
    optionExplanations: {
      a: 'Main application instance create karta hai.',
      b: '`express.Router()` modular mini-routers create karta hai.',
      c: 'Invalid class name.',
      d: 'Invalid class name.'
    },
    memoryTrick: 'Ghar mein alag kamre chahiye? express.Router() se partition banao!',
    tags: ['express', 'routing', 'architecture']
  },
  {
    topic: 'express',
    subTopic: 'security',
    difficulty: 'interview',
    question: 'Which popular middleware secures Express applications by configuring essential HTTP security headers (e.g. CSP, X-XSS-Protection, hiding X-Powered-By)?',
    codeSnippet: 'import helmet from "helmet";\napp.use(helmet());',
    options: [
      { id: 'a', text: 'cors' },
      { id: 'b', text: 'helmet' },
      { id: 'c', text: 'morgan' },
      { id: 'd', text: 'multer' }
    ],
    correctOptionId: 'b',
    explanation: '`helmet` middleware automatically secure HTTP response headers (CSP, HSTS, X-Frame-Options, DNS prefetch control, etc.) set karta hai.',
    optionExplanations: {
      a: '`cors` cross-origin permissions ke liye hota hai.',
      b: '`helmet` production apps ka safety helmet hai jo 15+ security headers lagata hai.',
      c: '`morgan` HTTP request logger hai.',
      d: '`multer` multipart file uploads ke liye hota hai.'
    },
    memoryTrick: 'Bike chalate waqt Helmet pehno, Express chalate waqt HELMET middleware lagao!',
    tags: ['express', 'security', 'helmet', 'interview']
  },
  {
    topic: 'express',
    subTopic: 'rate-limiting',
    difficulty: 'medium',
    question: 'Which middleware protects Express servers from brute-force attacks and abuse by imposing request limits per IP address?',
    codeSnippet: 'import rateLimit from "express-rate-limit";\nconst limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });',
    options: [
      { id: 'a', text: 'express-throttle' },
      { id: 'b', text: 'express-rate-limit' },
      { id: 'c', text: 'express-firewall' },
      { id: 'd', text: 'express-shield' }
    ],
    correctOptionId: 'b',
    explanation: '`express-rate-limit` IP address ke hisaab se request count karta hai aur limit exceed hone par HTTP 429 Too Many Requests status return karta hai.',
    optionExplanations: {
      a: 'Old package.',
      b: 'Industry standard rate limiting middleware for Express.',
      c: 'Fake name.',
      d: 'Fake name.'
    },
    memoryTrick: 'Speed limit ka challan = RATE LIMIT! Aukaat mein raho varna 429 Too Many Requests milega!',
    tags: ['express', 'security', 'rate-limiting']
  },
  {
    topic: 'express',
    subTopic: 'response',
    difficulty: 'easy',
    question: 'What is the subtle difference between `res.send()` and `res.json()` in Express?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'They are completely identical in every possible situation' },
      { id: 'b', text: '`res.json()` explicitly converts non-objects (null, undefined, arrays) to valid JSON and sets the `Content-Type: application/json` header' },
      { id: 'c', text: '`res.send()` can only deliver HTML strings' },
      { id: 'd', text: '`res.json()` forces an automatic browser page reload' }
    ],
    correctOptionId: 'b',
    explanation: '`res.json()` internally `JSON.stringify()` run karta hai aur guaranteed `application/json` header set karta hai. `res.send()` type check karke buffer, string, ya json detect karta hai.',
    optionExplanations: {
      a: 'Null aur undefined handling mein difference hota hai.',
      b: 'REST APIs ke liye explicit `res.json()` best practice hai.',
      c: '`res.send()` strings, buffers aur objects sab bhej sakta hai.',
      d: 'Browser refresh client ka kaam hai.'
    },
    memoryTrick: 'API bana rahe ho toh res.json() use karo, doubt hi mat rakho!',
    tags: ['express', 'response', 'rest']
  },
  {
    topic: 'express',
    subTopic: 'file-upload',
    difficulty: 'medium',
    question: 'Which middleware handles `multipart/form-data` uploads (e.g. user image/file uploads) in Express?',
    codeSnippet: 'import multer from "multer";\nconst upload = multer({ dest: "uploads/" });\napp.post("/avatar", upload.single("image"), ...);',
    options: [
      { id: 'a', text: 'express.json()' },
      { id: 'b', text: 'multer' },
      { id: 'c', text: 'body-parser' },
      { id: 'd', text: 'form-data' }
    ],
    correctOptionId: 'b',
    explanation: '`multer` Express ka official file uploading middleware hai jo `multipart/form-data` parse karke `req.file` ya `req.files` provide karta hai.',
    optionExplanations: {
      a: '`express.json()` multipart parse nahi kar sakta.',
      b: '`multer` multipart stream parsing ke liye standard library hai.',
      c: '`body-parser` multipart upload support nahi karta.',
      d: 'Client-side boundary library hai.'
    },
    memoryTrick: 'Multi-part upload karna hai? MULTER bulao!',
    tags: ['express', 'multer', 'file-upload']
  },
  {
    topic: 'express',
    subTopic: 'async-errors',
    difficulty: 'interview',
    question: 'Why did unhandled rejections inside `async` route handlers fail to reach the error handler in Express v4 without explicit error propagation?',
    codeSnippet: 'app.get("/data", async (req, res, next) => {\n  const data = await fetchData(); // if this throws\n});',
    options: [
      { id: 'a', text: 'Express v4 did not catch Promise rejections automatically, requiring `try/catch` and manual `next(error)` calls' },
      { id: 'b', text: 'Async functions were banned in Express' },
      { id: 'c', text: 'It was caused by a database driver bug' },
      { id: 'd', text: 'The server port changed dynamically' }
    ],
    correctOptionId: 'a',
    explanation: 'Express 4 synchronous error catch karta tha. Async rejections ke liye `express-async-errors` package ya manually `try { ... } catch (err) { next(err); }` likhna padta tha. Express 5 mein async promise rejection native catch hoti hai.',
    optionExplanations: {
      a: 'Classic Express 4 interview question! Rejected promise unhandledRejection ban jati thi.',
      b: 'Async functions fully allowed hain, bas catch block mandatory tha.',
      c: 'Runtime routing layer issue hai.',
      d: 'Nonsense option.'
    },
    memoryTrick: 'Express 4 mein async likha toh TRY-CATCH ka chashma lagao aur next(err) pass karo!',
    tags: ['express', 'async', 'error-handling', 'interview']
  },
  {
    topic: 'express',
    subTopic: 'middleware-order',
    difficulty: 'medium',
    question: 'In what order will the console logs appear when an HTTP GET request hits `/` in this Express application?',
    codeSnippet: 'app.use((req, res, next) => { console.log("1"); next(); });\napp.get("/", (req, res) => { console.log("2"); res.send("OK"); });\napp.use((req, res, next) => { console.log("3"); next(); });',
    options: [
      { id: 'a', text: '1, 2, 3' },
      { id: 'b', text: '1, 2' },
      { id: 'c', text: '2, 1, 3' },
      { id: 'd', text: '3, 2, 1' }
    ],
    correctOptionId: 'b',
    explanation: 'Middleware registration order mein execute hote hain. Pehla middleware (1) chala aur `next()` bola. Route handler (2) chala aur response end (`res.send`) kar diya bina `next()` call kiye! Isiliye teesra middleware (3) tak control kabhi pahuchega hi nahi!',
    optionExplanations: {
      a: 'Route handler ne `next()` call nahi kiya, isiliye 3 execute nahi hua.',
      b: 'Sahi pakde hain! 1 fir 2, aur cycle wahi finish.',
      c: 'Registration order top-to-bottom hota hai.',
      d: 'Order ulta nahi chalta.'
    },
    memoryTrick: 'Express ek sidhi sadak hai! Beech mein dukan band ho gayi (res.send) toh aage ka rasta gaya!',
    tags: ['express', 'output', 'middleware', 'interview']
  },
  {
    topic: 'express',
    subTopic: 'cookies',
    difficulty: 'medium',
    question: 'Which middleware is used in Express to parse incoming HTTP cookies into `req.cookies`?',
    codeSnippet: 'import cookieParser from "cookie-parser";\napp.use(cookieParser());',
    options: [
      { id: 'a', text: 'cookie-parser' },
      { id: 'b', text: 'express-session' },
      { id: 'c', text: 'cookie-session' },
      { id: 'd', text: 'express-cookie' }
    ],
    correctOptionId: 'a',
    explanation: '`cookie-parser` header `Cookie: a=b; c=d` ko parse karke clean object `req.cookies` provide karta hai (aur signed cookies bhi support karta hai).',
    optionExplanations: {
      a: '`cookie-parser` standard cookie parsing middleware hai.',
      b: '`express-session` server-side session management ke liye hota hai.',
      c: 'Client-side cookie session storage hai.',
      d: 'Fake package name.'
    },
    memoryTrick: 'Cookie ko tod-marod ke khana hai? COOKIE-PARSER bulao!',
    tags: ['express', 'cookies', 'middleware']
  },
  {
    topic: 'express',
    subTopic: 'templating',
    difficulty: 'easy',
    question: 'Which template engine options are commonly set for server-side HTML rendering in Express?',
    codeSnippet: 'app.set("view engine", "________");',
    options: [
      { id: 'a', text: 'ejs or pug' },
      { id: 'b', text: 'react-native' },
      { id: 'c', text: 'sql' },
      { id: 'd', text: 'json' }
    ],
    correctOptionId: 'a',
    explanation: '`app.set("view engine", "ejs")` SSR template engines configure karta hai jo `res.render("index", { data })` se render hote hain.',
    optionExplanations: {
      a: 'EJS, Pug, Handlebars standard template engines hain Express ke.',
      b: 'React Native mobile apps ke liye framework hai.',
      c: 'SQL database language hai.',
      d: 'JSON data format hai, HTML template engine nahi.'
    },
    memoryTrick: 'HTML template banana hai? EJS/Pug lagao!',
    tags: ['express', 'views', 'ssr']
  },
  {
    topic: 'express',
    subTopic: 'redirects',
    difficulty: 'easy',
    question: 'Which method on the Express response object is used to redirect a client to a new URL?',
    codeSnippet: 'app.get("/old-url", (req, res) => {\n  res.________("/new-url");\n});',
    options: [
      { id: 'a', text: 'forward' },
      { id: 'b', text: 'redirect' },
      { id: 'c', text: 'move' },
      { id: 'd', text: 'navigate' }
    ],
    correctOptionId: 'b',
    explanation: '`res.redirect("/new-url")` HTTP 302 (Found) status code aur `Location: /new-url` header set karke browser ko naye address par redirect kar deta hai.',
    optionExplanations: {
      a: 'Java Servlets mein hota hai forward.',
      b: '`res.redirect()` standard Express method hai.',
      c: 'Invalid method.',
      d: 'Frontend router method hai.'
    },
    memoryTrick: 'Rasta badalna hai? res.redirect()!',
    tags: ['express', 'routing', 'redirect']
  },
  {
    topic: 'express',
    subTopic: 'status-codes',
    difficulty: 'easy',
    question: 'Which HTTP status code should be returned when a request is made without providing valid authentication credentials?',
    codeSnippet: 'if (!token) {\n  return res.status(________).json({ message: "No token provided" });\n}',
    options: [
      { id: 'a', text: '400 Bad Request' },
      { id: 'b', text: '401 Unauthorized' },
      { id: 'c', text: '403 Forbidden' },
      { id: 'd', text: '404 Not Found' }
    ],
    correctOptionId: 'b',
    explanation: '`401 Unauthorized` batata hai ki user authenticated nahi hai (token missing ya invalid hai). `403 Forbidden` tab use hota hai jab user authenticated toh hai lekin us resource ko access karne ki permission/role nahi hai.',
    optionExplanations: {
      a: '`400` malformed syntax ya validation failure ke liye hota hai.',
      b: '`401 Unauthorized` authentication missing/failed standard code hai.',
      c: '`403 Forbidden` authorization/permission missing ke liye hota hai.',
      d: '`404 Not Found` resource exist na karne par hota hai.'
    },
    memoryTrick: '401 = Pehle ID dikhao (Kaun ho tum)! 403 = Tumhe yahan aana mana hai (Forbidden)!',
    tags: ['express', 'http', 'status-codes', 'auth']
  },
  {
    topic: 'express',
    subTopic: 'static-files',
    difficulty: 'easy',
    question: 'Which built-in middleware is used in Express to serve static assets (such as HTML, CSS, images, and client JS)?',
    codeSnippet: 'app.use(express.________("public"));',
    options: [
      { id: 'a', text: 'files' },
      { id: 'b', text: 'static' },
      { id: 'c', text: 'serve' },
      { id: 'd', text: 'public' }
    ],
    correctOptionId: 'b',
    explanation: '`express.static("public")` folder ke static files ko directly URL par accessible banata hai (e.g. `/images/logo.png`).',
    optionExplanations: {
      a: 'Invalid method.',
      b: '`express.static()` built-in static file server middleware hai.',
      c: 'Invalid method.',
      d: 'Invalid method.'
    },
    memoryTrick: 'Static files ke liye express.static()!',
    tags: ['express', 'static-files']
  },
  {
    topic: 'express',
    subTopic: 'app-vs-router',
    difficulty: 'medium',
    question: 'What is the relationship between an `express.Router` instance and `app.listen()`?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '`router.listen()` binds to a separate network port' },
      { id: 'b', text: 'A `Router` does not provide a `.listen()` method; only the top-level `app` instance can call `.listen()` to bind to a server port' },
      { id: 'c', text: 'Routers directly start HTTP TCP sockets' },
      { id: 'd', text: 'Both are completely identical classes' }
    ],
    correctOptionId: 'b',
    explanation: '`Router` sirf ek isolated middleware and routing bundle hai. Server ko port par listen karane ka kaam sirf top-level Express application instance (`express()`) ka hota hai.',
    optionExplanations: {
      a: 'Router listen method provide nahi karta.',
      b: 'Fact! Router sirf routes group karta hai, server start `app.listen()` se hi hota hai.',
      c: 'Router direct port bind nahi karta.',
      d: 'App Application class hai, Router Router class.'
    },
    memoryTrick: 'Router sirf rasta (routes) dikhata hai, dukan ka shutter (listen) sirf App kholta hai!',
    tags: ['express', 'routing', 'architecture']
  },
  {
    topic: 'express',
    subTopic: 'logging',
    difficulty: 'easy',
    question: 'Which popular middleware logs incoming HTTP requests (method, URL, status code, response time) to the terminal console?',
    codeSnippet: 'import morgan from "morgan";\napp.use(morgan("dev"));',
    options: [
      { id: 'a', text: 'winston' },
      { id: 'b', text: 'morgan' },
      { id: 'c', text: 'bunyan' },
      { id: 'd', text: 'pino' }
    ],
    correctOptionId: 'b',
    explanation: '`morgan` Express ka standard HTTP request logger middleware hai.',
    optionExplanations: {
      a: 'Winston general purpose logger hai, specific HTTP request middleware nahi.',
      b: '`morgan` dev mode mein color-coded GET /api/xyz 200 4.2ms print karta hai.',
      c: 'Bunyan structured logger hai.',
      d: 'Pino high-performance general logger hai.'
    },
    memoryTrick: 'Request aayi aur chali gayi, sab hisaab rakhega MORGAN!',
    tags: ['express', 'logging', 'middleware']
  }
];
