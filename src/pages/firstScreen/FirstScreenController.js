import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setIsLoading } from "~/redux/actions"
import FirstScreenView from "./FirstScreenView"
import { SCREENS } from "~/utils/constants"

const FirstScreenController = ({ navigation }) => {
    const isLoading = useSelector((state) => state.isLoading)
    const dispatch = useDispatch()

    const goToSecondScreen = () => {
        dispatch(setIsLoading(true))
        navigation.navigate(SCREENS.SecondScreen)
    }

    return <FirstScreenView isLoading={isLoading} goToSecondScreen={goToSecondScreen} />
}

export default FirstScreenController
