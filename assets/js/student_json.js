const student_json = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "Name",
        "title": "What is your name?",
        "isRequired": true
       },
       {
        "type": "text",
        "name": "Email",
        "title": "What is your email address?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "CanCode",
        "title": "Do you have any coding experience?",
        "isRequired": true,
        "valueTrue": "Yes",
        "valueFalse": "No"
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "checkbox",
        "name": "Languages",
        "title": "What languages?",
        "isRequired": true,
        "choices": [
         "x86/x64 Assembly",
         "ARM Assembly",
         "C/C++",
         "Python",
         "Java"
        ],
        "showOtherItem": true
       },
       {
        "type": "text",
        "name": "Additional Coding",
        "title": "Any other additional coding experience you want to highlight? (Projects / Public git repo / etc)"
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "checkbox",
        "name": "Experience",
        "title": "Education",
        "isRequired": true,
        "choices": [
         {
          "value": "School - Undergrad",
          "text": "School (Undergrad)"
         },
         {
          "value": "School - Graduate",
          "text": "School (Graduate)"
         },
         "Hobbyist / Home Projects",
         {
          "value": "Job (Side)",
          "text": "Job (You use it to support your work)"
         },
         {
          "value": "Job (Primary)",
          "text": "Primary Job (You're a software developer)"
         }
        ],
        "showOtherItem": true
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "boolean",
        "name": "Onsite",
        "title": "Are you willing to work in the office?",
        "isRequired": true
       },
       {
        "type": "boolean",
        "name": "Remote",
        "title": "Are you interested in remote opportunities?"
       }
      ]
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "text",
        "name": "Start Date",
        "title": "When are you looking to start training?",
        "isRequired": true,
        "inputType": "date"
       },
       {
        "type": "comment",
        "name": "Extra Info",
        "title": "Anything else to add?"
       }
      ]
     }
    ],
    "triggers": [
     {
      "type": "complete",
      "expression": "{Relocate} = false"
     },
     {
      "type": "complete",
      "expression": "{Relocate} = 'No'"
     },
     {
      "type": "skip",
      "expression": "{CanCode} = 'No'",
      "gotoName": "Experience"
     }
    ]
   }