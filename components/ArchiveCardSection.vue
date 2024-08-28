<script setup>
defineProps({
    findpublicSchoolsCard: {
    type: Object,
    required: true
  }
})
</script>
<template>
    <section class=" pt-[150px]">
        <div class="">
            <h2
                class="text-[#505050] md:text-[50px] text-[40px] md:leading-[60px] leading-[50px] w-full lg:max-w-[1032px] text-center font-bold mx-auto">
                {{ findpublicSchoolsCard?.mainTitle }}</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-x-[126px] gap-x-12 lg:gap-y-[110px] gap-y-[70px] mt-[110px]">
             <div v-for="archive of findpublicSchoolsCard.cards" :key="archive.image">
                <ArchiveCard :archive="archive"></ArchiveCard>
             </div>  
            </div>
        </div>
    </section>
</template>
<style scoped>
@media (min-width: 1024px) {
    .lg\:gap-y-\[110px\] {
        row-gap: 110px;
    }
}

@media (min-width: 1024px) {
    .lg\:gap-x-\[126px\] {
        -moz-column-gap: 126px;
        column-gap: 126px;
    }
}
</style>