import '@maket/css/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@components/App.jsx'
import {Provider} from 'react-redux'
import { store } from './state/store'

const wrap = document.querySelector('#wrap')

ReactDOM.render(<Provider store={store}><App /></Provider>, wrap)

