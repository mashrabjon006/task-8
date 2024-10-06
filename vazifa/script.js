// ### 1. Bir nechta shartli tekshirish
// **Masala**: 1 dan 50 gacha bo‘lgan sonlarni tekshiring. Agar son 5 ga bo‘linadigan bo‘lsa, "5 ga bo‘linadi", 
// 3 ga bo‘linadigan bo‘lsa, "3 ga bo‘linadi", ikkalasiga ham bo‘linadigan bo‘lsa, 
// "5 va 3 ga bo‘linadi" deb ternary operator yordamida aniqlang va natijani chop eting.
// for (var i = 1; i <= 50; i++) {
//         i % 5 == 0 && i % 3 == 0 ? console.log(i + " 5 va 3 ga bolinad") 

//         :(i % 5 == 0) ? console.log(i + " 5 ga bolinad") 

//         :(i % 3 == 0) ? console.log(i + " 3 ga bolinad") : console.log(i)
// }



// ### 2. Belgilangan diapazondagi juft sonlar yig'indisini hisoblash
// **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshirib, faqat 30 va 70 orasidagi juft sonlarning yig‘indisini hisoblang.
//  Har bir son uchun bu son juft yoki toq ekanligini ternary operator yordamida aniqlang.

// var b = 0 
// for (var i = 1; i <= 100; i++){
//     var a = i >= 30 && i <= 100 ? console.log(i + ' 30 va 70 orasidagi juft sonlar ') 
//     : i % 2 == 0 ? b = i+i : console.log(b + 'yigindi')
// }

// ### 3. Musbat va toq sonlarni sanash
// **Masala**: -20 dan 20 gacha bo‘lgan sonlar orasidan faqat musbat va toq sonlarni aniqlang.
//  Ternary operator yordamida son musbat va toq bo‘lsa, ularni sanang va nechta musbat va
//  toq son borligini natijada chiqaring.

// var count = 0; 

// for (var i = -20; i <= 20; i++) {
//     (i > 0 && i % 2 !== 0) ? count++  :console.log( count)
// }

// ### 4. Maxsus sonlarni topish
// **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshiring. Agar son 2 yoki 7 ga bo‘linadigan bo‘lsa, 
// bu son "maxsus son" deb belgilang. Har bir sonni ternary operator yordamida tekshirib, natijani chop eting.

// for (var i = 1; i <= 100; i++) {
//     var a = i % 2 == 0 || i % 7 == 0 ? console.log(i + " - 2 yoki 7 ga bo'linadi") :console.log(Error)

// }

// Break continue ga oid

// ### 1. Maxsus sonni topish va tsiklni to'xtatish
// **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshiring. Agar son 25 ga teng bo‘lsa, 
// tsiklni `break` operatori yordamida to‘xtating. Bunga qadar bo‘lgan barcha sonlarni chop eting.

// for (var i = 1; i<=100; i++){
//     if (i == 25){
//         break
//     }
//     console.log(i)
// }    

// ### 2. Juft sonlarni o‘tkazib yuborish
// **Masala**: 1 dan 20 gacha bo‘lgan sonlarni tekshiring. Agar son juft bo‘lsa, 
// `continue` operatori yordamida uni o‘tkazib yuboring va faqat toq sonlarni chop eting.

// for (var i = 1; i<=20; i++){
//     if (i % 2 == 0){
//         continue
//     }
//     console.log(i)
// }    

// ### 3. Ma'lum diapazondagi sonlarni sanash
// **Masala**: 1 dan 50 gacha bo‘lgan sonlarni tekshiring. Agar son 30 dan katta bo‘lsa, 
// tsiklni `break` operatori yordamida to‘xtating. Faqat 10 va 30 orasidagi sonlarni chop eting, qolganlarni
//  `continue` bilan o‘tkazib
//  yuboring.

// for (var i = 1; i <= 50; i++) {
//     if (i > 30) {
//         break
//     }
//     if (i < 10 && i > 30) {
//         continue
//     }
//     console.log(i)  
// }



// Switch case ga oid

// ### 1. Haftaning kunini aniqlash
// **Masala**: 1 dan 7 gacha bo‘lgan raqamlarni kiritganingizda, mos ravishda haftaning kunini 
// (`1 - Dushanba`, `2 - Seshanba` va hokazo) switch...case orqali aniqlang va chop eting.

// var day = +prompt("Haftaning kunini kiriting :")

// switch (day) {
//     case 1:
//         console.log("1 - Dushanba")
//         break;
//     case 2:
//         console.log("2 - Seshanba")
//         break;
//     case 3:
//         console.log("3 - Chorshanba")
//         break;
//     case 4:
//         console.log("4 - Payshanba")
//         break;
//     case 5:
//         console.log("5 - Juma")
//         break;
//     case 6:
//         console.log("6 - Shanba")
//         break;
//     case 7:
//         console.log("7 - Yakshanba")
//         break;
//     default:
//         console.log("mavjud emas.")
// }


