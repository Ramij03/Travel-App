import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar, DescriptionText, HeightSpacer, NetworkImage, reusable, ReusableText, ReusableBtn, PopularList } from '../../components';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import { Feather } from '@expo/vector-icons';
import axios from 'axios'; // Ensure axios is imported

const CountryDetail = ({ navigation }) => {
  const route = useRoute();
  const { id } = route.params; // Get the country ID from route parameters
  const [country, setCountry] = useState(null); // State to hold country data
  const [loading, setLoading] = useState(true); // State to handle loading
 
  // Fetch country details using the country ID
  useEffect(() => {
    console.log("Country ID:", id);
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/country/get-country/${id}`);
      
        setCountry(response.data.data); // Set the country data
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching country details:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchCountry();
  }, [id]); // Dependency on country ID

  if (loading) {
    return <Text>Loading...</Text>; // Optionally handle loading state
  }

  if (!country) {
    return <Text>Error: Country not found</Text>; // Handle case where country data is not found
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <NetworkImage 
            source={country.imageUrl } // Ensure the source is an object with uri
            width={"100%"}
            height={350}
            radius={30}
          />
          <AppBar 
            top={10}
            left={10}
            right={10}
            title={country.country} 
            color={COLORS.white} 
            icon={'search1'} 
            color1={COLORS.white}
            onPress={() => navigation.goBack()}
            onPress1={() => navigation.navigate('Search')}
          />
        </View>

        <View style={styles.desc}>
          <ReusableText 
            text={country.region}
            family={"medium"}
            size={TEXT.xLarge}
            color={COLORS.black}
          />

          <DescriptionText text={country.description} />

          <HeightSpacer height={20} />
          <View style={{ alignContent: 'center' }}>
            <View style={reusable.rowSpace("space-between")}>
              <ReusableText 
                text={"Popular Destinations"}
                family={"medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />
              <TouchableOpacity onPress={() => {}}>
                <Feather name='list' size={20} />
              </TouchableOpacity>
            </View>
            <HeightSpacer height={10} />
            {country.popular.length > 0 ? (
            <PopularList data={country.popular} onPress={() => navigation.navigate('PlaceDetail', { id: country.popular._id })} />
          ) : (
            <Text>No popular destinations available at the moment.</Text>
          )}
          <HeightSpacer height={10} />
            <ReusableBtn 
              onPress={() => navigation.navigate('HotelSearch', country._id)}
              btnText={"Find Best Hotels"}
              width={SIZES.width - 40}
              backgroundcolor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={1}
              textColor={COLORS.white}
            />
            <HeightSpacer height={35} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CountryDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },
  desc: {
    paddingTop: 20,
    marginHorizontal: 20,
  },
});
