(function () {
  var newMathJax = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js';
  var oldMathJax = 'cdn.mathjax.org/mathjax/latest/MathJax.js';

  var replaceScript = function (script, src) {
    //
    //  Make redirected script
    //
    var newScript = document.createElement('script');
    newScript.src = newMathJax + src.replace(/.*?(\?|$)/, '$1');
    //
    //  Move onload and onerror handlers to new script
    //
    newScript.onload = script.onload; 
    newScript.onerror = script.onerror;
    script.onload = script.onerror = null;
    //
    //  Move any content (old-style configuration scripts)
    //
    while (script.firstChild) newScript.appendChild(script.firstChild);
    //
    //  Copy script id
    //
    if (script.id != null) newScript.id = script.id;
    //
    //  Replace original script with new one
    //
    script.parentNode.replaceChild(newScript, script);
    //
    //  Issue a console warning
    //
    console.warn('WARNING: cdn.mathjax.org has been retired. Check https://www.mathjax.org/cdn-shutting-down/ for migration tips.')
  }

  if (document.currentScript) {
    var script = document.currentScript;
    replaceScript(script, script.src);
  } else {
    //
    // Look for current script by searching for one with the right source
    //
    var n = oldMathJax.length;
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var script = scripts[i];
      var src = (script.src || '').replace(/.*?:\/\//,'');
      if (src.substr(0, n) === oldMathJax) {
        replaceScript(script, src);
        break;
      }
    }
  }
})();


function ctatOnload() {
    initTutor({"question_file":'two-layer.brd'});

    // Render text elements that has MathML
    $('#step2_solved_solution').on('CTAT_EXECUTE_SAI', function(e) {
        MathJax.Hub.Queue(['Typeset',MathJax.Hub,$('#step2_solved_solution')[0]]);
    });
    $('#step3_previous_results').on('CTAT_EXECUTE_SAI', function(e) {
        MathJax.Hub.Queue(['Typeset',MathJax.Hub,$('#step3_previous_results')[0]]);
    });
    $('#step3_reference_answer').on('CTAT_EXECUTE_SAI', function(e) {
        MathJax.Hub.Queue(['Typeset',MathJax.Hub,$('#step3_reference_answer')[0]]);
    });
};

// Note this file doesn't seem to work, whereas directly putting code in HTML does
// Keeping it "just in case"
// So in HTML, add this to header:
/*
    <script src='https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML' async></script>
    
    <script>
        function ctatOnload() {
            initTutor({ "question_file": 'two-layer.brd' });

            // Render text elements that has MathML
            $('#step2_solved_solution').on('CTAT_EXECUTE_SAI', function (e) {
                MathJax.Hub.Queue(['Typeset', MathJax.Hub, $('#step2_solved_solution')[0]]);
            });
            $('#step3_previous_results').on('CTAT_EXECUTE_SAI', function (e) {
                MathJax.Hub.Queue(['Typeset', MathJax.Hub, $('#step3_previous_results')[0]]);
            });
            $('#step3_reference_answer').on('CTAT_EXECUTE_SAI', function (e) {
                MathJax.Hub.Queue(['Typeset', MathJax.Hub, $('#step3_reference_answer')[0]]);
            });
        };
    </script> 
*/


       
       
       
      
        
      
       
       
       
       
       
       
       
      
        
      
       
       
       
       
       
       
       
      
       />
<br
        
      
       
       
       
       
       
       
       
      
       '
       ""'
       
       
       
       
       
       
       
       
       
       
       
       
       
       
      
      /
       
       
       
      
        
      
     
       
       
       
       
       
       
       
      
        
      
      
      
       
       
       
       
       
       
       
      
        
      
      "'
       
       
       
       
       
       
       
      
        
      
      
       
       
       
       
      >
   
       
    
       iv     <td>
 <
       
                 
                 
                 
                 
       iv>
       </td>
    
         <div
   
                 
                 
                 
                 
                
       <div
     
                 
                 
                 
             '</></div>
>

  ""'
   
      
      
       
       
       
       
       
       
       
      
      
       
       
       
       
       
       
       
      
        
       
     /
    /
      
      
       
       
       
       
       
       
       
       
       
       
       
      
      
       
       
       
       
       
       
       
       
      
      
       
       
       
       
       
       
       
       
      
      
       
       
       
       
       
       
       
       
      
      
       
       
       
       
       
       
       
       
      
      
       
       
       
       
       
       
       
       
      
      "'
       
       
       
       
       
       
       
       
      
      ""'
       
       
       
       
       
       
       
       
       
       
       
       
      
      ""'
       
       
       
       
       
       
       
       
       
       
       
       
      
      
       
       
       
       
       
       
       