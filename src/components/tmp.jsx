    let tl2 = gsap.timeline();
    let SplitTextTest = SplitText.create(".text", { type: "chars" });

    gsap.to(".text", {opacity: 1, scale: 1, duration: 1.7, ease: "elastic.out(1.2, 0.2)", stagger: 0.2});
    let tl = gsap.timeline();
          tl.set(SplitTextTest.chars, {opacity: 0}, "start");
          tl.fromTo(SplitTextTest.chars, {
              autoAlpha: 1,
              textShadow: "0px 0px 30px #FFF",
              color: "rgba(0,0,0,0)",
              duration: 0.5,
              stagger: 0.1
            },
            {
              textShadow: "0px 0px 20px #000",
              color: "rgba(0,0,0,0)",
              duration: 1.5,
              ease: "power2.in",
              stagger: 0.1
            },
            "start")
            .to(SplitTextTest.chars,
            {
                textShadow: "0px 0px 0px #000",
                  duration: 0.5,
                  ease: "power2.Out",
                  stagger: 0.1
            }, "start+=1")
            .to(SplitTextTest.chars,
            {
                  color: "rgba(0,0,0,1)",
                  duration: 0.5,
                  ease: "power2.inOut",
                  stagger: 0.1
            }, "start+=1.5")

  });
