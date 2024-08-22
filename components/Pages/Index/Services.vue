<template>
    <div class="services">
        <div class="container">
            <div class="services__header">
                <h3 class="services__title">[услуги]</h3>
                <NuxtLink to="/" class="services__link">Все проекты
                    <UIIcon name="arrow-diagonal" />
                </NuxtLink>
            </div>

            <div class="services__box">
                <div class="services__item">
                    <p class="services__count">01</p>
                    <h3 class="services__name">Технический заказчик</h3>
                    <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt </p>
                    <UIButton class="services__button">Оставить заявку
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
                    <UIButton class="services__button">Оставить заявку
                        <UIIcon name="arrow-diagonal" />
                    </UIButton>
                </div>
                <div class="services__devider"></div>
                <div class="services__item">
                    <p class="services__count">03</p>
                    <h3 class="services__name">Управляющая компания</h3>
                    <p class="services__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod </p>
                    <UIButton class="services__button">Оставить заявку
                        <UIIcon name="arrow-diagonal" />
                    </UIButton>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.services {
    padding: 120px 0;

    background: var(--secondaryBg);

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
        margin-top: 20px;
    }

    &__devider {
        display: flex;
        height: 240px;
        border: 1px dashed #FFFFFF1A;
    }
}
</style>