import Svg, {
  Path,
  Rect,
} from 'react-native-svg';
import React, { Component } from 'react';
import { View } from 'react-native';

const color1 = '#d0edeb';
const color2 = '#9cd8d5';
const color3 = '#addfdc';
const color4 = '#bee5e3';

export default class BackDrop extends Component {
  render() {
    return (
      <View style={[this.props.style]}>
        <Svg height="100%" width="100%" viewBox="0 0 1000 330">
          <Rect
            x="1.18"
            y="216.64"
            width="589.28"
            height="108.32"
            style={{ fill: color1 }}
          />
          <Path
            d="M14.2 135.4h74.74a5.42 5.42 0 0 1 5.42 5.42V325H8.79V140.82a5.42 5.42 0 0 1 5.41-5.42zm86.68-41.16h73.62a6 6 0 0 1 6 6V325H94.9V100.21a6 6 0 0 1 5.98-5.97zm105.07 0h73.62a6 6 0 0 1 6 6V325H200V100.21a6 6 0 0 1 5.95-5.97zm116.6 28.16h74.38a5.6 5.6 0 0 1 5.6 5.6v197H317V128a5.6 5.6 0 0 1 5.55-5.6z"
            style={{ fill: color1 }}
          />
          <Rect
            y="166.81"
            width="85.57"
            height="158.15"
            style={{ fill: color1 }}
          />
          <Path
            d="M277.19 24.91h71.94a6.81 6.81 0 0 1 6.87 6.82V325h-85.62V31.73a6.81 6.81 0 0 1 6.81-6.82zm129.67 127.82h74.74a5.42 5.42 0 0 1 5.42 5.42V325h-85.58V158.15a5.42 5.42 0 0 1 5.42-5.42z"
            style={{ fill: color1 }}
          />
          <Path
            d="M477.27 152.73H552a5.42 5.42 0 0 1 5.42 5.42V325h-85.57V158.15a5.42 5.42 0 0 1 5.42-5.42z"
            style={{ fill: color1 }}
          />
          <Path
            d="M470.23 123.48H519a5.42 5.42 0 0 1 5.42 5.42V325h-59.61V128.9a5.42 5.42 0 0 1 5.42-5.42zm-93.16-46.57H441a5.42 5.42 0 0 1 5.42 5.42V325h-74.76V82.32a5.42 5.42 0 0 1 5.41-5.41zM260.09 0h68.24a5.42 5.42 0 0 1 5.42 5.42V325h-79.08V5.42A5.42 5.42 0 0 1 260.09 0zm-99.66 24.91h56.33a5.42 5.42 0 0 1 5.42 5.42V325H155V30.33a5.42 5.42 0 0 1 5.43-5.42zM65.11 49.83h39a5.42 5.42 0 0 1 5.42 5.42V325H59.7V55.24a5.42 5.42 0 0 1 5.41-5.41z"
            style={{ fill: color1 }}
          />
          <Path
            d="M419.06 216.64h582.12V325H413.9V221.8a5.16 5.16 0 0 1 5.16-5.16z"
            style={{ fill: color1 }}
          />
          <Path
            d="M484.31 135.4H559a5.42 5.42 0 0 1 5.42 5.42V325h-85.53V140.82a5.42 5.42 0 0 1 5.42-5.42zM571 94.24h73.6a6 6 0 0 1 6 6V325H565V100.21a6 6 0 0 1 6-5.97zm105.05 0h73.62a6 6 0 0 1 6 6V325h-85.59V100.21a6 6 0 0 1 5.97-5.97zm116.61 28.16H867a5.6 5.6 0 0 1 5.6 5.6v197h-85.54V128a5.6 5.6 0 0 1 5.6-5.6z"
            style={{ fill: color1 }}
          />
          <Path
            d="M441.05 166.81h75.68a4.95 4.95 0 0 1 4.95 4.95V325h-85.57V171.76a4.95 4.95 0 0 1 4.94-4.95zM747.3 24.91h71.94a6.81 6.81 0 0 1 6.81 6.81V325h-85.57V31.73a6.81 6.81 0 0 1 6.82-6.82zM877 152.73h74.74a5.42 5.42 0 0 1 5.42 5.42V325h-85.61V158.15a5.42 5.42 0 0 1 5.45-5.42z"
            style={{ fill: color1 }}
          />
          <Path
            d="M946.46 152.73h54.72V325H942V157.24a4.51 4.51 0 0 1 4.46-4.51z"
            style={{ fill: color1 }}
          />
          <Path
            d="M940.33 123.48h48.74a5.42 5.42 0 0 1 5.42 5.42V325h-59.57V128.9a5.42 5.42 0 0 1 5.41-5.42zm-93.15-46.57h63.91a5.42 5.42 0 0 1 5.42 5.42V325h-74.75V82.32a5.42 5.42 0 0 1 5.42-5.41zM730.19 0h68.24a5.42 5.42 0 0 1 5.42 5.42V325h-79.07V5.42A5.42 5.42 0 0 1 730.19 0zm-99.65 24.91h56.33a5.42 5.42 0 0 1 5.42 5.42V325h-67.17V30.33a5.42 5.42 0 0 1 5.42-5.42zm-95.32 24.92h39a5.42 5.42 0 0 1 5.42 5.42V325H529.8V55.24a5.42 5.42 0 0 1 5.42-5.41z"
            style={{ fill: color1 }}
          />
          <Path
            d="M542.46 61.74h81.92a5.62 5.62 0 0 1 5.62 5.62V325h-93.16V67.36a5.62 5.62 0 0 1 5.62-5.62z"
            style={{ fill: color2 }}
          />
          <Path
            d="M460.66 67.16h76.54a5.06 5.06 0 0 1 5.06 5.06V325H455.6V72.21a5.06 5.06 0 0 1 5.06-5.05z"
            style={{ fill: color3 }}
          />
          <Path
            d="M807.76 147.31h77.76a4.45 4.45 0 0 1 4.45 4.45V325h-86.66V151.76a4.45 4.45 0 0 1 4.45-4.45zm-234.61-36.82H650a4.89 4.89 0 0 1 4.89 4.89V325h-86.63V115.37a4.89 4.89 0 0 1 4.89-4.88z"
            style={{ fill: color2 }}
          />
          <Path
            d="M734 67.16h87.74a5.42 5.42 0 0 1 5.42 5.42V325h-98.59V72.57a5.42 5.42 0 0 1 5.43-5.41z"
            style={{ fill: color2 }}
          />
          <Path
            d="M860.72 95.32h62.83a5.42 5.42 0 0 1 5.42 5.42V325H855.3V100.74a5.42 5.42 0 0 1 5.42-5.42z"
            style={{ fill: color3 }}
          />
          <Path
            d="M897.18 176.56h104V325h-109V181.61a5 5 0 0 1 5-5.05z"
            style={{ fill: color4 }}
          />
          <Path
            d="M669 29.25h75.82a5.42 5.42 0 0 1 5.42 5.42V325h-86.66V34.66a5.42 5.42 0 0 1 5.42-5.41z"
            style={{ fill: color3 }}
          />
          <Path
            d="M630.63 76.91h76.73a5 5 0 0 1 5 5V325h-86.69V81.87a5 5 0 0 1 4.96-4.96z"
            style={{ fill: color3 }}
          />
          <Path
            d="M435.44 191.73h122.4a5.42 5.42 0 0 1 5.42 5.42V325H430V197.14a5.42 5.42 0 0 1 5.44-5.41z"
            style={{ fill: color4 }}
          />
          <Path
            d="M48.32 61.74h75.82a5.42 5.42 0 0 1 5.42 5.42V325H42.91V67.16a5.42 5.42 0 0 1 5.41-5.42zm289.33 85.57h77.76a4.45 4.45 0 0 1 4.45 4.45V325H333.2V151.76a4.45 4.45 0 0 1 4.45-4.45z"
            style={{ fill: color2 }}
          />
          <Path
            d="M79.21 110.49h76.88a4.89 4.89 0 0 1 4.89 4.89V325H74.32V115.37a4.89 4.89 0 0 1 4.89-4.88zm184.67-43.33h87.74a5.42 5.42 0 0 1 5.38 5.41V325h-98.54V72.57a5.42 5.42 0 0 1 5.42-5.41z"
            style={{ fill: color2 }}
          />
          <Path
            d="M390.61 95.32h62.83a5.42 5.42 0 0 1 5.42 5.42V325H385.2V100.74a5.42 5.42 0 0 1 5.41-5.42z"
            style={{ fill: color3 }}
          />
          <Path
            d="M427.44 176.56h114.82a5.42 5.42 0 0 1 5.42 5.42V325H422V182a5.42 5.42 0 0 1 5.44-5.44z"
            style={{ fill: color4 }}
          />
          <Path
            d="M198.89 29.25h75.82a5.42 5.42 0 0 1 5.42 5.42V325h-86.66V34.66a5.42 5.42 0 0 1 5.42-5.41z"
            style={{ fill: color3 }}
          />
          <Path
            d="M160.52 76.91h76.73a5 5 0 0 1 5 5V325h-86.69V81.87a5 5 0 0 1 4.96-4.96z"
            style={{ fill: color3 }}
          />
          <Path
            d="M1.18 191.73h105a4.92 4.92 0 0 1 4.92 4.92V325H1.18V191.73z"
            style={{ fill: color4 }}
          />
        </Svg>
      </View>
    );
  }
}