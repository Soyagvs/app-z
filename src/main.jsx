import { GoogleOAuthProvider} from "@react-oauth/google"
import React from 'react' 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./input.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="323428303594-h9bfh0pn6sll6g777ef2f7npriarktio.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
