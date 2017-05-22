$(document).ready(function() {
  
$("button").each(function() {
  var bg = $(this).attr("bg");
  var border = $(this).attr("border");
  var color = $(this).attr("color");
  var radius = $(this).attr("radius");
  var pad = $(this).attr("pad");
  
  var hbg = $(this).attr("hbg");
  var hborder = $(this).attr("hborder");
  var hcolor = $(this).attr("hcolor");
  var hradius = $(this).attr("hradius");
  var hpad = $(this).attr("hpad");
  
  var abg = $(this).attr("abg");
  var aborder = $(this).attr("aborder");
  var acolor = $(this).attr("acolor");
  var aradius = $(this).attr("aradius");
  var apad = $(this).attr("apad");
 
  //if($(this).attr("bg")) {
     $(this).css("background", bg);
     $(this).on("mousedown", function() {
          if($(this).attr("abg")) {
          $(this).css("background", abg);
     } else {
                $(this).css("background", bg);
     }
     });
    $(this).on("mouseup", function() {
      if($(this).attr("hbg")) {
        $(this).css("background", hbg);
      } else {
        if($(this).attr("bg")) {
          $(this).css("background", bg);
        } else {
          $(this).css("background", "");
        }
      
      }
    });
     $(this).hover(function() {
       $(this).css("background", hbg);
     }, function() {
       $(this).css("background", bg);
     });
   
   //  }
  
  
  
 //  if($(this).attr("border")) {
     $(this).css("border-color", border);
     $(this).on("mousedown", function() {
          if($(this).attr("aborder")) {
          $(this).css("border-color", border);
     } else {
                $(this).css("border-color", border);
     }
     });
    $(this).on("mouseup", function() {
      if($(this).attr("hborder")) {
        $(this).css("border-color", hborder);
      } else {
        if($(this).attr("border")) {
          $(this).css("border-color", border);
        } else {
          $(this).css("border-color", "");
        }
      
      }
    });
     $(this).hover(function() {
       $(this).css("border-color", hborder);
     }, function() {
       $(this).css("border-color", border);
     });
   
    // }
  
 // if($(this).attr("color")) {
     $(this).css("color", color);
     $(this).on("mousedown", function() {
          if($(this).attr("acolor")) {
          $(this).css("color", acolor);
     } else {
                $(this).css("color", color);
     }
     });
    $(this).on("mouseup", function() {
      if($(this).attr("hcolor")) {
        $(this).css("color", hcolor);
      } else {
        if($(this).attr("color")) {
          $(this).css("color", color);
        } else {
          $(this).css("color", "");
        }
      
      }
    });
     $(this).hover(function() {
       $(this).css("color", hcolor);
     }, function() {
       $(this).css("color", color);
     });
   
   //  }
  
// if($(this).attr("radius")) {
     $(this).css("border-radius", radius);
     $(this).on("mousedown", function() {
          if($(this).attr("aradius")) {
          $(this).css("border-radius", aradius);
     } else {
                $(this).css("border-radius", radius);
     }
     });
   $(this).on("mouseup", function() {
      if($(this).attr("hradius")) {
        $(this).css("border-radius", hradius);
      } else {
        if($(this).attr("radius")) {
          $(this).css("border-radius", radius);
        } else {
          $(this).css("border-radius", "");
        }
      
      }
    });
     $(this).hover(function() {
       $(this).css("border-radius", hradius);
     }, function() {
       $(this).css("border-radius", radius);
     });
   
  //   }
  
//  if($(this).attr("pad")) {
     $(this).css("padding", pad);
     $(this).on("mousedown", function() {
          if($(this).attr("apad")) {
          $(this).css("padding", apad);
     } else {
                $(this).css("padding", pad);
     }
     });
    $(this).on("mouseup", function() {
      if($(this).attr("hpad")) {
        $(this).css("padding", hpad);
      } else {
        if($(this).attr("pad")) {
          $(this).css("padding", pad);
        } else {
          $(this).css("padding", "");
        }
      
      }
    });
     $(this).hover(function() {
       $(this).css("padding", hpad);
     }, function() {
       $(this).css("padding", pad);
     });
   
 //    }

  
  
});
  
});
