import { FlatList, View } from 'react-native'
import React from 'react'
import ReusableTile from '../Reusable/ReusableTile'
import { useNavigation } from '@react-navigation/native'

const PopularList = ({data,onPress}) => {
    const navigation= useNavigation();
    const renderItem = ({item}) =>(
        <View style={{marginBottom:10}}>
            <ReusableTile item={item} onPress={onPress}/>
        </View>
        
    )
  return (
    <FlatList 
        data={data}
        scrollEnabled={false}
        showsVericalScrollIndicator={false}
        renderItem={renderItem}

    />
  )
}

export default PopularList
