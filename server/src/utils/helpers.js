/**
 * Fisher-Yates array shuffle (in-place clone)
 */
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Calculates cores and streak bonus
 */
export function calculateCoresAndStreak({ isCorrect, currentStreak = 0, currentCores = 0 }) {
  if (!isCorrect) {
    return {
      newStreak: 0,
      earnedCores: 0,
      streakBonus: 0,
      newCores: currentCores,
    };
  }

  const newStreak = currentStreak + 1;
  let streakBonus = 0;

  if (newStreak >= 10) {
    streakBonus = 250;
  } else if (newStreak >= 5) {
    streakBonus = 100;
  } else if (newStreak >= 3) {
    streakBonus = 50;
  }

  const baseCores = 100;
  const earnedCores = baseCores + streakBonus;

  return {
    newStreak,
    earnedCores,
    streakBonus,
    newCores: currentCores + earnedCores,
  };
}

/**
 * Determines Bhai Performance Badge based on accuracy percentage
 */
export function getPerformanceBadge(accuracy) {
  if (accuracy <= 20) {
    return {
      title: 'Code Aloo',
      icon: '🥔',
      label: 'Code Aloo 🥔',
      range: '0–20%',
      bhaiMessage: 'Koi baat nahi bhidu! Har coder pehle aloo hota hai, baad mein French Fries banta hai! Dobara try maar!',
    };
  }
  if (accuracy <= 40) {
    return {
      title: 'Syntax Bachha',
      icon: '🐣',
      label: 'Syntax Bachha 🐣',
      range: '21–40%',
      bhaiMessage: 'Abhi ande se bahar nikla hai code ke mamle mein! Thoda documentation aur questions phod, mast banega!',
    };
  }
  if (accuracy <= 60) {
    return {
      title: 'Junior Bhidu',
      icon: '😎',
      label: 'Junior Bhidu 😎',
      range: '41–60%',
      bhaiMessage: 'Sahi patri pe chal raha hai bhai! Halfway mark cross ho gaya, bas thoda sa aur push chahiye!',
    };
  }
  if (accuracy <= 80) {
    return {
      title: 'Code Warrior',
      icon: '🔥',
      label: 'Code Warrior 🔥',
      range: '61–80%',
      bhaiMessage: 'Bhai ne dhoom macha di! Bilkul solid performance! Bas thoda aur polish aur tu MERN Machine banega!',
    };
  }
  if (accuracy <= 95) {
    return {
      title: 'MERN Machine',
      icon: '🚀',
      label: 'MERN Machine 🚀',
      range: '81–95%',
      bhaiMessage: 'Gazab bhidu! Full speed production-ready coder vibes! Tere se interview lena padega lagta hai!',
    };
  }
  return {
    title: 'Full Stack Don',
    icon: '👑',
    label: 'Full Stack Don 👑',
    range: '96–100%',
    bhaiMessage: 'APUN HI BHAGWAAN HAI! 100% pro coder! Bhai ne sab questions ka kalyan kar diya!',
  };
}
