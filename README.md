# RiverText <a href="https://github.com/SeanMcTernan" target="_blank"><img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/140c9255ba95e71fc0988bc36cc1f327fe360b9f/ReadMe_Badge.svg" width="120"/></a>


<img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/cd44fb73ee68d7074b3d8677c2afc5bad6f355ec/RiverText.svg" align="right"
     alt="Clear-Monitoring App Image By Sean Mc Ternan " width="120" height="178">


RiverText is a system that allows users to receive river flow information from <a href="https://wateroffice.ec.gc.ca/mainmenu/real_time_data_index_e.html" target="_blank">The Canadian Water Office</a> by sending a message from a satellite phone or any SMS enabled device. By sending a message to a Toll Free number, the app takes the request and queries the corresponding river name for its recent flow information and sends it back to the user.


## Technologies Used
| Name                                                        | Purpose                                                                                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [NodeJS](https://nodejs.org/en/)         | Main programming langauge for the project |
| [TypeScript](https://www.typescriptlang.org/)         | Main programming langauge during development|
| [Axios](https://www.npmjs.com/package/axios)                      | To make requests to the Intercom API |
| [Moment](https://momentjs.com/)                      | To format the time on the API requests |
| [SimpleTexting API](www.simpletexting.com) | To send and receive messages                                                          |
| [Scrapi API](https://scrap2api.web.app/d)                     | To query the Canadian Water Office Website                                                                                     |
| [NPM](https://www.npmjs.com/)                                | As a package manager                                                         |
| [ENV-CMD](https://www.npmjs.com/package/env-cmd)                     | To set environment variables                                                                                                 |
| [Express.js](https://expressjs.com/)                            | To run the web server                                                                                      |
| [body-parser](https://www.npmjs.com/package/body-parser)                                   | To parse the JSON Data
| [Nodemon](https://www.npmjs.com/package/nodemon)                            | Restart the app during development             

### The App

<p align="center">
  <img src="https://github.com/SeanMcTernan/SeanMcTernan/blob/main/RiverText.jpg?raw=true" alt="Clear Monitoring CLI" width="738">
</p>

At this time there is no Frontend for the app, however it is operational. You can text any of the rivers in the rivers array to 833-589-0354 and receive a message. For example, text Stikine to 833-589-0354 and ask for the level of the Stikine River in Northern BC.
