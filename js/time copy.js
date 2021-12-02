const timeNow = document.querySelector('.time');
const dateNow = document.querySelector('.date')
const htmlLang = document.getElementsByTagName('html')[0].getAttribute('lang');
const selectLang = document.querySelector('.lang')

let currentLang = document.documentElement


function getZero(num) {
    if (num < 10) {
        return `0${num}`
    }
    return num
}

function setDigital(lang = 'en') {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const weekDay = now.getDay();
    const date = now.getDate(); 
    const currentMonth = now.getMonth();

    // const days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday'];
    // const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' , 'December'];
    const time = `${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)}`
    timeNow.textContent = `${time}`
    // digitalWeekDay.textContent = `${days[weekDay]},`
    // digitalDate.textContent = `${date} ${month[currentMonth]}`
    // dateNow.textContent = `${days[weekDay]}, ${month[currentMonth]} ${date}`
    let options = { weekday: 'long', month: 'long', day: 'numeric' }
    dateNow.textContent = now.toLocaleString(`${lang}-US`, options)

    setTimeout(() => {
        setDigital(selectLang.value)
    }, 1000);
    greet(selectLang.value)
}

//greet
const greetings = document.querySelector('.greeting')
const nameInput = document.querySelector('.name')

const greeting = {
    'greetMorning' : {
        'en' : 'Good morning',
        'ru' : 'Доброе утро'
    },
    'greetAfternoon' : {
        'en' : 'Good afternoon',
        'ru' : 'Добрый день'
    },
    'greetEvening' : {
        'en' : 'Good evening',
        'ru' : 'Добрый вечер'
    },
    'greetNight' : {
        'en' : 'Good night',
        'ru' : 'Спокойной ночи'
    }
}

function greet(lang = 'en') {
    let now = new Date()
    const hours = now.getHours();

    if (hours >= 6 && hours < 12) {
        greetings.textContent = `${greeting.greetMorning[lang]},`
    } else if (hours >= 12 && hours < 18) {
        greetings.textContent = `${greeting.greetAfternoon[lang]},`
    } else if (hours >= 18 && hours < 24) {
        greetings.textContent = `${greeting.greetEvening[lang]},`
    } else if (hours >= 0 && hours < 6) {
        greetings.textContent = `${greeting.greetNight[lang]}`
    }
    
    // nameInput.value = localStorage.getItem('name')
    // nameInput.addEventListener('change', function() {
    //     localStorage.setItem('name', this.value)
    // })   
}
setDigital()
function setName() {
    nameInput.value = localStorage.getItem('name')
    nameInput.addEventListener('change', function() {
        localStorage.setItem('name', this.value)
    })  
}

if (localStorage.getItem('name')) {
    nameInput.value = localStorage.getItem('name')
}
nameInput.addEventListener('change', function() {
        localStorage.setItem('name', this.value)
})
nameInput.addEventListener('submit', function() {
        localStorage.setItem('name', this.value)
})

const settingsShow = document.querySelector('.settings-show')
const settingLanguage = document.querySelector('.settings-lang')
const settingweather = document.querySelector('.settings-weather')
const settingquote = document.querySelector('.settings-quote')
const settingTime = document.querySelector('.settings-time')
const settingDate = document.querySelector('.settings-date')
const settingGreeting = document.querySelector('.settings-greeting')

const settingsLAng = {
    'show' : {
        'en' : 'show',
        'ru' : 'Показать'
    },
    'language' : {
        'en' : 'Language',
        'ru' : 'Язык'
    },
    'quote' : {
        'en' : 'Quote',
        'ru' : 'Цитата'
    },
    'time' : {
        'en' : 'Time',
        'ru' : 'Время'
    },
    'date' : {
        'en' : 'Date',
        'ru' : 'Дата'
    },
    'greeting' : {
        'en' : 'Greeting',
        'ru' : 'Приветствие'
    },
}


function changeLanguage() {
    currentLang.setAttribute('lang', selectLang.value)
    setDigital(selectLang.value)
    getWeather(selectLang.value)
    if (selectLang.value == 'ru') {
        if (city.value == 'Minsk') {
            city.value = 'Минск'
        }
    }
    getQuotes(selectLang.value)
}
selectLang.addEventListener('change', changeLanguage)

// slider 

const next = document.querySelector('.slide-next')
const prev = document.querySelector('.slide-prev')

const now = new Date()
const hours = now.getHours();
let timeDay = ''
let length = 20

if (hours >= 6 && hours < 12) {
    timeDay = 'morning'
} else if (hours >= 12 && hours < 18) {
    timeDay = 'afternoon'
} else if (hours >= 18 && hours < 24) {
    timeDay = 'evening'
} else if (hours >= 0 && hours < 6) {
    timeDay = 'night'
}

let rand = Math.floor((Math.random() * 20) + 1)
document.body.style = `background-image:url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeDay}/${getZero(rand)}.jpg");
background-size: cover;`
let counter = rand

