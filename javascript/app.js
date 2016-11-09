$(document).ready(
  function()
  {
    var highlightedClassName = ' highlighted';
    var disabledClassName =  'disabled';

    $(".returnToCoverPage").click(function ReturnToCoverPageClick()
    {
      window.location='index.html';
    });

    function CurrentIndex()
    {
      var idx = 0;

      $( ".pagebutton" ).each(function( index, obj ) {
        if(obj.className.includes(highlightedClassName))
      	{
      		idx = index;
      	}
      });

      return idx;
    }

    function EnableButton()
    {
      var currentIndex = CurrentIndex();

      if(currentIndex == 0){
        $(".previous").prop("disabled", true)
        $(".previous").addClass(disabledClassName);
      }
      else {
        $(".previous").prop("disabled", false)
        $(".previous").removeClass(disabledClassName);
      }

      if(currentIndex == $( ".pagebutton" ).length-1){
        $(".next").prop("disabled", true)
        $(".next").addClass(disabledClassName);
      }
      else {
        $(".next").prop("disabled", false)
        $(".next").removeClass(disabledClassName);
      }
    }

    $(".pagebutton").click(function() {
      $("#mainimage").prop('src', 'images/max/' + this.name + '.bmp' );

      $( ".pagebutton" ).each(function( index, obj ) {
        obj.className = obj.className.replace(highlightedClassName, '');
      });

      this.className += highlightedClassName;

      EnableButton();

      $(window).scrollTop(0);
    })

    $(".previous").click(function() {

      var index = CurrentIndex();

      if(index > 0)
      {
      	--index;
      }

      $(".pagebutton")[index].click();

    });

    $(".next").click(function() {
      var index = CurrentIndex();

      if(index < $(".pagebutton").length-1)
      {
      	++index;
      }
      $(".pagebutton")[index].click();
    });

    EnableButton();
});
