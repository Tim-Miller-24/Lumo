<template>
    <aside class="aside">
        <ul class="aside__menu">
            <li v-for="(item, index) in props.menu" :key="index" 
            class="aside__menu-item"
            :class="[{'active': +index === +selectedItem}]"
            @click="onClick(+index)"
            >
                <span class="aside__menu-item_index"> 0{{ index + 1 }} </span>

                <p>
                    {{ item.text }}
                </p>
            </li>
        </ul>

        <div class="aside__devider"></div>
    </aside>
</template>

<script setup lang="ts">

const props = defineProps({
    menu: {
        type: Object,
        default: {} as () => IAsideMenuItem,
    }
})

const selectedItem = ref<number>(0);

const onClick = (index: number) => {
    selectedItem.value = index;
}
</script>

<style lang="scss" scoped>
.aside {
    display: flex;
    gap: 30px;

    &__menu {
        font-family: 'Bicubik';
        display: flex;
        flex-direction: column;
        gap: 20px;

        &-item {
            cursor: pointer;

            display: flex;
            gap: 20px;

            font-size: 24px;
            font-weight: 400;
            color: var(--grayText);

            &.active {
                font-size: 36px;
                color: var(--black);

                & span {
                    color: var(--yellow);
                }
            }
        }
    }

    &__devider {
        display: flex;
        height: 100%;
        border: 1px dashed var(--grayText);
    }
}
</style>