function submitData(){
    let form=document.querySelector('form')
    form.addEventListener(submit,(e)=>{
        e.preventDefault()
        let results={
         userName: e.target.search.value,
         avatar:e.target.search.value,
         profile: "  http://localhost:3000/profile",
         id: 1, 
        }
    })
console.log (form)
}
function searchInput(){
    fetch ('  http://localhost:3000/profile',{
    method:"GET",
    headers:{
        'Content-Type':"application/json",
        Accept:application/vnd.github.v3+json
    },
    body:JSON.stringify(results)
    })
    .then (res=>res.json)
    .then (results=>console.log (results));
    }
    
function getRepos(){
    fetch ('https://api.github.com/users/octocat/repos'),
    .then (res=>res.json);
    .then (item=>console.log)
}