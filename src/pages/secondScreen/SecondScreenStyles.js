import styled from "styled-components/native"
import { Colors } from "~/utils/themes"
import Button from "~/components/Button"

export const Container = styled.View`
    flex: 1;
    padding: 16px;
    background-color: ${Colors.primary};
`

export const Title = styled.Text`
    color: ${Colors.white};
    font-size: 24px;
    margin-bottom: 24px;
`

export const NextScreenButton = styled(Button)``
