javascript:(function() {var link = document.querySelector("link[rel*='icon']") || document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'https://powerschool.hcde.org/favicon.ico?logo';document.title = 'Grades and Attendance';console.log(document.title);document.getElementsByTagName('head')[0].appendChild(link);})();
