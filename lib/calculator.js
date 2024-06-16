document.addEventListener('DOMContentLoaded', () => {
    const monitor = document.querySelector('.monitor');
    let expression = '';

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === 'AC') {
                expression = '';
            } else if (buttonText === '+/-') {
                // Toggle sign of the number
                expression = expression.startsWith('-') ? expression.slice(1) : '-' + expression;
            } else if (buttonText === '%') {
                // Calculate percentage
                expression = (parseFloat(expression) / 100).toString();
            }
             else if (buttonText === '=') {
                // Evaluate expression
                try {
                    expression = eval(expression).toString();
                } catch (error) {
                    expression = 'Error';
                }
            } else {
                // Append numbers and operators
                expression += buttonText;
            }

            // Update the monitor with the current expression
            monitor.textContent = expression;
        });
    });
});
