<template>
    <div class="layout-default">
        <div>
            <LayoutHeader />

            
            <div class="main-content">
                <UIBreadcrumbs :breadcrumbs="bread" class="container" ></UIBreadcrumbs>

                <slot />
            </div>

            <LayoutFooter />
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();

const bread = computed<IBreadCrumbItem[]>(() => {
    let crumbs:IBreadCrumbItem[] = [];

    if (route.name === 'services') {
        crumbs.push({
            text: 'Услуги',
            to: route.name,
        })
    }
    if (route.name === 'portfolio') {
        crumbs.push({
            text: 'Портфолио',
            to: route.name,
        })
    }

    return crumbs;
})


</script>

<style lang="scss" scoped>
.layout-default {
    background: var(--white);
}
.main-content {
    // header 72 + gap 40
    padding-top: 112px;
}
</style>