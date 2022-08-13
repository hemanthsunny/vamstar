import init from "./index.js";
import * as constants from "./constants.js";

describe("test to calculate bmi", () => {
  test('should return correct bmi values', () => {
    const result = [
      {
        Gender: 'Male',
        HeightCm: 171,
        WeightKg: 96,
        range: '30 - 34.9',
        category: 'Moderately obese',
        risk: 'Medium risk'
      },
      {
        Gender: 'Male',
        HeightCm: 161,
        WeightKg: 85,
        range: '30 - 34.9',
        category: 'Moderately obese',
        risk: 'Medium risk'
      },
      {
        Gender: 'Male',
        HeightCm: 180,
        WeightKg: 77,
        range: '18.5 - 24.9',
        category: 'Normal weight',
        risk: 'Low risk'
      },
      {
        Gender: 'Female',
        HeightCm: 166,
        WeightKg: 62,
        range: '18.5 - 24.9',
        category: 'Normal weight',
        risk: 'Low risk'
      },
      {
        Gender: 'Female',
        HeightCm: 150,
        WeightKg: 70,
        range: '30 - 34.9',
        category: 'Moderately obese',
        risk: 'Medium risk'
      },
      {
        Gender: 'Female',
        HeightCm: 167,
        WeightKg: 82,
        range: '25 - 29.9',
        category: 'Overweight',
        risk: 'Enhanced risk'
      }
    ]
    const params = init(constants.personParams);
    expect(params.length).toBe(6);
    expect(params).toStrictEqual(result);
  });

  test('should have empty person params', () => {
    const result = [];
    const params = init([]);
    expect(params.length).toBe(0);
    expect(params).toStrictEqual(result);
  });
});
