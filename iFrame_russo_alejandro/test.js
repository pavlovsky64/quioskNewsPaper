const urlList= ["https://www.abc.com.py/","https://www.ultimahora.com/","https://www.hoy.com.py/"];
document.getElementById("main").src= urlList[1];
var pos = 1;
var selectedUrl = urlList[pos];
function changeFoward(){
    pos+=1;
    if(pos>(urlList.length-1)){
        pos = 0;
    }
    selectedUrl = urlList[pos];
    document.getElementById("main").src=selectedUrl;
}
function changeBackwards(){
    pos-=1;
    if(pos<0){
        pos = (urlList.length-1);
    }
    selectedUrl = urlList[pos];
    document.getElementById("main").src=selectedUrl;
}