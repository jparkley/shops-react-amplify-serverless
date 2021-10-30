import { useState, useEffect, createContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Amplify, { Auth, Hub} from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignOut } from '@aws-amplify/ui-react'
/* withAuthenticator: higher level order component */
/* AmplifyAuthenticator: React component, 
      won't automatically detect Auth state of the user, but enables us to customize nav */
import awsConfig from './aws-exports'

import toast, { Toaster } from 'react-hot-toast'

import './App.css';
import Nav from './components/layout/Nav'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Profile from './pages/Profile'

export const userContext = createContext()

Amplify.configure(awsConfig)

//const notifiy = () => toast('Here is your toast')

function App() {
  const [state, setState] = useState({
    user: null
  })

  useEffect(() => {
    let checkUser = async () => {
      try {
        const res = await Auth.currentAuthenticatedUser()      
        // setState({user: res.attributes.email})  
        setState({user: res})  
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
    <userContext.Provider value={state.user}>
      <BrowserRouter>
        <div>
          <Nav user={state.user} handleSignOut={handleSignOut} />
          <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/shops/:shopId" component={({match}) => <Shop shopId={match.params.shopId} />} />
          </div>
        </div>    
      </BrowserRouter>
      <Toaster position="bottom-center" 
      toastOptions={{
        className: 'toast',  
        success: { style: {backgroundColor: '#EEEEEE'}},
        error:  { style: {backgroundColor: '#ECAC5D'}},
      }} />
    </userContext.Provider>
  ) : (
    <>
      <div className="">
        Shops (market places)
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
