import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
    // const res = await axios.get('/users');
    axios({
        method: 'get',
        url: 'http://localhost:8000/ssrapi/users'
    }).then(function (response) {
        dispatch({
            type: FETCH_USERS,
            payload: response.data.payload
        })
    }).catch(function (error) {
        // TODO next
    });
    // dispatch({
    //     type: FETCH_USERS,
    //     payload: {data:[{name:'sadjad', id:1}, {name:'hasan', id:2}]}
    //     // payload: res
    // });
};