let goodthought = ['Bravo!', 'Awesome!', 'Nailed It!', 'Marvellous', 'Extraordinary!', 'Killing Spree!'];
        let downthought = ['Boo-Ya!', 'Come On!', 'Better Luck Next Time!', 'Damn You!', 'Think Hard!', 'You Gotta Be Kidding!'];

        let thought = document.getElementById("thought");
        let btn = document.getElementById("next");
        let display = document.getElementById("random-color");
        let boxOne = document.getElementById("1");
        let boxTwo = document.getElementById("2");
        let boxThree = document.getElementById("3");
        let boxFour = document.getElementById("4");
        let count = document.getElementById('score');
        let score = 0;
        let detector = 0;
        let colour = {};
       
        btn.addEventListener("click", () => {
            detector = 0;
            for(let i=0;i<4;i++){
                let arr = [];
                    for (let j=0; j<3; ++j) {
                    arr.push(Math.floor(Math.random()*255));
                    }
                colour[i] = arr.join(",")
            }

        display.innerHTML = colour[Math.floor(Math.random()*3)];

        boxOne.setAttribute('style',`background-color: rgb(${colour[0]})`);
        boxTwo.setAttribute('style',`background-color: rgb(${colour[1]})`);
        boxThree.setAttribute('style',`background-color: rgb(${colour[2]})`);
        boxFour.setAttribute('style',`background-color: rgb(${colour[3]})`);        
        });

        boxOne.addEventListener('click', ()=>{
            detector = boxOne.id;
            if(colour[detector-1]==display.innerHTML){
                score+=1;
                count.innerHTML = score;
                let say = goodthought[Math.floor(Math.random()*6)];
                thought.innerHTML = say;

            }

            else{
                let say = downthought[Math.floor(Math.random()*6)];
                thought.innerHTML = say;
            }
            // console.log(detector);
        })
       
        boxTwo.addEventListener('click', ()=>{
            detector = boxTwo.id
            if(colour[detector-1]==display.innerHTML){
                score+=1;
                count.innerHTML = score;
                let say = goodthought[Math.floor(Math.random()*6)];
                thought.innerHTML = say;
            }

            else{
                let say = downthought[Math.floor(Math.random()*6)];
                thought.innerHTML = say;
            }
            // console.log(detector);
        })

        boxThree.addEventListener('click', ()=>{
            detector = boxThree.id
            if(colour[detector-1]==display.innerHTML){
                score+=1;
                count.innerHTML = score;
                let say = goodthought[Math.floor(Math.random()*6)];
                thought.innerHTML = say;
            }

            else{
                let say = downthought[Math.floor(Math.random()*6)];
                thought.innerHTML = say;
            }
            // console.log(detector);
        })

        boxFour.addEventListener('click', ()=>{
            detector = boxFour.id
            if(colour[detector-1]==display.innerHTML){
                score+=1;
                count.innerHTML = score;
                let say = goodthought[Math.floor(Math.random()*6)];
                thought.innerHTML = say;
            }

            else{
                let say = downthought[Math.floor(Math.random()*6)];
                thought.innerHTML = say;
            }
            // console.log(detector);
        })

        // console.log(detector)
        // if(colour[detector-1]==display.innerHTML){
        //     score+=1;
        //     count.innerHTML = score;
        // }
