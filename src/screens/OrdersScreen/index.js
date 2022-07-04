import { View, Text, FlatList,StyleSheet } from 'react-native'
import OrderListItem from '../../components/OrderListItem'
import orders from '../../../assets/data/orders.json'



const OrderScreen = () => {
  return (
    <View style={styles.page} >
      <Text>OrderScreen </Text>
      <FlatList 
        data={orders}
        renderItem={({item}) => <OrderListItem order={item} /> } /> 
    </View>
  )
}

const styles = StyleSheet.create({
page: {
    flex: 1,
    width: "100%",
    paddingTop:50,
    paddingVertical: 0, //temp flix
  },
});

export default OrderScreen 