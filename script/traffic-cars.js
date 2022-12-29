(function() {     // function expression closure to contain variables
    let i = 0;
    var vertical = [ "../imagini/green-traffic-car.png", "../imagini/yellow-trafic-car.png", "../imagini/red-traffic-car.png", "../imagini/yellow-trafic-car.png" ];
    var horizontal = [ "../imagini/red-traffic-car.png", "../imagini/yellow-trafic-car.png", "../imagini/green-traffic-car.png", "../imagini/yellow-trafic-car.png" ];
    var v_left = document.getElementById('light-vertical-left');
    var v_right = document.getElementById('light-vertical-right');
    var h_left = document.getElementById('light-horizontal-left');
    var h_right = document.getElementById('light-horizontal-right');

    function toggle() {
        v_left.src = vertical[i];   
        v_right.src = vertical[i]; 
        h_left.src=horizontal[i];
        h_right.src=horizontal[i];        // set the image
        i = (i + 1) % vertical.length;  // update the counter
    }
    toggle()
    setInterval(toggle, 3000);
    
    
})();             // invoke the function expression

/*(function(){
    var i=0; 
    var intermitent_img= []; 
    var intermitent = document.getElementById('intermitent');
    function toggle(){
        intermitent.src=intermitent_img[i]; 
        i=(i+1)%intermitent_img.length; 
    }
    toggle() 
    setInterval(toggle, 2000)
}

)();*/