import { View, Text, StyleSheet, FlatList } from "react-native";
import BasketDishItem from "../../components/BasketDishItem";
import restaurants from "../../../assets/data/restaurants.json";


const restaurant = restaurants[0];


const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.nameRestaurant}> {restaurant.name} </Text>
      <Text> Your items</Text>
      <View style={styles.separator} />
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30, //temp flix
  },
  nameRestaurant: {
    fontSize: 30,    
    fontWeight: "800",
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "grey",
    marginVertical: 10,
  },
  description: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal:30,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  price: {
    marginLeft: "auto",
    // marginHorizontal: 50
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    marginRight: 5,
    paddingVertical: 2,
    marginRight: 18,
    borderRadius: 2,
  },
  name: {
    fontWeight: "600",
  },
});

export default Basket;
