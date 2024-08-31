<template>
    <div class="services">
        <div class="services__content container">
            <CommonAsideMenu :menu="asideMenu" />

            <PagesServicesItem />
        </div>

        <CommonOnlineConsult />
    </div>
</template>

<script setup lang="ts">
const asideMenu = reactive<IAsideMenuItem[]>([
    {
        text: 'Технический заказчик',
        link: '/',
    },
    {
        text: 'Генеральный подрядчик',
        link: '/',
    },
    {
        text: 'Управляющая компания',
        link: '/',
    },
])
</script>

<style lang="scss" scoped>
.services {
    margin-top: 60px;

    &__content {
        display: flex;
        gap: 30px;

        margin-bottom: 120px;
    }
}
</style>