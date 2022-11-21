def fizzbuzz(number):
    divisible_by_3 = number % 3 == 0 
    divisible_by_5 = number % 5 == 0

    if divisible_by_3 and divisible_by_5:
        return "Fizzbuzz"
    if divisible_by_3:
        return "Fizz"
    if divisible_by_5:
        return "Buzz"
    return f"{number}"