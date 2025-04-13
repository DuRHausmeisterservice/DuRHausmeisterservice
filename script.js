document.getElementById('kontaktformular').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
    this.reset();
  });
  