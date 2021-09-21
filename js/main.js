// TEXT ANIMATION HEADER

const txtAnim = document.querySelector('h1')

new Typewriter(txtAnim, {
    deleteSpeed: 20,
    loop: true
})
.changeDelay(25)
.typeString('Moi c\'est Simon Roche')
.pauseFor(300)
.typeString('<strong>, Dev <span class="whiteFond">Full-Stack !</span></strong>')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span class="whiteFond2"> Front </span>')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span class="whiteFond3"> Back </span>')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span class="whiteFond5"> CMS </span>')
.pauseFor(1000)
.deleteChars(4)
.typeString('<span class="whiteFond4"> UI/UX </span>')
.pauseFor(1000)
.start()

// SCROLL

const target = document.getElementById('myProject'),
	  button = document.getElementById('button');

	if(button != null) {
		button.addEventListener('click', function(){
	
			target.scrollIntoView({
				block: 'start',
				behavior: 'smooth',
				inline: 'nearest'
			});
			
		});	
	}

// TEXT ANIMATION PROJECT

const txtAnimProject = document.getElementById('titleProject')

new Typewriter(txtAnimProject, {
    deleteSpeed: 20,
    loop: true
})
.changeDelay(100)
.typeString('Quelques projets ...')
.pauseFor(3000)
.start()

// TEXT MORE ANIMATION

const txtAnimMore = document.getElementById('forMore')

new Typewriter(txtAnimMore, {
    deleteSpeed: 25,
    loop: true
})
.changeDelay(200)
.typeString('...')
.pauseFor(1000)
.deleteChars(3)
.start()

// ANIMATION PROJET

AOS.init();