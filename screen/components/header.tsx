import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Header: React.FC = () => {
  const [iconHovered, setIconHovered] = useState<boolean>(false);
  const [logoHovered, setLogoHovered] = useState<boolean>(false);

  return (
    <View>
      
      <View style={styles.container}>
        <TouchableOpacity
          onPressIn={() => setIconHovered(true)}
          onPressOut={() => setIconHovered(false)}
        >
          <Image
            source={require('../../assets/icons8-detail-50.png')}
            style={[styles.icon, iconHovered && styles.iconHovered]}
          />
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Text>Chào mừng bạn đến với</Text>
          <Text>Đội Tình Nguyện</Text>
        </View>

        <TouchableOpacity
          onPressIn={() => setLogoHovered(true)}
          onPressOut={() => setLogoHovered(false)}
        >
          <Image
            source={require('../../assets/logo dtn 2.png')}
            style={[styles.logo, logoHovered && styles.logoHovered]}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{fontSize: 20 }}>
          Find Your 
        </Text>
        <Text style={{fontSize: 20 ,fontWeight:"700" }}>
          Activity
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  icon: {
    width: 35,
    height: 35,
  },
  iconHovered: {
    transform: [{ scale: 1.2 }],
  },
  logo: {
    width: 50, // thêm style width nếu cần thiết
    height: 50, // thêm style height nếu cần thiết
  },
  logoHovered: {
    transform: [{ scale: 1.1 }],
  },
});

export default Header;
