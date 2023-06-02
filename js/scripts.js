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
    let compiled = document.querySelector("input#compiledInput").value;
    let interpretive = document.querySelector("input#interpretiveInput").value;
    let coffeeOrTea = document.querySelector("input#coffeeOrTeaInput").value;te
    let iphoneApps = document.querySelector("input#iphoneAppsInput").value;
    let frontAndBackEnd = document.querySelector("input#frontAndBackEndInput").value;

    if (coffeeOrTea = "tea") {
      document.getElementById("teaInfo").removeAttribute("class")
    } else if (compiled.checked == true) {
      document.getElementById("cSharpInfo").removeAttribute("class");
    }
  };
};