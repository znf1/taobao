var oLeft = document.getElementById('left');
var oRight = document.getElementById('right');
var oPictures = document.getElementsByClassName('pictures')[0];
var oList = document.getElementsByClassName('list')[0];
var oLi = oList.getElementsByTagName('li');
var oLiLength = oLi.length;
var oContain = document.getElementsByClassName('contain')[0];
var timer;
var index = 0;
var flag = true;
var timer2;
function moveImg(dis){
	flag = false;
	var Time = 400;
	var Eachtime = 20;
	var Eachdis = dis/(Time/Eachtime);
	var newLeft = oPictures.offsetLeft + dis;

	timer = setInterval(function(){
	    if ((dis>0 && oPictures.offsetLeft < newLeft) || (dis < 0 && oPictures.offsetLeft > newLeft) ){
	       oPictures.style.left = oPictures.offsetLeft + Eachdis +'px';
// console.log(oPictures.offsetLeft);
// console.log(oPictures.style.left);
	    }else{
	        clearInterval(timer);
	        flag = true;
	        oPictures.style.left = newLeft + 'px';
           if (newLeft == -3120) {
	      	   oPictures.style.left = -520 + 'px';
	        }   
	       if (newLeft == 0) {
               oPictures.style.left = -2600 +'px';

	        }
	    }	     	    
	},Eachtime); 

}
oRight.onclick = function(){
	if (flag == false)return;
	moveImg(-520);
	if (index == 4) {
		index = 0;
	}else{
		index ++;
	}
	oLiStyle();
}
oLeft.onclick = function(){
    if (flag == false) {
    	return;
    };

	moveImg(520);
	if (index == 0) {
		index = 4;
	}else{
		index --;
	}
	oLiStyle();
}
for(var i = 0;i < oLiLength;i++){
	(function(j){
		oLi[j].onclick = function(){
			var num = j - index;
			index = j;
			oLiStyle();
			moveImg(num * -520);

			// console.log('hhhh');
		}
			// console.log('hahaha');
	})(i);
	// console.log('hahaha');

}
function oLiStyle(){
	oList.getElementsByClassName('active')[0].className = "";
	oLi[index].className = 'active';
}

// oLi[2].onclick = function(){
// 	console.log(oLiLength);
// }
// oList.onclick = function(){
// 	console.log('hhhh');
// }

timer2 = setInterval(oRight.onclick,3000);

oContain.onmouseover = function(){
	clearInterval(timer2);
}
oContain.onmouseout = function(){
	timer2 = setInterval(oRight.onclick,3000);
}