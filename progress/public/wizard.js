document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const nextBtns = document.querySelectorAll('.next-btn');
    const progressBar = document.getElementById('progress');
    
    // Initialize the current step
    let currentStep = 1;
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentStepElement = document.querySelector(`.step[data-step="${currentStep}"]`);
            const nextStepElement = document.querySelector(`.step[data-step="${currentStep + 1}"]`);

            if (nextStepElement) {
                if (validateStep(currentStepElement)) {
                    currentStepElement.classList.remove('active');
                    nextStepElement.classList.add('active');
                    currentStep++;

                    updateProgressBar();
                }
            }
        });
    });

    function validateStep(step) {
        const requiredInputs = step.querySelectorAll('input[required], select[required]');
        for (const input of requiredInputs) {
            if (!input.value) {
                alert('Please fill in all required fields.');
                return false;
            }
        }
        return true;
    }

    function updateProgressBar() {
        const progressPercent = (currentStep / steps.length) * 100;
        progressBar.style.width = progressPercent + '%';
        progressBar.setAttribute('data-progress-text', `${Math.round(progressPercent)}% Completed`);
    }

    const form = document.getElementById('wizardForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validateStep(document.querySelector(`.step[data-step="${currentStep}"]`))) {
            // Serialize the form data into an object
            const formData = {};
            const formElements = form.elements;
            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];
                if (element.type !== 'button') {
                    formData[element.name] = element.value;
                }
            }

            // Send the data to the server (in a real application, you'd use AJAX or a form submission)
            fetch('/submit-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Data stored in database:', data);
                window.location.href = '/confirmation';
            })
            .catch(error => {
                console.error('Error storing data:', error);
                window.location.href = '/confirmation';
            });
    };
    });
});