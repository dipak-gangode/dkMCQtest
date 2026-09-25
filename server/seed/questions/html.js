export const htmlQuestions = [
  {
    topic: 'html',
    subTopic: 'semantic-html',
    difficulty: 'easy',
    question: 'Which semantic HTML5 tag should be used to define a set of primary navigation links?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '<menu>' },
      { id: 'b', text: '<nav>' },
      { id: 'c', text: '<links>' },
      { id: 'd', text: '<section>' }
    ],
    correctOptionId: 'b',
    explanation: '<nav> tag HTML5 ka standard semantic tag hai jo navigation blocks (navbar, menu links) ke liye bana hai.',
    optionExplanations: {
      a: '<menu> context menu ya toolbar ke liye hota hai, standard navbar ke liye nahi.',
      b: '<nav> bilkul sahi hai! Screen readers aur SEO bots ko batata hai ki yahan navigation links hain.',
      c: '<links> naam ka koi standard HTML element nahi hota, sirf <link> hota hai head mein.',
      d: '<section> generic content block ke liye hota hai, navigation ke liye specific nahi.'
    },
    memoryTrick: 'NAV = Navigation! Jab bhi links ka guchha ho, <nav> mein daal do!',
    tags: ['html', 'semantic', 'seo']
  },
  {
    topic: 'html',
    subTopic: 'forms',
    difficulty: 'easy',
    question: 'Which attribute connects a <label> element to an <input> field for accessibility?',
    codeSnippet: '<label for="user-email">Email:</label>\n<input id="user-email" type="email" />',
    options: [
      { id: 'a', text: 'name' },
      { id: 'b', text: 'target' },
      { id: 'c', text: 'for' },
      { id: 'd', text: 'link' }
    ],
    correctOptionId: 'c',
    explanation: '<label> tag mein `for` attribute input ki `id` se match hona chahiye taaki label pe click karne par input focus ho jaye.',
    optionExplanations: {
      a: '`name` attribute form submission ke time data key banta hai, label link karne ke liye nahi.',
      b: '`target` attribute links ya form target window/tab ke liye hota hai.',
      c: '`for` attribute label ko input ki `id` ke saath bind karta hai accessibility ke liye.',
      d: '`link` HTML attribute nahi hota label par.'
    },
    memoryTrick: 'Label kiske "FOR" hai? Input ki ID ke liye!',
    tags: ['html', 'forms', 'accessibility']
  },
  {
    topic: 'html',
    subTopic: 'seo',
    difficulty: 'medium',
    question: 'According to SEO and accessibility best practices, how many <h1> tags should be used per web page?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'One in each section (Unlimited)' },
      { id: 'b', text: 'Exactly one primary <h1>' },
      { id: 'c', text: 'At least three for higher Google ranking' },
      { id: 'd', text: 'None, only <div> elements should be used' }
    ],
    correctOptionId: 'b',
    explanation: 'Best SEO aur accessibility practice ke mutabiq har page ka ek hi main heading <h1> hona chahiye jo page ke core topic ko represent kare.',
    optionExplanations: {
      a: 'HTML5 mein theoretical permission thi but real-world SEO aur screen readers ke liye 1 hi <h1> best hai.',
      b: 'Exactly ek <h1> page ka primary title batata hai search engines aur assistive tech ko.',
      c: 'Zyaada <h1> dalne se SEO confuse ho jata hai, rank nahi badhta.',
      d: 'Semantic tags chhod kar sirf <div> use karna SEO suicide hai bhidu!'
    },
    memoryTrick: 'Desh ka ek hi PM, page ka ek hi <h1>!',
    tags: ['html', 'seo', 'accessibility']
  },
  {
    topic: 'html',
    subTopic: 'images',
    difficulty: 'easy',
    question: 'What is the primary purpose of the `alt` attribute on an <img> tag?',
    codeSnippet: '<img src="logo.png" alt="Company Logo" />',
    options: [
      { id: 'a', text: 'To show a tooltip when the image fails to load' },
      { id: 'b', text: 'To specify the dimensions of the image' },
      { id: 'c', text: 'To provide fallback text for screen readers and broken images' },
      { id: 'd', text: 'To cache the image from a CDN' }
    ],
    correctOptionId: 'c',
    explanation: '`alt` (alternative text) visually impaired users ke screen readers ke liye aur image broken hone par fallback text display karne ke liye zaroori hai.',
    optionExplanations: {
      a: 'Tooltip ke liye `title` attribute use hota hai, `alt` nahi.',
      b: 'Dimensions ke liye `width` aur `height` use hote hain.',
      c: 'Screen readers `alt` padhte hain, aur SEO image index karta hai.',
      d: 'Caching browser aur headers ka kaam hai, alt attribute ka nahi.'
    },
    memoryTrick: 'ALT = Alternate Text! Aankhein band toh alt suno!',
    tags: ['html', 'images', 'accessibility']
  },
  {
    topic: 'html',
    subTopic: 'html5',
    difficulty: 'medium',
    question: 'Which semantic HTML5 element is most appropriate for independent, self-contained content like a blog post or news article?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '<article>' },
      { id: 'b', text: '<aside>' },
      { id: 'c', text: '<div>' },
      { id: 'd', text: '<main>' }
    ],
    correctOptionId: 'a',
    explanation: '<article> tag independent, self-contained content ko represent karta hai jise syndicate kiya ja sake ya akele distribute kiya ja sake.',
    optionExplanations: {
      a: '<article> self-contained content ke liye standard tag hai jo akele bhi sense banata hai.',
      b: '<aside> sidebar ya indirectly related content ke liye hota hai.',
      c: '<div> non-semantic generic container hai.',
      d: '<main> poore document ka ek hi primary content wrapper hota hai.'
    },
    memoryTrick: 'ARTICLE = Akhbaar ka article! Kahin bhi chhap sakta hai akele!',
    tags: ['html', 'html5', 'semantic']
  },
  {
    topic: 'html',
    subTopic: 'meta-tags',
    difficulty: 'medium',
    question: 'Which viewport meta tag is required in the <head> to ensure responsive rendering across mobile devices?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '<meta name="mobile-web" content="yes" />' },
      { id: 'b', text: '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' },
      { id: 'c', text: '<meta name="responsive" content="true" />' },
      { id: 'd', text: '<meta name="screen" content="auto" />' }
    ],
    correctOptionId: 'b',
    explanation: '`viewport` meta tag mobile browsers ko batata hai ki page width screen width ke barabar rakhein aur initial zoom 1.0 set karein.',
    optionExplanations: {
      a: 'Ye non-standard tag hai.',
      b: 'Standard viewport tag jo har responsive website mein hona mandatory hai.',
      c: 'Aisa koi standard meta tag exist nahi karta.',
      d: 'Ye bhi fake attribute hai.'
    },
    memoryTrick: 'VIEWPORT = Window to the world! Mobile screen ko tameez sikhata hai!',
    tags: ['html', 'meta', 'responsive']
  },
  {
    topic: 'html',
    subTopic: 'tables',
    difficulty: 'easy',
    question: 'Which tag is used for defining table header cells that are bold and centered by default?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '<td>' },
      { id: 'b', text: '<head>' },
      { id: 'c', text: '<th>' },
      { id: 'd', text: '<header>' }
    ],
    correctOptionId: 'c',
    explanation: '`<th>` (Table Header) cell hota hai jo header content ke liye semantic markup provide karta hai.',
    optionExplanations: {
      a: '`<td>` regular table data cell ke liye hota hai.',
      b: '`<head>` poore HTML document ka metadata wrapper hota hai.',
      c: '`<th>` table heading cell hai jo bold aur screen reader accessible hota hai.',
      d: '`<header>` page ya section ka header element hai.'
    },
    memoryTrick: 'TH = Table Heading! TD = Table Data!',
    tags: ['html', 'tables']
  },
  {
    topic: 'html',
    subTopic: 'html5',
    difficulty: 'easy',
    question: 'What is the correct and simplest doctype declaration in modern HTML5?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '<!DOCTYPE html>' },
      { id: 'b', text: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">' },
      { id: 'c', text: '<doctype version="5">' },
      { id: 'd', text: '<html version="5">' }
    ],
    correctOptionId: 'a',
    explanation: 'HTML5 ne puraane lamba-chauda DTD URLs hata kar simple case-insensitive `<!DOCTYPE html>` standard banaya.',
    optionExplanations: {
      a: 'Simple, modern HTML5 standard declaration.',
      b: 'Puraana HTML 4.01 strict doctype hai jo ab use nahi hota.',
      c: 'Fake tag syntax hai.',
      d: 'HTML tag mein version attribute nahi hota.'
    },
    memoryTrick: 'Doctype HTML! Bas itna hi kaafi hai!',
    tags: ['html', 'doctype', 'html5']
  },
  {
    topic: 'html',
    subTopic: 'forms',
    difficulty: 'easy',
    question: 'Which boolean attribute prevents form submission if an input field is empty?',
    codeSnippet: '<input type="text" _________ />',
    options: [
      { id: 'a', text: 'validate="true"' },
      { id: 'b', text: 'required' },
      { id: 'c', text: 'mandatory' },
      { id: 'd', text: 'important' }
    ],
    correctOptionId: 'b',
    explanation: '`required` attribute browser ko form submit karne se rokta hai agar field empty ho.',
    optionExplanations: {
      a: '`validate` standard HTML attribute nahi hai.',
      b: '`required` browser-native validation trigger karta hai.',
      c: '`mandatory` valid attribute nahi hai.',
      d: '`important` CSS mein hota hai, HTML attribute nahi.'
    },
    memoryTrick: 'Form bharna REQUIRED hai, option nahi!',
    tags: ['html', 'forms', 'validation']
  },
  {
    topic: 'html',
    subTopic: 'accessibility',
    difficulty: 'interview',
    question: 'According to WAI-ARIA guidelines, which attribute should be used to provide an accessible label for an icon-only button?',
    codeSnippet: '<button aria-label="Close dialog">✖</button>',
    options: [
      { id: 'a', text: 'title' },
      { id: 'b', text: 'aria-label' },
      { id: 'c', text: 'placeholder' },
      { id: 'd', text: 'alt' }
    ],
    correctOptionId: 'b',
    explanation: '`aria-label` interactive elements ko accessible name deta hai jab visual text maujood na ho.',
    optionExplanations: {
      a: '`title` mouse hover pe tooltip deta hai but keyboard/touch screen readers pe unreliable hota hai.',
      b: '`aria-label` assistive technologies ko direct string padh ke sunata hai.',
      c: '`placeholder` sirf inputs ke hint text ke liye hota hai.',
      d: '`alt` sirf <img>, <area>, aur <input type="image"> par valid hota hai, <button> par nahi.'
    },
    memoryTrick: 'Button pe icon hai? aria-label lagao taaki andha bhai bhi samjhe!',
    tags: ['html', 'accessibility', 'aria', 'interview']
  },
  {
    topic: 'html',
    subTopic: 'html5',
    difficulty: 'medium',
    question: 'What is the key difference between the `async` and `defer` attributes on a <script> tag?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'There is no difference; they behave identically' },
      { id: 'b', text: '`async` executes as soon as downloaded (order not guaranteed); `defer` executes in document order after HTML parsing completes' },
      { id: 'c', text: '`defer` is for CSS stylesheets while `async` is for JavaScript' },
      { id: 'd', text: '`async` pauses the browser completely while downloading' }
    ],
    correctOptionId: 'b',
    explanation: '`defer` script ko background mein download karta hai aur DOM ready hone par HTML order mein run karta hai. `async` download hote hi parsing rok kar run ho jati hai.',
    optionExplanations: {
      a: 'Bahut bada farak hai execution timing aur execution order mein.',
      b: 'Bilkul sahi! Dependency wali scripts ke liye `defer` best hai taaki DOM element mil sake.',
      c: 'Dono scripts ke liye hote hain.',
      d: 'Synchronous script browser freeze karti hai, async nahi.'
    },
    memoryTrick: 'DEFER = Defer until DOM is ready! ASYNC = As soon as downloaded, execute!',
    tags: ['html', 'performance', 'scripts', 'interview']
  },
  {
    topic: 'html',
    subTopic: 'semantic-html',
    difficulty: 'easy',
    question: 'Which semantic HTML5 element should be used for the footer section of a page containing copyright notices and legal links?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '<bottom>' },
      { id: 'b', text: '<end>' },
      { id: 'c', text: '<footer>' },
      { id: 'd', text: '<foot>' }
    ],
    correctOptionId: 'c',
    explanation: '`<footer>` semantic tag hai jo page ya section ke concluding content ke liye use hota hai.',
    optionExplanations: {
      a: '<bottom> tag exist nahi karta.',
      b: '<end> invalid tag hai.',
      c: '<footer> semantic HTML5 standard tag hai.',
      d: '<foot> galat hai, table mein <tfoot> hota hai aur page pe <footer>.'
    },
    memoryTrick: 'Sir pe <header>, pairon mein <footer>!',
    tags: ['html', 'semantic']
  },
  {
    topic: 'html',
    subTopic: 'inputs',
    difficulty: 'easy',
    question: 'Which HTML5 input type brings up an optimized email keyboard on mobile devices and provides native browser email validation?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'type="text"' },
      { id: 'b', text: 'type="mail"' },
      { id: 'c', text: 'type="email"' },
      { id: 'd', text: 'type="address"' }
    ],
    correctOptionId: 'c',
    explanation: '`type="email"` HTML5 ka input type hai jo format validation aur mobile keyboard adjustment karta hai.',
    optionExplanations: {
      a: '`type="text"` normal text leta hai, email keypad nahi kholta.',
      b: '`mail` nahi, standard `email` hota hai.',
      c: '`type="email"` standard HTML5 input type hai.',
      d: '`address` valid input type nahi hai.'
    },
    memoryTrick: 'Email likhna hai toh type="email" hi daal bhidu!',
    tags: ['html', 'inputs', 'forms']
  },
  {
    topic: 'html',
    subTopic: 'links',
    difficulty: 'medium',
    question: 'When opening links in a new tab with `target="_blank"`, which `rel` attribute values should be added to prevent reverse tabnabbing security vulnerabilities?',
    codeSnippet: '<a href="https://example.com" target="_blank" rel="________">Link</a>',
    options: [
      { id: 'a', text: 'rel="noopener noreferrer"' },
      { id: 'b', text: 'secure="true"' },
      { id: 'c', text: 'auth="verified"' },
      { id: 'd', text: 'crossorigin="anonymous"' }
    ],
    correctOptionId: 'a',
    explanation: '`rel="noopener noreferrer"` new tab ko parent window ke `window.opener` object ko access karne aur malicious redirection (reverse tabnabbing) se rokta hai.',
    optionExplanations: {
      a: '`noopener noreferrer` security vulnerability (tabnabbing) block karta hai.',
      b: '`secure` attribute link tag pe nahi hota.',
      c: '`auth` fake attribute hai.',
      d: '`crossorigin` images/scripts/fonts ke CORS ke liye hota hai, links ke target security ke liye nahi.'
    },
    memoryTrick: 'Target blank? NOOPENER lagao varna naya tab purane tab ko hack kar lega!',
    tags: ['html', 'security', 'links', 'interview']
  },
  {
    topic: 'html',
    subTopic: 'html5',
    difficulty: 'easy',
    question: 'Which native HTML5 element allows video playback directly in modern browsers without third-party plugins?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '<media>' },
      { id: 'b', text: '<movie>' },
      { id: 'c', text: '<video>' },
      { id: 'd', text: '<embed-player>' }
    ],
    correctOptionId: 'c',
    explanation: '`<video>` tag HTML5 mein standard native video playback support provide karta hai with `<source>` elements.',
    optionExplanations: {
      a: '<media> tag nahi hota.',
      b: '<movie> tag nahi hota.',
      c: '<video> standard HTML5 element hai with controls, autoplay, loop attributes.',
      d: '<embed-player> non-standard hai.'
    },
    memoryTrick: 'Video dekhna hai toh <video> tag lagao!',
    tags: ['html', 'multimedia', 'html5']
  },
  {
    topic: 'html',
    subTopic: 'lists',
    difficulty: 'easy',
    question: 'Which HTML tag creates a numbered ordered list (1, 2, 3...)?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '<ul>' },
      { id: 'b', text: '<ol>' },
      { id: 'c', text: '<dl>' },
      { id: 'd', text: '<nl>' }
    ],
    correctOptionId: 'b',
    explanation: '`<ol>` ka matlab Ordered List hota hai jisme items automatically numbered hote hain.',
    optionExplanations: {
      a: '`<ul>` Unordered List (bullet points) ke liye hota hai.',
      b: '`<ol>` Ordered List (1, 2, 3...) ke liye hota hai.',
      c: '`<dl>` Description List (term + definition) ke liye hota hai.',
      d: '`<nl>` koi tag nahi hota.'
    },
    memoryTrick: 'OL = Ordered List! UL = Unordered List!',
    tags: ['html', 'lists']
  },
  {
    topic: 'html',
    subTopic: 'seo',
    difficulty: 'interview',
    question: 'Which link tag relationship informs search engines of the master URL to prevent duplicate content penalties?',
    codeSnippet: '<link rel="canonical" href="https://example.com/blog" />',
    options: [
      { id: 'a', text: 'rel="canonical"' },
      { id: 'b', text: 'rel="original"' },
      { id: 'c', text: 'rel="author"' },
      { id: 'd', text: 'rel="master"' }
    ],
    correctOptionId: 'a',
    explanation: 'Canonical tag (`rel="canonical"`) search engines ko batata hai ki multiple similar URLs mein se kaunsa URL master version hai.',
    optionExplanations: {
      a: '`rel="canonical"` duplicate pages ki SEO authority ek main URL pe consolidate karta hai.',
      b: '`original` standard relationship type nahi hai.',
      c: '`rel="author"` content creator ko link karta hai.',
      d: '`master` non-existent attribute hai.'
    },
    memoryTrick: 'Canon = Asli sach! CANONICAL = Asli URL!',
    tags: ['html', 'seo', 'interview']
  },
  {
    topic: 'html',
    subTopic: 'html5',
    difficulty: 'medium',
    question: 'Which input type is best suited for numeric values with min, max, and step validation?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'type="digit"' },
      { id: 'b', text: 'type="number"' },
      { id: 'c', text: 'type="integer"' },
      { id: 'd', text: 'type="calc"' }
    ],
    correctOptionId: 'b',
    explanation: '`type="number"` spinner controls aur `min`, `max`, `step` attributes support karta hai.',
    optionExplanations: {
      a: '`digit` invalid type hai.',
      b: '`type="number"` standard HTML5 input type hai.',
      c: '`integer` invalid type hai.',
      d: '`calc` CSS function hota hai, input type nahi.'
    },
    memoryTrick: 'Numbers ke liye type="number"!',
    tags: ['html', 'inputs', 'forms']
  },
  {
    topic: 'html',
    subTopic: 'accessibility',
    difficulty: 'medium',
    question: 'Which native HTML5 element represents an accessible popup modal dialog and provides a `.showModal()` method?',
    codeSnippet: '<dialog id="myModal">\n  <p>Hello Developer</p>\n</dialog>',
    options: [
      { id: 'a', text: '<modal>' },
      { id: 'b', text: '<popup>' },
      { id: 'c', text: '<dialog>' },
      { id: 'd', text: '<overlay>' }
    ],
    correctOptionId: 'c',
    explanation: '`<dialog>` tag modern HTML5 native dialog element hai jisme backdrop, focus trapping, aur ESC key close automatic milta hai.',
    optionExplanations: {
      a: '<modal> non-standard tag hai.',
      b: '<popup> tag nahi hai (halanki modern popover attribute aaya hai).',
      c: '<dialog> official HTML element hai modal windows ke liye.',
      d: '<overlay> custom class ho sakti hai, HTML tag nahi.'
    },
    memoryTrick: 'Modal popup banana hai? HTML5 ka DIALOG tag use karo!',
    tags: ['html', 'html5', 'dialog']
  },
  {
    topic: 'html',
    subTopic: 'basics',
    difficulty: 'easy',
    question: 'What is the correct syntax for linking an external CSS stylesheet to an HTML document?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '<style src="styles.css"></style>' },
      { id: 'b', text: '<link rel="stylesheet" href="styles.css">' },
      { id: 'c', text: '<css link="styles.css">' },
      { id: 'd', text: '<script href="styles.css"></script>' }
    ],
    correctOptionId: 'b',
    explanation: '`<link rel="stylesheet" href="filename.css">` external CSS files ko HTML document ke saath link karta hai.',
    optionExplanations: {
      a: '<style> inline CSS ke liye hota hai, external file ke liye `src` attribute nahi hota.',
      b: '<link rel="stylesheet"> standard tareeqa hai.',
      c: '<css> naam ka koi tag nahi hota.',
      d: '<script> JavaScript files ke liye hota hai aur `src` leta hai, `href` nahi.'
    },
    memoryTrick: 'CSS ko LINK karo, script ko RUN karo!',
    tags: ['html', 'basics', 'css']
  }
];
