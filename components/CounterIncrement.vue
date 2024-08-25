<template>
    <div>
      <button @click="cardHandler" class="bg-slate-600 text-white px-4 rounded-full"> {{ cards.length }}</button>
      <ul v-if="toggle===true">
        <li v-for="card in cards" :key="card.id" class="my-2 border-[1px] border-black p-3 flex justify-between">
          {{ card.name }} - {{ card.email }} - {{ card.phone }}
          <button @click="removeCard(card.id)" class="bg-red-500 px-3">Delete</button>
        </li>
      </ul>
  
      <h3>Add a New Card</h3>
      <form @submit.prevent="submitCard">
        <input v-model="newCard.name" placeholder="Name" required />
        <input v-model="newCard.email" placeholder="Email" required />
        <input v-model="newCard.phone" placeholder="Phone" required />
        <button type="submit" class="bg-red-500 px-3">Add Card</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { ref, computed } from 'vue';
  
  const store = useStore();
  
  const newCard = ref({
    name: '',
    email: '',
    phone: ''
  });
  const toggle=ref(false)
  const cards = computed(() => store.getters.allCards);
  console.log("toggoledgffffffff",toggle.value)
  
  function submitCard() {
    store.dispatch('addCard', newCard.value);
    newCard.value = { name: '', email: '', phone: '' }; // Reset the form
  }
  
  function removeCard(id) {
    store.dispatch('deleteCard', id);
  }
  const cardHandler=()=>{
    toggle.value=!toggle.value
  }
  </script>
  