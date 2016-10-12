#   I.	Introduction
FEi Systems (**FEi**), a leading Information Technology (IT), services, and analysis organization headquartered in Columbia, MD, is pleased to respond to the Mississippi Department of Information Technology Services (ITS), Solicitation Number 3717: *“Establishment of a Qualified Vendor Pool for Agile Development Services.”*

FEi has applied Agile software solution development for many large federal and state projects; for example, FEi implemented the Long-Term Services and Supports (LTSS) for the Division of Medicaid in Mississippi, and systems for the Maryland’s Department of Juvenile Justice. In addition, FEi provided analysis and recommendations for the restructuring of Maine’s SACWIS system platform, interviewing over 300 community providers and caseworkers in the process. 

FEi has sustained Capability Maturity Model Integration (CMMI) Level 3 certification for the last five years, and we are ISO/IEC 20000-1:2011 certified. These certifications are a testament to our organizational maturity.

#   II.	Documentation
##  A.	Description of the Project
The purpose of this project is to show FEi’s capability to provide Agile software development services. Our Agile approach is illustrated in [Agile Scrum Process]. We have developed a working prototype to demonstrate our technical aptitude in design, development, and a repeatable process. The prototype was created to allow Mississippi caseworkers or parents to select the best child care provider for a child. It is presented as an alternative to the MDHS Search Child Care Provider form page.
In addition to the requirements provided in the solicitation, the FEi team has enhanced the prototype with additional requirements and features that should help the parents and caseworkers in their search. These additional functions were based on the recorded Q&As with Mississippi caseworkers, as well as our own team research and interviews with parents and additional Subject Matter Experts (SMEs) in the child care and child welfare field. The additional functions are described below.

##  B.	List of Artifacts Used to Create Prototype
Our team relied on the following artifacts to create the prototype:

*	**Staffing Plan:** Greater detail about the team and roles can be found in <LINK to Section III> Section III. Team Structure. 
*	**Sprint Schedule:** After an initial planning sprint (Sprint 0), we conducted three one-week sprints. A summary of sprint schedule and activities are included in <LINK RMF Linked Files | Sprint Schedule | Sprint_Schedule. PDF>.
*	**Research and Discovery:** We gathered feedback from prospective system users to enhance the prototype. The research and discovery phase is described in greater detail in section <LINK to Section IV> IV. Research and Discovery.
*	**Design Notes/Specifications:** We followed Bootstrap design and U.S. Digital Service playbook guidelines. The process is described in greater detail in section <LINK to Section V> V. Design. 
*	**Wireframes:** Design notes and Wireframes can be found: <LINK RMF Linked Files | Wireframes >
*	**User Stories and Acceptance Criteria:** We expanded the vendor challenge user story to include additional scenarios and for each user story, we developed acceptance criteria. <LINK RMF Linked Files | User Stories | User_Stories.PDF >
*	**Definition of Done:** We used a checklist for the definition of done <LINK> RMF Linked Files | Definition of Done Checklist| Definition_of_Done_Checklist.PDF >.
*	**Meeting Notes:** In addition to daily meetings, notes from several Design, Development, and User Interview meetings are included in <LINK RMF Linked Files | Meeting Notes>.
*	**Frameworks and Libraries Used:** A description of the prototype frameworks and libraries used and why they were employed is located in <LINK Architecture and Frameworks Section>. The prototype framework and libraries are included in GitHub, <LINK to GitHub location>. 
*	**Test Scripts and Cases:** Quality Assurance (QA) activities included creating test cases (actors, preconditions, and test steps) as well as test scripts (actions, expected results, and test results in a Pass/Fail format) are shown here, <LINK RMS Linked Files | Test Cases | Test_Cases.xlxs>.
*	**Data Assumptions:** We enhanced the vendor challenge dataset by adding columns for data requested by both caseworkers and users interviewed during the research phase. The type of data added was based on what would be feasible to obtain from information provided in a child care license per the Mississippi State Department of Health’s Guide, “How to Get a Child Care License.” Mock data was added for illustration purposes. More detail can be found here <LINK RMF Linked Files | Data Assumptions | Data_Assumptions.PDF >.

