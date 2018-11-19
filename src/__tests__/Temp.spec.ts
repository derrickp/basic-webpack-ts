import { Temp } from "../Temp";

describe("Temp", () => {
  it("sets the id", () => {
    const id = "id";
    const temp = new Temp(id);
    expect(temp.id).toEqual(id);
  });
});
