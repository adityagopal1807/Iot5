const questions = [
    {
        question: "What is a microcontroller?",
        options: [
            "a) A small computer integrated onto a single chip",
            "b) A storage device",
            "c) A type of memory",
            "d) A display screen"
        ],
        answer: "a) A small computer integrated onto a single chip"
    },
    {
        question: "What type of memory is used to store variables in a microcontroller?",
        options: [
            "a) ROM",
            "b) Data Memory",
            "c) Flash Memory",
            "d) Cache"
        ],
        answer: "b) Data Memory"
    },
    {
        question: "Which feature allows a microcontroller to communicate with external devices?",
        options: [
            "a) Input/Output (I/O) pins",
            "b) Cache memory",
            "c) Instruction set",
            "d) Data bus"
        ],
        answer: "a) Input/Output (I/O) pins"
    },
    {
        question: "Which microcontroller is widely used in embedded systems?",
        options: [
            "a) 8085",
            "b) 8051",
            "c) ARM",
            "d) Z80"
        ],
        answer: "b) 8051"
    },
    {
        question: "Which of the following is a key feature of microcontrollers?",
        options: [
            "a) High power consumption",
            "b) High clock speed",
            "c) Low power consumption",
            "d) Expensive cost"
        ],
        answer: "c) Low power consumption"
    },
    {
        question: "What does the RST pin do in an 8051 microcontroller?",
        options: [
            "a) Acts as a clock source",
            "b) Provides power",
            "c) Resets the microcontroller",
            "d) Connects to external memory"
        ],
        answer: "c) Resets the microcontroller"
    },
    {
        question: "How many I/O ports does the 8051 microcontroller have?",
        options: [
            "a) 1",
            "b) 2",
            "c) 4",
            "d) 8"
        ],
        answer: "c) 4"
    },
    {
        question: "What is the function of the PSEN pin in the 8051 microcontroller?",
        options: [
            "a) Program Store Enable",
            "b) Power Supply Enable",
            "c) Peripheral Store Enable",
            "d) Program Start Enable"
        ],
        answer: "a) Program Store Enable"
    },
    {
        question: "Which of the following is an on-chip peripheral of a microcontroller?",
        options: [
            "a) Timer",
            "b) Hard Disk",
            "c) Video Card",
            "d) USB Hub"
        ],
        answer: "a) Timer"
    },
    {
        question: "In the 8051, what does the ALE pin stand for?",
        options: [
            "a) Address Latch Enable",
            "b) Analog Latch Enable",
            "c) Automatic Link Enable",
            "d) Address Lock Enable"
        ],
        answer: "a) Address Latch Enable"
    },
    {
        question: "What is the primary purpose of timers in a microcontroller?",
        options: [
            "a) To store data",
            "b) To perform calculations",
            "c) To measure time intervals or count events",
            "d) To handle interrupts"
        ],
        answer: "c) To measure time intervals or count events"
    },
    {
        question: "What type of bus is used to transfer data between the microprocessor and other components?",
        options: [
            "a) Instruction bus",
            "b) Data bus",
            "c) Address bus",
            "d) Control bus"
        ],
        answer: "b) Data bus"
    },
    {
        question: "Which of the following allows microcontrollers to handle serial communication?",
        options: [
            "a) RXD and TXD pins",
            "b) INT0 and INT1 pins",
            "c) PSEN and ALE pins",
            "d) Timer 0 and Timer 1"
        ],
        answer: "a) RXD and TXD pins"
    },
    {
        question: "What technology is used to fabricate the entire CPU of a microcontroller on a single chip?",
        options: [
            "a) MSI",
            "b) LSI and VLSI",
            "c) SSI",
            "d) PCI"
        ],
        answer: "b) LSI and VLSI"
    },
    {
        question: "The external access (EA) pin is used for:",
        options: [
            "a) Serial communication",
            "b) External memory interfacing",
            "c) Interrupt handling",
            "d) Power supply"
        ],
        answer: "b) External memory interfacing"
    },
    {
        question: "Which of the following microcontroller pins is bidirectional?",
        options: [
            "a) PSEN",
            "b) ALE",
            "c) Port pins",
            "d) EA"
        ],
        answer: "c) Port pins"
    },
    {
        question: "What is the role of the cache in a microprocessor?",
        options: [
            "a) Stores frequently accessed data for faster performance",
            "b) Handles communication with external memory",
            "c) Controls power management",
            "d) Stores program code"
        ],
        answer: "a) Stores frequently accessed data for faster performance"
    },
    {
        question: "How many levels of cache memory can a microprocessor have?",
        options: [
            "a) 1",
            "b) 2",
            "c) 3 or more",
            "d) No cache"
        ],
        answer: "c) 3 or more"
    },
    {
        question: "What is the primary function of the address bus?",
        options: [
            "a) Transfer of data",
            "b) Transfer of memory addresses",
            "c) Handle interrupts",
            "d) Control communication"
        ],
        answer: "b) Transfer of memory addresses"
    },
    {
        question: "The first 128 bytes of internal data memory in the 8051 microcontroller can be:",
        options: [
            "a) Only indirectly addressed",
            "b) Both directly and indirectly addressed",
            "c) Only externally addressed",
            "d) Stored in ROM"
        ],
        answer: "b) Both directly and indirectly addressed"
    },
    {
        question: "What is the significance of external memory in an 8031 microcontroller system?",
        options: [
            "a) It holds the program code",
            "b) It stores cache data",
            "c) It controls the I/O pins",
            "d) It stores interrupt data"
        ],
        answer: "a) It holds the program code"
    },
    {
        question: "Which microcontroller pin is connected to +5 Volts power supply?",
        options: [
            "a) P0.0",
            "b) ALE",
            "c) VCC",
            "d) RST"
        ],
        answer: "c) VCC"
    },
    {
        question: "How many pins does the 8051 microcontroller have?",
        options: [
            "a) 20",
            "b) 30",
            "c) 40",
            "d) 50"
        ],
        answer: "c) 40"
    },
    {
        question: "Which of the following pins in the 8051 microcontroller is used for serial data transmission?",
        options: [
            "a) RXD",
            "b) TXD",
            "c) INT0",
            "d) WR"
        ],
        answer: "b) TXD"
    },
    {
        question: "What does the INT0 pin handle in the 8051 microcontroller?",
        options: [
            "a) Serial data transmission",
            "b) External interrupt 0",
            "c) Timer 0",
            "d) Write data"
        ],
        answer: "b) External interrupt 0"
    },
    {
        question: "What is the maximum external data memory that can be interfaced with the 8051?",
        options: [
            "a) 256 bytes",
            "b) 1KB",
            "c) 64KB",
            "d) 128KB"
        ],
        answer: "c) 64KB"
    },
    {
        question: "What is the purpose of the WR pin in the 8051 microcontroller?",
        options: [
            "a) Write data to external memory",
            "b) Read data from external memory",
            "c) Enable interrupts",
            "d) Transmit serial data"
        ],
        answer: "a) Write data to external memory"
    },
    {
        question: "What is the address space occupied by internal data memory in the 8051?",
        options: [
            "a) 00-7Fh",
            "b) 80-FFh",
            "c) 0000-FFFF",
            "d) 0-FFF"
        ],
        answer: "a) 00-7Fh"
    },
    {
        question: "How does the 8051 microcontroller multiplex address and data signals to save pins?",
        options: [
            "a) Through Port 0",
            "b) Through the ALE pin",
            "c) Using the RXD and TXD pins",
            "d) Using external interrupt pins"
        ],
        answer: "a) Through Port 0"
    },
    {
        question: "What happens when the EA pin in the 8051 microcontroller is connected to GND?",
        options: [
            "a) Internal memory is disabled",
            "b) External memory is disabled",
            "c) The microcontroller resets",
            "d) It enables external interrupts"
        ],
        answer: "a) Internal memory is disabled"
    }
];

