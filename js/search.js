

//设置Logo背景不断变化
// function changeLogoBg(){
    var colors = new Array([62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]);
    var step = 0;
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.002;

    function updateGradient()
    {
        // if ( $===undefined ) return;
  
        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb("+r1+","+g1+","+b1+")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb("+r2+","+g2+","+b2+")";

        $('#logo_box').css({
            background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
            background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
          
            step += gradientSpeed;
            if ( step >= 1 ){

                step %= 1;
                colorIndices[0] = colorIndices[1];
                colorIndices[2] = colorIndices[3];
            
                //pick two new target color indices
                //do not pick the same as the current one
                colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
                colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length; 
            }
    }
setInterval(updateGradient,1);
// }

//显示和隐藏其他搜索方式一
function showOtheSearchBtn() {
    document.getElementById("sougou_search").style.cssText = 'position: relative; top: -48px; left: 0px; background-image: url(./img/sougou_search_btn.png); z-index: 5;';
    document.getElementById("qihu360_search").style.cssText = 'position: relative; top: -72px; left: 44px; background-image: url(./img/360_search_btn.png); z-index: 5;';
    document.getElementById("google_search").style.cssText = 'position: relative; top: -114px; left: 64px; z-index: 5;';
    document.getElementById("bing_search").style.cssText = 'position: relative; top: -198px; left: 44px; background-image: url(./img/bing_search_btn.png); z-index: 5;';
    document.getElementById("zhihu_search").style.cssText = 'position: relative; top: -138px; left: 0px; background-image: url(./img/zhihu_search_btn.png); z-index: 5;';
}

function hideOtheSearchBtn() {
    document.getElementById("zhihu_search").style.cssText = 'position: relative; top: -198px; left: 0px; background-image: url(./img/zhihu_search_btn.png); z-index: 3; transition:top 0.5s,left 0.5s;-moz-transition:top 0.5s,left 0.5s; -webkit-transition:top 0.5s,left 0.5s; -o-transition:top 0.5s,left 0.5s; ';
    document.getElementById("bing_search").style.cssText = 'position: relative; top: -240px; left: 0px; background-image: url(./img/bing_search_btn.png); z-index: 3; transition:top 0.5s,left 0.5s;-moz-transition:top 0.5s,left 0.5s; -webkit-transition:top 0.5s,left 0.5s; -o-transition:top 0.5s,left 0.5s; ';
    document.getElementById("google_search").style.cssText = 'position: relative; top: -114px; left: 0px; z-index: 3; transition:top 0.5s,left 0.5s;-moz-transition:top 0.5s,left 0.5s; -webkit-transition:top 0.5s,left 0.5s; -o-transition:top 0.5s,left 0.5s; ';
    document.getElementById("qihu360_search").style.cssText = 'position: relative; top: -30px; left: 0px; background-image: url(./img/360_search_btn.png); z-index: 3; transition:top 0.5s,left 0.5s;-moz-transition:top 0.5s,left 0.5s; -webkit-transition:top 0.5s,left 0.5s; -o-transition:top 0.5s,left 0.5s; ';
    document.getElementById("sougou_search").style.cssText = 'position: relative; top: 12px; left: 0px; background-image: url(./img/sougou_search_btn.png); z-index: 3; transition:top 0.5s,left 0.5s;-moz-transition:top 0.5s,left 0.5s; -webkit-transition:top 0.5s,left 0.5s; -o-transition:top 0.5s,left 0.5s; ';
}


//执行搜索
function AoosooSearch(){
    // var obj = window.event.target;//获取触发事件的元素对象
    var eventSourceId = window.event.target.id;//获取触发事件的元素对象的id
    //获取元素
    // alert("The id of the triggered element: "+ eventSourceId);
    var keyword = document.getElementById("AooSooSearchInput").value;

    switch (eventSourceId)
    {
        case "baidu_search":
            window.open('https://www.baidu.com/s?wd='+keyword,"_blank");
        break;

        case "sougou_search":
            window.open('https://www.sogou.com/web?query='+keyword,"_blank");
        break;

        case "qihu360_search":
            window.open('https://www.so.com/s?q='+keyword,"_blank");
        break;

        case "google_search":
            window.open('https://www.google.com.sg/search?q='+keyword,"_blank");
        break;

        case "bing_search":
            window.open('https://cn.bing.com/search?q='+keyword,"_blank");
        break;

        case "zhihu_search":
            window.open('https://www.zhihu.com/search?type=content&q='+keyword,"_blank");
        break;
        default:
        window.open('https://www.baidu.com/s?wd='+keyword,"_blank");
    }
  
    // window.location.href = 'https://www.baidu.com/s?wd='+keyword ;
}

//监听键盘的Enter事件

document.onkeydown=function(event){   
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13){ // enter 键   
        //要做的事情  
        AoosooSearch(); 
        // alert("按 Enter");   
    } 
}



//隐藏其他搜索方式二
function hideOtheSearchBtn1() {
    setTimeout(function() {
        document.getElementById("zhihu_search").style.cssText = 'visibility: hidden; position: relative; top: -138px; left: 0px; background-image: url(./img/zhihu_search_btn.png);';
        // alert("gggg");
    }, 30);

    setTimeout(function() {
        document.getElementById("bing_search").style.cssText = 'visibility: hidden; position: relative; top: -198px; left: 44px; background-image: url(./img/bing_search_btn.png);';
        // alert("gggg");
    }, 60);

    setTimeout(function() {
        document.getElementById("google_search").style.cssText = 'visibility: hidden; position: relative; top: -114px; left: 64px;';
        // alert("gggg");
    }, 90);

    setTimeout(function() {
        document.getElementById("qihu360_search").style.cssText = 'visibility: hidden; position: relative; top: -72px; left: 44px; background-image: url(./img/360_search_btn.png);';
        // alert("gggg");
    }, 120);

    setTimeout(function() {
        document.getElementById("sougou_search").style.cssText = 'visibility: hidden; position: relative; top: -48px; left: 0px; background-image: url(./img/sougou_search_btn.png);';
        // alert("gggg");
    }, 150);
}

