import jsdom from 'jsdom';
const { JSDOM } = jsdom;

export default async function ({ criteria, query }) {
  // criteria = RC or TIN
  // query = 3067627
  const url = 'https://apps.firs.gov.ng/tinverification/';

  const body = new FormData();
  body.set(
    '__VIEWSTATE',
    'qJ2xRdBFeINUUH5hWaiR1vxoZfq2nmn7zBtE5a8XpWSGUWkbKocJhqAvmQabrmGe4sepcq/K1wrHCWq/Go5QENcVjlecpkw8XcQdoVq7gXzjOv6vaMIJu0iCVG0Pc7gENRkbVvtNlTM1lo+ri8lFJw=='
  );
  body.set('__VIEWSTATEGENERATOR', 'DD5816B4');
  body.set(
    '__EVENTVALIDATION',
    '0ziF49K8xm141M+RRTy+tlkPzxOz2PyyPPf7mP0gPPqE/w5pU6FzD/q3zt+Nwqff+ry/eyUSIvNO1EdH6m71lU56GodocO387XLNLxvAJ1RhLhOJmWycuORcmMmsU9+Ju+w9ahqPri1H84yhEqVifRGtc9/pS5CwTHlEywIzI6xueTTxGt4wTKzWjYERGTXkdZdzp6VeZ3MVO6ofEdPVfD3O9IATC/LfPHF4Ml6P+HM='
  );
  body.set('DropDownList1', criteria);
  body.set('TextBox1', query);
  body.set('Button1', 'Search');

  if (criteria !== 'RC' || criteria !== 'TIN') {
    return { error: 'Criteria can either be TIN or RC' };
  }

  const fetchResponse = await fetch(url, {
    method: 'POST',
    body,
  });
  const raw = await fetchResponse.text();
  const dom = new JSDOM(raw);
  const doc = dom.window.document;

  // handle error
  if (doc.querySelector('span[id=Alert1]')) {
    return { error: 'Not found' };
  } else {
    const name = doc.querySelector('input[name=txtName]').value;
    const tin = doc.querySelector('input[name=txtTIN]').value;
    const rc = doc.querySelector('input[name=txtRC]').value;
    const jtbTIN = doc.querySelector('input[name=txtJTB]').value;
    const taxOffice = doc.querySelector('input[name=txtTaxOffice]').value;
    const phone = doc.querySelector('input[name=txtPhone]').value;
    const email = doc.querySelector('input[name=txtEmail]').value;

    const data = { name, tin, rc, jtbTIN, taxOffice, phone, email };
    return data;
  }
}
