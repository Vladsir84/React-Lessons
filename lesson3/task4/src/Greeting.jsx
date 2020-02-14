import React from "react";
import moment from "moment";

const getFullYears = date => moment(date, "YYYY-MM-DD" ).fromNow().substr(0,2);


function Greeting(props) {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${getFullYears (props.birthDate)} years old`}
    </div>
  );
}

export default Greeting;