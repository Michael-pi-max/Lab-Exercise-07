// UI Vars 
const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    load_fromPlaceHolder();
    loadDataNew();
});

const searchBar = document.getElementById("searchBar");
const loader2 = document.querySelector(".loader2");
//load post from fake api function 
function load_fromPlaceHolder() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(res) {  return res.json();}) //return the JSON Promise
        .then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `
                    <div class="item">
                        <div class="image"> <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"> </div>
                        <div class="content">
                            <a class="header" href="#" id="bTitle"> ${post.title} </a>
                           
                            <div class="description">  <p id="bDesc">  ${post.body} </p>  </div>
                            <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
                        </div>
                    </div>`;  // same code as previous with few update
                });
            loader2.classList.remove("active")

            postDiv3.innerHTML = output;
        })
        .catch(function(err) {     
            console.log(err);
        }
    ); 

}
//async await
async function load_fromPlaceHolder_new() {
    loader2.classList.add("active")
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return posts 
    //Call this with then   


}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
        //iterate over each post [100 posts]
        let output = '';
        console.log("aaa")
        console.log(posts)
        posts.forEach(function(post) {
            output += `
                <div class="item">
                    <div class="image"> <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"> </div>
                    <div class="content">
                        <a class="header" href="#" id="bTitle"> ${post.title} </a>
                       
                        <div class="description">  <p id="bDesc">  ${post.body} </p>  </div>
                        <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
                    </div>
                </div>`;  // same code as previous with few update
            });
        loader2.classList.remove("active")
        postDiv3.innerHTML = output;
    })

}

// title.toLowerCase().indexOf(inputText) != -1

document.addEventListener("keyup", (e) => {
    loader2.classList.add("active")

    const inputText = e.target.value.toLowerCase();
    postDiv3.innerHTML = "";
    load_fromPlaceHolder_new().then(function(posts) {
        let output = '';
        let result = "";
        let a = posts.filter(function(post) {
            return post.title.toLowerCase().indexOf(inputText) !== -1 ? output += `
                <div class="item">
                    <div class="image"> <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"> </div>
                    <div class="content">
                        <a class="header" href="#" id="bTitle"> ${post.title} </a>
                       
                        <div class="description">  <p id="bDesc">  ${post.body} </p>  </div>
                        <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
                    </div>
                </div>` : output+=`<div style="display: none">No Data Match your search parameter</div>`  // same code as previous with few update
        });  
    
        a.forEach((news) => {
            if(news.title.includes(inputText)){
                result += `
                <div class="item">
                    <div class="image"> <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"> </div>
                    <div class="content">
                        <a class="header" href="#" id="bTitle"> ${news.title} </a>
                    
                        <div class="description">  <p id="bDesc">  ${news.body} </p>  </div>
                        <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
                    </div>
                </div>`;;
            }
        });
        loader2.classList.remove("active")

        postDiv3.innerHTML = result;
    }).catch((e) => {console.log('Try Again')});
    // const newses = load_fromPlaceHolder_new.map((news) => {
    //     return 
    // })
})