import { NavigationActions } from 'react-navigation'

import { updateUserOAuth, oauthLogin } from 'stores/authentication'
import { updateNewUser } from 'stores/register'

const handleOAuthLogin = () => {
  return (dispatch, getState) => {
    dispatch(oauthLogin()).then(({ success }) => {
      if (success) {
        dispatch(NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'AuthScreen' })]
        }))
      } else {
        dispatch(updateNewUser(
          getState().get('authentication').get('userLogingin').get('oauthLogin')
        ))
        dispatch(NavigationActions.navigate({ routeName: 'UnAuthScreen',
          action: NavigationActions.navigate({ routeName: 'RegisterScreen' })
        }))
      }
    })
  }
}

export const handleFacebookLogin = (profile, token) => {
  return (dispatch, getState) => {
    dispatch(updateUserOAuth({
      type: 'facebook',
      token: token,
      name: profile.name,
      email: profile.email,
      id: profile.id,
      imageUrl: profile.image
    }))
    dispatch(handleOAuthLogin())
  }
}

export const handleGoogleLogin = (user, token) => {
  return (dispatch, getState) => {
    dispatch(updateUserOAuth({
      type: 'google',
      token: user.token,
      name: user.name,
      email: user.email,
      id: user.id,
      imageUrl: user.picture
    }))
    dispatch(handleOAuthLogin())
  }
}
