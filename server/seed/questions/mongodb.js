export const mongodbQuestions = [
  {
    topic: 'mongodb',
    subTopic: 'indexes',
    difficulty: 'interview',
    question: 'What is the primary benefit of creating indexes in MongoDB and what must the database engine perform in their absence?',
    codeSnippet: 'db.users.createIndex({ email: 1 });',
    options: [
      { id: 'a', text: 'Indexes automatically encrypt all documents on disk' },
      { id: 'b', text: 'Without an index, MongoDB must perform a full collection scan (COLLSCAN); with an index, it uses a B-Tree structure for index scans (IXSCAN) which is orders of magnitude faster' },
      { id: 'c', text: 'Indexes reduce disk storage requirements by 50%' },
      { id: 'd', text: 'Indexes can only be created on numbers, not strings' }
    ],
    correctOptionId: 'b',
    explanation: 'Agar 10 lakh documents hain aur index nahi hai, toh MongoDB ko 10 lakh documents line se scan karne padenge (COLLSCAN). Index B-Tree pointer table banata hai jisse target document O(log N) mein turant mil jata hai.',
    optionExplanations: {
      a: 'Encryption alag feature hai (Client-side field level encryption).',
      b: 'Colscan vs Ixscan! High performance DB design ka sabse important rule.',
      c: 'Index actually extra disk space leta hai data fast dhoondhne ke badle.',
      d: 'Strings, numbers, booleans, dates, geo-coordinates sab par index lagta hai.',
    },
    memoryTrick: 'Kitaab ke aakhiri panno ka INDEX! Agar index nahi hoga toh har panna palatna padega!',
    tags: ['mongodb', 'indexes', 'performance', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'aggregation',
    difficulty: 'interview',
    question: 'How do stages operate within the MongoDB Aggregation Framework pipeline?',
    codeSnippet: 'db.orders.aggregate([\n  { $match: { status: "completed" } },\n  { $group: { _id: "$customer", total: { $sum: "$amount" } } },\n  { $sort: { total: -1 } }\n]);',
    options: [
      { id: 'a', text: 'All stages execute concurrently in parallel without defined order' },
      { id: 'b', text: 'Stages execute sequentially in array order, where the output documents of one stage become the input for the next stage' },
      { id: 'c', text: 'Aggregation pipelines delete matched documents from disk' },
      { id: 'd', text: 'Only a single aggregation stage is permitted per query' }
    ],
    correctOptionId: 'b',
    explanation: 'Aggregation pipeline unix pipes (`|`) ki tarah hoti hai: Pehle `$match` ne filter kiya, filtered data `$group` mein gaya, fir grouped data `$sort` mein gaya sequentially.',
    optionExplanations: {
      a: 'Parallel nahi, ordered sequential pipeline hoti hai.',
      b: 'Spot on! Stage 1 output -> Stage 2 input -> Stage 3 output.',
      c: 'Aggregation read/transformation operation hai, delete nahi karta.',
      d: 'Array mein kitni bhi stages chain kar sakte hain.'
    },
    memoryTrick: 'Factory ki Assembly Line! Pehle chaato ($match), fir jodo ($group), fir sajalo ($sort)!',
    tags: ['mongodb', 'aggregation', 'pipeline', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'data-modeling',
    difficulty: 'interview',
    question: 'When designing a MongoDB schema, when is Embedding preferred over Referencing (Normalization)?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'When document size is expected to exceed the 16MB boundary' },
      { id: 'b', text: 'When related data is frequently read together ("Contains" relationship) and the sub-document count is bounded and small (e.g. 2-3 user addresses)' },
      { id: 'c', text: 'When storing unbounded collections with millions of log entries' },
      { id: 'd', text: 'Embedded documents are not supported in production MongoDB' }
    ],
    correctOptionId: 'b',
    explanation: 'MongoDB rule of thumb: "Data that is accessed together should be stored together". Agar bounded relationship hai (e.g. user address, line items), embed karo for single-read performance. Agar unbounded hai (e.g. 10 lakh logs), reference use karo.',
    optionExplanations: {
      a: '16MB limit BSON document ki hoti hai, cross hone par reference use karte hain.',
      b: 'Golden rule of MongoDB schema design! Access pattern drives schema.',
      c: 'Millions items embed karne se 16MB limit hit ho jayegi aur array operations slow ho jayenge.',
      d: 'Embedded documents NoSQL ka core strength hain.'
    },
    memoryTrick: 'Jo sath sath padhe jaate hain, unhe ek hi kamre mein rakho (EMBED)! Jo aawara hain, unka address likh lo (REFERENCE)!',
    tags: ['mongodb', 'data-modeling', 'embedding', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'bson',
    difficulty: 'easy',
    question: 'In which internal binary-encoded format does MongoDB store documents on disk to support high traversal speeds and rich data types?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'XML' },
      { id: 'b', text: 'BSON (Binary JSON)' },
      { id: 'c', text: 'CSV' },
      { id: 'd', text: 'YAML' }
    ],
    correctOptionId: 'b',
    explanation: 'MongoDB documents BSON (Binary encoded JSON) format mein disk par store hote hain, jo high traversal speed aur additional types provide karta hai.',
    optionExplanations: {
      a: 'XML relational ya puraane systems mein use hota tha.',
      b: 'BSON = Binary JSON! Fast encoding aur native types.',
      c: 'CSV flat tabular text format hai.',
      d: 'YAML configuration format hai.'
    },
    memoryTrick: 'JSON ka muscular binary bhai = BSON!',
    tags: ['mongodb', 'bson', 'basics']
  },
  {
    topic: 'mongodb',
    subTopic: 'crud',
    difficulty: 'easy',
    question: 'Which atomic update operator modifies specified field values in a document without replacing the entire document?',
    codeSnippet: 'db.users.updateOne({ _id: id }, { ________: { age: 26 } });',
    options: [
      { id: 'a', text: '$push' },
      { id: 'b', text: '$set' },
      { id: 'c', text: '$add' },
      { id: 'd', text: '$put' }
    ],
    correctOptionId: 'b',
    explanation: '`$set` operator specified field ko nayi value assign karta hai aur baaki bachi fields ko chheda bina waise hi chhod deta hai.',
    optionExplanations: {
      a: '`$push` array field ke andar naya element add karta hai.',
      b: '`$set` specific field update karne ka atomic operator hai.',
      c: '`$inc` number increment ke liye hota hai.',
      d: 'HTTP method hota hai, MongoDB operator nahi.'
    },
    memoryTrick: 'Value badalni hai? $SET kardo!',
    tags: ['mongodb', 'crud', 'operators']
  },
  {
    topic: 'mongodb',
    subTopic: 'crud',
    difficulty: 'medium',
    question: 'Which option passed to an update query updates matching documents or inserts a new document if no match is found?',
    codeSnippet: 'db.users.updateOne({ email: "bhai@test.com" }, { $set: { name: "Bhai" } }, { ________: true });',
    options: [
      { id: 'a', text: 'insertIfEmpty' },
      { id: 'b', text: 'upsert' },
      { id: 'c', text: 'forceCreate' },
      { id: 'd', text: 'autoInsert' }
    ],
    correctOptionId: 'b',
    explanation: '`upsert: true` (Update + Insert ka hybrid) bolta hai: "Agar mila toh Update karo, nahi mila toh naya Insert kardo!".',
    optionExplanations: {
      a: 'Invalid option name.',
      b: '`upsert: true` standard MongoDB update option hai.',
      c: 'Invalid option name.',
      d: 'Invalid option name.'
    },
    memoryTrick: 'Update + Insert = UPSERT!',
    tags: ['mongodb', 'crud', 'upsert']
  },
  {
    topic: 'mongodb',
    subTopic: 'mongoose',
    difficulty: 'easy',
    question: 'Which schema property in Mongoose automatically enforces uniqueness at the database level and builds a corresponding unique index?',
    codeSnippet: 'const userSchema = new mongoose.Schema({\n  email: { type: String, required: true, ________: true }\n});',
    options: [
      { id: 'a', text: 'primary' },
      { id: 'b', text: 'unique' },
      { id: 'c', text: 'distinct' },
      { id: 'd', text: 'isolate' }
    ],
    correctOptionId: 'b',
    explanation: '`unique: true` MongoDB collection par automatic Unique Index create karta hai jo duplicate entries insert hone par E11000 duplicate key error throw karta hai.',
    optionExplanations: {
      a: 'SQL databases mein PRIMARY KEY hota hai, Mongoose mein unique index hota hai.',
      b: '`unique: true` unique index banata hai.',
      c: '`distinct` query method hota hai duplicate values avoid karke unique values fetch karne ke liye.',
      d: 'Invalid property.'
    },
    memoryTrick: 'Duplicate se allergy hai? UNIQUE true kardo!',
    tags: ['mongodb', 'mongoose', 'schema', 'indexes']
  },
  {
    topic: 'mongodb',
    subTopic: 'mongoose',
    difficulty: 'interview',
    question: 'What does the `.populate()` method accomplish in Mongoose queries?',
    codeSnippet: 'const order = await Order.findById(orderId).populate("user");',
    options: [
      { id: 'a', text: 'It fills the database with mock seed records' },
      { id: 'b', text: 'It replaces an ObjectId reference with the actual matching document retrieved from the referenced collection (like a join)' },
      { id: 'c', text: 'It rebuilds collection indexes' },
      { id: 'd', text: 'It deletes and archives old records' }
    ],
    correctOptionId: 'b',
    explanation: 'MongoDB native joins provide nahi karta (except $lookup). Mongoose ka `.populate("fieldName")` referenced collection se target document fetch karke ObjectId ki jagah pura document embed kar deta hai.',
    optionExplanations: {
      a: 'Wo database seeding hota hai.',
      b: 'Spot on! Relational JOIN ki tarah doosre collection se data bhar deta hai.',
      c: 'Indexes createIndexes() se bante hain.',
      d: 'Population data retrieval hai, deletion nahi.'
    },
    memoryTrick: 'Id khali padi thi? .populate() lagao aur asali insaan (document) se bhar do!',
    tags: ['mongodb', 'mongoose', 'populate', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'queries',
    difficulty: 'easy',
    question: 'Which query operator is used in MongoDB to find documents where a field value is greater than or equal to (`>= 18`) a given value?',
    codeSnippet: 'db.users.find({ age: { ________: 18 } });',
    options: [
      { id: 'a', text: '$gt' },
      { id: 'b', text: '$gte' },
      { id: 'c', text: '$eq' },
      { id: 'd', text: '$in' }
    ],
    correctOptionId: 'b',
    explanation: '`$gte` stands for "Greater Than or Equal to". `$gt` sirf strictly greater than hota hai.',
    optionExplanations: {
      a: '`$gt` strictly > hota hai (18 include nahi hoga).',
      b: '`$gte` >= hota hai (Greater Than or Equal).',
      c: '`$eq` exactly barabar hota hai.',
      d: '`$in` array of matching values ke liye hota hai.'
    },
    memoryTrick: 'GTE = Greater Than Equal to! GT = Greater Than!',
    tags: ['mongodb', 'queries', 'operators']
  },
  {
    topic: 'mongodb',
    subTopic: 'objectId',
    difficulty: 'medium',
    question: 'How many bytes make up a standard MongoDB `ObjectId` and what is stored in its initial 4 bytes?',
    codeSnippet: 'ObjectId("65f1a2b3c4d5e6f7a8b9c0d1")',
    options: [
      { id: 'a', text: '12 bytes; The initial 4 bytes represent a 4-byte Unix timestamp (seconds)' },
      { id: 'b', text: '32 bytes; The initial 4 bytes store the client IP address' },
      { id: 'c', text: '16 bytes; It contains a standard UUID' },
      { id: 'd', text: '8 bytes; It encodes the database engine version' }
    ],
    correctOptionId: 'a',
    explanation: 'ObjectId 12-byte BSON type hota hai: 4-byte timestamp + 5-byte random machine/process value + 3-byte incrementing counter. Is timestamp ki wajah se ObjectIds naturally chronological order mein sorted hote hain!',
    optionExplanations: {
      a: '12 bytes total, first 4 bytes = creation timestamp (isiliye `.getTimestamp()` milta hai)!',
      b: '24 hex characters hote hain jo 12 bytes banate hain.',
      c: 'UUID 16 bytes ka hota hai, ObjectId 12 bytes ka.',
      d: 'Database version header mein nahi hota.'
    },
    memoryTrick: 'ObjectId = 12 bytes ka time-capsule! Pehle 4 bytes batate hain ye kab paida hua tha!',
    tags: ['mongodb', 'objectId', 'internals', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'mongoose',
    difficulty: 'interview',
    question: 'Why does adding `.lean()` to Mongoose read queries significantly improve performance?',
    codeSnippet: 'const users = await User.find().lean();',
    options: [
      { id: 'a', text: 'Because the data is compressed using Brotli' },
      { id: 'b', text: 'Because Mongoose returns plain high-performance JavaScript objects instead of instantiating heavy Mongoose Document instances with getters, setters, and change tracking' },
      { id: 'c', text: 'Because it triggers a database server restart' },
      { id: 'd', text: 'Because it automatically enables in-memory caching' }
    ],
    correctOptionId: 'b',
    explanation: 'By default Mongoose har document ko heavy Mongoose Document wrapper mein convert karta hai. `.lean()` us overhead ko bypass karke plain raw JSON deta hai, jisse memory usage aur execution time 3x-5x fast ho jata hai for read-only queries.',
    optionExplanations: {
      a: 'Compression nahi hoti.',
      b: 'Exact performance trick! Read-only API responses ke liye hamesha `.lean()` lagao.',
      c: 'Database pe koi effect nahi, sirf Node.js memory hydration fast hoti hai.',
      d: 'Automatic caching nahi hoti.'
    },
    memoryTrick: 'LEAN = Patla-dubla raw object! Mongoose ka bhaari jhola (methods, hooks) utar ke fek deta hai!',
    tags: ['mongodb', 'mongoose', 'performance', 'lean', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'limits',
    difficulty: 'medium',
    question: 'What is the maximum allowed size limit for a single BSON document in MongoDB?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '4 MB' },
      { id: 'b', text: '16 MB' },
      { id: 'c', text: '1 GB' },
      { id: 'd', text: 'Unlimited' }
    ],
    correctOptionId: 'b',
    explanation: 'MongoDB ne single BSON document size 16 MB par limit kiya hai taaki memory usage predictable rahe aur network transfer time bounded rahe. Isse badi files ke liye GridFS use hota hai.',
    optionExplanations: {
      a: 'Old MongoDB v1.4 mein 4MB tha.',
      b: '16 MB standard hard limit hai modern MongoDB mein.',
      c: '1 GB allowed nahi hai.',
      d: 'Unlimited memory RAM crash kar dega.'
    },
    memoryTrick: '16 MB = Single Document ki chhat! Agar 16MB se bada document ban raha hai, toh tumhara schema galat hai!',
    tags: ['mongodb', 'limits', 'bson', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'crud',
    difficulty: 'easy',
    question: 'Which MongoDB operator removes all items matching a specified condition from an array field?',
    codeSnippet: 'db.users.updateOne({ _id: id }, { ________: { tags: "inactive" } });',
    options: [
      { id: 'a', text: '$pop' },
      { id: 'b', text: '$pull' },
      { id: 'c', text: '$delete' },
      { id: 'd', text: '$slice' }
    ],
    correctOptionId: 'b',
    explanation: '`$pull` specified condition se match hone wale items ko array ke andar se kheench kar bahar fek deta hai (remove karta hai).',
    optionExplanations: {
      a: '`$pop` sirf first (-1) ya last (1) item nikaalta hai bina condition ke.',
      b: '`$pull` matching values ko array se remove karta hai.',
      c: 'Invalid operator name.',
      d: '`$slice` projection ya push limit ke liye hota hai.'
    },
    memoryTrick: 'Galti se array mein ghus gaya? PULL karke bahar kheench lo!',
    tags: ['mongodb', 'arrays', 'crud']
  },
  {
    topic: 'mongodb',
    subTopic: 'aggregation',
    difficulty: 'interview',
    question: 'Which stage in the MongoDB Aggregation pipeline deconstructs an array field from the input documents to output a document for each element?',
    codeSnippet: 'db.inventory.aggregate([\n  { ________: "$sizes" }\n]);',
    options: [
      { id: 'a', text: '$flatten' },
      { id: 'b', text: '$unwind' },
      { id: 'c', text: '$split' },
      { id: 'd', text: '$expand' }
    ],
    correctOptionId: 'b',
    explanation: '`$unwind` array field ko khol deta hai. Agar ek document mein `sizes: ["S", "M", "L"]` hai, toh `$unwind` uske 3 alag documents banayega har size ke sath.',
    optionExplanations: {
      a: 'Invalid stage name.',
      b: '`$unwind` deconstructs an array field from the input documents to output a document for each element.',
      c: 'String split alag expression hai.',
      d: 'Invalid stage name.'
    },
    memoryTrick: 'Puri reel khol ke bikhra do = $UNWIND!',
    tags: ['mongodb', 'aggregation', 'unwind', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'mongoose',
    difficulty: 'medium',
    question: 'Which Mongoose middleware hook executes right before a document is persisted to the database (commonly used to hash passwords)?',
    codeSnippet: 'userSchema.________("save", async function(next) {\n  if (this.isModified("password")) {\n    this.password = await bcrypt.hash(this.password, 10);\n  }\n  next();\n});',
    options: [
      { id: 'a', text: 'post' },
      { id: 'b', text: 'pre' },
      { id: 'c', text: 'before' },
      { id: 'd', text: 'during' }
    ],
    correctOptionId: 'b',
    explanation: '`schema.pre("save", fn)` save operation execute hone se pehle execute hota hai, jo password hashing aur data sanitization ke liye ideal hota hai.',
    optionExplanations: {
      a: '`post` save hone ke baad execute hota hai.',
      b: '`pre` middleware pehle execute hota hai.',
      c: 'Invalid hook name.',
      d: 'Invalid hook name.'
    },
    memoryTrick: 'Save karne se PEHLE = PRE! Save karne ke BAAD = POST!',
    tags: ['mongodb', 'mongoose', 'hooks', 'middleware']
  },
  {
    topic: 'mongodb',
    subTopic: 'transactions',
    difficulty: 'interview',
    question: 'What capability does MongoDB provide to ensure that multiple operations across different documents and collections either all succeed or all fail together?',
    codeSnippet: 'const session = await mongoose.startSession();\nsession.startTransaction();',
    options: [
      { id: 'a', text: 'Multi-Document ACID Transactions' },
      { id: 'b', text: 'Transactions are not supported in MongoDB' },
      { id: 'c', text: 'Only single-document updates can ever be atomic' },
      { id: 'd', text: 'Database trigger functions' }
    ],
    correctOptionId: 'a',
    explanation: 'MongoDB v4.0+ Replica Sets aur v4.2+ Sharded Clusters par Multi-Document ACID Transactions support karta hai using Sessions.',
    optionExplanations: {
      a: 'ACID transactions ensure Atomicity, Consistency, Isolation, Durability across multiple documents/collections.',
      b: 'Puraane versions mein nahi the, ab fully supported hain.',
      c: 'Single document always atomic hota hai, par transactions multi-document atomicity dete hain.',
      d: 'Atlas triggers event based hote hain, transaction primitives nahi.'
    },
    memoryTrick: 'Dono ka kaam ek sath hona chahiye varna kisi ka nahi = ACID Transactions!',
    tags: ['mongodb', 'transactions', 'acid', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'ttl-indexes',
    difficulty: 'medium',
    question: 'Which index option creates a Time-To-Live (TTL) index in MongoDB to automatically delete expired documents (e.g. temporary OTPs or sessions)?',
    codeSnippet: 'sessionSchema.index({ createdAt: 1 }, { ________: 3600 });',
    options: [
      { id: 'a', text: 'autoDelete' },
      { id: 'b', text: 'expireAfterSeconds' },
      { id: 'c', text: 'ttlTimer' },
      { id: 'd', text: 'timeToLive' }
    ],
    correctOptionId: 'b',
    explanation: 'TTL (Time-To-Live) index `expireAfterSeconds` specify karta hai. Background thread periodic intervals par expired documents ko automatically drop kar deti hai.',
    optionExplanations: {
      a: 'Invalid option.',
      b: '`expireAfterSeconds: N` TTL index creation property hai.',
      c: 'Invalid property.',
      d: 'Invalid property.'
    },
    memoryTrick: 'Time khatam, document gayab = TTL (expireAfterSeconds)!',
    tags: ['mongodb', 'indexes', 'ttl']
  },
  {
    topic: 'mongodb',
    subTopic: 'replication',
    difficulty: 'interview',
    question: 'How is high availability structured between Primary and Secondary nodes in a MongoDB Replica Set?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'All nodes accept write operations concurrently without an elected leader' },
      { id: 'b', text: 'A single Primary node handles all writes and replicates them via the oplog to Secondaries; if the Primary fails, an automated election votes a new Primary' },
      { id: 'c', text: 'Secondary nodes store cold backups and cannot serve read operations' },
      { id: 'd', text: 'Replica sets cannot contain more than 2 nodes' }
    ],
    correctOptionId: 'b',
    explanation: 'Replica Set mein standard Single-Leader architecture hota hai: Writes go to Primary -> oplog replicates to Secondaries. If Primary crashes, Raft-like election votes a new Primary in seconds with zero data loss.',
    optionExplanations: {
      a: 'Multi-master nahi hota, single primary hota hai.',
      b: 'Master-Replica automated failover architecture! Production standard.',
      c: 'Secondary read preferences ke sath reads handle kar sakte hain.',
      d: 'Typically 3 ya odd number of voting nodes hote hain.'
    },
    memoryTrick: 'Ek Captain (Primary) aur baaki Khiladi (Secondaries)! Captain gaya toh naya election!',
    tags: ['mongodb', 'replica-set', 'high-availability', 'interview']
  },
  {
    topic: 'mongodb',
    subTopic: 'projection',
    difficulty: 'easy',
    question: 'Which projection object in a MongoDB query includes `name` and `email` while explicitly excluding the default `_id` field?',
    codeSnippet: 'db.users.find({}, { ________ });',
    options: [
      { id: 'a', text: 'name: 1, email: 1, _id: 0' },
      { id: 'b', text: 'name: true, email: true' },
      { id: 'c', text: 'hide: ["_id"], show: ["name", "email"]' },
      { id: 'd', text: 'select: "name, email, !_id"' }
    ],
    correctOptionId: 'a',
    explanation: 'MongoDB mein `_id` by default hamesha include hota hai unless explicitly turned off with `_id: 0`. Baki fields `1` dekar include ki jaati hain.',
    optionExplanations: {
      a: '1 include karta hai, 0 exclude karta hai. `_id: 0` explicitly hide karta hai.',
      b: 'Isme `_id` abhi bhi aayega kyunki use 0 nahi kiya.',
      c: 'Invalid projection syntax.',
      d: 'SQL syntax hai.'
    },
    memoryTrick: '_id chipak ke aata hai! Usse chhutkara chahiye toh _id: 0 likhna padega!',
    tags: ['mongodb', 'projection', 'queries']
  },
  {
    topic: 'mongodb',
    subTopic: 'text-search',
    difficulty: 'medium',
    question: 'Which index type must be created on a string field to perform keyword-based full-text search in MongoDB?',
    codeSnippet: 'db.articles.createIndex({ content: "________" });',
    options: [
      { id: 'a', text: 'string' },
      { id: 'b', text: 'text' },
      { id: 'c', text: 'search' },
      { id: 'd', text: 'words' }
    ],
    correctOptionId: 'b',
    explanation: '`{ field: "text" }` Text Index create karta hai jo stemming, stop words removal aur `$text: { $search: "query" }` syntax enable karta hai.',
    optionExplanations: {
      a: 'Normal index { content: 1 } exact string match karta hai.',
      b: '`text` index full text search capability deta hai.',
      c: 'Atlas Search Lucene index hota hai, core text index "text" se banta hai.',
      d: 'Invalid index type.'
    },
    memoryTrick: 'Puri kitaab mein shabd dhoondhna hai? TEXT index lagao!',
    tags: ['mongodb', 'indexes', 'text-search']
  }
];
