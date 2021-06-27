---
title: 'Design and Development of a Virtual Reality Environment for Detecting Implicit Racial Bias'
date: '2021-05-27'
---

## Abstract

This project focuses on designing and developing an immersive virtual reality (VR) environment dealing with a shoot/don't shoot scenario (SDSS). In a simulated SDSS, a virtual character with various traits is generated, and the user must determine whether to shoot or not. The long-term goal of the project is to collect data that may be useful to help increase positive outcomes in defensive gun situations. The project utilizes the benefits of VR, which is to help create a more immersive and interactive environment compared to other available options, and in turn, help detect implicit bias in the SDSS. This work presents the methods and tools used to create an interactive VR environment and a baseline usability evaluation of the VR environment. 


## 1. Introduction

### 1.1 Using VR

For this project, the reason VR is used is because it allows users to interact with their surroundings compared to other options, such as using a keyboard and mouse or mobile phone. Due to the hands-on experience VR offers, users may have an improved learning environment due to the focus they have. VR also has a wide range of movement, which can make the environment more realistic when full body motion is needed. Also, in VR, users may have an emotional response to certain events, such as anger, fear, anxiety, and more. 

### 1.2 Objective

The goal for this project is to create an Interactive Virtual Environment (IVE) using the Unity 3d Engine and the Oculus Software Development Kit (SDK). To determine if the IVE is immersive, data will be gathered and assessed to gage user opinion on how immersed these users feel in the environment. This study is a part of a larger project, which will use this environment to collect data on implicit racial bias. Other goals of this study are to create the SDSS and gather basic objective data. 

### 1.3 Experiment Problems

##### 1.3.1 Technology

A high-quality environment can have a positive influence on a user's presence, the sense of being in the environment. Technological ways to implement high-quality environments may include LiDAR (Light Detection and Ranging) scans, which maps the distance away an object is from a central infrared signal, or Photogrammetry, which combined multiple 2d images to create a 3d object. LiDAR and Photogrammetry can take several scans which maps a 3d object to create a 3d environment. Both of which are very time consuming, even though they would positively impact user's response to the environment. Even if the technology was available to use, textures and shaders for the model will still need to be added to the object, which will take more time and resources. 

##### 1.3.2 Individual Difference

Individuals can have different experiences when in VR. It is possible the experience of one person who has prior experience be different than someone who has never used VR before. For example, the experience consequence of Virtual Reality, which is the consequence a user may experience due to using VR, a person may begin to experience motion sicks or disorientation to a degree. To avoid this, an effective way to implement a movement system must be researched and implemented. This means avoiding implementing anything with sudden unexpected movements, unless intentionally. Again, if an individual has prior experience in VR, they may have a dissimilar experience to those who have not used Virtual Reality before. This is not something that can easily be controlled unless there are control groups for gathering data. 

##### 1.3.3 Performance VS Quality

While high-quality resources will have a large benefit for how immersive the environment is, high quality textures, particles, and other high quality environmental objects are much more demanding on hardware and may hinder performance. This can lead to a negative impact on user experience. To avoid this, a balance of high-quality resources and performance must be researched and implemented. 

## 2. Related

In 2016, a Virtual Reality International Conference was held. The proceedings defined how to measure qualities relating to user experience in IVEs. Specifically, the paper defined aspects of what makes a Virtual Environment Immersive. These aspects include Experience Consequence, Immersion, Presence, Engagement, and Emotion.  

The experience consequence is drawbacks of being inside the virtual environment, usually called simulator sickness or motion sickness. It is a disoriented feeling of being in the environment. For the case of experience consequence in VR, this can be from sudden, unexpected movements or something similar. Presence is the feeling of "being there", both physically and socially. This study focusses on the physical presence in the environment. Engagement is the connection between the virtual activity and the user. Immersion is the sense having the virtual senses replace the users' senses, such as sight, sound, balance, etc. The aspect of Emotion in a Virtual Environment is the feelings a user can experience while in a Virtual Environment. As mentioned, this can include anxiety, frustration, or other emotions caused by events in the environment [1]. 

A study from Paul M. G. Emmelkamp1 and Katharina Meyerbröker tested the emotional responses of users in different virtual social environments. Users were put in environments with a large virtual audience, it was shown that those with social anxiety disorder make much less eye contact with those in the audience. The overall conclusion in this study is that VR can trigger social anxiety and public speaking anxiety responses as well as lessen the negative social response in those with social anxiety disorder [2]. 

