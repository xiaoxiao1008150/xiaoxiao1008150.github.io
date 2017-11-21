var A = {};
A.event = {};
// A.event.on =  function(dom,type,fn){
//   if(dom.addEventListener){
//     dom.addEventListener(type,fn,false);
//   }else if(dom.attachEvent){
//     dom.attachEvent('on' + type,fn);
//   }else{
//     dom['on' + type] = fn;
//   }
// }

A.event.on =  function(dom,type,fn){
  if(dom.addEventListener){
    dom.addEventListener(type,function(e){
      fn.call(dom,e,data);
    },false)
  }
}
//自定义bind方法，适用于IE浏览器，标准浏览器有内置的bind方法可以使用
// function bind(fn,context){
//   return function(){
//     return fn.apply(context,arguments);
//   }
// }


// var demoobj = {
//   title:'this is a title'
// }
// function demofn(){
//  console.log(this.title)
// }

// var bindfn = bind(demofn,demoobj);
// console.log(bindfn);
// bindfn();

 var btn = document.getElementsByTagName('button')[0];
 var p = document.getElementsByTagName('p')[0];

 function demoFn(){
  console.log(arguments,this);
 }

 // var bindFn = bind(demoFn,p);//自定义方法
 // var bindFn = demoFn.bind(p)
 // btn.addEventListener('click',bindFn);
 // btn.removeEventListener('click',bindFn);

function bind(fn,context){
  var slice = Array.prototype.slice,
      args = slice.call(arguments,2);
      return function(){
        var addArgs = slice.call(arguments),
            allArgs = addArgs.concat(args);
            return fn.apply(context,allArgs);

      }
}

var data1= {
  text:'this is first text'
}

var data2= {
  text:'this is second text'
}
// var bindFn = bind(demoFn,btn,data1);
var bindFn = bind(demoFn,btn,data1,data2);
btn.addEventListener('click',bindFn);

 // 函数柯里化

//  function curry(fn){
//   var slice = [].slice;
//   var args = slice.call(arguments,1);
//   console.log('args',args);//5
//   return function(){
//     var addArgs = slice.call(arguments);
//     console.log(addArgs);//7
//     allArgs = args.concat(addArgs);
//     return fn.apply(null,allArgs);
//   }
//  }

// function add(num1,num2){
//   return num1 + num2;
// }

// function add5(num){
//   return add(5,num);
// }

// var addhh = curry(add,5,8);
// console.log(addhh(90));








