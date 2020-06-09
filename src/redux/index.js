import { createStore } from "redux"
import { composeWithDevTools } from "remote-redux-devtools"
import reducer from "./reducer"
import Reactotron from "../../ReactotronConfig"

const composeEnhancers = composeWithDevTools({
    realtime: true,
    hostname: "localhost",
    port: 8000,
})
const store = __DEV__
    ? createStore(reducer, composeEnhancers(Reactotron.createEnhancer()))
    : createStore(reducer)

export default store
