import { StyleSheet, Text,Image, TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import React, {useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from '../../components/Reusable/AppBar'
import styles from './search.style';
import {Feather} from '@expo/vector-icons'
import { COLORS } from '../../constants/theme';
import HotelCard from '../../components/Tiles/Hotel/HotelCard';
import { HeightSpacer } from '../../components';
import axios from 'axios';
const HotelSearch = ({navigation}) => {
  const [searchKey, setsearchKey]=useState('');
  const [searchResult, setsearchResult]=useState([]);
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
return (
  <SafeAreaView style={{ flex: 1 }}>
    <AppBar
      top={50}
      left={10}
      right={10}
      title={"Search Hotels"}
      color={COLORS.white}
      icon={'filter'}
      color1={COLORS.white}
      onPress={() => navigation.goBack()}
      onPress1={() => navigation.navigate('')}
    />
    <HeightSpacer height={20}/>
    <View style={styles.search}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.input}
          value={searchKey}
          onChangeText={setsearchKey}
          placeholder='Where Do You Want To Stay?'
        />
      </View>
      <TouchableOpacity style={styles.searchBtn}>
        <Feather
          name='search'
          size={24}
          color={COLORS.white}
        />
      </TouchableOpacity>
    </View>

    {hotels.length === 0 ? (
      <View>
        <Image
          source={require('../../assets/images/search.png')}
          style={styles.searchImage}
        />
      </View>
    ) : (
      <View style={[styles.searchWrapper,{marginBottom:20}]}>
        <FlatList
        data={hotels}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        ItemSeparatorComponent={() => (<View style={{ height: 16 }} />)}
        renderItem={({ item }) => (
          <HotelCard
            item={item}
            margin={10}
            onPress={() => navigation.navigate('HotelDetail', item._id)}
          />
        )}
      />
      </View>
      
    )}
  </SafeAreaView>
);
}

export default HotelSearch
