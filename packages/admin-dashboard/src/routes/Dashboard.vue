<template>
    <div>
        <IkFlex justify_space>
            <IkTabsNav v-model="tab"
                       variant="button"
                       design="primary"
                       :items="[
                        { id: 'overview', title: 'Overview' },
                        { id: 'notifications', title: 'Notifications' },
                        { id: 'history', title: 'History' }
                    ]" />
            <IkFlex spacing="5">
                <IkButton icon="calendar:regular"
                          flat>
                    15 Aug - 15 Nov, 2026
                </IkButton>
                <IkButton icon="filter"
                          flat>
                    Filter
                </IkButton>
                <IkButton icon="share"
                          design="primary">
                    Share
                </IkButton>
            </IkFlex>
        </IkFlex>
        <IkGrid class="ik-mt-8"
                spacing_y="8"
                spacing_x="8">
            <IkGridItem xxs-12
                        md-6
                        xl-3
                        v-for="i in 4">
                <Panel>
                    <template #top>
                        <span class="ik-text--bold ik-text--lg">Analytics</span>
                    </template>
                </Panel>
            </IkGridItem>
            <IkGridItem xxs-12
                        xl-7>
                <Panel>
                    <template #top>
                        <span class="ik-text--bold ik-text--lg">Analytics</span>
                    </template>
                    <template #top-end>
                        <IkSelect v-model="analytics"
                                  value_key="v"
                                  text_key="t"
                                  :items="[{ v: 1, t: 'Estimated Sales' }, { v: 2, t: 'Activity' }]">
                        </IkSelect>
                    </template>
                    <Chart :series="[
                        [2.5, 4.2, 3.1, 7.4, 5.0, 8.2, 6.1, 4.8, 9.1, 7.0],
                        [1.2, 3.5, 2.8, 4.1, 3.9, 5.5, 4.2, 6.0, 5.1, 8.3]
                    ]"
                           :colors="['cyan', 'magenta']" />
                </Panel>
            </IkGridItem>
            <IkGridItem xxs-12
                        xl-5>
                <Panel>
                    <template #top>
                        <span class="ik-text--bold ik-text--lg">Analytics</span>
                    </template>
                </Panel>
            </IkGridItem>
            <IkGridItem xxs-12>
                <Panel>
                    <template #top>
                        <span class="ik-text--bold ik-text--lg">Analytics</span>
                    </template>
                </Panel>
            </IkGridItem>
        </IkGrid>
    </div>
</template>
<script setup lang="ts">
import { IkButton } from '@ikol/ui-kit/components/IkButton';
import { IkFlex } from '@ikol/ui-kit/components/IkFlex';
import { IkGrid, IkGridItem } from '@ikol/ui-kit/components/IkGrid';
import { IkTabsNav } from '@ikol/ui-kit/components/IkTabs';
import { ref } from 'vue';
import Chart from '../utils/Chart.vue';
import { useTheme } from '@ikol/ui-kit/composables';
import Panel from '../utils/Panel.vue';
import { IkSelect } from '@ikol/ui-kit/components/IkSelect';

const tab = ref('overview');
const analytics = ref(1);
const theme = useTheme();
</script>
<style lang="css" scoped></style>