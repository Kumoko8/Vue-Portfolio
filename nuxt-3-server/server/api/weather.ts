export default defineEventHandler(async event => {


    const response = await $fetch("../src/DnD.png")


//$fetch must be used since this only serverside API
    return response
})