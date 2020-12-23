<template>
    <div class="Front">
        <h1>{{ message }}</h1>
        <h1>{{ countku }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Front',
    props: {
        message: String,
        countku: Number
    }
}
</script>

<style scoped>

</style>