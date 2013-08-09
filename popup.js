window.onload = function() {
    document.querySelector('button').onclick = function(e) {
        e.preventDefault();
        validate_register();
    };
};
function validate_register()
{
  var str=document.forms["input"]["keyword"].value;
	switch(document.forms["input"]["judge"].value)
	{
		case "uva":
			return chrome.tabs.create({url: 'http://uva.onlinejudge.org/external/'+str.substring(0,str.length-2)+'/'+str+'.html'});
		break;
		case "spoj":
			return chrome.tabs.create({url: 'https://www.spoj.pl/problems/'+str.toUpperCase()+'/'});
		break;
		case "tc":
			return chrome.tabs.create({url: 'http://www.topcoder.com/tc?module=ProblemArchive&class='+str});
		break;
		case "tcat":
			return chrome.tabs.create({url: 'http://www.topcoder.com/tc?module=ProblemArchive&cat='+str});
		break;
		case "cf":
			return chrome.tabs.create({url: 'http://www.codeforces.com/problemset/tags/'+str});
		break;
	}

}
