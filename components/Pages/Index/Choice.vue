<template>
    <div class="choice container">
        <h3 class="choice__title">[о компании]</h3>
        <!-- собственный завод металлоконструкций 
- собственный парк спецтехники 
- высококвалифицированный штат инженерно-технических сотрудников 
- большой опыт в реализации задач -->
        <div class="choice__info">
            <div class="choice__item">
                <UIIcon name="shield" class="choice__item-icon" />
                <p class="choice__item-title">Проектное бюро</p>
                <p class="choice__item-description">собственное проектное бюро </p>
            </div>
            <div class="choice__item">
                <UIIcon name="referals" class="choice__item-icon" />
                <p class="choice__item-title">Завод металлоконструкций</p>
                <p class="choice__item-description">собственный завод металлоконструкций </p>
            </div>
            <div class="choice__item">
                <UIIcon name="shield" class="choice__item-icon" />
                <p class="choice__item-title">Парк спецтехники</p>
                <p class="choice__item-description">собственный парк спецтехники </p>
            </div>
            <div class="choice__item">
                <UIIcon name="expand_content" class="choice__item-icon" />
                <p class="choice__item-title">квалифицированный штат</p>
                <p class="choice__item-description">высококвалифицированный штат инженерно-технических сотрудников  </p>
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