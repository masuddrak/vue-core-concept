<script setup>
const { data: users } = useFetch("https://jsonplaceholder.typicode.com/users");
console.log("user data", users)

</script>
<template>
    <div>
        <h3>All User List</h3>
        <div class="grid grid-cols-3 gap-4">
            <div v-for="user of users" :key="user.id">
                <User :user="user" :name="'sakla'"></User>
            </div>
        </div>
    </div>
</template>
<style></style>