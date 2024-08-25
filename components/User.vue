<script setup>
defineProps({
    user: {
        type: Object,
        default: () => { }
    },

});
import { useStore } from 'vuex';
const store = useStore();

function submitCard(p) {
    console.log(p)
    store.dispatch('addCard', p);
}
</script>
<template>
    <div class="border-[2px] border-black p-4">
        <p> {{ user?.name }}</p>
        <p> {{ user?.email }}</p>
        <div>
            <button @click="() => submitCard(user)" class="bg-green-800 text-white p-3">Add Card</button>
            <button class="bg-green-800 text-white p-3">User Details</button>
        </div>
    </div>
</template>
<style></style>