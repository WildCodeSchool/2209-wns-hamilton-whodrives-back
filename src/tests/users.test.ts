import { checkRights } from "../lib/utilities";

test("check rights", () => {
  try {
    checkRights(null);
  } catch (e: any) {
    expect(e.message).toBe("Vous devez être connecté à l'application");
  }
});
