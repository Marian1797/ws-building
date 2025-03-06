document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll',function(){
        if(this.window.scrollY > 250){
            document.getElementById('navbar_top').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeifht;
            document.body.style.paddingTop= navbar_height + 'px';
        }else{
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
        }
    });
});