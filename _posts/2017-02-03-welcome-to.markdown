---
layout: post
title:  "react module"
date:   2017-02-03 14:39:51 +0800
categories: jekyll update
---


### react 组件的重新解构

文件结构 component--todo--index.js|TodoForm.js|TodoList.js

在index.js文件中 
export {TodoFrom} from './TodoFrom'
export {TodoList} from './TodoList'

其他文件引入的时候不用再写成 
import {TodoFrom} from './components/todo/TodoFrom'
import {TodoList} from './components/todo/TodoList'

而是

import { TodoFrom,TodoList } from './components/todo'


###react 属性书写形式

{props.todos.map(todo =><TodoItem id={todo.id} name={todo.name} complete={todo.complete} />)}

用...的形式

{props.todos.map(todo =><TodoItem  {...todo} />)}

###propTypes

TodoItem.propTypes = {
  name:React.PropTypes.string.isRequired.

}


###react 符合条件时，渲染

{this.state.errorMessage && <span>{this.state.errorMessage}<span/>}

































