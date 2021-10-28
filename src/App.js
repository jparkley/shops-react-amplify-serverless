import { useState, useEffect } from 'react'

import Amplify, { Auth, Hub} from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react'
/* withAuthenticator: higher level order component */
/* AmplifyAuthenticator: React component, 
      won't automatically detect Auth state of the user, but enables us to customize nav */
import awsConfig from './aws-exports'

import './App.css';

Amplify.configure(awsConfig)

function App() {
  const [state, setState] = useState({
    user: null
  })

  useEffect(() => {
    let checkUser = async () => {
      try {
        const res = await Auth.currentAuthenticatedUser()      
        setState({user: res.attributes.email})  
      } catch(error) {
        console.log('Error on checking user: ', error);
        setState({user: null})
      }
    }
    Hub.listen('auth', checkUser) // Using Hub, listen for signin / signout events
    checkUser() // Check the login status manually the first time in useEffect
    return () => Hub.remove('auth', checkUser) // Cleanup    
  }, [])

  const handleSignOut = async () => {
    try {
      await Auth.signOut()
    } catch (error) {
      console.log('Error on signing out: ', error);
    }
  }

  return state.user !== null ? (
    <div>
      <p>Logged in, Hello, {state.user}!</p>
      <button onClick={handleSignOut}>Sign Out</button>
      <AmplifyAuthenticator>      
      <AmplifySignOut />
      </AmplifyAuthenticator>
    </div>
  ) : (
    <>
      <div className="">
        Shops (market places) budiling 11
        <AmplifyAuthenticator>      
          <AmplifySignUp headerText="Test Test" slot="sign-up" usernameAlias="email"
            formFields = {[
                {type: "username", label: "User Name", inputProps: {required: true, autocomplete: "username"}},
                {type: "email"},
                {type: "password"},
              ]}
          ></AmplifySignUp>
        
        </AmplifyAuthenticator>
      </div>
    </>
  );
}

export default App;
