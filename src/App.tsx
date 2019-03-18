/**
 * <App />
 * - Root component for application
 */

import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import ReservationsScreen from "./components/screens/Reservations";

// Configure ApolloClient
// - https://www.apollographql.com/docs/react/essentials/get-started.html#configuration
const client = new ApolloClient({
  uri: "GET FROM ENV"
});

const App = () => (
  <ApolloProvider client={client}>
    <ReservationsScreen />
  </ApolloProvider>
);

export default App;
