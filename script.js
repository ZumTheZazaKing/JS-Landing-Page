var time = setInterval(myTimer, 0);

function myTimer() {

    var d = new Date();
    var t = d.toLocaleTimeString();

  document.getElementById("time").innerHTML = t;

}

var d = new Date();
  
var n = d.getHours();

switch (n){

    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:

        document.body.style.backgroundImage = 'url(morning.jpg)';

        document.getElementById("greeting").innerHTML= 'Good Morning, ';

        document.getElementById("container").style.color = 'white';

        break;

    case 13:
    case 14:
    case 15:
    case 16:
    case 17:

        document.body.style.backgroundImage = 'url(afternoon.jpg)';

        document.getElementById("greeting").innerHTML= 'Good Afternoon, ';

        document.getElementById("container").style.color = 'black';

        break;

    case 18:
    case 19:
    case 20:

        document.body.style.backgroundImage = 'url(evening.jpg)';

        document.getElementById("greeting").innerHTML= 'Good Evening, ';

        document.getElementById("container").style.color = 'black';

        break;

    case 21:
    case 22:
    case 23:

        document.body.style.backgroundImage = 'url(night.jpg)';

        document.getElementById("greeting").innerHTML= 'Good Night, ';

        document.getElementById("container").style.color = 'white';

        break;

}


localStorage.setItem('name', 'Master');

document.getElementById('name').innerText = localStorage.getItem('name');


function generateQuote(){

    let quoteText = document.getElementById("quote");

    let quotes = [

        'Love For All, Hatred For None.<br>- Khalifatul Masih III',
        'Change the world by being yourself.<br>– Amy Poehler',
        'Every moment is a fresh beginning. <br>– T.S Eliot',
        'Never regret anything that made you smile. <br>– Mark Twain',
        'Die with memories, not dreams.<br> – Unknown',
        'Aspire to inspire before we expire.<br> – Unknown',
        'Everything you can imagine is real. <br>– Pablo Picasso',
        'Simplicity is the ultimate sophistication.<br> – Leonardo da Vinci',
        'Whatever you do, do it well.<br> – Walt Disney',
        'What we think, we become.<br> – Buddha',
        'All limitations are self-imposed.<br> – Oliver Wendell Holmes',
        'Tough times never last but tough people do.<br> – Robert H. Schiuller',
        'Problems are not stop signs, they are guidelines. <br>– Robert H. Schiuller',
        'One day the people that don’t even believe in you will tell everyone how they met you.<br> – Johnny Depp',
        'If I’m gonna tell a real story, I’m gonna start with my name.<br> – Kendrick Lamar',
        'If you tell the truth you don’t have to remember anything. <br>– Mark Twain',
        'Have enough courage to start and enough heart to finish.<br> – Jessica N. S. Yourko',
        'Hate comes from intimidation, love comes from appreciation. <br>– Tyga',
        'I could agree with you but then we’d both be wrong.<br> – Harvey Specter',
        'Oh, the things you can find, if you don’t stay behind.<br> – Dr. Seuss',
        'Determine your priorities and focus on them.<br> – Eileen McDargh',
        'Be so good they can’t ignore you. <br>– Steve Martin',
        'Dream as if you’ll live forever, live as if you’ll die today. <br>– James Dean',
        'Yesterday you said tomorrow. Just do it. <br>– Nike',
        'I don’t need it to be easy, I need it to be worth it. <br>– Lil Wayne'

    ]

    let quotePicker = Math.floor(Math.random()*Math.floor(quotes.length));

    quoteText.innerHTML = quotes[quotePicker];

}

generateQuote();