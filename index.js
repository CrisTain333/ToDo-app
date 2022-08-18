let i = 1;
document.getElementById('add-btn').addEventListener('click', function () {
    
    const input = document.getElementById('input-Feild').value;
    // console.log(input);
    const conatainer = document.getElementById('toShow');
    const elements = document.createElement('tr')
    elements.innerHTML = `
    <th scope="row">${i}</th>
            <td class="text-white h5">${input}</td>
            <td>
            <button class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button>
            <button class="btn btn-success"><i class="fa-solid fa-check"></i> Done</button>
            </td> 
    `
    if(input === ''){
        alert('Enter Text')
    }else{
        i++
        conatainer.appendChild(elements)
    }
    document.getElementById('input-Feild').value = "";    
    const deleteBtn = document.getElementsByClassName('btn-danger');
    
    for(const btns of deleteBtn){
        btns.addEventListener('click',function(event){
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }
    const DoneBtn = document.getElementsByClassName('btn-success');
    
    for(const btn of DoneBtn){
        btn.addEventListener('click',function(event){
      event.target.parentNode.parentNode.style.textDecoration = 'line-through';
        })
    }


})