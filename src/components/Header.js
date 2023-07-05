import React, {useState} from 'react';
import {Alert, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addNote} from '../redux/notesSlice';

const Header = () => {
  const [notes, setNotes] = useState('');
  const dispatch = useDispatch();
  const onAddNote = () => {
    if (notes.trim().length === 0) {
      Alert.alert('Please enter a note');
      setNotes('');
      return;
    }
    dispatch(
      addNote({
        type: 'ADD_NOTE',
        notes: notes,
      }),
    );
    setNotes('');
  };
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.headingStyle}>Notes</Text>
        <TouchableOpacity style={styles.drawer}>
          <Image
            source={require('../Images/drawer.png')}
            style={{height:34,width:34}}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Write your note here..."
        style={styles.searchBar}
        onChangeText={setNotes}
        value={notes}
      />
      <TouchableOpacity style={styles.btn} onPress={onAddNote}>
        <Text style={{color: 'white'}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 25,
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
  },
  searchBar: {
    borderWidth: 0.7,
    height: 40,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 8,
    borderColor: 'black',
    paddingLeft: 10,
    paddingRight: 10,
  },
  btn: {
    backgroundColor: 'black',
    height: 30,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  drawer: {position: 'absolute', right: 18, top: 10},
});
