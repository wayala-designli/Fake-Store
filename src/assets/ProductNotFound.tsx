import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ProductNotFound = (props: SvgProps) => (
  <Svg width={82} height={120} viewBox="0 0 512 512" {...props}>
    <Path d="M286.2 35.2c-41.7 3.3-79.7 31.4-95.3 70.3-22.3 55.9 1.4 118.9 55 145.5 34.8 17.4 76.4 15.6 109.9-4.7l7.4-4.5 4.8 4.7c4.2 4.1 4.8 5.3 5.3 10.1 1.2 11.3 2.4 12.9 43.5 53.9 26.1 26 39.6 38.8 42.9 40.5 3.9 2.1 6.1 2.5 12.8 2.5 6.7 0 8.8-.5 13-2.7 10.7-5.6 16-14.6 15.9-26.8-.1-12.2-.4-12.7-43.6-55.7-41.3-41.2-42.5-42.1-52.9-42.5-4.9-.1-5.8-.5-10.1-4.7-2.7-2.5-4.8-4.9-4.8-5.4s2-4.1 4.4-8.1c10.3-17 16.6-39.4 16.6-59.1 0-37.5-20.2-74.7-51.4-95-10.3-6.7-14.1-8.6-24.8-12.4-15.4-5.4-31.3-7.3-48.6-5.9zm37.3 13.7c17.6 4.9 34.2 14.9 47.2 28.4 9.2 9.6 13.1 15 18.3 25.5 28.2 56.8-1 125.4-61.5 144.5-29.8 9.4-63.4 4.3-89.2-13.5C186.5 198 178.2 124.9 220.7 79 235.8 62.8 254 52.4 276 47.5c10.1-2.2 37.1-1.4 47.5 1.4zM400.9 237c3.4 0 7.6.6 9.4 1.4 1.8.8 19.7 17.9 40.8 39.2 40.8 41 40.8 41 39.4 50.2-.6 3.8-1.6 5.6-5.4 9.3-3.8 3.8-5.5 4.8-9.5 5.4-9.9 1.5-9.6 1.8-49.9-38.3-21.2-21.2-37.7-38.4-38.9-40.6-1.4-2.8-2-5.7-1.9-10l.1-6.1-6.2-6.2-6.2-6.3 4.9-5 4.9-5 6.2 6c6.2 6 6.2 6 12.3 6z" />
    <Path d="M286.1 66c-27.6 3.8-51.6 21-63.7 45.5-6.3 12.7-8.5 22.4-8.6 36.5-.2 24.8 8.2 44.4 26.5 61.7 14.7 13.8 31.5 20.9 52.2 22 23.7 1.2 45.7-7.1 62.6-23.7 16.8-16.5 25.8-39.5 24.6-63-.6-11.5-3.8-24.4-8.3-33.3-8.4-16.7-24.3-31.9-41.2-39.4-12-5.3-31.3-8-44.1-6.3zM314 78.6c20.5 4.7 38.5 19.6 48.1 39.9 18.4 39.1-1.9 85.4-43.6 99.2-7 2.3-9.7 2.7-21.5 2.7-10.4.1-14.9-.3-19.4-1.7-25.9-8-45.2-28.1-51.2-53.4-1.9-8-2.2-24.5-.5-31.8 5.7-24.2 23.3-44.2 46.2-52.6 13.7-5 26.9-5.7 41.9-2.3z" />
    <Path d="M269.7 121.8c-3.1 3.4-1.9 5.5 8.8 16.2l10.5 10.4-10.5 10.7c-10.5 10.7-11.8 12.8-9.2 16.3 3 4.1 6.3 2.4 17.3-8.5l10.4-10.4 10.3 10.3c10.4 10.3 13.5 12 16.5 9s1.3-6.1-9-16.5L304.5 149l10.3-10.3c10.7-10.7 12.1-13.6 8.6-17.1-3.1-3.1-5.5-1.8-16.3 8.9L296.4 141 286 130.5c-10.8-10.9-13.2-12.1-16.3-8.7zM67.6 241.2c-5.4 5-57.6 68.3-57.6 70 0 1 .9 2.7 2 3.8 2 2 3.3 2 61.9 2h59.9l6.4-7.3c3.6-3.9 15.6-18.1 26.7-31.5 11.2-13.3 20.6-24.2 21-24.2.4 0 11.5 12.9 24.8 28.7 13.3 15.9 25.3 30 26.7 31.5l2.5 2.8h75.9c72.3 0 76-.1 77.5-1.8 2-2.2 2.2-6.3.5-8-.9-.9-19-1.2-75.3-1.2l-74-.1-23.2-27.7-23.3-27.7 4.6-.6c2.5-.3 5-1.2 5.5-2 1.4-2.3 1-5.5-.9-7.2-1.7-1.6-8-1.7-70.5-1.7H70.1l-2.5 2.2zm107.2 9.7c-.1.5-10.6 13.1-23.1 28L128.9 306H78.5c-27.8 0-50.5-.2-50.5-.6 0-.3 10.4-12.9 23.1-28L74.2 250h50.5c30.6 0 50.3.4 50.1.9z" />
    <Path d="M184 277c-2 2-2 3.3-2 95.5V466H77v-66.9c0-59.5-.2-67.1-1.6-68.5-2.1-2.1-5.7-2-7.7.2-1.6 1.7-1.7 8.2-1.7 72.3 0 59.3.2 70.8 1.4 72.5 1.4 1.9 4.4 1.9 162.3 2.2 88.4.1 162.2 0 164-.3 6.7-1.2 6.3 3.6 6.3-73.8 0-76.5.1-74.7-5.5-74.7-5.7 0-5.5-2.9-5.5 70.1V466H193v-93.8c0-89.7-.1-94-1.8-95.5-2.5-2.2-4.8-2.1-7.2.3z" />
    <Path d="M211.2 418.2c-2 2-1.4 6.5 1 8.2 1.9 1.4 6.8 1.6 33.3 1.6 26.5 0 31.4-.2 33.3-1.6 2.4-1.7 3-6.2 1-8.2-1.7-1.7-66.9-1.7-68.6 0zM211.7 440.8c-2.3 2.5-2.2 6.9.2 8.2 1.3.6 14 1 34.4 1 35.4 0 35 .1 35-5.7 0-5.2-1-5.3-35.8-5.3-29.9 0-32.3.1-33.8 1.8z" />
  </Svg>
);
export default ProductNotFound;