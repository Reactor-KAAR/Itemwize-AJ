import React from 'react'
import { Actions, Scene, Router } from 'react-native-router-flux'

import Home from './components/Home'
import Camera from './components/Camera'

const scenes = Actions.create(
  <Scene key='root'>
    <Scene key='home' component={Home} title='Home' initial={true} type='replace' />
    <Scene key='camera' component={Camera} title='Camera' hideNavBar={true} />
  </Scene>
)

export const routes = (
  <Router scenes={scenes}/>
)