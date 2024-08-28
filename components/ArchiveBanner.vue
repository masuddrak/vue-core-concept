<script setup>
import { defineProps } from 'vue'
 defineProps({
    findBanner: {
    type: Object,
    required: true
  }
})

</script>
<template>
    <div class="banner w-full pb-[50px] md:pb-[100px] lg:pb-[113px] text-white">
        <div class="pt-[50px] lg:pt-[132px] px-5 xl:px-[178px]">
            <div class="lg:grid grid-cols-2 gap-6 lg:gap-8 xl:gap-14 2xl:gap-[280px]">
                <div class="space-y-4 max-w-[629px] ">
                    <p class="md:text-[50px] text-[40px] md:leading-[60px] leading-[50px] ">{{ findBanner.title }}</p>
                    <p class="md:text-2xl text-xl ">{{findBanner.subTitle }}</p>
                    <p class="text-[#C2C2C2] md:text-lg text-base">{{ findBanner.description }}</p>
                    <p><CommonBtn></CommonBtn></p>

                </div>
                <!-- video -->

                <video
                    class="rounded-[15px] border-none  mt-28  sm:mt-10  md:mt-10 lg:mt-0 md:max-w[255px] lg:max-w[455px]xl:max-w[655px]"
                    id="vjs_video_753_html5_api" tabindex="-1"
                    src="https://cdn.sharparchive.com/shared/sa-ui-demo.mp4"></video>

            </div>
            <!-- rating section -->

            
                <div class="px-4 flex items-center gap-16 lg:gap-14 xl:gap-0 md:justify-between mx-auto justify-around md:flex-nowrap flex-wrap max-w-[899px] w-full mt-[100px] md:mt-[150px] lg:mt-[237px] ">
                    <div class="space-y-[20px] md:space-y-[40px]  lg:space-y-[71px] lg:w-[171px] lg:h-[140px]">
                        <div class="flex justify-center ">
                            <img src="/public/image/google.svg" alt="" class="w-[40px] h-[40px] lg:w-[69px] lg:h-[69px] ">
                        </div>
                        <div class="flex justify-center">
                            <div class="flex gap-[3.5px]">
                                <span class="text-[20px]">4.7 / 5</span>
                                <div class="flex items-center gap-1">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-[20px] md:space-y-[40px]  lg:space-y-[71px] lg:w-[171px] lg:h-[140px]">
                        <div class="flex justify-center ">
                            <img src="/public/image/download.svg" alt="" class="w-[40px] h-[40px] lg:w-[69px] lg:h-[69px] ">
                        </div>
                        <div class="flex justify-center">
                            <div class="flex gap-[3.5px]">
                                <span class="text-[20px]">4.7 / 5</span>
                                <div class="flex items-center gap-1">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-[20px] md:space-y-[40px]  lg:space-y-[71px] lg:w-[312px] lg:h-[140px]">
                        <div class="flex justify-center ">
                            <img src="/public/image/cat.svg" alt="" class="w-[138px] h-[48px]  lg:w-[238px] lg:h-[56px]  ">
                        </div>
                        <div class="flex justify-center">
                            <div class="flex gap-[3.5px]">
                                <span class="text-[20px]">4.7 / 5</span>
                                <div class="flex items-center gap-1">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                    <img src="/public/image/star.png" class="w-[20px] h-[19px]" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
 
</template>
<style scoped>
.banner {
    background: url(/public/image/banner.png);
    background-color: #222831;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 0 0 100% 100% / 0 0 17% 17%;
}
@media (max-width: 767px) {
    .banner {
        border-radius: 0 0 100% 100% / 0 0 9% 9%;
    }
}


</style>