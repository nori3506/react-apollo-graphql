import React from "react";
import "./App.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Addcontact from "./components/form/AddContact";
import Title from "./components/layouts/Title";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Title />
        <Addcontact />
      </div>
    </ApolloProvider>
  );
};

export default App;
