module.exports = function () {
    const $maps = $("#map, #ya-map, .ya-map");

    if ($maps.length) {
        const url = "https://api-maps.yandex.ru/2.1/?&lang=ru_RU";
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        $("body").append(script);

        // Ждем пока загрузится скрипт и когда загрузился, вызываем его.
        const id = setInterval(function () {
            if (ymaps) {
                ymaps.ready(init);
                clearInterval(id);
            }
        }, 500);

        function init() {

            $maps.each(function () {
                // Создание карты.
                const mapNode = this;
                const $map = $(mapNode);

                const [pointLng, pointLat] = [
                    $map.data("map-point-lng"),
                    $map.data("map-point-lat")
                ];

                const [toPointLng, toPointLat] = [
                    $map.data("map-to-point-lng"),
                    $map.data("map-to-point-lat"),
                ];

                const hasPoint = pointLng && pointLat;
                const hasToPoint = toPointLng && toPointLat;

                const mapData = {
                    center: [
                        $map.data("map-center-lng") || 56.008420,
                        $map.data("map-center-lat") || 40.493787,
                    ],

                    zoom: $map.data("map-zoom") || 7.275115259342524,

                    controls: hasToPoint ? ["routePanelControl"] : []
                };

                let myMap = new ymaps.Map(mapNode, mapData);
                myMap.behaviors
                    .disable(["scrollZoom", "drag"]);

                if (hasPoint) {
                    myMap.geoObjects
                        .add(new ymaps.Placemark([pointLng, pointLat]));
                }

                if (hasToPoint) {
                    const control = myMap.controls.get('routePanelControl');

                    control.routePanel.state.set({
                        fromEnabled: true,
                        // from: 'Москва, Льва Толстого 16',
                        toEnabled: false,
                        to: [toPointLng, toPointLat]
                    });
                }

                myMap.behaviors.disable('drag');
            });
        }
    }
};
