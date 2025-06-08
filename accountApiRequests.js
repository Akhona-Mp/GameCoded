import fetch from 'node-fetch'
const PORT = process.env.PORT || 3000

async function signup(userName, userSurname, userEmail, userPassword){
    const request=await fetch(`http:localhost:${PORT}/signup`, {
        method : "POST",
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({
            email:userEmail,password:userPassword,name:userName,surname:userSurname
        })
    });
    const response = await request.json()
    console.log(response)
    return response
}
async function login(userName, userPassword){
    const response= await fetch(`http:localhost:${PORT}/login`,{
        method : 'POST',
        headers : {'Content-type':'application/json'},
        body :{
            name:
        }
    })
}
console.log(signup("tiro","motsuminyana","email3@gmail.com","password"))