##  C.	Functional Description of Prototype Components
Based on our research and the SME interviews that we conducted, the needs and the level of expertise of the two types of prototype users, caseworkers and parents, will vary. 

1. User Role (Persona) 1 - Parent:
  	*	A parent may use the search function only once every year or every few years.
  	*	A parent may visit the site not knowing exactly what criteria to use to execute the search, and therefore, will likely want to search using a simple search screen with the most basic criteria (e.g., near their home address’ zip code). The parent, however, should still have advanced search features available to them to search for specific provider offerings, such as the age range of children served using the “Age Served” drop-down. 

2. User Role (Persona) 2 - Caseworker:
  	*	A caseworker will likely execute the search frequently, helping to place children on a daily basis.
  	*	Focused on providing the best placement for a child, the caseworker is likely to use advanced search functionality and the “Search by Distance” feature. For example, the caseworker will use the advanced search options to quickly narrow down providers to place a child that has special behavioral needs using the “Serves Special Behavioral Needs” drop-down. 

### Home Page and Search Results
The Home Page allows users to search all providers and search by provider name on two different tabs. Within the *Search all Providers* tab, the user can select the Provider Type, County, Quality Star Rating, City, and enter the Zip Code and then click the “Search” button. On the *Search by Provider Name* tab, the user can enter the provider name and click the “Search” button to execute the search. 

A prominent “Advanced Search” button directs the user to additional search criteria options on the left of the page with a directory of all providers displayed on the right of the page. The user can “Search by Distance” within 5 – 50 miles or use the “Advanced Search Options” drop-downs, which include: 
*	Age Served
*	Child Care Provided for the Following Genders
*	Serves Special Behavioral Needs
*	Serves Special Medical Needs
*	Accepts USFA Food Programs

Once the search is executed from the home page or using the advanced search feature, the “Search Results” will display providers that have been filtered by the search criteria entered. 

