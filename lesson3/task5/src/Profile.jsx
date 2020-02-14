import React from "react";
import moment from "moment";

const getDate = date => moment(date).format("DD MMM YYYY");

const userData = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London'
};


function Profile(props) {
  return (
    <>
      <div className="profile__name">
        {`${userData.firstName} ${userData.lastName}  `}
      </div>
      
      <div className="profile__birth">
        {`   Was born ${getDate(userData.birthDate)} in ${userData.birthPlace}`}
      </div>
    </>
  );
}

export default Profile;