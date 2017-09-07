// alert(document.getElementById("filefield-1017-labelTextEl").innerHTML);
if (typeof myTiming === 'undefined') {
  let myTiming = [];
}
if (typeof message === 'undefined') {
  let message = {
    todaysPending: '?',
    weeksPending: '?'
  } ;
}
myTiming = document.querySelectorAll('.mytime-attendance .sub-page-container .row .attendance-view');
for( let row in myTiming) {
  let date = row.children;
  alert(date);
}

chrome.runtime.sendMessage(message);
