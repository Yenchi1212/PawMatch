import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function PetProfileScreen({ route }) {
  const pet = route.params?.pet;

  return (
    <ScrollView style={styles.container}>
      
      {/* Pet Image */}
      <Image source={{ uri: pet.image }} style={styles.image} />

      {/* Name + Breed */}
      <Text style={styles.petName}>{pet.name}</Text>
      <Text style={styles.breed}>{pet.breed} • {pet.age} years old</Text>

      {/* About Section */}
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.description}>{pet.description}</Text>

      {/* Shelter Section */}
      <Text style={styles.sectionTitle}>Shelter</Text>
      <View style={styles.shelterBox}>
        <Text style={styles.shelterName}>{pet.shelterName}</Text>
        <Text style={styles.shelterLocation}>{pet.location}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.btnText}>Save ❤️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.reserveBtn}>
          <Text style={styles.btnText}>Reserve 🐾</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.messageBtn}>
          <Text style={styles.btnText}>Message Shelter 💬</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 15, 
    backgroundColor: "#FFF8F2" 
  },

  image: { 
    width: "100%", 
    height: 300, 
    borderRadius: 20, 
    marginBottom: 15 
  },

  petName: { 
    fontSize: 32, 
    fontWeight: "bold", 
    color: "#FF914D", 
    textAlign: "center" 
  },

  breed: { 
    fontSize: 18, 
    textAlign: "center", 
    color: "#6C6C6C", 
    marginBottom: 20 
  },

  sectionTitle: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginTop: 15, 
    color: "#333" 
  },

  description: { 
    fontSize: 16, 
    marginTop: 5, 
    color: "#555" 
  },

  shelterBox: {
    padding: 15,
    backgroundColor: "#FFE7D1",
    borderRadius: 14,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#FFD1A9"
  },

  shelterName: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#FF914D" 
  },

  shelterLocation: { 
    fontSize: 16, 
    color: "#555" 
  },

  buttonContainer: { 
    marginTop: 25 
  },

  saveBtn: {
    backgroundColor: "#FF69B4",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12
  },

  reserveBtn: {
    backgroundColor: "#FF914D",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12
  },

  messageBtn: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 12
  },

  btnText: { 
    textAlign: "center", 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "bold" 
  }
});
