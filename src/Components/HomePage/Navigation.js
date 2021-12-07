import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={classes.outNavigation}>
      <div className={classes.flexContainer}>
        <div name="icon" className={classes.brandName}>
          SplitUp
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navigation;
