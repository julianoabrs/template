import React from "react"
import { Container, Title } from "./ThirdScreenStyles"
import { THIRD_SCREEN } from "~/utils/strings"

const ThirdScreenView = () => (
    <Container>
        <Title testID="thirdScreenTitle">
            {THIRD_SCREEN.title}
        </Title>
    </Container>
)

export default ThirdScreenView
