var vin = "";     // Enter your VIN here

        console.log("Build Location: " + vin[0]);
        console.log("Manufacturer:   " + vin[1] + vin[2]);

        var brand = [];
        for(var i = 3; i <= 7; i++){
                brand.push(vin[i]);
        }
        console.log("Brand/Engine Information: " + brand.join(""));
        console.log("Vechile Security Code: " + vin[8]);

        if(vin[9] > 90){
                console.log("Year: 19" + vin[9]);
        } else{
                console.log("Year: 200" + vin[9]);
        }

        console.log("Assembly Plant: " + vin[10]);

        var serialNo = [];
        for(var i = 11; i <= vin.length; i++){
                serialNo.push(vin[i]);
        }
        console.log("Serial Number: " + serialNo.join(""));
