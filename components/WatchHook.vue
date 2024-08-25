<template>
  <div>
    <p>Serch Now </p>
    <input type="text" v-model="watchText" class="border-[2px] border-black p-3" placeholder="Search Item">
    <input type="text" v-model="counter" class="border-[2px] border-black p-3">
    <!-- all meals -->
    <div v-if="data?.meals?.length > 0" class="grid grid-cols-5 gap-3">
      <div v-for="meals of data?.meals" :key="meals.idMeal" >
        <div>
          <h3>{{ meals.strMeal }}</h3>
          <img :src="meals.strMealThumb" alt="">
        </div>
      </div>
    </div>
    <div v-else="data?.meals?.length==null">
      <h2>Not Avilable Meals</h2>
    </div>
  </div>
</template>

<script setup>
const watchText = ref("");
const counter=ref(0)
let data = ref(null);
// watch function

watch(watchText, async () => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${watchText.value}`);
  data.value = await response.json();
  console.log("meals data", data.value);
}, { immediate: true });

// watchEffect
// watchEffect(async()=>{
//   const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${watchText.value}`);
//   data.value = await response.json();
//   console.log("check Meals",data)
//   console.log("check ccounter",counter)
// })
</script>

<!-- 
 -->