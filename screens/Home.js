import React from 'react';
import {View, Text} from 'react-native';
import Header from '../src/components/Header';
import NotesList from '../src/components/notesList';


const Home = () => {
  return (
    <View style={{flex:1}}>
      <Header />
      <NotesList />
    </View>
  );
};

export default Home;
