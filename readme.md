Ghost.js
======================


```html
<script src="./node_modules/ikagaka.nar.js/node_modules/encoding-japanese/encoding.js"></script>
<script src="./node_modules/ikagaka.nar.js/vender/jszip.min.js"></script>
<script src="./node_modules/ikagaka.nar.js/vender/XHRProxy.min.js"></script>
<script src="./node_modules/ikagaka.nar.js/vender/WMDescript.js"></script>
<script src="./node_modules/ikagaka.nar.js/Nar.js"></script>
<script src="./node_modules/underscore/underscore-min.js"></script>
<script src="./Ghost.js"></script>
<script>
var nar = new Nar();
nar.loadFromURL("./vender/net.narazaka.miyopreview.nar", function (err){
  if(!!err) return console.error(err.stack);

  if(nar.install.type === "ghost"){
    var ghost = new Ghost(nar.tree["ghost"]["master"]);
  }else{
    throw new Error("wrong nar file")
  }

  ghost.load(function(err){
    if(!!err) return console.error(err.stack);

    console.log(ghost);

    ghost.request("GET SHIORI/3.0\r\nSender: Ikagaka\r\nID: OnBoot\r\n\r\n", function(err, response){
      if(!!err) return console.error(err.stack);

      console.log(response);
    });

  });
});
</script>
```