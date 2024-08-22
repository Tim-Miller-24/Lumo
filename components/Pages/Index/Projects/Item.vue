<template>
    <div class="item">
        <div class="item__image-box">
            <img :data-src="props.item.image" :key="props.item.id" v-lazy-load alt="" class="item__image">

            <span class="item__image-box_tag">
                <UIIcon name="logo" />
            </span>
        </div>

        <div class="item__text-block">
            <h3 class="item__title"> {{ props.item.title }} </h3>

            <p class="item__description"> {{ props.item.description }} </p>

            <NuxtLink :to="props.item.link" class="item__link"> Подробнее <UIIcon name="arrow-diagonal" /> </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    item: {
        type: Object,
        default: {}
    }
})

</script>

<style lang="scss" scoped>
.item {
    display: flex;
    flex-direction: column;
    
    background: var(--secondaryBg);

    gap: 20px;

    max-width: 650px;
    width: 100%;

    padding: 20px;

    &__image-box {
        position: relative;
        height: auto;

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
</style>