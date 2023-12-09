export default async function ({ searchTerm }) {
  const url =
    'https://postapp.cac.gov.ng/postapp/api/front-office/search/company-business-name-it';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({ searchTerm }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(jsonData => jsonData)
    .catch(err => err);
}
