[![DOI](https://zenodo.org/badge/293692566.svg)](https://zenodo.org/badge/latestdoi/293692566)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/himol7/American-Football-Analytics-Application.svg?branch=master)](https://travis-ci.org/himol7/American-Football-Analytics-Application)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/himol7/American-Football-Analytics-Application/issues)
[![HitCount](http://hits.dwyl.com/himol7/https://githubcom/himol7/American-Football-Analytics-Application.svg)](http://hits.dwyl.com/himol7/https://githubcom/himol7/American-Football-Analytics-Application)

# TouchDown, an Analytics application for American Football

[![Watch the video](/logo/icon.png)](https://youtu.be/5MLSkIzp31Q)

### Project Idea:

Create a web application which can:
* Analyze the football match data
* Show the summary visuals of the analysis

### Why TouchDown?
In 2002, Oakland Atheltics, a seemingly medium-strength team achieved unusual success in their season even after departure of key players. Behind their success was sabermetrics, a field which thrives on quantitative analysis of sports data. Drawing motivation from this success story and understanding the problems which the current football coaches at NC State are facing, we have developed TouchDown - a customer-centric easy-to-use application which provides you a pictorial analysis of position specific player performances.

With a simple UI, all you need to do it just upload the data file<sup>1</sup> and the application promptly outputs the images where you can view your analysis. Furthermore, with some exciting features lined up, we'd be happy to incorporate some new features on demand.

To use the application, all the user needs to do is to upload the data file on provided tab.
![initialpage](images/frontpage.jpeg)

Here is a sample of outputs generated by uploading one of the games data file in out application.

![fieldgoal](images/fieldgoal.jpeg)
Here as you can see, Player **S99** was present **2** times on position **H** and his overall score is **0.0**

![punt](images/punt.jpeg)
Here as you can see, Player **D28** was present **6** times on position **GL** and his overall score is **-0.5**

As a part of **Project 1**, we have created a functioning application which performs data analytics on games data and outputs 6 individual images for each type of play. Each of these images have summarized data of respective plays imposed on them.

### Tasks to be completed as a part of Project 2:

1. Add functionality to get output of multiple files at once.
2. After 1 is finished, add functionality to get output filtered based on SEASON / MATCH WEEK / MONTH / MATCH and OPPONENT
3. Add Drag-and-Drop functionality in the Front End.
4. Deploy the application on one of the publically available Cloud Services

### Technology Stack
* Python Flask
* Vue.JS


### Instructions to run:
1. Install the dependency for backend application.
```
pip install -r requirements.txt
```
2. Please go to vue-app directory for running the front end.
* Make sure that npm is installed in the system
```
Run npm install 
```
* Install Vue cli
```
npm install -g @vue/cli 
```
  OR
```
yarn global add @vue/cli
```
* Run Vue UI
```
vue ui
 
```
For detailed steps for fronted visit[here](https://www.telerik.com/blogs/creating-and-managing-vue-projects-with-vue-ui)

For running the frontend application in a container go through the README.md present inside vue-app.


3. Please go from another terminal to backend/src directory for running the back end. For deploying the backend using docker you can also follow the  instructions in the readme of backend and spin up containers for backend server.
```
python app.py

```

<sup>1</sup> Data file refers to the files which are used by football coaches at NC State. The original source of the files is not known to us but it is believed that the source is widely popular amongst football coaches.
