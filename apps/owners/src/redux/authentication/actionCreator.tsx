import actions from './actions'

const {
  loginBegin,
  loginSuccess,
  loginErr,
  logoutBegin,
  logoutSuccess,
  logoutErr,
} = actions

const logInAction = (callback: any) => {
  callback()
  return loginSuccess(true)
}

const registerAction = (callback: any) => {
  return async (dispatch: any) => {
    dispatch(loginBegin())
    try {
      dispatch(loginSuccess(true))
      callback()
    } catch (err) {
      dispatch(loginErr(err))
    }

    // try {
    //   const response = await DataService.post('/register', values);
    //   if (response.data.errors) {
    //     dispatch(loginErr('Registration failed!'));
    //   } else {
    //     dispatch(loginSuccess(false));
    //   }
    // } catch (err) {
    //   dispatch(loginErr(err));
    // }
  }
}

const logOutAction = (callback: any) => {
  return async (dispatch: any) => {
    dispatch(logoutBegin())
    try {
      dispatch(logoutSuccess(false))
      callback()
    } catch (err) {
      dispatch(logoutErr(err))
    }
  }
}

export { logInAction, logOutAction, registerAction }
