function generate() {
    values = document.getElementById("valList").value;
    query = document.getElementById("querySQL").value;
    replaceMatch = document.getElementById("replaceMatch").value;
    ready = document.getElementById("readySQL");
    useRegexp = document.getElementById("useRegexp").checked;
    regexRule = document.getElementById("regexRule").value;

    replaces = replaceMatch.split("\n")
    rows = values.split("\n");
    newrows = "";
    
    if (useRegexp && regexRule) {
        console.log(regexRule);
        // c = parseInt(regexRule);
        var re = new RegExp(regexRule, "i");
        for (x in rows) {
            // rows[x] = rows[x].substring(0,c)
            if (rows[x].match(re)){
                rows[x] = rows[x].match(re)[0];
            } else {
                rows[x] = "";
            }
            console.log("cropping...");
        }
    }

    for (i in rows) {
        if (rows[i] != "") { 
            for (j in replaces) {
                if (replaces[j] != "") {
                    newrows += query.replaceAll(replaces[j], rows[i]) + "\n";
                }
            }
        }
    }

    ready.value = newrows;
}

function showCropOptions() {

    
    regexRule = document.getElementById("regexRule");
    useRegexp = document.getElementById("useRegexp").checked;
    console.log(useRegexp);

    if (!useRegexp) {
        console.log('hide\n');
        regexRule.style.visibility = "hidden";
    }
    if (useRegexp) {
        console.log('show\n');
        regexRule.style.visibility = "visible";
    }
    
    useRegexp = "";
}
