import './App.css';
import Home from './views/Home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import CreateAccount from './components/CreateAccount/createAccount';
import ForgotPassword from './components/ForgotPassword/forgotPassword';
import MainHome from './components/mainHome/mainHome';
import HomeSearch from './components/HomeSearch/homeSearch';
import RestraPreview from './components/RestraPreview/restraPreview';
import Menu from './components/Menu/menu';
import Account from './components/Account/account';
import Refer from './components/Refer/refer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<CreateAccount/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/mainHome' element={<MainHome/>}/>
        <Route path='/homeSearch' element={<HomeSearch/>}/>
        <Route path='/restraPreview' element={<RestraPreview/>}/>
        {/* <Route path='/restraPreview' element={<Menu/>}/> */}
        {/* <Route path='/overview' element={<Overview/>}/>
        <Route path='/reviewRating' element={<ReviewRating/>}/>
        <Route path='/gallery' element={<Gallery/>}/> */}
        <Route path='/account' element={<Account/>}/>
        <Route path='/refer' element={<Refer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
