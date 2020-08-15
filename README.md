# CLEAN CODE and S.O.L.I.D structure with nodejs and typescript

SOLID is an Acronym criated by [Michael Feathers](https://twitter.com/mfeathers) to describe the five
design patters most discussed these days

- S: Single-responsibility principle
- O: Open–closed principle
- L: Liskov substitution principle
- I: Interface segregation principle
- D: Dependency inversion principle

### Single-responsibility principle: A class should only have a single responsibility, that is, only changes to one part of the software's specification

should be able to affect the specification of the class.
Ps: the SRP is also applicable for functions and methods.

**Example:**

```typescript
class UserRepository {
  createUserIfNotExists(user: User) {}
}
class CreateUserController {
  exec(user: User) {}
}
class UserScore {
  score(user: User) {}
}
```

### Open–closed principle: "Software entities should be open for extension, but closed for modification."

**Example:**

```typescript
interface PaymentMethod {}
class CreditCard implements PaymentMethod {}
class Boleto implements PaymentMethod {}
```

### Liskov substitution principle: "Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."

Examples of principle violation:

- Implements a method that does nothing
- Throw a inexpected exeption
- Retorn diferent values

**Example:**

```typescript
class PaymentMethod {}
class creditCard extends PaymentMethod {}
class Checkout {
  constructor(payment: PaymentMethod) {}
}
const creditCard = new CreditCard();
const checkout = new Checkout(creditCard); //No Errors
```

### Interface segregation principle: "Many client-specific interfaces are better than one general-purpose interface."

**Example:**

```typescript
class PaymentMethod {}

class EletronicPayment extends PaymentMethod {}
class CashPayment extends PaymentMethod {}

class CreditCard extends EletronicPayment {}
class Boleto extends CashPayment {}
```

This prevents the "Boleto" class from unnecessarily implementing things like: interest or installments

### Dependency inversion principle: One should "depend upon abstractions, not concretions."

```typescript
class MasterCard implements IPaymentMethod {}
class Checkout {
  constructor(paymentMethod: IPaymentMethod) {}
}

const creditCard = new MasterCard();
const checkout = new Checkout(creditCard);
```
