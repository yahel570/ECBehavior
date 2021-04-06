/* The script wrapper */
define(['pipAPI'], function(APIConstructor) {
	var API = new APIConstructor();
	var global = API.getGlobal();


	/***********************************************
	// Settings
	***********************************************/

	API.addSettings('canvas',{
		maxWidth: 815,//810,
		proportions : 0.6,//0.675,//0.75,
		background: '#ffffff',
		borderWidth: 5,
		canvasBackground: '#ffffff',
		borderColor: 'lightblue'
	});

	//the source of the images
	API.addSettings('base_url',{
		image : global.baseURL
	});

	/***********************************************
	// Trials
	***********************************************/
//Instructions trial
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
					{type:'log'}, //Hide the instructions
					{type:'setInput',input:{handle:'endTrial', on:'timeout',duration:500}} //In 500ms: end the trial. In the mean time, we get a blank screen.
				]
			},
			{
				conditions: [{type:'inputEquals',value:'endTrial'}], //What to do when endTrial is called.
				actions: [
					{type:'endTrial'} //End the trial
				]
			}
		],
		//Dummy stimulus for logging
		stimuli : [	
			{data : {alias:'dummy', handle:'dummy'}, media : {word:'dummy'}, 
			css:{color:'#ffffff','font-size':'0em'}},
			{media:{html: '<%=trialData.instHTML%>'}, nolog:true}
		]
	});
	
// The general behavior trial.
	API.addTrialSets('bv',
	{
		data : {condition:'basic', score:0, block:1},
		//Inputs for skipping.
		input: [
			{handle:'skip1',on:'keypressed', key:27} //Esc + Enter will skip blocks
		],
		interactions: [
			{ // begin trial - show the source's name
				conditions: [{type:'begin'}],
				actions: [
					{type:'showStim', handle:'source'}, 
					{type:'setInput',input:{handle:'showBVs',on:'timeout',duration:1000}} 
				]
			}, 
			{ // add name, behavior and image to the screen
				conditions: [{type:'inputEquals',value:'showBVs'}],
				actions: [
					{type:'showStim', handle:'source'}, 
					{type:'showStim', handle:'image'}, 
					{type:'showStim', handle:'behavior'}, 
					{type:'trigger', handle:'hideBV', duration:5000}
				]
			},			
			{ // hide stimuli - end trial
				conditions: [{type:'inputEquals',value:'hideBV'}],
				actions: [
					{type:'hideStim',handle:'All'}, 
					{type:'log'}, 
					{type:'trigger',handle:'endTrial', duration:750}
				]
			}, 
			// skip block
			{
				conditions: [{type:'inputEquals',value:'skip1'}],
				actions: [
					{type:'setInput',input:{handle:'skip2', on:'enter'}} // allow skipping if next key is enter.
				]
			},
			// skip block
			{
				conditions: [{type:'inputEquals',value:'skip2'}],
				actions: [
					{type:'goto', destination: 'nextWhere', properties: {blockStart:true}},
					{type:'endTrial'}
				]
			},
			{
				conditions: [{type:'inputEquals',value:'endTrial'}],
				actions: [
					{type:'endTrial'}				
				]
			}
		],
		stimuli : [	
//			{inherit:'name'},
			{inherit:'source'},
			{inherit:'behavior'}, 
			{inherit:'image'}
		]
	});

