function updateLastUserActivityTime(user, posts) {

    const createPost = new Promise((resolve, reject) => {
   
     // Simulate creating a post
   
     setTimeout(() => {
   
      const newPost = { content: "Lorem ipsum dolor sit amet" };
   
      posts.push(newPost);
   
      console.log("Created new post:", newPost);
   
      resolve();
   
     }, 1000);
   
    });
   
   
   
    const updateActivityTime = new Promise((resolve, reject) => {
   
     // Simulate updating last activity time
   
     setTimeout(() => {
   
      user.lastActivityTime = new Date();
   
      console.log("Updated last activity time:", user.lastActivityTime);
   
      resolve();
   
     }, 1000);
   
    });
   
   
   
    Promise.all([createPost, updateActivityTime])
   
     .then(() => {
   
      console.log("All promises resolved");
   
      console.log("Posts:", posts);
   
      console.log("Last activity time:", user.lastActivityTime);
   
   
   
      const deletePost = new Promise((resolve, reject) => {
   
       // Simulate deleting the last post
   
       setTimeout(() => {
   
        posts.pop();
   
        console.log("Deleted last post");
   
        resolve();
   
       }, 1000);
   
      });
   
   
   
      deletePost.then(() => {
   
       console.log("New posts:", posts);
   
      });
   
     });
   
   
   
    return Promise.all([createPost, updateActivityTime]);
   
   }