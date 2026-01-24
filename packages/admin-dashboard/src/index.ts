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
    config: {
        ICONS_CDN_URL: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.1.0',
    },
});

createApp(App)
    .use(ui)
    .mount('#app')
