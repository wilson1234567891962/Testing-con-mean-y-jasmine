const saludar = require("../app");

var x = true;

const letra = "AB";

var tmp = undefined;

describe("Prueba de test para string", () => {
  it("La función saluda", () => {
    expect(saludar("Platzi")).toBe("Hola Platzi");
  });

  it("Comprobar valores booleanos", () => {
    expect(x).toBeTruthy();
  });

  it("Comprobar valores iguales", () => {
    expect(x).toEqual(true);
  });

  it("Comprobar valores iguales", () => {
    expect(x).toBe(true);
  });

  it("Comprobar valores de expresiones regulares", () => {
    expect(x).toMatch("[^AB]");
  });

  it("Comprobar valores undefined", () => {
    expect(tmp).toBeUndefined();
  });
});
