window.onload = function(){
    var img = this.document.querySelectorAll('.imgBox img');
    var loadDiv = this.document.querySelector('.load');
    for(var i=0;i<img.length;i++){
        img[i].index = i;
        img[i].onmouseover = function(){
            img[0].src = this.src.replace('small','big');
            loadDiv.style.display = 'block';
            this.complete?loadDiv.style.display = 'none':(img[0].onload = function()
            {loadDiv.style.display = 'none'});
        }
    }
}