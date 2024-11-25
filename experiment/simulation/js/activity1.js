let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Hydrostatic force on Triangular plate</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <img src="./images/sim1.png" style='width: 30%;' alt="" srcset="">
      <br>
      <br>
      <p style="text-align:left;">
         Density of the liquid is 900kg/m<sup>3</sup>.
      </p>
      <p style="text-align:left;">
         The upper edge of triangular plate coincides with liquid surface.
      </p>
      <p style="text-align:left;">
         Find the position of the centre of pressure.
      </p>
      <br>
      <div class="row justify-content-center ">
         <p class="col-md-3">
            h = ${h} m
         </p>
         <p class="col-md-3">
            b = ${b} m
         </p>
      </div>
      <div id="act1-a-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ A = \\frac{b \× h}{2} =$$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-a-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_a_a1();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function internal_calculation1() {
    b = 0;
    h = 0;
    a_a1 = 0;
    h_bar_a1 = 0;
    h_star_a1 = 0;
    f_a1 = 0;
    Ig_a1 = 0;
    h = parseFloat(random(3, 5).toFixed(1));
    b = h;
    a_a1 = parseFloat(((b * h) / 2).toFixed(3));
    h_bar_a1 = parseFloat((h / 3).toFixed(3));
    f_a1 = parseFloat((900 * g * a_a1 * h_bar_a1).toFixed(3));
    Ig_a1 = parseFloat(((b * Math.pow(h, 3)) / 36).toFixed(3));
    h_star_a1 = parseFloat((Ig_a1 / (a_a1 * h_bar_a1) + h_bar_a1).toFixed(3));
    console.log(h, b);
}
function verify_a_a1() {
    let inp = (document.getElementById('act1-a-inp'));
    console.log(a_a1);
    if (!verify_values(parseFloat(inp.value), a_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-a-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            A = \\frac{b \× h}{2} = ${a_a1} \\ m^2
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn5" onclick='load_h_bar_div_a1();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_h_bar_div_a1() {
    let btn = (document.getElementById('act1-btn5'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <div id="act1-h-bar-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$ \\bar{h} = \\frac{h}{3} =$$
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act1-h-bar-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_h_bar_a1();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_h_bar_a1() {
    let inp = (document.getElementById('act1-h-bar-inp'));
    console.log(h_bar_a1);
    if (!verify_values(parseFloat(inp.value), h_bar_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-h-bar-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
      $$ \\bar{h} = \\frac{h}{3} = ${h_bar_a1} \\ m$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn1" onclick='load_total_pressure_force_a1();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_total_pressure_force_a1() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Total pressure force
      </p>
      <div id="act1-pressure-force">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  F = \ρgA\\bar{h} = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-f-inp' class='form-control fs-16px' /> <span style="display:contents;">N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_f_a1();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_f_a1() {
    let inp = (document.getElementById('act1-f-inp'));
    console.log(f_a1);
    if (!verify_values(parseFloat(inp.value), f_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-pressure-force'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ F = \ρgA\\bar{h} = ${f_a1} \\ N$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn2" onclick='load_inertia_div_a1();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_inertia_div_a1() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Moment of inertia about centre of gravity
      </p>
      <div id="act1-inertia-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  I_g = \\frac{bh^3}{36} =
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-i-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>4</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_i_a1();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_i_a1() {
    let inp = (document.getElementById('act1-i-inp'));
    console.log(Ig_a1);
    if (!verify_values(parseFloat(inp.value), Ig_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-inertia-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ I_g = \\frac{bh^3}{36} = ${Ig_a1} \\ m^4$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn3" onclick='load_depth_div_a1();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_depth_div_a1() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Depth of centre of pressure
      </p>
      <div id="act1-depth-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  h^* = \\frac{I_g}{A\\bar{h}} + \\bar{h} = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act1-h-star-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_depth_centre_of_pressure_a1();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_depth_centre_of_pressure_a1() {
    let inp = (document.getElementById('act1-h-star-inp'));
    console.log(h_star_a1);
    if (!verify_values(parseFloat(inp.value), h_star_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-depth-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ h^* = \\frac{I_g}{A\\bar{h}} + \\bar{h} = ${h_star_a1} \\ m$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act1-btn4" onclick='activity2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
activity1();
//# sourceMappingURL=activity1.js.map