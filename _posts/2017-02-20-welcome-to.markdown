---
layout: post
title:  "localStorage"
date:   2017-02-20 14:39:51 +0800
categories: jekyll update
---


### localStorage

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
  this is a test localStogery
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

</body>
<script>

  var apiUrl = 'http://58ae85af73918a1200362d5f.mockapi.io/myTodos/duty'
  //get data

  // var test = axios.get(apiUrl)
  //     .then((res) => {
  //       // console.log(res.data);
  //       // localStorage.clear();
  //       localStorage.list = JSON.stringify(res.data);

  //     });


//localStorage 只能存储字符串，所以要用JSON.stringify
  console.log('local',JSON.parse(localStorage.list));





</script>
</html>
```
