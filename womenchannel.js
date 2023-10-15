//master timeline, repeat infinite (-1), 0s delay between iteration
var master = new TimelineMax({repeat: -1, repeatDelay: 0});

//if waiting --> invisible, labels from Affinity Designer

//Active Channel Bar
master.set('.Active-Channel', {visibility : "hidden"})

//Direct Message Circle
master.set('.DM-1', {fill : "#ffffff", opacity: 0.37})
master.set('.DM-2', {fill : "#ffffff", opacity: 0.37})
master.set('.DM-3', {fill : "#ffffff", opacity: 0.37})
master.set('.DM-4', {fill : "#ffffff", opacity: 0.37})
master.set('.DM-5', {fill : "#ffffff", opacity: 0.37})
master.set('.DM-6', {fill : "#ffffff", opacity: 0.37})
master.set('.DM-7', {fill : "#ffffff", opacity: 0.37})

//top lines
master.set('.top-1', {visibility : "hidden"})
master.set('.top-2', {visibility : "hidden"})
master.set('.top-3', {visibility : "hidden"})
master.set('.top-4', {visibility : "hidden"})
master.set('.top-5', {visibility : "hidden"})

//bottom lines
master.set('.bottom-1', {visibility : "hidden"})
master.set('.bottom-2', {visibility : "hidden"})
master.set('.bottom-3', {visibility : "hidden"})
master.set('.bottom-4', {visibility : "hidden"})
master.set('.bottom-5', {visibility : "hidden"})

//avatars
master.set('.Avatar-1', {visibility : "hidden"})
master.set('.Avatar-2', {visibility : "hidden"})
master.set('.Avatar-3', {visibility : "hidden"})
master.set('.Avatar-4', {visibility : "hidden"})
master.set('.Avatar-5', {visibility : "hidden"})

//master timeline scenes
master.add(scene1(), "scene1")
master.add(scene2(), "scene2+=2")
master.timeScale(1.1)

//scene1 -> Direct Message Circles and Active Channel
function scene1 () {
  var subtimeline = new TimelineMax();
    //random number of DM users to be online
    var length = Math.floor((Math.random() * 7) + 1);
    //select random DM users to show as online
    for(var x = 0; x < length; x++ ) {
      var number = Math.floor((Math.random() * 7) + 1);
      switch(number) {
        case 1:
          master.to('.DM-1', 0.5, {fill : "#52B98C", opacity: 1})
          break;
        case 2:
         master.to('.DM-2', 0.5, {fill : "#52B98C", opacity: 1})
          break;
        case 3:
          master.to('.DM-3', 0.5, {fill : "#52B98C", opacity: 1})
          break;
        case 4:
          master.to('.DM-4', 0.5, {fill : "#52B98C", opacity: 1})
          break;
        case 5:
          master.to('.DM-5', 0.5, {fill : "#52B98C", opacity: 1})
          break;
        case 6:
          master.set('.DM-6', {fill : "#52B98C", opacity: 1})
          break;
        case 7:
          master.set('.DM-7', {fill : "#52B98C", opacity: 1})
          break;
                   }
    }
  
    master.set('.Active-Channel', {visibility : "visible"})
  master.fromTo('.Active-Channel', 0.5, {scaleX: 0}, {scaleX: 1.2})
  master.fromTo('.Active-Channel', 0.25, {scaleX: 1.2}, {scaleX: 1})
    
  return subtimeline;
}

