# Newsletter

## Table of contents

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## My process

### Built with

- HTML5
- CSS3
- Bootstrap
- MailChimp API
- Node.js
- Express.js
- Heroku

### What I learned

I learned how to implement the MailChimp API in this project, as well as reinforced my knowledge of Node and Express. I also used Nodemon for deploying locally, and Heroku for deploying it to the web, which I found to be a convenient and resourceful deploying app. I also relied heavily on JSON destructuring in order to get the values and variables I needed to send the user's data to my MailChimp emailing list.

Code written in this project that I want to highlight:

```Node.js
async function run() {
const response = await mailchimp.lists.addListMember(audienceId, {
 email_address: subscribingUser.email,
 status: "subscribed",
 merge_fields: {
 FNAME: subscribingUser.firstName,
 LNAME: subscribingUser.lastName
}
});
```
First time using async functions in any project of mine. While still getting the hang of async and promise functions, I used it in this project to add users' information into a specific mailing list based on the audience ID and subscribe them to it.

```Node.js
run().catch(e => res.sendFile(__dirname + "/failure.html"));
});
```
This line of code, after running the run() function, catches errors using another catch() function, and once an error is found, the /failure.html page is sent to the user, where they are able to go back to the main page and try again.

### Continued development

Using Node and Express is a great starting point in the world of backend development. However I would love to not only expand my knowledge of these languages by using them in more projects, but I would also like to learn other backend languages such as C# or Python to see what else backend is capable of.


## Author

- Website - [Elyse Chambers](https://www.diaryofelyse.com)
- Frontend Mentor - [Elyseeloo](https://www.frontendmentor.io/profile/Elyseeloo)
- Twitter - [@Elyseeloo\_](https://www.twitter.com/elyseeloo_)
