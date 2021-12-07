import HomePageContent from "../Components/HomePage/HomePageContent";
import Navigation from "../Components/HomePage/Navigation";
import classes from "./HomePage.module.css";

const HomePage = (props) => {
  return (
    <div className={classes.home}>
      <Navigation />
      <HomePageContent />
    </div>
  );
};

export default HomePage;
