// WEEKLY DIGEST NEWS FILTER
// SEARCH & DROPDOWN FUNCTIONS
// CAN SEARCH THROUGHT SUSBTRING OF 'CONTENT' IN SELECTED LIST FIELD

$(document).ready(function(){
     console.log("Start: " + ($('.wd-results').children().length));
     cleanDisplay();
     displayDefaultNews();
});
// CLEANER
function cleanDisplay(){
     $('.wd-results').empty();
}
// CONTENT FILTER
function displayFilteredNews(inputUrl){
     // let requestUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/GetByTitle('Weekly Digest')/items?$select=*&$orderby=Publication desc&$filter=Month eq '${month}'`;

     cleanDisplay();
     $.ajax({
          url: inputUrl,
          type: "GET",
          headers:
          {
               "Accept": "application/json;odata=verbose",
               "Content-Type": "application/json;odata=verbose",
               "X-RequestDigest": $("#__REQUESTDIGEST").val(),
               "IF-MATCH": "*",
               "X-HTTP-Method": null
          },
          success: function(data)
          {
               // GUARD STATEMENT
               if ((data.d.results.length) == 0){
                    $('.wd-results').append(
                         `<div class="no-items-container">No Items Found</div>`
                    )
                    return;
               }
               console.log("data here: " + JSON.stringify(data))
               for (var r=0; r < data.d.results.length; r++){
                    let rItem = data.d.results[r]
                    // GET DATE FORMATTED
                    var today = new  Date(rItem.Publication);
                    const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                    var dateformat = monthName[( today.getMonth())]  + " " + today.getDate() + "," + " " + today.getFullYear();
                    
                    // APPEND RESULTS
                    $('.wd-results').append(
                         `<div class="wd-results-container">`
                              + `<div class="wd-results-info">`
                                   + `<div class="wd-results-date gp-h7 gp-rp">${dateformat}</div>`
                                   + `<div class="wd-results-subdata">`
                                        + `<div class="wd-results-title gp-h5 gp-vc">${rItem.Title}</div>`
                                        + `<div class="wd-results-desc gp-h6 gp-bl">${rItem.Description}</div>`
                                   + `</div>`
                              + `</div>`

                              + `<img class="wd-results-img" src="${rItem.Thumbnail.Url}" alt="">`
                         + `</div>`
                    )
               }
          }
     })
}
function showHideClearButton(){
     if ($('#search-input').val() != ''){
          $('#clear-input').attr('hidden', null)
     }
     else {
          $('#clear-input').attr('hidden', '')
          displayDefaultNews();
     }
}
function clearInputSearch(){
     $('#search-input').val('');
     $('#clear-input').attr('hidden', '')
     displayDefaultNews();
}
// DEFAULT CONTENT
function displayDefaultNews(){
     cleanDisplay();
     let requestUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/GetByTitle('Weekly Digest')/items?$select=*&$orderby=Publication desc&$top=2`;
     
     displayFilteredNews(requestUrl);
}
// SEARCH FUNCTIONS
function displaySearchValue(){ 
     // $('.wd-results').empty();
     let monthValue = $('#search-input').val();
     if ((monthValue) == ''){
          return;
     }
     let requestUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/GetByTitle('Weekly Digest')/items?$select=*&$orderby=Publication desc&$filter=Month eq '${monthValue}'`

     displayFilteredNews(requestUrl);
}

// DROPDOWN SEARCH FUNCTION
function displayDropdownValue(){
     let monthValue = $('#month-picker-select').val();
     console.log("Month Picker Value: " + monthValue)
     // ROUTE SELECTION
     let requestUrl = _spPageContextInfo.webAbsoluteUrl + `/_api/web/lists/GetByTitle('Weekly Digest')/items?$select=*&$orderby=Publication desc&$filter=Month eq '${monthValue}'`;

     if (((monthValue) == "All News") || ((monthValue) == "")){
          displayDefaultNews();
          return;
     }
     displayFilteredNews(requestUrl);
}
