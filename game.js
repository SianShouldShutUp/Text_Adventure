const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex) // finding the current text node
    textElement.innerText = textNode.text //showing the text in the body
    while (optionButtonsElement.firstChild) { // Removing the option buttons
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

// Looping through the buttons and pulling the text options from below to make the relevant buttons
    textNode.options.forEach(option => {
        if (showOption(option)) { // checking if you can show the node and executing it if you can
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
 return option.requiredState == null || option.requiredState(state) //if there is no required state or the state is true then the options will be shown
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) { // If nextTextNodeID is less then or equal to 0 it runs startGame - restarting the game
        return startGame()
    }
    state = Object.assign(state, option.setState) // take our current state and add everything from option.setState to it and override anything that is already there
    showTextNode(nextTextNodeId)
}

  //nextText: -1 // Signifies that we want to restart the game
  //requiredState: (currentState) => currentState.blueGoo, //takes in the current state and checks if the player has what they need
  //setState: { blueGoo: false, sword: true }, // changes the state as a result of the action

  const textNodes = [
    {
        id: 1,
        text: 'You wake up suddenly in an unknown forest glade, with no memory of how you got there. Through your still fuzzy head, you can hear laughter in the distance.',
        options: [
            {
                text: 'Head straight towards the laughter',
                nextText: 2
            },
            {
                text: 'Check your body before you get up',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'You get up, but as you do so you feel shorter then usual, and the trees tower over you.',
        options: [
            {
                text: 'Maybe you will check your body before you move',
                nextText: 3
            },
            {
                text: 'Continue heading towards the laughter',
                nextText: 4
            },
        ]
    },
    {
        id: 3,
        text: 'You look down at your body and you almost faint in shock. Instead of your normal human body, you have a stubby white mushroom body. You reach your very short arms to you head and you feel the wide mushroom cap sitting on your head.',
        options: [
            {
                text: 'Panic',
                nextText: 5
            },
            {
                text: 'Process this calmly',
                nextText: 6
            },
        ]
    },
    {
        id: 4,
        text: '',
        options: [
            {
                text: ''
            }
        ]
    },
    {
      id: 5,
      text: '',
      options: [
        {
          text: ''
        }
      ]
    },
    {
      id: 6,
      text: '',
      options: [
        {
          text: '',
        }
      ]
    },
    {
      id: 7,
      text: '',
      options: [
        {
          text: '',
        },
        {
          text: '',
        },
        {
          text: '',
        },
        {
          text: '',
        }
      ]
    },
    {
      id: 8,
      text: '',
      options: [
        {
          text: ''
        }
      ]
    },
    {
      id: 9,
      text: '',
      options: [
        {
          text: ''
        }
      ]
    },
    {
      id: 10,
      text: '',
      options: [
        {
          text: ''
        }
      ]
    },
    {
      id: 11,
      text: '',
      options: [
        {
          text: ''
        }
      ]
    }
  ]
startGame()