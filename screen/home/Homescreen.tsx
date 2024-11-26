import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import Header from '../components/header';
import { View } from 'tamagui';
import Listcategory from '../components/listcategory';
import Navigation from '../components/navigation';
import { Search_bar } from '../components/search';
import Header_title from '../components/title';
const Homescreen = () => {
    return(
        <View>
       <Header/>
       <Search_bar></Search_bar>
       <Header_title title="..............." />
        <Listcategory></Listcategory>
        
        <Navigation></Navigation>
        </View>
 
    );
};


export default Homescreen;