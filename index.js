//Requirer Inquirer
const inquirer=require("inquirer");
const fs=require("fs");
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

const theTeam = [];
function manageMan() {
inquirer.prompt([
    //team manager’s name, employee ID, email address, and office number
    {
        type:"input",
        name:"managerName",
        message:"Enter the Team Manager's name."
    },
    {
        type:"input",
        name:"managerID",
        message:"Enter the Team Manager's Employee ID."
    },
    {
        type:"input",
        name:"managerEmail",
        message:"Enter the Team Manager's Email Adress."
    },
    {
        type:"input",
        name:"managerOffice",
        message:"Enter the Team Manager's office number."
    },
]).then(result=>{
    const manager = new Manager(result.managerName, result.managerID, result.managerEmail, result.managerOffice)
    theTeam.push(manager)
    anotherTeam();
    });
}

function anotherTeam() {
    inquirer.prompt([
        {
            type:"checkbox",
            name:"addToTeam",
            message:"Would you like to add another member to your team?",
            choices: [
                "Enginner",
                "Intern",
                "Done"
            ],
        },
    ]).then(chosenButton => {
        switch (chosenButton.addToTeam) {
            case "Engineer":
                teamEngineer();
                break;
            case "Intern":
                teamIntern();
                break;
            case "Done":
                doneFunct();
                break;
        }
    });
};
function teamEngineer() {
    inquirer.prompt([
        {
            type:"input",
            name:"engineerName",
            message:"Enter the Engineer's name."
        },
        {
            type:"input",
            name:"engineerID",
            message:"Enter the Engineer's Employee ID."
        },
        {
            type:"input",
            name:"engineerEmail",
            message:"Enter the Engineer's Email Adress."
        },
        {
            type:"input",
            name:"engineerGithub",
            message:"Enter the Engineer's Github."
        },
    ]).then(result=> {
        const engineer = new Engineer(result.engineerName, result.engineerID, result.engineerEmail, result.engineerGithub)
        theTeam.push(engineer);
        anotherTeam();
    });
};
function teamIntern() {
    inquirer.prompt([
        {
            type:"input",
            name:"internName",
            message:"Enter the Intern's name."
        },
        {
            type:"input",
            name:"internID",
            message:"Enter the Intern's Employee ID."
        },
        {
            type:"input",
            name:"internEmail",
            message:"Enter the Intern's Email Adress."
        },
        {
            type:"input",
            name:"internSchool",
            message:"Enter the Intern's School."
        },
    ]).then(result=> {
        const intern = new Intern(result.internName, result.internID, result.internEmail, result.internSchool)
        theTeam.push(intern);
        anotherTeam();
    });
};

manageMan();
const htmlFile =`<!DOCTYPE html>
<html lang="en">
    <head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
<link rel="stylesheet" href="./assets/css/style.css">
<title>The Team</title>
<script src=""></script>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">The Team</h1>
            </div>
        </div>
    </div>


    <div class="container">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <div class="card">
<div class="card-header">
    <h2 class="card-title">${managerName}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${managerID}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerEmail}">${managerEmail}</a></li>
        <li class="list-group-item">Office number: ${managerOffice}\</li>
    </ul>
</div>
</div>


        <div class="card">
<div class="card-header">
<h2 class="card-title">${engineerName}</h2>
<h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
</div>
<div class="card-body">
<ul class="list-group">
    <li class="list-group-item">ID: ${engineerID}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${engineerGithub}" target="_blank">https://github.com/${engineerGithub}</a></li>
</ul>
</div>
</div>


<div class="card">
    <div class="card-header">
        <h2 class="card-title">${internName}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${internID}</li>
            <li class="list-group-item">Email: <a href="mailto:${internEmail}">${internEmail}</a></li>
            <li class="list-group-item">School: ${internSchool}</li>
        </ul>
    </div>
</div>

</div>
</div>
</div>

</body>
</html> 
`


function doneFunct() {
    fs.writeFile("team.html",htmlFile,function(error) {
        if(error) {
            console.log("there was an error");
        } else {
            console.log("File saved sucessfully");
        }
    });
}
