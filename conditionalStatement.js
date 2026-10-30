function launchBrowser(browserName) {
    if (browserName ==="Chrome")
    console.log("Browser is Chrome");
    else if (browserName ==="Edge") {
        console.log("Browser is Edge");
        
        
    } else {
        console.log("Browser not supported");
        
        
    }
    
}
launchBrowser("Chrome")
launchBrowser("Edge")
launchBrowser("any")

function runTest(testType) {
    switch (testType) {
        case "smoke":
          console.log("Its a Smoketest");
            
            break;
    case "sanity":
    console.log("Its a Snitytest");
    break;
    case "regression":
        console.log("Its a Regressiontest");
        
        default:
            console.log("No Test");
            
            
    }
    
}
runTest("smoke")