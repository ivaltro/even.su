// Переключатель карт

/*
Узнать координаты нужной точки можно на сервисе https://yandex.ru/map-constructor/location-tool/?from=club .
Порядок координат: широта-долгота (lat-long)
*/
function load_map(ymaps) {
    // инициализируем карту
    var map = new ymaps.Map( //
        'content__map', // id блока с картой
        { //
            center: [56.7, 80.6], // координаты центра карты при первичной загрузке
            zoom: 3 // зум карты при первичной загрузке
        }); //
    //
    // шаблон балуна при нажатии на маркер
    BalloonContentLayout = ymaps.templateLayoutFactory.createClass('' + //
        '<h5 class="mb-3">' + //
        '<a class="nd fw-bold text-primary" href="#list{{properties.b_ID}}">{{properties.title}}</a>' + //
        '</h5>' + //
        '<h6>Телефон: ' + //
        '<a class="nd fw-bold sh p-2 bg-light" href="tel:{{properties.phone}}">{{properties.phone}}</a>' + //
        '</h6>' + //
        '', {});
    //
    //
    //
    // массив с маркерами
    map.geoObjects.
        // первый маркер
        add(new ymaps.Placemark([ //
            55.710129, 37.654610 // координаты
        ], {
            b_ID: "1", // id {{properties.b_ID}}
            title: "1 заголовок",  // название {{properties.title}}
            phone: "111 111 111", // Телефон {{properties.phone}}
        }, {
            balloonContentLayout: BalloonContentLayout // присваиваем шаблон балуну
        }, {
            "b_ID": "1", // такой же id
            hintContent: "1 заголовок" // подсказка при наведении мыхи
        }, {
            preset: "islands#darkgreenIcon" // тип и цвет маркера
        })).
        // второй маркер
        add(new ymaps.Placemark([ //
            55.413060, 38.242279 // координаты
        ], {
            b_ID: "2", // id {{properties.b_ID}}
            title: "2 заголовок", // название {{properties.title}}
            phone: "222 222 222", // Телефон {{properties.phone}}
        }, {
            balloonContentLayout: BalloonContentLayout // присваиваем шаблон балуну
        }, {
            "b_ID": "2", // такой же id
            hintContent: "2 заголовок" // подсказка при наведении мыхи
        }, {
            preset: "islands#darkgreenIcon" // тип и цвет маркера
        }))
        // третий маркер
        .add(new ymaps.Placemark([ //
            60.010079, 30.499259 //
        ], {
            b_ID: "3", //
            title: "3 заголовок", //
            phone: "333 333 333", //
        }, {
            balloonContentLayout: BalloonContentLayout //
        }, {
            "b_ID": "3", //
            hintContent: "3 заголовок" //
        }, {
            preset: "islands#darkgreenIcon" //
        }))
        // четвертый маркер
        .add(new ymaps.Placemark([ //
            44.653947, 39.170059 //
        ], {
            b_ID: "4", //
            title: "4 заголовок", //
            phone: "444 444 444", //
        }, {
            balloonContentLayout: BalloonContentLayout //
        }, {
            "b_ID": "4", //
            hintContent: "4 заголовок" //
        }, {
            preset: "islands#darkgreenIcon" //
        }))
        // Пятый маркер
        .add(new ymaps.Placemark([ //
            55.711316, 37.652777 //
        ], {
            b_ID: "5", //
            title: "5 заголовок", //
            phone: "555 555 555", //
        }, {
            balloonContentLayout: BalloonContentLayout //
        }, {
            "b_ID": "5",  //
            hintContent: "5 заголовок" //
        }, {
            preset: "islands#darkgreenIcon"  //
        })) //
        // Шестой маркер
        .add(new ymaps.Placemark([ //
            55.413060, 38.242279 //
        ], {
            b_ID: "6", //
            title: "6 заголовок", //
            phone: "555 555 555", //
        }, {
            balloonContentLayout: BalloonContentLayout //
        }, {
            "b_ID": "6",  //
            hintContent: "5 заголовок" //
        }, {
            preset: "islands#darkgreenIcon"  //
        })) //        
        ;
    //
    //
    //
    // обработчик клика по маркеру
    map.geoObjects.events.add('click', function (e) {
        var object = e.get('target');
        var cur_id = object.properties.get("b_ID");
        // у всех блоков карт удаляем сss-класс bg-light-check
        document.querySelectorAll('.partner_card').forEach(function (el) {
            el.classList.remove('bg-light-check');
        });
        // текущий блок отмечаем сss-классом bg-light-check
        document.getElementById('list' + cur_id).classList.add('bg-light-check');
        // прокручиваем скролл с карточками до нужной карты
        document.getElementById('list' + cur_id).scrollIntoView();
    });
    //
    //
    //
    // обработчик клика по карточке
    document.querySelectorAll('.view_on_map').forEach(elem => elem.addEventListener('click', async (el) => {
        el.preventDefault();
        // переменную берем из data-partner_id="ХХХ"
        var b_ID = elem.dataset.partner_id;
        // цикл
        map.geoObjects.each(function (item) {
            //
            if (item.properties.get('b_ID') === b_ID) {
                // перемещаем карту на нужное место
                map.panTo(item.geometry.getCoordinates(), {
                    delay: 0
                }).then(function () {
                    // ставим крупный зум
                    map.setZoom(12);
                    // открываем балун
                    // item.balloon.open();
                });
                // у всех блоков карт удаляем сss-класс bg-light-check
                document.querySelectorAll('.partner_card').forEach(function (el) {
                    el.classList.remove('bg-light-check');
                });
                // текущий блок отмечаем сss-классом bg-light-check
                document.getElementById('list' + b_ID).classList.add('bg-light-check');
            }
        });
    }));
}

// Активный элемент

var btnContainer = document.getElementById("card");

var btns = btnContainer.getElementsByClassName("card__button");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("card__button_active");
    current[0].className = current[0].className.replace(" card__button_active", "");
    this.className += " card__button_active";
  });
}
