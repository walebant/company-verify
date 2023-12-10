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
		"name": String,
		"tin": String,
		"rc": String,
		"jtbTIN": String,
		"taxOffice": String,
		"phone": String,
		"email": String
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
	"success": Boolean,
	"errorCode": Number,
	"data": [
		{
			"active": Boolean,
			"email": String | null,
			"natureOfBusinessName": String,
			"id": Number,
			"approvedName": String,
			"rcNumber": String,
			"city": String,
			"lga": String | null,
			"classification": String,
			"registrationApproved": boolean,
			"branchAddress": String,
			"registrationDate": Date,
			"classificationId": Number,
			"headOfficeAddress": String | null,
			"businessCommencementDate": String | null,
			"objectives": String,
			"delistingStatus": String | null,
			"companyTypeName": String,
			"searchScore": Float,
			"address": String",
			"state": String
		},
	],
	"message": "See Data Object for Details",
	"timestamp": Date
}
```
