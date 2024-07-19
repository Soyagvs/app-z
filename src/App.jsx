import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from "./pages/login/Login.jsx"
import { Registred } from "./pages/registred/Registred.jsx"
import { Layout } from './layouts/Layout.jsx';
import { Home } from './pages/home/Home.jsx';
import { Profile } from "./pages/profile/Profile.jsx"
import { Notifications } from './pages/notifications/Notifications.jsx';
import { ConditionsServices } from './pages/footer/ConditionsServices.jsx';
import { PoliciesCookies } from "./pages/footer/PoliciesCookies.jsx"
import { PoliciesPrivated } from "./pages/footer/PoliciesPrivated.jsx"
import { PoliciesServices } from "./pages/footer/PoliciesServices.jsx"
import { Configurations } from "./pages/configurations/Configurations.jsx"
import { Support } from "./pages/configurations/Support.jsx"

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
          <Route path='/configurations' element={<Configurations />} />
        </Route>
        <Route path='/support' element={<Support />} />
        <Route path="/conditions-services" element={<ConditionsServices />} />
        <Route path="/policies-cookies" element={<PoliciesCookies />} />
        <Route path="/policies-privated" element={<PoliciesPrivated />} />
        <Route path="/policies-services" element={<PoliciesServices />} />
      </Routes>
    </Router>
  )
}

export default App
