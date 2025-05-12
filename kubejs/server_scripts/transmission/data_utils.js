global.transmission_counts = {
    "overworld": 0,
    "nether":0,
    "end":0,
    "deep_dark":0,
    "scavenger":0,
    "miner": 0,
    "solar_system": 0,
    "milky_way": 0,
    "virgo_supercluster": 0,
    "observable_universe": 0,
    "altered_reality":0
}

global.receive_counts = {
    "overworld": 0,
    "nether":0,
    "end":0,
    "deep_dark":0,
    "scavenger":0,
    "miner": 0,
    "solar_system": 0,
    "milky_way": 0,
    "virgo_supercluster": 0,
    "observable_universe": 0,
    "altered_reality":0
}

/**
 * Default durations for missions of a given microminer tier.
 * Compare with repairDurations of repair.js.
 */
const missionDurations = {
    "1": 60,
    "2": 100,
    "3": 120,
    "4": 150,
    "5": 180,
    "6": 180,
    "7": 200,
    "8": 220,
    "9": 240,
    "10": 240,
    "11": 280,
    "12": 300,
    "13": 300,
    "14": 360,
    "15": 420
}

/**
 * Default EU/t costs for missions of a given microminer tier.
 */
const missionEUt = {
    "1": GTValues.VA[GTValues.HV],
    "2": GTValues.VHA[GTValues.EV],
    "3": GTValues.VA[GTValues.EV],
    "4": GTValues.VA[GTValues.EV],
    "5": GTValues.VHA[GTValues.IV],
    "6": GTValues.VA[GTValues.IV],
    "7": GTValues.VA[GTValues.IV],
    "8": GTValues.VHA[GTValues.LuV],
    "9": GTValues.VA[GTValues.LuV],
    "10": GTValues.VA[GTValues.ZPM],
    "11": GTValues.VA[GTValues.ZPM],
    "12": GTValues.VA[GTValues.UV],
    "13": GTValues.VA[GTValues.UHV],
    "14": GTValues.VA[GTValues.UEV],
    "15": GTValues.VA[GTValues.UIV]
}

/**
 * Registers a basic microverse mission and equivalent stabilized mission recipe
 * @param {Internal.RecipesEventJS} event Parameter used in consumer for ServerEvents.recipes().
 * @param {string} dataType Data type for mission classification. 'overworld', 'universe', or 'dimension'.
 * @param {number|string} dataTier Data tier index. Typically 1 through 12.
 * @param {number|string} transmissionTier 
 * @param {number} duration Recipe duration in seconds. Defaults based on the miner tier if left undefined.
 * @param {number} EUt The EU per tick consumed by the recipe. Defaults based on the miner tier if left undefined.
 * @param {number} droneReturnChance Chance a damaged miner is returned, in percent. [Integer 0-100]
 * @returns {Internal.GTRecipeSchema$GTRecipeJS[]} Microverse recipe builders. Use this to add item and fluid I/O.
 */
function data_transmission(event, dataType, dataTier, transmissionTier, duration, EUt, droneReturnChance) {
    // Increase global mission counter
    global.transmission_counts[dataType]++;

    // Convert miner return chance from percentage to GTM"s hundredth-of-a-percent format
    droneReturnChance = Math.floor(droneReturnChance * 100)

    // Use defaults if duration or EU/t not defined
    if(duration == undefined) duration = missionDurations[dataTier]
    if(EUt == undefined) EUt = missionEUt[dataTier]

    // We return an array of GT recipe builders for the caller to act upon with a .forEach
    // rather than a long parameter list, multiple overloads, or varargs
    const builders = [];

    // Register basic microverse mission
    builders[0] = event.recipes.gtceu.data_collection(`kubejs:transmission_t${dataTier}_${dataType}_${global.transmission_counts[dataType]}`)
        .addData("transmission_tier", transmissionTier)
        .itemInputs(`kubejs:drone_t${dataTier}`)
        .duration(Math.round(duration * 20))
        .EUt(EUt)

    if(isNaN(droneReturnChance) || droneReturnChance == undefined) {
        // By default, return the microminer that was passed into the input.
        builders[0].itemOutputs(`kubejs:drone_t${dataTier}`)
    } else if(droneReturnChance > 0) {
        // Only return the damaged miner if the chance to return it is positive and real
        builders[0].chancedOutput(`kubejs:drone_t${dataTier}_damaged`, droneReturnChance, droneReturnChance == 10000 ? 0 : 500)
    }

    return builders;
}

/**
 * Registers a basic microverse mission and equivalent stabilized mission recipe
 * @param {Internal.RecipesEventJS} event Parameter used in consumer for ServerEvents.recipes().
 * @param {string} dataType Data type for mission classification. 'overworld', 'universe', or 'dimension'.
 * @param {number|string} dataTier Data tier index. Typically 1 through 12.
 * @param {number|string} transmissionTier 
 * @param {number} duration Recipe duration in seconds. Defaults based on the miner tier if left undefined.
 * @param {number} EUt The EU per tick consumed by the recipe. Defaults based on the miner tier if left undefined.
 * @param {number} dataReturnChance Chance a damaged miner is returned, in percent. [Integer 0-100]
 * @returns {Internal.GTRecipeSchema$GTRecipeJS[]} Microverse recipe builders. Use this to add item and fluid I/O.
 */
function data_receive(event, dataType, dataTier, transmissionTier, duration, EUt, dataReturnChance){
    // Increase global mission counter
    global.receive_counts[dataType]++;

    // Convert miner return chance from percentage to GTM"s hundredth-of-a-percent format
    dataReturnChance = Math.floor(dataReturnChance * 100)

    // Use defaults if duration or EU/t not defined
    if(duration == undefined) duration = missionDurations[dataTier]
    if(EUt == undefined) EUt = missionEUt[dataTier]

    // We return an array of GT recipe builders for the caller to act upon with a .forEach
    // rather than a long parameter list, multiple overloads, or varargs
    const builders = [];

    // Register basic microverse mission
    builders[0] = event.recipes.gtceu.data_extraction(`kubejs:extraction_t${dataTier}_${dataType}_${global.receive_counts[dataType]}`)
        .addData("transmission_tier", transmissionTier)
        .itemInputs(`kubejs:${dataType}_data_collection`)
        .duration(Math.round(duration * 20))
        .EUt(EUt)

    if(isNaN(dataReturnChance) || dataReturnChance == undefined) {
        // By default, return the microminer that was passed into the input.
        builders[0].itemOutputs(`kubejs:${dataType}_data_collection`)
    } else if(dataReturnChance > 0) {
        // Only return the damaged miner if the chance to return it is positive and real
        builders[0].chancedOutput(`kubejs:${dataType}_data_collection`, dataReturnChance, dataReturnChance == 10000 ? 0 : 500)
    }

    return builders;
}