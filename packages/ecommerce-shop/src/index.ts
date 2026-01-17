import { createApp } from 'vue'
import App from './App.vue'
import { createIkolUI } from '@ikol/ui-kit';
import { provideTheme } from '@ikol/ui-kit/composables/theme';

const ui = createIkolUI();

createApp(App)
    .use(ui)
    .use(() => {
        provideTheme({
            colors: {
                PRIMARY_50: 'f1f3ff',
                PRIMARY_100: 'e2e7ff',
                PRIMARY_200: 'c4d0ff',
                PRIMARY_300: 'a5b9ff',
                PRIMARY_400: '7f9fff',
                PRIMARY_500: '5689ff',
                PRIMARY_600: '0073ff',
                PRIMARY_700: '0054be',
                PRIMARY_800: '003a87',
                PRIMARY_900: '001f50',
                PRIMARY_950: '001234',
            },
            settings: {
                typography: {
                    letter_spacing: 0.5,
                },
                fonts: {
                    default: {
                        family: 'Roboto',
                        weights: { bold: 700, normal: 400, semibold: 600 },
                    },
                },
            },
        });
    })
    .mount('#app')
