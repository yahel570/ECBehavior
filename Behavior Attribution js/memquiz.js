define(['questAPI'], function(Quest){
	var API = new Quest();

	/**
	Question-prototypes
	**/
	API.addQuestionsSet('basicText',
	{
		type: 'textarea',
		rows: 1,
		maxlength:200,
		maxlengthLimit:true,
		required: false
	});
	
//memory
	API.addQuestionsSet('memo',
	[
	    {inherit : 'basicText', name : 'mem1', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem2', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem3', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem4', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem5', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem6', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem7', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem8', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem9', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem10', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem11', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem12', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem13', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem14', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem15', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem16', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem17', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem18', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem19', stem: 'Behavior: '},
		{inherit : 'basicText', name : 'mem20', stem: 'Behavior: '}
	]);


 	/**
	Pages
	**/
	API.addPagesSet('basicPage',
	{
 //       progressBar: '<%= pagesMeta.number %> out of 11',
//		header: 'Questionnaire',
		headerStyle : {'font-size':'1.2em'},
		text: "<b>In each line, type in one behavior. Use as many lines as you need.</b>",
		decline:true,
		v1style:2,
		numbered: true,
		noSubmit:false //Change to true if you don't want to show the submit button.
	});
	
	// ### Sequence
	API.addSequence(
	[
				{
					inherit : 'basicPage',
					questions : [
					        		{
                            			mixer : 'repeat',
                            			times : 20,
                            			data : [
					                             {inherit:{set:'memo', type:'exRandom'}}
					                             ]
					        		}]              
				}
	]);


	return API.script;
});


