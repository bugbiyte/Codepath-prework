const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

function getAccountById (id)
{
	for (const account of accounts)
	{
		if (account.id === id) //triple equals === is used to check for strict equality
		{
			return account;
		}
	}
}
// ✅ Creates a new account with balance as a NUMBER
function createAccount(newAccountId, newAccountOwner) {
	accounts.push({
		id: newAccountId,
		owner: newAccountOwner,
		balance: 0 // now a number
	});
}

// ✅ Deposits money into account
function depositMoney(accountId, amount) {
	const account = getAccountById(accountId);

	if (!account) {
		throw new Error("Account not found");
	}

	if (!Number.isFinite(amount) || amount < 0) {
		throw new Error("Invalid deposit amount");
	}

	account.balance += amount;
}
// ✅ Withdraws money but checks if you have enough
function withdrawMoney(accountId, amount) {
	const account = getAccountById(accountId);

	if (!account) {
		throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount) || amount < 0) {
		throw new Error("Invalid withdrawal amount");
	}

	if (amount > account.balance) {
		throw new Error("Insufficient funds.");
	}

	account.balance -= amount;
}
// ✅ Transfers money with full checks
function transferMoney(fromAccountId, toAccountId, amount) {
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount) {
		throw new Error("Source account not found.");
	}

	if (!toAccount) {
		throw new Error("Target account not found.");
	}

	if (!Number.isFinite(amount) || amount < 0) {
		throw new Error("Invalid transfer amount");
	}

	if (amount > fromAccount.balance) {
		throw new Error("Insufficient funds in source account.");
	}

	fromAccount.balance -= amount;
	toAccount.balance += amount;
}