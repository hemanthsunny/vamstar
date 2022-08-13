import _ from "lodash";
import { personParams, bmiParams } from "./constants.js";

function calculateBMI(mass, height) {
  const bmi = (mass / Math.pow(height, 2)).toFixed(2);

  let selectedBMI = _.cloneDeep(bmiParams).find(param => (param.minRange <= bmi) && (param.maxRange >= bmi))

  /* If there's no selectedBMI, then consider as above 40 */
  if (!selectedBMI) {
    selectedBMI = bmiParams[bmiParams.length - 1];
  }

  /* Remove extra columns */
  delete selectedBMI["minRange"];
  delete selectedBMI["maxRange"];

  return selectedBMI;
}

function init(pp) {
  const personBmiParams = pp.map(person => {
    const result = calculateBMI(person["WeightKg"], person["HeightCm"] * 0.01); // convert height to metres
    return Object.assign(person, result);
  })
  return personBmiParams;
}

console.log(init(personParams));

export default init;
