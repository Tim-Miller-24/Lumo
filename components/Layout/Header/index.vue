<template>
    <header class="header">
        <div class="header__content container">
            <NuxtLink to="/">
                <img src="@/assets/images/logo.png" alt="" class="header__logo">
            </NuxtLink>
    
            <nav class="header__navbar">
                <ul class="header__navbar-list">
                    <li class="header__navbar-list_item"> <NuxtLink to="/">Услуги </NuxtLink> </li>
                    <li class="header__navbar-list_item"> <NuxtLink to="/">Портфолио </NuxtLink> </li>
                    <li class="header__navbar-list_item"> <NuxtLink to="/">О компании </NuxtLink> </li>
                    <li class="header__navbar-list_item"> <NuxtLink to="/">Контакты </NuxtLink> </li>
                </ul>
            </nav>
    
            <NuxtLink class="header__phone" to="tel:+7 999 000 00 00">
                <UIIcon name="phone" />
                <p>+ 7 999 000 00 00</p>
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

    backdrop-filter: blur(80px);

    &__content {
        padding: 12px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__navbar-list {
        display: flex;
        gap: 37px;
    }

    &__phone {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>