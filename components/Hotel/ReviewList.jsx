import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReviewTile from '../Tiles/Review/ReviewTile'

const ReviewList = ({reviews}) => {
  return (
    <FlatList 
        data={reviews}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item._id}
        renderItem={({item})=>(
            <View tyle={{marginBottom:15}}>
            <ReviewTile review={item}/>
            </View>
        )}
    />
  )
}

export default ReviewList

const styles = StyleSheet.create({})