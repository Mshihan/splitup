import classes from "./InstrumentCard.module.css";

const InstrumentCard = (props) => {
  const image = props.image;
  const instrumentName = props.name;
  return (
    <div className={classes.instrumentContainer}>
      <img src={image} alt="instrument icon" height="28px" width="28px" />
      <p>{instrumentName}</p>
    </div>
  );
};

export default InstrumentCard;
