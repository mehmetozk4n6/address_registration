import { useState, useEffect } from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";

function Timepicker({ value, handleChange, handleBlur }) {
  const [time, setTime] = useState();
  // console.log(time);
  // console.log(moment(time));
  console.log(value);

  return (
    <TimePicker
      defaultValue={value && moment(value)}
      onChange={handleChange}
      format="HH:mm:ss"
    />
  );
}

export default Timepicker;
