function hideResults() {
  document.getElementById("cSharpInfo").setAttribute("class", "hidden");
  document.getElementById("swiftInfo").setAttribute("class", "hidden");
  document.getElementById("javaScriptInfo").setAttribute("class", "hidden");
  document.getElementById("pythonInfo").setAttribute("class", "hidden");
  document.getElementById("rubyInfo").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResults();
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    const compiled = document.querySelector("input#compiledInput").value;
    const interpretive = document.querySelector("input#interpretiveInput").value;
    const coffeeOrTea = document.querySelector("coffeeOrTeaInput").value;
    const iphoneApps = document.querySelector("input#iphoneAppsInput").value;
    const frontAndBackEnd = document.querySelector("input#frontAndBackEndInput").value;