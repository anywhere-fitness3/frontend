# frontend
- Branch Created

Product Vision - Anywhere Fitness
Proposal

What problem does your app solve?
Anywhere fitness addresses the problem of attendance taking and payment processing for certified fitness instructors

Be as specific as possible; how does your app solve the problem?
Solves billing mistakes, creates more variety in location which increases attendance. Provides an easy way for users to find out information on classes.

What is the mission statement? AnywhereFitness is an all-in-one solution to meet fitness class needs like setting up appointments, payments, and locations.

Features

What features are required for your minimum viable product?
1. User can create/register as a "Client" and login with the registered credentials.(web, mobile)
2. User can create/register as an "Instructor" by entering an additional Auth Code during signup, and can login with the registered credentials.(web, mobile)
3. "Client" and "Instructor" are both presented with the appropriate onboarding walkthrough on first signin, with an option to skip it.(UX, mobile)
4. Authenticated "Instructor" can create update and delete a "Class". At a minimum, each "class" must have the following properties(web, mobile):

	* Name
	* Type
	* Start time
	* Duration
	* "Intensity" level
	* Location
	* Current number of registered attendees
	* Max class size

5. Authenticated "Instructor" can create "virtual" punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, HIGH, pilates, etc.)(mobile)
6. Authenticated "Client" can search for available classes. At a minimum, they must be able to search by the following criteria(web, mobile):
	* class time
	* class date
	* class duration
	* class type
	* "Intensity level"
	* class location
7. Authenticated user can reserve a spot in a class with available seats open, and can reschedule or cancel their current reservation from the mobile app(mobile).

What features may you wish to put in a future release?
A way to add reviews to each class
A way to message your instructor directly
Add a “Friend” on the app

What do the top 3 similar apps do for their users?
Access fitness classes of all types, join, and pay.

Design - Planning

Optional but highly recommended Please refer to this document:
Build Weeks: Planning & Design Worksheet (How to build a beautiful application)
What design system will you use?

What will your user flow be?

What is the URL to your wireframes?

Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using? ReactJS, ReactStrap


Do APIs require you to contact its maintainer to gain access?


Are you required to pay to use the API?


Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)


For Data Scientists

Describe the Established data source with at least rough data able to be provided on day 1.


You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.


Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)


A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app


Target Audience

Who is your target audience? Be specific.
Gym goers and certified fitness instructors
Eighteen and over interested in starting any kind of fitness class.

What feedback have you gotten from potential users?

Have you validated the problem and your solution with your target audience? How?


Research

Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
Prototype Key Feature(s)

This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.


These days, fitness classes can be held anywhere - a park, an unfinished basement or a garage - not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more. Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.
MVP
1. User can create/register as a "Client" and login with the registered credentials.(web, mobile)
2. User can create/register as an "Instructor" by entering an additional Auth Code during signup, and can login with the registered credentials.(web, mobile)
3. "Client" and "Instructor" are both presented with the appropriate onboarding walkthrough on first signin, with an option to skip it.(UX, mobile)
4. Authenticated "Instructor" can create update and delete a "Class". At a minimum, each "class" must have the following properties(web, mobile):
 
	* Name
	* Type
	* Start time
	* Duration
	* "Intensity" level
	* Location
	* Current number of registered attendees
	* Max class size
 
5. Authenticated "Instructor" can create "virtual" punch pass categories for each type of group fitness class they offer (yoga, insanity, RIPPED, HIGH, pilates, etc.)(mobile)
6. Authenticated "Client" can search for available classes. At a minimum, they must be able to search by the following criteria(web, mobile):
	* class time
	* class date
	* class duration
	* class type
	* "Intensity level"
	* class location
7. Authenticated user can reserve a spot in a class with available seats open, and can reschedule or cancel their current reservation from the mobile app(mobile).
STRETCH
1. Implement payments using PayPal, Stripe or another 3rd party API(web, mobile)

