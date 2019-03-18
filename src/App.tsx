/**
 * <App />
 * - Root component for application
 */

import React from "react";
import Config from "react-native-config";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import ReservationsScreen from "./components/screens/Reservations";

// Configure ApolloClient
// - https://www.apollographql.com/docs/react/essentials/get-started.html#configuration
const client = new ApolloClient({
  uri: Config.GRAPHQL_ENDPOINT
});

const App = () => (
  <ApolloProvider client={client}>
    <ReservationsScreen />
  </ApolloProvider>
);

export default App;
