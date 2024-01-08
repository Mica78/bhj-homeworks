const items = document.getElementById('items');
const loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        const responseJson = JSON.parse(xhr.responseText).response.Valute;
        for (const key in responseJson) {
            let item = ` <div class="item">
                            <div class="item__code">
                                ${responseJson[key]["CharCode"]}
                            </div>
                            <div class="item__value">
                                ${responseJson[key]["Value"]}
                            </div>
                            <div class="item__currency">
                                руб.
                            </div>
                        </div>`;
            items.insertAdjacentHTML('beforeEnd', item);
        };
        loader.classList.remove('loader_active')
    };
};

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send();
