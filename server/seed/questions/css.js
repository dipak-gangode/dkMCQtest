export const cssQuestions = [
  {
    topic: 'css',
    subTopic: 'box-model',
    difficulty: 'easy',
    question: 'In the CSS Box Model, which property value ensures that an element\'s padding and border are included within its specified width and height?',
    codeSnippet: '* {\n  box-sizing: ________;\n}',
    options: [
      { id: 'a', text: 'content-box' },
      { id: 'b', text: 'border-box' },
      { id: 'c', text: 'padding-box' },
      { id: 'd', text: 'margin-box' }
    ],
    correctOptionId: 'b',
    explanation: '`box-sizing: border-box;` bolta hai ki 100px width ka matlab exactly 100px rahega, padding aur border andar judenge bahar nahi failega!',
    optionExplanations: {
      a: '`content-box` default hota hai jisme width ke upar padding aur border add ho kar element bada ho jata hai.',
      b: '`border-box` layout fixing ka gold standard hai! Har reset CSS mein ye sabse pehle lagta hai.',
      c: '`padding-box` puraane browsers mein tha, ab deprecated hai.',
      d: '`margin-box` valid CSS box-sizing value nahi hai.'
    },
    memoryTrick: 'Border ke andar raho = BORDER-BOX! Layout kabhi nahi fatega!',
    tags: ['css', 'box-model', 'basics']
  },
  {
    topic: 'css',
    subTopic: 'flexbox',
    difficulty: 'easy',
    question: 'Which CSS Flexbox property aligns items along the container\'s Main Axis?',
    codeSnippet: '.container {\n  display: flex;\n  ________: center;\n}',
    options: [
      { id: 'a', text: 'align-items' },
      { id: 'b', text: 'justify-content' },
      { id: 'c', text: 'align-content' },
      { id: 'd', text: 'text-align' }
    ],
    correctOptionId: 'b',
    explanation: '`justify-content` flex container ke main-axis (default horizontal) alignment ko control karta hai.',
    optionExplanations: {
      a: '`align-items` cross-axis (vertical) alignment karta hai.',
      b: '`justify-content: center` main-axis par items ko center karta hai.',
      c: '`align-content` multiple flex lines ke beech vertical spacing control karta hai.',
      d: '`text-align` inline text ke liye hota hai, flex items layout ke liye nahi.'
    },
    memoryTrick: 'Justify = Just do it horizontally (Main Axis)! Align = Vertical cross axis!',
    tags: ['css', 'flexbox']
  },
  {
    topic: 'css',
    subTopic: 'positioning',
    difficulty: 'medium',
    question: 'When `position: absolute` is applied to an element, relative to what is it positioned?',
    codeSnippet: '.child {\n  position: absolute;\n  top: 0;\n  left: 0;\n}',
    options: [
      { id: 'a', text: 'Always relative to the browser viewport' },
      { id: 'b', text: 'Relative to its nearest non-static positioned ancestor' },
      { id: 'c', text: 'Always relative to its immediate parent element regardless of positioning' },
      { id: 'd', text: 'Relative to the document footer' }
    ],
    correctOptionId: 'b',
    explanation: 'Absolute element apne sabse paas wale aise ancestor ko dhundhta hai jo `position: static` na ho. Agar koi nahi mila toh <html> document ke respect mein position hoga.',
    optionExplanations: {
      a: 'Ye `position: fixed` ka kaam hota hai, absolute ka nahi.',
      b: 'Ekdum accurate! Isiliye hum parent par `position: relative` lagate hain.',
      c: 'Agar parent static hai toh absolute usko ignore karke upar wale grandparent ko dekhta hai.',
      d: 'Footer se iska koi lena dena nahi.'
    },
    memoryTrick: 'Relative baap dhundho! Agar baap relative nahi hai, toh seedha dada ji (body) ke paas jayega!',
    tags: ['css', 'positioning', 'interview']
  },
  {
    topic: 'css',
    subTopic: 'specificity',
    difficulty: 'interview',
    question: 'In standard CSS Specificity hierarchy, which selector type has the highest weight (excluding inline styles and !important)?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Class selector (.button)' },
      { id: 'b', text: 'ID selector (#header)' },
      { id: 'c', text: 'Element type selector (div)' },
      { id: 'd', text: 'Attribute selector ([type="text"])' }
    ],
    correctOptionId: 'b',
    explanation: 'Specificity score mein: ID selector = (1, 0, 0), Class/Attribute/Pseudo-class = (0, 1, 0), Element/Pseudo-element = (0, 0, 1). Toh ID selector sabse bhaari hota hai!',
    optionExplanations: {
      a: 'Class ka score 0,1,0 hota hai, ID se kam.',
      b: 'ID selector (1,0,0) 100 classes se bhi zyaada taqatwar hota hai specificity calculation mein.',
      c: 'Element selector sabse kamjor (0,0,1) hota hai.',
      d: 'Attribute selector class selector ke barabar (0,1,0) hota hai.'
    },
    memoryTrick: 'ID = Aadhaar Card! Sabse bada identification!',
    tags: ['css', 'specificity', 'interview']
  },
  {
    topic: 'css',
    subTopic: 'grid',
    difficulty: 'medium',
    question: 'What is the modern and clean CSS Grid syntax to create three equal-width columns?',
    codeSnippet: '.grid-container {\n  display: grid;\n  grid-template-columns: ________;\n}',
    options: [
      { id: 'a', text: 'repeat(3, 1fr)' },
      { id: 'b', text: '33.33% 33.33% 33.33%' },
      { id: 'c', text: '1fr 2fr 3fr' },
      { id: 'd', text: 'auto auto auto auto' }
    ],
    correctOptionId: 'a',
    explanation: '`repeat(3, 1fr)` 3 equal fractional units (1fr each) create karta hai bina gaps ke percentages calculate kiye!',
    optionExplanations: {
      a: '`repeat(3, 1fr)` modern standard CSS Grid pattern hai.',
      b: 'Percentage lagane par gap add karte hi overflow hone ka risk rehta hai.',
      c: '1fr 2fr 3fr columns unequal size ke banayega (ratio 1:2:3).',
      d: 'Char auto columns banayega aur content size ke hisab se honge.'
    },
    memoryTrick: 'FR = Fractional Unit! Grid ka best dost!',
    tags: ['css', 'grid']
  },
  {
    topic: 'css',
    subTopic: 'variables',
    difficulty: 'easy',
    question: 'What is the correct syntax for declaring a CSS Custom Property (Variable)?',
    codeSnippet: ':root {\n  ________: #6366f1;\n}',
    options: [
      { id: 'a', text: '$primary-color' },
      { id: 'b', text: '--primary-color' },
      { id: 'c', text: '@primary-color' },
      { id: 'd', text: 'var-primary-color' }
    ],
    correctOptionId: 'b',
    explanation: 'Native CSS variables do dashes se start hote hain: `--variable-name` aur unhe `var(--variable-name)` se access kiya jata hai.',
    optionExplanations: {
      a: '`$` Sass/SCSS mein variables ke liye hota hai, native CSS mein nahi.',
      b: '`--custom-property` native CSS standard syntax hai.',
      c: '`@` Less CSS mein ya media queries (@media) mein hota hai.',
      d: 'Invalid syntax hai.'
    },
    memoryTrick: 'Do dash (--) lagao, variable banao! var() se bulao!',
    tags: ['css', 'variables']
  },
  {
    topic: 'css',
    subTopic: 'flexbox',
    difficulty: 'medium',
    question: 'In the shorthand property `flex: 1 1 auto;`, what do the three values represent in order?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'flex-basis, flex-grow, flex-shrink' },
      { id: 'b', text: 'flex-grow, flex-shrink, flex-basis' },
      { id: 'c', text: 'flex-order, flex-wrap, flex-flow' },
      { id: 'd', text: 'flex-direction, flex-wrap, flex-basis' }
    ],
    correctOptionId: 'b',
    explanation: '`flex` shorthand ka sequence hota hai: `flex-grow` (1), `flex-shrink` (1), `flex-basis` (auto).',
    optionExplanations: {
      a: 'Order galat hai, pehle grow hota hai fir shrink.',
      b: 'Grow, Shrink, Basis (GSB) - bilkul sahi order!',
      c: 'Ye individual alag properties hain.',
      d: 'Flex-direction container property hai, child shorthand nahi.'
    },
    memoryTrick: 'G-S-B = Grow, Shrink, Basis! (Pehle badho, fir sikudo, fir aukaat dekho!)',
    tags: ['css', 'flexbox', 'interview']
  },
  {
    topic: 'css',
    subTopic: 'pseudo-classes',
    difficulty: 'easy',
    question: 'Which pseudo-class styles an element when a user places the mouse cursor over it?',
    codeSnippet: 'button:________ {\n  background-color: cyan;\n}',
    options: [
      { id: 'a', text: ':focus' },
      { id: 'b', text: ':active' },
      { id: 'c', text: ':hover' },
      { id: 'd', text: ':visited' }
    ],
    correctOptionId: 'c',
    explanation: '`:hover` pseudo-class tab trigger hoti hai jab user pointer (mouse) element ke upar hover karta hai.',
    optionExplanations: {
      a: '`:focus` tab lagta hai jab element keyboard ya click se focused ho.',
      b: '`:active` tab lagta hai jab mouse button daba kar rakha ho (click in progress).',
      c: '`:hover` mouse pointer hover karne par chalta hai.',
      d: '`:visited` visited links ke liye hota hai.'
    },
    memoryTrick: 'Hover = Hawa mein upar ghumana! Mouse le jao hover pao!',
    tags: ['css', 'pseudo-classes']
  },
  {
    topic: 'css',
    subTopic: 'display',
    difficulty: 'medium',
    question: 'What is the core difference between `display: none` and `visibility: hidden`?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Both behave identically in the DOM and render tree' },
      { id: 'b', text: '`display: none` removes the element from the layout flow; `visibility: hidden` hides the element while preserving its physical layout space' },
      { id: 'c', text: '`visibility: hidden` causes a browser crash on reflow' },
      { id: 'd', text: '`display: none` can only be applied to images' }
    ],
    correctOptionId: 'b',
    explanation: '`display: none` element ko render tree se completely remove karta hai (0 height/width space). `visibility: hidden` element ko chhipa deta hai lekin layout box wahi khada rehta hai.',
    optionExplanations: {
      a: 'Bahut critical visual aur reflow difference hai.',
      b: 'Bilkul sahi! Display none se layout shift hota hai, visibility hidden se space bachi rehti hai.',
      c: 'Bilkul galat, crash nahi hota.',
      d: 'Har HTML element par kaam karta hai.'
    },
    memoryTrick: 'Display None = Gayab hi ho gaya, jagah bhi chhod di! Visibility Hidden = Mr. India! Insaan wahi hai bas dikh nahi raha!',
    tags: ['css', 'display', 'interview']
  },
  {
    topic: 'css',
    subTopic: 'units',
    difficulty: 'medium',
    question: 'What is the difference between the `rem` and `em` units in CSS?',
    codeSnippet: 'p { font-size: 1.5rem; }\nspan { font-size: 1.5em; }',
    options: [
      { id: 'a', text: '`rem` is relative to the root (<html>) font size; `em` is relative to the parent element\'s font size' },
      { id: 'b', text: '`em` is relative to the root element; `rem` is relative to the direct parent' },
      { id: 'c', text: '`rem` cannot scale responsively' },
      { id: 'd', text: 'Both are always fixed to exactly 16 pixels' }
    ],
    correctOptionId: 'a',
    explanation: '`rem` = Root EM (hamesha <html> ke font-size ko refer karta hai). `em` nesting ke saath compound/multiply ho jata hai kyunki wo parent element se scale hota hai.',
    optionExplanations: {
      a: 'Sahi definition! REM use karne se compounding bug nahi aata.',
      b: 'Ulta bol diya.',
      c: 'REM responsive typography ke liye standard unit hai.',
      d: 'Dono relative scalable units hain.'
    },
    memoryTrick: 'R-EM = Root EM! Raja (html) ki baat sunega, baap ki nahi!',
    tags: ['css', 'units']
  },
  {
    topic: 'css',
    subTopic: 'responsive',
    difficulty: 'easy',
    question: 'Which media feature is standard for applying CSS rules to screens up to a maximum width (mobile-first overrides)?',
    codeSnippet: '@media (________: 768px) {\n  .sidebar { display: none; }\n}',
    options: [
      { id: 'a', text: 'max-width' },
      { id: 'b', text: 'screen-size' },
      { id: 'c', text: 'device-limit' },
      { id: 'd', text: 'window-small' }
    ],
    correctOptionId: 'a',
    explanation: '`@media (max-width: 768px)` ka matlab hai 768px ya usse chhoti screens par ye rules apply honge.',
    optionExplanations: {
      a: '`max-width` mobile-specific overrides ke liye standard media feature hai.',
      b: 'Invalid CSS media feature.',
      c: 'Aisa koi keyword nahi hota.',
      d: 'Invalid syntax.'
    },
    memoryTrick: 'Max width = Hadd se hadd itni width! Matlab chhota device!',
    tags: ['css', 'media-queries', 'responsive']
  },
  {
    topic: 'css',
    subTopic: 'positioning',
    difficulty: 'medium',
    question: 'Which modern CSS position value allows an element to remain in the normal flow until a scroll threshold is met, after which it behaves as fixed?',
    codeSnippet: '.navbar {\n  position: ________;\n  top: 0;\n}',
    options: [
      { id: 'a', text: 'static' },
      { id: 'b', text: 'sticky' },
      { id: 'c', text: 'relative' },
      { id: 'd', text: 'inherit' }
    ],
    correctOptionId: 'b',
    explanation: '`position: sticky; top: 0;` element ko normal flow mein rakhta hai jab tak scroll top offset tak na pahuche, fir fixed ki tarah stick ho jata hai.',
    optionExplanations: {
      a: '`static` default flow hai, stick nahi hota.',
      b: '`sticky` relative aur fixed ka hybrid hai, scroll tracking ke liye best.',
      c: '`relative` page ke sath scroll ho kar upar nikal jata hai.',
      d: '`inherit` parent ki property copy karta hai.'
    },
    memoryTrick: 'Chipakna hai toh STICKY lagao! Fevicol of CSS!',
    tags: ['css', 'positioning']
  },
  {
    topic: 'css',
    subTopic: 'z-index',
    difficulty: 'interview',
    question: 'Why might an element with `z-index: 9999` still appear behind another element with `z-index: 1`?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Browsers do not support z-index values exceeding 1000' },
      { id: 'b', text: 'The element belongs to a separate stacking context created by its parent that has a lower stacking order' },
      { id: 'c', text: 'The CSS file was not compiled correctly' },
      { id: 'd', text: 'z-index only functions on the <body> tag' }
    ],
    correctOptionId: 'b',
    explanation: 'Stacking context rules ke hisaab se child ka z-index sirf apne parent ke stacking context ke andar valid hota hai. Agar parent ka stacking layer neeche hai toh child chahe 999999 kar le bahar nahi nikal sakta!',
    optionExplanations: {
      a: 'Browser 2 billion tak 32-bit int support karta hai.',
      b: 'Stacking context concept! Opacity, transform, position waghera se naya stacking context ban jata hai.',
      c: 'Joke option.',
      d: 'Har positioned ya transformed element par kaam karta hai.'
    },
    memoryTrick: 'Apne ghar ka sher! Parent agar basement mein hai toh beta kitna bhi uncha kude, chhat se bahar nahi ja sakta!',
    tags: ['css', 'z-index', 'stacking-context', 'interview']
  },
  {
    topic: 'css',
    subTopic: 'transitions',
    difficulty: 'easy',
    question: 'Which CSS property defines the transition timing for smoothly interpolating property changes like background color?',
    codeSnippet: 'button {\n  transition: ________ 0.3s ease;\n}',
    options: [
      { id: 'a', text: 'background-color' },
      { id: 'b', text: 'animation-name' },
      { id: 'c', text: 'transform-style' },
      { id: 'd', text: 'filter-blur' }
    ],
    correctOptionId: 'a',
    explanation: '`transition: background-color 0.3s ease;` specific property par smooth animation lagata hai bina jump kiye.',
    optionExplanations: {
      a: '`background-color` specify karta hai ki transition kis property par smooth karna hai.',
      b: 'Keyframe animations ke liye hota hai.',
      c: '3D transforms ke liye hota hai.',
      d: 'Invalid syntax.'
    },
    memoryTrick: 'Transition karo smoothly! Jhatka mat do user ko!',
    tags: ['css', 'transitions']
  },
  {
    topic: 'css',
    subTopic: 'selectors',
    difficulty: 'medium',
    question: 'What is the difference between the selectors `div > p` and `div p`?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Both selectors match identical elements' },
      { id: 'b', text: '`div > p` selects only direct child <p> elements; `div p` selects any descendant <p> element at any nesting depth' },
      { id: 'c', text: '`div > p` is an invalid CSS selector' },
      { id: 'd', text: '`div p` selects only the first paragraph inside the div' }
    ],
    correctOptionId: 'b',
    explanation: '`>` child combinator hai jo sirf direct immediate children ko match karta hai. Space (` `) descendant combinator hai jo nested children, grandchildren sabko match karta hai.',
    optionExplanations: {
      a: 'Specificity aur selection depth alag hoti hai.',
      b: 'Direct child (>) vs Any descendant (space) - bilkul sahi!',
      c: 'Valid CSS standard hai.',
      d: 'Saare paragraphs ko match karta hai jo andar hon.'
    },
    memoryTrick: '> ka teer sirf direct bete ko lagta hai! Space sab khandaan ko lapet leta hai!',
    tags: ['css', 'selectors']
  },
  {
    topic: 'css',
    subTopic: 'modern-css',
    difficulty: 'interview',
    question: 'Which modern CSS pseudo-class acts as a parent selector, allowing an element to be styled based on whether it contains a specific descendant?',
    codeSnippet: 'article:________(img) {\n  grid-template-columns: 1fr 1fr;\n}',
    options: [
      { id: 'a', text: ':parent' },
      { id: 'b', text: ':contains' },
      { id: 'c', text: ':has' },
      { id: 'd', text: ':matches-child' }
    ],
    correctOptionId: 'c',
    explanation: '`:has()` selector ko "parent selector" kaha jata hai jo conditional styling ke liye revolutionary modern CSS feature hai.',
    optionExplanations: {
      a: ':parent CSS mein exist nahi karta.',
      b: ':contains jQuery mein tha, CSS mein nahi.',
      c: ':has() modern CSS selector hai (e.g. `card:has(img)`).',
      d: 'Fake keyword.'
    },
    memoryTrick: 'Kya tere paas (HAS) gaadi hai? Toh style alag hoga!',
    tags: ['css', 'modern-css', 'interview']
  },
  {
    topic: 'css',
    subTopic: 'overflow',
    difficulty: 'easy',
    question: 'Which property and value clips content that exceeds an element\'s padding box boundary without displaying scrollbars?',
    codeSnippet: '.card {\n  overflow: ________;\n}',
    options: [
      { id: 'a', text: 'hidden' },
      { id: 'b', text: 'visible' },
      { id: 'c', text: 'wrap' },
      { id: 'd', text: 'none' }
    ],
    correctOptionId: 'a',
    explanation: '`overflow: hidden;` boundary se bahar nikalne wale content ko hide/clip kar deta hai.',
    optionExplanations: {
      a: '`hidden` extra bahar nikalta content kaat deta hai.',
      b: '`visible` default hota hai jisme content bahar phailta hai.',
      c: '`wrap` flex-wrap ke liye hota hai, overflow ke liye nahi.',
      d: '`none` invalid overflow value hai.'
    },
    memoryTrick: 'Bahar nikal raha hai? Chhipa do = OVERFLOW HIDDEN!',
    tags: ['css', 'overflow']
  },
  {
    topic: 'css',
    subTopic: 'centering',
    difficulty: 'easy',
    question: 'Which combination of properties on a flex container perfectly centers its child both horizontally and vertically?',
    codeSnippet: '.parent {\n  display: flex;\n  ________: center;\n  ________: center;\n}',
    options: [
      { id: 'a', text: 'justify-content and align-items' },
      { id: 'b', text: 'margin-left and margin-right' },
      { id: 'c', text: 'float-left and float-right' },
      { id: 'd', text: 'text-align and vertical-align' }
    ],
    correctOptionId: 'a',
    explanation: '`display: flex; justify-content: center; align-items: center;` CSS ka universal centering trick hai.',
    optionExplanations: {
      a: 'Holy grail of centering! Dono axes par ek sath center.',
      b: 'Sirf horizontally block element center karega agar width fix ho.',
      c: 'Floats purana aur broken method tha.',
      d: 'Table cell ya inline elements ke liye hota tha.'
    },
    memoryTrick: 'Center karna hai toh: Flex + Justify Center + Align Center!',
    tags: ['css', 'flexbox', 'centering']
  },
  {
    topic: 'css',
    subTopic: 'animations',
    difficulty: 'medium',
    question: 'Which value for `animation-iteration-count` runs a CSS keyframe animation continuously in an infinite loop?',
    codeSnippet: '.spinner {\n  animation: spin 1s linear ________;\n}',
    options: [
      { id: 'a', text: 'always' },
      { id: 'b', text: 'infinite' },
      { id: 'c', text: 'loop' },
      { id: 'd', text: 'repeat' }
    ],
    correctOptionId: 'b',
    explanation: '`animation-iteration-count: infinite;` animation ko bina ruke continuous chalata rehta hai (jaise loader spinner).',
    optionExplanations: {
      a: '`always` valid animation property value nahi hai.',
      b: '`infinite` loop iterations ke liye CSS standard keyword hai.',
      c: '`loop` audio/video tag attribute hota hai, CSS animation nahi.',
      d: '`repeat` background-repeat mein hota hai.'
    },
    memoryTrick: 'Rukna mana hai = INFINITE!',
    tags: ['css', 'animations']
  },
  {
    topic: 'css',
    subTopic: 'transforms',
    difficulty: 'medium',
    question: 'To achieve 60 FPS GPU-accelerated motion without triggering layout reflow, which property should replace `top` and `left` offsets?',
    codeSnippet: '.ball:hover {\n  ________: translateY(-20px);\n}',
    options: [
      { id: 'a', text: 'transform' },
      { id: 'b', text: 'transition' },
      { id: 'c', text: 'position' },
      { id: 'd', text: 'motion' }
    ],
    correctOptionId: 'a',
    explanation: '`transform: translate(...)` browser ke composite layer par GPU se render hota hai jo layout reflow aur repaint trigger nahi karta, isiliye 60 FPS smooth rehta hai!',
    optionExplanations: {
      a: '`transform` GPU accelerated hota hai aur ultra-fast perform karta hai.',
      b: '`transition` timing duration ke liye hota hai.',
      c: '`position: top/left` layout repaint trigger karta hai jisse jank aata hai.',
      d: '`motion` valid standard property nahi hai yahan.'
    },
    memoryTrick: 'Performance bachana hai? Top/Left chhod transform translate pakad!',
    tags: ['css', 'performance', 'transform', 'interview']
  }
];
