# RiverText <a href="https://github.com/SeanMcTernan" target="_blank"><img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/7c1dcc08830e2087866a9d06c1f37d7b431edf82/ReadMe_Images/ReadMe_Badge_Small.svg" alt="Site badgeBy Sean Mc Ternan" width="120"/></a>


<img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/f481c32fdf59e90a360fae91bf47eedad2ae3f38/ReadMe_Images/RiverText/RiverText.svg" align="right"
     alt="RiverText App Image By Sean Mc Ternan" width="120" height="178">


RiverText is a system that allows users to receive river flow information from <a href="https://wateroffice.ec.gc.ca/mainmenu/real_time_data_index_e.html" target="_blank">The Canadian Water Office</a> by sending a message from a satellite phone or any SMS enabled device. By sending a message to a Toll Free number, the app takes the request and queries the corresponding river name for its recent flow information and sends it back to the user.


## Technologies Used
| Name                                                        | Purpose                                                                                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [NodeJS](https://nodejs.org/en/)         | Main programming language for the project |
| [TypeScript](https://www.typescriptlang.org/)         | Main programming language during development|
| [Axios](https://www.npmjs.com/package/axios)                      | To make requests to the Intercom API |
| [Moment](https://momentjs.com/)                      | To format the time on the API requests |
| [SimpleTexting API](https://www.simpletexting.com) | To send and receive messages                                                          |
| [Scrapi API](https://scrap2api.web.app/)                     | To query the Canadian Water Office Website                                                                                     |
| [NPM](https://www.npmjs.com/)                                | As a package manager                                                         |
| [ENV-CMD](https://www.npmjs.com/package/env-cmd)                     | To set environment variables                                                                                                 |
| [Express.js](https://expressjs.com/)                            | To run the web server                                                                                      |
| [body-parser](https://www.npmjs.com/package/body-parser)                                   | To parse the JSON Data
| [Nodemon](https://www.npmjs.com/package/nodemon)                            | Restart the app during development             

### The App

<p align="center">
  <img src="https://seanmcternan.com/static/media/RiverText.d4a65dad.jpg" alt="RiverText Image" width="738">
</p>

At this time there is no Frontend for the app, however it is operational. You can text any of the rivers in the rivers array to 833-589-0354 and receive a message. For example, text Stikine to 833-589-0354 and ask for the level of the Stikine River in Northern BC.


### Motivation & what was learned

In 2019, I was fortunate enough to successfully kayak down one of the most challenging stretches of whitewater on the planet in Northern BC. The Grand Canyon of the Stikine. Traditionally, the run takes 3 days, so within those 3 days much can change as far as the river level is concerned. Each evening I sent a message via satellite phone to a friend to ask what the current level on the river was, I would have to wait for him to check his phone, then the government website for an accurate flow reading, then reply. It was quite cumbersome. From this, the idea for this app was created. An app that would sit and listen for inbound requests for river levels on a given set of rivers and reply with the latest reading. 

To set myself an additional challenge I decided to write this app in TypeScript. I had not yet built a live app via Typescript, so I thought this would be a great opportunity to apply what I had learned in some courses I was taking. 
 
The app as it stands is in its raw form. Going forward I would like to have a front end to show a map of rivers that are available and add a host server for remote to send flow data from gauge projects we are also working on. 

### Install Instructions

1. Clone/Download the Repository 
2. From the folder run `npm install`
3. Run `npm run dev`
4. Make a request to the sever via Postman, or whatever your preferred app is, be sure to enter your cellphone so the app texts you: 
`http://localhost:3000/riverdata/webhooks?from= ENTER YOUR CELLPHONE HERE &to=8335890354&subject&text=Elk`

### Development Time: 1 Week
