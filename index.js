// Add your code here

const dogUrl=`http://localhost:3000/dogs`
const catsUrl=`http://localhost:3000/cats`
const usersUrl=`http://localhost:3000/users`
const robotsUrl=`http://localhost:3000/robots`
const name=document.getElementById('name')

const configurationObject = {
    method:'POST',
    headers: {
    "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  //POST USERS FORM DATA
  const usersFormData = {
    name:"Crotonn",
    email:"crotonn.c@hotmail.com"
  };
  


    function submitData(name){
        return fetch(`http://localhost:3000/users/${name}`, configurationObject)
        .then(response=>response.json())
        .then(users=>users)

        .catch( (error)=>{
          alert("Bad News! I am the worst!");
          console.log(error.message);
        });
    
    }

