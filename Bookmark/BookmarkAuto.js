var scriptURL = "https://themysteryperson.github.io/Bookmark/Bookmarklet";


if (window.jQuery) { 
    loadScript();
    
} else {
    var jq = document.createElement('script');
    jq.type = 'text/javascript'; 
    jq.onload = function() { 
        loadScript();
    }   
    jq.src = '//code.jquery.com/jquery-2.1.3.js';
    document.getElementsByTagName('head')[0].appendChild(jq);
}


function loadScript() {

  //add new script file to the DOM

    var A = document.createElement('script');
    A.type = 'text/javascript'; 
    A.onload = function() { 
    }   
    A.src = scriptURL;
    document.getElementsByTagName('head')[0].appendChild(A);
    
}