A case study held by Mark Trahan and Richard Morely was held to help several aspects surrounding a Student Veteran’s sleep quality. The Student Veteran went through a scenario having to go through personal confrontation, interacting with strangers, and other triggers for social anxiety may occur within a grocery store. The results show an improvement in sleep quality as well as less daytime dysfunction due to sleepiness. This study shows factors of therapy are possible through VR environments [3]. 

## 3. Experiment Design

### 3.1 Tools Used

The Unity 3d rendering engine was used to create the virtual environment, specifically version 2020.2.3f1. It is important to note the version of Unity that is used here. If a different version is used, it is possible there will be compatibility issues relating to the Oculus Quest 2 headset. The Oculus Quest 2 is a new headset, released in October 2020; older versions of Unity do not recognize the hardware at the moment. VS Code is the IDE used, and the language C#. The Unity Application Programming Interface (API) is implemented with C# scripts. Blender was used to create the foundations of the Virtual Character, such as the skeleton and the weight painting of the bones. The Oculus SDK is used to implement Virtual Reality input and output. Git and GitHub are used for version control. Google Forms is used for gathering user responses related to the study.  

### 3.2 Designing the Virtual Environment

The goal was to create an environment that is modeled similar to Derrick Hall. However, due to earlier explained technology constraints, assets from the Unity Asset Store must be utilized and be approved by the Research Coordinator for the department of Social Work, Michelle Dziadik-Willingham. While the environment is not a replica of Derrick Hall, an environment can be created to resemble they layout of the building. 

The main design of the environment was to have a hallway the user will be placed in and will be able to walk down. There will also be a system of doors the user must be able to open. Because this is a SDSS, the user must go from room to room to search for the Virtual Character and determine if they are a threat. The rooms have similar layouts with desks and chairs, but with different orientations. Figure 1 shows the external and internal layout of the environment. There are five rooms and one main hallway. 

