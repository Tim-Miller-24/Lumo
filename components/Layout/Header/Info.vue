<template>
    <div class="header__info container">
        <img src="@/assets/images/header-banner.jpg" class="header__bg-image" alt="">
        <div class="header__bg-image_blur"></div>

        <div class="header__info-box">
            <h1 class="header__info-title">Проектирование, строительство промышленных и коммерческих объектов. </h1>

            <!-- <ul class="header__info-list">
                <li class="header__info-list_item"> <span>01</span>
                    <p>Технический заказчик</p>
                </li>
                <li class="header__info-list_item"> <span>02</span>
                    <p>Генеральный подрядчик</p>
                </li>
                <li class="header__info-list_item"> <span>03</span>
                    <p>Управляющая компания</p>
                </li>
            </ul> -->

            <UIButton>
                <p>Оставить заявку</p>
                <UIIcon name="arrow-diagonal" />
            </UIButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    position: relative;

    &__info {
        height: 80vh;
        width: 100%;

        color: var(--white);

        display: flex;
        align-items: center;
        justify-content: start;

        &-box {
            position: relative;
            z-index: 5;

            max-width: 780px;

            display: flex;
            flex-direction: column;
            gap: 20px;

            :deep(span svg path) {
                fill: var(--yellow);
            }
        }

        &-title {
            font-size: 24px;

            margin-bottom: 20px;
        }

        &-list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            &_item {
                display: flex;
                gap: 12px;
                font-weight: 300;

                & span {
                    color: var(--yellow);
                }
            }
        }
    }

    &__bg-image {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 80vh;
        object-fit: cover;

        &_blur {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            width: 100%;
            height: 80vh;

            background: linear-gradient(89.98deg, #000000 0.01%, rgba(0, 0, 0, 0.79) 23.86%, rgba(0, 0, 0, 0) 69.13%);
        }
    }

}
</style>