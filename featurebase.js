// featurebase.js
!(function(e,t){
  var a="featurebase-sdk";
  function n(){
    if(!t.getElementById(a)){
      var e=t.createElement("script");
      e.id=a;
      e.src="https://do.featurebase.app/js/sdk.js";
      t.getElementsByTagName("script")[0].parentNode.insertBefore(e,t.getElementsByTagName("script")[0]);
    }
  }
  "function"!=typeof e.Featurebase && (e.Featurebase=function(){(e.Featurebase.q=e.Featurebase.q||[]).push(arguments)});
  "complete"===t.readyState||"interactive"===t.readyState ? n() : t.addEventListener("DOMContentLoaded",n);
})(window,document);

Featurebase("boot", {
  appId: "698df5c653f344e7ed78253c",
  createdAt: new Date().toISOString(),
  theme: "light",
  language: "en"
});
