import ActionTypes from "../../constant/ActionTypes";

export const updateUserInfo = (payload) => {
  console.log("updating user info");
  return {
    type: ActionTypes.USER_INFO,
    payload: payload
  };
};
