<template>
    <div class="portfolio container">
        <div class="portfolio__content" v-if="isShowProject">
            <CommonAsideMenu :menu="asideMenu" />
        </div>
        <div class="portfolio__projects">
            <PagesIndexProjectsItem v-for="(item, index) in projects" :key="index" :item="item" isShowTextBlock />
        </div>

        <CommonOnlineConsult />
    </div>
</template>

<script setup lang="ts">
import carousel_0 from '@/assets/images/carousel-0.png';
import carousel_1 from '@/assets/images/carousel-1.png';

const projects = reactive<IBannerItem[]>([
    {
        id: 0,
        image: carousel_0,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: '',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 1,
        image: carousel_1,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: '',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 2,
        image: carousel_0,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: '',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 3,
        image: carousel_1,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: '',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 4,
        image: carousel_0,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: '',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 5,
        image: carousel_1,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: '',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 6,
        image: carousel_0,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: '',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 7,
        image: carousel_1,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: '',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
])

const isShowProject = ref<boolean>(false)

const asideMenu = ref<IAsideMenuItem[]>([
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
.portfolio {
    margin-top: 60px;

    &__content {
        display: flex;
        gap: 30px;

        margin-bottom: 120px;
    }

    &__projects {
        width: 100%;
        gap: 20px;

        display: grid;
        grid-template-columns: repeat(2, 1fr);


        & .item {
            width: 100%;
            max-width: none;
        }
    }
}
</style>