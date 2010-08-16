var LatteX = {
	containerElement: null,
	
	generateToc: function(container) {
		var toc_div = $('#'+container);
		var topics = $('h2');
		var ol_element = $('<ol/>');
		
		$.each(topics, function(i, n) {
			var chapter = i + 1;
			var item = $('<li><a href="#'+chapter+'">'+n.textContent+'</a></li>');
			ol_element.append(item);
		});
	
		toc_div.append(ol_element);
		
		this.containerElement = toc_div;
	},
	
	showToc: function() {
		this.containerElement.show();
	},
	
	numberHeadings: function() {
    var chapter = 0;
    var section = 0;
    var subsection = 0;

    var currentElement = document.getElementsByTagName("h1")[0];
    
    while ( currentElement != null ) {
      
      if (!currentElement.style.display) {              
        switch (currentElement.nodeName) {
          case "H2":
            chapter++;
            section = 0;
            subsection = 0;

            formatted = '' + chapter;
            currentElement.textContent = formatted + ' ' + currentElement.textContent;
            currentElement.id = formatted;
            break;
      
          case "H3":
            section++;
            subsection = 0;

            formatted = '' + chapter + '.' + section;
            currentElement.textContent = formatted + ' ' + currentElement.textContent;   
            currentElement.id = formatted;
            break;
      
          case "H4":
            subsection++;

            formatted = '' + chapter + '.' + section + '.' + subsection;
            currentElement.textContent = formatted + ' ' + currentElement.textContent;
            currentElement.id = formatted;           
            break;
        }
      }
      

      do {
          currentElement = currentElement.nextSibling;
      } while (currentElement && currentElement.nodeType != 1);
        
    }
	
	}
}


window.onload = function() {
  if (typeof(langToHide) != "undefined")
    $(document).find('*[lang='+langToHide+']').css("display","none");
    
	LatteX.generateToc("toc");
	LatteX.numberHeadings();
	sh_highlightDocument();

	if ( typeof(Exercises) != "undefined") {
  	Exercises.countExercises();
  	Exercises.writeCounts();
  }
 
  
}
