import { createStaticNavigation } from '@react-navigation/native'
import { RootStack } from './RootStack'

const Navigation = createStaticNavigation(RootStack)

export const App = () => {
  return <Navigation />
}
