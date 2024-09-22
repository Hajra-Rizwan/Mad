import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.screen}>
      
      
      <View style={styles.searchSection}>
        <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search conditions, doctors..."
          placeholderTextColor="#aaa"
        />
      </View>

      
      <Text style={styles.headerText}>Let's find your doctor</Text>

      
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Icon name="user-md" size={40} color="#000" />
          <Text style={styles.nameText}>Dr. John Smith</Text>
          <Text style={styles.typeText}>Dermatologist</Text>
          <View style={styles.scoreBox}>
            <Icon name="star" size={16} color="#FFDF00" />
            <Text style={styles.scoreText}>4.9</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Icon name="user-md" size={40} color="#000" />
          <Text style={styles.nameText}>Dr. Anna Dinn</Text>
          <Text style={styles.typeText}>Psychologist</Text>
          <View style={styles.scoreBox}>
            <Icon name="star" size={16} color="#FFDF00" />
            <Text style={styles.scoreText}>4.9</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Icon name="user-md" size={40} color="#000" />
          <Text style={styles.nameText}>Dr. Angela Rayez</Text>
          <Text style={styles.typeText}>Therapist</Text>
          <View style={styles.scoreBox}>
            <Icon name="star" size={16} color="#FFDF00" />
            <Text style={styles.scoreText}>4.8</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Icon name="user-md" size={40} color="#000" />
          <Text style={styles.nameText}>Dr. Chris Bronte</Text>
          <Text style={styles.typeText}>Dentist</Text>
          <View style={styles.scoreBox}>
            <Icon name="star" size={16} color="#FFDF00" />
            <Text style={styles.scoreText}>5.0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0eaff', 
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  searchIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3b3b3b',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff', 
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#3b3b3b',
  },
  typeText: {
    fontSize: 14,
    color: '#777',
  },
  scoreBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6a0dad', 
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  scoreText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff', 
    marginLeft: 5,
  },
});
