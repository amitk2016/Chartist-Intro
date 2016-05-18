var data = {
 
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun'],

  series: [
    [5, 2, 4, 2,7 ,3,10]
  ]
};

var options = {
	lineSmooth: Chartist.Interpolation.cardinal({
    fillHoles: true,
  
  }),
	showArea: true
}

new Chartist.Line('.ct-chart', data,options);