import { createApp } from 'vue'
import App from './App.vue'
import { createIkolUI } from '@ikol/ui-kit';

const ui = createIkolUI({
    config: {
        ICONS_CDN_URL: 'https://icons.ikui.dev/fa/7.1.0',
    },
});

createApp(App)
    .use(ui)
    .mount('#app')
