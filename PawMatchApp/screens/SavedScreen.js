import { SafeAreaView, Text,StyleSheet } from "react-native-web";

export default function SavedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Saved Screen</Text>
      <Text>Your saved pets will appear here.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF8F2"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
});