function getZero(num) {
    if (num < 10) {
        return `0${num}`
    }
    return num
}


function changeSlide(dayOfTime, num) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayOfTime}/${getZero(num)}.jpg`
    img.onload = () => {      
      document.body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayOfTime}/${getZero(num)}.jpg)`
    }; 
    // document.body.style = `
    // background-image:url("https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayOfTime}/${getZero(num)}.jpg");
    // background-size: cover;
    // `
}

function nextSlide() {
    if (counter === length) {
        counter = 1
    }
    changeSlide(timeDay,counter)
}
function prevSlide() {
    if (counter <= 0) {
        counter = length - 1
    }

    changeSlide(timeDay,counter)
}

next.addEventListener('click', () => {
    counter++
    nextSlide()
})
prev.addEventListener('click', () => {
    counter--
    prevSlide()
})



// player 
const play = document.querySelector('.play')
const nextSong = document.querySelector('.play-next')
const prevSong = document.querySelector('.play-prev')
const audioList = document.querySelector('.play-list');


const playList = [
    {      
      title: 'Aqua Caelestis',
      src: './assets/sounds/Aqua Caelestis.mp3',
      duration: '00:58'
    },  
    {      
      title: 'Ennio Morricone',
      src: './assets/sounds/Ennio Morricone.mp3',
      duration: '03:50'
    },
    {      
      title: 'River Flows In You',
      src: './assets/sounds/River Flows In You (mp3cut.net).mp3',
      duration: '03:50'
    },
    {      
      title: 'Summer Wind',
      src: './assets/sounds/Summer Wind.mp3',
      duration: '03:50'
    },
  ]

playList.forEach(el => {
    let li = document.createElement('li')
    li.classList.add('play-item')
    li.textContent = el.title
    audioList.appendChild(li)
})

const lists = document.querySelectorAll('.play-item')
lists[0].classList.add('item-active')

let audio = document.createElement('audio')

let num = 0
let playNum = 0
playList.forEach(el => {
    audio = document.createElement('audio')
    audio.src = el.src
    audio.setAttribute('data-audio', num++)
    document.body.appendChild(audio)
})

const audios = document.querySelectorAll('audio')
const audioProgress = document.querySelector('.progress')
const audioDuration = document.querySelector('.duration')
const audioName = document.querySelector('.audio-name')
const audioTime = document.querySelector('.audio-time')
const audioVolume = document.querySelector('.audio-volume')
const audioChangeVolume = document.querySelector('.audio-change')

function showProgress(audio) {
    let prog = (audio.currentTime/audio.duration) * 100
    audioProgress.style.width = `${prog}%`
}

function scrub(e,audio) {
    const scrubTime = (e.offsetX / audioDuration.offsetWidth) * audio.duration;
    audio.currentTime = scrubTime;
}
function changeVolume(value) {
    const audio = document.querySelector(`audio[data-audio="${playNum}"]`)
    audio.volume = value / 100
    if (audio.volume == 0) {
        audioVolume.classList.add('mute')
    } else if (audio.volume > 0) {
        audioVolume.classList.remove('mute')
    }
}

audioChangeVolume.addEventListener('click', function() {
    changeVolume(this.value)
})
// audioChangeVolume.addEventListener('mousemove', function() {
//     changeVolume(this.value)
// })
audioChangeVolume.addEventListener('change', function() {
    changeVolume(this.value)
})

audioDuration.addEventListener('click', function(e) {
    const audio = document.querySelector(`audio[data-audio="${playNum}"]`)
    scrub(e,audio)
})

audioVolume.addEventListener('click', function() {
    const audio = document.querySelector(`audio[data-audio="${playNum}"]`)
    audioVolume.classList.toggle('mute')
    if (audio.volume == 0) {
        audio.volume = 1
    } else {
        audio.volume = 0
    }
})

function playAudio() {
    const audio = document.querySelector(`audio[data-audio="${playNum}"]`)
    audioName.textContent = playList[playNum].title
    showProgress(audio)
    audio.addEventListener('timeupdate', function() {
        showProgress(audio)
        audioTime.textContent = `${getZero(Math.round(audio.currentTime))}: ${getZero(Math.round(audio.duration))}`
    })
    audio.currentTime = 0;
    audio.play();
    audio.addEventListener('ended', function() {
        lists[playNum].classList.remove('item-active')
        playNum++
        if (playNum == 4) {
            playNum = 3
        }
        lists[playNum].classList.add('item-active')
        playNext()
    })
  }

function pauseAudio() {   
    const audio = document.querySelector(`audio[data-audio="${playNum}"]`)
    audio.pause();
}


play.addEventListener('click', function() {
    this.classList.toggle('pause')
    if (this.classList.contains('pause')) {
        playAudio()
    } else {
        pauseAudio()
    }
})

function playNext() {
    play.classList.add('pause')
    playAudio()
}

function playPrev() {
    play.classList.add('pause')
    playAudio()
}
console.log(lists)
nextSong.addEventListener('click', function() {
    lists[playNum].classList.remove('item-active')
    playNum++
    if (playNum >= lists.length) {
        playNum = 0
        audios[lists.length - 1].pause()
    } else {
        audios[playNum - 1].pause()
    }
    play.classList.add('pause')
    lists[playNum].classList.add('item-active')
    playAudio()
})
prevSong.addEventListener('click', function() {
    lists[playNum].classList.remove('item-active')
    playNum--
    if (playNum < 0) {
        playNum = lists.length - 1
        audios[0].pause()
    } else {
        audios[playNum + 1].pause()
    }
    play.classList.add('pause')
    lists[playNum].classList.add('item-active')
    playAudio()
})

//  weather 
const city = document.querySelector('.city')
const icon = document.querySelector('.weather-icon')
const descr = document.querySelector('.weather-description')
const temp = document.querySelector('.temperature')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const errorMessage = document.querySelector('.weather-error')


if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city')
} else if (selectLang.value == 'ru'){
    city.value = 'Минск'
} else if (selectLang.value == 'en') {
    city.value = 'Minsk'
}


const weatherLAng = {
    'wind': {
        'en' : 'Wind speed',
        'ru' : 'Скорость ветра',
        'm' : {
            'en' : 'm/s',
            'ru' : 'м/с'
        }
    },
    'humidity' : {
        'en': 'Humidity',
        'ru' : 'Влажность'
    }
}

async function getWeather(lang = 'en') {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=db9bf3f3b83675a56117b122595a5034&units=metric`;
    fetch(url) 
        .then(response => {
            if (response.ok) {
                return response.json();
              } else {
                throw new Error(`city not found for '${city.value}'!`);
              }
        })
        .then(data => {
            errorMessage.textContent = ''
            icon.classList.add(`owf-${data.weather[0].id}`);
            temp.textContent = `${Math.floor(data.main.temp)} °C`
            descr.textContent = data.weather[0].description
            wind.textContent = `   ${weatherLAng.wind[lang]}: ${data.wind.speed} ${weatherLAng.wind.m[lang]}`
            humidity.textContent = `${weatherLAng.humidity[lang]}: ${data.main.humidity}`
            }
        )
        .catch(e => {
            errorMessage.textContent = e
            temp.textContent = ''
            descr.textContent = ''
            wind.textContent = ''
            humidity.textContent = ''

        })

  }



function setCity(e) {
    if (e.code === 'Enter') {
        getWeather(selectLang.value);
        city.blur();
      }
    city.addEventListener('change', function() {
        localStorage.setItem('city', this.value)
    })
}  



document.addEventListener('DOMContentLoaded', getWeather(selectLang.value));
city.addEventListener('keypress', setCity);


// quotes 
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeBtn = document.querySelector('.change-quote')


function getQuotes(lang = 'en') {
    const quotes = 'data.json';
    fetch(quotes)
      .then(res => res.json())
      .then(data => { 
        let random = Math.floor((Math.random() * data.length))
        quote.textContent = data[random][`${lang}`].text
        author.textContent = data[random][`${lang}`].author
      });
  }
getQuotes(selectLang.value);

changeBtn.addEventListener('click', function() {
    getQuotes(selectLang.value)
})

// settings 

const cogwheel = document.querySelector('.cogwheel')
const settings = document.querySelector('.settings')
const playerBlock = document.querySelector('.player')
const weatherBlock = document.querySelector('.weather')
const timeBlock = document.querySelector('.time')
const dateBlock = document.querySelector('.date')
const greetingBlock = document.querySelector('.greeting-container')
const quoteBlock = document.querySelector('.quote')


cogwheel.addEventListener('click', function() {
    settings.classList.toggle('show')
})

const playerSettings = document.querySelectorAll('.settings-player')


playerSettings.forEach(el => {
    el.addEventListener('change', function() {
        if (el.matches('.weatherBlock')) {
            localStorage.setItem('weatherBlock', el.checked)
            if (el.checked) {
                weatherBlock.classList.toggle('hide')
            }
        } else if (el.matches('.playerBlock')) {
            playerBlock.classList.toggle('hide')
            localStorage.setItem('playerBlock', el.checked)
        } else if (el.matches('.dateBlock')) {
           dateBlock.classList.toggle('hide')
           localStorage.setItem('dateBlock', el.checked)
        } else if (el.matches('.timeBlock')) {
            timeBlock.classList.toggle('hide')
            localStorage.setItem('timeBlock', el.checked)
        } else if (el.matches('.greetingBlock')) {
            greetingBlock.classList.toggle('hide')
            localStorage.setItem('greetingBlock', el.checked)
        } else if (el.matches('.quoteBlock')) {
            greetingBlock.classList.toggle('hide')
            localStorage.setItem('quoteBlock', el.checked)
        } 
    })
});


// if (localStorage.getItem('weatherBlock') == true){
//     console.log('s')
//     weatherBlock.checked = true
//     weatherBlock.classList.add('hide')
// }