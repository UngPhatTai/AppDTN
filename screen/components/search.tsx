import { Input } from 'tamagui'
import React from 'react';
import { Button } from 'tamagui'
import { Text, View } from 'react-native';


export const Search_bar = () => {
    return(
        <View
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Input size="$4" borderWidth={1} backgroundColor="#F5F5F5" flex={1} />
        <Button size="$4" variant="outlined" marginLeft={8}backgroundColor="#4C95DD">
        <Text style={{color:'white'}}>Search</Text>
        </Button>
      </View>

    )
  
}

