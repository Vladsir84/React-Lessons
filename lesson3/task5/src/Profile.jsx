import React from "react";
import moment from "moment";

const getDate = date => moment(date).format("DD MMM YYYY");

function Profile(props) {
  return (
    <>
      <div className="profile__name">
        {`${props.userInfo.firstName} ${props.userInfo.lastName}`}
      </div>
      
      <div className="profile__birth">
        {`Was born ${getDate(props.userInfo.birthDate)} in ${props.userInfo.birthPlace}`}
      </div>
    </>
  );
}

export default Profile;