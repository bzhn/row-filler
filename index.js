function generate() {
    values = document.getElementById("valList").value;
    query = document.getElementById("querySQL").value;
    separator = document.getElementById("separator").value;
    ready = document.getElementById("readySQL");
    crop = document.getElementById("crop").checked;
    cropAmount = document.getElementById("cropAmount").value;

    rows = values.split("\n");
    newrows = "";
    
    if (crop && cropAmount) {
        console.log(cropAmount);
        c = parseInt(cropAmount);
        for (x in rows) {
            rows[x] = rows[x].substring(0,c)
            console.log("cropping...");
        }
    }

    for (i in rows) {
        newrows += query.replace(separator, rows[i]) + "\n";
    }

    ready.value = newrows;
}

function showCropOptions() {

    
    cropAmount = document.getElementById("cropAmount");
    crop = document.getElementById("crop").checked;
    console.log(crop);

    if (!crop) {
        console.log('hide\n');
        cropAmount.style.visibility = "hidden";
    }
    if (crop) {
        console.log('show\n');
        cropAmount.style.visibility = "visible";
    }
    
    crop = "";
}