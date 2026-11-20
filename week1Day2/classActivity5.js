function launchBrowser(browserName){

if (browserName == "chrome")
{
    console.log("Entered browser is Chrome")
}

else
{
    console.log("Entered browser is not Chrome")
}
}

launchBrowser("chrome")

function runTest(testType){

switch (testType) {

    case "smoke" : 

    console.log("Test type is Smoke")
    break
    case "sanity" :
    
    console.log("Test type is Sanity")
    break
    case "regression" :
    
    console.log("Test type is Regression")
    break
    default:
    
    console.log("Test type is not clear")

}
}
runTest("sanity")