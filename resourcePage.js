const departments = document.querySelector('.departments');
const semesters = document.querySelector('.semesters');
const classes = document.querySelector('.classes');
const years = document.querySelector('.years');

//import { semChoice } from "./resourcePageButtons";

departments.addEventListener("click", () => {
  if(departments.classList.contains('selection_closed'))
  {
    departments.innerHTML = `        
    <div id="buttonGrid">
      <button id="ceng" class="buttons">ceng</button>
      <button id="endustri" class="buttons">endustri</button>
      <button id="isletme" class="buttons">isletme</button>
      <button id="ekonomi" class="buttons">ekonomi</button>
      <button id="felsefe" class="buttons">felsefe</button>
      <button id="hukuk" class="buttons">hukuk</button>
      <button id="iktisat" class="buttons">iktisat</button>
      <button id="iletisim" class="buttons">iletisim</button>
      <button id="uluslararasi" class="buttons">uluslar arasi</button>
      <button id="matematik" class="buttons">matematik</button>
      <button id="siyaset" class="buttons">siyaset</button>
      <button id="sosyoloji" class="buttons">sosyoloji</button>
    </div>`;

    departments.classList.remove('selection_closed');
  }

  semesters.innerHTML = "";
  if(!semesters.classList.contains('selection_closed')) semesters.classList.add('selection_closed');

  classes.innerHTML = "";
  if(!classes.classList.contains('selection_closed')) classes.classList.add('selection_closed');

  years.innerHTML = "";
  if(!years.classList.contains('selection_closed')) years.classList.add('selection_closed');
});

semesters.addEventListener("click", () => {
  departments.innerHTML = "";
  if(!departments.classList.contains('selection_closed')) departments.classList.add('selection_closed');
  
  if(semesters.classList.contains('selection_closed'))
  {
    semesters.innerHTML = `        
      <div id="buttonGrid">
        <button id="sem1" class="buttons">sem1</button>
        <button id="sem2" class="buttons">sem2</button>
        <button id="sem3" class="buttons">sem3</button>
        <button id="sem4" class="buttons">sem4</button>
        <button id="sem5" class="buttons">sem5</button>
        <button id="sem6" class="buttons">sem6</button>
        <button id="sem7" class="buttons">sem7</button>
        <button id="sem8" class="buttons">sem8</button>
      </div>`;

    semesters.classList.remove('selection_closed');
  }

  classes.innerHTML = "";
  if(!classes.classList.contains('selection_closed')) classes.classList.add('selection_closed');

  years.innerHTML = "";
  if(!years.classList.contains('selection_closed')) years.classList.add('selection_closed');
});

classes.addEventListener("click", () => {
  departments.innerHTML = "";
  if(!departments.classList.contains('selection_closed')) departments.classList.add('selection_closed');

  semesters.innerHTML = "";
  if(!semesters.classList.contains('selection_closed')) semesters.classList.add('selection_closed');

  if(classes.classList.contains('selection_closed'))
  {
    classes.innerHTML = window.semChoice;

    classes.classList.remove('selection_closed');
  }

  years.innerHTML = "";
  if(!years.classList.contains('selection_closed')) years.classList.add('selection_closed');
});

years.addEventListener("click", () => {
  departments.innerHTML = "";
  if(!departments.classList.contains('selection_closed')) departments.classList.add('selection_closed');

  semesters.innerHTML = "";
  if(!semesters.classList.contains('selection_closed')) semesters.classList.add('selection_closed');

  classes.innerHTML = "";
  if(!classes.classList.contains('selection_closed')) classes.classList.add('selection_closed');

  if(years.classList.contains('selection_closed'))
  {
    years.innerHTML = `        
      <div id="buttonGrid">
        <button id="year2023" class="buttons">2023</button>
        <button id="year2022" class="buttons">2022</button>
        <button id="year2021" class="buttons">2021</button>
        <button id="year2020" class="buttons">2020</button>
        <button id="year2019" class="buttons">2019</button>
        <button id="year2018" class="buttons">2018</button>
        <button id="year2017" class="buttons">2017</button>
        <button id="year2016" class="buttons">2016</button>
        <button id="year2015" class="buttons">2015</button>
        <button id="year2014" class="buttons">2014</button>
        <button id="year2013" class="buttons">2013</button>
        <button id="year2012" class="buttons">2012</button>
      </div>`;

    years.classList.remove('selection_closed');
  }
});
