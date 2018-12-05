[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | [4](./lab-04.md) | [5](./lab-05.md) | [6](./lab-06.md) | 7 | [8](./lab-08.md) | [9](./lab-09.md)

---

# Week 3 > Lab 7

### Web APIs

Web APIs are a critical part of a web developers job. Data that is available on the internet is available in two ways: as web pages, or as raw data without HTML. When we want to access the contents of a web page, we have to use a library like cheerio, but this is inefficient and should only be used when there isn't another way.

Many websites and companies provide "Web APIs" that allow you to access their data in raw from using URLs. A "Web API" is a "Web Application Programming Interface" that defines how you can get the data you want over the web.

This lab will help you understand the concept of Web APIs and how to interact with simple Web APIs.

#### Objective

- Understand the basics of using Web APis
- Retrieve contents from Web APIs using libraries such as jQuery and request

#### Prerequisites

- Get an API Key from Nasa [here](https://api.nasa.gov/index.html#apply-for-an-api-key)
- Get an API Key from [Darksky](https://darksky.net/dev)
- Get an API Key from [OpenCage Geocoder](https://opencagedata.com/)

#### Part 1 - NASA Web API

1. Using the example URL provided when you signed up for your api key, use it to look at the JSON in your browser.

2. Create a **web page** called `nasa.html` that includes the jQuery library as we've done before.

3. Use the jQuery `$.get()` method to retrieve the data from the example URL into your browser.

4. Get the URL of the image from the `url` property. *Note: jQuery will convert the response into a JSON object for us, so you shouldn't need to use `JSON.parse()` in this case.*

5. Use jQuery to display the image on the page by adding an `<img>` element onto your page. You can also display the title of the image and the image description.

#### Part 2 - Geocode API

1. Sign up for a developer account at [OpenCage Geocoder](https://opencagedata.com/) (it's free).
2. Retrieve an API key for your developer account.
3. Type the following url into your browser:

```
https://api.opencagedata.com/geocode/v1/json?q=455+granville+st+vancouver&key=YOUR_API_KEY
```

What do you get back in your browser?

4. Write a **node program** that uses 'request' to get the response from the above URL.

5. Use `JSON.parse()` to turn the response into a Javascript Object.

6. Print out the following message:

```
BrainStation Vancouver's Latitude is ${latitude} and Longitude is ${longitude}
```

#### Part 3 - Weather API and HTTP Clients in Node

In this exercise, we will use Node to send HTTP requests to multiple external APIs, and retrieve information that we want.

##### Instructions

Check out the documentation for darksky at https://darksky.net/dev/docs/. You will see that an API call for the current forecast requires an API Key, and the Latitude and Longitude of the location we want the forecast for.

1. Sign up for a developer account at [Darksky](https://darksky.net/dev) (it's free).
2. Retrieve an API key for your developer account.
3. Inside your labs folder, create a JavaScript file called `weather.js`, and using `request`, send a GET request to `https://api.darksky.net/forecast/ + YOUR_API_KEY + /43.700,-79.5667`
Look through the response data for current temperature and summary of weather, and log the information to the console like the following:
```
Current Weather in America/Vancouver
temperature: 24.70 degrees Celsius
summary: Clear
```

4. Using the latitude/longitude retrieved from Part 2, pass them to the Darksky API and display current weather for BrainStation.

5. Modify your program to either take a city from the command line (using `process.argv`), or prompt the user for a city (using `readline-sync`).
    - Pass the city to the Google Maps API as in Part 2
    - Once you have retrieved the latitude/longitude, call the Darksky API and print out the location/weather that the user requested.

- Hint: Looking through the response data in the console could prove to be a difficult task. Usually public API services will document how their response data is structured. You should teach yourself how to read through this kind of documentation. Consult https://darksky.net/dev/docs/forecast to get a better idea of how to find the desired information.

---
[Week 3 Home](../ReadMe.md) | [Go to Lab 8 >>](./lab-08.md)
