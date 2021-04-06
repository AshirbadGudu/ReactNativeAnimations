import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

const AnimationStyles = () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }, []);
  return (
    <View style={styles.screenWrapper}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          borderRadius: 5,
          transform: [
            {
              translateX: translation,
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
  },
});
