const contentElement = document.querySelector('.content'),
    fakedata = `Lorem ipsum dolor sit, Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Minus blanditiis corrupti ea voluptates similique modi dolore alias autem harum 
                necessitatibus! Debitis sapiente possimus non odio veritatis aspernatur ex similique 
                maiores!Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Minus blanditiis corrupti ea voluptates similique modi dolore alias autem harum
                necessitatibus! <br> Debitis sapiente possimus non odio veritatis aspernatur ex similique
                aiores!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus blanditiis
                orrupti ea voluptates similique modi dolore alias autem harum necessitatibus!
                Debitis sapiente possimus non odio veritatis aspernatur ex similique maiores!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus blanditiis corrupti 
                ea voluptates similique modi dolore alias autem harum necessitatibus! Debitis sapiente 
                possimus non odio veritatis aspernatur ex similique maiores!Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. <br>Minus blanditiis corrupti ea voluptates similique
                modi dolore alias autem harum necessitatibus! Debitis sapiente possimus non odio
                veritatis aspernatur ex similique maiores!Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Minus blanditiis corrupti ea voluptates similique modi dolore alias
                autem harum necessitatibus! Debitis sapiente possimus non odio veritatis aspernatur ex
                similique maiores!Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Minus blanditiis corrupti ea voluptates similique modi dolore alias autem harum 
                necessitatibus! Debitis sapiente possimus non odio veritatis aspernatur ex similique
                maiores!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus blanditiis
                corrupti ea voluptates similique modi dolore alias autem harum necessitatibus!
                Debitis sapiente possimus non odio veritatis aspernatur ex similique maiores!Lorem
                ipsum dolor sit, amet consectetur adipisicing elit.<br> Minus blanditiis corrupti ea
                voluptates similique modi dolore alias autem harum necessitatibus! 
                Debitis sapiente possimus non odio veritatis aspernatur ex similique maiores!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus blanditiis corrupti
                ea voluptates similique modi dolore alias autem harum necessitatibus! Debitis sapiente
                possimus non odio veritatis aspernatur ex similique maiores!Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Minus blanditiis corrupti ea voluptates similique
                modi dolore alias autem harum necessitatibus!<br>
                Debitis sapiente possimus non odio veritatis aspernatur ex similique maiores!`,
    newElement = document.createElement('p');

newElement.innerHTML = fakedata;
contentElement.appendChild(newElement);

console.log(contentElement);
