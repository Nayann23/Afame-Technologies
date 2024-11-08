window.addEventListener('load', () => {
  gsap.set(".loading-text", { opacity: 1 });

  gsap.timeline()
      .from(".loading-text", {
          opacity: 0,
          y: 100,
          stagger: 0.1,
          duration:2.2,

          ease: "back.out(1.7)"
        })
        .to(".loading-text", {
          opacity: 0,
          scale:0.5,
          duration: 0.8,
          onComplete: () => {
              document.querySelector('.loading-text').style.display = 'none';
              document.querySelector('.content').style.display = 'block';
          }
      });
});



		const allcontainer = gsap.utils.toArray(".container-item");
		const venueImageWrap = document.querySelector(".container-img-wrap");
		const venueImage = document.querySelector(".container-img");

		function initcontainer() {
			allcontainer.forEach((link) => {
				link.addEventListener("mouseenter", venueHover);
				link.addEventListener("mouseleave", venueHover);
				link.addEventListener("mousemove", moveVenueImage);
			});
		}

		function moveVenueImage(e) {
			let xpos = e.clientX;
			let ypos = e.clientY;
			const tl = gsap.timeline();
			tl.to(venueImageWrap, {
				x: xpos,
				y: ypos,
			});
		}

		function venueHover(e) {
			if (e.type === "mouseenter") {
				const targetImage = e.target.dataset.img;

				const tl = gsap.timeline();
				tl.set(venueImage, {
					backgroundImage: `url(${targetImage})`,
				}).to(venueImageWrap, {
					duration: 0.5,
					autoAlpha: 1,
				});
			} else if (e.type === "mouseleave") {
				const tl = gsap.timeline();
				tl.to(venueImageWrap, {
					duration: 0.5,
					autoAlpha: 0,
				});
			}
		}

		function init() {
			initcontainer();
		}

		window.addEventListener("load", function () {
			init();
		});

		tl = new TimelineMax();

gsap.from(".site-info",{

	opacity:0,
	delay:1,
	y:60
})
		tl.from(".navbar > div", 1.6, {
			opacity: 0,
			y: 60,
			ease: Expo.easeInOut,
			delay: 0.2,
		});

			tl.to(".item",{

				opacity:1,
				stagger:0.3,
			})

		tl.from(
			".site-logo",
			1.6,
			{
				opacity: 0,
				y: 40,
				ease: Expo.easeInOut,
			},
			"-=1.6"
		);

		tl.staggerFrom(
			".site-menu > div",
			1,
			{
				opacity: 0,
				y: 60,
				ease: Power2.easeOut,
			},
			0.2
		);

		tl.staggerFrom(
			".header > div",
			1,
			{
				opacity: 0,
				y: 60,
				ease: Power2.easeOut,
				delay: -1.4,
			},
			0.2
		);

		tl.from(".hehe",{

			opacity:0,
			scale:3
		})
