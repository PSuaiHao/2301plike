<template>
    <div class="shop">
        <van-empty description="登录后才能看到您的购物车">
            <van-button round type="success" class="bottom-button" @click="$router.push('/login')">去登录</van-button>
        </van-empty>
        <mytab></mytab>
    </div>
</template>
<script lang="ts" setup>
import mytab from '@/components/mytab.vue';
</script>
<style scoped lang="scss"></style>