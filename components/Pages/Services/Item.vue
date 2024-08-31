<template>
    <div class="item">
        <img data-src="@/assets/images/carousel-0.png" class="item__image" v-lazy-load alt="">

        <div class="item__text">
            <div class="item__info">
                <p>
                    Осуществление организации, планирования и управления строительством, направленные на своевременное и надлежащее выполнение всеми участниками проекта обязательств с целью успешной реализации проекта. 
                </p>
                <UIButton color="black" class="item__button">Оставить заявку
                    <UIIcon name="arrow-diagonal" />
                </UIButton>
            </div>

            <div class="item__works">
                <h3 class="item__works-title">Виды работ</h3>

                <ul class="item__works-list">
                    <li v-for="(item, index) in tempArray" :key="index"> 
                        <span> {{ index + 1 }} . </span>    
                        <p> {{ item.text }} </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const tempArray = ref<IAsideMenuItem[]>([
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit',
        link: '/',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit',
        link: '/',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit',
        link: '/',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit',
        link: '/',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit',
        link: '/',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit',
        link: '/',
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit',
        link: '/',
    },
])

</script>

<style lang="scss" scoped>
.item {
    width: 100%;
    font-family: 'Aeroport';

    &__image {
        width: 100%;
        object-fit: cover;
        max-height: 425px;

        margin-bottom: 40px;
    }

    &__text {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 60px;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 32px;

        & p {
            color: var(--grayText);
            font-weight: 300;
        }
    }

    &__works {
        &-title {
            font-family: 'Bicubik';
            font-size: 24px;
            color: var(--yellow);

            margin-bottom: 10px;
        }

        &-list {
            display: flex;
            flex-direction: column;
            gap: 10px;

            & li {
                display: flex;
                gap: 10px;

                font-weight: 300;

                & span {
                    min-width: 19px;
                }
            }
        }
    }
}
</style>