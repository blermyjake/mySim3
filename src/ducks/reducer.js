const initialState = {
  user_name: "",
  id: "",
  profile_pic: ""
};

const REDUCER_USER_NAME = "USER_NAME";
const REDUCER_ID = "ID";
const REDUCER_PROFILE_PIC = "PROFILE_PIC";

function reducer(state = initialState, action) {
  // console.log("reducer hit: action ->", action);
  switch (action.type) {
    case REDUCER_USER_NAME:
      return Object.assign(state, { user_name: action.payload });

    case REDUCER_ID:
      return {
        ...state,
        id: action.payload
      };

    case REDUCER_PROFILE_PIC:
      return Object.assign(state, { profile_pic: action.payload });

    default:
      return state;
  }
}

export function reducerUserName(user_name) {
  return {
    type: REDUCER_USER_NAME,
    payload: user_name
  };
}

export function reducerID(id) {
  return {
    type: REDUCER_ID,
    payload: id
  };
}
export function reducerProfilePic(profile_pic) {
  return {
    type: REDUCER_PROFILE_PIC,
    payload: profile_pic
  };
}

export default reducer;
