<template>
    <div id="app">
        <v-loading></v-loading>
        <router-view></router-view>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import  './assets/js/jquery.js';
    import  './assets/js/LazyLoad.js';
//    import  './assets/js/functions.js';

    import _footer from './components/footer.vue';
    import _loading from './components/loading.vue';

    export default {
        name: 'app',
        data () {
            return {
            }
        },
        components: {
            'v-footer':_footer,
            'v-loading':_loading
        },
        created: function () {
        },
        methods:{
        }
    }
</script>

<style lang="scss">
    @import './assets/iconfont/iconfont.css';
    @import './assets/css/common.css';
</style>
