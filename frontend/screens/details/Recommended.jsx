import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppBar } from '../../components'
import { COLORS, SIZES } from '../../constants/theme'
import {ReusableTile} from '../../components'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
const Recommended = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get('http://192.168.1.12:3000/api/place/get-places'); 
                setRecommendations(response.data.data); // Access the data correctly
            } catch (err) {
                console.error("Error fetching recommendations:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecommendations();
    }, []);
  const navigation= useNavigation();
  return (
    <SafeAreaView style={{marginHorizontal:20}}>
      <View style={{height:50}}>
        <AppBar 
        top={10}
        left={0}
        right={0}
        title={'Recommendations'} 
        color={COLORS.white} 
        icon={'search1'} 
        color1={COLORS.white}
        onPress={()=>navigation.goBack()}
        onPress1={()=> navigation.navigate('Search')}
        />
      </View>

      <View style={{paddingTop:20}}>
      <FlatList 
            data={recommendations}
            keyExtractor ={(item) => item._id}
            contentContainerStyle={{rowGap:SIZES.medium}}
            renderItem={({item})=>(
                <ReusableTile item={item} onPress={()=>navigation.navigate('PlaceDetail',item._id)}/>
            )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Recommended

const styles = StyleSheet.create({})