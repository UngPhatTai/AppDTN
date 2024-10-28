import React from 'react';
import { Text } from 'react-native';
type TitleDrops ={
    title:string;
}
const Header_title = ({title}:TitleDrops)=>{
    return(
        <Text style={{fontSize: 20 ,fontWeight:"700" }}>
        {title}
      </Text>
    )
}
export default Header_title;