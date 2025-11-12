const tutor_survey = new Survey.Model(tutor_json);
tutor_survey.applyTheme(themeJson);
tutor_survey.onComplete.add((sender, options) => {

    $.ajax({
        type:"POST",
        url: "https://script.google.com/macros/s/AKfycbykZb1_wGFdzyhky8UWzt77UFQWchN-vDG6thUOtY72rVoEKdt5aZ4iiy2qCu4sFnvQWg/exec",
        data: JSON.stringify(sender.data, null, 3),
        success: function(data)
        {
          console.log("Submitted!");
        }
      })  
});

$("#tutor_form").Survey({ model: tutor_survey });