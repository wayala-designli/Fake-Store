import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const Search = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <G
      stroke="#181820"
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#a)">
      <Path d="m16.5 16.5-4.758-4.758M7.5 13.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Search;
