function a(){
    b();
}
function b(){
    c();
}
function c(){
    console.log("Function C")
}
function x(){
    y();
}
function y(){
    z();
}
function z(){
    console.log("Function Z")
}

setTimeout(x,0);
a();