# Facaebook Post Automater

## Description
    * This module will automate your facebook post.

## Installation
    * npm i facaebook-post-automater

## Use
    * const { getFacebookPage, postOnGroup } = require("facaebook-post-automater");

    * getFacebookPage(yourEmailOrPhone, yourPassword, chromePath, headless(OPTIONAL), delayYouWantAfterFacebookLoginInMinutes(OPTIONAL))
        .then(page => postOnGroup(page, groupId, contentToPost))
        .then(console.log)
        .catch(console.log);

    * Example: getFacebookPage("sachintripathi7398@gmail.com", "yourPassword", "/usr/bin/google-chrome", false, 2)
        .then(page => postOnGroup(page, 477680952327514, "Hello Detective !"))
        .then(console.log)
        .catch(console.log);

## Parameters
    * chromePath: Path where chrome is installed in your system for Ubuntu: "/usr/bin/google-chrome", You can google for the rest OS.
    * headless: false is you want GUI, true for no GUI. Default value is false.
    * delayYouWantAfterFacebookLoginInMinutes : Sometimes just after FB login facebook ask you to verify yourself in that   case you need some time for verification by default you get 1 minute But you get more delay just pass its value in minutes.
    * page : page object will help you to control the tab. You don't need to do much with it just pass as mentioned in example.
    * groupId : Every FB group have a ID in its URL (https://www.facebook.com/groups/477680952327514). here groupId = 477680952327514.
    * contentToPost : This would be the content you want to post on group. That should be a valid string which you can type in facebook post.
    
## Note
    * This module is currently available for group post only. We are updating it daily. Check daily for more updates.
    * For any help write me at: sachintripathi7398@gmail.com.