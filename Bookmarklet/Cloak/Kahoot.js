javascript:(function() { setInterval(function() { var link = document.querySelector('link[rel*="icon"]') || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = 'https://kahoot.it/v2/favicon.ico'; document.getElementsByTagName('head')[0].appendChild(link); document.title = 'Kahoot!';}, 1000); })();