Mississippi may choose to enhance the prototype’s Home Page by adding text to describe additional programs, services, hints, and guidelines for how to choose the most suitable child care provider. The current prototype provides descriptions of Licensed Child Care Centers, Licensed Family Child Care Homes, and Registered Family Child Care Homes. It also includes links to the Mississippi Department of Human Services to provide additional resources for parents (http://www.mdhs.state.ms.us/early-childhood-care-development/for-parents/) and information on choosing a child care provider (http://www.msdh.state.ms.us/msdhsite/_static/41%2C0%2C81.html). 

The footer of the home page includes an email address to report any site issues. For more information, see Section VIII <LINK to VIII. Reporting Prototype and Documentation Bugs>.

The prototype components are described in detail in Section VII <LINK to VII. Release Notes>.

#   III.	Team Structure
##  A.	Composition
During the planning stage – Sprint 0, <LINK RMF Linked Files | Sprint Schedule | Sprint_Schedule. PDF>, we analyzed the RFP requirements and identified the roles and skillsets needed to complete the prototype. We assembled a multi-disciplinary team based on the requirements of the project and Agile methodology, as described below. The team worked as a single unit with daily stand-up meetings, frequent touchpoints, and demos. The overall project team was divided into the following functional teams to seamlessly perform like functions and responsibilities:

1.	**Leadership, Product Definition, and Requirements Team –** This team consisted of the Product Owner (PO) (Labor Category: Product Manager), Scrum Master (Labor Category: Delivery Manager), Agile Coach, Business Analyst, and Technical Writer. As the leader of the team, the PO was responsible for defining the scope, prioritizing the work items, and ensuring completeness of the work items. The Scrum Master fostered an Agile team environment by demonstrating Scrum tools and techniques. The Delivery Manager facilitated the development process by removing any impediments identified by the team members and asking each member what they completed yesterday and what they will perform today. 
2.	**Visual and Frontend Development Team –** This team consisted of the Technical Architect, Visual Designer, Interaction Designers, and Frontend Web Developers, and was responsible for designing the entire user experience, information architecture, journey maps, wireframes, and style guides. This team worked closely with the PO and the rest of the Requirements Team, and the Backend Development Team to ensure working end-to-end functionality that is robust and satisfies the product requirements.
3.	**Backend Development Team –** This team consisted of Backend Web Developers that performed database design (including augmenting the sample data provided by the State), created the search functions, and other ancillary functions (e.g., showing provider details), and printing results. This team also worked closely with the Requirements Team and the Visual and Frontend Team to ensure a working end-to-end functionality that is robust and satisfies the product requirements.

The FEi team collaborated daily, using the Kanban board (see screenshot below), to assess progress and assign work items. The Continuous Integration (CI) process established also helped with team interaction and with team (and work) integration, so that issues would be resolved in a timely manner. 

IMAGE

When bugs were found, the team immediately created issues and assigned them to the right team member, or the assignment was made during the stand-up meeting the next day. A screenshot for the “Issues” page in GitHub is shown below.

IMAGE


This model was designed to optimize flexibility, creativity, and productivity. Our PO, Hatem Ghafir, was responsible for building and managing the Product Backlog and had the authority and overall responsibility for delivering the project. 

Our Scrum Master (Agile Coach), James Tan, ensured that the Scrum Team adhered to the principles, practices, and rules that make Agile methodology so successful by developing clear lines of escalation within the organization and engaging stakeholders. 

Our team, which was self-organizing and cross-functional for optimized efficiency and effectiveness, included the following: 

*	**Leadership, Product Definition, and Requirements Team**
    *	Product Owner (Product Manager) – Hatem Ghafir
    *	Agile Coach – James Tan 
    *	Delivery Manager (Scrum Master) – Lisa Lin-Freeman 
    *	Business Analyst – Chris Gordon
    *	Technical Writer – Claire Reinken 

*	**Visual and Frontend Development Team** 
    *   Technical Architect – James Tan
    *   Visual Designer – Luis Najera
    *   Interaction Designers – Ludwing Najera, Christian Heyd, and John Jilek
    *   Frontend Web Developers – Luis Najera

*   **Backend Development Team**
    *   Backend Web Developers: Xiang Zhang, Bhavani Reddy, and Terry Boswell 

##  B.	Roles and Responsibilities 
The table provided in <LINK | RMF Linked Files | Roles_and_Responsibilities | Roles_and_Responsibilities.PDF> outlines the roles and responsibilities for key positions in the project team. These roles provide the broad leadership in all technical and management disciplines required for this project.

##  C.	Level of Effort (Proprietary)
Per the Vendor Challenge Section 4.2.1 instructions, FEi has provided the hourly rate and total number of hours for each labor category proposed to complete the prototype separately in the document, *“FEi, MS Section X - Cost Information Submission, RFP No. 3717.PDF”*. The total number of hours proposed to complete the prototype is 468.

#   IV.	Research and Discovery
##  A.	Research Methods – User Perspective
FEi’s research and discovery efforts were designed to better understand the needs of prospective users of the child care provider search portal. Our approach focused on systematic data collection to apply revisions that were incorporated throughout several iterations of the application development process. Throughout the process, we employed methods that were qualitative, including user interviews <LINK RMF Linked Files | Meeting Notes | User_Interviews_Notes.PDF> as well as quantitative, including a user survey <LINK RMF Linked Files | Survey Results | Survery_Results.PDF>, to gain insights into goals, needs, and typical behavior from caseworkers and parents. User stories were created based on FEi’s research and discovery findings that listed the tasks the user was trying to accomplish; for more information see <LINK RMF Linked Files | User Stories | User_Stories.PDF>. 

**Caseworker Perspective**

The Requirements Team, including FEi’s PO and Business Analyst, analyzed the needs expressed by caseworkers during the Caseworker Q&A session held as part of this procurement on Friday, September 9, 2016. The recorded call was transcribed, <LINK RMF Linked Files | Research Documents | Mississippi_Caseworker_Q&A_Transcript.PDF>. Our team reviewed the transcription and highlighted themes that emerged throughout the call. Caseworkers expressed particular interest in several features and improvements to the current search portal. Our team’s prototype incorporates the following enhancements:
1.	Geographic searches/ability to search by radius
2.	Advanced search capabilities to narrow down providers
3.	Multi-language support

In addition to the information gathered from the Caseworker Q&A, our team reached out to individuals who have worked with caseworkers and could share their perspective. We conducted structured interviews with two individuals who have a long career in social work (particularly child welfare), Gary and Liz (last names are not disclosed for privacy) on September 28, 2016 to further understand the needs and protocols followed by child welfare professionals. 

Gary brings over 10 years of experience consulting with child welfare systems and programs in multiple states. Additionally, he has over five years of experience working with child care systems, programs, and policies in Ohio. Liz has more than 25 years of experience in the field of human services. Her background includes direct practice and program development and management, policy analysis, legal advocacy, research, and training. She has an in-depth knowledge of foster care and adoption practice and policy, public benefits law, and special education law. 

It is worth noting that the interviews with Gary and Liz did not just consist of discussions about the topic, but rather the team demonstrated a functioning system at that time and obtained valuable feedback that was then translated into additional requirements used to enhance the prototype. Notes, findings, and ideas for enhancement from the interviews can be found in <LINK RMF Linked Files | Meeting Notes | User_Interviews_Notes.PDF>.

**Parent Perspective**

Similarly, our team reached out to a network of parents to test the prototype and gather their perceptions. Of particular relevance, we gained insights from parents familiar with the experience of looking for child care providers. Interviews with parents resulted in useful design feedback for the results filters. The revisions focused on the filters for: 
1.	Hours of operation
2.	Days of operation

FEi conducted an interview with Kathleen on October 3, 2016. She is a step-mother and project manager with the Maryland Department of Juvenile Services, where she collaborates with the Maryland Department of Human Resources to share provider resources. She previously researched the child welfare and juvenile justice systems, and advised as to the state provider directory that serves both child serving agencies. Notes from the interview can be found in <LINK RMF Linked Files | Meeting Notes | User_Interviews_Notes.PDF>.

**User Survey**

In addition to the interviews, we fielded a brief online survey to gather usability feedback. The survey can be found: https://www.surveymonkey.com/r/7X2G2CJ.

We distributed the link to FEi employees and encouraged forwarding to extended networks. We also gathered feedback by posting the link on a local parent group in Facebook. The survey contained a link to the prototype and asked the following questions:

1.	Do you find the language used is simple and easy to understand?
2.	Do you find searching for a provider, say in Hinds county, easy and intuitive?
3.	Do you find searching for a provider in Hinds county that serves children in a given age range easy and intuitive?
4.	Please describe one feature that will help us improve your search experience.

##  B.	User Survey Findings 
FEi’s user survey findings are summarized in <LINK | RMF Linked Files | Survey_Results | Survey_Results.PDF>.

##  C.	Research Methods – System
We also completed research to tailor the system to Mississippi. For instance, we examined the Mississippi Child Care license, <LINK RMF Linked Files | Research Documents | HOW-TO_GET-A-CHILD-CARE-LICENSE_2.PDF>, application to make assumptions about available data points for the prototype. Based on the application packet, we determined it was feasible to incorporate hours and days of operation into the prototype. 

Similarly, we reviewed the state licensing regulations to identify the target age groups served by centers, <LINK RMF Linked Files | Research Documents | MS_License_Regulations.PDF>. To better understand what the star quality ratings mean, we reviewed the Mississippi Quality Stars Brochure, <LINK RMF Linked Files | Research Documents | MS_Quality_Stars_Bropchure.PDF>

Additionally, to gain a better understanding of the procurement approach, we completed research about 18F, <LINK RMF Linked Files | Research Documents | ISM_Conference_About_18F.PDF> and <LINK RMF Linked Files | Research Documents | MS_Article.PDF>. 

#   V.	Design
##  A.	Design Guide
### Understanding Users’ Needs and Human-Centered Design
As mentioned in Section IV <LINK to Section VI. Research and Discovery>, we used the following techniques:
*	*User Interviews:* While not in-person, the Q&A recorded webinars with the Mississippi social workers provided our team with an excellent source of information. In addition, we conducted one-on-one sessions with users as an important component of our human-centered design process. By engaging with former caseworkers and parents, we were able to gain more insight into what content to present and how to present it. To gain a better understanding of a parent’s needs, we also conducted an interview with a parent who also has years of experience working in the juvenile services area.
*	*User Survey:* In order to also gain quantitative input, we conducted an online survey with parents in our community. With 15 respondents, we gained additional input.
*	*Concept Validation:* In all our interviews and our survey, we gave the users access to the functioning system at that time in order to obtain concrete feedback, and not just present sketches that are sometimes difficult to envision with average users. We solicited feedback, and made necessary changes.

**User Interface (UI) Style Guide –** Style Guides were used to facilitate consistency in look and feel, as well as to streamline handoffs between design and development. To maximize efficiency, we kept the style guide simple and functional, and subsequent improvements were made based on meetings between team members. In our implementation, FEi used Bootstrap, a widely-used open source UI framework, because it has a web-based style guide that facilitated our Agile approach. Our Interaction Designer reduced the time to implementation by providing UI components and the Style Guide to meet the needs of our project. 

For more information on bootstrap style guides, see http://getbootstrap.com/2.3.2/components.html. 

### US Digital Services Playbook
We also followed the principles outlined in the US Digital Services Playbook. A summary of our adoption by play can be found here, <LINK RMF Linked Files | Digital Services Play Checklist | Digital_Services_Play_Checklist.PDF>. 

##  B.	Accessibility Best Practices

Section 508 of the Rehabilitation Act of 1973, as amended (29 U.S.C. § 794 (d)) provides accessibility guidelines for the development, procurement, maintenance, or use of Electronic and Information Technology (EIT). The amendment mandates that federal agencies must give disabled employees and members of the public access to information that is comparable to access available to others (Section 508 Law and Related Laws and Policies. (n.d.). Retrieved from https://www.section508.gov/content/learn/laws-and-policies). Based on Section 508 accessibility requirements, the U.S. Access Board established standards and guidelines as to how all federal agencies can ensure Section 508 compliance for web-based applications and information, software applications, operating systems, computers, telecommunication, multimedia products, documentation, and more. At FEi, Section 508 compliance is not an afterthought, and our team advocates for users with disabilities at every stage. When validating applications and documentation for Section 508 compliance, we address the concerns of individuals with disabilities by using manual and automated testing techniques to confirm full accessibility and usability.
To ensure compliance without incurring refactoring costs, our team weaves Section 508 requirements into design, development, and testing at the beginning of every project. FEi also carefully considered the design of the prototype to ensure 508 compliance up to WCAG AA level through utilizing the following guidelines and technology: 
*	W3C accessibility recommendations
*	WAI-ARIA (technology that makes advanced web applications accessible and usable to people with disabilities)
*	Americans with Disabilities Act (ADA) laws and regulations
*	Web Content Accessibility Guidelines (WCAG) 2.0
*	Principles of Accessibility: Perceivable, Operable, Understandable, Robust (POUR)
*	Assistive technology (e.g., screen readers, magnification, assistive listening devices)
*	Text, graphics, images, menus, breadcrumbs, forms, navigation, buttons, tables, accessibility tags, fonts, plugins, links, scripts, and applets
*	Code and markup that define page structure and presentation
*	Evaluation with web accessibility checkers, HTML and WCAG evaluators, and CSS validators
*	HTML elements (name, role, state, value)
*	HTML markup that conveys logical hierarchy
*	HTML tables (data, complex, simple, layout)
*	Proper header, cell, row, and column associations
*	Tables constructed to read logically from left to right and top to bottom
*	Tables containing attributes to define meaning in the absence of context
*	Layout, color, contrast, and cascading style sheets (CSS), including the disabling of CSS during testing
*	Form fields (FIELDSET, LEGEND, TABINDEX), radio buttons, checkboxes, labels (with FOR attribute), title attribute, order
*	Keyboard accessibility
    *	Logical tab order
    *	Accessible links
    *	Forms that can be navigated and completed
    *	Content that is accessible when displayed on hover
    *	Visual focus that moves with keyboard navigation

We tested the prototype using a JAWS 16 screen reader. At the conclusion of Section 508 testing, our team compiled a detailed findings report, detailing a ‘scorecard’ of compliance, see <LINK | RMF Linked Files | Section 508 Compliance | 508_Compliance_Scorecard.PDF>. For each non-compliance issue, we documented our recommendations for remediation, including follow up timelines and testing procedures to verify that compliance problems have been sufficiently resolved. Our team worked closely with development to ensure that the reasons for non-compliance are understood, and we put into place best practices and processes for validating Section 508 compliance early on in the development process. 
##  C.	Responsive Design
Our frontend code is fully responsive and tested across multiple browsers and device sizes, as well as to support accessibility needs. For more information, see <LINK VI.A Response Web Design>.

##  D.	Consistency
We ensured the design was applied consistently throughout the prototype site pages (Home Page and Search Results). We also took special care to ensure simple and easy to understand language was used.

#   VI.	Prototype
This section includes all products associated with MS MACWIS prototype, including source code, supporting documentation, issue tracking, and work management, as well as some design aspects. 

We used Azure Cloud Service to deploy and host this prototype for demonstration purposes. Azure provides comprehensive monitoring and alerts for all services Azure provides, including VMware, Network, App Service, Deployment, and Storage. 

For example, the App Service we used as a Web Server provides built-in monitoring functionality in the Azure Portal. This includes the ability to review quotas and metrics for an app as well as the App Service plan, setting up alerts and even scaling automatically based on these metrics, such as CPU/Memory and Traffic thresholds. 

For the deployment, Azure has built-in support to be integrated with GitHub and provides detailed process monitoring and logs with configured alerts for deployment status at defined issues level.

The prototype can be accessed at http://msmacwis.azurewebsites.net. 

##  A.	Responsive Web Design
Our Frontend Web Developers initially created wireframes and screen mockups, see <LINK RMF Linked Files | Wireframes>, and discussed the view of web components and layout in different types of devices. Once the initial wireframes were completed, the team developed the interactive code with selected technologies and framework (Bootstrap and AngularJS), and tested using different types of devices, such as PC, Phones, and Tablets; we also used browser built-in tools to simulate devices. The use of the Bootstrap framework allowed our frontend code to be fully responsive and tested across multiple browsers and device sizes, as well as to support accessibility needs.

The prototype has been tested using the following browsers: Internet Explorer 11, Google Chrome v53.0.2785.143, and Safari. In addition, the use of responsive web design desktop allows web pages to be viewed in response to the size of the device. FEi tested the prototype using the following devices: and operating systems: PC (Windows 7 OS), Surface Pro (Windows 10), iPad Air (iOS9), Samsung Galaxy Tab, and iPhone 6 (iOS9).

##  B.	Technologies
FEi’s prototype uses modern, open technologies, and we used Agile (Scrum) processes to manage, design, develop, test, and deploy the prototype. The following standards and guidance are used or referred to in this prototype.
*	Bootstrap Framework, see http://getbootstrap.com/2.3.2/components.html, that follows responsive web design with Accessibility out of the box
*	US Digital Services Playbook
*	18F Open Source Style Guide

##  C.	Architecture and Frameworks
Based on the initial research, we decided to follow our practice to use Model-View-Controller (MVC) architecture, with Model-View-Model-View (MVVM) in the front-end. The frameworks we used in this project are:
*	*Front-End/Presentation Layer: HTML5/JS/Bootstrap.* This is a very widely-used framework that is consistent with the US Style Guide. Bootstrap offers many advantages, such as responsiveness, customization support, consistency, and speed of development.
*	*Front-End/Service Layer: AngularJS.* This framework offers very strong support for MVMV, and it integrates very well with the Bootstrap framework. AngularJS is very widely used and offers many advantages, such as providing structure for JavaScript, templating support, and modular development.

##  D.	Unit Testing
 We used Jasmine [Link] to write unit tests for Angular-based Applications with Bootstrap blocks. Our unit tests can be found in <LINK RMF Linked Files | Test Cases | Test_Cases.xlxs>.

The screenshot below shows Unit Test Runner results (failure).
IMAGE

##  E.	Deployment
### Continuous Integration (CI) for Live Demo Site
MS Azure provides simple CI that can deploy a project from GitHub to Azure App Service. For facilitate quick builds, we used this capability in Sprints 1 and 2, and then switched to TeamCity, a comprehensive integration build platform that we configured for this prototype, for Sprint 3. The configuration includes plug-ins for the Unit Test Framework used.

The screenshot below shows the CI process with log details.
IMAGE

##  F.	Installation Instructions
**Installing the 'Web Server for Chrome' Chrome Extension**
1.	Open Google Chrome and Navigate to https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb.

2.	Select '+ Add to Chrome' and select the 'Add app' button from the pop-up.

IMAGE

IMAGE


3.	The Extension/App should now be installed.

**Setup and Run the Prototype Locally**
1.	Download and save the prototype from https://github.com/FEISystems/ms-macwis-prototype/.
    2.  a.	Extract all files and take note of the directory where the 'ms-macwis-prototype-master' folder was extracted.
 

IMAGE

  

2.	Open Chrome Apps 'chrome://apps/' and Run the 'Web Server for Chrome' app. 
a.	(See Instructions below for installing this Chrome App/Extension).

3.	Select 'ms-macwis-prototype-master\src\webapp' as the folder for the Web Server.
a.	Note: This is in the Prototype folder was downloaded.
 
 
4.	Check the 'Automatically show index.html' option.

IMAGES

5.	Navigate to the site by type 'http://127.0.0.1:8887' in any internet browser.

**How to Build and Deploy to Another Environment With Node.Js Supported (Development)**

This prototype can run on any web server or http server, such as Apache, IIS. For development environment with Node.js, here are the detailed step. You will need
•	Github account
•	install Node.js from https://nodejs.org
And then
git clone https://github.com/FEISystems/ms-macwis-prototype.git
cd ms-macwis-prototype
npm install http-server -g
http-server ./src/webapp
If you prefer to run it in apache http server, can also copy all files from src/webapp to the root web folder.
##  G.	License
*	Apache 2.0

#   VII.	Release Notes – Version 1.0
The prototype consists of two pages, the ‘Home Page’ and a ‘Search Results’ page. 

### Home Page
The Home Page is the landing page that welcomes users. The Home Page provides context and serves as an information hub for users. For illustration, we included state-specific content (links to the Mississippi Department of Health guidance for choosing caregivers and the Mississippi Department of Human Services Early Childhood Care & Development Resources). Other links or information may be used. 

The home page features a toggle search: users may choose to search for a provider by attributes (type, location, quality star rating) or by name. Once a search is performed, the user is taken to the Provider Search page. 

Alternatively, and advanced user may choose to go the Provider Search page by clicking on “Advanced
Search” from the home page.

### Provider Search 
The Provider Search page presents search criteria on the left and results on the right. Values entered on the home page are transferred automatically to the Provider Search Page. Users can further refine the results by performing searches with additional inputs.

The search panel features three expanding panels:
*	Search by Provider
*	Search by Distance
*	Advanced Search Options

*Provider Search*
Users can search by provider name, type, location (city or county), and quality star rating.
The quality star ratings option includes a link to the state brochure for the Star Quality Rating and Improvement System.

*Search by Distance*
Users can search by distance from a specific zip code. This enables users may find a provider by entering a zip code and the distance within 5 – 50 miles. 

*Additional Search Options*
Users can find providers with services geared toward specific age groups, genders, special behavioral or medical needs, or whether or not they accept USDA food programs.

Basic Search results are displayed:
*	Provider Name
*	Quality star Rating
*	County
*	City
*	State
*	Zip Code
*	Phone Number
*	Provider Type
*	Age of Children Served

Additional details about a specific provider may be found using the “Show More” button, which displays:
*	Days and Hours of operation
*	Center Capacity
*	License Type
*	Genders Served
*	Services for Children with Special Needs (Medical, Behavioral)
*	Accepts USDA Food Program

**Search Results**
Search results are presented in alternating white and gray shading to simplify distinction of individual results. Users can group results in 10, 20, or 30 results per page. Page navigation is at the bottom of the page.

**Language Translation**
The Google language tool bar on the upper right corner enables users to view search results in other languages. This is an initial attempt to address the language preferences expressed in the caseworker Q&A, specifically English, Spanish, and Vietnamese.

**Print**
We anticipated that users may want to print the providers they have identified during the search. To print selected providers, select the checkbox next to the desired provider and click “Print Selected” button

#  VIII.	Reporting Prototype or Documentation Bugs
Issues can be reported to MS.bugreport@feisystems.com . This information is included as a footer in the Home Page of the prototype.


[Agile Scrum Process]:	(./artifacts/Agile_Scrum_Process_Diagram/Agile_Development_Scrum_Process_Diagram.png)
