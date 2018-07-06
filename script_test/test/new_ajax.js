function ajax(url, fuSucc, fnFaild) {
    //创建ajax对象
    /*              //IE6以上
                  var oAjax=new XMLHttpRequest();
                  //IE6
                  var oAjax=new ActiveXObject('Microsoft.XMLHTTP');*/

    var oAjax = null;
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    } else {
        oAjax = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // alert(oAjax)
    //连接服务器
    //open(方法,url,是否是异步)
    oAjax.open('GET', './note.txt', true);
    //方法请求
    oAjax.send();
    //接收返回
    oAjax.onreadystatechange = function () {
        if (oAjax.readyState == 4) {
            if (oAjax.status == 200) {
                // alert('成功:' + oAjax.responseText);
                fuSucc(oAjax.responseText);
            } else {
                // alert('失败');
                if (fnFaild) {
                    fnFaild();
                }
            }
            ;
        }
        ;

    };
};