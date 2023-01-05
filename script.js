

const check =()=>{
      let emailValue = document.getElementById('email').value
      let paswordValue = document.getElementById('pasword').value
     if(emailValue==='javascript' && paswordValue ==='javascript'){
        alert('open')
        let user={
            email:emailValue,
            pasword:paswordValue
        }
        localStorage.setItem('пароль',JSON.stringify(user))
        ini()
     }else{
        alert('close')
     }
    }
const render = ()=>{
    let email = document.createElement('input');
    email.type='password'
    email.id='email'
    let pasword = document.createElement('input');
    pasword.type='password'
  pasword.id='pasword'
    let emailLabel = document.createElement('label');
    emailLabel.classList='email'
    let paswordlLabel = document.createElement('label');
    paswordlLabel.classList='pasword'


    // let userValue = localStorage.getItem('пароль')
    // p.innerHTML=userValue
    // console.log(userValue)
    emailLabel.innerHTML='Password';
    paswordlLabel.innerHTML='Pasword confirmation';

    let but = document.createElement('button')
    but.innerHTML='войти'
    but.addEventListener('click',check)
    document.body.append(emailLabel);
    document.body.append(email);
    document.body.append(paswordlLabel);
    document.body.append(pasword);
    document.body.append(but)
    document.body.append(p)
}
const ini = ()=>{
    let f = document.createElement('a');
    f.href="https://youtu.be/CxgOKJh4zWE";
    f.innerHTML="Курс";
    let r = document.body.append(f)
    console.log(r);
}

const login =()=>{
    localStorage.getItem('пароль') ?ini() : render()
};
login()
