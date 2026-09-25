export const webFundamentalsQuestions = [
  {
    topic: 'web-fundamentals',
    subTopic: 'browser-pipeline',
    difficulty: 'interview',
    question: 'Through which sequence of stages does the Critical Rendering Path proceed to paint pixels on screen after downloading HTML and CSS?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'DOM + CSSOM -> Render Tree -> Layout (Reflow) -> Paint (Repaint) -> Composite' },
      { id: 'b', text: 'Paint -> Layout -> DOM -> CSSOM -> Composite' },
      { id: 'c', text: 'Render Tree -> DOM -> Paint -> Layout' },
      { id: 'd', text: 'Layout -> DOM -> CSSOM -> Composite' }
    ],
    correctOptionId: 'a',
    explanation: 'Critical Rendering Path: 1. DOM tree aur CSSOM tree banti hain. 2. Visible nodes jod kar Render Tree banta hai. 3. Layout (dimensions aur geometry calculate hoti hai). 4. Paint (pixels rasterize hote hain). 5. Composite (layers GPU par merge hoti hain).',
    optionExplanations: {
      a: 'Textbook Critical Rendering Path order! Har frontend performance engineer ko pata hona chahiye.',
      b: 'Paint se pehle layout aur DOM ka hona zaroori hai.',
      c: 'Render Tree DOM aur CSSOM ke bina nahi ban sakti.',
      d: 'Incorrect sequence.'
    },
    memoryTrick: 'D-C-R-L-P-C: DOM banao, CSSOM sajao, Render Tree jodkar, Layout naapo, Paint maro, Composite dikhao!',
    tags: ['web-fundamentals', 'browser-internals', 'performance', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'dns',
    difficulty: 'interview',
    question: 'In what hierarchical order does a DNS (Domain Name System) lookup resolve an address like `https://example.com`?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Directly queries satellite communications' },
      { id: 'b', text: 'Browser Cache -> OS Cache -> Router Cache -> ISP Recursive Resolver -> Root DNS Server (.) -> TLD Server (.com) -> Authoritative Nameserver' },
      { id: 'c', text: 'Queries the Google search index directly' },
      { id: 'd', text: 'Decrypts the local Wi-Fi router password' }
    ],
    correctOptionId: 'b',
    explanation: 'DNS phonebook of the internet hai. Pehle local caches (browser, OS, router) check hoti hain. Agar miss ho toh ISP resolver Root servers (. -> .com -> authoritative) se query karke IP address wapas laata hai.',
    optionExplanations: {
      a: 'Nonsense option.',
      b: 'Accurate DNS resolution hierarchical traversal! Root -> TLD -> Authoritative.',
      c: 'Search engine HTTP request ke baad aata hai, IP lookup DNS karta hai.',
      d: 'Wi-Fi alag network layer hai.'
    },
    memoryTrick: 'Pehle ghar mein dhoondho (Browser/OS cache), fir mohalle mein (ISP), fir Head Office (Root -> TLD -> Authoritative)!',
    tags: ['web-fundamentals', 'dns', 'networking', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'tcp-handshake',
    difficulty: 'interview',
    question: 'How many steps constitute a standard TCP Handshake to establish a reliable connection before HTTP data transfer, and what are their flags?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '2-way Handshake (HELLO -> OK)' },
      { id: 'b', text: '3-way Handshake (SYN -> SYN-ACK -> ACK)' },
      { id: 'c', text: '4-way Handshake (SEND -> RECV -> CONFIRM -> CLOSE)' },
      { id: 'd', text: 'TCP does not require any handshake' }
    ],
    correctOptionId: 'b',
    explanation: 'TCP 3-way handshake: 1. Client sends SYN (Synchronize). 2. Server replies with SYN-ACK (Synchronize-Acknowledge). 3. Client sends ACK (Acknowledge). Connection establish hone ke baad hi HTTP data transfer shuru hota hai.',
    optionExplanations: {
      a: 'TCP 3-way handshake use karta hai.',
      b: 'SYN -> SYN-ACK -> ACK! Classic networking fundamental.',
      c: '4-way handshake TCP connection CLOSE (FIN-ACK) ke time hota hai, establish ke time nahi.',
      d: 'UDP bina handshake ke chalta hai, TCP mein handshake mandatory hai.'
    },
    memoryTrick: 'Client: "Baat karein?" (SYN) -> Server: "Haan bhai bolo!" (SYN-ACK) -> Client: "Chalo shuru karte hain!" (ACK)!',
    tags: ['web-fundamentals', 'tcp', 'networking', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'http-vs-https',
    difficulty: 'easy',
    question: 'What is the primary security distinction between HTTP and HTTPS, and which default network port does HTTPS use?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'HTTP is encrypted on port 443; HTTPS is plain text on port 80' },
      { id: 'b', text: 'HTTP transmits unencrypted plain text (Port 80); HTTPS employs TLS/SSL encryption to guarantee confidentiality and integrity (Port 443)' },
      { id: 'c', text: 'HTTPS is restricted exclusively to banking institutions' },
      { id: 'd', text: 'HTTPS reduces network throughput by 100x' }
    ],
    correctOptionId: 'b',
    explanation: 'HTTP packets ko network router par koi bhi sniff (Wireshark) karke passwords padh sakta hai. HTTPS TLS handshake se end-to-end asymmetric/symmetric encryption apply karta hai over port 443.',
    optionExplanations: {
      a: 'Ulta bol diya, HTTP port 80 aur HTTPS port 443 hota hai.',
      b: 'Standard difference! HTTPS = HTTP + TLS on Port 443.',
      c: 'Modern web par har website HTTPS par hona mandatory hai.',
      d: 'Modern TLS 1.3 zero-RTT latency deta hai, slow nahi hota.'
    },
    memoryTrick: 'S for SECURE (Port 443)! Khula khat mat bhejo, secure lifafe mein bhejo!',
    tags: ['web-fundamentals', 'http', 'https', 'security']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'core-web-vitals',
    difficulty: 'interview',
    question: 'What user experience aspects do the Core Web Vitals metrics LCP, CLS, and INP measure?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'LCP (Perceived loading speed), CLS (Visual stability / unexpected layout shifts), INP (Interactive responsiveness to user input)' },
      { id: 'b', text: 'LCP (Login check), CLS (Code lines), INP (Input numbers)' },
      { id: 'c', text: 'Database memory, CPU speed, Disk size' },
      { id: 'd', text: 'Screen size, Color depth, Battery life' }
    ],
    correctOptionId: 'b',
    explanation: 'LCP (Largest Contentful Paint) = Sabse bada visual block kitni der mein dikha (good: <2.5s). CLS (Cumulative Layout Shift) = Elements kitna achanak koodte hain (good: <0.1). INP (Interaction to Next Paint) = Click/tap karne par screen kitni jaldi react karti hai (good: <200ms).',
    optionExplanations: {
      a: 'Modern web standards aur SEO ranking ka official measurement trinity!',
      b: 'Fake definitions.',
      c: 'Server hardware metrics hain, frontend CWV nahi.',
      d: 'Device hardware properties hain.'
    },
    memoryTrick: 'LCP = Kitni jaldi aaya! CLS = Kitna hila-dula! INP = Dabane pe kitna jaldi react kiya!',
    tags: ['web-fundamentals', 'performance', 'core-web-vitals', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'cdn',
    difficulty: 'medium',
    question: 'How does a Content Delivery Network (CDN) drastically reduce web page load times?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'By removing database tables' },
      { id: 'b', text: 'By caching static assets (images, CSS, JS) across globally distributed Edge Servers, delivering content with minimal latency from the nearest physical location' },
      { id: 'c', text: 'By installing software on the client machine' },
      { id: 'd', text: 'By rotating domain names' }
    ],
    correctOptionId: 'b',
    explanation: 'Agar main server USA mein hai aur user Mumbai mein hai, toh packet travel time ~250ms hoga. Mumbai CDN edge node se serve hone par latency sirf 10-20ms reh jaati hai!',
    optionExplanations: {
      a: 'DB se alag caching network hai.',
      b: 'Edge caching + Geolocation routing! Zero roundtrip latency.',
      c: 'Client install nahi hota.',
      d: 'Domain transparent rehta hai via CNAME.'
    },
    memoryTrick: 'Dukaan USA mein hai toh kya hua, mohalle mein godaam (CDN Edge) khol diya!',
    tags: ['web-fundamentals', 'cdn', 'performance', 'networking']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'sse-vs-ws',
    difficulty: 'interview',
    question: 'What is the fundamental architectural difference between Server-Sent Events (SSE) and WebSockets?',
    codeSnippet: 'const eventSource = new EventSource("/api/stream");',
    options: [
      { id: 'a', text: 'Both protocols are completely identical' },
      { id: 'b', text: 'WebSockets provide bi-directional (full-duplex) communication where both sides can send data; SSE provides unidirectional (server-to-client) streaming over standard HTTP' },
      { id: 'c', text: 'SSE functions exclusively on mobile devices' },
      { id: 'd', text: 'WebSockets operate via HTTP 404 responses' }
    ],
    correctOptionId: 'b',
    explanation: 'SSE (`text/event-stream`) standard HTTP connection reuse karta hai aur automatic reconnection support karta hai. Chat apps jahan user ko bhi reply bhejna hai ke liye WebSockets chahiye, par stock ticker/AI streaming output ke liye SSE lightweight aur best hai.',
    optionExplanations: {
      a: 'Directionality aur protocol level par bada farak hai.',
      b: 'Bi-directional (WebSockets) vs Server-to-Client Unidirectional (SSE).',
      c: 'Standard browser API hai.',
      d: 'WebSocket HTTP 101 Switching Protocols use karta hai.'
    },
    memoryTrick: 'WebSocket = Walkie-talkie (Dono taraf se bolo)! SSE = Radio (Sirf station se aawaz aayegi)!',
    tags: ['web-fundamentals', 'websockets', 'sse', 'real-time', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'cookies-vs-storage',
    difficulty: 'medium',
    question: 'What is the standard capacity comparison between Browser Cookies, LocalStorage, and SessionStorage?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Cookies ~4KB; LocalStorage ~5-10MB; SessionStorage ~5MB' },
      { id: 'b', text: 'Cookies 1GB; LocalStorage 10KB; SessionStorage 1MB' },
      { id: 'c', text: 'All three have a uniform 100MB limit' },
      { id: 'd', text: 'Cookies have unlimited storage capacity' }
    ],
    correctOptionId: 'a',
    explanation: 'Cookies har HTTP request ke header ke sath automatically server par travel karti hain isiliye unka size ~4KB limit hota hai taaki network choke na ho. LocalStorage aur SessionStorage client-only storage hain jinki capacity 5-10MB hoti hai.',
    optionExplanations: {
      a: 'Standard browser storage capacities! 4KB vs 5-10MB.',
      b: 'Completely inaccurate.',
      c: 'IndexedDB hundreds of MBs leti hai, LocalStorage nahi.',
      d: 'Cookie 4KB limit strict hai per domain.'
    },
    memoryTrick: 'Cookie = Chhota biscuit (4KB)! LocalStorage = Poora dabba (5MB)!',
    tags: ['web-fundamentals', 'storage', 'cookies', 'localStorage']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'http2-http3',
    difficulty: 'interview',
    question: 'How did the Multiplexing feature in HTTP/2 resolve the "Head-of-Line Blocking" issue found in HTTP/1.1?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'By transmitting multiple requests and responses concurrently as interleaved binary frames over a single persistent TCP connection' },
      { id: 'b', text: 'By forcing developers to buy multiple domain names' },
      { id: 'c', text: 'By disallowing image asset downloads' },
      { id: 'd', text: 'By deleting the browser cache' }
    ],
    correctOptionId: 'a',
    explanation: 'HTTP/1.1 mein har file ke liye alag connection banana padta tha ya line mein wait karna padta tha. HTTP/2 single TCP connection par binary framing use karke saari files parallel stream karta hai.',
    optionExplanations: {
      a: 'Multiplexing over single TCP connection! Revolutionary latency reduction.',
      b: 'Domain sharding HTTP/1.1 ka dirty workaround tha jo HTTP/2 mein deprecated ho gaya.',
      c: 'Nonsense option.',
      d: 'Caching headers HTTP/2 mein bhi preserve rehte hain.'
    },
    memoryTrick: 'Ek hi patri (Single TCP) par 50 train ke dabbe (Streams) ek sath daudao = MULTIPLEXING!',
    tags: ['web-fundamentals', 'http2', 'performance', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'service-workers',
    difficulty: 'interview',
    question: 'What is the primary architecture and role of a Service Worker in Progressive Web Apps (PWAs)?',
    codeSnippet: 'navigator.serviceWorker.register("/sw.js");',
    options: [
      { id: 'a', text: 'A background thread that directly manipulates the DOM tree' },
      { id: 'b', text: 'A programmable client-side proxy thread running in the background that intercepts network requests and enables offline caching' },
      { id: 'c', text: 'A database daemon running on the server' },
      { id: 'd', text: 'A dedicated CSS parsing thread' }
    ],
    correctOptionId: 'b',
    explanation: 'Service Worker main browser UI thread se alag background mein chalta hai (no DOM access). Ye network requests ko `fetch` event se intercept karke Cache Storage se serve karta hai, enabling true offline app experience.',
    optionExplanations: {
      a: 'Service worker DOM access nahi kar sakta.',
      b: 'Programmable Client-side Network Proxy! Foundation of Progressive Web Apps.',
      c: 'Client browser background thread hai.',
      d: 'Styling engine nahi hai.'
    },
    memoryTrick: 'Security guard at the gate! Net chala gaya toh guard purana cached maal pakda dega!',
    tags: ['web-fundamentals', 'service-worker', 'pwa', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'osi-model',
    difficulty: 'interview',
    question: 'At which layer of the OSI 7-Layer Model do HTTP, HTTPS, and WebSockets operate?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Layer 7 — Application Layer' },
      { id: 'b', text: 'Layer 4 — Transport Layer' },
      { id: 'c', text: 'Layer 3 — Network Layer' },
      { id: 'd', text: 'Layer 2 — Data Link Layer' }
    ],
    correctOptionId: 'a',
    explanation: 'Application Layer (Layer 7) end-user protocols (HTTP, FTP, SMTP, DNS, WebSocket) ko handle karta hai. Transport layer (Layer 4) TCP aur UDP ko handle karta hai.',
    optionExplanations: {
      a: 'Layer 7 Application Layer! Web applications ka home layer.',
      b: 'Layer 4 par TCP / UDP hote hain.',
      c: 'Layer 3 par IP (Internet Protocol) aur routing hoti hai.',
      d: 'Layer 2 par Ethernet / Wi-Fi MAC frames hote hain.'
    },
    memoryTrick: 'Application sabse top pe hai (Layer 7)! Sabhi web protocols L7 ke baashah hain!',
    tags: ['web-fundamentals', 'osi-model', 'networking', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'browser-storage',
    difficulty: 'medium',
    question: 'Which in-browser transactional, NoSQL-like storage engine is designed for storing large amounts of structured data, objects, and binary files?',
    codeSnippet: 'const request = window.indexedDB.open("MyDatabase", 1);',
    options: [
      { id: 'a', text: 'IndexedDB' },
      { id: 'b', text: 'WebSQL' },
      { id: 'c', text: 'LocalStorage' },
      { id: 'd', text: 'CookieStore' }
    ],
    correctOptionId: 'a',
    explanation: '`IndexedDB` browser ka full transactional object-oriented NoSQL database hai jo gigabytes of data, indexes, aur binary blobs asynchronously store kar sakta hai.',
    optionExplanations: {
      a: '`IndexedDB` large structured offline storage ke liye browser standard hai.',
      b: 'WebSQL official standards se remove ho chuka hai.',
      c: 'LocalStorage synchronous string-only 5MB storage hai.',
      d: 'CookieStore async cookie API hai.'
    },
    memoryTrick: 'Browser ke andar ka mini-MongoDB = INDEXED DB!',
    tags: ['web-fundamentals', 'indexeddb', 'storage']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'cors-mechanics',
    difficulty: 'interview',
    question: 'Why does the browser NOT dispatch an `OPTIONS` preflight request for Simple CORS requests (like standard GET or POST with standard headers)?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'For backward compatibility with legacy HTML `<form>` and `<img>` submissions that existed before the introduction of CORS' },
      { id: 'b', text: 'Because browsers skip security checks at random' },
      { id: 'c', text: 'Because simple requests are unencrypted' },
      { id: 'd', text: 'Preflight is always dispatched for every single request' }
    ],
    correctOptionId: 'a',
    explanation: 'CORS aane se pehle se hi HTML forms cross-origin POST kar sakte the. Browser ne purane web ko break na karne ke liye "Simple Requests" (GET, HEAD, POST with standard headers) ko preflight-exempt rakha.',
    optionExplanations: {
      a: 'Deep architectural history! Backward compatibility with legacy HTML forms.',
      b: 'Deterministic W3C spec rules hain.',
      c: 'Encryption HTTPS transport layer ka part hai.',
      d: 'Simple requests preflight trigger nahi karti.'
    },
    memoryTrick: 'Purane jamane ka form bina preflight chalta tha, wahi riwayat aaj bhi chal rahi hai!',
    tags: ['web-fundamentals', 'cors', 'security', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'rest-vs-rpc',
    difficulty: 'medium',
    question: 'What is the major architectural difference between RPC frameworks (like gRPC or tRPC) and standard RESTful APIs?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'RPC focuses on invoking remote Actions/Procedures (`userService.getUser({id})`), often with binary serialization (Protobuf) and strict typing, rather than manipulating resource states via HTTP verbs' },
      { id: 'b', text: 'REST runs only on Windows while RPC runs on macOS' },
      { id: 'c', text: 'RPC does not use the HTTP protocol' },
      { id: 'd', text: 'Both represent the exact same architectural protocol' }
    ],
    correctOptionId: 'a',
    explanation: 'REST resources (nouns) ko HTTP verbs se manipulate karta hai. RPC remote server par function invoke karne ki feeling deta hai (action oriented) with high performance binary protocols like HTTP/2 and Protobuf.',
    optionExplanations: {
      a: 'Resource-oriented (REST) vs Action/Procedure-oriented (RPC) with binary serialization.',
      b: 'Nonsense option.',
      c: 'gRPC HTTP/2 par chalta hai.',
      d: 'Architecture aur serialization fundamentally different hain.'
    },
    memoryTrick: 'REST = Resource dhoondho! RPC = Function call maar do!',
    tags: ['web-fundamentals', 'rpc', 'grpc', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'browser-security',
    difficulty: 'interview',
    question: 'What is the primary role of the Content Security Policy (CSP) HTTP response header?',
    codeSnippet: 'Content-Security-Policy: default-src \'self\'; script-src \'self\' https://trustedscripts.com',
    options: [
      { id: 'a', text: 'Mitigating volumetric network DDoS attacks' },
      { id: 'b', text: 'Preventing Cross-Site Scripting (XSS) and data injection attacks by restricting which sources can execute scripts or load assets' },
      { id: 'c', text: 'Protecting against local hardware failures' },
      { id: 'd', text: 'Filtering phishing emails' }
    ],
    correctOptionId: 'b',
    explanation: 'CSP browser ko batata hai ki kaunse sources (domains) se scripts, styles aur images load karne ki permission hai. Agar hacker ne XSS script inject kar bhi di, toh CSP untrusted source hone ki wajah se execution block kar dega!',
    optionExplanations: {
      a: 'DDoS rate limiting aur Cloudflare ka kaam hai.',
      b: 'Spot on! CSP XSS mitigation ka sabse powerful defense header hai.',
      c: 'Hardware issue hai.',
      d: 'Email security SPF/DKIM ka kaam hai.'
    },
    memoryTrick: 'CSP = Whitelist! Sirf apne doston (trusted domains) ko script chalane ki permission do!',
    tags: ['web-fundamentals', 'security', 'csp', 'xss', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'render-blocking',
    difficulty: 'medium',
    question: 'Why are standard `<link rel="stylesheet">` tags in the HTML `<head>` render-blocking by default?',
    codeSnippet: '<head>\n  <link rel="stylesheet" href="styles.css" />\n</head>',
    options: [
      { id: 'a', text: 'Because rendering without styles causes a Flash of Unstyled Content (FOUC); the browser waits for the CSSOM before painting' },
      { id: 'b', text: 'Because CSS stylesheets freeze computer CPU execution' },
      { id: 'c', text: 'Because CSS files typically exceed 100MB' },
      { id: 'd', text: 'Render-blocking is not a real web browser concept' }
    ],
    correctOptionId: 'a',
    explanation: 'Agar browser bina styles ke page draw kar de toh user ko adha second ugly text dikhega fir jhatke se colors change honge (FOUC). Isiliye browser CSS download aur parse hone tak render pipeline rok kar rakhta hai.',
    optionExplanations: {
      a: 'Exact explanation of CSS render-blocking nature and why critical CSS inlining matters!',
      b: 'CSS thread-safe presentation rules hain.',
      c: 'Stylesheets generally KBs mein hoti hain.',
      d: 'Render blocking Core Web Vitals ka primary optimization target hai.'
    },
    memoryTrick: 'Bina kapde pehne bahar mat niklo (FOUC)! CSS pehno fir screen pe aao!',
    tags: ['web-fundamentals', 'css', 'render-blocking', 'performance']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'cookies',
    difficulty: 'easy',
    question: 'Which cookie flag is mandatory to prevent JavaScript from accessing authentication cookies via `document.cookie`, neutralizing XSS cookie theft?',
    codeSnippet: 'Set-Cookie: sessionId=xyz; ________',
    options: [
      { id: 'a', text: 'HttpOnly' },
      { id: 'b', text: 'Secure' },
      { id: 'c', text: 'SameSite' },
      { id: 'd', text: 'Max-Age' }
    ],
    correctOptionId: 'a',
    explanation: '`HttpOnly` flag browser ko strictly instruct karta hai ki client-side JS (document.cookie) ko is cookie ka access na de. Sirf browser internal network stack HTTP requests mein ise attach karega.',
    optionExplanations: {
      a: '`HttpOnly` XSS cookie theft ko completely prevent karta hai.',
      b: '`Secure` HTTPS transmission ke liye hota hai.',
      c: '`SameSite` CSRF prevention ke liye hota hai.',
      d: '`Max-Age` lifespan ke liye hota hai.'
    },
    memoryTrick: 'HttpOnly = "Sirf HTTP network ko hath lagane do, JS ko door rakho"!',
    tags: ['web-fundamentals', 'cookies', 'security', 'xss']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'browser-caching',
    difficulty: 'medium',
    question: 'What is the critical distinction between `Cache-Control: no-cache` and `Cache-Control: no-store`?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'They are completely identical directives' },
      { id: 'b', text: '`no-cache` permits caching but requires revalidation with the origin server before reuse; `no-store` strictly forbids storing any part of the response in cache or memory' },
      { id: 'c', text: '`no-store` applies only to image files' },
      { id: 'd', text: '`no-cache` deletes website files' }
    ],
    correctOptionId: 'b',
    explanation: '`no-cache` = "Cache kar lo, par use karne se pehle server se poochho ki fresh hai ya nahi". `no-store` = "Secret banking data hai, memory ya disk par 1 byte bhi store mat karna".',
    optionExplanations: {
      a: 'Bohot bada difference hai security aur bandwidth ke perspective se.',
      b: 'Re-validation (no-cache) vs Strict non-storage (no-store)! Core HTTP interview question.',
      c: 'Sabhi HTTP responses par valid hai.',
      d: 'Nonsense option.'
    },
    memoryTrick: 'No-Cache = "Pehle confirm karo fir chalao"! No-Store = "Galti se bhi save mat karna, delete karo turant"!',
    tags: ['web-fundamentals', 'caching', 'http-headers', 'interview']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'url-anatomy',
    difficulty: 'easy',
    question: 'In the URL `https://quiz.example.com:8080/play?topic=mern#question-5`, what is the technical term for the `#question-5` component?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Path' },
      { id: 'b', text: 'Fragment Identifier (Hash)' },
      { id: 'c', text: 'Query String' },
      { id: 'd', text: 'Port' }
    ],
    correctOptionId: 'b',
    explanation: '`#` ke baad wala hissa Fragment Identifier ya Hash hota hai jo client-side par specific section scroll ya SPA client routing ke liye use hota hai aur server par send nahi hota.',
    optionExplanations: {
      a: 'Path `/play` hai.',
      b: 'Fragment / Hash identifier `#question-5` hai.',
      c: 'Query string `?topic=mern` hai.',
      d: 'Port `:8080` hai.'
    },
    memoryTrick: 'Hash (#) ke baad jo aaya wo page ka tukda (Fragment) hai!',
    tags: ['web-fundamentals', 'url', 'basics']
  },
  {
    topic: 'web-fundamentals',
    subTopic: 'web-workers',
    difficulty: 'medium',
    question: 'Why are Web Workers prohibited from directly accessing or mutating the DOM (`document`, `window`)?',
    codeSnippet: 'const worker = new Worker("worker.js");',
    options: [
      { id: 'a', text: 'Because the DOM is not thread-safe; concurrent access from multiple threads would cause race conditions and UI rendering crashes' },
      { id: 'b', text: 'Because Web Workers require commercial licenses' },
      { id: 'c', text: 'Because modern browsers lack adequate RAM' },
      { id: 'd', text: 'It is an unintentional browser bug' }
    ],
    correctOptionId: 'a',
    explanation: 'Browser ka DOM tree single-threaded architecture par based hai. Agar multiple parallel threads ek sath DOM modify karein toh memory corruption ho sakti hai, isiliye Web Workers `postMessage()` se communication karte hain.',
    optionExplanations: {
      a: 'Thread safety in UI frameworks! DOM manipulation hamesha main UI thread par restricted hoti hai.',
      b: 'Free open web standard hai.',
      c: 'RAM limitations ka mudda nahi hai.',
      d: 'Intentional architectural design decision.'
    },
    memoryTrick: 'Ghar ke dukan ka counter (DOM) ek hi banda sambhalega varna hisaab gadbada jayega!',
    tags: ['web-fundamentals', 'web-workers', 'browser-architecture', 'interview']
  }
];
