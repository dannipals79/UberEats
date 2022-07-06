import { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";
// import restaurants from "../../../assets/data/restaurants.json";


// long way... 
// export default function HomeScreen() {
//   const [restaurants, setRestaurants] = useState([]);
//   const fetchRestaurants = async () => {
//     const results = await DataStore.query(Restaurant);
//     setRestaurants(results);
//   };

//   useEffect(() => {
//     fetchRestaurants();
//   }, []);

// short way... 
  export default function HomeScreen() {
    
    const [restaurants, setRestaurants] = useState([]);   
  
    useEffect(() => {        
      DataStore.query(Restaurant).then(setRestaurants);
     }, []);


  return (
    <View style={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
