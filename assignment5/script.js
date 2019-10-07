window.onload = function() {
    /* Part 2 */
    console.log('PART 2');
    for (var i = 1; i < 21; i++) {
        console.log(i);
    }

    /* Part 3 */
    console.log('PART 3');

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const programmingInterview = (numbersArray) => {
        for (var i = 0; i < numbersArray.length; i++) {
            console.log('number: ' + numbers[i]);
            if (numbersArray[i] % 3 == 0 && numbersArray[i] % 5 == 0) {
                console.log('eplekake');
            } else if (numbersArray[i] % 3 == 0) {
                console.log('eple');
            } else if (numbersArray[i] % 5 == 0) {
                console.log('kake');
            }
        }
    };
    programmingInterview(numbers);

    /* Part 5 */
    const h1 = document.getElementById('title');
    h1.innerText = 'Hello, JavaScript';

    function changeDisplay() {
        console.log('Pressed!');
        const magic = document.getElementById('magic');
        magic.setAttribute('display', 'none');
    }

    function changeVisibility() {}

    function reset() {}

    /* Part 6 */
    const technologies = [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Python',
        'Java',
        'AJAX',
        'JSON',
        'React',
        'Angular',
        'Bootstrap',
        'Node.js'
    ];
};