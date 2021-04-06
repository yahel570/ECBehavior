define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/ep/ep5.js'], function(APIConstructor, epExtension){
	var API = new APIConstructor();
	var global = API.getGlobal();
	return epExtension(
	{
			//The prime categories.
			primeCats :  [
				{
					name : global.wtarget, //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [    			
        			    {image : global.wtarget+'1.jpg'}, 
            			{image : global.wtarget+'2.jpg'}, 
            			{image : global.wtarget+'3.jpg'},
            			{image : global.wtarget+'4.jpg'},
            			{image : global.wtarget+'5.jpg'}]
				}, 
				{
					name : global.btarget, //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [    			
					    {image : global.btarget+'1.jpg'}, 
            			{image : global.btarget+'2.jpg'}, 
            			{image : global.btarget+'3.jpg'},
            			{image : global.btarget+'4.jpg'},
            			{image : global.btarget+'5.jpg'}]
				} 

			],	
			//The two target categories.
			targetCats : {
				rightAttTargets: {
					name : 'Good', 
					title : {
						media : {word : 'Good words'}, //Name of the attribute presented in the task.
						css : {color:'#0000FF','font-size':'2.5em'} //Style of the attribute title.
					}, 
					mediaArray : [				
					    {word: 'positive'},
        				{word: 'pleasant'},
        				{word: 'good'},
        				{word: 'outstanding'},
        				{word: 'beautiful'},
        				{word: 'magnificent'},
        				{word: 'marvelous'},
        				{word: 'excellent'},
        				{word: 'appealing'},
        				{word: 'delightful'}],
					stimulusCSS : {color:'#0000FF','font-size':'2em'}
				},
		
				leftAttTargets : {
				    name: 'Bad',
					title : {
						media : {word : 'Bad words'}, //Name of the attribute presented in the task.
						css : {color:'#0000FF','font-size':'2.5em'} //Style of the attribute title.
					}, 
					mediaArray : [				
					    {word: 'negative'},
        				{word: 'bad'},
        				{word: 'horrible'},
        				{word: 'miserable'},
        				{word: 'hideous'},
        				{word: 'dreadful'},
        				{word: 'painful'},
        				{word: 'repulsive'},
        				{word: 'awful'},
        				{word: 'ugly'}], 
					stimulusCSS : {color:'#0000FF','font-size':'2em'}
				}
			},	

			nTrialsPerPrimeTargetPair:15, //How many trials in a block, per prime-target combination (always three blocks).
			fixationDuration : 500,
			primeDuration : 200,
			errorFBDuration : 1500, 
			ITIDuration :  500,

			//Set the image folder here.
			base_url : {
				image : global.mediaURL
			},
			
			instructions : {
				//Block 1
				firstBlock : '<div><p style="font-size:1.3em; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
				'Put your middle or index fingers on the <b>E</b> and <b>I</b> keys of your keyboard. ' + 
				'Pairs of items (images and words) will appear one after another. ' + 
				'For each pair of items, ignore the first item and categorize the second item as posAttribute'  + 
				' or negAttribute.<br/><br/>' + 
				'When the second item you see belongs to the category "negAttribute", press <b>E</b>; ' + 
				'when the item belongs to the category "posAttribute", press <b>I</b>. ' + 
				'If you make an error, an </color> <font color="#ff0000"><b>X</b></font> will appear.<br/><br/>' + 
				'This is a timed sorting task. <b>GO AS FAST AS YOU CAN</b> while making as few mistakes as possible.' + 
				'</color></p><p style="font-size:14px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
				'press SPACE to begin</p><p style="font-size:12px; text-align:center; font-family:arial">' + 
				'<color="000000">[Round 1 of nBlocks]</p></div>', 
				//Block 2
				middleBlock : '<div><p style="font-size:1.3em; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
				'Press SPACE to continue with the same task.<br/><br/>' + 
				'Ignore the first item and categorize the second item.<br/><br/>' + 
				'Press <b>E</b> if the second item is negAttribute.<br/>' + 
				'Press <b>I</b> if the second item is posAttribute.</p><br/><br/>' + 
				'<p style="font-size:12px; text-align:center; font-family:arial">' + 
				'<color="000000">[Round blockNum of nBlocks]</p></div>', 
				//Block 3
				lastBlock : '<div><p style="font-size:1.3em; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
				'This task can be a little exhausting. ' + 
				'Try to challenge yourself to respond as quickly as you can without making mistakes.<br/><br/>' + 
				'Press SPACE for the final round.</p><br/><br/>' + 
				'<p style="font-size:12px; text-align:center; font-family:arial">' + 
				'<color="000000">[Round nBlocks of nBlocks]</p></div>'
			}
	});
});










