const key = document.querySelectorAll('.key');
const div = document.querySelector('.tone-explain');

for (let i = 0; i < key.length; i ++) {

    key[i].addEventListener('click', toneName);
}




function toneName (e) {
    
    let tone = '';
    let counter = false;
    
    if(e.target.id === 'do') {
        tone += '\"DO\" (C).';
        counter = true;
    }
    else if (e.target.id === 'do-sharp') {
        tone += '\"DO-sharp\" (C#), it can be also \"RE-flat\" (Db).';
        counter = true;
    }
    else if (e.target.id === 're') {
        tone += '\"RE\" (D).';
        counter = true;
    }
    else if (e.target.id === 're-sharp') {
        tone += '\"RE-sharp\" (D#), it can be also \"MI-flat\" (Eb).';
        counter = true;
    }
    else if (e.target.id === 'mi') {
        tone += '\"MI\" (E).';
        counter = true;
    }
    else if (e.target.id === 'fa') {
        tone += '\"FA\" (F).';
        counter = true;
    }
    else if (e.target.id === 'fa-sharp') {
        tone += '\"FA-sharp\" (F#), it can be also \"SOL-flat\" (Gb).';
        counter = true;
    }
    else if (e.target.id === 'sol') {
        tone += '\"SOL\" (G).';
        counter = true;
    }
    else if (e.target.id === 'sol-sharp') {
        tone += '\"SOL-sharp\" (G#), it can be also \"LA-flat\" (Ab).';
        counter = true;
    }
    else if (e.target.id === 'la') {
        tone += '\"LA\" (A).';
        counter = true;
    }
    else if (e.target.id === 'la-sharp') {
        tone += '\"LA-sharp\" (A#), it can be also \"SI-flat\" (Bb).';
        counter = true;
    }
    else if (e.target.id === 'si') {
        tone += '\"SI\" (B).';
        counter = true;
    }

    let para = document.createElement('p');

    para.innerText = `This is the note ${tone}`;

    para.className = 'note-name-paragraph';

    div.appendChild(para);

    const deleteButton = document.createElement('button');

    deleteButton.className ='delate-button';

    deleteButton.innerText = 'Clear';

    div.appendChild(deleteButton);

    deleteButton.addEventListener('click', removePara);

    function removePara(e) {
        div.removeChild(para);
        div.removeChild(deleteButton);
        counter = false;
        console.log(counter);
        if(counter === false) {

            console.log(counter);
    
            for(let i = 0; i < key.length; i ++){
    
                key[i].disabled = false;
                console.log(key[i]);
            }
        }
    }


    if(counter === true){
        
        for(let i = 0; i < key.length; i ++){

            key[i].disabled = true;
        }
        
    }

}










