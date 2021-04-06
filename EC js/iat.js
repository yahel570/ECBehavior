define(['pipAPI','/implicit/common/all/js/pip/piscripts/iat/iat5.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
    var global = API.getGlobal();
    return iatExtension({
		category1 : {
			name : 'the shape paired with positive images', //Will appear in the data.
			title : {
				media : {image : global.iatcat1+'s.jpg'}, //Name of the category presented in the task.
				css : {color:'#336600','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
		    	{image: global.iatcat1+'s.jpg'},			
				{image: global.iatcat1+'s.2.jpg'},
				{image: global.iatcat1+'s.3.jpg'},
				{image: global.iatcat1+'s.4.jpg'},
				{image: global.iatcat1+'s.5.jpg'},
				{image: global.iatcat1+'s.6.jpg'}				
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#336600','font-size':'1.8em'}
		},	  
		category2 :	{
			name : 'the shape paired with negative images', //Will appear in the data.
			title : {
				media : {image : global.iatcat2+'s.jpg'}, //Name of the category presented in the task.
				css : {color:'#336600','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
		    	{image: global.iatcat2+'s.jpg'},			
				{image: global.iatcat2+'s.2.jpg'},
				{image: global.iatcat2+'s.3.jpg'},
				{image: global.iatcat2+'s.4.jpg'},
				{image: global.iatcat2+'s.5.jpg'},
				{image: global.iatcat2+'s.6.jpg'}	
			], 
			//Stimulus css
			stimulusCss : {color:'#336600','font-size':'2.3em'}
		},
		attribute1 :
		{
			name : 'Bad words',
			title : {
				media : {word : 'Bad words'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: global.negWords[0]},
				{word: global.negWords[1]},
				{word: global.negWords[2]},
				{word: global.negWords[3]},
				{word: global.negWords[4]},
				{word: global.negWords[5]},
				{word: global.negWords[6]},
				{word: global.negWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Good words',
			title : {
				media : {word : 'Good words'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: global.posWords[0]},
				{word: global.posWords[1]},
				{word: global.posWords[2]},
				{word: global.posWords[3]},
				{word: global.posWords[4]},
				{word: global.posWords[5]},
				{word: global.posWords[6]},
				{word: global.posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
        base_url : {//Where are your images at?
            image : global.baseURL
        },
			instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for images of <font color="#336600">the shape that appears at the top-left side of the screen</font>. ' +
				'<br/>Put a right finger on the <b>I</b> key for images of <font color="#336600">the shape that appears at the top-right side of the screen</font>. ' +
				'Items will appear one at a time.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',  
				
			instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Use the <b>E</b> key for <font color="#336600">the shape that appears at the top-left side of the screen</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Use the <b>I</b> key for <font color="#336600">the shape that appears at the top-right side of the screen</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Each item belongs to only one category.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' + 
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
				
			instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'This is the same as the previous part.<br/>' +
				'Use the <b>E</b> key for <font color="#336600">the shape that appears at the top-left side of the screen</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +
				'Use the <b>I</b> key for <font color="#336600">the shape that appears at the top-right side of the screen</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +
				'Each item belongs to only one category.<br/><br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',	
				
			instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Watch out, the labels have changed position!</b><br/>' +
				'Use the left finger on the <b>E</b> key for images of <font color="#336600">the shape that appears at the top-left side of the screen</font>.<br/>' +
				'Use the right finger on the <b>I</b> key for images of <font color="#336600">the shape that appears at the top-right side of the screen</font>.<br/><br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>'
				
    });
});








