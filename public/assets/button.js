    require("sequelize");
    
    function addNew(event) {
        console.log('test')
        event.preventDefault()
     var value = document.getElementById("submit-btn")
     sequelize.query("UPDATE burgers WHERE name")
    }
