# MS macwis Prototype
This repo includes all products associated with MS macwits prototype, including source code, support documentation, issue tracking and work management.
This document describes the process to build this prototype that includes Technologies, Team and Use Instructions.

You can see live demo [here](http://msmacwis.azurewebsites.net) or http://msmacwis.azurewebsites.net.

## Technologies
MS macwis prototype uses modern, open technologies, with agile (scrum) process to manage, design, coding, testing and deploy it. We also have a live demo site to show final results.
The following standards and guidance are used or referred in this prototype.
- [U.S. Web Design Standards](https://standards.usa.gov/) that follows [Responsive Web Design](https://en.wikipedia.org/wiki/Responsive_web_design) with Accessibility out of the box
- [US Digital Service Playbook](https://playbook.cio.gov/)
- [18F Open Source Style Guide](https://pages.18f.gov/open-source-guide/)

### Responsive Design

Prototype of Web Application, based on the context, development, could means screen mockup, wireframe or UI prototyping or all of these. 

The technologies we choose for this prototyping are 1) HTML5/CSS3/Bootstrap/AngularJS framework based 2) Start from UI, with imported provider data as JSON data source 3) Setup a public github repository under FEiSystems account to share the development process.
We choose Bootstrap framework on top of HTML5/CSS3/JavaScript is based on 1) We used bootstrap as key components and front end framework for many projects 2) Bootstrap is powerful, poplar to create responsive, mobile first and cross devices web sites on the UI part.
We also choose to use AngularJS as the structural framework because 1) We need to build a dynamic web application prototype 2) We want the structure is clean and managed. AngularJS is used in many projects we worked on and it is ideal to work with Bootstrap to provide additional databinding and it is designed injectable and testable too. 

For the initial work, the scrum team draw the screen concept on the whiteboard, discussed the view of web components and layout in the different type of devices and then one team member who is primary on Front End development created and built the interactive code, checked-in and demo to the team in 2 days to then allow more refine and additional user stories to be implemented by this scrum team.

### Architecture & Frameworks

Based on the initial research and overall chanllenges, we decide to follow our practice to use MVC architecture, with MVVM in the front-end.
The frameworks we used in this project are:
- Front-End/Presentation Layer: HTML5/JS/Bootstrap 
- Front-End/Service Layer: AngularJS
- Backend/Service Layer: None
- Backend/Database: None

We did not use didicated backend service and database in this project because we want to focus the prototype work and agile process to create a good fit solution.


### TDD
As we choose to use Bootstrp & AngularJS for front-end and node.js as backend implementation. The test frameworks for these technologies are
- Use [Jasmine](http://jasmine.github.io/) to write unit tests for this Angular based Applications with Bootstrap blocks.
- For the back-end service with Node.JS, Mocha Test Framework is used that we covered all REST web services and node.js domain functions.

## Deployment

### CI with Test Automation for Live Demo Site
There are couple considerations that affect us to choose CI
- Using Microsoft Azure App Service to host this prototype site
- No backend database
- Test Automation/Monitoring

Azure provide simple Contiouse Integration (CI) that can deploy project from github to Azure App Service. For quick build purpose, we used this capability in sprint 1/2, and then switch to TeamCity.
TeamCity is a comprehensive integation build platform but need more configuration for this prototype. The configuration includes plug-ins for some Unit Test Framework we used.

Here is the live demo [here](http://msmacwis.azurewebsites.net).

### How to run it local 
This prototype is built with pure front-end HTML/JS technologies that does not need special settings. This prototype can run on any simple http server, eg. Chrome built-in HTTP Server.
To run it on local Chrome Browser with built-in HTTP Server application
- Download or use `git clone` the [repository](https://github.com/FEISystems/ms-macwis-prototype/), assume put in directory d:\projects\ms-macwis-prototype
- Start Chrome Browser
- Install Chrome [Web Servver App](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en)
- Start Web Server, point to the directory with source code d:\projects\ms-macwis-prototype\src\webapp
- Navigate to http://127.0.0.1:8887 and you will see a live local demo

### How to build and deploy to another environment with node.js supported (development)
This prototype can run on any web server or http server, such as Apache, IIS.  For development environment with Node.js, here are the detailed step.
You will need 
- Github account
- install Node.js from https://nodejs.org

And then
```
git clone https://github.com/FEISystems/ms-macwis-prototype.git
cd ms-macwis-prototype
npm install http-server -g
http-server ./src/webapp
```

If you prefer to run it in apache http server, can also copy all files from src/webapp to the root web folder.


## Team & Process
We are doing scrum process with team for this protoype. The team includes Product Owner, Scrum Master and a small scrum team. 
For the proposal effort, we have more roles such as Product Manager and DevOps.

The key activitiies are described below.

### Initial Resarch and Discovery

### Initial Planning
As normally did after the agile (scrum) team assembled for this proposal, we had a quick planning meeting to setup weekly sprint process from start to finish this prototype, with common scrum configuration. See 2.1 for details.
During the initial planning meeting, we discussed 
- User Stories that include functional and non-functional stories 
- Move the product backlogs to sprint backlogs, based on the estimation and team capacity 
- Discussed couple ways of the prototyping and decide to use coding based approach that fully fit our needs. 
- And then team picked up the backlogs and started working on it.

### Sprint 1 - (9/19-9/23)
- Screen mockup
- Setup github repository
- Initial code check-in with user story 1 and mockup data
- Review

### Sprint 2 - (9/26-9/30)
- Merge into one direction
- Use cases 2-10 with unit testing
- Update readme.md 
- CI & Deploy
- Review

### Sprint 3 - (10/3-10/7)
- CI & Unit Testing Automation with TeamCity
- Refine prototype based on review from Sprint 2
- Proposal finalizatin based on prototype and process

### Release 1.0 for Proposal submission - (10/10/2016)
- Put a release tag as v1.0 for proposal submission

## License
[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)