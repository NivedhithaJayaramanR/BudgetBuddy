import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import Navbar1 from "../../components/Navbar/Navbar1";
import Aos from "aos";
import "aos/dist/aos.css";
import FeatureSection from "../Services/Services";
//import ContactForm from "../../components/ContactForm/ContactForm";
import TipsPage from "../TipsPage";
export default function Homepage1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();
  function handleSearch() {
    navigate("/login");
  }

  return (
    <>
      <Navbar1/>
      <section className="home_section">
        {}
        <div className="main_container bg_color_2">
          <div
            data-aos-duration="2000"
            className="left_container align-center"
          >
            <h1>Expense Tracker</h1>
            <h2>A penny saved is a penny earned</h2>
          
          </div>
          <div className="right_container align-center">
            <img src="https://android.giveawayoftheday.com/wp-content/plugins/gotd_googleplay_plugin/images/2019/03/com.waynejohnson.dailyexpensetracker_app_icon_1551695948.png" alt="image" />
            <img src="images\luxury_bus.jpg" alt="image" />
          </div>  
        </div>
        <div className="first_container bg_color_4">
          <div className="image_container">
            <img src="https://www.freshbooks.com/wp-content/uploads/2022/02/expense-tracking.jpg" alt="" />
          </div>
          <div
            data-aos-duration="2500"
            className="description_container"
          >
            <h2>Expense - Check Expenses</h2>
            <p>
              <br></br>
            Expenses are an integral part of financial management, representing the 
            costs incurred in the process of acquiring goods and services or maintaining operations.
             Effective expense management is crucial for both individuals and businesses, 
             as it directly impacts financial stability and growth. Individuals must balance 
             their spending against their income to ensure they can 
            meet their needs and save for future goals. This involves budgeting, tracking expenses, 
            and making conscious decisions about spending priorities
            </p>
          </div>
        </div>
        <div className="second_container bg_color_3">
          <h2 className="tag_line">
       Spend less than you earn.
          </h2>

        </div>
       
     <FeatureSection/>
     <TipsPage/>
        {/* <ContactForm /> */}
      </section>
    </>
  );
}
