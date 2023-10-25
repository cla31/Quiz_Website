// Cette fonction créée une balise canvas dans la modale existante
// du template html généré par displayModal()
// Pour re utiliser cette fonction il faut juste l'intégrer (le message et le feu d'artifice)
// à un élément de notre html:
// Dans notre cas, on ajoute le fireworks à cette ligne de code dans notre modal.
// modal.appendChild(createCanvas);
// on intègre aussi le message à notre feu d'artifice et ça se passe également dans la modal
// au niveau de cette ligne de code:
// modal.appendChild(messageElement);


//Création de l'audio du feu d'artifice:
// Elément audio pour fireworkSound
const fireworkSound = document.createElement("audio");
fireworkSound.setAttribute("id", "fireworkSound");

// Créer un élément source pour fireworkSound
const source0 = document.createElement("source");
source0.setAttribute("src", "https://fireworks.js.org/sounds/explosion0.mp3");
source0.setAttribute("type", "audio/mpeg");
fireworkSound.appendChild(source0);

// Créer un élément audio pour explosionSound0
const explosionSound0 = document.createElement("audio");
explosionSound0.setAttribute("id", "explosionSound0");

// Créer un élément source pour explosionSound0
const source1 = document.createElement("source");
source1.setAttribute("src", "https://fireworks.js.org/sounds/explosion0.mp3");
source1.setAttribute("type", "audio/mpeg");
explosionSound0.appendChild(source1);

// Créer un élément audio pour explosionSound1
const explosionSound1 = document.createElement("audio");
explosionSound1.setAttribute("id", "explosionSound1");

// Créer un élément source pour explosionSound1
const source2 = document.createElement("source");
source2.setAttribute("src", "https://fireworks.js.org/sounds/explosion1.mp3");
source2.setAttribute("type", "audio/mpeg");
explosionSound1.appendChild(source2);

// Créer un élément audio pour explosionSound2
const explosionSound2 = document.createElement("audio");
explosionSound2.setAttribute("id", "explosionSound2");

// Créer un élément source pour explosionSound2
const source3 = document.createElement("source");
source3.setAttribute("src", "https://fireworks.js.org/sounds/explosion2.mp3");
source3.setAttribute("type", "audio/mpeg");
explosionSound2.appendChild(source3);


// Ajout d'une variable pour contrôler l'état du feu d'artifice
let isFireworkRunning = false;
const fireworks = []; // Array with starting fireworks
const particles = []; // Array with particles
const sparks = []; // Array for sparkles drops
const createCanvas = document.createElement("canvas");

//Création d'éléments pour le message dans le feu d'artifice
const messageElement1 = document.createElement('div');
const messageElement2 = document.createElement('div');


