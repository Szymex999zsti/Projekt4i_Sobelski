$(document).ready(function() {
    $("#praktykiForm").submit(function(event) {
      event.preventDefault();
  
      var dataPraktyk = $("#dataPraktyk").val();
      var dzialPraktyk = $("#dzialPraktyk").val();
      var opisDnia = $("#opisDnia").val();
  
      var danePraktykHTML = "<p><strong>Data praktyk:</strong> " + dataPraktyk + "</p>" +
                            "<p><strong>Dział praktyk:</strong> " + dzialPraktyk + "</p>" +
                            "<p><strong>Opis dnia:</strong> " + opisDnia + "</p>";
  
      
      $("#danePraktyk").append(danePraktykHTML);
  
      
      $("#praktykiForm")[0].reset();
    });
  });

