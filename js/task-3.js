function checkForSpam(message) {
 const BadList = message.toLowerCase()
if (BadList.includes("spam") || BadList.includes("sale")) {
    return true
    } else {
    return false
    }
}
