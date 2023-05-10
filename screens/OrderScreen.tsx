import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { useLayoutEffect } from 'react';
import DeliveryCard from '../components/DeliveryCard';

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">

export type OrdersScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, "Orders">, NativeStackNavigationProp<RootStackParamList>>

const OrderScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>()
  const {
    params: { order },
  } = useRoute<OrderScreenRouteProp>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTitleStyle: {color: "black"},
      headerTintColor: "#EB6A7C",
      headerBackTitle: "Deliveries"
    })
  }, [order])

  return (
    <View style={tw('-mt-2')}>
      <DeliveryCard order={order} fullWidth />
    </View>
  )
}
export default OrderScreen