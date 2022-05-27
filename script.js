window.document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
})

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
    

example_rounded_1 = document.querySelector('#example_rounded_1');

example_rounded_2 = document.querySelector('#example_rounded_2');

example_rounded_3 = document.querySelector('#example_rounded_3');

example_rounded_4 = document.querySelector('#example_rounded_4');

example_rounded_5 = document.querySelector('#example_rounded_5');

example_rounded_6 = document.querySelector('#example_rounded_6');

example_rounded_7 = document.querySelector('#example_rounded_7');

example_rounded_8 = document.querySelector('#example_rounded_8');

function super_app_speak(s_data){
  // new SpeechSynthesisUtterance object
  let speak = new SpeechSynthesisUtterance();
  speak.lang = 'en-US';
  speak.text = s_data;
  speak.volume = 0.8;

  // speak
  window.speechSynthesis.speak(speak);
}

recognition.onresult = function(event) {
  var transcript = event.results[0][0].transcript;
      
  if (transcript == "turn on light one"){
    super_app_speak("turning on light one");
    example_rounded_1.checked = true;
  }
      
  if (transcript == "turn off light one" ){
    super_app_speak ("turning off light one");
    example_rounded_1.checked = false;
  }
  
  if (transcript == "turn on light to"){
    super_app_speak ("turning on light Two");
    example_rounded_2.checked = true;
  }
      
  if (transcript == "turn off light Tu" || transcript == "turn off light Tu"){
    super_app_speak ("turning off light Two");
    example_rounded_2.checked = false;
  }
  
  if (transcript == "turn on light 3"){
    super_app_speak("turning on light 3");
    example_rounded_3.checked = true;
  }
  
  if (transcript == "turn off light 3" ){
    super_app_speak ("turning off light 3");
    example_rounded_3.checked = false;
  }
  
  if (transcript == "turn on light 4"){
    super_app_speak("turning on light 4");
    example_rounded_4.checked = true;
  }
  
  if (transcript == "turn off light 4" ){
    super_app_speak ("turning off light 4");
    example_rounded_4.checked = false;
  }
  
  if (transcript == "turn on light 5"){
    super_app_speak("turning on light 5");
    example_rounded_5.checked = true;
  }
  
  if (transcript == "turn off light 5" ){
    super_app_speak ("turning off light 5");
    example_rounded_5.checked = false;
  }
  
  if (transcript == "turn on light 6"){
    super_app_speak("turning on light 6");
    example_rounded_6.checked = true;
  }
  
  if (transcript == "turn off light 6" ){
    super_app_speak ("turning off light 6");
    example_rounded_6.checked = false;
  }
  
  if (transcript == "turn on light 7"){
    super_app_speak("turning on light 7");
    example_rounded_7.checked = true;
  }
  
  if (transcript == "turn off light 7" ){
    super_app_speak ("turning off light 7");
    example_rounded_7.checked = false;
  }
  
  if (transcript == "turn on light 8"){
    super_app_speak("turning on light 8");
    example_rounded_8.checked = true;
  }
  
  if (transcript == "turn off light 8" ){
    super_app_speak ("turning off light 8");
    example_rounded_8.checked = false;
  }
  

  if (transcript == "turn on all light"){
    super_app_speak ("turning on all light");
    
    example_rounded_1.checked = true;
    example_rounded_2.checked = true;
    example_rounded_3.checked = true;
    example_rounded_4.checked = true;
    example_rounded_5.checked = true;
    example_rounded_6.checked = true;
    example_rounded_7.checked = true;
    example_rounded_8.checked = true;
    
  }

  if (transcript == "turn off all light"){
    super_app_speak ("turning off all light");
    
    example_rounded_1.checked = false;
    example_rounded_2.checked = false;
    example_rounded_3.checked = false;
    example_rounded_4.checked = false;
    example_rounded_5.checked = false;
    example_rounded_6.checked = false;
    example_rounded_7.checked = false;
    example_rounded_8.checked = false;
  }
     
};

recognition.onspeechend = function() {
  super_app_search_mice_btn.classList.remove('open');
  super_app_mic_active = false;
  recognition.stop();
}
    


super_app_info_section = document.querySelector('.super_app_info_section');

super_app_app_body = document.querySelector('.super_app_app_body')
super_app_menu_dots = document.querySelector('.super_app_menu_dots');
super_app_dot_menu_section = document.querySelector('.super_app_dot_menu_section');


super_app_menu_dots.addEventListener('click', function () {
  super_app_dot_menu_section.classList.add('open');
  document.removeEventListener('click', super_app_close_menu);
  document.addEventListener('click', super_app_close_menu);
  function super_app_close_menu(Event) {
    if (Event.target != super_app_menu_dots && Event.target != super_app_menu_dots.children[0] && Event.target != super_app_menu_dots.children[1] && Event.target != super_app_menu_dots.children[2]) {
      super_app_dot_menu_section.classList.remove('open');
    }
  }
})

function super_app_info_open_function() {
  super_app_app_body.style.overflow = 'hidden'
  super_app_info_section.style.display = 'block';
  setTimeout(function () {
    super_app_info_section.style.opacity = 1;
  }, 2)
}

function super_app_info_close_function() {
  super_app_app_body.style.overflow = ''
  super_app_info_section.style.opacity = 0;
  setTimeout(function () {
    super_app_info_section.style.display = 'none';
  }, 200)
  
}

super_app_search_mice_btn = document.querySelector('.super_app_search_mice_btn');

var super_app_mic_active= false;

super_app_search_mice_btn.addEventListener('click' , function (){
  if(super_app_mic_active == false){
    super_app_search_mice_btn.classList.add('open');
    super_app_mic_active = true;
    recognition.start();
    
  }
  else if (super_app_mic_active == true){
    super_app_search_mice_btn.classList.remove('open');
    super_app_mic_active = false;
    recognition.stop();
  }
})
