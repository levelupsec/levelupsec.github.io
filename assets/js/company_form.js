const comp_survey = new Survey.Model(company_json);
comp_survey.applyTheme(themeJson);
comp_survey.onComplete.add((sender, options) => {

    $.ajax({
        type:"POST",
        url: "https://script.google.com/macros/s/AKfycbzwNFDrp7DDLCFrO2pxpujv4HDmpJB3IYABLO1ZSg4gUWN8aOZoVZDCeMJU2Fvmu7IajQ/exec",
        data: JSON.stringify(sender.data),
        success: function(data)
        {
          console.log("Submitted!");
        }
      })    
});

$("#company_form").Survey({ model: comp_survey });