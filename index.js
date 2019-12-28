/*end points to create
1- sign up --> post(user Data) ---> user
2- sign In --> post(user Credintials) ---> user
3- contact add --> put(contact info) ---> user contacts
4- contact edit --> put(new contact info) ---> new contact
5- contact delete --> delete(contact) */
const users = [{name : "rouqaya abdulhaq", email : "rouqaya@gmail.com", password : "red",
contacts : [{firstName : "rahaf", lastName : "abdulhaq", 
email : "rahaf@gmail.com", phoneNumber : "87678467868"},
{firstName : "ghada", lastName : "abdulhaq", 
email : "ghada@gmail.com", phoneNumber : "87667868"}
]}]

let http = require("http");
let qs = require("querystring");
const signUp = (req, res) => {
    // res.writeHeader(200,{'Content-Type' : 'application/json'});
    // if(req.method === 'POST' && req.url === '/signUp'){
    //     let body = '';
    //     req.on('data', (data)=>{
    //         body += data;
    //         if(body.length > 1e6){
    //             req.connection.destroy()
    //         }
    //     });
    //     req.on('end', ()=>{
    //         let post = qs.parse(body);
    //     })
    // }
    res.write("signed up !!!");
    res.end();
}

const signIn = (req,res) => {
    res.write("signed in !!!");
    res.end();
}

const addContact = (req, res) =>{
    res.write("added contact !!!");
    res.end();
}

const editContact = (req,res) =>{
    res.write("edited contact !!!");
    res.end();
}

const deleteContact = (req, res) =>{
    res.write("deleted contact !!!");
    res.end();
}

const server = (req, res) =>{
    if(req.method === 'POST' && req.url === '/signUp'){
        signUp(req,res);
    }
    else if (req.method === 'POST' && req.url === '/signIn'){
        signIn(req,res);
    }
    else if (req.method === 'PUT' && req.url === '/addContact'){
        addContact(req,res);
    }
    else if (req.method === 'PUT' && req.url === '/editContact'){
        editContact(req,res);
    }
    else if (req.method === 'DELETE' && req.url === '/deleteContact'){
        deleteContact(req,res);
    }
}

http.createServer(server).listen(3000);