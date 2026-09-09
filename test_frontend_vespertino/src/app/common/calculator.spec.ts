import {describe, it, expect, vi} from 'vitest';
import {calculator} from "./calculator";


describe("Vitest Calculator", () =>{

    it("should add two numbers", () => {

        const result = calculator.add(3,3);
        expect(result).toBe(6);

    })

    it.only("shows how mocking works", () => {
        const spy = vi.spyOn(calculator, "add").mockReturnValue(5);
        const result = calculator.add(2,3);

        expect(result).toBe(5);
        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(2,3);
    })

});