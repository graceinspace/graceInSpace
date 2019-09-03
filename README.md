# graceInSpace

https://i.imgur.com/mXhucRC.png

[homePage]: https://i.imgur.com/mXhucRC.png "Our Home Page"

## Grace in Space

An elderly alien named Grace was traveling through space for her annual beach vacation when she dropped her bag! Can you help her collect all of her belongings before they fly away?

### Game Setup

Visit https://viromedia.com/ to obtain an api key and paste it into the sharedProps object in App.js and WelcomeScreen.js as the value of the key ‘apiKey’. 

In order for the game to work, you must also have a database set up in firebase and paste the firebaseConfig data into a file in the root directory called ‘firebaseConfig.js’.

### Game Play

When the setup is complete, you can run `npm start` to run the code. Then, open the game with the Viro Media app. Next, you can read Grace’s story, read the game instructions, and choose to sign up, sign in, or play anonymously in which case your score will not be saved.

Next, choose a level (easy, medium, or hard) and press ‘play’. A VR outer space scene will appear, and Grace’s items will begin floating around space in random locations. Their speed depends on which level was selected. When you see an item, tap it to ‘collect’ it before it flies away. You’ll probably have to move your phone all around you to find all of the items. A static header at the top of the screen displays how many items you’ve found so far as well as the amount of time you have left. If you collect all of the items before 25 seconds runs out, congratulations, you win!

[Click this link to watch a full game demonstration](https://youtu.be/-HUuZn3BKrQ)
