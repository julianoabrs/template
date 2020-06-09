import { NativeModules } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"
import Reactotron from "reactotron-react-native"
import { reactotronRedux } from "reactotron-redux"

const { scriptURL } = NativeModules.SourceCode
const scriptHostname = scriptURL?.split("://")[1]?.split(":")[0]

const reactotron = __DEV__ ? Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({ host: scriptHostname })
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect() // let's connect!
    : null

export default reactotron
