import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import FirstScreenController from "~/pages/firstScreen/FirstScreenController"
import SecondScreenController from "~/pages/secondScreen/SecondScreenController"
import ThirdScreenController from "~/pages/thirdScreen/ThirdScreenController"
import { HEADERS } from "~/utils/strings"

const Stack = createStackNavigator()

const MainNavigator = ({ initialRoute }) => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen
                name="FirstScreen"
                component={FirstScreenController}
                options={{ title: HEADERS.firstScreen }}
            />
            <Stack.Screen
                name="SecondScreen"
                component={SecondScreenController}
                options={{ title: HEADERS.secondScreen, headerBackTitleVisible: false }}
            />
            <Stack.Screen
                name="ThirdScreen"
                component={ThirdScreenController}
                options={{ title: HEADERS.thirdScreen, headerBackTitleVisible: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
)
export default MainNavigator
