!(function(w){
    var key = 'UPUPDOWNDOWNLEFTRIGHTLEFTRIGHTBABASTART';
    var viewHeight = document.documentElement.clientHeight;
    //DES ECB模式加密
	w.encryptByDESModeEBC = function(message) {
		var keyHex = CryptoJS.enc.Utf8.parse(key);
		var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		return encrypted.ciphertext.toString();
	}
	//DES ECB模式解密
	w.decryptByDESModeEBC = function(ciphertext) {
		var keyHex = CryptoJS.enc.Utf8.parse(key);
		var decrypted = CryptoJS.DES.decrypt({
			ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
		}, keyHex, {
			mode: CryptoJS.mode.ECB,
			padding: CryptoJS.pad.Pkcs7
		});
		var result_value = decrypted.toString(CryptoJS.enc.Utf8);
		return result_value;
    }
    //鼠标滚动回调
    w.lazyload=function() {    
        var img =document.getElementsByTagName('img'); //获取所有图片集合 
        //遍历图片集合  
        for(var i=0;i<img.length;i++){
            var item=img[i];
            var imgHeight = item.getBoundingClientRect();    
            //判断当图片出现在视口160px时把地址放到src中，显示出图片    
            if (imgHeight.top < (viewHeight)&&item.getAttribute("data-original")) {    
                item.src = item.getAttribute("data-original")    
            }  
        } 
    }    
    w.IframeOnClick = {
        resolution: 200,
        iframes: [],
        interval: null,
        Iframe: function() {
            this.element = arguments[0];
    
            this.cb = arguments[1];
            this.hasTracked = arguments[2];
        },
        track: function(element, cb, has) {
            this.iframes.push(new this.Iframe(element, cb, has));
            if(!this.interval) {
                var _this = this;
                this.interval = setInterval(function() { _this.checkClick(); }, this.resolution);
            }
        },
        checkClick: function() {
            if(document.activeElement) {
    
                var activeElement = document.activeElement;
                //                  console.log(activeElement)
                for(var i in this.iframes) {
                    if(activeElement === this.iframes[i].element) { // user is in this Iframe
                        if(this.iframes[i].hasTracked == false) {
                            this.iframes[i].cb.apply(window, []);
                            this.iframes[i].hasTracked = true;
                        }
                    } else {
                        this.iframes[i].hasTracked = false;
                    }
                }
            }
        }
    };  
    w.sessionStore={
        ls:w.sessionStorage,
        /**
         * 设置sessionStorage
         * @param key 
         * @param val 
         */
        setSession:function(key, val) {
            var setting = arguments[0];
            if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
                for(var i in setting){
                    this.ls.setItem(i, JSON.stringify(setting[i]))
                }
            }else{
                this.ls.setItem(key, JSON.stringify(val))
            }
            
        },
        /**
         * 获取sessionStorage
         * @param key 
         */
        getSession:function(key) {
            if (key) return JSON.parse(this.ls.getItem(key))
            return null;
            
        },
        /**
         * 移除sessionStorage
         * @param key 
         */
        removeSession:function(key) {
            this.ls.removeItem(key)
        },
        /**
         * 移除所有sessionStorage
         */
        clearSession:function() {
            this.ls.clear()
        }
    }  
    $('body').on('click','.pop-box .close',function(){
        $('.pop-box').remove();
    });
    w.popIsShow=w.sessionStore.getSession('popIsShow')=="false"?'false':true;
    function getPageBag(){
        $.ajax({
            type: "GET",
            url: '//game.bestvideo.cc/api/v1/sa',
            async:true,
            data:{
                act:'app',
                domain:window.location.host
            },
            success: function (resp) {   
                console.log(resp);              
            },
            error: function (err) {
                console.log(err)
            }
         })	
    }
    getPageBag();
})(window)