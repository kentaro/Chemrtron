(function(){

if (typeof self === 'undefined' || !self.Prism || !self.document) {
	return;
}

// The languages map is built automatically with gulp
var Languages = /*languages_placeholder[*/{"css":"CSS","clike":"C-like","javascript":"JavaScript","abap":"ABAP","actionscript":"ActionScript","apacheconf":"Apache Configuration","apl":"APL","applescript":"AppleScript","aspnet":"ASP.NET (C#)","autoit":"AutoIt","autohotkey":"AutoHotkey","basic":"BASIC","csharp":"C#","cpp":"C++","coffeescript":"CoffeeScript","css-extras":"CSS Extras","fsharp":"F#","glsl":"GLSL","http":"HTTP","inform7":"Inform 7","latex":"LaTeX","lolcode":"LOLCODE","matlab":"MATLAB","mel":"MEL","nasm":"NASM","nginx":"nginx","nsis":"NSIS","objectivec":"Objective-C","ocaml":"OCaml","php":"PHP","php-extras":"PHP Extras","powershell":"PowerShell","jsx":"React JSX","rest":"reST (reStructuredText)","sas":"SAS","sass":"Sass (Sass)","scss":"Sass (Scss)","sql":"SQL","typescript":"TypeScript","vhdl":"VHDL","vim":"vim","wiki":"Wiki markup","yaml":"YAML"}/*]*/;
Prism.hooks.add('before-highlight', function(env) {
	var pre = env.element.parentNode;
	if (!pre || !/pre/i.test(pre.nodeName)) {
		return;
	}
	var language = Languages[env.language] || (env.language.substring(0, 1).toUpperCase() + env.language.substring(1));
	pre.setAttribute('data-language', language);

	/* check if the divs already exist */
	var sib = pre.previousSibling;
	var div, div2;
	if (sib && /\s*\bprism-show-language\b\s*/.test(sib.className) &&
		sib.firstChild &&
		/\s*\bprism-show-language-label\b\s*/.test(sib.firstChild.className)) {
		div2 = sib.firstChild;
		if (div2.getAttribute('data-language') !== language) {
			div2.setAttribute('data-language', language);
			div2.innerHTML = language;
		}
	} else {
		div = document.createElement('div');
		div2 = document.createElement('div');

		div2.className = 'prism-show-language-label';
		div2.setAttribute('data-language', language);
		div2.innerHTML = language;

		div.className = 'prism-show-language';
		div.appendChild(div2);

		pre.parentNode.insertBefore(div, pre);
	}
});

})();
