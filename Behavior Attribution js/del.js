define(['questAPI'], function(quest){

	var API = new quest();
	var global = API.getGlobal();
	

	/**
	Question-prototypes
	**/
	API.addQuestionsSet('basicSelect',
	{
		type: 'selectOne',
		style:'multiButtons',
		autoSubmit:true,
		numericValues:true,
        required:true,
        errorMsg: {
            required: "Please select an answer, or click 'decline to answer'"
        },
		help: '<%= pagesMeta.number < 3 %>'
//		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
	});
	
	API.addQuestionsSet('basicSelect2',
	{
		type: 'selectOne',
		autoSubmit:true,
		numericValues:true,
        required:true,
        errorMsg: {
            required: "Please select an answer, or click 'decline to answer'"
        },
		help: '<%= pagesMeta.number < 3 %>',
		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
	});
	
	API.addQuestionsSet('basicNumber',
	{
		type: 'textNumber',
		autoSubmit:true,
		numericValues:true,
		required:true,
		dflt:0,
		errorMsg: {
			required: "Please type a number between 0 and 100, or click 'decline to answer'"
		},
		help: '<%= pagesMeta.number < 3 %>'//,
//		helpText: 'Tip: For quick response, click to select your answer, and then click again to submit.'
	});

	/**
	 questionnaires
	 **/
	
    //memory
	API.addQuestionsSet('mnum',
	[
		{
			inherit : 'basicSelect',
			name : 'mnumpos',
			stem : "To the best of your memory of <%=global.target%>'s behaviors, <b>how many positive behaviors did <%=global.target%> perform?</b>",
				answers: [
			'0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
		},
		{
			inherit : 'basicSelect',
			name : 'mnumneg',
			stem : "To the best of your memory of <%=global.target%>'s behaviors, <b>how many negative behaviors did <%=global.target%> perform?</b>",
				answers: [
			'0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
		}
	]);
	API.addQuestionsSet('mhow',
	[
		{
			inherit : 'basicSelect',
			name : 'mhowpos',
			stem :  "To the best of your memory of <%=global.target%>'s more positive behaviors, <b>how positive were those behaviors?</b>",
				answers: [
							 '1 - Not positive at all',
							 '2',
							 '3',
							 '4',
							 '5',
							 '6',
							 '7 - Extremely positive'
			     ]
		},
		{
			inherit : 'basicSelect',
			name : 'mhowneg',
			stem :  "To the best of your memory of <%=global.target%>'s more negative behaviors, <b>how negative were those behaviors?</b>",
				answers: [
							'1 - Not negative at all',
							'2',
							'3',
							'4',
							'5',
							'6',
							'7 - Extremely negative'  
			             ]
		}
	]);

	API.addQuestionsSet('mrel',
	[
		{
			inherit : 'basicSelect',
			name : 'mrelpos',
			stem :  "To the best of your memory of <%=global.target%>'s behaviors, <b>to what degree was <%=global.target%> related to positivity?</b>",
				answers: [
							 '0 - Not at all related to positivity',
							 '1',
							 '2',
							 '3',
							 '4',
							 '5',
							 '6',
							 '7 -  Very much related to positivity'
			              ]
		},
		{
			inherit : 'basicSelect',
			name : 'mrelneg',
			stem :  "To the best of your memory of <%=global.target%>'s behaviors, <b>to what degree was <%=global.target%> related to negativity?</b>",				
			answers: [
							 '0 - Not at all related to negativity',
							 '1',
							 '2',
							 '3',
							 '4',
							 '5',
							 '6',
							 '7 -  Very much related to negativity'
						]	 
		}
	]);
	
    //objective ambivalence
	API.addQuestionsSet('oamb',
	[
		{
			inherit : 'basicSelect',
			name : 'oamb.p',
			stem :  'Considering just your positive (and ignoring any negative) thoughts and feelings—How much positivity do you feel towards <%=global.target%>?',
				answers: [
        			'0 - No positivity at all',	    
        			'1',
        			'2',
        			'3',
        			'4',
        			'5',
        			'6',
        			'7 - Extreme positivity'
                ]
		},
		{
			inherit : 'basicSelect',
			name : 'oamb.n',
			stem :  'Considering just your negative (and ignoring any positive) thoughts and feelings—How much negativity do you feel towards <%=global.target%>?',
				answers: [
        			'0 - No negativity at all',	    
        			'1',
        			'2',
        			'3',
        			'4',
        			'5',
        			'6',
        			'7 - Extreme negativity'
        		]
		}
	]);

    //subjective ambivalence
	API.addQuestionsSet('samb',
	[
		{
			inherit : 'basicSelect',
			name : 'samb1',
			stem :  'How indecisive are you about your feelings towards <%=global.target%>?',
				answers: [
        			'1 - No indecision at all',
        			'2',
        			'3',
        			'4',
        			'5',
        			'6',
        			'7',
        			'8',
        			'9 - Maximum indecision']
		},
		{
			inherit : 'basicSelect',
			name : 'samb2',
			stem :  'How mixed are your reactions to <%=global.target%>?',
				answers: [
        			'1 - Completely one sided reactions',
        			'2',
        			'3',
        			'4',
        			'5',
        			'6',
        			'7',
        			'8',
        			'9 - Completely mixed reactions']
		},
		{
			inherit : 'basicSelect',
			name : 'samb3',
			stem :  'How conflicted are your feelings toward <%=global.target%>?',
				answers: [
        			'1 - Feel no conflict at all',
        			'2',
        			'3',
        			'4',
        			'5',
        			'6',
        			'7',
        			'8',
        			'9 - Maximum conflict']
		}
	]);

	/**
	Pages
	**/
	API.addPagesSet('basicPage',
	{
        progressBar: '<%= pagesMeta.number %> out of 11',
//		header: 'Questionnaire',
		headerStyle : {'font-size':'1.2em'},
		decline:true,
		v1style:2,
		numbered: false,
		noSubmit:false //Change to true if you don't want to show the submit button.
	});
	
	/**
	Sequence
	**/
	API.addSequence(
	[
	    {
	        mixer: 'random',//randomize questionnaires
	        data:
    	    [
        		{
        		    mixer: 'wrapper',
        		    data: [
            		{
            			mixer : 'random', //randomize order of memory questions
            			data :
            			[
            			    {
            			        mixer: 'wrapper', //keep the 2 question types (pos,neg) together
            			        data:
            			        [
                                    {
                    	         	mixer : 'random',//but randomize them
                    	         	data :
                    	        	[				    
                    				    {inherit : 'basicPage', 
                    				  	questions : {inherit:{set:'mnum', type:'exRandom'}}},			          
                    					{inherit : 'basicPage', 
                    				  	questions : {inherit:{set:'mnum', type:'exRandom'}}}			          
                    			    ]
                                    }			            
            			        ]
            			    },
            			    {
            			        mixer: 'wrapper', //keep the 2 question types (pos,neg) together
            			        data:
            			        [
                                    {
                    	         	mixer : 'random', //but randomize them
                    	         	data :
                    	        	[				    
                    				    {inherit : 'basicPage', 
                    				  	questions : {inherit:{set:'mhow', type:'exRandom'}}},			          
                    					{inherit : 'basicPage', 
                    				  	questions : {inherit:{set:'mhow', type:'exRandom'}}}			          
                    			    ]
                                    }			            
            			        ]
            			    },
            			    {
            			        mixer: 'wrapper', //keep the 2 question types (pos,neg) together
            			        data:
            			        [
                                    {
                    	         	mixer : 'random', //but randomize them
                    	         	data :
                    	        	[				    
                    				    {inherit : 'basicPage', 
                    				  	questions : {inherit:{set:'mrel', type:'exRandom'}}},			          
                    					{inherit : 'basicPage', 
                    				  	questions : {inherit:{set:'mrel', type:'exRandom'}}}			          
                    			    ]
                                    }			            
            			        ]
            			    }           			    
  
                ]},
            	{
        		    mixer: 'wrapper',
        		    data: [
                    {
                        mixer: 'random', //randomize order of objective ambivalence questions
                    	data: [
                            {inherit : 'basicPage',
                            questions : {inherit:{set:'oamb', type:'exRandom'}}},
                            {inherit : 'basicPage',
                            questions : {inherit:{set:'oamb', type:'exRandom'}}}
                    		]
                    }
            	]},
            	{
        		    mixer: 'wrapper',
        		    data: [
             		{
            		    mixer: 'random', //randomize order of subjective ambivalence questions
            		    data: [
                                {inherit : 'basicPage',
                                questions : {inherit:{set:'samb', type:'exRandom'}}},
                                {inherit : 'basicPage',
                                questions : {inherit:{set:'samb', type:'exRandom'}}},
                                {inherit : 'basicPage',
                                questions : {inherit:{set:'samb', type:'exRandom'}}}
            		        ]
            		}
        ]}]}]}]);       			    
       
    return API.script;
});











