function correct_grow_time(crop_id, days, rate){
    //lookup table to manually correct wrong growth days on crops
    const cropsTable = {
        "amaranth": function(){
            return days;
        },
        "ancient_fruit": function(){
            if (rate === 0.25 || rate === 0.2 || rate === 0.35) {
                return days + 1;
            }
            return days
        },
        "artichoke": function(){
            return days
        },
        "beet": function(){
            return days
        },
        "blue_jazz": function(){
            return days
        },
        "blueberry": function(){
            if (rate === 0.35) {
                return days + 1;
            }
            return days
        },
        "bok_choy": function(){
            return days
        },
        "cactus_fruit": function(){
            return days
        },
        "cauliflower": function(){
            if (rate === 0.35) {
                return days + 1;
            }
            return days
        },
        "coffee_bean": function(){
            if (rate === 0.1 || rate === 0.2) {
                return days - 1;
            }
            return days
        },
        "corn": function(){
            return days
        },
        "cranberries": function(){
            return days
        },
        "eggplant": function(){
            if (rate === 0.20) {
                return days - 1;
            }
            return days
        },
        "fairy_rose": function(){
            if (rate === 0.35) {
                return days + 1;
            }
            return days
        },
        "garlic": function(){
            return days
        },
        "grape": function(){
            if (rate === 0.1 || rate === 0.2) {
                return days - 1;
            }
            return days
        },
        "green_bean": function(){
            if (rate === 0.1 || rate === 0.2) {
                return days - 1;
            }
            return days
        },
        "hops": function(){
            return days
        },
        "hot_pepper": function(){
            if (rate === 0.2) {
                return days - 1;
            }
            return days
        },
        "kale": function(){
            return days
        },
        "melon": function(){
            if (rate === 0.35) {
                return days + 1;
            }
            return days
        },
        "parsnip": function(){
            return days
        },
        "poppy": function(){
            return days
        },
        "potato": function(){
            return days
        },
        "pumpkin": function(){
            if (rate === 0.35) {
                return days + 1;
            }
            return days
        },
        "radish": function(){
            return days
        },
        "red_cabbage": function(){
            return days
        },
        "rhubarb": function(){
            return days
        },
        "starfruit": function(){
            return days
        },
        "strawberry": function(){
            return days
        },
        "summer_spangle": function(){
            return days
        },
        "sunflower": function(){
            return days
        },
        "sweet_gem_berry": function(){
            if (rate === 0.25 || rate === 0.35) {
                return days + 1;
            }
            return days
        },
        "tomato": function(){
            return days
        },
        "tulip": function(){
            return days
        },
        "unmilled_rice": function(){
            return days
        },
        "wheat": function(){
            return days
        },
        "yam": function(){
            if (rate === 0.1 || rate === 0.2) {
                return days - 1;
            }
            if (rate === 0.35) {
                return days + 1;
            }
            return days
        },
        
    }
    
    return cropsTable[crop_id]();
}