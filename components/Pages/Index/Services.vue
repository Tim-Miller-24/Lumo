<template>
    <div class="services">
        <div class="container">
            <div class="services__header">
                <h3 class="services__title">[услуги]</h3>
                <NuxtLink to="/" class="services__link">Все проекты
                    <UIIcon name="arrow-diagonal" />
                </NuxtLink>
            </div>

            <Swiper 
                :modules="[Navigation]" 
                :breakpoints="{
                    320: { slidesPerView: 'auto', spaceBetween: 10 },
                    768: { slidesPerView: 'auto', spaceBetween: 30 },
                    }" 
                :navigation="{
                    prevEl: `#slider-arrow--prev`,
                    nextEl: `#slider-arrow--next`,
                }" 
                class="index-menu__slider services__box"
            >
                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">01</p>
                        <h3 class="services__name">Технический заказчик</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>

                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">02</p>
                        <h3 class="services__name">Проектирование</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>
                
                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">03</p>
                        <h3 class="services__name">Генеральный подряд</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>

                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">04</p>
                        <h3 class="services__name">Изготовление металлоконструкций </h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt</p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>
                
                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">05</p>
                        <h3 class="services__name">Земляные работы / работы нулевого цикла</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>
                
                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">06</p>
                        <h3 class="services__name">Монолитные работы,  Монтаж / сбор жби конструкций</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>
                
                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">07</p>
                        <h3 class="services__name">Монтаж металлоконструкций</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>
                
                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">08</p>
                        <h3 class="services__name">Монтаж сэндвич панелей</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>
                
                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">09</p>
                        <h3 class="services__name">Кровельные работы / Монтаж кровли</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>
                
                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">10</p>
                        <h3 class="services__name">Промышленные полы, полимерные покрытия</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>

                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">11</p>
                        <h3 class="services__name">Монтаж инженерных сетей </h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>
                
                <SwiperSlide class="index-menu__slide">
                    <div class="services__item">
                        <p class="services__count">12</p>
                        <h3 class="services__name">Эксплуатация и последующее обслуживание</h3>
                        <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod </p>
                        <UIButton color="black"class="services__button">Оставить заявку
                            <UIIcon name="arrow-diagonal" />
                        </UIButton>
                    </div>

                    <div class="services__devider"></div>
                </SwiperSlide>    
            </Swiper>

            <!-- <div class="services__box">
                <div class="services__item">
                    <p class="services__count">01</p>
                    <h3 class="services__name">Технический заказчик</h3>
                    <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt </p>
                    <UIButton color="black"class="services__button">Оставить заявку
                        <UIIcon name="arrow-diagonal" />
                    </UIButton>
                </div>
                <div class="services__devider"></div>
                <div class="services__item">
                    <p class="services__count">02</p>
                    <h3 class="services__name">Генеральный подрядчик</h3>
                    <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt </p>
                    <UIButton color="black"class="services__button">Оставить заявку
                        <UIIcon name="arrow-diagonal" />
                    </UIButton>
                </div>
                <div class="services__devider"></div>
                <div class="services__item">
                    <p class="services__count">03</p>
                    <h3 class="services__name">Управляющая компания</h3>
                    <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod </p>
                    <UIButton color="black"class="services__button">Оставить заявку
                        <UIIcon name="arrow-diagonal" />
                    </UIButton>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
</script>

<style lang="scss" scoped>
@import "swiper/css";

.services {
    padding: 120px 0;

    background: var(--grayBg3);

    &__header {
        display: flex;
        width: 100%;
        justify-content: space-between;

        margin-bottom: 60px;
    }

    &__title {
        @include h2;
    }

    &__link {
        display: flex;
        gap: 5px;

        align-items: center;

        font-family: 'Aeroport';
        font-weight: 400;
        font-size: 16px;

        color: var(--yellow);

        &:deep(svg path) {
            fill: var(--yellow);
        }
    }

    &__box {
        display: flex;
        justify-content: space-between;

        gap: 30px;
    }

    &__item {
        display: flex;
        flex-direction: column;
        max-width: 400px;
    }

    &__count {
        font-family: 'Aeroport';
        font-size: 16px;
        font-weight: 300;
        line-height: 21.87px;
        text-align: left;
        color: var(--yellow);

    }

    &__name {
        font-family: 'Bicubik';
        font-size: 24px;
        font-weight: 400;
        line-height: 28.8px;
        text-align: left;

        margin-top: 8px;
        margin-bottom: 12px;
    }

    &__description {
        font-family: 'Aeroport';
        font-size: 16px;
        font-weight: 300;
        line-height: 21.87px;
        text-align: left;
        color: var(--grayText);
    }

    &__button {
        position: absolute;
        bottom: 10px;
    }

    &__devider {
        display: flex;
        height: 260px;
        border: 1px dashed var(--grayText);
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
}

.index-menu__slide {
    max-width: 450px;
    width: 100%;

    display: flex;
    gap: 25px;
}
</style>