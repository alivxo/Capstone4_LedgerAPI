<div align="center">

# Ledger API 
  
</div>

<p>
  Welcome to the Ledger API repository! This project is a comprehensive Java-based application designed to allow users to keep track of their finances.

  ### Table of Contents
  
* [Features](https://github.com/sekwanaa/Capstone4_LedgerAPI#features)
* [A look into the application](https://github.com/sekwanaa/Capstone4_LedgerAPI#a-look-into-the-application)
* [Check out the website!](https://github.com/sekwanaa/Capstone4_LedgerAPI#checkout-the-website)
  
### Features
* Login / Register
	* Using SpringBoot JWT security, we are able to store users in the database with a hashed password.
* Filtering Entries
	* Using modules created from the front end, the API interacts with the database to retrieve relevant products.
		* Filter by Min Price
		* Filter by Max Price
    * Filter by Custom Reports
		  * Filter by Previous Year
      * YTD
      * Previous Month
      * MTD
* Creating / Deleting Entries
	* Users are able to add new entries and delete entries.

### A Look Into the Application

###### File Structure / LedgerApplication.java
![image](https://github.com/user-attachments/assets/3963b704-c78e-482f-8814-3e7d0a36a5c4)

###### SpringBoot AppConfig
![image](https://github.com/user-attachments/assets/31244ee7-9bf8-47c8-b574-a49cda622c42)

###### Application.js
![image](https://github.com/user-attachments/assets/378a5fa0-6c68-4f3e-8ad7-db0d0db92502)

<details>

<summary>
  
  ### Checkout the website!
  
</summary
  
### Home page logged in
> After logging in, a user is able to view entries unique to them

![image](https://github.com/user-attachments/assets/69eecbfc-809f-41af-8693-0079ec36b5b3)

### Using Filter
> User's entries after filtering

![image](https://github.com/user-attachments/assets/ee07fb4f-e52f-4807-9080-d9070386be17)

### Creating a New Entry
> Creating a new entry

![image](https://github.com/user-attachments/assets/2e203762-ca38-4876-aaa5-2a8ecfd15280)

### File Structure / index.html
![image](https://github.com/user-attachments/assets/d1db18b2-e260-4b29-984f-affc5c0c0c41)

</details>


