import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Colors } from "~/utils/themes"

const Container = styled(TouchableOpacity)`
    padding: 16px;
    background-color: ${Colors.secondary};
    align-items: center;
`

const Text = styled.Text`
    font-size: 16px;
    color: ${Colors.black}
`

const Button = ({ text, onPress }) => (
    <Container onPress={onPress}>
        <Text>{text}</Text>
    </Container>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

export default Button
