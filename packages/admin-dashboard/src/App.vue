<template>
    <IkApp class="admin-dashboard">
        <IkAppBar :height="72">
            <IkFlex grow_and_fixed>
                <span class="ik-text--xl">Dashboard</span>
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
                    <IkButton icon="home"
                              circle
                              flat
                              size_px="32">
                    </IkButton>
                    <IkButton icon="bell"
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
                <div class="ik-pa-7">
                    <div
                         style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 16px; font-weight: bold;">
                        JD
                    </div>
                </div>
            </template>
            <IkNavigationItem circle
                              link="#"
                              icon="home"
                              hide_label>
                Dashboard
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="folder"
                              hide_label>
                Projects
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="users"
                              hide_label>
                Team
            </IkNavigationItem>
            <IkNavigationItem link="#"
                              icon="cog"
                              hide_label>
                Settings
            </IkNavigationItem>
            <template #bottom>
                <IkNavigationItem @click="mini = !mini"
                                  :icon="mini ? 'chevron-right' : 'chevron-left'"
                                  hide_label>
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
import ThemeSwitch from './ThemeSwitch.vue';
import { provideTheme } from '@ikol/ui-kit/composables/theme';
import { IkApp, IkAppBar, IkAppContent } from '@ikol/ui-kit/components/IkApp';
import { IkNavigation, IkNavigationItem } from '@ikol/ui-kit/components/IkNavigation';
import { IkButtonGroup } from '@ikol/ui-kit/components/IkButtonGroup';
import { IkInput } from '@ikol/ui-kit/components/IkInput';

const theme = provideTheme({
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

const nav = ref(true);
const mini = ref(true);
</script>

<style scoped>
.admin-dashboard {}
</style>
