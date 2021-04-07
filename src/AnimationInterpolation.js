import React, {useEffect, useRef} from 'react';
import {Animated, SafeAreaView, StyleSheet} from 'react-native';

const AnimationInterpolation = () => {
  const translation = useRef({y: new Animated.Value(0)}).current;
  useEffect(() => {
    Animated.timing(translation.y, {
      toValue: 120,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView style={styles.screenWrapper}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#fff',
          borderRadius: 5,
          elevation: 9,
          transform: [
            {
              rotate: translation.y.interpolate({
                inputRange: [0, 30, 60, 90, 120],
                outputRange: ['0deg', '45deg', '90deg', '135deg', '195deg'],
              }),
            },
          ],
          opacity: translation.y.interpolate({
            inputRange: [0, 30, 60, 90, 120],
            outputRange: [0, 0.25, 0.5, 0.75, 1],
          }),
        }}
      />
    </SafeAreaView>
  );
};

export default AnimationInterpolation;

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#eb6b9d',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
