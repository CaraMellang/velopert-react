import React from "react";
import PropTypes from "prop-types";

// const MyComponent = (propsa) => {
//   //const MyComponent = ({name,children}) => {} 이런식으로도 가능
//   const { name, children } = propsa; //propsa. 없이 쓰기 가능(비구조화 할당)
//   return (
//     <div>
//       {/*오예오예 {propsa.name} 칠드런은 {propsa.children}*/}
//       오예오예 {name} 칠드런은 {children}
//     </div>
//   );
// };

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      {/*오예오예 {propsa.name} 칠드런은 {propsa.children}*/}
      오예오예 {name} 칠드런은 {children} <br />
      Me가 favorite하는 Number는 {favoriteNumber}입니당.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
