<template>
    <div class="consult">
        <div class="container consult__content">
            <h4 class="consult__title">закажите бесплатную
                <span>консультацию</span>
            </h4>

            <form class="consult__form">
                <UIInput placeholder="Имя Фамилия" v-model="userFullName" 
                :icon="!userFullName ? 'person' : ''"></UIInput>

                <UIInput placeholder="Номер телефона" v-model="userMail" 
                :icon="!userMail ? 'call' : ''"></UIInput>

                <UITextarea placeholder="Комментарий" v-model="userComment" 
                :icon="!userComment ? 'mail' : ''"></UITextarea>

                <p class="consult__agree">Нажимая кнопку “Продолжить” Вы принимаете условия <NuxtLink to="/">пользовательского соглашения</NuxtLink> и политики конфиденциальности</p>

                <UIButton color="black"class="services__button">Оставить заявку
                    <UIIcon name="arrow-diagonal" />
                </UIButton>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const userFullName = ref<string>('');
const userMail = ref<string>('');
const userComment = ref<string>('');
</script>

<style lang="scss" scoped>
.consult {
    background: var(--grayBg3);

    padding-top: 70px;
    padding-bottom: 120px;

    &__content {
        display: flex;

        justify-content: space-between;
    }

    &__title {
        font-family: 'Bicubik';
        font-size: 36px;
        font-weight: 400;
        line-height: 43.2px;
        text-align: left;

        & span {
            display: flex;
            color: var(--yellow);
        }
    }

    &__form {
        flex-grow: 1;
        max-width: 520px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        margin-right: 15rem;
    }




    &__agree {
        font-family: 'Aeroport';
        font-weight: 300;
        font-size: 13px;
        color: var(--grayText);

        margin-top: 20px;

        & a {
            font-weight: 400;
            color: var(--black);
        }
    }
}
</style>