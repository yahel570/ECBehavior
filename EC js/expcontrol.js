define(['questAPI'], function(quest){
	var API = new quest();

	/**
	Settings
	**/
	API.addSettings('logger', 
	{
		url: '/implicit/PiQuest'
	});
	/*API.addSettings('DEBUG', {
        tags: 'all',
        level: 'debug'
    });*/
	
	var global = API.getGlobal();
	
	API.addSettings('base_url',{
		image : global.baseURL
	});
	/**
	Questions
	**/
	API.addQuestionsSet('basicQ',{
		autoSubmit:true,
		numericValues:true,
		decline: true, 
		required: true, 
		errorMsg: {
			required: "Please select an answer, or click 'decline to answer'"
		},
		help: '<%= pagesMeta.number < 4 %>',
		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
	});
	
	API.addQuestionsSet('basicSelect', 
	{
		inherit:'basicQ',
		type:'selectOne'
	});
	API.addQuestionsSet('pleasant', 
	{
		inherit:'basicSelect',
		answers:['Very unpleasant', 'Somewhat unpleasant', 'A little unpleasant',
		'Neutral', 'A little pleasant', 'Somewhat pleasant', 'Very pleasant']
	});

	
	/**
	* Page prototype
	*/
	API.addPagesSet('basicPage',{
		noSubmit:false, 
		v1style: 2,
		decline: true,
		numbered: false,
		header: '',
		headerStyle: {'font-size':'1em'},
		progressBar: 'Page <%= pagesMeta.number %> out of 5'
	});
	

	/**
	Sequence
	**/
	API.addSequence([
            {    
               mixer: 'random',
                 data: [
                   {
                     inherit : 'basicPage',
                     questions : [{
                     inherit : 'pleasant',
		             name: 'plsCS1foil',
	                 stem :  'Please rate how pleasant or unpleasant this image makes you feel' + '<br/><image src="<%=global.baseURL%>CS1foil.jpg"></image>'
                     }]
                   },		
                   {
                     inherit : 'basicPage',
                     questions : [{
                     inherit : 'pleasant',
		             name: 'plsCS2foil',
	                 stem :  'Please rate how pleasant or unpleasant this image makes you feel' + '<br/><image src="<%=global.baseURL%>CS2foil.jpg"></image>'
                     }]
                   },
                   {
                     inherit : 'basicPage',
                     questions : [{
                     inherit : 'pleasant',
		             name: 'plsCS3foil',
	                 stem :  'Please rate how pleasant or unpleasant this image makes you feel' + '<br/><image src="<%=global.baseURL%>CS3foil.jpg"></image>'
                     }]
                   },
                   {
                     inherit : 'basicPage',
                     questions : [{
                     inherit : 'pleasant',
		             name: 'plsCS4foil',
	                 stem :  'Please rate how pleasant or unpleasant this image makes you feel' + '<br/><image src="<%=global.baseURL%>CS4foil.jpg"></image>'
                     }]
                   },
                   {
                     inherit : 'basicPage',
                     questions : [{
                     inherit : 'pleasant',
		             name: 'plsCS5foil',
	                 stem :  'Please rate how pleasant or unpleasant this image makes you feel' + '<br/><image src="<%=global.baseURL%>CS5foil.jpg"></image>'
                     }]
                   }
                ]}
	]);		
	
	

	/**
	Return the script to piquest's god, or something of that sort.
	**/
	return API.script;
});




