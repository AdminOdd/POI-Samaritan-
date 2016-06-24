$(document).ready(function(){
	setTimeout(function(){
		executeSamaritan('what are your commands ?');
//		executeSamaritanWrapper('adsasd')();
	}, 700);

	var executeSamaritanWrapper = function(msg){
		return function(){executeSamaritan(msg)};
	};

	if (annyang) {
		var commands = {
			'locate the machine': executeSamaritanWrapper('Target can not be reached !'),
			'where are you': executeSamaritanWrapper("I am everywhere"),
			'who am I': executeSamaritanWrapper("Asset"),
			'find Finch': executeSamaritanWrapper('Locating Harold Finch ?'),
			'yes': executeSamaritanWrapper('Yes what ?'),
			'no': executeSamaritanWrapper('Ok then what is your suggestion ?'),
			'hello': executeSamaritanWrapper('Hello'),
			'who are you': executeSamaritanWrapper('I am Samaritan !'),
			'what are you': executeSamaritanWrapper('I am Samaritan !'),
			'turn off': executeSamaritanWrapper('Shutdown Initiated'),
			'restart': executeSamaritanWrapper('Initiating Reboot Sequence'),
			'who created you': executeSamaritanWrapper("That's irrelevant"),
			'who won': executeSamaritanWrapper('team machine'),
			'say my name': executeSamaritanWrapper('heisenberg'),
			'find :name': function(name){
				executeSamaritan('searching for ' + name);
			},
			'search (for) :name': function(name){
				executeSamaritan('searching for ' + name);
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth, fourteenth, fifthteenth, sixthteenth, seventeenth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ' + ninth + ' ' + tenth + ' ' + eleventh + ' ' + twelfth + ' ' + thirteenth + ' ' + fourteenth + ' ' + fifthteenth + ' ' + sixthteenth + ' ' + seventeenth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth, fourteenth, fifthteenth, sixthteenth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ' + ninth + ' ' + tenth + ' ' + eleventh + ' ' + twelfth + ' ' + thirteenth + ' ' + fourteenth + ' ' + fifthteenth + ' ' + sixthteenth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth, fourteenth, fifthteenth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ' + ninth + ' ' + tenth + ' ' + eleventh + ' ' + twelfth + ' ' + thirteenth + ' ' + fourteenth + ' ' + fifthteenth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth, fourteenth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ' + ninth + ' ' + tenth + ' ' + eleventh + ' ' + twelfth + ' ' + thirteenth + ' ' + fourteenth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ' + ninth + ' ' + tenth + ' ' + eleventh + ' ' + twelfth + ' ' + thirteenth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ' + ninth + ' ' + tenth + ' ' + eleventh + ' ' + twelfth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ' + ninth + ' ' + tenth + ' ' + eleventh + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth, ninth, tenth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ' + ninth + ' ' + tenth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth, ninth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ' + ninth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh, eighth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ' + eighth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth, seventh){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ' + seventh + ' ?');		
			
			},
			':first :second :third': function(first, second, third, forth, fifth, sixth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ' + sixth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth, fifth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ' + fifth + ' ?');	
			
			},
			':first :second :third': function(first, second, third, forth){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ' + forth + ' ?');	
			},
			//repeats words if it's not one of the above
			':first :second :third': function(first, second, third){
				executeSamaritan(first + ' ' + second + ' ' + third + ' ?');
				
			},
			':first :second': function(first, second){
				executeSamaritan(first + ' ' + second + ' ?');
			
			},
			':word': function(word){
				executeSamaritan(word + ' ?');
			}
		};

		annyang.addCommands(commands);
		annyang.start();
	}

});
