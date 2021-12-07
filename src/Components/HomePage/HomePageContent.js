import classes from "./HomePageContent.module.css";
import IntroductionContent from "./Introduction";
import UploadArea from "./UploadArea";

const HomePageContent = (props) => {
  return (
    <div className={classes.homePageContent}>
      <IntroductionContent />
      <UploadArea />
    </div>
  );
};

export default HomePageContent;
