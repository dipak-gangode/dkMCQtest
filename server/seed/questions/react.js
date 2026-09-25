export const reactQuestions = [
  {
    topic: 'react',
    subTopic: 'virtual-dom',
    difficulty: 'interview',
    question: 'What is the Virtual DOM in React and how does it make UI updates performant?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'A hidden browser DOM tree rendered directly on the GPU' },
      { id: 'b', text: 'A lightweight in-memory JavaScript representation of the Real DOM that computes minimal patches via Diffing and Reconciliation' },
      { id: 'c', text: 'A specialized CSS style caching engine' },
      { id: 'd', text: 'A web worker that prefetches HTML documents from the server' }
    ],
    correctOptionId: 'b',
    explanation: 'Virtual DOM JS memory mein tree of objects hota hai. Jab state change hoti hai toh React naya VDOM banata hai, purane VDOM se diff nikaalta hai (Reconciliation), aur Real DOM par minimum required DOM mutations karta hai.',
    optionExplanations: {
      a: 'Browser ka internal engine nahi hai, React ka apna JS object system hai.',
      b: 'Perfect interview explanation! Diffing + Batching + Minimal Real DOM manipulation.',
      c: 'CSS se koi direct sambandh nahi.',
      d: 'Prefetching network layer ka kaam hai.'
    },
    memoryTrick: 'Pehle rough copy (Virtual DOM) pe hisaab lagao, fir final fair copy (Real DOM) pe likho!',
    tags: ['react', 'virtual-dom', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'state',
    difficulty: 'medium',
    question: 'What will be displayed inside the button after clicking it three times consecutively?',
    codeSnippet: 'function Counter() {\n  const [count, setCount] = useState(0);\n  const handleClick = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n  return <button onClick={handleClick}>{count}</button>;\n}',
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '1' },
      { id: 'c', text: '0' },
      { id: 'd', text: '6' }
    ],
    correctOptionId: 'b',
    explanation: 'State updates asynchronous aur batched hoti hain. Ek render cycle mein `count` ki snapshot value 0 hi rehti hai, toh `setCount(0 + 1)` teen baar execute hua aur final state 1 set hui! Agar 3 chahiye toh updater function `setCount(prev => prev + 1)` use karna padega.',
    optionExplanations: {
      a: 'Agar updater function `prev => prev + 1` use karte tab 3 hota.',
      b: 'Ekdum classic React trap! Teeno baar 0 + 1 hua, toh answer 1 hi raha.',
      c: 'Rerender hone par state 1 reflect hogi.',
      d: 'Double multiplier nahi hai.'
    },
    memoryTrick: 'Snapshot state! Agar pichla maal chahiye toh PREV (updater callback) lagao!',
    tags: ['react', 'output', 'useState', 'batching', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'hooks',
    difficulty: 'medium',
    question: 'When does a `useEffect` callback execute when an empty dependency array `[]` is provided?',
    codeSnippet: 'useEffect(() => {\n  console.log("Mounted!");\n}, []);',
    options: [
      { id: 'a', text: 'On every single component render' },
      { id: 'b', text: 'Only once when the component initially mounts' },
      { id: 'c', text: 'Never' },
      { id: 'd', text: 'Only when the component unmounts' }
    ],
    correctOptionId: 'b',
    explanation: 'Empty dependency array `[]` ka matlab hai koi dependencies change nahi hongi, isiliye ye effect sirf initial render (componentDidMount) par ek baar chalta hai.',
    optionExplanations: {
      a: 'Har render par tab chalta hai jab dependency array omit kar diya jaye (no array).',
      b: 'Sirf mount par ek baar chalta hai initial data fetch ya event binding ke liye.',
      c: 'Mount hone par guaranteed chalta hai.',
      d: 'Unmount par cleanup return function chalta hai.'
    },
    memoryTrick: 'Khali dibba [] = Ek baar entry maar, fir aaram kar!',
    tags: ['react', 'hooks', 'useEffect']
  },
  {
    topic: 'react',
    subTopic: 'keys',
    difficulty: 'easy',
    question: 'Why is it essential to provide a unique `key` prop when rendering list elements in React?',
    codeSnippet: 'items.map(item => <li key={item.id}>{item.name}</li>)',
    options: [
      { id: 'a', text: 'To apply CSS styling rules correctly' },
      { id: 'b', text: 'To help React\'s Diffing algorithm identify which items have changed, been added, or been removed' },
      { id: 'c', text: 'To update the browser tab title' },
      { id: 'd', text: 'To satisfy HTML5 validation requirements' }
    ],
    correctOptionId: 'b',
    explanation: '`key` React ko items ki identity track karne mein madad karta hai taaki list reorder ya filter hone par poori list re-render na karni pade.',
    optionExplanations: {
      a: 'Styling ke liye class ya id hoti hai.',
      b: 'Reconciliation optimization ke liye keys mandatory hain!',
      c: 'Browser title document.title se set hota hai.',
      d: 'HTML standard nahi, React-specific reconciliation prop hai.'
    },
    memoryTrick: 'Key = Token number! Line mein kaun naya aaya kaun gaya, React token se pehchanta hai!',
    tags: ['react', 'lists', 'keys']
  },
  {
    topic: 'react',
    subTopic: 'hooks',
    difficulty: 'interview',
    question: 'What is the primary difference between `useCallback` and `useMemo`?',
    codeSnippet: 'const memoizedFn = useCallback(fn, deps);\nconst memoizedVal = useMemo(() => compute(a), deps);',
    options: [
      { id: 'a', text: 'They are completely identical hooks' },
      { id: 'b', text: '`useCallback` memoizes a callback function definition, whereas `useMemo` memoizes the computed return value of a function' },
      { id: 'c', text: '`useMemo` is exclusively used for DOM nodes' },
      { id: 'd', text: '`useCallback` automatically aborts pending network requests' }
    ],
    correctOptionId: 'b',
    explanation: '`useCallback(fn, deps)` equivalent hota hai `useMemo(() => fn, deps)`. `useCallback` function reference freeze karta hai child components ke unnecessary re-renders rokne ke liye, jabki `useMemo` expensive computation ka output cache karta hai.',
    optionExplanations: {
      a: 'Use case alag hai: function reference vs computed value.',
      b: 'Exact textbook definition! Function cache karna = useCallback; Result cache karna = useMemo.',
      c: 'DOM nodes ke liye `useRef` hota hai.',
      d: 'AbortController se cancel hoti hain API calls.'
    },
    memoryTrick: 'useCallback = Function ki chaabi bachata hai! useMemo = Calculation ka result yaad rakhta hai!',
    tags: ['react', 'hooks', 'performance', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'hooks',
    difficulty: 'medium',
    question: 'Does mutating the `.current` property of a `useRef` hook trigger a component re-render?',
    codeSnippet: 'const myRef = useRef(0);\nmyRef.current = 10;',
    options: [
      { id: 'a', text: 'Yes, it triggers a re-render on every mutation' },
      { id: 'b', text: 'No, updating `.current` does not trigger a re-render' },
      { id: 'c', text: 'Only in production builds' },
      { id: 'd', text: 'Only if the initial value is 0' }
    ],
    correctOptionId: 'b',
    explanation: '`useRef` ek mutable container deta hai jo renders ke beech persist rehta hai. Iske `.current` ko mutate karne par React ko pata nahi chalta aur koi re-render trigger nahi hota.',
    optionExplanations: {
      a: 'Re-render sirf useState ya useReducer se hota hai.',
      b: 'Bilkul sahi! Isiliye timer IDs ya direct DOM nodes ke liye useRef best hai.',
      c: 'Dev aur prod dono mein same behaviour hai.',
      d: 'Initial value se koi farak nahi padta.'
    },
    memoryTrick: 'Ref = Chupke se pocket mein rakhna! Screen pe shor (re-render) nahi machata!',
    tags: ['react', 'hooks', 'useRef']
  },
  {
    topic: 'react',
    subTopic: 'lifecycle',
    difficulty: 'medium',
    question: 'When does the cleanup function returned from a `useEffect` hook execute?',
    codeSnippet: 'useEffect(() => {\n  const timer = setInterval(() => {}, 1000);\n  return () => clearInterval(timer);\n}, []);',
    options: [
      { id: 'a', text: 'Before the component renders initially' },
      { id: 'b', text: 'During cleanup: right before the effect re-runs or when the component unmounts' },
      { id: 'c', text: 'Only when the browser window is closed' },
      { id: 'd', text: 'Never' }
    ],
    correctOptionId: 'b',
    explanation: '`useEffect` ka return function cleanup handler hota hai jo memory leaks, timers, aur event subscriptions ko saaf karne ke liye component ke unmount ya re-effect se pehle chalta hai.',
    optionExplanations: {
      a: 'Render ke baad effect chalta hai.',
      b: 'Clean-up mechanism jo memory leak rokta hai!',
      c: 'Browser close ka alag event hota hai.',
      d: 'Unmount aur effect re-run pe guaranteed execute hota hai.'
    },
    memoryTrick: 'Ghar chhodte waqt batti bujha ke jao = Cleanup function!',
    tags: ['react', 'hooks', 'useEffect', 'cleanup']
  },
  {
    topic: 'react',
    subTopic: 'props',
    difficulty: 'easy',
    question: 'What is the fundamental difference between Props and State in React?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Props are mutable while State is strictly read-only' },
      { id: 'b', text: 'Props are external inputs passed down by parent components and are read-only (immutable); State is private internal component memory managed by the component itself' },
      { id: 'c', text: 'State can only exist inside class components' },
      { id: 'd', text: 'Props are always fetched directly from the backend server' }
    ],
    correctOptionId: 'b',
    explanation: 'Props = External data passed down (read-only). State = Internal component memory managed by useState (read/write).',
    optionExplanations: {
      a: 'Ulta bol diya, props immutable hote hain.',
      b: 'Universal React fundamental! Parent se mila toh Props, apna khud ka hai toh State.',
      c: 'Hooks ke zariye functional components mein state manage hoti hai.',
      d: 'Props parent component se pass hote hain.'
    },
    memoryTrick: 'Props = Pita ji se mili daulat (hath mat lagao)! State = Apni jeb kharchi (kharcha karo, badlo)!',
    tags: ['react', 'props', 'state', 'basics']
  },
  {
    topic: 'react',
    subTopic: 'context',
    difficulty: 'medium',
    question: 'Which built-in React feature resolves the "Prop Drilling" problem without requiring external state management libraries?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'React Router' },
      { id: 'b', text: 'Context API (`createContext` + `useContext`)' },
      { id: 'c', text: 'Portal API' },
      { id: 'd', text: 'Suspense' }
    ],
    correctOptionId: 'b',
    explanation: 'Context API component tree mein global-like data (theme, auth user) provide karta hai bina har intermediate child ko props pass kiye.',
    optionExplanations: {
      a: 'React Router navigation handle karta hai.',
      b: 'Context API props drilling ka direct built-in solution hai.',
      c: 'Portal modal render karne ke liye DOM tree se bahar bhejta hai.',
      d: 'Suspense async components aur code-splitting ke loading states ke liye hota hai.'
    },
    memoryTrick: 'Har step pe prop pass karne se thak gaye? Direct CONTEXT ka pipe lagao!',
    tags: ['react', 'context-api', 'props-drilling']
  },
  {
    topic: 'react',
    subTopic: 'forms',
    difficulty: 'medium',
    question: 'What distinguishes a Controlled Component from an Uncontrolled Component in React forms?',
    codeSnippet: '<input value={val} onChange={e => setVal(e.target.value)} /> // Controlled\n<input ref={inputRef} /> // Uncontrolled',
    options: [
      { id: 'a', text: 'A controlled component has its form data driven and stored in React state; an uncontrolled component stores and handles its data internally within the DOM itself' },
      { id: 'b', text: 'They are completely identical in implementation and behavior' },
      { id: 'c', text: 'Uncontrolled components cannot render to screen' },
      { id: 'd', text: 'Controlled components do not work on mobile web browsers' }
    ],
    correctOptionId: 'a',
    explanation: 'Controlled: Input ki `value` aur `onChange` React state se bind hoti hai (Single source of truth). Uncontrolled: Input ki value DOM mein rehti hai aur `useRef` se access ki jati hai.',
    optionExplanations: {
      a: 'Textbook distinction! React state driven vs direct DOM ref driven.',
      b: 'State management authority ka bada antar hai.',
      c: 'Normal render hota hai.',
      d: 'Har platform par chalte hain.'
    },
    memoryTrick: 'Controlled = React ke remote control se chalne wala! Uncontrolled = Aawara DOM!',
    tags: ['react', 'forms', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'rules-of-hooks',
    difficulty: 'interview',
    question: 'According to the Rules of Hooks, where are you NOT permitted to call React hooks?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'At the top level of a React functional component' },
      { id: 'b', text: 'Inside loops, conditions (`if/else`), or nested functions' },
      { id: 'c', text: 'Inside custom hooks' },
      { id: 'd', text: 'Inside the root App component' }
    ],
    correctOptionId: 'b',
    explanation: 'React hooks execution order par depend karta hai state maintain karne ke liye. Agar `if` ya `for` loop mein daal diya toh renders ke beech hook call sequence break ho jayega!',
    optionExplanations: {
      a: 'Top level par hi call karna rule hai.',
      b: 'Condition ya loop mein hooks call karna strictly prohibited hai!',
      c: 'Custom hooks ke andar hooks call karna allowed aur standard practice hai.',
      d: 'Root component mein hooks call ho sakte hain.'
    },
    memoryTrick: 'Hooks ko line mein khada karo! Beech mein agar-magar (if-else) lagaya toh React pitega!',
    tags: ['react', 'rules-of-hooks', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'memo',
    difficulty: 'medium',
    question: 'What is the primary purpose of `React.memo`?',
    codeSnippet: 'const MyComponent = React.memo(function MyComponent(props) {\n  return <div>{props.name}</div>;\n});',
    options: [
      { id: 'a', text: 'To cache component HTML on the backend server' },
      { id: 'b', text: 'A Higher Order Component that skips re-rendering if component props have not changed' },
      { id: 'c', text: 'To serialize component state to browser localStorage' },
      { id: 'd', text: 'To convert a functional component into a class component' }
    ],
    correctOptionId: 'b',
    explanation: '`React.memo` HOC props ko shallowly compare karta hai. Agar parent re-render hua lekin is component ke props nahi badle, toh ye re-render skip kar deta hai.',
    optionExplanations: {
      a: 'Browser-side render skipping hai, server cache nahi.',
      b: 'Props shallow equality check karke unnecessary child renders rokta hai.',
      c: 'Storage se koi link nahi.',
      d: 'Functional components ko memoize karta hai.'
    },
    memoryTrick: 'Props wahi purane hain? Toh React.memo bolega: "Wapas render hone ki zaroorat nahi hai, chill maar!"',
    tags: ['react', 'performance', 'react-memo']
  },
  {
    topic: 'react',
    subTopic: 'conditional-rendering',
    difficulty: 'medium',
    question: 'What will be rendered on screen if `count` is 0 in the JSX snippet below?',
    codeSnippet: 'const count = 0;\nreturn <div>{count && <span>Show Text</span>}</div>;',
    options: [
      { id: 'a', text: 'Nothing (Blank)' },
      { id: 'b', text: '0' },
      { id: 'c', text: '<span>Show Text</span>' },
      { id: 'd', text: 'false' }
    ],
    correctOptionId: 'b',
    explanation: 'JS mein `0 && ...` evaluates to `0`. Aur React JSX number 0 ko valid content samajh kar screen par `0` print kar deta hai! Is bug se bachne ke liye `count > 0 && ...` ya ternary `count ? ... : null` likhna chahiye.',
    optionExplanations: {
      a: 'False ya null hota toh blank hota, lekin 0 number screen pe dikhta hai!',
      b: 'Spot on! React 0 ko render kar deta hai.',
      c: 'Condition falsy thi toh span nahi render hoga.',
      d: 'Boolean false ko React hide karta hai, but 0 number hai.'
    },
    memoryTrick: '0 ko React ginti samajhta hai! Agar gayab karna hai toh ternary ya count > 0 likho!',
    tags: ['react', 'output', 'conditional-rendering', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'portals',
    difficulty: 'medium',
    question: 'Which method renders child elements outside their parent DOM hierarchy to avoid `overflow: hidden` or `z-index` stacking issues (e.g. for modals)?',
    codeSnippet: 'ReactDOM.________(<div>Modal</div>, document.getElementById("modal-root"));',
    options: [
      { id: 'a', text: 'createPortal' },
      { id: 'b', text: 'injectNode' },
      { id: 'c', text: 'mountOutside' },
      { id: 'd', text: 'teleport' }
    ],
    correctOptionId: 'a',
    explanation: '`ReactDOM.createPortal(children, domNode)` component ko React context aur event bubbling preserve karte hue kisi alag DOM container (jaise document.body) mein render karne deta hai.',
    optionExplanations: {
      a: '`createPortal` React ka official portal method hai.',
      b: 'Invalid method.',
      c: 'Invalid method.',
      d: 'Teleport Vue.js mein hota hai, React mein createPortal hai.'
    },
    memoryTrick: 'Dr. Strange ka Portal! Parent container se nikal kar direct body ke aangan mein jao!',
    tags: ['react', 'portals', 'modals']
  },
  {
    topic: 'react',
    subTopic: 'error-boundaries',
    difficulty: 'interview',
    question: 'Which two lifecycle methods are required to define an Error Boundary in React?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '`getDerivedStateFromError` and `componentDidCatch`' },
      { id: 'b', text: '`componentDidMount` and `componentWillUnmount`' },
      { id: 'c', text: '`shouldComponentUpdate` and `render`' },
      { id: 'd', text: '`catchError` and `handleError`' }
    ],
    correctOptionId: 'a',
    explanation: 'Error Boundaries UI tree ke JS errors catch karti hain using `static getDerivedStateFromError()` (fallback state set karne ke liye) aur `componentDidCatch()` (logging ke liye).',
    optionExplanations: {
      a: 'Official lifecycle pair jo Error Boundary define karta hai.',
      b: 'Normal mount/unmount lifecycles hain.',
      c: 'Re-render optimization lifecycles hain.',
      d: 'Invalid method names.'
    },
    memoryTrick: 'Catch pakdo aur Error se state derive karo = Error Boundary!',
    tags: ['react', 'error-boundaries', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'react-router',
    difficulty: 'easy',
    question: 'Which hook is used in React Router v6 to read dynamic URL parameters (e.g. `/user/:id`)?',
    codeSnippet: '// Route path: "/user/:id"\nconst { id } = ________();',
    options: [
      { id: 'a', text: 'useLocation' },
      { id: 'b', text: 'useParams' },
      { id: 'c', text: 'useNavigate' },
      { id: 'd', text: 'useQuery' }
    ],
    correctOptionId: 'b',
    explanation: '`useParams()` current URL ke dynamic path parameters (e.g. `:id`) ko object ke form mein return karta hai.',
    optionExplanations: {
      a: '`useLocation` current pathname, search, aur hash object deta hai.',
      b: '`useParams` path params `:id` ko unpack karta hai.',
      c: '`useNavigate` programmatic navigation ke liye hota hai.',
      d: '`useQuery` React Query ka hook hai, React Router ka nahi.'
    },
    memoryTrick: 'Route ke PARAMS chahiye? Toh useParams call karo!',
    tags: ['react', 'react-router', 'hooks']
  },
  {
    topic: 'react',
    subTopic: 'suspense',
    difficulty: 'medium',
    question: 'Which component must wrap a component loaded via `React.lazy()` to display a fallback loader while it downloads?',
    codeSnippet: 'const HeavyComp = React.lazy(() => import("./Heavy"));\n<________ fallback={<Loader />}>\n  <HeavyComp />\n</________>',
    options: [
      { id: 'a', text: 'Suspense' },
      { id: 'b', text: 'ErrorBoundary' },
      { id: 'c', text: 'Fragment' },
      { id: 'd', text: 'LoadingContainer' }
    ],
    correctOptionId: 'a',
    explanation: '`<Suspense fallback={...}>` lazy loaded components ke download hone tak fallback UI (spinner waghera) show karta hai.',
    optionExplanations: {
      a: 'Suspense lazy components ke liye mandatory wrapper hai.',
      b: 'ErrorBoundary crashes handle karta hai, loading nahi.',
      c: 'Fragment empty wrapper hota hai.',
      d: 'Custom wrapper ho sakta hai, standard component nahi.'
    },
    memoryTrick: 'Lazy component aa raha hai? SUSPENSE banaye rakho aur loader dikhao!',
    tags: ['react', 'code-splitting', 'suspense']
  },
  {
    topic: 'react',
    subTopic: 'fragment',
    difficulty: 'easy',
    question: 'Which syntax allows you to group multiple JSX elements without adding an extra wrapper node to the DOM?',
    codeSnippet: '<________>\n  <h1>Title</h1>\n  <p>Description</p>\n</________>',
    options: [
      { id: 'a', text: '<React.Fragment> or empty shorthand tags `<>` `</>`' },
      { id: 'b', text: '<group>' },
      { id: 'c', text: '<wrapper>' },
      { id: 'd', text: '<block>' }
    ],
    correctOptionId: 'a',
    explanation: 'Fragments (`<React.Fragment>` ya short syntax `<>...</>`) elements ko group karte hain bina DOM mein unnecessary nodes add kiye.',
    optionExplanations: {
      a: 'Standard React feature for zero-cost grouping.',
      b: 'Invalid tag.',
      c: 'Invalid tag.',
      d: 'Invalid tag.'
    },
    memoryTrick: 'Div soup se bachna hai? Khali tag <> </> lagao!',
    tags: ['react', 'fragments', 'jsx']
  },
  {
    topic: 'react',
    subTopic: 'hooks',
    difficulty: 'interview',
    question: 'What is the critical timing difference between `useLayoutEffect` and `useEffect`?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Both execute completely in parallel at the exact same moment' },
      { id: 'b', text: '`useLayoutEffect` runs synchronously immediately after DOM mutations before browser paint, whereas `useEffect` runs asynchronously after the screen paints' },
      { id: 'c', text: '`useLayoutEffect` runs exclusively on the server side' },
      { id: 'd', text: '`useEffect` only works inside class components' }
    ],
    correctOptionId: 'b',
    explanation: '`useLayoutEffect` browser paint se pehle DOM measurements (e.g. scroll position, tooltip dimensions) lene aur flicker rokne ke liye synchronously chalta hai. General data fetching ke liye `useEffect` use hota hai.',
    optionExplanations: {
      a: 'Synchronous blocking vs Asynchronous non-blocking timing difference hai.',
      b: 'Accurate interview explanation! Paint se pehle = useLayoutEffect, Paint ke baad = useEffect.',
      c: 'Server par useLayoutEffect warning deta hai.',
      d: 'Dono functional components ke hooks hain.'
    },
    memoryTrick: 'Layout na hile (flicker na ho) screen paint se pehle = useLayoutEffect!',
    tags: ['react', 'hooks', 'lifecycle', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'custom-hooks',
    difficulty: 'easy',
    question: 'By mandatory naming convention, what prefix must custom hook function names start with in React?',
    codeSnippet: 'function ________LocalStorage(key, initialValue) {\n  // hook logic\n}',
    options: [
      { id: 'a', text: 'get' },
      { id: 'b', text: 'use' },
      { id: 'c', text: 'hook' },
      { id: 'd', text: 'react' }
    ],
    correctOptionId: 'b',
    explanation: 'Custom hooks ka naam hamesha `use` se start hona chahiye (e.g. `useWindowSize`, `useAuth`) taaki React ka linter Rules of Hooks ko enforce kar sake.',
    optionExplanations: {
      a: '`get` standard getter hota hai, hook nahi.',
      b: '`use` prefix React hooks identifier standard hai.',
      c: '`hook` naming convention nahi hai.',
      d: 'Invalid prefix.'
    },
    memoryTrick: 'Hook banaya toh aage "USE" lagana zaroori hai!',
    tags: ['react', 'custom-hooks']
  },
  {
    topic: 'react',
    subTopic: 'strict-mode',
    difficulty: 'medium',
    question: 'Why does React\'s `<React.StrictMode>` intentionally double-invoke effects and functions in development mode?',
    codeSnippet: '<React.StrictMode>\n  <App />\n</React.StrictMode>',
    options: [
      { id: 'a', text: 'To deliberately trigger browser memory leaks' },
      { id: 'b', text: 'To detect impure component renders and missing effect cleanup functions' },
      { id: 'c', text: 'It is an accidental rendering bug in Chromium' },
      { id: 'd', text: 'To execute React code at double speed' }
    ],
    correctOptionId: 'b',
    explanation: 'Strict Mode mount -> unmount -> remount simulates karta hai taaki developers ko pata chale ki unke useEffect mein cleanup logic theek hai ya nahi aur component pure hai ya nahi. Production mein ye ek hi baar chalta hai.',
    optionExplanations: {
      a: 'Memory leak pakadne ke liye hai, create karne ke liye nahi.',
      b: 'Purity aur resilience check karne ke liye deliberate double-invocation hoti hai dev mode mein.',
      c: 'Intentional React feature hai, bug nahi.',
      d: 'Double execution debugging purpose ke liye hai.'
    },
    memoryTrick: 'Do baar thappad maar ke check karta hai ki component kachha toh nahi hai!',
    tags: ['react', 'strict-mode', 'debugging']
  },
  {
    topic: 'react',
    subTopic: 'state',
    difficulty: 'medium',
    question: 'What is the standard immutable way to update a specific property in an object state while preserving remaining properties?',
    codeSnippet: 'const [user, setUser] = useState({ name: "Bhidu", age: 20 });\n// Want to update only age to 21:',
    options: [
      { id: 'a', text: 'user.age = 21; setUser(user);' },
      { id: 'b', text: 'setUser({ ...user, age: 21 });' },
      { id: 'c', text: 'setUser({ age: 21 });' },
      { id: 'd', text: 'delete user.age; user.age = 21;' }
    ],
    correctOptionId: 'b',
    explanation: 'Object state replace hoti hai merge nahi! Isiliye `{ ...user, age: 21 }` purani saari keys copy karta hai aur specified key ko override karta hai with a new object reference.',
    optionExplanations: {
      a: 'Direct mutation reference change nahi karti toh React re-render nahi karega!',
      b: 'Spread operator se shallow copy karke age update karna React standard hai.',
      c: '`{ age: 21 }` se `name` key gayab ho jayegi!',
      d: 'Direct mutation anti-pattern hai.'
    },
    memoryTrick: 'Pehle pura khandaan copy karo (...user), fir nayi value chipkao!',
    tags: ['react', 'state', 'immutability']
  },
  {
    topic: 'react',
    subTopic: 'useReducer',
    difficulty: 'interview',
    question: 'When should `useReducer` typically be preferred over `useState`?',
    codeSnippet: 'const [state, dispatch] = useReducer(reducer, initialState);',
    options: [
      { id: 'a', text: 'When managing a simple boolean toggle flag' },
      { id: 'b', text: 'When managing complex state logic with multiple sub-values or where next state heavily depends on previous state' },
      { id: 'c', text: 'Only when the external Redux library is installed' },
      { id: 'd', text: 'Never, because useReducer has been deprecated' }
    ],
    correctOptionId: 'b',
    explanation: '`useReducer` predictable state transitions deta hai through actions aur reducers, jo complex forms, multi-step wizards ya interrelated states ke liye best hota hai.',
    optionExplanations: {
      a: 'Simple boolean ke liye useState best hai.',
      b: 'Complex state machine logic ke liye useReducer clean architecture deta hai.',
      c: 'React ka built-in hook hai, Redux ki zaroorat nahi.',
      d: 'Fully active aur core hook hai.'
    },
    memoryTrick: 'State ka raita phail gaya? useReducer bulao aur actions se tameez sikhao!',
    tags: ['react', 'hooks', 'useReducer', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'props',
    difficulty: 'easy',
    question: 'Which special prop allows a child component to access elements passed between its opening and closing JSX tags?',
    codeSnippet: '<Card>\n  <p>Inside content</p>\n</Card>',
    options: [
      { id: 'a', text: 'props.content' },
      { id: 'b', text: 'props.inner' },
      { id: 'c', text: 'props.children' },
      { id: 'd', text: 'props.body' }
    ],
    correctOptionId: 'c',
    explanation: '`props.children` React ka built-in prop hai jo JSX tag ke opening aur closing tags ke beech passed elements ko represent karta hai.',
    optionExplanations: {
      a: 'Invalid prop name.',
      b: 'Invalid prop name.',
      c: '`props.children` component composition ke liye standard prop hai.',
      d: 'Invalid prop name.'
    },
    memoryTrick: 'Tag ke andar jo baitha hai, wo component ka BACHHA (children) hai!',
    tags: ['react', 'props', 'composition']
  },
  {
    topic: 'react',
    subTopic: 'higher-order-components',
    difficulty: 'interview',
    question: 'What is a Higher-Order Component (HOC) in React?',
    codeSnippet: 'const EnhancedComponent = withAuth(BaseComponent);',
    options: [
      { id: 'a', text: 'A function that takes a component as an argument and returns a new enhanced component' },
      { id: 'b', text: 'A component designed exclusively for server-side rendering' },
      { id: 'c', text: 'A component that renders directly to an HTML5 canvas' },
      { id: 'd', text: 'A recursively looping component' }
    ],
    correctOptionId: 'a',
    explanation: 'HOC component logic reuse karne ka advanced pattern hai: `Component => NewComponent`. Example: `withAuth`, `connect`.',
    optionExplanations: {
      a: 'Exact textbook definition: Component leke naya component return karna.',
      b: 'Wo Server Component hota hai.',
      c: 'Canvas component alag hota hai.',
      d: 'HOC function hota hai, loop nahi.'
    },
    memoryTrick: 'Component ko gym bheja, six-pack abs ke sath naya component bahar aaya = HOC!',
    tags: ['react', 'hoc', 'patterns', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'hooks',
    difficulty: 'medium',
    question: 'Which hook is used alongside `forwardRef` to customize the instance value or imperative methods exposed to a parent component?',
    codeSnippet: 'useImperativeHandle(ref, () => ({\n  focusInput() {\n    inputRef.current.focus();\n  }\n}));',
    options: [
      { id: 'a', text: 'useReflect' },
      { id: 'b', text: 'useImperativeHandle' },
      { id: 'c', text: 'useExpose' },
      { id: 'd', text: 'useMethod' }
    ],
    correctOptionId: 'b',
    explanation: '`useImperativeHandle` `forwardRef` ke sath mil kar parent ko customized instance value expose karta hai.',
    optionExplanations: {
      a: 'Invalid hook name.',
      b: '`useImperativeHandle` official React hook hai imperative methods expose karne ke liye.',
      c: 'Invalid hook name.',
      d: 'Invalid hook name.'
    },
    memoryTrick: 'Parent ko aukaat ke hisaab se controls do = useImperativeHandle!',
    tags: ['react', 'hooks', 'forwardRef', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'synthetic-events',
    difficulty: 'interview',
    question: 'What is a SyntheticEvent in React?',
    codeSnippet: '<button onClick={(e) => console.log(e)}>Click</button>',
    options: [
      { id: 'a', text: 'A simulated event that does not respond to physical user interactions' },
      { id: 'b', text: 'A cross-browser wrapper around native DOM events ensuring consistent behavior across all browsers' },
      { id: 'c', text: 'An event dispatched exclusively by mobile touchscreens' },
      { id: 'd', text: 'An event triggered solely by CSS keyframe animations' }
    ],
    correctOptionId: 'b',
    explanation: 'React browser-specific event quirks ko normalize karne ke liye `SyntheticEvent` wrapper banata hai taaki Chrome, Safari, Firefox sab mein event properties consistent rahein.',
    optionExplanations: {
      a: 'Actual events ko hi wrap karta hai.',
      b: 'Cross-browser wrapper for consistency! Native event `e.nativeEvent` mein rehta hai.',
      c: 'Sabhi mouse, keyboard, touch events wrap hote hain.',
      d: 'DOM events ka wrapper hai.'
    },
    memoryTrick: 'Synthetic Coat pehna diya native event ko taaki har browser mein tameez se chale!',
    tags: ['react', 'events', 'synthetic-events', 'interview']
  },
  {
    topic: 'react',
    subTopic: 'react-router',
    difficulty: 'easy',
    question: 'In React Router v6, which hook is used to navigate programmatically between routes?',
    codeSnippet: 'const navigate = ________();\nnavigate("/dashboard");',
    options: [
      { id: 'a', text: 'useHistory' },
      { id: 'b', text: 'useNavigate' },
      { id: 'c', text: 'useRedirect' },
      { id: 'd', text: 'useRoute' }
    ],
    correctOptionId: 'b',
    explanation: 'React Router v6 ne puraane `useHistory` ko replace karke simple `useNavigate()` hook diya.',
    optionExplanations: {
      a: '`useHistory` React Router v5 mein tha, v6 mein deprecated/removed hai.',
      b: '`useNavigate()` v6 ka standard programmatic navigation hook hai.',
      c: '`useRedirect` exist nahi karta, `<Navigate />` component hota hai.',
      d: 'Invalid hook.'
    },
    memoryTrick: 'Navigate karna hai toh useNavigate bulao!',
    tags: ['react', 'react-router']
  },
  {
    topic: 'react',
    subTopic: 'performance',
    difficulty: 'medium',
    question: 'Which technique is used to reduce initial bundle size by loading components and pages on demand?',
    codeSnippet: 'const Profile = React.lazy(() => import("./Profile"));',
    options: [
      { id: 'a', text: 'Code Splitting / Dynamic Imports' },
      { id: 'b', text: 'Props Drifting' },
      { id: 'c', text: 'DOM Hydration' },
      { id: 'd', text: 'Server Compression' }
    ],
    correctOptionId: 'a',
    explanation: 'Code splitting application ke bundle ko chhote chunks mein baant deta hai taaki user sirf wahi code download kare jis page par wo hai.',
    optionExplanations: {
      a: 'Code Splitting via React.lazy aur Webpack/Vite dynamic import chunking.',
      b: 'Props drifting koi technique nahi hai.',
      c: 'Hydration SSR mein client interactivity add karne ko bolte hain.',
      d: 'Gzip/Brotli server compression hoti hai, JS architecture nahi.'
    },
    memoryTrick: 'Tukde-tukde karo bundle ke = Code Splitting! Pehle load fast karo!',
    tags: ['react', 'performance', 'code-splitting']
  },
  {
    topic: 'react',
    subTopic: 'output',
    difficulty: 'interview',
    question: 'What is printed to the console on initial render and upon subsequent button clicks?',
    codeSnippet: 'function App() {\n  const [val, setVal] = useState(0);\n  console.log("Render: " + val);\n  return <button onClick={() => setVal(0)}>Click</button>;\n}',
    options: [
      { id: 'a', text: '"Render: 0" on initial render, followed by "Render: 0" repeatedly on every button click' },
      { id: 'b', text: '"Render: 0" on initial render; on button clicks, React bails out and skips re-rendering because the state value is unchanged (`Object.is` check)' },
      { id: 'c', text: 'An infinite rendering loop crash occurs' },
      { id: 'd', text: 'The button is never rendered to the DOM' }
    ],
    correctOptionId: 'b',
    explanation: 'React state setter function same value pass karne par `Object.is(prev, next)` check chalata hai. Agar value identical hai, toh React render phase ko bail out (cancel) kar deta hai bina children re-render kiye!',
    optionExplanations: {
      a: 'React bekar mein re-render nahi karta agar value identical ho.',
      b: 'Bailout mechanism! Same value par re-render skip ho jata hai.',
      c: 'Infinite loop tab hota jab setVal direct body mein call hota bina click ke.',
      d: 'Button normal render hoga.'
    },
    memoryTrick: 'Jab maal wahi hai purana (0 to 0), toh React dukan dobara nahi sajata (Bailout)!',
    tags: ['react', 'output', 'useState', 're-renders', 'interview']
  }
];
