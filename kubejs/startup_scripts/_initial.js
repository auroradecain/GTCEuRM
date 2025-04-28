// priority: 999
// ! This script loads first before the other startup scripts
/**
 * This script loads first before the other startup scripts.
 * Put your utility functions or global vars here so that you can access them in other scripts
 */

// Enable modpack module as kubejs
Platform.mods.kubejs.name = "GTCEu RM"

/**
 * Creates a placeholder item
 * @param {Registry.Item} registry
 * @param {ResourceLocation_ | string} name - item (id)
 */
const placeHolder = (registry, name) => {
    registry.create(name).texture("kubejs:item/barrier").displayName(`§eT. B. I. §r- §d${name.split("_").map(v => capitalize(v))}`);
}
