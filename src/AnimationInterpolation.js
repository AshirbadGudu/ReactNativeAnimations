import React, {useEffect, useRef} from 'react';
import {Animated, SafeAreaView, StyleSheet} from 'react-native';

const AnimationInterpolation = () => {
  const translation = useRef({x: new Animated.Value(0)}).current;
  useEffect(() => {
    Animated.timing(translation.x, {
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
              translateX: translation.x,
            },
          ],
          opacity: translation.x.interpolate({
            inputRange: [0, 120],
            outputRange: [0, 1],
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
