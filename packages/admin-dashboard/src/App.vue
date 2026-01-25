<template>
    <IkApp class="admin-dashboard">
        <IkAppBar class="topbar"
                  :height="72">
            <IkFlex grow_and_fixed>
                <span class="ik-text--display-xs">Dashboard</span>
                <IkFlex spacing="5">
                    <IkInput placeholder="Type here to start searching..."
                             style="width: 400px"
                             prepend_icon="search"
                             append_icon="arrow-right"
                             variant="filled">
                    </IkInput>
                    <ThemeSwitch></ThemeSwitch>
                    <IkButton icon="question"
                              circle
                              flat
                              size_px="32">
                    </IkButton>
                    <IkButton icon="bell"
                              circle
                              flat
                              size_px="32">
                    </IkButton>
                    <IkButton icon="chevron-down"
                              circle
                              flat
                              size_px="32">
                    </IkButton>
                </IkFlex>
            </IkFlex>
        </IkAppBar>
        <IkNavigation v-model:open="nav"
                      v-model:mini="mini">
            <template #top>
                <div class="ik-pa-7 ik-pb-10">
                    <div
                         style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 16px; font-weight: bold;">
                        JD
                    </div>
                </div>
            </template>
            <IkNavigationItem link="#"
                              active
                              icon="home"
                              circle_icon
                              hide_label>
                Dashboard
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="chart-line"
                              circle_icon
                              hide_label>
                Markets
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="wave-square"
                              circle_icon
                              hide_label>
                Technical Indicators
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="arrow-right-arrow-left"
                              circle_icon
                              hide_label>
                Trade
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="book"
                              circle_icon
                              hide_label>
                Orders
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="robot"
                              circle_icon
                              hide_label>
                Trading bots
            </IkNavigationItem>
            <div class="ik-px-7 ik-pb-7">
                <div style="border-bottom: 1px solid var(--alpha-white-10)"></div>
            </div>
            <IkNavigationItem link="#"
                              icon="wallet"
                              circle_icon
                              hide_label>
                Balance
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="shield-halved"
                              circle_icon
                              hide_label>
                Security
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="cog"
                              circle_icon
                              hide_label>
                Settings
            </IkNavigationItem>
            <template #bottom>
                <IkNavigationItem icon="cube"
                                  hide_label>
                    Upgrade plan
                </IkNavigationItem>
                <IkNavigationItem @click="mini = !mini"
                                  :icon="mini ? 'chevron-right' : 'chevron-left'"
                                  hide_label>
                    Close
                </IkNavigationItem>
            </template>
        </IkNavigation>
        <IkAppContent>
            <div class="ik-pa-9">
                <RouterView></RouterView>
            </div>
        </IkAppContent>
    </IkApp>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IkButton } from '@ikol/ui-kit/components/IkButton';
import { IkFlex } from '@ikol/ui-kit/components/IkFlex';
import { IkGrid, IkGridItem } from '@ikol/ui-kit/components/IkGrid';
import { IkImage } from '@ikol/ui-kit/components/IkImage';
import { IkLink } from '@ikol/ui-kit/components/IkLink';
import { IkChip } from '@ikol/ui-kit/components/IkChip';
import { IkIcon } from '@ikol/ui-kit/components/IkIcon';
import { IkRating } from '@ikol/ui-kit/components/IkRating';
import ThemeSwitch from './utils/ThemeSwitch.vue';
import { provideTheme } from '@ikol/ui-kit/composables/theme';
import { IkApp, IkAppBar, IkAppContent } from '@ikol/ui-kit/components/IkApp';
import { IkNavigation, IkNavigationItem } from '@ikol/ui-kit/components/IkNavigation';
import { IkButtonGroup } from '@ikol/ui-kit/components/IkButtonGroup';
import { IkInput } from '@ikol/ui-kit/components/IkInput';
import { IkDivider } from '@ikol/ui-kit/components/IkDivider';

