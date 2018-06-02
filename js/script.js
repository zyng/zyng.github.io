$(".loadNames,.loadNumbs").focus(function() {
     this.placeholder='';
});   

$(".loadNames").blur(function() {
    this.placeholder='nazwa';
});    
$(".loadNumbs").blur(function() {
    this.placeholder='waga [kg]';
});

var fileLabelText = document.getElementById("fileLabelText");
var droppedFiles;


function overrideDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}

function addFiles(event) {
  droppedFiles = event.target.files || event.dataTransfer.files;
  showFiles(droppedFiles);
}

function showFiles(files) {
  if (files.length > 1) {
    fileLabelText.innerText = files.length;
  } else {
    fileLabelText.innerText = files[0].name;
  }
}


var date = document.querySelector('[type=date]');

function noWeekends(e){

    var day = new Date( e.target.value ).getUTCDay();
    var box = document.getElementById("alert");

    // Days in JS range from 0-6 where 0 is Sunday and 6 is Saturday

    if( day == 0 || day == 6 ){
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
date.addEventListener('input',noWeekends);

 

var i=0;

var buttonNewLoad = document.getElementById('btnNewLoad');

buttonNewLoad.onclick = function addFields(){
            // Container <div> where dynamic content will be placed
            var container = document.getElementById("container");
           
        
            i++;

              
                var div = document.createElement("div");
                div.setAttribute('id','newLoad'+i);
                container.appendChild(div);
  
                var inputName = document.createElement("input");
                var p1 = document.createElement('p');
                inputName.type = "text";
                inputName.name = "load_name" + i;
                inputName.placeholder='nazwa';
                inputName.classList.add('loadNames'); //nie działa
                div.appendChild(p1);
                p1.appendChild(inputName); 
                
                var inputWeight = document.createElement("input");
                var p2 = document.createElement('p');
                inputWeight.type = "number";
                inputWeight.min='0';
                inputWeight.placeholder="waga [kg]";
                inputWeight.name = "load_weight" + i;
                inputName.classList.add('loadNames'); //nie działa
                div.appendChild(p2);
                p2.appendChild(inputWeight);
  
  
                var select = document.createElement("select");
                var p3 = document.createElement('p');
                select.name = "load_type"+i;
                var option1 = document.createElement("option");
                option1.text = "Typ ładunku";
                option1.disabled="disabled";
                var option2 = document.createElement("option");
                option2.value="load_type_normal";
                option2.text="zwykły";
                var option3 = document.createElement("option");
                option3.value="load_type_dangerous";
                option3.text="niebezpieczny";
                div.appendChild(p3);
                p3.appendChild(select);
                select.appendChild(option1);
                select.appendChild(option2);
                select.appendChild(option3); 
  
                
  
                if(i>=1){
                  var delLoadButton = document.getElementById('deleteLoad');
                  document.getElementById("buttonNewDelete").style.textAlign = "center";
                  delLoadButton.style.display="inline-block";
                  

                  delLoadButton.onclick = function removeElement() {
                    var element = document.getElementById('newLoad'+i);
                    element.parentNode.removeChild(element);
                    i--;  
                    if(i==0){
                        document.getElementById("buttonNewDelete").style.textAlign = "left";
                        document.getElementById('deleteLoad').style.display="none";
                      }
                  }      
               }           
 };




  


  

 






