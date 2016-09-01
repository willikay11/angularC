<script>
function save(){
		// Check browser support
		if (typeof(Storage) !== "undefined") {
		    // Store
		    localStorage.setItem("lastname", "Smith");
		    alert("saved");
		    // Retrieve
		    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
		} else {
		    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
}
</script>