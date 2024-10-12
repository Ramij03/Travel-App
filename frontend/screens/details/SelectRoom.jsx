import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar, HeightSpacer, ReusableTile,ReusableBtn } from '../../components';
import { COLORS,SIZES } from '../../constants/theme';
const SelectRoom = ({navigation}) => {
  const rooms =  [
    {
        "_id": "64c631650298a05640539adc",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Single Bed Room",
        "price":200,
        "location":"Guests: 2",
        "imageUrl": "https://media.istockphoto.com/id/183201783/photo/hotel-room.jpg?s=612x612&w=0&k=20&c=gN3Y53P_tS7O5JFrJkmlUWS80uRO2F9qTA9RM7KjuRY=",
        "rating": 4.7,
        "review": "1204 Reviews"
    },
    {
        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Master Bed Room",
        "price":350,
        "location":"Guests: 2",
        "imageUrl": "https://media.architecturaldigest.com/photos/5841a049ee621a2017c77189/master/w_1600,c_limit/Shay-Mitchell-house_01.jpg",
        "rating": 4.8,
        "review": "1452 Reviews"
    },
    {
        "_id": "64d09e3f364e1c37c8b4b13c",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Suite",
        "price":600,
        "location":"Guests: 4",
        "imageUrl": "https://2c3a9cd51bf0ee5aa76c-238bb8647e26b6e485d4fe1a020770e0.ssl.cf1.rackcdn.com/u/blog/most-luxurious-suite-in-beloved-playa-mujeres-hotel.jpg",
        "rating": 4.6,
        "review": "2145 Reviews"
    },
    {
        "_id": "64d09f90364e1c37c8b4b140",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Luxury Master",
        "price":600,
        "location":"Guests: 2",
        "imageUrl": "https://s3.amazonaws.com/static-webstudio-accorhotels-usa-1.wp-ha.fastbooking.com/wp-content/uploads/sites/7/2016/11/30170943/3565-65-585x390.jpg",
        "rating": 4.8,
        "review": "24455 Reviews"
    },
    {
        "_id": "64d30f789d008909fa8b7ce5",
        "country_id": "64d2fd32618522e2fb342eec",
        "imageUrl": "https://media.gettyimages.com/id/1835566029/photo/loft-duplex-apartment-living-room-interior.jpg?s=612x612&w=0&k=20&c=HhVHerOC3BE6v10EQPRQJrH6Xxprpr6Q6JcY4Q_yMsI=",
        "title": "Duplex",
        "location":"Guests: 6",
        "price":1500,
        "rating": 4.8,
        "review": "24455 Reviews"
    }
];
  return (
    <View>
      <View style={{height:100}}>
       <AppBar 
        top={50}
        left={10}
        right={10}
        title={'Select Room'} 
        color={COLORS.white} 
        onPress={()=>navigation.goBack()}
        />
      </View>
      <View style={{marginBottom:200}}>
      <FlatList 
        data={rooms}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item._id}
        renderItem={({item})=>(
          <View style={styles.titleColumn}>
            <View style={styles.title}>
            <ReusableTile item={item}/>
            
            <HeightSpacer height={10}/>
            <View style={styles.btn}>
                <ReusableBtn 
                onPress={ () =>navigation.navigate('SelectedRoom',{item})}
                btnText={"Select Room"}
                width={(SIZES.width-40)}
                backgroundcolor={COLORS.green}
                borderWidth={1}
                borderColor={COLORS.green}
                textColor={COLORS.white}
                />
              </View>
            
            </View>
          </View>
        )}
      />
      </View>
    </View>
  )
}

export default SelectRoom

const styles = StyleSheet.create({
  titleColumn:{
    marginVertical:5,
    marginHorizontal:10,
  },
  title:{
    backgroundColor:COLORS.lightWhite,
    borderRadius:12,
  },
  btn:{
    margin:10,
    alignItems:'center'
  },
})