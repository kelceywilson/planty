import {
  ACTIVITY,
  AGE,
  AGED,
  BMR,
  BREASTFEEDING,
  CALORIES,
  D3,
  FAT,
  FIBER,
  HEIGHT,
  HIGH,
  IRON,
  PREGNANT,
  PROTEIN,
  RESET,
  SEX,
  WEIGHED,
  WEIGHT,
  ZINC
} from "../actions";
// AGE, BMR, CALORIES, D3, FAT, FIBER, HEIGHT, IRON, PROTEIN, SEX, WEIGHT, ZINC

// const mappedAlerts = action => _.mapKeys(action.payload.data, '_id')
// const initialState = {};

export default function(state = { old: false, bmr: undefined }, action) {
  console.log(action.type, action.payload);

  switch (action.type) {
    case ACTIVITY:
      return { ...state, active: action.payload };
    case AGE:
      return { ...state, age: action.payload };
    case AGED:
      return { ...state, old: true };
    case BREASTFEEDING:
      return { ...state, breastfeeding: action.payload };
    case BMR:
      return { ...state, bmr: action.payload };
    case CALORIES:
      return { ...state, calories: action.payload };
    case D3:
      return { ...state, d3: action.payload };
    case FAT:
      return { ...state, fat: action.payload };
    case FIBER:
      return { ...state, fiber: action.payload };
    case HEIGHT:
      return { ...state, height: action.payload };
    case HIGH:
      return { ...state, high: true };
    case IRON:
      return { ...state, iron: action.payload };
    case PREGNANT:
      return { ...state, pregnant: action.payload };
    case PROTEIN:
      return { ...state, protein: action.payload };
    case RESET:
      return { old: false, bmr: undefined };
    case SEX:
      return { ...state, sex: action.payload };
    case WEIGHT:
      return { ...state, weight: action.payload };
    case WEIGHED:
      return { ...state, weighted: true };
    case ZINC:
      return { ...state, zinc: action.payload };
    default:
      return state;
  }
}
