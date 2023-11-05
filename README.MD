# SimpleJsServer

This project serves as a simple node server that serves all the js files in a given folder

## Setup

### Requirements

NodeJs and npm must be installed

### Installation

```
npm install -g simple-js-server
```

### Starting

```
sjss <path_to_js_dir> [port]
```

when no port is specified it will use 3000

## Use case

### Using with Nginx Reverse to inject js into PhotoPrism

- Create a new proxy host and link it to the sjss-server
  - add the sjss-server with some url (js.example.com)
- edit the proxy host for your PhotoPrism instance
  - in the  advanced tab add (replace with your url):
      ```
      sub_filter '</head>' '<script src="https://js.example.com/"></script></head>';
      sub_filter_once on;
      ```
    
now on every PhotoPrism instance loaded you get the js injected, 
this allows for the use of "extensions" even in the mobile application

## THIS SHOULD NOT BE USED IN PRODUCTION OR TO SERVE END-USERS

This project was made for injecting js via a nginx reverse proxy,
specifically for injecting into the PhotoPrism frontend,
as a way to allow easy customisation and addon creation

See my PhotoPrism Projects for more details
