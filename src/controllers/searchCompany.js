export default async function (req, res) {
  const url =
    'https://postapp.cac.gov.ng/postapp/api/front-office/search/company-business-name-it';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({ searchTerm: req.query.name }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(jsonData => res.send(jsonData))
    .catch(err => {
      console.log(err);
      res.send(err);
    });
}

// RESPONSES
// No record found
// {
//     "status": "OK",
//     "success": true,
//     "errorCode": 0,
//     "data": null,
//     "message": "No Record Found!",
//     "timestamp": "2023-12-09 02:31:36"
// }

// // Record list
// {
//   "status": "OK",
//     "success": true,
//       "errorCode": 0,
//         "data": []
// }
