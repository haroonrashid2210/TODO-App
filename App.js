/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [getText, setText] = useState('');
  const [getKey, setKey] = useState('');
  const [getList, setList] = useState([]);
  const [getButtonText, setButtonText] = useState('+');
  const addItem = () => {
    let input = getText;
    // If the input field is empty
    if (input !== '') {
      // If there is some item to update
      if (getKey !== '') {
        let list = getList;
        for (let i = 0; i < list.length; i++) {
          if (list[i].key === getKey) {
            list[i].data = getText;
          }
        }
        setList(list);
        setText('');
        setKey('');
      } else {
        // Simply adding new item
        setList([...getList, {key: Math.random().toString(), data: getText}]);
        setText('');
      }
    }
    setButtonText('+');
  };
  const delItem = itemKey => {
    setText('');
    setList(list => getList.filter(item => item.key !== itemKey));
  };
  const cardPress = itemKey => {
    let list = getList.filter(item => item.key === itemKey);
    setText(list.pop().data);
    setKey(itemKey);
    setButtonText('✔');
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/*This is the input + add button view*/}
          <View style={styles.topView}>
            <TextInput
              style={styles.textField}
              onChangeText={text => setText(text)}
              value={getText}
            />
            <TouchableOpacity style={styles.button} onPress={() => addItem()}>
              <Text style={styles.buttonText}>{getButtonText}</Text>
            </TouchableOpacity>
          </View>

          {/*THis is the remaining list view*/}
          <ScrollView>
            {getList.map((item, i) => (
              // Card Code for items
              <TouchableOpacity
                onPress={() => cardPress(item.key)}
                style={styles.card}>
                <Text style={styles.cardText}>{i + 1 + '. ' + item.data}</Text>
                <TouchableOpacity
                  onPress={() => delItem(item.key)}
                  style={styles.crossButton}>
                  <Text style={styles.crossButtonText}>✕</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f9f9f9',
    height: '100%',
  },
  topView: {
    margin: 25,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#5886ff',
    width: 50,
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
  },
  textField: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 3,
    width: 285,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 15,
    marginRight: 25,
  },
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
  crossButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default App;
