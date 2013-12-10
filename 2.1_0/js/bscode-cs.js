var _bscodify_tm = false;
function bscodify(ev) {
    if (_bscodify_tm) {
        clearTimeout(_bscodify_tm);
    }
    _bscodify_tm = setTimeout(function(){


        chrome.extension.sendRequest({c:'getUserMacros'}, function(response) {
              userMacros = response.d;
        });

        var before = $(ev.target).html();
        var el = ev.target;
        if ($(el).is('.bscode-off')) {
            if (before.indexOf("\\\\enable")!=-1) {
                $(el).css('border-right',"2px solid red").removeClass('bscode-off');
                $(el).html(before.replace("\\\\enable",""));
            } else {
                return;
            }
        }
        if (before.indexOf("\\\\disable")!=-1) {
            $(el).css('border-right',"2px dotted red").addClass('bscode-off');
            $(el).html(before.replace("\\\\disable",""));
        }
        var after = bscode.filterToUnicode(before);
        if (before!=after) {
            $(ev.target).html(after);
        }
    },1200);
} // end of bscodify function
setInterval(function() {
    var textareas = $("textarea:not(.bscode)");
    $(textareas).bind('keyup',bscode.textareaBind).addClass('bscode').css('border-right','3px solid red');
    // Patch for Reddit which duplicates an existing comment box without the event handlers.
    $("textarea:not([bsdepth])").each(function(){
        $(this).attr('bsdepth',$(this).parents().length);
    });
    $("textarea.bscode[bsdepth]").each(function(){
        var curdepth = $(this).parents().length;
        var attdepth = $(this).attr('bsdepth');
        if (curdepth!=attdepth) {
            $(this).bind('keyup',bscode.textareaBind)
                .addClass('bscode')
                .css('border-right','3px solid red')
                .attr('bsdepth',curdepth);
        }
    });
    var inputs = $("input[type=text]:not(.bscode)");
    if (inputs) {
        $(inputs).bind('keyup',bscode.inputBind).addClass('bscode').css('border-right','3px solid red');
    }
    var contenteditables = $("[contenteditable]:focus:not(.bscode)");
    if (contenteditables) {
        $(contenteditables).bind('keyup',bscodify).addClass('bscode').css('border-right','3px solid red');
    }
},2000);

chrome.extension.sendRequest({c:'getUserMacros'}, function(response) {
          userMacros = response.d;
});

