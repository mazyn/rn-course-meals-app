import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = props => {
  return (
    <View style={{ marginHorizontal: 12 }}>
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
          <View>
            <View style={[styles.mealRow, styles.mealHeader]}>
              <ImageBackground
                source={{ uri: props.image }}
                style={styles.bgImage}
              >
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </ImageBackground>
            </View>
            <View style={[styles.mealRow, styles.mealDetail]}>
              <DefaultText>{props.duration} minutes</DefaultText>
              <DefaultText>{props.complexity}</DefaultText>
              <DefaultText>{props.affordability}</DefaultText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 12,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'padauk-bold',
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});

export default MealItem;
