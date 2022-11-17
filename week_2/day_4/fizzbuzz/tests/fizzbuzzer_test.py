import unittest
from modules.fizzbuzzer import *

class FizzbuzzTest(unittest.TestCase):
    
    def test_number_divisible_by_3(self):
        input = 9
        expected_output = "Fizz"
        self.assertEqual(expected_output, fizzbuzz(input))

    def test_number_divisible_by_5(self):
        input = 10
        expected_output = "Buzz"
        actual_output = fizzbuzz(input)
        self.assertEqual(expected_output, actual_output)

    def test_number_divisible_by_5_and_3(self):
        input = 15
        expected_output = "Fizzbuzz"
        actual_output = fizzbuzz(input)
        self.assertEqual(expected_output, actual_output)
    
    def test_number_not_divisible_by_5_or_3(self):
        input = 11
        expected_output = "11"
        actual_output = fizzbuzz(input)
        self.assertEqual(expected_output, actual_output)


    
