	window.BASE_URL = window.location.href;
	mui('body').on('tap','.skipSelfPage',function(){
				var showPage=document.getElementById(this.getAttribute("data-id"));
				var selfPage=document.getElementById(this.getAttribute("data-self"));
				selfPage.style.display="none";
				showPage.style.display="block";
			})
			
			mui('body').on('tap','.callBack',function(){
				var showPage=document.getElementById(this.getAttribute("data-back"));
				var selfPage=document.getElementById(this.getAttribute("data-self"));
				selfPage.style.display="none";
				showPage.style.display="block";
			})
			
//		打开新窗口

		
//	退款过程变化 
			function refoundChange(changes){
				var circleContent=document.getElementsByClassName('circleContent');
				var numbercontents=document.getElementsByClassName("number");
				var linkline=document.getElementsByClassName("linkline");
				var circleHeight=circleContent[0].offsetWidth;
				for(var i=0;i<numbercontents.length;i++){
					numbercontents[i].style.border="2px solid #A7A7A";
				}
				for(var k=0;k<changes.circleChange.length;k++){
				numbercontents[changes.circleChange[k]].style.border="2px solid #16B28D";
				numbercontents[changes.circleChange[k]].style.background="#fff";
				numbercontents[changes.circleChange[k]].style.color="#16B28D";
				}
				numbercontents[changes.dealIng].style.border="2px solid #16B28D";
				numbercontents[changes.dealIng].style.background="#16B28D";
				numbercontents[changes.dealIng].style.color="#fff";
				
				for(var j=0;j<linkline.length;j++){
					linkline[j].style.background="#cccccc";
				}
				linkline[changes.lineChange].style.background="#16B28D";
			}