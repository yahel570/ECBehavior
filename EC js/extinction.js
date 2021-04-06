/* The script wrapper */
define(['pipAPI','pipScorer'], function(APIConstructor,Scorer) {
// This wrapper is neccesary in order to activate the API

	var API = new APIConstructor();
	var scorer = new Scorer();	
	var global = API.getGlobal();
	var CSpos1 = global.CSpos1;
	var CSpos2 = global.CSpos2;
	var CSneg1 = global.CSneg1;
	var CSneg2 = global.CSneg2;	
	var CSneu = global.CSneu;	
	
	API.addSettings('base_url',{
		image : global.baseURL
	});

	//Small canvas.
	API.addSettings('canvas',{
		maxWidth: 800,
		proportions: 0.8,
		textSize: 7,
		canvasBackground: 'white',
		background: '#D3FFCE',
		borderColor: 'black'
	});
	// Define where the logging records should be sent.
	API.addSettings('logger',{
		pulse: 5,
		url : '/implicit/PiPlayerApplet'
	});

	//Set global variable to count roaches, puppies and points.
	API.addGlobal({npup:5, nrch:5, pts:0, ppts:0, mls:0});

	/********
	Media
	*********/

	/********
	STIMULI
	*********/
		
	API.addStimulusSets('default',{nolog:true});
	
	//Set the images of the creatures.

	API.addStimulusSets('fix',[
		{inherit:'default', media: {word: '+'}, css: {color:'black', fontSize: '2.0em'}, handle: 'fix'}
	]);	
	
	
	
	API.addStimulusSets('score',[
		{
			inherit:'default', 
			css:{color:'black', padding:'2%', fontSize:'0.5em'}, 
			nolog:true
		}
	]);	
		
	API.addStimulusSets('milsScore',[
		{
			inherit : 'score', 
			handle: 'milsScore',
			media: {inlineTemplate: '<span>Step: <%= global.mls %> out of 40</span>'}
		}
	]);	

		

	
	/********
	TRIALS
	*********/

	API.addTrialSets('ec',[{
		data : {block:1, score:0}, 
		input: [
			{handle:'skip1',on:'keypressed', key:27}
				//Esc key. Esc+enter to skip the block. See later who we handle 'skip1' inputs.
		],
		interactions: [
			// Display the target stimulus.
			{
				conditions:[{type:'begin'}],
				actions: [
				    {type:'showStim', handle: 'fix'},
					{type:'trigger', handle:'showTarget',duration:250}
				]
			},

			// Display the target stimuli.
			{
				conditions:[{type:'inputEquals', value:'showTarget'}],
				actions: [
					{type:'hideStim',handle:'fix'},				
					{type:'showStim', handle: 'cs'},
					{type:'trigger', handle:'ITI',duration:1500}
				]
			},

			// Inter trial interval1
			{
				conditions: [{type:'inputEquals', value:'ITI'}],
				actions:[
					{type:'hideStim',handle:'cs'},
					{type:'showStim',handle:'milsScore'},							
					{type:'trigger', handle:'end',duration:1500}
				]
			},
			// End trial
			{
				conditions: [
					{type:'inputEquals', value:'end'}
				],
				actions:[			
					{type:'endTrial'}
				]
			},
			// skip block by Esc+Enter
			// activate skipping:
			{
				conditions: [{type:'inputEquals',value:'skip1'}],
				actions: [
					{type:'setInput',input:{handle:'skip2',on:'enter'}}
				]
			},
			// skip:
			{
				conditions: [{type:'inputEquals',value:'skip2'}],
				actions: [
					{type:'goto', destination: 'nextWhere', properties: {blockStart:true}},
					{type:'endTrial'}
				]
			}
		]
	}]);
	
	//Define the instructions trial
	API.addTrialSets('inst',{
		input: [
			{handle:'space',on:'space'} //Will handle a SPACEBAR response
		],
		interactions: [
			{ // begin trial
				conditions: [{type:'begin'}],
				actions: [{type:'showStim',handle:'All'}] //Show the instructions
			},
			{
				conditions: [{type:'inputEquals',value:'space'}], //What to do when space is pressed
				actions: [
					{type:'hideStim',handle:'All'}, //Hide the instructions
					{type:'setInput',input:{handle:'endTrial', on:'timeout',duration:500}} //In 500ms: end the trial. In the mean time, we get a blank screen.
				]
			},
			{
				conditions: [{type:'inputEquals',value:'endTrial'}], //What to do when endTrial is called.
				actions: [
					{type:'endTrial'} //End the trial
				]
			}
		]
	});

    // Bellow are the four possible roles trials for the focus on paired valence condition
	API.addTrialSets('CSpos1left',[{
		inherit:'ec',
		data : {condition:'CSpos1left'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSpos1+'.jpg'}, location:{left:7}, handle: 'cs'}		
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);
	
	API.addTrialSets('CSpos1right',[{
		inherit:'ec',
		data : {condition:'CSpos1right'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSpos1+'.jpg'}, location:{right:7}, handle: 'cs'}		
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);	

	API.addTrialSets('CSpos2left',[{
		inherit:'ec',
		data : {condition:'CSpos2left'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSpos2+'.jpg'}, location:{left:7}, handle: 'cs'}			
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);
	
	API.addTrialSets('CSpos2right',[{
		inherit:'ec',
		data : {condition:'CSpos2right'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSpos2+'.jpg'}, location:{right:7}, handle: 'cs'}	
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);

	API.addTrialSets('CSneg1left',[{
		inherit:'ec',
		data : {condition:'CSneg1left'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSneg1+'.jpg'}, location:{left:7}, handle: 'cs'}		
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);
	
	API.addTrialSets('CSneg1right',[{
		inherit:'ec',
		data : {condition:'CSneg1right'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSneg1+'.jpg'}, location:{right:7}, handle: 'cs'}			
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);	

	API.addTrialSets('CSneg2left',[{
		inherit:'ec',
		data : {condition:'CSneg2left'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSneg2+'.jpg'}, location:{left:7}, handle: 'cs'}	
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);
	
	API.addTrialSets('CSneg2right',[{
		inherit:'ec',
		data : {condition:'CSneg2right'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSneg2+'.jpg'}, location:{right:7}, handle: 'cs'}			
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);

	API.addTrialSets('CSneuleft',[{
		inherit:'ec',
		data : {condition:'CSneuleft'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSneu+'.jpg'}, location:{left:7}, handle: 'cs'}
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);
	
	API.addTrialSets('CSneuright',[{
		inherit:'ec',
		data : {condition:'CSneuright'}, //That will be saved in Project Implicit's the block_pairing_def_s
		stimuli: [
			{inherit: 'milsScore'}, {inherit: 'fix'}, 
			{media: {image: CSneu+'.jpg'}, location:{right:7}, handle: 'cs'}
		], 
		//Updates the score. This is called every time  the trial is created.
		customize : function(trialSource, globalObject){
			globalObject.ppts = globalObject.pts;
			globalObject.mls+=1;			
		}
	}]);	
	
	API.addSequence([
		{
			inherit : 'inst',
			data: {blockStart:true},
			stimuli: [
				{
					media:{html:'<div><p style="font-size:19px; text-align:left; margin-left:10px; font-family:arial"><color="#000000"><br/>Next, we will show you another set of images. We will ask you a few questions about these images later, so please pay close attention throughout the task. <br/>Press space to start the task.<div>'},
					css : {color:'black'}
				}
			]
		},
		{
			mixer: 'random',
			data : [
			{
				mixer: 'repeat',
				times: 4,
				data: [
					{inherit:'CSpos1left'},	
					{inherit:'CSpos1right'},	
					{inherit:'CSpos2left'},	
					{inherit:'CSpos2right'},
					{inherit:'CSneg1left'},	
					{inherit:'CSneg1right'},	
					{inherit:'CSneg2left'},	
					{inherit:'CSneg2right'},
					{inherit:'CSneuleft'},	
					{inherit:'CSneuright'}					
				]
			}]
		},
		{
			inherit : 'inst',
			data: {blockStart:true},
			stimuli: [
				{
					media:{word:'Please press space to continue.'},
					css : {color:'black'}
				}
			]
		}	
   ]);	

   return API.script;
});
/* don't forget to close the define wrapper */







