import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CustomCard extends Component {
  render() {
    let propsData = this.props.data;
    return (
      <View
        style={[
          styles.card,
          {
            // backgroundColor: propsData.backgroundColor,
            // borderColor: propsData.border,
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: propsData.backgroundColor,
            },
          ]}>
          {propsData && propsData.title}
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: propsData.backgroundColor,
            },
          ]}>
          {propsData && propsData.number}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    marginHorizontal: 15,
    margin: 10,
    elevation: 4,
    height: 100,
    borderWidth: 2,
    borderColor: 'grey',
    // color: 'white',
    borderRadius: 20,
    // borderStyle: 'null'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
