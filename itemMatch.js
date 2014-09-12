function getMatches(inClass) {
    if (inClass === "ysSUpUQcyY") { //pants & shorts & skirts
        return ["a2fXI5xpp7", "K4gAqr6dJE", "FdztkIVM2S", "wd8v7I0rGL", "8lV0L0IFBi", "PB0utGBtbS", "rP2qeD4Bhz"];
        /*
         Accessories, socks, scarves, sweaters & hoodies, outerwear, shirts & tops, shoes
         */
    }
    else if (inClass === "a2fXI5xpp7") { //Accessories
        return ["iiHAPCKx0Z", "BdSF5NCCwO", "wd8v7I0rGL", "8lV0L0IFBi", "PB0utGBtbS", "ysSUpUQcyY", "rP2qeD4Bhz"];
        /*
        Dresses, blazers & suits, sweaters & hoodies, outerwear, shirts & tops, pants, shoes
         */
    }
    else if (inClass === "PB0utGBtbS") { //shirts & tops
        return ["a2fXI5xpp7", "6hMYtgeaaK", "FdztkIVM2S", "BdSF5NCCwO", "wd8v7I0rGL", "8lV0L0IFBi", "ysSUpUQcyY"];
        /*
         accessories, sleepwear, scarves, blazers/suits, sweaters/hoodies, outerwear, pants/shorts/skirts
         */
    }
    else if (inClass === "K4gAqr6dJE") { //socks
        return ["rP2qeD4Bhz", "6hMYtgeaaK", "BdSF5NCCwO", "NbDykXyrad", "ysSUpUQcyY"];
        /*
         shoes, sleepwear, blazers & suits, underwear & intimates, pants/shorts/skirts
         */
    }
    else if (inClass === "dEiALt9ec3") { //swimwear
        return ["rP2qeD4Bhz", "PB0utGBtbS", "a2fXI5xpp7"];
        /*
         shoes, shirts & tops, accessories
         */
    }
    else if (inClass === "6hMYtgeaaK") { //sleepwear
        return ["K4gAqr6dJE", "NbDykXyrad", "wd8v7I0rGL"];
        /*
            Socks, underwear, sweaters
         */
    }
    else if (inClass === "NbDykXyrad") { //Underwear or Underwear & Intimates
        return ["K4gAqr6dJE", "6hMYtgeaaK"];
        /*
         socks, sleepwear
         */
    }
    else if (inClass === "8lV0L0IFBi") { //outerwear
        return ["a2fXI5xpp7", "FdztkIVM2S", "iiHAPCKx0Z", "BdSF5NCCwO", "wd8v7I0rGL", "PB0utGBtbS", "ysSUpUQcyY"];
        /*
         accessories, scarves, dresses, blazers/suits, sweaters/hoodies, shirts/tops, pants/shorts/skirts
         */
    }
    else if (inClass === "iiHAPCKx0Z") { //Dresses
        return ["rP2qeD4Bhz", "a2fXI5xpp7", "FdztkIVM2S", "NbDykXyrad", "8lV0L0IFBi"];
        /*
         shoes, accessories,scarves, underwear, outwerwear
         */
    }
    else if (inClass === "wd8v7I0rGL") { //Sweaters & hoodies
        return ["ysSUpUQcyY", "PB0utGBtbS", "8lV0L0IFBi", "BdSF5NCCwO", "FdztkIVM2S", "a2fXI5xpp7"];
        /*
         pants/shorts/skirts, shirts/tops, outerwear, blazers/suits, scarves, accessories
         */
    }
    else if (inClass === "FdztkIVM2S") { //Scarves
        return ["a2fXI5xpp7", "iiHAPCKx0Z", "BdSF5NCCwO", "wd8v7I0rGL", "8lV0L0IFBi", "PB0utGBtbS"];
        /*
         Accessories, dresses, blazers+suits, sweaters & hoodies, outwerwear, shirts & tops
         */
    }
    else if (inClass === "BdSF5NCCwO") { //Blazers & suits
        return ["ysSUpUQcyY", "rP2qeD4Bhz", "FdztkIVM2S","K4gAqr6dJE","a2fXI5xpp7", "PB0utGBtbS"];
        /*
         pants/shorts/skirts,shoes,scarves, socks,accessories, shirts/tops
         */
    }
    else if(inClass === "rP2qeD4Bhz") { //shoes
        return ["ysSUpUQcyY", "iiHAPCKx0Z", "K4gAqr6dJE", "BdSF5NCCwO", "6hMYtgeaaK", "PB0utGBtbS", "a2fXI5xpp7"];
        /*
         pants/shorts/skirts, dresses, socks, blazers/suits, sleepwear, shirts/tops, accessories
         */
    }
    return [];
}
