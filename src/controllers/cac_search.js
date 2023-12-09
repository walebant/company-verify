export default async function ({ searchTerm }) {
  const url =
    'https://postapp.cac.gov.ng/postapp/api/front-office/search/company-business-name-it';

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ searchTerm }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data;
}
