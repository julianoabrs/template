import React from "react"
import { render, wait } from "@testing-library/react-native"
import MainNavigator from "./index"

const newWrapper = (props) => (
    <MainNavigator
        {...props}
    />
)

const mockDispatch = jest.fn()

jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch,
}))

describe("components - Button", () => {
    it("should render first screen", () => {
        const { getByTestId } = render(newWrapper("FirstScreen"))
        wait(() => {
            expect(getByTestId("firstScreenTitle")).toHaveTextContent("Hello world!")
        })
    })

    it("should render second screen", () => {
        const { getByTestId } = render(newWrapper("SecondScreen"))
        wait(() => {
            expect(getByTestId("secondScreenTitle")).toNotHaveTextContent("Hello second world!")
        })
    })
})
