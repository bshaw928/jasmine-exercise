it("should calculate the monthly rate correctly", function () {
  const values = {
    amount: 20000,
    years: 10,
    rate: 7.0,
  };
  expect(calculateMonthlyPayment(values)).toEqual("232.22");
});

it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 30000,
    years: 8,
    rate: 15.0,
  };
  expect(calculateMonthlyPayment(values)).toEqual("538.36");
});

/// etc

it("should calculate monthly rate with very low interest rate", function () {
  const values = {
    amount: 25000,
    years: 10,
    rate: 0.25,
  };
  expect(calculateMonthlyPayment(values)).toEqual("210.97");
});
