import ActionTypes from "../../constant/ActionTypes";

const initialState = {
  userInfo: null
};


export const updateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_INFO:
      console.log("hi this is the new state" + action.payload)
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
};
