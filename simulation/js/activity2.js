function activity2() {
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' id='act2-div'>
      <h3>Activity 2</h3>
      <p style="text-align:left;">
         Find the position of centre of pressure if upper edge of triangular plate is below 2m from the free surface of the liquid.
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
      <div id="act2-a-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$ A = \\frac{b \× h}{2} =$$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-a-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_a_a2();'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function internal_calculation2() {
    a_a2 = 0;
    h_bar_a2 = 0;
    h_star_a2 = 0;
    f_a2 = 0;
    Ig_a2 = 0;
    a_a2 = parseFloat(((b * h) / 2).toFixed(3));
    h_bar_a2 = parseFloat((2 + h / 3).toFixed(3));
    f_a2 = parseFloat((900 * g * a_a2 * h_bar_a2).toFixed(3));
    Ig_a2 = parseFloat(((b * Math.pow(h, 3)) / 36).toFixed(3));
    h_star_a2 = parseFloat((Ig_a2 / (a_a2 * h_bar_a2) + h_bar_a2).toFixed(3));
}
function verify_a_a2() {
    let inp = (document.getElementById('act2-a-inp'));
    console.log(a_a2);
    if (!verify_values(parseFloat(inp.value), a_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-a-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$
            A = \\frac{b \× h}{2} = ${a_a2} \\ m^2
         $$
      </p>
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn5" onclick='load_h_bar_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_h_bar_div_a2() {
    let btn = (document.getElementById('act2-btn5'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <div id="act2-h-bar-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-3">
            $$ \\bar{h} = 2 + \\frac{h}{3}  =$$ 
         </div>
         <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
            <input type='number' style="margin:0 5px; width:70%" id='act2-h-bar-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='verify_h_bar_a2();'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_h_bar_a2() {
    let inp = (document.getElementById('act2-h-bar-inp'));
    console.log(h_bar_a2);
    if (!verify_values(parseFloat(inp.value), h_bar_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-h-bar-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
      $$ \\bar{h} = 2 + \\frac{h}{3}= ${h_bar_a2} \\ m$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn1" onclick='load_total_pressure_force_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_total_pressure_force_a2() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Total pressure force
      </p>
      <div id="act2-pressure-force">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  F = \ρgA\\bar{h} = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-f-inp' class='form-control fs-16px' /> <span style="display:contents;">N</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_f_a2();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_f_a2() {
    let inp = (document.getElementById('act2-f-inp'));
    console.log(f_a2);
    if (!verify_values(parseFloat(inp.value), f_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-pressure-force'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ F = \ρgA\\bar{h} = ${parseFloat(f_a2.toFixed(3))} \\ N$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn2" onclick='load_inertia_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_inertia_div_a2() {
    let btn = (document.getElementById('act2-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Moment of inertia about centre of gravity
      </p>
      <div id="act2-inertia-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  I_g = \\frac{bh^3}{36} =
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-i-inp' class='form-control fs-16px' /> <span style="display:contents;">m<sup>4</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_i_a2();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_i_a2() {
    let inp = (document.getElementById('act2-i-inp'));
    console.log(Ig_a2);
    if (!verify_values(parseFloat(inp.value), Ig_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-inertia-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ I_g = \\frac{bh^3}{36} = ${parseFloat(Ig_a2.toFixed(3))} \\ m^4$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn3" onclick='load_depth_div_a2();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function load_depth_div_a2() {
    let btn = (document.getElementById('act2-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act2-div'));
    div.innerHTML += `
   <br>
   <div>
      <p style="text-align:left;">
         Depth of centre of pressure
      </p>
      <div id="act2-depth-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$
                  h^* = \\frac{I_g}{A\\bar{h}} + \\bar{h} = 
               $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input type='number' style="margin:0 5px; width:70%" id='act2-h-star-inp' class='form-control fs-16px' /> <span style="display:contents;">m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='verify_depth_centre_of_pressure_a2();'>Verify</button>
      </div>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_depth_centre_of_pressure_a2() {
    let inp = (document.getElementById('act2-h-star-inp'));
    console.log(h_star_a2);
    if (!verify_values(parseFloat(inp.value), h_star_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-depth-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$ h^* = \\frac{I_g}{A\\bar{h}} + \\bar{h} = ${parseFloat(h_star_a2.toFixed(3))} \\ m$$ 
      </p>
      
      <br>
      <button class='btn btn-info btn-sm std-btn' id="act2-btn4" onclick='exp_complete();'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function exp_complete() {
    let btn = (document.getElementById('act2-btn4'));
    btn && btn.remove();
    alert('Experiment Completed');
}
// activity2();
//# sourceMappingURL=activity2.js.map