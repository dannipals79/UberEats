import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestuarantDetailsPage from "./src/screens/RestaurantDetailsScreen";
import DishDetailsScreen from "./src/screens/DishDetailScreen";
import Basket from "./src/screens/Basket";
import OrderScreen from "./src/screens/OrdersScreen";
import OrderDetials from "./src/screens/OrderDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <OrderDetials />
      {/* <OrderScreen /> */}
      {/* <Basket /> */}
      {/* <HomeScreen /> */}
      {/* <RestuarantDetailsPage />   */}
      {/* <DishDetailsScreen /> */}

      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //padding: 10,
  },
});
