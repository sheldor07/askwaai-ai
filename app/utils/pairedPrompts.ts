
export interface Prompt {
  question: string;
  prompt: string;
}

export interface PromptsCollection {
  [key: string]: Prompt[];
}

export interface PairedPrompts {
  default: Prompt[];
  empathise: {
    AEIOU: Prompt[];
    Implicit: Prompt[];
    Blog1: Prompt[];
  };
  question: PromptsCollection;
  introduce: PromptsCollection;
}
export const pairedPrompts = {
    default: [
      {
        question: "Explain the task I am supposed to do",
        prompt: "Please explain the task in more detail.",
      },
      {
        question: "*Write your own question*",
        prompt: "*Write your own prompt*",
      },
      // More paired prompts
    ],
    empathise: {
      AEIOU: [
        {
          question: "Evaluate the depth of my AEIOU observations.",
          prompt:  `Prompt: Please review the AEIOU observations provided and assess their depth. Consider the following aspects:

          1.t might be miss Are the activities described in sufficient detail? Are there any important actions or behaviors thaing?
          2. Is the overall environment adequately portrayed? Are there any contextual elements that should be highlighted?
          3. Do the interactions between individuals clearly contribute to reaching goals? Are there any additional effects worth mentioning?
          4. Are all relevant objects within the environment identified and described? Are there any noteworthy connections to people, activities, or interactions?
          5. Are the main groups/individuals being observed well-defined? Are there any personality traits or engagement patterns that could be further explored?
          
          Based on your assessment, provide feedback on the depth of the AEIOU observations and suggest any areas that could benefit from further elaboration.
          `,
        },
        {
          question:
            "Identify any gaps or overlooked areas in my AEIOU observations.",
          prompt:
                `Prompt: Carefully examine the AEIOU observations and identify any potential gaps or overlooked areas. Consider the following questions:

                1. Are there any activities that are not adequately addressed or missing from the observations?
                2. Is there any crucial information about the environment that has been overlooked?
                3. Are there any interactions among individuals that should be highlighted but are absent in the observations?
                4. Are there any objects or elements in the environment that have not been thoroughly described or analyzed?
                5. Are there any user groups or individuals that have been overlooked or need further exploration?
                
                Based on your analysis, provide feedback on any gaps or overlooked areas in the AEIOU observations, and suggest how the observations can be expanded to cover those aspects.
                `
        },
        {
          question:
            "Provide insights on how I can better capture the interactions and activities in my AEIOU observations.",
          prompt:
            `Prompt: Examine the AEIOU observations and provide insights on how to better capture the interactions and activities within them. Consider the following points:

            1. Are there any specific strategies or techniques that can enhance the capturing of interactions between individuals?
            2. Are there any key details or cues that can help in capturing activities more effectively?
            3. Are there any alternative approaches to observing and recording interactions and activities that could be beneficial?
            4. How can the sensory details related to the phenomenon be better documented to enrich the understanding of interactions and activities?
            5. Are there any specific examples or case studies that can inspire the improvement of capturing interactions and activities?
            
            Based on your insights, provide recommendations on how to enhance the capturing of interactions and activities in AEIOU observations, and suggest any practical methods or resources that can assist in this process.
            `
        },
      ],
      Implicit: [
        {
          question:
            "Help me uncover deeper meanings or implications from my observations.",
          prompt:
            "Please help me uncover deeper meanings or implications from my observations.",
        },
        {
          question:
            "Identify any patterns or trends in my observations that I might have missed.",
          prompt:
            "Please identify any patterns or trends in your observations that you might have missed.",
        },
        {
          question:
            "Provide insights on how I can better analyze the environment and objects in my observations.",
          prompt:
            "Please provide insights on how you can better analyze the environment and objects in your observations.",
        },
      ],
      Blog1: [
        {
          question: "Assess the clarity and coherence of my Blog 1.",
          prompt: "Please assess the clarity and coherence of your Blog 1.",
        },
        {
          question:
            "Evaluate how effectively I've incorporated my AEIOU observations into my Blog 1.",
          prompt:
            "Please evaluate how effectively you've incorporated your AEIOU observations into your Blog 1.",
        },
        {
          question:
            "Provide suggestions on how I can better convey the implicit details in my Blog 1.",
          prompt:
            "Please provide suggestions on how you can better convey the implicit details in your Blog 1.",
        },
      ],
    },
    question:{

    "Research Question": [
      {
        question: "Evaluate the openness of my research question. Does it encourage exploration and deep thinking?",
        prompt: "Prompt: Please evaluate the openness of your research question. Does it encourage exploration and deep thinking?",
      },
      {
        question: "Assess the scope of my research question. Is it manageable within the space of the assignment?",
        prompt: "Prompt: Please assess the scope of your research question. Is it manageable within the space of the assignment?",
      },
      {
        question: "Does my research question motivate my piece of writing? Does it give purpose and focus to my writing?",
        prompt: "Prompt: Please evaluate if your research question motivates your piece of writing. Does it provide purpose and focus to your writing?",
      },
      {
        question: "Will my research question lead to new learning about the topic?",
        prompt: "Prompt: Please assess if your research question will lead to new learning about the topic.",
      },
      {
        question: "Does my research question avoid formulations that lead to policy papers rather than exploratory op-eds?",
        prompt: "Prompt: Please evaluate if your research question avoids formulations that lead to policy papers rather than exploratory op-eds.",
      },
    ]},

    introduce: {
      "Assignment 1": [
        {
          question: "Evaluate the vividness of my descriptions. Are they too general or unfocused?",
          prompt: "Please provide your insights about the vividness of your descriptions. Are there parts that seem too general or unfocused? How could they be enhanced?"
        },
        {
          question: "Assess the depth of my analysis. Have I analyzed the significant details from my observations?",
          prompt: "Reflect on the depth of your analysis. Have you thoroughly analyzed the significant details from your observations? What elements could you delve deeper into?"
        },
        {
          question: "Review the specificity and openness of my question. Does it encourage discussion and offer a clear motivation for writing?",
          prompt: "Evaluate your research question in terms of its specificity and openness. Does it encourage an engaging discussion? How well does it motivate your writing?"
        },
        {
          question: "How well have I used sensory and descriptive language in my writing?",
          prompt: "Consider the use of sensory and descriptive language in your writing. How effectively have you engaged your reader's senses to describe your topic?"
        },
        {
          question: "Does my writing clearly show rather than tell about the topic?",
          prompt: "Reflect on your writing. Does it successfully 'show' rather than 'tell' about your topic? How well have you used specific details and examples to illustrate your points?"
        },
      ],
    },

    collate: {
      "Working with Sources": [
        {
          "question": "What is the main argument of this source?",
          "prompt": "Prompt: Can you summarize the main argument of this source in simple terms?"
        },
        {
          "question": "How does the evidence in this source support its main claims?",
          "prompt": "Prompt: Can you provide an example of how the evidence in this source supports its main claims?"
        },
        {
          "question": "What potential logical fallacy does this source's argument contain?",
          "prompt": "Prompt: Can you help me identify a potential logical fallacy in the argument provided by this source?"
        },
        {
          "question": "How does a concept in this source relate to my research question?",
          "prompt": "Prompt: Can you identify a concept in this source that addresses my research question either directly or indirectly?"
        },
        {
          "question": "How does the perspective in this source enable me to look at my topic differently?",
          "prompt": "Prompt: In what ways does the perspective offered in this source provide a new viewpoint on my research topic?"
        },
        {
          "question": "What elements of this source verify its credibility?",
          "prompt": "Prompt: What features should I consider in this source to ascertain its credibility?"
        },
        {
          "question": "Are there potential biases in this source?",
          "prompt": "Prompt: Can you assist me in identifying any potential biases in this source?"
        },
        {
          "question": "How can this source help me answer my research question?",
          "prompt": "Prompt: Given what's in this source, how could it potentially help me answer my research question?"
        },
        {
          "question": "How can I extend or revise the claims from this source to create a compelling response to my research question?",
          "prompt": "Prompt: How can I extend or revise the claims or concepts from this source to construct a persuasive response to my research question?"
        },
        {
          "question": "How should I structure a correct citation for this source?",
          "prompt": "Prompt: Can you guide me in creating a correct citation for this source?"
        },
        {
          "question": "How can I apply an unrelated but interesting concept from this source to my research question?",
          "prompt": "Prompt: This source isn't directly related to my topic, but discusses an interesting concept. Can you help me apply this concept to my research question?"
        }
      ]
    },    
    

}