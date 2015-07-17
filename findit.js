// JavaScript Document
var onFailSoHard = function(e)
    {
            console.log('failed',e);
    }

    window.URL = window.URL || window.webkitURL ;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

    var video = document.querySelector('video');

    if(navigator.getUserMedia)
    {
        navigator.getUserMedia({video: true},function(stream) {
        video.src = window.URL.createObjectURL(stream);
        },onFailSoHard);
    }

    document.getElementById('snapshot').onclick = function() { 
        var canvas = document.getElementById('canvas'); 
        var ctx = canvas.getContext('2d'); 
        ctx.drawImage(video,0,0); 
    }