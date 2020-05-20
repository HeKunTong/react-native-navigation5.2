const FETCH_USER = 'FETCH_USER';
const UPDATE_USER = 'UPDATE_USER';
const REMOVE_USER = 'REMOVE_USER';

const fetchUser = (user) => (dispatch) => {
  return dispatch({
    type: FETCH_USER,
    payload: user
  });
};

const updateUser = (user = {}) => (dispatch) => {
  return dispatch({
    type: UPDATE_USER,
    payload: user
  });
};

const removeUser = () => (dispatch) => {
  return dispatch({
    type: REMOVE_USER,
    payload: null
  });
};

export default {
  fetchUser,
  updateUser,
  removeUser,
};

export const handlers = {
  [FETCH_USER]: (state, { payload }) => {
    return payload;
  },
  [UPDATE_USER]: (state, { payload }) => {
    let data = {...state, ...payload};
    return data;
  },
  [REMOVE_USER]: (state, { payload }) => {
    return {};
  },
};
