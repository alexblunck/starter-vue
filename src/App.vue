<template>
    <div id="app">
        <h1>Hello from {{ name }}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'starter-vue'
            }
        },
        created() {
            console.log('Do sourcemaps work?')
        }
    }
</script>

<style lang="scss">
    #app {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-weight: 300;
    }
</style>
