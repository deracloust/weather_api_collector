# Weather API Collector

## Table of contents

- [Introduction](#introduction)
- [Technologies used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)

## Introduction

This project is simply API collector, which collects data from `https://openweathermap.org` API, saves data to the mySQL database and shows the data using `Grafana`.
All of software are running in Docker containers.

## Technologies used

- Backend - <b>node.js</b>.
- Database - <b>mySql</b> used with ORM <b>Sequelize</b>.
- Frontend - <b>Grafana</b>.

## Features

- Collecting data such as: temperature, humidity, pressure and wind speed for country you can choose. Application sends the API call in 1 minute interval.
- Save the data to mySql database.
- Visualize data on Grafana.

## Screenshoots

![img](./images/weatherDashboard.png)

## Setup

To run the project (tested on Debian 11):

1. Make sure you have `docker` and `docker compose` installed.
2. Login to your server and clone the repository.
3. Enter the repo and search for `.env.example` file.
4. Put there all of informations.
5. Rename `.env.example` file to `.env`.
6. Run the containers by using `docker compose up -d` in main folder (includes `docker-compose.yml` file).

---
Work in progess
---