// ### 2. Oylik faslni aniqlash
// **Masala**: 1 dan 12 gacha bo‘lgan raqamlarni kiritganingizda, bu raqam qaysi oyga mos kelishini aniqlang va
//  bu oy qaysi faslga tegishli ekanligini switch...case orqali chop eting (`1 - Qish`, `5 - Bahor` va hokazo).

// var month = prompt("Oyni kiriting (1 dan 12 gacha):")

// switch (parseInt(month)) {
//     case 1:
//     case 2:
//     case 12:
//         console.log(" - Qish")
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log(" - Bahor")
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log(" - Yoz")
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log(" - Kuz")
//         break;
//     default:
//         console.log("mavjud emas")
// }


// ### 3. Baholash tizimi
// **Masala**: 1 dan 5 gacha bo‘lgan raqamlarni kiriting. Ushbu raqamga mos ravishda bahoni 
// (`1 - Juda yomon`, `2 - Yomon`, `3 - Qoniqarli`, `4 - Yaxshi`, `5 - A'lo`) switch...case orqali aniqlang va chop eting.

// var baho = prompt("baholang")

// switch (baho) {
//     case 1:
//         console.log('juda yomon')
//         break
//     case 2:
//         console.log("yomon");
//     case 3:
//         console.log('qoniqarli')
//         break
//     case 4:
//         console.log("yaxshi")
//     case 5:
//         console.log('alo')
//     default:
//         break
// }

// ### 4. Elektr energiyasi tarifi
// **Masala**: Tariflar rejasiga ko‘ra, foydalanuvchi 1 dan 3 gacha raqam kiritsin. `1 - Ekonom`, `2 - Standart`,
//  `3 - Premium` tariflaridan birini tanlaganini switch...case orqali aniqlang va tarif nomini chop eting.

// Foydalanuvchidan tarif raqamini kiritishni so'raymiz
// var tariff = prompt("Tarifni tanlang (1, 2, 3)")

// switch (parseInt(tariff)) {
//     case 1:
//         console.log(" Ekonom")
//         break;
//     case 2:
//         console.log(" Standart")
//         break;
//     case 3:
//         console.log(" Premium")
//         break;
//     default:
//         console.log("mavjud emas")
// }


// ### 5. Meva narxini aniqlash
// **Masala**: Foydalanuvchi 1 dan 4 gacha bo‘lgan raqamlarni kiritsin. Har bir raqamga mos ravishda bir meva tanlang
//  (`1 - Olma`, `2 - Apelsin`, `3 - Banan`, `4 - Uva`) va ularning narxini switch...case orqali chop eting.

// Foydalanuvchidan meva raqamini kiritishni so'raymiz
// var fruit = prompt("Meva tanlang (1 - Olma, 2 - Apelsin, 3 - Banan, 4 - Uva):")

// switch (parseInt(fruit)) {
//     case 1:
//         console.log("Olma - 8000 so'm")
//         break;
//     case 2:
//         console.log("Apelsin - 10000 so'm")
//         break;
//     case 3:
//         console.log("Banan - 15000 so'm")
//         break;
//     case 4:
//         console.log("Uva - 6000 so'm")
//         break;
//     default:
//         console.log("mavjud emas")
// }


// ### 6. Foydalanuvchi parolini tasdiqlash
// **Masala**: Foydalanuvchi 1 dan 3 gacha bo‘lgan variantlardan birini kiritsin. `1 - Parolni tiklash`,
//  `2 - Parolni o'zgartirish`, `3 - Chiqish` variantlarini switch...case orqali aniqlang va tegishli xabarni chop eting.

// var action = prompt("Parol bilan bog'liq variantni tanlang (1 - Parolni tiklash, 2 - Parolni ogartirish, 3 - Chiqish)")

// switch (parseInt(action)) {
//     case 1:
//         console.log("Parol tiklash jarayoni boshlanadi.")
//         break;
//     case 2:
//         console.log("Parol ozgartirish jarayoni boshlanadi.")
//         break;
//     case 3:
//         console.log("Chiqish.")
//         break;
//     default:
//         console.log("mavjud emas.")
// }


// While, do…while. Ushbu masalalarni har ikki operator orqali ishlansin

// ### 1. 1 dan 10 gacha bo‘lgan sonlarni chiqarish
// **Masala**: 1 dan 10 gacha bo‘lgan sonlarni `while` sikli yordamida chiqarib bering.

// var i = 1

