import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import { activateKeepAwake } from 'expo-keep-awake';

import Routes from './src/routes';

export default function App() {
  activateKeepAwake();
  return (
    <Routes />
  );
}