const student_survey = new Survey.Model(student_json);
student_survey.applyTheme(themeJson);
student_survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));

    $.ajax({
        type:"POST",
        url: "https://hooks.zapier.com/hooks/catch/17683440/3ggw9ua/",
        data: JSON.stringify(sender.data, null, 3),
        success: function(data)
        {
          console.log("Submitted!");
        }
      })  
});

$("#student_form").Survey({ model: student_survey });