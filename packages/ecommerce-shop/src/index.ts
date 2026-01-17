import { createApp } from 'vue'
import App from './App.vue'
import { createIkolUI } from '@ikol/ui-kit';

const ui = createIkolUI();

createApp(App)
    .use(ui)
    .mount('#app')
