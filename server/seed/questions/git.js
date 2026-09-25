export const gitQuestions = [
  {
    topic: 'git',
    subTopic: 'basics',
    difficulty: 'easy',
    question: 'Which command moves modified and newly created files in the working directory into the Staging Area?',
    codeSnippet: 'git ________ .',
    options: [
      { id: 'a', text: 'stage' },
      { id: 'b', text: 'add' },
      { id: 'c', text: 'commit' },
      { id: 'd', text: 'push' }
    ],
    correctOptionId: 'b',
    explanation: '`git add .` current directory ke sabhi modified aur new files ko staging index area mein move karta hai commit ke liye ready karne.',
    optionExplanations: {
      a: '`stage` direct git command nahi hoti.',
      b: '`git add` staging area mein files stage karta hai.',
      c: '`git commit` staged changes ka snapshot record karta hai.',
      d: '`git push` local commits ko remote repo par upload karta hai.'
    },
    memoryTrick: 'Pehle thaile mein samaan dalo (git add), fir billing karao (git commit)!',
    tags: ['git', 'basics', 'staging']
  },
  {
    topic: 'git',
    subTopic: 'stash',
    difficulty: 'medium',
    question: 'Which command temporarily shelves uncommitted changes to give you a clean working copy without creating a commit?',
    codeSnippet: 'git ________',
    options: [
      { id: 'a', text: 'stash' },
      { id: 'b', text: 'hide' },
      { id: 'c', text: 'pause' },
      { id: 'd', text: 'discard' }
    ],
    correctOptionId: 'a',
    explanation: '`git stash` uncommitted dirty working directory changes ko stash stack par save karta hai aur repo ko clean HEAD commit par le aata hai. Wapas paane ke liye `git stash pop` karte hain.',
    optionExplanations: {
      a: '`git stash` temporary save karne ke liye standard command hai.',
      b: 'Invalid git command.',
      c: 'Invalid git command.',
      d: 'Invalid git command.'
    },
    memoryTrick: 'STASH = Jeb mein chhupa lo! Urgent bug fix karo, fir nikal lena (stash pop)!',
    tags: ['git', 'stash']
  },
  {
    topic: 'git',
    subTopic: 'merge-vs-rebase',
    difficulty: 'interview',
    question: 'What is the core difference between `git merge` and `git rebase` from a commit history perspective?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'Both generate completely identical commit graphs' },
      { id: 'b', text: '`git merge` creates a new merge commit and preserves non-linear history; `git rebase` replays feature branch commits onto the tip of the target branch for a clean, linear history' },
      { id: 'c', text: '`git rebase` deletes the repository' },
      { id: 'd', text: '`git merge` only executes on GitHub' }
    ],
    correctOptionId: 'b',
    explanation: 'Merge branches ke milne ka record banata hai (merge commit). Rebase commits ko rewrite karke linear line banata hai. Public/main branch par rebase karna mana hota hai kyunki commits ke SHA hash badal jaate hain!',
    optionExplanations: {
      a: 'Commit history graph bohot alag hota hai (Diamond shape vs Straight line).',
      b: 'Spot on! Merge commit vs Linear history rewriting.',
      c: 'Repo delete nahi karta.',
      d: 'Local terminal command hai.'
    },
    memoryTrick: 'Merge = Do raaste aapas mein jud gaye (Ganth bandhi)! Rebase = Apne ghar ko utha ke naye plot ke upar rakh diya!',
    tags: ['git', 'merge', 'rebase', 'interview']
  },
  {
    topic: 'git',
    subTopic: 'reset-vs-revert',
    difficulty: 'interview',
    question: 'Why should `git revert` be used instead of `git reset` to undo a faulty commit on a public shared branch?',
    codeSnippet: 'git revert <commit-hash>',
    options: [
      { id: 'a', text: 'Because `git reset` rewrites history and breaks remote collaboration, whereas `git revert` safely creates a new commit that inverts the previous changes' },
      { id: 'b', text: 'Because `git reset` disconnects network access' },
      { id: 'c', text: 'Because `git revert` is free' },
      { id: 'd', text: 'Both commands behave identically' }
    ],
    correctOptionId: 'a',
    explanation: 'Public branches par history kabhi delete nahi karni chahiye! `git revert` previous commit ke changes ka mirror opposite naya commit create karta hai bina history chhede, jo push karne ke liye 100% safe hai.',
    optionExplanations: {
      a: 'Gold standard Git safety rule! Private branch = reset, Public shared branch = revert.',
      b: 'Internet se koi connection nahi.',
      c: 'Git completely free and open source hai.',
      d: 'Reset history erase karta hai, revert new commit add karta hai.'
    },
    memoryTrick: 'Public mein ho toh pichla panna mat phaado (Reset mat karo)! Naya panna likho "Pichli baat cancel" (REVERT)!',
    tags: ['git', 'reset', 'revert', 'interview']
  },
  {
    topic: 'git',
    subTopic: 'cherry-pick',
    difficulty: 'interview',
    question: 'Which command applies the changes from a specific commit of another branch directly onto your current branch without merging the whole branch?',
    codeSnippet: 'git ________ <commit-hash>',
    options: [
      { id: 'a', text: 'cherry-pick' },
      { id: 'b', text: 'pick-commit' },
      { id: 'c', text: 'copy-commit' },
      { id: 'd', text: 'extract' }
    ],
    correctOptionId: 'a',
    explanation: '`git cherry-pick <hash>` specific commit ke diff ko current working HEAD par apply karke ek naya duplicate commit bana deta hai.',
    optionExplanations: {
      a: '`git cherry-pick` standard Git command hai specific commits selectively lene ke liye.',
      b: 'Invalid command.',
      c: 'Invalid command.',
      d: 'Invalid command.'
    },
    memoryTrick: 'Puri daali todne ke bajaye sirf ek laal CHERRY chun lo = CHERRY-PICK!',
    tags: ['git', 'cherry-pick', 'interview']
  },
  {
    topic: 'git',
    subTopic: 'branches',
    difficulty: 'easy',
    question: 'Which command creates a new branch and immediately switches to it?',
    codeSnippet: 'git ________ -b feature-login',
    options: [
      { id: 'a', text: 'checkout' },
      { id: 'b', text: 'branch' },
      { id: 'c', text: 'switch' },
      { id: 'd', text: 'goto' }
    ],
    correctOptionId: 'a',
    explanation: '`git checkout -b <name>` ya modern Git 2.23+ mein `git switch -c <name>` branch create karke switch kar deta hai.',
    optionExplanations: {
      a: '`git checkout -b` classic widely-used standard command hai.',
      b: '`git branch <name>` sirf branch banata hai switch nahi karta.',
      c: 'Switch ke sath `-c` lagta hai, `-b` nahi.',
      d: 'Invalid command.'
    },
    memoryTrick: 'Checkout karo -b ke sath, nayi patri pe daudo!',
    tags: ['git', 'branches', 'basics']
  },
  {
    topic: 'git',
    subTopic: 'pull',
    difficulty: 'medium',
    question: 'Which two underlying commands are executed internally when running `git pull`?',
    codeSnippet: 'git pull origin main',
    options: [
      { id: 'a', text: '`git fetch` followed by `git merge`' },
      { id: 'b', text: '`git clone` followed by `git push`' },
      { id: 'c', text: '`git add` followed by `git commit`' },
      { id: 'd', text: '`git status` followed by `git diff`' }
    ],
    correctOptionId: 'a',
    explanation: '`git pull` pehle remote se nayi history download karta hai (`git fetch`), aur fir current branch mein integrate karta hai (`git merge FETCH_HEAD`).',
    optionExplanations: {
      a: 'Fetch + Merge = Pull! (Ya `--rebase` flag ke sath Fetch + Rebase).',
      b: 'Clone poori repo copy karta hai.',
      c: 'Staging and committing alag phase hai.',
      d: 'Inspection commands hain.'
    },
    memoryTrick: 'Pehle dukan se maal laao (FETCH), fir ghar ke samaan mein milaao (MERGE) = PULL!',
    tags: ['git', 'pull', 'fetch']
  },
  {
    topic: 'git',
    subTopic: 'commit',
    difficulty: 'easy',
    question: 'Which flag is used with `git commit` to modify the most recent commit message or include newly staged changes in it?',
    codeSnippet: 'git commit --________ -m "Updated message"',
    options: [
      { id: 'a', text: 'modify' },
      { id: 'b', text: 'amend' },
      { id: 'c', text: 'edit' },
      { id: 'd', text: 'fix' }
    ],
    correctOptionId: 'b',
    explanation: '`git commit --amend` previous commit ko naye changes aur naye message ke sath replace kar deta hai.',
    optionExplanations: {
      a: 'Invalid flag.',
      b: '`--amend` last commit ko patch karta hai.',
      c: 'Invalid flag.',
      d: 'Invalid flag.'
    },
    memoryTrick: 'Galti sudharni hai aakhiri commit ki? AMEND maar do!',
    tags: ['git', 'commit', 'amend']
  },
  {
    topic: 'git',
    subTopic: 'gitignore',
    difficulty: 'easy',
    question: 'Which file is used to specify intentionally untracked files and folders (such as `.env` and `node_modules/`) that Git should ignore?',
    codeSnippet: '',
    options: [
      { id: 'a', text: '.gitconfig' },
      { id: 'b', text: '.gitignore' },
      { id: 'c', text: '.gitkeep' },
      { id: 'd', text: '.gitmodules' }
    ],
    correctOptionId: 'b',
    explanation: '`.gitignore` file un patterns ko list karti hai jise Git untracked status mein hi chhod deta hai aur repo mein commit nahi karta.',
    optionExplanations: {
      a: 'Global git settings ke liye hota hai.',
      b: '`.gitignore` files ko ignore karne ki standard file hai.',
      c: 'Empty folders preserve karne ke liye dummy file convention hai.',
      d: 'Submodules configure karta hai.'
    },
    memoryTrick: 'Ignore karna hai toh .gitignore mein likh do!',
    tags: ['git', 'gitignore']
  },
  {
    topic: 'git',
    subTopic: 'conflicts',
    difficulty: 'medium',
    question: 'When does a Git merge conflict occur?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'When two developers edit completely different files' },
      { id: 'b', text: 'When competing changes are made to the EXACT same lines of the SAME file in two branches and Git cannot automatically reconcile them' },
      { id: 'c', text: 'When a commit message is left empty' },
      { id: 'd', text: 'When an internet connection drops' }
    ],
    correctOptionId: 'b',
    explanation: 'Git automatically non-overlapping changes merge kar deta hai. Par agar same line of code par branch A ne kuch likha aur branch B ne kuch aur, toh Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) daal kar human intervention mangta hai.',
    optionExplanations: {
      a: 'Alag files automatic clean merge ho jati hain.',
      b: 'Same file, same lines, different changes = MERGE CONFLICT!',
      c: 'Git empty message commit allow nahi karta normally.',
      d: 'Local merge offline hota hai.'
    },
    memoryTrick: 'Ek hi kursi pe do log baithne aagaye toh ladayi (CONFLICT) hogi!',
    tags: ['git', 'conflicts']
  },
  {
    topic: 'git',
    subTopic: 'remote',
    difficulty: 'easy',
    question: 'Which command links a local Git repository to a remote GitHub repository using the alias name "origin"?',
    codeSnippet: 'git remote ________ origin https://github.com/user/repo.git',
    options: [
      { id: 'a', text: 'connect' },
      { id: 'b', text: 'add' },
      { id: 'c', text: 'link' },
      { id: 'd', text: 'set' }
    ],
    correctOptionId: 'b',
    explanation: '`git remote add <name> <url>` remote repository reference register karta hai.',
    optionExplanations: {
      a: 'Invalid subcommand.',
      b: '`git remote add` standard remote linking syntax hai.',
      c: 'Invalid subcommand.',
      d: '`set-url` existing URL update karne ke liye hota hai.'
    },
    memoryTrick: 'Naya remote add karo = git remote add origin!',
    tags: ['git', 'remote', 'github']
  },
  {
    topic: 'git',
    subTopic: 'diff',
    difficulty: 'easy',
    question: 'Which command displays unstaged line-by-line differences between your working directory and the index?',
    codeSnippet: 'git ________',
    options: [
      { id: 'a', text: 'show' },
      { id: 'b', text: 'diff' },
      { id: 'c', text: 'log' },
      { id: 'd', text: 'inspect' }
    ],
    correctOptionId: 'b',
    explanation: '`git diff` uncommitted modifications ka green (+) aur red (-) diff format mein output dikhata hai.',
    optionExplanations: {
      a: '`git show` specific commit ke changes dikhata hai.',
      b: '`git diff` unstaged changes ka difference print karta hai.',
      c: '`git log` commit history list karta hai.',
      d: 'Invalid command.'
    },
    memoryTrick: 'Farak dekhna hai toh DIFF lagao!',
    tags: ['git', 'diff']
  },
  {
    topic: 'git',
    subTopic: 'log',
    difficulty: 'easy',
    question: 'Which flag formats the output of `git log` so that each commit occupies a single compact line?',
    codeSnippet: 'git log --________',
    options: [
      { id: 'a', text: 'compact' },
      { id: 'b', text: 'oneline' },
      { id: 'c', text: 'short' },
      { id: 'd', text: 'mini' }
    ],
    correctOptionId: 'b',
    explanation: '`git log --oneline` har commit ko uske short SHA aur commit message ke sath single line mein print karta hai.',
    optionExplanations: {
      a: 'Invalid flag.',
      b: '`--oneline` clean compact commit list deta hai.',
      c: '`--shortstat` summary deta hai.',
      d: 'Invalid flag.'
    },
    memoryTrick: 'Ek line mein hisaab chahiye? --oneline!',
    tags: ['git', 'log']
  },
  {
    topic: 'git',
    subTopic: 'reflog',
    difficulty: 'interview',
    question: 'If a developer accidentally runs `git reset --hard` and loses valuable commits, which Git mechanism records HEAD pointer movements to help recover them?',
    codeSnippet: 'git ________',
    options: [
      { id: 'a', text: 'undo' },
      { id: 'b', text: 'reflog' },
      { id: 'c', text: 'recover' },
      { id: 'd', text: 'history-back' }
    ],
    correctOptionId: 'b',
    explanation: '`git reflog` local HEAD pointer ki har movement (checkout, commit, reset, rebase) ka timestamped audit record rakhta hai. Purane lost commit hash ko dhoondh kar `git checkout <hash>` se sab wapas aa jata hai!',
    optionExplanations: {
      a: 'Direct undo command nahi hoti.',
      b: '`git reflog` Git ka sanjeevani booti hai! Lost commits recover karne ka ultimate weapon.',
      c: 'Invalid command.',
      d: 'Invalid command.'
    },
    memoryTrick: 'Kand karke phas gaye? REFLOG kholo, pichla commit hash mil jayega!',
    tags: ['git', 'reflog', 'recovery', 'interview']
  },
  {
    topic: 'git',
    subTopic: 'pull-request',
    difficulty: 'easy',
    question: 'What is the primary purpose of a Pull Request (PR) on GitHub?',
    codeSnippet: '',
    options: [
      { id: 'a', text: 'To download source code onto a local computer' },
      { id: 'b', text: 'To propose changes from a feature branch, solicit peer code review, and trigger automated CI checks before merging into the main branch' },
      { id: 'c', text: 'To install the Git CLI client' },
      { id: 'd', text: 'To delete a GitHub repository' }
    ],
    correctOptionId: 'b',
    explanation: 'Pull Request code collaboration ka core mechanism hai jahan peers code inspect karte hain, comments/discussions karte hain, aur tests pass hone par merge approve karte hain.',
    optionExplanations: {
      a: 'Wo git clone ya git pull hota hai.',
      b: 'Code review + Discussion + CI testing platform!',
      c: 'Software installer alag hota hai.',
      d: 'Absurd option.'
    },
    memoryTrick: 'PR = Request bhejna "Bhai code review karle aur merge karne de"!',
    tags: ['git', 'github', 'pull-request']
  }
];
