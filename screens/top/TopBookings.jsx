import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableTile from '../../components/Reusable/ReusableTile'

const TopBookings = () => {
  const hotels =  [
    {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Seaside Resort",
        "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max300/174463698.jpg?k=d28dd44c8329a24c13954d3eb7fa04c1326ae2f7b397f63cb5706f5840d8bda4&o=&hp=1",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Miami Beach, FL"
    },
   
    {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Hotel Alpha",
        "imageUrl": "https://www.alphahoteleasterncreek.com.au/wp-content/uploads/2015/08/Alpha-Hotel-Eastern-Creek-Exterior-1-350x350.jpg",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "City Center, USA"
    },
    
    {
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Luxury Hotel",
        "imageUrl": "https://media.gettyimages.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=612x612&w=0&k=20&c=NyPC_c-wE3W_CImA4t57FpyGy6f428CYROd80jxVC4A=",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "New York City, NY"
    }
]
  return (
    <View style={{margin:20,marginBottom:100}}>
      <FlatList 
        data={hotels}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=>(
          <View style={{marginBottom:10}}>
            <ReusableTile item={item}/>
          </View>
        )}
      />
    </View>
  )
}

export default TopBookings

const styles = StyleSheet.create({})