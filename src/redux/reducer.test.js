import reducer, { INITIAL_STATE } from "./reducer"
import * as actions from "./actions"

describe("reducer", () => {
    it("should update isLoading", () => {
        const state = reducer(
            INITIAL_STATE,
            actions.setIsLoading(true),
        )

        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            isLoading: true,
        })
    })

    it("should update setData", () => {
        const data = {
            prop: "value",
        }
        const state = reducer(
            INITIAL_STATE,
            actions.setData(data),
        )

        expect(state).toStrictEqual({
            ...INITIAL_STATE,
            data,
        })
    })

    it("should have default value", () => {
        const state = reducer(undefined, {})

        expect(state).toStrictEqual(INITIAL_STATE)
    })
})
