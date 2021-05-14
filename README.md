# My-Voiceflow-chatbot
A project for making a chatbot by using Voiceflow

# Introduction

Voiceflow is designed to be non-technical for those who don’t know how to code. For example, its two basic block types are “speak” and “choice.” Its blocks are organized on the screen through drag-and-drop, as users design the flow of their app. For more technical users, an advanced section allows you to add logic and variables — but it’s still entirely visual.

# Repo Features covered / what you can get here

-    STEP BY STEP Points to get you started Voiceflow pizza skill.
-    Ask your chatbot to reprompt

## Module 1

# Step 1: Log in

To get started, log into the [voiceflow account](https://creator.voiceflow.com/login) with your Voiceflow acount. If you do not have your account, then [Click here](https://creator.voiceflow.com/signup) to create one.

# Step 2: Create your ChatBot

a. Click Create Project on the left-hand side of the console. A new page displays.

b. In the project name field, enter Voiceflow Pizza.

![Screenshot 2021-05-14 160133](https://user-images.githubusercontent.com/73324896/118258603-b4d3b200-b4cd-11eb-9ed9-368711f99c36.png)

c. Select the *Amazon alexa* Channel for creating the chatbot.

![S1](https://user-images.githubusercontent.com/73324896/118258993-2d3a7300-b4ce-11eb-9e60-c65f22f59394.png)

d. In the Invocation Name field, enter Voiceflow Pizza and in Locales filed, select English(US), Then click on Create Project.

![S2](https://user-images.githubusercontent.com/73324896/118259358-adf96f00-b4ce-11eb-973d-139851ed8f9c.png)

e. Now a blank Voiceflow project will be appear on your screen.

![S3](https://user-images.githubusercontent.com/73324896/118260109-8d7de480-b4cf-11eb-88c3-bd025486649c.png)

f. Now Drag the Speak block to welcome the user in Voiceflow pizza, Firt drag the speak block than connect it with Homeblock. Then click on Speak block and enter *Welcome to Voiceflow pizza, How can I help you today ?* in speak variant, then click Enter.

![S4](https://user-images.githubusercontent.com/73324896/118260935-8f947300-b4d0-11eb-97fc-cf089282ce05.png)

- Now prompting the user and we're going to have to have them make a choice so,

g. Go to step menu, and pull out the choice block.
    
    So I am going to drag that in right blow the speak block now
    Now the Choice block are seperated into different paths so you can see by default we have path one and we have the else path
    
   ![S6](https://user-images.githubusercontent.com/73324896/118262989-4d206580-b4d3-11eb-8494-bf640a5d2235.png)
   
h. We can actually go ahead and in the editor on the right we can add new paths that will be expands the choice block.

![S7](https://user-images.githubusercontent.com/73324896/118263327-b902ce00-b4d3-11eb-940d-e779ed68b114.png)

    You can think of these all the different branches that the user might choose to go down or the different paths of your conversation.
    So, for example path 1 could be order pizza, and maybe path 2 is cancel order.
- Now we are going to build these two paths.
    
   As We mentioned one for order piza and one for cancel order
   
i. Creating both the paths.

- For Path 1
 
  1. Click on intent and select the exciting intent or you can create your own intent.
       
      Now in intent pane, enter order_pizza and then we're gonna go over and hit create.
      
 ![S8](https://user-images.githubusercontent.com/73324896/118264420-4a267480-b4d5-11eb-9fad-a0dd48b3499c.png)
 
     You'll Notice that the order pizza intents shows up in our block and you're going to see that the intent is split into the utterances and slots.
     
 ![S9](https://user-images.githubusercontent.com/73324896/118264854-f8321e80-b4d5-11eb-9585-85b67399b63c.png)
 
    
    
 2. Now tackle Utterances
     
- The utterances we would add 
   
  1. I want to order a pizza
  2. Order me a pizza
  3. Order Pizza

![S10](https://user-images.githubusercontent.com/73324896/118265432-ce2d2c00-b4d6-11eb-9ad0-c09cbd93586f.png)

    You can add many many different utterances in here.
    
- For Path 2

 1. Click on intent
 
        Note :- Choose different intents for the different path.
 
     Now for cancel order, I'm going to type in cancel_order and then we're gonna go over and hit create.
     
![S11](https://user-images.githubusercontent.com/73324896/118266206-e3ef2100-b4d7-11eb-924b-d3e94dd7d891.png)


 2. Now tackle Utterances
     
- The utterances we would add 

  1. Cancel my order.
  2. Cancel
  3. Stop my order

![S12](https://user-images.githubusercontent.com/73324896/118266467-45af8b00-b4d8-11eb-95d9-1c7133363fb4.png)

     You can add many many different utterances in here.
     
- We can see our two different paths built out.

![S13](https://user-images.githubusercontent.com/73324896/118266678-8c9d8080-b4d8-11eb-9bff-9754cb4557e8.png)

j. Now, Pull out two speak blocks for both the paths

![S14](https://user-images.githubusercontent.com/73324896/118267041-13eaf400-b4d9-11eb-8f2a-39b912070f1f.png)

- So if the user order the pizza correctly, we're going to say *Great! I have ordered you a pizza*

![S15](https://user-images.githubusercontent.com/73324896/118267315-7c39d580-b4d9-11eb-816e-7996cd64fdd0.png)

- If the user has cancelled their order, we're going to say *I have cancelled your order*

![S16](https://user-images.githubusercontent.com/73324896/118267517-d2a71400-b4d9-11eb-865e-53b56cda8a3e.png)

    Now You'll see that if the user says the order pizza intent they're going to hit the path 1 and we're going to say Great I've ordered you a pizza and if they triggered the cancel order intent we're going to hit path to where we'll say I have cancelled your order.
  
# Now, go ahead to prototype tab and see if it works

 1. Now go to top left and hit prototype
 
![S18](https://user-images.githubusercontent.com/73324896/118268380-f454cb00-b4da-11eb-88e4-5f1f270d3317.png)

 2. Click on start test

![S19](https://user-images.githubusercontent.com/73324896/118268521-1a7a6b00-b4db-11eb-914e-a688a248e147.png)

   After starting the test, ask your bot to order pizza, it seems like this :
    
   ![S20](https://user-images.githubusercontent.com/73324896/118268869-9674b300-b4db-11eb-9d1d-0bd19991330f.png)
   
# Now let's go over the else path found at the bottom of the choice block

- Now the question arrives that what happens when the user did not say order pizza or they didn't want to cancel an order?

This is where the else path comes into play, the else path is activated if none of the available path have been triggered or in other words if none of the intents with your choice block are matched. so, if the user didn't trigger order pizza or cancel order the user will then travel down the else path. This is very useful for narrowing the conversation back into scope.

- If the user does not say order pizza or cancel order, we're going to link the else path and we're going to say :
 
  Sorry, would you like to place an order or cancel an order.
  
 ![S21](https://user-images.githubusercontent.com/73324896/118270163-3e3eb080-b4dd-11eb-9fe6-2719f840a7f7.png)
 
 And then we're going to bring the user back to make the choice again and so Alexa will automatically go ahead and start listening again once this message has been played.
 
 - The final format will be shown like this :
  
 ![S22](https://user-images.githubusercontent.com/73324896/118270615-ece2f100-b4dd-11eb-8582-d16a2b254841.png)

 
 
## You will try this too for an amazing result : 

![S23](https://user-images.githubusercontent.com/73324896/118271004-5fec6780-b4de-11eb-86e1-5aa313ebceff.png)

   
   


 


 

   
   



    
    
    




