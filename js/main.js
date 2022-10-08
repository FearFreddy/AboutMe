let firstSkillsVisist = true;
let firstProjectsVisit = true;
let firstAboutMeVisit = true;

$(document).ready(function() {
	/**
		PROJECTS HEADING ANIMATION 
	*/

	// Wrap every letter in a span
	['.intro-image-heading', '.skills-heading', '.projects-heading', '.aboutme-heading'].forEach(function(el) {
		el = document.querySelector(el + ' .letters');
		el.innerHTML = el.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
	});

	function startTextAnimation(el) {
		anime.timeline({loop: false})
		  .add({
		    targets: el + ' .letter',
		    scale: [0.3,1],
		    opacity: [0,1],
		    translateZ: 0,
		    easing: "easeOutExpo",
		    duration: 600,
		    delay: (el, i) => 70 * (i+1)
		  }).add({
		    targets: el + ' .line',
		    scaleX: [0,1],
		    opacity: [0.5,1],
		    easing: "easeOutExpo",
		    duration: 700,
		    offset: '-=875',
		    delay: (el, i, l) => 80 * (l - i)
		  })
	}

	startTextAnimation('.intro-image-heading');


	$(window).scroll(function() {
		let skillsHT = $('#skills').offset().top,
			projectsHT = $('#projects').offset().top,
			aboutmeHT = $('#aboutme').offset().top,
		   	wH = $(window).height(),
		   	wS = $(this).scrollTop(),
		   	padding = 20;

	   	if (wS > (skillsHT-wH+padding) && firstSkillsVisist){
	   		firstSkillsVisist = false;
			startTextAnimation('.skills-heading');
		}
		if (wS > (projectsHT-wH+padding) && firstProjectsVisit){
	   		firstProjectsVisit = false;
			startTextAnimation('.projects-heading');
		}
		if (wS > (aboutmeHT-wH+padding) && firstAboutMeVisit){
	   		firstAboutMeVisit = false;
			startTextAnimation('.aboutme-heading');
		}
	});

	/**
		PROJECT TEXT ANIMATION
	*/

	$('.project-images').each(function(i, el) {
		// mouse enter
	    $(el).mouseenter(function(event) {
	    	console.log(event);
	        const title = event.target.parentNode.parentNode.querySelector('p');
	        title.innerHTML = title.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='title-letter-" + i + "'>$&</span>");
	        title.style.display = "block";
	        anime({
	            targets: document.getElementsByClassName('title-letter-' + i),
	            opacity: [0,1],
	            easing: "easeOutExpo",
	            duration: 600,
	            offset: '-=775',
	            delay: (el, i) => 34 * (i+1)
	        });
	    })
	    // mouse leave
	    $(el).mouseleave(function(event) {
	        const letters = document.getElementsByClassName('title-letter-' + i);
	        for(let i = 0; i < letters.length; i++) {
	            letters[i].style.display = "none";
	        }
	    })
	})

});
