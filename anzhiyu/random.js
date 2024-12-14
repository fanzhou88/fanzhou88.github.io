var posts=["2024/12/15/这是一篇新的博文/","2024/12/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };