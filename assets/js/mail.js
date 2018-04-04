$.ajax({
  type: “POST”,
  url: “https://mandrillapp.com/api/1.0/messages/send.json”,
  data: {
    ‘key’: ‘39ecbcd39cf5b7992b29a9c6b8fb0191-us18’,
    ‘message’: {
      ‘from_email’: ‘info@georgioghazzi.me’,
      ‘to’: [
          {
            ‘email’: ‘RECIPIENT_NO_1@EMAIL.HERE’,
            ‘name’: ‘RECIPIENT NAME (OPTIONAL)’,
            ‘type’: ‘to’
          },
          {
            ‘email’: ‘RECIPIENT_NO_2@EMAIL.HERE’,
            ‘name’: ‘ANOTHER RECIPIENT NAME (OPTIONAL)’,
            ‘type’: ‘to’
          }
        ],
      ‘autotext’: ‘true’,
      ‘subject’: ‘YOUR SUBJECT HERE!’,
      ‘html’: ‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 });