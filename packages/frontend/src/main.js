import { createApp } from 'vue';
import { provideApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import { apolloClient } from './apolloClient';

const app = createApp(App);

const wrappedClient = provideApolloClient(apolloClient);
app.provide('apolloClient', wrappedClient);

app.mount('#app');
