Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });
    var camara=document.getElementById("camara");
    Webcam.attach("#camara");
    function foto(){
        Webcam.snap(function(data_uri){
            document.getElementById("foto").innerHTML="<img src="+data_uri+" id='selfie'/>";
        });
    }
    console.log("version de ml5: ",ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lsMirPanX/model.json",modelch)
    function modelch(){
        console.log("el modelo esta listo");
    }
    function result(){
        var imagen=document.getElementById("selfie");
        classifier.classify(imagen,analisis);
    }
    function analisis(error,datos){
    if(error){
        console.log("error");
    }
    else{
        console.log(datos);
        document.getElementById("nombreobjeto").innerHTML=datos[0].label;
        document.getElementById("presicionobjeto").innerHTML=(datos[0].confidence/0.01).toFixed(2);
    }
    }