import React from "react"
import { Container, Title, NextScreenButton } from "./SecondScreenStyles"
import { SECOND_SCREEN } from "~/utils/strings"

const SecondScreenView = ({ goToThirdScreen, isLoading }) => (
    <Container>
        <Title>{`${SECOND_SCREEN.title} ${isLoading}`}</Title>
        <NextScreenButton text={SECOND_SCREEN.button} onPress={goToThirdScreen} />
    </Container>
)

export default SecondScreenView
