import { expect } from "@std/expect";
import { printMultiplicationTable, padLeft } from "./multiplication_table.ts";

Deno.test("test multiplication table", () => {
  expect(1 + 1).toBe(2);
});

Deno.test("padLeft adds spaces", () => {
  expect(padLeft("5", 3)).toBe("  5");
});

Deno.test("padLeft doesnt chnge if not needet", () => {
  expect(padLeft("123", 3)).toBe("123");
});

Deno.test("multiplication table contains input numbers", () => {
  let output = "";
  const log = console.log;
  console.log = (msg: string) => (output += msg + "\n");

  printMultiplicationTable([2, 3]);

  console.log = log;

  expect(output.includes("2")).toBe(true);
  expect(output.includes("3")).toBe(true);
});

Deno.test("multiplication table contains correct product", () => {
  let output = "";
  const backup = console.log;
  console.log = (msg: string) => (output += msg + "\n");

  printMultiplicationTable([2, 4]);

  console.log = backup;

  expect(output.includes("8")).toBe(true);
});
