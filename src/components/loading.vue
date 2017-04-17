<template>
    <div id="loading">
        <img src="../assets/images/loading.gif">
    </div>
</template>
<script>
    export default {
        created: function () {
            $(function(){
                setTimeout(function(){
                    $("#loading").fadeOut();
                },500);
            });
        }
    }
</script>

<style lang="scss">

    #loading {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 666;
        background: #66CEFF;
    }

    #loading img {
        width: 138px;
        height: 124px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -90px 0 0 -69px;
    }
</style>
