import { StyleSheet, Text, View,FlatList } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar,ReusableTile} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { SIZES,COLORS } from '../../constants/theme';
import axios from 'axios';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [Loading,setLoading]=useState(true);


    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get('http://192.168.1.12:3000/api/hotel/get-hotels'); // Change to your actual endpoint
                setHotels(response.data.hotels); // Adjust based on your API response structure
            } catch (err) {
                console.error("Error fetching hotels:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHotels();
    }, []);

  const navigation= useNavigation();
  return (
    <SafeAreaView style={{marginHorizontal:20}}>
      <View style={{height:50}}>
        <AppBar 
        top={10}
        left={0}
        right={0}
        title={'Nearby Hotels'} 
        color={COLORS.white} 
        icon={'search1'} 
        color1={COLORS.white}
        onPress={()=>navigation.goBack()}
        onPress1={()=> navigation.navigate('HotelSearch')}
        />
      </View>

      <View style={{paddingTop:20}}>
      <FlatList 
            data={hotels}
            keyExtractor ={(item) => item._id}
            contentContainerStyle={{rowGap:SIZES.medium}}
            renderItem={({item})=>(
                <ReusableTile item={item} onPress={()=>navigation.navigate('HotelDetail',item._id)}/>
            )}
        />
      </View>
    </SafeAreaView>
  )
}

export default HotelList

const styles = StyleSheet.create({})