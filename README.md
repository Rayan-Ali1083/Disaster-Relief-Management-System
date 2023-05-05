# Disaster-Relief-Management-System

The Disaster Relief Management System is a web application designed to improve the efficiency and effectiveness of disaster response operations and promote collaboration between government bodies and relief organizations. The system is based on a relational database that supports relief work management functionalities.

##Motivation
The motivation for this project arose from the severe floods that affected Pakistan in 2022. The government and relief workers needed a platform that could facilitate communication between the two bodies, thereby improving efficiency in relief work. Unfortunately, the absence of any such platform made collaboration very difficult, and motivated us to work on this idea.

##Technologies
The application is built using the following technologies:

ReactJS, HTML, CSS, Bootstrap for the frontend
NodeJS and JavaScript for the backend
MySQL Workbench 8.0 as the database
Git and GitHub for version control and collaboration

##System Design
The following tables exist in the database:

Products
Organizations
Disaster category
Organization categories
These tables contain records that exist without any disaster. Once a disaster is added to the system, its corresponding disaster locations can be added, and a Relief Program against that disaster can be created. Product requirements can then be raised in that relief program, which can be viewed by organizations. Organizations can commit to fulfilling the requirements, and the fulfillment status can be tracked against each requirement.

##Functionalities
The following are the key functionalities of the Disaster Relief Management System:

PDMA can add/remove products, organizations, organization categories, disasters, and disaster categories in the system
PDMA can approve organizations after their signup
PDMA can create a Relief Program and raise requirements in any particular relief program
Organizations can register in any relief program
Organizations can view the product requirement summary (quantity required, committed, fulfilled at a particular location of that relief program)
Organizations can commit against any requirement
Organizations can fulfill the requirements against their commitments
Organizations can view their commitments and fulfillments

##Contributors
The following contributors have participated in the development of this project:

Huzaifa Tanzeel
Maarij Baig
Rayan Ali
