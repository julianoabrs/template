import React from "react"
import { render, wait } from "@testing-library/react-native"
import ThirdScreenController from "./ThirdScreenController"

const newWrapper = () => (
    <ThirdScreenController />
)

describe("pages - ThirdScreen", () => {
    it("should render", () => {
        const { getByTestId } = render(newWrapper())
        wait(() => {
            expect(getByTestId("thirdScreenTitle")).toHaveTextContent("Hello third world!")
        })
    })
})
