import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/login/Login.jsx"
import { Registred } from "./pages/registred/Registred.jsx"
import { Home } from './pages/home/Home.jsx';
import { Layout } from './layouts/Layout.jsx';
import { Profile } from "./pages/profile/Profile.jsx"
import { Notifications } from './pages/notifications/Notifications.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/registred" element={<Registred />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/notifications' element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
