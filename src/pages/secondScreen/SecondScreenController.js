import React from "react"
import { useDispatch } from "react-redux"
import { setIsLoading } from "~/redux/actions"
import SecondScreenView from "./SecondScreenView"
import { SCREENS } from "~/utils/constants"

const SecondScreenController = ({ navigation }) => {
    const dispatch = useDispatch()

    const goToThirdScreen = () => {
        dispatch(setIsLoading(false))
        navigation.navigate(SCREENS.ThirdScreen)
    }

    return <SecondScreenView goToThirdScreen={goToThirdScreen} />
}

export default SecondScreenController
