import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import Button from "./Button"

const fakeOnPress = jest.fn()

const defaultProps = {
    text: "Label",
    onPress: fakeOnPress(),
}

const newWrapper = () => (
    <Button
        {...defaultProps}
    />
)


describe("components - Button", () => {
    it("should render label", () => {
        const { getByTestId } = render(newWrapper())

        expect(getByTestId("textButton")).toHaveTextContent(defaultProps.text)
    })

    it("should call onPress", () => {
        const { getByTestId } = render(newWrapper())

        fireEvent.press(getByTestId("button"))

        expect(fakeOnPress).toHaveBeenCalled()
    })
})
