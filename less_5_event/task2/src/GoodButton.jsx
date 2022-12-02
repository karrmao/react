import React, { Component } from 'react';

// class GoodButton extends Component {
//   handlClick(e) {
//     console.log(e);
//     //console.log(e.target); //=> <button class="fancy-button">Click-me!</button>
//     // console.log(e.target.textContent); //=>  Click-me!
//     // console.log(e.clientX); //=>  279;
//     // console.log(e.type); //=> click

//     alert(e.target.textContent);
//   }

//   render() {
//     return (
//       <button className="fancy-button" onClick={this.handlClick}>
//         Click-me!
//       </button>
//     );
//   }
// }

// export default GoodButton;

const GoodButton = () => {
  const handlClick = e => {
    console.log(e);

    alert(e.target.textContent);
  };

  return (
    <button className="fancy-button" onClick={handlClick}>
      Click-me!
    </button>
  );
};
export default GoodButton;
