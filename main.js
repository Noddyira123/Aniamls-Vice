function startClassification()
 { navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/NJTCRV9hP/model.json', { probabilityThreshold: 0.7 } ,modelReady); }