const startFireworks = () => {
    // Pour s'assurer que le feu d'artifice ne soit pas déjà en cours d'exécution
    if (isFireworkRunning) {
        return;
    }

    isFireworkRunning = true;

    // Ajouter les éléments audio à la balise "modal"
    modal.appendChild(fireworkSound);
    modal.appendChild(explosionSound0);
    modal.appendChild(explosionSound1);
    modal.appendChild(explosionSound2);
 
    document.body.style.overflow = 'hidden';

    // messageElement1.innerText = '10/10!! 👍 🥳 \n Well done! 💪';
    messageElement1.innerText = '10/10!! 👍 🥳';
    messageElement2.innerText = 'Well done! 💪';

    // Ajout des classe CSS à l'élément
    messageElement1.classList.add('well-done');
    messageElement1.style.position = 'absolute';
    messageElement1.style.top = '50%';
    messageElement1.style.left = '50%';
    messageElement1.style.transform = 'translate(-50%, -50%)';
    // messageElement.style.fontSize = '28px';
    messageElement1.style.color = 'white';
    messageElement1.style.zIndex ='1999';

    messageElement1.style.transform = 'translate(-50%, -50%)';
    // Animation CSS pour le message
    messageElement1.style.opacity = '0';
    messageElement1.style.transition = 'opacity 1s ease-in-out';


    // Style initial pour "Well done!"
    messageElement2.classList.add('ten-out-of-ten');
    messageElement2.style.position = 'absolute';
    messageElement2.style.top = '60%'; // Position verticale à ajuster selon préférences
    messageElement2.style.left = '50%';
    messageElement2.style.transform = 'translate(-50%, -50%)';
    // messageElement2.style.fontSize = '28px';
    messageElement2.style.color = 'white';
    messageElement2.style.zIndex = '1999';

    // Animation CSS pour "Well done!"
    messageElement2.style.opacity = '0';
    messageElement2.style.transition = 'opacity 1s ease-in-out';

    // Court délai avant d'afficher le message progressivement
    setTimeout(() => {
        messageElement1.style.opacity = '1';
    }, 300); // Vous pouvez ajuster la durée du délai à votre convenance
    
      setTimeout(() => {
        messageElement2.style.opacity = '1';
    }, 2000); 

    // Ajout du message à la page.
    modal.appendChild(messageElement1);
    modal.appendChild(messageElement2);

    createCanvas.id = "canvas";
    console.log("create canvas",createCanvas);
    createCanvas.style.position = 'absolute';
    createCanvas.style.zIndex ='999';
   
    modal.appendChild(createCanvas);
    const canvas = document.getElementById('canvas'); // Get element by ID canvas

    const ctx = canvas.getContext('2d'); // Get context of canvas 2d graphics
    const frameRate = 60.0; // Frame rate per second used in the loop
    const frameDelay = 1000.0 / frameRate; // Frame Delay per second like latency
    
    let clientWidth = innerWidth; // Client's width of the web screen
    let clientHeight = innerHeight; // Client's height of the web screen
    let timer = 0; // Timer is ticker, how many ticks per round
    let x = 0; // Mouse x coordinates
    let y = 0; // Mouse y coordinates
    
    canvas.width = clientWidth; // Set canvas width to user width
    canvas.height = clientHeight; // Set canvas height to user height
    
    const TimedFirework = 800; // Repeat Firework every x MS
    let LimiterTicker = 0; // 
    let typecount = 1; // Variable to change firework type    
    
    // Sélectionnez un ID audio aléatoire (0, 1 ou 2)
    const audioId = `explosionSound${random(0, 3, 'round')}`;
    console.log("audioId",audioId);
    const audioElement = document.getElementById(audioId);
    
    // Jouez le son
    if (audioElement) {
        audioElement.play();
    }
    
    
    // Function to calculate distance = Simple Pythagorean theorem
    const distance = (px1, py1, px2, py2) => {
        const xdis = px1 - px2;
        const ydis = py1 - py2;
        return Math.sqrt((xdis * xdis) + (ydis * ydis));
    }
    
    // To get angle from point to point
    const getAngle = (posx1, posy1, posx2, posy2) => {
        if (posx1 == posx2) {
            if (posy1 > posy2) {
                return 90;
            } else {
                return 270;
            }
        }
        if (posy1 == posy2) {
            if (posy1 > posy2) {
                return 0;
            } else {
                return 180;
            }
        }
    
        const xDist = posx1 - posx2;
        const yDist = posy1 - posy2;
    
        if (xDist == yDist) {
            if (posx1 < posx2) {
                return 225;
            } else {
                return 45;
            }
        }
        if (-xDist == yDist) {
            if (posx1 < posx2) {
                return 135;
            } else {
                return 315;
            }
        }
    
        if (posx1 < posx2) {
            return Math.atan2(posy2 - posy1, posx2 - posx1) * (180 / Math.PI) + 180;
        } else {
            return Math.atan2(posy2 - posy1, posx2 - posx1) * (180 / Math.PI) + 180;
        }
    }
    
    // To create a random number
    function random(min, max, round) {
        if (round == 'round') {
            return Math.round(Math.random() * (max - min) + min);
        } else {
            return Math.random() * (max - min) + min;
        }
    }

  
    
    
    // // Function to make firework    
    const createFirework = () => {
        const firework = new Firework();
    
        firework.x = firework.sx = clientWidth / 2;
        firework.y = firework.sy = clientHeight;
    
        // Générer une couleur aléatoire
        firework.color = getRandomColor();
    
        if (x != 0 && y != 0) {
            firework.tx = x;
            firework.ty = y;
            x = y = 0;
        } else {
            firework.tx = random(400, clientWidth - 400);
            firework.ty = random(0, clientHeight / 2);
        }
    
        const angle = getAngle(firework.sx, firework.sy, firework.tx, firework.ty);
    
        firework.vx = Math.cos(angle * Math.PI / 180.0);
        firework.vy = Math.sin(angle * Math.PI / 180.0);
    
        fireworks.push(firework);
    }
    
    // Fonction pour générer une couleur aléatoire au format RGBA
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        // const alpha = Math.random(); // Opacité aléatoire entre 0 et 1
        // return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        return `rgba(${r}, ${g}, ${b})`;
    }
    
    // Function to start Firework
    const Firework = function() {
        this.x = 0;
        this.y = 0;
        this.sx = 0;
        this.sy = 0;
        this.tx = 0;
        this.ty = 0;
        this.vx = 0;
        this.vy = 0;
        this.color = 'rgb(255,255,255)';
        this.dis = distance(this.sx, this.sy, this.tx, this.ty);
        this.speed = random(700, 1100);
        this.gravity = 1.5;
        this.ms = 0;
        this.s = 0;
        this.del = false;
        
        // Sélectionnez un ID audio aléatoire (0, 1 ou 2)
        const audioId = `explosionSound${random(0, 3, 'round')}`;
        const audioElement = document.getElementById(audioId);
    
        // Jouez le son
        if (audioElement) {
            audioElement.play();
        }
    
        
    
        this.update = function(ms) {
            this.ms = ms / 1000;
    
            if (this.s > 2000 / ms) {
                createParticles(typecount, 30, this.x, this.y, this.color);
                this.del = true;
            } else {
                this.speed *= 0.98;
                this.x -= this.vx * this.speed * this.ms;
                this.y -= this.vy * this.speed * this.ms - this.gravity;
            }
    
            this.s++;
        }
    
        this.draw = function() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
    
    // Function to create an array of particles
    const createParticles = function(type, count, pox, poy, color) {
        for (let i = 0; i < count; i++) {
            const par = new Particles();
            par.type = type;
    
            par.color = color;
            par.x = pox;
            par.y = poy;
    
            const angle = random(0, 360);
            par.vx = Math.cos(angle * Math.PI / 180.0);
            par.vy = Math.sin(angle * Math.PI / 180.0);
    
            particles.push(par);
        }
    }
    
    // Function to make particles
    const Particles = function() {
    
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
        this.speed = random(200, 500);
        this.gravity = 1;
        this.wind = 0;
        this.type = 1;
        this.opacity = 1;
        this.s = 0;
        this.scale = 1;
        this.color = '#FFF';
        this.del = false;
        
        this.update = function(ms) {
            this.ms = ms / 1000;
        
            if (this.s > 900 / ms) {
                if (this.opacity - 0.05 < 0) {
                    this.opacity = 0;
                } else {
                    this.opacity -= 0.05;
                }
            }
        
            if (this.type == 1) {
                this.speed *= 0.96;
                this.x -= this.vx * this.speed * this.ms + this.wind;
                this.y -= this.vy * this.speed * this.ms - this.gravity;
            } else if (this.type == 2) {
                if (this.s < 800 / ms) {
                    this.scale += 0.1;
                } else {
                    this.scale -= 0.2;
                }
                this.speed *= 0.96;
                this.x -= this.vx * this.speed * this.ms + this.wind;
                this.y -= this.vy * this.speed * this.ms - this.gravity;
            } else if (this.type == 3) {
                this.speed *= 0.95;
                this.x -= this.vx * this.speed * this.ms + this.wind;
                this.y -= this.vy * this.speed * this.ms;
            } else if (this.type == 4) {
                this.speed *= 0.96;
                this.x -= this.vx * this.speed * this.ms + this.wind;
                this.y -= this.vy * this.speed * this.ms - this.gravity;
        
                spark = new Sparkler();
                spark.x = this.x;
                spark.y = this.y;
                spark.vx = Math.cos(random(0, 360, 'round') * (Math.PI / 180)) * 1.05;
                spark.vy = Math.sin(random(0, 360, 'round') * (Math.PI / 180)) * 1.05;
                spark.tx = this.x;
                spark.ty = this.y;
                spark.color = this.color;
                spark.limit = random(4, 10, 'round');
                sparks.push(spark);
            } else {
        
            }
        
            this.s++;
        }
        
        this.draw = function() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
        
            if (this.type == 1) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
                ctx.fill();
            } else if (this.type == 2) {
                ctx.translate(this.x, this.y);
                ctx.scale(this.scale, this.scale);
                ctx.beginPath();
                ctx.fillRect(0, 0, 1, 1);
            } else if (this.type == 3) {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - this.vx * 10, this.y - this.vy * 10);
                ctx.stroke();
            } else if (this.type == 4) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
                ctx.fill();
            } else {
                ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
                ctx.fill();
            }
        
            ctx.closePath();
            ctx.restore();
        }
    };
    
    const Sparkler = function() {
    
        this.x = 0;
        this.y = 0;
        this.tx = 0;
        this.ty = 0;
        this.limit = 0;
        this.color = 'red';
        
        this.update = function() {
            this.tx += this.vx;
            this.ty += this.vy;
        
            this.limit--;
        }
        
        this.draw = function() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.tx, this.ty);
            ctx.lineWidth = 1;
            ctx.strokeStyle = this.color;
            ctx.stroke();
            ctx.closePath();
        }
        }
       
    const update = (frame) => {  
          
        // Every tick clear screen with black rectangle with opacity 0.15
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillRect(0, 0, clientWidth, clientHeight);
        
        if (timer > LimiterTicker) {
            for (let i = 0; i < 5; i++) {
                createFirework();
            }
            LimiterTicker = timer + (TimedFirework / frame);
        }
        
        let i = fireworks.length;
        while (i--) {
            // Progress starting Fireworks
            if (fireworks[i].del == true) {
                fireworks.splice(i, 1);
            } else {
                fireworks[i].update(frame);
                fireworks[i].draw();
            }
        }
        
        i = particles.length;
        while (i--) {
            // Progress particles
            if (particles[i].opacity == 0) {
                particles.splice(i, 1);
            } else {
                particles[i].update(frame);
                particles[i].draw();
            }
        }
        
        i = sparks.length;
        while (i--) {
            // Progress sparks
            if (sparks[i].limit < 0) {
                sparks.splice(i, 1);
            } else {
                sparks[i].update(frame);
                sparks[i].draw();
            }
        }
        
        timer++;
    }
    
    
    setInterval(function() {
        update(frameDelay);
        }, frameDelay);
     // Après n secondes, arrêt du feu d'artifice
     setTimeout(function() {
        stopFireworks();
    }, 7000);
    }
     

    const stopFireworks = () => {
        // Réinitialisation des variables ou tableaux liés au feu d'artifice, par exemple :
        fireworks.length = 0;
        particles.length = 0;
        sparks.length = 0;
        
        // Suppression des éléments audio de la balise "modal"
        modal.removeChild(fireworkSound);
        modal.removeChild(explosionSound0);
        modal.removeChild(explosionSound1);
        modal.removeChild(explosionSound2);
    
        // Réinitialisation de la variable d'état du feu d'artifice
        isFireworkRunning = false;
        // Suppression du message affiché
        modal.removeChild(messageElement1);
        modal.removeChild(messageElement2);
        // Suppression du canvas
        modal.removeChild(createCanvas);
        document.body.style.overflow = 'auto';
    }
