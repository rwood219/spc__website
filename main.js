
//image slider sources
const bannerImages = [
  '/resources/accessories/pumps bells misc/wide crop bag.jpg',
  "/resources/accessories/pumps bells misc/wide crop locks.jpg",
  "/resources/accessories/pumps bells misc/crop mini pump.jpg"
];

//SET BANNER IMAGES
document.querySelector('.bannerImageOne').src = bannerImages[1];
document.querySelector('.bannerImageTwo').src = bannerImages[0];
document.querySelector('.bannerImageThree').src = bannerImages[2];

//sun bike image sources
const sunDrifterImg = [];

//pure bike image sources
const pureBikeImg = [];

//SET STORE HOURS
$('.sunday-hours').html('SUNDAY 10-5');
$('.monday-hours').html('MONDAY 10-7');
$('.tueday-hours').html('TUESDAY 10-7');
$('.wednesday-hours').html('WEDNESDAY 10-7');
$('.thursday-hours').html('THURSDAY 10-7');
$('.friday-hours').html('FRIDAY 10-7');
$('.saturday-hours').html('SATURDAY 9-7');

//set phone number
$('.phone-number').html('(609) 365 - 2959')


console.log('conn')
