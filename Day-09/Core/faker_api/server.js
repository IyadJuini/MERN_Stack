// 1-  Bring express Here
const express = require("express")
const { faker } = require('@faker-js/faker');

// - DEFINE THE PORT AS GLOBAL VARIABLE
const PORT = 8000
/* 
2- invoke the function express (execute the function express) 
and save the return in variable called app 
*/
const app = express()



// MIDDLEWARE TO MAKE OUR SERVER READ JSON 
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );





const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        _id: faker.string.uuid()

    };
    return newFake;
};
app.get("/user",(req,res)=>
{
    res.send(createUser())
})

app.get("/api/users/new",(req,res)=>
{
    res.send(createUser())
})

const newFakeUser = createUser();
console.log(newFakeUser);



const createCompany = () => {
    const newFake = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address:{
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode:faker.location.zipCode(),
        country:faker.location.country(),
        }

    };
    return newFake;
};
app.get("/company",(req,res)=>
{
    res.json(createCompany())
})

const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/companies/new",(req,res)=>
{
    res.send(createCompany())
})

app.get("/api/user/company", (req, res) => {
    res.send({user:createUser(),company:createCompany()});
});


app.listen(PORT, ()=>{
    console.log(`>>>🔥🔥🔥SERVER IS RUNNING ON PORT ${PORT} 🔥🔥🔥<<<`);
})



