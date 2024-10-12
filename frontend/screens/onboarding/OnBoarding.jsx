import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Slides from '../../components/OnBoard/Slides';

const OnBoarding = () => {
    const slides = [
        {
            id: 1,
            image: require('../../assets/images/1.png'),
            title: "Find the perfect place to stay",
        },
        {
            id: 2,
            image: require('../../assets/images/2.png'),
            title: "Discover the World",
        },
        {
            id: 3,
            image: require('../../assets/images/3.png'),
            title: "Find out the best packages",
        },
    ];

    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = (prevIndex + 1) % slides.length;
                flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
                return nextIndex;
            });
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, [slides.length]);

    return (
        <FlatList 
            ref={flatListRef}
            pagingEnabled
            horizontal
            showHorizontalScrollIndicator={false} 
            data={slides}
            keyExtractor={(item) => item.id.toString()} // Ensure id is a string
            renderItem={({ item }) => <Slides item={item} />}
        />
    );
}

export default OnBoarding;

const styles = StyleSheet.create({});
