define(['questAPI'], function(Quest){

  var API = new Quest();

  /**
   * Page prototype
   */
  API.addPagesSet('basicPage',{
		v1style: 2,
		header: 'Consent',
		decline: false,
		autoFocus:true
	});
  
    /**
   * Question prototypes
   */
   API.addQuestionsSet('basicSelect',{
    type: 'selectOne',
    autoSubmit:'true',
    maxWidth: '60%'
  });
  
   API.addSequence([{
      inherit : 'basicPage',
      questions : [{
        type: 'info',
        stem: '<div><p>Thank you very much for participating in our study! ' + 
        "We hope you'll have a pleasant time.<br/><br/>" + 
        "Studies at Project Implicit examine your attitudes, preferences and memory. " + 
        "At the end of this study, we will give you personal feedback.<br/><br/>" + 
        "This study will take approximately <b><%=global.mins%> minutes</b> to complete.<br/><br/>" + 
        "Project Implicit&rsquo;s standard privacy policy applies to this study. " + 
        "To view the privacy policy in a separate pop up window, please click " + 
        "<a href=\"JavaScript:void window.open('/implicit/privacypopup.html', 'FastResults', 'SCROLLBARS=YES,RESIZABLE=YES,WIDTH=300,HEIGHT=300');\">here</a>.<br/><br/>" + 
        "Participation in this study is voluntary, " + 
        "and you may end your participation at any time by closing the study window.  " + 
        'Contact M. Navon <a href="mailto:mayanna@post.bgu.ac.il">mayanna@post.bgu.ac.il</a>, ' + 
        "if you have any questions about the study. <br/><br/>" +
        '</p></div>'
      },
        // Note: Feel free to adapt language based on your consent form.
        {
            inherit : 'basicSelect',
            name: 'userconsent',
            description: '<b>Do you agree to participate?</b>',
            answers: [
                {text: 'YES, I agree to participate.', value: true},
                {text: 'NO, I do not agree to participate.', value: false}
            ]
          }
          ]
        }
    ]);

    
 return API.script;
});





