import React from "react"
import { useDispatch } from "react-redux"
import { setIsLoading } from "~/redux/actions"
import FirstScreenView from "./FirstScreenView"
import { SCREENS } from "~/utils/constants"

const FirstScreenController = ({ navigation }) => {
    const dispatch = useDispatch()

    const goToSecondScreen = () => {
        dispatch(setIsLoading(true))
        navigation.navigate(SCREENS.SecondScreen)
    }

    return <FirstScreenView goToSecondScreen={goToSecondScreen} />
}

export default FirstScreenController
