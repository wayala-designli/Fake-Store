import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LeftArrow = () => (
  <Svg width={16} height={24} fill="none">
    <Path
      stroke="#181820"
      strokeLinecap="square"
      strokeMiterlimit={20}
      strokeWidth={3}
      d="M12 4 4 12l8 8"
    />
  </Svg>
);
export default LeftArrow;
