<template>
    <div>
        <div class="banner">
            <div id="banner_box" class="box_swipe">
                <ul>
                    <li v-for="item in banner_list" >
                        <router-link to="/index">
                            <img v-bind:data-original=item.src  style='width:100%;' class="imgLoadingLater"/>
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
            <div v-for="item in hot_list" class="hot-item">
                <router-link to="/goods">
                    <img  v-bind:data-original=item.imgurl class="imgLoadingLater"/>
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
                banner_list:[
                    {id:"1",title:"12",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491822278844&di=0bcbd6e1c06761030cd37915be3a5e13&imgtype=0&src=http%3A%2F%2Fwww.nitutu.com%2Fuploads%2Fallimg%2F160121%2F1122405P1-5.jpg"},
                    {id:"1",title:"12",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491822278844&di=0bcbd6e1c06761030cd37915be3a5e13&imgtype=0&src=http%3A%2F%2Fwww.nitutu.com%2Fuploads%2Fallimg%2F160121%2F1122405P1-5.jpg"},
                ],
                hot_list: [],
                item: {
                    src: 11
                }
            }
        },
        mounted(){
            var _self = this;
            $(function () {
                $.ajax({
                    type:"GET",
                    url:"http://wangyi.butterfly.mopaasapp.com/news/api",
                    data:{type:"war",page:"1",limit:"10"},
                    dataType:"json",
                    success:function(data){
                        _self.hot_list = data.list;
                        setTimeout(function(){
                            $("img.imgLoadingLater").lazyload({
                                threshold: 100,
                                effect: "fadeIn"
                            });
                        },100);

                    },
                    error:function(){
                    }
                });
//

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

    .hot-list{
        overflow: hidden;
    }
    .hot-list .hot-item {
        width: 48%;
        margin: 2px 1%;
        height: 100px;
        float: left;
        background: #ffffff;
        overflow: hidden;
        border-radius: 10px;
    }
    .hot-list a {
        display: block;
        float: left;
        margin: 3px;
        text-align: center;
    }
    .hot-list .hot-item a img{
        width: 100%;
        border-radius: 10px;
    }

</style>