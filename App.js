import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import { store } from './store/redux/store';
import FavoritesContextProvider from './store/context/favorites-context';
import FavoritesScreen from './screens/FavoritesScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return(
    <Tab.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: '#351401' },
        tabBarInactiveTintColor: '#e4baa1',
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tab.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          tabBarLabel: 'Categories',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{
          title: 'Favorites',
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
      {/* <FavoritesContextProvider> */}
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}>
              <Stack.Screen 
                name='Tabs' 
                component={TabsNavigator} 
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen 
                name='MealsOverview' 
                component={MealsOverviewScreen} 
              />
              <Stack.Screen 
                name='MealDetails' 
                component={MealDetailsScreen} 
                options={{
                  title: 'About the Meal'
                }}
              />
            </Stack.Navigator>
        </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}