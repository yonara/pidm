/*import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';*/

/*export default function App(){
  return(
    <NavegacaoApp />
  )
}*/

import React from "react";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Routes from "./components/stack/Routes";

const App = ()=>
<SafeAreaProvider>
  <Routes />
</SafeAreaProvider>

export default App