// Function to generate the quiz
// Function to generate the quiz
function generateQuiz() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((questionObj, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        questionElement.innerHTML = `<p>${index + 1}. ${questionObj.question}</p>`;
        questionObj.options.forEach(option => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${option}" required>
                    ${option}
                </label>`;
        });
        quizContainer.appendChild(questionElement);
    });
}

// Function to check answers and display results
function showResults(event) {
    event.preventDefault(); // Prevent form submission

    let score = 0;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    questions.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const correctAnswer = questionObj.answer;

        // Create a result message for each question
        let resultMessage = `<p>${questionObj.question} <br>`;
        
        if (selectedOption) {
            if (selectedOption.value === correctAnswer) {
                score++;
                resultMessage += `<span style="color: green;">Your answer: ${selectedOption.value} - Correct!</span>`;
            } else {
                resultMessage += `<span style="color: red;">Your answer: ${selectedOption.value} - Incorrect! Correct Answer: ${correctAnswer}</span>`;
            }
        } else {
            resultMessage += `<span style="color: orange;">You did not answer this question. Correct Answer: ${correctAnswer}</span>`;
        }

        resultMessage += `</p>`;
        resultsContainer.innerHTML += resultMessage;
    });

    // Alert total score
    alert(`Your total score is: ${score} out of ${questions.length}`);
}

// Event listeners
document.addEventListener('DOMContentLoaded', generateQuiz);
document.getElementById('quizForm').addEventListener('submit', showResults);
