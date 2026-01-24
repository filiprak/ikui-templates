<template>
    <div>
        <IkFlex justify_space>
            <IkTabsNav v-model="tab"
                       variant="button-background"
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
                        xl-3>
                <Panel primary>
                    <template #top>
                        <IkIcon circle
                                :size_px="40"
                                design="primary"
                                icon="dollar">
                        </IkIcon>
                    </template>
                    <div class="ik-text--normal ik-text--md ik-mb-5">Total income</div>
                    <IkFlex class="ik-text--normal ik-text--display-md ik-mb-5"
                            grow_and_fixed>
                        <span>$105,684</span>
                        <IkChip flat
                                design="success"
                                size="xs">
                            <IkIcon icon="chevron-up"
                                    class="ik-mr-3"></IkIcon>
                            10,87%
                        </IkChip>
                    </IkFlex>
                    <div class="ik-text--normal ik-text--default-light">Compared to last month</div>
                </Panel>
            </IkGridItem>
            <IkGridItem xxs-12
                        md-6
                        xl-3>
                <Panel>
                    <template #top>
                        <IkIcon circle
                                :size_px="40"
                                design="primary"
                                icon="hand-holding-dollar">
                        </IkIcon>
                    </template>
                    <div class="ik-text--normal ik-text--md ik-mb-5">Profit</div>
                    <IkFlex class="ik-text--normal ik-text--display-md ik-mb-5"
                            grow_and_fixed>
                        <span>$11,478</span>
                        <IkChip flat
                                design="success"
                                size="xs">
                            <IkIcon icon="chevron-up"
                                    class="ik-mr-3"></IkIcon>
                            7,33%
                        </IkChip>
                    </IkFlex>
                    <div class="ik-text--normal ik-text--default-light">Compared to last month</div>
                </Panel>
            </IkGridItem>
            <IkGridItem xxs-12
                        md-6
                        xl-3>
                <Panel>
                    <template #top>
                        <IkIcon circle
                                :size_px="40"
                                design="primary"
                                icon="money-check-dollar">
                        </IkIcon>
                    </template>
                    <div class="ik-text--normal ik-text--md ik-mb-5">Total revenue</div>
                    <IkFlex class="ik-text--normal ik-text--display-md ik-mb-5"
                            grow_and_fixed>
                        <span>$11,478</span>
                        <IkChip flat
                                design="error"
                                size="xs">
                            <IkIcon icon="chevron-down"
                                    class="ik-mr-3"></IkIcon>
                            3,01%
                        </IkChip>
                    </IkFlex>
                    <div class="ik-text--normal ik-text--default-light">Compared to last month</div>
                </Panel>
            </IkGridItem>
            <IkGridItem xxs-12
                        md-6
                        xl-3>
                <Panel>
                    <template #top>
                        <IkIcon circle
                                :size_px="40"
                                design="primary"
                                icon="filter-circle-dollar">
                        </IkIcon>
                    </template>
                    <div class="ik-text--normal ik-text--md ik-mb-5">Total convertion</div>
                    <IkFlex class="ik-text--normal ik-text--display-md ik-mb-5"
                            grow_and_fixed>
                        <span>5,09%</span>
                        <IkChip flat
                                design="success"
                                size="xs">
                            <IkIcon icon="chevron-up"
                                    class="ik-mr-3"></IkIcon>
                            23,01%
                        </IkChip>
                    </IkFlex>
                    <div class="ik-text--normal ik-text--default-light">Compared to last month</div>
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
                                  variant="filled"
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
                        <span class="ik-text--bold ik-text--lg">Session by country</span>
                    </template>
                    <IkListItem class="ik-pa-0 ik-pb-9"
                                v-for="i in countries">
                        <template #prepend>
                            <IkImage :src="`https://flagcdn.com/${i.icon}.svg`"
                                     round
                                     cover
                                     :size="32">
                            </IkImage>
                        </template>
                        <span class="ik-text--normal">{{ i.title }}</span>
                        <IkProgressBar :percentage="i.percentage"
                                       design="primary"
                                       :height="12">
                        </IkProgressBar>
                    </IkListItem>
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
import { IkIcon } from '@ikol/ui-kit/components/IkIcon';
import { IkChip } from '@ikol/ui-kit/components/IkChip';
import { IkListItem } from '@ikol/ui-kit/components/IkList';
import { IkImage } from '@ikol/ui-kit/components/IkImage';
import { IkProgressBar } from '@ikol/ui-kit/components/IkProgressBar';

const tab = ref('overview');
const analytics = ref(1);
const countries = [
    {
        title: 'United States',
        percentage: 87,
        icon: 'us',
    },
    {
        title: 'Japan',
        percentage: 67,
        icon: 'jp',
    },
    {
        title: 'China',
        percentage: 56,
        icon: 'cn',
    },
    {
        title: 'Canada',
        percentage: 45,
        icon: 'ca',
    },
];
</script>
<style lang="css" scoped></style>