import React from "react";
import Svg, { Line, Circle } from "react-native-svg";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Svg
        width="375"
        height="13"
        viewBox="0 0 375 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Line
          x1="4.37114e-08"
          y1="6.5"
          x2="375"
          y2="6.50003"
          stroke="#C4C4C4"
        />
        <Circle cx="46.5" cy="6.5" r="6.5" fill="black" />
        <Circle cx="102.5" cy="6.5" r="6.5" fill="#C4C4C4" />
        <Circle cx="159.5" cy="6.5" r="6.5" fill="#C4C4C4" />
        <Circle cx="215.5" cy="6.5" r="6.5" fill="#C4C4C4" />
        <Circle cx="272.5" cy="6.5" r="6.5" fill="#C4C4C4" />
        <Circle cx="328.5" cy="6.5" r="6.5" fill="#C4C4C4" />
      </Svg>
    );
  }
}
