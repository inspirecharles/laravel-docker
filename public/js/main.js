"use strict";

(function(){
	var Vue = require('vue/dist/vue.js');

var app = new Vue({
  	el: '#app',
  	mounted:function(){
    	this.message = 'hello world'
  	},
  	data: {
  		message: null,
  	},
  	methods: {
  		testMethod: function(){
  			alert(this.message);
  		}
  	}
})

})();