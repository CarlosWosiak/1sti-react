import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/home';
import {RouterContainer} from './styles';
export default function Routes() {
  return (
    <RouterContainer>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </RouterContainer>
  );
}
