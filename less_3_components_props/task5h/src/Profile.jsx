import React from 'react';
import moment from 'moment';

const Profile = props => {
  const dateOfBorn = moment(props.userData.birthDate).format('DD MMM YY');
  console.log(dateOfBorn); //=> 17 Jan 91

  return (
    <div className="profile">
      <div className="profile__name">
        {props.userData.firstName} {props.userData.lastName}
      </div>
      <div className="profile__birth">{`Was born ${dateOfBorn} in ${props.userData.birthPlace}`}</div>
    </div>
  );
};
export default Profile;
