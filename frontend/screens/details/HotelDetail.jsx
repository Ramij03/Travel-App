import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AppBar, DescriptionText, HeightSpacer, NetworkImage, reusable, ReusableText, HotelMap, ReviewList, ReusableBtn } from '../../components';
import { COLORS, TEXT, SIZES } from '../../constants/theme';
import styles from './hoteldetail.style';
import { Rating } from 'react-native-stock-star-rating';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const HotelDetail = ({ navigation }) => {
  
  const route = useRoute();
  const { id } = route.params;

  const [hotel, setHotel] = useState(null); // Start with null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/hotel/get-hotel/${id}`);
        setHotel(response.data.hotel);
      } catch (err) {
        console.error("Error fetching hotel details:", err);
        setError(err.response ? err.response.data.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelDetails();
  }, [id]);
  const reviews = [
    {
      _id: '1',
      user: 'John Doe',
      profile:"https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_600x600.2212316290_dso3.jpg",
      comment: 'Amazing stay! Highly recommend this hotel.',
      rating: 4.9,
    },
    {
      _id: '2',
      user: 'Jane Smith',
      profile:"https://i.etsystatic.com/21073028/r/il/e364d2/5858929753/il_600x600.5858929753_evr1.jpg",
      comment: 'Great location and friendly staff.',
      rating: 4.7,
    },
    {
      _id: '3',
      user: 'Mariam Smith',
      profile:"https://wallpapers.com/images/hd/cartoon-profile-pictures-j8tk0p120sycbry9.jpg",
      comment: 'Good Location, Clean Rooms and friendly staff. Had a little problem with the parking spot.',
      rating: 4.2,
    },
    
  ];
  if (loading) {
    return <Text>Loading...</Text>; // Simple loading indicator
  }

  if (error) {
    return <Text>Error: {error}</Text>; // Simple error message
  }

  if (!hotel) {
    return <Text>No hotel details available.</Text>; // Fallback if hotel data is not available
  }

  // Set default coordinates
  const coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.coordinates?.latitude || 0,
    longitude: hotel.coordinates?.longitude || 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar 
          top={50}
          left={10}
          right={10}
          title={hotel.title || 'Loading...'} 
          color={COLORS.white} 
          icon={'search1'} 
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate('HotelSearch')}
        />
      </View>

      <View>
        <View style={styles.container}>
          <NetworkImage 
            source={hotel.imageUrl} 
            width={'100%'}
            height={220}
            radius={25}
          />
          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText 
                text={hotel.title || 'Hotel Title'}
                family={"medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />
              <HeightSpacer height={10} />
              <ReusableText 
                text={hotel.location || 'Location not available'}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <HeightSpacer height={15} />
              <View style={reusable.rowSpace("space-between")}>
                <Rating 
                  maxStars={5}
                  stars={hotel.rating || 0}
                  bordered={false}
                  color={'#FD9942'}
                />
                <ReusableText 
                  text={` (${hotel.review || '0 Reviews'})`} 
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>

        <HeightSpacer height={20} />
        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText 
            text={"Description"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <DescriptionText text={hotel.description || 'No description available.'} />
          <HeightSpacer height={15} />
          <ReusableText 
            text={"Location"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <ReusableText 
            text={hotel.location || 'Location not available'}
            family={"regular"}
            size={SIZES.small + 2}
            color={COLORS.gray}
          />
          <HotelMap coordinates={coordinates} />
          <HeightSpacer height={10} />
          <View style={reusable.rowSpace('space-between')}>
            <ReusableText 
              text={"Reviews"}
              family={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />
            <TouchableOpacity>
              <Feather name='list' size={20} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={10} />
          <ReviewList reviews={reviews} />
        </View>
        <HeightSpacer height={10}/>
        <View style={[reusable.rowSpace('space-between'), styles.bottom]}>
          <View>
            <ReusableText 
              text={`Available on:`} 
              family={"regular"}
              size={SIZES.medium}
              color={COLORS.gray}
            />
            <HeightSpacer height={5} />
            <ReusableText 
              text={'Jan 01 - Dec 25'}
              family={"bold"}
              size={SIZES.large}
              color={COLORS.black}
            />
          </View>
          <ReusableBtn 
            onPress={() => navigation.navigate('SelectRoom')}
            btnText={"Book Hotel"}
            width={(SIZES.width - 50) / 2.0}
            backgroundcolor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HotelDetail;
