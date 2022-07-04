import { View, Text, StyleSheet, FlatList } from "react-native";

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1 </Text>
      </View>
      <Text style={styles.name}>{basketDish.name} </Text>
      <Text style={styles.price}>{basketDish.price} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nameRestaurant: {
    fontSize: 30,
    fontWeight: "800",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 30,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    marginRight: 5,
    paddingVertical: 2,
    marginRight: 18,
    borderRadius: 2,
  },
});

export default BasketDishItem;
