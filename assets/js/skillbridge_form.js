const sb_survey = new Survey.Model(skillbridge_json);
sb_survey.applyTheme(themeJson);
sb_survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

$("#skillbridge_form").Survey({ model: sb_survey });