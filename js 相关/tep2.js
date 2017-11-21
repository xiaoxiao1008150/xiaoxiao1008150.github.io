var Waiter = function(){
  var dfd = [],
      doneArr = [],
      failArr = [],
      slice = Array.prototype.slice,
      that = this;
  var Primise = function(){
    this.resolved = false;
    this.rejected = false;
  }
 Primise.prototype = {
  resolve:function(){
    this.resolved = true;
    if(!dfd.length){
      return;
    }
    for(var i=dfd.length -1; i>=0;i--){
      if(dfd[i]&& ! dfd[i].resolved || dfd[i].rejected){
        return;
      }
      dfd.splice(i,1);

    }
    console.log('arr',doneArr);
    _exec(doneArr);
  },
  reject:function(){
    this.rejected = true;
    if(! dfd.length)
    return;

    dfd.splice(0);
    _exec(failArr);

    
  }
 }

 that.Deferred = function(){
  return new Primise();
 }

 function _exec(arr){
  var i = 0;
  len = arr.length;
  for(;i<len;i++){
    try{
      arr[i] && arr[i]();

    }catch(e){

    }
  }
 }

  that.when = function(){
    dfd = slice.call(arguments);//first second new Primise
    var i = dfd.length;
    // for(--i;i>=0;i--){
    //   if(! dfd[i] || dfd[i].resolved || dfd[i].rejected || !dfd[i] instanceof Primise){
    //     dfd.splice(i,1);
    //   }
    // }
    return that;
  };
  that.done = function(){
    doneArr = doneArr.concat(slice.call(arguments));//done 的回调函数
    console.log('done',doneArr)

    return that;
  };
  that.fail = function(){
     failArr = failArr.concat(slice.call(arguments));//fail 的回调函数

    console.log('dfd-fail',dfd)

     return that;
  }
 
}

var waiter = new Waiter();
var first = function(){
  var dtd = waiter.Deferred();
  setTimeout(function(){
    console.log('first finish');
    dtd.resolve();

  },3000);
  return dtd;
}();

var second = function(){
  var dtd = waiter.Deferred();//new Primise
  setTimeout(function(){
    console.log('second finish');
    dtd.resolve();

  },5000);
  return dtd;
}();

waiter.when(first,second)
      .done(function(){
        console.log('success')
      },function(){
        console.log('success again');
      })
      .fail(function(){
        console.log('fail')
      });








