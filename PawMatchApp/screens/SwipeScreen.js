import React, { useState } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-deck-swiper';

export default function SwipeScreen(){

    const [pets,setPets] = useState([
        {id:1,
            name:"Belle",
            age:2,
            breed:"Indie",
            image:"https://placedog.net/500/400?id=1"
        },
        {id:2,
            name:"Pluto",
            age:2,
            breed:"Indie",
            image:"https://placedog.net/500/400?id=2"
        },
        {id:3,
            name:"Chuks",
            age:2,
            breed:"Indie",
            image:"https://placedog.net/500/400?id=3"
        },
    ]);


    return(
        <View style={styles.container}>
            <Swiper
                cards = {pets}
                renderCard={(pet) => (
                    <View style = {styles.card}>
                        <Image source={{uri:pet.image}} style={styles.image}></Image>
                        <Text style={styles.name}>{pet.name}</Text>
                        <Text style={styles.name}>{pet.breed}.{pet.age} years old</Text>
                    </View>
                )}

                stackSize={3}
                backgroundColor = {"#f5f5f5"}

                onSwipedLeft={(cardIndex) => {
                    console.log("Rejected:",pets[cardIndex].name);
                }}

                onSwipedRight={(cardIndex)=> {
                    console.log("Liked:",pets[cardIndex].name)
                }}
            />
                
        </View>
    )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    flex: 0.75,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    elevation: 5,
    padding: 10
  },
  image: {
    width: "100%",
    height: "75%",
    borderRadius: 20,
  },
  name: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  info: {
    fontSize: 16,
    color: "gray",
    textAlign: "center"
  }
});