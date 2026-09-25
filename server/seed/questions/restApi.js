export const restApiQuestions = [
  {
    topic: 'rest-api',
    subTopic: 'idempotency',
    difficulty: 'interview',
    question: 'What does "Idempotent HTTP Method" mean in REST API design, and which HTTP methods are idempotent?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'A method that causes an intentional server restart' },
      { id: 'b', text: 'A method where making multiple identical requests has the exact same effect on server state as making a single request (e.g. GET, PUT, DELETE)' },
      { id: 'c', text: 'Only the POST method is idempotent' },
      { id: 'd', text: 'A method that encrypts outgoing payload responses' }
    ],
    correctOptionId: 'b',
    explanation: 'Idempotency ka matlab: multiple identical requests produce the same server state as a single request. Example: `DELETE /users/5` pehli baar user delete karega, fir dobara call karne par bhi user deleted hi rahega. `POST` idempotent nahi hota kyunki har call par naya resource create hota hai!',
    optionExplanations: {
      a: 'Nonsense option.',
      b: 'Textbook REST definition! GET, HEAD, PUT, DELETE idempotent hote hain; POST non-idempotent hota hai.',
      c: 'POST non-idempotent hota hai kyunki duplicate submissions duplicate records bana deti hain.',
      d: 'Encryption SSL/TLS ka kaam hai.'
    },
    memoryTrick: 'Pankhe ka switch OFF hai, 10 baar aur OFF dabao toh bhi OFF hi rahega = IDEMPOTENT!',
    tags: ['rest-api', 'http', 'idempotency', 'interview']
  },
  {
    topic: 'rest-api',
    subTopic: 'methods',
    difficulty: 'easy',
    question: 'Which HTTP method is considered best practice when updating only specific fields (partial update) of an existing resource?',
    codeSnippet: 'PATCH /api/users/123\n{ "status": "active" }',
    options: [
      { id: 'a', text: 'PUT' },
      { id: 'b', text: 'PATCH' },
      { id: 'c', text: 'GET' },
      { id: 'd', text: 'OPTIONS' }
    ],
    correctOptionId: 'b',
    explanation: '`PATCH` partial updates (chhota badlav) ke liye hota hai. `PUT` poora resource replace karne ke liye hota hai.',
    optionExplanations: {
      a: '`PUT` pure object ko replace karta hai, jo fields omit ho gayi wo null ho sakti hain.',
      b: '`PATCH` sirf supplied fields ko selectively update karta hai.',
      c: '`GET` read-only hota hai, state mutate nahi karta.',
      d: '`OPTIONS` server capabilities aur CORS preflight check karta hai.'
    },
    memoryTrick: 'Kapde par chhota thigali lagana hai = PATCH! Pura kapda badalna hai = PUT!',
    tags: ['rest-api', 'http-methods', 'patch']
  },
  {
    topic: 'rest-api',
    subTopic: 'status-codes',
    difficulty: 'easy',
    question: 'Which HTTP status code is standard convention when a resource is successfully deleted and no response body is returned?',
    codeSnippet: 'res.status(________).send();',
    options: [
      { id: 'a', text: '200 OK' },
      { id: 'b', text: '204 No Content' },
      { id: 'c', text: '404 Not Found' },
      { id: 'd', text: '304 Not Modified' }
    ],
    correctOptionId: 'b',
    explanation: '`204 No Content` batata hai ki action successfully execute ho gaya aur server ke paas client ko return karne ke liye koi content body nahi hai.',
    optionExplanations: {
      a: '`200 OK` tab use karte hain jab response body mein confirmation JSON bhej rahe hon.',
      b: '`204 No Content` empty body successful operations ke liye standard hai.',
      c: '`404 Not Found` resource na milne par hota hai.',
      d: '`304 Not Modified` browser caching handshake ke liye hota hai.'
    },
    memoryTrick: 'Kaam ho gaya (200 series) par jeb khali hai (No Content) = 204!',
    tags: ['rest-api', 'status-codes', 'http']
  },
  {
    topic: 'rest-api',
    subTopic: 'resource-naming',
    difficulty: 'easy',
    question: 'What is the standard URL naming convention for designing RESTful API endpoints?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '`/getUsers` or `/deleteUserById?id=5` (Verbs in URL)' },
      { id: 'b', text: '`/api/users` and `/api/users/:id` (Plural Nouns combined with standard HTTP verbs)' },
      { id: 'c', text: '`/run-query-table-user`' },
      { id: 'd', text: '`/user_data.php`' }
    ],
    correctOptionId: 'b',
    explanation: 'REST architecture mein URLs "Resources" (Nouns) ko represent karte hain (e.g. `/api/articles`), aur actions HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) dwara specify kiye jaate hain. Verbs URL mein nahi daalna chahiye.',
    optionExplanations: {
      a: 'Verbs URL mein daalna RPC pattern hai, RESTful nahi.',
      b: 'Clean RESTful convention! Plural nouns + standard HTTP verbs.',
      c: 'Anti-pattern.',
      d: 'Old legacy script naming.'
    },
    memoryTrick: 'URL mein Noun (cheez) ka naam likho, Verb (kriya) HTTP method batayega!',
    tags: ['rest-api', 'design', 'naming']
  },
  {
    topic: 'rest-api',
    subTopic: 'status-codes',
    difficulty: 'medium',
    question: 'Which HTTP status code should a server return when a client request fails payload or schema validation (e.g. invalid format or missing required fields)?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '500 Internal Server Error' },
      { id: 'b', text: '400 Bad Request or 422 Unprocessable Entity' },
      { id: 'c', text: '404 Not Found' },
      { id: 'd', text: '401 Unauthorized' }
    ],
    correctOptionId: 'b',
    explanation: '`400 Bad Request` ya `422 Unprocessable Entity` client-side validation errors ko accurately indicate karte hain. `500` server crash/bug ke liye hota hai.',
    optionExplanations: {
      a: '`500` batata hai ki server mein bug hai, jabki yahan galti client ke input ki hai.',
      b: '`400` / `422` client input validation errors ka standard response hai.',
      c: '`404` endpoint ya ID exist na hone par hota hai.',
      d: '`401` authentication fail hone par hota hai.'
    },
    memoryTrick: 'Client ne galat data bheja? 400 ya 422 fenk ke maaro! 500 bol kar server ki beizzati mat karo!',
    tags: ['rest-api', 'status-codes', 'validation']
  },
  {
    topic: 'rest-api',
    subTopic: 'statelessness',
    difficulty: 'interview',
    question: 'What does the "Statelessness" constraint in REST architecture dictate?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'The server is strictly prohibited from connecting to a database' },
      { id: 'b', text: 'Every incoming client request must contain all necessary context and authentication credentials to execute; the server stores no client session context in memory' },
      { id: 'c', text: 'React components cannot maintain state' },
      { id: 'd', text: 'The server must never deliver a response payload' }
    ],
    correctOptionId: 'b',
    explanation: 'Statelessness allows horizontal scaling: Agar 10 backend servers chal rahe hain, client ki request kisi bhi server par jaye wo handle ho sakti hai kyunki token/state request ke sath hi travel karti hai.',
    optionExplanations: {
      a: 'DB persistent state rakhta hai.',
      b: 'Core REST architectural principle! Har request self-contained honi chahiye.',
      c: 'Frontend React state se backend statelessness ka relation nahi.',
      d: 'Nonsense option.'
    },
    memoryTrick: 'Server koi udhaari yaad nahi rakhta! Har baar pura chittha (token) leke aao!',
    tags: ['rest-api', 'statelessness', 'architecture', 'interview']
  },
  {
    topic: 'rest-api',
    subTopic: 'versioning',
    difficulty: 'medium',
    question: 'What is the most widely adopted and explicit approach for REST API versioning to prevent breaking changes for existing clients?',
    codeSnippet: 'https://api.example.com/v1/users\nhttps://api.example.com/v2/users',
    options: [
      { id: 'a', text: 'URI Path Versioning (`/api/v1/...`)' },
      { id: 'b', text: 'Changing the server public IP address' },
      { id: 'c', text: 'Dropping previous database collections' },
      { id: 'd', text: 'Changing the HTTP server port' }
    ],
    correctOptionId: 'b',
    explanation: 'URI Path Versioning (`/v1/`, `/v2/`) explicit, readable aur universally supported hota hai, jisse puraane clients `/v1/` use karte rehte hain aur naye clients `/v2/` par switch ho jaate hain.',
    optionExplanations: {
      a: 'Industry standard most popular API versioning strategy.',
      b: 'IP badalna DNS failure karega.',
      c: 'Purana data udd jayega.',
      d: 'Firewalls block kar denge non-standard ports.'
    },
    memoryTrick: 'URL mein v1, v2 likho! Naya version chalu, purana version safe!',
    tags: ['rest-api', 'versioning']
  },
  {
    topic: 'rest-api',
    subTopic: 'content-negotiation',
    difficulty: 'interview',
    question: 'Which HTTP request header does a client use to specify the data format (e.g. JSON or XML) it expects to receive from the server?',
    codeSnippet: 'Accept: application/json',
    options: [
      { id: 'a', text: '`Content-Type` header' },
      { id: 'b', text: '`Accept` header' },
      { id: 'c', text: '`User-Agent` header' },
      { id: 'd', text: 'URL query parameter `?format=json`' }
    ],
    correctOptionId: 'b',
    explanation: '`Accept` header client ka expected response MIME type specify karta hai. `Content-Type` header batata hai ki client request body mein kaunsa format bhej raha hai.',
    optionExplanations: {
      a: '`Content-Type` outgoing request body ka format batata hai.',
      b: '`Accept: application/json` server ko batata hai ki response JSON mein bhejna.',
      c: '`User-Agent` browser/client ka system identity deta hai.',
      d: 'Non-standard workaround hota hai.'
    },
    memoryTrick: 'ACCEPT = "Mujhe ye format Qubool (Accept) hai"!',
    tags: ['rest-api', 'headers', 'content-negotiation', 'interview']
  },
  {
    topic: 'rest-api',
    subTopic: 'caching',
    difficulty: 'medium',
    question: 'In HTTP caching, which header provides an entity validator hash/fingerprint of the resource for conditional GET requests?',
    codeSnippet: 'ETag: "686897696a7c876b7e"\nIf-None-Match: "686897696a7c876b7e"',
    options: [
      { id: 'a', text: 'ETag (Entity Tag)' },
      { id: 'b', text: 'X-Token' },
      { id: 'c', text: 'Content-Length' },
      { id: 'd', text: 'Host' }
    ],
    correctOptionId: 'a',
    explanation: '`ETag` resource ke content ka fingerprint/hash hota hai. Client `If-None-Match` bhejta hai; agar resource nahi badla toh server `304 Not Modified` return karta hai bina data transfer kiye.',
    optionExplanations: {
      a: 'ETag web caching aur bandwidth optimization ka hero header hai.',
      b: 'Custom header hai.',
      c: 'Bytes count deta hai.',
      d: 'Target domain batata hai.'
    },
    memoryTrick: 'ETAG = Barcode! Barcode match ho gaya toh naya maal download mat karo (304 Not Modified)!',
    tags: ['rest-api', 'caching', 'etag', 'http']
  },
  {
    topic: 'rest-api',
    subTopic: 'hateoas',
    difficulty: 'interview',
    question: 'In Richardson Maturity Model Level 3, what does "HATEOAS" stand for and what is its purpose?',
    codeSnippet: '{\n  "id": 1,\n  "balance": 100,\n  "_links": {\n    "deposit": { "href": "/accounts/1/deposit", "method": "POST" },\n    "withdraw": { "href": "/accounts/1/withdraw", "method": "POST" }\n  }\n}',
    options: [
      { id: 'a', text: 'High Availability Testing Engine on All Servers' },
      { id: 'b', text: 'Hypermedia As The Engine Of Application State: dynamically providing next available actions and related navigation links inside the API response' },
      { id: 'c', text: 'Hardware Acceleration Through Encrypted Operating Actions' },
      { id: 'd', text: 'HTML And Text Elements Over Automated Sockets' }
    ],
    correctOptionId: 'b',
    explanation: 'HATEOAS REST ka highest maturity level hai jisme API response client ko guide karta hai ki is resource ke sath aage kya actions liye ja sakte hain via dynamic hypermedia links.',
    optionExplanations: {
      a: 'Fake full form.',
      b: 'Hypermedia As The Engine Of Application State! Self-descriptive API responses.',
      c: 'Fake full form.',
      d: 'Fake full form.'
    },
    memoryTrick: 'HATEOAS = Response ke sath agle raste ka MAP (links) bhi bhej do!',
    tags: ['rest-api', 'hateoas', 'interview']
  },
  {
    topic: 'rest-api',
    subTopic: 'options',
    difficulty: 'medium',
    question: 'Which HTTP method does a web browser automatically send as a preflight request before dispatching non-simple cross-origin requests (e.g. PUT, DELETE, custom headers)?',
    codeSnippet: 'OPTIONS /api/users HTTP/1.1\nOrigin: http://localhost:5173\nAccess-Control-Request-Method: PUT',
    options: [
      { id: 'a', text: 'HEAD' },
      { id: 'b', text: 'OPTIONS' },
      { id: 'c', text: 'TRACE' },
      { id: 'd', text: 'CONNECT' }
    ],
    correctOptionId: 'b',
    explanation: 'Browser `OPTIONS` method se Preflight handshake bhejta hai server se poochhne ke liye: "Kya mujhe PUT request bhejne ki ijazat hai?". Server response dekh kar hi actual request initiate karta hai.',
    optionExplanations: {
      a: '`HEAD` sirf response headers mangta hai body ke bina.',
      b: '`OPTIONS` CORS preflight check method hai.',
      c: '`TRACE` loopback diagnostic method hai.',
      d: '`CONNECT` SSL tunneling ke liye hota hai.'
    },
    memoryTrick: 'Asali bhed bhejne se pehle jasoos bhejo poochhne ke liye = OPTIONS Preflight!',
    tags: ['rest-api', 'cors', 'options', 'http']
  },
  {
    topic: 'rest-api',
    subTopic: 'pagination',
    difficulty: 'interview',
    question: 'Why is Cursor-based (Keyset) pagination considered superior to Offset pagination (`skip/limit`) for real-time infinite scroll feeds?',
    codeSnippet: 'GET /api/posts?after_id=65f1a2b3c4d5e6f7a8b9c0d1&limit=20',
    options: [
      { id: 'a', text: 'Because offset pagination degrades to slow O(N) full index scans on deep pages and produces duplicate/missed posts on real-time writes; cursor pagination achieves consistent O(1) indexed jumps' },
      { id: 'b', text: 'Because cursor pagination does not require a database index' },
      { id: 'c', text: 'Because offset pagination is deprecated across all protocols' },
      { id: 'd', text: 'Cursor pagination works exclusively on mobile devices' }
    ],
    correctOptionId: 'a',
    explanation: 'Agar user page 1 scroll kar raha hai aur 5 naye posts aa gaye, toh page 2 fetch karne par purane posts shift hoke duplicate dikhenge. Cursor pagination "is ID ke baad ke 20 lao" bolti hai, jo rock solid aur index-optimized hoti hai.',
    optionExplanations: {
      a: 'Infinite scroll scalability ka core architecture question! No duplicates + consistent O(1) performance.',
      b: 'DB index use hota hai.',
      c: 'Offset standard hai chhote datasets ke liye.',
      d: 'Har client par chalta hai.'
    },
    memoryTrick: 'Panna mat gino (Skip mat karo), aakhiri post ki ID pakdo aur bolo "Iske aage ka maal do" (CURSOR)!',
    tags: ['rest-api', 'pagination', 'performance', 'interview']
  },
  {
    topic: 'rest-api',
    subTopic: 'graphql-vs-rest',
    difficulty: 'interview',
    question: 'What is the primary architectural advantage of GraphQL compared to REST regarding data retrieval efficiency?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'GraphQL provides direct unmediated access to raw database tables' },
      { id: 'b', text: 'Clients declare the exact fields they need (eliminating Over-fetching) and can fetch related nested resources in a single network round-trip (eliminating Under-fetching)' },
      { id: 'c', text: 'GraphQL functions without an internet connection' },
      { id: 'd', text: 'GraphQL eliminates HTTP protocol transport' }
    ],
    correctOptionId: 'b',
    explanation: 'REST mein `/users` 30 fields return karta hai chahe tumhe sirf `name` chahiye ho (Over-fetching), aur user ke posts ke liye alag request karni padti hai (Under-fetching). GraphQL single query mein exact fields fetch karta hai.',
    optionExplanations: {
      a: 'GraphQL API layer hai, DB access nahi deta direct.',
      b: 'Over-fetching aur under-fetching ka textbook solution!',
      c: 'Network connection zaroori hai.',
      d: 'GraphQL POST request over HTTP use karta hai.'
    },
    memoryTrick: 'Thali mein wahi milega jitna manga (GraphQL), poora menu zabardasti nahi thopenge (Over-fetching)!',
    tags: ['rest-api', 'graphql', 'comparison', 'interview']
  },
  {
    topic: 'rest-api',
    subTopic: 'status-codes',
    difficulty: 'easy',
    question: 'Which HTTP status code should be returned when the server is temporarily unavailable due to maintenance downtime or overload?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '500 Internal Server Error' },
      { id: 'b', text: '502 Bad Gateway' },
      { id: 'c', text: '503 Service Unavailable' },
      { id: 'd', text: '504 Gateway Timeout' }
    ],
    correctOptionId: 'c',
    explanation: '`503 Service Unavailable` batata hai ki server temporary overload ya maintenance mode mein hai aur jald wapas aayega (aksar `Retry-After` header ke sath).',
    optionExplanations: {
      a: '`500` unhandled code exceptions ke liye hota hai.',
      b: '`502` reverse proxy (Nginx) ko upstream Node server se invalid response milne par hota hai.',
      c: '`503 Service Unavailable` maintenance/overload status hai.',
      d: '`504` upstream server dwara response time limit exceed karne par hota hai.'
    },
    memoryTrick: '503 = Dukan pe board laga hai "Lunch time hai, thodi der baad aao"!',
    tags: ['rest-api', 'status-codes', 'http']
  },
  {
    topic: 'rest-api',
    subTopic: 'filtering',
    difficulty: 'easy',
    question: 'Where are parameters typically passed in a RESTful GET request to filter, sort, or paginate resources?',
    codeSnippet: 'GET /api/products?category=electronics&sort=-price&page=2',
    options: [
      { id: 'a', text: 'In the URL Path itself' },
      { id: 'b', text: 'In URL Query Strings (`?key=value`)' },
      { id: 'c', text: 'In the HTTP Request Body' },
      { id: 'd', text: 'In Browser Cookies' }
    ],
    correctOptionId: 'b',
    explanation: 'GET requests mein body send nahi ki jaati; search, filtering, sorting aur pagination parameters Query String parameters (`?param=value&...`) mein pass hote hain.',
    optionExplanations: {
      a: 'Path identifier ke liye hota hai (e.g. `/products/123`).',
      b: 'Query parameters filtering aur sorting ke standard container hain.',
      c: 'GET request mein standard body allow nahi hoti.',
      d: 'Cookies session tracking ke liye hoti hain.'
    },
    memoryTrick: 'Filter lagana hai toh question mark (?) ke baad query string daalo!',
    tags: ['rest-api', 'query-strings', 'filtering']
  }
];
