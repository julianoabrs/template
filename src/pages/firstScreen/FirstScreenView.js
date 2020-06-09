import React from "react"
import { Container, Title, NextScreenButton } from "./FirstScreenStyles"
import { FIRST_SCREEN } from "~/utils/strings"

const FirstScreenView = ({ goToSecondScreen, isLoading }) => (
    <Container>
        <Title>{`${FIRST_SCREEN.title} ${isLoading}`}</Title>
        <NextScreenButton text={FIRST_SCREEN.button} onPress={goToSecondScreen} />
    </Container>
)

export default FirstScreenView
