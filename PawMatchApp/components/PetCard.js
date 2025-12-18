import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native";

export default function PetCard({ pet, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: pet.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{pet.name}, {pet.age}</Text>
        <Text style={styles.breed}>{pet.breed}</Text>
        <Text style={styles.description} numberOfLines={2}>{pet.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 10,
  },
  name: { 
    fontSize: 18,
    fontWeight: 'bold',
  },
  breed: {
    fontSize: 14,
    color: '#666',
  },
  description: {
    fontSize: 12,
    color: '#999',
  }

});