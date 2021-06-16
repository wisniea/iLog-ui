import './App.css';
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
/* Pages */
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import SignUp from './components/pages/SignUp/SignUp';
import Login from './components/pages/Login/Login'
import User from './components/pages/User/Welcome/Welcome'
import Create from './components/pages/User/Create/Create'
import History from './components/pages/User/History/History'
import DataView from './components/pages/DataGraphs/DataView';
import FormData from './components/pages/FormData/FormData';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import FillForm from './components/pages/FillForm/FillForm'
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' exact component={ Home }/>
        <Route exact path='/services' component={ Services }/>
        <Route exact path='/products' component={ Products }/>
        <Route exact path='/sign-up' component={ SignUp }/>
        <Route exact path='/login' component={ Login }/>
        <Route exact path='/user/create' exact component={Create}/>
        <Route exact path='/user' exact component={User}/>
        <Route exact path='/user/data-view' exact component={DataView}/>
        <Route exact path='/user/data-view/id' exact component={FormData}/>
        <Route exact path='/link/:id' exact component={FillForm}/>
      </Switch>  
    </Router>
  );
}

export default App;

