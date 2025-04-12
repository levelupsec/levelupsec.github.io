const comp_survey = new Survey.Model(company_json);
comp_survey.applyTheme(themeJson);
comp_survey.onComplete.add((sender, options) => {

    $.ajax({
        type:"POST",
        url: "https://script.google.com/macros/s/AKfycbxjDrb9kxZa6P-7lk8z55cvGk5hORON2OyB9c7hDh3mtb_S1QuBF4dQR5EjVhV_Whl3_g/exec",
        data: JSON.stringify(sender.data),
        success: function(data)
        {
          console.log("Submitted!");
        }
      })    
});

$("#company_form").Survey({ model: comp_survey });
