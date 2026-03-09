import { describe, it, expect } from "vitest";

describe("Simple Tests", () => {
  it("should add numbers correctly", () => {
    expect(1 + 1).toBe(2);
    expect(5 + 3).toBe(8);
  });

  it("should multiply numbers correctly", () => {
    expect(2 * 3).toBe(6);
    expect(4 * 5).toBe(20);
  });

  it("should handle strings", () => {
    expect("hello".toUpperCase()).toBe("HELLO");
    expect("world".length).toBe(5);
  });
});
