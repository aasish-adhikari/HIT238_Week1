// var waypoint = new Waypoint({
//   element: document.getElementById('skill'),
//   handler: function(direction){
//     // alert("works");
//   }
// });
typer('.heading')
  .cursor({
    block: true
  })
  .line('HELLO WORLD!')
  .line('I AM <span style="color:#E13C6E">AASISH</span>', {
    speed: 100,
    element: 'span'
  })
  .back(4)
  .pause(500)
  .continue('<span style="color:#E13C6E;margin:0 0 0 auto">CSH ADHIKARI.</span>', {
    element: 'span'
  })
  .end()
// ;
//
typer('.navbar')
  .pause(5000)
  .line('{')
  .line('  about: <span style="color:#F29B34"><a href="">me</a></span>;', {
    element: 'span',
    element: 'a'
  })
  .line()
  .continue('  know: <span style="color:#ABD745"><a href="#">\'my skills\'</a></span>,<span style="color:#F29B34"><a href="#"> education</a></span>;', {
    element: 'span',
    element: 'a',
  })
  .line('  get: contact;')
  .line('}')
  .end()
