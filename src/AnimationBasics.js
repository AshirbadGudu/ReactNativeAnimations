import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated} from 'react-native';

const AnimationBasics = () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 120,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          transform: [
            {
              translateX: translation,
            },
          ],
        }}
      />
    </>
  );
};

export default AnimationBasics;

const styles = StyleSheet.create({});
