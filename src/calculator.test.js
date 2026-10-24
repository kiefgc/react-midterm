import { describe, expect, it } from "vitest";
import { add } from "./calculator";
import { subtract } from "./calculator";
describe("Calculator addition", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });
  it("converts input strings to numbers", () => {
    expect(add("10", "5")).toBe(15);
  });
});

describe("Calculator subtraction", () => {
  it("subtracts two positive numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });
  it("subtracts negative numbers", () => {
    expect(subtract(2, 5)).toBe(-3);
  });
  it("converts input strings to numbers", () => {
    expect(subtract("10", "5")).toBe(5);
  });
});
