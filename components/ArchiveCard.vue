<script setup>
defineProps({
    archive: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div
        class="md:col-span-1 col-span-2 flex flex-col space-y-4 md:items-start items-center md:text-left text-center hover:bg-[#FFFFFF] hover:shadow-2xl p-8 hover:rounded-2xl cursor-pointer">
        <img :src="archive.image"
            class="w-[92px] h-[92px] rounded-full bg-white border-[0.3px] border-[#656565] flex justify-center items-center">
        <h2 class="text-[#505050] text-3xl font-medium !mt-[24px]">{{ archive.title }}</h2>
        <p class="text-[#656565] text-xl">{{ archive.description }}</p>
    </div>
</template>
<style></style>