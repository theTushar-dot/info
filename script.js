document.addEventListener('DOMContentLoaded', function() {
    const typedInput = document.getElementById('typed-input');
    const output = document.getElementById('output');
    let currentInput = '';
    let currentDirectory = '/home/tushar';

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            executeCommand(currentInput);
            currentInput = '';
            typedInput.textContent = '';
        } else if (event.key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
            typedInput.textContent = currentInput;
        } else if (event.key.length === 1) {
            currentInput += event.key;
            typedInput.textContent = currentInput;
        }
    });

    function executeCommand(command) {
        // Clear previous output
        output.innerHTML = '';

        if (command.toLowerCase() === 'clear') {
            return;
        }

        switch (command.toLowerCase()) {
            case 'about':
                displayOutput("About Tushar Prakash: A Machine Learning Researcher at Sony Research India with a passion for developing AI-driven solutions in recommendation systems, NLP, and adversarial learning. Tushar has worked extensively in large-scale recommendation systems and published in top-tier conferences like IEEE ICDM and ACM RecSys.");
                break;
            case 'education':
                displayOutput("Education: Bachelor of Technology in Electronics and Communication Engineering from Delhi Technological University (CGPA: 8.58/10). Tushar's research interests include transformers, self-supervised learning, meta-learning, and large language models.");
                break;
            case 'skills':
                displayOutput("Skills: Proficient in Python, JavaScript, C/C++. Expertise in machine learning and deep learning frameworks such as PyTorch, TensorFlow, Keras, and OpenCV. Also skilled in cloud technologies (AWS, Kubernetes), data analysis libraries (pandas, numpy), and web development (React.js, Node.js).");
                break;
            case 'experience':
                displayOutput("Experience: Currently working at Sony Research India on context-aware recommendation models. Previously completed research internships at University of Alberta and Microsoft, where Tushar contributed to 5G network infrastructure testing and adversarial image detection projects.");
                break;
            case 'publications':
                displayOutput("Selected Publications: 1) 'LLM-BRec: Personalizing Session-based Social Recommendation with LLM-BERT Fusion Framework' (ACM SIGIR), 2) 'MVBN: Enhancing Social Recommendation with Multi-View BERT Network' (IEEE ICDM), 3) 'CR-SoRec: BERT driven Consistency Regularization for Social Recommendation' (ACM RecSys).");
                break;
            case 'contact':
                displayOutput("Contact Information: Email: tushar121prakash@gmail.com | GitHub: github.com/theTushar-dot | LinkedIn: https://www.linkedin.com/in/tushar-dot-prakash/");
                break;
            case 'help':
                displayOutput("Available commands: about, education, skills, experience, publications, contact, cv");
                break;
            case 'ls':
                displayOutput("Documents  Pictures  Music  'Why I Love AI.txt'  'Secret Recipes.doc'  'World Domination Plans.pdf'");
                break;
            case 'cd':
                displayOutput("Changed directory to... wait, where am I? Is this the cloud? It's so fluffy here!");
                break;
            case 'pwd':
                displayOutput(`Current directory: ${currentDirectory}/confusion/where-am-i`);
                break;
            case 'cv':
                displayOutput("If you'd like to skip the terminal experience and view my CV directly, please click here to access my CV.");
                const link = document.createElement('a');
                link.href = "https://drive.google.com/file/d/1dqrew2xQwtK6cXNSQwHvtQNJp-SWyGca/view?usp=sharing";
                link.textContent = "View CV";
                link.target = "_blank";
                output.appendChild(link);
                break;
            default:
                displayOutput("Command not recognized. Type 'help' for a list of available commands.");
        }
    }

    function displayOutput(content) {
        const outputLine = document.createElement('p');
        outputLine.textContent = content;
        output.appendChild(outputLine);
    }
});
