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
                           :colors="[
                            '#' + theme.colors.value.background_primary_solid_default,
                            '#' + theme.colors.value.background_secondary_solid_default
                        ]" />
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
                                     class="ik-shadow--lg"
                                     :size="32">
                            </IkImage>
                        </template>
                        <div class="ik-text--normal ik-text--default-light ik-mb-4">{{ i.title }}</div>
                        <IkProgressBar :percentage="i.percentage"
                                       class="gradient-progress"
                                       design="primary"
                                       :height="12">
                        </IkProgressBar>
                    </IkListItem>
                </Panel>
            </IkGridItem>
            <IkGridItem xxs-12>
                <Panel>
                    <template #top>
                        <span class="ik-text--bold ik-text--lg">Transaction history</span>
                    </template>
                    <template #top-end>
                        <IkButton icon="download"
                                  flat>
                            Download
                        </IkButton>
                        <IkButton icon="sync"
                                  design="primary">
                            Refresh
                        </IkButton>
                    </template>
                    <div class="transactions">
                        <div class="ik-mb-6 ik-text--default-light">
                            <div class="ik-text--center">#</div>
                            <div class="ik-text--left">Name</div>
                            <div class="ik-text--left">Amount</div>
                            <div class="ik-text--left">Date</div>
                            <div class="ik-text--left">Status</div>
                            <div class="ik-text--left">Executed By</div>
                            <div class="ik-text--left">Action</div>
                        </div>
                        <div v-for="i in transactions">
                            <div>
                                <div class="symbol">{{ i.symbol }}</div>
                            </div>
                            <div>
                                <IkListItem class="ik-pa-0">
                                    <div class="ik-text--normal">{{ i.name }}</div>
                                    <template #secondary>
                                        {{ i.subName }}
                                    </template>
                                </IkListItem>
                            </div>
                            <div>
                                {{ i.amount }}
                            </div>
                            <div>
                                {{ i.date }}
                            </div>
                            <div>
                                <IkChip size="xs"
                                        flat
                                        :design="i.statusType">
                                    <IkIcon :icon="i.statusIcon"
                                            class="ik-mr-3"></IkIcon>
                                    {{ i.status }}
                                </IkChip>
                            </div>
                            <div>
                                <IkListItem class="ik-pa-0">
                                    <template #prepend>
                                        <IkImage :src="i.executedBy.avatar"
                                                 round
                                                 cover
                                                 class="ik-shadow--lg"
                                                 :size="32">
                                        </IkImage>
                                    </template>
                                    {{ i.executedBy.name }}
                                    <template #secondary>
                                        {{ i.executedBy.email }}
                                    </template>
                                </IkListItem>
                            </div>
                            <div>
                                <IkButton append_icon="arrow-right"
                                          outline>Details</IkButton>
                            </div>
                        </div>
                    </div>
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
import { IkSelect } from '@ikol/ui-kit/components/IkSelect';
import { IkIcon } from '@ikol/ui-kit/components/IkIcon';
import { IkChip } from '@ikol/ui-kit/components/IkChip';
import { IkListItem } from '@ikol/ui-kit/components/IkList';
import { IkImage } from '@ikol/ui-kit/components/IkImage';
import { IkProgressBar } from '@ikol/ui-kit/components/IkProgressBar';
import Chart from '../utils/Chart.vue';
import Panel from '../utils/Panel.vue';
import type { IkUIDesignColor } from '@ikol/ui-kit/types';
import { useTheme } from '@ikol/ui-kit/composables/theme';

const theme = useTheme();
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
const transactions = [
    {
        id: 1,
        symbol: "TSLA",
        name: "TSLA",
        subName: "Tesla, Inc.",
        amount: "$30,021.23",
        date: "Dec 13, 2023",
        status: "Processing",
        statusType: "accent" as IkUIDesignColor,
        statusIcon: "clock-rotate-left",
        executedBy: {
            name: "Olivia Rhye",
            email: "olivia@compani.com",
            avatar: "https://i.pravatar.cc/150?u=olivia"
        }
    },
    {
        id: 2,
        symbol: "MTCH",
        name: "MTCH",
        subName: "Match Group, Inc.",
        amount: "$10,045.00",
        date: "Dec 13, 2023",
        status: "Success",
        statusType: "success" as IkUIDesignColor,
        statusIcon: "check",
        executedBy: {
            name: "Phoenix Baker",
            email: "phoenix@compani.com",
            avatar: "https://i.pravatar.cc/150?u=vvs"
        }
    },
    {
        id: 3,
        symbol: "DDOG",
        name: "DDOG",
        subName: "Datadog Inc",
        amount: "$40,132.16",
        date: "Dec 13, 2023",
        status: "Success",
        statusType: "success" as IkUIDesignColor,
        statusIcon: "check",
        executedBy: {
            name: "Lana Steiner",
            email: "lana@compani.com",
            avatar: "https://i.pravatar.cc/150?u=ccd"
        }
    },
    {
        id: 4,
        symbol: "ARKG",
        name: "ARKG",
        subName: "ARK Genomic Revolution ETF",
        amount: "$22,665.12",
        date: "Dec 28, 2023",
        status: "Declined",
        statusType: "error" as IkUIDesignColor,
        statusIcon: "times",
        executedBy: {
            name: "Demi Wilkinson",
            email: "demi@compani.com",
            avatar: "https://i.pravatar.cc/150?u=gfy"
        }
    }
];
</script>
<style lang="css" scoped>
.symbol {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--background-primary-solid-default) 20%, var(--background-secondary-solid-default) 120%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
}

.transactions > div {
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 260px 120px;
    width: 100%;
    padding: var(--s-6) 0;
    align-items: center;
}

.transactions > div:first-child {
    background-color: var(--background-neutral-regular-default);
    border-radius: var(--radius-5);
}

.gradient-progress :global(.ik-progress-bar__bar-inner) {
    background: linear-gradient(90deg, var(--background-secondary-solid-default) -80%, var(--background-primary-solid-default) 100%);
}
</style>