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

const Button = ({ text, onPress, testID }) => (
    <Container onPress={() => onPress()} testID={testID}>
        <Text testID="textButton">{text}</Text>
    </Container>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    testID: PropTypes.string,
}

Button.defaultProps = {
    testID: "button",
}

export default Button
