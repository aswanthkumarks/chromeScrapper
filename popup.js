// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
  let todaysPendingTime = document.getElementById('todays-required-time');
  let thisWeekAvgRequired = document.getElementById('required-time-in-this-week');
  todaysPendingTime.textContent = "Todays pending time : " + message.todaysPending;
  thisWeekAvgRequired.textContent = "Todays pending time : " + message.weeksPending;
});
