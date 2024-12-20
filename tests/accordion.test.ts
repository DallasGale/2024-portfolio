import { describe, expect, it, test } from "vitest";
import { Accordion } from "../src/components/accordion/accordion";

describe("Accordion", () => {
  it("should be defined", () => {
    expect(Accordion).toBeDefined();
  });

  it("should have a method called open()", () => {
    expect(Accordion.prototype.open).toBeDefined();
  });

  it("should have a method called close()", () => {
    expect(Accordion.prototype.close).toBeDefined();
  });

  it("should have a method called toggle()", () => {
    expect(Accordion.prototype.toggle).toBeDefined();
  });

  it("should have a method called onButtonClick()", () => {
    expect(Accordion.prototype.onButtonClick).toBeDefined();
  });
});
