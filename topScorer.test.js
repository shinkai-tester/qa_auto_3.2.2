const findTopScorer = require("./findTopScorer");

testData = [
  [
    { name: "Ivan", score: 35, date: "2022-10-11" },
    { name: "Maria", score: 5, date: "2022-10-10" },
    { name: "Olga", score: 0, date: "" },
    { name: "Stepan", score: 35, date: "2022-10-12" },
    { name: "Oleg", score: 9, date: "2022-10-01" },
    { name: "Zanna", score: 15, date: "2022-10-11" },
  ],
  [
    { name: "Margo", score: 0, date: "2022-10-11" },
    { name: "Natalia", score: 25, date: "2022-10-10" },
    { name: "Marina", score: 25, date: "2022-10-01" },
    { name: "Dmitry", score: 25, date: "2022-10-12" },
    { name: "Denis", score: 0, date: "2022-10-02" },
    { name: "Vadimyr", score: 1, date: "2022-10-11" },
  ],
  [
    { name: "Irina", score: 0, date: "2022-10-11" },
    { name: "Vasily", score: 0, date: "2022-10-10" },
    { name: "David", score: 0, date: "2022-10-11" },
    { name: "Kristina", score: 0, date: "2022-10-12" },
    { name: "Varvara", score: 0, date: "2022-10-01" },
    { name: "Tanya", score: 0, date: "2022-10-11" },
  ],
];

const expectedMessages = [
  [
    "Congratulations, Ivan! You have achieved the highest score with 35 points. Keep up the excellent work!",
    "Congratulations, Stepan! You have achieved the highest score with 35 points. Keep up the excellent work!",
  ],
  [
    "Congratulations, Natalia! You have achieved the highest score with 25 points. Keep up the excellent work!",
    "Congratulations, Marina! You have achieved the highest score with 25 points. Keep up the excellent work!",
    "Congratulations, Dmitry! You have achieved the highest score with 25 points. Keep up the excellent work!",
  ],
  ["No top scorer identified this time."],
];

describe("findTopScorer tests", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test.each(
    testData.map((item, index) => [index + 1, item, expectedMessages[index]])
  )(
    "test %s: correctly identifies messages for given student data",
    (testNum, students, expected) => {
      findTopScorer(students);
      expect(console.log).toHaveBeenCalledTimes(expected.length);
      expected.forEach((message, idx) => {
        expect(console.log).toHaveBeenNthCalledWith(idx + 1, message);
      });
    }
  );
});
