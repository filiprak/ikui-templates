<template>
    <div class="panel ik-radius-8"
         :class="{ 'primary': primary }">
        <IkFlex class="ik-mb-8"
                spacing="4"
                justify_space>
            <div>
                <slot name="top"></slot>
            </div>
            <IkFlex spacing="4">
                <slot name="top-end"></slot>
                <IkButton circle
                          ghost
                          icon="ellipsis-vertical">
                </IkButton>
            </IkFlex>
        </IkFlex>
        <div>
            <slot></slot>
        </div>
        <div>
            <slot name="bottom"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { IkButton } from '@ikol/ui-kit/components/IkButton';
import { IkFlex } from '@ikol/ui-kit/components/IkFlex';
import { useTheme } from '@ikol/ui-kit/composables/theme';

const theme = useTheme();
const props = defineProps<{
    primary?: boolean,
}>()
</script>
<style scoped>
.panel {
    background-color: var(--background-neutral-strong-default);
    border: 1px solid var(--border-neutral-light-default);
    min-height: 100px;
    padding: var(--s-8);
}

.panel.primary {
    background: linear-gradient(rgba(from var(--background-primary-solid-default) r g b / 0.5) 0%, var(--background-neutral-strong-default) 100%);
    border-color: var(--border-primary-light-default);
}
</style>