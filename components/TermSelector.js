import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

  const TermButton = ({term, setSelectedTerm, isActive}) => (
    <TouchableOpacity style={styles[isActive ? 'termButtonActive' : 'termButton']}
        onPress={() => setSelectedTerm(term)}>
      <Text style={styles.termText}>{term}</Text>
    </TouchableOpacity>
  );


  const termButtonBase = {
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 40,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
  };

  const TermSelector = ({terms, selectedTerm, setSelectedTerm}) => (
    <View style={styles.termSelector}>
      { 
        terms.map(term => (
          <TermButton key={term} term={term} setSelectedTerm={setSelectedTerm}
          isActive={term === selectedTerm}
          />
        ))
      }
    </View>
  );
  
  const styles = StyleSheet.create({
    termSelector: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 350,
    },
    termButtonActive: {
      ...termButtonBase,
      backgroundColor: '#105f25',
    },
    termButton: {
      ...termButtonBase,
      backgroundColor: '#4f9f64',
    },
    termText: {
      color: '#fff',
      fontSize: 15,
    },
  });
  
  export default TermSelector;