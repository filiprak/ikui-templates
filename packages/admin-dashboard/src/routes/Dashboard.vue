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
        <div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { IkButton } from '@ikol/ui-kit/components/IkButton';
import { IkFlex } from '@ikol/ui-kit/components/IkFlex';
import { IkTabsNav } from '@ikol/ui-kit/components/IkTabs';
import { ref } from 'vue';

const tab = ref('overview');
</script>