//scene2 -> Avatar Blocks
function scene2 () {
  var subtimeline = new TimelineMax();
  
  //first avatar block appear
  master.set(".Avatar-1", {visibility: "visible"})
  master.from(".Avatar-1", 0.5, {y: -200})
  master.set(".top-1", {visibility: "visible"})
  master.fromTo(".top-1", 0.5, {scaleX: 0}, {scaleX: 1})
   master.set(".bottom-1", {visibility: "visible"}, "-=0.25")
  master.fromTo(".bottom-1", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25")
  
  //second avatar block appear and previous shifts 
  //set label
  subtimeline.add('shift1');  
  master.set(".Avatar-2", {visibility: "visible"}, "shift1")
  master.from(".Avatar-2", 0.5, {y: -200}, "shift1")
  master.to(".Avatar-1", 0.5, {y: 110}, "shift1") 
  master.to(".top-1", 0.5, {y: 110}, "shift1")
  master.to(".bottom-1", 0.5, {y: 110}, "shift1")
  master.set(".top-2", {visibility: "visible"})
  master.fromTo(".top-2", 0.5, {scaleX: 0}, {scaleX: 1})
   master.set(".bottom-2", {visibility: "visible"}, "-=0.25")
  master.fromTo(".bottom-2", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25")
  
  //third avatar block appear and previous shifts
  
  //set label
  subtimeline.add('shift2'); 
  
  master.set(".Avatar-3", {visibility: "visible"}, "shift2")
  master.from(".Avatar-3", 0.5, {y: -200}, "shift2")
  master.to(".Avatar-2", 0.5, {y: 110}, "shift2") 
  master.to(".Avatar-1", 0.5, {y: 220}, "shift2") 
  master.to(".top-1", 0.5, {y: 220}, "shift2")
  master.to(".bottom-1", 0.5, {y: 220}, "shift2")
  master.to(".top-2", 0.5, {y: 110}, "shift2")
  master.to(".bottom-2", 0.5, {y: 110}, "shift2")
  master.set(".top-3", {visibility: "visible"})
  master.fromTo(".top-3", 0.5, {scaleX: 0}, {scaleX: 1})
   master.set(".bottom-3", {visibility: "visible"}, "-=0.25")
  master.fromTo(".bottom-3", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25")
  
  //fourth avatar block appear and previous shifts
  
  //set label
  subtimeline.add('shift3'); 
  
  master.set(".Avatar-4", {visibility: "visible"}, "shift2")
  master.from(".Avatar-4", 0.5, {y: -200}, "shift3")
  master.to(".Avatar-3", 0.5, {y: 110}, "shift3") 
  master.to(".Avatar-2", 0.5, {y: 220}, "shift3") 
  master.to(".Avatar-1", 0.5, {y: 330}, "shift3") 
  master.to(".top-1", 0.5, {y: 330}, "shift3")
  master.to(".bottom-1", 0.5, {y: 330}, "shift3")
  master.to(".top-2", 0.5, {y: 220}, "shift3")
  master.to(".bottom-2", 0.5, {y: 220}, "shift3")
  master.to(".top-3", 0.5, {y: 110}, "shift3")
  master.to(".bottom-3", 0.5, {y: 110}, "shift3")
  master.set(".top-4", {visibility: "visible"})
  master.fromTo(".top-4", 0.5, {scaleX: 0}, {scaleX: 1})
   master.set(".bottom-4", {visibility: "visible"}, "-=0.25")
  master.fromTo(".bottom-4", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25")
  
  //fourth avatar block appear and previous shifts
  
  //set label
  subtimeline.add('shift4'); 
  
  master.set(".Avatar-5", {visibility: "visible"}, "shift2")
  master.from(".Avatar-5", 0.5, {y: -200}, "shift4")
  master.to(".Avatar-4", 0.5, {y: 110}, "shift4") 
  master.to(".Avatar-3", 0.5, {y: 220}, "shift4") 
  master.to(".Avatar-2", 0.5, {y: 330}, "shift4") 
  master.to(".Avatar-1", 0.5, {y: 440}, "shift4") 
  master.to(".top-1", 0.5, {y: 440}, "shift4")
  master.to(".bottom-1", 0.5, {y: 440}, "shift4")
  master.to(".top-2", 0.5, {y: 330}, "shift4")
  master.to(".bottom-2", 0.5, {y: 330}, "shift4")
  master.to(".top-3", 0.5, {y: 220}, "shift4")
  master.to(".bottom-3", 0.5, {y: 220}, "shift4")
  master.to(".top-4", 0.5, {y: 110}, "shift4")
  master.to(".bottom-4", 0.5, {y: 110}, "shift4")
  master.set(".top-5", {visibility: "visible"})
  master.fromTo(".top-5", 0.5, {scaleX: 0}, {scaleX: 1})
   master.set(".bottom-5", {visibility: "visible"}, "-=0.25")
  master.fromTo(".bottom-5", 0.5, {scaleX: 0}, {scaleX: 1}, "-=0.25")
  
  return subtimeline;
}