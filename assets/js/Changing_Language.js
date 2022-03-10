var click = $(".change");
var lan = document.getElementById("language");
var intro = $("#intro p");
var hiding = $(".hide a");
var introv1 = $("#intro");

hiding.click( () => {
    click.fadeOut();
})

$(".close").click( () => {
    click.fadeIn();
});

function Change(){
    if (lan.innerHTML === 'MK'){
        lan.innerHTML = 'EN';
        intro.text('Здраво, јас се викам Сашка, имам 37 години од Македонија, Скопје. Работеше во ДГ БЕТОН - СКОПЈЕ работеше повеќе од 7 години во ереа внатрешен дизајн, работеше и онлајн. Заврши Градежен факултет.')
    }
    else if (lan.innerHTML === 'EN'){
        lan.innerHTML = 'MK';
        intro.text("Hello my name is Sashka I'm 37 years old from Macedonia, Skopje. Worked in DG BETON - SKOPJE worked over 7 years in the erea interior design, worked also online as well. Finished Faculty of Civil Engineering.")

    }
}