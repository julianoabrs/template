import React from "react"
import { Container, Title, NextScreenButton } from "./SecondScreenStyles"
import { SECOND_SCREEN } from "~/utils/strings"

const SecondScreenView = ({ goToThirdScreen }) => (
    <Container>
        <Title testID="secondScreenTitle">{`${SECOND_SCREEN.title}`}</Title>
        <NextScreenButton testID="nextScreenButton" text={SECOND_SCREEN.button} onPress={goToThirdScreen} />
    </Container>
)

export default SecondScreenView
