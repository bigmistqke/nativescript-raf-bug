import { render } from '@nativescript-community/solid-js'
import { Application } from '@nativescript/core'
import { document } from 'dominative'
import { App } from './app'

document.body.actionBarHidden = true
document.body.appendChild(document.createElement('ContentView'))

render(App, document.body.firstElementChild)

Application.run({ create: () => document })
