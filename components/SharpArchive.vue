<script setup>
 defineProps({
    findArchiveComunited: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <div class="mt-[150px] flex flex-col items-center space-y-[40px]">
        <h2
            class="text-[#505050] md:text-[50px] text-[40px] md:leading-[60px] leading-[50px] max-w-[1032px] text-center font-bold">
            {{ findArchiveComunited.title }}</h2>
        <p class="text-[#505050] p_tag_one text-center">{{ findArchiveComunited.description }}</p>
    </div>
</template>
<style scoped>
.space-y-\[40px\]>:not([hidden])~:not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-bottom: calc(40px* var(--tw-space-y-reverse));
    margin-top: calc(40px*(1 - var(--tw-space-y-reverse)));
}
@media (min-width: 1280px) {
    .p_tag_one {
        font-size: 1.25rem;
        line-height: 1.75rem;
    }
}
</style>