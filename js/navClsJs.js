/**
 * Created by Administrator on 2015/3/18.
 */
$(function(){
    var currentPos=$(".J_pos").attr("data-title");//获取当前位置
    $(".nav a").each(function(){//遍历栏目导航
        if(currentPos==$(this).text()){//当前位置和栏目导航一致时
            $(this).parent().addClass("current");//当前栏目导航加类名current;
            return false;//跳出最近的循环
        }

    });
    if($(".dq2")){
        var currentsubPos=$(".dq2").text();
        $(".product-wrap a").each(function(){
            if(currentsubPos==$(this).attr("title")){
                $(this).parent().addClass("current");
                return false;
            }

        });
    }



});
