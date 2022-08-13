export const personParams = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, {"Gender": "Male", "HeightCm": 161, "WeightKg":85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female","HeightCm": 167, "WeightKg": 82}]

export const bmiParams = [
  {
    range: "18.4 and below",
    category: "Underweight",
    risk: "Malnutrition risk",
    minRange: 0,
    maxRange: 18.4
  },
  {
    range: "18.5 - 24.9",
    category: "Normal weight",
    risk: "Low risk",
    minRange: 18.5,
    maxRange: 24.9
  },
  {
    range: "25 - 29.9",
    category: "Overweight",
    risk: "Enhanced risk",
    minRange: 25,
    maxRange: 29.9
  },
  {
    range: "30 - 34.9",
    category: "Moderately obese",
    risk: "Medium risk",
    minRange: 30,
    maxRange: 34.9
  },
  {
    range: "35 - 39.9",
    category: "Severel obese",
    risk: "High risk",
    minRange: 35,
    maxRange: 39.9
  },
  {
    range: "40 and above",
    category: "Very severely obese",
    risk: "Very high risk"
  },
]
