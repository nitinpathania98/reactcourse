import CARDDATA from "./reducer";
import CARDDATA2 from "./reducer2";
import { combineReducers } from "redux";

const rootreducer=combineReducers({
    CARDDATA,
    CARDDATA2,
})
export default rootreducer;