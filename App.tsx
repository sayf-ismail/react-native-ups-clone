import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigator/RootNavigator';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://bongor.stepzen.net/api/knobby-gecko/__graphql',
  headers: {'Authorization':'apikey bongor::stepzen.io+1000::7d1d02875e48fc1c1ee886f77030226ddd06100b333543fcae3f724b1a30b877'},
  cache: new InMemoryCache(),
});

export default function App() {
  return (
  // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
      </ApolloProvider>
   </TailwindProvider>
  );
}