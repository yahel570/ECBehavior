define(['managerAPI'], function(Manager){

	// This code is responsible for styling the piQuest tasks as panels (like piMessage)
	// Don't touch unless you know what you're doing
	var API = new Manager();
	API.addSettings('skin', 'demo');
	API.addSettings('skip',true);

	var css = API.shuffle(['CS1','CS2','CS3','CS4','CS5']);
	var CSpos1 = css[0];
	var CSpos2 = css[1];
	var CSneg1 = css[2];
	var CSneg2 = css[3];
	var CSneu = css[4];	
	var pospic = API.shuffle(['pos1.jpg','pos2.jpg','pos03.jpg','pos04.jpg','pos05.jpg','pos06.jpg','pos07.jpg','pos08.jpg', 'pos09.jpg',
	'pos10.jpg', 'pos11.jpg', 'pos12.jpg', 'pos13.jpg', 'pos14.jpg', 'pos15.jpg', 'pos16.jpg']);
	var negpic = API.shuffle(['neg1.jpg','neg2.jpg','neg03.jpg','neg04.jpg','neg05.jpg','neg06.jpg','neg07.jpg','neg08.jpg', 'neg09.jpg',
	'neg10.jpg', 'neg11.jpg', 'neg12.jpg', 'neg13.jpg', 'neg14.jpg', 'neg15.jpg', 'neg16.jpg']);
	var cond = API.shuffle(['cs', 'no', 'novel', 'iat']);
	var condition = cond[0];
	API.addGlobal({
	    condition: condition,
		pos1: pospic[0],
		pos2: pospic[1],
		pos3: pospic[2],
		pos4: pospic[3],
		pos5: pospic[4],
		pos6: pospic[5],
		pos7: pospic[6],
		pos8: pospic[7],
		pos9: pospic[8],
		pos10: pospic[9],	
		pos11: pospic[10],
		pos12: pospic[11],
		pos13: pospic[12],
		pos14: pospic[13],
		pos15: pospic[14],
		pos16: pospic[15],		
		neg1: negpic[0],
		neg2: negpic[1],
		neg3: negpic[2],
		neg4: negpic[3],
		neg5: negpic[4],
		neg6: negpic[5],	
		neg7: negpic[6],
		neg8: negpic[7],
		neg9: negpic[8],
		neg10: negpic[9],
		neg11: negpic[10],
		neg12: negpic[11],			
		neg13: negpic[12],
		neg14: negpic[13],
		neg15: negpic[14],
		neg16: negpic[15],
        CSpos1: CSpos1,
        CSpos2: CSpos2,
        CSneg1: CSneg1,
        CSneg2: CSneg2,	
        CSneu: CSneu,
		baseURL : '/implicit/user/tal/ecextque1/images/', 
		iatcat1: CSpos1,
		iatcat2: CSneg1,
	    posWords : API.shuffle([
            'Pleasant', 'Good', 'Outstanding', 'Beautiful', 
            'Magnificent', 'Marvellous', 'Excellent', 'Appealing', 'Delightful', 'Nice']), 
        negWords : API.shuffle([
            'Unpleasant', 'Bad', 'Horrible', 'Miserable', 
            'Hideous', 'Dreadful', 'Painful', 'Repulsive', 'Awful', 'Ugly'])		
	});
	
	API.save({CSpos1:CSpos1, CSpos2:CSpos2, CSneg1:CSneg1, CSneg2:CSneg2, CSneu:CSneu, condition:condition });
	
    API.addSettings('preloadImages',[
	'/implicit/user/tal/ecextque1/images/CS1.jpg', 
	'/implicit/user/tal/ecextque1/images/CS2.jpg',
	'/implicit/user/tal/ecextque1/images/CS3.jpg',
	'/implicit/user/tal/ecextque1/images/CS4.jpg',
	'/implicit/user/tal/ecextque1/images/CS5.jpg',
	'/implicit/user/tal/ecextque1/images/CS1foil.jpg', 
	'/implicit/user/tal/ecextque1/images/CS2foil.jpg',
	'/implicit/user/tal/ecextque1/images/CS3foil.jpg',
	'/implicit/user/tal/ecextque1/images/CS4foil.jpg',
	'/implicit/user/tal/ecextque1/images/CS5foil.jpg',	
	'/implicit/user/tal/ecextque1/images/CS1s.jpg', 
	'/implicit/user/tal/ecextque1/images/CS2s.jpg',
	'/implicit/user/tal/ecextque1/images/CS3s.jpg',
	'/implicit/user/tal/ecextque1/images/CS4s.jpg',	
	'/implicit/user/tal/ecextque1/images/CS5s.jpg',
	'/implicit/user/tal/ecextque1/images/pos1.jpg',
	'/implicit/user/tal/ecextque1/images/pos2.jpg',
	'/implicit/user/tal/ecextque1/images/pos03.jpg',
	'/implicit/user/tal/ecextque1/images/pos04.jpg',
	'/implicit/user/tal/ecextque1/images/pos05.jpg',	
	'/implicit/user/tal/ecextque1/images/pos06.jpg',	
	'/implicit/user/tal/ecextque1/images/pos07.jpg',	
	'/implicit/user/tal/ecextque1/images/pos08.jpg',	
	'/implicit/user/tal/ecextque1/images/pos09.jpg',	
	'/implicit/user/tal/ecextque1/images/pos10.jpg',	
	'/implicit/user/tal/ecextque1/images/pos11.jpg',	
	'/implicit/user/tal/ecextque1/images/pos12.jpg',	
	'/implicit/user/tal/ecextque1/images/pos13.jpg',	
	'/implicit/user/tal/ecextque1/images/pos14.jpg',	
	'/implicit/user/tal/ecextque1/images/pos15.jpg',	
	'/implicit/user/tal/ecextque1/images/pos16.jpg',	
	'/implicit/user/tal/ecextque1/images/neg1.jpg',
	'/implicit/user/tal/ecextque1/images/neg2.jpg',
	'/implicit/user/tal/ecextque1/images/neg03.jpg',
	'/implicit/user/tal/ecextque1/images/neg04.jpg',
	'/implicit/user/tal/ecextque1/images/neg05.jpg',	
	'/implicit/user/tal/ecextque1/images/neg06.jpg',	
	'/implicit/user/tal/ecextque1/images/neg07.jpg',	
	'/implicit/user/tal/ecextque1/images/neg08.jpg',	
	'/implicit/user/tal/ecextque1/images/neg09.jpg',	
	'/implicit/user/tal/ecextque1/images/neg10.jpg',	
	'/implicit/user/tal/ecextque1/images/neg11.jpg',	
	'/implicit/user/tal/ecextque1/images/neg12.jpg',	
	'/implicit/user/tal/ecextque1/images/neg13.jpg',	
	'/implicit/user/tal/ecextque1/images/neg14.jpg',	
	'/implicit/user/tal/ecextque1/images/neg15.jpg',	
	'/implicit/user/tal/ecextque1/images/neg16.jpg'
	 ]);	

 
	
	API.addTasksSet({
		instructions: 
			[{type:'message', buttonText:'Continue'}], 	
		consent : [{ 
			inherit:'instructions', name:'consent', templateUrl: 'consent.jst', title:'Consent', 
			piTemplate:true, header:'Consent Agreement: Implicit Social Cognition on the Internet'
		}], 
		intro : [{ 
			inherit:'instructions', name:'intro', templateUrl: 'intro.jst', title:'Introduction',
	 	    piTemplate:true, header:'Welcome'
		}], 			
		realstart : [{
			type: 'pip', version:'0.3', name: 'realstart', scriptUrl: 'conditioning.js'
		}],
		bextr : [{ 
			inherit:'instructions', name:'bextr', templateUrl: 'bextr.jst', title:'Observation Task',
	 	    piTemplate:true, header:'Observation Task'
		}], 
		bext : [{ 
			inherit:'instructions', name:'bext', templateUrl: 'bext.jst', title:'Observation Task',
	 	    piTemplate:true, header:'Observation Task'
		}], 		
		extinction: [{
			type: 'pip', version:'0.3', name: 'extinction', scriptUrl: 'extinction.js'
		}],		
		toexp1: [{
		inherit:'instructions', name:'toexp1', templateUrl: 'toexp1.jst', title:'Questionnaire',
		piTemplate:true, header:'Questionnaire'
		}],
		toexp2: [{
		inherit:'instructions', name:'toexp2', templateUrl: 'toexp2.jst', title:'Questionnaire',
		piTemplate:true, header:'Questionnaire'
		}],	
		toexpcontrol: [{
		inherit:'instructions', name:'toexpcontrol', templateUrl: 'toexpcontrol.jst', title:'Questionnaire',
		piTemplate:true, header:'Questionnaire'
		}],		
		firstexp: [{
			type: 'quest', name: 'firstexp', scriptUrl: 'exp1.js'
		}],
		secondexp: [{
			type: 'quest', name: 'secondexp', scriptUrl: 'exp2.js'
		}],	
		controlexp: [{
			type: 'quest', name: 'controlexp', scriptUrl: 'expcontrol.js'
		}],			
		instiat:[{ 
			inherit:'instructions', name:'instiat', templateUrl: 'instiat.jst', title:'Implicit Association Test',
	 	    piTemplate:true, header:'Implicit Association Test'
		}],		
		iat : [{
			type: 'pip', version:'0.3', name: 'iat', scriptUrl: 'iat.js'
		}],	
		introm:[{ 
			inherit:'instructions', name:'introm', templateUrl: 'introrom.jst', title:'Questionnaire',
	 	    piTemplate:true, header:'Questionnaire'
		}],	
		rom: [{
			type: 'quest', name: 'rom', scriptUrl: 'rom.js'
		}],			
		lastpage:[{ 
			inherit:'instructions', name:'lastpage', templateUrl: 'debriefing.jst',  piTemplate:'debrief', last:true
		}]			
	});
	
	
	API.addSequence([
		{inherit:'consent'},
		{inherit:'intro'},
		{inherit:'realstart'},
		{
         mixer: 'multiBranch',
           branches: [
                     {conditions: [
                     {compare: 'global.condition', to: 'cs'}
                     ],
                     data: [
                     {inherit:'toexp1'},             
                     {inherit:'firstexp'},
                     {inherit:'bextr'},             
                     {inherit:'extinction'},
                     {
                      mixer: 'random',
             		  data: [
                      {
                      mixer: 'wrapper',
                              data: [{inherit:'toexp2'},	
                        	         {inherit:'secondexp'}]
                      },
                      {
                      mixer: 'wrapper',
                              data: [{inherit:'instiat'},	
                            	     {inherit:'iat'}]
                       }]}                       
                      ]},
                      {conditions: [
                      {compare: 'global.condition', to: 'novel'}
                      ],
                      data: [
                      {inherit:'toexpcontrol'},             
                      {inherit:'controlexp'},
                      {inherit:'bextr'},             
                      {inherit:'extinction'},
                      {
                       mixer: 'random',
             	 	   data: [
                       {
                       mixer: 'wrapper',
                              data: [{inherit:'toexp2'},	
                        	         {inherit:'secondexp'}]
                       },
                       {
                       mixer: 'wrapper',
                              data: [{inherit:'instiat'},	
                            	     {inherit:'iat'}]
                       }]}                     
                    ]},
                       {conditions: [
                      {compare: 'global.condition', to: 'no'}
                      ],
                      data: [
                      {inherit:'bext'},             
                      {inherit:'extinction'},
                      {
                       mixer: 'random',
             	 	   data: [
                       {
                       mixer: 'wrapper',
                              data: [{inherit:'toexp2'},	
                        	         {inherit:'secondexp'}]
                       },
                       {
                       mixer: 'wrapper',
                              data: [{inherit:'instiat'},	
                            	     {inherit:'iat'}]
                       }]}                     
                    ]}                   
                 ],
             elseData: [
                        {inherit:'instiat'},	
                        {inherit:'iat'}]},
		{inherit:'lastpage'}		
	]);                  
	return API.script;
});












































