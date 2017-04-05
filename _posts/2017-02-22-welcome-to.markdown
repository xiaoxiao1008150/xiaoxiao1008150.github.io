---
layout: post
title:  "axios pratice"
date:   2017-02-22 14:39:51 +0800
categories: jekyll update
---


### Rest Api 操作

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>test</title>
    </head>
    <body>
      this is a test for API
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

    </body>
    <script>

      var apiUrl = 'http://58ae85af73918a1200362d5f.mockapi.io/myTodos/duty'
      //get data
      axios.get(this.apiUrl)
          .then((res) => {
            console.log(res.data);
          });



      // //post data

      axios.post(apiUrl, {"text":"SUCCESS"})
         .then((res) => {
            console.log(res.data);
         });


      // // delete
        axios.delete(apiUrl+'/5')
          .then((res) => {
            console.log(res.data)
          })

    // update --- put
        axios.put(apiUrl+'/1',{"text":"have changed"})
          .then((res) => {
            console.log(res.data)
          })

    </script>
    </html>
