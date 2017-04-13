/**
 * Created by Administrator on 2017/4/13.
 */

function _imgLoading(){
    $("img.imgLoadingLater").lazyload({
        threshold: 100,
        effect: "fadeIn"
    });
}


