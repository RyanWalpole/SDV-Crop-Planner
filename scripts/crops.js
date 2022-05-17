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
            if (rate === 0.43000000000000005){
                return days + 1;
            }
            return days
        },
        "green_bean": function(){
            if (rate === 0.1 || rate === 0.2) {
                return days -1;
            }
            if (rate === 0.43000000000000005){
                return days + 1;
            }
            return days
        },
        "hops": function(){
            if (rate === 0.43000000000000005){
                return days + 1;
            }
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
        "pineapple":function(){
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
        "taro_root": function(){
            if (rate === 0.1 || rate === 0.2) {
                return days -1;
            }
            return days
        },
        "i_taro_root": function(){
            if (rate === 0.43000000000000005 ) {
                return days+1;
            }
            return days
        },
        "tea_leaves": function(){
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
        "i_unmilled_rice": function(){
            if (rate === 0.33 || rate === 0.43000000000000005 ){
                return days -1;
            }
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
        "winter_seeds": function(){
            return days
        },
        "spring_seeds": function(){
            return days
        },
        "summer_seeds": function(){
            return days
        },
        "fall_seeds": function(){
            return days
        },
        "crocus": function(){
            return days
        },
        "snow_yam": function(){
            return days
        },
        "winter_root": function(){
            return days
        },
        "crystal_fruit": function(){
            return days
        }
    }

    return cropsTable[crop_id]();
}