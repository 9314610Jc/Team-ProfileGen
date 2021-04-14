const inquirer = require('inquirer')
const fs = require('fs');
const { log } = require('console');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const managerHtml = require('./src/mgmtCard');
const engHtml = require('./src/engCard');
const internHtml = require('./src/internCard')
const html = require('./src/main')
const employees = [];






function resetHtml() {
    const blankhtml = ' '
    fs.writeFileSync('page.html', blankhtml )
    
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
            askEngineer();
        }else if(data3.addNext == 'Intern'){
            askIntern();
        }else done();

     
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
            askEngineer();
        }else if(data2.addNext == 'Intern'){
            askIntern();
        }else done();   
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
        askIntern();
    }else done();



})
}




resetHtml()
askManager()
 const done = () => {
    let newHtml; 
   employees.forEach(item => {
      
   
    switch (item.getRole()){
        case 'Manager':
            newHtml = `${newHtml} ${managerHtml(item)}`
        break;
        case 'Engineer':
            newHtml = `${newHtml} ${engHtml(item)}`
        break;
        case 'Intern': 
            newHtml = `${newHtml} ${internHtml(item)}`
            break;

    }


   
});


fs.appendFileSync('page.html', html(newHtml).replace('undefined', ''))

}

