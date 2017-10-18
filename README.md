#Application



## INSTALLATION
* docker-compose up
* add to hosts ```127.0.0.1 seo-tool.lan seotool-database```
### Git Checkout


### ENVIRONMENT
~~~

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