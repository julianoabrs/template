import React from "react"
import { Container, Title, NextScreenButton } from "./FirstScreenStyles"
import { FIRST_SCREEN } from "~/utils/strings"

const FirstScreenView = ({ goToSecondScreen }) => (
    <Container>
        <Title testID="firstScreenTitle">{`${FIRST_SCREEN.title}`}</Title>
        <NextScreenButton testID="nextScreenButton" text={FIRST_SCREEN.button} onPress={goToSecondScreen} />
    </Container>
)

export default FirstScreenView
