import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { appFireStore } from './firebase/config'

appFireStore

ReactDOM.createRoot(document.getElementById('root')).render(<App />)