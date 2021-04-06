import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const AnimationStyles = () => {
  const opacityOne = useRef(new Animated.Value(0)).current;
  const opacityTwo = useRef(new Animated.Value(0)).current;
  const opacityThree = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(opacityOne, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(opacityTwo, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(opacityThree, {
        toValue: 1,
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
          marginBottom: 10,
          opacity: opacityOne,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#fff',
          elevation: 5,
          borderRadius: 5,
          marginBottom: 10,
          opacity: opacityTwo,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#fff',
          elevation: 5,
          borderRadius: 5,
          marginBottom: 10,
          opacity: opacityThree,
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
