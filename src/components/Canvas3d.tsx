import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);


export default function Boxes() {
  const position = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          duration: 8000,
          toValue: 1,
          useNativeDriver: false,
        }),
        Animated.timing(position, {
          duration: 8000,
          toValue: 0,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [position]);
  return (
    <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Text>This is a test</Text>
        <Svg height="100%" width="100%" viewBox="0 0 100 100">
          <AnimatedCircle
            cx={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "100",
                "105",
                "110",
                "115",
                "120",
              ],
            })}
            cy={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "100",
                "105",
                "110",
                "115",
                "120",
              ],
            })}
            // cx={"50"}
            // cy={"50"}
            r="130"
            strokeWidth="2.5"
            fill={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "#FF820D",
                "#E8572E",
                "#FF1C43",
                "#A005EB",
                "#1C32FF",
              ],
            })}
            opacity={0.3}
            
          />
          <AnimatedCircle
            cx={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "0",
                "5",
                "10",
                "15",
                "20",
              ],
            })}
            cy={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "0",
                "20",
                "30",
                "40",
                "50",
              ],
            })}
            r="100"
            strokeWidth="2.5"
            fill={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "#1C32FF",
                "#A005EB",
                "#E8572E",
                "#FF820D",
                "#FF1C43",
              ],
            })}
            opacity={0.3}
            
          />
          <AnimatedCircle
            cx={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "50",
                "60",
                "70",
                "80",
                "90",
              ],
            })}
            cy={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "20",
                "30",
                "40",
                "55",
                "65",
              ],
            })}
            r="110"
            strokeWidth="2.5"
            fill={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "#A005EB",
                "#1C32FF",
                "#FF820D",
                "#FF1C43",
                "#E8572E",
              ],
            })}
            opacity={0.4}
            
          />
          <AnimatedCircle
            cx={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "0",
                "10",
                "20",
                "30",
                "40",
              ],
            })}
            cy={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "100",
                "110",
                "120",
                "130",
                "140",
              ],
            })}
            r="50"
            fill={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "#FF1C43",
                "#1C32FF",
                "#FF820D",
                "#A005EB",
                "#E8572E",
              ],
            })}
            opacity={0.1}
            
          />
          <AnimatedCircle
            cx={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "100",
                "110",
                "120",
                "130",
                "140",
              ],
            })}
            cy={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "-30",
                "-20",
                "-10",
                "0",
                "10",
              ],
            })}
            r="60"
            fill={position.interpolate({
              inputRange: [0, 0.2, 0.4, 0.8, 1],
              outputRange: [
                "#FF1C43",
                "#1C32FF",
                "#FF820D",
                "#A005EB",
                "#E8572E",
              ],
            })}
            opacity={0.2}
            
          />
          {/* <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          /> */}
        </Svg>
      </View>
  )
}