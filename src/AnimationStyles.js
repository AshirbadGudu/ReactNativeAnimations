import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const AnimationStyles = () => {
  const translation = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  ).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.spring(translation.x, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  return (
    <View style={styles.screenWrapper}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#fff',
          elevation: 5,
          borderRadius: 5,
          transform: [
            {
              translateX: translation.x,
              translateY: translation.y,
            },
          ],
        }}
      />
    </View>
  );
};

export default AnimationStyles;

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9f98e8',
  },
});
