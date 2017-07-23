function msmPageType(string) {
  if (string.map) {            // Test whether input is an array.
    return string.map(msmPage); // Apply function to each value in array if true.
  } else {
    return msmPage(string);
  }
}

function msmPage(url) {
  
//define each page type using regex patterns:
  var category = /.*\/sailing-clothing[\/|.html].*|.*\/sailing-footwear[\/|.html].*|.*\/dinghies[\/|.html].*|.*\/boat-safety[\/|.html].*|.*\/electronics[\/|.html].*|.*\/boat-maintenance-care[\/|.html].*|.*\/sailing-equipment[\/|.html].*|\/nautical-gifts[\/|.html].*|.*\/new-products.html.*/
  var product = /.*\.html.*/
  var homepage = /^https:\/\/www\.mailspeedmarine\.com\/$/
  var clearance = /.*\/clearance\/.*|.*\/clearance\.html.*/
  var blog = /.*\/on-the-water\/.*/

// convert array to string:
  var myArray = url.toString();
  
//if any url contains defined variable return given value:
  if (myArray.search(category) > -1){
    return "Category Page";
  }
    if (myArray.search(clearance) > -1) {
    return "Clearance Category"
  }
  if (myArray.search(product) > -1) {
    return "Product Page"
  }
  if (myArray.search(homepage) > -1) {
    return "Homepage"
  }
    if (myArray.search(blog) > -1) {
    return "Blog Page"
  }
   else
    return "Brand Page"
        }
