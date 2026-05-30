import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";
describe("Shuffle Function", () => {
  it("should shuffle array indexes", () => {
    const arr = [1, 2, 3, 4, 5];
    let isShuffled = false;

    // Run the shuffle up to 20 times to ensure that we get at least one shuffled version
    // (This guarantees the test never fails due to random chance)
    for (let i = 0; i < 20; i++) {
      const shuffled = shuffle([...arr]);
      if (JSON.stringify(shuffled) !== JSON.stringify(arr)) {
        isShuffled = true;
        break;
      }
    }

    expect(isShuffled).to.be.true;
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
