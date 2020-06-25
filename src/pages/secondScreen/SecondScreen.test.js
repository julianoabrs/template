import React from "react"
import { render, wait, fireEvent } from "@testing-library/react-native"
import SecondScreenController from "./SecondScreenController"

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
    <SecondScreenController
        {...defaultProps}
    />
)

describe("pages - SecondScreen", () => {
    it("should render", () => {
        const { getByTestId } = render(newWrapper())
        wait(() => {
            expect(getByTestId("secondScreenTitle")).toHaveTextContent("Hello second world!")
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
            wait(() => expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_IS_LOADING", isLoading: false }))
        })

        it("should navigate to third screen", () => {
            const { getByTestId } = render(newWrapper())

            fireEvent.press(getByTestId("nextScreenButton"))
            wait(() => expect(mockNavigate).toHaveBeenCalledWith("ThirdScreen"))
        })
    })
})
