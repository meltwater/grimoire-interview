import './assets/main.css'

import { ComponentLibrary } from 'vue-library'
import { createApp } from 'vue'
import { provideApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apolloClient'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const wrappedClient = provideApolloClient(apolloClient)
app.provide('apolloClient', wrappedClient)

app.use(router)
app.use(ComponentLibrary)

app.mount('#app')
