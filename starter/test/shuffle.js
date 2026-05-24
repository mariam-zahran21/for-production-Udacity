import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";
describe("Shuffle Function", () => {
  it("should shuffle array indexes", () => {
    const arr = [1, 2, 3, 4, 5];

    const shuffled = shuffle([...arr]);

    expect(shuffled).to.have.members(arr);
    expect(shuffled).to.not.deep.equal(arr);
  });

  it("should return an array of the same length", () => {
    const arr = [10, 20, 30, 40, 50];

    const shuffled = shuffle([...arr]);

    expect(shuffled).to.have.lengthOf(arr.length);
  });

  it("should contain the same elements", () => {
    const arr = ["a", "b", "c", "d", "e"];

    const shuffled = shuffle([...arr]);

    expect(shuffled).to.have.members(arr);
  });
});
