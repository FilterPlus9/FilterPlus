const form = document.querySelector('#form')
const yourname = document.querySelector('#yourname')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const Subject= document.querySelector('#Subject')


form.addEventListener("submit" ,function(e){
  e.preventDefault();
  checkRequired([yourname, email ,phone,Subject])
  validateInputs();
})

function validateInputs(){
  const yournameVal = yourname.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const SubjectlVal = Subject.value.trim();

  if(yournameVal===''){
    setError(yourname,'Please provide your name.')
  }
  else{
  setSuccess(yourname)
  }


  if(emailVal===''){
    setError(email,'Please provide your email.')
  }
  else if(!validateEmail(emailVal))
    setError(email,'Please enter a valid email.')

  else{
    setSuccess(email)
    }

    if(phoneVal===''){
      setError(phone,'Please provide your phone.')
    }
    else{
    setSuccess(phone)
    }

    if(SubjectlVal===''){
      setError(Subject,'Please provide your .')
    }
    else{
    setSuccess(Subject)
    }
}

function setError(element,message){
  const inputGroup = element.parentElement;
  const errorElement =  inputGroup .querySelector('.error')

  errorElement.innerText = message;
  inputGroup.classList.add('error')
  inputGroup.classList.remove('success')
}

function setSuccess(elemen){
  const inputGroup = element.parentElement;
  const errorElement =  inputGroup .querySelector('.error')

  errorElement.innerText = '';
  inputGroup.classList.add('success')
  inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
