export const ACTIVITY = "ACTIVITY";
export const AGE = "AGE";
export const AGED = "AGED";
export const BMR = "BMR";
export const BREASTFEEDING = "BREASTFEEDING";
export const CALORIES = "CALORIES";
export const D3 = "D3";
export const FAT = "FAT";
export const FIBER = "FIBER";
export const HEIGHT = "HEIGHT";
export const HIGH = "HIGH";
export const IRON = "IRON";
export const PREGNANT = "PREGNANT";
export const PROTEIN = "PROTEIN";
export const RESET = "RESET";
export const SEX = "SEX";
export const WEIGHT = "WEIGHT";
export const WEIGHED = "WEIGHED";
export const ZINC = "ZINC";

// https://ndb.nal.usda.gov/ndb/doc/apilist/API-NUTRIENT-REPORT.md
// NOT FOR CHILDREN UNDER 9 YEARS
// weight in pounds
// height in inches
// age in years
// gender identity for medical purposes
// activity level

export function reset() {
  return {
    type: RESET
  };
}
export function activity(level) {
  return {
    type: ACTIVITY,
    payload: level
  };
}
export function aged() {
  return {
    type: AGED
  };
}
export function ager(age) {
  return {
    type: AGE,
    payload: age
  };
}
export function higher() {
  return {
    type: HIGH
  };
}
export function heighter(height) {
  return {
    type: HEIGHT,
    payload: height
  };
}
export function weighed() {
  return {
    type: WEIGHED
  };
}
export function weigher(weight) {
  return {
    type: WEIGHT,
    payload: weight
  };
}

export function chooseSex(sex) {
  return {
    type: SEX,
    payload: sex
  };
}
export function isPregnant(preg) {
  return {
    type: PREGNANT,
    payload: preg
  };
}
export function isBreastfeeding(feed) {
  return {
    type: BREASTFEEDING,
    payload: feed
  };
}
// weight in lb, height in in, age in years
export function bmrCalculator(sex, weight, height, age) {
  let bmr;
  if (sex === "Female") {
    bmr = 665.09 + 4.35 * weight + 4.7 * height - 4.67 * age;
  } else {
    bmr = 66.57 + 6.23 * weight + 12.7 * height + 6.75 * age;
  }
  bmr = Math.round(bmr);

  return {
    type: BMR,
    payload: bmr
  };
}

// calorie needs
// sedentary = 1; low active = 2; med active = 3; active = 4
export function calorieCalculator(bmr, activity) {
  console.log("here");

  let calories;
  bmr = parseInt(bmr);
  activity = parseInt(activity);
  if (activity === 1) {
    calories = 1.2 * bmr;
  } else if (activity === 2) {
    calories = 1.375 * bmr;
  } else if (activity === 3) {
    calories = 1.55 * bmr;
  } else {
    calories = 1.725 * bmr;
  }
  calories = Math.round(calories);
  return {
    type: CALORIES,
    payload: calories
  };
}

// units are grams - [saturated fat, total fat]
export function fatCalculator(calories) {
  let fats;
  switch (calories) {
    case 1600:
      fats = [18, 53];
      break;
    case 2000:
      fats = [20, 65];
      break;
    case 2200:
      fats = [24, 73];
      break;
    case 2500:
      fats = [25, 80];
      break;
    case 2800:
      fats = [31, 93];
      break;
    default:
      fats = [18, 53];
      break;
  }
  return {
    type: FAT,
    payload: fats
  };
}

// protein needs
// sedentary = 1; low active = 2; med active = 3; active = 4
// units are grams bast on weight in pounds
export function proteinCalculator(weight, activity) {
  let proteins;
  if (activity === 1) {
    proteins = 0.8 * weight * 0.45359;
  } else if (activity === 2) {
    proteins = weight * 0.45359;
  } else if (activity === 3) {
    proteins = 1.3 * weight * 0.45359;
  } else {
    proteins = 1.5 * weight * 0.45359;
  }
  proteins = Math.round(proteins);
  return {
    type: PROTEIN,
    payload: proteins
  };
}

// units are grams
export function fiberCalculator(sex, age) {
  console.log("fiber", sex, age);

  let fibers;
  if (age < 50 || sex === "Male") {
    fibers = 38;
  } else {
    fibers = 50;
  }
  return {
    type: FIBER,
    payload: fibers
  };
}

// units are international units (UI)
export function d3Calculator(age) {
  let d;
  if (age < 9) {
    d = 600;
  } else if (age > 9 && age < 70) {
    d = 400;
  } else {
    d = 800;
  }
  return {
    type: D3,
    payload: d
  };
}

// units are mg
export function ironCalculator(age, sex) {
  let fe;
  if (sex === "Female" && age < 50) {
    fe = 18;
  } else {
    fe = 8;
  }
  return {
    type: IRON,
    payload: fe
  };
}

// units are mg/day
export function zinCalculator(age, sex, pregnant, breastfeeding) {
  let z;
  if (pregnant) {
    z = 27;
  } else if (breastfeeding) {
    if (age < 19) {
      z = 10;
    } else {
      z = 9;
    }
  } else if (sex === "Female") {
    if (age < 14) {
      z = 8;
    } else if (age < 19) {
      z = 15;
    } else if (age < 51) {
      z = 18;
    } else {
      z = 8;
    }
  } else {
    if (age < 19) {
      z = 11;
    } else {
      z = 8;
    }
  }

  return {
    type: ZINC,
    payload: z
  };
}
