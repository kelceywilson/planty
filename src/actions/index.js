export const BMR = 'BMR'


// NOT FOR CHILDREN UNDER 9 YEARS

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
  } else if(activity == 2) {
    return 1.375 * bmr
  } else if(activity == 3) {
    return 1.55 * bmr
  } else {
    return 1.725 * bmr
  }
}

// WHAT IS YOUR UPPER LIMIT ON FAT FOR THE CALORIES YOU CONSUME?		
// Total Calories per Day	Saturated Fat in Grams	Total Fat in Grams
// 1,600	18 or less	53
// 2,000*	20 or less	65
// 2,200	24 or less	73
// 2,500*	25 or less	80
// 2,800	31 or less	93

// units are grams -- base on weight in pounds
export function unsat_fat(weight){
  return .5 * weight * 0.45359
}

// protein needs
// sedentary = 1; low active = 2; med active = 3; active = 4
// units are grams bast on weight in kilograms
export function protein(weight, activity){
  if(activity === 1){
    return .8 * weight * 0.45359
  } else if(activity == 2) {
    return weight * 0.45359
  } else if(activity == 3) {
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
  if (sex = "f"){
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

