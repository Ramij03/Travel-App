import { StyleSheet, View,Text, VirtualizedList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import HeightSpacer from '../Reusable/HeightSpacer';
import { SIZES } from '../../constants/theme';
import Country from '../Tiles/Country/Country';

const Places = () => {
    const [countries, setCountries] = useState([]); // State to hold countries
    const [loading, setLoading] = useState(true); // State to handle loading

    // Fetch countries from the backend
    useEffect(() => {
      const fetchCountries = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/country/get-countries'); // Update with your IP
            
            setCountries(response.data.data); // Set the countries from response
        } catch (error) {
            console.error("Error fetching countries:", error);
        } finally {
            setLoading(false); // Set loading to false
        }
    };
    

        fetchCountries();
    }, []); // Empty dependency array to run once on mount

    if (loading) {
        return <View><Text>Loading...</Text></View>; // Render loading state
    }

    return (
        <View>
            <HeightSpacer height={20} />
            <VirtualizedList
                data={countries}
                horizontal
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
                renderItem={({ item }) => (
                    <View style={{ marginRight: SIZES.medium }}>
                        <Country item={item} />
                    </View>
                )}
            />
        </View>
    );
};

export default Places;

const styles = StyleSheet.create({});
