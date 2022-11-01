import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {

    function RenderCategoryItem(itemData) {

        function PressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            });
        }

        return (
            <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={PressHandler} />
        );
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIES} 
                keyExtractor={(item) => item.id} 
                renderItem={RenderCategoryItem} 
                numColumns={2}
            />
        </View>
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
    },
});
