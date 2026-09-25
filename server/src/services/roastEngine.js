export const reactions = {
  correct: {
    normal: [
      'Ye mera bhai! Bilkul sahi pakda hai 🔥',
      'Bhidu dimag ke ghode dauda raha hai! 🐎🔥',
      'Bilkul correct! Kya baat hai bhai!',
      'Vo meri jaan, bilkul sahi jawab! +100 Cores 🔥',
      'Bhai ne seedha target pe maara! 🎯',
      'OHHH! Bilkul correct! Maza aa gaya!',
      'Kya baat hai bhai, concept pakad liya! 🔥',
      'Ekdum solid jawab! Tera concept clear hai bhidu! 💡',
      'Full confidence ke sath sahi mara! Shabash mere bhai! 👑',
      'Sahi khel gaya bhidu! Mastermind vibes aa rahi hain! 🧠',
    ],
    streak: [
      'Haa bhidu! Ab tera dimag sahi patri pe aa gaya 😎',
      'OHHH! Streak chal padi bhai! Rukna mat! 🔥',
      'Processor full speed pe chal raha hai! Zero throttle! ⚡',
      'Ye hui na baat! Back to back sahi pel raha hai! 🚀',
      'Bhai fire mode activate ho gaya tera! 🚒🔥',
      'Bhidu ab tu direct Senior Developer banne ki raah pe hai! 👑',
      'Gazab streak! Aise hi chalte raha toh tu bug nahi, feature ban jayega! 🎯',
    ],
    comeback: [
      'Haa ab tera dimag chal raha na sahi patri pe 😂',
      'Arre wah, ab processor boot ho gaya tera!',
      'Chal bhidu, comeback maar diya na! Ab yahi momentum rakh! 🔥',
      'Dekha! Dimag lagane se sab theek hota hai! Maza aa gaya! 😎',
      'Chalo shukr hai RAM free ho gayi teri! Ab phodte reh! 🚀',
      'Galti se seekh ke aage badha na mera bhai! Aise hi seekhte hain! 🌟',
    ],
  },
  wrong: {
    light: [
      'Arre bhai kya kar raha hai, jara dimag chala 😂',
      'Bhai question padh toh le pehle dhang se 😭',
      'Kya re bhidu, dimag buffering mein hai kya?',
      'Arre yaar, ye toh bilkul saamne pada tha!',
      'Abe bhai, thoda soch leta tick marne se pehle 😂',
      'Question dekh ke hawa mein answer maar diya kya? 🤦‍♂️',
      'Abe andhere mein teer mat chala, aankhein khol ke dekh! 😂',
      'Aisa lag raha hai CPU 100% throttle ho gaya tera! 💻',
    ],
    medium: [
      'Arre bhadwe kya kar raha hai, jara dimag chala 😂',
      'Subah subah kisi ka thobda dekha be tune? Itna galat kaise kar diya? 😂',
      'Abe bhidu, dimag ko thoda ON kar na! Standby pe pada hai!',
      'Kya kar raha hai bhai? Question kuch aur pooch raha hai aur tu kuch aur hi de raha hai 😂',
      'Abe yaar, ye kya kand kar diya tune?',
      'Abe bhadwe code likhna seekh raha hai ya tukke marna? 🤦‍♂️',
      'Lagta hai browser crash hone se pehle tera dimag crash ho gaya! 😂',
      'Are bhai console.log laga ke dekh leta isse achha! Itna blunder? 😭',
    ],
    heavy: [
      'Bhai system restart karna padega kya tera? 😂',
      'Lagta hai compiler ne bhi haath khade kar diye tere aage! 😭',
      'Abe lagataar galat pe galat! Thoda thanda paani pee ke aaja pehle!',
      'Bhidu code editor band kar aur pehle 2 minute deep breath le! 😂',
      'Tere dimag mein 404 Not Found chal raha hai kya abhi? 😂',
      'Abe lagataar blunder pe blunder! Ab toh comeback maarna hi padega!',
      'Bhai server ne 500 Internal Error de diya tera answer dekh ke! 💀',
    ],
  },
};

/**
 * Selects an appropriate bhai roast/reaction based on user performance context
 * @param {Object} context
 * @param {boolean} context.isCorrect
 * @param {number} context.streak
 * @param {number} context.consecutiveMistakes
 * @param {string} context.lastReaction
 * @returns {string} Selected reaction
 */
export function getRoastReaction({
  isCorrect,
  streak = 0,
  consecutiveMistakes = 0,
  lastReaction = '',
}) {
  let pool = [];

  if (isCorrect) {
    if (consecutiveMistakes >= 2) {
      // User made mistakes previously and made a comeback!
      pool = reactions.correct.comeback;
    } else if (streak >= 3) {
      // High streak bonus celebration
      pool = reactions.correct.streak;
    } else {
      pool = reactions.correct.normal;
    }
  } else {
    // Wrong answer
    if (consecutiveMistakes >= 4) {
      pool = reactions.wrong.heavy;
    } else if (consecutiveMistakes >= 2) {
      pool = reactions.wrong.medium;
    } else {
      pool = reactions.wrong.light;
    }
  }

  // Filter out the last reaction to avoid immediate back-to-back repetitions
  const filtered = pool.filter((r) => r !== lastReaction);
  const candidates = filtered.length > 0 ? filtered : pool;

  const randomIndex = Math.floor(Math.random() * candidates.length);
  return candidates[randomIndex];
}
