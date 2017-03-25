window.BASE_URL ='http://'+location.host+'/lmgegeApp';
//全屏显示
mui.plusReady(
function(){
	plus.navigator.setFullscreen(false);
	plus.navigator.setStatusBarBackground("#19b38d");
	if(plus.os.name=='iOS'){
		plus.navigator.setStatusBarStyle('UIStatusBarStyleBlackOpaque');
	}else{
		plus.nativeUI.toast('暂不支持此功能');
	}
}
)
function fullscreen(){
	outSet( "应用全屏显示！" );
	plus.navigator.setFullscreen(true);
	
}

//改变css样式
function hasClass(obj, cls) {
		return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
			  
function addClass(obj, cls) {  
	if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  
function removeClass(obj, cls) {  
	if (hasClass(obj, cls)) {
	var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
	obj.className = obj.className.replace(reg, ' ');  
		}  
} 
mui('body').on('tap','.skipPage',function(){
			var page=this.href;
			 openWindow(page)
		});
		
mui('body').on('tap','.skip',function(){
			var page=this.getAttribute('data-page');
			console.log(page);
			 mui.openWindow({
			    url:page,
			    id:page,
			    extras:{
					
			    }
			})
			 
		});		
function openWindow(page){
		mui.openWindow({
			    url:page,
			    id:page,
			    extras:{
					

			    }
			})
}
function eventSkip(){
		var addEventSkip=document.getElementsByClassName('addEventSkip');
		for(var i=0;i<addEventSkip.length;i++){
			addEventSkip[i].addEventListener('tap',function(prame){
				var page=this.getAttribute('data-page');
				mui.openWindow({
					    url:page,
					    id:page,
					    extras:{
		//	      .....//自定义扩展参数，可以用来处理页面间传值
					    }
					})
			})
		}
}
//阻止冒泡
function stopPropagation(e) { 
			e = e || window.event; 
			if(e.stopPropagation) { //W3C阻止冒泡方法 
			e.stopPropagation(); 
			} else { 
			e.cancelBubble = true; //IE阻止冒泡方法 
			} 
			} 
			
//单页面跳转
	mui('body').on('tap','.sefSkip',function(){
				var page=this.getAttribute('data-page')
				console.log(page);
				var chooseImg=document.getElementById(page);
				chooseImg.style.right=0;
			})
			mui('body').on('tap','.selfBack',function(){
				var page=this.getAttribute('data-page')
				var chooseImg=document.getElementById(page);
				chooseImg.style.right="-100%";
			})
			
//打开软键盘
function openkey(){
	if (mui.os.ios) { 
                var webView = plus.webview.currentWebview().nativeInstanceObject(); 
                webView.plusCallMethod({ 
                    "setKeyboardDisplayRequiresUserAction": false 
                }); 
            } else { 
                var webview = plus.android.currentWebview(); 
                plus.android.importClass(webview); 
                webview.requestFocus(); 
                var Context = plus.android.importClass("android.content.Context"); 
                var InputMethodManager = plus.android.importClass("android.view.inputmethod.InputMethodManager"); 
                var main = plus.android.runtimeMainActivity(); 
                var imm = main.getSystemService(Context.INPUT_METHOD_SERVICE); 
                imm.toggleSoftInput(0, InputMethodManager.SHOW_FORCED); 
            }
}

//复制功能
function getClipbordText(textValue) {
    if(!window.plus) return;
    if(mui.os.android) {
        var Context = plus.android.importClass("android.content.Context");
        var main = plus.android.runtimeMainActivity();
        var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
        plus.android.invoke(clip,"setText",textValue);
//      return plus.android.invoke(clip, "getText");
    } else {
        var UIPasteboard = plus.ios.importClass("UIPasteboard");
        var generalPasteboard = UIPasteboard.generalPasteboard();
        // 设置/获取文本内容:
          generalPasteboard.setValueforPasteboardType(textValue, "public.utf8-plain-text");
        //var _val = generalPasteboard.valueForPasteboardType("public.utf8-plain-text");
        //TODO 应用在后台的时候获取剪切版数据被系统限制了，只有在app内才能访问接口
//      var _val=generalPasteboard.plusCallMethod({valueForPasteboardType:"public.utf8-plain-text"});
//      console.log("ios复制返回的数据是：",_val); 
//      return textValue || '';
    }
}
