"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1636,2038,2796],{"(app-pages-browser)/./node_modules/shiki/dist/langs/cmake.mjs":(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});let _=[Object.freeze(JSON.parse('{"displayName":"CMake","fileTypes":["cmake","CMakeLists.txt"],"name":"cmake","patterns":[{"comment":"Variables That Describe the System","match":"\\\\b(?i:APPLE|BORLAND|(CMAKE_)?(CL_64|COMPILER_2005|HOST_APPLE|HOST_SYSTEM|HOST_SYSTEM_NAME|HOST_SYSTEM_PROCESSOR|HOST_SYSTEM_VERSION|HOST_UNIX|HOST_WIN32|LIBRARY_ARCHITECTURE|LIBRARY_ARCHITECTURE_REGEX|OBJECT_PATH_MAX|SYSTEM|SYSTEM_NAME|SYSTEM_PROCESSOR|SYSTEM_VERSION)|CYGWIN|MSVC|MSVC80|MSVC_IDE|MSVC_VERSION|UNIX|WIN32|XCODE_VERSION|MSVC60|MSVC70|MSVC90|MSVC71)\\\\b","name":"constant.source.cmake"},{"comment":"cmakeOperators","match":"\\\\b(?i:ABSOLUTE|AND|BOOL|CACHE|COMMAND|COMMENT|DEFINED|DOC|EQUAL|EXISTS|EXT|FALSE|GREATER|GREATER_EQUAL|INTERNAL|IN_LIST|IS_ABSOLUTE|IS_DIRECTORY|IS_NEWER_THAN|IS_SYMLINK|LESS|LESS_EQUAL|MATCHES|NAME|NAMES|NAME_WE|NOT|OFF|ON|OR|PATH|PATHS|POLICY|PROGRAM|STREQUAL|STRGREATER|STRGREATER_EQUAL|STRING|STRLESS|STRLESS_EQUAL|TARGET|TEST|TRUE|VERSION_EQUAL|VERSION_GREATER|VERSION_GREATER_EQUAL|VERSION_LESS)\\\\b","name":"keyword.cmake"},{"comment":"Commands","match":"^\\\\s*\\\\b(?i:add_compile_options|add_custom_command|add_custom_target|add_definitions|add_dependencies|add_executable|add_library|add_subdirectory|add_test|aux_source_directory|break|build_command|build_name|cmake_host_system_information|cmake_minimum_required|cmake_policy|configure_file|continue|create_test_sourcelist|ctest_build|ctest_configure|ctest_coverage|ctest_empty_binary_directory|ctest_memcheck|ctest_read_custom_files|ctest_run_script|ctest_sleep|ctest_start|ctest_submit|ctest_test|ctest_update|ctest_upload|define_property|else|elseif|enable_language|enable_testing|endforeach|endfunction|endif|endmacro|endwhile|exec_program|execute_process|export|export_library_dependencies|file|find_file|find_library|find_package|find_path|find_program|fltk_wrap_ui|foreach|function|get_cmake_property|get_directory_property|get_filename_component|get_property|get_source_file_property|get_target_property|get_test_property|if|include|include_directories|include_external_msproject|include_regular_expression|install|install_files|install_programs|install_targets|link_directories|link_libraries|list|load_cache|load_command|macro|make_directory|mark_as_advanced|math|message|option|output_required_files|project|qt_wrap_cpp|qt_wrap_ui|remove|remove_definitions|return|separate_arguments|set|set_directory_properties|set_property|set_source_files_properties|set_target_properties|set_tests_properties|site_name|source_group|string|subdir_depends|subdirs|target_compile_definitions|target_compile_features|target_compile_options|target_include_directories|target_link_libraries|target_sources|try_compile|try_run|unset|use_mangled_mesa|utility_source|variable_requires|variable_watch|while|write_file)\\\\b","name":"keyword.cmake"},{"comment":"Variables That Change Behavior","match":"\\\\b(?i:BUILD_SHARED_LIBS|(CMAKE_)?(ABSOLUTE_DESTINATION_FILES|AUTOMOC_RELAXED_MODE|BACKWARDS_COMPATIBILITY|BUILD_TYPE|COLOR_MAKEFILE|CONFIGURATION_TYPES|DEBUG_TARGET_PROPERTIES|DISABLE_FIND_PACKAGE_\\\\w+|FIND_LIBRARY_PREFIXES|FIND_LIBRARY_SUFFIXES|IGNORE_PATH|INCLUDE_PATH|INSTALL_DEFAULT_COMPONENT_NAME|INSTALL_PREFIX|LIBRARY_PATH|MFC_FLAG|MODULE_PATH|NOT_USING_CONFIG_FLAGS|POLICY_DEFAULT_CMP\\\\w+|PREFIX_PATH|PROGRAM_PATH|SKIP_INSTALL_ALL_DEPENDENCY|SYSTEM_IGNORE_PATH|SYSTEM_INCLUDE_PATH|SYSTEM_LIBRARY_PATH|SYSTEM_PREFIX_PATH|SYSTEM_PROGRAM_PATH|USER_MAKE_RULES_OVERRIDE|WARN_ON_ABSOLUTE_INSTALL_DESTINATION))\\\\b","name":"variable.source.cmake"},{"match":"\\\\$\\\\{\\\\w+\\\\}","name":"storage.source.cmake"},{"match":"\\\\$ENV\\\\{\\\\w+\\\\}","name":"storage.source.cmake"},{"comment":"Variables that Control the Build","match":"\\\\b(?i:(CMAKE_)?(\\\\w+_POSTFIX|ARCHIVE_OUTPUT_DIRECTORY|AUTOMOC|AUTOMOC_MOC_OPTIONS|BUILD_WITH_INSTALL_RPATH|DEBUG_POSTFIX|EXE_LINKER_FLAGS|EXE_LINKER_FLAGS_\\\\w+|Fortran_FORMAT|Fortran_MODULE_DIRECTORY|GNUtoMS|INCLUDE_CURRENT_DIR|INCLUDE_CURRENT_DIR_IN_INTERFACE|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|LIBRARY_OUTPUT_DIRECTORY|LIBRARY_PATH_FLAG|LINK_DEF_FILE_FLAG|LINK_DEPENDS_NO_SHARED|LINK_INTERFACE_LIBRARIES|LINK_LIBRARY_FILE_FLAG|LINK_LIBRARY_FLAG|MACOSX_BUNDLE|NO_BUILTIN_CHRPATH|PDB_OUTPUT_DIRECTORY|POSITION_INDEPENDENT_CODE|RUNTIME_OUTPUT_DIRECTORY|SKIP_BUILD_RPATH|SKIP_INSTALL_RPATH|TRY_COMPILE_CONFIGURATION|USE_RELATIVE_PATHS|WIN32_EXECUTABLE)|EXECUTABLE_OUTPUT_PATH|LIBRARY_OUTPUT_PATH)\\\\b","name":"variable.source.cmake"},{"comment":"Variables that Provide Information","match":"\\\\b(?i:CMAKE_(AR|ARGC|ARGV0|BINARY_DIR|BUILD_TOOL|CACHEFILE_DIR|CACHE_MAJOR_VERSION|CACHE_MINOR_VERSION|CACHE_PATCH_VERSION|CFG_INTDIR|COMMAND|CROSSCOMPILING|CTEST_COMMAND|CURRENT_BINARY_DIR|CURRENT_LIST_DIR|CURRENT_LIST_FILE|CURRENT_LIST_LINE|CURRENT_SOURCE_DIR|DL_LIBS|EDIT_COMMAND|EXECUTABLE_SUFFIX|EXTRA_GENERATOR|EXTRA_SHARED_LIBRARY_SUFFIXES|GENERATOR|HOME_DIRECTORY|IMPORT_LIBRARY_PREFIX|IMPORT_LIBRARY_SUFFIX|LINK_LIBRARY_SUFFIX|MAJOR_VERSION|MAKE_PROGRAM|MINOR_VERSION|PARENT_LIST_FILE|PATCH_VERSION|PROJECT_NAME|RANLIB|ROOT|SCRIPT_MODE_FILE|SHARED_LIBRARY_PREFIX|SHARED_LIBRARY_SUFFIX|SHARED_MODULE_PREFIX|SHARED_MODULE_SUFFIX|SIZEOF_VOID_P|SKIP_RPATH|SOURCE_DIR|STANDARD_LIBRARIES|STATIC_LIBRARY_PREFIX|STATIC_LIBRARY_SUFFIX|TWEAK_VERSION|USING_VC_FREE_TOOLS|VERBOSE_MAKEFILE|VERSION)|PROJECT_BINARY_DIR|PROJECT_NAME|PROJECT_SOURCE_DIR|\\\\w+_BINARY_DIR|\\\\w+__SOURCE_DIR)\\\\b","name":"variable.source.cmake"},{"begin":"#\\\\[(=*)\\\\[","comment":"BracketArgs","end":"\\\\]\\\\1\\\\]","name":"comment.source.cmake","patterns":[{"match":"\\\\\\\\(.|$)","name":"constant.character.escape"}]},{"begin":"\\\\[(=*)\\\\[","comment":"BracketArgs","end":"\\\\]\\\\1\\\\]","name":"argument.source.cmake","patterns":[{"match":"\\\\\\\\(.|$)","name":"constant.character.escape"}]},{"match":"#+.*$","name":"comment.source.cmake"},{"comment":"Properties on Cache Entries","match":"\\\\b(?i:ADVANCED|HELPSTRING|MODIFIED|STRINGS|TYPE|VALUE)\\\\b","name":"entity.source.cmake"},{"comment":"Properties on Source Files","match":"\\\\b(?i:ABSTRACT|COMPILE_DEFINITIONS|COMPILE_DEFINITIONS_<CONFIG>|COMPILE_FLAGS|EXTERNAL_OBJECT|Fortran_FORMAT|GENERATED|HEADER_FILE_ONLY|KEEP_EXTENSION|LABELS|LANGUAGE|LOCATION|MACOSX_PACKAGE_LOCATION|OBJECT_DEPENDS|OBJECT_OUTPUTS|SYMBOLIC|WRAP_EXCLUDE)\\\\b","name":"entity.source.cmake"},{"comment":"Properties on Tests","match":"\\\\b(?i:ATTACHED_FILES|ATTACHED_FILES_ON_FAIL|COST|DEPENDS|ENVIRONMENT|FAIL_REGULAR_EXPRESSION|LABELS|MEASUREMENT|PASS_REGULAR_EXPRESSION|PROCESSORS|REQUIRED_FILES|RESOURCE_LOCK|RUN_SERIAL|TIMEOUT|WILL_FAIL|WORKING_DIRECTORY)\\\\b","name":"entity.source.cmake"},{"comment":"Properties on Directories","match":"\\\\b(?i:ADDITIONAL_MAKE_CLEAN_FILES|CACHE_VARIABLES|CLEAN_NO_CUSTOM|COMPILE_DEFINITIONS|COMPILE_DEFINITIONS_\\\\w+|DEFINITIONS|EXCLUDE_FROM_ALL|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|INCLUDE_DIRECTORIES|INCLUDE_REGULAR_EXPRESSION|INTERPROCEDURAL_OPTIMIZATION|INTERPROCEDURAL_OPTIMIZATION_\\\\w+|LINK_DIRECTORIES|LISTFILE_STACK|MACROS|PARENT_DIRECTORY|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|TEST_INCLUDE_FILE|VARIABLES|VS_GLOBAL_SECTION_POST_\\\\w+|VS_GLOBAL_SECTION_PRE_\\\\w+)\\\\b","name":"entity.source.cmake"},{"comment":"Properties of Global Scope","match":"\\\\b(?i:ALLOW_DUPLICATE_CUSTOM_TARGETS|DEBUG_CONFIGURATIONS|DISABLED_FEATURES|ENABLED_FEATURES|ENABLED_LANGUAGES|FIND_LIBRARY_USE_LIB64_PATHS|FIND_LIBRARY_USE_OPENBSD_VERSIONING|GLOBAL_DEPENDS_DEBUG_MODE|GLOBAL_DEPENDS_NO_CYCLES|IN_TRY_COMPILE|PACKAGES_FOUND|PACKAGES_NOT_FOUND|PREDEFINED_TARGETS_FOLDER|REPORT_UNDEFINED_PROPERTIES|RULE_LAUNCH_COMPILE|RULE_LAUNCH_CUSTOM|RULE_LAUNCH_LINK|RULE_MESSAGES|TARGET_ARCHIVES_MAY_BE_SHARED_LIBS|TARGET_SUPPORTS_SHARED_LIBS|USE_FOLDERS|__CMAKE_DELETE_CACHE_CHANGE_VARS_)\\\\b","name":"entity.source.cmake"},{"comment":"Properties on Targets","match":"\\\\b(?i:\\\\w+_(OUTPUT_NAME|POSTFIX)|ARCHIVE_OUTPUT_(DIRECTORY(_\\\\w+)?|NAME(_\\\\w+)?)|AUTOMOC(_MOC_OPTIONS)?|BUILD_WITH_INSTALL_RPATH|BUNDLE|BUNDLE(_EXTENSION)?|COMPATIBLE_INTERFACE_BOOL|COMPATIBLE_INTERFACE_STRING|COMPILE_(DEFINITIONS(_\\\\w+)?|FLAGS)|DEBUG_POSTFIX|DEFINE_SYMBOL|ENABLE_EXPORTS|EXCLUDE_FROM_ALL|EchoString|FOLDER|FRAMEWORK|Fortran_(FORMAT|MODULE_DIRECTORY)|GENERATOR_FILE_NAME|GNUtoMS|HAS_CXX|IMPLICIT_DEPENDS_INCLUDE_TRANSFORM|IMPORTED|IMPORTED_(CONFIGURATIONS|IMPLIB(_\\\\w+)?|LINK_DEPENDENT_LIBRARIES(_\\\\w+)?|LINK_INTERFACE_LANGUAGES(_\\\\w+)?|LINK_INTERFACE_LIBRARIES(_\\\\w+)?|LINK_INTERFACE_MULTIPLICITY(_\\\\w+)?|LOCATION(_\\\\w+)?|NO_SONAME(_\\\\w+)?|SONAME(_\\\\w+)?)|IMPORT_PREFIX|IMPORT_SUFFIX|INSTALL_NAME_DIR|INSTALL_RPATH|INSTALL_RPATH_USE_LINK_PATH|INTERFACE|INTERFACE_COMPILE_DEFINITIONS|INTERFACE_INCLUDE_DIRECTORIES|INTERPROCEDURAL_OPTIMIZATION|INTERPROCEDURAL_OPTIMIZATION_\\\\w+|LABELS|LIBRARY_OUTPUT_DIRECTORY(_\\\\w+)?|LIBRARY_OUTPUT_NAME(_\\\\w+)?|LINKER_LANGUAGE|LINK_DEPENDS|LINK_FLAGS(_\\\\w+)?|LINK_INTERFACE_LIBRARIES(_\\\\w+)?|LINK_INTERFACE_MULTIPLICITY(_\\\\w+)?|LINK_LIBRARIES|LINK_SEARCH_END_STATIC|LINK_SEARCH_START_STATIC|LOCATION(_\\\\w+)?|MACOSX_BUNDLE|MACOSX_BUNDLE_INFO_PLIST|MACOSX_FRAMEWORK_INFO_PLIST|MAP_IMPORTED_CONFIG_\\\\w+|NO_SONAME|OSX_ARCHITECTURES(_\\\\w+)?|OUTPUT_NAME(_\\\\w+)?|PDB_NAME(_\\\\w+)?|POST_INSTALL_SCRIPT|PREFIX|PRE_INSTALL_SCRIPT|PRIVATE|PRIVATE_HEADER|PROJECT_LABEL|PUBLIC|PUBLIC_HEADER|RESOURCE|RULE_LAUNCH_(COMPILE|CUSTOM|LINK)|RUNTIME_OUTPUT_(DIRECTORY(_\\\\w+)?|NAME(_\\\\w+)?)|SKIP_BUILD_RPATH|SOURCES|SOVERSION|STATIC_LIBRARY_FLAGS(_\\\\w+)?|SUFFIX|TYPE|VERSION|VS_DOTNET_REFERENCES|VS_GLOBAL_(\\\\w+|KEYWORD|PROJECT_TYPES)|VS_KEYWORD|VS_SCC_(AUXPATH|LOCALPATH|PROJECTNAME|PROVIDER)|VS_WINRT_EXTENSIONS|VS_WINRT_REFERENCES|WIN32_EXECUTABLE|XCODE_ATTRIBUTE_\\\\w+)\\\\b","name":"entity.source.cmake"},{"begin":"\\\\\\\\\\"","comment":"Escaped Strings","end":"\\\\\\\\\\"","name":"string.source.cmake","patterns":[{"match":"\\\\\\\\(.|$)","name":"constant.character.escape"}]},{"begin":"\\"","comment":"Normal Strings","end":"\\"","name":"string.source.cmake","patterns":[{"match":"\\\\\\\\(.|$)","name":"constant.character.escape"}]},{"comment":"Derecated keyword","match":"\\\\bBUILD_NAME\\\\b","name":"invalid.deprecated.source.cmake"},{"comment":"Compiler Flags","match":"\\\\b(?i:(CMAKE_)?(CXX_FLAGS|CMAKE_CXX_FLAGS_DEBUG|CMAKE_CXX_FLAGS_MINSIZEREL|CMAKE_CXX_FLAGS_RELEASE|CMAKE_CXX_FLAGS_RELWITHDEBINFO))\\\\b","name":"variable.source.cmake"}],"repository":{},"scopeName":"source.cmake"}'))]},"(app-pages-browser)/./node_modules/shiki/dist/langs/html-derivative.mjs":(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var _=a("(app-pages-browser)/./node_modules/shiki/dist/langs/html.mjs");let n=Object.freeze(JSON.parse('{"displayName":"HTML (Derivative)","injections":{"R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)":{"comment":"Uses R: to ensure this matches after any other injections.","patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"html-derivative","patterns":[{"include":"text.html.basic#core-minus-invalid"},{"begin":"(</?)(\\\\w[^\\\\s>]*)(?<!/)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"((?: ?/)?>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.unrecognized.html.derivative","patterns":[{"include":"text.html.basic#attribute"}]}],"scopeName":"text.html.derivative","embeddedLangs":["html"]}')),c=[..._.default,n]},"(app-pages-browser)/./node_modules/shiki/dist/langs/rst.mjs":(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var _=a("(app-pages-browser)/./node_modules/shiki/dist/langs/html-derivative.mjs"),n=a("(app-pages-browser)/./node_modules/shiki/dist/langs/cpp.mjs"),c=a("(app-pages-browser)/./node_modules/shiki/dist/langs/python.mjs"),s=a("(app-pages-browser)/./node_modules/shiki/dist/langs/javascript.mjs"),E=a("(app-pages-browser)/./node_modules/shiki/dist/langs/shellscript.mjs"),o=a("(app-pages-browser)/./node_modules/shiki/dist/langs/yaml.mjs"),r=a("(app-pages-browser)/./node_modules/shiki/dist/langs/cmake.mjs"),i=a("(app-pages-browser)/./node_modules/shiki/dist/langs/ruby.mjs");let l=Object.freeze(JSON.parse('{"displayName":"reStructuredText","name":"rst","patterns":[{"include":"#body"}],"repository":{"anchor":{"match":"^\\\\.{2}\\\\s+(_[^:]+:)\\\\s*","name":"entity.name.tag.anchor"},"block":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+\\\\S+::)(.*)","beginCaptures":{"2":{"name":"keyword.control"},"3":{"name":"variable"}},"end":"^(?!\\\\1\\\\s|\\\\s*$)","patterns":[{"include":"#block-param"},{"include":"#body"}]},"block-comment":{"begin":"^(\\\\s*)\\\\.{2}(\\\\s+|$)","end":"^(?=\\\\S)|^\\\\s*$","name":"comment.block","patterns":[{"begin":"^\\\\s{3,}(?=\\\\S)","name":"comment.block","while":"^\\\\s{3}.*|^\\\\s*$"}]},"block-param":{"patterns":[{"captures":{"1":{"name":"keyword.control"},"2":{"name":"variable.parameter"}},"match":"(:param\\\\s+(.+?):)(?:\\\\s|$)"},{"captures":{"1":{"name":"keyword.control"},"2":{"patterns":[{"match":"\\\\b(0x[a-fA-F\\\\d]+|\\\\d+)\\\\b","name":"constant.numeric"},{"include":"#inline-markup"}]}},"match":"(:.+?:)(?:$|\\\\s+(.*))"}]},"blocks":{"patterns":[{"include":"#domains"},{"include":"#doctest"},{"include":"#code-block-cpp"},{"include":"#code-block-py"},{"include":"#code-block-console"},{"include":"#code-block-javascript"},{"include":"#code-block-yaml"},{"include":"#code-block-cmake"},{"include":"#code-block-kconfig"},{"include":"#code-block-ruby"},{"include":"#code-block-dts"},{"include":"#code-block"},{"include":"#doctest-block"},{"include":"#raw-html"},{"include":"#block"},{"include":"#literal-block"},{"include":"#block-comment"}]},"body":{"patterns":[{"include":"#title"},{"include":"#inline-markup"},{"include":"#anchor"},{"include":"#line-block"},{"include":"#replace-include"},{"include":"#footnote"},{"include":"#substitution"},{"include":"#blocks"},{"include":"#table"},{"include":"#simple-table"},{"include":"#options-list"}]},"bold":{"begin":"(?<=[\\\\s\\"\'(\\\\[{<]|^)\\\\*{2}[^\\\\s*]","end":"\\\\*{2}|^\\\\s*$","name":"markup.bold"},"citation":{"applyEndPatternLast":0,"begin":"(?<=[\\\\s\\"\'(\\\\[{<]|^)`[^\\\\s`]","end":"`_{,2}|^\\\\s*$","name":"entity.name.tag"},"code-block":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)","beginCaptures":{"2":{"name":"keyword.control"}},"patterns":[{"include":"#block-param"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"code-block-cmake":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)\\\\s*(cmake)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"4":{"name":"variable.parameter.codeblock.cmake"}},"patterns":[{"include":"#block-param"},{"include":"source.cmake"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"code-block-console":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)\\\\s*(console|shell|bash)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"4":{"name":"variable.parameter.codeblock.console"}},"patterns":[{"include":"#block-param"},{"include":"source.shell"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"code-block-cpp":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)\\\\s*(c|c\\\\+\\\\+|cpp|C|C\\\\+\\\\+|CPP|Cpp)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"4":{"name":"variable.parameter.codeblock.cpp"}},"patterns":[{"include":"#block-param"},{"include":"source.cpp"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"code-block-dts":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)\\\\s*(dts|DTS|devicetree)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"4":{"name":"variable.parameter.codeblock.dts"}},"patterns":[{"include":"#block-param"},{"include":"source.dts"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"code-block-javascript":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)\\\\s*(javascript)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"4":{"name":"variable.parameter.codeblock.js"}},"patterns":[{"include":"#block-param"},{"include":"source.js"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"code-block-kconfig":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)\\\\s*([kK]config)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"4":{"name":"variable.parameter.codeblock.kconfig"}},"patterns":[{"include":"#block-param"},{"include":"source.kconfig"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"code-block-py":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)\\\\s*(python)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"4":{"name":"variable.parameter.codeblock.py"}},"patterns":[{"include":"#block-param"},{"include":"source.python"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"code-block-ruby":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)\\\\s*(ruby)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"4":{"name":"variable.parameter.codeblock.ruby"}},"patterns":[{"include":"#block-param"},{"include":"source.ruby"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"code-block-yaml":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(code|code-block)::)\\\\s*(ya?ml)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"4":{"name":"variable.parameter.codeblock.yaml"}},"patterns":[{"include":"#block-param"},{"include":"source.yaml"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"doctest":{"begin":"^(>>>)\\\\s*(.*)","beginCaptures":{"1":{"name":"keyword.control"},"2":{"patterns":[{"include":"source.python"}]}},"end":"^\\\\s*$"},"doctest-block":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+doctest::)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"}},"patterns":[{"include":"#block-param"},{"include":"source.python"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"domain-auto":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+auto(?:class|module|exception|function|decorator|data|method|attribute|property)::)\\\\s*(.*)","beginCaptures":{"2":{"name":"keyword.control.py"},"3":{"patterns":[{"include":"source.python"}]}},"patterns":[{"include":"#block-param"},{"include":"#body"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"domain-cpp":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+(?:cpp|c):(?:class|struct|function|member|var|type|enum|enum-struct|enum-class|enumerator|union|concept)::)\\\\s*(?:(@\\\\w+)|(.*))","beginCaptures":{"2":{"name":"keyword.control"},"3":{"name":"entity.name.tag"},"4":{"patterns":[{"include":"source.cpp"}]}},"patterns":[{"include":"#block-param"},{"include":"#body"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"domain-js":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+js:\\\\w+::)\\\\s*(.*)","beginCaptures":{"2":{"name":"keyword.control"},"3":{"patterns":[{"include":"source.js"}]}},"end":"^(?!\\\\1[ \\\\t]|$)","patterns":[{"include":"#block-param"},{"include":"#body"}]},"domain-py":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+py:(?:module|function|data|exception|class|attribute|property|method|staticmethod|classmethod|decorator|decoratormethod)::)\\\\s*(.*)","beginCaptures":{"2":{"name":"keyword.control"},"3":{"patterns":[{"include":"source.python"}]}},"patterns":[{"include":"#block-param"},{"include":"#body"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"domains":{"patterns":[{"include":"#domain-cpp"},{"include":"#domain-py"},{"include":"#domain-auto"},{"include":"#domain-js"}]},"escaped":{"match":"\\\\\\\\.","name":"constant.character.escape"},"footnote":{"match":"^\\\\s*\\\\.{2}\\\\s+\\\\[(?:[\\\\w\\\\.-]+|[#*]|#\\\\w+)\\\\]\\\\s+","name":"entity.name.tag"},"footnote-ref":{"match":"\\\\[(?:[\\\\w\\\\.-]+|[#*])\\\\]_","name":"entity.name.tag"},"ignore":{"patterns":[{"match":"\'[`*]+\'"},{"match":"<[`*]+>"},{"match":"{[`*]+}"},{"match":"\\\\([`*]+\\\\)"},{"match":"\\\\[[`*]+\\\\]"},{"match":"\\"[`*]+\\""}]},"inline-markup":{"patterns":[{"include":"#escaped"},{"include":"#ignore"},{"include":"#ref"},{"include":"#literal"},{"include":"#monospaced"},{"include":"#citation"},{"include":"#bold"},{"include":"#italic"},{"include":"#list"},{"include":"#macro"},{"include":"#reference"},{"include":"#footnote-ref"}]},"italic":{"begin":"(?<=[\\\\s\\"\'(\\\\[{<]|^)\\\\*[^\\\\s*]","end":"\\\\*|^\\\\s*$","name":"markup.italic"},"line-block":{"match":"^\\\\|\\\\s+","name":"keyword.control"},"list":{"match":"^\\\\s*(\\\\d+\\\\.|\\\\* -|[a-zA-Z#]\\\\.|[iIvVxXmMcC]+\\\\.|\\\\(\\\\d+\\\\)|\\\\d+\\\\)|[*+-])\\\\s+","name":"keyword.control"},"literal":{"captures":{"1":{"name":"keyword.control"},"2":{"name":"entity.name.tag"}},"match":"(:\\\\S+:)(`.*?`\\\\\\\\?)"},"literal-block":{"begin":"^(\\\\s*)(.*)(::)\\\\s*$","beginCaptures":{"2":{"patterns":[{"include":"#inline-markup"}]},"3":{"name":"keyword.control"}},"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"macro":{"match":"\\\\|[^\\\\|]+\\\\|","name":"entity.name.tag"},"monospaced":{"begin":"(?<=[\\\\s\\"\'(\\\\[{<]|^)``[^\\\\s`]","end":"``|^\\\\s*$","name":"string.interpolated"},"options-list":{"match":"(?:(?:^|,\\\\s+)(?:[-+]\\\\w|--?[a-zA-Z][\\\\w-]+|/\\\\w+)(?:[ =](?:\\\\w+|<[^<>]+?>))?)+(?=  |\\\\t|$)","name":"variable.parameter"},"raw-html":{"begin":"^(\\\\s*)(\\\\.{2}\\\\s+raw\\\\s*::)\\\\s+(html)\\\\s*$","beginCaptures":{"2":{"name":"keyword.control"},"3":{"name":"variable.parameter.html"}},"patterns":[{"include":"#block-param"},{"include":"text.html.derivative"}],"while":"^\\\\1(?=\\\\s)|^\\\\s*$"},"ref":{"begin":"(:ref:)`","beginCaptures":{"1":{"name":"keyword.control"}},"end":"`|^\\\\s*$","name":"entity.name.tag","patterns":[{"match":"<.*?>","name":"markup.underline.link"}]},"reference":{"match":"[\\\\w-]*[a-zA-Z\\\\d-]__?\\\\b","name":"entity.name.tag"},"replace-include":{"captures":{"1":{"name":"keyword.control"},"2":{"name":"entity.name.tag"},"3":{"name":"keyword.control"}},"match":"^\\\\s*(\\\\.{2})\\\\s+(\\\\|[^\\\\|]+\\\\|)\\\\s+(replace::)"},"simple-table":{"match":"^[=\\\\s]+$","name":"keyword.control.table"},"substitution":{"match":"^\\\\.{2}\\\\s*\\\\|([^|]+)\\\\|","name":"entity.name.tag"},"table":{"begin":"^\\\\s*\\\\+[=+-]+\\\\+\\\\s*$","beginCaptures":{"0":{"name":"keyword.control.table"}},"end":"^(?![+|])","patterns":[{"match":"[=+|-]","name":"keyword.control.table"}]},"title":{"match":"^(\\\\*{3,}|#{3,}|={3,}|~{3,}|\\\\+{3,}|-{3,}|`{3,}|\\\\^{3,}|:{3,}|\\"{3,}|_{3,}|\'{3,})$","name":"markup.heading"}},"scopeName":"source.rst","embeddedLangs":["html-derivative","cpp","python","javascript","shellscript","yaml","cmake","ruby"]}')),I=[..._.default,...n.default,...c.default,...s.default,...E.default,...o.default,...r.default,...i.default,l]}}]);