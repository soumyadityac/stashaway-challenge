
# StashAway Challenge

This is my submission for the **Stashaway Challenge**

## Build Steps

 1. The following commands will help create a docker image, build the app and run it.
 
        docker build -t web-image .
        docker run -it -p 80:8172 web-image
    
2. Open the browser at http://localhost/ to open the app.

## Additional Info

I am using the YahooFinance API provided by `rapidapi.org` to fetch the historical data required for the chart. I wasn't able to find the exact code to quote for the indexes specified in the challenge, hence I chose the codes - `[SWTSX, VTSMX and VBMFX]`. 

Also, the API has a limit of 500 invocations, which, if in case gets exhausted by the time you evaluate the project, please swap the imports in the `yahooFinance.service.js` to -

    // import  HTTP  from  './http';
    import HTTP from './httpFake';
