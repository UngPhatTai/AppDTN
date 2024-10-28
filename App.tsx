import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screen/home/Homescreen';
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config}>
     <View style={{paddingHorizontal:15}}>
    <Homescreen/>
    </View>
    </TamaguiProvider>
    
  )
} 



