import InstrumentCard from "./InstrumentCard";
import classes from "./UploadArea.module.css";
import pianoImage from "./../../images/grand-piano.png";

const UploadArea = (props) => {
  const uploadSong = () => {
    console.log("Upload the song");
  };
  return (
    <div className={classes.uploadAreaMain}>
      <div className={classes.instrumentSelection}>
        <p>Select Instrument</p>
        <InstrumentCard image={pianoImage} name="Piano" />
      </div>
      <div className={classes.uploadSection} onClick={uploadSong}>
        <h3>Upload song here</h3>
        <p>
          Accepting audio files in the format of Wav / Mp4 / Mp3, 0.5MB to 50MB.
        </p>
      </div>
    </div>
  );
};

export default UploadArea;
