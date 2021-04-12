const inquirer = require('inquirer')
const fs = require('fs');
const { log } = require('console');


 
const employees = [];






const writeFile = () =>{
    employees.forEach(item =>{
        fs.appendFile('page.html',
        `<div class= "card">
        <div class = 'card-title'> ${item.name}</div>
        </div>`)
    })
}

const askEngineer = ()=>{
    inquirer.prompt([
        {
            message : `What is the Engineer's name?`,
            type : 'input',
            name : 'name'
        },
        {
            message : `Enter your employee ID?`,
            type : 'number',
            name : 'id', 
        },
        {
            message : `What is the Engineer's email address?`,
            type : "input",
            name : 'email',
        },
        {
            message : `What is the Engineer's Github?`,
            type : "input",
            name : 'github',
        },
        {
            message :`Who would you like to add next?`,
            type : 'list',
            choices : ['Engineer', 'Intern', 'None'],
            name : 'addNext'
        }
    ]).then((data3) => {
        let {name,id,email,github} = data3;
        name = new Engineer(name,id,email,github);
        employees.push(name)

        if(data3.addNext == 'Engineer'){
            console.log('engineer')
            askEngineer();
        }else if(data3.addNext == 'Intern'){
            console.log('intern')
            askIntern();
        }else ;

     
    })
}


const askIntern = ()=>{
    inquirer.prompt([
        {
            message : `What is the Intern's name?`,
            type : 'input',
            name : 'name'
        },
        {
            message : `Enter your employee ID?`,
            type : 'number',
            name : 'id', 
        },
        {
            message : `What is the intern's email address?`,
            type : "input",
            name : 'email',
        },
        {
            message :`what school do you attend?`,
            type : 'input',
            name : 'school'
        },
        {
            message :`Who would you like to add next?`,
            type : 'list',
            choices : ['Engineer', 'Intern', 'None'],
            name : 'addNext'
        }
    ]).then((data2)=>{

        let {name,id,email,school } = data2;
        name = new Intern(name, id, email,school)
        employees.push(name)
        if(data2.addNext == 'Engineer'){
            console.log('engineer')
            askEngineer();
        }else if(data2.addNext == 'Intern'){
            console.log('intern')
            askIntern();
        }else console.log(employees);   
    })
}


const askManager = () => {
    inquirer.prompt([
        {
        message : `What is the Team manager's name?`,
        type : 'input',
        name : 'name'
    },
    {
        message : `Enter your employee ID?`,
        type : 'number',
        name : 'id',
       
    },
    {
        message : `What is the Manager's email address?`,
        type : "input",
        name : 'email',

    },
    {
        message : `What is the office number?`,
        type : 'number',
        name : 'officeNumber'
    },
    {
        message :`Who would you like to add next?`,
        type : 'list',
        choices : ['Engineer', 'Intern', 'None'],
        name : 'addNext'
    }
]).then((data) => {
    let {name,id,email,officeNumber} = data;
    name = new Manager(name, id, email, officeNumber)

    employees.push(name);
   
    if(data.addNext == 'Engineer'){
        askEngineer();
    }else if(data.addNext == 'Intern'){
        console.log('intern')
        askIntern();
    }else  ;



})
}





askManager()
