import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Contacts from "./assets/pages/Contacts/Contacts";
import Homepage from "./assets/pages/Homepage/Homepage";
import Analytics from "./assets/pages/Analytics/Analytics";
import Navbar from "./assets/components/Navbar/Navbar";
import About from "./assets/pages/About/About";

import Login from "./assets/pages/Login/Login";
import Signup from "./assets/pages/Signup/Signup";
 import Footer from "./assets/components/Footer/Footer";

import ProfilePage from "./assets/pages/ProfilePage";

import Review from "./assets/Review/Review";

 import UserDashboard from "./UserDashboard";
 //import Contacts from "./assets/pages/Contacts/Contacts";
import ContactForm from "./assets/components/ContactUs/ContactUs";
import ExpenseCalculator from "./assets/pages/Expense/ExpenseCalculator";

import Services from "./assets/pages/Services/Services";
import TermsofService from "./assets/pages/TermsofService";
import PrivacyPolicy from "./PrivacyPolicy";
// import CategoriesPage from "./assets/pages/CategoriesPage";
import ContactUs from "./assets/components/ContactUs/ContactUs";
import CoinFlip from "./assets/CoinFlip/CoinFlip";
import AdminPage from "./assets/pages/AdminPage/AdminPage";
// import CategoryPage from "./assets/pages/CategoryPage";
import CategoryPage from "./assets/pages/CategoryPage";

import Dashboard from "./assets/pages/Dashboard/Dashboard";

import Homepage1 from "./assets/pages/Homepage/Homepage1";
// import CategoriesPage from "./assets/pages/Categoriespage";
import SavingsPage from "./assets/pages/SavingsPage";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/Cards" element={<Cards/>}/> */}
       {/* {<Route path ="/contact-us" element={<ContactForm/>}/> } */}
<Route path='/ProfilePage' element={<ProfilePage/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
       
        { <Route path='/ExpenseCalculator' element={<ExpenseCalculator/>}/> } 

        
       
        { <Route path='/Services' element={<Services/>}/> }  
        
{<Route path='/terms-of-service' element={<TermsofService/>}/> }

<Route path='/UserDashboard' element={<UserDashboard/>}/>

<Route path='/CoinFlip' element={<CoinFlip/>}/>


<Route path='/Analytics' element={<Analytics/>}/>

{<Route path='/contact-us' element={<ContactUs/>}/> }


<Route path='/Review' element={<Review/>}/>



<Route path='/AdminPage' element={<AdminPage/>}/>

<Route path='/Dashboard' element={<Dashboard/>}/>

{/* <route path='/CategoriesPage' element={<CategoriesPage/>}/> */}
<Route path='/SavingsPage' element={<SavingsPage/>}/>
<Route path='/Homepage1' element={<Homepage1/>}/>


<Route path='/CategoryPage' element={<CategoryPage/>}/>
      </Routes>
      <div><Footer/></div>
    </BrowserRouter>

  );
}

export default App;
