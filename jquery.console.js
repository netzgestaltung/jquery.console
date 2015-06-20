/**
 * Prevent Browsers without console to throw an error if console.log() or similar is used
 *
 * @ homepage: https://github.com/netzgestaltung/jquery.console
 * @ Copyright 2015 nexxar/Thomas Fellinger
 * @ License GPLv2
 *
 * Use $.log(), $.error(), $.warn(), $.info(), $.debug() instead
 */
jQuery.log = function log(){ 
  try { if (console.log.apply !== undefined) { console.log.apply(console,arguments); } else { console.log(arguments[0]);} } catch(e){} 
};
jQuery.error = function error(){
  try { if (console.error.apply !== undefined) { console.error.apply(console,arguments); } else { console.error(arguments[0]);} } catch(e){} 
};
jQuery.warn = function warn(){
  try { if (console.warn.apply !== undefined) { console.warn.apply(console,arguments); } else { console.warn(arguments[0]);} } catch(e){} 
};
jQuery.info = function info(){
  try { if (console.info.apply !== undefined) { console.info.apply(console,arguments); } else { console.info(arguments[0]);} } catch(e){} 
};
jQuery.debug = function debug(){
  try { if (console.debug.apply !== undefined) { console.debug.apply(console,arguments); } else { console.debug(arguments[0]);} } catch(e){} 
};
