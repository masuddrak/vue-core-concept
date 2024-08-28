<script setup>
import { useRoute } from 'nuxt/app'
import { useStore } from 'vuex';
import { computed } from 'vue';
const route = useRoute()
const store = useStore();
// archive banner
const allCards = computed(() => store?.getters?.allCards);
const findBanner = (allCards?.value).find(card => card.id == route?.params?.id)
// public Schools Cards archiveSection
const findpublicSchoolsCard=findBanner?.archiveSection
// public Schools Cards archiveComunited
const findArchiveComunited=findBanner?.archiveComunited

</script>
<template>
    <!-- banner -->
    <div class="max-w-[1920px] mx-auto">
        <ArchiveBanner :findBanner="findBanner"></ArchiveBanner>
        <div class="px-2 lg:px-5 xl:px-[178px]">
            <ArchiveCardSection :findpublicSchoolsCard="findpublicSchoolsCard"></ArchiveCardSection>
            <ArchiveFormCard></ArchiveFormCard>
            <SharpArchive :findArchiveComunited="findArchiveComunited"></SharpArchive>
            <CustomersSection></CustomersSection>
            <div class="mt-[130px] space-y-[50px]">
                <h2
                    class="text-[#505050] md:text-[50px] text-[40px] md:leading-[60px] leading-[50px] w-full lg:max-w-[1182px] text-center font-bold mx-auto">
                    Schedule a Meeting</h2>
                <p class="flex justify-center"> <button
                        class="text-white font-bold primary-btn text-xl rounded-full flex justify-center items-center px-[40px] py-3 max-h-[50px] mx-auto ">Book
                        A Demo</button></p>
            </div>
        </div>
    </div>
</template>