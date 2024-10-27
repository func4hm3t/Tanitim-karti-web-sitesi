var kisiler=[
    {
        name : "Ahmet Sırrı SAVAŞ",
        image :"resimler/ben.jpg",
        text:"ÖĞRENCİ",
        face:"resimler/face.png",
        link1:"https://www.facebook.com/profile.php?id=100029410629345",
        link2:"https://www.instagram.com/svs.ahmt/",
        link3:"https://www.linkedin.com/in/ahmet-s%C4%B1rr%C4%B1-sava%C5%9F-115a2b246/"
    },
    {
        name :"İbrahim Sinan AKBULUT",
        image :"resimler/sinan.png",
        text:"ÖĞRENCİ",
        face:"resimler/twitter.png",
        link1:"https://twitter.com/sinanakblutt",
        link2:"https://www.instagram.com/sinan_akbultt/",
        link3:"https://www.linkedin.com/in/ibrahim-sinan-akbulut-3028b7257/"
    },
    {
        name: "Bilal Kaan AK",
        image:"resimler/kaan.jpg",
        text:"ÖĞRENCİ",
        face:"resimler/spofity.png",
        link1:"https://open.spotify.com/playlist/2srUmzC44nFgN3iZRdtidL?si=VLGbElBhS-y9D9H8wsb5VA",
        link2:"https://www.instagram.com/kaan_akkk/",
        link3:"https://www.linkedin.com/in/bilal-kaan-ak-56a79925a/"
    },
    {
        name:"Muhammed AKSU",
        image:"resimler/aksu.jpg",
        text:"ÖĞRENCİ" ,
        face:"resimler/twitter.png"  ,   
        link1:"https://twitter.com/sinanakblutt" ,
        link2:"https://www.instagram.com/muhammet_.aksu/",
        link3:"https://www.linkedin.com/in/muhammet-aksu-0355b825a/"
    },
    {
        name: "Muhammed Furkan ÇONOGLU",
        image:"resimler/furkan.jpg",
        text: "ÖĞRENCİ",
        face:"resimler/twitter.png",
        link1:"https://twitter.com/Furkann_Cngll",
        link2:"https://www.instagram.com/furkann_cngll/",
        link3:"https://www.linkedin.com/in/muhammed-furkan-%C3%A7ono%C4%9Flu-a98436258/"
    },
    {
        name : "Özcan ERSAN",
        image :"resimler/özcan.jpg",
        text:"ÖĞRENCİ",
        face:"resimler/spofity.png",
        link1:"https://open.spotify.com/user/213de5valkolrt7yam7zf43ja?si=KlFRyWMQQc2iffh19ixCCg ",
        link2:"https://www.instagram.com/ozcan.png/",
        link3:"https://www.linkedin.com/in/%C3%B6zcan-ersan-653b13274/"
    }
];
var index=0;
var uzunluk=kisiler.length;
disari(index);
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    disari(index);
    console.log(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click',function() {
        index++;
        disari(index);
        console.log(index);
});
function disari(i){
    index=i;
    if(i<0)
    {
        index=uzunluk-1;
    }
    if(i>=uzunluk)
    {
        index=0;
    }
    document.querySelector('.isim').textContent=kisiler[index].name;
    document.querySelector('.resim').setAttribute('src',kisiler[index].image);
    document.querySelector('.text').textContent=kisiler[index].text;
    document.querySelector('#face').setAttribute('src',kisiler[index].face);
    document.querySelector('.facer').setAttribute('href',kisiler[index].link1);
    document.querySelector('.instan').setAttribute('href',kisiler[index].link2);
    document.querySelector('.linkdin').setAttribute('href',kisiler[index].link3);
}