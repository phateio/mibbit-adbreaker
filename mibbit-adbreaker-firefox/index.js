var self = require('sdk/self');
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: '*.mibbit.com',
  contentScriptFile: self.data.url('injection.js'),
  contentScriptWhen: 'ready'
});

var events = require('sdk/system/events');
var {Cc, Ci} = require('chrome');
 
function listener(event) {
  var channel = event.subject.QueryInterface(Ci.nsIHttpChannel);
  var ioService = Cc['@mozilla.org/network/io-service;1'].getService(Ci.nsIIOService);
  var uri = event.subject.URI;
  if (uri.host != 's3.amazonaws.com')
    return;
  if (uri.path.match(/^\/mibbit\/widgetclient_[0-9]+_gz.js$/i) != null) {
    var redirectUri = ioService.newURI('https://phateio.github.io/mibbit-adbreaker/widgetclient_xxxx_gz.js',null, null);
    channel.redirectTo(redirectUri);
  } else if (uri.path.match(/^\/s3\.mibbit\.com\/settings\/[A-Za-z0-9]+\.js$/i) != null) {
    var redirectUri = ioService.newURI('https://phateio.github.io/mibbit-adbreaker/56ac64c1.js',null, null);
    channel.redirectTo(redirectUri);
  }
}
 
events.on('http-on-modify-request', listener);
