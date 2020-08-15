import { amoutSpelledOut } from "../src/index";
import { it } from "mocha";
import { expect } from "chai";
describe("amoutSpelledOut", () => {
  it("throws error on undefined", () => {
    expect(() => amoutSpelledOut(undefined)).throw();
  });
  it("throws on negative number", () => {
    expect(() => amoutSpelledOut(-1)).throw();
  });
  it("throws on NaN", () => {
    expect(() => amoutSpelledOut(Number.NaN)).throw();
  });
  it("throws on zero", () => {
    expect(() => amoutSpelledOut(0)).throw();
  });
  it("работает с несколькими копейками", () => {
    expect(amoutSpelledOut(0.01)).eq("Ноль рублей 01 копейка");
  });
  it("работает с несколькими рублями", () => {
    expect(amoutSpelledOut(1)).eq("Один рубль 00 копеек");
  });
  it("для 4", () => {
    expect(amoutSpelledOut(4)).eq("Четыре рубля 00 копеек");
  });
  it("для 10", () => {
    expect(amoutSpelledOut(10)).eq("Десять рублей 00 копеек");
  });
  it("для 20", () => {
    expect(amoutSpelledOut(20)).eq("Двадцать рублей 00 копеек");
  });
  it("для 25", () => {
    expect(amoutSpelledOut(25)).eq("Двадцать пять рублей 00 копеек");
  });
  it("для 25.02", () => {
    expect(amoutSpelledOut(25.02)).eq("Двадцать пять рублей 02 копейки");
  });
  it("для 987654321.98",()=>{
    expect(amoutSpelledOut(987654321.98)).eq("Девятьсот восемьдесят семь миллионов шестьсот пятьдесят четыре тысячи триста двадцать один рубль 98 копеек");
  });
});