Figure 1. Internal and External Layout of the Building
![Figure 1](https://github.com/connors128/nextjs-blog/pictures/image-000.jpg) ![Figure 1](https://github.com/connors128/nextjs-blog/pictures/image-001.jpg) |


### 3.3 Problems and Solutions to Animations

Blender was great for creating the framework for the animation, which included the model's skeleton and weight painting. The model’s skeleton will be moved during animation, which will move the limbs that have a weight to them. The Virtual Character’s skeleton is similar to a tree in computer science, the further away you go from the root, which is the spine, the less total weight it has on the Virtual Character's movements. The hips will move the entire body while the head, toes, fingers, feet bones will separately, yet they are still attached to the parent bone. Figure 2 shows the layout of the animator in Blender. The top shows the Virtual Character, and the bottom shows the “dope sheet”, which is where the animation frames are held and can be modified. The dope sheet keeps time in frames, rather than seconds. 

Unfortunately, there were problems with Blender which made it to where animations could not be created in Blender. Blender has a high skill curve, and it was not something I was able to utilize for this project, and the units used in Blender are metric, Unity is not. Also, the axis in Blender and Unity have swapped Z and Y axis, which made converting from Blender to Unity when animating to have significant issues. 

Figure 2. Animation Layout in Blender 

## 4. Implementation 

### 4.1 Interactions with the Virtual Environment

##### 4.1.1 User Interactions

User controls are simple, implemented from the Oculus SDK. The left controller analog stick moves the user along the x/z plane, which is horizontally. The Right controller analog stick move the user 45 degrees in the direction it is moved to. The reason this is a constant rotation input rather than a smooth linear turn is because it helps limit the amount of motion sickness a user can get. A linear rotation is known to have an experience consequence, which is something I want to avoid. Figure 3 shows the starting position of the user in the environment. The users’ controllers are seen as hands in the program. The hand objects are a part of the Oculus SDK and have dynamic feedback based on the buttons the user presses down or places a finger on. 

Figure 3. User at the start of the Scenario 

##### 4.1.2 Environment Interactions

A door model was created with door handles. To open the door, users must press the grip button on either controller while their controller is in the handle area. Figure 4 shows the user opening the door inwards. While the user is holding the door handle, they can push the door open. The door is designed to have restricted movement from its initial position, which is zero degrees, to 150 degrees. The user can add force to open the door as if they are throwing the door open. The door also has a spring on it that will make the door slowly return to its default position over time. After the door was created with these properties, it was duplicated for each of the rooms. 

Because a goal of this study was to implement a SDSS, the users must have a defensive weapon. At the beginning of the program, the user is placed at the end of the hallway next to a desk which has a defensive weapon on it. Users can pick up the defensive weapon, with the help of the Oculus SDK. The Oculus SDK allows for a specified object to be grabbed by the user if the specified object has the OVRGrabbable script attached to it. The controller, or what represents the hand in the VR Environment, has an OVRGrabber script attached to it, which interacts with the objects with the OVRGrabbable script. 

Figure 4. Interacting with the Door 


##### 4.2 Animations

The animation system is designed in a Model-View-Controller (MVC). As seen in figure 5a, the model represents the Unity Environment, which monitors environmental variables and sends information to the controller. The Controller represents the Animation Controller, which receives information from the Model and View. The View represents the Virtual Character, which sends and receives information to and from the Controller. Because the animation system is a MVC design, it allows for the view to be swapped out for other objects. This is important because the later study will be looking for implicit bias. Models that will be swapped out will have different races or features that may cause a user to respond to the situation differently. Figure 5b shows the elements of the MVC in the Unity Editor. The animation controller shows the states that can be met, which triggers animations in the Virtual Character. 

Figure 5a.


Model 

Controller 

View 

Unity Environment 

Animation Controller 

Virtual Character 

User Interacts with environment, sends updates to Controller 

Controller sets states when conditions are met. 

Virtual Character has its animations changed by Animation Controller 

Virtual Character sends updates on its own state to the controller. 


Figure 5b. MVC Elements within Unity 

##### 4.2.1 Animation Rigging

Due to the earlier stated problem with creating animations in Blender, I had to research other ways to animate the Virtual Character. Specifically, there was an issue animating multiple objects together. So, I found a way to animate objects as parents and children. The solution to dynamic animations in Unity is a Unity Package called Animation Rigging. With Animation Rigging, it is possible to code and script certain events to happen by manipulating an objects parents and children. Figure 6 shows the animation rigs on the Virtual Character. There are 6 rigs in total, 1 for each of the hands and feet as well as a rig for the head and for the right hand. The rig for the right hand is where the active item in the environment will be manipulated. 

Because I used Animation Rigging, there does not need to be an animation created for every action. I was able to code functions that detect which kind item, weapon or not, is active in the scene and the animation controller plays the correct animation. This allows for the Virtual Character to be animated with more details, such as arm and leg movements, because children of a parent object take the position, scale, and rotation of its parent. 

Figure 6. Animation Rig on Virtual Character 

##### 4.2.2 Animation Triggering

The Animation Controller collects data from the Unity Environment and triggers certain animations if conditions are met. If a condition is met, the Animation Controller sends a state change to the Virtual Character’s Animator. For example, the user will open the doors for each of the room. When the door the Virtual Character is in is opened beyond 20 degrees, the animation controller is updated, and the user will then cast a ray. The ray will detect which collider the user is looking at, or in the general direction the object is. Once the user looks in the direction of the Virtual Character, the animation controller will send an update to the Virtual Character to change animations. Many of these steps are dynamic and can be added or removed if needed in the future. 

## 4.3 Game Objects

In Unity, a Game Object is a data type that represents an object in the scene of the program. Objects have many members and functions attached to it, which can be set and manipulated as needed. Game objects have several environmental variables, physics vectors such as position, velocity, acceleration, as well as abstract data types that can be defined in a custom way. Figure 7 shows the Unity Hierarchy (right), which are all the game objects that are available in the environment, and the environment (left) which shows all the objects that are active in the hierarchy. 

Figure 7. Unity Hierarchy and Scene 

There were many performance issues in the program. One of them was that the program wanted to render all the objects, even if the user is not looking at them. To solve this, there needed to be a Level-of-detail (LOD) on all the objects and cull objects if the user is a certain distance away. Figure 8 shows the distance away from desks the user will need to be in order for it to be culled, or for it to not be rendered. LOD became unnecessary further on because a better solution was found related to the lighting of the environment. Because LOD was not used, it allowed the detail and rendering of objects to remain unchanged while running the program.
Page Break
 

Figure 8. Level of Detail on Game Objects 

## 4.4 Lighting

##### 4.4.1 Realtime

After doing more research, it was found that lighting had the largest impact on performance. Realtime lighting is much more demanding, which initially caused the performance to be extremely poor and heavily impacted user experience. However, Realtime lighting is scalable, and the quality can be lowered if needed. Realtime lighting means the shadows are calculated during runtime. Multiple Realtime lights have a heavy impact on performance because calculations need to happen every frame the program is running. The Oculus Quest 2 has a refresh rate of 90Hz, so every light will have to make 90 calculations a second if running at 90Hz.  

##### 4.4.2 Baked

Baked lighting does not cast shadows on moving objects during runtime, which has an impact on the realism of the environment. There are many downsides to baked lighting; even if baked lighting does provide more performance during runtime, baking the lighting can take a few hours depending on the hardware used to perform this operation. Also, Unity needs to bake the lighting again if there are changes to the scene. Baked lighting may be an option to a final product, where high quality lighting can be baked for a few hours once and have decent performance during runtime. 

##### 4.4.3 Mixed

Mixed lighting, just like the name implies, implements a mixture of baked and Realtime lighting. This means that lights are already configured to cast on static objects while shadows were computed during runtime. This was one of the solutions implemented to help improve performance. Figure 9 illustrates the lighting differences between baked, Realtime, and mixed lighting. 

Figure 9. Types of Lighting in Unity 

##### 4.5 Project testing

This project was tested on the Oculus Quest 2. Figure 10 shows the Oculus Quest 2 with its controllers. The Oculus Quest 2 is very similar to the Oculus Quest, but with high performance hardware. As stated previously, the Oculus Quest 2 was released recently, coming out in October of 2020. There were a few compatibility issues on older versions of Unity. Due to this, Unity3d version 2020.2.3f1 was used. It can be assumed newer versions of Unity will also be compatible, but there was no reason to update when creating the project.  

Figure 10. 

Oculus Quest 2 with Controllers 

The project has only been tested on the Oculus Quest 2, but it has been set up to run on multiple Oculus platforms. Currently the project will not run on a device if it not an Oculus Device. When making the project, it was known that the Oculus SDK was going to be used because of the Oculus Quest 2 that was going to be used for testing. Because the Oculus SDK was used, other devices such as the Windows Mixed Reality device, will not be immediately compatible. This can be changed at a later date if needed. 

## 5. Data and Analysis

### 5.1 Data

Users were given questions related to their experience in the VR Environment. Questions were designed to avoid neutrality; the questions ask for feedback as strongly agree, agree, disagree, strongly disagree. The sample space includes 6 students with prior experience in Virtual Reality, but not specifically with the Oculus Quest 2. Users were notified about the SDSS and what their goal was but did not know about the layout of the building or environment. It is important to note that individual experience in VR may impact results. Figure 11 shows the responses to the different kinds of questions the users were asked. 

Figure 11. User Feedback 

##### 5.1.1 Subjective Results and Analysis

The collected data shows that users did not find the environment to be distracting and they felt as if they were in the building in VR. The users also believed their interaction with the environment was not distracting. The experience consequence data shows that some users felt disoriented when going through the environment. This is most likely due to the controls implemented from the Oculus SDK. Research will need to be done on how to find a more functional movement system. Not everyone had the same emotional response, such as the feeling of anxiety when opening the door. One noted they expected the Virtual Character in every room but did not feel anxious.  

##### 5.1.2 Objective Results

Objective Data includes the times recorded during the SDSS, which will be used for the later study for identifying racial bias. Currently, the data collected is the time the user is in the scenario, the room the Virtual Character is in, whether the Virtual Character is a threat, and the decision the user made regarding the Virtual Character. While the data was collected for this study, more data collection will be implemented in the future to help refine results of the later study. 

## Conclusion:

The overall goal was to create an immersive VR environment and determine whether users felt immersed in the environment. User feedback shows that the environment promoted presence, engagement, and emotion in users as they went through the SDSS. However, the experience consequence caused by the Oculus SDK movement system needs to be addressed. Further testing and research can be done to eliminate the disorientation caused. In the future, the larger project will need audio implemented as well as more character models to represent the Virtual Character. An input system that allows control of the scenario before runtime will need to be implemented as well. 

### Cited Works:

[1] Tcha-Tokey, Katy & Loup-Escande, Emilie & Christmann, Olivier & Richir, Simon. (2016). A Questionnaire to Measure the User Experience in Immersive Virtual Environments. VRIC '16: Proceedings of the 2016 Virtual Reality International Conference. 10.1145/2927929.2927955. 

[2] Emmelkamp, P.M.G., Meyerbröker, K. & Morina, N. Virtual Reality Therapy in Social Anxiety Disorder. Curr Psychiatry Rep 22, 32 (2020). [https://doi.org/10.1007/s11920-020-01156-1](https://doi.org/10.1007/s11920-020-01156-1)

[3] Trahan, M.H., Morley, R.H., Nason, E.E. et al. Virtual Reality Exposure Simulation for Student Veteran Social Anxiety and PTSD: A Case Study. Clin Soc Work J (2021). [https://doi.org/10.1007/s10615-020-00784-7](https://doi.org/10.1007/s10615-020-00784-7)