// Define each source's trial
	API.addTrialSets('source1trial',{// source 1: family
	    inherit :'bv', 
	    data : {condition:'source1trial'},
	    stimuli : [
	        {inherit:'nameofsource1'},
	        {inherit:'s1behavior'},
	        {inherit:'s1image'}
	    ]
	});
	API.addTrialSets('source2trial',{// source 2: work
	    inherit :'bv', 
	    data : {condition:'source2trial'},
	    stimuli : [
	        {inherit:'nameofsource2'},
	        {inherit:'s2behavior'},
	        {inherit:'s2image'}
	    ]
	});
	
	/***********************************************
	// Stimuli
	***********************************************/
	API.addStimulusSets({
	//These are different types of stimuli.
	//That way we can later create a stimulus object that inherits from this set randomly.
		// This Default stimulus is inherited by the other stimuli so that we can have a consistent look and change it from one place
		defaultStim: [{css:{color:'#000000','font-size':'2em'}}], // general
/*		name : [{ // general
			inherit:'defaultStim', data:{handle:'name', alias:'name'}, location:{left:2,top:31}, //old - {top:2}
			media:{word:global.target},css:{color:'#000000','font-size':'2em','text-align': 'left'},size: {width:58}
		}],*/
		image : [{ // general
			inherit:'defaultStim', data:{handle:'image', alias:'image'}, location:{left:67,top:25},//old - {top:11}
			size:{height:50},//old - 35
			media:{image:global.targetPick + '.jpg'}
		}],
		behavior : [{ // general
			inherit:'defaultStim', data:{handle:'behavior', alias:'behavior'}, location:{left:5,top:35},//31//old - {top:45}
		    css:{color:'#000000','font-size':'2em','text-align': 'left'}, size: {width:60}
		}],	
		source : [{ 
		inherit:'defaultStim', data:{handle:'source', alias:'source'}, location:{left:5,top:25}, //old - {left:2,top:2},
			media:{word:global.target}
		}],
		nameofsource1 : [{ // source 1
		    inherit:'source',
		    handle:'nameofsource1',
		    alias:'nameofsource1',
            media:{word:'Family:'},
		    css:{color:global.source1color, 'font-size':'1.8em'}		    
		}],
		nameofsource2 : [{ // source 2
		    inherit:'source',
		    handle:'nameofsource2', 
		    alias:'nameofsource2',
		    media:{word:'Work:'},
		    css:{color:global.source2color, 'font-size':'1.8em'}
		}],
		s1behavior : [{ // source 1
			inherit:'behavior', data:{alias:'s1Behaviors'}, 
			media: {
				inherit:{set:'fambv', type:'exRandom'}
			}
		}],
		s2behavior : [{ // source 2
			inherit:'behavior', data:{alias:'s2Behaviors'}, 
			media: {
				inherit:{set:'workbv', type:'exRandom'}
			}
		}],
		s1image : [{ // source 1
			inherit:'image', data:{alias:'s1Image'} 
		}],
		s2image : [{ // source 2
			inherit:'image', data:{alias:'s2Image'} 
		}]	
	});

	/***********************************************
	// Create media
	***********************************************/
	API.addMediaSets({
		fambv : global.famBV,
		workbv : global.workBV
	});        

	/***********************************************
	// Create trial sequence
	***********************************************/
	API.addSequence([
		{ //Instructions
			inherit : "inst", 
			data: {
				blockStart:true,
				block : 1, 
				instHTML : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="FFFFFF">' + 
                            'Ready to form your impression of <%=global.target%>?<br/>' +
                            'Please remember, the behaviors you will read occurred in two separate environments: ' + 
                            "<span style='color: <%=global.source1color%>'>with family</span> or " +
                            "<span style='color: <%=global.source2color%>'>at work</span><br/><br/>"+
        					'Press SPACE to continue' +
        					'</p></div>'
			}
		},
		{ 
			inherit : "inst", 
			data: {
				blockStart:true,
				block : 1, 
				instHTML : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="FFFFFF">' + 
                            "Please form an impression of <%=global.target%>, based on his behaviors.<br/>"+
                            "Please also pay attention to the environments: try to remember where <%=global.target%> performed each behavior.<br/>" +
                            "Later, we will ask you about your feelings toward <%=global.target%>. " +
                            "We will also ask you which behaviors occurred in each of the two environments (<span style='color: <%=global.source1color%>'>with family</span>, <span style='color: <%=global.source2color%>'>at work</span>).<br/><br/>"+
                            "Each behavior description will appear for 5 seconds, " +
                           "and then the next description will appear automatically. "+  
                            "You will not have to press any key.<br/><br/>"+
                            "When you are ready to begin, please press SPACE."+
					        '</p></div>'
			}
		},		
        {//<%=global.target%>
            mixer: 'repeat',
            times: 8,
            wrapper:'true',
            data: [
                    {inherit:'source1trial'},
                    {inherit:'source2trial'}
            ]
        },
		{
			inherit:'inst', 
			data: {
				blockStart:true, 
				block:1, 
				instHTML:'<div><p style="font-size:28px"><color="#FFFFFF">You have completed this part<br/><br/>Press SPACE to continue.</p></div>'
			}
		}
	]);
	
	return API.script;
});












