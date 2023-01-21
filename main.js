
//image slider sources
const bannerImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEMiOEVmqytULT7a-0yVqlVMFlLiZhJcGwQ&usqp=CAU',
  "/resources/accessories/pumps bells misc/wide crop locks.jpg",
  "/resources/accessories/pumps bells misc/crop mini pump.jpg",
  "/resources/engwee/engine-pro.jpg"
];

//SET BANNER IMAGES
document.querySelector('.bannerImageOne').src = 'https://productimages.qbp.com/6SPsvm45/prodxl/BK9540.jpg';
document.querySelector('.bannerImageTwo').src = 'https://images.jbi.bike/2200/670731.jpg';
document.querySelector('.bannerImageThree').src = 'https://electricbikecompany.com/wp-content/uploads/2019/05/home-model-c-VIN-SGR.jpg';

//sun bike image sources
const sunDrifterImg = [
  'https://images.jbi.bike/2200/670731.jpg',
  'https://images.jbi.bike/2200/670732.jpg',

];

//pure bike image sources
const pureBikeImg = [];

//SET STORE HOURS


$('.sunday-hours').html('SUNDAY CLOSED');
$('.monday-hours').html('MONDAY CLOSED');
$('.tuesday-hours').html('TUESDAY CLOSED');
$('.wednesday-hours').html('WEDNESDAY 10-5');
$('.thursday-hours').html('THURSDAY 10-5');
$('.friday-hours').html('FRIDAY 10-5');
$('.saturday-hours').html('SATURDAY 10-5');

//set phone number
$('.phone-number').html('(609) 365 - 2959')

// add winter hours div

document.querySelector('.hours').appendChild(document.createTextNode("WINNTER HOURS"));



console.log('conn')
