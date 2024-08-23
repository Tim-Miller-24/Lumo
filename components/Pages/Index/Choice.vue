<template>
    <div class="choice container">
        <h3 class="choice__title">[о компании]</h3>

        <div class="choice__info">
            <div class="choice__item">
                <UIIcon name="shield" class="choice__item-icon" />
                <p class="choice__item-title">8 лет опыта</p>
                <p class="choice__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt </p>
            </div>
            <div class="choice__item">
                <UIIcon name="referals" class="choice__item-icon" />
                <p class="choice__item-title">90+ партнеров</p>
                <p class="choice__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt </p>
            </div>
            <div class="choice__item">
                <UIIcon name="expand_content" class="choice__item-icon" />
                <p class="choice__item-title">23 проекта</p>
                <p class="choice__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt </p>
            </div>
            <div class="choice__item">
                <UIIcon name="shield" class="choice__item-icon" />
                <p class="choice__item-title">8 лет опыта</p>
                <p class="choice__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt </p>
            </div>
            <div class="choice__item">
                <UIIcon name="referals" class="choice__item-icon" />
                <p class="choice__item-title">90+ партнеров</p>
                <p class="choice__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt </p>
            </div>
            <div class="choice__item">
                <UIIcon name="expand_content" class="choice__item-icon" />
                <p class="choice__item-title">23 проекта</p>
                <p class="choice__item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.choice {
    padding-top: 60px !important;
    padding-bottom: 60px !important;

    display: flex;
    align-items: start;
    justify-content: space-between;

    &__title {
        @include h2;
        text-wrap: nowrap;
        flex-grow: 1;
    }

    &__info {
        flex-grow: 1;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 40px;
    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: start;

        max-width: 240px;

        &-title {
            font-size: 24px;
            font-weight: 400;
            line-height: 29.71px;
            text-align: left;

            margin-top: 20px;
            margin-bottom: 12px;
        }

        &-description {
            font-family: 'Aeroport';
            font-size: 16px;
            font-weight: 300;
            line-height: 21.87px;
            text-align: left;
            color: var(--grayText);
        }

        &-icon {

            &:deep(svg) {
                height: 31px;
                width: 25px;
            }

            &:deep(svg path){
                fill: var(--yellow);
            }
        }
    }
}
</style>