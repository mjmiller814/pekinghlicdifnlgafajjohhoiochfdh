function bd2h(n){
    n = parseInt(n); var c = 'ABCDEF';
    var b = n / 16; var r = n % 16; b = b-(r/16);
    b = ((b>=0) && (b<=9)) ? b : c.charAt(b-10);
    return ((r>=0) && (r<=9)) ? b+''+r : b+''+c.charAt(r-10);
};

userMacros = {};
bscode = {
    loadMacros: function() {
        if (localStorage && localStorage['bscode_user_macros']) {
          userMacros = JSON.parse(localStorage['bscode_user_macros']);
        } else {
          bscode.saveMacros();
        }
    },
    saveMacros: function(){
          localStorage['bscode_user_macros'] = JSON.stringify(userMacros);
    },
    sets: {
        "BS Code Escapes": {
            "\\\\\\\\": "005c\u200b\u005c\u200b",
            "\\\\": "005c\u200b"
        },
        "Common and Uncommon Punctuation": {
            "...":"2026",
            "interrobang":"203d",
            "cuil":"203d",
            "sarcasm":"2e2e",
            "oq": "2018",
            "cq": "2019",
            "apos": "2019",
            "odq": "201c",
            "cdq": "201d",
            "----": "2015",
            "---": "2014",
            "--":  "2013",
            "f-":  "2012"
        },
        "Double-Struck Letters for Mathematics": {
            "DC": "2102",
            "DN": "2115",
            "DP": "2119",
            "DR": "211d"
        },
        "Arrows": {
            "rarr": "2192",
            "larr": "2190",
            "uarr": "2191",
            "darr": "2193"
        },
        "Logic Operations": {
            "xor": "22bb",
            "nand": "22bc",
            "lor": "22ce",
            "land": "22cf"
        },
        "Math Superscripts and Subscripts": {
            "^0": "2070",
            "^1": "00b9",
            "^2": "00b2",
            "^3": "00b3",
            "^4": "2074",
            "^5": "2075",
            "^6": "2076",
            "^7": "2077",
            "^8": "2078",
            "^9": "2079",
            "^i": "2071",
            "^a": "2090",
            "^e": "2091",
            "^x": "2093",
            "v0": "2080",
            "v1": "2081",
            "v2": "2082",
            "v3": "2083",
            "v4": "2084",
            "v5": "2085",
            "v6": "2086",
            "v7": "2087",
            "v8": "2088",
            "v9": "2089"
        },
        "Mathematics Operators": {
            "forall": "2200",
            "complement": "2201",
            "partdx": "2202",
            "exists": "2203",
            "notexists": "2204",
            "nullset": "2205",
            "incr": "2206",
            "nabla": "2207",
            "Elof": "2208",
            "noElof": "2209",
            "elof":"220a",
            "Member": "220b",
            "notMember": "220c",
            "member": "220d",
            "qed":"220e",
            "nprod": "220f",
            "ncoprod": "2210",
            "nsum": "2211",
            "minusplus":"2213",
            "minus":"2212",
            "plusminus":"00b1",
            "dotplus":"2214",
            "divide":"2223",
            "div":"2215",
            "solidus":"002f",
            "frac":"2044",
            "setminus":"2216",
            "asterisk":"2217",
            "ringop":"2218",
            "bulletop":"2219",
            "sqrt":"221a",
            "2rt":"221a",
            "3rt":"221b",
            "4rt":"221c",
            "propto":"221d",
            "infinity":"221e",
            "rtangle":"221f",
            "angle":"2220",
            "measuredangle":"2221",
            "arcangle":"2222",
            "notdivide":"2224",
            "parallel":"2225",
            "notparallel":"2226",
            "conj":"2227",
            "subset":"2286",
            "Subset":"2282",
            "notequals":"2260",
            "notequal":"2260",
            "therefore":"2234",
            "because":"2235"
        },
        "Weather Symbols": {
            "sunrays": "2600",
            "cloud": "2601",
            "umbrella": "2602",
            "snowman": "2603",
            "comet": "2604",
            "blackstar": "2605",
            "star": "2606",
            "lightning": "2607",
            "tstorm":"2608",
            "raining": "2614"
        },
        "Astronomy": {
            "sun":"2609",
            "anode":"260a",
            "dnode":"260b",
            "astconj": "260c",
            "astopp": "260d"
        },
        "Roman Numerals": {
            "RIII": "2162",
            "RII": "2161",
            "RIV": "2163",
            "RIX":"2168",
            "RI": "2160",
            "RVIII":"2167",
            "RVII": "2166",
            "RVI": "2165",
            "RV": "2164",
            "RX": "2169"
        },
        "Math Alphanumerics": {
            "FA": "1d504",
            "FB": "1d505",
            "FC": "2102",
            "FD": "1d507",
            "FE": "1d508",
            "FF": "1d509",
            "FG": "1d50a",
            "FH": "1d50b",
            "FI": "1d50c"
        },
        "Greek": {
            "Alpha": "0391",
            "Beta": "0392",
            "Gamma": "0393",
            "Delta": "0394",
            "Epsilon": "0395",
            "Zeta": "0396",
            "Eta": "0397",
            "Theta": "0398",
            "Iota":"0399",
            "Kappa":"039a",
            "Lamda":"039b",
            "Mu":"039c",
            "Nu":"039d",
            "Xi": "039e",
            "Omicron":"039f",
            "Pi": "03a0",
            "Rho": "03a1",
            "Sigma":"03a3",
            "Tau":"03a4",
            "Upsilon":"03a5",
            "Phi":"03a6",
            "Chi":"03a7",
            "Psi":"03a8",
            "Omega":"03a9",
            "alpha":"03b1",
            "beta":"03b2",
            "gamma":"03b3",
            "delta":"03b4",
            "epsilon":"03b5",
            "zeta":"03b6",
            "eta":"03b7",
            "theta":"03b8",
            "iota":"03b9",
            "kappa":"03ba",
            "lamda":"03bb",
            "lambda":"03bb",
            "mu":"03bc",
            "nu":"03bd",
            "xi": "03be",
            "omicron":"03bf",
            "pi":"03c0",
            "rho":"03c1",
            "stigma":"03c2",
            "sigmaper":"03fe",
            "sigma":"03c3",
            "tau":"03c4",
            "upsilon":"03c5",
            "phis":"03d5",
            "phi":"03c6",
            "chi":"03c7",
            "psi":"03c8",
            "Kai":"03cf",
            "kai":"03d7",
            "cbeta":"03d0",
            "stheta":"03d1",
            "hupsilon":"03d2",
            "omegapi":"03d6",
            "omega":"03c9",
            "Koppa":"03de",
            "koppa":"03df",
            "anitsigma":"03fd",
            "antisigmaper":"03ff",
            "yot":"03f3",
            "Sho":"03f7",
            "sho":"03f8"
        },
        "Ballots and Communications": {
            "ballotbox": "2610", "ballotcheck": "2611", "ballotx": "2612",
            "bphone" : "260e", "wphone":"260f"
        },
        "Dingbats": {
            "ubscissors": "2701",
            "bscissors": "2702",
            "lbscissors": "2703",
            "wscissors": "2704",
            "telesign": "2706",
            "tapedrive": "2707",
            "airplane": "2708",
            "envelope": "2709",
            "victory": "270c",
            "vhand": "270c",
            "writinghand": "270a",
            "lrpencil": "270e",
            "pencil" : "270f",
            "urpencil": "2710",
            "wnib": "2711",
            "bnib": "2712",
            "checkmark":"2713",
            "hcheckmark":"2714",
            "multiply":"2715",
            "hmultiply":"2716",
            "ballotx": "2717",
            "hballotx":"2718",
            "ogreekcross": "2719",
            "hgreekcross": "271a",
            "occross":"271b",
            "hoccross":"271c",
            "latincross":"271d",
            "swlatincross":"271e",
            "olatincross":"271f",
            "maltesecross":"2720",
            "StarOfDavid":"2721",
            "4t*": "2722",
            "4b*": "2723",
            "4hb*": "2724",
            "4c*": "2725",
            "b4star": "2726",
            "w4star": "2727",
            "sparkles": "2728",
            "hodq": "275d",
            "hcdq": "275e"
        },
        "Diacritical Marks": {
            "`": "0300",
            "'": "0301",
            "^": "0302",
            "~": "0303",
            "m-": "0304",
            "lm-": "0305",
            "c-": "0306",
            "..": "0308",
            ".": "0307"

        }
    },
    expand: function(text) {
        var macros = [bscode.macros,userMacros||{}];
        for (var db in macros) {
            for (var set in macros[db]) {
                for (var macro in macros[db][set]) {
                    text = text.split("\\\\"+macro).join(macros[db][set][macro]);
                }
            }
        }
        return text;
    },
    filter: function(text) {
        text = bscode.expand(text);
        for (var set in bscode.sets) {
            for (var code in bscode.sets[set]) {
                var hex = bscode.sets[set][code];
                text = text.split("\\"+code).join("&#x"+hex+";");
            }
        }
        return text;
    },
    filterToEntities: function(text) { return bscode.filter(text); },
    filterToUnicode: function(text) {
        text = bscode.expand(text);
        for (var set in bscode.sets) {
            for (var code in bscode.sets[set]) {
                var hex = bscode.sets[set][code];
                text = text.split("\\"+code).join(eval("'\\u"+hex+"'"));
            }
        }
        return text;
    },
    filterDom: function(sel,method) {
        method = method||bscode.filterToUnicode;
        $(sel).each(function(){
            var html = $(this).html();
           $(this).html(method(html));
        });
    },
    _delay: 500,
    _timer: false,
    textareaHook: function(el) {
        clearTimeout(bscode._timer);
        bscode._timer = setTimeout(function(){var ta = el;bscode.textareaHandler(ta)},bscode._delay);
    },
    textareaBind: function(ev) {
        var el = ev.target;
        clearTimeout(bscode._timer);
        bscode._timer = setTimeout(function(){var ta = el;bscode.textareaHandler(ta)},bscode._delay);
    },
    inputBind: function(ev) {
        var el = ev.target;
        clearTimeout(bscode._timer);
        bscode._timer = setTimeout(function(){var ta = el;bscode.inputHandler(ta)},bscode._delay);
    },
    textareaHandler: function(el) {
        var before=$(el).val();
        if ($(el).is('.bscode-off')) {
            if (before.indexOf("\\\\enable")!=-1) {
                $(el).css('border-right',"2px solid red").removeClass('bscode-off');
                $(el).val(before.replace("\\\\enable",""));
            } else {
                return;
            }
        }
        if (before.indexOf("\\\\disable")!=-1) {
            $(el).css('border-right',"2px dotted red").addClass('bscode-off');
            $(el).val(before.replace("\\\\disable",""));
        }
        var after = bscode.filterToUnicode(before);
        if (before!=after) {
            $(el).val(after);
        }
    },
    inputHandler: function(el) {
        var before=$(el).val();
        var after = bscode.filterToUnicode(before);
        if (before!=after) {
            $(el).val(after);
        }
    },
    reference: function(){
        for (var set in bscode.sets) {
          document.write("<h2>"+set+"</h2><dl class=\"reference\">");
          for (var code in bscode.sets[set]) {
            if (code.length>10) {
                document.write("<dt class=\"long\" title=\"\\"+code+"\">\\"+code+"<dd>"+bscode.filter("\\"+code));
            } else {
                document.write("<dt title=\"\\"+code+"\">\\"+code+"<dd>"+bscode.filter("\\"+code));
            }
          }
          document.write("</dl>");
        }
    },
    macroreference: function(){
        for (var set in bscode.macros) {
          document.write("<h2>"+set+"</h2><dl class=\"reference\">");
          for (var code in bscode.macros[set]) {
            if (code.length>10) {
                document.write("<dt class=\"long\" title=\"\\\\"+code+"\">\\\\"+code+"<dd>"+bscode.filter("\\\\"+code));
            } else {
                document.write("<dt title=\"\\\\"+code+"\">\\\\"+code+"<dd>"+bscode.filter("\\\\"+code));
            }
          }
          document.write("</dl>");
        }
    },
    macroreferenceStr: function(db,readOnly){
        readOnly = readOnly||false;
        db = db||bscode.macros;
        var s = "";
        for (var set in db) {
          s += "<h3>"+set;
          var brnclick= " onclick=\"bname='"+set+"';$('#bundlerename').dialog(dlg_bundlerename);\" ";
          s += readOnly ? "":" <button class=\"btn-small\""+brnclick+">Rename</button> ";
          var expclick= " onclick=\"bname='"+set+"';$('#bundleexport').dialog(dlg_bundleexport);\" ";
          s += readOnly ? "":" <button class=\"btn-small\" "+expclick+">Export</button> ";
          var delbclick= " onclick=\"bname='"+set+"';$('#bundledelete').dialog(dlg_bundledelete);\" ";
          s += readOnly ? "":" <button class=\"btn-small\" "+delbclick+">Delete Bundle</button> ";
          s +=  readOnly ? "": "<button class=\"btn-small\" onclick=\"bname='"+set+"';$('#macrocreate').dialog(dlg_macrocreate)\" style=\"\">Add Macro</button>";
          s +="</h3>";
          s += "<dl class=\"reference\">";
          for (var code in db[set]) {
            var editclick= readOnly ? "": " onclick=\"bname='"+set+"';mname='"+code+"';$('#macroedit').dialog(dlg_macroedit);\" ";
            var delclick= readOnly ? "": " onclick=\"bname='"+set+"';mname='"+code+"';$('#macrodelete').dialog(dlg_macrodelete);\" ";
            var dellink = readOnly ? "":" <button class=\"btn-small\" "+delclick+">&times;</button>";
            if (code.length>10) {
                s += "<dt "+editclick+" class=\"long\" title=\"\\\\"+code+"\">\\\\"+code+"<dd>"+bscode.filter("\\\\"+code)+dellink;
            } else {
                s += "<dt "+editclick+" title=\"\\\\"+code+"\">\\\\"+code+"<dd>"+bscode.filter("\\\\"+code)+dellink;
            }
          }

          s += "</dl>";
        }
        return s;
    },
    tabreference: function() {
        document.write("<div class=\"tabs\"><ul>");
        var n = 0;
        for (var set in bscode.sets) {
            document.write("<li><a href=\"#x"+n+"\">"+set+"</a></li>")
            n++;
        }
        n = 0;
        document.write("</ul>");
        for (var set in bscode.sets) {
          document.write("<div id=\"x"+n+"\"><dl class=\"reference\"><dl>");
          for (var code in bscode.sets[set]) {
            document.write("<dt>\\"+code+"<dd>"+bscode.filter("\\"+code));
          }
          document.write("</dl></div>");
          n++;
        }
        document.write("</div>");
        $(".tabs").tabs();
    },
    _enabled: true,
    isEnabled: function() { return bscode._enabled; },
    disable: function() { bscode._enabled=false;},
    enable: function() { bscode._enabled=true;},
};
bscode.loadMacros();
bscode.macros = {
        "Emoticons": {
            "lod": "\u0ca0_\u0ca0",
            "creep":"\u0ca0\u25e1\u0ca0",
            "disappoint":  "\u0ca0\u2322\u0ca0"
        },
        "Brief Templates": {
            "quotation": bscode.filterToUnicode("\\odq\\cdq\\----")
        },
        "Famous Speeches": {
            "lincoln": "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\n\nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.\n\nBut, in a larger sense, we can not dedicate \\--- we can not consecrate \\--- we can not hallow \\--- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us \\--- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion \\--- that we here highly resolve that these dead shall not have died in vain \\--- that this nation, under God, shall have a new birth of freedom \\--- and that government of the people, by the people, for the people, shall not perish from the earth."
        }
};
bscode.macros['Brief Templates']['tquotation'] = bscode.filterToUnicode("\\\\quotation #quote");

/*
chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
    port.postMessage({counter: msg.counter+1});
  });
});
*/

