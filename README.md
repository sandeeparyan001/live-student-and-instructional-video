## How to use this ?

### Navbar Section 
Navbar have the three section -
**Home** , **Form** and **About-Me**

### Live Instructional Video 
In this section I have embedded the live YouTube instruction video. To play the live Instructional video add the **Livestream-Video-ID** at the line of 111 in **index.html** file.
when video plays student can listen it.

### live student video
when you have to run the code then one popup message is shown. this message takes the permission from user to open the camera or webcame for student video. this is on the right side.

### Emotional status of students
By default status is **Neutral**. this is work on the emotional recognition api. webcame or camera detect the face of students and send the response to the emotional status section that is either happy or sad. if this section is not working for your system then use own face detection APIs key for result.

### Simple form 
go to the form and fill the details and submit. after submit it save the all the data to MongoDB database. if you get the error **Cannot POST to form** then add the full name of file .ie **/form.html** at line no 32 in **index.js**

### How to run

go to the terminal and type the **nodemon index.js** to run the code. In the browser open the localhost:3000
