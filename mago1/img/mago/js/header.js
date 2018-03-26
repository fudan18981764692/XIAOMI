(()=>{
    $("#header").load("header.html",()=>{
        window.addEventListener("scroll",function() {
            console.log("from header");
            var scrollTop =
                document.documentElement.scrollTop
                || document.body.scrollTop;
            var headerTop =
                document.getElementById("header-top");
            //如果scrollTop>=384
            if (scrollTop >= 384)
            //让header-top变为fixed定位，固定在文档显示区顶部
                headerTop.className = "clear fixed";
            else//否则
            //让header-top变回原定位方式
                headerTop.className = "clear";
        } );

    }
})();
