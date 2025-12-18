import React, { useMemo, useState } from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, TextInput, View } from "react-native";

import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import PetCard from '../components/PetCard';

const pets = [
  {
    id: 1,
    name: "Buddy",
    age: "3 years",
    breed: "Golden Retriever",
    image: "https://placedog.net/500/400?id=2",
    description: "A friendly and energetic dog who loves to play fetch.",
    shelterName: "Happy Tails Shelter",
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Luna",
    age: "1 year",  
    breed: "Labrador",
    image: "https://placedog.net/500/400?id=3",
    description: "A sweet and affectionate dog who enjoys long walks.",
    shelterName: "Forever Homes",
    location: "San Francisco, CA"
  }
];

export default function HomeScreen({ navigation }) {

  const [search , setSearch] = useState("");
  const filteredPets = useMemo(() => {
    const q = search.trim().toLowerCase();
    if(!q) return pets;

    return pets.filter(pet => 
      pet.name.toLowerCase().includes(q) ||
      pet.breed.toLowerCase().includes(q) ||
      pet.description.toLowerCase().includes(q) ||
      pet.shelterName.toLowerCase().includes(q) ||
      pet.location.toLowerCase().includes(q)
    );
  }, [search]);


  const handleLogout = async () => {
    await signOut(auth);
    Alert.alert("Logged out!");
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>

      {/* HEADER */}
      <Text style={styles.title}>🐾 Welcome to PawMatch!</Text>
      <Text style={styles.subtitle}>Find your perfect furry friend.</Text>

      {/* HERO IMAGE */}
      <Image 
        source={{ uri: "https://placedog.net/600/400?random" }}
        style={styles.heroImage}
      />

      {/* BUTTON CARDS */}
      <View style={styles.cardContainer}>

        {/* View Pets */}
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate("Explore")}
        >
          <Text style={styles.cardText}>🔍 Explore Pets</Text>
        </TouchableOpacity>

        {/* Matches */}
        <TouchableOpacity style={styles.card}
        onPress={() => navigation.navigate("Matches")}>
          <Text style={styles.cardText}>🐶 Your Matches</Text>
        </TouchableOpacity>

        {/* Saved Pets */}
        <TouchableOpacity style={styles.card}
        onPress={() => navigation.navigate("Saved")}>
          <Text style={styles.cardText}>❤️ Saved Pets</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.subtitle, { marginTop: 30, marginBottom: 10 }]}>Find your new best friend:</Text>

      <View style={styles.searchWrapper}>
        <TextInput 
          value={search}
          onChangeText={setSearch}
          placeholder="Search pets by name, breed, or location"
          placeholderTextColor="#9A9A9A"
          style={styles.searchInput}
        />
      </View>

        {filteredPets.length === 0 ? (
          <Text style={styles.noResults}>No pets found matching "{search}"</Text>
        ) : (
          filteredPets.map((pet) => (
          
          <PetCard 
            key={pet.id} 
            pet={pet} 
            onPress={() => navigation.navigate("PetProfile", { pet })} 
          />
        ))
        )}
      </ScrollView>

      {/* LOGOUT BUTTON */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#FFF8F2",
  paddingHorizontal: 20,
},


  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF914D",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#6C6C6C",
    marginBottom: 20,
  },

  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 30,
  },

  cardContainer: {
    width: "100%",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#FFD1A9",
    marginBottom: 15,
    shadowColor: "#FF914D",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  cardText: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#FF914D",
  },

  logoutButton: {
    marginTop: 20,
    backgroundColor: "#FF4D4D",
    padding: 15,
    borderRadius: 12,
    width: "60%",
    alignSelf: "center",
  },

  logoutText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchWrapper: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#FFD1A9",
  },
  noResults: {
    textAlign: "center",
    color: "#999",
    fontSize: 16,
    marginTop: 20,
  },  
});
