var Stomp = require('stomp-client');

var stomp = new Stomp('172.27.30.61', 61613, 'artemis', 'simetraehcapa');

var connect = function() {
	stomp.connect(function(sId) {
		stomp.subscribe('jms.topic.application_state', function(body, headers) { 
			console.log(body, headers);
		}); 
	});
};

process.on('SIGINT', function() {
	stomp.disconnect(function() {
		console.log('DISCONNECTED');
	});
});
