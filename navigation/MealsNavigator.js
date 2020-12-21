import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'padauk-bold',
    fontSize: 18,
  },
  headerBackTitleStyle: {
    fontFamily: 'padauk',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories',
      },
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'padauk-bold' }}>Meals</Text>
        ) : (
          'Meals'
        ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => (
        <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      ),
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === 'android' ? (
          <Text style={{ fontFamily: 'padauk-bold' }}>Favorites</Text>
        ) : (
          'Favorites'
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: 'padauk-bold',
          },
          activeTintColor: Colors.accentColor,
        },
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  { defaultNavigationOptions }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'padauk-bold',
        fontSize: 18,
      },
    },
  }
);

export default createAppContainer(MainNavigator);
