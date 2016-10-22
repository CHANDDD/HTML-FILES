<html>
<head>
 <title></title>
 <script src="jquery-1.11.2.js"> </script>
 <script type="text/javascript">
  $(document).ready(function () {
	  $(this).on('contextmenu', function (e) {
		  e.preventDefault();
		  $('#divResult').append('Right click disabled<br/>') 
		  });
		  });
</script>

</head>

<body style="font-family:Arial"> 
<h3> Right click disabled on this page. Try to right click and see what happens </h3>
 <div id="divResult"></div>
</body>
</html>