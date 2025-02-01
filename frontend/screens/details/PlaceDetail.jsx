import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar, DescriptionText, HeightSpacer, NetworkImage,reusable,ReusableText,ReusableBtn, PopularList } from '../../components';
import { COLORS,TEXT,SIZES } from '../../constants/theme';
import {Feather} from '@expo/vector-icons'
import axios from 'axios';

const PlaceDetail = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params; // Get the place ID from route parameters

  // Fetch place details using the ID (this part needs to be implemented)
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
          const response = await axios.get(`http://localhost:3000/api/place/get-place/${id}`);
          console.log("Fetched Place Data:", response.data); // Log the response
          setPlace(response.data.place); // Adjust according to your API's response structure
      } catch (err) {
          console.error("Error fetching place details:", err);
          setError(err.response ? err.response.data.message : err.message);
      } finally {
          setLoading(false);
      }
  };
  

      fetchPlaceDetails();
  }, [id]);

  if (loading) {
      return <Text>Loading...</Text>;
  }

  if (error) {
      return <Text>Error: {error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            {place ? (
                <>
                    <NetworkImage 
                        source={ place.imageUrl } // Ensure the source is an object with uri
                        width={"100%"}
                        height={350}
                        radius={30}
                    />
                    <AppBar 
                        top={10}
                        left={10}
                        right={10}
                        title={place.title} 
                        color={COLORS.white} 
                        icon={'search1'} 
                        color1={COLORS.white}
                        onPress={() => navigation.goBack()}
                        onPress1={() => navigation.navigate('Search')}
                    />
                    <View style={styles.desc}>
                        <ReusableText 
                            text={place.location} 
                            family={"medium"}
                            size={TEXT.xLarge}
                            color={COLORS.black}
                        />
                        <DescriptionText text={place.description} />
                        <HeightSpacer height={20} />
                        <View style={{ alignContent: 'center' }}>
                            <View style={reusable.rowSpace("space-between")}>
                                <ReusableText 
                                    text={"Popular Hotels"}
                                    family={"medium"}
                                    size={SIZES.xLarge}
                                    color={COLORS.black}
                                />
                                <TouchableOpacity onPress={() => {}}>
                                    <Feather name='list' size={20} />
                                </TouchableOpacity>
                            </View>
                            <HeightSpacer height={10} />
                            <PopularList 
                                data={place.popular} 
                                onPress={(hotelId) => navigation.navigate('HotelDetail', { id: hotelId })} 
                            />
                            <HeightSpacer height={20} />
                        </View>
                    </View>
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </ScrollView>
    </SafeAreaView>
);

};

export default PlaceDetail;


const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F3F4F8",
  },
  desc:{
    paddingTop:20,
    marginHorizontal:20,
  }
})
