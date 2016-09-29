# MS macwis Prototype
This repo includes all products associated with MS macwits prototype, including source code, support documentation, issue tracking and work management.
This document describes the process to build this prototype that includes Technologies, Team and Use Instructions.

## Technologies
MS macwis prototype uses modern, open technologies, with agile (scrum) process to manage, design, coding, testing and deploy it. We also have a live demo site to show final results.
The following standards and guidance are used or referred in this prototype.
- [Responsive Web Design](https://en.wikipedia.org/wiki/Responsive_web_design)
- [US Digital Service Playbook](https://playbook.cio.gov/)
- [18F Open Source Style Guide](https://pages.18f.gov/open-source-guide/)

### Responsive Design

Prototype of Web Application, based on the context, development, could means screen mockup, wireframe or UI prototyping or all of these. 

The technologies we choose for this prototyping are 1) HTML5/CSS3/Bootstrap/AngularJS framework based 2) Start from UI, with imported provider data as JSON data source 3) Setup a public github repository under FEiSystems account to share the development process.
We choose Bootstrap framework on top of HTML5/CSS3/JavaScript is based on 1) We used bootstrap as key components and front end framework for many projects 2) Bootstrap is powerful, poplar to create responsive, mobile first and cross devices web sites on the UI part.
We also choose to use AngularJS as the structural framework because 1) We need to build a dynamic web application prototype 2) We want the structure is clean and managed. AngularJS is used in many projects we worked on and it is ideal to work with Bootstrap to provide additional databinding and it is designed injectable and testable too. 

For the initial work, the scrum team draw the screen concept on the whiteboard, discussed the view of web components and layout in the different type of devices and then one team member who is primary on Front End development created and built the interactive code, checked-in and demo to the team in 2 days to then allow more refine and additional user stories to be implemented by this scrum team.

### Architecture & Frameworks

### Live Demo Site (Deployment)

### TDD
As we choose to use Bootstrp & AngularJS for front-end and node.js as backend implementation. The test frameworks for these technologies are
- Use [Jasmine](http://jasmine.github.io/) to write unit tests for this Angular based Applications with Bootstrap blocks.
- For the back-end service with Node.JS, Mocha Test Framework is used that we covered all REST web services and node.js domain functions.


### CI with Test Automation

### How to build it

## Team 

## Process
We are doing scrum process with team for this protoype. The key activitiies are described below.

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
- 

## License