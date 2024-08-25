<script setup>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';

const show = ref(false)
const store = useStore();


const cards = computed(() => store.getters.allCards);



function removeCard(id) {
    store.dispatch('deleteCard', id);
}
const cardHandler = () => {
    toggle.value = !toggle.value
}
</script>
<template>
    <div class=" bg-gray-800 text-white py-3">
        <div class="container mx-auto space-x-3 flex justify-between">
            <div class="space-x-3">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/users">All User</NuxtLink>
                <NuxtLink to="/vuecore">Vue Core Concept</NuxtLink>
            </div>

            <button @click="show = !show" class="bg-red-500 text-white px-4 rounded-full">{{ cards.length }}</button>
            <div class="absolute top-0 right-0  text-white ">
                <Transition :duration="850" name="nested">
                    <div v-show="show" class="outer bg-black h-[100vh] p-4">
                        <div class="inner">
                            <div>
                                <ul>
                                    <button @click="show = !show" class="text-red-600 text-3xl">x</button>
                                    <li v-for="card in cards" :key="card.id"
                                        class="py-2 border-[1px] border-black p-3 flex justify-between">
                                        {{ card.name }} - {{ card.email }} - {{ card?.phone }}
                                        <button @click="removeCard(card.id)" class="bg-red-500 px-3">Delete</button>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
            <!-- add card  -->


        </div>
    </div>
</template>


<style>
.nested-enter-active,
.nested-leave-active {
    transition: all 0.5s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {

    opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}
</style>