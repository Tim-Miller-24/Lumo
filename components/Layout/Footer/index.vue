<template>
    <footer class="footer">
        <div class="footer__main container">
            <div class="footer__about">
                <NuxtLink to="/">О компании</NuxtLink>
                <NuxtLink to="/">Контакты</NuxtLink>
                <NuxtLink to="/">Услуги</NuxtLink>
                <NuxtLink to="/">Портфолио</NuxtLink>
                <NuxtLink to="/">Инвесторам</NuxtLink>
                <NuxtLink to="/">Отзывы</NuxtLink>
            </div>

            <div class="footer__info">
                <div>
                    <h4 class="footer__info-title">офис</h4>
                    <p class="footer__info-desc">г. Санкт- Петербург, Аптекарская набережная, д. 6</p>
                </div>
                <div>
                    <h4 class="footer__info-title">график работы</h4>
                    <p class="footer__info-desc">ПН-ПТ 10:00-18:00</p>
                </div>
            </div>

            <div class="footer__links">
                <NuxtLink to="/">
                    <img src="@/assets/images/logo.png" alt="" class="footer__links-logo">
                </NuxtLink>
                <NuxtLink to="tel:+7 (812) 209-50-79">
                    <UIIcon name="phone" />
                    <p>+ 7 (812) 209-50-79</p>
                </NuxtLink>
                <NuxtLink to="mailto:hello@lumo.spb.ru">
                    <UIIcon name="sms" />
                    hello@lumo.spb.ru
                </NuxtLink>
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
        display: flex;
        flex-direction: column;

        gap: 48px;

        max-width: 250px;
        

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