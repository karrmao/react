import React from 'react';
import moment from 'moment';

const Profile = props => {
  const dateOfBorn = moment(props.userData.birthDate).format('DD MMM YY');

  //console.log('DoB :', dateOfBorn);
  return (
    <div className="profile">
      <div className="profile_name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile_birth">{`Was born ${dateOfBorn} in ${props.userData.birthPlace}`}</div>
    </div>
  );
};

export default Profile;

//console.log(moment('1991-01-17T11:11:11.819Z').format('DD MMM YY'));
