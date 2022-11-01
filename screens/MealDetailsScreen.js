import { useLayoutEffect } from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addFavorite, removeFavorite } from '../store/redux/favorites';
import IconButton from '../components/IconButton';
import MealDetails from '../components/MealDetails/MealDetails';
import SubTitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import { MEALS } from '../data/dummy-data';


function MealDetailsScreen({ route, navigation }) {

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    const dispatch = useDispatch();
    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                            icon= {mealIsFavorite ? 'star' : 'star-outline'}
                            color='white' 
                            onPress={changeFavoriteStatusHandler} 
                        />
            },
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listContainer}>
                <View style={styles.listSubContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal.ingredients} />
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    container: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    listContainer: {
        alignItems: 'center'
    },
    listSubContainer: {
        width: '80%'
    }
});