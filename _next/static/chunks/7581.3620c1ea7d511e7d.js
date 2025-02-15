"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7581],{"(app-pages-browser)/./node_modules/shiki/dist/langs/puppet.mjs":(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});let p=[Object.freeze(JSON.parse('{"displayName":"Puppet","fileTypes":["pp"],"foldingStartMarker":"(^\\\\s*/\\\\*|(\\\\{|\\\\[|\\\\()\\\\s*$)","foldingStopMarker":"(\\\\*/|^\\\\s*(\\\\}|\\\\]|\\\\)))","name":"puppet","patterns":[{"include":"#line_comment"},{"include":"#constants"},{"begin":"^\\\\s*/\\\\*","end":"\\\\*/","name":"comment.block.puppet"},{"begin":"\\\\b(node)\\\\b","captures":{"1":{"name":"storage.type.puppet"},"2":{"name":"entity.name.type.class.puppet"}},"end":"(?={)","name":"meta.definition.class.puppet","patterns":[{"match":"\\\\bdefault\\\\b","name":"keyword.puppet"},{"include":"#strings"},{"include":"#regex-literal"}]},{"begin":"\\\\b(class)\\\\s+((?:[a-z][a-z0-9_]*)?(?:::[a-z][a-z0-9_]*)+|[a-z][a-z0-9_]*)\\\\s*","captures":{"1":{"name":"storage.type.puppet"},"2":{"name":"entity.name.type.class.puppet"}},"end":"(?={)","name":"meta.definition.class.puppet","patterns":[{"begin":"\\\\b(inherits)\\\\b\\\\s+","captures":{"1":{"name":"storage.modifier.puppet"}},"end":"(?=\\\\(|{)","name":"meta.definition.class.inherits.puppet","patterns":[{"match":"\\\\b((?:[-_A-Za-z0-9\\".]+::)*[-_A-Za-z0-9\\".]+)\\\\b","name":"support.type.puppet"}]},{"include":"#line_comment"},{"include":"#resource-parameters"},{"include":"#parameter-default-types"}]},{"begin":"^\\\\s*(plan)\\\\s+((?:[a-z][a-z0-9_]*)?(?:::[a-z][a-z0-9_]*)+|[a-z][a-z0-9_]*)\\\\s*","captures":{"1":{"name":"storage.type.puppet"},"2":{"name":"entity.name.type.plan.puppet"}},"end":"(?={)","name":"meta.definition.plan.puppet","patterns":[{"include":"#line_comment"},{"include":"#resource-parameters"},{"include":"#parameter-default-types"}]},{"begin":"^\\\\s*(define|function)\\\\s+([a-z][a-z0-9_]*|(?:[a-z][a-z0-9_]*)?(?:::[a-z][a-z0-9_]*)+)\\\\s*(\\\\()","captures":{"1":{"name":"storage.type.function.puppet"},"2":{"name":"entity.name.function.puppet"}},"end":"(?={)","name":"meta.function.puppet","patterns":[{"include":"#line_comment"},{"include":"#resource-parameters"},{"include":"#parameter-default-types"}]},{"captures":{"1":{"name":"keyword.control.puppet"}},"match":"\\\\b(case|else|elsif|if|unless)(?!::)\\\\b"},{"include":"#keywords"},{"include":"#resource-definition"},{"include":"#heredoc"},{"include":"#strings"},{"include":"#puppet-datatypes"},{"include":"#array"},{"match":"((\\\\$?)\\"?[a-zA-Z_\\\\x{7f}-\\\\x{ff}][a-zA-Z0-9_\\\\x{7f}-\\\\x{ff}]*\\"?):(?=\\\\s+|$)","name":"entity.name.section.puppet"},{"include":"#numbers"},{"include":"#variable"},{"begin":"\\\\b(import|include|contain|require)\\\\s+(?!.*=>)","beginCaptures":{"1":{"name":"keyword.control.import.include.puppet"}},"contentName":"variable.parameter.include.puppet","end":"(?=\\\\s|$)","name":"meta.include.puppet"},{"match":"\\\\b\\\\w+\\\\s*(?==>)\\\\s*","name":"constant.other.key.puppet"},{"match":"(?<={)\\\\s*\\\\w+\\\\s*(?=})","name":"constant.other.bareword.puppet"},{"match":"\\\\b(alert|crit|debug|defined|emerg|err|escape|fail|failed|file|generate|gsub|info|notice|package|realize|search|tag|tagged|template|warning)\\\\b(?!.*{)","name":"support.function.puppet"},{"match":"=>","name":"punctuation.separator.key-value.puppet"},{"match":"->","name":"keyword.control.orderarrow.puppet"},{"match":"~>","name":"keyword.control.notifyarrow.puppet"},{"include":"#regex-literal"}],"repository":{"array":{"begin":"(\\\\[)","beginCaptures":{"1":{"name":"punctuation.definition.array.begin.puppet"}},"end":"\\\\]","endCaptures":{"0":{"name":"punctuation.definition.array.end.puppet"}},"name":"meta.array.puppet","patterns":[{"match":"\\\\s*,\\\\s*"},{"include":"#parameter-default-types"},{"include":"#line_comment"}]},"constants":{"patterns":[{"match":"\\\\b(absent|directory|false|file|present|running|stopped|true)\\\\b(?!.*{)","name":"constant.language.puppet"}]},"double-quoted-string":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.puppet"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.puppet"}},"name":"string.quoted.double.interpolated.puppet","patterns":[{"include":"#escaped_char"},{"include":"#interpolated_puppet"}]},"escaped_char":{"match":"\\\\\\\\.","name":"constant.character.escape.puppet"},"function_call":{"begin":"([a-zA-Z_]\\\\w*)(\\\\()","end":"\\\\)","name":"meta.function-call.puppet","patterns":[{"include":"#parameter-default-types"},{"match":",","name":"punctuation.separator.parameters.puppet"}]},"hash":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.hash.begin.puppet"}},"end":"\\\\}","endCaptures":{"0":{"name":"punctuation.definition.hash.end.puppet"}},"name":"meta.hash.puppet","patterns":[{"match":"\\\\b\\\\w+\\\\s*(?==>)\\\\s*","name":"constant.other.key.puppet"},{"include":"#parameter-default-types"},{"include":"#line_comment"}]},"heredoc":{"patterns":[{"begin":"@\\\\([ \\\\t]*\\"([^:\\\\/) \\\\t]+)\\"[ \\\\t]*(:[ \\\\t]*[a-z][a-zA-Z0-9_+]*[ \\\\t]*)?(\\\\/[ \\\\t]*[tsrnL$]*)?[ \\\\t]*\\\\)","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.puppet"}},"end":"^[ \\\\t]*(\\\\|[ \\\\t]*-|\\\\||-)?[ \\\\t]*\\\\1","endCaptures":{"0":{"name":"punctuation.definition.string.end.puppet"}},"name":"string.interpolated.heredoc.puppet","patterns":[{"include":"#escaped_char"},{"include":"#interpolated_puppet"}]},{"begin":"@\\\\([ \\\\t]*([^:\\\\/) \\\\t]+)[ \\\\t]*(:[ \\\\t]*[a-z][a-zA-Z0-9_+]*[ \\\\t]*)?(\\\\/[ \\\\t]*[tsrnL$]*)?[ \\\\t]*\\\\)","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.puppet"}},"end":"^[ \\\\t]*(\\\\|[ \\\\t]*-|\\\\||-)?[ \\\\t]*\\\\1","endCaptures":{"0":{"name":"punctuation.definition.string.end.puppet"}},"name":"string.unquoted.heredoc.puppet"}]},"interpolated_puppet":{"patterns":[{"begin":"(\\\\${)(\\\\d+)","beginCaptures":{"1":{"name":"punctuation.section.embedded.begin.puppet"},"2":{"name":"source.puppet variable.other.readwrite.global.pre-defined.puppet"}},"contentName":"source.puppet","end":"}","endCaptures":{"0":{"name":"punctuation.section.embedded.end.puppet"}},"name":"meta.embedded.line.puppet","patterns":[{"include":"$self"}]},{"begin":"(\\\\${)(_\\\\w*)","beginCaptures":{"1":{"name":"punctuation.section.embedded.begin.puppet"},"2":{"name":"source.puppet variable.other.readwrite.global.puppet"}},"contentName":"source.puppet","end":"}","endCaptures":{"0":{"name":"punctuation.section.embedded.end.puppet"}},"name":"meta.embedded.line.puppet","patterns":[{"include":"$self"}]},{"begin":"(\\\\${)(([a-z][a-z0-9_]*)?(?:::[a-z][a-z0-9_]*)*)","beginCaptures":{"1":{"name":"punctuation.section.embedded.begin.puppet"},"2":{"name":"source.puppet variable.other.readwrite.global.puppet"}},"contentName":"source.puppet","end":"}","endCaptures":{"0":{"name":"punctuation.section.embedded.end.puppet"}},"name":"meta.embedded.line.puppet","patterns":[{"include":"$self"}]},{"begin":"\\\\${","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.puppet"}},"contentName":"source.puppet","end":"}","endCaptures":{"0":{"name":"punctuation.section.embedded.end.puppet"}},"name":"meta.embedded.line.puppet","patterns":[{"include":"$self"}]}]},"keywords":{"captures":{"1":{"name":"keyword.puppet"}},"match":"\\\\b(undef)\\\\b"},"line_comment":{"patterns":[{"captures":{"1":{"name":"comment.line.number-sign.puppet"},"2":{"name":"punctuation.definition.comment.puppet"}},"match":"^((#).*$\\\\n?)","name":"meta.comment.full-line.puppet"},{"captures":{"1":{"name":"punctuation.definition.comment.puppet"}},"match":"(#).*$\\\\n?","name":"comment.line.number-sign.puppet"}]},"nested_braces":{"begin":"\\\\{","captures":{"1":{"name":"punctuation.section.scope.puppet"}},"end":"\\\\}","patterns":[{"include":"#escaped_char"},{"include":"#nested_braces"}]},"nested_braces_interpolated":{"begin":"\\\\{","captures":{"1":{"name":"punctuation.section.scope.puppet"}},"end":"\\\\}","patterns":[{"include":"#escaped_char"},{"include":"#variable"},{"include":"#nested_braces_interpolated"}]},"nested_brackets":{"begin":"\\\\[","captures":{"1":{"name":"punctuation.section.scope.puppet"}},"end":"\\\\]","patterns":[{"include":"#escaped_char"},{"include":"#nested_brackets"}]},"nested_brackets_interpolated":{"begin":"\\\\[","captures":{"1":{"name":"punctuation.section.scope.puppet"}},"end":"\\\\]","patterns":[{"include":"#escaped_char"},{"include":"#variable"},{"include":"#nested_brackets_interpolated"}]},"nested_parens":{"begin":"\\\\(","captures":{"1":{"name":"punctuation.section.scope.puppet"}},"end":"\\\\)","patterns":[{"include":"#escaped_char"},{"include":"#nested_parens"}]},"nested_parens_interpolated":{"begin":"\\\\(","captures":{"1":{"name":"punctuation.section.scope.puppet"}},"end":"\\\\)","patterns":[{"include":"#escaped_char"},{"include":"#variable"},{"include":"#nested_parens_interpolated"}]},"numbers":{"patterns":[{"comment":"HEX 0x 0-f","match":"(?<!\\\\w|\\\\d)([-+]?)(?i:0x)(?i:[0-9a-f])+(?!\\\\w|\\\\d)","name":"constant.numeric.hexadecimal.puppet"},{"comment":"INTEGERS [(+|-)] digits [e [(+|-)] digits]","match":"(?<!\\\\w|\\\\.)([-+]?)(?<!\\\\d)\\\\d+(?i:e(\\\\+|-){0,1}\\\\d+){0,1}(?!\\\\w|\\\\d|\\\\.)","name":"constant.numeric.integer.puppet"},{"comment":"FLOAT [(+|-)] digits . digits [e [(+|-)] digits]","match":"(?<!\\\\w)([-+]?)\\\\d+\\\\.\\\\d+(?i:e(\\\\+|-){0,1}\\\\d+){0,1}(?!\\\\w|\\\\d)","name":"constant.numeric.integer.puppet"}]},"parameter-default-types":{"patterns":[{"include":"#strings"},{"include":"#numbers"},{"include":"#variable"},{"include":"#hash"},{"include":"#array"},{"include":"#function_call"},{"include":"#constants"},{"include":"#puppet-datatypes"}]},"puppet-datatypes":{"patterns":[{"comment":"Puppet Data type","match":"(?<![a-zA-Z$])([A-Z]\\\\w*)(?!\\\\w)","name":"storage.type.puppet"}]},"regex-literal":{"comment":"Puppet Regular expression literal without interpolation","match":"(\\\\/)(.+?)(?:[^\\\\\\\\]\\\\/)","name":"string.regexp.literal.puppet"},"resource-definition":{"begin":"(?:^|\\\\b)(::[a-z][a-z0-9_]*|[a-z][a-z0-9_]*|(?:[a-z][a-z0-9_]*)?(?:::[a-z][a-z0-9_]*)+)\\\\s*({)\\\\s*","beginCaptures":{"1":{"name":"meta.definition.resource.puppet storage.type.puppet"}},"contentName":"entity.name.section.puppet","end":":","patterns":[{"include":"#strings"},{"include":"#variable"},{"include":"#array"}]},"resource-parameters":{"patterns":[{"captures":{"1":{"name":"variable.other.puppet"},"2":{"name":"punctuation.definition.variable.puppet"}},"match":"((\\\\$+)[a-zA-Z_]\\\\w*)\\\\s*(?=,|\\\\))","name":"meta.function.argument.puppet"},{"begin":"((\\\\$+)[a-zA-Z_]\\\\w*)(?:\\\\s*(=)\\\\s*)\\\\s*","captures":{"1":{"name":"variable.other.puppet"},"2":{"name":"punctuation.definition.variable.puppet"},"3":{"name":"keyword.operator.assignment.puppet"}},"end":"(?=,|\\\\))","name":"meta.function.argument.puppet","patterns":[{"include":"#parameter-default-types"}]}]},"single-quoted-string":{"begin":"\'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.puppet"}},"end":"\'","endCaptures":{"0":{"name":"punctuation.definition.string.end.puppet"}},"name":"string.quoted.single.puppet","patterns":[{"include":"#escaped_char"}]},"strings":{"patterns":[{"include":"#double-quoted-string"},{"include":"#single-quoted-string"}]},"variable":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.variable.puppet"}},"match":"(\\\\$)(\\\\d+)","name":"variable.other.readwrite.global.pre-defined.puppet"},{"captures":{"1":{"name":"punctuation.definition.variable.puppet"}},"match":"(\\\\$)_\\\\w*","name":"variable.other.readwrite.global.puppet"},{"captures":{"1":{"name":"punctuation.definition.variable.puppet"}},"match":"(\\\\$)(([a-z]\\\\w*)?(?:::[a-z]\\\\w*)*)","name":"variable.other.readwrite.global.puppet"}]}},"scopeName":"source.puppet"}'))]}}]);