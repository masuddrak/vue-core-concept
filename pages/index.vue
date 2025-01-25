<script setup>
import { useRoute } from "nuxt/app";
import { useStore } from "vuex";
import { computed } from "vue";
const route = useRoute();
const store = useStore();
// archive banner
const homeArchive = computed(() =>
  store?.getters?.homeArchive("public-schools-boston")
);

const findpublicSchoolsCard = homeArchive?.archiveSection;
</script>
<template>
  <!-- banner -->
  <div class="max-w-[1920px] mx-auto">
    <ArchiveBanner :findBanner="homeArchive"></ArchiveBanner>
    <div class="px-2 lg:px-5 xl:px-[178px]">
      <ArchiveCardSection
        :findpublicSchoolsCard="homeArchive?.archiveSection"
      ></ArchiveCardSection>
      <ArchiveFormCard></ArchiveFormCard>
      <SharpArchive
        :findArchiveComunited="homeArchive?.archiveComunited"
      ></SharpArchive>
      <CustomersSection></CustomersSection>
      <div class="mt-[130px] pace-y-[20px] lg:space-y-[50px]">
        <h2
          class="text-[#505050] md:text-[50px] text-[40px] md:leading-[60px] leading-[50px] w-full lg:max-w-[1182px] text-center font-bold mx-auto"
        >
          Schedule a Meeting
        </h2>
        <p class="flex justify-center"><CommonBtn></CommonBtn></p>
      </div>
    </div>
  </div>
</template>
