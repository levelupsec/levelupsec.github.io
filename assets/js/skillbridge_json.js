const skillbridge_json = {
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
        "type": "radiogroup",
        "name": "Branch",
        "title": "What Department of Defense Branch are you in?",
        "isRequired": true,
        "choices": [
         "US Army",
         "US Navy",
         "US Air Force",
         "US Marine Corps",
         "US Coast Guard",
         "US Space Force",
         "I'm not in the US Military"
        ]
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
        "type": "checkbox",
        "name": "Experience",
        "title": "Experience",
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
      "name": "page4",
      "elements": [
       {
        "type": "text",
        "name": "Additional",
        "title": "Any other additional coding experience you want to highlight? (Projects / Public git repo / etc)"
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "boolean",
        "name": "Relocate",
        "title": "Are you willing to relocate to the Washington DC / Northern Virginia area upon SkillBridge completion?",
        "isRequired": true,
        "valueTrue": "Yes",
        "valueFalse": "No"
       }
      ]
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "boolean",
        "name": "FS",
        "title": "Are you willing to take a Full Scope Polygraph?",
        "isRequired": true,
        "valueTrue": "Yes",
        "valueFalse": "No"
       }
      ]
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "text",
        "name": "Final",
        "title": "When is your Skillbridge Start date?",
        "isRequired": true,
        "inputType": "date"
       },
       {
        "type": "text",
        "name": "DoS",
        "title": "When is your Skillbridge End Date?",
        "isRequired": true,
        "inputType": "date"
       }
      ]
     }
    ],
    "triggers": [
     {
      "type": "complete",
      "expression": "{CanCode} = false"
     },
     {
      "type": "complete",
      "expression": "{Relocate} = false"
     },
     {
      "type": "complete",
      "expression": "{Branch} = 'I\\'m not in the US Military'"
     },
     {
      "type": "complete",
      "expression": "{CanCode} = 'No'"
     },
     {
      "type": "complete",
      "expression": "{Relocate} = 'No'"
     },
     {
      "type": "complete",
      "expression": "{FS} = 'No'"
     }
    ]
   }