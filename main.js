(function(){

  var width = window.innerWidth,
  height = window.innerHeight;

  // scene

  var scene = new THREE.Scene();

  // mesh

  var geometry = new THREE.SphereGeometry( .1, 60, 40 );
  geometry.scale( - 1, 1, 1 );

  var material = new THREE.MeshBasicMaterial( {
    map: THREE.ImageUtils.loadTexture('/tmp/view360.jpg')
  } );

  sphere = new THREE.Mesh( geometry, material );
  scene.add( sphere );

  // camera

  var camera = new THREE.PerspectiveCamera(75, width / height, 0.0001, 1000);
  camera.position.set(0,0,0.1);
  camera.lookAt(sphere.position);

  // helper

  var axis = new THREE.AxisHelper(1000);
  axis.position.set(0,0,0);
  scene.add(axis);

  // event
  window.addEventListener('resize', function() {
    w = window.innerWidth;
    h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = aspect = w / h;
    camera.updateProjectionMatrix();
  }, false);

  // render

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width,height);
  renderer.setClearColor({color: 0x000000});
  document.getElementById('stage').appendChild(renderer.domElement);
  renderer.render(scene,camera);

  // control

  var controls = new THREE.OrbitControls(camera,renderer.domElement);

  function render(){
    requestAnimationFrame(render);
    // sphere.rotation.y += 0.05 * Math.PI/180;
    // //画面リサイズ対応
    // window.addEventListener( 'resize', onWindowResize, false );
    renderer.render(scene,camera);
    controls.update();
  }
  render();


  // function onWindowResize() {
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize( window.innerWidth, window.innerHeight );
  // }


})();
