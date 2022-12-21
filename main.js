
//image slider sources
const bannerImages = [
  '/resources/accessories/pumps bells misc/wide crop bag.jpg',
  "/resources/accessories/pumps bells misc/wide crop locks.jpg",
  "/resources/accessories/pumps bells misc/crop mini pump.jpg",
  "/resources/engwee/engine-pro.jpg"
];

//SET BANNER IMAGES
document.querySelector('.bannerImageOne').src = bannerImages[3];
document.querySelector('.bannerImageTwo').src = bannerImages[0];
document.querySelector('.bannerImageThree').src = bannerImages[2];

//sun bike image sources
const sunDrifterImg = [];

//pure bike image sources
const pureBikeImg = [];

//SET STORE HOURS
$('.sunday-hours').html('SUNDAY 10-5');
$('.monday-hours').html('MONDAY 10-6');
$('.tuesday-hours').html('TUESDAY 10-6');
$('.wednesday-hours').html('WEDNESDAY 10-6');
$('.thursday-hours').html('THURSDAY 10-6');
$('.friday-hours').html('FRIDAY 10-6');
$('.saturday-hours').html('SATURDAY 10-7');

//set phone number
$('.phone-number').html('(609) 365 - 2959')


console.log('conn')
