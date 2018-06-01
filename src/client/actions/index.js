// import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
    // const res = await axios.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: {data:[{name:'sadjad', id:1}, {name:'hasan', id:2}]}
        // payload: res
    });
};