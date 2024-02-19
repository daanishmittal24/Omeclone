Ext.data.JsonP.Autolinker_matcher_Email({"tagname":"class","name":"Autolinker.matcher.Email","autodetected":{},"files":[{"filename":"Email.js","href":"Email.html#Autolinker-matcher-Email"}],"extends":"Autolinker.matcher.Matcher","members":[{"name":"tagBuilder","tagname":"cfg","owner":"Autolinker.matcher.Matcher","id":"cfg-tagBuilder","meta":{"required":true}},{"name":"matcherRegex","tagname":"property","owner":"Autolinker.matcher.Email","id":"property-matcherRegex","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.matcher.Matcher","id":"method-constructor","meta":{}},{"name":"parseMatches","tagname":"method","owner":"Autolinker.matcher.Email","id":"method-parseMatches","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.matcher.Email","short_doc":"Matcher to find email matches in an input string. ...","component":false,"superclasses":["Autolinker.matcher.Matcher"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Autolinker.matcher.Matcher' rel='Autolinker.matcher.Matcher' class='docClass'>Autolinker.matcher.Matcher</a><div class='subclass '><strong>Autolinker.matcher.Email</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Email.html#Autolinker-matcher-Email' target='_blank'>Email.js</a></div></pre><div class='doc-contents'><p>Matcher to find email matches in an input string.</p>\n\n<p>See this class's superclass (<a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a>) for more details.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-tagBuilder' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.matcher.Matcher' rel='Autolinker.matcher.Matcher' class='defined-in docClass'>Autolinker.matcher.Matcher</a><br/><a href='source/Matcher.html#Autolinker-matcher-Matcher-cfg-tagBuilder' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.Matcher-cfg-tagBuilder' class='name expandable'>tagBuilder</a> : <a href=\"#!/api/Autolinker.AnchorTagBuilder\" rel=\"Autolinker.AnchorTagBuilder\" class=\"docClass\">Autolinker.AnchorTagBuilder</a><span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'><p>Reference to the AnchorTagBuilder instance to use to generate HTML tags\nfor <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Matches</a>.</p>\n</div><div class='long'><p>Reference to the AnchorTagBuilder instance to use to generate HTML tags\nfor <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Matches</a>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-matcherRegex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.Email'>Autolinker.matcher.Email</span><br/><a href='source/Email.html#Autolinker-matcher-Email-property-matcherRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.Email-property-matcherRegex' class='name expandable'>matcherRegex</a> : RegExp<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The regular expression to match email addresses. ...</div><div class='long'><p>The regular expression to match email addresses. Example match:</p>\n\n<pre><code>person@place.com\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.matcher.Matcher' rel='Autolinker.matcher.Matcher' class='defined-in docClass'>Autolinker.matcher.Matcher</a><br/><a href='source/Matcher.html#Autolinker-matcher-Matcher-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.matcher.Matcher-method-constructor' class='name expandable'>Autolinker.matcher.Email</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object<div class='sub-desc'><p>The configuration properties for the Matcher\n  instance, specified in an Object (map).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseMatches' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.matcher.Email'>Autolinker.matcher.Email</span><br/><a href='source/Email.html#Autolinker-matcher-Email-method-parseMatches' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.matcher.Email-method-parseMatches' class='name expandable'>parseMatches</a>( <span class='pre'>text</span> ) : <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Parses the input text and returns the array of Matches\nfor the matcher. ...</div><div class='long'><p>Parses the input <code>text</code> and returns the array of <a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Matches</a>\nfor the matcher.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text to scan and replace matches in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>[]</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.matcher.Matcher-method-parseMatches\" rel=\"Autolinker.matcher.Matcher-method-parseMatches\" class=\"docClass\">Autolinker.matcher.Matcher.parseMatches</a></p></div></div></div></div></div></div></div>","meta":{}});