const getBMI = function (weightInLbs, heightInInches) {
  var bmi = 0;
  if (weightInLbs !== 0 && heightInInches !== 0) {
    bmi = ((703 * weightInLbs) / (heightInInches * heightInInches)).toFixed(2);
  }
  return bmi;
};

export { getBMI };
