import {useEffect, useRef} from "react";
import { Dimensions, View, StyleSheet, Animated } from 'react-native';
import {Canvas, Image, useCanvasRef, Circle, useValue, runSpring, useClockValue, useComputedValue, useLoop, interpolateColors, interpolate } from "@shopify/react-native-skia";
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

export const Demo = () => {
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
      c2: useComputedValue(
        () =>
          interpolateColors(
            opacity.current,
            [0, 0.2, 0.5, 0.8, 1],
            Colors2
          ),
        [loop]
      ),
      c3: useComputedValue(
        () =>
          interpolateColors(
            opacity.current,
            [0, 0.2, 0.5, 0.8, 1],
            Colors3
          ),
        [loop]
      ),
      c4: useComputedValue(
        () =>
          interpolateColors(
            opacity.current,
            [0, 0.2, 0.5, 0.8, 1],
            Colors4
          ),
        [loop]
      ),
      c5: useComputedValue(
        () =>
          interpolateColors(
            opacity.current,
            [0, 0.2, 0.5, 0.8, 1],
            Colors5
          ),
        [loop]
      )
    },
    x: {
      c1: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [0,120,230,240,250,]),
        [loop2]
      ),
      c2: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [100,320,430,540,650,]),
        [loop2]
      ),
      c3: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [300,420,530,340,250,]),
        [loop2]
      ),
      c4: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [500,520,530,540,550,]),
        [loop2]
      ),
      c5: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [600,420,330,240,150,]),
        [loop2]
      )
    },
    y: {
      c1: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [100,220,330,540,650,]),
        [loop2]
      ),
      c2: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [100,120,130,140,150,]),
        [loop2]
      ),
      c3: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [300,420,500,540,550,]),
        [loop2]
      ),
      c4: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [650,600,550,500,400,]),
        [loop2]
      ),
      c5: useComputedValue(
        () =>
          interpolate(loop.current, [0, 0.2, 0.4, 0.8, 1], [200,320,400,430,480,]),
        [loop2]
      ),
    }
  }

  return (
    <View
    style={[
      StyleSheet.absoluteFill,
      { alignItems: 'center', justifyContent: 'center' },
    ]}
  >
    <Canvas style={{ width: screenDimensions.width, height: screenDimensions.height }} ref={ref}>
      <Circle r={800} cx={circleVals.x.c1} cy={circleVals.y.c1} color={circleVals.colors.c1} opacity={0.4} />
      <Circle r={600} cx={circleVals.x.c2} cy={circleVals.y.c2} color={circleVals.colors.c2} opacity={0.3} />
      <Circle r={500} cx={circleVals.x.c3} cy={circleVals.y.c3} color={circleVals.colors.c3} opacity={0.2} />
      <Circle r={400} cx={circleVals.x.c4} cy={circleVals.y.c4} color={circleVals.colors.c4} opacity={0.2} />
      <Circle r={700} cx={circleVals.x.c5} cy={circleVals.y.c5} color={circleVals.colors.c5} opacity={0.5} />
    </Canvas>
  </View>
  );
};