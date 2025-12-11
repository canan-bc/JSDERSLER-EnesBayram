// let sayi = prompt("1-5 arası sayı giriniz");

// switch (sayi) {

//     case "1":
//         console.log("Girilen sayı  birdir");
//         break;

//     case "2":
//         console.log("Girilen sayi ikidir");
//         break;

//     case "3":
//         console.log("Girilen sayi üçdür");
//         break;


//     case "4":
//         console.log("Girilen sayi dörttür");
//         break;


//     case "5":
//         console.log("Girilen sayi beştir");
//         break;

//     default:
//         console.log("istenilen değer aralığında değil");
//         break;
// }











// let yeniSatir="\r\n";
// let metin="1-Pazartesi"+yeniSatir
// +"2-Salı"+yeniSatir
// +"3-Çarşamba"+yeniSatir
// +"4-Perşembe"+yeniSatir
// +"5-Cuma"+yeniSatir
// +"6-Cumartesi"+yeniSatir
// +"7-Pazar"+yeniSatir
// +"Lütfen bir seçim yapınız";

// let deger=prompt("metin");
// switch(deger)
// {
//     case"1":
//     console.log("Pazartesi Günü");
//     break;
    
//     case "2":
//         console.log("Salı");
//     break;

//        case "3":
//         console.log("Çarşamba");
//     break;

//        case "4":
//         console.log("perşembe");
//     break;

//        case "5":
//         console.log("Cuma");
//     break;

//        case "6":
//         console.log("Cumartesi");
//     break;

//        case "7":
//         console.log("Pazar");
//     break;

//     default:
//         console.log("Geçerli bir değer giriniz");
//         break;


// }












//ATM UYGULAMASI
// let yeniSatir="\r\n";
// let bakiye=1000;
// let metin="1-Bakiye Görüntüleme"+yeniSatir
// +"2-Para Çekme"+yeniSatir
// +"3-Para Yatırma"+yeniSatir
// +"4-Çıkış"+yeniSatir
// +"Lütfen bir değer seçiniz";


// let deger=prompt(metin);
// switch(deger){

// case "1":
//     alert("Bkiyeniz:"+bakiye);
//     break;

//     case"2":
//     let cekilecekTutar=Number(prompt("Çekmek İstediğiniz Tutar"));
//     if (cekilecekTutar<bakiye){

//     }
//     else{
//         alert("Bakiyenizden fazla tutar çekemezsiniz"+yeniSatir
//         +"Bakiyeniz : "+bakiye +" "+"Çekilcek Tutar : "+cekilecekTutar);  
//     }
//     break;

//      case "3":
//         let yatirilacakTutar=Number(prompt("Yatırılacak Tutarı Giriniz :"));
//         bakiye=bakiye+yatirilacakTutar;
//         alert=("Güncel Bakiyeniz: " + bakiye );
//         break;

//         case "4":
//             console.log("Sistemden Çıkış Ypılmıştır ...");
//         break;
        

//   default:
//     console.log("Lütfen 1-4 arasında değer giriniz !");
//     break;

// }