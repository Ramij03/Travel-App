import { StyleSheet, Text,Image, TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import React, {useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import reusable from '../../components/Reusable/reusable.style';
import styles from './search.style';
import {Feather} from '@expo/vector-icons'
import { COLORS } from '../../constants/theme';
import ReusableTile from '../../components/Reusable/ReusableTile'
import AppBar from '../../components/Reusable/AppBar'
import axios from 'axios';

const Search = ({navigation}) => {
  const [searchKey, setsearchKey]=useState('');
  const [searchResult, setsearchResult]=useState([]);

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
  return (
    <SafeAreaView stylele={reusable.container}>
      <View style={{height:40}}>
      <AppBar
        top={10}
        left={10}
        right={10}
        title={"Search"} 
        color={COLORS.white} 
        color1={COLORS.white}
        onPress={()=>navigation.goBack()}
        />
      </View>
      <View style={styles.search}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.input}
          value={searchKey}
          onChangeText={setsearchKey}
          placeholder='Where Do You Want To Go?'
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

      {recommendations.length === 0 ? (
        <View>
          <Image 
          source={require('../../assets/images/search.png')}
          style={styles.searchImage}
        />
        </View>
        
      ) : (
      <FlatList 
        data={recommendations}
        keyExtractor={(item)=>item._id}
        renderItem={({item})=>(
          <View style={styles.title}>
            <ReusableTile item={item} onPress={()=>navigation.navigate('PlaceDetail',item._id)}/>
          </View>
          
        )}
      />)}
    </SafeAreaView>
  )
}

export default Search
