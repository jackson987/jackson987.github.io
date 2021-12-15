var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://csec380-core.csec.rit.edu:86/add_friend?id=76',true);
xhr.send();

var currdate = Date();
var comment = 'friend added on '.concat(date);
var cmtreq = new XMLHTTPRequest();
cmtreq.open('GET', 'http://csec380-core.csec.rit.edu:86/add_comment?id=76&comment='.concat(comment),true);
cmtreq.send();
