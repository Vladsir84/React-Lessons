import React from "react";
import moment from "moment";

const getDate = date => moment(date).format("DD MMM YYYY");

function Profile(props) {
  return (
    <>
      <div className="greeting__name">
        {`${props.userData.firstName} ${props.userData.lastName}`}
      </div>
      <div className="greeting__birth">
        {`Was born ${getDate(props.userData.birthDate)} in ${props.userData.birthPlace}`}
      </div>
    </>
  );
};

export default Profile;