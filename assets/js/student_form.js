const student_survey = new Survey.Model(student_json);
student_survey.applyTheme(themeJson);
student_survey.onComplete.add((sender, options) => {

    $.ajax({
        type:"POST",
        url: "https://script.google.com/macros/s/AKfycbxMm-wNQWnCRSWimtatTMk-wLDK-3B71k1D7J3xNxERjWYZWfKDb5vfT_uw0YWGxkOa/exec",
        data: JSON.stringify(sender.data, null, 3),
        success: function(data)
        {
          console.log("Submitted!");
        }
      })  
});

$("#student_form").Survey({ model: student_survey });