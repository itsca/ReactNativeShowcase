import {useEffect, useRef} from "react";
import { Dimensions, View, StyleSheet, Animated } from 'react-native';
import {Canvas, Image, useCanvasRef, Circle, useValue, runSpring, useClockValue, useComputedValue, useLoop, interpolateColors, interpolate, Paint, RadialGradient, vec, BlurMask, LinearGradient } from "@shopify/react-native-skia";
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const interval = 6000;


const Colors =  [
  "#650FD6",
  "#5009DE",
  "#2F02C7",
  "#2509DE",
  "#0F08D4",
]

const Colors2 =  Colors.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)
const Colors3 =  Colors.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)
const Colors4 =  Colors.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)
const Colors5 =  Colors.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

console.log('👿', Colors)

export const Galaxy = () => {
  const ref = useCanvasRef();
  const loop = useLoop({duration: interval});
  const loop2 = useLoop({duration: 10000});
  
  const opacity = useComputedValue(() => {
    return loop.current;
  }, [loop]);

  const circleVals = {
    colors: {
      c1: useComputedValue(
        () =>
          interpolateColors(
            opacity.current,
            [0, 0.2, 0.5, 0.8, 1],
            Colors
          ),
        [loop]
      ),
    },
    x: {
      c1: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [300,330,360,390,420,]),
        [loop2]
      ),
      c2: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [50,80,110,140,170,]),
        [loop2]
      ),
    },
    y: {
      c1: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [100,130,160,190,220,]),
        [loop2]
      ),
      c2: useComputedValue(
        () =>
          interpolate(loop.current, [1, 0.8, 0.4, 0.2, 0], [500,530,560,590,620,]),
        [loop2]
      ),
    }
  }
  const width = 150;
  const r = width/2;
  return (
    <View
    style={[
      StyleSheet.absoluteFill,
      { alignItems: 'center', justifyContent: 'center' },
    ]}
  >
    <Canvas style={{ width: screenDimensions.width, height: screenDimensions.height }} ref={ref}>
      <Circle r={screenDimensions.width * 2} cx={screenDimensions.width / 2} cy={screenDimensions.height / 2} opacity={1} >
        {/* <Paint color="#fff" style="stroke" strokeWidth={1} /> */}
        <RadialGradient
          c={vec(screenDimensions.width / 2, screenDimensions.height / 2)}
          r={2000}
          colors={["#040712", "#0C3A45"]}
        />
        {/* <BlurMask blur={80} /> */}
      </Circle>
      <Circle r={300} cx={circleVals.x.c1} cy={circleVals.y.c1} opacity={0.1} >
        {/* <Paint color="#fff" style="stroke" strokeWidth={1} /> */}
        <LinearGradient
          start={vec(2 * r, 2 * r)}
          end={vec(4 * r, 4 * r)}
          colors={["#0061ff", "#60efff"]}
        />
        <BlurMask blur={40} />
      </Circle>
      <Circle r={310} cx={circleVals.x.c2} cy={circleVals.y.c2} opacity={0.1} >
        <LinearGradient
          start={vec(2 * r, 2 * r)}
          end={vec(4 * r, 4 * r)}
          colors={["#EB92F0", "#FA6A6D"]}
        />
        <BlurMask blur={80} />
      </Circle>
    </Canvas>
  </View>
  );
};