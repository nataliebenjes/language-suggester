function hideResults() {
  document.getElementById("cSharpInfo").setAttribute("class", "hidden");
  document.getElementById("swiftInfo").setAttribute("class", "hidden");
  document.getElementById("javaScriptInfo").setAttribute("class", "hidden");
  document.getElementById("pythonInfo").setAttribute("class", "hidden");
  document.getElementById("rubyInfo").setAttribute("class", "hidden");
  document.getElementById("teaInfo").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResults();
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideResults();
    let compiled = document.querySelector("input#compiledInput");
    let interpretive = document.querySelector("input#interpretiveInput");
    let coffeeOrTea = document.querySelector("input#coffeeOrTeaInput").value;
    let iphoneApps = document.querySelector("input#iphoneAppsInput");
    let frontAndBackEnd = document.querySelector("input#frontAndBackEndInput");

    if (coffeeOrTea != "coffee") {
      document.getElementById("teaInfo").removeAttribute("class")
    } else if (iphoneApps.checked == true) {
      document.getElementById("swiftInfo").removeAttribute("class");
    } else if (compiled.checked == true) {
      document.getElementById("cSharpInfo").removeAttribute("class");
    } else if (interpretive.checked == true) {
      if (frontAndBackEnd.checked == true) {
        document.getElementById("javaScriptInfo").removeAttribute("class");
      } else if (compiled.checked == false) {
        document.getElementById("pythonInfo").removeAttribute("class");
      }
    } else {
      document.getElementById("rubyInfo").removeAttribute("class");
    }
  };
};