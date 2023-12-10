# company-verify

Company verify is a Nodejs package that enables developers search and verify if a company is registered in Nigeria under the [Corporate Affairs Commission](https://www.cac.gov.ng) and also retrieve their taxpayer details from [Federal Inland Revenue Service](https://www.firs.gov.ng/)

<!-- [START usecases] -->

###### What can I do?

- Search for a list of companies with a search query

- Search taxpayer information by inputting company's RC number or TIN.

<!-- [END usecases] -->

<!-- [START getstarted] -->

## Getting Started

### Installing

#### Package manager

Using npm:

```bash
npm  i  company-verify
```

Using yarn:

```bash
yarn add  company-verify
```

### Usage

Once the package is installed, you can import the library using `import` or `require` approach:

```js
import { firs_search, cac_search } from 'company-verify';
```

or

```js
const { firs_search, cac_search } = require('company-verify');
```

### search for a company details on FIRS

```js

 /**
* @param {String}  criteria - RC or TIN
* @param {String}  query - RC number or TIN based on criteria
*/
async  function  getData()  {
	const  response  =  await  firs_search({ criteria:  "RC",  query:  "3067627"  });
	return  response;
}

//RESPONSES
//Success
{
	"success": true,
	"message": "",
	data: {
		"name": string,
		"tin": string,
		"rc": string,
		"jtbTIN": string,
		"taxOffice": string,
		"phone": string,
		"email": string
	}
}

//Not Found
{ "success": true,  message:  'Not found'}

//Incorrect criteria value
{ "success": false,  message:  `Invalid Criteria. Can either be "TIN" or "RC"`}
```

### search for a company on CAC

```js
 /**
* @param {String}  searchTerm - part or full name of company
*/
async  function  getData()  {
	const  response  =  await  cac_search({ searchTerm:  "dangote group"  })
	return  response;
}

//RESPONSES
//Success
{
	"status": "OK",
	"success": boolean,
	"errorCode": Number,
	"data": [
		{
			"active": boolean,
			"email": string | null,
			"natureOfBusinessName": string,
			"id": Number,
			"approvedName": string,
			"rcNumber": string,
			"city": string,
			"lga": string | null,
			"classification": string,
			"registrationApproved": boolean,
			"branchAddress": string,
			"registrationDate": Date,
			"classificationId": Number,
			"headOfficeAddress": string | null,
			"businessCommencementDate": string | null,
			"objectives": string,
			"delistingStatus": string | null,
			"companyTypeName": string,
			"searchScore": float,
			"address": string",
			"state": string
		},
	],
	"message": "See Data Object for Details",
	"timestamp": Date
}
```
