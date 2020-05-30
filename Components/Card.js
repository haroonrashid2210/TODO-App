import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
const Card = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.card}>
      <Text style={styles.cardText}>{props.children}</Text>
      <TouchableOpacity onPress={props.onPress} style={styles.crossButton}>
        <Text>✕</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 25,
    marginVertical: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 3,
    borderRadius: 10,
  },
  cardText: {
    width: '95%',
  },
  crossButton: {
    width: 20,
    height: 20,
    alignItems: 'center',
  },
});

export default Card;
