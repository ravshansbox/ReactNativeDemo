import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'

export const AboutScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home')
        }}
        style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: 'white' }}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}
