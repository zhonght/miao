<template>
    <div>
        <div class="banner">
            <div id="banner_box" class="box_swipe">
                <ul>
                    <li>
                        <router-link to="/index">
                            <img data-original="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491822278844&di=0bcbd6e1c06761030cd37915be3a5e13&imgtype=0&src=http%3A%2F%2Fwww.nitutu.com%2Fuploads%2Fallimg%2F160121%2F1122405P1-5.jpg"
                                 style='width:100%;' class="imgLoadingLater"/>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/index">
                            <img data-original="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491822278844&di=0bcbd6e1c06761030cd37915be3a5e13&imgtype=0&src=http%3A%2F%2Fwww.nitutu.com%2Fuploads%2Fallimg%2F160121%2F1122405P1-5.jpg"
                                 style='width:100%;' class="imgLoadingLater"/>
                        </router-link>
                    </li>
                </ul>
                <ol>
                    <li class="on"></li>
                    <li></li>
                </ol>
            </div>
        </div>

        <div class="row title">
            <span>热门</span>
        </div>
        <div class="row hot-list">
            <div v-for="item in hot_list">
                <router-link to="/goods">
                    <img  v-bind:data-original=item.src class="imgLoadingLater"/>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import  '../../assets/js/swipe.js';

    export default {
        data () {
            return {
                author: "cart",
                hot_list: [
                    {src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491822278844&di=0bcbd6e1c06761030cd37915be3a5e13&imgtype=0&src=http%3A%2F%2Fwww.nitutu.com%2Fuploads%2Fallimg%2F160121%2F1122405P1-5.jpg"},
                    {src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491822278844&di=0bcbd6e1c06761030cd37915be3a5e13&imgtype=0&src=http%3A%2F%2Fwww.nitutu.com%2Fuploads%2Fallimg%2F160121%2F1122405P1-5.jpg"},
                ],
                item: {
                    src: 11
                }
            }
        },
        mounted(){
            $(function () {
                _imgLoading();
                new Swipe($('#banner_box')[0], {
                    speed: 500,
                    auto: 3000,
                    callback: function () {
                        var lis = $(this.element).next("ol").children();
                        lis.removeClass("on").eq(this.index).addClass("on");
                    }
                });
            });
        },
        created: function () {

        }
    }
</script>

<style>
</style>