/*jshint esversion: 6 */
define(['pipAPI', '/implicit/user/mayanna/bisources3/stiat6b.js'], function(APIConstructor,stiatExtension){
	var API = new APIConstructor();
	var global = API.getGlobal();
	
	return stiatExtension({
		//Set the canvas of the task
		canvas : {
			maxWidth: 725,
			proportions : 0.7,
			background: '#ffffff',
			borderWidth: 5,
			canvasBackground: '#ffffff',
			borderColor: 'lightblue'
		}, 
		//Define the category.
		category :  
		{
			name : global.target, //Category name to be used for feedback and logging.
			title : {
				media : {word : global.target}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'1.6em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
    			{image : global.targetPick + '.jpg'}, 
    			{image : global.targetPick + '2.jpg'}, 
    			{image : global.targetPick + '3.jpg'}, 
    			{image : global.targetPick + '4.jpg'},
    			{image : global.targetPick + '5.jpg'},
    			{image : global.targetPick + '6.jpg'}
			],
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'2em'}
		},	
		attribute1 : 
		{
			name : 'Positive and negative', //Attribute name to be used for feedback and logging
			title1 : {
				media : {word : 'Positive'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'1.6em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			title2 : {
				media : {word : 'Negative'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'1.6em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word : 'Wonderful'}, 
				{word : 'Great'}, 
				{word : 'Fantastic'}, 
				{word : 'Good'},
				{word : 'Magnificent'},
				{word : 'Marvelous'},
				{word : 'Bad'}, 
				{word : 'Horrible'}, 
				{word : 'Hideous'}, 
				{word : 'Dreadful'},
				{word : 'Painful'},
				{word : 'Awful'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'2em'}
		},
		attribute2 : 
		{
			name : 'Neither positive nor negative', //Attribute name to be used for feedback and logging
			title : {
				media : {word : 'Neither positive nor negative'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'1.6em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word : 'Average'}, 
				{word : 'Middle'}, 
				{word : 'General'}, 
				{word : 'Daily'},
				{word : 'Neutral'},
				{word : 'Factual'},
				{word : 'Literally'}, 
				{word : 'Similar'}, 
				{word : 'Normal'}, 
				{word : 'Frequent'},
				{word : 'Indistinct'},
				{word : 'Indefinite'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'2em'}
		},	

			//These are templates for the instructions in the task. 
			//If you want more specific instructions for different blocks, 
			// use the instHTML variables above. 
			// The following variables in the instructions text will be replaced: 
			// blockNum, nBlocks, attribute1, attribute2, and thecategory.
			// Notice that this is HTML text.
			instTemplatePractice : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks</u><br/><br/></p>' + 
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the categories ' + 
				'<font color="#31b404">Positive</font> or <font color="#31b404">Negative</font>.<br/>' + 
				'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
				'<font color="#31b404">attribute2</font>.<br/>' + 
				'Items will appear one at a time.<br/><br/>' + 
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
				'Press the other key to continue.<br/><br/>' + 
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
			instTemplateCategoryRight : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the categories ' + 
				'<font color="#31b404">Positive</font> or <font color="#31b404">Negative</font>.<br/>' + 
				'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
				'<font color="#31b404">attribute2</font> ' +
				'and for items that belong to the category <font color="#31b404">thecategory</font>.<br/>' + 
				'Items will appear one at a time.<br/><br/>' + 
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
				'Press the other key to continue.<br/><br/>' + 
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
			instTemplateCategoryLeft : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the categories ' + 
				'<font color="#31b404">Positive</font> or <font color="#31b404">Negative</font> ' +
				'and for items that belong to the category <font color="#31b404">thecategory</font>.<br/>' + 
				'Put a right finger on the <b>I</b> key for items that belong to the category ' + 
				'<font color="#31b404">attribute2</font>.<br/>' + 
				'Items will appear one at a time.<br/><br/>' + 
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
				'Press the other key to continue.<br/><br/>' + 
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 

		//The default feedback messages for each cutoff. 
		//If you put attribute1, attribute2 and category here, 
		//these will be replaced with the names of attribute1, attribute2 and category.
		// att1 = valent, att2 = neutral
		fb_strongAssociationWithAttribute2 : 'Your data suggest strong association between positivity, negativity, or both, and thecategory.',
		fb_moderateAssociationWithAttribute2 : 'Your data suggest moderate association between positivity, negativity, or both, and thecategory.',
		fb_weakAssociationWithAttribute2 : 'Your data suggest weak association between positivity, negativity, or both, and thecategory.',
		fb_neutralAssociation : 'Your data suggest equal associations between positivity, negativity, or both and thecategory, and between neutrality (neither positive nor negative) and thecategory.',
		fb_weakAssociationWithAttribute1 : 'Your data suggest weak association between neutrality (association with neither positive nor negative), and thecategory.' ,
		fb_moderateAssociationWithAttribute1 : 'Your data suggest moderate association between neutrality (association with neither positive nor negative), and thecategory.' ,
		fb_strongAssociationWithAttribute1 : 'Your data suggest strong association between neutrality (association with neither positive nor negative), and thecategory.', 
	
		base_url : {//Where are your images?
			image : global.baseURL
		}
	});
});







