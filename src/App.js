import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Explore from './Components/Explore/Explore';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import AuthProvider from './Components/Context/AuthProvider';
import About from './Components/About/About';
import Dashboard from './Components/Dashboard/Dashboard';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder/PlaceOrder';
import Register from './Components/Login/Register/Register';

export const UserContext=createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({});

  return (    
  <UserContext.Provider value={{loggedInUser, setLoggedInUser, cart, setCart}}>

    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header />
        <Switch>
        <Route exact path="/">
            <Home></Home>
         </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route path="/explore">
          <Explore></Explore>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <PrivateRoute path="/placeOrder/:id">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
     
    </div>
    </UserContext.Provider>
  );
}

export default App;
