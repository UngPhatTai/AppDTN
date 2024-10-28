import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView, TouchableWithoutFeedback, Animated } from 'react-native';
import { createTamagui,TamaguiProvider} from 'tamagui'
import defaultConfig from '@tamagui/config/v3'
import { Button } from 'tamagui'


const Listcategory = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  // Mảng các ảnh mà bạn muốn hiển thị
  const images = [
    require('../../assets/opt1.png'),
    require('../../assets/opt1.png'),
    require('../../assets/opt1.png'),
    require('../../assets/opt1.png')
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {images.map((imageSource, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPressIn={() => setHovered(index)}
          onPressOut={() => setHovered(null)}
        >
          <Animated.View style={[styles.opt, hovered === index && styles.hoverEffect]}>
            <Image source={imageSource} style={styles.image} />
          </Animated.View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
    
  );
   
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  opt: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 5,
    width: 127,
    height: 115,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  hoverEffect: {
    transform: [{ scale: 1.05 }], // Phóng to nhẹ khi hover
    elevation: 15, // Tăng bóng để tạo hiệu ứng nổi bật hơn
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Listcategory;
