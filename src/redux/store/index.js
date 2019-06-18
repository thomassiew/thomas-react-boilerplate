import { createStore, combineReducers } from "redux";
import { updateUserReducer } from "../reducer/AuthReducer";

const rootReducer = combineReducers({
 auth: updateUserReducer
});

const mainStore = () => {
  return createStore(rootReducer);
};

export default mainStore;
