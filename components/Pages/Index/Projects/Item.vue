<template>
    <div class="item">
        <div class="item__image-box" @click="navigateTo(props.item.link, { external: true })">
            <img :data-src="props.item.image" :key="props.item.id" v-lazy-load alt="" class="item__image">

            <span class="item__image-box_tag">
                <UIIcon name="logo" />
            </span>

            <div class="overlay-block">
                <h3 class="overlay-block__title"> {{ props.item.title }} </h3>

                <p class="overlay-block__address"> 
                    <UIIcon name="location" />
                    {{ props.item.address }} 
                </p>

                <p class="overlay-block__area"> 
                    <UIIcon name="maximize" />
                    {{ props.item.area }} 
                </p>

                <NuxtLink :to="props.item.link" class="overlay-block__link"> 
                    Подробнее <UIIcon name="arrow-diagonal" /> 
                </NuxtLink>
            </div>
        </div>

        <!-- <div class="item__text-block">
            <h3 class="item__title"> {{ props.item.title }} </h3>

            <p class="item__description"> {{ props.item.description }} </p>

            <NuxtLink :to="props.item.link" class="item__link"> Подробнее <UIIcon name="arrow-diagonal" /> </NuxtLink>
        </div> -->
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: {}
    }
})

const isShowOverlay = ref<boolean>(false);

</script>

<style lang="scss" scoped>
.item {
    display: flex;
    flex-direction: column;
    
    background: var(--secondaryBg);

    gap: 20px;

    max-width: 450px;
    width: 100%;

    &__image-box {
        position: relative;
        height: auto;

        &:hover {
            cursor: pointer;

            .overlay-block {
                opacity: 1;
            }
        }

        &_tag {
            position: absolute;
            bottom: 12px;
            right: 12px;
        }
    }

    &__text-block {
        display: flex;
        flex-direction: column;

        gap: 12px;
    }

    &__image {
        max-height: 240px;
        width: 100%;

        object-fit: cover;
    }

    &__title {
        font-size: 24px;
    }

    &__description {
        font-family: 'Aeroport';
        font-size: 16px;
        font-weight: 300;
        text-align: left;
        color: var(--grayText);
    }

    &__link {
        display: flex;
        gap: 5px;

        font-family: 'Aeroport';
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        color: var(--yellow);

        :deep(span svg path) {
            fill: var(--yellow)
        }
    }
}

.overlay-block {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    transition: .5s ease;

    opacity: 0;

    padding: 20px;

    background: #f1ed00d7;

    color: var(--black);

    font-family: 'Aeroport';

    &__title {
        font-size: 24px;
        font-weight: 600;
        font-family: 'Bicubik';

        margin-bottom: 15px;
    }

    &__address {
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 500;
        font-size: 16px;
        :deep(span svg path) {
            fill: var(--black)
        }

        margin-bottom: 10px;
    }

    &__area {
        font-weight: 500;
        font-family: 'Bicubik';
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 15px;
        :deep(span svg path) {
            fill: var(--black)
        }
    }

    &__link {
        display: flex;
        align-items: center;
        gap: 5px;

        font-size: 16px;
        font-weight: 500;
        text-align: left;

        color: var(--black);

        :deep(span svg path) {
            fill: var(--black)
        }

        position: absolute;
        bottom: 35px;
    }
}
</style>