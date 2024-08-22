<template>
    <div class="watch" @mousemove="moveElement">
        <img :data-src="watchImage" class="watch__image" v-lazy-load alt="">

        <div class="watch__gray-bg"></div>

        <UIIcon name="play_arrow" class="play-button" />

        <div class="watch__button" ref="follower">
            <div class="watch__button-outline">
                <p>Смотреть видео</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import watchImage from '@/assets/images/watch-banner.png';

const follower = ref<HTMLElement | null>(null);

function moveElement(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const followerElement = follower.value;

    if (followerElement) {
        // Вычисляем положение курсора относительно блока
        const x = event.clientX - containerRect.left;
        const y = event.clientY - containerRect.top;

        // Позиция элемента с учетом его размера
        const followerWidth = followerElement.offsetWidth;
        const followerHeight = followerElement.offsetHeight;

        // Проверяем, чтобы элемент не выходил за пределы блока
        const newX = Math.max(followerWidth / 2, Math.min(containerRect.width - followerWidth / 2, x));
        const newY = Math.max(followerHeight / 2, Math.min(containerRect.height - followerHeight / 2, y));

        // Устанавливаем позицию элемента
        followerElement.style.left = `${newX}px`;
        followerElement.style.top = `${newY}px`;
    }
}
</script>

<style lang="scss" scoped>
.watch {
    position: relative;
    height: 200px;

    &__image {
        position: absolute;
        z-index: 10;

        max-height: 200px;
        width: 100%;

        object-fit: cover;

        object-position: 50% 64%;
    }

    &__gray-bg {
        position: absolute;
        z-index: 11;
        height: 200px;
        width: 100%;
        background: #00000066;
    }

    &__button {
        position: absolute;
        cursor: pointer;
        top: 80px;
        right: 20%;

        width: 120px;
        height: 120px;
        background: transparent;

        border-radius: 50%;
        border: 1px dashed var(--yellow);

        display: flex;
        align-items: center;
        justify-content: center;


        transform: translate(-50%, -50%);


        &-outline {
            position: absolute;
            background: var(--yellow);
            border-radius: 50%;
            width: 100px;
            height: 100px;

            display: flex;
            align-items: center;
            justify-content: center;

            & p {
                color: var(--black);
                max-width: 80px;
                text-align: center;
                font-size: 16px;
                font-weight: 400;
                font-family: 'Aeroport';
            }
        }
    }
}

.play-button {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #9f9d9a;
    display: flex;
    width: auto;
    border-radius: 50%;

    border: 1px dashed var(--white);

    padding: 14px;
    padding-left: 17px;

    :deep svg path {
        fill: var(--white) !important;
    }

    &:hover {
        background: #9f9d9ad4;

        :deep svg path {
            fill: #ffffffd4 !important;
        }
    }
}
</style>