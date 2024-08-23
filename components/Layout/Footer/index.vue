<template>
    <footer class="footer">
        <div class="footer__main container">
            <div class="footer__info">
                <div>
                    <h4 class="footer__info-title">Контакты</h4>
                    <NuxtLink to="tel:+7 (812) 209-50-79" class="footer__info-desc-link">
                        <p>+ 7 (812) 209-50-79</p>
                    </NuxtLink>
                    <NuxtLink to="mailto:hello@lumo.spb.ru" class="footer__info-desc-link">
                        hello@lumo.spb.ru
                    </NuxtLink>
                </div>

                <div>
                    <h4 class="footer__info-title">адрес</h4>
                    <p class="footer__info-desc">г. Санкт- Петербург, Аптекарская набережная, д. 6</p>
                </div>

                <div>
                    <h4 class="footer__info-title">Документы</h4>
                    <NuxtLink to="" class="footer__info-desc-link">
                        СРО
                    </NuxtLink>
                    <NuxtLink to="" class="footer__info-desc-link">
                        Лицензии
                    </NuxtLink>
                </div>

                <div>
                    <h4 class="footer__info-title">график работы</h4>
                    <p class="footer__info-desc">ПН-ПТ 10:00-18:00</p>
                </div>

            </div>
        </div>

        <div class="footer__bottom">
            <div class="footer__bottom-left">
                <NuxtLink to="/">Политика конфиденциальности</NuxtLink>
            </div>

            <div class="footer__bottom-right">
                <p>Сайт создан:</p>
                <NuxtLink to="https://dolinger-web.ru/" target="_blank">Dolinger Web</NuxtLink>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: var(--mainBg);

    color: var(--white);

    &__main {
        display: flex;
        justify-content: space-between;

        padding: 80px 0;
    }

    &__about {
        display: flex;
        flex-direction: column;
        font-family: 'Aeroport';

        gap: 5px;
    }

    &__info {
        // display: grid;
        // grid-template-columns: repeat(2, 1fr);

        display: flex;

        justify-content: space-between;

        width: 100%;

        gap: 48px;

        & div {
            max-width: 300px;
        }


        &-title {
            font-family: 'Bicubik';
            font-size: 24px;
            font-weight: 400;
            line-height: 28.8px;
            text-align: left;

            color: var(--grayText);
        }

        &-desc {
            font-family: 'Aeroport';
            font-size: 16px;
            font-weight: 300;
            line-height: 21.87px;
            text-align: left;

            &-link {
                font-family: 'Aeroport';
                font-size: 16px;
                font-weight: 300;

                display: flex;
                gap: 8px;
                margin-top: 2px;
                margin-bottom: 5px;

                cursor: pointer;
            }
        }
    }

    &__links {
        display: flex;
        flex-direction: column;
        align-items: end;

        gap: 12px;

        & a {
            display: flex;
            align-items: center;
            gap: 9px;
        }

        &-logo {
            margin-bottom: 48px;
        }
    }


    &__bottom {
        max-width: 100vw;
        width: 100%;

        padding: 9px 20px;

        border-top: 1px solid #363636;

        font-family: 'Aeroport';
        font-size: 16px;
        font-weight: 300;
        line-height: 21.87px;
        text-align: left;

        display: flex;
        justify-content: space-between;

        color: var(--grayText);

        &-left {
            display: flex;
        }

        &-right {
            display: flex;
            gap: 4px;
        }
    }
}
</style>