#Application



## INSTALLATION
* docker-compose up
* add to hosts ```127.0.0.1 seo-tool.lan seotool-database```
### Git Checkout


### ENVIRONMENT
~~~
APP_NAME=SEOTOOL
APP_ENV=local
APP_KEY=base64:9KFlQ2DYx49fN6pVCKwmnDxBHSriMyylpMCIgaY3IRw=
APP_DEBUG=true
APP_LOG_LEVEL=debug
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=seotool-database
DB_PORT=3306
DB_DATABASE=seo_tool
DB_USERNAME=root
DB_PASSWORD=jumbo

BROADCAST_DRIVER=log
CACHE_DRIVER=file
SESSION_DRIVER=file
SESSION_LIFETIME=120
QUEUE_DRIVER=sync

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_DRIVER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
~~~


### Composer
We use composer to manage all PHP dependencies.

If you do not have [Composer](http://getcomposer.org/), you may install it by following the instructions
at [getcomposer.org](http://getcomposer.org/doc/00-intro.md#installation-nix).

You can then install the application using the following command:

Download and sets up the dependencies in the vendor directory
~~~
composer install
~~~


### NPM
we use bower to manage all CSS and JS dependencies.
Download js and css dependencies
~~~
npm install
~~~

### Grunt Task Runner

[Grunt](http://gruntjs.com/) is used to automate a lot of system tasks. If you do not have Grunt installed follow the
instructions at [gruntjs.com](http://gruntjs.com/installing-grunt). Note Grunt requires NPM to install.
~~~
grunt
~~~

Build css, grunt will build the less files into a main.css and a main.min.css file.
~~~
grunt less
~~~

Build JS, grunt will combine all non vendor js into two files, main.js and main.min.js
~~~
grunt uglify
~~~