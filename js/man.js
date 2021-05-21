//APIのドキュメントを必ず読むこと
// リクエストを送るurlを準備
const books = 'https://www.googleapis.com/books/v1/volumes'; //goole books
const apod = 'https://api.nasa.gov/planetary/apod?'; //nasa apod


//今日の宇宙の写真
axios.get(apod)
    .then(function (respons) {
        console.log(respons.data);

        const dataApodimg = [];
        dataApodimg.push(`<img src="${respons.data.url}">`);
        const dataApod = [];
        dataApod.push(`<h2>${respons.data.date}</h2><h2>${respons.data.title}</h2><p>${respons.data.explanation}</p>`);
        $('#apodImg').html(dataApodimg);
        $('#apodText').html(dataApod);
    })
    .catch()
    .finally()

//過去の宇宙の写真
function apodImg() {
    axios.get(`${apod}&count=3`)
        .then(function (respons) {
            console.log(respons);

            const dataApod = [];
            respons.data.forEach(function (x) {
                dataApod.push(`<div class="apodR_box"><img src="${x.url}"><p>${x.date}</p><p>${x.title}</p></div>`);
            });
            $('#apodR').html(dataApod);
        })
        .catch()
        .finally()
}
apodImg();

//ボタンを押すとランダムにでる
$('#apod_btn').on('click', function () {
    apodImg();
});






//宇宙にいる人の数
axios.get('http://api.open-notify.org/astros.json')
    .then(response => {
        const number = [];
        number.push(`<p>現在、宇宙にいるのは${response.data.number}人です <i class="fas fa-satellite fa-lg"></i> <i class="fas fa-globe fa-lg"></i></p>`);
        $('#number').html(number);
    });




// //ISSの場所
// const map = L.map('map').setView([0, 0], 2);
// // 地図に配置するピン(アイコン)を定義
// const icon = L.icon({
//     iconUrl: 'space_iss.png',
//     iconSize: [30, 30],
//     iconAnchor: [15, 15],
// });
// // 地図上のサークルスタイルを定義
// const circle_style = {
//     color: '#c22',
//     opacity: .3,
//     weight: 1,
//     fillColor: '#c22',
//     fillOpacity: .1,
// };
// // 地図上にピン(アイコン)を描画
// const iss = L.marker([0, 0], { icon }).addTo(map);
// // 地図上にサークルを描画
// const isscirc = L.circle([0, 0], 2200e3, circle_style).addTo(map);
// // 地図を描画
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
//     maxZoom: 4,
// }).addTo(map);
// function moveISS() {
//     axios
//         .get('http://api.open-notify.org/iss-now.json')
//         .then(response => {
//             const lat = response.data.iss_position.latitude;
//             const lon = response.data.iss_position.longitude;
//             iss.setLatLng([lat, lon]);
//             isscirc.setLatLng([lat, lon]);
//             map.panTo([lat, lon], animate = true);
//         });
//     setTimeout(moveISS, 5000);
// }
// moveISS();







//うちゅうの本
axios.get(`${books}?q=intitle:うちゅう&maxResults=40&orderBy=newest`)
    .then(function (respons) {
        console.log(respons.data.items);
        const data = [];
        respons.data.items.forEach(function (x) {
            data.push(`<a href="${x.volumeInfo.infoLink}" target="_blank"><img src="${x.volumeInfo?.imageLinks?.thumbnail || ''}"></a>`);
        });
        $('#books').html(data);

    })
    .catch()
    .finally()


// 本の検索 ボタンクリック時にデータを取得しよう
$('#btn').on('click', function () {
    axios.get(`${books}?q=intitle:${$q.value},subject:science&maxResults=40&orderBy=newest`)
        .then(function (respons) {
            //consoleには、最初に全部表示して(respons)、必要なデータを見つけて表示する(respons.data.items)
            console.log(respons.data.items);

            //画面にタイトルなどの情報表示 consoleでデータを探して表示する
            const data = [];
            respons.data.items.forEach(function (x) {
                // data.push(`<p>${x.volumeInfo.title}</p><img src="${x.volumeInfo?.imageLinks?.thumbnail || ''}">`);
                data.push(`<a href="${x.volumeInfo.infoLink}" target="_blank"><img src="${x.volumeInfo?.imageLinks?.thumbnail || ''}"></a>`);
            });
            $('#searchBooks').html(data);
        })
        .catch()
        .finally()
});

//ボタンを押すと出てくる
$('#star').on('click', function () {
    axios.get(`${books}?q=intitle:宇宙,subject:science&maxResults=40&orderBy=newest`)
        .then(function (respons) {
            console.log(respons.data.items);
            const data = [];
            respons.data.items.forEach(function (x) {
                // data.push(`<p>${x.volumeInfo.title}</p><img src="${x.volumeInfo?.imageLinks?.thumbnail || ''}">`);
                data.push(`<a href="${x.volumeInfo.infoLink}" target="_blank"><img src="${x.volumeInfo?.imageLinks?.thumbnail || ''}"></a>`);
            });
            $('#searchBooks').html(data);
        })
        .catch()
        .finally()
});
$('#astronaut').on('click', function () {
    axios.get(`${books}?q=intitle:地球,subject:science&maxResults=40&orderBy=newest`)
        .then(function (respons) {
            console.log(respons.data.items);
            const data = [];
            respons.data.items.forEach(function (x) {
                // data.push(`<p>${x.volumeInfo.title}</p><img src="${x.volumeInfo?.imageLinks?.thumbnail || ''}">`);
                data.push(`<a href="${x.volumeInfo.infoLink}" target="_blank"><img src="${x.volumeInfo?.imageLinks?.thumbnail || ''}"></a>`);
            });
            $('#searchBooks').html(data);
        })
        .catch()
        .finally()
});
$('#meteor').on('click', function () {
    axios.get(`${books}?q=intitle:図鑑,subject:science&maxResults=40&orderBy=newest`)
        .then(function (respons) {
            console.log(respons.data.items);
            const data = [];
            respons.data.items.forEach(function (x) {
                // data.push(`<p>${x.volumeInfo.title}</p><img src="${x.volumeInfo?.imageLinks?.thumbnail || ''}">`);
                data.push(`<a href="${x.volumeInfo.infoLink}" target="_blank"><img src="${x.volumeInfo?.imageLinks?.thumbnail || ''}"></a>`);
            });
            $('#searchBooks').html(data);
        })
        .catch()
        .finally()
});