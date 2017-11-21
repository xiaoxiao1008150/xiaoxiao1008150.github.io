var throttle = function(){
  
  var isclear = arguments[0],fn;
  
  if(typeof isclear === 'boolean'){
    console.log('参数是二个')
    
    fn = arguments[1];
    
    fn._throttleID && clearTimeout(fn._throttleID);
  }else{
    console.log('参数是一个')
    fn = isclear;
    
    param = arguments[1];
    
    var p = {
      
      context:null,
      args:[],
      time:300
    };
    
    arguments.callee(true,fn);
    console.log('调用arguments.callee之后')
    
    fn._throttleID = setTimeout(function(){
      
      fn.apply(p.context,p.args)
      
      
    },500)
       
  }
  
  
}
// function movescroll(){

//   console.log(1);
//   var top = $(document).scrollTop();
//   console.log(top);
//   $('#test').animate({top:top-5+'px'});
// }




// $(window).on('scroll',function(){
//   throttle(movescroll)
//   // movescroll();
  
// })


function $tag(tag,container){
  container = container || document;
  return container.getElementsByTagName(tag);
}

function $(id){
  return document.getElementById(id)
}
var Layer = function(id){
  this.container = $(id);
  this.layer = $tag('div',this.container)[0];//img wrapper
  this.lis = $tag('li',this.container);//li 文字
  this.imgs = $tag('img',this.container);//image
  this.bindEvent();
}

Layer.prototype = {

  bindEvent:function(){
    var that = this;
    function hideLayer(){
      that.layer.className = '';
    }

    function showLayer(){
      that.layer.className = 'show';
    }
    that.on(that.container,'mouseover',function(){
       throttle(true,hideLayer);//image wrapper hide
       throttle(showLayer);
    }).on(that.container,'mouseout',function(){
      throttle(true,showLayer);
      throttle(hideLayer);
    })

    // for(var i=0;i<that.lis.length;i++){
    //   that.lis[i].index = i;
    //   that.on(that.lis[i],'mouseenter',function(){
    //     var index = this.index;
    //     for(var i=0;i<that.imgs.length;i++){
    //       that.imgs[i].className = '';
    //     }
    //     that.imgs[index].className = 'show';
    //     that.layer.style.left = -22 + 60*index + 'px';
    //   })
    // }

  },
  on:function(el,type,fn){
    el.addEventListener ? el.addEventListener(type,fn,false) : el.attachEvent('on'+type,fn);
    return this;
  }
}

var layer = new Layer('icon');
console.log(layer);
layer.bindEvent();


function extend(source,target){
  
  for(var key in target){
    
    source[key] = target[key]
  }
  
}

