import AppRoutes from './layouts/navigation/AppRoutes'
import { ComponentNavigation } from './layouts/navigation/ComponentNavigation'
import React from 'react'

const App = () => {
  return (
    <div>
      <AppRoutes  componentRoutes={ComponentNavigation}/>
    </div>
  )
}

export default App
