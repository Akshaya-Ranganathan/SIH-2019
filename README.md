# SIH-2019
The entire repository contains the Files off Geographic Profiling of routes based on security and surveillance.

**BACKEND FOLDER**
Contains one file which is a consolidation of the back end process like NLP, Regression Model

**WEB APP**
Contains the code template for the web application

**MOBILE APP**
Contains the codes of the mobile application 



**OVERVIEW OF PROJECT**
WINNER OF SMART INDIA HACKATHON 2019 - JAMSHEDPUR

Project Consists of 3 components 
1)Mobile Application for users
2)Web Application for administrators of a City 
3)Back End 

**MOBILE APPLICATION**
1)Users can see the crimes zones along a particular route
2)Safest route among multiple options can be chosen]
3)Rerouting done based on safety of new routes as well
4)If in a red zone(high crime zone) users can send SOS Message
5)Off-Transit Notifications: If a user is in a red zone , alert will be sent even if user isn't using the app
6)Displaying safe zones near a user with a single button click

**WEB APP**
The web-app is a dashboard which has the following characterisitcs:
1) Display crime demographics of Delhi
2) Display Heatmap of Crimes in areas of Delhi
3)Live User Tracking facility if user is in high crime zone
4) Read SOS messages of Users
5)web-app is linked to the mobile app and backend through Firebase

**BACKEND**
1)Newspaper Data was scraped and NLP Techniques were applied to get important information like type of crime,time of crime,intensity of crime.
2)Intensity was calculated from the crime.
3)Population Data(from Census),Traffic Data (from Bing API),Intensity,Police Stations,Time of Crime was used to calculate severity of crimes
4)Multivariate Linear Regression was Used


