const getBMI = function (weightInLbs, heightInInches) {
  if (weightInLbs !== 0 && heightInInches !== 0) {
    return ((703 * weightInLbs) / (heightInInches * heightInInches)).toFixed(2);
  }
};

export { getBMI };
