<template>
    <div class="projects">
        <div class="projects__header container">
            <h3 class="projects__title">[Перокты]</h3>

            <NuxtLink to="/" class="projects__link"> Все проекты
                <UIIcon name="arrow-diagonal" />
            </NuxtLink>
        </div>

        <Swiper :modules="[Navigation]" :breakpoints="{
            320: { slidesPerView: 'auto', spaceBetween: 10 },
            768: { slidesPerView: 'auto', spaceBetween: 20 },
        }" :navigation="{
            prevEl: `#slider-arrow--prev`,
            nextEl: `#slider-arrow--next`,
        }" class="index-menu__slider">
            <SwiperSlide v-for="item in banners" :key="item.id" class="index-menu__slide">
                <PagesIndexProjectsItem :item="item" />
            </SwiperSlide>
        </Swiper>

        <div class="index-menu__slider-navigation container">
            <UIIcon name="arrow-left" class="index-menu__slider-navigation_arrow" id="slider-arrow--prev" />

            <div class="index-menu__slider-navigation_devider"></div>

            <UIIcon name="arrow-left" class="index-menu__slider-navigation_arrow" id="slider-arrow--next" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

import carousel_0 from '@/assets/images/carousel-0.png';
import carousel_1 from '@/assets/images/carousel-1.png';

const banners = reactive<IBannerItem[]>([
    {
        id: 0,
        image: carousel_0,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: 'https://www.youtube.com/',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 1,
        image: carousel_1,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: 'https://www.youtube.com/',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 2,
        image: carousel_0,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: 'https://www.youtube.com/',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 3,
        image: carousel_1,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: 'https://www.youtube.com/',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 4,
        image: carousel_0,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: 'https://www.youtube.com/',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
    {
        id: 5,
        image: carousel_1,
        title: 'название проекта',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Ut enim ad minim veniam, quis',
        tag: 'lumo',
        link: 'https://www.youtube.com/',
        area: '10 000 м2',
        address: 'Ленинский район Московской области'
    },
])
</script>

<style lang="scss" scoped>
@import "swiper/css";

.projects {
    padding: 120px 0;

    &__header {
        display: flex;
        justify-content: space-between;

        margin-bottom: 60px;
    }

    &__title {
        @include h2;
        text-wrap: nowrap;
        flex-grow: 1;
    }

    &__link {
        display: flex;
        gap: 5px;

        font-family: 'Aeroport';
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: var(--yellow);

        :deep(span svg path) {
            fill: var(--yellow)
        }
    }
}

.index-menu__slider {
    z-index: 10;

    &:deep(.swiper-wrapper) {
        display: flex;

        &:first-child {
            padding-left: 20px;
        }

        .swiper-slide:last-child {
            padding-right: 40px;
        }
    }

    &-navigation {
        margin-top: 20px;

        display: flex;
        justify-content: end;
        gap: 10px;

        &_arrow {
            &:hover {
                cursor: pointer;
            }

            :deep(svg) {
                height: 30px;
                width: 30px;
            }
            :deep(svg path) {
                height: 30px;
                width: 30px;
                fill: var(--grayText)
            }
        }

        &_devider {
            display: flex;
            height: 30px;
            border: 1px dashed var(--grayText);
        }

    }
}

.index-menu__slide {
    max-width: 450px;
    width: 100%;
}

#slider-arrow--next {
    transform: rotate(180deg);
}
</style>