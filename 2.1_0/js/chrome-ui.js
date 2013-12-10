function cpn_click(ev) {
    var sect = $(ev.target).attr('sect');
    cpn_show_page(sect);
};
$(".cpn").live('click',cpn_click);

function cpn_show_page(sect) {
    $(".cpage").hide();
    $(".cpn.active").removeClass('active');
    $(".cpage#"+sect).show('fast');
    $(".cpn_"+sect).addClass("active");
};


function cpn_header_togglenext(el) {
    $(el).next("div").toggle();
    if ($(el).next("div").is(":visible")) {
        $(el).css('border-bottom',"0px");
    } else {
       $(el).css('border-bottom',"2px dotted black");
    }
};


function cpn_macro_display_refresh() {
            $('.macro').html(bscode.macroreferenceStr(bscode.macros,true));
            $('.macro-user').html(bscode.macroreferenceStr(userMacros));
            $("button").button();
}; // end of function

dlg_bundlecreate = {
   			resizable: false,
			height:240,
			modal: true,
			buttons: {
				"Create": function() {
				    var name = $("#createBundleName").val();
				    userMacros[name] = {};
				    bscode.saveMacros();
				    cpn_macro_display_refresh();
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
};
var bname = false;
dlg_macrocreate = {
   			resizable: false,
   			width: 500,
			height:450,
			modal: true,
			open: function(ev,ui) {
			  bscode.filterDom('#macrocreate .bscode');
			  $('#macrocreate .bname').text(bname);
              var textareas = $("textarea:not(.bscode)");
              $(textareas).bind('keyup',bscode.textareaBind).addClass('bscode').css('border-right','3px solid red');
              $(textareas).bind('change',bscode.textareaBind);
              $("#createMacroName").val('');
			  $("#createMacroText").val('');
			},
			buttons: {
				"Create": function() {
				    var name = $("#createMacroName").val();
				    var expansion = $("#createMacroText").val();
				    userMacros[bname][name] = expansion;
				    bscode.saveMacros();
				    cpn_macro_display_refresh();
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
};
var mname = false;
dlg_macroedit = {
   			resizable: false,
   			width: 500,
			height:450,
			modal: true,
			open: function(ev,ui) {
			  bscode.filterDom('#macrocreate .bscode');
			  $('#macroedit .bname').text(bname);
              $("#editMacroName").val(mname);
			  $("#editMacroText").val(userMacros[bname][mname]);
			},
			buttons: {
				"Update": function() {
				    var name = $("#editMacroName").val();
				    var expansion = $("#editMacroText").val();
				    if (name!=mname) {
				        delete userMacros[bname][mname]
				    }
                    userMacros[bname][name] = expansion;
				    bscode.saveMacros();
				    cpn_macro_display_refresh();
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
};
dlg_macrodelete = {
   			resizable: false,
   			width: 500,
			height:350,
			modal: true,
			open: function(ev,ui) {
			  bscode.filterDom('#macrodelete .bscode');
			  $('#macrodelete .bname').text(bname);
			  $('#macrodelete .mname').text(mname);
			  $('#macrodelete .bexp').text(userMacros[bname][mname]);
			},
			buttons: {
				"Delete": function() {
    		        delete userMacros[bname][mname];
				    bscode.saveMacros();
				    cpn_macro_display_refresh();
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
};
dlg_bundledelete = {
   			resizable: false,
   			width: 500,
			height:350,
			modal: true,
			open: function(ev,ui) {
			  bscode.filterDom('#bundledelete .bscode');
			  $('#bundledelete .bname').text(bname);
			},
			buttons: {
				"Delete": function() {
    		        delete userMacros[bname];
				    bscode.saveMacros();
				    cpn_macro_display_refresh();
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
};
dlg_bundlerename = {
   			resizable: false,
   			width: 500,
			height:250,
			modal: true,
			open: function(ev,ui) {
			  bscode.filterDom('#bundlerename .bscode');
			  $('#bundlerename .bname').text(bname);
			},
			buttons: {
				"Rename": function() {
				    var newname = $("#editBundleName").val();
    		        userMacros[newname] = userMacros[bname];
    		        delete userMacros[bname];
				    bscode.saveMacros();
				    cpn_macro_display_refresh();
					$( this ).dialog( "close" );
				},
				Cancel: function() {
					$( this ).dialog( "close" );
				}
			}
};

dlg_bundleexport = {
       		resizable: false,
   			width: 500,
			height:250,
			modal: true,
			open: function(ev,ui) {
			  bscode.filterDom('#bundlerename .bscode');
			  $('#bundlerename .bname').text(bname);
			  var b = {};
			  b[bname] = userMacros[bname];
			  $('#export').val(JSON.stringify(b));
              $("#export")[0].focus();
              $("#export")[0].select();
			},
			buttons: {
			    "Select Text": function() {
                    $("#export")[0].focus();
                    $("#export")[0].select();
                    if (chrome.experimental.clipboard) {
                        function _copy(tab) {
                            chrome.experimental.clipboard.executeCopy(tab.id);
                        }
                        chrome.tabs.getCurrent(_copy);
                    }
			    },
				Close: function() {
					$( this ).dialog( "close" );
				}
			}
};
dlg_bundleexportall = {
       		resizable: false,
   			width: 500,
			height:250,
			modal: true,
			open: function(ev,ui) {
			  bscode.filterDom('#bundlerename .bscode');
			  $('#bundlerename .bname').text(bname);
			  $('#export').val(JSON.stringify(userMacros));
              $("#export")[0].focus();
              $("#export")[0].select();
			},
			buttons: {
			    "Select Text": function() {
                    $("#export")[0].focus();
                    $("#export")[0].select();
                    if (chrome.experimental.clipboard) {
                        function _copy(tab) {
                            chrome.experimental.clipboard.executeCopy(tab.id);
                        }
                        chrome.tabs.getCurrent(_copy);
                    }
			    },
				Close: function() {
					$( this ).dialog( "close" );
				}
			}
};
dlg_bundleimport = {
            resizable: false,
   			width: 500,
			height:250,
			modal: true,
			buttons: {
			    "Import Bundle": function() {
                    var json = $("#export").val();
                    console.log("json=",json);
                    var b;
                    try {
                        b = JSON.parse(json);
                        console.log("b=",b);
                        for (var k in b) {
                            userMacros[k] = b[k];
                        }
                        bscode.saveMacros();
                        cpn_macro_display_refresh();
    					$( this ).dialog( "close" );
                    } catch (e) {
                        $("#importerror").text(e);
                    }
			    },
				Close: function() {
					$( this ).dialog( "close" );
				}
			}
};

