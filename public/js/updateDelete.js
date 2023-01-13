document.querySelector("#update").addEventListener("click",event=>{
    event.preventDefault();
    const blogId = document.querySelector("#hiddenBlogId").value;
    const editBlog = {
        title:document.querySelector("#editedTitle").value,
        content:document.querySelector("#editedContent").value,
    }
    console.log(blogId);
    console.log(editBlog);
    fetch((`/api/blogs/${blogId}`),{
        method:"PUT",
        body:JSON.stringify(editBlog),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
            console.log("blog updated")
            location.href="/dashboard"
        } else {
            alert("please try again")
        }
    })
})

document.querySelector("#delete").addEventListener("click",event=>{
    event.preventDefault();
    const blogId = document.querySelector("#hiddenBlogId").value;
    fetch((`/api/blogs/${blogId}`),{
        method:"DELETE",
    }).then(res=>{
        if(res.ok){
            console.log("blog deleted")
            location.href="/dashboard"
        } else {
            alert("please try again")
        }
    })
})