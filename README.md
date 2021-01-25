# A Bank Application with the following stacks:-
1. Frontend Stack- React,ChakraUI,Enzyme,Jest,Axios
2. Backend Stack - Node, Express,Jest,Supertest.
<br/>
You need to the following test users to access the functionality of this application.<br/>
<br/>
Test Users of this bank are as follows:-<br/>
1. Stewie Griffin(stewie_griffin@gmail.com)<br/>
2. Glenn Quagmire(glenn_quagmire@gmail.com)<br/>
3. Joe Swanson(joe_swanson@gmail.com)<br/>
4. Peter Griffin(peter_griffin@gmail.com)<br/>
5. Lois Griffin(lois_griffin@gmail.com)<br/>

Follwing are the test scenarios that can be used to test application:-<br/>
<b>Case 1</b>: Customer: Stewie Griffin Customer ID: 777 Account Number: 1234 Initial Balance for account
number 1234: $100.00 CAD <br/>
Stewie Griffin deposits $300.00 USD to account number 1234.<br/>
<b>Case 2</b>: Customer: Glenn Quagmire Customer ID: 504 Account Number: 2001 Initial balance for
account number 2001: $35,000.00 CAD
Glenn Quagmire withdraws $5,000.00 MXN from account number 2001. Glenn Quagmire withdraws
$12,500.00 USD from account number 2001. Glenn Quagmire deposits $300.00 CAD to account number
2001.<br/>
<b>Case 3</b>: Customer: Joe Swanson Customer ID: 002
Account Number: 1010 Initial balance for account number 1010: $7,425.00 CAD
Customer: Joe Swanson Customer ID: 002 Account Number: 5500 Initial balance for account number
5500: $15,000.00 CAD
Joe Swanson withdraws $5,000.00 CAD from account number 5500. Joe Swanson transfers $7,300.00
CAD from account number 1010 to account number 5500. Joe Swanson deposits $13,726.00 MXN to
account number 1010.<br/>
<b>Case 4</b>: Customer: Peter Griffin Customer ID: 123 Account Number: 0123 Initial balance for account
number 0123: $150.00 CAD
Customer: Lois Griffin Customer ID: 456 Account Number: 0456 Initial balance for account number 0456:
$65,000.00 CAD
Peter Griffin withdraws $70.00 USD from account number 0123. Lois Griffin deposits $23,789.00 USD to
account number 0456. Lois Griffin transfers $23.75 CAD from account number 0456 to Peter Griffin
(account number 0123).<br/>

<b>Case 5</b>: Customer: Joe Swanson Customer ID: 002 Account Number: 1010 Initial balance for account
number 1010: $7,425.00 CAD
Famous social engineer and thief John Shark (Customer ID 219) attempts to withdraw $100 USD from
account 1010. The bank determines that the account is not John’s and refuses to give him the money.
Optional: The bank notifies Joe Swanson that an unauthorized user attempted to withdraw money.<br/>

Output 1: Account Number: 1234 Balance: $700.00 CAD<br/>
Output 2: Account Number: 2001 Balance: $9,800 CAD<br/>
Output 3: Account Number: 1010 Balance: $1,497.60 CAD Account Number: 5500 Balance: $17,300.00
CAD<br/>

Output 4: Account Number: 0123 Balance: $33.75 CAD Account Number: 0456 Balance: $112,554.25
CAD<br/>
Output 5: Account Number: 1010 Balance: $7,425.00 CAD<br/>
