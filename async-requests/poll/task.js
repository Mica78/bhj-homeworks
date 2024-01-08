const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
let id = Number();
xhr = new XMLHttpRequest();
xhrPost = new XMLHttpRequest();


xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        dataJSON = JSON.parse(xhr.responseText);
        id = dataJSON.id;
        title.append(dataJSON.data.title);
        for (let answer of dataJSON.data.answers) {
            answers.insertAdjacentHTML('beforeEnd', `<button class="poll__answer">
                                                        ${answer}
                                                    </button>`);
        };
    };
};

xhr.send();

answers.onclick = (e) => {
    answersArray = Array.from(answers.children);
    const btn = answersArray.indexOf(e.target);
    alert('Спасибо, ваш голос засчитан!');
    xhrPost.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded');
    xhrPost.send(`vote=${id}&answer=${btn}`);
    xhrPost.onreadystatechange = () => {
        if (xhrPost.readyState === xhrPost.DONE && xhr.status === 200) {
            let response = JSON.parse(xhrPost.responseText).stat;
            let total = Number();
            answers.innerHTML = ''
            for (let item in response) {
                total += response[item].votes;
            };
            for (let item in response) {
                answers.insertAdjacentHTML('beforeend', `<p>${response[item].answer}: ${(response[item].votes/total*100).toFixed(2)}%</p>`);
            };
        };
    };
}
