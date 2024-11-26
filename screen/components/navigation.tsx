import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [iconScale] = useState(new Animated.Value(1));

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    Animated.sequence([
      Animated.timing(iconScale, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(iconScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const getIconStyle = (tab) => ({
    transform: [{ scale: activeTab === tab ? iconScale : 1 }],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('home')}
      >
        <Animated.View style={getIconStyle('home')}>
          <View style={[styles.icon, activeTab === 'home' && styles.activeIcon]}>
            <View style={styles.homePath1} />
            <View style={styles.homePath2} />
          </View>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('heart')}
      >
        <Animated.View style={getIconStyle('heart')}>
          <View style={[styles.icon, activeTab === 'heart' && styles.activeIcon]}>
            <View style={styles.heartPath} />
          </View>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('detail')}
      >
        <Animated.View style={getIconStyle('detail')}>
          <View style={[styles.icon, activeTab === 'detail' && styles.activeIcon]}>
            <View style={styles.detailPath1} />
            <View style={styles.detailPath2} />
          </View>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => handleTabPress('setting')}
      >
        <Animated.View style={getIconStyle('setting')}>
          <View style={[styles.icon, activeTab === 'setting' && styles.activeIcon]}>
            <View style={styles.settingPath1} />
            <View style={styles.settingPath2} />
            <View style={styles.settingPath3} />
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#666',
  },
  activeIcon: {
    tintColor: '#007AFF',
  },
  homePath1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 12,
    height: 12,
    backgroundColor: '#666',
  },
  homePath2: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    backgroundColor: '#666',
  },
  heartPath: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: 16,
    height: 16,
    backgroundColor: '#666',
    borderRadius: 8,
  },
  detailPath1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 12,
    height: 12,
    backgroundColor: '#666',
  },
  detailPath2: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    backgroundColor: '#666',
  },
  settingPath1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 8,
    height: 8,
    backgroundColor: '#666',
  },
  settingPath2: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 8,
    height: 8,
    backgroundColor: '#666',
  },
  settingPath3: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 8,
    height: 8,
    backgroundColor: '#666',
  },
});

export default Navigation;
