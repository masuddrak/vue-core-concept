<script>
export default {
    data() {
        return {
            name: "Liza Bundo",
            status: "active",
            language: ["bangla", "english", "hindi"],
        }
    }
}
</script>

<template>
    <h3 class="text-2xl">{{ name }}</h3>
    <p v-if="status">is active User</p>
    <p v-else-if="status=='active'">is active User</p>
    <p></p>
</template>

<style></style>