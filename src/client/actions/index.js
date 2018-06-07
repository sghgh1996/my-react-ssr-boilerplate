import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch) => {
    const res = await axios.get('http://localhost:8000/ssrapi/users');
    // axios({
    //     method: 'get',
    //     url: 'http://localhost:8000/ssrapi/users'
    // }).then(function (response) {
    //     dispatch({
    //         type: FETCH_USERS,
    //         payload: response.data.payload
    //     })
    // }).catch(function (error) {
    //     // TODO next
    // });
    dispatch({
        type: FETCH_USERS,
        payload: res.data.payload
    });
};