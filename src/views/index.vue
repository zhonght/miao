<template>
        <div class="banner" >
            <div  id="banner_box" class="box_swipe">
                <ul>
                    <li>
                        <a href="#">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491822278844&di=0bcbd6e1c06761030cd37915be3a5e13&imgtype=0&src=http%3A%2F%2Fwww.nitutu.com%2Fuploads%2Fallimg%2F160121%2F1122405P1-5.jpg"
                                 style='width:100%;'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491822278844&di=0bcbd6e1c06761030cd37915be3a5e13&imgtype=0&src=http%3A%2F%2Fwww.nitutu.com%2Fuploads%2Fallimg%2F160121%2F1122405P1-5.jpg"
                                 style='width:100%;'/>
                        </a>
                    </li>
                </ul>
                <ol>
                    <li class="on"></li>
                    <li></li>
                </ol>
            </div>
        </div>

</template>

<script type="text/javascript">
    import  '../assets/js/swipe.js';

export default {
  data () {
    return {
    }
  },
    mounted(){
        new Swipe($('#banner_box')[0], {
            speed: 500,
            auto: 3000,
            callback: function () {
                var lis = $(this.element).next("ol").children();
                lis.removeClass("on").eq(this.index).addClass("on");
            }
        });
    },
    created: function() {
//        console.log(2);
//        new Swipe($('#banner_box')[0], {
//            speed: 500,
//            auto: 3000,
//            callback: function () {
//                var lis = $(this.element).next("ol").children();
//                lis.removeClass("on").eq(this.index).addClass("on");
//            }
//        });
//        console.log(3);
    }
}
</script>

<style>
</style>