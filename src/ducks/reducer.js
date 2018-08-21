const initialState = {
    user_name = '',
    id = '',
    profile_pic = ''
};

const USER_NAME = 'USER_NAME';
const ID = 'ID';
const PROFILE_PIC = 'PROFILE_PIC';


function reducer(state = initialState, action){
    console.log("reducer hit: action ->", action);
    switch (action.type){
        case USER_NAME:
        return Object.assign({}, state, {user_name: action.payload});
    };
}