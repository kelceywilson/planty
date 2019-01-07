export const BMR = 'BMR'


// NOT FOR CHILDREN UNDER 9 YEARS
// weight in pounds
// height in inches
// age in years
// gender identity for medical purposes
// activity level 

// weight in lb, height in in, age in years
export function bmr(sex, weight, height, age){
  let bmr
  if (sex === "f"){
    bmr = 665.09 + (4.35 * weight) + (4.7 * height) - (4.67 * age)
  } else {
    bmr = 66.57 + (6.23 * weight) +(12.7 * height) + (6.75 * age)
  }
  return {
    type: BMR,
    payload: bmr
  }
}

// calorie needs
// sedentary = 1; low active = 2; med active = 3; active = 4
export function calories(bmr, activity){
  if (activity === 1){
    return 1.2 * bmr
  } else if(activity === 2) {
    return 1.375 * bmr
  } else if(activity === 3) {
    return 1.55 * bmr
  } else {
    return 1.725 * bmr
  }
}

// units are grams - [saturated fat, total fat]
export function fat(calories){
  switch (calories) {
  case 1600:
    return [18,53]
  case 2000:
    return [20,65]
  case 2200:
    return [24,73]
  case 2500:
    return [25,80]
  case 2800:
    return [31,93]
  default:
    return [18,53]
  }
}

// protein needs
// sedentary = 1; low active = 2; med active = 3; active = 4
// units are grams bast on weight in kilograms
export function protein(weight, activity){
  if(activity === 1){
    return .8 * weight * 0.45359
  } else if(activity === 2) {
    return weight * 0.45359
  } else if(activity === 3) {
    return 1.3 * weight * 0.45359
  } else {
    return 1.5 * weight * 0.45359
  }
}



// units are grams
export function fiber(age, sex){
  if (age < 50 || sex === "m"){
    return 38
  } else {
    return 50
  }
}

// units are international units (UI)
export function d3(age){
  if (age < 9){
    return 600
  } else if (age > 9 && age < 70){
    return 400
  } else {
    return 800
  }
}

// units are mg
export function iron(age, sex){
  if (sex === "f" && age < 50){
    return 18
  } else {
    return 8
  }
}

// units are mg/day
export function zinc(age, sex, pregnant, breastfeeding){
  if (sex === "f"){
    if (age < 14) {return 8}
    if (pregnant === true) {return 27}
    if (breastfeeding === true){
      if (age > 13 && age < 19){
        return 10
      } else {
        return 11
      }
    }
    if (age < 19){
      return 15
    } else if (age < 51){
      return 18
    } else {
      return 8
    }
  } else {
    if (age < 19){
      return 11
    } else {
      return 8
    }
  }
}