const theme = provideTheme({
    colors: {
        NEUTRAL_WHITE: 'FFFFFF',
        NEUTRAL_BLACK: '000000',
        PRIMARY_50: 'F5FAF9',
        PRIMARY_100: 'E4F1EF',
        PRIMARY_200: 'ADFFF2',
        PRIMARY_300: '70FFE7',
        PRIMARY_400: '33FFDD',
        PRIMARY_500: '00FFD5',
        PRIMARY_600: '00D9B5',
        PRIMARY_700: '00B395',
        PRIMARY_800: '008C75',
        PRIMARY_900: '006655',
        PRIMARY_950: '004035',
        SECONDARY_50: 'F9F5FA',
        SECONDARY_100: 'F0E4F1',
        SECONDARY_200: 'FAADFF',
        SECONDARY_300: 'F570FF',
        SECONDARY_400: 'F133FF',
        SECONDARY_500: 'EE00FF',
        SECONDARY_600: 'CA00D9',
        SECONDARY_700: 'A700B3',
        SECONDARY_800: '83008C',
        SECONDARY_900: '5F0066',
        SECONDARY_950: '3C0040',
        NEUTRAL_50: 'F7F7F7',
        NEUTRAL_100: 'EBEBEB',
        NEUTRAL_200: 'D6D6D6',
        NEUTRAL_300: 'B8B8B8',
        NEUTRAL_400: '999999',
        NEUTRAL_500: '424242',
        NEUTRAL_600: '383838',
        NEUTRAL_700: '2E2E2E',
        NEUTRAL_800: '242424',
        NEUTRAL_900: '1D1818',
        NEUTRAL_950: '120F0F',
        SUCCESS_50: 'F5FAF7',
        SUCCESS_100: 'E4F1E9',
        SUCCESS_200: 'ADFFCB',
        SUCCESS_300: '70FFA5',
        SUCCESS_400: '33FF7E',
        SUCCESS_500: '00FF5E',
        SUCCESS_600: '00D950',
        SUCCESS_700: '00B342',
        SUCCESS_800: '008C34',
        SUCCESS_900: '006626',
        SUCCESS_950: '004018',
        WARNING_50: 'FAF9F5',
        WARNING_100: 'F1EEE4',
        WARNING_200: 'FFEDAD',
        WARNING_300: 'FFE070',
        WARNING_400: 'FFD333',
        WARNING_500: 'FFC800',
        WARNING_600: 'D9AA00',
        WARNING_700: 'B38C00',
        WARNING_800: '8C6E00',
        WARNING_900: '665000',
        WARNING_950: '403200',
        ERROR_50: 'FAF5F7',
        ERROR_100: 'F1E4E9',
        ERROR_200: 'FFADCE',
        ERROR_300: 'FF70A9',
        ERROR_400: 'FF3385',
        ERROR_500: 'FF0066',
        ERROR_600: 'D90057',
        ERROR_700: 'B30047',
        ERROR_800: '8C0038',
        ERROR_900: '660029',
        ERROR_950: '40001A',
    },
    settings: {
        typography: {
            letter_spacing: 0.2,
        },
        fonts: {
            default: {
                family: 'Inter',
                weights: { bold: 700, normal: 400, semibold: 600 },
            },
        },
    },
});

const nav = ref(true);
const mini = ref(true);
</script>
<style lang="css" scoped>
:global(.ik-theme--light) {
    --bg-diff: 0;
}

:global(.ik-theme--dark) {
    --bg-diff: -50;
}

:global(body) {
    --bg-color: rgb(from var(--background-neutral-regular-default) calc(r + var(--bg-diff)) calc(g + var(--bg-diff)) calc(b + var(--bg-diff)));
}

:global(body) {
    min-height: 100vh;
    background-color: var(--bg-color);
}

.ik-theme--dark .topbar {
    background-color: var(--bg-color);
}
</style>