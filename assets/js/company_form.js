const comp_survey = new Survey.Model(company_json);
comp_survey.applyTheme(themeJson);
comp_survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));

    $.ajax({
        type:"POST",
        url: "https://hooks.zapier.com/hooks/catch/17683440/3ggf528/",
        data: JSON.stringify(sender.data, null, 3),
        success: function(data)
        {
          console.log("Submitted!");
        }
      })    
});

$("#company_form").Survey({ model: comp_survey });