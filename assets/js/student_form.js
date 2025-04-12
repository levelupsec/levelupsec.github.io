const student_survey = new Survey.Model(student_json);
student_survey.applyTheme(themeJson);
student_survey.onComplete.add((sender, options) => {

    $.ajax({
        type:"POST",
        url: "https://script.google.com/macros/s/AKfycbxquEKimp4GtTvlGLvX6gZmlp3OEs6GA2BZT-QFP3ClTW0VgPiPZCC63piSUPO8s_Xt/exec",
        data: JSON.stringify(sender.data, null, 3),
        success: function(data)
        {
          console.log("Submitted!");
        }
      })  
});

$("#student_form").Survey({ model: student_survey });