// while( i <=10){

//     console.log(i)
//      i++
// }

// ### 2. 10 dan 1 gacha bo‘lgan sonlarni teskari tartibda chiqarish
// **Masala**: 10 dan 1 gacha bo‘lgan sonlarni teskari tartibda `while` sikli yordamida chop eting.

// var i = 10

// while( i >=1){

//     console.log(i)
//      i--
// }

// ### 3. Foydalanuvchi kiritgan musbat sonni qabul qilish
// **Masala**: Foydalanuvchi musbat son kiritmaguncha, undan son kiritishni talab qiladigan `while` sikli tuzing.

// let a = +prompt('Son kiriting: (musbat)');
// while (a < 0) {
//   console.log('Musbat son kiriting');
//   a = +prompt('Son kiriting: (musbat)');
// }

// ### 4. Juft sonlarni chiqarish
// **Masala**: 1 dan 20 gacha bo‘lgan juft sonlarni `while` sikli yordamida chiqarib bering.

// var i = 1

// while( i <=20){
//    var a = i % 2 == 0
//     console.log(a)
//     i++
// }

// ### 5. Sonning raqamlari yig‘indisini topish
// **Masala**: Berilgan sonning barcha raqamlarini ajratib, ularning yig‘indisini `while` sikli yordamida toping. 
// Masalan, 123 soni uchun yig‘indi 1 + 2 + 3 bo‘lsin.
//  1 - usul
// var number = parseInt(prompt('Son kiriting:'))
// var sum = 0

// while (number > 0) { 
//     sum += number % 10 
//     number = Math.floor(number / 10)
// }

// console.log( sum)

// 2-usul

// var number = prompt('Son kiriting:')
// var sum = 0
// for (var i = 0; i < number.length; i++) { 
//     sum += parseInt(number[i]) 
// }

// console.log( sum)


// ### 6. Sonni 2 ga bo'lib borish
// **Masala**: Foydalanuvchi son kiritsin. `while` sikli yordamida ushbu sonni 2 ga bo‘lib boring va
//  natijani chop eting. Sikl son 1 dan kichik bo‘lgunga qadar davom etsin.

// var b = +prompt('')

// while (b >= 1) { 
//     console.log(b)
//     b /= 2
// }


// ### 7. Sonning raqamlari orasidan toq raqamlarni chiqarish
// **Masala**: Berilgan sonning barcha raqamlarini tekshirib, faqat toq raqamlarini `while` sikli yordamida chop eting.

// var a = +prompt('Son kiriting:')
// var i = 0

// while (i < a.length) { 
//      if (b % 2 === 1) {
//         console.log(b)
//     }

//     i++
// }


// ### 8. Sonlarni 3 ga bo‘linadigan holatda chiqarish
// **Masala**: Foydalanuvchi boshlang'ich son va yakuniy son kiritadi. `while` sikli yordamida ushbu sonlar orasidagi
//  faqat 3 ga bo‘linadigan sonlarni chop eting. Barcha boshqa sonlarni o‘tkazib yuboring.

// var start = +prompt('Birinchi sonni kiriting:') 
// var end = +prompt('oxigo sonni kiriting:') 

// var b = start 

// while (b <= end) { 
//     if (b % 3 === 0) { 
//         console.log(b)
//     }
//     b++
// }


// ### 9. Raqamlarni teskari tartibda chiqarish
// **Masala**: Foydalanuvchi biror son kiritsin. Ushbu sonning raqamlarini teskari tartibda 
// (`1234` ni `4321` ko‘rinishida) `while` sikli yordamida chop eting.
var a = +prompt()
var i = a

while (i >= 0) {
    console.log(i)
    i--
}


// ### 10. Fibonachchi ketma-ketligini topish
// **Masala**: Foydalanuvchi berilgan son bo‘yicha Fibonachchi ketma-ketligini (0, 1, 1, 2, 3, 5...) aniqlab,
//  shu ketma-ketlikdagi sonlarni `while` sikli yordamida chop eting. Ketma-ketlikda kiritilgan son qiymatidan oshmasligi
//  kerak.


// ### 11. Sonning raqamlari ko‘paytmasini topish
// **Masala**: Foydalanuvchi bir son kiritsin. Ushbu sonning barcha raqamlarini ajratib, ularning ko‘paytmasini
// (masalan, 234 uchun 2 * 3 * 4) `while` sikli yordamida toping.


// var number = prompt('Son kiriting:')
// var product = 1
// var i = 0; 
// while (i < number.length) { 
//     var digit = parseInt(number[i]); 

//     if (digit !== 0) { 
//         product *= digit; 
//     }
// }

// console.log('Raqamlar ko‘paytmasi: ' + product); 


