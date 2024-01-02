import rootreducer from "../reducer/index";

import { legacy_createStore as CreateStore } from "redux";
const MainStore= CreateStore(rootreducer);
export default MainStore;