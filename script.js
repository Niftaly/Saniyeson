Table();

let say = 1;
let vaxt = 16;

vaxtsay();
setInterval(vaxtsay,1000);

function vaxtsay() {
    let sonvaxt = document.getElementById("saat")
    sonvaxt.innerHTML = `<br/> Qalan vaxt : ${vaxt} `;
    vaxt--;
    if(vaxt ==0) {
        setTimeout(function() {
            alert('Yeniden bashlamaq isteyirsiniz mi ?');
            location.reload();
        },1000)
    }

    if(vaxt <= 10) {
        setTimeout(function() {
            sonvaxt.style.color = 'green';
        },500)
        sonvaxt.style.color = sonvaxt.style.color = 'green' ? 'black' : 'green';        
    }
   
}


function Table() {

    let first = [];
    let last = [];
    let rndm;
    let reqem = 0;

    let num = 16;

    for (let i = 0; i<num; i++) {
        first[i] = i + 1;
    }

    for (let i = 0; i<num; i++) {
        rndm = Math.floor(Math.random() * first.length);
        last[i] = first[rndm];
        first.splice(rndm,1);
    }

    let data = "";
    for(let i = 0; i < 4; i++) {
        data += `<tr>`;

        for(let j = 0; j < 4; j++) {
            data += `<td onclick="Click(${last[reqem]})" id="reng${last[reqem]}" > ${last[reqem]} </td>`;
            reqem++;
        }

        data += `</tr>`

    }

    document.getElementById("tb").innerHTML = data;

}

function Click(data) {
    let reng = document.getElementById("reng" + data);
    if(data == say) {
    reng.style.backgroundColor = 'green'
    reng.style.color = 'green'
        say++;
        if(say == 17) {
            setTimeout(function(){
                alert('Yeniden oynamaq isteyirsinizse "OK" klik edin')
                location.reload();
        },28)
        }
    }else {
        reng.style.backgroundColor = 'red'
        setTimeout(function(){
            alert('Yeniden oynamaq isteyirsinizse "OK" klik edin')
            location.reload();
    },280)
    }

}




