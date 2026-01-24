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
                <div class="panel ik-radius-7">

                </div>
            </IkGridItem>
            <IkGridItem xxs-12
                        xl-7>
                <div class="panel ik-radius-7">
                    <Chart :series="[
                        [10, 22, 18, 30, 26],
                        [8, 16, 14, 24, 20]
                    ]"
                           :colors="['#6366f1', '#22c55e']" />
                </div>
            </IkGridItem>
            <IkGridItem xxs-12
                        xl-5>
                <div class="panel ik-radius-7">

                </div>
            </IkGridItem>
            <IkGridItem xxs-12>
                <div class="panel ik-radius-7">

                </div>
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

const tab = ref('overview');
</script>
<style lang="css" scoped>
.panel {
    background-color: var(--background-neutral-strong-default);
    border: 1px solid var(--border-neutral-light-default);
    min-height: 250px;
    padding: var(--s-8);
}
</style>