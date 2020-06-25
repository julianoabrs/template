import React from "react"
import { render, wait, fireEvent } from "@testing-library/react-native"
import FirstScreenController from "./FirstScreenController"

const mockNavigate = jest.fn()
const mockDispatch = jest.fn()

jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch,
}))

const defaultProps = {
    navigation: {
        navigate: mockNavigate,
    },
}
const newWrapper = () => (
    <FirstScreenController
        {...defaultProps}
    />
)

describe("pages - FirstScreen", () => {
    it("should render", () => {
        const { getByTestId } = render(newWrapper())
        wait(() => {
            expect(getByTestId("firstScreenTitle")).toHaveTextContent("Hello world!")
        })
    })

    describe("button click", () => {
        beforeAll(() => {
            mockNavigate.mockClear()
            mockDispatch.mockClear()
        })

        it("should update redux", () => {
            const { getByTestId } = render(newWrapper())

            fireEvent.press(getByTestId("nextScreenButton"))
            wait(() => expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_IS_LOADING", isLoading: true }))
        })

        it("should navigate to second screen", () => {
            const { getByTestId } = render(newWrapper())

            fireEvent.press(getByTestId("nextScreenButton"))
            wait(() => expect(mockNavigate).toHaveBeenCalledWith("SecondScreen"))
        })
    })
})
