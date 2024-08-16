<template>
    <div class="layout-default">
        <div>
            <LayoutHeader />

            <slot />

            <LayoutFooter />
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.layout-default {
    background: var(--mainBg);
}
</style>