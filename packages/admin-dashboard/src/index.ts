import { createApp } from 'vue'
import App from './App.vue'
import { createIkolUI } from '@ikol/ui-kit';
import { createRouter } from '@ikol/ui-kit/composables/router';
import Dashboard from './routes/Dashboard.vue';

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Dashboard,
        },
    ],
});
const ui = createIkolUI({
    router,
});

createApp(App)
    .use(ui)
    .mount('#app')
