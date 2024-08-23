<template>
    <header class="header">
        <div class="header__content container">
            <NuxtLink to="/">
                <img src="@/assets/images/logo.png" alt="" class="header__logo">
            </NuxtLink>

            <nav class="header__navbar">
                <ul class="header__navbar-list">
                    <li class="header__navbar-list_item">
                        <NuxtLink to="/">Услуги </NuxtLink>
                        <ul class="header__navbar-list_item-dropdown">
                            <li>
                                <NuxtLink to="/">Технический заказчик </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Проектирование </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Генеральный подряд </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Изготовление металлоконструкций </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Земляные работы / работы нулевого цикла </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Монолитные работы, Монтаж / сбор жби конструкций </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Монтаж металлоконструкций </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Монтаж сэндвич панелей </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Кровельные работы / Монтаж кровли </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Промышленные полы, полимерные покрытия </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Монтаж инженерных сетей </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/">Эксплуатация и последующее обслуживание </NuxtLink>
                            </li>
                        </ul>

                    </li>
                    <li class="header__navbar-list_item">
                        <NuxtLink to="/">Портфолио </NuxtLink>
                    </li>
                    <li class="header__navbar-list_item">
                        <NuxtLink to="/">О компании </NuxtLink>
                    </li>
                    <li class="header__navbar-list_item">
                        <NuxtLink to="/">Контакты </NuxtLink>
                    </li>
                </ul>
            </nav>

            <NuxtLink class="header__phone" to="tel:+7 812 209 50 79">
                <UIIcon name="phone" />
                <p>+ 7 812 209 50 79</p>
            </NuxtLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    position: fixed;
    z-index: 50;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;

    color: var(--white);

    background: rgb(4, 4, 4);
    background: linear-gradient(90deg, rgb(4, 4, 4) 0%, rgb(65, 65, 65) 100%);

    &__content {
        padding: 12px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    &__navbar-list {
        display: flex;
        align-items: center;
        gap: 37px;

        &_item {
            position: relative;
            display: flex;
            align-items: center;

            height: 40px;

            &:hover {
                .header__navbar-list_item-dropdown {
                    display: flex;
                }
            }

            &-dropdown {
                position: absolute;
                top: 35px;
                display: none;

                padding: 5px 15px;

                background: rgb(48, 48, 48);
                background: linear-gradient(90deg, rgba(48, 48, 48, 1) 0%, rgba(59, 59, 59, 1) 100%);

                -webkit-box-shadow: inset 0px -48px 41px -31px rgba(0, 0, 0, 0.61);
                -moz-box-shadow: inset 0px -48px 41px -31px rgba(0, 0, 0, 0.61);
                box-shadow: inset 0px -48px 41px -31px rgba(0, 0, 0, 0.61);

                flex-direction: column;

                width: 450px;

                overflow-y: scroll;

                & li {
                    padding-top: 5px;
                    padding-bottom: 5px;



                    :hover {
                        color: var(--yellow);

                        &::before {
                            content: '•';
                            color: var(--yellow);
                            padding-right: 10px;
                        }
                    }
                }

                &::-webkit-scrollbar {
                    width: 5px;
                    display: none;
                }

                &::-webkit-scrollbar-track {
                    background: #bbbbbb;
                    /* Цвет фона дорожки */
                    border-radius: 6px;
                    /* Радиус закругления */
                }

                &::-webkit-scrollbar-thumb {
                    background: #f1f1f1;
                    /* Цвет ползунка */
                    border-radius: 6px;
                    /* Радиус закругления */
                }

                &::-webkit-scrollbar-thumb:hover {
                    background: #5555557b;
                    /* Цвет ползунка при наведении */
                }
            }
        }
    }

    &__phone {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>