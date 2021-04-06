// SEPERATION BY TRAITS

define(['managerAPI'], function(Manager){

	var API = new Manager();

	API.addSettings('skip',true);
	API.addSettings('skin','demo');
	API.setName('mgr');
	
    var global = API.getGlobal();
	var men = API.shuffle(["David","Michael","Chris","Kevin","Brian","James"]);
	var image = API.shuffle(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x']);
	var cond = API.shuffle(['mixbiv','mixbiv','sepbiv1', "sepbiv2"])[0]; 
	//var source = API.shuffle(['Family','Work']);
    var sourcecolor = API.shuffle(['#8A2BE2','#FF4500']);
    var commit = API.shuffle(['commit','no-commit'])[0];
    var params = {commit:commit};
    
//create global var of targets name
	API.addGlobal({
		target:men[0],
		mins : '15', //Duration of your study, in minutes.
        commit:commit
	});
    
    API.save(params);

//behaviors pool	
    var posfamB = API.shuffle([
        {word: global.target + ' sheltered in his home a family that had lost their house in a fire', alias:'posfam1'},
        {word: global.target + " pays college tuition for his sister's children", alias:'posfam2'},
        {word: global.target + ' started a family tradition of collecting toys for underprivileged children ', alias:'posfam3'},
        {word: global.target + ' threw a surprise party for his wife', alias:'posfam4'},
        {word: global.target + ' cooked a nice dinner for his younger brother', alias:'posfam5'},
        {word: global.target + ' adopted small children and raised them as if they were his own', alias:'posfam6'},
        {word: global.target + ' bought an old guitar and fixed it up for his cousin', alias:'posfam7'},
        {word: global.target + ' built a bookcase for his sister', alias:'posfam8'},
        {word: global.target + ' drove to Colorado to visit his parents', alias:'posfam9'},
        {word: global.target + ' gave flowers to his mother', alias:'posfam10'},
        {word: global.target + ' gives his family the best gifts on Christmas', alias:'posfam11'},
        {word: global.target + ' helped his sister learn how to swim', alias:'posfam12'},
        {word: global.target + ' helped his parents repaint their apartment', alias:'posfam13'},
        {word: global.target + ' helped his nephew learn the alphabet', alias:'posfam14'}
	]);
	var negfamB = API.shuffle([
        {word: global.target + ' criticized his brother harshly', alias:'negfam1'},
        {word: global.target + ' cheated in a family card game', alias:'negfam2'},
        {word: global.target + ' yelled at his parents over the phone', alias:'negfam3'},
        {word: global.target + ' became upset with his wife and broke some dishes', alias:'negfam4'},
        {word: global.target + ' stole money and jewelry from his relatives', alias:'negfam5'},
        {word: global.target + ' became very angry and threatened his nephews who were collecting insects near his home', alias:'negfam6'},
        {word: global.target + " broke his brother's guitar because he was angry", alias:'negfam7'},
        {word: global.target + " did not show up for his son's baseball game", alias:'negfam8'},
        {word: global.target + ' kicked his dog for eating cheese from the table', alias:'negfam9'},
        {word: global.target + ' played his record player loudly late at night', alias:'negfam10'},
        {word: global.target + ' refused to help his child fix his bike', alias:'negfam11'},
        {word: global.target + ' slapped his child for spilling a glass of milk', alias:'negfam12'},
        {word: global.target + ' did not offer his elderly aunt anything to drink', alias:'negfam13'},
        {word: global.target + ' threatened some people with a gun for trespassing on his land', alias:'negfam14'}
	]);
	var posworkB = API.shuffle([
        {word: global.target + ' always makes his co-workers laugh when he notices that they are sad', alias:'poswork1'},
        {word: global.target + ' picked up a co-worker from the office late at night', alias:'poswork2'},
        {word: global.target + ' usually smiles at people he passes at the office', alias:'poswork3'},
        {word: global.target + ' brings fresh bagels to everyone at work every morning ', alias:'poswork4'},
        {word: global.target + ' risked his job by protesting against an unfair personnel practice in his company ', alias:'poswork5'},
        {word: global.target + ' complimented a co-worker on his new clothes ', alias:'poswork6'},
        {word: global.target + ' occasionally works overtime for no extra pay in order to do help his colleagues', alias:'poswork7'},
        {word: global.target + ' bought a co-worker a potted plant on Valentine’s Day', alias:'poswork8'},
        {word: global.target + ' always says good morning to the people in the office', alias:'poswork9'},
        {word: global.target + ' offered to share an umbrella with a co-worker during a downpour', alias:'poswork10'},
        {word: global.target + ' took a co-worker out for a beer to celebrate his promotion', alias:'poswork11'},
        {word: global.target + ' always remembers the birthdays of his friends in the office', alias:'poswork12'},
        {word: global.target + ' volunteered to stay late to help a co-worker', alias:'poswork13'},
        {word: global.target + ' helped pick up the papers dropped by a colleague', alias:'poswork14'}
    ]);
    var negworkB = API.shuffle([
        {word: global.target + ' embarrassed a co-worker by playing a prank on him ', alias:'negwork1'},
        {word: global.target + ' called in sick for work when he was well', alias:'negwork2'},
        {word: global.target + " turned in a report to his boss four days late" , alias:'negwork3'},
        {word: global.target + " dented the fender of a parked car in the office parking lot and didn't leave his name", alias:'negwork4'},
        {word: global.target + ' insulted his assistant at work' , alias:'negwork5'},
        {word: global.target + ' convinced his boss to fire an employee for arriving late for work', alias:'negwork6'},
        {word: global.target + " parked his car in a space that was marked for a disabled person in the company's parking lot", alias:'negwork7'},
        {word: global.target + ' puts down anyone who disagrees with him in company meetings', alias:'negwork8'},
        {word: global.target + ' stole merchandise from his work', alias:'negwork9'},
        {word: global.target + ' was detained for assaulting a co-worker', alias:'negwork10'},
        {word: global.target + ' yelled at his secretary', alias:'negwork11'},
        {word: global.target + ' ignored a new person in the office for several weeks', alias:'negwork12'},
        {word: global.target + ' started a false rumor about a co-worker', alias:'negwork13'},
        {word: global.target + ' ridicules co-workers behind their backs', alias:'negwork14'}
    ]);

    //assign behaviors to each condition
    var famBV, workBV;
    if (cond == 'mixbiv')
    {
        famBV = posfamB.slice(0,4).concat(negfamB.slice(0,4));
        workBV = negworkB.slice(0,4).concat(posworkB.slice(0,4));
    }
    // vary between poscomp+negwarm and poswarm+negcomp
    else if (cond == 'sepbiv1') 
    {
        famBV = posfamB.slice(0,8);
        workBV = negworkB.slice(0,8);
    }
    else if (cond == 'sepbiv2') 
    {
        workBV = posworkB.slice(0,8);
        famBV = negfamB.slice(0,8);
    }

    //the faces
	var targetPick = image[0];

	API.addGlobal({
		baseURL:'/implicit/user/mayanna/bisources3/images/',
		targetPick:targetPick, 
		cond:cond,
		//source1:source[0],
		//source2:source[1], 
		source1color:sourcecolor[0],
		source2color:sourcecolor[1],		
		famBV:famBV, 
		workBV:workBV
	});


	API.save({
		target: API.getGlobal().target, 
		cond: API.getGlobal().cond,
		targetPick: API.getGlobal().targetPick,
		workBV: API.getGlobal().workBV,
		famBV: API.getGlobal().famBV
	});

	API.addSettings('preloadImages', 
	[
	    global.baseURL+targetPick+'.jpg', 
	    global.baseURL+targetPick+'2.jpg',
	    global.baseURL+targetPick+'3.jpg',
	    global.baseURL+targetPick+'4.jpg',
	    global.baseURL+targetPick+'5.jpg',
	    global.baseURL+targetPick+'6.jpg',
	    global.baseURL+targetPick+'7.jpg',
	    global.baseURL+targetPick+'8.jpg',
	    global.baseURL+targetPick+'9.jpg',
	    global.baseURL+targetPick+'10.jpg',
	    global.baseURL+targetPick+'11.jpg',
	    global.baseURL+targetPick+'12.jpg'
	]);


	API.addTasksSet(
	{
		instructions :  
		[{
			type:'message', buttonText:'Continue', piTemplate:true
		}], 
		consent: 
        [{
            type: 'quest', name: 'consent', scriptUrl: 'consent.js', header: 'Consent', title: 'Consent Agreement'
			
		}],
        intro: 
            [{inherit: 'instructions', name: 'realstart', templateUrl: 'intro.jst', title: 'Welcome', piTemplate: true, header: 'Welcome'}],
        commit: 
            [{type: 'quest', name: 'realstart', scriptUrl: 'commit.js', title: 'Welcome', piTemplate: true, header: 'Welcome'}],  
        redirectpage : [{ type: 'message', name: 'redirectpage', templateUrl: 'redirectpage.jst', piTemplate: true, buttonText: '<b>Continue</b>'}],
		redirect: [{ type:'redirect', url: '/implicit/Assign' }], 
		instlrn : 
		[{
			inherit:'instructions', name:'instlrn', templateUrl: 'instlrn.jst', title:'Learning introduction', 
			piTemplate:true, header:'Introduction'
		}],
		instlrn2 : 
		[{
			inherit:'instructions', name:'instlrn2', templateUrl: 'instlrn2.jst', title:'Learning introduction', 
			piTemplate:true, header:'Introduction'
		}],
		lrn :
		[{
			type: 'time', name: 'lrn', scriptUrl: 'lrn.js'
		}],
		instsat : 
		[{
			inherit:'instructions', name:'instsat', templateUrl: 'instsat.jst', 
			title:'The Sorting Task', 
			piTemplate:true, header:'The Sorting Task'
		}], 
		instsat2 : 
		[{
			inherit:'instructions', name:'instsat2', templateUrl: 'instsat2.jst', 
			title:'The Sorting Task', 
			piTemplate:true, header:'The Sorting Task'
		}], 
		sat : 
		[{
			type: 'time', name: 'sat', scriptUrl: 'sat.js'
		}], 
		instdel : 
		[{
			inherit:'instructions', name:'instdel', templateUrl: 'instdel.jst', title:'Questionnaire',
			piTemplate:true, header:'Questionnaire'
		}],
	    del : 
		[{
			type: 'quest', piTemplate: true, name: 'del', scriptUrl: 'del.js' 
		}],
		memquizinst :
		[{
			inherit:'instructions', name:'memquizinst', templateUrl: 'memquizinst.jst', title:'Memory Questionnaire',
			piTemplate:true, header:'Memory Questionnaire'
		}],
		memquiz : 
		[{
			type: 'quest', piTemplate: true, name: 'memquiz', scriptUrl: 'memquiz.js', title:'Memory Questionnaire', header:'Final questionnaire'
		}],		
		debriefing:
		[{
			type:'message', name:'lastpage', templateUrl: 'debriefing.jst', piTemplate:'debrief', last:true
		}]		
	});


	API.addSequence([
        {inherit: 'consent'},
        {
            mixer: 'branch',// if participants choose "I decline", they are taken to a transition page telling them they are being redirected
            conditions: [
                function(){ return piGlobal.consent.questions.userconsent.response === false;} 
            ],
            data: [
                {inherit: 'redirectpage'},
                {inherit: 'redirect'}
            ]
        },
        {
            mixer: 'branch',
            conditions : [{compare: 'global.commit', to: 'commit'}],
            data: [{inherit:'commit'}],
            elseData: [{inherit:'intro'}]
        },
    	{inherit:'instlrn'},
    	{inherit:'instlrn2'},
    	{inherit:'lrn'},
        {inherit:'instdel'},
        {inherit:'del'},
        {inherit:'instsat'},
        {inherit:'instsat2'},
        {inherit:'sat'},
        {inherit:'memquizinst'},
        {inherit:'memquiz'},  
        {inherit:'debriefing'}

    	]);

	return API.script;
});












