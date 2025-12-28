// Love letter text
const letterText = `You mean more to me than words could ever fully hold, but my heart still tries every day to speak your name through love. From the moment you came into my life, everything softened, everything felt warmer, as if the world finally learned how to be gentle. You are my comfort in silence, my peace in chaos, the quiet happiness that settles in my chest just knowing you exist. Loving you doesn't feel like a choice, it feels like destiny—like my soul recognized yours long before I ever did.

Sometimes I look at you and wonder how someone so beautiful, so kind, could feel so deeply like home. Your smile heals parts of me I never knew were hurting, and your voice has a way of calming my heart no matter how loud the world gets. With you, love is tender and patient, sweet and powerful all at once. You make ordinary moments feel precious, and even the hardest days feel lighter just because you're there.

Lia, you are my safe place, my greatest blessing, the love I never knew I was missing until you became everything. I love you in the way the ocean loves the moon—quietly, endlessly, and without asking for anything in return. My heart chooses you every single day, in every lifetime, in every version of me.`;

// Type out the letter
function typeLetterEffect() {
    const letterElement = document.getElementById('letter');
    const chikawaContainer = document.getElementById('chiikawa-container');
    let index = 0;
    
    // Chiikawa emojis
    const chiikawas = ['🍃', '🐭', '✨', '💫', '🌸', '💕', '🐰'];
    
    function typeChar() {
        if (index < letterText.length) {
            letterElement.textContent += letterText.charAt(index);
            
            // Add chiikawa randomly every 20 characters
            if (index % 20 === 0 && index > 0) {
                const chiikawa = document.createElement('div');
                chiikawa.className = 'chiikawa';
                chiikawa.textContent = chiikawas[Math.floor(Math.random() * chiikawas.length)];
                chikawaContainer.appendChild(chiikawa);
            }
            
            index++;
            setTimeout(typeChar, 30);
        }
    }
    
    typeChar();
}

// Handle Yes button click
document.getElementById('yesBtn').addEventListener('click', function() {
    // Hide prompt
    document.getElementById('prompt').style.display = 'none';
    // Show letter
    document.getElementById('letterSection').style.display = 'block';
    document.getElementById('letterSection').classList.add('fade-in');
    // Start typing effect
    typeLetterEffect();
});

// Handle No button click - make it impossible to click
const noBtn = document.getElementById('noBtn');
let noClickCount = 0;

noBtn.addEventListener('mouseover', function() {
    noClickCount++;
    // Move button away
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Show sad message after 2 attempts
    if (noClickCount >= 2) {
        document.getElementById('sad-message').style.display = 'block';
    }
});

// Prevent No button from working
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    return false;
});

// Start showing prompt when page loads
window.addEventListener('load', function() {
    document.getElementById('prompt').style.display = 'block';
});
