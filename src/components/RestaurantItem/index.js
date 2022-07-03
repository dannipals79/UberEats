import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.restaurantContainer}>
      <Text> Uber eats app!! </Text>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}> 
        <View> 
          <Text style={styles.title}> {restaurant.name} </Text>
          <Text style={styles.subtitle}>
            ${restaurant.deliveryFee} •  {""}
            {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
          </Text>
      </View>

      <View style={styles.rating}>
        <Text> {restaurant.rating} </Text>

      </View>

    </View>
  </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  restaurantContainer: {
    width: "100%",
    marginVertical: 60,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    height: 300,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row:{
    flexDirection:'row',
    alignItems:'center',    
  },
  rating:{
    marginLeft:"auto",
    backgroundColor:'lightgrey',
    padding:7,
    borderRadius:10,
    width:40,
    height:35,
    alignItems: "top",
    justifyContent:"top",     
  }

});