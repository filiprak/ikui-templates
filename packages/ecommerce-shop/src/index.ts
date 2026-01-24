import { createApp } from 'vue'
import App from './App.vue'
import { createIkolUI } from '@ikol/ui-kit';

const ui = createIkolUI({
    config: {
        ICONS_CDN_URL: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.1.0/svgs-full',
    },
});

createApp(App)
    .use(ui)
    .mount('#app')
