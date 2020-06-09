import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setIsLoading } from "~/redux/actions"
import SecondScreenView from "./SecondScreenView"
import { SCREENS } from "~/utils/constants"

const SecondScreenController = ({ navigation }) => {
    const isLoading = useSelector((state) => state.isLoading)
    const dispatch = useDispatch()

    const goToThirdScreen = () => {
        dispatch(setIsLoading(false))
        navigation.navigate(SCREENS.ThirdScreen)
    }

    return <SecondScreenView isLoading={isLoading} goToThirdScreen={goToThirdScreen} />
}

export default SecondScreenController
